import { Component, OnInit } from '@angular/core';
import { VoiceRecognitionService } from '@bba/voice-recognition';

@Component({
  selector: 'bba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  transcribe$;
  isRecording = false;

  constructor(private steno: VoiceRecognitionService) {
    this.steno.init();
  }

  ngOnInit(): void {
    this.transcribe$ = this.steno.transcribe$;
    this.steno.recording$.subscribe(isRecording => this.isRecording = isRecording);
  }

  record() {
    if(this.isRecording) {
      this.steno.stop();
    } else {
      this.steno.start();
    }
  }
}
