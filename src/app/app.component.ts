import { Component } from '@angular/core';
import { Gasto } from './gasto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  presupuesto = '';
  restante = 0;
  existePresupuesto = false;
  nombreGasto = '';
  cantidadGasto = 0;
  gastos: Gasto[] = [];

  ingresarPresupuesto(): void {
    this.restante = Number(this.presupuesto);
    this.existePresupuesto = true;
  }

  agregarGasto(): void {
    const gasto = new Gasto(this.nombreGasto, this.cantidadGasto);
    this.gastos.push(gasto);
    this.restante -= this.cantidadGasto;
    this.nombreGasto = '';
    this.cantidadGasto = 0;
  }

  eliminarGasto(gasto: Gasto): void {
    this.gastos = this.gastos.filter(g => g !== gasto);
    this.restante += gasto.cantidadGasto;
  }
}
