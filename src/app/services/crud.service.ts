import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  

export interface Cliente {
    $key: string;
    nome: string;
    email: string;
    endereco: string
    telefone: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

clientesRef: AngularFireList<any>;
clienteRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }


//criar cliente
AddCliente(cliente: Cliente) {
  this.clientesRef.push({
    nome: cliente.nome,
    email: cliente.email,
    endereco: cliente.endereco,
    telefone: cliente.telefone
  })
}
// Pegar o cliente individual
GetCliente(id: string) {
  this.clienteRef = this.db.object('list-cliente/' + id);
  return this.clienteRef;
}
// listar 
GetClienteList() {
  this.clientesRef = this.db.list('list-cliente');
  return this.clienteRef;
}
// Atualizando o cliente
UpdateCliente(cliente: Cliente) {
  this.clienteRef.update({
    nome: cliente.nome,
    email: cliente.email,
    endereco: cliente.endereco,
    telefone: cliente.telefone
  })
}
// Remover
DeleteCliente(id: string) {
  this.clienteRef = this.db.object('list-cliente/' + id);
  this.clienteRef.remove();
}


}
