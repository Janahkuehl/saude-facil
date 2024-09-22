import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoHistoricoComponent } from './medicamento-historico.component';

describe('MedicamentoHistoricoComponent', () => {
  let component: MedicamentoHistoricoComponent;
  let fixture: ComponentFixture<MedicamentoHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicamentoHistoricoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicamentoHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
