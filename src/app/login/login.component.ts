import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute, public fireService: FirebaseService) { }

  ngOnInit(): void {
  }
  @ViewChild('email') email;
  @ViewChild('password') password;
  toRegistration() {
    this.router.navigate(['register']);
  }
  async login() {
    await  this.fireService.signIn(this.password.nativeElement.value, this.email.nativeElement.value);
  }
}
