import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoHojeComponent } from './medicamento-hoje.component';

describe('MedicamentoHojeComponent', () => {
  let component: MedicamentoHojeComponent;
  let fixture: ComponentFixture<MedicamentoHojeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicamentoHojeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicamentoHojeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
