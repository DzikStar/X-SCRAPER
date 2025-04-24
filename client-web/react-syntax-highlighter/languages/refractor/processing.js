"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_processing"],
    {
        208899: (e) => {
            function s(e) {
                (e.languages.processing = e.languages.extend("clike", { keyword: /\b(?:break|case|catch|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/, function: /\b\w+(?=\s*\()/, operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/ })), e.languages.insertBefore("processing", "number", { constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/, type: { pattern: /\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/, alias: "class-name" } });
            }
            (e.exports = s), (s.displayName = "processing"), (s.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_processing.76e0460a.js.map
