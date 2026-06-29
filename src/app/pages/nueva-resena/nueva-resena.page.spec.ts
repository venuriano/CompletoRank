import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaResenaPage } from './nueva-resena.page';

describe('NuevaResenaPage', () => {
  let component: NuevaResenaPage;
  let fixture: ComponentFixture<NuevaResenaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaResenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
