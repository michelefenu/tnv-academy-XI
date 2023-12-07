import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Piatto } from '../../models/Piatto';
import { MenuSectionComponent } from '../menu-section/menu-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tnv-menu',
  standalone: true,
  imports: [CommonModule, MenuSectionComponent, HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnChanges {
  @Input() menu: Piatto[] = [];
  @Input() isAdminMode = false;
  
  piattiCategories: Piatto[][] = [];

  @Output() piattoSelected = new EventEmitter<string>();
  @Output() piattoDelete = new EventEmitter<string>();


  ngOnChanges() {
    console.log('on changes')
    // 1 - capire quali categorie diverse ci sono
    const categories = [...new Set(this.menu.map(x => x.category))];

    // 2 Ciclare le categorie per generare un tnv-section per ognuna
    this.piattiCategories = [];
    
    for(let category of categories) {
      this.piattiCategories.push(this.menu.filter(x => x.category === category))
    }
  }
  
  onPiattoSelected(piattoId: string) {
    this.piattoSelected.emit(piattoId);
  }

  onPiattoDelete(piattoId: string) {
    this.piattoDelete.emit(piattoId);
  }
}
