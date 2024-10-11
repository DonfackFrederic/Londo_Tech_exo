import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoporateComponent } from './coporate.component';

describe('CoporateComponent', () => {
  let component: CoporateComponent;
  let fixture: ComponentFixture<CoporateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoporateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
