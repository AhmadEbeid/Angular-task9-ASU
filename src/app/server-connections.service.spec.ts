import { TestBed, inject } from '@angular/core/testing';

import { ServerConnectionsService } from './server-connections.service';

describe('ServerConnectionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerConnectionsService]
    });
  });

  it('should be created', inject([ServerConnectionsService], (service: ServerConnectionsService) => {
    expect(service).toBeTruthy();
  }));
});
