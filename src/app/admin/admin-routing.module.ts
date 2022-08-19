import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanLoadGuard } from '../helper/can-load.guard';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'employee',
        canLoad: [CanLoadGuard],
        loadChildren: () => import('../admin/employee/employee.module').then(x => x.EmployeeModule)
      },
      {
        path: 'department',
        canLoad: [CanLoadGuard],
        loadChildren: () => import('../admin/department/department.module').then(x => x.DepartmentModule)
      },
      {
        path: 'certification',
        loadChildren: () => import('../admin/certification/certification.module').then(x => x.CertificationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
