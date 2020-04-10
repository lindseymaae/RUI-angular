import { Component, OnInit } from "@angular/core";
import News from "../../assets/news.json";


@Component({
  selector: "app-announcements",
  templateUrl: "./announcements.component.html",
})

export class AnnouncementsComponent {
  news: any = News;
}
