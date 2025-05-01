"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.Insights~ondemand.XChat"],
    {
        816828: (e, t, n) => {
            n.d(t, { _: () => c });
            var r = n(552322),
                a = n(110929),
                o = n(202784),
                i = n(840489);
            const l = (0, o.forwardRef)(function ({ className: e, ...t }, n) {
                    return (0, r.jsx)("input", { ...t, className: (0, i.Z)("border-box font-chirp text-text m-0 w-full bg-transparent font-normal outline-none disabled:opacity-50", e), ref: n });
                }),
                s = (0, o.forwardRef)(function ({ className: e, ...t }, n) {
                    const a = (function (e) {
                        const t = (0, o.useRef)(null);
                        return (
                            (0, o.useEffect)(() => {
                                e && ("function" == typeof e ? e(t.current) : (e.current = t.current));
                            }, [e]),
                            t
                        );
                    })(n);
                    return (
                        (0, o.useEffect)(() => {
                            a.current && void 0 !== t.value && ((a.current.style.height = "auto"), (a.current.style.height = `${a.current.scrollHeight}px`));
                        }, [t.value, a]),
                        (0, r.jsx)("textarea", { ...t, className: (0, i.Z)("border-box font-chirp text-text m-0 w-full resize-none bg-transparent font-normal outline-none disabled:opacity-50", e), ref: a, rows: 1 })
                    );
                }),
                u = (0, o.forwardRef)(function ({ multiline: e, ...t }, n) {
                    return e ? (0, r.jsx)(s, { ...t, ref: n }) : (0, r.jsx)(l, { ...t, ref: n });
                }),
                d = (0, a.j)("flex items-center gap-2 overflow-hidden placeholder:text-gray-800", { variants: { borderRadius: { "2xLarge": "rounded-2xl", "3xLarge": "rounded-3xl", full: "rounded-full", large: "rounded-lg", medium: "rounded-md", none: "rounded-none", small: "rounded-sm", xLarge: "rounded-xl", true: "rounded" }, variant: { default: "has-[:invalid]:border-red-500 focus-within:border-primary border border-solid border-gray-200 p-2", dashed: "border-2 border-dashed border-gray-200 !pe-2" } }, defaultVariants: { variant: "default" } }),
                c = (0, o.forwardRef)(function ({ borderRadius: e, variant: t, leftContent: n, rightContent: o, ...i }, l) {
                    return (0, r.jsxs)("div", { className: d({ borderRadius: e ?? (i.multiline ? "3xLarge" : "full"), className: (0, a.cx)(n ? "ps-3" : "ps-4", o ? "pe-3" : "pe-4"), variant: t }), children: [n, (0, r.jsx)(u, { ...i, ref: l }), o] });
                });
        },
        461222: (e, t, n) => {
            n.d(t, { A: () => i, S: () => l });
            var r = n(552322),
                a = n(202784),
                o = n(941204);
            function i({ color: e = "gray700", ...t }) {
                return (0, r.jsx)(o.x, { ...t, "aria-hidden": !0, className: "shrink-0 px-1", color: e, children: "·" });
            }
            function l({ children: e, ...t }) {
                const n = [];
                return (
                    a.Children.forEach(e, (e) => {
                        const a = n.length;
                        e && (a > 0 && n.push((0, r.jsx)(i, { ...t }, `middot-${a}`)), n.push(e));
                    }),
                    n.length ? (0, r.jsx)("div", { className: "shrink-1 flex items-center", children: n }) : null
                );
            }
        },
        595455: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(552322);
            const a = (e) => (0, r.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, r.jsx)("path", { d: "M20.29 2.29l-2.34 2.34C16.47 3.01 14.34 2 12 2 7.93 2 4.51 5.02 4 9.05L2.87 18h1.72l-2.3 2.29 1.42 1.42 18-18-1.42-1.42zM6.59 16H5.13l.85-6.7C6.36 6.27 8.94 4 12 4c1.79 0 3.42.78 4.54 2.05L6.59 16zM12 22c-1.57 0-2.98-.73-3.89-1.86l1.42-1.43c.55.78 1.45 1.29 2.47 1.29 1.31 0 2.42-.83 2.83-2H12v-2h6.86l-.74-5.87 1.76-1.76c.05.22.08.44.11.67L21.14 18H16.9c-.46 2.28-2.48 4-4.9 4z" }) });
        },
        498284: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(552322);
            const a = (e) => (0, r.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, r.jsx)("path", { d: "M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z" }) });
        },
        950268: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(552322);
            const a = (e) => (0, r.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, r.jsx)("path", { d: "M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z" }) });
        },
        517652: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(552322);
            const a = (e) => (0, r.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, r.jsx)("path", { d: "M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z" }) });
        },
        395828: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(552322);
            const a = (e) => (0, r.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, r.jsx)("path", { d: "M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z" }) });
        },
        194787: (e, t, n) => {
            n.d(t, { dy: () => z });
            var r = n(123825),
                a = n(202784);
            const o = a.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, onPress: () => {}, onRelease: () => {}, onDrag: () => {}, onNestedDrag: () => {}, onNestedOpenChange: () => {}, onNestedRelease: () => {}, openProp: void 0, dismissible: !1, isOpen: !1, isDragging: !1, keyboardIsOpen: { current: !1 }, snapPointsOffset: null, snapPoints: null, handleOnly: !1, modal: !1, shouldFade: !1, activeSnapPoint: null, onOpenChange: () => {}, setActiveSnapPoint: () => {}, closeDrawer: () => {}, direction: "bottom", shouldAnimate: { current: !0 }, shouldScaleBackground: !1, setBackgroundColorOnScale: !0, noBodyStyles: !1, container: null, autoFocus: !1 }),
                i = () => {
                    const e = a.useContext(o);
                    if (!e) throw new Error("useDrawerContext must be used within a Drawer.Root");
                    return e;
                };
            function l() {
                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            }
            function s() {
                return d(/^iPad/) || (d(/^Mac/) && navigator.maxTouchPoints > 1);
            }
            function u() {
                return d(/^iPhone/) || s();
            }
            function d(e) {
                return "undefined" != typeof window && null != window.navigator ? e.test(window.navigator.platform) : void 0;
            }
            !(function (e) {
                if (!e || "undefined" == typeof document) return;
                let t = document.head || document.getElementsByTagName("head")[0],
                    n = document.createElement("style");
                (n.type = "text/css"), t.appendChild(n), n.styleSheet ? (n.styleSheet.cssText = e) : n.appendChild(document.createTextNode(e));
            })(
                "[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}",
            );
            const c = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect;
            function f(...e) {
                return (...t) => {
                    for (let n of e) "function" == typeof n && n(...t);
                };
            }
            const m = "undefined" != typeof document && window.visualViewport;
            function p(e) {
                let t = window.getComputedStyle(e);
                return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
            }
            function h(e) {
                for (p(e) && (e = e.parentElement); e && !p(e); ) e = e.parentElement;
                return e || document.scrollingElement || document.documentElement;
            }
            const v = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
            let g,
                w = 0;
            function y(e = {}) {
                let { isDisabled: t } = e;
                c(() => {
                    if (!t)
                        return (
                            w++,
                            1 === w &&
                                u() &&
                                (g = (function () {
                                    let e,
                                        t = 0,
                                        n = (n) => {
                                            (e = h(n.target)), (e === document.documentElement && e === document.body) || (t = n.changedTouches[0].pageY);
                                        },
                                        r = (n) => {
                                            if (!e || e === document.documentElement || e === document.body) return void n.preventDefault();
                                            let r = n.changedTouches[0].pageY,
                                                a = e.scrollTop,
                                                o = e.scrollHeight - e.clientHeight;
                                            0 !== o && (((a <= 0 && r > t) || (a >= o && r < t)) && n.preventDefault(), (t = r));
                                        },
                                        a = (e) => {
                                            let t = e.target;
                                            R(t) &&
                                                t !== document.activeElement &&
                                                (e.preventDefault(),
                                                (t.style.transform = "translateY(-2000px)"),
                                                t.focus(),
                                                requestAnimationFrame(() => {
                                                    t.style.transform = "";
                                                }));
                                        },
                                        o = (e) => {
                                            let t = e.target;
                                            R(t) &&
                                                ((t.style.transform = "translateY(-2000px)"),
                                                requestAnimationFrame(() => {
                                                    (t.style.transform = ""),
                                                        m &&
                                                            (m.height < window.innerHeight
                                                                ? requestAnimationFrame(() => {
                                                                      x(t);
                                                                  })
                                                                : m.addEventListener("resize", () => x(t), { once: !0 }));
                                                }));
                                        },
                                        i = () => {
                                            window.scrollTo(0, 0);
                                        },
                                        l = window.pageXOffset,
                                        s = window.pageYOffset,
                                        u = f(
                                            (function (e, t, n) {
                                                let r = e.style[t];
                                                return (
                                                    (e.style[t] = n),
                                                    () => {
                                                        e.style[t] = r;
                                                    }
                                                );
                                            })(document.documentElement, "paddingRight", window.innerWidth - document.documentElement.clientWidth + "px"),
                                        );
                                    window.scrollTo(0, 0);
                                    let d = f(b(document, "touchstart", n, { passive: !1, capture: !0 }), b(document, "touchmove", r, { passive: !1, capture: !0 }), b(document, "touchend", a, { passive: !1, capture: !0 }), b(document, "focus", o, !0), b(window, "scroll", i));
                                    return () => {
                                        u(), d(), window.scrollTo(l, s);
                                    };
                                })()),
                            () => {
                                w--, 0 === w && (null == g || g());
                            }
                        );
                }, [t]);
            }
            function b(e, t, n, r) {
                return (
                    e.addEventListener(t, n, r),
                    () => {
                        e.removeEventListener(t, n, r);
                    }
                );
            }
            function x(e) {
                let t = document.scrollingElement || document.documentElement;
                for (; e && e !== t; ) {
                    let t = h(e);
                    if (t !== document.documentElement && t !== document.body && t !== e) {
                        let n = t.getBoundingClientRect().top,
                            r = e.getBoundingClientRect().top;
                        e.getBoundingClientRect().bottom > t.getBoundingClientRect().bottom + 24 && (t.scrollTop += r - n);
                    }
                    e = t.parentElement;
                }
            }
            function R(e) {
                return (e instanceof HTMLInputElement && !v.has(e.type)) || e instanceof HTMLTextAreaElement || (e instanceof HTMLElement && e.isContentEditable);
            }
            function E(...e) {
                return a.useCallback(
                    (function (...e) {
                        return (t) =>
                            e.forEach((e) =>
                                (function (e, t) {
                                    "function" == typeof e ? e(t) : null != e && (e.current = t);
                                })(e, t),
                            );
                    })(...e),
                    e,
                );
            }
            const P = new WeakMap();
            function C(e, t, n = !1) {
                if (!(e && e instanceof HTMLElement)) return;
                let r = {};
                Object.entries(t).forEach(([t, n]) => {
                    t.startsWith("--") ? e.style.setProperty(t, n) : ((r[t] = e.style[t]), (e.style[t] = n));
                }),
                    n || P.set(e, r);
            }
            const S = (e) => {
                switch (e) {
                    case "top":
                    case "bottom":
                        return !0;
                    case "left":
                    case "right":
                        return !1;
                    default:
                        return e;
                }
            };
            function T(e, t) {
                if (!e) return null;
                const n = window.getComputedStyle(e),
                    r = n.transform || n.webkitTransform || n.mozTransform;
                let a = r.match(/^matrix3d\((.+)\)$/);
                return a ? parseFloat(a[1].split(", ")[S(t) ? 13 : 12]) : ((a = r.match(/^matrix\((.+)\)$/)), a ? parseFloat(a[1].split(", ")[S(t) ? 5 : 4]) : null);
            }
            function O(e, t) {
                if (!e) return () => {};
                const n = e.style.cssText;
                return (
                    Object.assign(e.style, t),
                    () => {
                        e.style.cssText = n;
                    }
                );
            }
            const D = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] },
                $ = 16,
                A = "vaul-dragging";
            function M(e) {
                const t = a.useRef(e);
                return (
                    a.useEffect(() => {
                        t.current = e;
                    }),
                    a.useMemo(
                        () =>
                            (...e) =>
                                null == t.current ? void 0 : t.current.call(t, ...e),
                        [],
                    )
                );
            }
            function k({ prop: e, defaultProp: t, onChange: n = () => {} }) {
                const [r, o] = (function ({ defaultProp: e, onChange: t }) {
                        const n = a.useState(e),
                            [r] = n,
                            o = a.useRef(r),
                            i = M(t);
                        return (
                            a.useEffect(() => {
                                o.current !== r && (i(r), (o.current = r));
                            }, [r, o, i]),
                            n
                        );
                    })({ defaultProp: t, onChange: n }),
                    i = void 0 !== e,
                    l = i ? e : r,
                    s = M(n),
                    u = a.useCallback(
                        (t) => {
                            if (i) {
                                const n = "function" == typeof t ? t(e) : t;
                                n !== e && s(n);
                            } else o(t);
                        },
                        [i, e, o, s],
                    );
                return [l, u];
            }
            let N = null;
            function B({ open: e, onOpenChange: t, children: n, onDrag: i, onRelease: s, snapPoints: d, shouldScaleBackground: c = !1, setBackgroundColorOnScale: f = !0, closeThreshold: m = 0.25, scrollLockTimeout: p = 100, dismissible: h = !0, handleOnly: v = !1, fadeFromIndex: g = d && d.length - 1, activeSnapPoint: w, setActiveSnapPoint: b, fixed: x, modal: E = !0, onClose: O, nested: M, noBodyStyles: B = !1, direction: L = "bottom", defaultOpen: F = !1, disablePreventScroll: I = !0, snapToSequentialPoint: z = !1, preventScrollRestoration: j = !1, repositionInputs: H = !0, onAnimationEnd: W, container: U, autoFocus: q = !1 }) {
                var V, Y;
                const [X = !1, _] = k({
                        defaultProp: F,
                        prop: e,
                        onChange: (e) => {
                            null == t || t(e),
                                e || M || Ce(),
                                setTimeout(() => {
                                    null == W || W(e);
                                }, 1e3 * D.DURATION),
                                e &&
                                    !E &&
                                    "undefined" != typeof window &&
                                    window.requestAnimationFrame(() => {
                                        document.body.style.pointerEvents = "auto";
                                    }),
                                e || (document.body.style.pointerEvents = "auto");
                        },
                    }),
                    [Z, G] = a.useState(!1),
                    [J, K] = a.useState(!1),
                    [Q, ee] = a.useState(!1),
                    te = a.useRef(null),
                    ne = a.useRef(null),
                    re = a.useRef(null),
                    ae = a.useRef(null),
                    oe = a.useRef(null),
                    ie = a.useRef(!1),
                    le = a.useRef(null),
                    se = a.useRef(0),
                    ue = a.useRef(!1),
                    de = a.useRef(!F),
                    ce = a.useRef(0),
                    fe = a.useRef(null),
                    me = a.useRef((null == (V = fe.current) ? void 0 : V.getBoundingClientRect().height) || 0),
                    pe = a.useRef((null == (Y = fe.current) ? void 0 : Y.getBoundingClientRect().width) || 0),
                    he = a.useRef(0),
                    ve = a.useCallback((e) => {
                        d && e === xe.length - 1 && (ne.current = new Date());
                    }, []),
                    {
                        activeSnapPoint: ge,
                        activeSnapPointIndex: we,
                        setActiveSnapPoint: ye,
                        onRelease: be,
                        snapPointsOffset: xe,
                        onDrag: Re,
                        shouldFade: Ee,
                        getPercentageDragged: Pe,
                    } = (function ({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: i, onSnapPointChange: l, direction: s = "bottom", container: u, snapToSequentialPoint: d }) {
                        const [c, f] = k({ prop: e, defaultProp: null == n ? void 0 : n[0], onChange: t }),
                            [m, p] = a.useState("undefined" != typeof window ? { innerWidth: window.innerWidth, innerHeight: window.innerHeight } : void 0);
                        a.useEffect(() => {
                            function e() {
                                p({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
                            }
                            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
                        }, []);
                        const h = a.useMemo(() => c === (null == n ? void 0 : n[n.length - 1]) || null, [n, c]),
                            v = a.useMemo(() => {
                                var e;
                                return null != (e = null == n ? void 0 : n.findIndex((e) => e === c)) ? e : null;
                            }, [n, c]),
                            g = (n && n.length > 0 && (i || 0 === i) && !Number.isNaN(i) && n[i] === c) || !n,
                            w = a.useMemo(() => {
                                const e = u ? { width: u.getBoundingClientRect().width, height: u.getBoundingClientRect().height } : "undefined" != typeof window ? { width: window.innerWidth, height: window.innerHeight } : { width: 0, height: 0 };
                                var t;
                                return null !=
                                    (t =
                                        null == n
                                            ? void 0
                                            : n.map((t) => {
                                                  const n = "string" == typeof t;
                                                  let r = 0;
                                                  if ((n && (r = parseInt(t, 10)), S(s))) {
                                                      const a = n ? r : m ? t * e.height : 0;
                                                      return m ? ("bottom" === s ? e.height - a : -e.height + a) : a;
                                                  }
                                                  const a = n ? r : m ? t * e.width : 0;
                                                  return m ? ("right" === s ? e.width - a : -e.width + a) : a;
                                              }))
                                    ? t
                                    : [];
                            }, [n, m, u]),
                            y = a.useMemo(() => (null !== v ? (null == w ? void 0 : w[v]) : null), [w, v]),
                            b = a.useCallback(
                                (e) => {
                                    var t;
                                    const a = null != (t = null == w ? void 0 : w.findIndex((t) => t === e)) ? t : null;
                                    l(a), C(r.current, { transition: `transform ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})`, transform: S(s) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)` }), w && a !== w.length - 1 && void 0 !== i && a !== i && a < i ? C(o.current, { transition: `opacity ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})`, opacity: "0" }) : C(o.current, { transition: `opacity ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})`, opacity: "1" }), f(null == n ? void 0 : n[Math.max(a, 0)]);
                                },
                                [r.current, n, w, i, o, f],
                            );
                        return (
                            a.useEffect(() => {
                                if (c || e) {
                                    var t;
                                    const r = null != (t = null == n ? void 0 : n.findIndex((t) => t === e || t === c)) ? t : -1;
                                    w && -1 !== r && "number" == typeof w[r] && b(w[r]);
                                }
                            }, [c, e, n, w, b]),
                            {
                                isLastSnapPoint: h,
                                activeSnapPoint: c,
                                shouldFade: g,
                                getPercentageDragged: function (e, t) {
                                    if (!n || "number" != typeof v || !w || void 0 === i) return null;
                                    const r = v === i - 1;
                                    if (v >= i && t) return 0;
                                    if (r && !t) return 1;
                                    if (!g && !r) return null;
                                    const a = r ? v + 1 : v - 1,
                                        o = r ? w[a] - w[a - 1] : w[a + 1] - w[a],
                                        l = e / Math.abs(o);
                                    return r ? 1 - l : l;
                                },
                                setActiveSnapPoint: f,
                                activeSnapPointIndex: v,
                                onRelease: function ({ draggedDistance: e, closeDrawer: t, velocity: r, dismissible: a }) {
                                    if (void 0 === i) return;
                                    const l = "bottom" === s || "right" === s ? (null != y ? y : 0) - e : (null != y ? y : 0) + e,
                                        u = 0 === v,
                                        c = e > 0;
                                    if ((v === i - 1 && C(o.current, { transition: `opacity ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})` }), !d && r > 2 && !c)) return void (a ? t() : b(w[0]));
                                    if (!d && r > 2 && c && w && n) return void b(w[n.length - 1]);
                                    const f = null == w ? void 0 : w.reduce((e, t) => ("number" != typeof e || "number" != typeof t ? e : Math.abs(t - l) < Math.abs(e - l) ? t : e)),
                                        m = S(s) ? window.innerHeight : window.innerWidth;
                                    if (r > 0.4 && Math.abs(e) < 0.4 * m) {
                                        const e = c ? 1 : -1;
                                        if (e > 0 && h && n) return void b(w[n.length - 1]);
                                        if ((u && e < 0 && a && t(), null === v)) return;
                                        b(w[v + e]);
                                    } else b(f);
                                },
                                onDrag: function ({ draggedDistance: e }) {
                                    if (null === y) return;
                                    const t = "bottom" === s || "right" === s ? y - e : y + e;
                                    (("bottom" === s || "right" === s) && t < w[w.length - 1]) || (("top" === s || "left" === s) && t > w[w.length - 1]) || C(r.current, { transform: S(s) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)` });
                                },
                                snapPointsOffset: w,
                            }
                        );
                    })({ snapPoints: d, activeSnapPointProp: w, setActiveSnapPointProp: b, drawerRef: fe, fadeFromIndex: g, overlayRef: te, onSnapPointChange: ve, direction: L, container: U, snapToSequentialPoint: z });
                y({ isDisabled: !X || J || !E || Q || !Z || !H || !I });
                const { restorePositionSetting: Ce } = (function ({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: i }) {
                    const [s, u] = a.useState(() => ("undefined" != typeof window ? window.location.href : "")),
                        d = a.useRef(0),
                        c = a.useCallback(() => {
                            if (l() && null === N && e && !i) {
                                N = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height, right: "unset" };
                                const { scrollX: e, innerHeight: t } = window;
                                document.body.style.setProperty("position", "fixed", "important"),
                                    Object.assign(document.body.style, { top: -d.current + "px", left: -e + "px", right: "0px", height: "auto" }),
                                    window.setTimeout(
                                        () =>
                                            window.requestAnimationFrame(() => {
                                                const e = t - window.innerHeight;
                                                e && d.current >= t && (document.body.style.top = -(d.current + e) + "px");
                                            }),
                                        300,
                                    );
                            }
                        }, [e]),
                        f = a.useCallback(() => {
                            if (l() && null !== N && !i) {
                                const e = -parseInt(document.body.style.top, 10),
                                    t = -parseInt(document.body.style.left, 10);
                                Object.assign(document.body.style, N),
                                    window.requestAnimationFrame(() => {
                                        o && s !== window.location.href ? u(window.location.href) : window.scrollTo(t, e);
                                    }),
                                    (N = null);
                            }
                        }, [s]);
                    return (
                        a.useEffect(() => {
                            function e() {
                                d.current = window.scrollY;
                            }
                            return (
                                e(),
                                window.addEventListener("scroll", e),
                                () => {
                                    window.removeEventListener("scroll", e);
                                }
                            );
                        }, []),
                        a.useEffect(() => {
                            if (t)
                                return () => {
                                    "undefined" != typeof document && (document.querySelector("[data-vaul-drawer]") || f());
                                };
                        }, [t, f]),
                        a.useEffect(() => {
                            !n &&
                                r &&
                                (e
                                    ? (!window.matchMedia("(display-mode: standalone)").matches && c(),
                                      t ||
                                          window.setTimeout(() => {
                                              f();
                                          }, 500))
                                    : f());
                        }, [e, r, s, t, n, c, f]),
                        { restorePositionSetting: f }
                    );
                })({ isOpen: X, modal: E, nested: null != M && M, hasBeenOpened: Z, preventScrollRestoration: j, noBodyStyles: B });
                function Se() {
                    return (window.innerWidth - 26) / window.innerWidth;
                }
                function Te(e, t) {
                    var n;
                    let r = e;
                    const a = null == (n = window.getSelection()) ? void 0 : n.toString(),
                        o = fe.current ? T(fe.current, L) : null,
                        i = new Date();
                    if ("SELECT" === r.tagName) return !1;
                    if (r.hasAttribute("data-vaul-no-drag") || r.closest("[data-vaul-no-drag]")) return !1;
                    if ("right" === L || "left" === L) return !0;
                    if (ne.current && i.getTime() - ne.current.getTime() < 500) return !1;
                    if (null !== o && ("bottom" === L ? o > 0 : o < 0)) return !0;
                    if (a && a.length > 0) return !1;
                    if (oe.current && i.getTime() - oe.current.getTime() < p && 0 === o) return (oe.current = i), !1;
                    if (t) return (oe.current = i), !1;
                    for (; r; ) {
                        if (r.scrollHeight > r.clientHeight) {
                            if (0 !== r.scrollTop) return (oe.current = new Date()), !1;
                            if ("dialog" === r.getAttribute("role")) return !0;
                        }
                        r = r.parentNode;
                    }
                    return !0;
                }
                function Oe(e) {
                    !(function () {
                        if (!J || !fe.current) return;
                        fe.current.classList.remove(A), (ie.current = !1), K(!1), (ae.current = new Date());
                    })(),
                        null == O || O(),
                        e || _(!1),
                        setTimeout(() => {
                            d && ye(d[0]);
                        }, 1e3 * D.DURATION);
                }
                function De() {
                    if (!fe.current) return;
                    const e = document.querySelector("[data-vaul-drawer-wrapper]"),
                        t = T(fe.current, L);
                    C(fe.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})` }), C(te.current, { transition: `opacity ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})`, opacity: "1" }), c && t && t > 0 && X && C(e, { borderRadius: "8px", overflow: "hidden", ...(S(L) ? { transform: `scale(${Se()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${Se()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }), transitionProperty: "transform, border-radius", transitionDuration: `${D.DURATION}s`, transitionTimingFunction: `cubic-bezier(${D.EASE.join(",")})` }, !0);
                }
                return (
                    a.useEffect(() => {
                        window.requestAnimationFrame(() => {
                            de.current = !0;
                        });
                    }, []),
                    a.useEffect(() => {
                        var e;
                        function t() {
                            if (!fe.current || !H) return;
                            if (R(document.activeElement) || ue.current) {
                                var e;
                                const t = (null == (e = window.visualViewport) ? void 0 : e.height) || 0,
                                    n = window.innerHeight;
                                let r = n - t;
                                const a = fe.current.getBoundingClientRect().height || 0,
                                    o = a > 0.8 * n;
                                he.current || (he.current = a);
                                const i = fe.current.getBoundingClientRect().top;
                                if ((Math.abs(ce.current - r) > 60 && (ue.current = !ue.current), d && d.length > 0 && xe && we)) {
                                    r += xe[we] || 0;
                                }
                                if (((ce.current = r), a > t || ue.current)) {
                                    const e = fe.current.getBoundingClientRect().height;
                                    let n = e;
                                    e > t && (n = t - (o ? i : 26)), (fe.current.style.height = x ? e - Math.max(r, 0) + "px" : `${Math.max(n, t - i)}px`);
                                } else
                                    (function () {
                                        const e = navigator.userAgent;
                                        return "undefined" != typeof window && ((/Firefox/.test(e) && /Mobile/.test(e)) || /FxiOS/.test(e));
                                    })() || (fe.current.style.height = `${he.current}px`);
                                d && d.length > 0 && !ue.current ? (fe.current.style.bottom = "0px") : (fe.current.style.bottom = `${Math.max(r, 0)}px`);
                            }
                        }
                        return (
                            null == (e = window.visualViewport) || e.addEventListener("resize", t),
                            () => {
                                var e;
                                return null == (e = window.visualViewport) ? void 0 : e.removeEventListener("resize", t);
                            }
                        );
                    }, [we, d, xe]),
                    a.useEffect(
                        () => (
                            X && (C(document.documentElement, { scrollBehavior: "auto" }), (ne.current = new Date())),
                            () => {
                                !(function (e, t) {
                                    if (!(e && e instanceof HTMLElement)) return;
                                    let n = P.get(e);
                                    n && (e.style[t] = n[t]);
                                })(document.documentElement, "scrollBehavior");
                            }
                        ),
                        [X],
                    ),
                    a.useEffect(() => {
                        E ||
                            window.requestAnimationFrame(() => {
                                document.body.style.pointerEvents = "auto";
                            });
                    }, [E]),
                    a.createElement(
                        r.fC,
                        {
                            defaultOpen: F,
                            onOpenChange: (e) => {
                                (h || e) && (e ? G(!0) : Oe(!0), _(e));
                            },
                            open: X,
                        },
                        a.createElement(
                            o.Provider,
                            {
                                value: {
                                    activeSnapPoint: ge,
                                    snapPoints: d,
                                    setActiveSnapPoint: ye,
                                    drawerRef: fe,
                                    overlayRef: te,
                                    onOpenChange: t,
                                    onPress: function (e) {
                                        var t, n;
                                        (h || d) && ((fe.current && !fe.current.contains(e.target)) || ((me.current = (null == (t = fe.current) ? void 0 : t.getBoundingClientRect().height) || 0), (pe.current = (null == (n = fe.current) ? void 0 : n.getBoundingClientRect().width) || 0), K(!0), (re.current = new Date()), u() && window.addEventListener("touchend", () => (ie.current = !1), { once: !0 }), e.target.setPointerCapture(e.pointerId), (se.current = S(L) ? e.pageY : e.pageX)));
                                    },
                                    onRelease: function (e) {
                                        if (!J || !fe.current) return;
                                        fe.current.classList.remove(A), (ie.current = !1), K(!1), (ae.current = new Date());
                                        const t = T(fe.current, L);
                                        if (!e || !Te(e.target, !1) || !t || Number.isNaN(t)) return;
                                        if (null === re.current) return;
                                        const n = ae.current.getTime() - re.current.getTime(),
                                            r = se.current - (S(L) ? e.pageY : e.pageX),
                                            a = Math.abs(r) / n;
                                        if (
                                            (a > 0.05 &&
                                                (ee(!0),
                                                setTimeout(() => {
                                                    ee(!1);
                                                }, 200)),
                                            d)
                                        ) {
                                            return be({ draggedDistance: r * ("bottom" === L || "right" === L ? 1 : -1), closeDrawer: Oe, velocity: a, dismissible: h }), void (null == s || s(e, !0));
                                        }
                                        if ("bottom" === L || "right" === L ? r > 0 : r < 0) return De(), void (null == s || s(e, !0));
                                        if (a > 0.4) return Oe(), void (null == s || s(e, !1));
                                        var o;
                                        const i = Math.min(null != (o = fe.current.getBoundingClientRect().height) ? o : 0, window.innerHeight);
                                        var l;
                                        const u = Math.min(null != (l = fe.current.getBoundingClientRect().width) ? l : 0, window.innerWidth),
                                            c = "left" === L || "right" === L;
                                        if (Math.abs(t) >= (c ? u : i) * m) return Oe(), void (null == s || s(e, !1));
                                        null == s || s(e, !0), De();
                                    },
                                    onDrag: function (e) {
                                        var t;
                                        if (fe.current && J) {
                                            const n = "bottom" === L || "right" === L ? 1 : -1,
                                                r = (se.current - (S(L) ? e.pageY : e.pageX)) * n,
                                                a = r > 0,
                                                o = d && !h && !a;
                                            if (o && 0 === we) return;
                                            const l = Math.abs(r),
                                                s = document.querySelector("[data-vaul-drawer-wrapper]");
                                            let u = l / ("bottom" === L || "top" === L ? me.current : pe.current);
                                            const f = Pe(l, a);
                                            if ((null !== f && (u = f), o && u >= 1)) return;
                                            if (!ie.current && !Te(e.target, a)) return;
                                            if ((fe.current.classList.add(A), (ie.current = !0), C(fe.current, { transition: "none" }), C(te.current, { transition: "none" }), d && Re({ draggedDistance: r }), a && !d)) {
                                                const e = ((t = r), 8 * (Math.log(t + 1) - 2)),
                                                    a = Math.min(-1 * e, 0) * n;
                                                return void C(fe.current, { transform: S(L) ? `translate3d(0, ${a}px, 0)` : `translate3d(${a}px, 0, 0)` });
                                            }
                                            const m = 1 - u;
                                            if (((Ee || (g && we === g - 1)) && (null == i || i(e, u), C(te.current, { opacity: `${m}`, transition: "none" }, !0)), s && te.current && c)) {
                                                const e = Math.min(Se() + u * (1 - Se()), 1),
                                                    t = 8 - 8 * u,
                                                    n = Math.max(0, 14 - 14 * u);
                                                C(s, { borderRadius: `${t}px`, transform: S(L) ? `scale(${e}) translate3d(0, ${n}px, 0)` : `scale(${e}) translate3d(${n}px, 0, 0)`, transition: "none" }, !0);
                                            }
                                            if (!d) {
                                                const e = l * n;
                                                C(fe.current, { transform: S(L) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)` });
                                            }
                                        }
                                    },
                                    dismissible: h,
                                    shouldAnimate: de,
                                    handleOnly: v,
                                    isOpen: X,
                                    isDragging: J,
                                    shouldFade: Ee,
                                    closeDrawer: Oe,
                                    onNestedDrag: function (e, t) {
                                        if (t < 0) return;
                                        const n = (window.innerWidth - $) / window.innerWidth,
                                            r = n + t * (1 - n),
                                            a = t * $ - 16;
                                        C(fe.current, { transform: S(L) ? `scale(${r}) translate3d(0, ${a}px, 0)` : `scale(${r}) translate3d(${a}px, 0, 0)`, transition: "none" });
                                    },
                                    onNestedOpenChange: function (e) {
                                        const t = e ? (window.innerWidth - $) / window.innerWidth : 1,
                                            n = e ? -16 : 0;
                                        le.current && window.clearTimeout(le.current),
                                            C(fe.current, { transition: `transform ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})`, transform: `scale(${t}) translate3d(0, ${n}px, 0)` }),
                                            !e &&
                                                fe.current &&
                                                (le.current = setTimeout(() => {
                                                    const e = T(fe.current, L);
                                                    C(fe.current, { transition: "none", transform: S(L) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)` });
                                                }, 500));
                                    },
                                    onNestedRelease: function (e, t) {
                                        const n = S(L) ? window.innerHeight : window.innerWidth,
                                            r = t ? (n - $) / n : 1,
                                            a = t ? -16 : 0;
                                        t && C(fe.current, { transition: `transform ${D.DURATION}s cubic-bezier(${D.EASE.join(",")})`, transform: S(L) ? `scale(${r}) translate3d(0, ${a}px, 0)` : `scale(${r}) translate3d(${a}px, 0, 0)` });
                                    },
                                    keyboardIsOpen: ue,
                                    modal: E,
                                    snapPointsOffset: xe,
                                    activeSnapPointIndex: we,
                                    direction: L,
                                    shouldScaleBackground: c,
                                    setBackgroundColorOnScale: f,
                                    noBodyStyles: B,
                                    container: U,
                                    autoFocus: q,
                                },
                            },
                            n,
                        ),
                    )
                );
            }
            const L = a.forwardRef(function ({ ...e }, t) {
                const { overlayRef: n, snapPoints: o, onRelease: l, shouldFade: s, isOpen: u, modal: d, shouldAnimate: c } = i(),
                    f = E(t, n),
                    m = o && o.length > 0;
                if (!d) return null;
                const p = a.useCallback((e) => l(e), [l]);
                return a.createElement(r.aV, { onMouseUp: p, ref: f, "data-vaul-overlay": "", "data-vaul-snap-points": u && m ? "true" : "false", "data-vaul-snap-points-overlay": u && s ? "true" : "false", "data-vaul-animate": (null == c ? void 0 : c.current) ? "true" : "false", ...e });
            });
            L.displayName = "Drawer.Overlay";
            const F = a.forwardRef(function ({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...o }, l) {
                const { drawerRef: s, onPress: u, onRelease: d, onDrag: c, keyboardIsOpen: f, snapPointsOffset: m, activeSnapPointIndex: p, modal: h, isOpen: v, direction: g, snapPoints: w, container: y, handleOnly: b, shouldAnimate: x, autoFocus: R } = i(),
                    [P, C] = a.useState(!1),
                    T = E(l, s),
                    $ = a.useRef(null),
                    A = a.useRef(null),
                    M = a.useRef(!1),
                    k = w && w.length > 0;
                !(function () {
                    const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: o } = i(),
                        l = a.useRef(null),
                        s = (0, a.useMemo)(() => document.body.style.backgroundColor, []);
                    function u() {
                        return (window.innerWidth - 26) / window.innerWidth;
                    }
                    a.useEffect(() => {
                        if (t && n) {
                            l.current && clearTimeout(l.current);
                            const t = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
                            if (!t) return;
                            r && !o && O(document.body, { background: "black" }), O(t, { transformOrigin: S(e) ? "top" : "left", transitionProperty: "transform, border-radius", transitionDuration: `${D.DURATION}s`, transitionTimingFunction: `cubic-bezier(${D.EASE.join(",")})` });
                            const n = O(t, { borderRadius: "8px", overflow: "hidden", ...(S(e) ? { transform: `scale(${u()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` } : { transform: `scale(${u()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)` }) });
                            return () => {
                                n(),
                                    (l.current = window.setTimeout(() => {
                                        s ? (document.body.style.background = s) : document.body.style.removeProperty("background");
                                    }, 1e3 * D.DURATION));
                            };
                        }
                    }, [t, n, s]);
                })();
                function N(e) {
                    ($.current = null), (M.current = !1), d(e);
                }
                return (
                    a.useEffect(() => {
                        k &&
                            window.requestAnimationFrame(() => {
                                C(!0);
                            });
                    }, []),
                    a.createElement(r.VY, {
                        "data-vaul-drawer-direction": g,
                        "data-vaul-drawer": "",
                        "data-vaul-delayed-snap-points": P ? "true" : "false",
                        "data-vaul-snap-points": v && k ? "true" : "false",
                        "data-vaul-custom-container": y ? "true" : "false",
                        "data-vaul-animate": (null == x ? void 0 : x.current) ? "true" : "false",
                        ...o,
                        ref: T,
                        style: m && m.length > 0 ? { "--snap-point-height": `${m[null != p ? p : 0]}px`, ...t } : t,
                        onPointerDown: (e) => {
                            b || (null == o.onPointerDown || o.onPointerDown.call(o, e), ($.current = { x: e.pageX, y: e.pageY }), u(e));
                        },
                        onOpenAutoFocus: (e) => {
                            null == n || n(e), R || e.preventDefault();
                        },
                        onPointerDownOutside: (t) => {
                            null == e || e(t), h && !t.defaultPrevented ? f.current && (f.current = !1) : t.preventDefault();
                        },
                        onFocusOutside: (e) => {
                            h || e.preventDefault();
                        },
                        onPointerMove: (e) => {
                            if (((A.current = e), b)) return;
                            if ((null == o.onPointerMove || o.onPointerMove.call(o, e), !$.current)) return;
                            const t = e.pageY - $.current.y,
                                n = e.pageX - $.current.x,
                                r = "touch" === e.pointerType ? 10 : 2,
                                a = ((e, t, n = 0) => {
                                    if (M.current) return !0;
                                    const r = Math.abs(e.y),
                                        a = Math.abs(e.x),
                                        o = a > r,
                                        i = ["bottom", "right"].includes(t) ? 1 : -1;
                                    if ("left" === t || "right" === t) {
                                        if (!(e.x * i < 0) && a >= 0 && a <= n) return o;
                                    } else if (!(e.y * i < 0) && r >= 0 && r <= n) return !o;
                                    return (M.current = !0), !0;
                                })({ x: n, y: t }, g, r);
                            a ? c(e) : (Math.abs(n) > r || Math.abs(t) > r) && ($.current = null);
                        },
                        onPointerUp: (e) => {
                            null == o.onPointerUp || o.onPointerUp.call(o, e), ($.current = null), (M.current = !1), d(e);
                        },
                        onPointerOut: (e) => {
                            null == o.onPointerOut || o.onPointerOut.call(o, e), N(A.current);
                        },
                        onContextMenu: (e) => {
                            null == o.onContextMenu || o.onContextMenu.call(o, e), A.current && N(A.current);
                        },
                    })
                );
            });
            F.displayName = "Drawer.Content";
            const I = a.forwardRef(function ({ preventCycle: e = !1, children: t, ...n }, r) {
                const { closeDrawer: o, isDragging: l, snapPoints: s, activeSnapPoint: u, setActiveSnapPoint: d, dismissible: c, handleOnly: f, isOpen: m, onPress: p, onDrag: h } = i(),
                    v = a.useRef(null),
                    g = a.useRef(!1);
                function w() {
                    v.current && window.clearTimeout(v.current), (g.current = !1);
                }
                return a.createElement(
                    "div",
                    {
                        onClick: function () {
                            g.current
                                ? w()
                                : window.setTimeout(() => {
                                      !(function () {
                                          if (l || e || g.current) return void w();
                                          if ((w(), !s || 0 === s.length)) return void (c || o());
                                          if (u === s[s.length - 1] && c) return void o();
                                          const t = s.findIndex((e) => e === u);
                                          if (-1 === t) return;
                                          const n = s[t + 1];
                                          d(n);
                                      })();
                                  }, 120);
                        },
                        onPointerCancel: w,
                        onPointerDown: (e) => {
                            f && p(e),
                                (v.current = window.setTimeout(() => {
                                    g.current = !0;
                                }, 250));
                        },
                        onPointerMove: (e) => {
                            f && h(e);
                        },
                        ref: r,
                        "data-vaul-drawer-visible": m ? "true" : "false",
                        "data-vaul-handle": "",
                        "aria-hidden": "true",
                        ...n,
                    },
                    a.createElement("span", { "data-vaul-handle-hitarea": "", "aria-hidden": "true" }, t),
                );
            });
            I.displayName = "Drawer.Handle";
            const z = {
                Root: B,
                NestedRoot: function ({ onDrag: e, onOpenChange: t, ...n }) {
                    const { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: l } = i();
                    if (!r) throw new Error("Drawer.NestedRoot must be placed in another drawer");
                    return a.createElement(B, {
                        nested: !0,
                        onClose: () => {
                            o(!1);
                        },
                        onDrag: (t, n) => {
                            r(t, n), null == e || e(t, n);
                        },
                        onOpenChange: (e) => {
                            e && o(e);
                        },
                        onRelease: l,
                        ...n,
                    });
                },
                Content: F,
                Overlay: L,
                Trigger: r.xz,
                Portal: function (e) {
                    const t = i(),
                        { container: n = t.container, ...o } = e;
                    return a.createElement(r.h_, { container: n, ...o });
                },
                Handle: I,
                Close: r.x8,
                Title: r.Dx,
                Description: r.dk,
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.Insights~ondemand.XChat.f3dbebca.js.map
