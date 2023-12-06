import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Piatto } from '../../models/Piatto';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'tnv-navbar',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public apiService: ApiService) {

  }
}
