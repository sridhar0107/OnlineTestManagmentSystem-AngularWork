import { Component, OnInit } from '@angular/core';
import { Test, MyserviceService, Question } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {
  obj1: any;
  message: string;
  test: Test[];
  question: Question[];
  constructor(private myservice: MyserviceService, private router: Router) {
    this.obj1 = this.myservice.viewMethod();
    this.question=this.obj1.testQuestions;
  }

  ngOnInit(): any {
   
  }
  
  updateQuestion(updatequestion: Question) {
    this.myservice.updateQuestion(updatequestion);
    this.router.navigate(['/updatequestion']); //updating the test
  }
 
  deleteQuestion(deleteQuestion: Question): any {
    this.myservice.deleteQuestion(this.obj1.id,deleteQuestion).subscribe(data => {
      this.message = data;
    });
    
    this.router.navigate(['/viewquestion']);
  }

}
