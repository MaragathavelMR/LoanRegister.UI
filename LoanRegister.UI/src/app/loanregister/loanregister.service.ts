import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../models/gender.model';
import { LoanDetails } from '../models/loandetails.model';

@Injectable({
  providedIn: 'root'
})
export class LoanregisterService {
  private baseApiUrl="https://localhost:44348/api/v1.0/Loan/LoanRegister/";

  constructor(private httpclient:HttpClient) { }

  getgenderlist():Observable<Gender[]>{
    return this.httpclient.get<Gender[]>(this.baseApiUrl+'GetLoanDetails');
  }
  getImagePath(relativePath: string) {
    return `${this.baseApiUrl}/${relativePath}`;
  }
  getloandetails():Observable<LoanDetails[]>{
   return this.httpclient.get<LoanDetails[]>(this.baseApiUrl+'GetLoanDetails');
  }
  getloandetail(loandetailid:string):Observable<LoanDetails>{
   return this.httpclient.get<LoanDetails>(this.baseApiUrl+'');
  }
  addloandetail(){

  }
  updateloandetail(){

  }
  deleteloandetail(){
    
  }
}
