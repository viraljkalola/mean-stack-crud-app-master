import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  submitted = false;
  regForm: FormGroup;

  constructor(public fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private ngZone: NgZone) {
    this.mainForm();
   }

   mainForm() {
    this.regForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],    
    });
  }  

  ngOnInit(): void {
  }

  regUser() {
    this.submitted = true;
    if (!this.regForm.valid) {
      return false;
    } else {
      return this.apiService.createReg(this.regForm.value).subscribe({
        complete: () => {
          console.log('Registration successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('reg-login/login'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }

}
