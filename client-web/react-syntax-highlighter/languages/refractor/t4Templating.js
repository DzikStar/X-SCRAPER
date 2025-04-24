"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_t4Templating"],
    {
        320179: (e) => {
            function t(e) {
                !(function (e) {
                    function t(e, t, a) {
                        return { pattern: RegExp("<#" + e + "[\\s\\S]*?#>"), alias: "block", inside: { delimiter: { pattern: RegExp("^<#" + e + "|#>$"), alias: "important" }, content: { pattern: /[\s\S]+/, inside: t, alias: a } } };
                    }
                    e.languages["t4-templating"] = Object.defineProperty({}, "createT4", {
                        value: function (a) {
                            var n = e.languages[a],
                                i = "language-" + a;
                            return { block: { pattern: /<#[\s\S]+?#>/, inside: { directive: t("@", { "attr-value": { pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/, inside: { punctuation: /^=|^["']|["']$/ } }, keyword: /\b\w+(?=\s)/, "attr-name": /\b\w+/ }), expression: t("=", n, i), "class-feature": t("\\+", n, i), standard: t("", n, i) } } };
                        },
                    });
                })(e);
            }
            (e.exports = t), (t.displayName = "t4Templating"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_t4Templating.de9383ca.js.map
