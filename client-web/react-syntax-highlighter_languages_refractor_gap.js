"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_gap"],
    {
        747384: (e) => {
            function n(e) {
                (e.languages.gap = { shell: { pattern: /^gap>[\s\S]*?(?=^gap>|$(?![\s\S]))/m, greedy: !0, inside: { gap: { pattern: /^(gap>).+(?:(?:\r(?:\n|(?!\n))|\n)>.*)*/, lookbehind: !0, inside: null }, punctuation: /^gap>/ } }, comment: { pattern: /#.*/, greedy: !0 }, string: { pattern: /(^|[^\\'"])(?:'(?:[^\r\n\\']|\\.){1,10}'|"(?:[^\r\n\\"]|\\.)*"(?!")|"""[\s\S]*?""")/, lookbehind: !0, greedy: !0, inside: { continuation: { pattern: /([\r\n])>/, lookbehind: !0, alias: "punctuation" } } }, keyword: /\b(?:Assert|Info|IsBound|QUIT|TryNextMethod|Unbind|and|atomic|break|continue|do|elif|else|end|fi|for|function|if|in|local|mod|not|od|or|quit|readonly|readwrite|rec|repeat|return|then|until|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b[a-z_]\w*(?=\s*\()/i, number: { pattern: /(^|[^\w.]|\.\.)(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?(?:_[a-z]?)?(?=$|[^\w.]|\.\.)/, lookbehind: !0 }, continuation: { pattern: /([\r\n])>/, lookbehind: !0, alias: "punctuation" }, operator: /->|[-+*/^~=!]|<>|[<>]=?|:=|\.\./, punctuation: /[()[\]{},;.:]/ }), (e.languages.gap.shell.inside.gap.inside = e.languages.gap);
            }
            (e.exports = n), (n.displayName = "gap"), (n.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_gap.fbc1fbca.js.map
