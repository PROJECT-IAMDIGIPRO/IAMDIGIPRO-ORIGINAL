import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleVideoComponent } from './particle-video.component';

describe('ParticleVideoComponent', () => {
  let component: ParticleVideoComponent;
  let fixture: ComponentFixture<ParticleVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticleVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticleVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
