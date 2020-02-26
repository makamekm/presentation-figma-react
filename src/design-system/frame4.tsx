import * as React from 'react';
import { observer } from 'mobx-react';
import { Frame4Generated } from './frame4.generated';

export const Frame4 = observer(props => {
  return <Frame4Generated {...props} />;
});
