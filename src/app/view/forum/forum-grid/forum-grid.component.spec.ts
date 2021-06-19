import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumGridComponent } from './forum-grid.component';

describe('ForumGridComponent', () => {
  let component: ForumGridComponent;
  let fixture: ComponentFixture<ForumGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
