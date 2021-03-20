import { Component, OnInit } from '@angular/core';
import {UserModel} from '../user.model';
import {UserFilterService} from './UserFilter.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserFilterService]
})
export class UserComponent implements OnInit {
 users = [];
 userId: number = null;
  userName = '';
  userEmail = '';
  found: UserModel[] = [];
  displayUsers: UserModel[] = [];
  status;
  totalRecords: number;
  page: number;
  constructor(private filterService: UserFilterService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://mitrata-c8e8a.firebaseio.com/users.json').pipe(map(responseData => {
      const convData = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          convData.push({...responseData[key], userId: key.slice(1, key.length)});
        }
      }
      return convData;
    })).subscribe(convData => {
      this.users.push(...convData);
      console.log(this.users);
      this.totalRecords = this.users.length;
      console.log('hi');
    });
    this.status = this.route.snapshot.queryParams;
    this.route.queryParams.subscribe((st) => {
        this.status = st['status'];
        this.displayStatusUsers(this.status);
    });
  }
  filterUsers(): void {
    if (this.userId === null && this.userName === '' && this.userEmail === '') {
      console.log('At least one Query Required');
    }
    else {
    this.found = this.filterService.searchUser(this.users, this.userId, this.userName , this.userEmail);
    console.log(this.found);
    }
  }
  displayStatusUsers(status): void {
    console.log(status);
    this.displayUsers = this.filterService.statusUser(this.users, status);
    console.log(this.displayUsers);
  }
}
