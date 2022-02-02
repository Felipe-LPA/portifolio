import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }
  @Input() card = {} as Card
  @Output() filter = new EventEmitter<string>();
  addFilter(filter:string){
    this.filter.emit(filter)
  }
  ngOnInit(): void {
  }

}
