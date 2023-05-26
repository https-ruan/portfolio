import { TestBed } from '@angular/core/testing';
import { MissingTranslationHelper } from './missing-translation-helper.';

describe('MissingTranslationHelperService', () => {
  let helper: MissingTranslationHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    helper = TestBed.inject(MissingTranslationHelper);
  });

  it('should be created', () => {
    expect(helper).toBeTruthy();
  });
});
