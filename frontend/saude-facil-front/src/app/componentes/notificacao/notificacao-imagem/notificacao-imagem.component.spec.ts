import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacaoImagemComponent } from './notificacao-imagem.component';

describe('NotificacaoImagemComponent', () => {
  let component: NotificacaoImagemComponent;
  let fixture: ComponentFixture<NotificacaoImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificacaoImagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificacaoImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
