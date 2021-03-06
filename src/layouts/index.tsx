import React from 'react';
import Helmet from 'react-helmet';
import { provider } from 'react-ioc';

import { observer } from 'mobx-react';
import { Loading } from '../components/loading';
import { useRootHook } from '../libs/root';
import { services } from '../libs/root.services.dict';

const IndexLayout: React.FC = ({ children, ...props }) => {
  const loading = useRootHook(props);

  return (
    <>
      <Helmet
        title="App Name"
        meta={[
          { name: 'description', content: 'Desctiption' },
          { name: 'keywords', content: 'keyword' }
        ]}
      >
        <link href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700&display=swap" rel="stylesheet" />
      </Helmet>
      {children}
      <Loading active={loading} />
      <style global jsx>{`
        body {
          padding: 0;
          margin: 0;
          font-family: 'Pathway Gothic One', 'Roboto', 'Open Sans', -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
          background-color: #292a2b;
          color: #ffffff;
          max-width: 100vw;
          min-width: 100vw;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default provider(...services)(observer(IndexLayout));
