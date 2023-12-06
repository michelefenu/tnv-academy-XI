import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Piatto } from '../models/Piatto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  menu: Piatto[] = [];

  constructor(private httpClient: HttpClient) {
    this.getMenu();
  }

  private getMenu() {
    this.httpClient.get<Piatto[]>('https://my-json-server.typicode.com/michelefenu/tnv-academy-XI/piatti')
      .subscribe({
        next: (response) => this.menu = response
      })
  }

  getMenuDetail(piattoId: string) {

  }
}
