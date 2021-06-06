import {Component, OnDestroy, OnInit} from '@angular/core';
import {BoardService} from '../../services/board.service';
import {ArasaacApiService} from '../../services/arasaac-api.service';
import {Observable} from 'rxjs';
import {PictoCard} from '../../models/picto-card';

@Component({
  selector: 'app-picto-search',
  templateUrl: './picto-search.component.html',
  styleUrls: ['./picto-search.component.css']
})
export class PictoSearchComponent implements OnInit, OnDestroy {

  public searchText: string;

  public searchResult: Observable<PictoCard[]>;

  constructor(public boardService: BoardService, private arasaacApiService: ArasaacApiService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.boardService.setSelectedPicto(null);
  }

  public searchPicto() {
    this.searchResult = this.arasaacApiService.searchPicto(this.searchText);
  }
}
