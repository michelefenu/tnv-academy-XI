import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddPiattoDTO, Piatto } from '../models/Piatto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  menu: Piatto[] = [];

  constructor(private httpClient: HttpClient) {
    this.getMenu();
  }

  private getMenu() {
    this.httpClient.get<Piatto[]>('http://localhost:1234/api/piatti')
      .subscribe({
        next: (response) => this.menu = response
      });

    /*
  this.menu = await firstValueFrom(this.httpClient.get<Piatto[]>('https://my-json-server.typicode.com/michelefenu/tnv-academy-XI/piatti'))
    
   fetch('https://my-json-server.typicode.com/michelefenu/tnv-academy-XI/piatti')
    .then(res => res.json())
    .then(res => this.menu = res); */
  }

  getMenuDetail(piattoId: string | null) {
    return this.httpClient.get<Piatto>(`http://localhost:1234/api/piatti/${piattoId}`);
  }

  deletePiatto(piattoId: string) {
    this.httpClient.delete(`http://localhost:1234/api/piatti/${piattoId}`)
      .subscribe({
        next: (res) => this.menu = this.menu.filter(x => `${x.id}` !== piattoId),
        error: () => alert('error')
      })
  }

  addPiatto(piatto: Piatto) {
    this.httpClient.post<AddPiattoDTO>(`http://localhost:1234/api/piatti/`, piatto).subscribe({
      next: (response) => this.menu = [...this.menu, response.data],
      error: () => alert('error')
    })
  }
}
