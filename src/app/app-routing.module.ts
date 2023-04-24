import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentiComponent } from './alimenti/alimenti.component';
import { BmiComponent } from './bmi/bmi.component';
import { CalorieComponent } from './calorie/calorie.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'bmi', component: BmiComponent},
  {path: 'calorie', component: CalorieComponent},
  {path: 'alimenti', component: AlimentiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
