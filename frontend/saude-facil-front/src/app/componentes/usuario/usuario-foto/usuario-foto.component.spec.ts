import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioFotoComponent } from './usuario-foto.component';

describe('UsuarioFotoComponent', () => {
  let component: UsuarioFotoComponent;
  let fixture: ComponentFixture<UsuarioFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioFotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
