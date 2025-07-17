import { Component, Renderer2, Inject } from '@angular/core';
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

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
    if (this.isMenuOpen) {
      this.renderer.addClass(this.document.body, 'menu-open');
    } else {
      this.renderer.removeClass(this.document.body, 'menu-open');
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.renderer.removeClass(this.document.body, 'menu-open');
  }
}
