import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingupComponent } from './singup/singup.component';
import { SinginComponent } from './singin/singin.component';

const authRoutes: Routes = [
  { path: 'singup', component: SingupComponent },
  { path: 'singin', component: SinginComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes),
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule { }