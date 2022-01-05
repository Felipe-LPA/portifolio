import { Card } from './card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss'],
})
export class SitesComponent implements OnInit {
  constructor() {}
  cards: Card[] = [
    {
      background:
        'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.significadofacil.com%2Fbackground%2F&psig=AOvVaw25BnWolMXDo7Jmo0Zdb3gj&ust=1641401334071000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCGhsTGmPUCFQAAAAAdAAAAABAJ)',
      banner: {
        url: '../../../../assets/img/vivareal-capa.jpg',
        alt: 'Logo do site Viva Real',
      },
      title: 'Clone parcial do site Viva Real',
      description:
        'Projeto proposto pelo professor referente ao modulo4(front end web api)',
      technologies: ['JavaScript', 'Html', 'Css'],
      linkGitHub: 'https://github.com/Felipe-LPA/ProjetoFinalModulo4',
      site: 'https://objective-brattain-3bab86.netlify.app/'
    },
    {
      background:
        'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.significadofacil.com%2Fbackground%2F&psig=AOvVaw25BnWolMXDo7Jmo0Zdb3gj&ust=1641401334071000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCGhsTGmPUCFQAAAAAdAAAAABAJ)',
      banner: {
        url: '../../../../assets/img/netflix-logo.png',
        alt: 'Logo do site Netflix',
      },
      title: 'Clone parcial do site Netflix',
      description:
        'Projeto proposto pelo professor referente ao modulo5(Angular), realizado em squad de 4 colaboradores.',
      technologies: ['JavaScript', 'Angular', 'Html', 'Scss', 'TypeScript'],
      linkGitHub: 'https://github.com/alvessamuel12/netflix-clone',
    },
  ];

  ngOnInit(): void {}
}
