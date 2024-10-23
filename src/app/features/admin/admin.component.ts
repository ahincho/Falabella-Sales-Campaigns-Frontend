import { Component } from '@angular/core';
import { MenuAdminComponent } from "../../shared/menu-admin/menu-admin.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    MenuAdminComponent,
    RouterModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
