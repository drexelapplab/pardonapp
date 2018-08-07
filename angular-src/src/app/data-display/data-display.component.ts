import { Component, OnInit } from '@angular/core';
import { ListService } from "../_services";
import { UserData } from '../../../../models/userdata'

@Component({
  selector: 'data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  private lists: UserData[] = [];
  constructor(private listServ: ListService) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.listServ.getAllLists().subscribe(response => this.lists = response)
  }

  public deleteList(list: UserData) {
    this.listServ.deleteList(list._id).subscribe(
      response => this.lists = this.lists.filter(lists => lists != list),
    )
  }

}
