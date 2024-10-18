import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../core/auth/services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [UserService],
})
export class NavbarComponent {
  isMobileMenuOpen: boolean = false;

  constructor(
    private readonly userService: UserService,
  ) { }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }


  doLogout() {
    this.userService.logout();
  }
}
