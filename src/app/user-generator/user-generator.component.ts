import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-user-generator',
  templateUrl: './user-generator.component.html',
  styleUrls: ['./user-generator.component.css']
})
export class UserGeneratorComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  generateUsers() {
    this.http.get( 'https://randomuser.me/api/?results=5000').pipe(map(responseData => {
       const randomUsers = [];
       for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
           randomUsers.push(responseData[key]);
          }
        }
       return randomUsers;
    })).subscribe(randomUsers => {
      const userObject = {...randomUsers[0]};
      const users = Object.values(userObject);
      for (const user of users) {
        // if (users.indexOf(user) % 2 === 0) {
        //   user.status = 'online';
        // }
        // else {
        //   user.status = 'offline';
        // }
        this.http.post('https://mitrata-c8e8a.firebaseio.com/users.json', user).subscribe(user => {
          console.log('sent');
        });
      }
      console.log(users);
    });
  }
  deleteUsers() {
    this.http.delete('https://mitrata-c8e8a.firebaseio.com/users.json').subscribe(user => {
      console.log('deleted');
    });
  }
}
