import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoGridComponent } from './projeto-grid.component';

describe('ProjetoGridComponent', () => {
  let component: ProjetoGridComponent;
  let fixture: ComponentFixture<ProjetoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetoGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
