import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoAlarmeComponent } from './medicamento-alarme.component';

describe('MedicamentoAlarmeComponent', () => {
  let component: MedicamentoAlarmeComponent;
  let fixture: ComponentFixture<MedicamentoAlarmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicamentoAlarmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicamentoAlarmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
