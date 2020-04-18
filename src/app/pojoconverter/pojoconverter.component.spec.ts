import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PojoconverterComponent } from './pojoconverter.component';

describe('PojoconverterComponent', () => {
  let component: PojoconverterComponent;
  let fixture: ComponentFixture<PojoconverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PojoconverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PojoconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
