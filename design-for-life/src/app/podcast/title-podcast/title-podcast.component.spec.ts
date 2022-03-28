import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePodcastComponent } from './title-podcast.component';

describe('TitlePodcastComponent', () => {
  let component: TitlePodcastComponent;
  let fixture: ComponentFixture<TitlePodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlePodcastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
