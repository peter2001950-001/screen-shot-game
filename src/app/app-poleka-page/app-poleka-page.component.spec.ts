import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPolekaPageComponent } from './app-poleka-page.component';

describe('AppPolekaPageComponent', () => {
  let component: AppPolekaPageComponent;
  let fixture: ComponentFixture<AppPolekaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPolekaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPolekaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
