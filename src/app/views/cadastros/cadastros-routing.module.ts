import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente.component';
import { ClienteIDComponent } from './cliente-id.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Cadastros'
    },
    children: [
      {
        path: '',
        redirectTo: ''
      },
      {
        path: 'cliente',
        component: ClienteComponent,
        data: {
          title: 'Cliente'
        }
      },
      {
        path: 'cliente/:id',
        component: ClienteIDComponent,
        data: {
          title: 'Cliente'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule {}
