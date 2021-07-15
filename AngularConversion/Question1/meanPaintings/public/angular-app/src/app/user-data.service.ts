import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { User } from './register/register.component';



@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  private apiBaseUrl: string = "http://localhost:5050/api"

  constructor(private http: HttpClient) { }


  public register(value: JSON): Promise<User[]> {
    const url: string = this.apiBaseUrl + "/users/register";
    return this.http.post(url, value).toPromise()
      .then(response => response as User[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.log("Something went wrong", error);
    return Promise.reject(error.message || error);

  }
}
