import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumBscaBankTwoComponent } from './premium-bsca-bank-two.component';

describe('PremiumBscaBankTwoComponent', () => {
  let component: PremiumBscaBankTwoComponent;
  let fixture: ComponentFixture<PremiumBscaBankTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumBscaBankTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumBscaBankTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
