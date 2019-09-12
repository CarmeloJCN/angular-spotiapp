import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.less']
})
export class TarjetasComponent implements OnInit {

  @Input() items: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

}
