import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Albuns } from './albuns';

describe('Albuns', () => {
  let component: Albuns;
  let fixture: ComponentFixture<Albuns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Albuns],
    }).compileComponents();

    fixture = TestBed.createComponent(Albuns);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
