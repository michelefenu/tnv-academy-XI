import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Piatto } from '../../models/Piatto';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tnv-edit-piatto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-piatto.component.html',
  styleUrl: './edit-piatto.component.scss'
})
export class EditPiattoComponent {
  @Input() piatto: Partial<Piatto> = {};

  @Output() addPiatto = new EventEmitter<Partial<Piatto>>();
  @Output() editPiatto = new EventEmitter<Partial<Piatto>>();

  onAddPiatto() {
    this.addPiatto.emit(this.piatto);
  }

  onEditPiatto() {
    this.editPiatto.emit(this.piatto);
  }
}
