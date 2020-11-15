import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  companies:any = [];

  constructor(  private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getCompanies().subscribe((data) => {this.companies = data;} );
  }

}
