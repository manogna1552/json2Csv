import { Injectable } from "@angular/core";

import { HttpHeaders, HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class CsvService {
  constructor(private http: HttpClient) {}
  //gets data from db json assets folder
  getQuestions() {
    return this.http.get("http://localhost:4800/assets/db.json"); //replace url with rest api url
  }
}
