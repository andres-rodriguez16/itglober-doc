## Componente Reviews

![reviews.png](../assets/reviews.png)

El componente `Reviews` muestra una sección de reseñas deslizables utilizando el paquete Swiper. Permite a los usuarios ver múltiples reseñas en un carrusel interactivo.

## Instalación de swiper

```js
npm install swiper
```

## Propiedades de Swiper

- `modules`: Un array que contiene los módulos de Swiper que se utilizarán en el carrusel. En el ejemplo, se utilizan los módulos `Navigation`, `Autoplay` y `Pagination`.

- `loop`: Un valor booleano que determina si el carrusel debe ser cíclico (es decir, al llegar al último elemento, volver al primero). En el ejemplo, se establece en `true`.

- `spaceBetween`: La cantidad de espacio (en píxeles) entre los elementos del carrusel. En el ejemplo, se establece en `22`.

- `slidesPerView`: Define el número de elementos que se mostrarán en cada vista del carrusel. En el ejemplo, se utiliza la variable **slidesPerView** para adaptar el tamaño del carrusel según el tamaño de la pantalla. Esto significa que la cantidad de elementos visibles se ajustará automáticamente para brindar una experiencia óptima en diferentes dispositivos y tamaños de pantalla.

- `navigation`: Un valor booleano que indica si se deben mostrar los botones de navegación (anterior/siguiente) en el carrusel. En el ejemplo, se establece en `true`.

- `autoplay`: Un objeto que configura la reproducción automática del carrusel. En el ejemplo, se establece un retraso de reproducción de 6000 milisegundos (6 segundos).

- `pagination`: Un objeto que configura la paginación del carrusel. En el ejemplo, se utiliza el tipo de paginación "bullets" (puntos) y se permite hacer clic en ellos.

#### Así sería la configuración de swiper:

```js
<Swiper
    modules={[Navigation, Autoplay, Pagination]}
    loop={true}
    spaceBetween={22}
    slidesPerView={slidesPerView}
    navigation
    autoplay={{
      delay: 6000,
    }}
    pagination={{
      type: 'bullets',
      clickable: true,
    }}
  >
```

Puedes encontrar más información sobre Swiper en [http://swiperjs.com/swiper-api](http://swiperjs.com/swiper-api 'Swiper').

### SwiperSlide

El componente SwiperSlide es parte de la biblioteca Swiper y se utiliza para representar una diapositiva individual dentro de un carrusel en React. Aquí tienes un ejemplo de cómo se agrega un `SwiperSlide`:

```jsx
<SwiperSlide>diapositivas</SwiperSlide>
```

## Propiedades

| Propiedad | Tipo                | Descripción                                            |
| --------- | ------------------- | ------------------------------------------------------ |
| data      | `Array<reviewItem>` | El arreglo de reseñas que se mostrarán en el carrusel. |

### Propiedades de reviewItem

| Propiedad | tipo   | Descripción                                                                                  |
| --------- | ------ | -------------------------------------------------------------------------------------------- |
| id        | string | Un identificador único que se utiliza para el cambio de idioma y la traducción de la reseña. |
| name      | string | El nombre de la persona que escribió la reseña.                                              |
| logo      | string | La ruta de la imagen del logotipo asociado a la reseña.                                      |
| position  | string | La posición o cargo de la persona que escribió la reseña.                                    |

Nota : Asegúrate de que el texto proporcionado en la propiedad **id** sea un identificador único que servirá para el cambio de idioma. Puedes agregar las traducciones correspondientes en los archivos de mensajes para cada idioma, como se muestra a continuación:

Para inglés, agrega las traducciones en el archivo ../Messages/en/template/review-paragraph.ts
WEPara español, agrega las traducciones en el archivo ../Messages/es/template/review-paragraph.ts

Mantener identificadores únicos para los textos en estas propiedades te permitirá implementar el cambio de idioma de manera eficiente y consistente en tu aplicación. Asegúrate de definir las traducciones correspondientes en los archivos de mensajes para cada idioma que desees admitir en tu aplicación.

### Ejemplo

```js
const messages = {
  id: 'contenido',
  'review-id-1': 'Esta es la primera reseña.',
  // Agrega más traducciones según sea necesario
};

export default messages;
```

## Cómo Agregar o Modificar una review

Para modificar o agregar una review al carrusel, sigue estos pasos:

- Abre el archivo con la ruta"../assets/img/images/reviews/data.ts" que contiene el arreglo con todos los clientes.
- Busca el arreglo llamado reviewClient, que almacena los clientes.
- Modifica el objeto existente o agrega un nuevo objeto al arreglo con las propiedades correspondientes de reviewItem.
- Guarda los cambios en el archivo data.ts.

`Nota`: Para agregar una imagen al componente, puedes seguir dos opciones:

Agregar la imagen a la carpeta ubicada en la ruta ../assets/img/images/clients. Asegúrate de colocar la imagen en esa carpeta para que se pueda acceder correctamente desde el componente.

Utilizar un enlace externo para la imagen. En este caso, puedes proporcionar directamente la URL de la imagen externa que deseas utilizar.

Recuerda que al definir la propiedad **logo** de un objeto reviewItem, debes asegurarte de que corresponda a una de estas opciones. Esto permitirá que las imágenes se carguen correctamente en el componente reviews.

## Ejemplo de uso

```js
import { Reviews } from './ruta-donde-se-encuentra-el-componente/Reviews';

const reviewClient = [
 {
   id: 'review-id-1',
   name: 'John Doe',
   logo: 'logo1.png',
   position: 'Developer',
 }
 // Agrega más objetos de reseñas según sea necesario
];

export default reviewClient;


const App = () => {
 return (
   <div>
     <h1>My App</h1>
     <Reviews data={reviewClient} />
   </div>
 );
};

export default App;
```
