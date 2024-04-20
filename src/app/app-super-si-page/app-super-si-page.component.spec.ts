import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSuperSiPageComponent } from './app-super-si-page.component';

describe('AppSuperSiPageComponent', () => {
  let component: AppSuperSiPageComponent;
  let fixture: ComponentFixture<AppSuperSiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSuperSiPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSuperSiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
