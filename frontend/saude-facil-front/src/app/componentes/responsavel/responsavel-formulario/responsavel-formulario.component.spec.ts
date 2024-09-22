import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsavelFormularioComponent } from './responsavel-formulario.component';

describe('ResponsavelFormularioComponent', () => {
  let component: ResponsavelFormularioComponent;
  let fixture: ComponentFixture<ResponsavelFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResponsavelFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponsavelFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
