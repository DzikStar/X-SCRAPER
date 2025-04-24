"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_bsl"],
    {
        411370: (e) => {
            function u(e) {
                (e.languages.bsl = {
                    comment: /\/\/.*/,
                    string: [{ pattern: /"(?:[^"]|"")*"(?!")/, greedy: !0 }, { pattern: /'(?:[^'\r\n\\]|\\.)*'/ }],
                    keyword: [{ pattern: /(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:пока|для|новый|прервать|попытка|исключение|вызватьисключение|иначе|конецпопытки|неопределено|функция|перем|возврат|конецфункции|если|иначеесли|процедура|конецпроцедуры|тогда|знач|экспорт|конецесли|из|каждого|истина|ложь|по|цикл|конеццикла|выполнить)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i, lookbehind: !0 }, { pattern: /\b(?:break|do|each|else|elseif|enddo|endfunction|endif|endprocedure|endtry|except|execute|export|false|for|function|if|in|new|null|procedure|raise|return|then|to|true|try|undefined|val|var|while)\b/i }],
                    number: { pattern: /(^(?=\d)|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:\d+(?:\.\d*)?|\.\d+)(?:E[+-]?\d+)?/i, lookbehind: !0 },
                    operator: [/[<>+\-*/]=?|[%=]/, { pattern: /(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:и|или|не)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i, lookbehind: !0 }, { pattern: /\b(?:and|not|or)\b/i }],
                    punctuation: /\(\.|\.\)|[()\[\]:;,.]/,
                    directive: [
                        { pattern: /^([ \t]*)&.*/m, lookbehind: !0, greedy: !0, alias: "important" },
                        { pattern: /^([ \t]*)#.*/gm, lookbehind: !0, greedy: !0, alias: "important" },
                    ],
                }),
                    (e.languages.oscript = e.languages.bsl);
            }
            (e.exports = u), (u.displayName = "bsl"), (u.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_bsl.6a12ca9a.js.map
