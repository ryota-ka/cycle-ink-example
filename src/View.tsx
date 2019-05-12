import { createIncorporatedElement } from 'cycle-ink-driver';
import { Box } from 'ink';
import TextInput from 'ink-text-input';

import { sels } from './sels';

export type Props = {
    name: string;
};

export function View({ name }: Props): JSX.Element {
    return (
        <Box flexDirection="column">
            <Box>
                Name: <TextInput sel={sels.name} value={name} onChange={() => {}} />
            </Box>
            {'-'.repeat(20)}
            <Box>Hello {name}</Box>
        </Box>
    );
}
