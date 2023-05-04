import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import LatestBlogs from '@site/src/components/LatestBlogs';
import LauncherDownloadLink from '@site/src/components/LauncherDownloadLink';

const FeatureList = [
  {
    title: 'Performance Optimizations',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Improving both client and server performance through the use of improved rendering and processing techniques is a primary goal for us.
      </>
    ),
  },
  {
    title: 'New Content and Features' ,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A major goal of this project is to have a "best-of-both-worlds" between new and old DayZ. Better land, sea, and aerial vehicles. Expanded horticulture. Traders and safezones. New and custom weapons. Persistent loot economy.
      </>
    ),
  },
  {
    title: "Relive DayZ's Golden Era",
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Never had a chance to play old-school DayZ or want to relive the moment? That's exactly what our project enables players to do.
      </>
    ),
  },
  {
    title: 'Quality of Life Fixes',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        DayZ Legacy is built with the intention of delivering critical quality of life fixes to resolve some of the most pressing issues in these older game versions.
      </>
    ),
  },
  {
    title: 'Custom Anti-Cheat' ,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Our Helix anti-cheat proactively monitors our servers for modified or malicious activity.
      </>
    ),
  },
  {
    title: 'Visual Overhauls' ,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Some of our currently implemented visual changes include a DirectX 11 and Vulkan build (DX12 TBA!), water caustics and refractions, FXAA edge smoothing, and improved Alpha to Coverage/Render to Texture properties. We have plans to integrate new visual effects like HDAO+, and re-integrate old ones like SSAO and volumetric clouds.
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
