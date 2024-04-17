import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuillModule } from 'ngx-quill';

// nz modules
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzListModule } from 'ng-zorro-antd/list';
// dashboard component
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { LoginModule } from './login/login.module';
import { CreateAccountModule } from './create-account/create-account.module';
import { SubHeaderComponent } from './dashboard/sub-header/sub-header.component';
import { ColorCardsComponent } from './dashboard/color-cards/color-cards.component';
import { QuestionListComponent } from './dashboard/question-list/question-list.component';
import { QuestionGridComponent } from './dashboard/question-grid/question-grid.component';
import { RevertedListComponent } from './dashboard/reverted-list/reverted-list.component';
import { RevertedGridComponent } from './dashboard/reverted-grid/reverted-grid.component';
import { QuestionBuilderComponent } from './question-builder/question-builder.component';
import { BuilderHeaderComponent } from './question-builder/builder-header/builder-header.component';
import { AuditLogComponent } from './question-builder/audit-log/audit-log.component';
import { ApplicableExamComponent } from './question-builder/applicable-exam/applicable-exam.component';
import { ComplexityComponent } from './question-builder/complexity/complexity.component';
import { PreviewComponent } from './question-builder/preview/preview.component';
import { AnnotationComponent } from './component/annotation/annotation.component';
import { ReviewListComponent } from './dashboard/review-list/review-list.component';
import { ReviewGridComponent } from './dashboard/review-grid/review-grid.component';
import { EvaluatorHeaderComponent } from './question-builder/evaluator-header/evaluator-header.component';
import { CommentComponent } from './question-builder/comment/comment.component';
import { TranslatorHeaderComponent } from './question-builder/translator-header/translator-header.component';
import { LogoComponent } from './component/logo/logo.component';
import { TransevalHeaderComponent } from './question-builder/transeval-header/transeval-header.component';
import { VetterHeaderComponent } from './question-builder/vetter-header/vetter-header.component';
import { EvaluatorViewComponent } from './question-builder/evaluator-view/evaluator-view.component';
import { TranslatorViewComponent } from './question-builder/translator-view/translator-view.component';
import { TransevalViewComponent } from './question-builder/transeval-view/transeval-view.component';
import { VetterViewComponent } from './question-builder/vetter-view/vetter-view.component';
import { TextEditorComponent } from './component/text-editor/text-editor.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { InputMaskModule } from '@ngneat/input-mask';

// Agency component
import { ExamAgencyModule } from './exam-agency/exam-agency.module';
import { SscComponent } from './ssc/ssc.component';
import { SscHeaderComponent } from './ssc/ssc-header/ssc-header.component';
import { AssessmentComponent } from './ssc/assessment/assessment.component';
import { ApprovalsComponent } from './ssc/approvals/approvals.component';
import { CreateAssessmentComponent } from './ssc/assessment/create-assessment/create-assessment.component';
import { BasicDetailsComponent } from './ssc/assessment/create-assessment/basic-details/basic-details.component';
import { SectionConfigurationComponent } from './ssc/assessment/create-assessment/section-configuration/section-configuration.component';
import { GradingDisplayComponent } from './ssc/assessment/create-assessment/grading-display/grading-display.component';
import { PatternMatchingComponent } from './ssc/assessment/create-assessment/pattern-matching/pattern-matching.component';
import { OverviewComponent } from './ssc/assessment/create-assessment/overview/overview.component';
import { ExamsComponent } from './ssc/exams/exams.component';
import { DrawerContentComponent } from './ssc/approvals/drawer-content/drawer-content.component';
import { EmulatorComponent } from './emulator/emulator.component';
import { EmulatorHeaderComponent } from './emulator/emulator-header/emulator-header.component';
import { EmulatorDetailComponent } from './emulator/emulator-detail/emulator-detail.component';
import { PolicyComponent } from './ssc/policy/policy.component';
import { CreatePolicyComponent } from './ssc/policy/create-policy/create-policy.component';
import { PolicyBasicDetailsComponent } from './ssc/policy/create-policy/policy-basic-details/policy-basic-details.component';
import { PolicyOverviewComponent } from './ssc/policy/create-policy/policy-overview/policy-overview.component';
import { ConditionsComponent } from './ssc/policy/create-policy/conditions/conditions.component';
import { WorkflowComponent } from './ssc/policy/create-policy/workflow/workflow.component';
import { ExamListComponent } from './ssc/exams/exam-list/exam-list.component';
import { CreateExamComponent } from './ssc/exams/create-exam/create-exam.component';
import { DraftComponent } from './ssc/exams/create-exam/draft/draft.component';

import { SectionComponent } from './ssc/exams/create-exam/section/section.component';
import { PreviewDetailsComponent } from './ssc/exams/create-exam/preview-details/preview-details.component';
import { SourceComponent } from './ssc/exams/create-exam/source/source.component';
import { AssessmentSummaryComponent } from './ssc/exams/assessment-summary/assessment-summary.component';
import { RowCardComponent } from './ssc/exams/assessment-summary/row-card/row-card.component';
import { InstructionsComponent } from './ssc/exams/create-exam/instructions/instructions.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { Section1Component } from './ssc/exams/assessment-summary/section1/section1.component';
import { SourceCardComponent } from './ssc/exams/assessment-summary/source-card/source-card.component';
import { ExclusionsComponent } from './ssc/exams/assessment-summary/exclusions/exclusions.component';
import { GeneralInstructionComponent } from './ssc/exams/assessment-summary/general-instruction/general-instruction.component';
import { DashAuditComponent } from './ssc/exams/assessment-summary/dash-audit/dash-audit.component';
import { SectionalInstructionComponent } from './ssc/exams/assessment-summary/sectional-instruction/sectional-instruction.component';
import { VendorAllocationComponent } from './ssc/exams/exam-list/vendor-allocation/vendor-allocation.component';
import { DistributionComponent } from './ssc/exams/exam-list/distribution/distribution.component';
import { GenerationComponent } from './ssc/exams/exam-list/generation/generation.component';
import { AllocationTableComponent } from './ssc/exams/exam-list/allocation-table/allocation-table.component';
import { StudentEmulatorComponent } from './emulator/student-emulator/student-emulator.component';
import { AuditorEmulatorComponent } from './emulator/auditor-emulator/auditor-emulator.component';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SubHeaderComponent,
    ColorCardsComponent,
    QuestionListComponent,
    QuestionGridComponent,
    RevertedListComponent,
    RevertedGridComponent,
    QuestionBuilderComponent,
    BuilderHeaderComponent,
    AuditLogComponent,
    ApplicableExamComponent,
    ComplexityComponent,
    PreviewComponent,
    AnnotationComponent,
    ReviewListComponent,
    ReviewGridComponent,
    EvaluatorHeaderComponent,
    CommentComponent,
    TranslatorHeaderComponent,
    LogoComponent,
    TransevalHeaderComponent,
    VetterHeaderComponent,
    EvaluatorViewComponent,
    TranslatorViewComponent,
    TransevalViewComponent,
    VetterViewComponent,
    TextEditorComponent,
    SscComponent,
    SscHeaderComponent,
    AssessmentComponent,
    ApprovalsComponent,
    CreateAssessmentComponent,
    BasicDetailsComponent,
    SectionConfigurationComponent,
    GradingDisplayComponent,
    PatternMatchingComponent,
    OverviewComponent,
    ExamsComponent,
    DrawerContentComponent,
    EmulatorComponent,
    EmulatorHeaderComponent,
    EmulatorDetailComponent,
    PolicyComponent,
    CreatePolicyComponent,
    PolicyBasicDetailsComponent,
    PolicyOverviewComponent,
    ConditionsComponent,
    WorkflowComponent,
    ExamListComponent,
    CreateExamComponent,
    DraftComponent,

    SectionComponent,
    PreviewDetailsComponent,
    SourceComponent,
    AssessmentSummaryComponent,
    RowCardComponent,
    InstructionsComponent,
    Section1Component,
    SourceCardComponent,
    ExclusionsComponent,
    GeneralInstructionComponent,
    DashAuditComponent,
    SectionalInstructionComponent,
    VendorAllocationComponent,
    DistributionComponent,
    GenerationComponent,
    AllocationTableComponent,
    StudentEmulatorComponent,
    AuditorEmulatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    BrowserAnimationsModule,
    NgOtpInputModule,

    // nz modules
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzSpaceModule,
    NzMenuModule,
    NzDropDownModule,
    NzIconModule,
    NzImageModule,
    NzLayoutModule,
    NzTableModule,
    NzDividerModule,
    NzTabsModule,
    NzTypographyModule,
    NzInputModule,
    NzRadioModule,
    NzSelectModule,
    NzModalModule,
    NzCheckboxModule,
    NzTagModule,
    NzSwitchModule,
    NzUploadModule,
    NzStepsModule,
    NzDrawerModule,
    NzInputNumberModule,
    NzCollapseModule,
    NzProgressModule,
    NzToolTipModule,
    NzListModule,
    // dashboard component
    LoginModule,
    CreateAccountModule,
    QuillModule.forRoot(),
    InputMaskModule.forRoot({ inputSelector: 'input', isAsync: true }),
    ExamAgencyModule,
    Ng2GoogleChartsModule,
    NzTreeSelectModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
