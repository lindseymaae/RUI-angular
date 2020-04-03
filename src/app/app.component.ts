import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "responsive-design";

  sideMenuCaretClicked(event) {
    console.log("side menu caret clicked", event.target.lastChild);
    let el = event.target.children[0];
    let flipClass = " flip";
    let ogClass = "fas fa-caret-right fa-lg";
    let newBtnClass = " display"
    let ogBtnClass = "header-buttons side-menu-dropdown"
    let buttons = document.getElementsByClassName("header-buttons");

   if (el.className != ogClass ){
      console.log("in if");
      el.className = ogClass;
      buttons[0].className = ogBtnClass;
   }
   else if (el.className = ogClass){
      console.log("in elseif ");
      el.className += flipClass;   
      buttons[0].className += newBtnClass;
   }


    

    // let el = $(this).closest("li").text();
    // $(this).toggleClass("flip");
    // if (el === "SHORTCUTS") {
    //   $(this).closest("div").find(".header-buttons").stop().slideToggle(400);
    // } else if (el === "SITE NAVIGATION") {
    //   $(this)
    //     .closest("div")
    //     .find(".site-navigation-content")
    //     .stop()
    //     .slideToggle(400);
    // } else if (el === "MY LINKS") {
    //   console.log("will open links when available");
    // }
  }
}
