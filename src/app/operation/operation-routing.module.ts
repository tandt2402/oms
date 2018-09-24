import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportMgmtComponent } from './report-mgmt/report-mgmt.component';
import { ChannelAccountComponent } from './channel-account/channel-account.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'operation-mgmt',
        pathMatch: 'prefix'
      },
      {
        path: 'channel-account',
        component: ChannelAccountComponent
      },
      {
        path: 'operation-mgmt',
        component: ReportMgmtComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule {}
