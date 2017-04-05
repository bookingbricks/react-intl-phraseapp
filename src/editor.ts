let phraseAppEditor = false;
export function initializePhraseAppEditor (config: any, phraseEnabled: boolean) {
  if (phraseAppEditor) return
  
  phraseAppEditor = true;
  (<any>window).PHRASEAPP_ENABLED = phraseEnabled;  
  (<any>window).PHRASEAPP_CONFIG = config;

  (function() {
    var phraseapp = document.createElement('script'); phraseapp.type = 'text/javascript'; phraseapp.async = true;
    phraseapp.src = ['https://', 'phraseapp.com/assets/in-context-editor/2.0/app.js?', new Date().getTime()].join('');
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(phraseapp, s);
  })();
  /* eslint-enable */
}