import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageListBoxComponent } from './manage-list-box.component';

describe('ManageListBoxComponent', () => {
  let component: ManageListBoxComponent;
  let fixture: ComponentFixture<ManageListBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageListBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
