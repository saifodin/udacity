import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { SchoolPageComponent } from './school-page/school-page.component';
import { CoverSectionComponent } from './school-page/cover-section/cover-section.component';
import { ProgramsListComponent } from './school-page/programs-list/programs-list.component';
import { PathsSectionComponent } from './school-page/paths-section/paths-section.component';
import { ProgramsFeaturesComponent } from './school-page/programs-features/programs-features.component';
import { FreeCoursesSectionComponent } from './school-page/free-courses-section/free-courses-section.component';
import { InvestCareerComponent } from './school-page/invest-career/invest-career.component';
import { ProgramComponent } from './school-page/program/program.component';


@NgModule({
  declarations: [
    OverviewComponent,
    SchoolPageComponent,
    CoverSectionComponent,
    ProgramsListComponent,
    PathsSectionComponent,
    ProgramsFeaturesComponent,
    FreeCoursesSectionComponent,
    InvestCareerComponent,
    ProgramComponent,
    
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule { }
