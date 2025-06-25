"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.CodeBlock-354a642d"],
    {
        73210: (c, t, n) => {
            n.d(t, { Z: () => k });
            var e = n(459740),
                a = n(238777),
                o = n(256666),
                r = n(202784),
                i = n(807896);
            function l(c, t) {
                var n = Object.keys(c);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(c);
                    t &&
                        (e = e.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(c, t).enumerable;
                        })),
                        n.push.apply(n, e);
                }
                return n;
            }
            function s(c) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? l(Object(n), !0).forEach(function (t) {
                              (0, o.Z)(c, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(n))
                          : l(Object(n)).forEach(function (t) {
                                Object.defineProperty(c, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                }
                return c;
            }
            var u = {};
            function p(c) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return (function (c) {
                    if (0 === c.length || 1 === c.length) return c;
                    var t,
                        n,
                        e = c.join(".");
                    return (
                        u[e] ||
                            (u[e] =
                                0 === (n = (t = c).length) || 1 === n
                                    ? t
                                    : 2 === n
                                      ? [t[0], t[1], "".concat(t[0], ".").concat(t[1]), "".concat(t[1], ".").concat(t[0])]
                                      : 3 === n
                                        ? [t[0], t[1], t[2], "".concat(t[0], ".").concat(t[1]), "".concat(t[0], ".").concat(t[2]), "".concat(t[1], ".").concat(t[0]), "".concat(t[1], ".").concat(t[2]), "".concat(t[2], ".").concat(t[0]), "".concat(t[2], ".").concat(t[1]), "".concat(t[0], ".").concat(t[1], ".").concat(t[2]), "".concat(t[0], ".").concat(t[2], ".").concat(t[1]), "".concat(t[1], ".").concat(t[0], ".").concat(t[2]), "".concat(t[1], ".").concat(t[2], ".").concat(t[0]), "".concat(t[2], ".").concat(t[0], ".").concat(t[1]), "".concat(t[2], ".").concat(t[1], ".").concat(t[0])]
                                        : n >= 4
                                          ? [
                                                t[0],
                                                t[1],
                                                t[2],
                                                t[3],
                                                "".concat(t[0], ".").concat(t[1]),
                                                "".concat(t[0], ".").concat(t[2]),
                                                "".concat(t[0], ".").concat(t[3]),
                                                "".concat(t[1], ".").concat(t[0]),
                                                "".concat(t[1], ".").concat(t[2]),
                                                "".concat(t[1], ".").concat(t[3]),
                                                "".concat(t[2], ".").concat(t[0]),
                                                "".concat(t[2], ".").concat(t[1]),
                                                "".concat(t[2], ".").concat(t[3]),
                                                "".concat(t[3], ".").concat(t[0]),
                                                "".concat(t[3], ".").concat(t[1]),
                                                "".concat(t[3], ".").concat(t[2]),
                                                "".concat(t[0], ".").concat(t[1], ".").concat(t[2]),
                                                "".concat(t[0], ".").concat(t[1], ".").concat(t[3]),
                                                "".concat(t[0], ".").concat(t[2], ".").concat(t[1]),
                                                "".concat(t[0], ".").concat(t[2], ".").concat(t[3]),
                                                "".concat(t[0], ".").concat(t[3], ".").concat(t[1]),
                                                "".concat(t[0], ".").concat(t[3], ".").concat(t[2]),
                                                "".concat(t[1], ".").concat(t[0], ".").concat(t[2]),
                                                "".concat(t[1], ".").concat(t[0], ".").concat(t[3]),
                                                "".concat(t[1], ".").concat(t[2], ".").concat(t[0]),
                                                "".concat(t[1], ".").concat(t[2], ".").concat(t[3]),
                                                "".concat(t[1], ".").concat(t[3], ".").concat(t[0]),
                                                "".concat(t[1], ".").concat(t[3], ".").concat(t[2]),
                                                "".concat(t[2], ".").concat(t[0], ".").concat(t[1]),
                                                "".concat(t[2], ".").concat(t[0], ".").concat(t[3]),
                                                "".concat(t[2], ".").concat(t[1], ".").concat(t[0]),
                                                "".concat(t[2], ".").concat(t[1], ".").concat(t[3]),
                                                "".concat(t[2], ".").concat(t[3], ".").concat(t[0]),
                                                "".concat(t[2], ".").concat(t[3], ".").concat(t[1]),
                                                "".concat(t[3], ".").concat(t[0], ".").concat(t[1]),
                                                "".concat(t[3], ".").concat(t[0], ".").concat(t[2]),
                                                "".concat(t[3], ".").concat(t[1], ".").concat(t[0]),
                                                "".concat(t[3], ".").concat(t[1], ".").concat(t[2]),
                                                "".concat(t[3], ".").concat(t[2], ".").concat(t[0]),
                                                "".concat(t[3], ".").concat(t[2], ".").concat(t[1]),
                                                "".concat(t[0], ".").concat(t[1], ".").concat(t[2], ".").concat(t[3]),
                                                "".concat(t[0], ".").concat(t[1], ".").concat(t[3], ".").concat(t[2]),
                                                "".concat(t[0], ".").concat(t[2], ".").concat(t[1], ".").concat(t[3]),
                                                "".concat(t[0], ".").concat(t[2], ".").concat(t[3], ".").concat(t[1]),
                                                "".concat(t[0], ".").concat(t[3], ".").concat(t[1], ".").concat(t[2]),
                                                "".concat(t[0], ".").concat(t[3], ".").concat(t[2], ".").concat(t[1]),
                                                "".concat(t[1], ".").concat(t[0], ".").concat(t[2], ".").concat(t[3]),
                                                "".concat(t[1], ".").concat(t[0], ".").concat(t[3], ".").concat(t[2]),
                                                "".concat(t[1], ".").concat(t[2], ".").concat(t[0], ".").concat(t[3]),
                                                "".concat(t[1], ".").concat(t[2], ".").concat(t[3], ".").concat(t[0]),
                                                "".concat(t[1], ".").concat(t[3], ".").concat(t[0], ".").concat(t[2]),
                                                "".concat(t[1], ".").concat(t[3], ".").concat(t[2], ".").concat(t[0]),
                                                "".concat(t[2], ".").concat(t[0], ".").concat(t[1], ".").concat(t[3]),
                                                "".concat(t[2], ".").concat(t[0], ".").concat(t[3], ".").concat(t[1]),
                                                "".concat(t[2], ".").concat(t[1], ".").concat(t[0], ".").concat(t[3]),
                                                "".concat(t[2], ".").concat(t[1], ".").concat(t[3], ".").concat(t[0]),
                                                "".concat(t[2], ".").concat(t[3], ".").concat(t[0], ".").concat(t[1]),
                                                "".concat(t[2], ".").concat(t[3], ".").concat(t[1], ".").concat(t[0]),
                                                "".concat(t[3], ".").concat(t[0], ".").concat(t[1], ".").concat(t[2]),
                                                "".concat(t[3], ".").concat(t[0], ".").concat(t[2], ".").concat(t[1]),
                                                "".concat(t[3], ".").concat(t[1], ".").concat(t[0], ".").concat(t[2]),
                                                "".concat(t[3], ".").concat(t[1], ".").concat(t[2], ".").concat(t[0]),
                                                "".concat(t[3], ".").concat(t[2], ".").concat(t[0], ".").concat(t[1]),
                                                "".concat(t[3], ".").concat(t[2], ".").concat(t[1], ".").concat(t[0]),
                                            ]
                                          : void 0),
                        u[e]
                    );
                })(
                    c.filter(function (c) {
                        return "token" !== c;
                    }),
                ).reduce(function (c, t) {
                    return s(s({}, c), n[t]);
                }, t);
            }
            function g(c) {
                return c.join(" ");
            }
            function h(c) {
                var t = c.node,
                    n = c.stylesheet,
                    e = c.style,
                    a = void 0 === e ? {} : e,
                    o = c.useInlineStyles,
                    l = c.key,
                    u = t.properties,
                    f = t.type,
                    v = t.tagName,
                    d = t.value;
                if ("text" === f) return d;
                if (v) {
                    var y,
                        m = (function (c, t) {
                            var n = 0;
                            return function (e) {
                                return (
                                    (n += 1),
                                    e.map(function (e, a) {
                                        return h({ node: e, stylesheet: c, useInlineStyles: t, key: "code-segment-".concat(n, "-").concat(a) });
                                    })
                                );
                            };
                        })(n, o);
                    if (o) {
                        var b = Object.keys(n).reduce(function (c, t) {
                                return (
                                    t.split(".").forEach(function (t) {
                                        c.includes(t) || c.push(t);
                                    }),
                                    c
                                );
                            }, []),
                            N = u.className && u.className.includes("token") ? ["token"] : [],
                            O =
                                u.className &&
                                N.concat(
                                    u.className.filter(function (c) {
                                        return !b.includes(c);
                                    }),
                                );
                        y = s(s({}, u), {}, { className: g(O) || void 0, style: p(u.className, Object.assign({}, u.style, a), n) });
                    } else y = s(s({}, u), {}, { className: g(u.className) });
                    var w = m(t.children);
                    return r.createElement(v, (0, i.Z)({ key: l }, y), w);
                }
            }
            var f = n(892961),
                v = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
            function d(c, t) {
                var n = Object.keys(c);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(c);
                    t &&
                        (e = e.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(c, t).enumerable;
                        })),
                        n.push.apply(n, e);
                }
                return n;
            }
            function y(c) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? d(Object(n), !0).forEach(function (t) {
                              (0, o.Z)(c, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(n))
                          : d(Object(n)).forEach(function (t) {
                                Object.defineProperty(c, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                }
                return c;
            }
            var m = /\n/g;
            function b(c) {
                var t = c.codeString,
                    n = c.codeStyle,
                    e = c.containerStyle,
                    a = void 0 === e ? { float: "left", paddingRight: "10px" } : e,
                    o = c.numberStyle,
                    i = void 0 === o ? {} : o,
                    l = c.startingLineNumber;
                return r.createElement(
                    "code",
                    { style: Object.assign({}, n, a) },
                    (function (c) {
                        var t = c.lines,
                            n = c.startingLineNumber,
                            e = c.style;
                        return t.map(function (c, t) {
                            var a = t + n;
                            return r.createElement("span", { key: "line-".concat(t), className: "react-syntax-highlighter-line-number", style: "function" == typeof e ? e(a) : e }, "".concat(a, "\n"));
                        });
                    })({ lines: t.replace(/\n$/, "").split("\n"), style: i, startingLineNumber: l }),
                );
            }
            function N(c, t) {
                return { type: "element", tagName: "span", properties: { key: "line-number--".concat(c), className: ["comment", "linenumber", "react-syntax-highlighter-line-number"], style: t }, children: [{ type: "text", value: c }] };
            }
            function O(c, t, n) {
                var e,
                    a = { display: "inline-block", minWidth: ((e = n), "".concat(e.toString().length, ".25em")), paddingRight: "1em", textAlign: "right", userSelect: "none" },
                    o = "function" == typeof c ? c(t) : c;
                return y(y({}, a), o);
            }
            function w(c) {
                var t = c.children,
                    n = c.lineNumber,
                    e = c.lineNumberStyle,
                    a = c.largestLineNumber,
                    o = c.showInlineLineNumbers,
                    r = c.lineProps,
                    i = void 0 === r ? {} : r,
                    l = c.className,
                    s = void 0 === l ? [] : l,
                    u = c.showLineNumbers,
                    p = c.wrapLongLines,
                    g = "function" == typeof i ? i(n) : i;
                if (((g.className = s), n && o)) {
                    var h = O(e, n, a);
                    t.unshift(N(n, h));
                }
                return p & u && (g.style = y(y({}, g.style), {}, { display: "flex" })), { type: "element", tagName: "span", properties: g, children: t };
            }
            function j(c) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], e = 0; e < c.length; e++) {
                    var o = c[e];
                    if ("text" === o.type) n.push(w({ children: [o], className: (0, a.Z)(new Set(t)) }));
                    else if (o.children) {
                        var r = t.concat(o.properties.className);
                        j(o.children, r).forEach(function (c) {
                            return n.push(c);
                        });
                    }
                }
                return n;
            }
            function S(c, t, n, e, a, o, r, i, l) {
                var s,
                    u = j(c.value),
                    p = [],
                    g = -1,
                    h = 0;
                function f(c, o) {
                    var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return t || s.length > 0
                        ? (function (c, t) {
                              return w({ children: c, lineNumber: t, lineNumberStyle: i, largestLineNumber: r, showInlineLineNumbers: a, lineProps: n, className: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], showLineNumbers: e, wrapLongLines: l });
                          })(c, o, s)
                        : (function (c, t) {
                              if (e && t && a) {
                                  var n = O(i, t, r);
                                  c.unshift(N(t, n));
                              }
                              return c;
                          })(c, o);
                }
                for (
                    var v = function () {
                        var c = u[h],
                            t = c.children[0].value;
                        if (t.match(m)) {
                            var n = t.split("\n");
                            n.forEach(function (t, a) {
                                var r = e && p.length + o,
                                    i = { type: "text", value: "".concat(t, "\n") };
                                if (0 === a) {
                                    var l = f(u.slice(g + 1, h).concat(w({ children: [i], className: c.properties.className })), r);
                                    p.push(l);
                                } else if (a === n.length - 1) {
                                    var s = u[h + 1] && u[h + 1].children && u[h + 1].children[0],
                                        v = { type: "text", value: "".concat(t) };
                                    if (s) {
                                        var d = w({ children: [v], className: c.properties.className });
                                        u.splice(h + 1, 0, d);
                                    } else {
                                        var y = f([v], r, c.properties.className);
                                        p.push(y);
                                    }
                                } else {
                                    var m = f([i], r, c.properties.className);
                                    p.push(m);
                                }
                            }),
                                (g = h);
                        }
                        h++;
                    };
                    h < u.length;

                )
                    v();
                if (g !== u.length - 1) {
                    var d = u.slice(g + 1, u.length);
                    if (d && d.length) {
                        var y = f(d, e && p.length + o);
                        p.push(y);
                    }
                }
                return t ? p : (s = []).concat.apply(s, p);
            }
            function L(c) {
                var t = c.rows,
                    n = c.stylesheet,
                    e = c.useInlineStyles;
                return t.map(function (c, t) {
                    return h({ node: c, stylesheet: n, useInlineStyles: e, key: "code-segement".concat(t) });
                });
            }
            function P(c) {
                return c && void 0 !== c.highlightAuto;
            }
            function k(c, t) {
                return function (n) {
                    var a = n.language,
                        o = n.children,
                        i = n.style,
                        l = void 0 === i ? t : i,
                        s = n.customStyle,
                        u = void 0 === s ? {} : s,
                        p = n.codeTagProps,
                        g = void 0 === p ? { className: a ? "language-".concat(a) : void 0, style: y(y({}, l['code[class*="language-"]']), l['code[class*="language-'.concat(a, '"]')]) } : p,
                        h = n.useInlineStyles,
                        d = void 0 === h || h,
                        m = n.showLineNumbers,
                        N = void 0 !== m && m,
                        O = n.showInlineLineNumbers,
                        w = void 0 === O || O,
                        j = n.startingLineNumber,
                        k = void 0 === j ? 1 : j,
                        E = n.lineNumberContainerStyle,
                        x = n.lineNumberStyle,
                        I = void 0 === x ? {} : x,
                        C = n.wrapLines,
                        D = n.wrapLongLines,
                        Z = void 0 !== D && D,
                        T = n.lineProps,
                        _ = void 0 === T ? {} : T,
                        A = n.renderer,
                        G = n.PreTag,
                        R = void 0 === G ? "pre" : G,
                        V = n.CodeTag,
                        B = void 0 === V ? "code" : V,
                        W = n.code,
                        $ = void 0 === W ? (Array.isArray(o) ? o[0] : o) || "" : W,
                        q = n.astGenerator,
                        z = (0, e.Z)(n, v);
                    q = q || c;
                    var F = N ? r.createElement(b, { containerStyle: E, codeStyle: g.style || {}, numberStyle: I, startingLineNumber: k, codeString: $ }) : null,
                        H = l.hljs || l['pre[class*="language-"]'] || { backgroundColor: "#fff" },
                        J = P(q) ? "hljs" : "prismjs",
                        K = d ? Object.assign({}, z, { style: Object.assign({}, H, u) }) : Object.assign({}, z, { className: z.className ? "".concat(J, " ").concat(z.className) : J, style: Object.assign({}, u) });
                    if (((g.style = y(y({}, g.style), {}, Z ? { whiteSpace: "pre-wrap" } : { whiteSpace: "pre" })), !q)) return r.createElement(R, K, F, r.createElement(B, g, $));
                    ((void 0 === C && A) || Z) && (C = !0), (A = A || L);
                    var M = [{ type: "text", value: $ }],
                        Q = (function (c) {
                            var t = c.astGenerator,
                                n = c.language,
                                e = c.code,
                                a = c.defaultCodeValue;
                            if (P(t)) {
                                var o = (0, f.Z)(t, n);
                                return "text" === n ? { value: a, language: "text" } : o ? t.highlight(n, e) : t.highlightAuto(e);
                            }
                            try {
                                return n && "text" !== n ? { value: t.highlight(e, n) } : { value: a };
                            } catch (c) {
                                return { value: a };
                            }
                        })({ astGenerator: q, language: a, code: $, defaultCodeValue: M });
                    null === Q.language && (Q.value = M);
                    var U = S(Q, C, _, N, w, k, Q.value.length + k, I, Z);
                    return r.createElement(R, K, r.createElement(B, g, !w && F, A({ rows: U, stylesheet: l, useInlineStyles: d })));
                };
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.CodeBlock-354a642d.e6e0a1ea.js.map
