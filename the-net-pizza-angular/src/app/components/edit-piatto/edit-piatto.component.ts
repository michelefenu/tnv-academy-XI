import { Component, EventEmitter, Output } from '@angular/core';
import { Piatto } from '../../models/Piatto';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'tnv-edit-piatto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-piatto.component.html',
  styleUrl: './edit-piatto.component.scss'
})
export class EditPiattoComponent {
  @Output() addPiatto = new EventEmitter<Piatto>();

  onAddPiatto(form: NgForm) {
    this.addPiatto.emit(form.value);
  }
}
