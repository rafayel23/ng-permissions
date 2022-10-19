import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgPermissionsModule } from './ng-permissions/ng-permissions.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPermissionsModule.forRoot({
      // play around with this values to change permissions
      users: { read: true, write: true, delete: true },
      projects: { read: true, write: true, delete: false },
      groups: { read: false, write: false, delete: false },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
