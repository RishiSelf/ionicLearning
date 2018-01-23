import { Component } from '@angular/core';

/**
 * Generated class for the DashboardSidebarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dashboard-sidebar',
  templateUrl: 'dashboard-sidebar.html'
})
export class DashboardSidebarComponent {

  text: string;

  constructor() {
    console.log('Hello DashboardSidebarComponent Component');
    this.text = 'Hello World this is Left Side bar';
  }

}
