import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { FormsModule } from '@angular/forms';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService, ListService} from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { QuestSet1Component } from './questions-set1/questions-set1.component'
import { QuestSet2Component } from './questions-set2/questions-set2.component'
import { QuestSet3Component } from './questions-set3/questions-set3.component'
import { QuestSet4Component } from './questions-set4/questions-set4.component'
import { QuestSet5Component } from './questions-set5/questions-set5.component'
import { DashboardComponent } from './dashboard-page/dashboard.component';
import { AchievementsComponent } from './achievements/achievements.component'
import {DataService} from "./_services/completion.service";
import { DataDisplayComponent } from './data-display/data-display.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        QuestSet1Component,
        QuestSet2Component,
        QuestSet3Component,
        QuestSet4Component,
        QuestSet5Component,
        DashboardComponent,
        AchievementsComponent,
        DataDisplayComponent,
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        DataService,
        ListService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
