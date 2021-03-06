import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { HomeComponent } from './home/home.component';
import { SchoolPageComponent } from './school-page/school-page.component';
import { CoverSectionComponent } from './school-page/cover-section/cover-section.component';
import { ProgramsListComponent } from './school-page/programs-list/programs-list.component';
import { PathsSectionComponent } from './school-page/paths-section/paths-section.component';
import { ProgramsFeaturesComponent } from './school-page/programs-features/programs-features.component';
import { FreeCoursesSectionComponent } from './school-page/free-courses-section/free-courses-section.component';
import { InvestCareerComponent } from './school-page/invest-career/invest-career.component';
import { ProgramComponent } from './school-page/program/program.component';
import { HeroHomeComponent } from './home/hero-home/hero-home.component';
import { ProvenResultsHomeComponent } from './home/proven-results-home/proven-results-home.component';
import { TalentHomeComponent } from './home/talent-home/talent-home.component';
import { SchoolsWheelHomeComponent } from './home/schools-wheel-home/schools-wheel-home.component';
import { OutcomesHomeComponent } from './home/schools-wheel-home/outcomes-home/outcomes-home.component';
import { LogoGardenHomeComponent } from './home/logo-garden-home/logo-garden-home.component';
import { BannerBackgroundHomeComponent } from './home/banner-background-home/banner-background-home.component';


@NgModule({
  declarations: [
    OverviewComponent,
    HomeComponent,
    SchoolPageComponent,
    CoverSectionComponent,
    ProgramsListComponent,
    PathsSectionComponent,
    ProgramsFeaturesComponent,
    FreeCoursesSectionComponent,
    InvestCareerComponent,
    ProgramComponent,
    HeroHomeComponent,
    ProvenResultsHomeComponent,
    TalentHomeComponent,
    SchoolsWheelHomeComponent,
    OutcomesHomeComponent,
    LogoGardenHomeComponent,
    BannerBackgroundHomeComponent,
    
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule { }
