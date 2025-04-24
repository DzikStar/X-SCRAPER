"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_openqasm"],
    {
        554514: (e) => {
            function t(e) {
                (e.languages.openqasm = { comment: /\/\*[\s\S]*?\*\/|\/\/.*/, string: { pattern: /"[^"\r\n\t]*"|'[^'\r\n\t]*'/, greedy: !0 }, keyword: /\b(?:CX|OPENQASM|U|barrier|boxas|boxto|break|const|continue|ctrl|def|defcal|defcalgrammar|delay|else|end|for|gate|gphase|if|in|include|inv|kernel|lengthof|let|measure|pow|reset|return|rotary|stretchinf|while)\b|#pragma\b/, "class-name": /\b(?:angle|bit|bool|creg|fixed|float|int|length|qreg|qubit|stretch|uint)\b/, function: /\b(?:cos|exp|ln|popcount|rotl|rotr|sin|sqrt|tan)\b(?=\s*\()/, constant: /\b(?:euler|pi|tau)\b|π|𝜏|ℇ/, number: { pattern: /(^|[^.\w$])(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?(?:dt|ns|us|µs|ms|s)?/i, lookbehind: !0 }, operator: /->|>>=?|<<=?|&&|\|\||\+\+|--|[!=<>&|~^+\-*/%]=?|@/, punctuation: /[(){}\[\];,:.]/ }), (e.languages.qasm = e.languages.openqasm);
            }
            (e.exports = t), (t.displayName = "openqasm"), (t.aliases = ["qasm"]);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_openqasm.e8c52a6a.js.map
