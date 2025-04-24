"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_gdscript"],
    {
        326896: (e) => {
            function t(e) {
                e.languages.gdscript = { comment: /#.*/, string: { pattern: /@?(?:("|')(?:(?!\1)[^\n\\]|\\[\s\S])*\1(?!"|')|"""(?:[^\\]|\\[\s\S])*?""")/, greedy: !0 }, "class-name": { pattern: /(^(?:class|class_name|extends)[ \t]+|^export\([ \t]*|\bas[ \t]+|(?:\b(?:const|var)[ \t]|[,(])[ \t]*\w+[ \t]*:[ \t]*|->[ \t]*)[a-zA-Z_]\w*/m, lookbehind: !0 }, keyword: /\b(?:and|as|assert|break|breakpoint|class|class_name|const|continue|elif|else|enum|export|extends|for|func|if|in|is|master|mastersync|match|not|null|onready|or|pass|preload|puppet|puppetsync|remote|remotesync|return|self|setget|signal|static|tool|var|while|yield)\b/, function: /\b[a-z_]\w*(?=[ \t]*\()/i, variable: /\$\w+/, number: [/\b0b[01_]+\b|\b0x[\da-fA-F_]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.[\d_]+)(?:e[+-]?[\d_]+)?\b/, /\b(?:INF|NAN|PI|TAU)\b/], constant: /\b[A-Z][A-Z_\d]*\b/, boolean: /\b(?:false|true)\b/, operator: /->|:=|&&|\|\||<<|>>|[-+*/%&|!<>=]=?|[~^]/, punctuation: /[.:,;()[\]{}]/ };
            }
            (e.exports = t), (t.displayName = "gdscript"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_gdscript.bb0f7a6a.js.map
