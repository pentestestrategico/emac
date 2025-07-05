import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrocelComponent } from './carrocel.component';

describe('CarrocelComponent', () => {
  let component: CarrocelComponent;
  let fixture: ComponentFixture<CarrocelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrocelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrocelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
