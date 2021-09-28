import { ParticapantsService } from './participants.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';

import { ParticipantsComponent } from './participants/participants.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    
    ParticipantsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ParticapantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
