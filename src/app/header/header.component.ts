import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleClick(event) {
    console.log(
      "button clicked",
    );
    let element = document.getElementById("site-body");
    let newClass = "toggle-menu show-nav";
    if (element.className != newClass) {
      element.className = newClass;
    } else {
      element.className = "";
    }
  }

}
