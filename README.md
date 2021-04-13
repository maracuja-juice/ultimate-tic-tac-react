
<p align="center">
  <img src="https://github.com/maracuja-juice/ultimate-tic-tac-react/blob/master/public/android-chrome-192x192.png"
width="150" alt="tic tac toe logo" />
</p>
<h1 align="center">Ultimate Tic-Tac-Toe</h1>


<div align="center">
  
  A browser game implementation of ultimate tic-tac-toe using React, Redux and CSS Grid.
  
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/ultimate-ttt/ultimate-ttt/issues)
[![Build Status](https://travis-ci.org/ultimate-ttt/ultimate-ttt.svg?branch=master)](https://travis-ci.org/ultimate-ttt/ultimate-ttt)
[![codecov](https://codecov.io/gh/ultimate-ttt/ultimate-ttt/branch/master/graph/badge.svg)](https://codecov.io/gh/ultimate-ttt/ultimate-ttt)

</div>

## Demo

Below you see a quick demo of the game mechanics.
You can test it out yourself [here](https://playtictactoe.xyz/)

<img src="https://user-images.githubusercontent.com/16801528/38771159-2815f1ec-401e-11e8-8edb-157b58403761.gif" alt="demo of the game" width="500">

## Game Rules
There are 9 normal tic-tac-toe boards. You win a small tic-tac-toe board if you have 3 of your marks in a row. (_diagonal, vertical or horizontal_) 
And you win the **game** if you have **3 won** tic-tac-toe boards **positioned in a row.** (_diagonal, vertical or horizontal_)

But here's the **twist:**
_Every move on a small board sends the opponent to the equivalent on the big board._

### Practical Example
Let's say we have this big board with 9 small boards. (the initial game state)

```
[ ][ ][ ]   [ ][ ][ ]   [ ][ ][ ]
[ ][ ][ ]   [ ][ ][ ]   [ ][ ][ ]
[ ][ ][ ]   [ ][ ][ ]   [ ][ ][ ]

[ ][ ][ ]   [ ][ ][ ]   [ ][ ][ ]
[ ][ ][ ]   [ ][ ][ ]   [ ][ ][ ]
[ ][ ][ ]   [ ][ ][ ]   [ ][ ][ ]

[ ][ ][ ]   [ ][ ][ ]   [ ][ ][ ]
[ ][ ][ ]   [ ][ ][ ]   [ ][ ][ ]
[ ][ ][ ]   [ ][ ][ ]   [ ][ ][ ]
```
And the first player makes this move in one of the small boards:
```
[ ][X][ ]
[ ][ ][ ]
[ ][ ][ ]
```
The second player can in the next turn only play in the tiles that are marked with a `!`. These are tiles from the small board that are equivalent to the position of the last move. 
```
[ ][ ][ ]   [!][!][!]   [ ][ ][ ]
[ ][ ][ ]   [!][!][!]   [ ][ ][ ]
[ ][ ][ ]   [!][!][!]   [ ][ ][ ]

[ ][ ][ ]   [ ][ ][ ]   [ ][ ][ ]
[ ][ ][ ]   [ ][ ][ ]   [ ][ ][ ]
[ ][ ][ ]   [ ][ ][ ]   [ ][ ][ ]

[ ][ ][ ]   [ ][ ][ ]   [ ][X][ ]
[ ][ ][ ]   [ ][ ][ ]   [ ][ ][ ]
[ ][ ][ ]   [ ][ ][ ]   [ ][ ][ ]
```

But let's say that we are already later in the game and the equivalent board is already won (_three marks in a row_). The next player can then play in **all** boards that are **not won** yet. (marked with `!`)

(_note: of course later in the game there would be the same amount of X's and O's on the board => this is just for illustration purposes_)
```
[!][!][!]   [O][ ][ ]   [!][!][!]
[!][!][!]   [ ][O][ ]   [!][!][!]
[!][!][!]   [ ][ ][O]   [!][!][!]

[!][!][!]   [!][!][!]   [!][!][!]
[!][!][!]   [!][!][!]   [!][!][!]
[!][!][!]   [!][!][!]   [!][!][!]

[!][!][!]   [!][!][!]   [!][X][!]
[!][!][!]   [!][!][!]   [!][!][!]
[!][!][!]   [!][!][!]   [!][!][!]
```

## Supported browsers
All browser versions that support CSS Grid layout are supported. For an exact overview of which browser versions that are [click here](https://caniuse.com/#feat=css-grid). If you detect an issue with a behaviour in a particular browser version: [let us know](https://github.com/ultimate-ttt/ultimate-ttt/issues/new?template=bug_report.md)!

## Run locally
It's easy to run a local instance of this game - just clone the repository, run `yarn install` ([installation instructions for yarn](https://yarnpkg.com/en/docs/install)) and use:

- `yarn test` for tests
- `yarn start` to run
- `yarn storybook` to test the components with [Storybook](https://github.com/storybooks/storybook)
- `yarn prettier` to format the code with [Prettier](https://github.com/prettier/prettier)

## Contribute

Any type of feedback, pull request or issue is welcome. Follow the "Run locally" section of this documentation to learn how to debug the project.


## License
[MIT](https://tldrlegal.com/license/mit-license)
