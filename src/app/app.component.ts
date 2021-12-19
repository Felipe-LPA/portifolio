import { Component, OnInit, SimpleChanges } from '@angular/core';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { BreakpointService } from './breakpoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portifolio';
  constructor(private breakpointService: BreakpointService){

  }
  // icon
  HamburguerMenu(){
    if(this.menuClicked){
      return faWindowClose;
    }else{
      return faBars;
    }

  }
  menuClicked = false
  opt:string = '';
  breakpoint = this.breakpointService.whichBreakpoint();

  ngOnInit(): void {
    addEventListener('resize', (e) => {
      this.breakpoint = this.breakpointService.whichBreakpoint()
    })
  }

}
