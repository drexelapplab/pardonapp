import { Component, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {states, BasicInfo, completeOne} from '../data-model';
import { DataService } from "../_services/completion.service";

@Component({
  selector: 'questions-set1',
  templateUrl: 'questions-set1.component.html',
  styleUrls: ['questions-set1.component.css']
})
export class QuestSet1Component implements OnChanges {
  formPage1: FormGroup;
  states = states;
  completeOne = false;

  constructor(private fb: FormBuilder,
              private completionState: DataService) {
    this.createForm();
  }
  getComplete(){
    return this.completeOne;
  }
  createForm() {
    this.formPage1 = this.fb.group({
      first: ['', [Validators.required]],
      middle: ['', Validators.required],
      last: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });
  }
  ngOnChanges() {
    this.rebuildForm();
  }
  rebuildForm() {
    this.formPage1.reset()
  }
  onSubmit() {
    if (this.formPage1.valid) {
      this.completionState.changeStateOne(true);
      this.revert()
    }
  }
  revert() {
    this.rebuildForm();
  }
}
