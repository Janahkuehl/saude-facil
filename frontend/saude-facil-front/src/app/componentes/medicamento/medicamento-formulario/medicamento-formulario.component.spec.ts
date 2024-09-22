import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoFormularioComponent } from './medicamento-formulario.component';

describe('MedicamentoFormularioComponent', () => {
  let component: MedicamentoFormularioComponent;
  let fixture: ComponentFixture<MedicamentoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicamentoFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicamentoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
