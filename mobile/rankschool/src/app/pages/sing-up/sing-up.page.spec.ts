import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingUpPage } from './sing-up.page';

describe('SingUpPage', () => {
  let component: SingUpPage;
  let fixture: ComponentFixture<SingUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingUpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
