"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_git"],
    {
        999318: (e) => {
            function t(e) {
                e.languages.git = { comment: /^#.*/m, deleted: /^[-–].*/m, inserted: /^\+.*/m, string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/ } }, coord: /^@@.*@@$/m, "commit-sha1": /^commit \w{40}$/m };
            }
            (e.exports = t), (t.displayName = "git"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_git.c52c394a.js.map
