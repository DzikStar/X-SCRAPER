"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_kumir"],
    {
        551546: (n) => {
            function e(n) {
                !(function (n) {
                    var e = /\s\x00-\x1f\x22-\x2f\x3a-\x3f\x5b-\x5e\x60\x7b-\x7e/.source;
                    function o(n, o) {
                        return RegExp(n.replace(/<nonId>/g, e), o);
                    }
                    (n.languages.kumir = {
                        comment: { pattern: /\|.*/ },
                        prolog: { pattern: /#.*/, greedy: !0 },
                        string: { pattern: /"[^\n\r"]*"|'[^\n\r']*'/, greedy: !0 },
                        boolean: { pattern: o(/(^|[<nonId>])(?:да|нет)(?=[<nonId>]|$)/.source), lookbehind: !0 },
                        "operator-word": { pattern: o(/(^|[<nonId>])(?:и|или|не)(?=[<nonId>]|$)/.source), lookbehind: !0, alias: "keyword" },
                        "system-variable": { pattern: o(/(^|[<nonId>])знач(?=[<nonId>]|$)/.source), lookbehind: !0, alias: "keyword" },
                        type: [
                            { pattern: o(/(^|[<nonId>])(?:вещ|лит|лог|сим|цел)(?:\x20*таб)?(?=[<nonId>]|$)/.source), lookbehind: !0, alias: "builtin" },
                            { pattern: o(/(^|[<nonId>])(?:компл|сканкод|файл|цвет)(?=[<nonId>]|$)/.source), lookbehind: !0, alias: "important" },
                        ],
                        keyword: { pattern: o(/(^|[<nonId>])(?:алг|арг(?:\x20*рез)?|ввод|ВКЛЮЧИТЬ|вс[её]|выбор|вывод|выход|дано|для|до|дс|если|иначе|исп|использовать|кон(?:(?:\x20+|_)исп)?|кц(?:(?:\x20+|_)при)?|надо|нач|нс|нц|от|пауза|пока|при|раза?|рез|стоп|таб|то|утв|шаг)(?=[<nonId>]|$)/.source), lookbehind: !0 },
                        name: { pattern: o(/(^|[<nonId>])[^\d<nonId>][^<nonId>]*(?:\x20+[^<nonId>]+)*(?=[<nonId>]|$)/.source), lookbehind: !0 },
                        number: { pattern: o(/(^|[<nonId>])(?:\B\$[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?=[<nonId>]|$)/.source, "i"), lookbehind: !0 },
                        punctuation: /:=|[(),:;\[\]]/,
                        "operator-char": { pattern: /\*\*?|<[=>]?|>=?|[-+/=]/, alias: "operator" },
                    }),
                        (n.languages.kum = n.languages.kumir);
                })(n);
            }
            (n.exports = e), (e.displayName = "kumir"), (e.aliases = ["kum"]);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_kumir.f093beca.js.map
