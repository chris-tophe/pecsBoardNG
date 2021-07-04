import { Component, OnInit } from '@angular/core';
import {PictoCollection} from '../../models/picto-collection';
import {PictoCard} from '../../models/picto-card';
import {Observable} from 'rxjs';
import {BoardService} from '../../services/board.service';
import {Router} from '@angular/router';
import {PictoCollectionFactory} from '../../factory/picto-collection-factory';

@Component({
  selector: 'app-board-maker',
  templateUrl: './board-maker.component.html',
  styleUrls: ['./board-maker.component.css']
})
export class BoardMakerComponent implements OnInit {

  pictoCollection: PictoCollection;

  constructor(private boardService: BoardService , private router: Router) { }

  ngOnInit(): void {
    this.pictoCollection = PictoCollectionFactory.GetEmptyPictoCollection();
  }

  generateCollection(): void{
    for (let r = 0 ; r < this.pictoCollection.rows; r++) {
      for (let c = 0; c < this.pictoCollection.columns; c++) {
        const p: PictoCard = {column: c, row: r, name: '', pictureUrl: ''};
        this.pictoCollection.pictos.push(p);
      }
      this.SetPictoCollectionAndNavigate(this.pictoCollection);
    }
  }
  uploadCollection(event): void{
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file, 'UTF-8');
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string') {
        const pictoCollection = PictoCollectionFactory.GetPictoFromJson(JSON.parse(fileReader.result));
        if (pictoCollection instanceof PictoCollection){
          this.SetPictoCollectionAndNavigate(pictoCollection);
        }
        console.log(pictoCollection);
      }
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }
  private SetPictoCollectionAndNavigate(pictoCollection: PictoCollection): void{
    this.boardService.setPicoCollection(pictoCollection);
    this.router.navigate(['/boardviewer']);
  }
}
