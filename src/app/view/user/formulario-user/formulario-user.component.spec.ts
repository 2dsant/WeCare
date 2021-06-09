import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUserComponent } from './formulario-user.component';

describe('FormularioUserComponent', () => {
  let component: FormularioUserComponent;
  let fixture: ComponentFixture<FormularioUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
