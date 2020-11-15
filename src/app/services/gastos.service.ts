import { Injectable } from '@angular/core';
import { Gasto } from '../gasto.model';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  private gastos: Gasto[] = [
    {nombreGasto: 'Primer gasto', cantidadGasto: 100},
    {nombreGasto: 'Segundo gasto', cantidadGasto: 50},
    {nombreGasto: 'Tercer gasto', cantidadGasto: 200},
    {nombreGasto: 'Cuarto gasto', cantidadGasto: 200},
    {nombreGasto: 'Quinto gasto', cantidadGasto: 10},
    {nombreGasto: 'Sexto gasto', cantidadGasto: 20},
  ];

  constructor() { }

  getGastos(): Gasto[] {
    return this.gastos;
  }
}
