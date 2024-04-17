// exam-agency-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyLayoutComponent } from './agency-layout/agency-layout.component';
import { SetupComponent } from './setup/setup.component';
import { ExamsComponent } from './exams/exams.component';
import { ExamDetailComponent } from './exams/exam-detail/exam-detail.component';
import { RequestExaminationComponent } from './exams/request-examination/request-examination.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { AgencyComponent } from './agency/agency.component';
import { UserComponent } from './user/user.component';
import { AgencyDetailComponent } from './agency/agency-detail/agency-detail.component';

const routes: Routes = [
  {
    path: 'exam-agency',
    component: AgencyLayoutComponent,

    children: [
      { path: '', redirectTo: 'setup', pathMatch: 'full' },
      { path: 'setup', component: SetupComponent },
      { path: 'exams', component: ExamsComponent },
      { path: 'approvals', component: ApprovalsComponent },
      {
        path: 'agency',
        component: AgencyComponent,
      },
      { path: 'agency/agency-detail', component: AgencyDetailComponent },
      { path: 'user', component: UserComponent },
    ],
  },
  {
    path: 'exam-agency/exams/request-examination',
    component: RequestExaminationComponent,
  },
  { path: 'exam-agency/exams/:id', component: ExamDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamAgencyRoutingModule {}
