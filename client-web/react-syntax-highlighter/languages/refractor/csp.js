"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_csp"],
    {
        96617: (e) => {
            function r(e) {
                !(function (e) {
                    function r(e) {
                        return RegExp(/([ \t])/.source + "(?:" + e + ")" + /(?=[\s;]|$)/.source, "i");
                    }
                    e.languages.csp = {
                        directive: { pattern: /(^|[\s;])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[\s;]|$)/i, lookbehind: !0, alias: "property" },
                        scheme: { pattern: r(/[a-z][a-z0-9.+-]*:/.source), lookbehind: !0 },
                        none: { pattern: r(/'none'/.source), lookbehind: !0, alias: "keyword" },
                        nonce: { pattern: r(/'nonce-[-+/\w=]+'/.source), lookbehind: !0, alias: "number" },
                        hash: { pattern: r(/'sha(?:256|384|512)-[-+/\w=]+'/.source), lookbehind: !0, alias: "number" },
                        host: { pattern: r(/[a-z][a-z0-9.+-]*:\/\/[^\s;,']*/.source + "|" + /\*[^\s;,']*/.source + "|" + /[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::[\d*]+)?(?:\/[^\s;,']*)?/.source), lookbehind: !0, alias: "url", inside: { important: /\*/ } },
                        keyword: [
                            { pattern: r(/'unsafe-[a-z-]+'/.source), lookbehind: !0, alias: "unsafe" },
                            { pattern: r(/'[a-z-]+'/.source), lookbehind: !0, alias: "safe" },
                        ],
                        punctuation: /;/,
                    };
                })(e);
            }
            (e.exports = r), (r.displayName = "csp"), (r.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_csp.dbcca5ca.js.map
