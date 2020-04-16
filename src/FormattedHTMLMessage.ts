import { createElement } from 'react';
import { FormattedHTMLMessage as IntlFormattedHTMLMessage } from 'react-intl';
import { escapeId, isPhraseEnabled } from './functions';


export class FormattedHTMLMessage extends IntlFormattedHTMLMessage {
<<<<<<< HEAD
    render() {  
=======
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
>>>>>>> e523d2d6e86270716236185b54739805bd7d0520
        if (isPhraseEnabled()) {
            return createElement("span", null, escapeId(this.props.id));
        } else {
            return super.render();
        }
    }
}
