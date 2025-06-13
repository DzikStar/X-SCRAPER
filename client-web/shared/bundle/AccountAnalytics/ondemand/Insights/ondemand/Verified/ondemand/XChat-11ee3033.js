"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-11ee3033"],
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
                i = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
                l = /^(data-.*)$/;
            function u(e, t = {}) {
                let { labelable: n, isLink: u, propNames: a } = t,
                    d = {};
                for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (r.has(t) || (n && o.has(t)) || (u && i.has(t)) || (null == a ? void 0 : a.has(t)) || l.test(t)) && (d[t] = e[t]);
                return d;
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
            n.d(t, { Z: () => o, c: () => i });
            var r = n(979870);
            function o(e) {
                return !(0 !== e.mozInputSource || !e.isTrusted) || ((0, r.Dt)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
            }
            function i(e) {
                return (!(0, r.Dt)() && 0 === e.width && 0 === e.height) || (1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType);
            }
        },
        277108: (e, t, n) => {
            n.d(t, { d: () => l });
            var r = n(760080),
                o = n(238013),
                i = n(840489);
            function l(...e) {
                let t = { ...e[0] };
                for (let n = 1; n < e.length; n++) {
                    let l = e[n];
                    for (let e in l) {
                        let n = t[e],
                            u = l[e];
                        "function" == typeof n && "function" == typeof u && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? (t[e] = (0, r.t)(n, u)) : ("className" !== e && "UNSAFE_className" !== e) || "string" != typeof n || "string" != typeof u ? ("id" === e && n && u ? (t.id = (0, o.ur)(n, u)) : (t[e] = void 0 !== u ? u : n)) : (t[e] = (0, i.Z)(n, u));
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
        391218: (e, t, n) => {
            n.d(t, { b0: () => d, eY: () => s, nG: () => c, pG: () => u, tv: () => a });
            var r = n(454338),
                o = n(979870),
                i = n(202784);
            const l = (0, i.createContext)({
                isNative: !0,
                open: function (e, t) {
                    f(e, (e) => c(e, t));
                },
                useHref: (e) => e,
            });
            function u(e) {
                let { children: t, navigate: n, useHref: r } = e,
                    o = (0, i.useMemo)(
                        () => ({
                            isNative: !1,
                            open: (e, t, r, o) => {
                                f(e, (e) => {
                                    d(e, t) ? n(r, o) : c(e, t);
                                });
                            },
                            useHref: r || ((e) => e),
                        }),
                        [n, r],
                    );
                return i.createElement(l.Provider, { value: o }, t);
            }
            function a() {
                return (0, i.useContext)(l);
            }
            function d(e, t) {
                let n = e.getAttribute("target");
                return !((n && "_self" !== n) || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey);
            }
            function c(e, t, n = !0) {
                var i, l;
                let { metaKey: u, ctrlKey: a, altKey: d, shiftKey: f } = t;
                (0, o.vU)() && (null === (l = window.event) || void 0 === l || null === (i = l.type) || void 0 === i ? void 0 : i.startsWith("key")) && "_blank" === e.target && ((0, o.V5)() ? (u = !0) : (a = !0));
                let s = (0, o.Pf)() && (0, o.V5)() && !(0, o.zc)() ? new KeyboardEvent("keydown", { keyIdentifier: "Enter", metaKey: u, ctrlKey: a, altKey: d, shiftKey: f }) : new MouseEvent("click", { metaKey: u, ctrlKey: a, altKey: d, shiftKey: f, bubbles: !0, cancelable: !0 });
                (c.isOpening = n), (0, r.A)(e), e.dispatchEvent(s), (c.isOpening = !1);
            }
            function f(e, t) {
                if (e instanceof HTMLAnchorElement) t(e);
                else if (e.hasAttribute("data-href")) {
                    let n = document.createElement("a");
                    (n.href = e.getAttribute("data-href")), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n);
                }
            }
            function s(e) {
                let t = a();
                return { href: (null == e ? void 0 : e.href) ? t.useHref(null == e ? void 0 : e.href) : void 0, target: null == e ? void 0 : e.target, rel: null == e ? void 0 : e.rel, download: null == e ? void 0 : e.download, ping: null == e ? void 0 : e.ping, referrerPolicy: null == e ? void 0 : e.referrerPolicy };
            }
            c.isOpening = !1;
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
            function i(e) {
                let t = null;
                return () => (null == t && (t = e()), t);
            }
            n.d(t, { Dt: () => s, Pf: () => c, V5: () => l, gn: () => d, vU: () => p, zc: () => a });
            const l = i(function () {
                    return o(/^Mac/i);
                }),
                u = i(function () {
                    return o(/^iPhone/i);
                }),
                a = i(function () {
                    return o(/^iPad/i) || (l() && navigator.maxTouchPoints > 1);
                }),
                d = i(function () {
                    return u() || a();
                }),
                c =
                    (i(function () {
                        return l() || d();
                    }),
                    i(function () {
                        return r(/AppleWebKit/i) && !f();
                    })),
                f = i(function () {
                    return r(/Chrome/i);
                }),
                s = i(function () {
                    return r(/Android/i);
                }),
                p = i(function () {
                    return r(/Firefox/i);
                });
        },
        309371: (e, t, n) => {
            n.d(t, { Q: () => l });
            let r = new Map(),
                o = new Set();
            function i() {
                if ("undefined" == typeof window) return;
                function e(e) {
                    return "propertyName" in e;
                }
                let t = (n) => {
                    if (!e(n) || !n.target) return;
                    let i = r.get(n.target);
                    if (i && (i.delete(n.propertyName), 0 === i.size && (n.target.removeEventListener("transitioncancel", t), r.delete(n.target)), 0 === r.size)) {
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
            function l(e) {
                requestAnimationFrame(() => {
                    0 === r.size ? e() : o.add(e);
                });
            }
            "undefined" != typeof document && ("loading" !== document.readyState ? i() : document.addEventListener("DOMContentLoaded", i));
        },
        985378: (e, t, n) => {
            n.d(t, { i: () => i });
            var r = n(426636),
                o = n(202784);
            function i(e) {
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
        121203: (e, t, n) => {
            n.d(t, { x: () => o });
            var r = n(202784);
            function o() {
                let e = (0, r.useRef)(new Map()),
                    t = (0, r.useCallback)((t, n, r, o) => {
                        let i = (null == o ? void 0 : o.once)
                            ? (...t) => {
                                  e.current.delete(r), r(...t);
                              }
                            : r;
                        e.current.set(r, { type: n, eventTarget: t, fn: i, options: o }), t.addEventListener(n, r, o);
                    }, []),
                    n = (0, r.useCallback)((t, n, r, o) => {
                        var i;
                        let l = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
                        t.removeEventListener(n, l, o), e.current.delete(r);
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
            n.d(t, { Me: () => a, ur: () => d });
            var r = n(426636),
                o = n(202784),
                i = n(623047);
            let l = Boolean("undefined" != typeof window && window.document && window.document.createElement),
                u = new Map();
            function a(e) {
                let [t, n] = (0, o.useState)(e),
                    a = (0, o.useRef)(null),
                    d = (0, i.gP)(t),
                    c = (0, o.useCallback)((e) => {
                        a.current = e;
                    }, []);
                return (
                    l && u.set(d, c),
                    (0, r.b)(() => {
                        let e = d;
                        return () => {
                            u.delete(e);
                        };
                    }, [d]),
                    (0, o.useEffect)(() => {
                        let e = a.current;
                        e && ((a.current = null), n(e));
                    }),
                    d
                );
            }
            function d(e, t) {
                if (e === t) return e;
                let n = u.get(e);
                if (n) return n(t), t;
                let r = u.get(t);
                return r ? (r(e), e) : t;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-11ee3033.f5982b6a.js.map
