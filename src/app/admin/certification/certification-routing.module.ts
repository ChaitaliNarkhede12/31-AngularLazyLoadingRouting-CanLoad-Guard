import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CertificationListComponent } from './certification-list/certification-list.component';

const routes: Routes = [
  {
    path: '',
    component: CertificationListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificationRoutingModule { }
