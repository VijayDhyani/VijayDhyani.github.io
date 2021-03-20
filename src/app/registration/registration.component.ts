import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../user.model';
import {FirebaseService} from '../services/firebase.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
@ViewChild('firstName') firstName: ElementRef;
@ViewChild('lastName') lastName: ElementRef;
email;
password;
password2;

 constructor(private http: HttpClient, public fireService: FirebaseService) { }
  ngOnInit(): void {
  }
  validateEmail = function(): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.email).toLowerCase());
  };
 validatePassword = () => {
   const Res = /[A-Z]/g;
   const r3s = /[0-9]/g;
   const r$s = /[!@#$%^&*)(+=._-]/g;
   if (this.password.length < 6) {
      document.getElementById('p1').classList.add('text-danger');
   }
   if (this.password.length > 6) {
     if (document.getElementById('p1').classList.contains('text-danger')) {
       document.getElementById('p1').className = 'text-success';
     }
   }
   if (!this.password.match(Res)) {
     document.getElementById('p2').classList.add('text-danger');
   }
   if (this.password.match(Res)) {
     if (document.getElementById('p2').classList.contains('text-danger')) {
       document.getElementById('p2').className = 'text-success';
     }
   }
   if (!this.password.match(r3s)) {
     document.getElementById('p3').classList.add('text-danger');
   }
   if (this.password.match(r3s)) {
     if (document.getElementById('p3').classList.contains('text-danger')) {
       document.getElementById('p3').className = 'text-success';
     }
   }
   if (!this.password.match(r$s)) {
     document.getElementById('p4').classList.add('text-danger');
   }
   if (this.password.match(r$s)) {
     if (document.getElementById('p4').classList.contains('text-danger')) {
       document.getElementById('p4').className = 'text-success';
     }
   }
   if (this.password.indexOf(' ') >= 0) {
    document.getElementById('p5') .classList.add('text-danger');
   }
   if (this.password.indexOf(' ') < 0) {
     if (document.getElementById('p5').classList.contains('text-danger')) {
       document.getElementById('p5').className = 'text-success';
     }
   }
 }
 checkPasswords(): boolean {
   if ( this.password !== null && this.password2 !== null ) {
     return this.password === this.password2;
   }
 }
 onSubmit(userData: UserModel): void {
    this.http
    .post('https://mitrata-c8e8a.firebaseio.com/users.json', userData)
    .subscribe(responseData => {
      console.log(responseData);
    });
    this.fireService.signUp(this.email, this.password);
 }
}
