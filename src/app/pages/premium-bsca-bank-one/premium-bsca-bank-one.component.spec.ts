import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumBscaBankOneComponent } from './premium-bsca-bank-one.component';

describe('PremiumBscaBankOneComponent', () => {
  let component: PremiumBscaBankOneComponent;
  let fixture: ComponentFixture<PremiumBscaBankOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumBscaBankOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumBscaBankOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
