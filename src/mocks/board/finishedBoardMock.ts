// this provides two finished boards:
/*
 circleFinishedBoardMock:
  with the following situation: ( . = not finished )
  O O O
  X O .
  . X .

 crossFinishedBoardMock:
  with the following situation: ( . = not finished )
  . . .
  X X X
  . O O

 drawFinishedBoardMock:
  with the following situation: ( - = Draw)
  X - X
  X X O
  O X O
 */
export const circleFinishedBoardMock = [
  {
    value: 1,
    position: {
      x: 0,
      y: 0,
    },
    tiles: [
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 1,
      },
    ],
  },
  {
    value: 1,
    position: {
      x: 0,
      y: 1,
    },
    tiles: [
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 2,
      },
    ],
  },
  {
    value: 1,
    position: {
      x: 0,
      y: 2,
    },
    tiles: [
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 1,
      },
    ],
  },
  {
    value: 0,
    position: {
      x: 1,
      y: 0,
    },
    tiles: [
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 2,
      },
    ],
  },
  {
    value: 1,
    position: {
      x: 1,
      y: 1,
    },
    tiles: [
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 1,
      },
    ],
  },
  {
    value: 2,
    position: {
      x: 1,
      y: 2,
    },
    tiles: [
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 2,
      },
    ],
  },
  {
    value: 2,
    position: {
      x: 2,
      y: 0,
    },
    tiles: [
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 2,
      },
    ],
  },
  {
    value: 0,
    position: {
      x: 2,
      y: 1,
    },
    tiles: [
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 2,
      },
    ],
  },
  {
    value: 2,
    position: {
      x: 2,
      y: 2,
    },
    tiles: [
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 2,
      },
    ],
  },
];

export const movesForCircleFinishedBoardMock = [
  {
    boardPosition: {
      x: 1,
      y: 0,
    },
    tilePosition: {
      x: 0,
      y: 0,
    },
    player: 0,
    moveNumber: 1,
  },
  {
    boardPosition: {
      x: 0,
      y: 0,
    },
    tilePosition: {
      x: 1,
      y: 0,
    },
    player: 1,
    moveNumber: 2,
  },
  {
    boardPosition: {
      x: 1,
      y: 0,
    },
    tilePosition: {
      x: 0,
      y: 1,
    },
    player: 0,
    moveNumber: 3,
  },
  {
    boardPosition: {
      x: 0,
      y: 1,
    },
    tilePosition: {
      x: 1,
      y: 0,
    },
    player: 1,
    moveNumber: 4,
  },
  {
    boardPosition: {
      x: 1,
      y: 0,
    },
    tilePosition: {
      x: 0,
      y: 2,
    },
    player: 0,
    moveNumber: 5,
  },
  {
    boardPosition: {
      x: 0,
      y: 2,
    },
    tilePosition: {
      x: 2,
      y: 2,
    },
    player: 1,
    moveNumber: 6,
  },
  {
    boardPosition: {
      x: 2,
      y: 2,
    },
    tilePosition: {
      x: 0,
      y: 2,
    },
    player: 0,
    moveNumber: 7,
  },
  {
    boardPosition: {
      x: 0,
      y: 2,
    },
    tilePosition: {
      x: 1,
      y: 2,
    },
    player: 1,
    moveNumber: 8,
  },
  {
    boardPosition: {
      x: 1,
      y: 2,
    },
    tilePosition: {
      x: 0,
      y: 2,
    },
    player: 0,
    moveNumber: 9,
  },
  {
    boardPosition: {
      x: 0,
      y: 2,
    },
    tilePosition: {
      x: 0,
      y: 2,
    },
    player: 1,
    moveNumber: 10,
  },
  {
    boardPosition: {
      x: 2,
      y: 1,
    },
    tilePosition: {
      x: 0,
      y: 1,
    },
    player: 0,
    moveNumber: 11,
  },
  {
    boardPosition: {
      x: 0,
      y: 1,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 1,
    moveNumber: 12,
  },
  {
    boardPosition: {
      x: 1,
      y: 1,
    },
    tilePosition: {
      x: 0,
      y: 1,
    },
    player: 0,
    moveNumber: 13,
  },
  {
    boardPosition: {
      x: 0,
      y: 1,
    },
    tilePosition: {
      x: 1,
      y: 2,
    },
    player: 1,
    moveNumber: 14,
  },
  {
    boardPosition: {
      x: 1,
      y: 2,
    },
    tilePosition: {
      x: 0,
      y: 0,
    },
    player: 0,
    moveNumber: 15,
  },
  {
    boardPosition: {
      x: 0,
      y: 0,
    },
    tilePosition: {
      x: 2,
      y: 1,
    },
    player: 1,
    moveNumber: 16,
  },
  {
    boardPosition: {
      x: 2,
      y: 1,
    },
    tilePosition: {
      x: 0,
      y: 2,
    },
    player: 0,
    moveNumber: 17,
  },
  {
    boardPosition: {
      x: 0,
      y: 0,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 1,
    moveNumber: 18,
  },
  {
    boardPosition: {
      x: 1,
      y: 1,
    },
    tilePosition: {
      x: 2,
      y: 0,
    },
    player: 0,
    moveNumber: 19,
  },
  {
    boardPosition: {
      x: 2,
      y: 0,
    },
    tilePosition: {
      x: 2,
      y: 1,
    },
    player: 1,
    moveNumber: 20,
  },
  {
    boardPosition: {
      x: 2,
      y: 1,
    },
    tilePosition: {
      x: 0,
      y: 0,
    },
    player: 0,
    moveNumber: 21,
  },
  {
    boardPosition: {
      x: 0,
      y: 0,
    },
    tilePosition: {
      x: 2,
      y: 2,
    },
    player: 1,
    moveNumber: 22,
  },
  {
    boardPosition: {
      x: 2,
      y: 2,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 0,
    moveNumber: 23,
  },
  {
    boardPosition: {
      x: 1,
      y: 1,
    },
    tilePosition: {
      x: 1,
      y: 2,
    },
    player: 1,
    moveNumber: 24,
  },
  {
    boardPosition: {
      x: 1,
      y: 2,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 0,
    moveNumber: 25,
  },
  {
    boardPosition: {
      x: 1,
      y: 1,
    },
    tilePosition: {
      x: 2,
      y: 2,
    },
    player: 1,
    moveNumber: 26,
  },
  {
    boardPosition: {
      x: 2,
      y: 2,
    },
    tilePosition: {
      x: 0,
      y: 1,
    },
    player: 0,
    moveNumber: 27,
  },
  {
    boardPosition: {
      x: 1,
      y: 1,
    },
    tilePosition: {
      x: 0,
      y: 2,
    },
    player: 1,
    moveNumber: 28,
  },
  {
    boardPosition: {
      x: 2,
      y: 0,
    },
    tilePosition: {
      x: 0,
      y: 0,
    },
    player: 0,
    moveNumber: 29,
  },
  {
    boardPosition: {
      x: 0,
      y: 0,
    },
    tilePosition: {
      x: 0,
      y: 1,
    },
    player: 1,
    moveNumber: 30,
  },
];

export const crossFinishedBoardMock = [
  {
    value: 2,
    position: {
      x: 0,
      y: 0,
    },
    tiles: [
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 2,
      },
    ],
  },
  {
    value: 2,
    position: {
      x: 0,
      y: 1,
    },
    tiles: [
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 2,
      },
    ],
  },
  {
    value: 2,
    position: {
      x: 0,
      y: 2,
    },
    tiles: [
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 2,
      },
    ],
  },
  {
    value: 0,
    position: {
      x: 1,
      y: 0,
    },
    tiles: [
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 0,
      },
    ],
  },
  {
    value: 0,
    position: {
      x: 1,
      y: 1,
    },
    tiles: [
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 1,
      },
    ],
  },
  {
    value: 0,
    position: {
      x: 1,
      y: 2,
    },
    tiles: [
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 0,
      },
    ],
  },
  {
    value: 2,
    position: {
      x: 2,
      y: 0,
    },
    tiles: [
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 0,
      },
    ],
  },
  {
    value: 1,
    position: {
      x: 2,
      y: 1,
    },
    tiles: [
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 2,
      },
    ],
  },
  {
    value: 1,
    position: {
      x: 2,
      y: 2,
    },
    tiles: [
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 0,
      },
    ],
  },
];

export const movesForCrossFinishedBoardMock = [
  {
    boardPosition: {
      x: 2,
      y: 2,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 0,
    moveNumber: 1,
  },
  {
    boardPosition: {
      x: 1,
      y: 1,
    },
    tilePosition: {
      x: 1,
      y: 2,
    },
    player: 1,
    moveNumber: 2,
  },
  {
    boardPosition: {
      x: 1,
      y: 2,
    },
    tilePosition: {
      x: 1,
      y: 2,
    },
    player: 0,
    moveNumber: 3,
  },
  {
    boardPosition: {
      x: 1,
      y: 2,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 1,
    moveNumber: 4,
  },
  {
    boardPosition: {
      x: 1,
      y: 1,
    },
    tilePosition: {
      x: 0,
      y: 1,
    },
    player: 0,
    moveNumber: 5,
  },
  {
    boardPosition: {
      x: 0,
      y: 1,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 1,
    moveNumber: 6,
  },
  {
    boardPosition: {
      x: 1,
      y: 1,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 0,
    moveNumber: 7,
  },
  {
    boardPosition: {
      x: 1,
      y: 1,
    },
    tilePosition: {
      x: 2,
      y: 2,
    },
    player: 1,
    moveNumber: 8,
  },
  {
    boardPosition: {
      x: 2,
      y: 2,
    },
    tilePosition: {
      x: 2,
      y: 2,
    },
    player: 0,
    moveNumber: 9,
  },
  {
    boardPosition: {
      x: 2,
      y: 2,
    },
    tilePosition: {
      x: 2,
      y: 0,
    },
    player: 1,
    moveNumber: 10,
  },
  {
    boardPosition: {
      x: 2,
      y: 0,
    },
    tilePosition: {
      x: 2,
      y: 2,
    },
    player: 0,
    moveNumber: 11,
  },
  {
    boardPosition: {
      x: 2,
      y: 2,
    },
    tilePosition: {
      x: 1,
      y: 0,
    },
    player: 1,
    moveNumber: 12,
  },
  {
    boardPosition: {
      x: 1,
      y: 0,
    },
    tilePosition: {
      x: 2,
      y: 2,
    },
    player: 0,
    moveNumber: 13,
  },
  {
    boardPosition: {
      x: 2,
      y: 2,
    },
    tilePosition: {
      x: 0,
      y: 0,
    },
    player: 1,
    moveNumber: 14,
  },
  {
    boardPosition: {
      x: 0,
      y: 0,
    },
    tilePosition: {
      x: 2,
      y: 1,
    },
    player: 0,
    moveNumber: 15,
  },
  {
    boardPosition: {
      x: 2,
      y: 1,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 1,
    moveNumber: 16,
  },
  {
    boardPosition: {
      x: 1,
      y: 1,
    },
    tilePosition: {
      x: 2,
      y: 1,
    },
    player: 0,
    moveNumber: 17,
  },
  {
    boardPosition: {
      x: 2,
      y: 1,
    },
    tilePosition: {
      x: 1,
      y: 2,
    },
    player: 1,
    moveNumber: 18,
  },
  {
    boardPosition: {
      x: 1,
      y: 2,
    },
    tilePosition: {
      x: 2,
      y: 2,
    },
    player: 0,
    moveNumber: 19,
  },
  {
    boardPosition: {
      x: 2,
      y: 1,
    },
    tilePosition: {
      x: 1,
      y: 0,
    },
    player: 1,
    moveNumber: 20,
  },
  {
    boardPosition: {
      x: 1,
      y: 0,
    },
    tilePosition: {
      x: 2,
      y: 1,
    },
    player: 0,
    moveNumber: 21,
  },
  {
    boardPosition: {
      x: 0,
      y: 1,
    },
    tilePosition: {
      x: 1,
      y: 0,
    },
    player: 1,
    moveNumber: 22,
  },
  {
    boardPosition: {
      x: 1,
      y: 0,
    },
    tilePosition: {
      x: 2,
      y: 0,
    },
    player: 0,
    moveNumber: 23,
  },
  {
    boardPosition: {
      x: 2,
      y: 0,
    },
    tilePosition: {
      x: 1,
      y: 2,
    },
    player: 1,
    moveNumber: 24,
  },
  {
    boardPosition: {
      x: 1,
      y: 2,
    },
    tilePosition: {
      x: 0,
      y: 2,
    },
    player: 0,
    moveNumber: 25,
  },
];

export const drawFinishedBoardMock = [
  {
    value: 0,
    position: {
      x: 0,
      y: 0,
    },
    tiles: [
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 0,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 0,
      },
    ],
  },
  {
    value: 3,
    position: {
      x: 0,
      y: 1,
    },
    tiles: [
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 1,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 0,
      },
    ],
  },
  {
    value: 0,
    position: {
      x: 0,
      y: 2,
    },
    tiles: [
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 0,
          y: 2,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 0,
      },
    ],
  },
  {
    value: 0,
    position: {
      x: 1,
      y: 0,
    },
    tiles: [
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 0,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 2,
      },
    ],
  },
  {
    value: 0,
    position: {
      x: 1,
      y: 1,
    },
    tiles: [
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 1,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 2,
      },
    ],
  },
  {
    value: 1,
    position: {
      x: 1,
      y: 2,
    },
    tiles: [
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 1,
          y: 2,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 2,
      },
    ],
  },
  {
    value: 1,
    position: {
      x: 2,
      y: 0,
    },
    tiles: [
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 0,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 2,
      },
    ],
  },
  {
    value: 0,
    position: {
      x: 2,
      y: 1,
    },
    tiles: [
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 0,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 1,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 2,
      },
    ],
  },
  {
    value: 1,
    position: {
      x: 2,
      y: 2,
    },
    tiles: [
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 0,
          y: 0,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 0,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 0,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 1,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 1,
          y: 1,
        },
        value: 1,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 1,
          y: 2,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 2,
          y: 0,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 2,
          y: 1,
        },
        value: 2,
      },
      {
        boardPosition: {
          x: 2,
          y: 2,
        },
        position: {
          x: 2,
          y: 2,
        },
        value: 1,
      },
    ],
  },
];

export const movesForDrawFinishedBoardMock = [
  {
    boardPosition: {
      x: 0,
      y: 0,
    },
    tilePosition: {
      x: 1,
      y: 2,
    },
    player: 0,
    moveNumber: 1,
  },
  {
    boardPosition: {
      x: 1,
      y: 2,
    },
    tilePosition: {
      x: 0,
      y: 0,
    },
    player: 1,
    moveNumber: 2,
  },
  {
    boardPosition: {
      x: 0,
      y: 0,
    },
    tilePosition: {
      x: 2,
      y: 2,
    },
    player: 0,
    moveNumber: 3,
  },
  {
    boardPosition: {
      x: 2,
      y: 2,
    },
    tilePosition: {
      x: 0,
      y: 0,
    },
    player: 1,
    moveNumber: 4,
  },
  {
    boardPosition: {
      x: 0,
      y: 0,
    },
    tilePosition: {
      x: 0,
      y: 2,
    },
    player: 0,
    moveNumber: 5,
  },
  {
    boardPosition: {
      x: 0,
      y: 2,
    },
    tilePosition: {
      x: 0,
      y: 1,
    },
    player: 1,
    moveNumber: 6,
  },
  {
    boardPosition: {
      x: 0,
      y: 1,
    },
    tilePosition: {
      x: 1,
      y: 2,
    },
    player: 0,
    moveNumber: 7,
  },
  {
    boardPosition: {
      x: 1,
      y: 2,
    },
    tilePosition: {
      x: 0,
      y: 1,
    },
    player: 1,
    moveNumber: 8,
  },
  {
    boardPosition: {
      x: 0,
      y: 1,
    },
    tilePosition: {
      x: 2,
      y: 0,
    },
    player: 0,
    moveNumber: 9,
  },
  {
    boardPosition: {
      x: 2,
      y: 0,
    },
    tilePosition: {
      x: 1,
      y: 2,
    },
    player: 1,
    moveNumber: 10,
  },
  {
    boardPosition: {
      x: 1,
      y: 2,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 0,
    moveNumber: 11,
  },
  {
    boardPosition: {
      x: 1,
      y: 1,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 1,
    moveNumber: 12,
  },
  {
    boardPosition: {
      x: 1,
      y: 1,
    },
    tilePosition: {
      x: 0,
      y: 1,
    },
    player: 0,
    moveNumber: 13,
  },
  {
    boardPosition: {
      x: 0,
      y: 1,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 1,
    moveNumber: 14,
  },
  {
    boardPosition: {
      x: 1,
      y: 1,
    },
    tilePosition: {
      x: 0,
      y: 0,
    },
    player: 0,
    moveNumber: 15,
  },
  {
    boardPosition: {
      x: 0,
      y: 1,
    },
    tilePosition: {
      x: 0,
      y: 0,
    },
    player: 1,
    moveNumber: 16,
  },
  {
    boardPosition: {
      x: 0,
      y: 1,
    },
    tilePosition: {
      x: 2,
      y: 2,
    },
    player: 0,
    moveNumber: 17,
  },
  {
    boardPosition: {
      x: 2,
      y: 2,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 1,
    moveNumber: 18,
  },
  {
    boardPosition: {
      x: 1,
      y: 1,
    },
    tilePosition: {
      x: 0,
      y: 2,
    },
    player: 0,
    moveNumber: 19,
  },
  {
    boardPosition: {
      x: 0,
      y: 2,
    },
    tilePosition: {
      x: 0,
      y: 2,
    },
    player: 1,
    moveNumber: 20,
  },
  {
    boardPosition: {
      x: 0,
      y: 2,
    },
    tilePosition: {
      x: 0,
      y: 0,
    },
    player: 0,
    moveNumber: 21,
  },
  {
    boardPosition: {
      x: 0,
      y: 1,
    },
    tilePosition: {
      x: 2,
      y: 1,
    },
    player: 1,
    moveNumber: 22,
  },
  {
    boardPosition: {
      x: 2,
      y: 1,
    },
    tilePosition: {
      x: 0,
      y: 1,
    },
    player: 0,
    moveNumber: 23,
  },
  {
    boardPosition: {
      x: 0,
      y: 1,
    },
    tilePosition: {
      x: 0,
      y: 2,
    },
    player: 1,
    moveNumber: 24,
  },
  {
    boardPosition: {
      x: 0,
      y: 2,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 0,
    moveNumber: 25,
  },
  {
    boardPosition: {
      x: 0,
      y: 1,
    },
    tilePosition: {
      x: 1,
      y: 0,
    },
    player: 1,
    moveNumber: 26,
  },
  {
    boardPosition: {
      x: 1,
      y: 0,
    },
    tilePosition: {
      x: 1,
      y: 0,
    },
    player: 0,
    moveNumber: 27,
  },
  {
    boardPosition: {
      x: 1,
      y: 0,
    },
    tilePosition: {
      x: 0,
      y: 1,
    },
    player: 1,
    moveNumber: 28,
  },
  {
    boardPosition: {
      x: 0,
      y: 1,
    },
    tilePosition: {
      x: 0,
      y: 1,
    },
    player: 0,
    moveNumber: 29,
  },
  {
    boardPosition: {
      x: 1,
      y: 2,
    },
    tilePosition: {
      x: 0,
      y: 2,
    },
    player: 1,
    moveNumber: 30,
  },
  {
    boardPosition: {
      x: 0,
      y: 2,
    },
    tilePosition: {
      x: 2,
      y: 2,
    },
    player: 0,
    moveNumber: 31,
  },
  {
    boardPosition: {
      x: 2,
      y: 2,
    },
    tilePosition: {
      x: 2,
      y: 2,
    },
    player: 1,
    moveNumber: 32,
  },
  {
    boardPosition: {
      x: 1,
      y: 0,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 0,
    moveNumber: 33,
  },
  {
    boardPosition: {
      x: 2,
      y: 0,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 1,
    moveNumber: 34,
  },
  {
    boardPosition: {
      x: 1,
      y: 0,
    },
    tilePosition: {
      x: 1,
      y: 2,
    },
    player: 0,
    moveNumber: 35,
  },
  {
    boardPosition: {
      x: 2,
      y: 0,
    },
    tilePosition: {
      x: 1,
      y: 0,
    },
    player: 1,
    moveNumber: 36,
  },
  {
    boardPosition: {
      x: 2,
      y: 1,
    },
    tilePosition: {
      x: 0,
      y: 0,
    },
    player: 0,
    moveNumber: 37,
  },
  {
    boardPosition: {
      x: 2,
      y: 1,
    },
    tilePosition: {
      x: 1,
      y: 1,
    },
    player: 1,
    moveNumber: 38,
  },
  {
    boardPosition: {
      x: 2,
      y: 1,
    },
    tilePosition: {
      x: 0,
      y: 2,
    },
    player: 0,
    moveNumber: 39,
  },
];
