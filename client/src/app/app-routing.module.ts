import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { DietComponent } from './diet/diet.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [

  {path:'', component: StoreLocatorComponent},
  {path:'diet/:store', component: DietComponent},
  {path: 'subscription/:store/:diet/:allergies', component: SubscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
