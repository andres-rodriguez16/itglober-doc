# Componente ServiceList react

![services.png](../assets/services.png)

El componente `ServiceList` es un componente de React que muestra una lista de servicios en forma de carrusel utilizando la biblioteca Swiper. Usamos el
siguiente comando para instalar swiper desde la terminal:

```js
npm install swiper
```

## Importaciones

El componente utiliza las siguientes importaciones:

```jsx
import { useEffect, useState } from 'react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../styles/service.scss';
import { ServiceItem } from '../atoms/ServiceItem';
```

# Swiper

Swiper es una biblioteca de desplazamiento de diapositivas altamente personalizable para crear presentaciones interactivas y receptivas en aplicaciones web. Con Swiper, puedes crear fácilmente carrouseles deslizables y galerías de imágenes, entre otras funcionalidades.

## Propiedades

- modules (array): Una matriz de módulos adicionales a importar. En este ejemplo, se están utilizando los módulos Navigation, Autoplay y Pagination.
- direction (string): Define la dirección de desplazamiento de las diapositivas en el carrusel. Puede ser 'horizontal' o 'vertical'. En este caso, se utiliza la variable orientation para determinar la orientación del carrusel en función del tamaño de la pantalla. Esto permite que el carrusel se adapte automáticamente y cambie su orientación según las necesidades, brindando una experiencia de usuario más adecuada.
- speed (number): La velocidad de transición en milisegundos.
- slidesPerView (number): El número de diapositivas visibles al mismo tiempo.
- className (string): Una clase CSS opcional para personalizar el estilo del componente.
- pagination (object): Configuración de paginación.
- type (string): El tipo de paginación. En este ejemplo, se utiliza "bullets" para mostrar puntos.
- clickable (boolean): Indica si los puntos de paginación son interactivos y pueden hacer clic.

#### Así sería la configuración de swiper:

```js
<Swiper
    modules={[Navigation, Autoplay, Pagination]}
    direction={orientation}
    speed={800}
    slidesPerView={1}
    className="slider__services"
    pagination={{
      type: "bullets",
      clickable: true,
    }}
  >
```

Puedes encontrar más información sobre Swiper en [http://swiperjs.com/swiper-api](http://swiperjs.com/swiper-api 'Swiper').

## SwiperSlide

El componente SwiperSlide es parte de la biblioteca Swiper y se utiliza para representar una diapositiva individual dentro de un carrusel en React. Aquí tienes un ejemplo de cómo se agrega un `SwiperSlide`:

```jsx
<SwiperSlide>diapositivas</SwiperSlide>
```

## ServiceItem

El componente `ServiceItem` se utiliza para representar una diapositiva individual dentro del carrusel de servicios.

### Props

El componente acepta las siguientes props:

- `title` (string): El título de la diapositiva.
- `text` (string): El texto descriptivo de la diapositiva.
- `nextSecondBtn` (string): El texto del segundo botón de navegación.
- `nextThirdBtn` (string): El texto del tercer botón de navegación.
- `nextFourthBtn` (string): El texto del cuarto botón de navegación.
- `nextBtn` (string): El texto del primer botón de navegación.

`Nota`: Asegúrate de que el texto proporcionado en estas propiedades sea un identificador único que servirá para el cambio de idioma. Puedes agregar las traducciones correspondientes en los archivos de mensajes para cada idioma, como se muestra a continuación:

Para inglés, agrega las traducciones en el archivo ../Messages/en/template/services.ts.
Para español, agrega las traducciones en el archivo ../Messages/es/template/services.ts.

Mantener identificadores únicos para los textos en estas propiedades te permitirá implementar el cambio de idioma de manera eficiente y consistente en tu aplicación. Asegúrate de definir las traducciones correspondientes en los archivos de mensajes para cada idioma que desees admitir en tu aplicación.

### Ejemplo

```js
const messages = {
  'id': 'contenido',
  'review-id-1': 'Esta es la primera reseña.',
  // Agrega más traducciones según sea necesario
};

export default messages;
```

- `desktopImage` (any): La imagen de la diapositiva para dispositivos de escritorio.
- `image` (any): La imagen de la diapositiva para dispositivos móviles.
- `altText` (string): El texto alternativo para la imagen.

### Uso

Aquí tienes un ejemplo de cómo se utiliza el componente `ServiceItem` junto con SwiperSlide:

```jsx
<SwiperSlide>
  <ServiceItem
    title='slider-title-create'
    text='slider-paragraph-create'
    nextSecondBtn='slider-title-design'
    nextThirdBtn='slider-tittle-support'
    nextFourthBtn='slider-title-trainings'
    nextBtn='slider-title-Technical'
    desktopImage={imageDesktop}
    image={imageMobile}
    altText='soporte y mantenimiento'
  />
</SwiperSlide>
```
