import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import LauncherDownloadLink from '@site/src/components/LauncherDownloadLink';

const FeatureList = [
  {
    title: 'Performance overhauls',
    Svg: require('@site/static/img/undraw_performance_overview_re_mqrq.svg').default,
    description: (
      <>
          Overhauling performance of both the client and server is a primary goal for us
      </>
    ),
  },
  {
    title: 'Combining legacy and innovation' ,
    Svg: require('@site/static/img/undraw_goals_re_lu76.svg').default,
    description: (
      <>
        The best of both worlds between new and old DayZ
      </>
    ),
  },
  {
    title: 'Journey to the past',
    Svg: require('@site/static/img/undraw_adventure_re_ncqp.svg').default,
    description: (
      <>
        Never had a chance to play old-school DayZ or want to relive the moment? That's exactly what our project enables players to do
      </>
    ),
  },
  {
    title: 'Modern comforts and enhancements',
    Svg: require('@site/static/img/undraw_design_components_9vy6.svg').default,
    description: (
      <>
        Critical quality-of-life features and fixes which improve the look and feel
      </>
    ),
  },
  {
    title: 'Keeping it fair' ,
    Svg: require('@site/static/img/undraw_true_love_cy8x.svg').default,
    description: (
      <>
        We will never accept donations of any kind or provide monetized content. Custom anti-cheat protections are enabled and you must own the game on Steam to play
      </>
    ),
  },
  {
    title: 'New coat of paint' ,
    Svg: require('@site/static/img/undraw_art_museum_-8-or4.svg').default,
    description: (
      <>
        Explore locations old and new on our upgraded Chernarus map. Improved visual fidelity while maintaining the classic DayZ look and feel
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
