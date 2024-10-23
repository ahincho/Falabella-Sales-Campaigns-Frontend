import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() imgCard: string = '';
  @Input() titleCard: string = '';
  @Input() dateEnd: string = '';
  @Input() days: string = '';
  @Input() limitCards: boolean = false;
}
