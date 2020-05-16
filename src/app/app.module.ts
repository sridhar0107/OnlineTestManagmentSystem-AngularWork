import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryComponent } from './recovery/recovery.component';
import {FormsModule, FormBuilder} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { NewpageComponent } from './newpage/newpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddTestComponent } from './add-test/add-test.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { ListTestComponent } from './list-test/list-test.component';
import { LogoutComponent } from './logout/logout.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { AssignTestComponent } from './assign-test/assign-test.component';
import { UserComponentComponent } from './user-component/user-component.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    HomepageComponent,
    NewpageComponent,
    AdminloginComponent,
    AddTestComponent,
    AddquestionComponent,
    UpdateTestComponent,
    ListTestComponent,
    LogoutComponent,
    ListQuestionComponent,
    UpdateQuestionComponent,
    AssignTestComponent,
    UserComponentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
