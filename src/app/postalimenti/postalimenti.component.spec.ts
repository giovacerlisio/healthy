import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalimentiComponent } from './postalimenti.component';

describe('PostalimentiComponent', () => {
  let component: PostalimentiComponent;
  let fixture: ComponentFixture<PostalimentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostalimentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostalimentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
