import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  companyId;
  company: any = {};

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
    ) { }

 ngOnInit(){
    this.route.params.subscribe( params => this.companyId = params.id);



    this.apiService.getCompany(this.companyId).subscribe(data => this.company = data);

    // this.apiService.getCompanies().subscribe(data => this.company = data);

    setTimeout(() => {
      console.log(this.companyId);
      console.log('return', this.company);
    }, 1000)
  }


}
