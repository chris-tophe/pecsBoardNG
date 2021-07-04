import {Injectable} from '@angular/core';
import {PictoCollection} from '../models/picto-collection';
import {PictoCard} from '../models/picto-card';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private pictoCollection: PictoCollection;
  private selectedPictoCard: PictoCard;

  constructor() {
  }

  public getPicoCollection(): PictoCollection {
    return (this.pictoCollection) ? this.pictoCollection : null;
  }

  public setPicoCollection(pictoCollection: PictoCollection): void {
    this.pictoCollection = pictoCollection;
  }

  public getSelectedPicto(): PictoCard {
    return this.selectedPictoCard;
  }

  public setSelectedPicto(pictoCard: PictoCard): void {
    this.selectedPictoCard = pictoCard;
  }
}
