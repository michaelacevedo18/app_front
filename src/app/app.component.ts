import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { HttpClientModule } from "@angular/common/http";
import { InvoicesComponent } from './pages/invoices/invoices.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InformacionComponent,InvoicesComponent, HeaderComponent, LoginComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app_front';
}
