import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGamePlayComponent } from './app-game-play.component';

describe('AppGamePlayComponent', () => {
  let component: AppGamePlayComponent;
  let fixture: ComponentFixture<AppGamePlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppGamePlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppGamePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
