import { SharedService } from './../shared/shared-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from './text-box/content';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private sharedService: SharedService) {}
  // @Output() opt = new EventEmitter<string>();
  opt = '';

  ngOnInit(): void {
    this.sharedService.emitOpt('about');
  }
  summary:Content = {
    title: 'RESUMO',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudianda e magni aperiam unde totam delectus placeat alias autem sed quis nam tempora cupiditate harum nihil, ipsa labore perspiciatis veritatis ex rerum.',
    type: 'text'
  };
  technologies:Content = {
    title: 'TECNOLOGIAS E LINGUAGENS',
    bodyArr: {
      technologies: [{name:'usdadasdsadadasdasdsadsadasdsadasdm', howMuch:1}, {name:'dois', howMuch:1}, {name:'três', howMuch:2}],
      languages: [{name:'quatro', howMuch:3}, {name:'cinco', howMuch:1}]
    },
    type: 'arr'
  };
  description:Content = {
    title: 'DESCRIÇÂO',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudianda e magni aperiam unde totam delectus placeat alias autem sed quis nam tempora cupiditate harum nihil, ipsa labore perspiciatis veritatis ex rerum.',
    type: 'text'
  };
}
