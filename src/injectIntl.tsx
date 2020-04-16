import * as React from 'react';
import { injectIntl as injectIntlReact } from 'react-intl';
import { escapeId, isPhraseEnabled } from './functions';

export type ReactIntlPhraseProps = {
    translate: (_: string)=> string;
    formatMessage: (_: {id?: string}) => string;
    getInitialProps?: any;
};

export function injectIntl(WrappedComponent: any, options?: any) : any {
    class InjectPhrase extends React.Component implements ReactIntlPhraseProps {
        constructor(...args: ConstructorParameters<typeof React.Component>) {
            console.log('...args', ...args)
            super(...args);

            this.render = this.render.bind(this);
            this.translate = this.translate.bind(this);
            this.formatMessage = this.formatMessage.bind(this);
        }

        translate(keyName: string): ReturnType<ReactIntlPhraseProps['translate']> {
            if (isPhraseEnabled()) {
                const escapedString = keyName.replace("<", "[[[[[[html_open]]]]]]").replace(">", "[[[[[[html_close]]]]]]");
                return escapeId(escapedString);
            } else {
                return this.props['intl'].formatMessage({ "id": keyName });
            }
        }

        formatMessage(messageDescriptor: { id?: string }): ReturnType<ReactIntlPhraseProps['formatMessage']> {
            const { id } = messageDescriptor;
            if (!id) {
                console.error("formatMessage requires an id")
            } else {
                return this.translate(id);
            }
        }

        static getInitialProps(props) {
          return WrappedComponent.getInitialProps(props);
        }

        render() {
            return (
                <WrappedComponent
                    translate={this.translate}
                    formatMessage={this.formatMessage}
                    {...this.props}
                />
            );
        }
    }

    return injectIntlReact(InjectPhrase, options);
}
