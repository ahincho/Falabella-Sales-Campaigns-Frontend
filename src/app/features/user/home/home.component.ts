import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { LegalConditionsComponent } from '../../../shared/legal-conditions/legal-conditions.component';
import { MainMessageComponent } from '../../../shared/main-message/main-message.component';
import { CouponComponent } from '../coupon/coupon.component';
import { Client } from '../../../core/models/client.model';
import { CouponService } from '../../../core/services/coupon.service';
import { UserService } from '../../../core/auth/services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    CouponComponent,
    CommonModule,
    HttpClientModule,
    MainMessageComponent,
    LegalConditionsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [CouponService, UserService]
})
export class HomeComponent {
  clients: Client[] = [];
  nroDocument: string | null = null;
  isMobile: boolean | undefined;
  currentPage: number = 1;
  couponsPerPage: number = 4;
  startIndex: any;
  endIndex: any;
  totalPag: any
  displayedPages: any[] = [];

  constructor(
    private readonly couponService: CouponService,
    private readonly router: Router,
    private readonly userService: UserService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.isMobile = window.innerWidth <= 768;
    this.userService.getCurrentUser().subscribe(user => {
      this.nroDocument = user.nroDocument;
    });
    this.couponCodes();
  }

  couponCodes() {
    if (this.nroDocument) {
      this.couponService.getCouponCodes(this.nroDocument).subscribe({
        next: (response) => {
          this.clients = response;
          if (this.clients.length === 0) {
            this.router.navigate(['/home/noCoupons']);
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  // Cupones actuales
  get currentCoupons(): Client[] {
    this.startIndex = (this.currentPage - 1) * this.couponsPerPage;
    this.endIndex = this.startIndex + this.couponsPerPage;
    return this.clients.slice(this.startIndex, this.endIndex);
  }

  // Total de páginas
  get totalPages(): number[] {
    return Array.from({ length: Math.ceil(this.clients.length / this.couponsPerPage) }, (_, index) => index + 1);
  }

  // Cambio de página
  changePage(page: number) {
    if (page > 0 && page <= this.totalPages.length)
      this.currentPage = page;
    else if (page > this.totalPages.length)
      this.currentPage = this.totalPages.length;
    else
      this.currentPage = 1;
  }

  //
  getDisplayedPages(): number[] {
    this.displayedPages = [];
    this.totalPag = this.totalPages.length;

    // Si hay menos de 5 páginas en total, mostrar todas
    if (this.totalPag <= 4) {
      for (let i = 1; i <= this.totalPag; i++) {
        this.displayedPages.push(i);
      }
    } else {
      // Si hay más de 5 páginas, calcular qué páginas mostrar
      const startPage = Math.max(1, this.currentPage);
      const endPage = Math.min(this.totalPag, this.currentPage + 2);

      for (let i = startPage; i <= endPage; i++) {
        this.displayedPages.push(i);
      }
    }
    return this.displayedPages;
  }

  // Método para agregar clases a los enlaces de paginación
  getPageClass(page: number): string {
    return `relative inline-flex items-center px-4 py-2 text-sm font-semibold cursor-pointer ${page === this.currentPage
      ? 'bg-[#04662e] text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
      }`;
  }
}
