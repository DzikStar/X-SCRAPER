"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_parigp"],
    {
        928867: (r) => {
            function e(r) {
                var e;
                r.languages.parigp = {
                    comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
                    string: { pattern: /"(?:[^"\\\r\n]|\\.)*"/, greedy: !0 },
                    keyword:
                        ((e = ["breakpoint", "break", "dbg_down", "dbg_err", "dbg_up", "dbg_x", "forcomposite", "fordiv", "forell", "forpart", "forprime", "forstep", "forsubgroup", "forvec", "for", "iferr", "if", "local", "my", "next", "return", "until", "while"]),
                        (e = e
                            .map(function (r) {
                                return r.split("").join(" *");
                            })
                            .join("|")),
                        RegExp("\\b(?:" + e + ")\\b")),
                    function: /\b\w(?:[\w ]*\w)?(?= *\()/,
                    number: { pattern: /((?:\. *\. *)?)(?:\b\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *(?:[+-] *)?\d(?: *\d)*)?/i, lookbehind: !0 },
                    operator: /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?: *>|(?: *<)?(?: *=)?)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
                    punctuation: /[\[\]{}().,:;|]/,
                };
            }
            (r.exports = e), (e.displayName = "parigp"), (e.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_parigp.c022d63a.js.map
