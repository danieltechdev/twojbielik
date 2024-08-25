import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Polski Model Językowy',
    Svg: require('@site/static/img/polska.svg').default,
    description: (
      <>
        Zrozumie zarówno Ciebie jak i Mickiewicza.
      </>
    ),
  },
  {
    title: 'Lokalnie na Twoim urządzeniu',
    Svg: require('@site/static/img/bielikLaptop.svg').default,
    description: (
      <>
        Działaj i czatuj bezpiecznie na swoim urządzeniu.
      </>
    ),
  },
  {
    title: 'Darmowy',
    Svg: require('@site/static/img/orzel.svg').default,
    description: (
      <>
        Model stworzony przez entuzjastów dla polskiego użytkownika.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
