import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { LoginRoutingModule } from './login-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { GetStartedComponent } from './get-started/get-started.component';
import { ScanQrComponent } from './scan-qr/scan-qr.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent,
    GetStartedComponent,
    ScanQrComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginRoutingModule,
    NzCardModule,
    NzGridModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzStepsModule,
    NzModalModule,
    RouterModule,
  ],
})
export class LoginModule {}
