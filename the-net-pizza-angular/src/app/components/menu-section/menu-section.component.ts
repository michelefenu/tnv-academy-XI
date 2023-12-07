import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { Piatto } from '../../models/Piatto';

@Component({
  selector: 'tnv-menu-section',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './menu-section.component.html',
  styleUrl: './menu-section.component.scss'
})
export class MenuSectionComponent {
  @Input() sectionTitle = '';
  @Input() sectionMenuItems: Piatto[] = [];
  @Input() isAdminMode = false;

  @Output() piattoSelected = new EventEmitter<string>();
  @Output() piattoDelete = new EventEmitter<string>();
  @Output() piattoEdit = new EventEmitter<Piatto>();

  onPiattoSelected(piattoId: string) {
    this.piattoSelected.emit(piattoId);
  }

  onPiattoDelete(piattoId: string) {
    this.piattoDelete.emit(piattoId);
  }

  onPiattoEdit(piatto: Piatto) {
    this.piattoEdit.emit(piatto);
  }

}
