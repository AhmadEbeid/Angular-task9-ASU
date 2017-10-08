import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DatabaseInfoComponent } from './database-info/database-info.component';
import { ProfileInputComponent } from './profile-input/profile-input.component';
import { ProfileIdinfoComponent } from './profile-idinfo/profile-idinfo.component';

import { ServerConnectionsService } from './server-connections.service';

@NgModule({
  declarations: [
    AppComponent,
    DatabaseInfoComponent,
    ProfileInputComponent,
    ProfileIdinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ServerConnectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
