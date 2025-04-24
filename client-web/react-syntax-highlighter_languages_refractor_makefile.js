"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_makefile"],
    {
        92738: (e) => {
            function i(e) {
                e.languages.makefile = { comment: { pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/, lookbehind: !0 }, string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "builtin-target": { pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/, alias: "builtin" }, target: { pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m, alias: "symbol", inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ } }, variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/, keyword: /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, function: { pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/, lookbehind: !0 }, operator: /(?:::|[?:+!])?=|[|@]/, punctuation: /[:;(){}]/ };
            }
            (e.exports = i), (i.displayName = "makefile"), (i.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_makefile.6648870a.js.map
