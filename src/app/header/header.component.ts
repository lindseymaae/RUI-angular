import { Component, OnInit } from '@angular/core';
import Menu from "../../assets/side-menu.json"
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleClick(event) {
    let element = document.getElementById("site-body");
    let newClass = "toggle-menu show-nav";
    if (element.className != newClass) {
      element.className = newClass;
    } else {
      element.className = "";
    }
  }
  menu: any = Menu;
}
