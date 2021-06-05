import {Component, Input, OnInit} from '@angular/core';
import {PictoCard} from '../../models/picto-card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  pictoCard: PictoCard;

  constructor() { }

  ngOnInit(): void {
  }

}
