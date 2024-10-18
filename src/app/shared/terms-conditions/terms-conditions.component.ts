import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.css'
})
export class TermsConditionsComponent {
  visible: boolean = false
  message: string = 'Ver condiciones legales'
  toggleDescription() {
    this.visible = !this.visible;
    this.visible ? this.message = 'Ocultar condiciones legales' : this.message = 'Ver condiciones legales'
  }
}
