import React, { useState, } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const github     = "https://github.com/BarakBinyamin/fwd"
const base       = "rockz.one"
const domain     = "fwd" + base
const URL        = "https://" + domain

function Terminal({port}) {
  return (
    <pre className="terminal">
      <div className="terminalHeader">terminal</div>
      <div className="terminalBody">
        <code>
          <p>$ <span className="textSelect command">ssh -R 443:localhost:{port} rockz.one</span></p>
          <br />
          <p>Your service is avalable at https://randomstring.{base}</p>
        </code>
      </div>
    </pre>
  )
}

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage + ' feature'} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const [port, setPort] = useState(8000);
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Connect web applications running on your computer to the internet instantly">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title} <span class="rainbowtext">BETA</span></h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p>forward your web app running on port <input style={{width: "5em"}} type="number" id="port" name="port" min="1" max="65535" value={port} onChange={(event) => setPort(event.target.value)} /> now with</p>
          <Terminal port={port}/>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {/* {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )} */}
        
      </main>
    </Layout>
  );
}

export default Home;
