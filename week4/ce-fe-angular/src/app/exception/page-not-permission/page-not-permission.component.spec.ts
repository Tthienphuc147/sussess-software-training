import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotPermissionComponent } from './page-not-permission.component';

describe('PageNotPermissionComponent', () => {
  let component: PageNotPermissionComponent;
  let fixture: ComponentFixture<PageNotPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
