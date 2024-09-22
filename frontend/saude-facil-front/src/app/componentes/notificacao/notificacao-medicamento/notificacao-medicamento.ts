import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialComponent } from './notificacao-medicamento.component';

describe('TelaInicialComponent', () => {
  let component: TelaInicialComponent;
  let fixture: ComponentFixture<TelaInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaInicialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
