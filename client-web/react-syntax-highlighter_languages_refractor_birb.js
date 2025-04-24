"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_birb"],
    {
        83673: (e) => {
            function a(e) {
                (e.languages.birb = e.languages.extend("clike", { string: { pattern: /r?("|')(?:\\.|(?!\1)[^\\])*\1/, greedy: !0 }, "class-name": [/\b[A-Z](?:[\d_]*[a-zA-Z]\w*)?\b/, /\b(?:[A-Z]\w*|(?!(?:var|void)\b)[a-z]\w*)(?=\s+\w+\s*[;,=()])/], keyword: /\b(?:assert|break|case|class|const|default|else|enum|final|follows|for|grab|if|nest|new|next|noSeeb|return|static|switch|throw|var|void|while)\b/, operator: /\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?|:/, variable: /\b[a-z_]\w*\b/ })), e.languages.insertBefore("birb", "function", { metadata: { pattern: /<\w+>/, greedy: !0, alias: "symbol" } });
            }
            (e.exports = a), (a.displayName = "birb"), (a.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_birb.4d01faca.js.map
