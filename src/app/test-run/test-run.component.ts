import { Component, OnInit } from '@angular/core';
import {TestModel} from './test.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test-run',
  templateUrl: './test-run.component.html',
  styleUrls: ['./test-run.component.css']
})
export class TestRunComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.http.post('https://3456e7a58bb6.ngrok.io/users/', new TestModel())
        .subscribe(testData => {
          console.log(testData);
        });
      this.http.get('https://3456e7a58bb6.ngrok.io/users/')
        .subscribe(postDta => {
          console.log(postDta);
        });
  }

}
