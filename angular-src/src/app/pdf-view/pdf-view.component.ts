import { Component, OnInit } from '@angular/core';
import {DataSource} from "@angular/cdk/collections";
import {ApiService} from "../_services";

@Component({
  selector: 'pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.css']
})
export class PdfViewComponent implements OnInit {
  formData: {};
  dataSource = new FormDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAllData()
      .subscribe(res => {
        console.log(res);
        this.formData = res[0];
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
