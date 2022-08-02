import { Address } from "./address.model";
import { Gender } from "./gender.model";
import { InterestDetails } from "./interestdetails.model";

export interface LoanDetails{
    id:number,
    firstName:string,
    lastName:string,
    dateOfBirth:Date,
    email:string,
    mobile:number,
    profileImageUrl:string,
    genderId:number,
    gender: Gender,
    address: Address,
    interestdetails:InterestDetails
}