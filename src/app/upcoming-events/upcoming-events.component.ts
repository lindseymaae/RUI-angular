import { Component, OnInit } from '@angular/core';
import newEvents from "../../assets/upcoming-events.json"
@Component({
  selector: "app-upcoming-events",
  templateUrl: "./upcoming-events.component.html",
})
export class UpcomingEventsComponent {
  newevents: any = newEvents;
}
