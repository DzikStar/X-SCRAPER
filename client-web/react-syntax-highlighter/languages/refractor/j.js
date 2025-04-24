"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_j"],
    {
        790050: (e) => {
            function a(e) {
                e.languages.j = { comment: { pattern: /\bNB\..*/, greedy: !0 }, string: { pattern: /'(?:''|[^'\r\n])*'/, greedy: !0 }, keyword: /\b(?:(?:CR|LF|adverb|conjunction|def|define|dyad|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/, verb: { pattern: /(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[?^]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/, alias: "keyword" }, number: /\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:ad|ar|[ejpx])_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_\b(?!\.))/, adverb: { pattern: /[~}]|[\/\\]\.?|[bfM]\.|t[.:]/, alias: "builtin" }, operator: /[=a][.:]|_\./, conjunction: { pattern: /&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/, alias: "variable" }, punctuation: /[()]/ };
            }
            (e.exports = a), (a.displayName = "j"), (a.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_j.fdca787a.js.map
