import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Piatto } from '../../models/Piatto';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

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

  constructor(activatedRoute: ActivatedRoute, private apiService: ApiService, private router: Router) {
    this.piattoId = activatedRoute.snapshot.params['piattoId'] || '';
  }

  ngOnInit() {
    
      this.apiService.getMenuDetail(this.piattoId).subscribe({
        next: (response) => this.piatto = response,
        error: () => this.router.navigateByUrl('/menu')
      })
  }
}
