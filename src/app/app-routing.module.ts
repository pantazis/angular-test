import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultsPageComponent } from './results-page/results-page.component';
import { WinnerPageComponent } from './winner-page/winner-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


const routes: Routes = [
  {path:"", redirectTo:"/results",pathMatch: "full"},  
  {path:"results", component:ResultsPageComponent},
  {path:"winner", component:WinnerPageComponent},
  {path:"contact", component:ContactPageComponent},
  {path:"**", redirectTo:"/results"},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
