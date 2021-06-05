import { Component, OnInit } from '@angular/core';
import {PictoCollection} from '../../models/picto-collection';
import {PictoCard} from '../../models/picto-card';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-board-maker',
  templateUrl: './board-maker.component.html',
  styleUrls: ['./board-maker.component.css']
})
export class BoardMakerComponent implements OnInit {

  collection: PictoCollection;

  constructor() { }

  ngOnInit(): void {
    this.collection = {columns: 7 , rows: 3 , pictos: []};
  }

  generateCollection(): void{
    for (let r = 0 ; r < this.collection.rows; r++) {
      for (let c = 0; c < this.collection.columns; c++) {
        const p: PictoCard = {column: c, row: r, name: (c + r).toString()};
        this.collection.pictos.push(p);
      }
    }
  }


}
