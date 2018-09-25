import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NaviagtionComponent } from './naviagtion/naviagtion.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [BreadcrumbComponent, NaviagtionComponent, SidebarComponent],
  exports: [BreadcrumbComponent, NaviagtionComponent, SidebarComponent]
})
export class CoreModule {}
