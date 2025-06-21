"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-d2eb5610"],
    {
        735079: (e, t, n) => {
            var r = n(609859);
            e.exports = function (e) {
                return r[e].prototype;
            };
        },
        278945: (e, t, n) => {
            var r = n(23103),
                o = n(265968),
                c = n(277111),
                a = n(910905),
                i = n(341253),
                u = n(735079),
                s = n(609736),
                d = Array,
                l = o(u("Array").sort);
            r(
                { target: "Array", proto: !0 },
                {
                    toSorted: function (e) {
                        void 0 !== e && c(e);
                        var t = a(this),
                            n = i(d, t);
                        return l(n, e);
                    },
                },
            ),
                s("toSorted");
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
                                    var o = ((a = r), (i = btoa(unescape(encodeURIComponent(JSON.stringify(a))))), (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i)), "/*# ".concat(u, " */")),
                                        c = r.sources.map(function (e) {
                                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                                        });
                                    return [n].concat(c).concat([o]).join("\n");
                                }
                                var a, i, u;
                                return [n].join("\n");
                            })(t, e);
                            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
                        }).join("");
                    }),
                    (t.i = function (e, n, r) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var o = {};
                        if (r)
                            for (var c = 0; c < this.length; c++) {
                                var a = this[c][0];
                                null != a && (o[a] = !0);
                            }
                        for (var i = 0; i < e.length; i++) {
                            var u = [].concat(e[i]);
                            (r && o[u[0]]) || (n && (u[2] ? (u[2] = "".concat(n, " and ").concat(u[2])) : (u[2] = n)), t.push(u));
                        }
                    }),
                    t
                );
            };
        },
        46062: (e, t, n) => {
            var r,
                o = function () {
                    return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
                },
                c = (function () {
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
            function i(e) {
                for (var t = -1, n = 0; n < a.length; n++)
                    if (a[n].identifier === e) {
                        t = n;
                        break;
                    }
                return t;
            }
            function u(e, t) {
                for (var n = {}, r = [], o = 0; o < e.length; o++) {
                    var c = e[o],
                        u = t.base ? c[0] + t.base : c[0],
                        s = n[u] || 0,
                        d = "".concat(u, " ").concat(s);
                    n[u] = s + 1;
                    var l = i(d),
                        f = { css: c[1], media: c[2], sourceMap: c[3] };
                    -1 !== l ? (a[l].references++, a[l].updater(f)) : a.push({ identifier: d, updater: m(f, t), references: 1 }), r.push(d);
                }
                return r;
            }
            function s(e) {
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
                    var a = c(e.insert || "head");
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(t);
                }
                return t;
            }
            var d,
                l =
                    ((d = []),
                    function (e, t) {
                        return (d[e] = t), d.filter(Boolean).join("\n");
                    });
            function f(e, t, n, r) {
                var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (e.styleSheet) e.styleSheet.cssText = l(t, o);
                else {
                    var c = document.createTextNode(o),
                        a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(c, a[t]) : e.appendChild(c);
                }
            }
            function p(e, t, n) {
                var r = n.css,
                    o = n.media,
                    c = n.sourceMap;
                if ((o ? e.setAttribute("media", o) : e.removeAttribute("media"), c && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c)))), " */")), e.styleSheet)) e.styleSheet.cssText = r;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r));
                }
            }
            var v = null,
                h = 0;
            function m(e, t) {
                var n, r, o;
                if (t.singleton) {
                    var c = h++;
                    (n = v || (v = s(t))), (r = f.bind(null, n, c, !1)), (o = f.bind(null, n, c, !0));
                } else
                    (n = s(t)),
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
                var n = u((e = e || []), t);
                return function (e) {
                    if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
                        for (var r = 0; r < n.length; r++) {
                            var o = i(n[r]);
                            a[o].references--;
                        }
                        for (var c = u(e, t), s = 0; s < n.length; s++) {
                            var d = i(n[s]);
                            0 === a[d].references && (a[d].updater(), a.splice(d, 1));
                        }
                        n = c;
                    }
                };
            };
        },
        199237: (e, t, n) => {
            n.d(t, { fC: () => k, bU: () => _ });
            var r = n(202784),
                o = n(717998),
                c = n(262656),
                a = n(552322);
            function i(...e) {
                const t = e[0];
                if (1 === e.length) return t;
                const n = () => {
                    const n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                    return function (e) {
                        const o = n.reduce((t, { useScope: n, scopeName: r }) => ({ ...t, ...n(e)[`__scope${r}`] }), {});
                        return r.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
                    };
                };
                return (n.scopeName = t.scopeName), n;
            }
            var u = n(387695),
                s = n(890022),
                d = n(335019),
                l = n(172714),
                f = "Switch",
                [p, v] = (function (e, t = []) {
                    let n = [];
                    const o = () => {
                        const t = n.map((e) => r.createContext(e));
                        return function (n) {
                            const o = n?.[e] || t;
                            return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
                        };
                    };
                    return (
                        (o.scopeName = e),
                        [
                            function (t, o) {
                                const c = r.createContext(o),
                                    i = n.length;
                                function u(t) {
                                    const { scope: n, children: o, ...u } = t,
                                        s = n?.[e][i] || c,
                                        d = r.useMemo(() => u, Object.values(u));
                                    return (0, a.jsx)(s.Provider, { value: d, children: o });
                                }
                                return (
                                    (n = [...n, o]),
                                    (u.displayName = t + "Provider"),
                                    [
                                        u,
                                        function (n, a) {
                                            const u = a?.[e][i] || c,
                                                s = r.useContext(u);
                                            if (s) return s;
                                            if (void 0 !== o) return o;
                                            throw new Error(`\`${n}\` must be used within \`${t}\``);
                                        },
                                    ]
                                );
                            },
                            i(o, ...t),
                        ]
                    );
                })(f),
                [h, m] = p(f),
                b = r.forwardRef((e, t) => {
                    const { __scopeSwitch: n, name: i, checked: s, defaultChecked: d, required: f, disabled: p, value: v = "on", onCheckedChange: m, ...b } = e,
                        [y, g] = r.useState(null),
                        k = (0, c.e)(t, (e) => g(e)),
                        _ = r.useRef(!1),
                        M = !y || Boolean(y.closest("form")),
                        [S = !1, j] = (0, u.T)({ prop: s, defaultProp: d, onChange: m });
                    return (0, a.jsxs)(h, {
                        scope: n,
                        checked: S,
                        disabled: p,
                        children: [
                            (0, a.jsx)(l.WV.button, {
                                type: "button",
                                role: "switch",
                                "aria-checked": S,
                                "aria-required": f,
                                "data-state": C(S),
                                "data-disabled": p ? "" : void 0,
                                disabled: p,
                                value: v,
                                ...b,
                                ref: k,
                                onClick: (0, o.M)(e.onClick, (e) => {
                                    j((e) => !e), M && ((_.current = e.isPropagationStopped()), _.current || e.stopPropagation());
                                }),
                            }),
                            M && (0, a.jsx)(w, { control: y, bubbles: !_.current, name: i, value: v, checked: S, required: f, disabled: p, style: { transform: "translateX(-100%)" } }),
                        ],
                    });
                });
            b.displayName = f;
            var y = "SwitchThumb",
                g = r.forwardRef((e, t) => {
                    const { __scopeSwitch: n, ...r } = e,
                        o = m(y, n);
                    return (0, a.jsx)(l.WV.span, { "data-state": C(o.checked), "data-disabled": o.disabled ? "" : void 0, ...r, ref: t });
                });
            g.displayName = y;
            var w = (e) => {
                const { control: t, checked: n, bubbles: o = !0, ...c } = e,
                    i = r.useRef(null),
                    u = (0, s.D)(n),
                    l = (0, d.t)(t);
                return (
                    r.useEffect(() => {
                        const e = i.current,
                            t = window.HTMLInputElement.prototype,
                            r = Object.getOwnPropertyDescriptor(t, "checked").set;
                        if (u !== n && r) {
                            const t = new Event("click", { bubbles: o });
                            r.call(e, n), e.dispatchEvent(t);
                        }
                    }, [u, n, o]),
                    (0, a.jsx)("input", { type: "checkbox", "aria-hidden": !0, defaultChecked: n, ...c, tabIndex: -1, ref: i, style: { ...e.style, ...l, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } })
                );
            };
            function C(e) {
                return e ? "checked" : "unchecked";
            }
            var k = b,
                _ = g;
        },
        890022: (e, t, n) => {
            n.d(t, { D: () => o });
            var r = n(202784);
            function o(e) {
                const t = r.useRef({ value: e, previous: e });
                return r.useMemo(() => (t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)), t.current.previous), [e]);
            }
        },
        840489: (e, t, n) => {
            function r(e) {
                var t,
                    n,
                    o = "";
                if ("string" == typeof e || "number" == typeof e) o += e;
                else if ("object" == typeof e)
                    if (Array.isArray(e)) {
                        var c = e.length;
                        for (t = 0; t < c; t++) e[t] && (n = r(e[t])) && (o && (o += " "), (o += n));
                    } else for (n in e) e[n] && (o && (o += " "), (o += n));
                return o;
            }
            function o() {
                for (var e, t, n = 0, o = "", c = arguments.length; n < c; n++) (e = arguments[n]) && (t = r(e)) && (o && (o += " "), (o += t));
                return o;
            }
            n.d(t, { W: () => o, Z: () => c });
            const c = o;
        },
        787321: (e, t, n) => {
            function r(e) {
                return (t) => {
                    const n = (e ? Math[e] : Math.trunc)(t);
                    return 0 === n ? 0 : n;
                };
            }
            n.d(t, { u: () => r });
        },
        699629: (e, t, n) => {
            n.d(t, { A: () => a });
            var r = n(787321),
                o = n(31418),
                c = n(641645);
            function a(e, t, n) {
                const a = (0, c._)(e, t) / o.vh;
                return (0, r.u)(n?.roundingMethod)(a);
            }
        },
        641645: (e, t, n) => {
            n.d(t, { _: () => o });
            var r = n(150729);
            function o(e, t) {
                return +(0, r.Q)(e) - +(0, r.Q)(t);
            }
        },
        534002: (e, t, n) => {
            n.d(t, { X: () => a });
            var r = n(787321),
                o = n(31418),
                c = n(641645);
            function a(e, t, n) {
                const a = (0, c._)(e, t) / o.yJ;
                return (0, r.u)(n?.roundingMethod)(a);
            }
        },
        624656: (e, t, n) => {
            n.d(t, { c: () => c });
            var r = n(787321),
                o = n(641645);
            function c(e, t, n) {
                const c = (0, o._)(e, t) / 1e3;
                return (0, r.u)(n?.roundingMethod)(c);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-d2eb5610.07865d8a.js.map
