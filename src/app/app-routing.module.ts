import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewpageComponent } from './newpage/newpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ListTestComponent } from './list-test/list-test.component';
import { MyserviceService } from './myservice.service';
import { AddTestComponent } from './add-test/add-test.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { AssignTestComponent } from './assign-test/assign-test.component';
import { UserComponentComponent } from './user-component/user-component.component';


const routes: Routes = [
  {
  path: '',
  component:HomepageComponent},
  {
    path: '',
    component: LoginComponent},
{path: "admin",component:AdminloginComponent},
{path: "login",component:LoginComponent},
{path: "register",component:RegisterComponent},
{path:"recovery",component:RecoveryComponent},
{path:"logout",component:LoginComponent},
{path:"home",component:HomepageComponent},
{path:"newpage",component:NewpageComponent, canActivate:[MyserviceService]},
{path:'listtest',component:ListTestComponent,canActivate:[MyserviceService]},
{path:'addtest',component:AddTestComponent,canActivate:[MyserviceService]},
{path:'updatetest',component:UpdateTestComponent,canActivate:[MyserviceService]},
{path:'addquestion',component:AddquestionComponent,canActivate:[MyserviceService]},

{path:'viewquestion',component:ListQuestionComponent,canActivate:[MyserviceService]},

{path:'updatequestion',component:UpdateQuestionComponent,canActivate:[MyserviceService]},

{path:'assigntest',component:AssignTestComponent,canActivate:[MyserviceService]},
{path:'usercomponent',component:UserComponentComponent,canActivate:[MyserviceService]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
