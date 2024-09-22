import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoImagemComponent } from './medicamento-imagem.component';

describe('MedicamentoImagemComponent', () => {
  let component: MedicamentoImagemComponent;
  let fixture: ComponentFixture<MedicamentoImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicamentoImagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicamentoImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
