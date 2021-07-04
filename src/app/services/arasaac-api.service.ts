import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PictoDesc} from '../models/arasaac/picto-desc';
import {PictoCard} from '../models/picto-card';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {PictoCardFactory} from '../factory/picto-card-factory';
import {element} from 'protractor';
import {PictoSearchComponent} from '../pages/picto-search/picto-search.component';

@Injectable({
  providedIn: 'root'
})
export class ArasaacApiService {

  public searchResult: Observable<PictoCard[]>;

  constructor(private http: HttpClient) { }

  searchPicto(text: string): Observable<PictoCard[]>{
    const url = 'https://api.arasaac.org/api/pictograms/fr/search/' + text;
    const resp = this.http.get(url).pipe(
      map((r: PictoDesc[]) => r.map(value => PictoCardFactory.GetFromArasaac(value) ))
    );
    return resp;

  }
}
