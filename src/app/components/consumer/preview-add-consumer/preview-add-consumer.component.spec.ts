import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAddConsumerComponent } from './preview-add-consumer.component';

describe('PreviewAddConsumerComponent', () => {
  let component: PreviewAddConsumerComponent;
  let fixture: ComponentFixture<PreviewAddConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewAddConsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAddConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
