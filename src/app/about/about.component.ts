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
  summary: Content = {
    title: 'RESUMO',
    bodyText:['Estou em busca da primeira oportunidade na área, atualmente estudando Angular/JAVA, porém não me limito a isto pois tenho muita confiança na minha lógica e minha capacidade e motivação para enfrentar novos desafios.'],
    type: 'text',
  };
  technologies: Content = {
    title: 'TECNOLOGIAS E LINGUAGENS',
    bodyArr: {
      technologies: [
        { name: 'HTML(semântico)', howMuch: 2 },
        { name: 'CSS', howMuch: 2 },
        { name: 'JavaScript', howMuch: 3 },
        { name: 'Angular', howMuch: 2 },
        { name: 'TypeScript', howMuch: 1 },
        { name: 'React', howMuch: 1 },
      ],
      languages: [
        { name: 'Inglês', howMuch: 2 },
      ],
    },
    type: 'arr',
  };
  description: Content = {
    title: 'DESCRIÇÂO',
    bodyText:[
'Me considero uma pessoa com extrema facilidade para trabalhar em equipe por saber a importância da empatia em qualquer interação social, mas também pelo fato de assumir muita responsabilidade, isto devido a dois fatores muito fortes em mim, o primeiro é o sentimento de dono, e o segundo é a conclusão sobre a diferença entre culpa e responsabilidade, mesmo que algo não tenha sido delegado a ti diretamente, caso possível, não há porque não tentar fazer algo a respeito.',
"Após os últimos meses de estudo me sinto seguro para enfrentar os desafios propostos nesta área, durante e após a conclusão da minha graduação fiquei um pouco perdido e logo depois veio a pandemia (não me entenda mal, não estou usando como desculpa, apenas somando fatos, mas não eximo a minha culpa/responsabilidade ), e eu desperdicei algumas oportunidade. No meio de 2021 decidi estudar programação, e após 2 meses comecei a estudar especificamente Javascript pela Udemy, e então veio a oportunidade da bolsa do curso Angular/JAVA oferecido pela Let's Code em parceria com o Santander Universidades, entrei de cabeça e fui aprovado, estou aprendendo muito e me apaixonei pelo Angular(porém como disse anteriormente não me limito a ele), este site e alguns outros são/serão os frutos do meu esforço e capacidade de aprendizado."
    ],
    type: 'text',
  };
}
