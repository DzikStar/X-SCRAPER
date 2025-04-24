"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_dart"],
    {
        663589: (e) => {
            function s(e) {
                !(function (e) {
                    var s = [/\b(?:async|sync|yield)\*/, /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],
                        a = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,
                        t = { pattern: RegExp(a + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source), lookbehind: !0, inside: { namespace: { pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/, inside: { punctuation: /\./ } } } };
                    (e.languages.dart = e.languages.extend("clike", { "class-name": [t, { pattern: RegExp(a + /[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source), lookbehind: !0, inside: t.inside }], keyword: s, operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/ })), e.languages.insertBefore("dart", "string", { "string-literal": { pattern: /r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/, greedy: !0, inside: { interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/, lookbehind: !0, inside: { punctuation: /^\$\{?|\}$/, expression: { pattern: /[\s\S]+/, inside: e.languages.dart } } }, string: /[\s\S]+/ } }, string: void 0 }), e.languages.insertBefore("dart", "class-name", { metadata: { pattern: /@\w+/, alias: "function" } }), e.languages.insertBefore("dart", "class-name", { generics: { pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/, inside: { "class-name": t, keyword: s, punctuation: /[<>(),.:]/, operator: /[?&|]/ } } });
                })(e);
            }
            (e.exports = s), (s.displayName = "dart"), (s.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_dart.503038ca.js.map
