import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneByOneResponseComponent } from './one-by-one-response.component';

describe('OneByOneResponseComponent', () => {
  let component: OneByOneResponseComponent;
  let fixture: ComponentFixture<OneByOneResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneByOneResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneByOneResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
