import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  transform(value: string): any {

    const url = 'https://open.spotify.com/embed/';
    const end = value.lastIndexOf(':');
    const tipo = value.substring(value.indexOf(':') + 1, end);
    const id = value.substring(value.lastIndexOf(':') + 1);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + tipo + '/' + id);
  }

}
