import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelLayout } from './painel-layout';

describe('PainelLayout', () => {
  let component: PainelLayout;
  let fixture: ComponentFixture<PainelLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
