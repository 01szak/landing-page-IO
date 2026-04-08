import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotForEveryone } from './not-for-everyone';

describe('NotForEveryone', () => {
  let component: NotForEveryone;
  let fixture: ComponentFixture<NotForEveryone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotForEveryone],
    }).compileComponents();

    fixture = TestBed.createComponent(NotForEveryone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
