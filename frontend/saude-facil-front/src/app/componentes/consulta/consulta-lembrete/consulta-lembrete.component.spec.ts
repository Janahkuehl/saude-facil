import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLembreteComponent } from './consulta-lembrete.component';

describe('ConsultaLembreteComponent', () => {
  let component: ConsultaLembreteComponent;
  let fixture: ComponentFixture<ConsultaLembreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaLembreteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaLembreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
