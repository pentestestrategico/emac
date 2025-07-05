import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrocel',
  imports: [RouterModule],
  templateUrl: './carrocel.component.html',
  styleUrl: './carrocel.component.css'
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
