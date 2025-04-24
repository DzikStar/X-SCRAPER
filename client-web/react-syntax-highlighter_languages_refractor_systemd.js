"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_systemd"],
    {
        12959: (e) => {
            function t(e) {
                !(function (e) {
                    var t = { pattern: /^[;#].*/m, greedy: !0 },
                        n = /"(?:[^\r\n"\\]|\\(?:[^\r]|\r\n?))*"(?!\S)/.source;
                    e.languages.systemd = { comment: t, section: { pattern: /^\[[^\n\r\[\]]*\](?=[ \t]*$)/m, greedy: !0, inside: { punctuation: /^\[|\]$/, "section-name": { pattern: /[\s\S]+/, alias: "selector" } } }, key: { pattern: /^[^\s=]+(?=[ \t]*=)/m, greedy: !0, alias: "attr-name" }, value: { pattern: RegExp(/(=[ \t]*(?!\s))/.source + "(?:" + n + '|(?=[^"\r\n]))(?:' + /[^\s\\]/.source + '|[ \t]+(?:(?![ \t"])|' + n + ")|" + /\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;])/.source + ")*"), lookbehind: !0, greedy: !0, alias: "attr-value", inside: { comment: t, quoted: { pattern: RegExp(/(^|\s)/.source + n), lookbehind: !0, greedy: !0 }, punctuation: /\\$/m, boolean: { pattern: /^(?:false|no|off|on|true|yes)$/, greedy: !0 } } }, punctuation: /=/ };
                })(e);
            }
            (e.exports = t), (t.displayName = "systemd"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_systemd.f60cca3a.js.map
