import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {
  rememberAuth(credentials): any {
  
    console.log("bindas");
    
    localStorage.setItem('credentials', credentials);
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  methods =  [this.rememberAuth, this.logout, this.getUser];

}


export var LS_Provider: Array<any> = [
  { provide: LocalstorageService, useClass: LocalstorageService }
];