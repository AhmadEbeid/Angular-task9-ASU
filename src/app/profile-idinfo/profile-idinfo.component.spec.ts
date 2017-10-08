import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIdinfoComponent } from './profile-idinfo.component';

describe('ProfileIdinfoComponent', () => {
  let component: ProfileIdinfoComponent;
  let fixture: ComponentFixture<ProfileIdinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileIdinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileIdinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
