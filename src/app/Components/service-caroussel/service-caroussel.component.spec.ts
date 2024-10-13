import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCarousselComponent } from './service-caroussel.component';

describe('ServiceCarousselComponent', () => {
  let component: ServiceCarousselComponent;
  let fixture: ComponentFixture<ServiceCarousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCarousselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
