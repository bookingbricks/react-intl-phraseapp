!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-intl")):"function"==typeof define&&define.amd?define(["react","react-intl"],t):"object"==typeof exports?exports["react-intl-phraseapp"]=t(require("react"),require("react-intl")):e["react-intl-phraseapp"]=t(e.react,e["react-intl"])}(this,(function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=!1;t.initializePhraseAppEditor=function(e){if(!n&&(n=!0,"undefined"!=typeof window&&(window.PHRASEAPP_ENABLED=e.phraseEnabled,window.PHRASEAPP_CONFIG=function(e){return e.prefix=e.prefix?e.prefix:"{{__",e.suffix=e.suffix?e.suffix:"__}}",e}(e),e.phraseEnabled))){const e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=["https://","app.phrase.com/assets/in-context-editor/2.0/app.js?",(new Date).getTime()].join("");var t=document.getElementsByTagName("script")[0];void 0!==t?t.parentNode.insertBefore(e,t):document.body.appendChild(e)}},t.isPhraseEnabled=function(){return"undefined"!=typeof window&&window.PHRASEAPP_ENABLED},t.escapeId=function(e){let t="undefined"!=typeof window?window.PHRASEAPP_CONFIG:{};return t.prefix+"phrase_"+e+t.suffix}},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){e.exports=r(4)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.initializePhraseAppEditor=n.initializePhraseAppEditor;var s=r(5);t.injectIntl=s.injectIntl;var i=r(6);t.FormattedMessage=i.FormattedMessage;var o=r(7);t.FormattedHTMLMessage=o.FormattedHTMLMessage},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),s=r(2),i=r(0);t.injectIntl=function(e,t){class r extends n.Component{constructor(...e){super(...e),this.render=this.render.bind(this),this.translate=this.translate.bind(this),this.formatMessage=this.formatMessage.bind(this)}translate(e){if(i.isPhraseEnabled()){const t=e.replace("<","[[[[[[html_open]]]]]]").replace(">","[[[[[[html_close]]]]]]");return i.escapeId(t)}return this.props.intl.formatMessage({id:e})}formatMessage(e){const{id:t}=e;if(t)return this.translate(t);console.error("formatMessage requires an id")}render(){return n.createElement(e,Object.assign({translate:this.translate,formatMessage:this.formatMessage},this.props))}}return s.injectIntl(r,t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),s=r(2),i=r(0);class o extends s.FormattedMessage{render(){return i.isPhraseEnabled()?n.createElement("span",null,i.escapeId(this.props.id)):super.render()}}t.FormattedMessage=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),s=r(2),i=r(0);class o extends s.FormattedHTMLMessage{render(){return i.isPhraseEnabled()?n.createElement("span",null,i.escapeId(this.props.id)):super.render()}}t.FormattedHTMLMessage=o}])}));