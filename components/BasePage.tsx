import Head from 'next/head';
import React from 'react';

const BasePage: React.FunctionComponent = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather|Montserrat&display=swap"
        rel="stylesheet"
      ></link>

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-166084913-1"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-166084913-1');`,
        }}
      ></script>
    </Head>
    <div
      style={{
        top: 0,
        width: '100%',
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#4fc2b4',
        color: 'white',
        padding: '30px',
        fontSize: '12pt',
      }}
    >
      {false && (
        <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
          Home
        </a>
      )}
      <div style={{ flex: 1 }}></div>
    </div>
    <div style={{ maxWidth: '100%', minHeight: `calc(100vh - 200px)` }}>
      {children}
    </div>
    <div
      style={{
        bottom: 0,
        height: '100px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4fc2b4',
        padding: '50px',
      }}
    >
      <p style={{ color: 'white' }}>© Colin McDonnell 2020</p>
    </div>
    <style jsx global>{`
      html,
      body,
      #__next {
        min-height: 100%;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      code {
        background-color: #00000010;
        padding: 3px 3px;
        border-radius: 2px;
      }

      pre {
        margin: 20px 0px !important;
      }

      body {
        font-family: 'Montserrat';
        color: #333;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: 'Merriweather';
      }
    `}</style>
  </div>
);

export default BasePage;
