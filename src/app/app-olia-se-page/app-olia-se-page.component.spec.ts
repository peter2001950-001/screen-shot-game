import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOliaSePageComponent } from './app-olia-se-page.component';

describe('AppOliaSePageComponent', () => {
  let component: AppOliaSePageComponent;
  let fixture: ComponentFixture<AppOliaSePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppOliaSePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppOliaSePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
