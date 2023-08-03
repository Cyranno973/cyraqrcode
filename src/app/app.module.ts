import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxQRCodeModule} from "@techiediaries/ngx-qrcode";
import {FormsModule} from "@angular/forms";
import {ShareModule} from "ngx-sharebuttons";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {ShareButtonsPopupModule} from "ngx-sharebuttons/popup";
import {ShareButtonsModule} from "ngx-sharebuttons/buttons";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ClipboardModule} from "ngx-clipboard";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShareModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FontAwesomeModule,
    ShareButtonsModule,
    NgxQRCodeModule,
    ShareButtonsPopupModule,
    ClipboardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
