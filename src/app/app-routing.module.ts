import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {path:'features', component: FeaturesComponent},
  {path:'pricing', component: PricingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[FeaturesComponent, PricingComponent]