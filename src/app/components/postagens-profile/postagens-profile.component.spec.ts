import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagensProfileComponent } from './postagens-profile.component';

describe('PostagensProfileComponent', () => {
  let component: PostagensProfileComponent;
  let fixture: ComponentFixture<PostagensProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostagensProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagensProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
