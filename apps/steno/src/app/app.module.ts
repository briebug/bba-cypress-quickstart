import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@bba/material';
import { VoiceRecognitionModule } from '@bba/voice-recognition';
import { UiToolbarModule } from '@bba/ui-toolbar';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    RoutingModule,
    VoiceRecognitionModule,
    UiToolbarModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

