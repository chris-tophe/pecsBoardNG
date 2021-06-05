import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PictoDesc} from '../models/arasaac/picto-desc';
import {PictoCard} from '../models/picto-card';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {PictoCardFactory} from '../factory/picto-card-factory';

@Injectable({
  providedIn: 'root'
})
export class ArasaacApiService {

  constructor(private http: HttpClient) { }

  searchPicto(text: string): Observable<PictoCard>{
    const url = 'https://api.arasaac.org/api/pictograms/fr/search/' + text;
    let resp: PictoDesc;
    this.http.get(url).pipe(
      map((r: PictoDesc) => resp = r)
    );
    return of(PictoCardFactory.getFromArasaac(resp));
  }
}
