import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaImagemComponent } from './consulta-imagem.component';

describe('ConsultaImagemComponent', () => {
  let component: ConsultaImagemComponent;
  let fixture: ComponentFixture<ConsultaImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaImagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
