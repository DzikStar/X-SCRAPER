"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_velocity"],
    {
        110985: (e) => {
            function t(e) {
                !(function (e) {
                    e.languages.velocity = e.languages.extend("markup", {});
                    var t = { variable: { pattern: /(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+\])*|\{[^}]+\})/i, lookbehind: !0, inside: {} }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, number: /\b\d+\b/, boolean: /\b(?:false|true)\b/, operator: /[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/, punctuation: /[(){}[\]:,.]/ };
                    (t.variable.inside = { string: t.string, function: { pattern: /([^\w-])[a-z][\w-]*(?=\()/, lookbehind: !0 }, number: t.number, boolean: t.boolean, punctuation: t.punctuation }),
                        e.languages.insertBefore("velocity", "comment", {
                            unparsed: { pattern: /(^|[^\\])#\[\[[\s\S]*?\]\]#/, lookbehind: !0, greedy: !0, inside: { punctuation: /^#\[\[|\]\]#$/ } },
                            "velocity-comment": [
                                { pattern: /(^|[^\\])#\*[\s\S]*?\*#/, lookbehind: !0, greedy: !0, alias: "comment" },
                                { pattern: /(^|[^\\])##.*/, lookbehind: !0, greedy: !0, alias: "comment" },
                            ],
                            directive: { pattern: /(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i, lookbehind: !0, inside: { keyword: { pattern: /^#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})|\bin\b/, inside: { punctuation: /[{}]/ } }, rest: t } },
                            variable: t.variable,
                        }),
                        (e.languages.velocity.tag.inside["attr-value"].inside.rest = e.languages.velocity);
                })(e);
            }
            (e.exports = t), (t.displayName = "velocity"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_velocity.cf89ac9a.js.map
