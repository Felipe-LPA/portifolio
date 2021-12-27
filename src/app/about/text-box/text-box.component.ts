import { Component, Input, OnInit } from '@angular/core';
import { Content } from './content';
import { HowMuchPipe } from "./how-much.pipe";

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {

  constructor() { }
  @Input() content = {} as Content;



  ngOnInit(): void {
  }

}
