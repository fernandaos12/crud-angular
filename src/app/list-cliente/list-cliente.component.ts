
import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';      
import { Observable } from 'rxjs';
import { ClientesService } from './../services/clientes.service';
import { ClientesDataService } from './../services/clientes-data.service';
import { Clientesclasse } from '../services/clientesclasse';

@Component({
  selector: 'app-student-list',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})

export class ListClienteComponent implements OnInit {

  clientes: Observable<any>;


  constructor(
    private clienteService: ClientesService,
    private clienteDataService: ClientesDataService, 
    public toastr: ToastrService 
  ) { }

  ngOnInit() :void{
      this.clientes = this.clienteService.getAll();      
  }

  delete(key:string) {
    if (window.confirm('Tem certeza que quer apagar este registro ?')) { 
      this.clienteService.delete(key);
     this.toastr.success(' registro apagado com sucesso!'); 
    }
  }

  editar(cliente:Clientesclasse, key:string) {
    this.clienteDataService.changeCliente(cliente, key);
  }
}