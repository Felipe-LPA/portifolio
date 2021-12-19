import { Injectable } from '@angular/core';
import { Breakpoint } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  private breakpoints = {
    xm: '(max-width: 360px)',
    sm: '(min-width: 361px) and (max-width: 576px)',
    md: '(min-width: 577px) and (max-width: 768px)',
    lg: '(min-width: 769px) and (max-width: 992px)',
    xl: '(min-width: 993px) and (max-width: 1200px)',
    xxl: '(min-width: 1201px) and (max-width: 1400px)',
  };

  whichBreakpoint() {
    return Object.keys(this.breakpoints as Breakpoint).filter(
      (breakpoint: string) =>
        matchMedia((this.breakpoints as Breakpoint)[breakpoint]).matches
    ).join('');
  }
  constructor() {}
}
