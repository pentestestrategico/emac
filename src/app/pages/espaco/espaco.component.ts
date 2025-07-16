import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EspacoPhoto {
  id: number;
  filename: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-espaco',
  templateUrl: './espaco.component.html',
  styleUrls: ['./espaco.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class EspacoComponent {
  modalOpen = false;
  modalImage = '';
  modalTitle = '';

  // Array com as fotos dos espaços
  espacoPhotos: EspacoPhoto[] = [
    {
      id: 1,
      filename: 'dentro1.png',
      title: 'Aqui vai entrar titulo da pagina',
      description: 'aqui entra uma descrição do espaço'
    },
    {
      id: 2,
      filename: 'dentro2.png',
      title: 'Aqui vai entrar titulo da pagina',
      description: 'aqui entra uma descrição do espaço'
    },
    {
      id: 3,
      filename: 'dentro3.png',
      title: 'Aqui vai entrar titulo da pagina',
      description: 'aqui entra uma descrição do espaço'
    },
    {
      id: 4,
      filename: 'dentro4.png',
      title: 'Aqui vai entrar titulo da pagina',
      description: 'aqui entra uma descrição do espaçor'
    },
    {
      id: 5,
      filename: 'dentro5.png',
      title: 'Aqui vai entrar titulo da pagina',
      description: 'aqui entra uma descrição do espaço'
    },
    {
      id: 6,
      filename: 'dentro6.png',
      title: 'Aqui vai entrar titulo da pagina',
      description: 'aqui entra uma descrição do espaço'
    },
    {
      id: 7,
      filename: 'dentro7.png',
      title: 'Aqui vai entrar titulo da pagina',
      description: 'aqui entra uma descrição do espaço'
    },
    {
      id: 8,
      filename: 'dentro8.png',
      title: 'Aqui vai entrar titulo da pagina',
      description: 'aqui entra uma descrição do espaço'
    },
    {
      id: 9,
      filename: 'dentro9.png',
      title: 'Aqui vai entrar titulo da pagina',
      description: 'aqui entra uma descrição do espaço'
    },
    {
      id: 10,
      filename: 'dentro10.png',
      title: 'Aqui vai entrar titulo da pagina',
      description: 'aqui entra uma descrição do espaço'
    },
    {
      id: 11,
      filename: 'dentro11.png',
      title: 'Aqui vai entrar titulo da pagina',
      description: 'aqui entra uma descrição do espaço'
    },
    {
      id: 12,
      filename: 'dentro12.png',
      title: 'Aqui vai entrar titulo da pagina',
      description: 'aqui entra uma descrição do espaço'
    }
  ];

  openModal(imageSrc: string, title: string) {
    this.modalImage = imageSrc;
    this.modalTitle = title;
    this.modalOpen = true;
    // Previne scroll do body quando modal está aberto
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modalOpen = false;
    this.modalImage = '';
    this.modalTitle = '';
    // Restaura scroll do body
    document.body.style.overflow = 'auto';
  }

  // Método para obter o caminho completo da imagem
  getImagePath(filename: string): string {
    return `/assets/espaco/${filename}`;
  }
}
