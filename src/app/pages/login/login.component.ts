import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      nome: [''],
      senha: ['']
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const data: LoginRequest = this.loginForm.value;
      this.authService.login(data).subscribe({
        next: (res) => {
          console.log('Login OK:', res);
          localStorage.setItem('usuario', JSON.stringify(res));
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Erro:', err);
          alert('Usuário ou senha inválidos!');
        }
      });
    }
  }
}
