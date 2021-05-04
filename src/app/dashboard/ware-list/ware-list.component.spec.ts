import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WareListComponent } from './ware-list.component';

describe('WareListComponent', () => {
  let component: WareListComponent;
  let fixture: ComponentFixture<WareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
