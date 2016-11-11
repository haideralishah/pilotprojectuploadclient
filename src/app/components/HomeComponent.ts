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

@Component({
    selector: 'home',
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Please Sign In</h3>
                    </div>
                    <div class="panel-body">                        
                        <form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)" role="form">
                            <fieldset>
                                <div class="form-group">
                                    <input class="form-control" placeholder="User Name" [formControl]="myForm.controls['userName']" type="text" autofocus ngModel>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Password" [formControl]="myForm.controls['password']" type="password" ngModel>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input name="remember" type="checkbox" value="Remember Me">Remember Me
                                    </label>
                                </div>
                                <!-- Change this to a button or input when using this as a form -->        
                               
                                <button type="submit" class="btn btn-lg btn-success btn-block">Login</button>

                                <!-- <div *ngIf="!userName.valid || !password.valid" class="error-msg">Provide complete credentials!</div> -->

<div *ngIf="loading">loading...</div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>`
})
export class HomeComponent {
    loading: boolean;
    myForm: FormGroup;
    userName: AbstractControl;
    password: AbstractControl;
    constructor(fb: FormBuilder, public http: Http, private router: Router,) {
        this.myForm = fb.group({
            'userName': ['', Validators.required],
            'password': ['', Validators.required],
        });
        this.userName = this.myForm.controls['userName'];
        this.password = this.myForm.controls['password'];
    }


    onSubmit(credentials: any): void {
        console.log('you submitted value:', credentials);
        this.loading = true;
        this.http.post('http://localhost:5000/login', credentials)
            .subscribe((res: Response) => {
                this.loading = false;
                console.log(res);
                this.router.navigate(['./AdminDashBoard']);
            },
            (err: any) => { // on error
                console.log(err);
                this.loading = false;
            } );
    }
}
