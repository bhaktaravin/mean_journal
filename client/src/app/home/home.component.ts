import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  entries: any;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<any>('https://journalapi-gj6j.onrender.com/api/entries').subscribe((data) => {
    console.log(data)

    this.entries = data.post;
  
  });
  }

  
  



}
