import { Component, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {states, LawyerInfo, completeFour} from '../data-model';
import { DataService } from "../_services/completion.service";

@Component({
    selector: 'questions-set4',
    templateUrl: 'questions-set4.component.html',
    styleUrls: ['questions-set4.component.css']
})
export class QuestSet4Component implements OnChanges {
    formPage1: FormGroup;
    states = states;
    completeFour = false;

    constructor(private fb: FormBuilder,
                private completionState: DataService) {
        this.createForm();
    }
    getComplete(){
        return this.completeFour;
    }
    createForm() {
        this.formPage1 = this.fb.group({
            lawyer_name: ['', [Validators.required]],
            lawyer_office: ['', Validators.required],
            lawyer_street: ['', Validators.required],
            lawyer_city: ['', Validators.required],
            state: ['', Validators.required],
            lawyer_zip: ['', Validators.required]
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
