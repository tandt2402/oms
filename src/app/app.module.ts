import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './404/404.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { OperationModule } from './operation/operation.module';
import { ErrorComponent } from './500/500.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    OperationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
