import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  quantidadeCaractere: number = 3; // Valor inicial

  senhaGerada: boolean = false;

  gerarSenha() {
    this.senhaGerada = true;
  }

  constructor() { }
}
