import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Clientesclasse } from './clientesclasse';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor() { }

  private clienteSource = new BehaviorSubject({ cliente: null, key: '' });
  currentCliente = this.clienteSource.asObservable();

  changeCliente(cliente: Clientesclasse, key: string) {
    this.clienteSource.next({ cliente: Clientesclasse, key: key });
  }
}
