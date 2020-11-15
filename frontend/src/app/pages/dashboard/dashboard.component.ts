import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'velt-trends';
  companies:any = [];





constructor(
  private apiService: ApiService
) {
}

ngOnInit() {




this.apiService.getCompanies().subscribe(data => this.companies = data);

setTimeout(() => {
  console.log(this.companies);
}, 1000);

}



}




