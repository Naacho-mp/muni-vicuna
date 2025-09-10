import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contentprincipal } from './contentprincipal';

describe('Contentprincipal', () => {
  let component: Contentprincipal;
  let fixture: ComponentFixture<Contentprincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contentprincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contentprincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
