"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-27545368"],
    {
        495346: (e, n, t) => {
            t.d(n, { Av: () => i, pF: () => r, xv: () => a, zi: () => o });
            var r = "right-scroll-bar-position",
                o = "width-before-scroll-bar",
                a = "with-scroll-bars-hidden",
                i = "--removed-body-scroll-bar-size";
        },
        894200: (e, n, t) => {
            t.d(n, { jp: () => v });
            var r = t(202784),
                o = t(633097),
                a = t(495346),
                i = { left: 0, top: 0, right: 0, gap: 0 },
                c = function (e) {
                    return parseInt(e || "", 10) || 0;
                },
                u = function (e) {
                    if ((void 0 === e && (e = "margin"), "undefined" == typeof window)) return i;
                    var n = (function (e) {
                            var n = window.getComputedStyle(document.body),
                                t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                                r = n["padding" === e ? "paddingTop" : "marginTop"],
                                o = n["padding" === e ? "paddingRight" : "marginRight"];
                            return [c(t), c(r), c(o)];
                        })(e),
                        t = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return { left: n[0], top: n[1], right: n[2], gap: Math.max(0, r - t + n[2] - n[0]) };
                },
                l = (0, o.Ws)(),
                d = "data-scroll-locked",
                s = function (e, n, t, r) {
                    var o = e.left,
                        i = e.top,
                        c = e.right,
                        u = e.gap;
                    return (
                        void 0 === t && (t = "margin"),
                        "\n  ."
                            .concat(a.xv, " {\n   overflow: hidden ")
                            .concat(r, ";\n   padding-right: ")
                            .concat(u, "px ")
                            .concat(r, ";\n  }\n  body[")
                            .concat(d, "] {\n    overflow: hidden ")
                            .concat(r, ";\n    overscroll-behavior: contain;\n    ")
                            .concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(c, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(u, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .")
                            .concat(a.pF, " {\n    right: ")
                            .concat(u, "px ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(a.zi, " {\n    margin-right: ")
                            .concat(u, "px ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(a.pF, " .")
                            .concat(a.pF, " {\n    right: 0 ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(a.zi, " .")
                            .concat(a.zi, " {\n    margin-right: 0 ")
                            .concat(r, ";\n  }\n  \n  body[")
                            .concat(d, "] {\n    ")
                            .concat(a.Av, ": ")
                            .concat(u, "px;\n  }\n")
                    );
                },
                f = function () {
                    var e = parseInt(document.body.getAttribute(d) || "0", 10);
                    return isFinite(e) ? e : 0;
                },
                v = function (e) {
                    var n = e.noRelative,
                        t = e.noImportant,
                        o = e.gapMode,
                        a = void 0 === o ? "margin" : o;
                    r.useEffect(function () {
                        return (
                            document.body.setAttribute(d, (f() + 1).toString()),
                            function () {
                                var e = f() - 1;
                                e <= 0 ? document.body.removeAttribute(d) : document.body.setAttribute(d, e.toString());
                            }
                        );
                    }, []);
                    var i = r.useMemo(
                        function () {
                            return u(a);
                        },
                        [a],
                    );
                    return r.createElement(l, { styles: s(i, !n, a, t ? "" : "!important") });
                };
        },
        234413: (e, n, t) => {
            t.d(n, { Z: () => N });
            var r = t(305163),
                o = t(202784),
                a = t(495346),
                i = t(287359),
                c = (0, t(964597)._)(),
                u = function () {},
                l = o.forwardRef(function (e, n) {
                    var t = o.useRef(null),
                        a = o.useState({ onScrollCapture: u, onWheelCapture: u, onTouchMoveCapture: u }),
                        l = a[0],
                        d = a[1],
                        s = e.forwardProps,
                        f = e.children,
                        v = e.className,
                        h = e.removeScrollBar,
                        p = e.enabled,
                        m = e.shards,
                        g = e.sideCar,
                        b = e.noIsolation,
                        w = e.inert,
                        y = e.allowPinchZoom,
                        C = e.as,
                        E = void 0 === C ? "div" : C,
                        S = e.gapMode,
                        k = (0, r._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        R = g,
                        T = (0, i.q)([t, n]),
                        M = (0, r.pi)((0, r.pi)({}, k), l);
                    return o.createElement(o.Fragment, null, p && o.createElement(R, { sideCar: c, removeScrollBar: h, shards: m, noIsolation: b, inert: w, setCallbacks: d, allowPinchZoom: !!y, lockRef: t, gapMode: S }), s ? o.cloneElement(o.Children.only(f), (0, r.pi)((0, r.pi)({}, M), { ref: T })) : o.createElement(E, (0, r.pi)({}, M, { className: v, ref: T }), f));
                });
            (l.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (l.classNames = { fullWidth: a.zi, zeroRight: a.pF });
            var d = t(757758),
                s = t(894200),
                f = t(633097),
                v = !1;
            if ("undefined" != typeof window)
                try {
                    var h = Object.defineProperty({}, "passive", {
                        get: function () {
                            return (v = !0), !0;
                        },
                    });
                    window.addEventListener("test", h, h), window.removeEventListener("test", h, h);
                } catch (e) {
                    v = !1;
                }
            var p = !!v && { passive: !1 },
                m = function (e, n) {
                    var t = window.getComputedStyle(e);
                    return (
                        "hidden" !== t[n] &&
                        !(
                            t.overflowY === t.overflowX &&
                            !(function (e) {
                                return "TEXTAREA" === e.tagName;
                            })(e) &&
                            "visible" === t[n]
                        )
                    );
                },
                g = function (e, n) {
                    var t = n.ownerDocument,
                        r = n;
                    do {
                        if (("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), b(e, r))) {
                            var o = w(e, r);
                            if (o[1] > o[2]) return !0;
                        }
                        r = r.parentNode;
                    } while (r && r !== t.body);
                    return !1;
                },
                b = function (e, n) {
                    return "v" === e
                        ? (function (e) {
                              return m(e, "overflowY");
                          })(n)
                        : (function (e) {
                              return m(e, "overflowX");
                          })(n);
                },
                w = function (e, n) {
                    return "v" === e
                        ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight]
                        : (function (e) {
                              return [e.scrollLeft, e.scrollWidth, e.clientWidth];
                          })(n);
                    var t;
                },
                y = function (e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                },
                C = function (e) {
                    return [e.deltaX, e.deltaY];
                },
                E = function (e) {
                    return e && "current" in e ? e.current : e;
                },
                S = function (e) {
                    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
                },
                k = 0,
                R = [];
            function T(e) {
                for (var n = null; null !== e; ) e instanceof ShadowRoot && ((n = e.host), (e = e.host)), (e = e.parentNode);
                return n;
            }
            const M = (0, d.L)(c, function (e) {
                var n = o.useRef([]),
                    t = o.useRef([0, 0]),
                    a = o.useRef(),
                    i = o.useState(k++)[0],
                    c = o.useState(f.Ws)[0],
                    u = o.useRef(e);
                o.useEffect(
                    function () {
                        u.current = e;
                    },
                    [e],
                ),
                    o.useEffect(
                        function () {
                            if (e.inert) {
                                document.body.classList.add("block-interactivity-".concat(i));
                                var n = (0, r.ev)([e.lockRef.current], (e.shards || []).map(E), !0).filter(Boolean);
                                return (
                                    n.forEach(function (e) {
                                        return e.classList.add("allow-interactivity-".concat(i));
                                    }),
                                    function () {
                                        document.body.classList.remove("block-interactivity-".concat(i)),
                                            n.forEach(function (e) {
                                                return e.classList.remove("allow-interactivity-".concat(i));
                                            });
                                    }
                                );
                            }
                        },
                        [e.inert, e.lockRef.current, e.shards],
                    );
                var l = o.useCallback(function (e, n) {
                        if ("touches" in e && 2 === e.touches.length) return !u.current.allowPinchZoom;
                        var r,
                            o = y(e),
                            i = t.current,
                            c = "deltaX" in e ? e.deltaX : i[0] - o[0],
                            l = "deltaY" in e ? e.deltaY : i[1] - o[1],
                            d = e.target,
                            s = Math.abs(c) > Math.abs(l) ? "h" : "v";
                        if ("touches" in e && "h" === s && "range" === d.type) return !1;
                        var f = g(s, d);
                        if (!f) return !0;
                        if ((f ? (r = s) : ((r = "v" === s ? "h" : "v"), (f = g(s, d))), !f)) return !1;
                        if ((!a.current && "changedTouches" in e && (c || l) && (a.current = r), !r)) return !0;
                        var v = a.current || r;
                        return (function (e, n, t, r, o) {
                            var a = (function (e, n) {
                                    return "h" === e && "rtl" === n ? -1 : 1;
                                })(e, window.getComputedStyle(n).direction),
                                i = a * r,
                                c = t.target,
                                u = n.contains(c),
                                l = !1,
                                d = i > 0,
                                s = 0,
                                f = 0;
                            do {
                                var v = w(e, c),
                                    h = v[0],
                                    p = v[1] - v[2] - a * h;
                                (h || p) && b(e, c) && ((s += p), (f += h)), (c = c instanceof ShadowRoot ? c.host : c.parentNode);
                            } while ((!u && c !== document.body) || (u && (n.contains(c) || n === c)));
                            return ((d && ((o && Math.abs(s) < 1) || (!o && i > s))) || (!d && ((o && Math.abs(f) < 1) || (!o && -i > f)))) && (l = !0), l;
                        })(v, n, e, "h" === v ? c : l, !0);
                    }, []),
                    d = o.useCallback(function (e) {
                        var t = e;
                        if (R.length && R[R.length - 1] === c) {
                            var r = "deltaY" in t ? C(t) : y(t),
                                o = n.current.filter(function (e) {
                                    return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && ((n = e.delta), (o = r), n[0] === o[0] && n[1] === o[1]);
                                    var n, o;
                                })[0];
                            if (o && o.should) t.cancelable && t.preventDefault();
                            else if (!o) {
                                var a = (u.current.shards || [])
                                    .map(E)
                                    .filter(Boolean)
                                    .filter(function (e) {
                                        return e.contains(t.target);
                                    });
                                (a.length > 0 ? l(t, a[0]) : !u.current.noIsolation) && t.cancelable && t.preventDefault();
                            }
                        }
                    }, []),
                    v = o.useCallback(function (e, t, r, o) {
                        var a = { name: e, delta: t, target: r, should: o, shadowParent: T(r) };
                        n.current.push(a),
                            setTimeout(function () {
                                n.current = n.current.filter(function (e) {
                                    return e !== a;
                                });
                            }, 1);
                    }, []),
                    h = o.useCallback(function (e) {
                        (t.current = y(e)), (a.current = void 0);
                    }, []),
                    m = o.useCallback(function (n) {
                        v(n.type, C(n), n.target, l(n, e.lockRef.current));
                    }, []),
                    M = o.useCallback(function (n) {
                        v(n.type, y(n), n.target, l(n, e.lockRef.current));
                    }, []);
                o.useEffect(function () {
                    return (
                        R.push(c),
                        e.setCallbacks({ onScrollCapture: m, onWheelCapture: m, onTouchMoveCapture: M }),
                        document.addEventListener("wheel", d, p),
                        document.addEventListener("touchmove", d, p),
                        document.addEventListener("touchstart", h, p),
                        function () {
                            (R = R.filter(function (e) {
                                return e !== c;
                            })),
                                document.removeEventListener("wheel", d, p),
                                document.removeEventListener("touchmove", d, p),
                                document.removeEventListener("touchstart", h, p);
                        }
                    );
                }, []);
                var x = e.removeScrollBar,
                    N = e.inert;
                return o.createElement(o.Fragment, null, N ? o.createElement(c, { styles: S(i) }) : null, x ? o.createElement(s.jp, { gapMode: e.gapMode }) : null);
            });
            var x = o.forwardRef(function (e, n) {
                return o.createElement(l, (0, r.pi)({}, e, { ref: n, sideCar: M }));
            });
            x.classNames = l.classNames;
            const N = x;
        },
        633097: (e, n, t) => {
            t.d(n, { Ws: () => i });
            var r = t(202784),
                o = t(250132);
            var a = function () {
                    var e = 0,
                        n = null;
                    return {
                        add: function (t) {
                            var r, a;
                            0 == e &&
                                (n = (function () {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var n = (0, o.V)();
                                    return n && e.setAttribute("nonce", n), e;
                                })()) &&
                                ((a = t),
                                (r = n).styleSheet ? (r.styleSheet.cssText = a) : r.appendChild(document.createTextNode(a)),
                                (function (e) {
                                    (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
                                })(n)),
                                e++;
                        },
                        remove: function () {
                            !--e && n && (n.parentNode && n.parentNode.removeChild(n), (n = null));
                        },
                    };
                },
                i = function () {
                    var e,
                        n =
                            ((e = a()),
                            function (n, t) {
                                r.useEffect(
                                    function () {
                                        return (
                                            e.add(n),
                                            function () {
                                                e.remove();
                                            }
                                        );
                                    },
                                    [n && t],
                                );
                            });
                    return function (e) {
                        var t = e.styles,
                            r = e.dynamic;
                        return n(t, r), null;
                    };
                };
        },
        46062: (e, n, t) => {
            var r,
                o = function () {
                    return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
                },
                a = (function () {
                    var e = {};
                    return function (n) {
                        if (void 0 === e[n]) {
                            var t = document.querySelector(n);
                            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                                try {
                                    t = t.contentDocument.head;
                                } catch (e) {
                                    t = null;
                                }
                            e[n] = t;
                        }
                        return e[n];
                    };
                })(),
                i = [];
            function c(e) {
                for (var n = -1, t = 0; t < i.length; t++)
                    if (i[t].identifier === e) {
                        n = t;
                        break;
                    }
                return n;
            }
            function u(e, n) {
                for (var t = {}, r = [], o = 0; o < e.length; o++) {
                    var a = e[o],
                        u = n.base ? a[0] + n.base : a[0],
                        l = t[u] || 0,
                        d = "".concat(u, " ").concat(l);
                    t[u] = l + 1;
                    var s = c(d),
                        f = { css: a[1], media: a[2], sourceMap: a[3] };
                    -1 !== s ? (i[s].references++, i[s].updater(f)) : i.push({ identifier: d, updater: m(f, n), references: 1 }), r.push(d);
                }
                return r;
            }
            function l(e) {
                var n = document.createElement("style"),
                    r = e.attributes || {};
                if (void 0 === r.nonce) {
                    var o = t.nc;
                    o && (r.nonce = o);
                }
                if (
                    (Object.keys(r).forEach(function (e) {
                        n.setAttribute(e, r[e]);
                    }),
                    "function" == typeof e.insert)
                )
                    e.insert(n);
                else {
                    var i = a(e.insert || "head");
                    if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    i.appendChild(n);
                }
                return n;
            }
            var d,
                s =
                    ((d = []),
                    function (e, n) {
                        return (d[e] = n), d.filter(Boolean).join("\n");
                    });
            function f(e, n, t, r) {
                var o = t ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (e.styleSheet) e.styleSheet.cssText = s(n, o);
                else {
                    var a = document.createTextNode(o),
                        i = e.childNodes;
                    i[n] && e.removeChild(i[n]), i.length ? e.insertBefore(a, i[n]) : e.appendChild(a);
                }
            }
            function v(e, n, t) {
                var r = t.css,
                    o = t.media,
                    a = t.sourceMap;
                if ((o ? e.setAttribute("media", o) : e.removeAttribute("media"), a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleSheet)) e.styleSheet.cssText = r;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r));
                }
            }
            var h = null,
                p = 0;
            function m(e, n) {
                var t, r, o;
                if (n.singleton) {
                    var a = p++;
                    (t = h || (h = l(n))), (r = f.bind(null, t, a, !1)), (o = f.bind(null, t, a, !0));
                } else
                    (t = l(n)),
                        (r = v.bind(null, t, n)),
                        (o = function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(t);
                        });
                return (
                    r(e),
                    function (n) {
                        if (n) {
                            if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                            r((e = n));
                        } else o();
                    }
                );
            }
            e.exports = function (e, n) {
                (n = n || {}).singleton || "boolean" == typeof n.singleton || (n.singleton = o());
                var t = u((e = e || []), n);
                return function (e) {
                    if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
                        for (var r = 0; r < t.length; r++) {
                            var o = c(t[r]);
                            i[o].references--;
                        }
                        for (var a = u(e, n), l = 0; l < t.length; l++) {
                            var d = c(t[l]);
                            0 === i[d].references && (i[d].updater(), i.splice(d, 1));
                        }
                        t = a;
                    }
                };
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-27545368.4439566a.js.map
