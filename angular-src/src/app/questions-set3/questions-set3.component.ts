import { Component } from '@angular/core';

@Component({
  selector: 'questions-set3',
  templateUrl: 'questions-set3.component.html',
  styleUrls: [ 'questions-set3.component.css' ]
})
export class QuestSet3Component  {
  name = 'Angular 6';
  marked = false;
  caucasian = false;
  asian = false;
  aa = false;
  pi = false;
  na = false;
  me = false;
  constructor() {
  }

  toggleVisibility(e){
    this.marked= e.target.checked;
  }
}
