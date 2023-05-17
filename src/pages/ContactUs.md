# Contact Us

Este es aparatado de la pagina de contactanos de ITGlobers la cual contiene estos componentes:

* [Traduccion](https://itglober-doc.vercel.app/page-languaje 'Traduccion')
* Form Header
* Form

## Traduccion
El componente `Translate` es un componente con contexto global que permite traducir de ingles a español los textos de la pagina en general incluyendo footer, header e imagenes
* [Traduccion](https://itglober-doc.vercel.app/page-languaje 'Traduccion')

## Form Header

El componente `FormHeader` incluye dentro de si tres secciones, de las cuales dos son textos de formato `<FormattedMessage/>` y una de `<img/>` cuyas propiedades son:

### FormatMessage

 | Propiedad | Tipo                     | Descripción                                                                                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`    | `String` | Un identificador único que se utiliza para el cambio de idioma y la traducción del titulo. |
| `className`    | Scss Class \| String | Un String que determina la clase que se usa para dar los estilos visuales del `<input/>` |

#### Propiedades en FormattedMessage.

Asegúrate de tener instalada la librería react-intl en tu proyecto. Puedes instalarla ejecutando el siguiente comando en tu terminal:

```tsx
npm install react-intl

```

proporcionado por react-intl acepta varias propiedades que se pueden utilizar para personalizar y adaptar la presentación del texto traducido. Aquí están la propiedad que necesitamos para la funcionalidad de language con FormattedMessag :

- id: La propiedad "id" especifica la clave de traducción para obtener el texto traducido. Es importante que esta clave coincida exactamente con la clave correspondiente en el archivo de "allMessages" tanto en español como en inglés. Si no se mantiene la coherencia entre las claves de traducción en ambos idiomas, el cambio de idioma no funcionará correctamente y el texto no será traducido correctamente en la aplicación. Por lo tanto, es crucial asegurarse de que las claves de traducción sean idénticas en ambos idiomas para garantizar el correcto funcionamiento de la internacionalización.

#### Ejemplo de como se usa en la aplicacioncion

```tsx
import { FormattedMessage } from 'react-intl';
export const FormHeader = () => {
  return (
     <FormattedMessage id='contact-level'>
            {message => <h1 className='contact-level-title'>{message}</h1>}
     </FormattedMessage>
  );
};
```

`Nota` : El **id** que recibe el FormattedMessage debe ser un idenficador unico, deber ser el mismo para texto de español como de ingles.

### Imagen

Este componente usa un `<img/>` para renderizar la imagen principal del formulario sus propiedades son:

#### Propiedades

 | Propiedad | Tipo                     | Descripción                                                                                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`    | `String` | La ruta de la imagen sea absoluta o relativa |
| `alt`    | `String` | Texto usado para manejo de metadata |
| `className`    | `Scss Class` \| `String` | Un String que determina la clase que se usa para dar los estilos visuales del `<input/>` |

## Form

El componente `Form` usa varios sub componentes que permiten el uso correcto del formulario y la información que se deberia enviar en los cuales estan:

* FormName
* FormEmail
* FormCompany
* FormPosition
* PhoneInputWithSelect
* FormSelectServices
* FormFile
* FormTextArea
* FormCheckBox
* FormNotifications
* ReCaptcha
* FormContactSend

### FormName

El componente FormName renderiza un `<input/>` tipo text que guardaria el nombre del aspirante
* [FormName](https://itglober-doc.vercel.app/page-form#formname 'FormName')

### FormEmail

El componente FormEmail renderiza un `<input/>` tipo text que guardaria el Correo del aspirante
* [FormEmail](https://itglober-doc.vercel.app/page-form#formemail 'FormEmail')

### FormCompany

El componente FormCompany renderiza un `<FormattedMessage/>` con un `<input/>` tipo text que guardaria el nombre de la empresa interesada en los servicios de la compañia sus propiedades son:

| Propiedad | Tipo                     | Descripción                                                                                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`    | `String` | Un identificador único que se utiliza para el cambio de idioma y la traducción del placeholder. |
| `type`    | `text` | Define el tipo de input que se utiliza |
| `className`    | Scss Class \| String | Un String que determina la clase que se usa para dar los estilos visuales del `<input/>` |
| `placeholder` | `String`| Toma el valor de un string para el espacio reservado.
| `value` | `String` | El valor inicial de control.
| `onChange` | `React.ChangeEventHandler<HTMLInputElement>` | undefined| Es la función que permite el cambio del `<input/>`.
| `name`| `String` | El nombre del `<input/>`.
| `required`| `Boolean `| Es un valor `Boolean` que es requerido o chequeado para que el formulario se pueda enviar.
#### Ejemplo de como se usa en la aplicacion

        <FormattedMessage id='contact-company'>
        {message => (
          <input
            type='text'
            className='contact-input'
            placeholder={message && message.toString()}
            value={form.company}
            onChange={handleChange}
            name='company'
            required
          />
        )}
      </FormattedMessage>
      

### FormPosition

El componente FormPosition renderiza un `<FormattedMessage/>` con un `<input/>` tipo text que guardaria el Cargo del usuario interesado en los servicios de la compañia sus propiedades son:

| Propiedad | Tipo                     | Descripción                                                                                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`    | `String` | Un identificador único que se utiliza para el cambio de idioma y la traducción del placeholder. |
| `type`    | `text` | Define el tipo de input que se utiliza |
| `className`    | Scss Class \| String | Un String que determina la clase que se usa para dar los estilos visuales del `<input/>` |
| `placeholder` | `String`| Toma el valor de un string para el espacio reservado.
| `value` | `String` | El valor inicial de control.
| `onChange` | `React.ChangeEventHandler<HTMLInputElement>` | undefined| Es la función que permite el cambio del `<input/>`.
| `name`| `String` | El nombre del `<input/>`.

#### Ejemplo de como se usa en la aplicacion
    <FormattedMessage id='contact-position'>
        {message => (
          <input
            type='text'
            className='contact-input'
            placeholder={message && message.toString()}
            value={form.role}
            onChange={handleChange}
            name='role'
          />
        )}
      </FormattedMessage>

### PhoneInputWithSelect

El componente PhoneInputWithSelect renderiza un `<input/>` tipo text que guarda valores numericos para agregar el telefono de los usuarios

* [PhoneInput](https://itglober-doc.vercel.app/page-form#phoneinputwithselect 'PhoneInputWithSelect')

### FormSelectServices

El componente FormSelectServices utiliza un formato `<select/>` `<option/>` envolviendo cada `<option/>` dentro de un `<FormattedMessage/>`

#### Propiedades del Select

 | Propiedad | Tipo                     | Descripción                                                                                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`    | `String` | Nombre del select |
| `onChange` | `(event: React.ChangeEvent<HTMLInputElement>) => void;`                | Una Funcion que detecta el cambio de estado y evento para actualizar el valor          |
| `className`    | `Scss Class` \| `String` | Un String que determina la clase que se usa para dar los estilos visuales del `<input/>` |

#### Propiedades de los option

 | Propiedad | Tipo                     | Descripción                                                                                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`    | `String` | Un identificador único que se utiliza para el cambio de idioma y la traducción del texto. |
| `hidden` | `boolean` \| `undefined`   | Permite ocultar el valor           |
| `selected` | `boolean` \| `undefined`  | Determina que el valor este seleccionado inicialmente        |
| `value`    | `String` | Un String que determina el texto que se muestra en las opciones |

#### Ejemplo de como se usa en la aplicacion
        ...
        <FormattedMessage id='contact-service'>
            {message => (
              <option hidden selected>
                {message}
              </option>
            )}
        </FormattedMessage>
        <FormattedMessage id='slider-title-create'>
            {message => (
              <option value={message && message.toString()}>{message}</option>
            )}
        </FormattedMessage>
        ...
### FormFile
El componente FormFile es un `<input/>` tipo file que permite cargar un archivo y renderizar el tipo de archivo, el nombre y el tamaño del archivo
* [FormFile](https://itglober-doc.vercel.app/page-form#formfile 'FormFile')

### FormTextArea

El componente FormTextArea permite generar un `<input/>` tipo textarea para la información adicional que desea dejar el usuario
* [FormTextArea](https://itglober-doc.vercel.app/page-form#formtextarea 'FormTextArea')

### FormCheckbox

Este componente nos permite generar un `<input/>` tipo checkBox para que el usuario determine si se aceptaron o no politicas de tratatmiento de datos
* [FormCheckBox](https://itglober-doc.vercel.app/page-form#formcheckbox 'FormCheckBox')

### FormNotifications

Este componente nos permite generar un `<input/>` tipo checkBox para que el usuario determine si el cliente desea recibir notificaciones de ITGlobers estas son sus propiedades:


| Propiedad | Tipo                     | Descripción                                                                                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`    | `String` | Un identificador único que se utiliza para el cambio de idioma y la traducción del Texto. Uso para `<FormattedMessage/>`|
| `id`    | `String` | Un identificador único que se utiliza para conectar un `<label/>` que incluye el texto al cual esta unido el checkbox|
| `type`    | `checkbox` | Define el tipo de input que se utiliza |
| `className`    | `Scss Class` \| `String` | Un String que determina la clase que se usa para dar los estilos visuales del `<input/>` |
| `Checked` | `Boolean` \| `undefined`| Indica si se checkeo la información
| `onChange` | `React.ChangeEventHandler<HTMLInputElement>` | undefined| Es la función que permite el cambio del `<input/>`.
| `name`| `String` | El nombre del `<input/>`.

#### Ejemplo de como se usa en la aplicacion
        <label htmlFor='notifications' className='checkbox-label'>
          <input
            type='checkbox'
            id='notifications'
            name='notifications'
            checked={notifications}
            onChange={handleCheckboxChangeNotifications}
          />
          <span className='checkbox-custom'></span>
          <FormattedMessage id='check-box-notifications'>
            {message => <span className='checkbox-text'> {message} </span>}
          </FormattedMessage>
        </label>

### ReCaptcha

Este componente genera un captcha que cerciora el hecho de que el usuario es un humano
* [ReCaptcha](https://itglober-doc.vercel.app/page-form#recaptcha 'Recaptcha')

### FormContactSend

Este componente de `<input/>` de tipo `submit` se utiliza para enviar la información del formulario sus propiedades son:

| Propiedad | Tipo                     | Descripción                                                                                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`    | `String` | Un identificador único que se utiliza para el cambio de idioma y la traducción del Texto. Uso para `<FormattedMessage/>`|
| `type`    | `submit` | Define el tipo de input que se utiliza |
| `className`    | `Scss Class` \| `String` | Un String que determina la clase que se usa para dar los estilos visuales del `<input/>` |
| `disabled` | `Boolean` \| `undefined`| Oculta el manejo del `<input/>` hasta que se haya completado la condición |
| `value` | `String` | El valor inicial de control.
| `name`| `String` | El nombre del `<input/>`.

#### Ejemplo de como se usa en la aplicacion
    <FormattedMessage id='contact-send'>
        {message => (
          <input
            className='contact-send'
            name='submit'
            type='submit'
            value={message && message.toString()}
            disabled={!value || !dataOfPolicy || form.services === ''}
          />
        )}
    </FormattedMessage>