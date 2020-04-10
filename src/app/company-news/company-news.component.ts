import { Component, OnInit } from "@angular/core";
import CompanyNews from "../../assets/company-news.json";
console.log(CompanyNews);


@Component({
  selector: "app-company-news",
  templateUrl: "./company-news.component.html",
})
export class CompanyNewsComponent {
  companynews: any = CompanyNews;
}
