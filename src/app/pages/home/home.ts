import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Contentprincipal } from '../../components/contentprincipal/contentprincipal';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, Contentprincipal, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
