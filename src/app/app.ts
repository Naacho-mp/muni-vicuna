import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 👇 Importa tu componente header
import { Header } from './components/header/header';
import { Footer} from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true, // 👈 Esto también es importante
  imports: [RouterOutlet, Header, Footer], // 👈 Agrégalo aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('muni-vicuna');
}
