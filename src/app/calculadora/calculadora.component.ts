import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  numero1: any;
  numero2: any;

  resultado: number = 0

  suma(){
    this.resultado = Number(this.numero1) + Number(this.numero2)
  }

  resta(){
    this.resultado = Number(this.numero1) - Number(this.numero2)
  }

  multiplicar(){
    this.resultado = Number(this.numero1) * Number(this.numero2)
  }

  dividir(){
    this.resultado = Number(this.numero1) / Number(this.numero2)
  }
  exponente(){
    this.resultado = Number(Math.pow(this.numero1, this.numero2))
  }
}