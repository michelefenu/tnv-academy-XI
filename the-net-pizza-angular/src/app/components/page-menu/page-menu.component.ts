import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'tnv-page-menu',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './page-menu.component.html',
  styleUrl: './page-menu.component.scss'
})
export class PageMenuComponent {
  constructor(public apiService: ApiService) {
    
  }
}
