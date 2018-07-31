import { Component, OnInit } from '@angular/core'
import { DataService } from "../_services/completion.service";

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit{
  acompleteOne=false;
  acompleteTwo=false;
  acompleteThree=false;
  acompleteFour=false;
  acompleteFive=false;
  backDisplay='none';
  displayMenu='none';
  displayOne='none';
  displayTwo='none';
  displayThree='none';
  displayFour='none';
  displayFive='none';
    constructor(private data: DataService) {}
  ngOnInit() {
    this.data.currentCompleteOne.subscribe(currentCompleteOne => this.acompleteOne = currentCompleteOne);
    this.data.currentCompleteTwo.subscribe(currentCompleteTwo => this.acompleteTwo = currentCompleteTwo);
    this.data.currentCompleteThree.subscribe(currentCompleteThree => this.acompleteThree = currentCompleteThree);
    this.data.currentCompleteFour.subscribe(currentCompleteFour => this.acompleteFour = currentCompleteFour);
    this.data.currentCompleteFive.subscribe(currentCompleteFive => this.acompleteFive = currentCompleteFive);
  }
  openModalMenu(){
    this.backDisplay='block';
    this.displayMenu='block';
  }
  onCloseHandledMenu(){
    this.backDisplay='none';
    this.displayMenu='none';
  }
  openModalOne(){
      this.backDisplay='block';
      this.displayOne='block';
  }
  onCloseHandledOne(){
    this.backDisplay='none';
    this.displayOne='none';
  }
  openModalTwo(){
    this.backDisplay='block';
    this.displayTwo='block';
  }
  onCloseHandledTwo(){
    this.backDisplay='none';
    this.displayTwo='none';
  }
  openModalThree(){
      this.backDisplay='block';
      this.displayThree='block';
  }
  onCloseHandledThree(){
    this.backDisplay='none';
    this.displayThree='none';
  }
  openModalFour(){
    this.backDisplay='block';
    this.displayFour='block';
  }
  onCloseHandledFour(){
    this.backDisplay='none';
    this.displayFour='none';
  }
  openModalFive(){
    this.backDisplay='block';
    this.displayFive='block';
  }
  onCloseHandledFive(){
    this.backDisplay='none';
    this.displayFive='none';
  }
}
