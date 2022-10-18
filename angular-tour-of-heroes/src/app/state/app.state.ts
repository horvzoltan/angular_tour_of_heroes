import { Brewery } from 'src/shared/classes/Brewery';

export interface AppState {
  brewerys: Array<Brewery>;
  brewery: Brewery;
}
