"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_sass"],
    {
        426562: (e) => {
            function s(e) {
                !(function (e) {
                    (e.languages.sass = e.languages.extend("css", { comment: { pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m, lookbehind: !0, greedy: !0 } })), e.languages.insertBefore("sass", "atrule", { "atrule-line": { pattern: /^(?:[ \t]*)[@+=].+/m, greedy: !0, inside: { atrule: /(?:@[\w-]+|[+=])/ } } }), delete e.languages.sass.atrule;
                    var s = /\$[-\w]+|#\{\$[-\w]+\}/,
                        t = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, { pattern: /(\s)-(?=\s)/, lookbehind: !0 }];
                    e.languages.insertBefore("sass", "property", { "variable-line": { pattern: /^[ \t]*\$.+/m, greedy: !0, inside: { punctuation: /:/, variable: s, operator: t } }, "property-line": { pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m, greedy: !0, inside: { property: [/[^:\s]+(?=\s*:)/, { pattern: /(:)[^:\s]+/, lookbehind: !0 }], punctuation: /:/, variable: s, operator: t, important: e.languages.sass.important } } }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", { selector: { pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m, lookbehind: !0, greedy: !0 } });
                })(e);
            }
            (e.exports = s), (s.displayName = "sass"), (s.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_sass.9a05d74a.js.map
