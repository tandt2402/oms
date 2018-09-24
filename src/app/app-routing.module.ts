import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './404/404.component';
import { LoginComponent } from './login/login.component';
import { OperationModule } from './operation/operation.module';
// import { AuthGuard } from './auth/auth-guard.service';
// import { DashBoardComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'operation', pathMatch: 'full' },
  {
    path: 'operation',
    loadChildren: () => OperationModule
  },
  { path: 'login', component: LoginComponent },
  // { path: 'login/:redirectUrl', component: LoginComponent },
  // {
  //   path: 'manager',
  //   loadChildren: 'app/manager/manager.module#ManagerModule',
  //   canLoad: [AuthGuard]
  // },
  // { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  // { path: 'pos', loadChildren: 'app/pos/pos.module#PosModule' },
  // {
  //   path: 'inventory',
  //   loadChildren: 'app/inventory/inventory.module#InventoryModule'
  // },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
