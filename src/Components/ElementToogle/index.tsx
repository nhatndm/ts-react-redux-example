import React, { ReactNode, FC } from 'react';

type Props = {
  isShow: boolean | undefined;
  children: ReactNode;
};

export const ElementToogle: FC<Props> = ({ isShow, children }) => {
  if (isShow) {
    return <>{children}</>;
  }

  return null;
};
