import * as React from 'react';
import { injectIntl as injectIntlReact } from 'react-intl';
export declare type ReactIntlPhraseProps = {
    translate: (_: string) => string;
    formatMessage: (_: {
        id?: string;
    }) => string;
};
export declare function injectIntl(WrappedComponent: React.ComponentType<ReactIntlPhraseProps>, options?: Parameters<typeof injectIntlReact>[1]): ReturnType<typeof injectIntlReact> & React.FC<ReactIntlPhraseProps>;
