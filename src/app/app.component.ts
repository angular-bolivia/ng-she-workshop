import { Component } from '@angular/core';
import { Gasto } from './gasto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  presupuesto = '';
  restante = '';
  existePresupuesto = false;
  nombreGasto = '';
  cantidadGasto = 0;
  gastos: Gasto[] = [];

  ingresarPresupuesto(): void {
    this.restante = this.presupuesto;
    this.existePresupuesto = true;
  }

  agregarGasto(): void {
    const gasto = new Gasto(this.nombreGasto, this.cantidadGasto);
    this.gastos.push(gasto);
    this.restarPresupuesto();
    console.log(this.gastos);
    this.nombreGasto = '';
    this.cantidadGasto = 0;
  }

  eliminarGasto(gasto: Gasto): void {
    this.gastos = this.gastos.filter(g => g !== gasto);
    this.sumarPresupuesto(gasto);
  }

  sumarPresupuesto(gasto: Gasto): void {
    let restante = Number(this.restante);
    restante += gasto.cantidadGasto;
    this.restante = String(restante);
  }

  restarPresupuesto(): void {
    const gasto = Number(this.cantidadGasto);
    let restante = Number(this.restante);
    restante -= gasto;
    this.restante = String(restante);
  }
}
