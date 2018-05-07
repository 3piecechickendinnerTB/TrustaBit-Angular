import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';


import { AppComponent } from './app.component';

import { routing } from './routing/app.routing';

import { ClFooterComponent } from './components/client/cl-footer/cl-footer.component';
import { ClHeaderComponent } from './components/client/cl-header/cl-header.component';
import { ClHomeComponent } from './components/client/cl-home/cl-home.component';
import { ClContainerComponent } from './components/client/cl-container/cl-container.component';
import { ClWalletComponent } from './components/client/cl-wallet/cl-wallet.component';
import { ClProfileComponent } from './components/client/cl-profile/cl-profile.component';
import { ClLoginRegComponent } from './components/client/cl-login-reg/cl-login-reg.component';


@NgModule({
  declarations: [
    AppComponent,

    ClContainerComponent,
    ClFooterComponent,
    ClHeaderComponent,
    ClHomeComponent,
    ClWalletComponent,
    ClProfileComponent,
    ClLoginRegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
