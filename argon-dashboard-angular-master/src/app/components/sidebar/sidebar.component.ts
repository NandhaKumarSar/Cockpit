import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Database Configuration',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Settings',  icon:'ni-settings text-orange', class: '' },
    { path: '/user-profile', title: 'Licences',  icon:'ni-key-25 text-green', class: '' },
    { path: '/tables', title: 'Clear Database',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/register', title: 'FAQ',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
