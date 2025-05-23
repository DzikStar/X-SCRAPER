"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_coffeescript"],
    {
        968217: (e) => {
            function t(e) {
                !(function (e) {
                    var t = /#(?!\{).+/,
                        n = { pattern: /#\{[^}]+\}/, alias: "variable" };
                    (e.languages.coffeescript = e.languages.extend("javascript", {
                        comment: t,
                        string: [
                            { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
                            { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, inside: { interpolation: n } },
                        ],
                        keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
                        "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" },
                    })),
                        e.languages.insertBefore("coffeescript", "comment", { "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" }, "block-regex": { pattern: /\/{3}[\s\S]*?\/{3}/, alias: "regex", inside: { comment: t, interpolation: n } } }),
                        e.languages.insertBefore("coffeescript", "string", {
                            "inline-javascript": { pattern: /`(?:\\[\s\S]|[^\\`])*`/, inside: { delimiter: { pattern: /^`|`$/, alias: "punctuation" }, script: { pattern: /[\s\S]+/, alias: "language-javascript", inside: e.languages.javascript } } },
                            "multiline-string": [
                                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" },
                                { pattern: /"""[\s\S]*?"""/, greedy: !0, alias: "string", inside: { interpolation: n } },
                            ],
                        }),
                        e.languages.insertBefore("coffeescript", "keyword", { property: /(?!\d)\w+(?=\s*:(?!:))/ }),
                        delete e.languages.coffeescript["template-string"],
                        (e.languages.coffee = e.languages.coffeescript);
                })(e);
            }
            (e.exports = t), (t.displayName = "coffeescript"), (t.aliases = ["coffee"]);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_coffeescript.a65e775a.js.map
