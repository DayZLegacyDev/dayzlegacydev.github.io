import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import LatestBlogs from '@site/src/components/LatestBlogs';
import LauncherDownloadLink from '@site/src/components/LauncherDownloadLink';

const FeatureList = [
  {
    title: 'Performance overhauls',
    Svg: require('@site/static/img/undraw_performance_overview_re_mqrq.svg').default,
    description: (
      <>
          Improving both client and server performance is a primary goal so that we can support more complex content such as base building, AI missions, and other new gameplay interactions. 
      </>
    ),
  },
  {
    title: 'Combining legacy and innovation' ,
    Svg: require('@site/static/img/undraw_goals_re_lu76.svg').default,
    description: (
      <>
        The best of both worlds between new and old DayZ. Better land, sea, and aerial vehicles. Expanded horticulture. Traders and safezones. New and custom weapons. Persistent loot economy.
      </>
    ),
  },
  {
    title: 'Journey to the past',
    Svg: require('@site/static/img/undraw_adventure_re_ncqp.svg').default,
    description: (
      <>
        Never had a chance to play old-school DayZ or want to relive the moment? That's exactly what our project enables players to do. 
      </>
    ),
  },
  {
    title: 'Modern comforts and enhancements',
    Svg: require('@site/static/img/undraw_design_components_9vy6.svg').default,
    description: (
      <>
        DayZ Legacy is built with the intention of delivering critical quality of life fixes and features to resolve some of the issues that exist in this older game version.
      </>
    ),
  },
  {
    title: 'Keeping it fair' ,
    Svg: require('@site/static/img/undraw_true_love_cy8x.svg').default,
    description: (
      <>
        Preserving game integrity is a massive priority. We will never accept donations of any kind or provide monetized content. Custom anti-cheat protections are enabled and you must own the game on Steam to play.
      </>
    ),
  },
  {
    title: 'New coat of paint' ,
    Svg: require('@site/static/img/undraw_art_museum_-8-or4.svg').default,
    description: (
      <>
        Explore locations old and new on our upgraded Chernarus map. Improved visual fidelity while maintaining the classic DayZ look and feel. Enhanced immersion and realism.
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
