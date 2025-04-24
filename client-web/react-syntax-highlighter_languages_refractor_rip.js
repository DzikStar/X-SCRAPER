"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_rip"],
    {
        969979: (e) => {
            function r(e) {
                e.languages.rip = { comment: { pattern: /#.*/, greedy: !0 }, char: { pattern: /\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/, greedy: !0 }, string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, regex: { pattern: /(^|[^/])\/(?!\/)(?:\[[^\n\r\]]*\]|\\.|[^/\\\r\n\[])+\/(?=\s*(?:$|[\r\n,.;})]))/, lookbehind: !0, greedy: !0 }, keyword: /(?:=>|->)|\b(?:case|catch|class|else|exit|finally|if|raise|return|switch|try)\b/, builtin: /@|\bSystem\b/, boolean: /\b(?:false|true)\b/, date: /\b\d{4}-\d{2}-\d{2}\b/, time: /\b\d{2}:\d{2}:\d{2}\b/, datetime: /\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/, symbol: /:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/, number: /[+-]?\b(?:\d+\.\d+|\d+)\b/, punctuation: /(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/, reference: /[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/ };
            }
            (e.exports = r), (r.displayName = "rip"), (r.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_rip.435c32da.js.map
