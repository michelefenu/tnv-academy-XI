import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnChanges } from '@angular/core';
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
  @Input() menu: Piatto[] = []
  
  piattiCategories: Piatto[][] = [];

  ngOnChanges() {
    // 1 - capire quali categorie diverse ci sono
    const categories = [...new Set(this.menu.map(x => x.category))];

    // 2 Ciclare le categorie per generare un tnv-section per ognuna
    for(let category of categories) {
      this.piattiCategories.push(this.menu.filter(x => x.category === category))
    }
  }
}
