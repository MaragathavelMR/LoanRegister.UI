import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanDetails } from '../models/loandetails.model';

@Injectable({
  providedIn: 'root'
})
export class LoanregisterService {
  private baseApiUrl="https://localhost:44348/api/v1.0/Loan/LoanRegister/";

  constructor(private httpclient:HttpClient) { }

  getloandetails():Observable<LoanDetails[]>{
   return this.httpclient.get<LoanDetails[]>(this.baseApiUrl+'GetLoanDetails');
  }
}
