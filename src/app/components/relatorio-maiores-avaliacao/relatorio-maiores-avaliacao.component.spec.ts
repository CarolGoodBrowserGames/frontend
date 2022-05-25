import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioMaioresAvaliacaoComponent } from './relatorio-maiores-avaliacao.component';

describe('RelatorioMaioresAvaliacaoComponent', () => {
  let component: RelatorioMaioresAvaliacaoComponent;
  let fixture: ComponentFixture<RelatorioMaioresAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioMaioresAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioMaioresAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
