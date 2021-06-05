import {PictoDesc} from '../models/arasaac/picto-desc';
import {PictoCard} from '../models/picto-card';

export class PictoCardFactory {

  static getFromArasaac(pictoDesc: PictoDesc): PictoCard{
    const p: PictoCard = {row: 0, column: 0, name: ''};
    p.name = pictoDesc.keywords[0].keyword;
    return p;
  }
}
