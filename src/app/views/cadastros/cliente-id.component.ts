import { Component } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  templateUrl: 'cliente-id.component.html'
})
export class ClienteIDComponent {

  private sub: any;
  private idCliente = null;
  private cliente = null;
  loading = true;

  constructor(private router: Router, private route: ActivatedRoute, public spinner: NgxSpinnerService) {
    const self = this;
    this.sub = this.route.params.subscribe(params => {
      self.idCliente = params['id']; // (+) converts string 'id' to a number
    });

    this.spinner.show();

    setTimeout(() => {
      console.log('Paa');
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

}
