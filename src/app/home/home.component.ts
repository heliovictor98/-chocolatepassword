import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: '../../app/home/home.component.html',
  styleUrl: '../../app/home/home.component.scss'
})
export class HomeComponent {
  senhaGerada: boolean = false;
  loading: boolean = false;
  btnGerar: boolean = true;

  //MENSAGENS
  msgSucesso: boolean = false;
  msgErro: boolean = false;

  password = '';

  //DADOS DO FORM OBJS
  inputMaiusculo: boolean = false;
  inputMinuscula: boolean = false;
  inputNumero: boolean = true;
  inputEspecial: boolean = false;
  quantidadeCaractere: number = 3;

  gerarSenha() {
    this.msgErro = false;
    this.msgSucesso = false;
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
      this.msgErro = true;
      this.senhaGerada = false;
      setTimeout(() => {
        this.msgErro = false;
      }, 4000);
    } else {
      let generatedPassword = '';
    for (let i = 0, n = charset.length; i < this.quantidadeCaractere; ++i) {
      generatedPassword += charset.charAt(Math.floor(Math.random() * n));
      this.password = generatedPassword;
    }
    this.loading = true;
    this.btnGerar = false;
    this.senhaGerada = false;
    setTimeout(() =>{
      this.loading = false;
      this.btnGerar = true;
      this.senhaGerada = true;
    },1500)

    }


  }

  btnCopy(){
    this.msgSucesso = true;
    if(this.password != null || this.password != null){
      navigator.clipboard.writeText(this.password);
    }
    setTimeout(() =>{
      this.msgSucesso = false;
    },2500)
  }

  constructor() { }
}
