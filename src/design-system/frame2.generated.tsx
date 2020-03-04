import * as React from 'react';
import { observer } from 'mobx-react';

export const Frame2Generated: React.FC<{}> = observer(props => {
  return (
    <>
      <div className="figma-1">
        <div id="5:7" className="figma-0">
          <div className="figma-4">
            <div id="5:8" className="figma-3" />
          </div>
        </div>
      </div>
      <style jsx>{`
        input {
          font: inherit;
          border: inherit;
          padding: inherit;
          background-color: inherit;
          color: inherit;
        }
        input:focus {
          outline: none;
        }
        .vector {
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          position: absolute;
          overflow: visible !important;
        }
        .figma-0 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          width: 100%;
          height: 100%;
          debug-h: LEFT;
          debug-v: TOP;
          overflow: hidden;
          background: linear-gradient(to bottom, rgba(229, 241, 255, 1) 0%, rgba(229, 241, 255, 1) 100%),
            linear-gradient(to bottom, rgba(229, 241, 255, 1) 0%, rgba(229, 241, 255, 1) 100%);
          background-size: auto, auto;
        }
        .figma-1 {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .figma-3 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          debug-h: LEFT_RIGHT;
          width: 962px;
          margin-left: 95px;
          margin-right: 95px;
          flex-grow: 1;
          debug-v: TOP_BOTTOM;
          margin-top: 44px;
          margin-bottom: 69px;
          background: url(/images/5-8.png) center center no-repeat;
          background-size: cover;
        }
        .figma-4 {
          position: absolute;
          display: flex;
          pointer-events: none;
          justify-content: stretch;
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
          align-items: stretch;
        }
      `}</style>
    </>
  );
});
