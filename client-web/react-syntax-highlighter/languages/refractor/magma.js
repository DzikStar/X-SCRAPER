"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_magma"],
    {
        174047: (e) => {
            function r(e) {
                e.languages.magma = { output: { pattern: /^(>.*(?:\r(?:\n|(?!\n))|\n))(?!>)(?:.+|(?:\r(?:\n|(?!\n))|\n)(?!>).*)(?:(?:\r(?:\n|(?!\n))|\n)(?!>).*)*/m, lookbehind: !0, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?\*\//, greedy: !0 }, string: { pattern: /(^|[^\\"])"(?:[^\r\n\\"]|\\.)*"/, lookbehind: !0, greedy: !0 }, keyword: /\b(?:_|adj|and|assert|assert2|assert3|assigned|break|by|case|cat|catch|clear|cmpeq|cmpne|continue|declare|default|delete|diff|div|do|elif|else|end|eq|error|eval|exists|exit|for|forall|forward|fprintf|freeze|function|ge|gt|if|iload|import|in|intrinsic|is|join|le|load|local|lt|meet|mod|ne|not|notadj|notin|notsubset|or|print|printf|procedure|quit|random|read|readi|repeat|require|requirege|requirerange|restore|return|save|sdiff|select|subset|then|time|to|try|until|vprint|vprintf|vtime|when|where|while|xor)\b/, boolean: /\b(?:false|true)\b/, generator: { pattern: /\b[a-z_]\w*(?=\s*<)/i, alias: "class-name" }, function: /\b[a-z_]\w*(?=\s*\()/i, number: { pattern: /(^|[^\w.]|\.\.)(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?(?:_[a-z]?)?(?=$|[^\w.]|\.\.)/, lookbehind: !0 }, operator: /->|[-+*/^~!|#=]|:=|\.\./, punctuation: /[()[\]{}<>,;.:]/ };
            }
            (e.exports = r), (r.displayName = "magma"), (r.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_magma.9a4e66ea.js.map
