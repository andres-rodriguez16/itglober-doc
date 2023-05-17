# Work With Us

Este es aparatado de la pagina de Trabaja con nosotros de ITGlobers la cual contiene estos componentes:

* [Traduccion](https://itglober-doc.vercel.app/page-languaje 'Traduccion')
* FormImage
* Form

## Traduccion
El componente `Translate` es un componente con contexto global que permite traducir de ingles a español los textos de la pagina en general incluyendo footer, header e imagenes
* [Traduccion](https://itglober-doc.vercel.app/page-languaje 'Traduccion')

## FormImage

El componente for image es un banner compuesto por tres imagenes la primera es una sombra, la segunda es la imagen banner, y la tercera es una imagen texto sus propiedades son las siguentes:

| Propiedad | Tipo                     | Descripción                                                                                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`    | `String` | La ruta de la imagen sea absoluta o relativa |
| `alt`    | `String` | Texto usado para manejo de metadata |
| `className`    | `Scss Class` \| `String` | Un String que determina la clase que se usa para dar los estilos visuales del `<input/>` |

#### Ejemplo de como se usa en la aplicacion
    <div className='work-ImgCont'>
        <img
          src={isMobile ? shadowMobile : shadow}
          alt='shadowImg'
          className='work-ShadowImg'
        />
        <img
          src={isMobile ? imgMobile : img}
          alt='workImg'
          className='work-FullImg'
        />
        {language === 'es' ? (
          <img src={texto} alt='workText' className='work-TextImg' />
        ) : (
          <img src={TextoEnglish} alt='workText' className='work-TextImg' />
        )}
    </div>

## Form

El componente `Form` usa varios sub componentes que permiten el uso correcto del formulario y la información que se deberia enviar en los cuales estan:
* FormName
* FormEmail
* PhoneInputWithSelect
* FormFile
* FormTextArea
* FormCheckBox
* ReCaptcha
* FormWorkWithUsSend

### FormName

El componente FormName renderiza un `<input/>` tipo text que guardaria el nombre del aspirante
* [FormName](https://itglober-doc.vercel.app/page-form#formname 'FormName')

### FormEmail

El componente FormEmail renderiza un `<input/>` tipo text que guardaria el Correo del aspirante
* [FormEmail](https://itglober-doc.vercel.app/page-form#formemail 'FormEmail')

### PhoneInputWithSelect

El componente PhoneInputWithSelect renderiza un `<input/>` tipo text que guarda valores numericos para agregar el telefono de los usuarios

* [PhoneInput](https://itglober-doc.vercel.app/page-form#phoneinputwithselect 'PhoneInputWithSelect')

### FormFile
El componente FormFile es un `<input/>` tipo file que permite cargar un archivo y renderizar el tipo de archivo, el nombre y el tamaño del archivo
* [FormFile](https://itglober-doc.vercel.app/page-form#formfile 'FormFile')

### FormTextArea

El componente FormTextArea permite generar un `<input/>` tipo textarea para la información adicional que desea dejar el usuario
* [FormTextArea](https://itglober-doc.vercel.app/page-form#formtextarea 'FormTextArea')

### FormCheckbox

Este componente nos permite generar un `<input/>` tipo checkBox para que el usuario determine si se aceptaron o no politicas de tratatmiento de datos
* [FormCheckBox](https://itglober-doc.vercel.app/page-form#formcheckbox 'FormCheckBox')
### ReCaptcha

Este componente genera un captcha que cerciora el hecho de que el usuario es un humano
* [ReCaptcha](https://itglober-doc.vercel.app/page-form#recaptcha 'Recaptcha')

### FormWorkWithUsSend

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
        <FormattedMessage id={orientation}>
          {message => (
            <input
              className='contact-send'
              name='submit'
              type='submit'
              value={message && message.toString()}
              disabled={!value || !dataOfPolicy}
            />
          )}
        </FormattedMessage>