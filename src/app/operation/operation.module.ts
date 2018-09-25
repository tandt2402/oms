import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { AccountComponent } from './account/account.component';
import { LabelMgmtComponent } from './label-mgmt/label-mgmt.component';
import { OperationComponent } from './operation.component';
import { ChannelComponent } from './channel/channel.component';

@NgModule({
  imports: [CommonModule, OperationRoutingModule, SharedModule, CoreModule],
  declarations: [
    LabelMgmtComponent,
    OperationComponent,
    ChannelComponent,
    AccountComponent
  ]
})
export class OperationModule {}
