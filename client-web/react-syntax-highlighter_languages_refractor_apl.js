"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_apl"],
    {
        953814: (t) => {
            function a(t) {
                t.languages.apl = { comment: /(?:⍝|#[! ]).*$/m, string: { pattern: /'(?:[^'\r\n]|'')*'/, greedy: !0 }, number: /¯?(?:\d*\.?\b\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:(?:\d+(?:\.\d+)?|\.\d+)(?:e[+¯]?\d+)?|¯|∞))?/i, statement: /:[A-Z][a-z][A-Za-z]*\b/, "system-function": { pattern: /⎕[A-Z]+/i, alias: "function" }, constant: /[⍬⌾#⎕⍞]/, function: /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/, "monadic-operator": { pattern: /[\\\/⌿⍀¨⍨⌶&∥]/, alias: "operator" }, "dyadic-operator": { pattern: /[.⍣⍠⍤∘⌸@⌺⍥]/, alias: "operator" }, assignment: { pattern: /←/, alias: "keyword" }, punctuation: /[\[;\]()◇⋄]/, dfn: { pattern: /[{}⍺⍵⍶⍹∇⍫:]/, alias: "builtin" } };
            }
            (t.exports = a), (a.displayName = "apl"), (a.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_apl.f9de6fea.js.map
