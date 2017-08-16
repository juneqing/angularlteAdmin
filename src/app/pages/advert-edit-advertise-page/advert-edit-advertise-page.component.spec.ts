import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertEditAdvertisePageComponent } from './advert-edit-advertise-page.component';

describe('AdvertEditAdvertisePageComponent', () => {
  let component: AdvertEditAdvertisePageComponent;
  let fixture: ComponentFixture<AdvertEditAdvertisePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertEditAdvertisePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertEditAdvertisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
