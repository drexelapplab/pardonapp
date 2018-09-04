import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'; //Subscription are a core part of services that allow components to update and receive updated information from services

import { AlertService } from '../_services';

@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(message => {
            this.message = message; //When the alert is called it shows the message within the alert
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe(); //removes the alert when the component is ended
    }
}
