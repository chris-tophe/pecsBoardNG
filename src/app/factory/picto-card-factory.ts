import {PictoDesc} from '../models/arasaac/picto-desc';
import {PictoCard} from '../models/picto-card';

export class PictoCardFactory {

  static getFromArasaac(pictoDesc: PictoDesc): PictoCard{
    const p: PictoCard = {row: 0, column: 0, name: '', pictureUrl: ''};
    p.name = pictoDesc.keywords[0].keyword;
    p.pictureUrl = `https://api.arasaac.org/api/pictograms/${pictoDesc._id}?download=false`;
    return p;
  }
}
