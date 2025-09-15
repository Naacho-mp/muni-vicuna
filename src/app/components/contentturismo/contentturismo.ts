import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contentturismo',
  imports: [CommonModule],
  templateUrl: './contentturismo.html',
  styleUrls: ['./contentturismo.css']
})
export class ContentturismoComponent {
  tours = [
    {
      title: 'Tour Planetario 1',
      img: 'assets/planetario1.jpg',
      description: 'CHARLA SOBRE EL CIELO NOCTURNO 🔭🪐 Te invitamos a disfrutar de una fascinante experiencia de 1 hora ⏱️, que incluye una charla astronómica y una proyección en el planetario, donde descubrirás los secretos del cosmos y las maravillas del universo. Esta experiencia única incluye: Detalles del Tour: Charla Astronómica: Aprende sobre constelaciones, planetas y fenómenos astronómicos en un entorno envolvente. Experiencia Fulldome: Disfruta de una proyección inmersiva que te llevará a explorar el cielo nocturno de una manera única. Precios: 👤 Adultos: $8.000 👵 Adulto Mayor: $6.000 👶 Niños (3 a 12 años): $4.500 🚗 El valor del ticket no incluye traslado. Recuerda reservar y pagar tus entradas al menos una hora antes del inicio del tour. Debes presentarte en nuestra sala de ventas, dentro de la Torre Bauer, frente a la Plaza de Armas de Vicuña 🌄. La sala tiene acceso por la intersección de las calles San Martín N°275 y Gabriela Mistral N°270. El pago solo se puede realizar en la sala de ventas; no es posible pagar en el Observatorio. Este trámite es obligatorio para poder ingresar al tour. ¡Te esperamos con los brazos abiertos! Ven a vivir una experiencia astronómica inolvidable en el nuevo Mamalluca. ✨🫶🏻🔭🪐',
      showFullText: false
    },
    {
      title: 'Tour Observatorio',
      img: 'assets/observatorio-noche.jpg',
      description: 'TOUR ASTRONÓMICO ¡Vive una experiencia única en el Tour Astronómico del Observatorio Mamalluca! Este fascinante recorrido está diseñado para acercarte al enigmático y majestuoso universo que nos rodea. Al llegar, serás recibido con una charla introductoria a simple vista, acompañada por un guía astronómico experto. Luego, comenzará la observación a través de telescopios manuales de 12 pulgadas. Además, podrás disfrutar de la icónica cúpula de Mamalluca, donde tendrás la oportunidad de observar el cielo a través de un telescopio digital de 16 pulgadas, sumergiéndote en la magia de estar dentro de una cúpula astronómica. En Mamalluca, descubrirás los secretos del cosmos de una manera accesible y amena 🌚🌟. Durante la sesión, nuestros guías especializados no solo compartirán conocimientos sobre las constelaciones, los planetas y las galaxias, sino que también te explicarán la relevancia de la astronomía en la cultura y la historia de Chile. La charla está pensada para que todos, desde aficionados hasta principiantes, encuentren el contenido comprensible, estimulante e inspirador. 🔭 Duración del Tour: Aproximadamente 1 hora y 30 minutos ⏱️. Detalles del tour: Charla Astronómica Observación con telescopios Dobson Truss de 12" Observación a través de la cúpula con telescopio digital de 16" Precios: 👤 Adultos: $15.000 👵 Adulto Mayor: $6.000 👶 Niños (3 a 12 años): $5.000 🚗 El valor del ticket no incluye traslado. Recuerda reservar y pagar tus entradas al menos una hora antes del inicio del tour. Debes presentarte en nuestra sala de ventas, dentro de la Torre Bauer, frente a la Plaza de Armas de Vicuña 🌄. La sala tiene acceso por la intersección de las calles San Martín N°275 y Gabriela Mistral N°270. El pago solo se puede realizar en la sala de ventas; no es posible pagar en el Observatorio. Este trámite es obligatorio para poder ingresar al tour. ¡Te esperamos con los brazos abiertos! Ven a vivir una experiencia astronómica inolvidable en el nuevo Mamalluca. ✨🫶🏻🔭🪐',
      showFullText: false
    },
    {
      title: 'Tour Planetario 2',
      img: 'assets/planetario2.jpg',
      description: '🌟 TOUR COMPLETO (PLANETARIO + ASTRONOMÍA) 🌟 🌌 ¡Atrévete a descubrir el cielo como nunca antes! 🌌 Comienza tu experiencia con 1 hora de charla sobre el cielo nocturno 🔭🪐 en el Planetario Municipal Mamalluca, con un formato fulldome de inmersión digital y guías expertos del Observatorio. Luego, disfruta de un espectacular documental fulldome 4K sobre el sistema solar. Continuamos el recorrido en las terrazas del observatorio, donde podrás disfrutar de una charla astronómica 🌠 y observar el firmamento a través de telescopios manuales de 12” y 14” pulgadas. ¡Déjate asombrar por los cielos más limpios del mundo! ✨ Finalmente, culminamos la aventura en la cúpula central del Observatorio Mamalluca, con una observación en telescopio digital de 16 pulgadas. Todo este recorrido será acompañado por nuestros guías especializados del Centro Astronómico Cerro Mamalluca. ⏳ Duración total del Tour Completo: 2 horas y 30 minutos aproximadamente. Descripción del tour: 🌍 Tour en el Planetario Municipal 🗣️ Charla Astronómica 🔭 Observación con telescopios manuales Dobson de 12” y 14” pulgadas 🌌 Observación a través de la cúpula con telescopio digital de 16” pulgadas 💰 Precios: 👩‍🦳 Adultos: $18.000 👵 Adulto Mayor: $9.000 👶 Niños (3 a 12 años): $8.000 VALOR DE TICKET NO INCLUYE TRASLADO. Recuerda reservar y pagar tus entradas al menos una hora antes del inicio del tour. Debes presentarte en nuestra sala de ventas, dentro de la Torre Bauer, frente a la Plaza de Armas de Vicuña 🌄. La sala tiene acceso por la intersección de las calles San Martín N°275 y Gabriela Mistral N°270. El pago solo se puede realizar en la sala de ventas; no es posible pagar en el Observatorio. Este trámite es obligatorio para poder ingresar al tour. ¡Te esperamos! Ven a disfrutar de una experiencia astronómica única en Mamalluca. ✨🫶🏻🔭🪐',
      showFullText: false
    },
    {
      title: 'Tour Especial',
      img: 'assets/planetario4.jpg',
      description: 'TOUR COMPLETO PREMIUM – 🌌 Vive el Universo de Cerca Sumérgete en una experiencia astronómica única de 2 horas en el Observatorio Mamalluca, siguiendo un recorrido que te llevará por todo el cosmos. ✨ Tu experiencia incluye: 1. Planetario Municipal Mamalluca – Disfruta de un documental en 4K formato fulldome que te transportará a planetas, estrellas y galaxias. 🎬 2. Terrazas del observatorio – Charla guiada sobre astronomía mientras observas el cielo con telescopios Dobson de 12”. 🌠 3. Telescopio premium de 24” – Observación exclusiva de la Luna, planetas y cuerpos celestes lejanos con el telescopio más grande del observatorio. 🔭 4. 📸 Fotografía grupal por familia, incluida en la experiencia (no individual y no por reserva). 🎟 Tarifas: 👵 Adultos: $18.000 👴 Adulto Mayor: $9.000 👶 Niños (3 a 12 años): $8.000 🚫 Traslado no incluido Recuerda reservar y pagar tus entradas al menos una hora antes del inicio del tour. Debes presentarte en nuestra sala de ventas, dentro de la Torre Bauer, frente a la Plaza de Armas de Vicuña 🌄. La sala tiene acceso por la intersección de las calles San Martín N°275 y Gabriela Mistral N°270. El pago solo se puede realizar en la sala de ventas; no es posible pagar en el Observatorio. Este trámite es obligatorio para poder ingresar al tour. 🌠 Vive una noche inolvidable explorando el cosmos con el Tour Completo Premium. ¡Te esperamos! ✨🔭🌌',
      showFullText: false
    }
  ];

  toggleText(tour: any) {
    tour.showFullText = !tour.showFullText;
  }
}
