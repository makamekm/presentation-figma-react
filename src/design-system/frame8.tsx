import * as React from 'react';
import { observer } from 'mobx-react';
import { Frame8Generated } from './frame8.generated';

export const Frame8 = observer(props => {
  return <Frame8Generated {...props} />;
});
