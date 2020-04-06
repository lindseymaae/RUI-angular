import { Component, OnInit } from '@angular/core';
import Events from "../../assets/events.json";

@Component({
  selector: "app-recently-signed",
  templateUrl: "./recently-signed.component.html",
})
export class RecentlySignedComponent {
  events: any = Events;
}
