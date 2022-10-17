import { Brewery } from 'src/shared/classes/Brewery';

export interface AppState {
  brewerys: ReadonlyArray<Brewery>;
  brewery: Brewery;
}
