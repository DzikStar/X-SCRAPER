"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_tremor"],
    {
        104907: (e) => {
            function t(e) {
                !(function (e) {
                    e.languages.tremor = { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 }, "interpolated-string": null, extractor: { pattern: /\b[a-z_]\w*\|(?:[^\r\n\\|]|\\(?:\r\n|[\s\S]))*\|/i, greedy: !0, inside: { regex: { pattern: /(^re)\|[\s\S]+/, lookbehind: !0 }, function: /^\w+/, value: /\|[\s\S]+/ } }, identifier: { pattern: /`[^`]*`/, greedy: !0 }, function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())\b/, keyword: /\b(?:args|as|by|case|config|connect|connector|const|copy|create|default|define|deploy|drop|each|emit|end|erase|event|flow|fn|for|from|group|having|insert|into|intrinsic|let|links|match|merge|mod|move|of|operator|patch|pipeline|recur|script|select|set|sliding|state|stream|to|tumbling|update|use|when|where|window|with)\b/, boolean: /\b(?:false|null|true)\b/i, number: /\b(?:0b[01_]*|0x[0-9a-fA-F_]*|\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee][+-]?[\d_]+)?)\b/, "pattern-punctuation": { pattern: /%(?=[({[])/, alias: "punctuation" }, operator: /[-+*\/%~!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?>?=?|(?:absent|and|not|or|present|xor)\b/, punctuation: /::|[;\[\]()\{\},.:]/ };
                    var t = /#\{(?:[^"{}]|\{[^{}]*\}|"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*")*\}/.source;
                    (e.languages.tremor["interpolated-string"] = { pattern: RegExp(/(^|[^\\])/.source + '(?:"""(?:' + /[^"\\#]|\\[\s\S]|"(?!"")|#(?!\{)/.source + "|" + t + ')*"""|"(?:' + /[^"\\\r\n#]|\\(?:\r\n|[\s\S])|#(?!\{)/.source + "|" + t + ')*")'), lookbehind: !0, greedy: !0, inside: { interpolation: { pattern: RegExp(t), inside: { punctuation: /^#\{|\}$/, expression: { pattern: /[\s\S]+/, inside: e.languages.tremor } } }, string: /[\s\S]+/ } }), (e.languages.troy = e.languages.tremor), (e.languages.trickle = e.languages.tremor);
                })(e);
            }
            (e.exports = t), (t.displayName = "tremor"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_tremor.db183eba.js.map
