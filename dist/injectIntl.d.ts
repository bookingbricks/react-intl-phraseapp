export declare type ReactIntlPhraseProps = {
    translate: (_: string) => string;
    formatMessage: (_: {
        id?: string;
    }) => string;
    getInitialProps?: any;
};
export declare function injectIntl(WrappedComponent: any, options?: any): any;
