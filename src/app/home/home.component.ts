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
  loading: boolean = false;
  btnGerar: boolean = true;
  msgSucesso: boolean = false;

  gerarSenha() {
      this.loading = true;
      this.btnGerar = false;
      this.senhaGerada = false;
    setTimeout(() =>{
      this.loading = false;
      this.btnGerar = true;
      this.senhaGerada = true;
    },1500)

  }

  onQuantidadeCaractereChange(value: number): void {
    if (value < 3) {
      this.quantidadeCaractere = 3;
    } else if (value > 36) {
      this.quantidadeCaractere = 36;
    } else {
      this.quantidadeCaractere = value;
    }
  }

  btnCopy(){
    this.msgSucesso = true;
    setTimeout(() =>{
      this.msgSucesso = false;
    },5000)
  }

  constructor() { }
}
