import { Component, OnInit } from '@angular/core';
import { User, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  constructor(private myservice: MyserviceService,private router: Router) { }
message: String;
  ngOnInit(): void {
  }
  onSubmit(user):any{

    if (user.password!=user.rePassword) {
      this.message="Password and Confirm password does not match"
    } else {
    console.log();
     this.myservice.recovery(user.userId,user.password,user.rePassword).subscribe(data => {
      this.message=data});
  }
}
}
