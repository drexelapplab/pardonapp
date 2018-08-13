import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import { DashboardComponent} from "../dashboard-page/dashboard.component";
import { DataService } from "../_services/completion.service";

@Component({
  selector: 'achievements',
  templateUrl: 'achievements.component.html',
  styleUrls: [ 'achievements.component.css' ]
})
export class AchievementsComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  acompleteOne=false;
  acompleteTwo=false;
  acompleteThree=false;
  acompleteFour=false;
  acompleteFive=false;
  acompleteSix = false;
  backDisplay = 'none';
  displayMore1 = 'none';
  displayMore2 = 'none';
  displayMore3 = 'none';
  displayMore4 = 'none';
  displayMore5 = 'none';
  displayMore6 = 'none';

  constructor(private userService: UserService,
              private data: DataService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
    this.data.currentCompleteOne.subscribe(currentCompleteOne => this.acompleteOne = currentCompleteOne);
    this.data.currentCompleteTwo.subscribe(currentCompleteTwo => this.acompleteTwo = currentCompleteTwo);
    this.data.currentCompleteThree.subscribe(currentCompleteThree => this.acompleteThree = currentCompleteThree);
    this.data.currentCompleteFour.subscribe(currentCompleteFour => this.acompleteFour = currentCompleteFour);
    this.data.currentCompleteFive.subscribe(currentCompleteFive => this.acompleteFive = currentCompleteFive);
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers()
    });
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }
  opena1MoreInfo(){
    this.backDisplay = 'block';
    this.displayMore1 = 'block';
  }
  onClosea1MoreInfo(){
    this.backDisplay = 'none';
    this.displayMore1 = 'none';
  }

  opena2MoreInfo(){
    this.backDisplay = 'block';
    this.displayMore2 = 'block';
  }
  onClosea2MoreInfo(){
    this.backDisplay = 'none';
    this.displayMore2 = 'none';
  }

  opena3MoreInfo(){
    this.backDisplay = 'block';
    this.displayMore3 = 'block';
  }
  onClosea3MoreInfo(){
    this.backDisplay = 'none';
    this.displayMore3 = 'none';
  }

  opena4MoreInfo(){
    this.backDisplay = 'block';
    this.displayMore4 = 'block';
  }
  onClosea4MoreInfo(){
    this.backDisplay = 'none';
    this.displayMore4 = 'none';
  }

  opena5MoreInfo(){
    this.backDisplay = 'block';
    this.displayMore5 = 'block';
  }
  onClosea5MoreInfo(){
    this.backDisplay = 'none';
    this.displayMore5 = 'none';
  }
  opena6MoreInfo() {
    this.backDisplay = 'block';
    this.displayMore6 = 'block';
  }
  onClosea6MoreInfo(){
    this.backDisplay = 'none';
    this.displayMore6 = 'none';
  }
}


