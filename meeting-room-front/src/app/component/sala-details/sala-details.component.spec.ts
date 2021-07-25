import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaDetailsComponent } from './sala-details.component';

describe('SalaDetailsComponent', () => {
  let component: SalaDetailsComponent;
  let fixture: ComponentFixture<SalaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
