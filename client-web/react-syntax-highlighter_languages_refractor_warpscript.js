"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_warpscript"],
    {
        899296: (e) => {
            function r(e) {
                e.languages.warpscript = { comment: /#.*|\/\/.*|\/\*[\s\S]*?\*\//, string: { pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'|<'(?:[^\\']|'(?!>)|\\.)*'>/, greedy: !0 }, variable: /\$\S+/, macro: { pattern: /@\S+/, alias: "property" }, keyword: /\b(?:BREAK|CHECKMACRO|CONTINUE|CUDF|DEFINED|DEFINEDMACRO|EVAL|FAIL|FOR|FOREACH|FORSTEP|IFT|IFTE|MSGFAIL|NRETURN|RETHROW|RETURN|SWITCH|TRY|UDF|UNTIL|WHILE)\b/, number: /[+-]?\b(?:NaN|Infinity|\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?|0x[\da-fA-F]+|0b[01]+)\b/, boolean: /\b(?:F|T|false|true)\b/, punctuation: /<%|%>|[{}[\]()]/, operator: /==|&&?|\|\|?|\*\*?|>>>?|<<|[<>!~]=?|[-/%^]|\+!?|\b(?:AND|NOT|OR)\b/ };
            }
            (e.exports = r), (r.displayName = "warpscript"), (r.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_warpscript.03e104da.js.map
