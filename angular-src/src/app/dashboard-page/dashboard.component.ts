import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit{
  backDisplay='none';
  displayMenu='none';
  displayOne='none';
  displayTwo='none';
  displayThree='none';
  displayFour='none';
  displayFive='none';
    constructor() {}
  ngOnInit() {}
  openModalMenu(){//Modal and backdrop functions similar to the achievements page
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
