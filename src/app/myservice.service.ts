import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
 user: User;
 userId: String;
 updatetest: Test;
 addquestion: Test;
 viewquestion:Test;
 updatequestion: Question;
 isLoggedIn: boolean=false;
  constructor(private httpService: HttpClient,private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn) {
      return true;
    } else {
      alert('Please log in')
      this.router.navigate(['']);
      return false;
    }
  }


  public addUser(adduser: User) {
    console.log("ins service add");
    console.log(adduser);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8899/users/UserRegistration", adduser,  { headers, responseType: 'text'});
  }

  public userLogin(userId: String,password: String) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:8126/users/UserLogin/"+userId+","+password,  { headers, responseType: 'text'});
  }

  public userTest(userId: String) {
    console.log("ins service usertest");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Test>("http://localhost:8126/users/UserTest/"+userId);
  }
  
  public adminLogin(adminId: String,adminPassword: String) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:8133/admin/adminLogin/"+adminId+","+adminPassword,  { headers, responseType: 'text'});
  }
  
  public recovery(userId: String,password: String,rePassword: String) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:8899/users/PasswordRecovery/"+userId+","+password+","+rePassword,  { headers, responseType: 'text'});
  }
  logout(userId: String) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:8899/users/UserLogout/" + userId,  { headers, responseType: 'text'});
  }

  public getTest() {
    console.log("ins service get test");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Test>("http://localhost:9000/test/testdetails");
  }
 
  public getOneTest(id:BigInteger) {
    console.log("ins service get test");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Test>("http://localhost:9000/test/getTest/"+id);
  }
  public addTest(addtest: Test) {
    console.log("ins service add");
    console.log(addtest);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:9000/test/addTest", addtest,  { headers, responseType: 'text'});
  }

  public addQuestion(id: BigInteger,question: Question) {
    console.log("ins service question");
    console.log(question);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:9990/testquestions/addQuestion/"+id,question,  { headers, responseType: 'text'});
  }

  public deleteQuestion(id: BigInteger,question: Question) {
    console.log("ins service question");
    console.log(question);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:9990/testquestions/deleteQuestion/"+id,question,  { headers, responseType: 'text'});
  }

  public onUpdateQuestion(id: BigInteger,question: Question) {
    console.log("ins service question");
    console.log(question);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:9990/testquestions/updateQuestion/"+id,question,  { headers, responseType: 'text'});
  }
  
  public calculateTotalMarks(test:Test) {
    console.log("ins service calculate marks");
    console.log(test);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post<Test>("http://localhost:9990/testquestions/calculateTotalMarks",test);
  }
  

  public update(updatetest: Test) {
    this.updatetest = updatetest;
  }
  public updateMethod() {
    return this.updatetest;
  }
  public userId1(userId: String) {
    this.userId = userId;
  }
  public userIdMethod() {
    return this.userId;
  }
  public onUpdate(id:BigInteger,updatetest: Test) {
    console.log("ins service update");
    console.log(this.updatetest);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:9000/test/updateTest/"+id, updatetest,  { headers, responseType: 'text'});
  }

  public assignTest(id: BigInteger,userId: String) {
    console.log("ins service assigntest");

    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:9000/test/assignTest/"+id+"/"+userId,  { headers, responseType: 'text'});
  }

  public add(addquestion: Test) {
    this.addquestion = addquestion;
  }
  public addMethod() {
    return this.addquestion;
  }

  public view(viewquestion: Test) {
    this.viewquestion = viewquestion;
  }
  public viewMethod() {
    return this.viewquestion;
  }
  public updateQuestion(updatequestion: Question) {
    this.updatequestion = updatequestion;
  }
  public updatequestionMethod() {
    return this.updatequestion;
  }

  delete(id: BigInteger) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:9000/test/deleteTest/" + id,  { headers, responseType: 'text'});
  }


}
export class User
{
  userId: number;
  userTest: Test;
  password: String;
  rePassword: String;
  phonenumber: BigInteger;
  emailId: String;
}
export class Admin
{
  adminId: String;
  adminName: String;
	 adminPassword: String;
	 dateOfBirth: Date;
	 adminContact: String;
}
export class Test {
  id: BigInteger;
  duration: String;
  title: string;
  testTotalMarks: number;
  testMarksScored: number;
  starttime: Date;
  endtime: Date;
  testQuestions: Set<Question>;
}
export class Question{
  questionId: BigInteger;
  test: Test;
  questionOptions: String;
  questionTitle: String;
  questionAnswer: number;
  questionMarks: number;
  choosenAnswer: number;
  marksScored: number;
}