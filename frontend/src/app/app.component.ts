import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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




