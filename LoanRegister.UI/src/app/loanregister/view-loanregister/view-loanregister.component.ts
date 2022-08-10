import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Gender } from 'src/app/models/gender.model';
import { LoanDetails } from 'src/app/models/loandetails.model';
import { LoanregisterService } from '../loanregister.service';

@Component({
  selector: 'app-view-loanregister',
  templateUrl: './view-loanregister.component.html',
  styleUrls: ['./view-loanregister.component.css']
})
export class ViewLoanregisterComponent implements OnInit {
  loandetailid:string|null|undefined;
  header:string="";
  sample="";
  loandetail:LoanDetails={
    id: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    mobile: 0,
    profileImageUrl: '',
    genderId: 0,
    gender:{
      genderId:0,
      name:''
    },
    address: {
      id: '',
      physicalAddress: '',
      postalAddress: ''
    },
    interestdetails: {
      id:'',
      notionalAmount:0,
      interest:0,
      maturityPeriod:0,
      maturityAmount:0,
      serviceCharges:0,
      totalAmount:0
    }
  }
  genderList: Gender[] = [];
  isNewLoaner = false;
  displayProfileImageUrl="";

  constructor(private readonly loanregisterservice:LoanregisterService,
    private readonly route:ActivatedRoute,
    private router:Router,
    private snackbar:MatSnackBar) { }
    @ViewChild('loandetailsform') loandetailsform?:NgForm;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params)=>{
        this.loandetailid=params.get('id');
        if(this.loandetailid){
          if(this.loandetailid.toLowerCase()==='Add'.toLowerCase()){
            this.isNewLoaner=true;
            this.header='Add New LoanDetials';
            this.setImage();
          }
          else{
            this.isNewLoaner=false;
            this.header='Edit LoanDetails';
            this.loanregisterservice.getloandetail(this.loandetailid)
            .subscribe(
              (successresponse)=>{
                this.loandetail=successresponse;
                this.setImage();
              },
              (errorresponse)=>{
                  this.setImage();
              }
            )
          }
          this.loanregisterservice.getgenderlist()
          .subscribe(
            (successresponse)=>{
              this.genderList=successresponse;
            }            
          );
        }
      }
    )
  }
  onUpdate():void{

  }
  onDelete():void{

  }
  onAdd():void{

  }
  uploadImage(event:any):void{

  }
  private setImage():void{
    if (this.loandetail.profileImageUrl) {
      this.displayProfileImageUrl = this.loanregisterservice.getImagePath(this.loandetail.profileImageUrl);
    } else {
      // Display a default
      this.displayProfileImageUrl = '/assets/user.png';
    }
  }
  ChangeInterestAmount(event:any):void{
   if (this.loandetail.interestdetails.notionalAmount){
    this.loandetail.interestdetails.maturityAmount=(this.loandetail.interestdetails.notionalAmount*
    this.loandetail.interestdetails.interest*this.loandetail.interestdetails.maturityPeriod)
   }
  }
}
