"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_webIdl"],
    {
        917364: (e) => {
            function r(e) {
                !(function (e) {
                    var r = /(?:\B-|\b_|\b)[A-Za-z][\w-]*(?![\w-])/.source,
                        t = "(?:" + /\b(?:unsigned\s+)?long\s+long(?![\w-])/.source + "|" + /\b(?:unrestricted|unsigned)\s+[a-z]+(?![\w-])/.source + "|" + /(?!(?:unrestricted|unsigned)\b)/.source + r + /(?:\s*<(?:[^<>]|<[^<>]*>)*>)?/.source + ")" + /(?:\s*\?)?/.source,
                        n = {};
                    for (var i in ((e.languages["web-idl"] = { comment: { pattern: /\/\/.*|\/\*[\s\S]*?\*\//, greedy: !0 }, string: { pattern: /"[^"]*"/, greedy: !0 }, namespace: { pattern: RegExp(/(\bnamespace\s+)/.source + r), lookbehind: !0 }, "class-name": [{ pattern: /(^|[^\w-])(?:iterable|maplike|setlike)\s*<(?:[^<>]|<[^<>]*>)*>/, lookbehind: !0, inside: n }, { pattern: RegExp(/(\b(?:attribute|const|deleter|getter|optional|setter)\s+)/.source + t), lookbehind: !0, inside: n }, { pattern: RegExp("(" + /\bcallback\s+/.source + r + /\s*=\s*/.source + ")" + t), lookbehind: !0, inside: n }, { pattern: RegExp(/(\btypedef\b\s*)/.source + t), lookbehind: !0, inside: n }, { pattern: RegExp(/(\b(?:callback|dictionary|enum|interface(?:\s+mixin)?)\s+)(?!(?:interface|mixin)\b)/.source + r), lookbehind: !0 }, { pattern: RegExp(/(:\s*)/.source + r), lookbehind: !0 }, RegExp(r + /(?=\s+(?:implements|includes)\b)/.source), { pattern: RegExp(/(\b(?:implements|includes)\s+)/.source + r), lookbehind: !0 }, { pattern: RegExp(t + "(?=" + /\s*(?:\.{3}\s*)?/.source + r + /\s*[(),;=]/.source + ")"), inside: n }], builtin: /\b(?:ArrayBuffer|BigInt64Array|BigUint64Array|ByteString|DOMString|DataView|Float32Array|Float64Array|FrozenArray|Int16Array|Int32Array|Int8Array|ObservableArray|Promise|USVString|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray)\b/, keyword: [/\b(?:async|attribute|callback|const|constructor|deleter|dictionary|enum|getter|implements|includes|inherit|interface|mixin|namespace|null|optional|or|partial|readonly|required|setter|static|stringifier|typedef|unrestricted)\b/, /\b(?:any|bigint|boolean|byte|double|float|iterable|long|maplike|object|octet|record|sequence|setlike|short|symbol|undefined|unsigned|void)\b/], boolean: /\b(?:false|true)\b/, number: { pattern: /(^|[^\w-])-?(?:0x[0-9a-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|NaN|Infinity)(?![\w-])/i, lookbehind: !0 }, operator: /\.{3}|[=:?<>-]/, punctuation: /[(){}[\].,;]/ }), e.languages["web-idl"]))
                        "class-name" !== i && (n[i] = e.languages["web-idl"][i]);
                    e.languages.webidl = e.languages["web-idl"];
                })(e);
            }
            (e.exports = r), (r.displayName = "webIdl"), (r.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_webIdl.cb84b4ea.js.map
