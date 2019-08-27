import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { E2e3exService } from './e2e3ex/e2e3ex.service';
import { E2e3ExModule } from './e2e3ex/e2e3ex.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
       
        E2e3ExModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[E2e3exService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'e2e3'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('e2e3');
  });


});
