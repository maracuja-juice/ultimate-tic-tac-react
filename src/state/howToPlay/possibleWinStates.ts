import { SimpleTicTacToeGame } from '../../util';
import { TileValue } from '../../state/AppState';

export const winStates = [
  new SimpleTicTacToeGame([
    TileValue.Cross,
    TileValue.Cross,
    TileValue.Cross,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Empty,
  ]),
  new SimpleTicTacToeGame([
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Cross,
    TileValue.Cross,
    TileValue.Cross,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Empty,
  ]),
  new SimpleTicTacToeGame([
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Cross,
    TileValue.Cross,
    TileValue.Cross,
  ]),
  new SimpleTicTacToeGame([
    TileValue.Cross,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Cross,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Cross,
    TileValue.Empty,
    TileValue.Empty,
  ]),
  new SimpleTicTacToeGame([
    TileValue.Empty,
    TileValue.Cross,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Cross,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Cross,
    TileValue.Empty,
  ]),
  new SimpleTicTacToeGame([
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Cross,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Cross,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Cross,
  ]),
  new SimpleTicTacToeGame([
    TileValue.Cross,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Cross,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Cross,
  ]),
  new SimpleTicTacToeGame([
    TileValue.Empty,
    TileValue.Empty,
    TileValue.Cross,
    TileValue.Empty,
    TileValue.Cross,
    TileValue.Empty,
    TileValue.Cross,
    TileValue.Empty,
    TileValue.Empty,
  ]),
];
