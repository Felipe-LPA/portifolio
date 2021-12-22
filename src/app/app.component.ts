import { Component, OnInit, SimpleChanges } from '@angular/core';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { BreakpointService } from './breakpoint.service';
import { SharedService } from './shared/shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'portifolio';
  constructor(
    private breakpointService: BreakpointService,
    // private sharedService: SharedService
    ){

    }
  // icon
  HamburguerMenu(){
    if(this.menuClicked){
      return faWindowClose;
    }else{
      return faBars;
    }

  }
  menuClicked = false;
  opt:string = '';
  breakpoint = this.breakpointService.whichBreakpoint();
  isLoaded = false


  ngOnInit(): void {
    addEventListener('resize', (e) => {
      this.breakpoint = this.breakpointService.whichBreakpoint()
    })
    // this.sharedService.changeEmitted$.subscribe(
    //   text => {
    //       this.opt = text;
    //       console.log(this.opt)
    //       this.isLoaded = true
    //   });

    // console.log(this.opt)

  }



}

