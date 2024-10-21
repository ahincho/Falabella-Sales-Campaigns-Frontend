import { Component } from '@angular/core';
import { MenuAdminComponent } from '../../../shared/menu-admin/menu-admin.component';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [
    MenuAdminComponent
  ],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {

}
