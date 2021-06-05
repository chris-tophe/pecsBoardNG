import { Component, OnInit } from '@angular/core';
import {PictoCollection} from '../../models/picto-collection';
import {PictoCard} from '../../models/picto-card';
import {Observable} from 'rxjs';
import {BoardService} from '../../services/board.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-maker',
  templateUrl: './board-maker.component.html',
  styleUrls: ['./board-maker.component.css']
})
export class BoardMakerComponent implements OnInit {

  pictoCollection: PictoCollection;

  constructor(private boardService: BoardService , private router: Router) { }

  ngOnInit(): void {
    this.pictoCollection = {columns: 0 , rows: 0 , pictos: []};
  }

  generateCollection(): void{
    for (let r = 0 ; r < this.pictoCollection.rows; r++) {
      for (let c = 0; c < this.pictoCollection.columns; c++) {
        const p: PictoCard = {column: c, row: r, name: 'Vide'};
        this.pictoCollection.pictos.push(p);
      }
      this.boardService.setPicoCollection(this.pictoCollection);
      this.router.navigate(['/boardviewer']);
    }
  }


}
