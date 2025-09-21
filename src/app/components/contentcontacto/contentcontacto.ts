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
    const soloLetras = /^[a-zA-Z\s]+$/;
    if (!soloLetras.test(this.formData.nombre)) {
      alert('El nombre solo puede contener letras');
      return;
    }

    const soloLetrasApellido = /^[a-zA-Z\s]+$/;
    if (!soloLetrasApellido.test(this.formData.apellido)) {
      alert('El apellido solo puede contener letras');
      return;
    }

    if (!this.formData.email.includes('@')) {
      alert('Ingrese un correo válido');
      return;
    }

    const soloNumeros = /^[0-9]+$/;
    if (!soloNumeros.test(this.formData.telefono)) {
      alert('Ingrese un número de teléfono válido (solo números)');
      return;
    }

    console.log('Formulario enviado');
    console.log(this.formData);
  }
}
