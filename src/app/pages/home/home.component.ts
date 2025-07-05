import { Component } from '@angular/core';
import { CarrocelComponent } from "../../components/carrocel/carrocel.component";
import { BodyComponent } from '../../components/body/body.component';
@Component({
  selector: 'app-home',
  imports: [CarrocelComponent, BodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
