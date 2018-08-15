import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { QuestSet1Component } from './questions-set1/questions-set1.component'
import { QuestSet2Component } from './questions-set2/questions-set2.component'
import { QuestSet3Component } from './questions-set3/questions-set3.component'
import { QuestSet4Component } from './questions-set4/questions-set4.component'
import { QuestSet5Component } from './questions-set5/questions-set5.component'
import { DashboardComponent } from './dashboard-page/dashboard.component'
import { AchievementsComponent } from './achievements/achievements.component'
import {DataDisplayComponent} from "./data-display/data-display.component";
import { PDFComponent}  from './pdf/pdf.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'questions-set1', component: QuestSet1Component},
    { path: 'questions-set2', component: QuestSet2Component},
    { path: 'questions-set3', component: QuestSet3Component},
    { path: 'questions-set4', component: QuestSet4Component},
    { path: 'questions-set5', component: QuestSet5Component},
    { path: 'achievements', component: AchievementsComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'data-display', component: DataDisplayComponent},
    { path: 'pdf', component: PDFComponent},

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
