import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupListComponent } from './setup-list.component';

describe('SetupListComponent', () => {
  let component: SetupListComponent;
  let fixture: ComponentFixture<SetupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have h2 title', () => {
    fixture = TestBed.createComponent(SetupListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let titleText = compiled.querySelect('h2.headerList').textContent;

    expect(titleText).toEqual('List of setup')
  });

  it('should have list group element', () => {
    const compiled = fixture.nativeElement;
    let listGroupComp = compiled.querySelect('ul#lstGroupSetup');

    expect(listGroupComp).toBeTruthy();
  });

});
