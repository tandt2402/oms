import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportMgmtComponent } from './report-mgmt/report-mgmt.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'operation-mgmt',
    pathMatch: 'full'
  },
  // {
  //   path: '/',
  //   redirectTo: 'operation-mgmt',
  //   pathMatch: 'full'
  // },
  {
    path: 'operation-mgmt',
    component: ReportMgmtComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule {}
