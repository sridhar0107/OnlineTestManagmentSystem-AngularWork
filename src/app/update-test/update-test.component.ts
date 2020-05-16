import { Component, OnInit } from '@angular/core';
import { Test, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {

  obj1: any;
  test: Test[];
  message: string;
  constructor(private myservice: MyserviceService, private router: Router) {
    this.obj1 = this.myservice.updateMethod();
  }
  onUpdate(utest: Test): any {
    if(utest.endtime<utest.starttime)
    {
      this.message="Starttime can not be greater than Endtime"
    }
    else{
    return this.myservice.onUpdate(this.obj1.id,utest).subscribe(data => {
      this.message = data
    });
  }
  }
  ngOnInit(): void {
  }

}