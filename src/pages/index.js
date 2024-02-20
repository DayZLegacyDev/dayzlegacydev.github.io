import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import LauncherDownloadLink from '@site/src/components/LauncherDownloadLink';

function HomepageHeader() {
  let textToType = `diag_log format ["%1", site-config-tagline]`;
  let colorizedText = `<span class="hero-constant-color">diag_log</span> <span class="hero-constant-color">format</span><span class="hero-bracket-color">[</span><span class="hero-string-color">"%1", </span><span class = "hero-identifier-color">site-config-tagline</span><span class="hero-bracket-color">]</span><span class = "hero-constant-color">;</span>`;
  const [textFinishedTyping, setTextFinishedTyping] = useState(false);
  const [currText, setCurrText] = useState("");
  let interval;

  const initalState = 0;
  const [count, setCount] = useState(initalState);
  const counterRef = useRef(initalState);

  useEffect(() => {
    counterRef.current = count;
    if (count >= textToType.length) {
      clearInterval(interval);
      setCurrText(colorizedText);
      setTextFinishedTyping(true);
    }
  })

  useEffect(() => {
    interval = setInterval(() => {
      setCount(counterRef.current + 1);
      setCurrText(textToType.substring(0, counterRef.current));
    }, 75);
  }, []);

  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <div className="row center">
          <div className="col col--8 left-align">
            <div className="row">
              <div className="col col--12">
                <img className="img-logo" src="/img/text-logo.webp"></img>
              </div>
            </div>
            <div className="row">
              <div className="col col--12">
                <h2 className="hero-subtitle">
                  <span>
                    <span id="tagline-prompt"><span className="hero-prompt-prefix">sqf&gt; </span><span dangerouslySetInnerHTML={{ __html: currText }}></span></span>
                    <span className="typed-cursor typed-cursor--blink">|</span>
                  </span>
                  {textFinishedTyping && <div className="hero-tagline"><span>=&gt; {siteConfig.tagline}</span></div>}
                </h2>
              </div>
            </div>
          </div>
          { <div className="col col--4">
            <LauncherDownloadLink />
            <a href={"/docs/usage/installation"}>Issues installing?</a>
          </div> }
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="The DayZ Legacy Project">
      <HomepageHeader />
      <main className="sl-theme-dark">
        <section className="home-section">
          <div className="container">
            <div className="row center">
              <div className="col col--4">
                <h2 className="monospaced">About the Project</h2>
                <p>DayZ Legacy is a modded version of alpha DayZ Standalone that aims to add new content while retaining the classic look and feel.</p>
                <p>The project started in 2021 and is a collaborative project between a few people.</p>
                <p>DayZ Legacy requires you to own the game on Steam to play.</p>
                <p>At a high level, our strategy is as follows:</p>
                <ul>
                  <li>re-create a variety of features from the current version of DayZ</li>
                  <li>fix several critical issues and vulnerabilities through our custom anti-cheat</li>
                  <li>remove bloat and optimize client and server performance</li>
                  <li>retain legacy (pre-alpha) engine functionality and visuals</li>
                </ul>
              </div>
              <div className="col col--8">
                <img src="/img/game-screen.webp" className="screen"></img>
              </div>
            </div>
          </div>
        </section>
        <section className="home-section alternate-bg-color">
          <div className="container">
            <div className="row center">
              <div className="col col--6">
                <h2 className="monospaced">Stay in Touch</h2>
                <p>DayZ Legacy is constantly growing and evolving. Check out our progress page for more info.</p>
                <a href="">Coming soon</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
