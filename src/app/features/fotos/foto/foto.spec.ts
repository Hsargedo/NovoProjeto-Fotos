import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto } from './foto';

describe('Foto', () => {
  let component: Foto;
  let fixture: ComponentFixture<Foto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Foto],
    }).compileComponents();

    fixture = TestBed.createComponent(Foto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
