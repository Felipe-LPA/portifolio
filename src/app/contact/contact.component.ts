import { SharedService } from './../shared/shared-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.emitOpt("contact")
  }

}
