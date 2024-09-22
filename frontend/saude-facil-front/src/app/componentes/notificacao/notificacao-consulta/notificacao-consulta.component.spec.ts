import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacaoConsultaComponent } from './notificacao-consulta.component';

describe('NotificacaoConsultaComponent', () => {
  let component: NotificacaoConsultaComponent;
  let fixture: ComponentFixture<NotificacaoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificacaoConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificacaoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
