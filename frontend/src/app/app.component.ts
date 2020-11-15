import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'velt-trends';
  companies:any = [];

constructor(
  private apiService: ApiService,
  private http: HttpClient
) {
}

ngOnInit() {

  this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
    this.companies = data;})

  console.log(this.companies);
}

}




