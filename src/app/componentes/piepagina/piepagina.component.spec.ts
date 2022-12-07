import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiepaginaComponent } from './piepagina.component';

describe('PiepaginaComponent', () => {
  let component: PiepaginaComponent;
  let fixture: ComponentFixture<PiepaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiepaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiepaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
