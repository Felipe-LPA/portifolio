import { SharedService } from './../shared/shared-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private sharedService: SharedService) { }
  // @Output() opt = new EventEmitter<string>();
  opt = ''

  ngOnInit(): void {
    this.sharedService.emitOpt("about")
  }

}
