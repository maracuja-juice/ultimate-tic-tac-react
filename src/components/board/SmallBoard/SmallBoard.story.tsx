import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Player, TileValue } from '../../../state/AppState';
import { SmallBoard } from './SmallBoard';
import { Point } from '../../../util/Point';

const stories = storiesOf( 'SmallBoard', module );
stories.addDecorator( withKnobs );

function getSmallTile( boardPosition: Point, position: Point, value: TileValue ) {
    return {
        boardPosition, position, value
    };
}

stories.add( 'SmallBoard Empty', () => {
    const clicked = ( x: number, y: number ) => {
        console.log( 'clicked:' + x + y );
    };
    const boardPosition = {x: 0, y: 0};
    const smallTileInformation = [
        getSmallTile( boardPosition, {x: 0, y: 0}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 0, y: 1}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 0, y: 2}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 1, y: 0}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 1, y: 1}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 1, y: 2}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 2, y: 0}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 2, y: 1}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 2, y: 2}, TileValue.Empty ),
    ];

    return (
        <SmallBoard
            onTileClicked={clicked}
            winningPlayer={TileValue.Empty}
            tiles={smallTileInformation}
            currentPlayer={select( 'currentPlayer', Player, Player.Circle )}
            isMoveAllowed={boolean( 'isMoveAllowed', true )}
            x={0}
            y={0}
        />
    );
} );

stories.add( 'SmallBoard With Values', () => {
    const clicked = ( x: number, y: number ) => {
        console.log( 'clicked: ' + x + y );
    };

    const boardPosition = {x: 1, y: 1};
    const smallTileInformation = [
        getSmallTile( boardPosition, {x: 0, y: 0}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 0, y: 1}, TileValue.Cross ),
        getSmallTile( boardPosition, {x: 0, y: 2}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 1, y: 0}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 1, y: 1}, TileValue.Circle ),
        getSmallTile( boardPosition, {x: 1, y: 2}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 2, y: 0}, TileValue.Cross ),
        getSmallTile( boardPosition, {x: 2, y: 1}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 2, y: 2}, TileValue.Circle ),
    ];

    return (
        <SmallBoard
            onTileClicked={clicked}
            winningPlayer={TileValue.Empty}
            tiles={smallTileInformation}
            currentPlayer={select( 'currentPlayer', Player, Player.Circle )}
            isMoveAllowed={boolean( 'isMoveAllowed', true )}
            x={0}
            y={0}
        />
    );
} );

stories.add( 'Smallboard won', () => {
    const clicked = ( x: number, y: number ) => {
        console.log( 'clicked:' + x + y );
    };

    const boardPosition = {x: 2, y: 2};
    const smallTileInformation = [
        getSmallTile( boardPosition, {x: 0, y: 0}, TileValue.Cross ),
        getSmallTile( boardPosition, {x: 0, y: 1}, TileValue.Cross ),
        getSmallTile( boardPosition, {x: 0, y: 2}, TileValue.Cross ),
        getSmallTile( boardPosition, {x: 1, y: 0}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 1, y: 1}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 1, y: 2}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 2, y: 0}, TileValue.Empty ),
        getSmallTile( boardPosition, {x: 2, y: 1}, TileValue.Cross ),
        getSmallTile( boardPosition, {x: 2, y: 2}, TileValue.Circle ),
    ];

    return (
        <SmallBoard
            onTileClicked={clicked}
            winningPlayer={TileValue.Cross}
            tiles={smallTileInformation}
            currentPlayer={Player.Cross}
            isMoveAllowed={false}
            x={2}
            y={2}
        />
    );
} );