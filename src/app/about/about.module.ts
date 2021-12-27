import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { HowMuchPipe } from './text-box/how-much.pipe';



@NgModule({
  declarations: [
    AboutComponent,
    TextBoxComponent,
    HowMuchPipe
  ],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
