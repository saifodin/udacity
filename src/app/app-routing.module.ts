import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegLoginpageComponent } from './authentication/reg-loginpage/reg-loginpage.component';
import { RegisterComponent } from './authentication/register/register.component';

const routes: Routes = [{ path: 'overview', loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule) },
{ path: 'Authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
