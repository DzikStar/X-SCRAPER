"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_solutionFile"],
    {
        927353: (e) => {
            function n(e) {
                !(function (e) {
                    var n = { pattern: /\{[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}\}/i, alias: "constant", inside: { punctuation: /[{}]/ } };
                    (e.languages["solution-file"] = { comment: { pattern: /#.*/, greedy: !0 }, string: { pattern: /"[^"\r\n]*"|'[^'\r\n]*'/, greedy: !0, inside: { guid: n } }, object: { pattern: /^([ \t]*)(?:([A-Z]\w*)\b(?=.*(?:\r\n?|\n)(?:\1[ \t].*(?:\r\n?|\n))*\1End\2(?=[ \t]*$))|End[A-Z]\w*(?=[ \t]*$))/m, lookbehind: !0, greedy: !0, alias: "keyword" }, property: { pattern: /^([ \t]*)(?!\s)[^\r\n"#=()]*[^\s"#=()](?=\s*=)/m, lookbehind: !0, inside: { guid: n } }, guid: n, number: /\b\d+(?:\.\d+)*\b/, boolean: /\b(?:FALSE|TRUE)\b/, operator: /=/, punctuation: /[(),]/ }), (e.languages.sln = e.languages["solution-file"]);
                })(e);
            }
            (e.exports = n), (n.displayName = "solutionFile"), (n.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_solutionFile.86c547da.js.map
