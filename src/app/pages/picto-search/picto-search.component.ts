import {Component, OnDestroy, OnInit} from '@angular/core';
import {BoardService} from '../../services/board.service';
import {ArasaacApiService} from '../../services/arasaac-api.service';
import {Observable} from 'rxjs';
import {PictoCard} from '../../models/picto-card';
import {Router} from '@angular/router';

@Component({
  selector: 'app-picto-search',
  templateUrl: './picto-search.component.html',
  styleUrls: ['./picto-search.component.css']
})
export class PictoSearchComponent implements OnInit, OnDestroy {

  public searchText: string;

  public searchResult: Observable<PictoCard[]>;

  constructor(public boardService: BoardService,
              private arasaacApiService: ArasaacApiService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.boardService.setSelectedPicto(null);
  }

  public searchPicto(): void {
    this.searchResult = this.arasaacApiService.searchPicto(this.searchText);
  }
  public clickPicto(selectedPicto: PictoCard): void{
    selectedPicto.row = this.boardService.getSelectedPicto().row;
    selectedPicto.column = this.boardService.getSelectedPicto().column;
    const collection = this.boardService.getPicoCollection();
    const  index = collection.getPictoIndex(selectedPicto);
    collection.pictos[index] = selectedPicto;
    this.boardService.setPicoCollection(collection);
    this.router.navigate(['/boardviewer']);
  }
}
