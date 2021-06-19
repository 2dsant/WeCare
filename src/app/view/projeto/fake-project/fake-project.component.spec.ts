import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeProjectComponent } from './fake-project.component';

describe('FakeProjectComponent', () => {
  let component: FakeProjectComponent;
  let fixture: ComponentFixture<FakeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
