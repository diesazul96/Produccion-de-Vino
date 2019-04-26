import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newParcel',
  templateUrl: 'newParcel.component.html',
  styleUrls: ['./newParcel.component.css']
})
export class NewParcelComponent implements OnInit {
public isCollapsed = true;
public isCollapsed2 = true;

  constructor() {  }

  ngOnInit() {}
}
