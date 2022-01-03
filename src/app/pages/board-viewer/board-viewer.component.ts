import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PrintingService } from 'src/app/services/printing.service';

@Component({
  selector: 'app-board-viewer',
  templateUrl: './board-viewer.component.html',
  styleUrls: ['./board-viewer.component.css'],
})
export class BoardViewerComponent implements OnInit {
  public element: HTMLAnchorElement;

  constructor(
    public boardService: BoardService,
    private router: Router,
    private printService: PrintingService
  ) {}

  ngOnInit(): void {
    if (!this.boardService.getPicoCollection()) {
      this.router.navigate(['/boardmaker']);
    }
    this.element = document.createElement('a');
  }
  public saveJsonFile(): void {
    const fileType = 'text/json';
    const content = JSON.stringify(this.boardService.getPicoCollection());
    const filename = 'myBoard.pbd';
    this.element.setAttribute(
      'href',
      `data:${fileType};charset=utf-8,${encodeURIComponent(content)}`
    );
    this.element.setAttribute('download', filename);
    const event = new MouseEvent('click');
    this.element.dispatchEvent(event);
  }

  public printBoard(board: HTMLElement): void {
    this.printService.printToPdf(board);
  }
}
