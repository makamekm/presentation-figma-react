import React from 'react';
import { observer } from 'mobx-react';
import { Frame0 } from '../design-system/frame0';
import { Frame1 } from '../design-system/frame1';
import { Frame2 } from '../design-system/frame2';
import { Frame3 } from '../design-system/frame3';
import { Frame4 } from '../design-system/frame4';
import { Frame5 } from '../design-system/frame5';
import { Frame6 } from '../design-system/frame6';
import { Frame7 } from '../design-system/frame7';
import { Frame8 } from '../design-system/frame8';
import { Frame9 } from '../design-system/frame9';
import { Frame10 } from '../design-system/frame10';
import { Frame11 } from '../design-system/frame11';
import { Frame12 } from '../design-system/frame12';
import { Frame13 } from '../design-system/frame13';

const frames = [Frame0, Frame1, Frame2, Frame3, Frame4, Frame5, Frame6, Frame7, Frame8, Frame9, Frame10, Frame11, Frame12, Frame13];

const IndexPage = () => {
  const [frame, setFrame] = React.useState(0);
  const nextFrame = React.useCallback(() => {
    if (frame + 1 < frames.length) {
      setFrame(frame + 1);
    }
  }, [frame, setFrame]);
  const prevFrame = React.useCallback(() => {
    if (frame - 1 >= 0) {
      setFrame(frame - 1);
    }
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
      <div key={frame} className="frame">
        {frames[frame] && React.createElement(frames[frame])}
      </div>
      <div className="status">
        {frame + 1} / {frames.length}
      </div>
      <style jsx>{`
        .frame {
          height: 100vh;
          width: 100vw;
          opacity: 0;
          transition: all 2s;
          animation: fadein 2s;
          animation-fill-mode: forwards;
          animation-play-state: initial;
        }

        .status {
          position: absolute;
          bottom: 20px;
          right: 20px;
          font-size: 26px;
          opacity: 0.7;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default observer(IndexPage);
