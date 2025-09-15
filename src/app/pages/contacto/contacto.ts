import { Component } from '@angular/core';
import { Header} from '../../components/header/header';
import { Contentcontacto} from '../../components/contentcontacto/contentcontacto';
import { Footer } from '../../components/footer/footer';


@Component({
  selector: 'app-contacto',
  imports: [ Header, Contentcontacto, Footer],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

}
