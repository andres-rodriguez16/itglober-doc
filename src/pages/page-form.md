# Componente Form


El Componente Form muestra un formulario de interaccion entre el cliente o nuevo empleador y la empresa, contiene por base varios inputs y un ReCaptcha

## Formulario

Este formulario se subdivide en diferentes moleculas las cuales son:
* FormName
* FormEmail
* PhoneInputWithSelect
* FormFile
* FormTextArea
* FormCheckBox
* ReCaptcha

## FormName

El componente FormName renderiza un `<input/>` tipo text que guardaria el nombre del aspirante sus propiedades son:
### Propiedades en Form

 | Propiedad | Tipo                     | Descripción                                                                                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `formValue`    | `String` | Un String que guardaria el valor ingresado por el Usario |
| `handleChange` | `Function (event: type ANY) => void`                | Una Funcion que detecta el cambio de estado y evento para actualizar el valor          |

## Propiedades de FormName

- `type`: Es la forma que toma el `<input/>` en este caso es `text`.
- `className`: Es el Id clase que se usa para el scss y sus respectivos estilos.
- `placeholder`: Toma el valor de un string para el espacio reservado.
- `value` : El valor inicial de control.
- `onChange` : Es la función que permite el cambio del `<input/>`.
- `name`: El nombre del `<input/>`.
- `pattern`: Patron del `value` que debe coincidir para ser válido.
- `required`: Es un valor `Boolean` que es requerido o chequeado para que el formulario se pueda enviar.


## FormEmail

El componente FormEmail renderiza un `<input/>` tipo text que guardaria el Correo del aspirante sus propiedades son:
### Propiedades en Form

 | Propiedad | Tipo                     | Descripción                                                                                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `formValue`    | `String` | Un String que guardaria el valor ingresado por el Usario |
| `handleChange` | `Function (event: type ANY) => void`                | Una Funcion que detecta el cambio de estado y evento para actualizar el valor          |
## Propiedades de FormEmail

- `type`: Es la forma que toma el `<input/>` en este caso es `text`.
- `className`: Es el Id clase que se usa para el scss y sus respectivos estilos.
- `placeholder`: Toma el valor de un string para el espacio reservado.
- `value` : El valor inicial de control.
- `onChange` : Es la función que permite el cambio del `<input/>`.
- `name`: El nombre del `<input/>`.
- `pattern`: Patron del `value` que debe coincidir para ser válido.
- `required`: Es un valor `Boolean` que es requerido o chequeado para que el formulario se pueda enviar.

## PhoneInputWithSelect

El componente PhoneInputWithSelect renderiza un `<input/>` tipo text que guarda valores numericos para agregar el telefono de los usuarios, para ello, usamos la libreria [react-phone-number-input](https://www.npmjs.com/package/react-phone-number-input 'react-phone-number-input') de la cual tomamos el componente nativo de la misma PhoneInput, y usamos las validaciones que proporciona la libreria, las cuales son `isValidPhoneNumber` y `getCountryCallingCode`

### Propiedades en Form

| Propiedad | Tipo                     | Descripción                                                                                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`    | `String` | Un String que guardaria el valor ingresado por el Usario |
| `setValue` | `React.Dispatch<React.SetStateAction<string>>`                | Una propiedad que permite el cambio del valor al estado que se le este asignando actualmente          |

## Propiedades de PhoneInput

- `className` : Clase de scss que permite ajustar los estilos visuales.
- `placeholder` : Toma el valor de un string para el espacio reservado.
- `value` : El valor inicial de control.
- `onChange` : Es la función que permite el cambio del `<input/>`.
- `defaultCountry`: Un valor que carga por defecto el `dialCode` del pais y su respectiva bandera para mas info en [react-phone-number-input](https://www.npmjs.com/package/react-phone-number-input 'react-phone-number-input')
- `limitMaxLenth`: Determina la cantidad de caracteres que se pueden escribir en el `<input/>` para mas info en [react-phone-number-input](https://www.npmjs.com/package/react-phone-number-input 'react-phone-number-input')
- `onCountryChange`: Metodo que permite el cambio de pais para mas info en [react-phone-number-input](https://www.npmjs.com/package/react-phone-number-input 'react-phone-number-input')
- `focusInputOnCountrySelection`: evita un cambio de contexto automático cuando el usuario selecciona un país


## FormFile

El componente FormFile es un `<input/>` tipo file que permite cargar un archivo y renderizar el tipo de archivo, el nombre y el tamaño del archivo sus propiedades son:

### Propiedades en Form

| Propiedad | Tipo                     | Descripción                                                                                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file`    | `String \| File` | Un String que guardaria el valor ingresado por el Usario |
| `onChange` | `Function (event: type ANY) => void`                | Una Funcion que detecta el cambio de estado y evento para actualizar el valor          |
| `fileName`    | `String \| File` | Un String que renderiza el valor ingresado por el Usario |
| `fileSizeInKB`    | `Number` | Es donde deberia ir la cantidad de bits del tamaño del archivo en este caso KB |
| `ref`    | `HTMLInputElement` | Esta propiedad se usa para localizar de donde se estan tomando los datos |
| `id`    | `String` | Un identificador único que se utiliza para el cambio de idioma y la traducción del placeholder. |

Nota : Asegúrate de que el texto proporcionado en la propiedad **id** sea un identificador único que servirá para el cambio de idioma. Puedes agregar las traducciones correspondientes en los archivos de mensajes para cada idioma, como se muestra a continuación:

Para inglés, agrega las traducciones en el archivo ../Messages/en/template/review-paragraph.ts

Para español, agrega las traducciones en el archivo ../Messages/es/template/review-paragraph.ts

Mantener identificadores únicos para los textos en estas propiedades te permitirá implementar el cambio de idioma de manera eficiente y consistente en tu aplicación. Asegúrate de definir las traducciones correspondientes en los archivos de mensajes para cada idioma que desees admitir en tu aplicación.

## FormTextArea

El componente FormTextArea permite generar un `<input/>` tipo textarea para la información adicional que desea dejar el usuario estas son sus propiedades:

## Propiedades en Form

| Propiedad | Tipo                     | Descripción                                                                                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `formValue`    | `String` | Un String que guardaria el valor ingresado por el Usario |
| `handleChange` | `Function (event: type ANY) => void`                | Una propiedad que permite el cambio del valor al estado que se le este asignando actualmente          |
| `className`    | `Scss Class \| String` | Un String que determina la clase que se usa para dar los estilos visuales del `<input/>` |
| `id`    | `String` | Un identificador único que se utiliza para el cambio de idioma y la traducción del placeholder. |

Nota : Asegúrate de que el texto proporcionado en la propiedad **id** sea un identificador único que servirá para el cambio de idioma. Puedes agregar las traducciones correspondientes en los archivos de mensajes para cada idioma, como se muestra a continuación:

Para inglés, agrega las traducciones en el archivo ../Messages/en/template/review-paragraph.ts

Para español, agrega las traducciones en el archivo ../Messages/es/template/review-paragraph.ts

Mantener identificadores únicos para los textos en estas propiedades te permitirá implementar el cambio de idioma de manera eficiente y consistente en tu aplicación. Asegúrate de definir las traducciones correspondientes en los archivos de mensajes para cada idioma que desees admitir en tu aplicación.

## Propiedades de FormTextArea

- `className` : Clase de scss que permite ajustar los estilos visuales.
- `name`: Nombre del textArea
- `row`: cantidad de filas
- `cols`: cantidad de columnas
- `placeholder` : Toma el valor de un string para el espacio reservado.
- `value` : El valor inicial de control.
- `onChange` : Es la función que permite el cambio del `<input/>`.

## FormCheckBox

Este componente nos permite generar un `<input/>` tipo checkBox para que el usuario determine si se aceptaron o no politicas de tratatmiento de datos estas serian sus propiedades:

## Propiedades en Form

| Propiedad | Tipo                     | Descripción                                                                                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checked`    | `Boolean` | Determina el cambio de estado si se ha seleccionado o no |
| `onChange` | `(event: React.ChangeEvent<HTMLInputElement>) => void;`                | Una Funcion que detecta el cambio de estado y evento para actualizar el valor          |

## Propiedades de FormCheckBox

- `className` : Clase de scss que permite ajustar los estilos visuales.
- `onChange` : Es la función que permite el cambio del `<input/>`.
- `name`: Nombre del checkBox.
- `type`: Es la forma que toma el `<input/>` en este caso es `checkbox`.
- `required`: Es un valor `Boolean` que es requerido o chequeado para que el formulario se pueda enviar.
- `checked`: Si el el `<input/>` fue chequeado.
- `id`: Un identificador único que se utiliza para el cambio de idioma y la traducción del placeholder o el texto usado en `<FormattedMessage/>`. 

Nota : Asegúrate de que el texto proporcionado en la propiedad **id** sea un identificador único que servirá para el cambio de idioma. Puedes agregar las traducciones correspondientes en los archivos de mensajes para cada idioma, como se muestra a continuación:

Para inglés, agrega las traducciones en el archivo ../Messages/en/template/review-paragraph.ts

Para español, agrega las traducciones en el archivo ../Messages/es/template/review-paragraph.ts

Mantener identificadores únicos para los textos en estas propiedades te permitirá implementar el cambio de idioma de manera eficiente y consistente en tu aplicación. Asegúrate de definir las traducciones correspondientes en los archivos de mensajes para cada idioma que desees admitir en tu aplicación.

## ReCaptcha

Este componente genera un captcha que cerciora el hecho de que el usuario es un humano, usa la libreria [react-google-recaptcha](https://www.npmjs.com/package/react-google-recaptcha "captcha") en su version 2 que es la gratuita

## Propiedades en Form

| Propiedad | Tipo                     | Descripción                                                                                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `siteKey`    | `String` | Es un codigo único proporcionado por la API de google |
| `onChange` | `((token: string \| null) => void) \| undefined`                | Una Funcion que detecta el cambio de estado y evento para actualizar el valor          |