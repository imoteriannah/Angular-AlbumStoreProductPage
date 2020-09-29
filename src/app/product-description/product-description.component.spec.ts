import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductDescriptionComponent } from './poduct-description.component';

describe('PoductDescriptionComponent', () => {
  let component: PoductDescriptionComponent;
  let fixture: ComponentFixture<PoductDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoductDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoductDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
