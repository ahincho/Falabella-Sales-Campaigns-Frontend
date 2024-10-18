import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';

@Component({
  selector: 'app-legal-conditions',
  standalone: true,
  imports: [CommonModule, TermsConditionsComponent],
  templateUrl: './legal-conditions.component.html',
  styleUrl: './legal-conditions.component.css'
})
export class LegalConditionsComponent {
  visible: boolean = false;
  message: string = 'Ver condiciones legales';

  toggleDescription() {
    this.visible = !this.visible;
    if (this.visible) {
      this.message = 'Ocultar condiciones legales';
    }
    else {
      this.message = 'Ver condiciones legales';
    }
  }
}
