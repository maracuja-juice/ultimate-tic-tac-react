// import boardReducer from './boardReducer';
// import { TileValue } from '../AppState';
// import { setTileValue } from './boardActions';
//
// describe( 'boardReducer', () => {
//     it( 'should return init state', () => {
//         let initState = boardReducer( undefined, {type: 'init'} );
//         expect( initState ).not.toBeNull();
//         expect( initState ).not.toBeUndefined();
//     } );
//
//     it( 'should add symbol of Circle Player', () => {
//         const bigBoardPoint = {x: 0, y: 0};
//         const smallBoardPoint = {x: 0, y: 0};
//         const action = setTileValue( bigBoardPoint, smallBoardPoint, TileValue.Circle );
//         let newState = boardReducer( undefined, action );
//
//         expect( newState[0].value ).toEqual( TileValue.Circle );
//     } );
//
//     it( 'should add symbol of Cross Player', () => {
//         const bigBoardPoint = {x: 0, y: 0};
//         const smallBoardPoint = {x: 2, y: 1};
//         const action = setTileValue( bigBoardPoint, smallBoardPoint, TileValue.Cross );
//         const newState = boardReducer( undefined, action );
//
//         const editedTile = newState.find( ( element ) => {
//             return element.smallBoardPoint.x === smallBoardPoint.x
//                 && element.smallBoardPoint.y === smallBoardPoint.y
//                 && element.bigBoardPoint.x === bigBoardPoint.x
//                 && element.bigBoardPoint.y === bigBoardPoint.y;
//         } );
//
//         expect( editedTile ).not.toBeUndefined();
//         expect( editedTile!.value ).toEqual( TileValue.Cross );
//     } );
// } );