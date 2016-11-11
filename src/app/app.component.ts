import { Component } from '@angular/core';

@Component({
  selector: 'router-app',
  template: `
  <div>
      <testing></testing>
      <router-outlet></router-outlet>
  </div>
  `
})
export class RoutesDemoApp {
}



  // <nav>
  //     <a>Navigation:</a>
  //     <ul>
  //       <li><a [routerLink]="['/home']">Home</a></li>
  //       <li><a [routerLink]="['about']">About</a></li>
  //       <li><a [routerLink]="['contact']">Contact us</a></li>
  //     </ul>
  //   </nav>