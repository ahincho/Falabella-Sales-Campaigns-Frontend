import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-message',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './main-message.component.html',
  styleUrl: './main-message.component.css'
})
export class MainMessageComponent {
  @Input() textSize: string = 'text-lg';
}
