import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { ReportMgmtComponent } from './report-mgmt/report-mgmt.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [CommonModule, OperationRoutingModule, SharedModule, CoreModule],
  declarations: [ReportMgmtComponent]
})
export class OperationModule {}
