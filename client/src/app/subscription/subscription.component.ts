import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {


  day;
  days = [5,7];
  meal;
  meals = [1,2,3]
  alcohol;

  constructor() { }

  ngOnInit(): void {
  }

}
