import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
})

export class EmployeeCreateComponent implements OnInit {
  submitted = false;
  technologyForm: FormGroup;
  // EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() {}

  mainForm() {
    this.technologyForm = this.fb.group({
      technology: ['', [Validators.required]],
      CreatedBy: ['', [Validators.required]]     
    });
  }

  // Choose designation with select dropdown
  // updateProfile(e) {
  //   this.qualificationForm.get('designation').setValue(e, {
  //     onlySelf: true,
  //   });
  // }

  // Getter to access form control
  get myForm() {
    return this.technologyForm.controls;
  }

  onSubmit() {
    let uname = localStorage.getItem("uname");
    this.technologyForm.controls["CreatedBy"].setValue(uname);
    this.submitted = true;
    if (!this.technologyForm.valid) {
      return false;
    } else {
      return this.apiService.createTechnology(this.technologyForm.value).subscribe({
        complete: () => {
          console.log('Technology successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('home/employees-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
