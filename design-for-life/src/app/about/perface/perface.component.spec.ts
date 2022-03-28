import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfaceComponent } from './perface.component';

describe('PerfaceComponent', () => {
  let component: PerfaceComponent;
  let fixture: ComponentFixture<PerfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
