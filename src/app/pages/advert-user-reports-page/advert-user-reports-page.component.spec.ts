import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertUserReportsPageComponent } from './advert-user-reports-page.component';

describe('AdvertUserReportsPageComponent', () => {
  let component: AdvertUserReportsPageComponent;
  let fixture: ComponentFixture<AdvertUserReportsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertUserReportsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertUserReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
