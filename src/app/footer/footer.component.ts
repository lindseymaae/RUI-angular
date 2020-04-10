import { Component, OnInit } from '@angular/core';
import Items from "../../assets/footer.json"

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
})
export class FooterComponent {
  items: any = Items[0].firstList;
  smIcons: any = Items[1].smIcons;
  departmentList: any = Items[2].departmentList;
}