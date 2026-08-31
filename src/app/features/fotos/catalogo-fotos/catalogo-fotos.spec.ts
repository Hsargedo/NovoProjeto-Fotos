import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoFotos } from './catalogo-fotos';

describe('CatalogoFotos', () => {
  let component: CatalogoFotos;
  let fixture: ComponentFixture<CatalogoFotos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoFotos],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoFotos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
