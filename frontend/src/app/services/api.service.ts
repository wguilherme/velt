import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

//http client
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBaseUrl =  "http://localhost:3005"

  constructor(private http: HttpClient) { }

   getCompanies(){
    return this.http.get(`${this.apiBaseUrl}/companies`)
  }
   getCompany(id){
    return this.http.get(`${this.apiBaseUrl}/companies/${id}`)
  }
}
