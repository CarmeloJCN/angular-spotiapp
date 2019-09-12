import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.less']
})
export class TarjetasComponent implements OnInit {

  @Input() items: Array<any> = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verArtista(item: any) {

    let idArtista: string;

    if (item.type === 'artist') {
      idArtista = item.id;
    } else {
      idArtista = item.artists[0].id;
    }

    this.router.navigate(['/artists/', idArtista]);
  }

}
