import {Injectable} from '@angular/core';
import {PictoCollection} from '../models/picto-collection';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private pictoCollection: PictoCollection;

  constructor() {
  }

  public getPicoCollection(): PictoCollection {
    return this.pictoCollection;
  }

  public setPicoCollection(pictoCollection: PictoCollection): void{
    this.pictoCollection = pictoCollection;
  }
}
