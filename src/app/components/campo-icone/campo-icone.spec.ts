import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoIcone } from './campo-icone';

describe('CampoIcone', () => {
  let component: CampoIcone;
  let fixture: ComponentFixture<CampoIcone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoIcone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoIcone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
