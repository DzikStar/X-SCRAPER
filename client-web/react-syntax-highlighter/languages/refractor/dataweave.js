"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_dataweave"],
    {
        884412: (e) => {
            function t(e) {
                !(function (e) {
                    e.languages.dataweave = {
                        url: /\b[A-Za-z]+:\/\/[\w/:.?=&-]+|\burn:[\w:.?=&-]+/,
                        property: { pattern: /(?:\b\w+#)?(?:"(?:\\.|[^\\"\r\n])*"|\b\w+)(?=\s*[:@])/, greedy: !0 },
                        string: { pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
                        "mime-type": /\b(?:application|audio|image|multipart|text|video)\/[\w+-]+/,
                        date: { pattern: /\|[\w:+-]+\|/, greedy: !0 },
                        comment: [
                            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
                            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
                        ],
                        regex: { pattern: /\/(?:[^\\\/\r\n]|\\[^\r\n])+\//, greedy: !0 },
                        keyword: /\b(?:and|as|at|case|do|else|fun|if|input|is|match|not|ns|null|or|output|type|unless|update|using|var)\b/,
                        function: /\b[A-Z_]\w*(?=\s*\()/i,
                        number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
                        punctuation: /[{}[\];(),.:@]/,
                        operator: /<<|>>|->|[<>~=]=?|!=|--?-?|\+\+?|!|\?/,
                        boolean: /\b(?:false|true)\b/,
                    };
                })(e);
            }
            (e.exports = t), (t.displayName = "dataweave"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_dataweave.5fd014ca.js.map
