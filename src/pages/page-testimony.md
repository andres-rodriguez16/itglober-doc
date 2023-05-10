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

## Interfaz `TestimonyItem`

La interfaz `TestimonyItem` describe la estructura de cada objeto de testimonio en el arreglo `data`.

```typescript
interface TestimonyItem {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  className: string;
  link: string;
}
```

## Propiedades de TestimonyItem

| Propiedad   | tipo   | Descripción                                                                    |
| ----------- | ------ | ------------------------------------------------------------------------------ |
| id          | string | El identificador único del testimonio.                                         |
| name        | string | Nombre de la empresa.                                                          |
| description | string | id unico de La descripción o contenido del testimonio.                         |
| image       | string | URL de la imagen del autor del testimonio.                                     |
| alt         | string | Texto alternativo para la imagen del autor del testimonio                      |
| className   | string | La clase CSS adicional para aplicar a la imagen del autor del testimonio.      |
| link        | string | URL a la página externa que se abrirá al hacer clic en el botón del testimonio |

`Nota` : Asegúrate de que el texto proporcionado en la propiedad **description** sea un identificador único que servirá para el cambio de idioma. Puedes agregar las traducciones correspondientes en los archivos de mensajes para cada idioma, como se muestra a continuación:

Para inglés, agrega las traducciones en el archivo ../Messages/en/template/reviews.ts
Para español, agrega las traducciones en el archivo ../Messages/es/template/reviews.ts

Mantener identificadores únicos para los textos en estas propiedades te permitirá implementar el cambio de idioma de manera eficiente y consistente en tu aplicación. Asegúrate de definir las traducciones correspondientes en los archivos de mensajes para cada idioma que desees admitir en tu aplicación.

## Ejemplo de uso

```js
import { Testimony } from './components/Testimony';
import { TestimonyItem } from './interfaces/Testimony';

const testimonies: TestimonyItem[] = [
  {
    id: '1',
    name: 'Exito',
    description:
      '¡Increíble! ¡He duplicado mis ventas gracias el exelente trabajo de itglobers!',
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
