import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPersonsComponent } from './view-persons.component';

describe('ViewPersonsComponent', () => {
  let component: ViewPersonsComponent;
  let fixture: ComponentFixture<ViewPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPersonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
