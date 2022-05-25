import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioCategoriasMaisAvaliadasComponent } from './relatorio-categorias-mais-avaliadas.component';

describe('RelatorioCategoriasMaisAvaliadasComponent', () => {
  let component: RelatorioCategoriasMaisAvaliadasComponent;
  let fixture: ComponentFixture<RelatorioCategoriasMaisAvaliadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioCategoriasMaisAvaliadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioCategoriasMaisAvaliadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
