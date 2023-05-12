import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de Usar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        La página web de ITGlobers fue diseñada desde cero para ser fácilmente instalada y utilizada, para que puedas contactarnos y saber más sobre nosotros de manera sencilla.
      </>
    ),
  },
  {
    title: 'Enfocarse en lo que Importa',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        ITGlobers te permite centrarte en las facilidades para hacer un sitio web dinámico, mientras nosotros promocionamos servicios y empleo. Utilizamos la potente biblioteca de <code>Swiper</code> para nuestros sliders, con una gran facilidad de uso..
      </>
    ),
  },
  {
    title: 'Impulsado por React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Esta página utiliza TypeScript y React, incluso Scss. ITGlobers puede ser ampliado mientras se reutiliza el mismo encabezado y pie de página, incluso el componente de traducción con su contexto.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
