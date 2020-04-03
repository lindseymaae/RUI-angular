import { Component, OnInit } from '@angular/core';
import News from "../../assets/news.json";
import Events from "../../assets/events.json";

@Component({
  selector: "app-news-section",
  templateUrl: "./news-section.component.html",
})
export class NewsSectionComponent {
  news: any = News;
  events: any = Events;
}
