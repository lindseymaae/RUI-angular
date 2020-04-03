import { Component, OnInit } from '@angular/core';
import marketNews from "../../assets/news.json";

@Component({
  selector: "app-market-news",
  templateUrl: "./market-news.component.html",
})
export class MarketNewsComponent {
  title = "read-json-demo";
  news: any = marketNews;
}

