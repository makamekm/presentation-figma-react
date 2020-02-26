import React from 'react';

import { observer } from 'mobx-react';
import { Frame1 } from '../design-system/frame1';
import { Frame2 } from '../design-system/frame2';

const frames = [Frame1, Frame2];

const IndexPage = () => {
  const [frame, setFrame] = React.useState(0);
  const nextFrame = React.useCallback(() => {
    setFrame(frame + 1);
  }, [frame, setFrame]);
  const prevFrame = React.useCallback(() => {
    setFrame(frame - 1);
  }, [frame, setFrame]);
  const onKeyDown = React.useCallback(
    (e = window.event) => {
      if (e.keyCode === 38) {
        nextFrame();
      } else if (e.keyCode === 40) {
        prevFrame();
      } else if (e.keyCode === 37) {
        prevFrame();
      } else if (e.keyCode === 39) {
        nextFrame();
      }
    },
    [nextFrame, prevFrame]
  );
  React.useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
  return (
    <>
      <div className="frame">{frames[frame] && React.createElement(frames[frame])}</div>
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
