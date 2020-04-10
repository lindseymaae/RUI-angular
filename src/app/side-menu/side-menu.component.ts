import { Component, OnInit } from '@angular/core';
@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
})
export class SideMenuComponent{

  sideMenuCaretClicked(event) {
    console.log("side menu caret clicked", event.target.lastChild);
    let el = event.target.children[0];
    let flipClass = " flip";
    let ogClass = "fas fa-caret-right fa-lg";
    let newBtnClass = " display";
    let ogBtnClass = "header-buttons side-menu-dropdown";
    let buttons = document.getElementsByClassName("header-buttons");

    if (el.className != ogClass) {
      console.log("in if");
      el.className = ogClass;
      buttons[0].className = ogBtnClass;
    } else if ((el.className = ogClass)) {
      console.log("in elseif ");
      el.className += flipClass;
      buttons[0].className += newBtnClass;
    }
  }
}
