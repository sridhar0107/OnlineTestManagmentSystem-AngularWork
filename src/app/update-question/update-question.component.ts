import { Component, OnInit } from '@angular/core';
import { Test, MyserviceService, Question } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  obj1: any;
  question: Question;
  message: string;
  constructor(private myservice: MyserviceService, private router: Router) {
    this.obj1 = this.myservice.viewMethod();
this.question=this.myservice.updatequestionMethod();
  }
  onSubmit(question: Question): any {
    return this.myservice.onUpdateQuestion(this.obj1.id,question).subscribe(data => {
      this.message = data
    });
  }
  ngOnInit(): void {
  }

}
