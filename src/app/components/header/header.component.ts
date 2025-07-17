import { Component, Renderer2, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent {
  isMenuOpen = false;
  
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
    if (this.isMenuOpen) {
      this.renderer.addClass(this.document.body, 'menu-open');
    } else {
      this.renderer.removeClass(this.document.body, 'menu-open');
    }
  }

  closeMenu() {
    console.log('Fechando menu...'); // Debug
    this.isMenuOpen = false;
    this.renderer.removeClass(this.document.body, 'menu-open');
  }

  onLinkClick() {
    console.log('Link clicado, fechando menu...'); // Debug
    this.closeMenu();
  }
}
