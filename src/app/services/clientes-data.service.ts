import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Clientesclasse} from '../services/clientesclasse';

@Injectable({
  providedIn: 'root'
})
export class ClientesDataService {
 private clienteSource = new BehaviorSubject({ cliente: null, key: '' });
  currentCliente = this.clienteSource.asObservable();
 
  constructor() { }

changeCliente(cliente:Clientesclasse,key:string){
  this.clienteSource.next({cliente:Clientesclasse, key:key});
}
}
