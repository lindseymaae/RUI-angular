import { Component, OnInit } from '@angular/core';
import newEvents from "../../assets/upcoming-events.json"
import Events from "../../assets/events.json";

@Component({
  selector: "app-list-sections",
  templateUrl: "./list-sections.component.html",
})
export class ListSectionsComponent {
  newevents: any = newEvents;
  events: any = Events;
}
