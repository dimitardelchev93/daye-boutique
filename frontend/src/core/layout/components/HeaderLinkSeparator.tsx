import React from 'react';

import { AppLinkItem, Separator } from '../styles';

const HeaderLinkSeparator: React.FC = () => {
  return (
    <AppLinkItem isSeparator>
      <Separator orientation="vertical" />
    </AppLinkItem>
  );
};

export default HeaderLinkSeparator;
