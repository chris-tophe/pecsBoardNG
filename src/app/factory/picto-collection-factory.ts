import {PictoCollection} from '../models/picto-collection';
import {PictoCardFactory} from './picto-card-factory';

export class PictoCollectionFactory {

  public static GetEmptyPictoCollection(): PictoCollection{
    return new PictoCollection(0, 0, []);
  }

  public static GetPictoFromJson(json: any): PictoCollection{
    const pictoCollection = this.GetEmptyPictoCollection();
    if (json.columns){
      pictoCollection.columns = json.columns;
    }
    if (json.rows){
      pictoCollection.rows = json.rows;
    }
    if (json.pictos && Array.isArray(json.pictos) ){
      for (const picto of json.pictos) {
         const p = PictoCardFactory.GetEmptyPictoCard();
         if (picto.column){
           p.column = picto.column;
         }
         if (picto.row){
           p.row = picto.row;
         }
         if (picto.name){
           p.name = picto.name;
         }
         if (picto.pictureUrl){
           p.pictureUrl = picto.pictureUrl;
         }
         if (pictoCollection.getPictoIndex(p) === -1) {
           pictoCollection.pictos.push(p);
         }
      }
    }
    return  pictoCollection.isValid() ? pictoCollection : null;
  }

}
