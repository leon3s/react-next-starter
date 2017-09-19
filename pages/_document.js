import React from 'react';
import { AppRegistry } from 'react-native';
import Document, {
  Head,
  Main,
  NextScript,
} from 'next/document';

import pkg from '_package.json';

import scss from '_styles/index.scss';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent('App', () => 'App');
    const app = AppRegistry.getApplication('App');
    const styles = app.stylesheets.map(({ props }, i) => (
      <style
        key={i}
        dangerouslySetInnerHTML={{
          __html: props.dangerouslySetInnerHTML.__html,
        }}
      />
    ));
    styles.push(
      <style dangerouslySetInnerHTML={{ __html: scss }} />,
    );
    const page = renderPage();
    return { ...page, styles };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title key="title">{ pkg.name.replace('-', ' ').toUpperCase() }</title>
          <link rel="icon" href="static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
