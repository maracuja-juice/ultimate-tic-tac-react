import {
  RealtimeClient,
  RealtimeSubscription,
  Transformers,
} from '@supabase/realtime-js';
import { environment } from './index';

// From https://github.com/supabase/realtime-js#event-responses
type RealtimeEvent = {
  // the change timestampe. eg: "2020-10-13T10:09:22Z".
  commit_timestamp: string;

  // the database schema. eg: "public".
  schema: string;

  // the database table. eg: "users".
  table: string;

  // the event type.
  type: 'INSERT' | 'UPDATE' | 'DELETE';

  // all the columns for this table. See "column" type below.
  columns: RealtimeEventColumn[];

  // the new values. eg: { "id": "9", "age": "12" }.
  record: Record<string, string>;

  // the previous values. eg: { "id": "9", "age": "11" }. Only works if the table has `REPLICATION FULL`.
  old_record: object;
};

type RealtimeEventColumn = {
  // any special flags for the column. eg: ["key"]
  flags: string[];

  // the column name. eg: "user_id"
  name: string;

  // the column type. eg: "uuid"
  type: string;

  // the type modifier. eg: 4294967295
  type_modifier: number;
};

export type RealtimeMoveEvent = {
  id: number;
  fk_game_short_id: string;
  fk_player: number;
  board_x: number;
  board_y: number;
  tile_x: number;
  tile_y: number;
  created_on: string;
};

export class Realtime {
  public static async connect(): Promise<RealtimeClient> {
    const client = new RealtimeClient(environment.realtimeApi, {
      params: { apikey: environment.realtimeToken },
    });
    client.connect();
    return client;
  }

  public static subscribe(
    client: RealtimeClient,
    gameId: string,
    insertCallback: (e: RealtimeMoveEvent) => void,
    closeCallback: () => void,
  ): RealtimeSubscription {
    const subscription = client.channel(
      `${environment.realtimeFilter}${gameId}`,
    );
    subscription.on('INSERT', (e: RealtimeEvent) => {
      const result = Transformers.convertChangeData(e.columns, e.record);
      insertCallback(result as RealtimeMoveEvent);
    });
    subscription.onClose(closeCallback);
    subscription.subscribe();
    return subscription;
  }
}