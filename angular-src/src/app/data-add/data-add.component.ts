import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../_services';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'data-add',
  templateUrl: './data-add.component.html',
  styleUrls: ['./data-add.component.css']
})
export class DataAddComponent implements OnInit {
  totalForm: FormGroup;
  firstname:string='';
  lastname:string='';
  middlename:string='';
  street:string='';
  city:string='';
  state:string='';
  zipcode:string='';
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.totalForm = this.formBuilder.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'middlename': [null, Validators.required],
      'street': [null, Validators.required],
      'city': [null, Validators.required],
      'state': [null, Validators.required],
      'zipcode': [null, Validators.required]
    });
  }
  onFormSubmit(form:NgForm) {
    this.api.postData(form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/data-detail-display', id]);
      }, (err) => {
        console.log(err);
      });
  }

}
