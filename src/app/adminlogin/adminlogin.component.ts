import { Component, OnInit } from '@angular/core';
import { MyserviceService, Admin } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  message1: String="";
  output1: String="";
  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(admin: Admin):any{
    console.log();
     this.myservice.adminLogin(admin.adminId,admin.adminPassword).subscribe(response => 
      this.hello(response));
  }
  hello(response)
  {
    this.message1=response;
    if (this.message1=="Optional.empty") {
      this.output1="AdminId or Password are Incorrect"
    } else {
      this.output1="Logged in Succesfully";
      this.myservice.isLoggedIn=true;
      this.router.navigate(['/newpage']);
    }
  }
}
