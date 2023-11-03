import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  private baseUrl='http://localhost:8080/api/entries';
 // private baseUrl = 'https://journalapi-gj6j.onrender.com/api/entries';

  get(endpoint: string) {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.get(url);
  }

  post(endpoint: string, data: any) {
    const url = `${this.baseUrl}/${endpoint}`; 
    console.log(url, data);
    return this.http.post(url, data);
    
  }

}
