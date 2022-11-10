import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type SongMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerSong = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly context?: string | null;
  readonly kind: string;
  readonly filepath?: string | null;
  readonly art?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySong = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly context?: string | null;
  readonly kind: string;
  readonly filepath?: string | null;
  readonly art?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Song = LazyLoading extends LazyLoadingDisabled ? EagerSong : LazySong

export declare const Song: (new (init: ModelInit<Song, SongMetaData>) => Song) & {
  copyOf(source: Song, mutator: (draft: MutableModel<Song, SongMetaData>) => MutableModel<Song, SongMetaData> | void): Song;
}