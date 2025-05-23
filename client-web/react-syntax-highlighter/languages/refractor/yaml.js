"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_yaml"],
    {
        928919: (e) => {
            function r(e) {
                !(function (e) {
                    var r = /[*&][^\s[\]{},]+/,
                        t = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
                        n = "(?:" + t.source + "(?:[ \t]+" + r.source + ")?|" + r.source + "(?:[ \t]+" + t.source + ")?)",
                        a = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
                            return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
                        }),
                        o = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
                    function u(e, r) {
                        r = (r || "").replace(/m/g, "") + "m";
                        var t = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                            .replace(/<<prop>>/g, function () {
                                return n;
                            })
                            .replace(/<<value>>/g, function () {
                                return e;
                            });
                        return RegExp(t, r);
                    }
                    (e.languages.yaml = {
                        scalar: {
                            pattern: RegExp(
                                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
                                    return n;
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
                                        return n;
                                    })
                                    .replace(/<<key>>/g, function () {
                                        return "(?:" + a + "|" + o + ")";
                                    }),
                            ),
                            lookbehind: !0,
                            greedy: !0,
                            alias: "atrule",
                        },
                        directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" },
                        datetime: { pattern: u(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: !0, alias: "number" },
                        boolean: { pattern: u(/false|true/.source, "i"), lookbehind: !0, alias: "important" },
                        null: { pattern: u(/null|~/.source, "i"), lookbehind: !0, alias: "important" },
                        string: { pattern: u(o), lookbehind: !0, greedy: !0 },
                        number: { pattern: u(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: !0 },
                        tag: t,
                        important: r,
                        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
                    }),
                        (e.languages.yml = e.languages.yaml);
                })(e);
            }
            (e.exports = r), (r.displayName = "yaml"), (r.aliases = ["yml"]);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_yaml.f7d3edea.js.map
