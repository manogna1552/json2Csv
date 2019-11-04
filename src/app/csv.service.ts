import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor(private http : HttpClient) { }
  getQuestions(){
    return this.http.get('http://localhost:4800/assets/db.json')  
  }
}
