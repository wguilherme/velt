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
  options: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
    ) { }

 ngOnInit(){


    this.route.params.subscribe( params => this.companyId = params.id);



    this.apiService.getCompany(this.companyId).subscribe(data => this.company = data);

    // this.apiService.getCompanies().subscribe(data => this.company = data);

    // setTimeout(() => {
    //   console.log(this.companyId);
    //   console.log('return', this.company);
    // }, 1000)

    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {xAxis: {
      type: 'category',
      data: ['Mon', 'Tue']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [120, 200],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
          color: '#2B2C39'
      }
  }]
  };

  }



}
