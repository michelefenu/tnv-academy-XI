import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Piatto } from '../../models/Piatto';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'tnv-piatto-detail',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  templateUrl: './piatto-detail.component.html',
  styleUrl: './piatto-detail.component.scss'
})
export class PiattoDetailComponent implements OnInit {

  piatto: Piatto | undefined;
  private piattoId: string | null = null;

  constructor(activatedRoute: ActivatedRoute, private httpClient: HttpClient, private router: Router) {
    this.piattoId = activatedRoute.snapshot.params['piattoId'];
  }

  ngOnInit() {
    this.httpClient.get<Piatto>(`http://my-json-server.typicode.com/michelefenu/tnv-academy-XI/piatti/${this.piattoId}`)
      .subscribe({
        next: (response) => this.piatto = response,
        error: () => this.router.navigateByUrl('/menu')
      })
  }
}
