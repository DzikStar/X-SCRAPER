"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_lolcode"],
    {
        173679: (e) => {
            function I(e) {
                e.languages.lolcode = { comment: [/\bOBTW\s[\s\S]*?\sTLDR\b/, /\bBTW.+/], string: { pattern: /"(?::.|[^":])*"/, inside: { variable: /:\{[^}]+\}/, symbol: [/:\([a-f\d]+\)/i, /:\[[^\]]+\]/, /:[)>o":]/] }, greedy: !0 }, number: /(?:\B-)?(?:\b\d+(?:\.\d*)?|\B\.\d+)/, symbol: { pattern: /(^|\s)(?:A )?(?:BUKKIT|NOOB|NUMBAR|NUMBR|TROOF|YARN)(?=\s|,|$)/, lookbehind: !0, inside: { keyword: /A(?=\s)/ } }, label: { pattern: /((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/, lookbehind: !0, alias: "string" }, function: { pattern: /((?:^|\s)(?:HOW IZ I|I IZ|IZ) )[a-zA-Z]\w*/, lookbehind: !0 }, keyword: [{ pattern: /(^|\s)(?:AN|FOUND YR|GIMMEH|GTFO|HAI|HAS A|HOW IZ I|I HAS A|I IZ|IF U SAY SO|IM IN YR|IM OUTTA YR|IS NOW(?: A)?|ITZ(?: A)?|IZ|KTHX|KTHXBYE|LIEK(?: A)?|MAEK|MEBBE|MKAY|NERFIN|NO WAI|O HAI IM|O RLY\?|OIC|OMG|OMGWTF|R|SMOOSH|SRS|TIL|UPPIN|VISIBLE|WILE|WTF\?|YA RLY|YR)(?=\s|,|$)/, lookbehind: !0 }, /'Z(?=\s|,|$)/], boolean: { pattern: /(^|\s)(?:FAIL|WIN)(?=\s|,|$)/, lookbehind: !0 }, variable: { pattern: /(^|\s)IT(?=\s|,|$)/, lookbehind: !0 }, operator: { pattern: /(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:ALL|ANY|BIGGR|BOTH|DIFF|EITHER|MOD|PRODUKT|QUOSHUNT|SMALLR|SUM|WON) OF)(?=\s|,|$)/, lookbehind: !0 }, punctuation: /\.{3}|…|,|!/ };
            }
            (e.exports = I), (I.displayName = "lolcode"), (I.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_lolcode.39057c3a.js.map
