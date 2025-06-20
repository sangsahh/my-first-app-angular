import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reipes } from './reipes';

describe('Reipes', () => {
  let component: Reipes;
  let fixture: ComponentFixture<Reipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
