import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contentsecplan',
  standalone: true,
  imports: [NgFor],
  templateUrl: './contentsecplan.html',
  styleUrl: './contentsecplan.css'
})
export class Contentsecplan implements AfterViewInit{
secretario = {
    nombre: 'José Misael Martínez Vergara',
    primerSubrogante: 'Eduardo Valenzuela Palma',
    segundoSubrogante: 'Juan Pinto Contreras',
    decreto: 'Decreto 2020',
    fecha: '08 de mayo de 2025',
    imagen: 'assets/Secretario.jpeg'
  };

  contacto = {
    direccion: 'Gabriela Mistral N°225, Vicuña',
    telefono: '51 2670364',
    email: ' secplan@munivicuna.cl'
  };

  descripcion = `SECPLAN es una unidad asesora de la municipalidad encargada de planificar el desarrollo integral de la comuna. 
  Formula proyectos, propone estrategias de desarrollo, y coordina la inversión pública y privada, 
  en línea con las necesidades locales y los planes comunales.`;

  objetivos = [
  'Impulsar el desarrollo armónico y sustentable de la comuna',
  'Apoyar técnicamente la gestión municipal en materias de planificación',
  'Formular y coordinar proyectos de inversión',
  'Promover la participación ciudadana en el diseño del desarrollo comunal'
  ];

  funciones = [
  'Elaborar y actualizar el Plan de Desarrollo Comunal (PLADECO) y el Plan Regulador Comunal (PRC).',
  'Asesorar al alcalde y concejo en planificación territorial y gestión de proyectos.',
  'Formular y evaluar proyectos de inversión pública.',
  'Coordinar con organismos públicos y privados para atraer recursos.',
  'Promover la participación ciudadana en procesos de planificación.',
  'Supervisar y monitorear la ejecución de proyectos comunales.'
  ];

  imagenes = [
    'assets/hola.jpeg',
    'assets/hola2.jpeg',
    'assets/hola3.jpeg',
    'assets/hola.jpeg',
   
  ];

  @ViewChild('carousel', { static: true }) carousel!: ElementRef<HTMLDivElement>;

  isDown = false;
  startX = 0;
  scrollLeft = 0;

  ngAfterViewInit() {
    const carousel = this.carousel.nativeElement;

    carousel.addEventListener('mousedown', (e: MouseEvent) => {
      this.isDown = true;
      carousel.classList.add('active');
      this.startX = e.pageX - carousel.offsetLeft;
      this.scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
      this.isDown = false;
      carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
      this.isDown = false;
      carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e: MouseEvent) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - this.startX) * 2; // velocidad scroll al arrastrar
      carousel.scrollLeft = this.scrollLeft - walk;
    });
  }
}
