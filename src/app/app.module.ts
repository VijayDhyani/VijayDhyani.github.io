import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { UserNavbarComponent } from './user-interface/user-navbar/user-navbar.component';
import { UserLSideBarComponent } from './user-interface/user-lside-bar/user-lside-bar.component';
import { UserRSideBarComponent } from './user-interface/user-rside-bar/user-rside-bar.component';
import { UserMainComponent } from './user-interface/user-main/user-main.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { AdminLsideBarComponent } from './admin-interface/admin-lside-bar/admin-Lside-bar.component';
import { AdminMainComponent } from './admin-interface/admin-main/admin-main.component';
import { UserComponent } from './user/user.component';
import {DashboardComponent} from './Dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import { ChartComponent } from './chart/chart.component';
import { MapComponent } from './map/map.component';
import { FilterPipe } from './filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import { UserGeneratorComponent } from './user-generator/user-generator.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TestRunComponent } from './test-run/test-run.component';
import {AngularFireModule} from '@angular/fire';
import {FirebaseService} from './services/firebase.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'admin', component: AdminInterfaceComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'users', component: UserComponent},
      {path: 'users/newUser', component: UserComponent},
      {path: 'users/active', component: UserComponent},
      {path: 'users/inactive', component: UserComponent},
      {path: 'users/blocked', component: UserComponent},
      {path: 'users/:name/:id', component: UserDetailComponent},
    ]},
  {path: '**', component: NotFoundComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    UserInterfaceComponent,
    UserNavbarComponent,
    UserLSideBarComponent,
    UserRSideBarComponent,
    UserMainComponent,
    AdminInterfaceComponent,
    AdminLsideBarComponent,
    AdminMainComponent,
    UserComponent,
    DashboardComponent,
    ChartComponent,
    MapComponent,
    FilterPipe,
    UserGeneratorComponent,
    UserDetailComponent,
    TestRunComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCUZzjBxLg54j0xvz5B-DQUWhivoqgo05o',
      authDomain: 'mitrata-c8e8a.firebaseapp.com',
      databaseURL: 'https://mitrata-c8e8a.firebaseio.com',
      projectId: 'mitrata-c8e8a',
      storageBucket: 'mitrata-c8e8a.appspot.com',
      messagingSenderId: '376654149018',
      appId: '1:376654149018:web:37bb23ee4068f7fa0a7623',
      measurementId: 'G-W969ESBSH5'
    }),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
