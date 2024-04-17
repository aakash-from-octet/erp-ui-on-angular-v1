import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AccountSignupComponent } from './account-signup/account-signup.component';
import { CreateAccountRoutingModule } from './create-account-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BasicDetailComponent } from './basic-detail/basic-detail.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { DocumentsComponent } from './documents/documents.component';
import { NzTableModule } from 'ng-zorro-antd/table';
@NgModule({
  declarations: [
    LayoutComponent,
    AccountSignupComponent,
    BasicDetailComponent,
    AdminDetailsComponent,
    AddressDetailsComponent,
    DocumentsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CreateAccountRoutingModule,
    NzCardModule,
    NzGridModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzStepsModule,
    NzUploadModule,
    NzSelectModule,
    NzTableModule,
  ],
})
export class CreateAccountModule {}
