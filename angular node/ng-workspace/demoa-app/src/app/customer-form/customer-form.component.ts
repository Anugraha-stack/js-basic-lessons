import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
CustomerModel:any;
  constructor() {console.log("Customer Form Loaded") }

  ngOnInit(): void {
    this.CustomerModel ={
      firstName:'steve',
      lastName:'jobs',
      email:'steve.jobs@gmail.com'
    }
  }
saveCustomer (customerFormGroup:any){
  if (customerFormGroup.value)
  {
    console.log(customerFormGroup.value)
  }
}
}
