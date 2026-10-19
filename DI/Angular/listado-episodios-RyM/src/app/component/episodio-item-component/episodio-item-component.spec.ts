import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodioItemComponent } from './episodio-item-component';

describe('EpisodioItemComponent', () => {
  let component: EpisodioItemComponent;
  let fixture: ComponentFixture<EpisodioItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodioItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodioItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
