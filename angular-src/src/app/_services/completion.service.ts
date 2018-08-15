import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private completeOne = new BehaviorSubject(false)
  private completeTwo = new BehaviorSubject(false)
  private completeThree = new BehaviorSubject(false)
  private completeFour =  new BehaviorSubject(false)
  private completeFive = new BehaviorSubject(false)
    private completeSix = new BehaviorSubject(false)

  currentCompleteOne = this.completeOne.asObservable()
  currentCompleteTwo = this.completeTwo.asObservable()
  currentCompleteThree = this.completeThree.asObservable()
  currentCompleteFour = this.completeFour.asObservable()
  currentCompleteFive = this.completeFive.asObservable()
  currentCompleteSix = this.completeSix.asObservable()

  constructor () {}

  changeStateOne(newState: boolean) {
    this.completeOne.next(newState)
  }

  changeStateTwo(newState: boolean) {
    this.completeTwo.next(newState)
  }

  changeStateThree(newState: boolean) {
    this.completeThree.next(newState)
  }

  changeStateFour(newState: boolean) {
    this.completeFour.next(newState)
  }

  changeStateFive(newState: boolean) {
    this.completeFive.next(newState)
  }

  changeStateSix(newState: boolean) {
    this.completeSix.next(newState)
  }
}
