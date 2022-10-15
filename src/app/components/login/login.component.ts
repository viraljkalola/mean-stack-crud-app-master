import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loginForm: FormGroup;
  msg:string;

  constructor(public fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private ngZone: NgZone) {
    this.mainForm();
   }

   mainForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  } 

  ngOnInit(): void {
  }

  loginUser(){
    
    this.submitted = true;
    if (!this.loginForm.valid) {
      return false;
    } else {
      return this.apiService.checklogin(this.loginForm.value).subscribe({
        next: (x) => {
          if(x!=undefined){
          console.log('Login successfully !',x),
          localStorage.setItem("uname",this.loginForm.value.username);
          this.ngZone.run(() => this.router.navigateByUrl('/home'));
        }else{
          this.msg = "Invalid username or password";
        }
      },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }

}
