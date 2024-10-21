import { Component } from '@angular/core';
import { BorderComponent } from "../../../shared/border/border.component";
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-no-coupon',
  standalone: true,
  imports: [
    BorderComponent,
    NavbarComponent,
    HttpClientModule
  ],
  templateUrl: './no-coupon.component.html',
  styleUrl: './no-coupon.component.css'
})
export class NoCouponComponent {

}
