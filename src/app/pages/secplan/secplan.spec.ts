import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secplan } from './secplan';

describe('Secplan', () => {
  let component: Secplan;
  let fixture: ComponentFixture<Secplan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secplan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secplan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
