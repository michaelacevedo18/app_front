// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InformacionComponent } from './pages/informacion/informacion.component';

import { InvoicesComponent } from './pages/invoices/invoices.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'information', component: InformacionComponent },
  //{ path: 'information', component: InformacionComponent, canActivate: [AuthGuard] },
  { path: 'invoices', component: InvoicesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
