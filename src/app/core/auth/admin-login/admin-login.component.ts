import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
  providers: [UserService]
})
export class AdminLoginComponent {

  // Form for login
  authForm: FormGroup

  // Status
  status: string = 'init'
  title: string = 'Iniciar Sesión'
  noAccount: string = '¿No tienes cuenta?'
  register: string = 'Crear Cuenta'

  // Recaptcha
  validRecaptcha: boolean = false
  recaptchaToken!: string
  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.authForm = new FormBuilder().group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [false]
    })
  }

  // Recaptcha
  handleRecaptchaToken(token: any) {
    this.validRecaptcha = true;
    this.recaptchaToken = token;
  }



  // Login
  doLogin() {
    if (this.authForm.valid && this.validRecaptcha) {
      this.status = 'loading';
      this.userService.login_admin(this.authForm.value as
        { username: string, password: string, remember: boolean }).subscribe({
          next: () => {
            this.status = 'success';
            this.router.navigate(['/home'])
          },
          error: (err) => {
            this.status = 'failed';
            console.log(err)
          }
        })
    }
  }
}
