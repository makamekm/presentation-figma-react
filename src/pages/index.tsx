import React from 'react';

import { observer } from 'mobx-react';
import { Frame1 } from '../design-system/frame1';

const IndexPage = () => {
  return (
    <>
      <div className="frame">
        <Frame1 />
      </div>

      <style jsx>{`
        .frame {
          height: 100vh;
          width: 100vw;
        }
      `}</style>
    </>
  );
};

export default observer(IndexPage);
