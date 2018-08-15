import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, NgForm} from '@angular/forms';
import {states, BasicInfo, completeOne} from '../data-model';
import { DataService } from "../_services/completion.service";
import {ApiService} from "../_services";
import {Router} from "@angular/router";

@Component({
  selector: 'questions-set1',
  templateUrl: 'questions-set1.component.html',
  styleUrls: ['questions-set1.component.css']
})
export class QuestSet1Component implements  OnInit {
  totalForm: FormGroup;
  firstname:string='';
  lastname:string='';
  middlename:string='';
  street:string='';
  city:string='';
  state:string='';
  zipcode:string='';
  states = states;
  completeOne = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder,
              private completionState: DataService) {}
  getComplete(){
    return this.completeOne;
  }
  ngOnInit(){
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
        this.router.navigateByUrl('/question-set1-submit');
      }, (err) => {
        console.log(err);
      });
    this.completionState.changeStateOne(true);
  }
}
