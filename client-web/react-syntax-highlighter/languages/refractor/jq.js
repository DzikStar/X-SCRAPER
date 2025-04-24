"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_jq"],
    {
        438343: (e) => {
            function t(e) {
                !(function (e) {
                    var t = /\\\((?:[^()]|\([^()]*\))*\)/.source,
                        n = RegExp(
                            /(^|[^\\])"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g, function () {
                                return t;
                            }),
                        ),
                        r = { interpolation: { pattern: RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + t), lookbehind: !0, inside: { content: { pattern: /^(\\\()[\s\S]+(?=\)$)/, lookbehind: !0, inside: null }, punctuation: /^\\\(|\)$/ } } },
                        i = (e.languages.jq = { comment: /#.*/, property: { pattern: RegExp(n.source + /(?=\s*:(?!:))/.source), lookbehind: !0, greedy: !0, inside: r }, string: { pattern: n, lookbehind: !0, greedy: !0, inside: r }, function: { pattern: /(\bdef\s+)[a-z_]\w+/i, lookbehind: !0 }, variable: /\B\$\w+/, "property-literal": { pattern: /\b[a-z_]\w*(?=\s*:(?!:))/i, alias: "property" }, keyword: /\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/, boolean: /\b(?:false|true)\b/, number: /(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/, operator: [{ pattern: /\|=?/, alias: "pipe" }, /\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/], "c-style-function": { pattern: /\b[a-z_]\w*(?=\s*\()/i, alias: "function" }, punctuation: /::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/, dot: { pattern: /\./, alias: "important" } });
                    r.interpolation.inside.content.inside = i;
                })(e);
            }
            (e.exports = t), (t.displayName = "jq"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_jq.ce9aa1da.js.map
