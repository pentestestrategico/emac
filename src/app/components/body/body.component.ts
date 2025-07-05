import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'] 
})
export class BodyComponent {

  fotos = [
    {
      texto: 'Autismo não é uma doença. É uma forma única de ver o mundo.',
      imagem: '/assets/autismo.jpg'
    },
    {
      texto: 'Empatia é o melhor caminho para a inclusão.',
      imagem: '/assets/autismo1.jpg'
    },
    {
      texto: 'Crianças autistas são como estrelas: cada uma brilha de um jeito único.',
      imagem: '/assets/autismo5.jpg'
    },
    {
      texto: 'Ser diferente é o que nos torna especiais.',
      imagem: '/assets/menino2.jpeg'
    },
    {
      texto: 'Pessoas autistas têm talentos incríveis — só precisam de espaço para brilhar.',
      imagem: '/assets/autismo6.jpeg'
    },
    {
      texto: 'O silêncio também é uma forma de comunicação.',
      imagem: '/assets/autismo7.jpg'
    },
    {
      texto: 'Não tente mudar quem sou. Me aceite como sou.',
      imagem: '/assets/autismo8.jpg'
    },
    {
      texto: 'Não nos encaixamos? Então vamos reinventar o molde.',
      imagem: '/assets/autismo9.png'
    },
    {
      texto: 'Autismo não precisa de pena. Precisa de oportunidade.',
      imagem: '/assets/logocompleto.jpeg'
    }
  ];

}
