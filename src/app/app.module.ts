/*
 * Angular Imports
 */
import {
  NgModule,
  Component
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { HttpModule } from '@angular/http';
// import { FileUploader } from '../../node_modules/ng2-file-upload';

/*
 * Components
 */
import { HomeComponent } from './components/HomeComponent';
import { AboutComponent } from './components/AboutComponent';
import { ContactComponent } from './components/ContactComponent';
import { RoutesDemoApp } from './app.component';
import { TestingComponent } from './components/testing/testing.component';
// import { AdminDashBoardComponent } from './components/admin-dash-board/admin-dash-board.component';
import { LoginComponent } from './components/login/login.component';
import { LS_Provider } from './services/localstorage.service';
import { NavComponent } from './components/nav/nav.component';

import {
  routes as childRoutes,
  AdminDashBoardComponent,
  ChildRoutesComponentModule
} from './components/admin-dash-board/admin-dash-board.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PscComponent } from './components/psc/psc.component';
import { QualityComponent } from './components/quality/quality.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { UploadedDataComponent } from './components/uploaded-data/uploaded-data.component';

//require('./css/styles.scss');

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  { path: 'AdminDashBoard', component: AdminDashBoardComponent, children: childRoutes },
  { path: 'contact', component: ContactComponent },
  { path: 'login', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    RoutesDemoApp,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TestingComponent,
    AdminDashBoardComponent,
    LoginComponent,
    NavComponent,
    DashboardComponent,
    PscComponent,
    QualityComponent,
    QuizComponent,
    AttendanceComponent,
    UploadedDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // <-- routes
    FormsModule, // <-- add this
    ReactiveFormsModule, // <-- and this
    HttpModule // <--- right here
  ],
  bootstrap: [RoutesDemoApp],
  providers: [
    LS_Provider,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class RoutesDemoAppModule { }

