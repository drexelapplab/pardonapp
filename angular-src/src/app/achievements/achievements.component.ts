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
}


