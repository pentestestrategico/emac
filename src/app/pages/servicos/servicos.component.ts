import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ServicosComponent {
  servicos = [
    {
      titulo: 'ABA',
      descricao: 'Intervenção baseada em Análise do Comportamento Aplicada para desenvolvimento de habilidades.',
      icone: 'fas fa-brain',
      cor: '#3AA3E5' // azul
    },
    {
      titulo: 'Avaliação Psicológica',
      descricao: 'Diagnóstico e acompanhamento emocional e comportamental.',
      icone: 'fas fa-user-check',
      cor: '#FCC32C' // amarelo
    },
    {
      titulo: 'Fonoaudiologia',
      descricao: 'Estímulo e reabilitação da comunicação oral e escrita.',
      icone: 'fas fa-comments',
      cor: '#47BF59' // verde
    },
    {
      titulo: 'Musicoterapia',
      descricao: 'Terapia através da música para estimular emoções, comunicação e socialização.',
      icone: 'fas fa-music',
      cor: '#FC4446' // vermelho
    },
    {
      titulo: 'Neuropsicopedagogia',
      descricao: 'Avaliação e intervenção em dificuldades de aprendizagem e desenvolvimento cognitivo.',
      icone: 'fas fa-brain',
      cor: '#3AA3E5' // azul
    },
    {
      titulo: 'Nutricionista',
      descricao: 'Orientação alimentar personalizada para todas as fases da vida.',
      icone: 'fas fa-apple-alt',
      cor: '#FCC32C' // amarelo
    },
    {
      titulo: 'Seletividade Alimentar / Terapia Alimentar',
      descricao: 'Apoio para ampliar o repertório alimentar e promover hábitos saudáveis.',
      icone: 'fas fa-utensils',
      cor: '#47BF59' // verde
    },
    {
      titulo: 'Psicologia Infantil, Adulto e Melhor Idade',
      descricao: 'Atendimento psicológico para todas as idades, focando em bem-estar e saúde mental.',
      icone: 'fas fa-child',
      cor: '#FC4446' // vermelho
    },
    {
      titulo: 'Psicomotricista',
      descricao: 'Desenvolvimento da coordenação motora, equilíbrio e consciência corporal.',
      icone: 'fas fa-running',
      cor: '#3AA3E5' // azul
    },
    {
      titulo: 'Psicopedagogia',
      descricao: 'Apoio no processo de aprendizagem e superação de dificuldades escolares.',
      icone: 'fas fa-book',
      cor: '#FCC32C' // amarelo
    },
    {
      titulo: 'Fisioterapia Infantil',
      descricao: 'Estímulo ao desenvolvimento motor e prevenção de alterações posturais.',
      icone: 'fas fa-baby',
      cor: '#47BF59' // verde
    },
    {
      titulo: 'Terapia Ocupacional',
      descricao: 'Promoção da autonomia e independência nas atividades do dia a dia.',
      icone: 'fas fa-hands-helping',
      cor: '#FC4446' // vermelho
    },
    {
      titulo: 'Assessoria Jurídica',
      descricao: 'Orientação e suporte legal para famílias e pacientes.',
      icone: 'fas fa-balance-scale',
      cor: '#3AA3E5' // azul
    }
  ];
}
