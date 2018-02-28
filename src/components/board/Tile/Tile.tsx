import * as React from 'react';
import { TileValue } from '../../../state/AppState';
import { XSymbol } from '../../symbols/XSymbol';
import { OSymbol } from '../../symbols/OSymbol';
import { NoWinnerSymbol } from '../../symbols/NoWinnerSymbol';

import './tile.css';
import 'material-design-icons/iconfont/material-icons.css';

interface TileProps {
    onTileClicked: () => void;
    value: TileValue;
    isCircle: boolean;
    isClickable: boolean;
}

interface TileState {
}

export class Tile extends React.Component<TileProps, TileState> {

    constructor( props: TileProps ) {
        super( props );

        this.getValue = this.getValue.bind( this );
    }

    getValue() {
        switch (this.props.value) {
            case TileValue.Cross:
                return <XSymbol/>;
            case TileValue.Circle:
                return <OSymbol/>;
            case TileValue.Empty:
                return '';
            case TileValue.Destroyed:
                return <NoWinnerSymbol/>;
        }
    }

    render() {
        const {onTileClicked, isCircle, isClickable, value} = this.props;
        const color = isClickable ? 'indicator' : 'normal';
        let roundness = isCircle ? 'circle' : 'square';

        if (value === TileValue.Destroyed) {
            roundness = 'no-winner';
        }

        return (
            <div className={`box ${color} ${roundness}`}
                 onClick={() => {
                     if (isClickable) {
                         onTileClicked();
                     }
                 }}>
                {this.getValue()}
            </div>
        );
    }
}