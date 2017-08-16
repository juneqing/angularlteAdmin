import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertStaticsPageComponent } from './advert-statics-page.component';

describe('AdvertStaticsPageComponent', () => {
  let component: AdvertStaticsPageComponent;
  let fixture: ComponentFixture<AdvertStaticsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertStaticsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertStaticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
