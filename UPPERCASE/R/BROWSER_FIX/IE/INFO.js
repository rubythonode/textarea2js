OVERRIDE(INFO,function(n){"use strict";global.INFO=INFO=OBJECT({preset:function(){return n},init:function(n,t,r){var e,o,a;void 0===navigator.language&&(r.getLang=e=function(){var n=UPPERCASE.STORE("__INFO").get("lang");return void 0===n&&(n=navigator.userLanguage,n.length>2&&(n=n.substring(0,2)),n=n.toLowerCase()),n}),r.checkIsDisplayTouchable=o=function(){return void 0!==window.navigator.msPointerEnabled},IE.version<=8&&(r.checkIsSlowBrowser=a=function(){return!0}),r.checkIsSupportCanvas=checkIsSupportCanvas=function(){return!0}}})});