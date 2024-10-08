import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNavComponent } from './employee-nav.component';

describe('EmployeeNavComponent', () => {
  let component: EmployeeNavComponent;
  let fixture: ComponentFixture<EmployeeNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
