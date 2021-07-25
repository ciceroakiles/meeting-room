import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaSalaComponent } from './atualiza-sala.component';

describe('AtualizaSalaComponent', () => {
  let component: AtualizaSalaComponent;
  let fixture: ComponentFixture<AtualizaSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaSalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
