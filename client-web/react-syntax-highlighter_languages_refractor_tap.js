"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_tap", "react-syntax-highlighter_languages_refractor_yaml"],
    {
        185851: (e, a, r) => {
            var t = r(928919);
            function n(e) {
                e.register(t), (e.languages.tap = { fail: /not ok[^#{\n\r]*/, pass: /ok[^#{\n\r]*/, pragma: /pragma [+-][a-z]+/, bailout: /bail out!.*/i, version: /TAP version \d+/i, plan: /\b\d+\.\.\d+(?: +#.*)?/, subtest: { pattern: /# Subtest(?:: .*)?/, greedy: !0 }, punctuation: /[{}]/, directive: /#.*/, yamlish: { pattern: /(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m, lookbehind: !0, inside: e.languages.yaml, alias: "language-yaml" } });
            }
            (e.exports = n), (n.displayName = "tap"), (n.aliases = []);
        },
        928919: (e) => {
            function a(e) {
                !(function (e) {
                    var a = /[*&][^\s[\]{},]+/,
                        r = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
                        t = "(?:" + r.source + "(?:[ \t]+" + a.source + ")?|" + a.source + "(?:[ \t]+" + r.source + ")?)",
                        n = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
                            return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
                        }),
                        s = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
                    function o(e, a) {
                        a = (a || "").replace(/m/g, "") + "m";
                        var r = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                            .replace(/<<prop>>/g, function () {
                                return t;
                            })
                            .replace(/<<value>>/g, function () {
                                return e;
                            });
                        return RegExp(r, a);
                    }
                    (e.languages.yaml = {
                        scalar: {
                            pattern: RegExp(
                                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
                                    return t;
                                }),
                            ),
                            lookbehind: !0,
                            alias: "string",
                        },
                        comment: /#.*/,
                        key: {
                            pattern: RegExp(
                                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                                    .replace(/<<prop>>/g, function () {
                                        return t;
                                    })
                                    .replace(/<<key>>/g, function () {
                                        return "(?:" + n + "|" + s + ")";
                                    }),
                            ),
                            lookbehind: !0,
                            greedy: !0,
                            alias: "atrule",
                        },
                        directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" },
                        datetime: { pattern: o(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: !0, alias: "number" },
                        boolean: { pattern: o(/false|true/.source, "i"), lookbehind: !0, alias: "important" },
                        null: { pattern: o(/null|~/.source, "i"), lookbehind: !0, alias: "important" },
                        string: { pattern: o(s), lookbehind: !0, greedy: !0 },
                        number: { pattern: o(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: !0 },
                        tag: r,
                        important: a,
                        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
                    }),
                        (e.languages.yml = e.languages.yaml);
                })(e);
            }
            (e.exports = a), (a.displayName = "yaml"), (a.aliases = ["yml"]);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_tap.fbc28afa.js.map
