import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUserComponent } from './grid-user.component';

describe('GridUserComponent', () => {
  let component: GridUserComponent;
  let fixture: ComponentFixture<GridUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
