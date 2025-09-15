import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contentcontacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contentcontacto.html',
  styleUrl: './contentcontacto.css'
})
export class Contentcontacto {
  formData = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  };

  enviarFormulario() {
    console.log('✅ Formulario enviado');
    console.log(this.formData);
  }
}
