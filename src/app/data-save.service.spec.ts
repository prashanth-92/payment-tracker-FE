import { TestBed, inject } from '@angular/core/testing';

import { DataSaveService } from './data-save.service';

describe('DataSaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataSaveService]
    });
  });

  it('should be created', inject([DataSaveService], (service: DataSaveService) => {
    expect(service).toBeTruthy();
  }));
});
