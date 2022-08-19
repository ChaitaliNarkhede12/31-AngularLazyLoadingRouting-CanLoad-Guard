import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationRoutingModule } from './certification-routing.module';
import { CertificationListComponent } from './certification-list/certification-list.component';


@NgModule({
  declarations: [
    CertificationListComponent
  ],
  imports: [
    CommonModule,
    CertificationRoutingModule
  ]
})
export class CertificationModule { }
