import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
  screen = '0';
  operando1 = 0;
  operando2 = 0;

  escribirNumero1() {
    if (this.screen === '0') {
      this.screen = '1';
    } else {
      this.screen = this.screen + '1';
    }
  }

  escribirNumero2() {
    if (this.screen == '0') {
      this.screen = '2';
    } else {
      this.screen = this.screen + '2';
    }
  }

  sumar() {
    this.screen += '+';
  }

  resultado() {
    let resultado = 0;

    if (this.screen.includes('+')) {
      this.operando1 = Number(this.screen.split('+')[0]);
      this.operando2 = Number(this.screen.split('+')[1]);
      resultado = this.operando1 + this.operando2;
    } else {
      this.operando1 = Number(this.screen.split('-')[0]);
      this.operando2 = Number(this.screen.split('-')[1]);
      resultado = this.operando1 - this.operando2;
    }

    this.screen = resultado.toString();
  }

  restar() {
    this.screen += '-';
  }

  clear() {
    this.screen = '0';
  }
}
