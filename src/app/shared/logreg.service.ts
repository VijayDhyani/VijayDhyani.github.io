import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Injectable()
export class LogregService {
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  toLoginPage() {
    this.router.navigate(['login'] );
  }
  toRegisterPage() {
    this.router.navigate(['register']);
  }
}
