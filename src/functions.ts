let phraseAppEditor = false;

function sanitizeConfig(config: any): any {
  config.prefix = config.prefix ? config.prefix : '{{__';
  config.suffix = config.suffix ? config.suffix : '__}}';

  return config;
}

const isClient = (typeof(window) !== 'undefined');

export function initializePhraseAppEditor (config: any) {
  if (phraseAppEditor) return;
  phraseAppEditor = true;
  if (isClient) {
    (<any>window).PHRASEAPP_ENABLED = config.phraseEnabled;
    (<any>window).PHRASEAPP_CONFIG = sanitizeConfig(config);


    if (config.phraseEnabled) {
        const phraseapp = document.createElement('script');
        phraseapp.type = 'text/javascript';
        phraseapp.async = true;
        phraseapp.src = ['https://', 'app.phrase.com/assets/in-context-editor/2.0/app.js?', new Date().getTime()].join('');
        var s = document.getElementsByTagName('script')[0];
        if (s !== undefined) {
          s.parentNode.insertBefore(phraseapp, s);
        } else {
          document.body.appendChild(phraseapp);
        }
      }
    }
  }
}

export function isPhraseEnabled() : boolean {
  return (isClient) ? (<any>window).PHRASEAPP_ENABLED : false;
}

export function escapeId (id : string | number) : string {
  let config = (isClient) ? (<any>window).PHRASEAPP_CONFIG : {};
  return  config.prefix + 'phrase_' + id + config.suffix;
}
