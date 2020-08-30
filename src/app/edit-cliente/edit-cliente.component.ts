import { DataService } from './../services/data.service';

import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClientesService } from './../services/clientes.service';
import { Clientesclasse } from '../services/clientesclasse';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  cliente: Clientesclasse
  key: string ='';
 
 
  constructor(

    private clienteService: ClientesService,
    private datacliente: DataService,
    private toastr: ToastrService 
  ) { }

  ngOnInit(): void {
    this.cliente = new Clientesclasse();
    this.datacliente.currentCliente.subscribe(data => {
      if (data.cliente && data.key) {
        this.cliente = new Clientesclasse();
        this.cliente.nome = data.cliente.nome;
        this.cliente.email = data.cliente.email;
        this.cliente.endereco = data.cliente.endereco;
        this.cliente.telefone = data.cliente.telefone;
        this.key = data.key;
      }
    })
  }


  onSubmit() {
    if (this.key) {
      this.clienteService.update(this.cliente, this.key);
    } else {
      this.clienteService.insert(this.cliente);
    }

    this.cliente = new Clientesclasse();
    this.toastr.success( 'adicionado na base de dados!');
  }

}