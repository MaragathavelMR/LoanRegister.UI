import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoanDetails } from '../models/loandetails.model';
import { LoanregisterService } from './loanregister.service';

@Component({
  selector: 'app-loanregister',
  templateUrl: './loanregister.component.html',
  styleUrls: ['./loanregister.component.css']
})
export class LoanregisterComponent implements OnInit {
  loandetails:LoanDetails[]=[];
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'email', 'mobile', 'gender', 'edit'];
  dataSource: MatTableDataSource<LoanDetails> = new MatTableDataSource<LoanDetails>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString='';
  constructor(private loanregisterservice:LoanregisterService) { }

  ngOnInit(): void {
    this.loanregisterservice.getloandetails()
      .subscribe(
        (successResponse) => {
          this.loandetails = successResponse;
          this.dataSource = new MatTableDataSource<LoanDetails>(this.loandetails);
          if (this.matPaginator) {
            this.dataSource.paginator = this.matPaginator;
          }

          if (this.matSort) {
            this.dataSource.sort = this.matSort;
          }
        },
        (errorResponse) => {
          console.log(errorResponse);
        }
      );
  }
  filterLoans() {
    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }
}
