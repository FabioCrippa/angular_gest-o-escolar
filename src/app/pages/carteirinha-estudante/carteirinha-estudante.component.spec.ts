import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteirinhaEstudanteComponent } from './carteirinha-estudante.component';

describe('CarteirinhaEstudanteComponent', () => {
  let component: CarteirinhaEstudanteComponent;
  let fixture: ComponentFixture<CarteirinhaEstudanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteirinhaEstudanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteirinhaEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
