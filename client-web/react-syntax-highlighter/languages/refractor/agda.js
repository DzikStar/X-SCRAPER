"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_agda"],
    {
        914096: (e) => {
            function t(e) {
                !(function (e) {
                    e.languages.agda = { comment: /\{-[\s\S]*?(?:-\}|$)|--.*/, string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 }, punctuation: /[(){}⦃⦄.;@]/, "class-name": { pattern: /((?:data|record) +)\S+/, lookbehind: !0 }, function: { pattern: /(^[ \t]*)(?!\s)[^:\r\n]+(?=:)/m, lookbehind: !0 }, operator: { pattern: /(^\s*|\s)(?:[=|:∀→λ\\?_]|->)(?=\s)/, lookbehind: !0 }, keyword: /\b(?:Set|abstract|constructor|data|eta-equality|field|forall|hiding|import|in|inductive|infix|infixl|infixr|instance|let|macro|module|mutual|no-eta-equality|open|overlap|pattern|postulate|primitive|private|public|quote|quoteContext|quoteGoal|quoteTerm|record|renaming|rewrite|syntax|tactic|unquote|unquoteDecl|unquoteDef|using|variable|where|with)\b/ };
                })(e);
            }
            (e.exports = t), (t.displayName = "agda"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_agda.997fa7fa.js.map
