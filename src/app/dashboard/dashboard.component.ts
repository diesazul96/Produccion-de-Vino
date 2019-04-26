import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.html',
    styleUrls: ['dashboard.css']
})
export class Dashboard {
  name: string;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {this.name = params['name'];});
  }
}
