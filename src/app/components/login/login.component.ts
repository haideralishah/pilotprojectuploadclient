/*
 * Angular
 */
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

import { Http, Response } from '@angular/http';
import {
  Router
} from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service'
declare var emailjs: any;


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading: boolean;
  wrongAuth: boolean;
  myForm: FormGroup;
  userName: AbstractControl;
  password: AbstractControl;
  isRemember = false;

  constructor(fb: FormBuilder, public http: Http, private router: Router, public ls: LocalstorageService) {
    this.myForm = fb.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required],
    });
    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
  }


  sendEmail() {
    emailjs.send("gmail", "template_GdNFg9Nk", { to_name: "Haider", message_html: "Check this out!" });
  }

  onSubmit(credentials: any): void {
    console.log('you submitted value:', credentials);
    console.log(this.isRemember);
    this.wrongAuth = false;
    this.loading = true;
    this.http.post('http://localhost:5000/login', credentials)
      .subscribe((res: any) => {
        this.loading = false;
        let authRes = JSON.stringify(res);
        if (res._body == 'Authenticated for admin') {
          if (this.isRemember == true) {
            this.ls.rememberAuth(credentials);
          }
          this.router.navigate(['./AdminDashBoard']);
        }
        else {
          this.wrongAuth = true;
          console.log(res);
        }
      },
      (err: any) => { // on error
        console.log(err);

        this.loading = false;
      });
  }
}


