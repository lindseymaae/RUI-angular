import { Component, OnInit } from '@angular/core';
import Menu from "../../assets/side-menu.json"


@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
})
export class SideMenuComponent {
  menu: any = Menu;
  secondMenu: any = Menu[1].list;

  sideMenuCaretClicked(event) {
    let el = event.target.children[0];
    let flipClass = " flip";
    let ogClass = "fas fa-caret-right fa-lg";
    let newBtnClass = " display";
    let ogBtnClass = "header-buttons side-menu-dropdown";
    let buttons = document.getElementsByClassName("header-buttons");

    if (el.className != ogClass) {
      el.className = ogClass;
      buttons[0].className = ogBtnClass;
    } else if ((el.className = ogClass)) {
      el.className += flipClass;
      buttons[0].className += newBtnClass;
    }
  }
}
