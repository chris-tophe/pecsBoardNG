import {PictoCard} from './picto-card';

export class PictoCollection {
  columns: number;
  rows: number;
  pictos: PictoCard[];

  constructor(columns: number, rows: number, pictos: PictoCard[]) {
    this.columns = columns;
    this.rows = rows;
    this.pictos = pictos;
  }

  getPictoIndex(pictoCard: PictoCard): number {
    return this.pictos.findIndex((picto) =>
      picto.column === pictoCard.column
      && picto.row === pictoCard.row
    );
  }

  isValid(): boolean{
    return (this.rows * this.columns) === this.pictos.length;
  }
}
