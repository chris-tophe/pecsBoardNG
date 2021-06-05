import {PictoCard} from './picto-card';

export interface PictoCollection {
  columns: number;
  rows: number;
  pictos: PictoCard[];
}
