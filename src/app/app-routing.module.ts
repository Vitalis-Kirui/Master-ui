import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { SinglePostComponent } from './Components/single-post/single-post.component';
import { VerifyComponent } from './Components/verify/verify.component';
import { ValidatedGuard } from './Guards/validated.guard';

const routes: Routes = [
  {path:"", component:HomeComponent, canActivate:[ValidatedGuard]},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"verify", component:VerifyComponent, canActivate:[ValidatedGuard]},
  {path:"single-post", component:SinglePostComponent, canActivate:[ValidatedGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
