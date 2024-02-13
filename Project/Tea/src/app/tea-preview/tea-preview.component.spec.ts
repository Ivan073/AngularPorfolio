import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaPreviewComponent } from './tea-preview.component';

describe('TeaPreviewComponent', () => {
  let component: TeaPreviewComponent;
  let fixture: ComponentFixture<TeaPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
