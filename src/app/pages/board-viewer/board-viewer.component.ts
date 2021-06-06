import {Component, OnInit} from '@angular/core';
import {BoardService} from '../../services/board.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-board-viewer',
  templateUrl: './board-viewer.component.html',
  styleUrls: ['./board-viewer.component.css']
})
export class BoardViewerComponent implements OnInit {

  constructor(public boardService: BoardService, private router: Router) {
  }

  ngOnInit(): void {
    if (!this.boardService.getPicoCollection()) {
      this.router.navigate(['/boardmaker']);
    }
  }

}
