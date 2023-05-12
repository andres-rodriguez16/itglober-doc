# Componente Testimony

[![testimony.png](https://i.postimg.cc/tJK2FBf0/testimony.png)](https://postimg.cc/BPCT0B4N)

El componente `Testimony` se encarga de mostrar testimonios en formato de carrusel deslizante. Utiliza la biblioteca Swiper para la funcionalidad del carrusel.

## Instalación de swiper

```js
npm install swiper
```

### Propiedades de swiper

- `navigation`: Un valor booleano que indica si se deben mostrar los botones de navegación (anterior/siguiente) en el carrusel. En el ejemplo, se establece en `true`.

- `effect`: Una cadena que define el efecto de transición utilizado en el carrusel. En el ejemplo, se utiliza el efecto `'coverflow'`.

- `grabCursor`: Un valor booleano que indica si el cursor debe cambiar a un ícono de agarre al pasar sobre el carrusel. En el ejemplo, se establece en `true`.

- `centeredSlides`: Un valor booleano que indica si los elementos del carrusel deben estar centrados horizontalmente. En el ejemplo, se establece en `true`.

- `slidesPerView`: La cantidad de elementos que se mostrarán en cada vista del carrusel. En el ejemplo, se establece en `3`.

- `coverflowEffect`: Un objeto que configura los detalles del efecto "coverflow". En el ejemplo, se especifican valores para `rotate`, `stretch`, `depth`, `modifier` y `slideShadows`.

- `pagination`: Un objeto que configura la paginación del carrusel. En el ejemplo, se utiliza el tipo de paginación "bullets" (puntos), permitiendo hacer clic en ellos y utilizando bullets dinámicos.

- `modules`: Un array que contiene los módulos adicionales de Swiper que se utilizarán en el carrusel. En el ejemplo, se utilizan los módulos `EffectCoverflow`, `Pagination` y `Navigation`.

- `className`: Una cadena que define la clase CSS aplicada al componente `<Swiper>`. En el ejemplo, se establece en `'testimony'`.

### Así sería la configuración de swiper:

```js
<Swiper
  navigation={true}
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={3}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={{
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
  }}
  modules={[EffectCoverflow, Pagination, Navigation]}
  className='testimony'
>
```

Puedes encontrar más información sobre Swiper en [http://swiperjs.com/swiper-api](http://swiperjs.com/swiper-api 'Swiper').

### SwiperSlide

El componente SwiperSlide es parte de la biblioteca Swiper y se utiliza para representar una diapositiva individual dentro de un carrusel en React. Aquí tienes un ejemplo de cómo se agrega un `SwiperSlide`:

```jsx
<SwiperSlide>diapositivas</SwiperSlide>
```

## Props

| Propiedad | Tipo                   | Descripción                                                                            |
| --------- | ---------------------- | -------------------------------------------------------------------------------------- |
| `data`    | `Array<TestimonyItem>` | Un arreglo de objetos que representan los testimonios que se mostrarán en el carrusel. |

### Propiedades de TestimonyItem

| Propiedad   | tipo   | Descripción                                                                    |
| ----------- | ------ | ------------------------------------------------------------------------------ |
| id          | string | El identificador único del testimonio.                                         |
| name        | string | Nombre de la empresa.                                                          |
| description | string | Id unico de La descripción o contenido del testimonio.                         |
| image       | string | URL de la imagen del autor del testimonio.                                     |
| alt         | string | Texto alternativo para la imagen del autor del testimonio                      |
| className   | string | La clase CSS adicional para aplicar a la imagen del autor del testimonio.      |
| link        | string | URL a la página externa que se abrirá al hacer clic en el botón del testimonio |

`Nota` : Asegúrate de que el texto proporcionado en la propiedad **description** sea un identificador único que servirá para el cambio de idioma. Puedes agregar las traducciones correspondientes en los archivos de mensajes para cada idioma, como se muestra a continuación:

Para inglés, agrega las traducciones en el archivo ../Messages/en/template/reviews.ts
Para español, agrega las traducciones en el archivo ../Messages/es/template/reviews.ts
### Ejemplo

```js
const messages = {
  id: 'contenido',
  'review-id-1': 'Esta es la primera reseña.',
  // Agrega más traducciones según sea necesario
};

export default messages;
```

Mantener identificadores únicos para los textos en estas propiedades te permitirá implementar el cambio de idioma de manera eficiente y consistente en tu aplicación. Asegúrate de definir las traducciones correspondientes en los archivos de mensajes para cada idioma que desees admitir en tu aplicación.

### Cómo Agregar o Modificar un Testimonio

Para modificar o agregar un testimonio al carrusel, sigue estos pasos:

- Abre el archivo con la ruta"../assets/img/images/succesStories/data.ts" que contiene el arreglo con todos los testimonios.
- Busca el arreglo llamado testimonyShopping, que almacena los testimonios.
- Modifica el objeto existente o agrega un nuevo objeto al arreglo con las propiedades correspondientes de TestimonyItem.
- Guarda los cambios en el archivo data.ts.

Una vez que hayas modificado o agregado el testimonio en el archivo data.ts, el componente Testimony utilizará automáticamente los datos actualizados al renderizarse.

Recuerda asegurarte de seguir la estructura y tipos de datos definidos en la interfaz TestimonyItem para mantener la coherencia y evitar errores.

## Ejemplo de uso

```js
import { Testimony } from './components/Testimony';

const testimonies = [
  {
    id: '1',
    name: 'Exito',
    description: 'Id unico, para el cambio de idioma',
    image: 'https://example.com/images/exito.jpg',
    alt: 'Imagen de logo exito',
    className: 'my-class',
    link: 'https://www.exito.com/',
  },
];

const MyComponent = () => {
  return <Testimony data={testimonies} />;
};
```
