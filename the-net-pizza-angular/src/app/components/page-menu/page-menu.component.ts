import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ApiService } from '../../services/api.service';
import { Router, RouterModule } from '@angular/router';
import { EditPiattoComponent } from '../edit-piatto/edit-piatto.component';
import { Piatto } from '../../models/Piatto';

@Component({
  selector: 'tnv-page-menu',
  standalone: true,
  imports: [MenuComponent, EditPiattoComponent, RouterModule],
  templateUrl: './page-menu.component.html',
  styleUrl: './page-menu.component.scss'
})
export class PageMenuComponent {
  constructor(public apiService: ApiService, private router: Router) {
    
  }

  navigateToDetailPage(piattoId: string) {
    this.router.navigateByUrl(`/menu/${piattoId}`);
  }

  deletePiatto(piattoId: string) {
    this.apiService.deletePiatto(piattoId);
  }

  addPiatto(piatto: Piatto) {
    this.apiService.addPiatto(piatto);
  }
}
