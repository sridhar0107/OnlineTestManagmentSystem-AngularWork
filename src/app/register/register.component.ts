import { Component, OnInit } from '@angular/core';
import { User, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  constructor(private myservice: MyserviceService) { 
  

  }

  ngOnInit(): void {
  }

message: string;


onSubmit(user: User):any{
  if (user.password!=user.rePassword) {
    this.message="Password and Confirm password does not match"
  } else {
    

  console.log(user);

   this.myservice.addUser(user).subscribe(data => {
    this.message=data});
}
}

}
