import { Component } from '@angular/core';
import { Header} from '../../components/header/header';
import { ContentturismoComponent} from '../../components/contentturismo/contentturismo';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-turismo',
  imports: [Header, ContentturismoComponent, Footer],
  templateUrl: './turismo.html',
  styleUrl: './turismo.css'
})
export class Turismo {

}
