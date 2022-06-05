import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { RegLoginpageComponent } from './reg-loginpage/reg-loginpage.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{ path: '', component:RegLoginpageComponent,
children:[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

// },
// {path:'regLogin' ,,