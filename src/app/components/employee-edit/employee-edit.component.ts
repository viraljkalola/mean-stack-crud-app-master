import { Technology } from './../../model/Employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})

export class EmployeeEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  technologyData: Technology[];
  // EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateTechnology();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getTechnology(id);
    this.editForm = this.fb.group({
      technology: ['', [Validators.required]]
    });
  }

  // Choose options with select-dropdown
  // updateProfile(e) {
  //   this.editForm.get('qaulification').setValue(e, {
  //     onlySelf: true,
  //   });
  // }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getTechnology(id) {
    this.apiService.getTechnologyid(id).subscribe((data) => {
      this.editForm.setValue({
        technology: data['technology']
      });
    });
  }

  updateTechnology() {
    this.editForm = this.fb.group({
      technology: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateTechnology(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('home/employees-list');
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }
}
