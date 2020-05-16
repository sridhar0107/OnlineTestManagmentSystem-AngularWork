import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Test, Question } from '../myservice.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  obj1: any;
  status: boolean=false;
  userId: String;
  output:any;
  testSubmited: boolean=false;
  message: Test;
  testTotalMarks: number;
  testMarksScored: number;
  test: Test;
  questions: Set<Question>;
  constructor(private myservice: MyserviceService, private router: Router) { 
    this.userId = this.myservice.userIdMethod();
    
    
  }

  ngOnInit(): void {
    this.myservice.userTest(this.userId).subscribe(data => {
      this.test = data
    });
    if(this.test.testQuestions.size>0)
    {
      this.status=true
    }
   
  }
  calculateTotalMarks(test: Test):any
  {
    if(this.testSubmited==false)
    {
     this.myservice.calculateTotalMarks(test).subscribe(data => {
      this.message = data
    });
    this.testSubmited=true;
  }
  }
  getResult():any{
    this.testTotalMarks=this.message.testTotalMarks;
    this.testMarksScored=this.message.testMarksScored;
     this.myservice.onUpdate(this.test.id,this.message).subscribe(data => {
      this.output= data
    });
 
}
}
