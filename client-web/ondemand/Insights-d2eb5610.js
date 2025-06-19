"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Insights-d2eb5610"],
    {
        595133: (e, t, n) => {
            n.d(t, { h: () => c });
            var r = n(552322),
                o = n(332161),
                i = n(31674),
                a = n(430962);
            const c = ({ Icon: e, beta: t = !0, children: n, className: c, title: s }) => {
                const { business: u } = (0, a.M1)();
                return (0, r.jsxs)("div", { className: (0, i.cn)("hidden items-center md:flex md:justify-between max-md:[&:has(>:only-child)]:justify-center max-md:[&:not(:has(>:only-child))]:justify-between", c), children: [(0, r.jsx)("div", { children: s && (0, r.jsxs)("div", { className: "hidden items-center gap-2 md:flex", children: [e, (0, r.jsx)(o.x, { weight: "extrabold", size: "title4", children: s }), t && (0, r.jsx)("div", { className: "bg-gray-0 flex h-6 items-center gap-1 rounded border px-2", children: (0, r.jsx)(o.x, { size: "subtext3", weight: "normal", children: u.earlyBetaAccess }) })] }) }), n] });
            };
        },
        482609: (e) => {
            e.exports = function (e) {
                var t = [];
                return (
                    (t.toString = function () {
                        return this.map(function (t) {
                            var n = (function (e, t) {
                                var n = e[1] || "",
                                    r = e[3];
                                if (!r) return n;
                                if (t && "function" == typeof btoa) {
                                    var o = ((a = r), (c = btoa(unescape(encodeURIComponent(JSON.stringify(a))))), (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c)), "/*# ".concat(s, " */")),
                                        i = r.sources.map(function (e) {
                                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                                        });
                                    return [n].concat(i).concat([o]).join("\n");
                                }
                                var a, c, s;
                                return [n].join("\n");
                            })(t, e);
                            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
                        }).join("");
                    }),
                    (t.i = function (e, n, r) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var o = {};
                        if (r)
                            for (var i = 0; i < this.length; i++) {
                                var a = this[i][0];
                                null != a && (o[a] = !0);
                            }
                        for (var c = 0; c < e.length; c++) {
                            var s = [].concat(e[c]);
                            (r && o[s[0]]) || (n && (s[2] ? (s[2] = "".concat(n, " and ").concat(s[2])) : (s[2] = n)), t.push(s));
                        }
                    }),
                    t
                );
            };
        },
        89613: (e, t, n) => {
            function r(e) {
                return e && "object" == typeof e && "default" in e ? e.default : e;
            }
            var o = n(107267),
                i = r(n(202784)),
                a = n(526702);
            n(213980), n(355518);
            var c = r(n(161898));
            function s() {
                return (s =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function u(e, t) {
                (e.prototype = Object.create(t.prototype)), ((e.prototype.constructor = e).__proto__ = t);
            }
            function l(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    o = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
                return o;
            }
            var f = (function (e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return ((t = e.call.apply(e, [this].concat(r)) || this).history = a.createBrowserHistory(t.props)), t;
                    }
                    return (
                        u(t, e),
                        (t.prototype.render = function () {
                            return i.createElement(o.Router, { history: this.history, children: this.props.children });
                        }),
                        t
                    );
                })(i.Component),
                d = (function (e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return ((t = e.call.apply(e, [this].concat(r)) || this).history = a.createHashHistory(t.props)), t;
                    }
                    return (
                        u(t, e),
                        (t.prototype.render = function () {
                            return i.createElement(o.Router, { history: this.history, children: this.props.children });
                        }),
                        t
                    );
                })(i.Component),
                p = function (e, t) {
                    return "function" == typeof e ? e(t) : e;
                },
                h = function (e, t) {
                    return "string" == typeof e ? a.createLocation(e, null, null, t) : e;
                },
                v = function (e) {
                    return e;
                },
                m = i.forwardRef;
            void 0 === m && (m = v);
            var y = m(function (e, t) {
                    var n = e.innerRef,
                        r = e.navigate,
                        o = e.onClick,
                        a = l(e, ["innerRef", "navigate", "onClick"]),
                        c = a.target,
                        u = s({}, a, {
                            onClick: function (e) {
                                try {
                                    o && o(e);
                                } catch (t) {
                                    throw (e.preventDefault(), t);
                                }
                                e.defaultPrevented ||
                                    0 !== e.button ||
                                    (c && "_self" !== c) ||
                                    (function (e) {
                                        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                                    })(e) ||
                                    (e.preventDefault(), r());
                            },
                        });
                    return (u.ref = (v !== m && t) || n), i.createElement("a", u);
                }),
                b = m(function (e, t) {
                    var n = e.component,
                        r = void 0 === n ? y : n,
                        a = e.replace,
                        u = e.to,
                        f = e.innerRef,
                        d = l(e, ["component", "replace", "to", "innerRef"]);
                    return i.createElement(o.__RouterContext.Consumer, null, function (e) {
                        e || c(!1);
                        var n = e.history,
                            o = h(p(u, e.location), e.location),
                            l = o ? n.createHref(o) : "",
                            y = s({}, d, {
                                href: l,
                                navigate: function () {
                                    var t = p(u, e.location);
                                    (a ? n.replace : n.push)(t);
                                },
                            });
                        return v !== m ? (y.ref = t || f) : (y.innerRef = f), i.createElement(r, y);
                    });
                }),
                g = function (e) {
                    return e;
                },
                w = i.forwardRef;
            void 0 === w && (w = g);
            var j = w(function (e, t) {
                var n = e["aria-current"],
                    r = void 0 === n ? "page" : n,
                    a = e.activeClassName,
                    u = void 0 === a ? "active" : a,
                    f = e.activeStyle,
                    d = e.className,
                    v = e.exact,
                    m = e.isActive,
                    y = e.location,
                    j = e.sensitive,
                    x = e.strict,
                    C = e.style,
                    R = e.to,
                    N = e.innerRef,
                    _ = l(e, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
                return i.createElement(o.__RouterContext.Consumer, null, function (e) {
                    e || c(!1);
                    var n = y || e.location,
                        a = h(p(R, n), n),
                        l = a.pathname,
                        O = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
                        S = O ? o.matchPath(n.pathname, { path: O, exact: v, sensitive: j, strict: x }) : null,
                        E = !!(m ? m(S, n) : S),
                        k = E
                            ? (function () {
                                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                  return t
                                      .filter(function (e) {
                                          return e;
                                      })
                                      .join(" ");
                              })(d, u)
                            : d,
                        A = E ? s({}, C, {}, f) : C,
                        M = s({ "aria-current": (E && r) || null, className: k, style: A, to: a }, _);
                    return g !== w ? (M.ref = t || N) : (M.innerRef = N), i.createElement(b, M);
                });
            });
            Object.defineProperty(t, "UO", {
                enumerable: !0,
                get: function () {
                    return o.useParams;
                },
            });
        },
        46062: (e, t, n) => {
            var r,
                o = function () {
                    return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
                },
                i = (function () {
                    var e = {};
                    return function (t) {
                        if (void 0 === e[t]) {
                            var n = document.querySelector(t);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                try {
                                    n = n.contentDocument.head;
                                } catch (e) {
                                    n = null;
                                }
                            e[t] = n;
                        }
                        return e[t];
                    };
                })(),
                a = [];
            function c(e) {
                for (var t = -1, n = 0; n < a.length; n++)
                    if (a[n].identifier === e) {
                        t = n;
                        break;
                    }
                return t;
            }
            function s(e, t) {
                for (var n = {}, r = [], o = 0; o < e.length; o++) {
                    var i = e[o],
                        s = t.base ? i[0] + t.base : i[0],
                        u = n[s] || 0,
                        l = "".concat(s, " ").concat(u);
                    n[s] = u + 1;
                    var f = c(l),
                        d = { css: i[1], media: i[2], sourceMap: i[3] };
                    -1 !== f ? (a[f].references++, a[f].updater(d)) : a.push({ identifier: l, updater: m(d, t), references: 1 }), r.push(l);
                }
                return r;
            }
            function u(e) {
                var t = document.createElement("style"),
                    r = e.attributes || {};
                if (void 0 === r.nonce) {
                    var o = n.nc;
                    o && (r.nonce = o);
                }
                if (
                    (Object.keys(r).forEach(function (e) {
                        t.setAttribute(e, r[e]);
                    }),
                    "function" == typeof e.insert)
                )
                    e.insert(t);
                else {
                    var a = i(e.insert || "head");
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(t);
                }
                return t;
            }
            var l,
                f =
                    ((l = []),
                    function (e, t) {
                        return (l[e] = t), l.filter(Boolean).join("\n");
                    });
            function d(e, t, n, r) {
                var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (e.styleSheet) e.styleSheet.cssText = f(t, o);
                else {
                    var i = document.createTextNode(o),
                        a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
                }
            }
            function p(e, t, n) {
                var r = n.css,
                    o = n.media,
                    i = n.sourceMap;
                if ((o ? e.setAttribute("media", o) : e.removeAttribute("media"), i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet)) e.styleSheet.cssText = r;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r));
                }
            }
            var h = null,
                v = 0;
            function m(e, t) {
                var n, r, o;
                if (t.singleton) {
                    var i = v++;
                    (n = h || (h = u(t))), (r = d.bind(null, n, i, !1)), (o = d.bind(null, n, i, !0));
                } else
                    (n = u(t)),
                        (r = p.bind(null, n, t)),
                        (o = function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(n);
                        });
                return (
                    r(e),
                    function (t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                            r((e = t));
                        } else o();
                    }
                );
            }
            e.exports = function (e, t) {
                (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = o());
                var n = s((e = e || []), t);
                return function (e) {
                    if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
                        for (var r = 0; r < n.length; r++) {
                            var o = c(n[r]);
                            a[o].references--;
                        }
                        for (var i = s(e, t), u = 0; u < n.length; u++) {
                            var l = c(n[u]);
                            0 === a[l].references && (a[l].updater(), a.splice(l, 1));
                        }
                        n = i;
                    }
                };
            };
        },
        355518: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            const r = function (e, t) {};
        },
        595873: (e, t, n) => {
            function r(e, t) {
                return e instanceof Date ? new e.constructor(t) : new Date(t);
            }
            n.d(t, { L: () => r });
        },
        947727: (e, t, n) => {
            n.d(t, { T: () => o });
            var r = n(150729);
            function o(e) {
                const t = (0, r.Q)(e);
                return t.setMinutes(59, 59, 999), t;
            }
        },
        150729: (e, t, n) => {
            function r(e) {
                const t = Object.prototype.toString.call(e);
                return e instanceof Date || ("object" == typeof e && "[object Date]" === t) ? new e.constructor(+e) : "number" == typeof e || "[object Number]" === t || "string" == typeof e || "[object String]" === t ? new Date(e) : new Date(NaN);
            }
            n.d(t, { Q: () => r });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Insights-d2eb5610.6e4267da.js.map
