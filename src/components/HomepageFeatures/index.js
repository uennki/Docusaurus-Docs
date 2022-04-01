import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '查阅方便',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        根据文档树，可以很方便的查阅技术内容，检阅前端核心知识，用于工作或者求职中
      </>
    ),
  },
  {
    title: '集中技术重点',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        集中前端开发过程中常用的技术栈，将核心内容重点技术归纳总结
      </>
    ),
  },
  {
    title: '源于网络',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        文档技术内容来自网络，经整理和归纳后进行补充说明，便于复习使用
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
