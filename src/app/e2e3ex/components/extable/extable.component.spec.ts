import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtableComponent } from './extable.component';

describe('ExtableComponent', () => {
  let component: ExtableComponent;
  let fixture: ComponentFixture<ExtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExtableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
