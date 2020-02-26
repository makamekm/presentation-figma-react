import * as React from 'react';
import { observer } from 'mobx-react';

export const Frame3Generated: React.FC<{}> = observer(props => {
  return (
    <>
      <div className="figma-1">
        <div id="17:0" className="figma-0">
          <div className="figma-4">
            <div id="17:2" className="figma-3"></div>
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
        .vector :global(svg) {
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          position: absolute;
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
          background: linear-gradient(to bottom, rgba(236, 238, 242, 1) 0%, rgba(236, 238, 242, 1) 100%),
            linear-gradient(to bottom, rgba(236, 238, 242, 1) 0%, rgba(236, 238, 242, 1) 100%);
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
          margin-left: 19px;
          margin-right: 19px;
          flex-grow: 1;
          debug-v: TOP_BOTTOM;
          margin-top: 51px;
          margin-bottom: 52px;
          background: url(/images/9e97330477f1d6371006202c23d853b75f8507f6.png) center center no-repeat;
          background-size: contain;
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