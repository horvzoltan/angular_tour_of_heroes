import { Brewery } from 'src/shared/interfaces/brewery';

export interface AppState {
  brewerys: ReadonlyArray<Brewery>;
  brewery: Brewery;
}
