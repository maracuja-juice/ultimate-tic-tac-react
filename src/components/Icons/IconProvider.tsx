import * as React from 'react';
import { RMWCProvider } from '@rmwc/provider';
import classNames from 'classnames';
import styles from './IconProvider.module.css';

interface IconProviderProps {
  children?: any;
}

/* If we ever need to customize something for all icons. */
export function IconProvider(props: IconProviderProps) {
  return (
    <RMWCProvider icon={{ basename: classNames([styles.alignWithText]) }}>
      {props.children}
    </RMWCProvider>
  );
}
