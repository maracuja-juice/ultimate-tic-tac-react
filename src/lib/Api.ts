import { apiConnect, apiCreate, apiMove } from './environment';
import { Point } from './index';

const POST = 'POST';
const postHeaders = {
  'content-type': 'application/json;charset=UTF-8',
};

export type CreateGameResponse = {
  shortId: string;
  playerId: string;
};

export async function postCreateGame(): Promise<CreateGameResponse> {
  const response = await window.fetch(apiCreate, {
    method: POST,
    headers: postHeaders,
  });

  if (response.ok) {
    return await response.json();
  } else {
    return Promise.reject(`${response.status}: ${response.statusText}`);
  }
}

export type ConnectGameResponse = {
  playerId: string;
};

export async function postConnectGame(
  id: string,
): Promise<ConnectGameResponse> {
  const response = await window.fetch(apiConnect, {
    method: POST,
    headers: postHeaders,
    body: JSON.stringify({ shortId: id }),
  });

  if (response.ok) {
    return await response.json();
  } else {
    return Promise.reject(`${response.status}: ${response.statusText}`);
  }
}

export type MoveResponse = {};

export async function postMove(
  gameId: string,
  playerId: string,
  board: Point,
  tile: Point,
): Promise<MoveResponse> {
  const response = await window.fetch(apiMove, {
    method: POST,
    headers: postHeaders,
    body: JSON.stringify({
      gameId: gameId,
      playerId: playerId,
      boardX: board.x,
      boardY: board.y,
      tileX: tile.x,
      tileY: tile.y,
    }),
  });

  if (response.ok) {
    return {};
  } else {
    return Promise.reject(`${response.status}: ${response.statusText}`);
  }
}