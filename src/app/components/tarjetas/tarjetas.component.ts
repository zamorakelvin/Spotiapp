import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})

export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor( private router: Router ) { }

  verartista( item: any ) {
    let artistaid;
    if ( item.type === 'artist') {
      artistaid = item.id;
    }else {
      artistaid = item.artists[0].id;
    }
    // console.log( artistaid );
    this.router.navigate( [ '/artist', artistaid ] );

  }
}
