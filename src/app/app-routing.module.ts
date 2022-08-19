import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CanLoadGuard } from './helper/can-load.guard';

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch:'full' },
  {
    path: 'admin',
    canLoad: [CanLoadGuard],
    loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
