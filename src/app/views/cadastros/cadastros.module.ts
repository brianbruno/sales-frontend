import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ClienteComponent } from './cliente.component';
import { ClienteIDComponent } from './cliente-id.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Buttons Routing
import { CadastrosRoutingModule } from './cadastros-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  declarations: [
    ClienteComponent,
    ClienteIDComponent,
  ]
})
export class CadastrosModule { }
