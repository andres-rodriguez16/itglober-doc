### Componente Client

[![clients.png](https://i.postimg.cc/6qncdVLS/clients.png)](https://postimg.cc/xNjLQzZy)

El componente Client se utiliza para mostrar una sección de clientes en el sitio web. Esta sección incluye un carrusel deslizante con imágenes de los clientes. Utiliza la biblioteca Swiper para la funcionalidad del carrusel.

## Instalación de swiper

```js
npm install swiper
```

## Propiedades de swiper

- `autoplay`: Un objeto que configura la reproducción automática del carrusel. En el ejemplo, se establece un retraso de reproducción de 6000 ms (6 segundos).

- `slidesPerView`: Define el número de elementos que se mostrarán en cada vista del carrusel. En el ejemplo, se utiliza la variable **grid** para adaptar el tamaño del carrusel según el tamaño de la pantalla. Esto significa que la cantidad de elementos visibles se ajustará automáticamente para brindar una experiencia óptima en diferentes dispositivos y tamaños de pantalla.

- `grid`: Un objeto que configura el diseño en forma de cuadrícula del carrusel. En el ejemplo, se especifica el número de filas (`rows`) en 3.

- `pagination`: Un objeto que configura la paginación del carrusel. En el ejemplo, se habilita la paginación clickable y se utilizan bullets dinámicos.

- `modules`: Un array que contiene los módulos adicionales de Swiper que se utilizarán en el carrusel. En el ejemplo, se utilizan los módulos `Grid`, `Pagination` y `Autoplay`.

- `className`: Una cadena que define la clase CSS aplicada al componente `<Swiper>`. En el ejemplo, se establece en `'client__slider--grid'`.

### Así sería la configuración de swiper:

```js
<Swiper
    autoplay={{
      delay: 6000,
    }}
    slidesPerView={grid}
    grid={{
      rows: 3,
    }}
    pagination={{
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 2,
    }}
    modules={[Grid, Pagination, Autoplay]}
    className='client__slider--grid'    
  >
```

Puedes encontrar más información sobre Swiper en [http://swiperjs.com/swiper-api](http://swiperjs.com/swiper-api 'Swiper').

### SwiperSlide

El componente SwiperSlide es parte de la biblioteca Swiper y se utiliza para representar una diapositiva individual dentro de un carrusel en React. Aquí tienes un ejemplo de cómo se agrega un `SwiperSlide`:

```jsx
<SwiperSlide>diapositivas</SwiperSlide>
```

## Props

La interfaz clientsItem tiene una sola propiedad:

| Propiedad | Tipo                 | Descripción                                                           |
| --------- | -------------------- | --------------------------------------------------------------------- |
| `data`    | `Array<clientsItem>` | Un arreglo de objetos que representan la información de los clientes. |

### Propiedades de clientsItem

| Propiedad | tipo   | Descripción                                          |
| --------- | ------ | ---------------------------------------------------- |
| src       | string | La ruta de la imagen del cliente.                    |
| alt       | string | Texto alternativo para la imagen del cliente.        |
| link      | string | URL de la página a la que se redirige al hacer clic. |

Asegúrate de utilizar estas propiedades e interfaces correctamente al trabajar con el componente Client y sus datos asociados.

### Cómo Agregar o Modificar un cliente

Para modificar o agregar un cliente al carrusel, sigue estos pasos:

- Abre el archivo con la ruta"../assets/img/images/clients/data.ts" que contiene el arreglo con todos los clientes.
- Busca el arreglo llamado clientsData, que almacena los clientes.
- Modifica el objeto existente o agrega un nuevo objeto al arreglo con las propiedades correspondientes de clientsItem.
- Guarda los cambios en el archivo data.ts.

`Nota`: Para agregar una imagen al componente, puedes seguir dos opciones:

- Agregar la imagen a la carpeta ubicada en la ruta ../assets/img/images/clients/clientLogo. Asegúrate de colocar la imagen en esa carpeta para que se pueda acceder correctamente desde el componente.

- Utilizar un enlace externo para la imagen. En este caso, puedes proporcionar directamente la URL de la imagen externa que deseas utilizar.

Recuerda que al definir la propiedad src de un objeto clientsItem, debes asegurarte de que corresponda a una de estas opciones. Esto permitirá que las imágenes se carguen correctamente en el componente Client.

## Ejemplo de uso

```js
import { Client } from './ruta/al/componente/Client';

const App = () => {
  const clientsData = [
    {
      src: 'ruta/a/imagen1.jpg',
      alt: 'Cliente 1',
      link: 'https://www.cliente1.com',
    },
    {
      src: 'ruta/a/imagen2.jpg',
      alt: 'Cliente 2',
      link: 'https://www.cliente2.com',
    },
    // Agrega más objetos de clientes según sea necesario
  ];

  return (
    <div>
      {/* Otros componentes de la aplicación */}
      <Client data={clientsData} />
      {/* Otros componentes de la aplicación */}
    </div>
  );
};

export default App;
```
