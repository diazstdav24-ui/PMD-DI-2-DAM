import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculator',
  styleUrl: './calculator.css',
  templateUrl: './calculator.html',
})
export class Calculator {


  //En este documento se realizan los calculos

  screen = '0';
  operando1 = 0;
  operando2 = 0;

  //Si la pantalla actual es 0, escribe uno por encima, si no añade un uno a la pantalla
  escribirNumero1() {
    if(this.screen == '0') {
   this.screen = '1';
    } else {
      this.screen = this.screen + '1';
    }
  }

  escribirNumero2() {
    if(this.screen == '0') {
   this.screen = '2';
    } else {
      this.screen = this.screen + '2';
    }  
  }

  sumar() {
    // Concatenar el simbolo + al operando que hay en screen.
    this.screen += '+';
  }

  //Recoges el operando 1 y el operando, lo conviertes en número, lo sumas y convviertes a string para mostrarlo
  resultado() {
    this.operando1 = Number(this.screen.split("+")[0]);
    this.operando2 = Number(this.screen.split("+")[1]);
    let resultadoSuma = this.operando1 + this.operando2;
    this.screen = resultadoSuma.toString();
}


  
}
