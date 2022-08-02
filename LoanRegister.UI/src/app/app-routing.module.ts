import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanregisterComponent } from './loanregister/loanregister.component';

const routes: Routes = [
  {
    path:'',
    component:LoanregisterComponent
  },
  {
    path:'loanregister',
    component:LoanregisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
