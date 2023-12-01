import { Component, Input } from '@angular/core';
import { Piatto } from '../../models/Piatto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tnv-menu-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  //@Input() piatto: Piatto | null = null;
  @Input() piatto!: Piatto;
}
