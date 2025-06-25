"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.XChat-11ee3033"],
    {
        760080: (e, t, n) => {
            function r(...e) {
                return (...t) => {
                    for (let n of e) "function" == typeof n && n(...t);
                };
            }
            n.d(t, { t: () => r });
        },
        852053: (e, t, n) => {
            n.d(t, { k: () => o, r: () => r });
            const r = (e) => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document;
                },
                o = (e) => {
                    if (e && "window" in e && e.window === e) return e;
                    return r(e).defaultView || window;
                };
        },
        23296: (e, t, n) => {
            n.d(t, { z: () => u });
            const r = new Set(["id"]),
                o = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
                l = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
                i = /^(data-.*)$/;
            function u(e, t = {}) {
                let { labelable: n, isLink: u, propNames: a } = t,
                    c = {};
                for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (r.has(t) || (n && o.has(t)) || (u && l.has(t)) || (null == a ? void 0 : a.has(t)) || i.test(t)) && (c[t] = e[t]);
                return c;
            }
        },
        454338: (e, t, n) => {
            function r(e) {
                if (
                    (function () {
                        if (null == o) {
                            o = !1;
                            try {
                                document.createElement("div").focus({
                                    get preventScroll() {
                                        return (o = !0), !0;
                                    },
                                });
                            } catch (e) {}
                        }
                        return o;
                    })()
                )
                    e.focus({ preventScroll: !0 });
                else {
                    let t = (function (e) {
                        let t = e.parentNode,
                            n = [],
                            r = document.scrollingElement || document.documentElement;
                        for (; t instanceof HTMLElement && t !== r; ) (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({ element: t, scrollTop: t.scrollTop, scrollLeft: t.scrollLeft }), (t = t.parentNode);
                        r instanceof HTMLElement && n.push({ element: r, scrollTop: r.scrollTop, scrollLeft: r.scrollLeft });
                        return n;
                    })(e);
                    e.focus(),
                        (function (e) {
                            for (let { element: t, scrollTop: n, scrollLeft: r } of e) (t.scrollTop = n), (t.scrollLeft = r);
                        })(t);
                }
            }
            n.d(t, { A: () => r });
            let o = null;
        },
        452772: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(979870);
            function o(e) {
                return !(0 !== e.mozInputSource || !e.isTrusted) || ((0, r.Dt)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
            }
        },
        277108: (e, t, n) => {
            n.d(t, { d: () => i });
            var r = n(760080),
                o = n(238013),
                l = n(840489);
            function i(...e) {
                let t = { ...e[0] };
                for (let n = 1; n < e.length; n++) {
                    let i = e[n];
                    for (let e in i) {
                        let n = t[e],
                            u = i[e];
                        "function" == typeof n && "function" == typeof u && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? (t[e] = (0, r.t)(n, u)) : ("className" !== e && "UNSAFE_className" !== e) || "string" != typeof n || "string" != typeof u ? ("id" === e && n && u ? (t.id = (0, o.ur)(n, u)) : (t[e] = void 0 !== u ? u : n)) : (t[e] = (0, l.Z)(n, u));
                    }
                }
                return t;
            }
        },
        282733: (e, t, n) => {
            function r(...e) {
                return 1 === e.length && e[0]
                    ? e[0]
                    : (t) => {
                          for (let n of e) "function" == typeof n ? n(t) : null != n && (n.current = t);
                      };
            }
            n.d(t, { l: () => r });
        },
        979870: (e, t, n) => {
            function r(e) {
                var t;
                return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t) => e.test(t.brand))) || e.test(window.navigator.userAgent));
            }
            function o(e) {
                var t;
                return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform);
            }
            function l(e) {
                let t = null;
                return () => (null == t && (t = e()), t);
            }
            n.d(t, { Dt: () => f, V5: () => i, gn: () => c });
            const i = l(function () {
                    return o(/^Mac/i);
                }),
                u = l(function () {
                    return o(/^iPhone/i);
                }),
                a = l(function () {
                    return o(/^iPad/i) || (i() && navigator.maxTouchPoints > 1);
                }),
                c = l(function () {
                    return u() || a();
                }),
                d =
                    (l(function () {
                        return i() || c();
                    }),
                    l(function () {
                        return r(/AppleWebKit/i) && !d();
                    }),
                    l(function () {
                        return r(/Chrome/i);
                    })),
                f = l(function () {
                    return r(/Android/i);
                });
            l(function () {
                return r(/Firefox/i);
            });
        },
        309371: (e, t, n) => {
            n.d(t, { Q: () => i });
            let r = new Map(),
                o = new Set();
            function l() {
                if ("undefined" == typeof window) return;
                function e(e) {
                    return "propertyName" in e;
                }
                let t = (n) => {
                    if (!e(n) || !n.target) return;
                    let l = r.get(n.target);
                    if (l && (l.delete(n.propertyName), 0 === l.size && (n.target.removeEventListener("transitioncancel", t), r.delete(n.target)), 0 === r.size)) {
                        for (let e of o) e();
                        o.clear();
                    }
                };
                document.body.addEventListener("transitionrun", (n) => {
                    if (!e(n) || !n.target) return;
                    let o = r.get(n.target);
                    o || ((o = new Set()), r.set(n.target, o), n.target.addEventListener("transitioncancel", t, { once: !0 })), o.add(n.propertyName);
                }),
                    document.body.addEventListener("transitionend", t);
            }
            function i(e) {
                requestAnimationFrame(() => {
                    0 === r.size ? e() : o.add(e);
                });
            }
            "undefined" != typeof document && ("loading" !== document.readyState ? l() : document.addEventListener("DOMContentLoaded", l));
        },
        985378: (e, t, n) => {
            n.d(t, { i: () => l });
            var r = n(426636),
                o = n(202784);
            function l(e) {
                const t = (0, o.useRef)(null);
                return (
                    (0, r.b)(() => {
                        t.current = e;
                    }, [e]),
                    (0, o.useCallback)((...e) => {
                        const n = t.current;
                        return null == n ? void 0 : n(...e);
                    }, [])
                );
            }
        },
        35731: (e, t, n) => {
            n.d(t, { y: () => l });
            var r = n(985378),
                o = n(202784);
            function l(e, t, n) {
                let l = (0, o.useRef)(t),
                    i = (0, r.i)(() => {
                        n && n(l.current);
                    });
                (0, o.useEffect)(() => {
                    var t;
                    let n = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
                    return (
                        null == n || n.addEventListener("reset", i),
                        () => {
                            null == n || n.removeEventListener("reset", i);
                        }
                    );
                }, [e, i]);
            }
        },
        121203: (e, t, n) => {
            n.d(t, { x: () => o });
            var r = n(202784);
            function o() {
                let e = (0, r.useRef)(new Map()),
                    t = (0, r.useCallback)((t, n, r, o) => {
                        let l = (null == o ? void 0 : o.once)
                            ? (...t) => {
                                  e.current.delete(r), r(...t);
                              }
                            : r;
                        e.current.set(r, { type: n, eventTarget: t, fn: l, options: o }), t.addEventListener(n, r, o);
                    }, []),
                    n = (0, r.useCallback)((t, n, r, o) => {
                        var l;
                        let i = (null === (l = e.current.get(r)) || void 0 === l ? void 0 : l.fn) || r;
                        t.removeEventListener(n, i, o), e.current.delete(r);
                    }, []),
                    o = (0, r.useCallback)(() => {
                        e.current.forEach((e, t) => {
                            n(e.eventTarget, e.type, t, e.options);
                        });
                    }, [n]);
                return (0, r.useEffect)(() => o, [o]), { addGlobalListener: t, removeGlobalListener: n, removeAllGlobalListeners: o };
            }
        },
        238013: (e, t, n) => {
            n.d(t, { Me: () => a, ur: () => c });
            var r = n(426636),
                o = n(202784),
                l = n(623047);
            let i = Boolean("undefined" != typeof window && window.document && window.document.createElement),
                u = new Map();
            function a(e) {
                let [t, n] = (0, o.useState)(e),
                    a = (0, o.useRef)(null),
                    c = (0, l.gP)(t),
                    d = (0, o.useCallback)((e) => {
                        a.current = e;
                    }, []);
                return (
                    i && u.set(c, d),
                    (0, r.b)(() => {
                        let e = c;
                        return () => {
                            u.delete(e);
                        };
                    }, [c]),
                    (0, o.useEffect)(() => {
                        let e = a.current;
                        e && ((a.current = null), n(e));
                    }),
                    c
                );
            }
            function c(e, t) {
                if (e === t) return e;
                let n = u.get(e);
                if (n) return n(t), t;
                let r = u.get(t);
                return r ? (r(e), e) : t;
            }
        },
        32196: (e, t, n) => {
            n.d(t, { b: () => o });
            var r = n(238013);
            function o(e, t) {
                let { id: n, "aria-label": o, "aria-labelledby": l } = e;
                if (((n = (0, r.Me)(n)), l && o)) {
                    let e = new Set([n, ...l.trim().split(/\s+/)]);
                    l = [...e].join(" ");
                } else l && (l = l.trim().split(/\s+/).join(" "));
                return o || l || !t || (o = t), { id: n, "aria-label": o, "aria-labelledby": l };
            }
        },
        426636: (e, t, n) => {
            n.d(t, { b: () => o });
            var r = n(202784);
            const o = "undefined" != typeof document ? r.useLayoutEffect : () => {};
        },
        640566: (e, t, n) => {
            n.d(t, { B: () => o });
            var r = n(202784);
            function o(e) {
                const t = (0, r.useRef)(null);
                return (0, r.useMemo)(
                    () => ({
                        get current() {
                            return t.current;
                        },
                        set current(n) {
                            (t.current = n), "function" == typeof e ? e(n) : e && (e.current = n);
                        },
                    }),
                    [e],
                );
            }
        },
        305864: (e, t, n) => {
            n.d(t, { l: () => o });
            var r = n(426636);
            function o(e, t) {
                (0, r.b)(() => {
                    if (e && e.ref && t)
                        return (
                            (e.ref.current = t.current),
                            () => {
                                e.ref && (e.ref.current = null);
                            }
                        );
                });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.XChat-11ee3033.def43f9a.js.map
