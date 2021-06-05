import {Component, Input, OnInit} from '@angular/core';
import {PictoCollection} from '../../models/picto-collection';
import {PictoCard} from '../../models/picto-card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input()
  collection: PictoCollection;

  rows: number[];
  columns: number[];

  constructor() { }

  ngOnInit(): void {
    this.rows = Array(this.collection.rows);
    this.columns = Array(this.collection.columns);
  }

  getPictoByPos(column: number, row: number): PictoCard{
    return this.collection.pictos.find(x => x.row === row && x.column === column);
  }

}
