"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_diff"],
    {
        636165: (e) => {
            function n(e) {
                !(function (e) {
                    e.languages.diff = { coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m] };
                    var n = { "deleted-sign": "-", "deleted-arrow": "<", "inserted-sign": "+", "inserted-arrow": ">", unchanged: " ", diff: "!" };
                    Object.keys(n).forEach(function (s) {
                        var a = n[s],
                            i = [];
                        /^\w+$/.test(s) || i.push(/\w+/.exec(s)[0]), "diff" === s && i.push("bold"), (e.languages.diff[s] = { pattern: RegExp("^(?:[" + a + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"), alias: i, inside: { line: { pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/, lookbehind: !0 }, prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(s)[0] } } });
                    }),
                        Object.defineProperty(e.languages.diff, "PREFIXES", { value: n });
                })(e);
            }
            (e.exports = n), (n.displayName = "diff"), (n.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_diff.ef42dc1a.js.map
