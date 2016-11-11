import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {
  Router
} from '@angular/router';
import {
  AttendanceComponent
} from '../attendance/attendance.component';

const URL = 'http://localhost:5000/saveAttendance';


@Component({
  selector: 'app-uploaded-data',
  templateUrl: './uploaded-data.component.html',
  styleUrls: ['./uploaded-data.component.css'],
  inputs: ['uploadedData']
})
export class UploadedDataComponent implements OnInit {
  uploadedData: any;
  dataToSave: any;
  constructor(public http: Http, private router: Router) {

  }
  ngOnInit() {
    this.dataToSave = this.uploadedData;
  }

  deleteRow(data, index) {
    this.uploadedData.splice(index, 1);
    this.dataToSave = this.uploadedData;
  }

  saveAttendance() {
    this.http.post(URL, this.dataToSave)
      .subscribe((res: any) => {
        console.log('saved', res);
        this.uploadedData = undefined;
        this.dataToSave = undefined;
        this.router.navigate(['./AdminDashBoard']);
      },
      (err: any) => { // on error
        console.log(err);
      });
  }
}
