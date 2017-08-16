import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugPageComponent } from './bug-page.component';

describe('BugPageComponent', () => {
  let component: BugPageComponent;
  let fixture: ComponentFixture<BugPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
