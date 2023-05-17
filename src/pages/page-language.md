## Componente selector language.

[![language.png](https://i.postimg.cc/wTWGHjvF/language.png)](https://postimg.cc/JGkq5mjB)

El componente Language es responsable de mostrar un selector de idioma en la interfaz de usuario y gestionar el cambio de idioma en la aplicación.

## Configuración inicial

Asegúrate de tener instalada la librería react-intl en tu proyecto. Puedes instalarla ejecutando el siguiente comando en tu terminal:

```tsx
npm install react-intl

```

### react-intl

Es una librería de internacionalización para aplicaciones React que facilita la traducción y adaptación de contenido para diferentes idiomas y regiones. Proporciona componentes y utilidades para traducir textos, formatear números, fechas y horas, y manejar la pluralización. Con react-intl, puedes crear aplicaciones multilingües de manera sencilla y eficiente. Para asegurarnos de que el componente "language" funcione correctamente, vamos a utilizar las siguientes funcionalidades:

1. El **IntlProvider** es un componente proporcionado por la librería react-intl que se utiliza para envolver la aplicación y facilitar la internacionalización y traducción de texto.

#### Propiedades en IntlProvider

El componente IntlProvider envuelve el contenido de la aplicación y acepta dos props importantes:

- locale: Recibe una cadena de texto que representa el idioma actual. Debe ser un código de idioma válido, como "en" para inglés o "es" para español. En este caso, se pasa la variable language que proviene del contexto.

- messages: Recibe un objeto que contiene los mensajes traducidos para el idioma especificado en la propiedad locale. Los mensajes deben estar estructurados en un formato específico, generalmente un objeto con claves que corresponden a las claves utilizadas en el código de la aplicación y valores que contienen los textos traducidos.. En este caso, se pasa el objeto message[language] que contiene los textos traducidos para el idioma actual.

#### Ejemplo de como se usa en la aplicacion

```tsx
import { useContext, useEffect } from 'react';
import { allmessages } from '../../Messages/Messages';

export const Translation = () => {
  const { language } = useContext(LanguageContext);
  const message: any = allmessages;

  useEffect(() => {}, [language]);

  return (
    <IntlProvider locale={language} messages={message[language]}>
      // componentes de la aplicacion
    </IntlProvider>
  );
};
```

En este fragmento de código se muestra un componente Translation que utiliza el contexto LanguageContext para obtener el idioma actual seleccionado por el usuario. A continuación, se utiliza el componente IntlProvider de react-intl para configurar el contexto de internacionalización en la aplicación, pasándole como propiedad al locale.

luego traemos El objeto allmessages está estructurado como un objeto con dos propiedades principales: es y en. Cada una de estas propiedades contiene sub-objetos que representan las secciones o categorías de la aplicación, y dentro de cada sección se encuentran las claves y valores de los mensajes traducidos, que es la segunda propiedad que recibe messages, que se va actualizar dependiendo el idioma de la pagina. Ejemplo:

```tsx
const allmessages = {
  es: {
    seccion1: {
      'mensaje1': '¡Hola!',
      'mensaje2': '¡Bienvenido!',
    },
    // ... más secciones y mensajes traducidos
  },
  en: {
    section1: {
      'mensaje1': '¡Hello!',
      'mensaje2': '¡welcome!',
    },
    // ... más secciones y mensajes traducidos
  },
};
```

`Nota` : el nombre de la clave del obejto deber ser el mismo para texto de español como de ingles. Si no se mantiene la coherencia entre las claves de traducción en ambos idiomas, el cambio de idioma no funcionará correctamente y el texto no será traducido correctamente en la aplicación. Por lo tanto, es crucial asegurarse de que las claves de traducción sean idénticas en ambos idiomas para garantizar el correcto funcionamiento de la internacionalización.

2.  **FormattedMessage** es un componente proporcionado por react-intl que se utiliza para traducir y formatear textos en aplicaciones React. Permite obtener automáticamente la traducción de un texto en el idioma seleccionado y aplicar formatos específicos, como la pluralización y el formateo de números, fechas y horas. Con FormattedMessage, puedes crear interfaces de usuario multilingües y adaptar el contenido a diferentes idiomas de manera sencilla.

#### Propiedades en FormattedMessage.

proporcionado por react-intl acepta varias propiedades que se pueden utilizar para personalizar y adaptar la presentación del texto traducido. Aquí están la propiedad que necesitamos para la funcionalidad de language con FormattedMessage :

- id: La propiedad "id" especifica la clave de traducción para obtener el texto traducido. Es importante que esta clave coincida exactamente con la clave correspondiente en el archivo de "allMessages" tanto en español como en inglés. Si no se mantiene la coherencia entre las claves de traducción en ambos idiomas, el cambio de idioma no funcionará correctamente y el texto no será traducido correctamente en la aplicación. Por lo tanto, es crucial asegurarse de que las claves de traducción sean idénticas en ambos idiomas para garantizar el correcto funcionamiento de la internacionalización.

#### Ejemplo de como se usa en la aplicacion

```tsx
import { FormattedMessage } from 'react-intl';
export const Header = () => {
  return (
    <FormattedMessage id='countries-title'>
      {message => <h2 className='title'>{message}</h2>}
    </FormattedMessage>
  );
};
```

`Nota` : El **id** que recibe el FormattedMessage debe ser un idenficador unico, deber ser el mismo para texto de español como de ingles.

## Modo de Uso del Componente

Para utilizar el componente Language, sigue estos pasos:

1. Importa el componente Language en el archivo donde desees mostrar el selector de idioma y Coloca el componente Language en el lugar apropiado de tu interfaz de usuario.

```tsx
import <Language /> from './ruta';

function App() {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      <<Language /> />
      {/* Otros componentes de la aplicación */}
    </div>
  );
}
```

2. Asegúrate de que el contexto LanguageContext esté configurado correctamente y que el estado del idioma (language) y la función para establecer el idioma (setLanguage) se proporcionen en el proveedor del contexto.

## Cambiar o Agregar un Nuevo Texto

Para cambiar o agregar un nuevo texto en tu aplicación, sigue estos pasos:

- Abre el archivo Messages/Messages.tsx, donde se encuentran los textos organizados por secciones y por idioma.

- Localiza la sección y el idioma correspondiente al texto que deseas cambiar o agregar.

- Modifica el objeto allmessages y actualiza el valor de la clave que representa el texto. Por ejemplo, si deseas cambiar el texto de bienvenida en inglés, buscarías la clave correspondiente y modificarías su valor.

```tsx
const allmessages = {
  es: {
    section1: {
      'welcomeMessage': 'Bienvenido a mi aplicación!',
    },
  },
  en: {
    section1: {
      'welcomeMessage': 'Welcome to My App!', // Cambia este texto
    },
  },
};
```

`Nota` : El nombre de la clave del objeto deber ser el mismo para texto de español como de ingles. Si no se mantiene la coherencia entre las claves de traducción en ambos idiomas, el cambio de idioma no funcionará correctamente y el texto no será traducido correctamente en la aplicación. Por lo tanto, es crucial asegurarse de que las claves de traducción sean idénticas en ambos idiomas para garantizar el correcto funcionamiento de la internacionalización.

- Guarda los cambios realizados en el archivo Messages/Messages.tsx.

Al guardar los cambios, los nuevos textos o modificaciones se reflejarán automáticamente en tu aplicación cuando se actualice el contexto del idioma. Asegúrate de reiniciar la aplicación o recargar el contexto del idioma para que los cambios surtan efecto.

Recuerda que es importante mantener la estructura y el formato correcto en el archivo Messages/Messages.tsx para que los textos se puedan traducir correctamente en la aplicación.
