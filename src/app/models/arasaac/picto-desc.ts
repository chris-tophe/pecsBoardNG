import {Keyword} from './keyword';

export interface PictoDesc {
  schematic: boolean;
  sex: boolean;
  violence: boolean;
  aac: boolean;
  aacColor: boolean;
  skin: boolean;
  hair; boolean;
  downloads: number;
  categories: string[];
  synsets: string[];
  tags: string[];
  _id: number;
  created: Date;
  lastUpdated: Date;
  keywords: Keyword[];
}
