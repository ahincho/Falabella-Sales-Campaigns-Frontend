import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { TermsConditionsComponent } from '../../../shared/terms-conditions/terms-conditions.component';
import { MainMessageComponent } from '../../../shared/main-message/main-message.component';

@Component({
  selector: 'app-coupon',
  standalone: true,
  imports: [
    CommonModule,
    NgxBarcode6Module,
    TermsConditionsComponent,
    MainMessageComponent
  ],
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.css'
})
export class CouponComponent {
  @Input() barcode!: string;
  @Input() webCode!: string;
  copied = false;

  copyToClipboard(text: string): void {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }
}
