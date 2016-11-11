import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

const URL = 'http://localhost:5000/uploadAngularBeautyData';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  filesToUpload: Array<File>;
  uploadedData: any;
  uploadedDataNotFind: any;
  constructor(public http: Http) {
    this.filesToUpload = [];
  }
  ngOnInit() {
  }
  uploadPsc(fileUp) {
    this.makeFileRequest(URL, [], this.filesToUpload).then((result) => {
      console.log(result);
      this.uploadedData = result;
      this.uploadedDataNotFind = this.uploadedData.dataToSave;
    }, (error) => {
      console.error(error);
    });

    // console.log(fileUp);
    // console.log(fileUp.value);
    // this.http.post('http://localhost:5000/upload', fileUp.value)
    //   .subscribe((res: any) => {

    //     let authRes = JSON.stringify(res);
    //     if (res._body == 'Authenticated for admin') {

    //     }
    //     else {

    //       console.log(res);
    //     }
    //   },
    //   (err: any) => { // on error
    //     console.log(err);


    //   });
  }



  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  makeFileRequest(URL: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for (var i = 0; i < files.length; i++) {
        formData.append("uploads[]", files[i], files[i].name);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open("POST", URL, true);
      xhr.send(formData);
    });
  }

}
