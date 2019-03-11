import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.html',
    styleUrls: ['dashboard.css']
})
export class Dashboard {

  constructor(private router : Router) {
  }
}
