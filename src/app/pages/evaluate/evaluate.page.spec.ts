import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvaluatePage } from './evaluate.page';

describe('EvaluatePage', () => {
  let component: EvaluatePage;
  let fixture: ComponentFixture<EvaluatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvaluatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
