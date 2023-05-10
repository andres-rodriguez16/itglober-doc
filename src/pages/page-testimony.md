# Componente Testimony

[![testimony.png](https://i.postimg.cc/tJK2FBf0/testimony.png)](https://postimg.cc/BPCT0B4N)

El componente `Testimony` se encarga de mostrar testimonios en formato de carrusel deslizante. Utiliza la biblioteca Swiper para la funcionalidad del carrusel.Usamos el
siguiente comando para instalar swiper desde la terminal:

```js
npm install swiper
```

## Props

| Propiedad | Tipo                   | Descripción                                                                            |
| --------- | ---------------------- | -------------------------------------------------------------------------------------- |
| `data`    | `Array<TestimonyItem>` | Un arreglo de objetos que representan los testimonios que se mostrarán en el carrusel. |

## Propiedades de TestimonyItem

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

Mantener identificadores únicos para los textos en estas propiedades te permitirá implementar el cambio de idioma de manera eficiente y consistente en tu aplicación. Asegúrate de definir las traducciones correspondientes en los archivos de mensajes para cada idioma que desees admitir en tu aplicación.

## Cómo Agregar o Modificar un Testimonio

Para modificar o agregar un testimonio al carrusel, sigue estos pasos:

- Abre el archivo con la ruta"../assets/img/images/succesStories/data.ts" que contiene el arreglo con todos los testimonios.
- Busca el arreglo llamado testimonyShopping, que almacena los testimonios.
- Modifica el objeto existente o agrega un nuevo objeto al arreglo con las propiedades correspondientes de TestimonyItem.
- Guarda los cambios en el archivo data.ts.

`Nota`: recuerda que si vas a agregar o modificar la propiedad **description** seguir los pasos mencionados anteriormente para implementar el cambio de idioma de manera eficiente.

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
