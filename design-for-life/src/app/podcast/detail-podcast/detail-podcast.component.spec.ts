import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPodcastComponent } from './detail-podcast.component';

describe('DetailPodcastComponent', () => {
  let component: DetailPodcastComponent;
  let fixture: ComponentFixture<DetailPodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPodcastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
