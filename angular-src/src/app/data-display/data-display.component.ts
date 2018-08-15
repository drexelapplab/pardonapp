import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  formData: any;
  displayedColumns = ['firstname', 'middlename', 'lastname', 'street', 'city', 'state', 'zipcode'];
  dataSource = new FormDataSource(this.api);
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAllData()
      .subscribe(res => {
        console.log(res);
        this.formData = res;
      }, err => {
        console.log(err);
      });
  }
}
export class FormDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getAllData();
  }

  disconnect() {

  }
}
