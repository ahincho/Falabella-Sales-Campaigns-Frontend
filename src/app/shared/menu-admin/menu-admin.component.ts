import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  link: string;
  isOpen?: boolean;
  children?: MenuItem[];
}
@Component({
  selector: 'app-menu-admin',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.css'
})
export class MenuAdminComponent {
  isOpen = false;
  usuario = 'Admin';

  menuItems: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75z',
      link: '/dashboard',
    },
    {
      label: 'Campañas',
      icon: 'M18 13v-2h4v2zm1.2 7L16 17.6l1.2-1.6l3.2 2.4zm-2-12L16 6.4L19.2 4l1.2 1.6zM5 19v-4H4q-.825 0-1.412-.587T2 13v-2q0-.825.588-1.412T4 9h4l5-3v12l-5-3H7v4zm6-4.55v-4.9L8.55 11H4v2h4.55zm3 .9v-6.7q.675.6 1.088 1.463T15.5 12t-.413 1.888T14 15.35M7.5 12',
      link: '/campaigns',
      isOpen: false,
      children: [
        {
          label: 'Ver Campañas',
          icon: '',
          link: '/campaigns/view',
        },
        {
          label: 'Añadir Campaña',
          icon: '',
          link: '/campaigns/create',
        },
      ]
    },
    {
      label: 'Cupones',
      icon: 'M14.8 8L16 9.2L9.2 16L8 14.8zM4 4h16c1.11 0 2 .89 2 2v4a2 2 0 1 0 0 4v4c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2v-4c1.11 0 2-.89 2-2a2 2 0 0 0-2-2V6a2 2 0 0 1 2-2m0 2v2.54a3.994 3.994 0 0 1 0 6.92V18h16v-2.54a3.994 3.994 0 0 1 0-6.92V6zm5.5 2c.83 0 1.5.67 1.5 1.5S10.33 11 9.5 11S8 10.33 8 9.5S8.67 8 9.5 8m5 5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5',
      link: '/coupons',
      isOpen: false,
      children: [
        {
          label: 'Ver Cupones',
          icon: '',
          link: '/coupons/view',
        },
        {
          label: 'Añadir Cupón',
          icon: '',
          link: '/coupons/create',
        },
      ]
    },
    {
      label: 'Carga de Archivos',
      icon: 'M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z',
      link: '/files',
    },
    {
      label: 'Salir',
      icon: 'm17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z',
      link: '/login',
    }
  ];

  toggleDrawer() {
    this.isOpen = !this.isOpen;
  }
}
