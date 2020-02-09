import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoresService } from '../stores.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  days;
  meals;
  alcohol;
  storeNum;
  diet;
  allergens;
  type;
  address;
  lunches;
  dinners;


  constructor(private route: ActivatedRoute, private router: Router, private storeService: StoresService) { }

  ngOnInit(): void {
    this.storeNum = this.route.snapshot.params['store'];
    this.diet = this.route.snapshot.params['diet'];
    this.allergens = this.route.snapshot.params['allergens'];
    this.alcohol = this.route.snapshot.params['alcohol'];
    this.days = this.route.snapshot.params['days'];
    this.meals = this.route.snapshot.params['meals'];
    this.type = this.route.snapshot.params['type'];

    this.getAddress({number: this.storeNum});

    this.getLunches(this.diet);
    this.getDinners(this.diet);

  }

  getLunches(diet){
    this.storeService.getRecipes('lunch',diet).subscribe((data) => {
      console.log(data)
      this.lunches = data[0]['Lunch'];
    })
  }

  getDinners(diet){
    this.storeService.getRecipes('dinner',diet).subscribe((data) => {
      console.log(data)
      this.dinners = data[0]['Dinner'];
    })
  }

  getAddress(store){
    this.storeService.getStoreAddress(store).subscribe((data) => {
      this.address = data['address'];
    })
  }






}
