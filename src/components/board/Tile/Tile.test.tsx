import * as React from 'react';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { Tile } from './Tile';
import { TileValue } from '../../../state/AppState';

configure( {adapter: new ReactSixteenAdapter()} );

describe( 'Tile', () => {
    it( 'should not explode', () => {
        const component = shallow( <Tile isClickable={true} isCircle={true} value={TileValue.Empty}/> );
        expect( component ).not.toBeNull();
    } );

    describe( 'display of symbol', () => {
        it( 'should display an XSymbol if the value is X', () => {
            const component = shallow( <Tile isClickable={false} isCircle={true} value={TileValue.Cross}/> );
            expect( component.children( 'XSymbol' ) ).toHaveLength( 1 );
        } );

        it( 'should display an OSymbol if the value is O', () => {
            const component = shallow( <Tile isClickable={false} isCircle={true} value={TileValue.Circle}/> );
            expect( component.children( 'OSymbol' ) ).toHaveLength( 1 );
        } );

        it( 'should display nothing if the value is empty', () => {
            const component = shallow( <Tile isClickable={false} isCircle={true} value={TileValue.Empty}/> );
            expect( component.children() ).toHaveLength( 0 );
        } );

        it( 'should display a no winner symbol if the value is destroyed', () => {
            const component = shallow( <Tile isClickable={false} isCircle={true} value={TileValue.Destroyed}/> );
            expect( component.children( 'NoWinnerSymbol' ) ).toHaveLength( 1 );
        } );

        it( 'should have a big XSymbol child if it is big and the Value is X', () => {
            const component = shallow( (
                                           <Tile
                                               isClickable={false}
                                               isCircle={true}
                                               isBig={true}
                                               value={TileValue.Cross}
                                           />)
            );
            expect( component.children( 'XSymbol' ) ).toHaveLength( 1 );
            expect( component.children( 'XSymbol' ).prop( 'bigSymbol' ) ).toEqual( true );
        } );

        it( 'should have a big OSymbol child if it is big and the Value is O', () => {
            const component = shallow( (
                                           <Tile
                                               isClickable={false}
                                               isCircle={true}
                                               isBig={true}
                                               value={TileValue.Circle}
                                           />)
            );
            expect( component.children( 'OSymbol' ) ).toHaveLength( 1 );
            expect( component.children( 'OSymbol' ).prop( 'bigSymbol' ) ).toEqual( true );
        } );
    } );

    describe( 'click event', () => {
        it( 'should call the click method if it is clickable and it was clicked', () => {
            // tslint:disable:no-empty
            const tileClicked = jest.fn( () => {

            } );
            const component = shallow( (
                                           <Tile
                                               isClickable={true}
                                               isCircle={true}
                                               value={TileValue.Empty}
                                               onTileClicked={tileClicked}
                                           />) );

            component.simulate( 'click' );
            expect( tileClicked ).toHaveBeenCalledTimes( 1 );
        } );

        it( 'should NOT call the click method if it is clicked and it is not clickable', () => {
            const tileClicked = jest.fn( () => {
            } );
            const component = shallow( (
                                           <Tile
                                               isClickable={false}
                                               isCircle={true}
                                               value={TileValue.Empty}
                                               onTileClicked={tileClicked}
                                           />) );

            component.simulate( 'click' );
            expect( tileClicked ).toHaveBeenCalledTimes( 0 );
        } );
    } );

    describe( 'how rounded it should be shown', () => {
        it( 'should have the square class if it is not a circle', () => {
            const component = shallow( <Tile isClickable={true} isCircle={false} value={TileValue.Empty}/> );
            expect( component.props().className ).toContain( 'square' );
            expect( component.props().className ).not.toContain( 'circle' );
            expect( component.props().className ).not.toContain( 'no-winner' );
        } );

        it( 'should have the circle class if it is a circle', () => {
            const component = shallow( <Tile isClickable={true} isCircle={true} value={TileValue.Empty}/> );
            expect( component.props().className ).toContain( 'circle' );
            expect( component.props().className ).not.toContain( 'square' );
            expect( component.props().className ).not.toContain( 'no-winner' );
        } );

        it( 'should have the no-winner class if the tileValue is Destroyed', () => {
            let component = shallow( <Tile isClickable={true} isCircle={true} value={TileValue.Destroyed}/> );
            expect( component.props().className ).toContain( 'no-winner' );
            expect( component.props().className ).not.toContain( 'square' );
            expect( component.props().className ).not.toContain( 'circle' );

            component = shallow( <Tile isClickable={true} isCircle={false} value={TileValue.Destroyed}/> );
            expect( component.props().className ).toContain( 'no-winner' );
            expect( component.props().className ).not.toContain( 'square' );
            expect( component.props().className ).not.toContain( 'circle' );
        } );
    } );

    describe( 'indicator or no indicator', () => {
        it( 'should have the indicator class if it is clickable', () => {
            const component = shallow( <Tile isClickable={true} isCircle={true} value={TileValue.Empty}/> );
            expect( component.props().className ).toContain( 'indicator' );
            expect( component.props().className ).not.toContain( 'normal' );
        } );

        it( 'should have the normal class if it is not clickable', () => {
            const component = shallow( <Tile isClickable={false} isCircle={true} value={TileValue.Empty}/> );
            expect( component.props().className ).toContain( 'normal' );
            expect( component.props().className ).not.toContain( 'indicator' );
        } );
    } );

} );