import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanregisterComponent } from './loanregister/loanregister.component';
import { ViewLoanregisterComponent } from './loanregister/view-loanregister/view-loanregister.component';


const routes: Routes = [
  {
    path:'',
    component:LoanregisterComponent
  },
  {
    path:'loanregister',
    component:LoanregisterComponent
  },
  {
    path:'loanregister/:id',
    component:ViewLoanregisterComponent
  },
  {
    path:'loanregister/add',
    component:ViewLoanregisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
