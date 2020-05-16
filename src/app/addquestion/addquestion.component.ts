import { Component, OnInit, Input } from '@angular/core';
import { Question, MyserviceService, Test } from '../myservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
@Input() id: BigInteger;
obj1: any;
  test: Test[];
message: any;
  constructor(private myservice: MyserviceService,private router: Router,private fb: FormBuilder) { 

    this.obj1 = this.myservice.addMethod();
  }

  ngOnInit(): void {
  }
  
  onSubmit(addquestion):any{
    
     console.log(addquestion);
      this.myservice.addQuestion(this.obj1.id,addquestion).subscribe(data => {
       this.message=data});
   }
}
