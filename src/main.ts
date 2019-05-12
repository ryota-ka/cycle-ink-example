import { sels } from './sels';
import { SoReact, SiReact } from './types';
import { View } from './View';

export function main({ react }: SoReact): SiReact {
    const name$ = react
        .select(sels.name)
        .events('change')
        .startWith('');

    const view$ = name$.map(name => View({ name }));

    return {
        react: view$,
    };
}
