import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Piatto } from '../../models/Piatto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'tnv-menu-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  //@Input() piatto: Piatto | null = null;
  @Input() piatto!: Piatto;

  @Output() piattoSelected = new EventEmitter<string>();
  @Output() piattoDelete = new EventEmitter<string>();

  onClick(piattoId: number) {
    this.piattoSelected.emit(`${piattoId}`);
  }

  onPiattoDelete(event: Event, piattoId: number) {
    event.stopPropagation();
    this.piattoDelete.emit(`${piattoId}`);
  }
}
