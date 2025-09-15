import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contentturismo } from './contentturismo';

describe('Contentturismo', () => {
  let component: Contentturismo;
  let fixture: ComponentFixture<Contentturismo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contentturismo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contentturismo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
