import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contentcontacto } from './contentcontacto';

describe('Contentcontacto', () => {
  let component: Contentcontacto;
  let fixture: ComponentFixture<Contentcontacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contentcontacto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contentcontacto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
