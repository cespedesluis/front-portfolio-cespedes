import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeMiComponent } from './acerca-de-mi.component';

describe('AcercaDeMiComponent', () => {
  let component: AcercaDeMiComponent;
  let fixture: ComponentFixture<AcercaDeMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeMiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDeMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
