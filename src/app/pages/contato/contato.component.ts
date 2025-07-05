import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  standalone: true,
  imports: [FormsModule] // Adicione FormsModule aqui
})
export class ContatoComponent {
  nome = '';
  telefone = '';
  email = '';
  mensagem = '';

  escape(text: string): string {
    // Remove tags HTML e codifica caracteres especiais
    return encodeURIComponent(text.replace(/</g, '').replace(/>/g, ''));
  }

  enviarWhatsApp() {
    const texto =
      `Nome: ${this.escape(this.nome)}%0A` +
      `Telefone: ${this.escape(this.telefone)}%0A` +
      `E-mail: ${this.escape(this.email)}%0A` +
      `Mensagem: ${this.escape(this.mensagem)}`;
    window.open(`https://wa.me/5521964348918?text=${texto}`, '_blank');
  }
}
