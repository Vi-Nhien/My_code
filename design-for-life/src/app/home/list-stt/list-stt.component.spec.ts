import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSttComponent } from './list-stt.component';

describe('ListSttComponent', () => {
  let component: ListSttComponent;
  let fixture: ComponentFixture<ListSttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
