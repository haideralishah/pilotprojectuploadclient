import { Component, OnInit, NgModule } from '@angular/core';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';
import {
  DashboardComponent
} from '../dashboard/dashboard.component';

import {
  PscComponent
} from '../psc/psc.component';
import {
  QualityComponent
} from '../quality/quality.component';
import {
  QuizComponent
} from '../quiz/quiz.component';
import {
  AttendanceComponent
} from '../attendance/attendance.component';


@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}


export const routes: Routes = [
  { path: '', redirectTo: 'main' },
  { path: 'main', component: DashboardComponent },  
  { path: 'attendance', component: AttendanceComponent },
  { path: 'psc', component: PscComponent },
  { path: 'quality', component: QualityComponent },
  { path: 'quiz', component: QuizComponent }
];


@NgModule({
  declarations: [
    AdminDashBoardComponent,
    DashboardComponent,
    PscComponent,
    AttendanceComponent
  ],
  exports: [
    AdminDashBoardComponent,
    DashboardComponent,
    PscComponent,
    AttendanceComponent
  ],
  imports: [RouterModule]
})
export class ChildRoutesComponentModule { }