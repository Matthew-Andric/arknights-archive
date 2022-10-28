import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorsComponent } from './operators/operators.component';
import { OperatorComponent } from './operator/operator.component';
import { OperatorStatsComponent } from './operator-stats/operator-stats.component';
import { OperatorStatsLevelComponent } from './operator-stats-level/operator-stats-level.component';
import { OperatorSkillsComponent } from './operator-skills/operator-skills.component';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [
    AppComponent,
    OperatorsComponent,
    OperatorComponent,
    OperatorStatsComponent,
    OperatorStatsLevelComponent,
    OperatorSkillsComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
