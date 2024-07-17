// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {    
    if (username === 'usuario' && password === 'contraseña') {
      localStorage.setItem('token', 'tu_token_aqui');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {    
    return !!localStorage.getItem('token');
  }

  logout(): void {    
    localStorage.removeItem('token');
  }
}
