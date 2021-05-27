import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SessionState {
  username: string | null;
  token: string | null;
}

export function createInitialState(): SessionState {
  return {
    username: '',
    token: '',
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}
