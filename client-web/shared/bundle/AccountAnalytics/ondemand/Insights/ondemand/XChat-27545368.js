"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-27545368"],
    {
        983955: (e, t, n) => {
            n.d(t, { W: () => i });
            var r = n(552322),
                o = n(530361),
                s = n(332161);
            class a {
                segmentedText;
                constructor(e, t = "en") {
                    this.segmentedText = [...new Intl.Segmenter(t).segment(e)];
                }
                subsegment(e, t) {
                    return this.segmentedText
                        .slice(e, t)
                        .map((e) => e.segment)
                        .join("");
                }
            }
            function i({ color: e, displayTextRange: t, entities: n, lang: i, linkColor: c, numberOfLines: u, size: l, text: d, underlineLinks: f }) {
                let p = (0, o.decode)(d);
                if (t && void 0 !== t[0] && void 0 !== t[1]) {
                    const [e, n] = t;
                    if (e === n || n < e) return null;
                    const r = new a(d, i);
                    p = (0, o.decode)(r.subsegment(e, n));
                }
                const m = [];
                if (n) {
                    let e = 0;
                    const u = new a(p, i),
                        l = (function (e) {
                            const t = [];
                            return (
                                Object.entries(e).forEach(([e, n]) => {
                                    Array.isArray(n) &&
                                        n.forEach((n) => {
                                            n.indices && t.push({ type: e, ...n });
                                        });
                                }),
                                t.sort((e, t) => e.indices?.[0] - t.indices?.[0])
                            );
                        })(n);
                    l.forEach((n) => {
                        let a = n.indices;
                        t?.[0] && (a = [n.indices[0] - t[0], n.indices[1] - t[0]]);
                        const [i, l] = a;
                        i < 0 || l > p.length || (l !== e && i > e && m.push((0, r.jsx)(s.x, { as: "span", color: "inherit", size: "inherit", children: (0, o.decode)(u.subsegment(e, i)) }, `${e}-${i}`)), "hashtags" === n.type && m.push((0, r.jsx)(s.x, { as: "a", color: c, href: `https://x.com/hashtag/${n.text}`, size: "inherit", underline: f, children: `#${(0, o.decode)(n.text)}` }, `${i}-${l}`)), "symbols" === n.type && m.push((0, r.jsx)(s.x, { as: "a", color: c, href: `https://x.com/search?q=$${n.text}`, size: "inherit", underline: f, children: `$${(0, o.decode)(n.text)}` }, `${i}-${l}`)), "urls" === n.type && m.push((0, r.jsx)(s.x, { as: "a", color: c, href: n.url, size: "inherit", target: "_blank", rel: "noopener noreferrer", underline: f, children: (0, o.decode)(n.displayUrl) }, `${i}-${l}`)), "mentions" === n.type && (n.isUnmentioned ? m.push((0, r.jsx)(s.x, { as: "span", color: "inherit", size: "inherit", children: `@${(0, o.decode)(n.screenName)}` }, `${i}-${l}`)) : m.push((0, r.jsx)(s.x, { as: "a", color: c, href: `https://x.com/${n.screenName}`, size: "inherit", underline: f, children: `@${(0, o.decode)(n.screenName)}` }, `${i}-${l}`))), (e = l));
                    }),
                        e < p.length && m.push((0, r.jsx)(s.x, { as: "span", color: "inherit", size: "inherit", children: (0, o.decode)(u.subsegment(e, p.length)) }, `${e}-${p.length}`));
                } else m.push((0, r.jsx)(s.x, { color: "inherit", size: "inherit", children: (0, o.decode)(p) }, "text"));
                return (0, r.jsx)(s.x, { color: e, dir: "auto", numberOfLines: u, size: l, children: m });
            }
        },
        253511: (e, t, n) => {
            n.d(t, { E: () => i });
            var r = n(552322),
                o = n(202784),
                s = n(332161);
            function a(e, t = "en") {
                const n = "undefined" != typeof navigator ? navigator.language : t,
                    r = new Date(e),
                    o = new Date();
                if (o.toDateString() === r.toDateString()) {
                    const e = Math.floor((o.getTime() - r.getTime()) / 1e3);
                    if (e < 60) return `${e}s`;
                    const t = Math.floor(e / 60);
                    if (t < 60) return `${t}m`;
                    return `${Math.floor(t / 60)}h`;
                }
                if (o.getFullYear() === r.getFullYear()) {
                    const e = { month: "short", day: "numeric" };
                    return r.toLocaleDateString(n, e);
                }
                return r.toLocaleDateString(n, { month: "short", day: "numeric", year: "numeric" });
            }
            function i({ color: e = "gray700", lang: t, link: n, timestamp: i, ...c }) {
                const [u, l] = (0, o.useState)(() => a(i, t));
                return (
                    (0, o.useEffect)(() => {
                        function e() {
                            "visible" === document.visibilityState && l(a(i, t));
                        }
                        return (
                            document.addEventListener("visibilitychange", e),
                            () => {
                                document.removeEventListener("visibilitychange", e);
                            }
                        );
                    }, [t, i]),
                    (0, r.jsx)(s.x, { ...c, color: e, ...(n && { as: "a", ...("string" == typeof n ? { href: n } : { href: n.href, target: n.target }) }), children: u })
                );
            }
        },
        34681: (e, t, n) => {
            n.d(t, { $N: () => h, Be: () => v, PK: () => d, Vq: () => u, cZ: () => p, fK: () => m, hg: () => l, t9: () => f });
            var r = n(552322),
                o = n(123825),
                s = n(840489),
                a = n(202784),
                i = n(31674),
                c = n(741064);
            const u = o.fC,
                l = o.xz,
                d = o.h_,
                f = (o.x8, a.forwardRef(({ className: e, ...t }, n) => (0, r.jsx)(o.aV, { ref: n, className: (0, i.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", e), ...t })));
            f.displayName = o.aV.displayName;
            const p = a.forwardRef(({ children: e, className: t, ...n }, s) => (0, r.jsxs)(d, { children: [(0, r.jsx)(f, {}), (0, r.jsxs)(o.VY, { ref: s, className: (0, i.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-100 p-6 shadow-lg duration-200 sm:rounded-xl", t), ...n, children: [e, (0, r.jsxs)(o.x8, { tabIndex: -1, className: "ring-offset-background focus:ring-ring absolute right-4 top-4 rounded opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-200 data-[state=open]:text-gray-700", children: [(0, r.jsx)(c.Z, { className: "h-4 w-4 text-gray-900" }), (0, r.jsx)("span", { className: "sr-only", children: "Close" })] })] })] }));
            p.displayName = o.VY.displayName;
            const m = ({ className: e, ...t }) => (0, r.jsx)("div", { className: (0, i.cn)("flex flex-col space-y-1.5 text-center sm:text-left", e), ...t });
            m.displayName = "DialogHeader";
            const h = a.forwardRef(({ className: e, ...t }, n) => (0, r.jsx)(o.Dx, { ref: n, className: (0, s.Z)("text-title4 text-text font-medium tracking-tight", e), ...t }));
            h.displayName = o.Dx.displayName;
            const v = a.forwardRef(({ className: e, ...t }, n) => (0, r.jsx)(o.dk, { ref: n, className: (0, i.cn)("text-sm text-gray-700", e), ...t }));
            v.displayName = o.dk.displayName;
        },
        392211: (e, t, n) => {
            n.d(t, { b: () => a, k: () => s });
            var r = n(202784),
                o = n(552322);
            function s(e, t) {
                const n = r.createContext(t),
                    s = (e) => {
                        const { children: t, ...s } = e,
                            a = r.useMemo(() => s, Object.values(s));
                        return (0, o.jsx)(n.Provider, { value: a, children: t });
                    };
                return (
                    (s.displayName = e + "Provider"),
                    [
                        s,
                        function (o) {
                            const s = r.useContext(n);
                            if (s) return s;
                            if (void 0 !== t) return t;
                            throw new Error(`\`${o}\` must be used within \`${e}\``);
                        },
                    ]
                );
            }
            function a(e, t = []) {
                let n = [];
                const s = () => {
                    const t = n.map((e) => r.createContext(e));
                    return function (n) {
                        const o = n?.[e] || t;
                        return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
                    };
                };
                return (
                    (s.scopeName = e),
                    [
                        function (t, s) {
                            const a = r.createContext(s),
                                i = n.length;
                            n = [...n, s];
                            const c = (t) => {
                                const { scope: n, children: s, ...c } = t,
                                    u = n?.[e]?.[i] || a,
                                    l = r.useMemo(() => c, Object.values(c));
                                return (0, o.jsx)(u.Provider, { value: l, children: s });
                            };
                            return (
                                (c.displayName = t + "Provider"),
                                [
                                    c,
                                    function (n, o) {
                                        const c = o?.[e]?.[i] || a,
                                            u = r.useContext(c);
                                        if (u) return u;
                                        if (void 0 !== s) return s;
                                        throw new Error(`\`${n}\` must be used within \`${t}\``);
                                    },
                                ]
                            );
                        },
                        i(s, ...t),
                    ]
                );
            }
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
        },
        123825: (e, t, n) => {
            n.d(t, { x8: () => Ve, VY: () => Ae, dk: () => ze, aV: () => We, h_: () => $e, fC: () => Se, Dx: () => Fe, xz: () => Ie });
            var r,
                o = n(202784),
                s = n(717998),
                a = n(262656),
                i = n(392211),
                c = n(23372),
                u = n(387695),
                l = n(172714),
                d = n(627757),
                f = n(986796),
                p = n(552322),
                m = "dismissableLayer.update",
                h = "dismissableLayer.pointerDownOutside",
                v = "dismissableLayer.focusOutside",
                g = o.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
                y = o.forwardRef((e, t) => {
                    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: u, onInteractOutside: y, onDismiss: b, ...E } = e,
                        N = o.useContext(g),
                        [D, C] = o.useState(null),
                        R = D?.ownerDocument ?? globalThis?.document,
                        [, j] = o.useState({}),
                        O = (0, a.e)(t, (e) => C(e)),
                        M = Array.from(N.layers),
                        [_] = [...N.layersWithOutsidePointerEventsDisabled].slice(-1),
                        P = M.indexOf(_),
                        T = D ? M.indexOf(D) : -1,
                        k = N.layersWithOutsidePointerEventsDisabled.size > 0,
                        L = T >= P,
                        S = (function (e, t = globalThis?.document) {
                            const n = (0, d.W)(e),
                                r = o.useRef(!1),
                                s = o.useRef(() => {});
                            return (
                                o.useEffect(() => {
                                    const e = (e) => {
                                            if (e.target && !r.current) {
                                                let r = function () {
                                                    w(h, n, o, { discrete: !0 });
                                                };
                                                const o = { originalEvent: e };
                                                "touch" === e.pointerType ? (t.removeEventListener("click", s.current), (s.current = r), t.addEventListener("click", s.current, { once: !0 })) : r();
                                            } else t.removeEventListener("click", s.current);
                                            r.current = !1;
                                        },
                                        o = window.setTimeout(() => {
                                            t.addEventListener("pointerdown", e);
                                        }, 0);
                                    return () => {
                                        window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", s.current);
                                    };
                                }, [t, n]),
                                { onPointerDownCapture: () => (r.current = !0) }
                            );
                        })((e) => {
                            const t = e.target,
                                n = [...N.branches].some((e) => e.contains(t));
                            L && !n && (c?.(e), y?.(e), e.defaultPrevented || b?.());
                        }, R),
                        I = (function (e, t = globalThis?.document) {
                            const n = (0, d.W)(e),
                                r = o.useRef(!1);
                            return (
                                o.useEffect(() => {
                                    const e = (e) => {
                                        if (e.target && !r.current) {
                                            w(v, n, { originalEvent: e }, { discrete: !1 });
                                        }
                                    };
                                    return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
                                }, [t, n]),
                                { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
                            );
                        })((e) => {
                            const t = e.target;
                            [...N.branches].some((e) => e.contains(t)) || (u?.(e), y?.(e), e.defaultPrevented || b?.());
                        }, R);
                    return (
                        (0, f.e)((e) => {
                            T === N.layers.size - 1 && (i?.(e), !e.defaultPrevented && b && (e.preventDefault(), b()));
                        }, R),
                        o.useEffect(() => {
                            if (D)
                                return (
                                    n && (0 === N.layersWithOutsidePointerEventsDisabled.size && ((r = R.body.style.pointerEvents), (R.body.style.pointerEvents = "none")), N.layersWithOutsidePointerEventsDisabled.add(D)),
                                    N.layers.add(D),
                                    x(),
                                    () => {
                                        n && 1 === N.layersWithOutsidePointerEventsDisabled.size && (R.body.style.pointerEvents = r);
                                    }
                                );
                        }, [D, R, n, N]),
                        o.useEffect(
                            () => () => {
                                D && (N.layers.delete(D), N.layersWithOutsidePointerEventsDisabled.delete(D), x());
                            },
                            [D, N],
                        ),
                        o.useEffect(() => {
                            const e = () => j({});
                            return document.addEventListener(m, e), () => document.removeEventListener(m, e);
                        }, []),
                        (0, p.jsx)(l.WV.div, { ...E, ref: O, style: { pointerEvents: k ? (L ? "auto" : "none") : void 0, ...e.style }, onFocusCapture: (0, s.M)(e.onFocusCapture, I.onFocusCapture), onBlurCapture: (0, s.M)(e.onBlurCapture, I.onBlurCapture), onPointerDownCapture: (0, s.M)(e.onPointerDownCapture, S.onPointerDownCapture) })
                    );
                });
            y.displayName = "DismissableLayer";
            var b = o.forwardRef((e, t) => {
                const n = o.useContext(g),
                    r = o.useRef(null),
                    s = (0, a.e)(t, r);
                return (
                    o.useEffect(() => {
                        const e = r.current;
                        if (e)
                            return (
                                n.branches.add(e),
                                () => {
                                    n.branches.delete(e);
                                }
                            );
                    }, [n.branches]),
                    (0, p.jsx)(l.WV.div, { ...e, ref: s })
                );
            });
            function x() {
                const e = new CustomEvent(m);
                document.dispatchEvent(e);
            }
            function w(e, t, n, { discrete: r }) {
                const o = n.originalEvent.target,
                    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
                t && o.addEventListener(e, t, { once: !0 }), r ? (0, l.jH)(o, s) : o.dispatchEvent(s);
            }
            b.displayName = "DismissableLayerBranch";
            var E = n(22426),
                N = n(928316),
                D = n(861644),
                C = o.forwardRef((e, t) => {
                    const { container: n, ...r } = e,
                        [s, a] = o.useState(!1);
                    (0, D.b)(() => a(!0), []);
                    const i = n || (s && globalThis?.document?.body);
                    return i ? N.createPortal((0, p.jsx)(l.WV.div, { ...r, ref: t }), i) : null;
                });
            C.displayName = "Portal";
            var R = (e) => {
                const { present: t, children: n } = e,
                    r = (function (e) {
                        const [t, n] = o.useState(),
                            r = o.useRef({}),
                            s = o.useRef(e),
                            a = o.useRef("none"),
                            i = e ? "mounted" : "unmounted",
                            [c, u] = (function (e, t) {
                                return o.useReducer((e, n) => t[e][n] ?? e, e);
                            })(i, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
                        return (
                            o.useEffect(() => {
                                const e = j(r.current);
                                a.current = "mounted" === c ? e : "none";
                            }, [c]),
                            (0, D.b)(() => {
                                const t = r.current,
                                    n = s.current;
                                if (n !== e) {
                                    const r = a.current,
                                        o = j(t);
                                    if (e) u("MOUNT");
                                    else if ("none" === o || "none" === t?.display) u("UNMOUNT");
                                    else {
                                        u(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT");
                                    }
                                    s.current = e;
                                }
                            }, [e, u]),
                            (0, D.b)(() => {
                                if (t) {
                                    let e;
                                    const n = t.ownerDocument.defaultView ?? window,
                                        o = (o) => {
                                            const a = j(r.current).includes(o.animationName);
                                            if (o.target === t && a && (u("ANIMATION_END"), !s.current)) {
                                                const r = t.style.animationFillMode;
                                                (t.style.animationFillMode = "forwards"),
                                                    (e = n.setTimeout(() => {
                                                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r);
                                                    }));
                                            }
                                        },
                                        i = (e) => {
                                            e.target === t && (a.current = j(r.current));
                                        };
                                    return (
                                        t.addEventListener("animationstart", i),
                                        t.addEventListener("animationcancel", o),
                                        t.addEventListener("animationend", o),
                                        () => {
                                            n.clearTimeout(e), t.removeEventListener("animationstart", i), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
                                        }
                                    );
                                }
                                u("ANIMATION_END");
                            }, [t, u]),
                            {
                                isPresent: ["mounted", "unmountSuspended"].includes(c),
                                ref: o.useCallback((e) => {
                                    e && (r.current = getComputedStyle(e)), n(e);
                                }, []),
                            }
                        );
                    })(t),
                    s = "function" == typeof n ? n({ present: r.isPresent }) : o.Children.only(n),
                    i = (0, a.e)(
                        r.ref,
                        (function (e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            if (n) return e.ref;
                            if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(s),
                    );
                return "function" == typeof n || r.isPresent ? o.cloneElement(s, { ref: i }) : null;
            };
            function j(e) {
                return e?.animationName || "none";
            }
            R.displayName = "Presence";
            var O = n(11861),
                M = n(305163),
                _ = n(495346),
                P = n(287359),
                T = (0, n(964597)._)(),
                k = function () {},
                L = o.forwardRef(function (e, t) {
                    var n = o.useRef(null),
                        r = o.useState({ onScrollCapture: k, onWheelCapture: k, onTouchMoveCapture: k }),
                        s = r[0],
                        a = r[1],
                        i = e.forwardProps,
                        c = e.children,
                        u = e.className,
                        l = e.removeScrollBar,
                        d = e.enabled,
                        f = e.shards,
                        p = e.sideCar,
                        m = e.noIsolation,
                        h = e.inert,
                        v = e.allowPinchZoom,
                        g = e.as,
                        y = void 0 === g ? "div" : g,
                        b = e.gapMode,
                        x = (0, M._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        w = p,
                        E = (0, P.q)([n, t]),
                        N = (0, M.pi)((0, M.pi)({}, x), s);
                    return o.createElement(o.Fragment, null, d && o.createElement(w, { sideCar: T, removeScrollBar: l, shards: f, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n, gapMode: b }), i ? o.cloneElement(o.Children.only(c), (0, M.pi)((0, M.pi)({}, N), { ref: E })) : o.createElement(y, (0, M.pi)({}, N, { className: u, ref: E }), c));
                });
            (L.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (L.classNames = { fullWidth: _.zi, zeroRight: _.pF });
            var S = n(757758),
                I = n(894200),
                $ = n(633097),
                W = !1;
            if ("undefined" != typeof window)
                try {
                    var A = Object.defineProperty({}, "passive", {
                        get: function () {
                            return (W = !0), !0;
                        },
                    });
                    window.addEventListener("test", A, A), window.removeEventListener("test", A, A);
                } catch (e) {
                    W = !1;
                }
            var F = !!W && { passive: !1 },
                z = function (e, t) {
                    if (!(e instanceof Element)) return !1;
                    var n = window.getComputedStyle(e);
                    return (
                        "hidden" !== n[t] &&
                        !(
                            n.overflowY === n.overflowX &&
                            !(function (e) {
                                return "TEXTAREA" === e.tagName;
                            })(e) &&
                            "visible" === n[t]
                        )
                    );
                },
                V = function (e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if (("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), B(e, r))) {
                            var o = U(e, r);
                            if (o[1] > o[2]) return !0;
                        }
                        r = r.parentNode;
                    } while (r && r !== n.body);
                    return !1;
                },
                B = function (e, t) {
                    return "v" === e
                        ? (function (e) {
                              return z(e, "overflowY");
                          })(t)
                        : (function (e) {
                              return z(e, "overflowX");
                          })(t);
                },
                U = function (e, t) {
                    return "v" === e
                        ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight]
                        : (function (e) {
                              return [e.scrollLeft, e.scrollWidth, e.clientWidth];
                          })(t);
                    var n;
                },
                Y = function (e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                },
                X = function (e) {
                    return [e.deltaX, e.deltaY];
                },
                Z = function (e) {
                    return e && "current" in e ? e.current : e;
                },
                q = function (e) {
                    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
                },
                H = 0,
                K = [];
            function G(e) {
                for (var t = null; null !== e; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
                return t;
            }
            const J = (0, S.L)(T, function (e) {
                var t = o.useRef([]),
                    n = o.useRef([0, 0]),
                    r = o.useRef(),
                    s = o.useState(H++)[0],
                    a = o.useState($.Ws)[0],
                    i = o.useRef(e);
                o.useEffect(
                    function () {
                        i.current = e;
                    },
                    [e],
                ),
                    o.useEffect(
                        function () {
                            if (e.inert) {
                                document.body.classList.add("block-interactivity-".concat(s));
                                var t = (0, M.ev)([e.lockRef.current], (e.shards || []).map(Z), !0).filter(Boolean);
                                return (
                                    t.forEach(function (e) {
                                        return e.classList.add("allow-interactivity-".concat(s));
                                    }),
                                    function () {
                                        document.body.classList.remove("block-interactivity-".concat(s)),
                                            t.forEach(function (e) {
                                                return e.classList.remove("allow-interactivity-".concat(s));
                                            });
                                    }
                                );
                            }
                        },
                        [e.inert, e.lockRef.current, e.shards],
                    );
                var c = o.useCallback(function (e, t) {
                        if (("touches" in e && 2 === e.touches.length) || ("wheel" === e.type && e.ctrlKey)) return !i.current.allowPinchZoom;
                        var o,
                            s = Y(e),
                            a = n.current,
                            c = "deltaX" in e ? e.deltaX : a[0] - s[0],
                            u = "deltaY" in e ? e.deltaY : a[1] - s[1],
                            l = e.target,
                            d = Math.abs(c) > Math.abs(u) ? "h" : "v";
                        if ("touches" in e && "h" === d && "range" === l.type) return !1;
                        var f = V(d, l);
                        if (!f) return !0;
                        if ((f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = V(d, l))), !f)) return !1;
                        if ((!r.current && "changedTouches" in e && (c || u) && (r.current = o), !o)) return !0;
                        var p = r.current || o;
                        return (function (e, t, n, r, o) {
                            var s = (function (e, t) {
                                    return "h" === e && "rtl" === t ? -1 : 1;
                                })(e, window.getComputedStyle(t).direction),
                                a = s * r,
                                i = n.target,
                                c = t.contains(i),
                                u = !1,
                                l = a > 0,
                                d = 0,
                                f = 0;
                            do {
                                var p = U(e, i),
                                    m = p[0],
                                    h = p[1] - p[2] - s * m;
                                (m || h) && B(e, i) && ((d += h), (f += m)), (i = i instanceof ShadowRoot ? i.host : i.parentNode);
                            } while ((!c && i !== document.body) || (c && (t.contains(i) || t === i)));
                            return ((l && ((o && Math.abs(d) < 1) || (!o && a > d))) || (!l && ((o && Math.abs(f) < 1) || (!o && -a > f)))) && (u = !0), u;
                        })(p, t, e, "h" === p ? c : u, !0);
                    }, []),
                    u = o.useCallback(function (e) {
                        var n = e;
                        if (K.length && K[K.length - 1] === a) {
                            var r = "deltaY" in n ? X(n) : Y(n),
                                o = t.current.filter(function (e) {
                                    return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && ((t = e.delta), (o = r), t[0] === o[0] && t[1] === o[1]);
                                    var t, o;
                                })[0];
                            if (o && o.should) n.cancelable && n.preventDefault();
                            else if (!o) {
                                var s = (i.current.shards || [])
                                    .map(Z)
                                    .filter(Boolean)
                                    .filter(function (e) {
                                        return e.contains(n.target);
                                    });
                                (s.length > 0 ? c(n, s[0]) : !i.current.noIsolation) && n.cancelable && n.preventDefault();
                            }
                        }
                    }, []),
                    l = o.useCallback(function (e, n, r, o) {
                        var s = { name: e, delta: n, target: r, should: o, shadowParent: G(r) };
                        t.current.push(s),
                            setTimeout(function () {
                                t.current = t.current.filter(function (e) {
                                    return e !== s;
                                });
                            }, 1);
                    }, []),
                    d = o.useCallback(function (e) {
                        (n.current = Y(e)), (r.current = void 0);
                    }, []),
                    f = o.useCallback(function (t) {
                        l(t.type, X(t), t.target, c(t, e.lockRef.current));
                    }, []),
                    p = o.useCallback(function (t) {
                        l(t.type, Y(t), t.target, c(t, e.lockRef.current));
                    }, []);
                o.useEffect(function () {
                    return (
                        K.push(a),
                        e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: p }),
                        document.addEventListener("wheel", u, F),
                        document.addEventListener("touchmove", u, F),
                        document.addEventListener("touchstart", d, F),
                        function () {
                            (K = K.filter(function (e) {
                                return e !== a;
                            })),
                                document.removeEventListener("wheel", u, F),
                                document.removeEventListener("touchmove", u, F),
                                document.removeEventListener("touchstart", d, F);
                        }
                    );
                }, []);
                var m = e.removeScrollBar,
                    h = e.inert;
                return o.createElement(o.Fragment, null, h ? o.createElement(a, { styles: q(s) }) : null, m ? o.createElement(I.jp, { gapMode: e.gapMode }) : null);
            });
            var Q = o.forwardRef(function (e, t) {
                return o.createElement(L, (0, M.pi)({}, e, { ref: t, sideCar: J }));
            });
            Q.classNames = L.classNames;
            const ee = Q;
            var te = n(549732),
                ne = n(549815),
                re = "Dialog",
                [oe, se] = (0, i.b)(re),
                [ae, ie] = oe(re),
                ce = (e) => {
                    const { __scopeDialog: t, children: n, open: r, defaultOpen: s, onOpenChange: a, modal: i = !0 } = e,
                        l = o.useRef(null),
                        d = o.useRef(null),
                        [f = !1, m] = (0, u.T)({ prop: r, defaultProp: s, onChange: a });
                    return (0, p.jsx)(ae, { scope: t, triggerRef: l, contentRef: d, contentId: (0, c.M)(), titleId: (0, c.M)(), descriptionId: (0, c.M)(), open: f, onOpenChange: m, onOpenToggle: o.useCallback(() => m((e) => !e), [m]), modal: i, children: n });
                };
            ce.displayName = re;
            var ue = "DialogTrigger",
                le = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ie(ue, n),
                        i = (0, a.e)(t, o.triggerRef);
                    return (0, p.jsx)(l.WV.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": o.open, "aria-controls": o.contentId, "data-state": Me(o.open), ...r, ref: i, onClick: (0, s.M)(e.onClick, o.onOpenToggle) });
                });
            le.displayName = ue;
            var de = "DialogPortal",
                [fe, pe] = oe(de, { forceMount: void 0 }),
                me = (e) => {
                    const { __scopeDialog: t, forceMount: n, children: r, container: s } = e,
                        a = ie(de, t);
                    return (0, p.jsx)(fe, { scope: t, forceMount: n, children: o.Children.map(r, (e) => (0, p.jsx)(R, { present: n || a.open, children: (0, p.jsx)(C, { asChild: !0, container: s, children: e }) })) });
                };
            me.displayName = de;
            var he = "DialogOverlay",
                ve = o.forwardRef((e, t) => {
                    const n = pe(he, e.__scopeDialog),
                        { forceMount: r = n.forceMount, ...o } = e,
                        s = ie(he, e.__scopeDialog);
                    return s.modal ? (0, p.jsx)(R, { present: r || s.open, children: (0, p.jsx)(ge, { ...o, ref: t }) }) : null;
                });
            ve.displayName = he;
            var ge = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ie(he, n);
                    return (0, p.jsx)(ee, { as: ne.g7, allowPinchZoom: !0, shards: [o.contentRef], children: (0, p.jsx)(l.WV.div, { "data-state": Me(o.open), ...r, ref: t, style: { pointerEvents: "auto", ...r.style } }) });
                }),
                ye = "DialogContent",
                be = o.forwardRef((e, t) => {
                    const n = pe(ye, e.__scopeDialog),
                        { forceMount: r = n.forceMount, ...o } = e,
                        s = ie(ye, e.__scopeDialog);
                    return (0, p.jsx)(R, { present: r || s.open, children: s.modal ? (0, p.jsx)(xe, { ...o, ref: t }) : (0, p.jsx)(we, { ...o, ref: t }) });
                });
            be.displayName = ye;
            var xe = o.forwardRef((e, t) => {
                    const n = ie(ye, e.__scopeDialog),
                        r = o.useRef(null),
                        i = (0, a.e)(t, n.contentRef, r);
                    return (
                        o.useEffect(() => {
                            const e = r.current;
                            if (e) return (0, te.Ry)(e);
                        }, []),
                        (0, p.jsx)(Ee, {
                            ...e,
                            ref: i,
                            trapFocus: n.open,
                            disableOutsidePointerEvents: !0,
                            onCloseAutoFocus: (0, s.M)(e.onCloseAutoFocus, (e) => {
                                e.preventDefault(), n.triggerRef.current?.focus();
                            }),
                            onPointerDownOutside: (0, s.M)(e.onPointerDownOutside, (e) => {
                                const t = e.detail.originalEvent,
                                    n = 0 === t.button && !0 === t.ctrlKey;
                                (2 === t.button || n) && e.preventDefault();
                            }),
                            onFocusOutside: (0, s.M)(e.onFocusOutside, (e) => e.preventDefault()),
                        })
                    );
                }),
                we = o.forwardRef((e, t) => {
                    const n = ie(ye, e.__scopeDialog),
                        r = o.useRef(!1),
                        s = o.useRef(!1);
                    return (0, p.jsx)(Ee, {
                        ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: (t) => {
                            e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), (r.current = !1), (s.current = !1);
                        },
                        onInteractOutside: (t) => {
                            e.onInteractOutside?.(t), t.defaultPrevented || ((r.current = !0), "pointerdown" === t.detail.originalEvent.type && (s.current = !0));
                            const o = t.target,
                                a = n.triggerRef.current?.contains(o);
                            a && t.preventDefault(), "focusin" === t.detail.originalEvent.type && s.current && t.preventDefault();
                        },
                    });
                }),
                Ee = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: s, onCloseAutoFocus: i, ...c } = e,
                        u = ie(ye, n),
                        l = o.useRef(null),
                        d = (0, a.e)(t, l);
                    return (0, O.EW)(), (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(E.M, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: s, onUnmountAutoFocus: i, children: (0, p.jsx)(y, { role: "dialog", id: u.contentId, "aria-describedby": u.descriptionId, "aria-labelledby": u.titleId, "data-state": Me(u.open), ...c, ref: d, onDismiss: () => u.onOpenChange(!1) }) }), (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(ke, { titleId: u.titleId }), (0, p.jsx)(Le, { contentRef: l, descriptionId: u.descriptionId })] })] });
                }),
                Ne = "DialogTitle",
                De = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ie(Ne, n);
                    return (0, p.jsx)(l.WV.h2, { id: o.titleId, ...r, ref: t });
                });
            De.displayName = Ne;
            var Ce = "DialogDescription",
                Re = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ie(Ce, n);
                    return (0, p.jsx)(l.WV.p, { id: o.descriptionId, ...r, ref: t });
                });
            Re.displayName = Ce;
            var je = "DialogClose",
                Oe = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ie(je, n);
                    return (0, p.jsx)(l.WV.button, { type: "button", ...r, ref: t, onClick: (0, s.M)(e.onClick, () => o.onOpenChange(!1)) });
                });
            function Me(e) {
                return e ? "open" : "closed";
            }
            Oe.displayName = je;
            var _e = "DialogTitleWarning",
                [Pe, Te] = (0, i.k)(_e, { contentName: ye, titleName: Ne, docsSlug: "dialog" }),
                ke = ({ titleId: e }) => {
                    const t = Te(_e),
                        n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
                    return (
                        o.useEffect(() => {
                            if (e) {
                                document.getElementById(e);
                            }
                        }, [n, e]),
                        null
                    );
                },
                Le = ({ contentRef: e, descriptionId: t }) => {
                    const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Te("DialogDescriptionWarning").contentName}}.`;
                    return (
                        o.useEffect(() => {
                            const n = e.current?.getAttribute("aria-describedby");
                            if (t && n) {
                                document.getElementById(t);
                            }
                        }, [n, e, t]),
                        null
                    );
                },
                Se = ce,
                Ie = le,
                $e = me,
                We = ve,
                Ae = be,
                Fe = De,
                ze = Re,
                Ve = Oe;
        },
        11861: (e, t, n) => {
            n.d(t, { EW: () => s });
            var r = n(202784),
                o = 0;
            function s() {
                r.useEffect(() => {
                    const e = document.querySelectorAll("[data-radix-focus-guard]");
                    return (
                        document.body.insertAdjacentElement("afterbegin", e[0] ?? a()),
                        document.body.insertAdjacentElement("beforeend", e[1] ?? a()),
                        o++,
                        () => {
                            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), o--;
                        }
                    );
                }, []);
            }
            function a() {
                const e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), (e.tabIndex = 0), (e.style.outline = "none"), (e.style.opacity = "0"), (e.style.position = "fixed"), (e.style.pointerEvents = "none"), e;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-27545368.0a99d5ca.js.map
