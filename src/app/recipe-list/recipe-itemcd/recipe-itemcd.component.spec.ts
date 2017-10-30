import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemcdComponent } from './recipe-itemcd.component';

describe('RecipeItemcdComponent', () => {
  let component: RecipeItemcdComponent;
  let fixture: ComponentFixture<RecipeItemcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeItemcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
