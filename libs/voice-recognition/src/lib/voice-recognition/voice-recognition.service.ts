import { Injectable } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, map, switchMap, takeUntil, tap } from 'rxjs/operators';

const webkitSpeechRecognition = window['webkitSpeechRecognition'];

@Injectable({
  providedIn: 'root',
})
export class VoiceRecognitionService {
  private recognition = new webkitSpeechRecognition();
  private recording = new Subject<boolean>();

  transcribe$;
  startRecording$;
  stopRecording$;

  recording$ = this.recording.asObservable();

  constructor() {}

  // Given I am on the login page
  // When I login as a reporter
  // Then I should be on the reports page

  init() {
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.transcribe$ = fromEvent(this.recognition, 'result').pipe(
      debounceTime(100),
      map((event: SpeechRecognitionEvent) => event.results[0]),
      map((result: SpeechRecognitionResult) => result[0]),
      map((result: SpeechRecognitionAlternative) => result.transcript),
      map((result) => this.parseCucumberKeywords(result)),
      tap((result) => console.log('Transcribing:', result))
    );

    this.startRecording$ = fromEvent(this.recognition, 'start');
    this.stopRecording$ = fromEvent(this.recognition, 'end');

    this.startRecording$.pipe(
      switchMap((event) =>
        this.transcribe$.pipe(takeUntil(this.stopRecording$))
      )
    );
  }

  start() {
    console.log('Recording: Start');
    this.recording.next(true);
    this.recognition.start();
  }

  stop() {
    this.recording.next(false);
    this.recognition.stop();
    console.log('Recording: Stop');
  }

  private parseCucumberKeywords(text: string) {
    const keywords = [
      'given',
      'when',
      'then',
      'and',
      'but',
    ];

    return keywords.reduce((acc, keyword) => {
      const regex = new RegExp(keyword, 'g');
      return acc.replace(regex, `\n${this.capitalize(keyword)}`);
    }, text);
  }

  private capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
}
