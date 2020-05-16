import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { MyserviceService, User } from '../myservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
userId: String;
id: number=25;
//password: String;
message: String;
output: String;
//message: User[];
  constructor(private myservice: MyserviceService,private router: Router) { }


  ngOnInit(): void {
  }
  
  onSubmit(user):any{
    console.log();
    this.userId=user.userId;
     this.myservice.userLogin(user.userId,user.password).subscribe(response => 
      this.hello(response));
  }
  hello(response)
  {
    this.message=response;
    if (this.message=="Optional.empty") {
      this.output="UserId or Password are Incorrect"
    } else {
      this.output="Logged in Succesfully";
      this.myservice.isLoggedIn=true;
      this.myservice.userId1(this.userId);
      this.router.navigate(['/usercomponent']);
    }
  }

}
