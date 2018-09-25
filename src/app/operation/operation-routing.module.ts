import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabelMgmtComponent } from './label-mgmt/label-mgmt.component';
import { OperationComponent } from './operation.component';
import { AccountComponent } from './account/account.component';
import { ChannelComponent } from './channel/channel.component';
const routes: Routes = [
  {
    path: '',
    component: OperationComponent,
    children: [
      {
        path: '',
        redirectTo: 'channel/all-channel',
        pathMatch: 'prefix'
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'label-mgmt',
        component: LabelMgmtComponent
      },
      {
        path: 'channel/:channel-code',
        component: ChannelComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule {}
