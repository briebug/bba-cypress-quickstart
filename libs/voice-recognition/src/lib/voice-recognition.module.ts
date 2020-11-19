import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoiceRecognitionService } from './voice-recognition/voice-recognition.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    VoiceRecognitionService,
  ]
})
export class VoiceRecognitionModule {}
