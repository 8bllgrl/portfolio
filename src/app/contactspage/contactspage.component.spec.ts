import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactspageComponent } from './contactspage.component';

describe('ContactspageComponent', () => {
  let component: ContactspageComponent;
  let fixture: ComponentFixture<ContactspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
