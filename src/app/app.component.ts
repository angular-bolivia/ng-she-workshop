import { Component } from '@angular/core';

import { Gasto } from './gasto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  presupuesto = 0;
  restante = 0;
  existePresupuesto = false;
  nombreGasto = '';
  cantidadGasto = 0;
  gastos: Gasto[] = [];

  ingresarPresupuesto(): void {
    this.restante = this.presupuesto;
    this.existePresupuesto = true;
  }

  agregarGasto(): void {
    if (this.nombreGasto !== '') {
      const gasto = new Gasto(this.nombreGasto, this.cantidadGasto);
      this.gastos.push(gasto);
      this.restante -= this.cantidadGasto;
      this.nombreGasto = '';
      this.cantidadGasto = 0;
    }
  }

  eliminarGasto(indiceGasto: number, cantidadGasto: number): void {
    this.gastos.splice(indiceGasto, 1);
    this.restante += cantidadGasto;
  }
}
