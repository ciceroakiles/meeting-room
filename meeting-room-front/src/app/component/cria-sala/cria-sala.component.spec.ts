import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaSalaComponent } from './cria-sala.component';

describe('CreateRoomComponent', () => {
  let component: CriaSalaComponent;
  let fixture: ComponentFixture<CriaSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaSalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
