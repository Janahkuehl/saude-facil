import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEsquecisenhaComponent } from './usuario-alterar-senha.component';

describe('UsuarioEsquecisenhaComponent', () => {
  let component: UsuarioEsquecisenhaComponent;
  let fixture: ComponentFixture<UsuarioEsquecisenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioEsquecisenhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioEsquecisenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
