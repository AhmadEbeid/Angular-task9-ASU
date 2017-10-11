import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DatabaseInfoComponent } from './database-info/database-info.component';
import { ProfileInputComponent } from './profile-input/profile-input.component';
import { ProfileIdinfoComponent } from './profile-idinfo/profile-idinfo.component';

import { ServerConnectionsService } from './server-connections.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabaseInfoComponent,
    ProfileInputComponent,
    ProfileIdinfoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([ 
      {path:'',component: NavbarComponent},// empty string: defult url 
      {path:'Home',component:ProfileInputComponent},
       {path:'DataBase',component: ProfileIdinfoComponent }
      ]) 
  ],
  providers: [ServerConnectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
