import { Component } from '@angular/core';
import { CardComponent } from "../../../shared/card/card.component";
import { CommonModule } from '@angular/common';

interface Card {
  imgCard: string;
  title: string;
  dateEnd: string;
  days: string;
}
@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule
],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {
  cardsCampaign: Card[] = [
    {
      imgCard: '/assets/images/background_card_campaign.png',
      title: 'Card 1',
      dateEnd: '10/10/2022',
      days: '2'
    },
    {
      imgCard: '/assets/images/background_card_campaign.png',
      title: 'Card 2',
      dateEnd: '11/10/2022',
      days: '2'
    },
    {
      imgCard: '/assets/images/background_card_campaign.png',
      title: 'Card 3',
      dateEnd: '12/10/2022',
      days: '2'
    },
    {
      imgCard: '/assets/images/background_card_campaign.png',
      title: 'Card 4',
      dateEnd: '13/10/2022',
      days: '2'
    }
  ]

  cardsCoupon: Card[] = [
    {
      imgCard: '/assets/images/background_card_coupon.png',
      title: 'Card 1',
      dateEnd: '10/10/2022',
      days: '2'
    },
    {
      imgCard: '/assets/images/background_card_coupon.png',
      title: 'Card 2',
      dateEnd: '11/10/2022',
      days: '2'
    },
    {
      imgCard: '/assets/images/background_card_coupon.png',
      title: 'Card 3',
      dateEnd: '12/10/2022',
      days: '2'
    },
  ]
}
