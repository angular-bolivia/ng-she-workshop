import { Injectable } from '@angular/core';
import { Gasto } from '../gasto.model';
import { StorageService } from './storage.service';

const gastosStorageKey = 'Gasto_List';

const defaultGastos: Gasto[] = [
  {nombreGasto: 'Primer gasto', cantidadGasto: 100},
  {nombreGasto: 'Segundo gasto', cantidadGasto: 50},
  {nombreGasto: 'Tercer gasto', cantidadGasto: 200},
  {nombreGasto: 'Cuarto gasto', cantidadGasto: 200},
  {nombreGasto: 'Quinto gasto', cantidadGasto: 10},
  {nombreGasto: 'Sexto gasto', cantidadGasto: 20},
];

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  gastos: Gasto[];

  constructor(private storageService: StorageService) {
    this.gastos = storageService.getData(gastosStorageKey) || defaultGastos;
  }

  guardarGastos(): void {
    this.storageService.setData(gastosStorageKey, this.gastos);
  }

  getGastos(): Gasto[] {
    return this.gastos;
  }

  agregarGasto(gasto: Gasto): void {
    this.gastos.push(gasto);
    this.guardarGastos();
  }

  actualizarGastos(item, changes): void {
    const index = this.gastos.indexOf(item);
    this.gastos[index] = { ...item, ...changes };
    this.guardarGastos();
  }

  eliminarGasto(item): void {
    const index = this.gastos.indexOf(item);
    this.gastos.splice(index, 1);
    this.guardarGastos();
  }
}
