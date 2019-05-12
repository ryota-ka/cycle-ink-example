import { ReactSource } from '@cycle/react';
import {} from 'cycle-ink-driver';
import { Stream } from 'xstream';

export type SoReact = { react: ReactSource };
export type SiReact = { react: Stream<JSX.Element> };
