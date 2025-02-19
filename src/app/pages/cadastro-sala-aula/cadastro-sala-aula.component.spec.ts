import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSalaAulaComponent } from './cadastro-sala-aula.component';

describe('CadastroSalaAulaComponent', () => {
  let component: CadastroSalaAulaComponent;
  let fixture: ComponentFixture<CadastroSalaAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroSalaAulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroSalaAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
