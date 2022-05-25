import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioMembrosMaisAvaliacoesComponent } from './relatorio-membros-mais-avaliacoes.component';

describe('RelatorioMembrosMaisAvaliacoesComponent', () => {
  let component: RelatorioMembrosMaisAvaliacoesComponent;
  let fixture: ComponentFixture<RelatorioMembrosMaisAvaliacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioMembrosMaisAvaliacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioMembrosMaisAvaliacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
