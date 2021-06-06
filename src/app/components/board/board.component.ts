import {Component, Input, OnInit} from '@angular/core';
import {PictoCollection} from '../../models/picto-collection';
import {PictoCard} from '../../models/picto-card';
import {Router} from '@angular/router';
import {BoardService} from '../../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input()
  pictoCollection: PictoCollection;

  rows: number[];
  columns: number[];

  constructor(private boardService: BoardService,private router: Router) { }

  ngOnInit(): void {
    this.rows = Array(this.pictoCollection.rows);
    this.columns = Array(this.pictoCollection.columns);
  }

  public getPictoByPos(column: number, row: number): PictoCard{
    return this.pictoCollection.pictos.find(x => x.row === row && x.column === column);
  }

  public navigateToSearch(column: number, row: number): void {
    this.boardService.setSelectedPicto(this.getPictoByPos(column, row));
    this.router.navigate(['/pictosearch']);
  }
}
