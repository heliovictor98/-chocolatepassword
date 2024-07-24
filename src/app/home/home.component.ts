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

  senhaGerada: boolean = false;
  loading: boolean = false;
  btnGerar: boolean = true;
  msgSucesso: boolean = false;

  password = '';

  //DADOS DO FORM OBJS
  inputMaiusculo: boolean = false;
  inputMinuscula: boolean = false;
  inputNumero: boolean = true;
  inputEspecial: boolean = false;
  quantidadeCaractere: number = 3;

  gerarSenha() {
    const upperCaseCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseCharset = 'abcdefghijklmnopqrstuvwxyz';
    const numberCharset = '0123456789';
    const symbolCharset = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let charset = '';
    if (this.inputMaiusculo) charset += upperCaseCharset;
    if (this.inputMinuscula) charset += lowerCaseCharset;
    if (this.inputNumero) charset += numberCharset;
    if (this.inputEspecial) charset += symbolCharset;

    if (charset === '') {
      setTimeout(() => {
       console.log("teste")
      }, 500);
    }

    let generatedPassword = '';
    for (let i = 0, n = charset.length; i < this.quantidadeCaractere; ++i) {
      generatedPassword += charset.charAt(Math.floor(Math.random() * n));
      this.password = generatedPassword;
    }
    console.log(this.password);

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
    if(this.password != null || this.password != null){
      navigator.clipboard.writeText(this.password);
    }
    setTimeout(() =>{
      this.msgSucesso = false;
    },5000)
  }

  constructor() { }
}
