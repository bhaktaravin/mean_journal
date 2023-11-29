import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import Entry from './Entry';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  private baseUrl='http://localhost:8080/api';
  //private baseUrl = 'https://journalapi-gj6j.onrender.com/api/entries';

  getAll(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/")
    .pipe(map((res: any) => {
      return res.data;
    }))
    
  }

  createEntry(data: Entry): Observable<any> {
    console.log('Creating Entry - ', data);
    return this.http.post(`${this.baseUrl}/createEntry`,data);
  }

}



