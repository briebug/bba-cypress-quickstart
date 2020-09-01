import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Lesson } from '@bba/api-interfaces';
import { MaterialModule } from '@bba/material';
import { LessonDetailsComponent } from './lesson-details.component';
import { mockLesson } from '@bba/testing';

describe('LessonDetailsComponent', () => {
  let component: LessonDetailsComponent;
  let fixture: ComponentFixture<LessonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LessonDetailsComponent
      ],
      imports: [
        FormsModule,
        MaterialModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonDetailsComponent);
    component = fixture.componentInstance;
    component.lesson = mockLesson;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
