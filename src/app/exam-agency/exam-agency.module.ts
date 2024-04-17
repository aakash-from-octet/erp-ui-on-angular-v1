import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ExamAgencyRoutingModule } from './exam-agency-routing.module';
import { AgencyLayoutComponent } from './agency-layout/agency-layout.component';
import { AgencyHeaderComponent } from './agency-header/agency-header.component';
import { SetupComponent } from './setup/setup.component';
import { FormsModule } from '@angular/forms';

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
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { ExamsComponent } from './exams/exams.component';
import { ExamDetailComponent } from './exams/exam-detail/exam-detail.component';
import { RequestExaminationComponent } from './exams/request-examination/request-examination.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { ApproveDetailsComponent } from './approvals/approve-details/approve-details.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { AgencyComponent } from './agency/agency.component';
import { UserComponent } from './user/user.component';
import { AgencyDetailComponent } from './agency/agency-detail/agency-detail.component';

@NgModule({
  declarations: [
    AgencyLayoutComponent,
    AgencyHeaderComponent,
    SetupComponent,
    ExamsComponent,
    ExamDetailComponent,
    RequestExaminationComponent,
    ApprovalsComponent,
    ApproveDetailsComponent,
    AgencyComponent,
    UserComponent,
    AgencyDetailComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ExamAgencyRoutingModule,
    FormsModule,
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
    NzFormModule,
    NzPopoverModule,
    NzProgressModule,
    NzDrawerModule,
    //extra
    NgOtpInputModule,
  ],
})
export class ExamAgencyModule {}
