import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRecuperarSenhaComponent } from './usuario-recuperar-senha.component';

describe('UsuarioRecuperarSenhaComponent', () => {
  let component: UsuarioRecuperarSenhaComponent;
  let fixture: ComponentFixture<UsuarioRecuperarSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioRecuperarSenhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioRecuperarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
