import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertTemplatePageComponent } from './advert-template-page.component';

describe('AdvertTemplatePageComponent', () => {
  let component: AdvertTemplatePageComponent;
  let fixture: ComponentFixture<AdvertTemplatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertTemplatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertTemplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
