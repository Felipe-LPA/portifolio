import { SharedService } from './../shared/shared-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {

  constructor(private sharedService:SharedService) {
    this.sharedService.emitOpt("sites")
   }

  teste(){
    this.sharedService.emitOpt("sites")
  }
  ngOnInit(): void {

  }


}
