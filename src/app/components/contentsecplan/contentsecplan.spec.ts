import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contentsecplan } from './contentsecplan';

describe('Contentsecplan', () => {
  let component: Contentsecplan;
  let fixture: ComponentFixture<Contentsecplan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contentsecplan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contentsecplan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
