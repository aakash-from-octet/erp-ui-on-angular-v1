import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionBuilderComponent } from './question-builder/question-builder.component';
import { SscComponent } from './ssc/ssc.component';
import { AssessmentComponent } from './ssc/assessment/assessment.component';
import { ApprovalsComponent } from './ssc/approvals/approvals.component';
import { CreateAssessmentComponent } from './ssc/assessment/create-assessment/create-assessment.component';
import { ExamsComponent } from './ssc/exams/exams.component';
import { EmulatorComponent } from './emulator/emulator.component';
import { EmulatorDetailComponent } from './emulator/emulator-detail/emulator-detail.component';
import { PolicyComponent } from './ssc/policy/policy.component';
import { CreatePolicyComponent } from './ssc/policy/create-policy/create-policy.component';
import { CreateExamComponent } from './ssc/exams/create-exam/create-exam.component';
import { AssessmentSummaryComponent } from './ssc/exams/assessment-summary/assessment-summary.component';
import { AuditorEmulatorComponent } from './emulator/auditor-emulator/auditor-emulator.component';
import { StudentEmulatorComponent } from './emulator/student-emulator/student-emulator.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'question-builder', component: QuestionBuilderComponent },
  {
    path: 'ssc',
    component: SscComponent,

    children: [
      { path: '', redirectTo: 'assessment', pathMatch: 'full' },
      { path: 'assessment', component: AssessmentComponent },
      {
        path: 'assessment/create-assessment',
        component: CreateAssessmentComponent,
      },

      { path: 'ssc-approvals', component: ApprovalsComponent },
      { path: 'exams', component: ExamsComponent },

      {
        path: 'policy',
        component: PolicyComponent,
      },
      {
        path: 'policy/create-policy',
        component: CreatePolicyComponent,
      },
    ],
  },
  { path: 'ssc/exams/create-assessment', component: CreateExamComponent },
  {
    path: 'ssc/exams/assessment-summary',
    component: AssessmentSummaryComponent,
  },
  {
    path: 'emulator',
    component: EmulatorComponent,
  },
  { path: 'emulator-detail', component: EmulatorDetailComponent },
  { path: 'emulator-audior', component: AuditorEmulatorComponent },
  { path: 'emulator-student', component: StudentEmulatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
