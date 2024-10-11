import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBankingServiceComponent } from './personal-banking-service.component';

describe('PersonalBankingServiceComponent', () => {
  let component: PersonalBankingServiceComponent;
  let fixture: ComponentFixture<PersonalBankingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalBankingServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalBankingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
