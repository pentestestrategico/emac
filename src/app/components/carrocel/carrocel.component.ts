import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrocel',
  templateUrl: './carrocel.component.html',
  styleUrls: ['./carrocel.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CarrocelComponent {
  modalImg: string | null = null;

  openModal(img: string) {
    this.modalImg = img;
  }

  closeModal() {
    this.modalImg = null;
  }
}
