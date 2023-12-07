import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Piatto } from '../../models/Piatto';
import { ApiService } from '../../services/api.service';
import { ConfigService } from '../../services/config.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tnv-navbar',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public apiService: ApiService, public configService: ConfigService) {

  }

  setAdminMode(value: boolean) {
    this.configService.isAdminMode = value;
  }
}
