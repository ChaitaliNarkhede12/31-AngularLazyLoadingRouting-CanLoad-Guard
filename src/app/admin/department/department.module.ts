import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';

import { DepartmentListComponent } from './department-list/department-list.component';


@NgModule({
  declarations: [ DepartmentListComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
