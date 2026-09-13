import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricaCartao } from './metrica-cartao';

describe('MetricaCartao', () => {
  let component: MetricaCartao;
  let fixture: ComponentFixture<MetricaCartao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricaCartao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricaCartao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
