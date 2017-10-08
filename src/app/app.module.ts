import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatabaseInfoComponent } from './database-info/database-info.component';
import { ProfileInputComponent } from './profile-input/profile-input.component';
import { ProfileIdinfoComponent } from './profile-idinfo/profile-idinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabaseInfoComponent,
    ProfileInputComponent,
    ProfileIdinfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
