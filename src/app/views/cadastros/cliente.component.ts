import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'cliente.component.html'
})
export class ClienteComponent {

  clientes = [
    {
      id: 1,
      nome: 'Teste',
      data: '12/12/2018',
      status: 'active'
    },
    {
      id: 2,
      nome: 'Teste 2',
      data: '12/12/2018',
      status: 'active'
    },
    {
      id: 3,
      nome: 'Teste 3',
      data: '12/12/2018',
      status: 'active'
    }
  ];

  constructor(private router: Router) { }

  selecionarCliente(id) {
    this.router.navigate(['cadastros/cliente/' + id]);
  }

}
