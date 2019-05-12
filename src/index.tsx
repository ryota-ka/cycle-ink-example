import { run } from '@cycle/run';
import { makeInkDriver } from 'cycle-ink-driver';

import { main } from './main';

const drivers = {
    react: makeInkDriver(),
};

run(main, drivers);
