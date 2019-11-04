import { Component } from "@angular/core";
import { AngularCsv } from "angular7-csv/dist/Angular-csv";
import { CsvService } from "./csv.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "json2Csv";
  dtHolidays: any;
  jsonData;
  constructor(private getQuesService: CsvService) {}
  ngOnInit() {
    //gets data through service
    this.getQuesService.getQuestions().subscribe(data => {
      //console.log(data, "json d....");
      //loop through objects array 
      Object.entries(data).forEach(([key, value]) => {
        switch (key) {
          case "users":
            this.jsonData = value;
          //  console.log(this.jsonData, "sdhfasgj");
            break;
        }
      });
      // this.jsonData = data;
    });

    // this.dtHolidays =[
    //   {"id": 101, "Holiday_Date": "21/02/2019", "Holiday_Comment": "company holiday calendar of 2019. ", "Holiday_Status": "Active"},
    //   {"id": 102, "Holiday_Date": "22/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"},
    //   {"id": 103, "Holiday_Date": "23/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Pending"},
    //   {"id": 104, "Holiday_Date": "24/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"},
    //   {"id": 105, "Holiday_Date": "25/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "NotActive"},
    //   {"id": 106, "Holiday_Date": "26/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"},
    //   {"id": 107, "Holiday_Date": "27/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Pending"},
    //   {"id": 108, "Holiday_Date": "28/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"},
    //   {"id": 109, "Holiday_Date": "02/03/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "NotActive"},
    //   {"id": 110, "Holiday_Date": "03/04/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"},
    //   {"id": 111, "Holiday_Date": "21/05/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"}
    // ];
  }
  
  csvOptions = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalseparator: ".",
    showLabels: true,
    showTitle: true,
    title: "Your Holiday List :",
    useBom: true,
    noDownload: false,
    // headers: ["Holiday ID", "Holiday Date", "Holiday Comment", "Holiday Status"]
    headers: ["dName", "email", "password", "id"]
  };

  downloadCSV() {
    //this.dtHolidays : JSONDATA , HolidayList : CSV file Name, this.csvOptions : file options
    // new  AngularCsv(this.dtHolidays, "", this.csvOptions);
    new AngularCsv(this.jsonData, "", this.csvOptions);
  }
}
