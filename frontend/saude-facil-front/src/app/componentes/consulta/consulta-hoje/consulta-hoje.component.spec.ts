import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCalendarioComponent } from './consulta-hoje.component';

describe('ConsultaCalendarioComponent', () => {
  let component: ConsultaCalendarioComponent;
  let fixture: ComponentFixture<ConsultaCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaCalendarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
