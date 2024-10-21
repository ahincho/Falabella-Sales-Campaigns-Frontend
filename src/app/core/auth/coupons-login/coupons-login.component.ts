import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BorderComponent } from "../../../shared/border/border.component";

@Component({
  selector: 'app-coupons-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RecaptchaModule,
    CommonModule,
    HttpClientModule,
    BorderComponent
],
  templateUrl: './coupons-login.component.html',
  styleUrl: './coupons-login.component.css',
  providers: [UserService]
})
export class CouponsLoginComponent {

  authForm: FormGroup;
  status: string = 'init';

  recaptchaToken!: string;
  validRecaptcha: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.authForm = this.formBuilder.group({
      typeDocument: ['DNI', [Validators.required]],
      nroDocument: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      remember: [false]
    })
  }

  handleRecaptchaToken(token: any) {
    this.validRecaptcha = true;
    this.recaptchaToken = token;
  }

  doLogin() {
    if (this.authForm.valid && this.validRecaptcha) {
      this.status = 'loading';
      this.userService.login_nroDocument(this.authForm.value as {
        nroDocument: string,
        remember: boolean,
        recaptchaToken: string
      }).subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.status = 'failed';
        }
      });
    }
  }
}
