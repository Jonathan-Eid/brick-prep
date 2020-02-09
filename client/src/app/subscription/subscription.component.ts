import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {


  day;
  days = [5,7];
  meal;
  meals = [1,2];
  alcohol = false; 
  storeNum;
  diet;
  allergens;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    
    this.storeNum = this.route.snapshot.params['store'];
    this.diet = this.route.snapshot.params['diet'];
    this.allergens = this.route.snapshot.params['allergens'];

    console.log(this.allergens);


  }

  pickupDisabled(){
    return !(this.day && this.meal)
  }
  deliveryDisabled(){
    return !(this.day && this.meal) || this.alcohol
  }

  checkout(type){

    this.router.navigate([`../checkout/${this.storeNum}/${this.diet}/[${this.allergens}]/${this.day}/${this.meal}/${this.alcohol}/${type}`])

  }
}
