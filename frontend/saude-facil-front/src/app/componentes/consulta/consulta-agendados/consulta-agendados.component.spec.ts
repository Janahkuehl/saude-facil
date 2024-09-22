import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAgendadosComponent } from './consulta-agendados.component';

describe('ConsultaAgendadosComponent', () => {
  let component: ConsultaAgendadosComponent;
  let fixture: ComponentFixture<ConsultaAgendadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaAgendadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaAgendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
