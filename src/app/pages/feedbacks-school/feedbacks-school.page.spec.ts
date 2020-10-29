import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedbacksSchoolPage } from './feedbacks-school.page';

describe('FeedbacksSchoolPage', () => {
  let component: FeedbacksSchoolPage;
  let fixture: ComponentFixture<FeedbacksSchoolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbacksSchoolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbacksSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
