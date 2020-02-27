import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { IspsEffects } from './isps.effects';

describe('IspsEffects', () => {
  let actions$: Observable<any>;
  let effects: IspsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IspsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<IspsEffects>(IspsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
