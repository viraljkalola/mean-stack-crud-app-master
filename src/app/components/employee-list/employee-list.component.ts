import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})

export class EmployeeListComponent implements OnInit {
  Technology: any = [];

  constructor(private apiService: ApiService) {
    this.readTechnology();
  }

  ngOnInit() {}

  readTechnology() {
    this.apiService.getTechnology().subscribe((data) => {
      this.Technology = data;
    });
  }

  removeTechnology(technology, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteTechnology(technology._id,technology).subscribe((data) => {
        this.Technology.splice(index, 1);
      });
    }
  }
}
