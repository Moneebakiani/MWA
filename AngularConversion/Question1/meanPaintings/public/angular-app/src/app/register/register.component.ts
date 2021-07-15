import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';
import { UsersDataService } from '../user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  err = "";
  message = "";
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    passwordrepeat: new FormControl(''),

  });
  users: User[] = [];

  constructor(private userdataservice: UsersDataService, private router: Router) { }

  ngOnInit(): void {
  }
  register(): void {
    console.log(this.registerForm.value);
    const user = { username: this.registerForm.value.username, password: this.registerForm.value.password };
    if (!this.registerForm.value.username || !this.registerForm.value.password) {
      this.err = "Please enter username and password";
    }
    else {
      if (this.registerForm.value.password !== this.registerForm.value.passwordrepeat) {
        this.err = "Please make sure the password match";
      }
      else {

        this.userdataservice.register(this.registerForm.value).then(() => {
          this.message = "Successful Registeration";
          this.err = "";
        });

      }
    }
    this.router.navigateByUrl("/register");

  }

}
export class User {
  username!: string;
  password!: string;

}
