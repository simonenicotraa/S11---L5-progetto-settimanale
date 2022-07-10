import { IAuthData } from './../../auth/interfaces/iauth-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ISignupData } from 'src/app/auth/interfaces/isignup-data';



@Component({
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss']
})
export class UsersPage implements OnInit {

   users: ISignupData[] = [];
  error = undefined;

  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

/*   getAllUsers() {              ============corretto===============
    console.log('Chiamata Ajax al server')
    this.authService.authSubject.subscribe(userLogin => {
      this.http.get<IAuthData[]>('http://localhost:4201/users', {
        headers: new HttpHeaders({ "Authorization": "Bearer " + userLogin?.accessToken})})
        .subscribe(
          resp => {
            console.log(resp)
            this.users = resp;

          },
          err => {
            console.log(err)
            this.error = err.error
          }
        )
    })
  } */



   getAllUsers() {
    console.log('Chiamata Ajax al server')
    this.authService.authSubject.subscribe(userLogin => {
      this.http.get<ISignupData[]>('http://localhost:4201/users', {
        headers: new HttpHeaders({ "Authorization": "Bearer " + userLogin?.accessToken})})
        .subscribe(
          resp => {
            console.log(resp)
            this.users = resp;

          },
          err => {
            console.log(err)
            this.error = err.error
          }
        )
    })
  }
clicca(){
  console.log(this.users)
}
  displayedColumns: string[] = ['firstname', 'lastname', 'email'];
  dataSource = this.users;
  }
/* } */
