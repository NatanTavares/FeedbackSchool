import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExitComponent } from './exit.component';

describe('ExitComponent', () => {
  let component: ExitComponent;
  let fixture: ComponentFixture<ExitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
