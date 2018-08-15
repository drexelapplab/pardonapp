import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'data-detail-display',
  templateUrl: './data-detail-display.component.html',
  styleUrls: ['./data-detail-display.component.css']
})
export class DataDetailDisplayComponent implements OnInit {
  formdata = {};
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id']);
  }

  getBookDetails(id) {
    this.api.getData(id)
      .subscribe(data => {
        console.log(data);
        this.formdata = data;
      });
  }
}
