"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_xeora"],
    {
        378776: (t) => {
            function n(t) {
                !(function (t) {
                    (t.languages.xeora = t.languages.extend("markup", { constant: { pattern: /\$(?:DomainContents|PageRenderDuration)\$/, inside: { punctuation: { pattern: /\$/ } } }, variable: { pattern: /\$@?(?:#+|[-+*~=^])?[\w.]+\$/, inside: { punctuation: { pattern: /[$.]/ }, operator: { pattern: /#+|[-+*~=^@]/ } } }, "function-inline": { pattern: /\$F:[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\$/, inside: { variable: { pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/, inside: { punctuation: { pattern: /[,.|]/ }, operator: { pattern: /#+|[-+*~=^@]/ } } }, punctuation: { pattern: /\$\w:|[$:?.,|]/ } }, alias: "function" }, "function-block": { pattern: /\$XF:\{[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\}:XF\$/, inside: { punctuation: { pattern: /[$:{}?.,|]/ } }, alias: "function" }, "directive-inline": { pattern: /\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\/\w.]+\$/, inside: { punctuation: { pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/, inside: { tag: { pattern: /#\d/ } } } }, alias: "function" }, "directive-block-open": { pattern: /\$\w+:\{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\w.]+:\{(?:![A-Z]+)?/, inside: { punctuation: { pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/, inside: { tag: { pattern: /#\d/ } } }, attribute: { pattern: /![A-Z]+$/, inside: { punctuation: { pattern: /!/ } }, alias: "keyword" } }, alias: "function" }, "directive-block-separator": { pattern: /\}:[-\w.]+:\{/, inside: { punctuation: { pattern: /[:{}]/ } }, alias: "function" }, "directive-block-close": { pattern: /\}:[-\w.]+\$/, inside: { punctuation: { pattern: /[:{}$]/ } }, alias: "function" } })),
                        t.languages.insertBefore("inside", "punctuation", { variable: t.languages.xeora["function-inline"].inside.variable }, t.languages.xeora["function-block"]),
                        (t.languages.xeoracube = t.languages.xeora);
                })(t);
            }
            (t.exports = n), (n.displayName = "xeora"), (n.aliases = ["xeoracube"]);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_xeora.89a0a61a.js.map
