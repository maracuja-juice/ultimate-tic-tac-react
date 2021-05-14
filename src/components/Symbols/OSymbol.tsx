import * as React from 'react';
import classNames from 'classnames';
import { ReactComponent as OIcon } from './svg/o.svg';
import styles from './Symbols.module.css';

export interface OSymbolProps {
  shouldAnimate?: boolean;
}

export class OSymbol extends React.Component<OSymbolProps> {
  public static defaultProps: Partial<OSymbolProps> = {
    shouldAnimate: true,
  };

  render() {
    const { shouldAnimate } = this.props;
    const iconClass = classNames({
      [styles.o]: true,
      [styles.animateO]: shouldAnimate,
    });

    return <OIcon className={iconClass} />;
  }
}
