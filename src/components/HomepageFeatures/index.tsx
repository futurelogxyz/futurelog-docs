import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Thinking',
    Svg: require('@site/static/img/thinking.svg').default,
    description: (
      <>
        Think Big.
        Think Different.
        Think Smart.
      </>
    ),
  },
  {
    title: 'Action',
    Svg: require('@site/static/img/action.svg').default,
    description: (
      <>
        I hear and I forget.
        I see and I remember. <br />
        I do and I understand.
      </>
    ),
  },
  {
    title: 'Iteration',
    Svg: require('@site/static/img/iteration.svg').default,
    description: (
      <>
        Focus. <br />
        Leave things better than you found them.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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
