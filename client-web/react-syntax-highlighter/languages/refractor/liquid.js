"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_liquid", "react-syntax-highlighter_languages_refractor_markupTemplating"],
    {
        832606: (e, t, n) => {
            var a = n(246546);
            function r(e) {
                e.register(a),
                    (e.languages.liquid = {
                        comment: { pattern: /(^\{%\s*comment\s*%\})[\s\S]+(?=\{%\s*endcomment\s*%\}$)/, lookbehind: !0 },
                        delimiter: { pattern: /^\{(?:\{\{|[%\{])-?|-?(?:\}\}|[%\}])\}$/, alias: "punctuation" },
                        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
                        keyword: /\b(?:as|assign|break|(?:end)?(?:capture|case|comment|for|form|if|paginate|raw|style|tablerow|unless)|continue|cycle|decrement|echo|else|elsif|in|include|increment|limit|liquid|offset|range|render|reversed|section|when|with)\b/,
                        object: /\b(?:address|all_country_option_tags|article|block|blog|cart|checkout|collection|color|country|country_option_tags|currency|current_page|current_tags|customer|customer_address|date|discount_allocation|discount_application|external_video|filter|filter_value|font|forloop|fulfillment|generic_file|gift_card|group|handle|image|line_item|link|linklist|localization|location|measurement|media|metafield|model|model_source|order|page|page_description|page_image|page_title|part|policy|product|product_option|recommendations|request|robots|routes|rule|script|search|selling_plan|selling_plan_allocation|selling_plan_group|shipping_method|shop|shop_locale|sitemap|store_availability|tax_line|template|theme|transaction|unit_price_measurement|user_agent|variant|video|video_source)\b/,
                        function: [
                            { pattern: /(\|\s*)\w+/, lookbehind: !0, alias: "filter" },
                            { pattern: /(\.\s*)(?:first|last|size)/, lookbehind: !0 },
                        ],
                        boolean: /\b(?:false|nil|true)\b/,
                        range: { pattern: /\.\./, alias: "operator" },
                        number: /\b\d+(?:\.\d+)?\b/,
                        operator: /[!=]=|<>|[<>]=?|[|?:=-]|\b(?:and|contains(?=\s)|or)\b/,
                        punctuation: /[.,\[\]()]/,
                        empty: { pattern: /\bempty\b/, alias: "keyword" },
                    }),
                    e.hooks.add("before-tokenize", function (t) {
                        var n = !1;
                        e.languages["markup-templating"].buildPlaceholders(t, "liquid", /\{%\s*comment\s*%\}[\s\S]*?\{%\s*endcomment\s*%\}|\{(?:%[\s\S]*?%|\{\{[\s\S]*?\}\}|\{[\s\S]*?\})\}/g, function (e) {
                            var t = /^\{%-?\s*(\w+)/.exec(e);
                            if (t) {
                                var a = t[1];
                                if ("raw" === a && !n) return (n = !0), !0;
                                if ("endraw" === a) return (n = !1), !0;
                            }
                            return !n;
                        });
                    }),
                    e.hooks.add("after-tokenize", function (t) {
                        e.languages["markup-templating"].tokenizePlaceholders(t, "liquid");
                    });
            }
            (e.exports = r), (r.displayName = "liquid"), (r.aliases = []);
        },
        246546: (e) => {
            function t(e) {
                !(function (e) {
                    function t(e, t) {
                        return "___" + e.toUpperCase() + t + "___";
                    }
                    Object.defineProperties((e.languages["markup-templating"] = {}), {
                        buildPlaceholders: {
                            value: function (n, a, r, i) {
                                if (n.language === a) {
                                    var o = (n.tokenStack = []);
                                    (n.code = n.code.replace(r, function (e) {
                                        if ("function" == typeof i && !i(e)) return e;
                                        for (var r, l = o.length; -1 !== n.code.indexOf((r = t(a, l))); ) ++l;
                                        return (o[l] = e), r;
                                    })),
                                        (n.grammar = e.languages.markup);
                                }
                            },
                        },
                        tokenizePlaceholders: {
                            value: function (n, a) {
                                if (n.language === a && n.tokenStack) {
                                    n.grammar = e.languages[a];
                                    var r = 0,
                                        i = Object.keys(n.tokenStack);
                                    !(function o(l) {
                                        for (var s = 0; s < l.length && !(r >= i.length); s++) {
                                            var c = l[s];
                                            if ("string" == typeof c || (c.content && "string" == typeof c.content)) {
                                                var u = i[r],
                                                    p = n.tokenStack[u],
                                                    g = "string" == typeof c ? c : c.content,
                                                    d = t(a, u),
                                                    m = g.indexOf(d);
                                                if (m > -1) {
                                                    ++r;
                                                    var f = g.substring(0, m),
                                                        _ = new e.Token(a, e.tokenize(p, n.grammar), "language-" + a, p),
                                                        k = g.substring(m + d.length),
                                                        h = [];
                                                    f && h.push.apply(h, o([f])), h.push(_), k && h.push.apply(h, o([k])), "string" == typeof c ? l.splice.apply(l, [s, 1].concat(h)) : (c.content = h);
                                                }
                                            } else c.content && o(c.content);
                                        }
                                        return l;
                                    })(n.tokens);
                                }
                            },
                        },
                    });
                })(e);
            }
            (e.exports = t), (t.displayName = "markupTemplating"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_liquid.b5695e8a.js.map
