import { Component, OnInit } from '@angular/core';
import navItems from "../../assets/navigation.json"
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {

 nav: any = navItems;
 welcome = "Welcome, USER!"

  ngOnInit() {
  }

}
