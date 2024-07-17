// login.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  clicked = false;

hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {      
      this.router.navigateByUrl('/information');
    } else {
      // Manejar error de login (mostrar mensaje de error, etc.)
      console.log('Login fallido');
    }
  }
  navigateToComponent1() {
    this.router.navigate(['/information']);
  }

  navigateToComponent2() {
    this.router.navigate(['/invoices']);
  }

  navigateToComponent3() {
    this.router.navigate(['/login']);
  }
}
