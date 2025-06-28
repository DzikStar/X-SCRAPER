"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-e96e9bea"],
    {
        6937: (e, t, a) => {
            a.d(t, { q: () => d });
            var r = a(552322),
                n = a(840489),
                i = a(202784);
            var l = a(322506);
            const o = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png";
            function d({ resolution: e, screenName: t, shape: a = "circle", size: d = "xLarge", url: s, withLink: b, className: c }) {
                const u = s
                        ? (function (e, t) {
                              return t ? e.replace(/(_[a-z0-9]+)?\.(?=jpeg|png|jpg$)/, `_${t}.`) : e;
                          })(s, e)
                        : void 0,
                    g = t && b,
                    m = g ? l.r : "div",
                    [f, p] = (0, i.useState)(!1),
                    x = (function (e) {
                        const t = (0, i.useRef)();
                        return (
                            (0, i.useEffect)(() => {
                                t.current = e;
                            }, [e]),
                            t.current
                        );
                    })(s);
                return (
                    (0, i.useEffect)(() => {
                        x !== s && p(!1);
                    }, [x, s]),
                    (0, r.jsx)(m, {
                        className: (0, n.Z)("min-size flex overflow-hidden bg-gray-300", "circle" === a && "rounded-full", "square" === a && "rounded-sm", "fill" === d && "size-full", "jumbo" === d && "min-h-16 min-w-16 size-16", "large" === d && "min-h-8 min-w-8 size-8", "medium" === d && "min-h-6 min-w-6 size-6", "small" === d && "min-h-4 min-w-4 size-4", "xLarge" === d && "min-h-10 min-w-10 size-10", "xxLarge" === d && "min-h-12 min-w-12 size-12", "xxxLarge" === d && "min-h-14 min-w-14 size-14", b && "transition duration-200 hover:brightness-90", c),
                        ...(g && { href: `https://x.com/${t}`, target: "external" === b ? "_blank" : void 0 }),
                        ...(u && {
                            children: (0, r.jsx)("img", {
                                alt: "user avatar",
                                className: "size-full",
                                loading: "lazy",
                                onError: (e) => {
                                    e.target.src === u && p(!0);
                                },
                                onLoad: (e) => {
                                    e.target.src === u && p(!1);
                                },
                                src: f ? o : u,
                            }),
                        }),
                    })
                );
            }
        },
        993165: (e, t, a) => {
            a.d(t, { z: () => g });
            var r = a(552322),
                n = a(549815),
                i = a(110929),
                l = a(202784),
                o = a(332161),
                d = a(644490),
                s = a(287326);
            const b = (0, i.j)("", { variants: { size: { large: "size-[22px]", medium: "size-5", small: "size-[18px]", xLarge: "size-6", xxLargeCompact: "size-4", xSmall: "size-4", xSmallCompact: "size-4" } } }),
                c = { large: "body", medium: "body", small: "subtext1", xLarge: "headline2", xxLargeCompact: "body", xSmall: "subtext1", xSmallCompact: "body" },
                u = (0, i.j)("inline-flex items-center justify-center gap-1 border border-solid transition focus-visible:outline disabled:pointer-events-none disabled:opacity-50", {
                    variants: {
                        backgroundColor: d.z7,
                        borderRadius: { "2xLarge": "rounded-2xl", "3xLarge": "rounded-3xl", full: "rounded-full", large: "rounded-lg", medium: "rounded-md", none: "rounded-none", small: "rounded-sm", xLarge: "rounded-xl", true: "rounded" },
                        color: d.eR,
                        padding: { large: "px-6", medium: "px-4", small: "px-4", xLarge: "px-8", xxLargeCompact: "px-6", xSmall: "px-3", xSmallCompact: "px-1" },
                        size: { large: "h-10 min-w-10", medium: "h-9 min-w-9", small: "h-8 min-w-8", xLarge: "h-14 min-w-14", xxLargeCompact: "h-10 min-w-40", xSmall: "h-6 min-w-6", xSmallCompact: "h-6 min-w-6" },
                        variant: {
                            brandFilled: "bg-primary border-transparent outline-primary text-white rounded-full active:bg-mix-black active:bg-mix-amount-15 focus:bg-mix-black focus:bg-mix-amount-10 hover:bg-mix-black hover:bg-mix-amount-10",
                            brandOutlined: "bg-transparent border-nested-border outline-primary border-solid text-primary rounded-full active:bg-mix-primary active:bg-mix-amount-15 focus:bg-mix-primary focus:bg-mix-amount-10 hover:bg-mix-primary hover:bg-mix-amount-10",
                            brandText: "bg-transparent border-transparent outline-primary text-primary rounded-full active:bg-mix-primary active:bg-mix-amount-15 focus:bg-mix-primary focus:bg-mix-amount-10 hover:bg-mix-primary hover:bg-mix-amount-10",
                            destructiveFilled: "bg-red-500 border-transparent outline-red-500 text-white rounded-full active:bg-mix-black active:bg-mix-amount-15 focus:bg-mix-black focus:bg-mix-amount-10 hover:bg-mix-black hover:bg-mix-amount-10",
                            destructiveOutlined: "bg-transparent border-red-100 border-solid outline-red-500 text-red-500 rounded-full active:bg-mix-red-500 active:bg-mix-amount-15 focus:bg-mix-red-500 focus:bg-mix-amount-10 hover:bg-mix-red-500 hover:bg-mix-amount-10",
                            destructiveText: "bg-transparent border-transparent outline-red-500 text-red-500 rounded-full active:bg-mix-red-500 active:bg-mix-amount-15 focus:bg-mix-red-500 focus:bg-mix-amount-10 hover:bg-mix-red-500 hover:bg-mix-amount-10",
                            destructiveGhost: "bg-transparent border-transparent outline-red-500 text-red-500 rounded active:bg-mix-red-500 active:bg-mix-amount-15 focus:bg-mix-red-500 focus:bg-mix-amount-10 hover:bg-mix-red-500 hover:bg-mix-amount-10",
                            insightsBright: "text-background bg-text border-transparent hover:bg-gray-1000 rounded-full",
                            insightsFilled: "bg-gray-50 text-text border-transparent hover:bg-gray-100 rounded",
                            insightsGhost: "text-text border-transparent hover:bg-gray-50 rounded",
                            insightsPrimary: "text-background bg-text border-transparent hover:bg-gray-1000 rounded",
                            insightsSecondary: "text-gray-1000 rounded bg-gray-50/50 hover:bg-gray-0",
                            onMediaLightFilled: "bg-white/25 border-transparent outline-white text-white rounded-full active:bg-mix-black active:bg-mix-amount-15 focus:bg-mix-black focus:bg-mix-amount-10 hover:bg-mix-black hover:bg-mix-amount-10",
                            onMediaOutlined: "bg-transparent border-nested-border border-solid outline-white text-white rounded-full active:bg-mix-text active:bg-mix-amount-15 focus:bg-mix-text focus:bg-mix-amount-10 hover:bg-mix-text hover:bg-mix-amount-10",
                            onMediaText: "bg-transparent border-transparent outline-white text-white rounded-full active:bg-mix-text active:bg-mix-amount-15 focus:bg-mix-text focus:bg-mix-amount-10 hover:bg-mix-text hover:bg-mix-amount-10",
                            primaryFilled: "bg-text border-transparent outline-text text-background rounded-full active:bg-mix-background active:bg-mix-amount-15 focus:bg-mix-background focus:bg-mix-amount-10 hover:bg-mix-background hover:bg-mix-amount-10",
                            primaryOutlined: "bg-transparent border-nested-border border-solid outline-text text-text rounded-full active:bg-mix-text active:bg-mix-amount-15 focus:bg-mix-text focus:bg-mix-amount-10 hover:bg-mix-text hover:bg-mix-amount-10",
                            primaryText: "bg-transparent border-transparent outline-text text-text rounded-full active:bg-mix-text active:bg-mix-amount-15 focus:bg-mix-text focus:bg-mix-amount-10 hover:bg-mix-text hover:bg-mix-amount-10",
                            mutedText: "bg-transparent border-transparent outline-muted-foreground text-muted-foreground rounded-full active:bg-mix-text active:bg-mix-amount-15 focus:bg-mix-text focus:bg-mix-amount-10 hover:bg-mix-text hover:bg-mix-amount-10",
                        },
                    },
                }),
                g = (0, l.forwardRef)(function ({ asChild: e, backgroundColor: t = "background", borderRadius: a = "full", children: d, className: g, color: m = "text", hoverLabel: f, icon: p, size: x = "medium", variant: h, ...y }, w) {
                    const v = e ? n.g7 : "button";
                    return (0, r.jsx)(s.O, { label: f, children: (0, r.jsx)(v, { className: u({ className: (0, i.cx)(!h && "outline-primary hover:brightness-90 focus:brightness-90 active:brightness-75", g), size: x, variant: h, ...(d && { padding: x }), ...(!h && { backgroundColor: t, borderRadius: a, color: m }) }), ref: w, ...y, children: (0, r.jsxs)(l.Fragment, { children: [p && (0, l.cloneElement)(p, { className: b({ size: x }) }), "string" == typeof d ? (0, r.jsx)(o.x, { color: "inherit", numberOfLines: 1, size: x && c[x], weight: "bold", children: d }) : d] }) }) });
                });
        },
        287326: (e, t, a) => {
            a.d(t, { O: () => l });
            var r = a(552322),
                n = a(306880),
                i = a(983666);
            function l({ children: e, delay: t = 1e3, label: a, offset: l = 4 }) {
                return a ? (0, r.jsx)(n.zt, { children: (0, r.jsxs)(n.fC, { delayDuration: t, children: [(0, r.jsx)(n.xz, { asChild: !0, children: e }), (0, r.jsx)(n.VY, { className: "z-50 overflow-hidden shadow-md", sideOffset: l, children: (0, r.jsx)(i._, { children: a }) })] }) }) : e;
            }
        },
        983666: (e, t, a) => {
            a.d(t, { _: () => o });
            var r = a(552322),
                n = a(840489),
                i = a(332161),
                l = a(644490);
            function o({ backgroundColor: e = "translucentBlack77", bold: t, children: a, color: o = "white", fontSize: d = "subtext3" }) {
                return (0, r.jsx)("div", { className: (0, n.Z)("rounded-sm inline-flex p-1", l.z7[e]), children: (0, r.jsx)(i.x, { color: o, numberOfLines: 1, size: d, weight: t ? "bold" : void 0, children: a }) });
            }
        },
        322506: (e, t, a) => {
            a.d(t, { r: () => l });
            var r = a(552322),
                n = a(202784),
                i = a(905394);
            const l = (0, n.forwardRef)(function ({ asChild: e, children: t, href: a, onClick: l, ...o }, d) {
                const s = (0, i.d)(),
                    b = (0, n.useCallback)(
                        (e) => {
                            if (!(e.defaultPrevented || 0 !== e.button || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && (l?.(e), a))
                                try {
                                    const t = new URL(a, window.location.origin);
                                    t.host === window.location.host && (e.preventDefault(), s.push(t.href.replace(t.origin, "")));
                                } catch {
                                    e.preventDefault(), s.push(a);
                                }
                        },
                        [s, l, a],
                    ),
                    c = { ...o, href: a, onClick: b, ref: d };
                return e && (0, n.isValidElement)(t) ? (0, n.cloneElement)(t, { ...t.props, ...c }) : (0, r.jsx)("a", { ...c, children: t });
            });
        },
        332161: (e, t, a) => {
            a.d(t, { x: () => s });
            var r = a(552322),
                n = a(110929),
                i = a(644490),
                l = a(322506);
            const o = "div",
                d = (0, n.j)("font-chirp max-w-full whitespace-pre-wrap", { variants: { color: i.eR, numberOfLines: { 1: "line-clamp-1", 2: "line-clamp-2", 3: "line-clamp-3", 4: "line-clamp-4", 5: "line-clamp-5" }, size: { body: "text-body", headline1: "text-headline1", headline2: "text-headline2", inherit: "text-[length:inherit]", subtext1: "text-subtext1", subtext2: "text-subtext2", subtext3: "text-subtext3", title1: "text-title1", title2: "text-title2", title3: "text-title3", title4: "text-title4" }, underline: { false: "no-underline", true: "underline" }, weight: { bold: "font-bold", extrabold: "font-extrabold", inherit: "font-inherit", light: "font-light", medium: "font-medium", normal: "font-normal" }, breakText: { all: "break-all", words: "text-break-words" } } });
            function s({ as: e, className: t, color: a, numberOfLines: i, size: s = "body", underline: b, weight: c = "normal", breakText: u = "words", ...g }) {
                const m = "a" === e,
                    f = m ? l.r : (e ?? o);
                return (0, r.jsx)(f, { ...g, className: d({ className: (0, n.cx)(m && !1 !== b && "hover:underline", t), color: a ?? (m ? "primary" : "text"), numberOfLines: i, size: s, underline: b, weight: c, breakText: u }) });
            }
        },
        379651: (e, t, a) => {
            a.d(t, { x: () => d });
            var r = a(552322),
                n = a(928316),
                i = a(256958),
                l = a(202784);
            function o() {
                return () => {};
            }
            function d({ ...e }) {
                return (0, l.useSyncExternalStore)(
                    o,
                    () => !0,
                    () => !1,
                )
                    ? (0, n.createPortal)((0, r.jsx)(i.x7, { className: "toaster group w-[600px] flex flex-row justify-center left-1/2 -translate-x-1/2", visibleToasts: 1, toastOptions: { classNames: { actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground", cancelButton: "group-[.toast]:bg-gray-50 group-[.toast]:text-gray-700", description: "group-[.toast]:text-gray-700", toast: "!bg-primary !text-white !border-none !w-auto" } }, ...e }), document.body)
                    : null;
            }
        },
        351417: (e, t, a) => {
            a.d(t, { Q: () => i });
            var r = a(552322),
                n = a(332161);
            const i = ({ size: e = "body", screenName: t, withLink: a, color: i = "gray700" }) => (0, r.jsx)(n.x, { color: i, numberOfLines: 1, size: e, ...(a && { as: "a", href: `https://x.com/${t}`, target: "external" === a ? "_blank" : void 0, underline: !1 }), children: `@${t}` });
        },
        589259: (e, t, a) => {
            a.d(t, { R: () => m });
            var r = a(552322),
                n = a(840489),
                i = a(101680),
                l = a(490881),
                o = a(808116),
                d = a(913577),
                s = a(907934),
                b = a(89596);
            function c({ affiliation: e, isProtected: t, isSubscriber: a, isTranslator: n, verifiedType: c }) {
                const u = [];
                return "business" === c && u.push((0, r.jsx)(i.Z, {}, "business")), "government" === c && u.push((0, r.jsx)(l.Z, {}, "government")), "user" === c && u.push((0, r.jsx)(o.Z, { className: "fill-badge" }, "User")), a && u.push((0, r.jsx)(d.Z, { className: "fill-plum-500" }, "subscriber")), n && u.push((0, r.jsx)(s.Z, { className: "fill-yellow-500" }, "translator")), t && u.push((0, r.jsx)(b.Z, {}, "protected")), e && u.push((0, r.jsx)("img", { alt: e.label, className: "rounded-sm h-[1em] w-[1em]", loading: "lazy", src: e.url }, "affiliation")), u.length ? (0, r.jsx)("div", { className: "flex gap-1", children: u }) : null;
            }
            var u = a(332161),
                g = a(351417);
            function m({ badges: e, color: t = "text", isStacked: a, name: i, screenName: l, size: o = "body", weight: d = "bold", withLink: s, screenNameColor: b = "gray700", screenNameSize: m }) {
                const f = l && s;
                return (0, r.jsxs)("div", { className: (0, n.Z)("overflow-hidden", a ? "flex-col items-start gap-0" : "flex items-center gap-1"), children: [(0, r.jsxs)("div", { className: "flex items-center gap-0.5 shrink-0 max-w-full", children: [(0, r.jsx)(u.x, { color: t, numberOfLines: 1, size: o, breakText: "all", weight: d, ...(f && { as: "a", href: `https://x.com/${l}`, target: "external" === s ? "_blank" : void 0 }), children: i }), e && Object.keys(e).length && (0, r.jsx)("div", { className: "shrink-0", children: (0, r.jsx)(u.x, { size: o, children: (0, r.jsx)(c, { ...e }) }) })] }), l && (0, r.jsx)(g.Q, { screenName: l, size: m || o, withLink: s, color: b })] });
            }
        },
        171774: (e, t, a) => {
            a.d(t, { T: () => l, v: () => o });
            var r = a(552322),
                n = a(202784);
            const i = (0, n.createContext)({});
            function l() {
                const e = (0, n.useContext)(i),
                    t = (0, n.useRef)("undefined" == typeof window ? "/" : window.location.pathname),
                    a = (0, n.useRef)("undefined" == typeof window ? "" : window.location.search),
                    r = (0, n.useRef)({ pathname: t.current, search: a.current }),
                    l = (0, n.useCallback)(() => {
                        const e = "undefined" == typeof window ? t.current : window.location.pathname,
                            n = "undefined" == typeof window ? a.current : window.location.search;
                        if (e === t.current && n === a.current) return r.current;
                        (t.current = e), (a.current = n);
                        const i = { pathname: e, search: n };
                        return (r.current = i), i;
                    }, []),
                    o = (0, n.useCallback)(() => r.current, []),
                    d = (0, n.useCallback)((e) => {
                        if ("undefined" == typeof window) return () => {};
                        const t = history.pushState,
                            a = history.replaceState;
                        return (
                            (history.pushState = (...a) => {
                                t.apply(history, a), setTimeout(e, 0);
                            }),
                            (history.replaceState = (...t) => {
                                a.apply(history, t), setTimeout(e, 0);
                            }),
                            window.addEventListener("popstate", e),
                            () => {
                                (history.pushState = t), (history.replaceState = a), window.removeEventListener("popstate", e);
                            }
                        );
                    }, []);
                return (0, n.useSyncExternalStore)(e.subscribe ?? d, e.getSnapshot ?? l, e.getServerSnapshot ?? o);
            }
            function o({ children: e, getSnapshot: t, getServerSnapshot: a, subscribe: l }) {
                const o = (0, n.useMemo)(() => ({ getSnapshot: t, getServerSnapshot: a, subscribe: l }), [t, a, l]);
                return (0, r.jsx)(i.Provider, { value: o, children: e });
            }
        },
        3577: (e, t, a) => {
            a.d(t, { a: () => n });
            var r = a(202784);
            const n = (e, t = !1) => {
                const a = (0, r.useCallback)(
                    (t) => {
                        const a = window.matchMedia(e);
                        return (
                            a.addEventListener("change", t),
                            () => {
                                a.removeEventListener("change", t);
                            }
                        );
                    },
                    [e],
                );
                return (0, r.useSyncExternalStore)(
                    a,
                    () => window.matchMedia(e).matches,
                    () => t,
                );
            };
        },
        905394: (e, t, a) => {
            a.d(t, { d: () => l, s: () => o });
            var r = a(552322),
                n = a(202784);
            const i = (0, n.createContext)({
                push: (e) => {
                    history.pushState({}, "", e), window.dispatchEvent(new PopStateEvent("popstate"));
                },
                replace: (e) => {
                    history.replaceState({}, "", e), window.dispatchEvent(new PopStateEvent("popstate"));
                },
                goBack: () => {
                    history.back();
                },
            });
            function l() {
                return (0, n.useContext)(i);
            }
            function o({ children: e, navigate: t }) {
                return (0, r.jsx)(i.Provider, { value: t, children: e });
            }
        },
        31674: (e, t, a) => {
            a.d(t, { cn: () => i });
            var r = a(840489),
                n = a(320324);
            function i(...e) {
                return (0, n.m6)((0, r.W)(e));
            }
        },
        644490: (e, t, a) => {
            a.d(t, { eR: () => n, z7: () => r });
            const r = {
                    black: "bg-black",
                    current: "bg-current",
                    inherit: "bg-inherit",
                    transparent: "bg-transparent",
                    white: "bg-white",
                    background: "bg-background",
                    badge: "bg-badge",
                    border: "bg-border",
                    brand: "bg-brand",
                    mask: "bg-mask",
                    nestedBorder: "bg-nested-border",
                    primary: "bg-primary",
                    text: "bg-text",
                    translucentBlack77: "bg-translucent-black-77",
                    blue0: "bg-blue-0",
                    blue50: "bg-blue-50",
                    blue100: "bg-blue-100",
                    blue200: "bg-blue-200",
                    blue300: "bg-blue-300",
                    blue400: "bg-blue-400",
                    blue500: "bg-blue-500",
                    blue600: "bg-blue-600",
                    blue700: "bg-blue-700",
                    blue800: "bg-blue-800",
                    blue900: "bg-blue-900",
                    blue1000: "bg-blue-1000",
                    blue1100: "bg-blue-1100",
                    gray0: "bg-gray-0",
                    gray50: "bg-gray-50",
                    gray100: "bg-gray-100",
                    gray200: "bg-gray-200",
                    gray300: "bg-gray-300",
                    gray400: "bg-gray-400",
                    gray500: "bg-gray-500",
                    gray600: "bg-gray-600",
                    gray700: "bg-gray-700",
                    gray800: "bg-gray-800",
                    gray900: "bg-gray-900",
                    gray1000: "bg-gray-1000",
                    gray1100: "bg-gray-1100",
                    green0: "bg-green-0",
                    green50: "bg-green-50",
                    green100: "bg-green-100",
                    green200: "bg-green-200",
                    green300: "bg-green-300",
                    green400: "bg-green-400",
                    green500: "bg-green-500",
                    green600: "bg-green-600",
                    green700: "bg-green-700",
                    green800: "bg-green-800",
                    green900: "bg-green-900",
                    green1000: "bg-green-1000",
                    green1100: "bg-green-1100",
                    magenta0: "bg-magenta-0",
                    magenta50: "bg-magenta-50",
                    magenta100: "bg-magenta-100",
                    magenta200: "bg-magenta-200",
                    magenta300: "bg-magenta-300",
                    magenta400: "bg-magenta-400",
                    magenta500: "bg-magenta-500",
                    magenta600: "bg-magenta-600",
                    magenta700: "bg-magenta-700",
                    magenta800: "bg-magenta-800",
                    magenta900: "bg-magenta-900",
                    magenta1000: "bg-magenta-1000",
                    magenta1100: "bg-magenta-1100",
                    orange0: "bg-orange-0",
                    orange50: "bg-orange-50",
                    orange100: "bg-orange-100",
                    orange200: "bg-orange-200",
                    orange300: "bg-orange-300",
                    orange400: "bg-orange-400",
                    orange500: "bg-orange-500",
                    orange600: "bg-orange-600",
                    orange700: "bg-orange-700",
                    orange800: "bg-orange-800",
                    orange900: "bg-orange-900",
                    orange1000: "bg-orange-1000",
                    orange1100: "bg-orange-1100",
                    plum0: "bg-plum-0",
                    plum50: "bg-plum-50",
                    plum100: "bg-plum-100",
                    plum200: "bg-plum-200",
                    plum300: "bg-plum-300",
                    plum400: "bg-plum-400",
                    plum500: "bg-plum-500",
                    plum600: "bg-plum-600",
                    plum700: "bg-plum-700",
                    plum800: "bg-plum-800",
                    plum900: "bg-plum-900",
                    plum1000: "bg-plum-1000",
                    plum1100: "bg-plum-1100",
                    purple0: "bg-purple-0",
                    purple50: "bg-purple-50",
                    purple100: "bg-purple-100",
                    purple200: "bg-purple-200",
                    purple300: "bg-purple-300",
                    purple400: "bg-purple-400",
                    purple500: "bg-purple-500",
                    purple600: "bg-purple-600",
                    purple700: "bg-purple-700",
                    purple800: "bg-purple-800",
                    purple900: "bg-purple-900",
                    purple1000: "bg-purple-1000",
                    purple1100: "bg-purple-1100",
                    red0: "bg-red-0",
                    red50: "bg-red-50",
                    red100: "bg-red-100",
                    red200: "bg-red-200",
                    red300: "bg-red-300",
                    red400: "bg-red-400",
                    red500: "bg-red-500",
                    red600: "bg-red-600",
                    red700: "bg-red-700",
                    red800: "bg-red-800",
                    red900: "bg-red-900",
                    red1000: "bg-red-1000",
                    red1100: "bg-red-1100",
                    teal0: "bg-teal-0",
                    teal50: "bg-teal-50",
                    teal100: "bg-teal-100",
                    teal200: "bg-teal-200",
                    teal300: "bg-teal-300",
                    teal400: "bg-teal-400",
                    teal500: "bg-teal-500",
                    teal600: "bg-teal-600",
                    teal700: "bg-teal-700",
                    teal800: "bg-teal-800",
                    teal900: "bg-teal-900",
                    teal1000: "bg-teal-1000",
                    teal1100: "bg-teal-1100",
                    yellow0: "bg-yellow-0",
                    yellow50: "bg-yellow-50",
                    yellow100: "bg-yellow-100",
                    yellow200: "bg-yellow-200",
                    yellow300: "bg-yellow-300",
                    yellow400: "bg-yellow-400",
                    yellow500: "bg-yellow-500",
                    yellow600: "bg-yellow-600",
                    yellow700: "bg-yellow-700",
                    yellow800: "bg-yellow-800",
                    yellow900: "bg-yellow-900",
                    yellow1000: "bg-yellow-1000",
                    yellow1100: "bg-yellow-1100",
                },
                n = {
                    black: "text-black",
                    current: "text-current",
                    inherit: "text-inherit",
                    transparent: "text-transparent",
                    white: "text-white",
                    background: "text-background",
                    badge: "text-badge",
                    border: "text-border",
                    brand: "text-brand",
                    mask: "text-mask",
                    nestedBorder: "text-nested-border",
                    primary: "text-primary",
                    text: "text-text",
                    translucentBlack77: "text-translucent-black-77",
                    blue0: "text-blue-0",
                    blue50: "text-blue-50",
                    blue100: "text-blue-100",
                    blue200: "text-blue-200",
                    blue300: "text-blue-300",
                    blue400: "text-blue-400",
                    blue500: "text-blue-500",
                    blue600: "text-blue-600",
                    blue700: "text-blue-700",
                    blue800: "text-blue-800",
                    blue900: "text-blue-900",
                    blue1000: "text-blue-1000",
                    blue1100: "text-blue-1100",
                    gray0: "text-gray-0",
                    gray50: "text-gray-50",
                    gray100: "text-gray-100",
                    gray200: "text-gray-200",
                    gray300: "text-gray-300",
                    gray400: "text-gray-400",
                    gray500: "text-gray-500",
                    gray600: "text-gray-600",
                    gray700: "text-gray-700",
                    gray800: "text-gray-800",
                    gray900: "text-gray-900",
                    gray1000: "text-gray-1000",
                    gray1100: "text-gray-1100",
                    green0: "text-green-0",
                    green50: "text-green-50",
                    green100: "text-green-100",
                    green200: "text-green-200",
                    green300: "text-green-300",
                    green400: "text-green-400",
                    green500: "text-green-500",
                    green600: "text-green-600",
                    green700: "text-green-700",
                    green800: "text-green-800",
                    green900: "text-green-900",
                    green1000: "text-green-1000",
                    green1100: "text-green-1100",
                    magenta0: "text-magenta-0",
                    magenta50: "text-magenta-50",
                    magenta100: "text-magenta-100",
                    magenta200: "text-magenta-200",
                    magenta300: "text-magenta-300",
                    magenta400: "text-magenta-400",
                    magenta500: "text-magenta-500",
                    magenta600: "text-magenta-600",
                    magenta700: "text-magenta-700",
                    magenta800: "text-magenta-800",
                    magenta900: "text-magenta-900",
                    magenta1000: "text-magenta-1000",
                    magenta1100: "text-magenta-1100",
                    orange0: "text-orange-0",
                    orange50: "text-orange-50",
                    orange100: "text-orange-100",
                    orange200: "text-orange-200",
                    orange300: "text-orange-300",
                    orange400: "text-orange-400",
                    orange500: "text-orange-500",
                    orange600: "text-orange-600",
                    orange700: "text-orange-700",
                    orange800: "text-orange-800",
                    orange900: "text-orange-900",
                    orange1000: "text-orange-1000",
                    orange1100: "text-orange-1100",
                    plum0: "text-plum-0",
                    plum50: "text-plum-50",
                    plum100: "text-plum-100",
                    plum200: "text-plum-200",
                    plum300: "text-plum-300",
                    plum400: "text-plum-400",
                    plum500: "text-plum-500",
                    plum600: "text-plum-600",
                    plum700: "text-plum-700",
                    plum800: "text-plum-800",
                    plum900: "text-plum-900",
                    plum1000: "text-plum-1000",
                    plum1100: "text-plum-1100",
                    purple0: "text-purple-0",
                    purple50: "text-purple-50",
                    purple100: "text-purple-100",
                    purple200: "text-purple-200",
                    purple300: "text-purple-300",
                    purple400: "text-purple-400",
                    purple500: "text-purple-500",
                    purple600: "text-purple-600",
                    purple700: "text-purple-700",
                    purple800: "text-purple-800",
                    purple900: "text-purple-900",
                    purple1000: "text-purple-1000",
                    purple1100: "text-purple-1100",
                    red0: "text-red-0",
                    red50: "text-red-50",
                    red100: "text-red-100",
                    red200: "text-red-200",
                    red300: "text-red-300",
                    red400: "text-red-400",
                    red500: "text-red-500",
                    red600: "text-red-600",
                    red700: "text-red-700",
                    red800: "text-red-800",
                    red900: "text-red-900",
                    red1000: "text-red-1000",
                    red1100: "text-red-1100",
                    teal0: "text-teal-0",
                    teal50: "text-teal-50",
                    teal100: "text-teal-100",
                    teal200: "text-teal-200",
                    teal300: "text-teal-300",
                    teal400: "text-teal-400",
                    teal500: "text-teal-500",
                    teal600: "text-teal-600",
                    teal700: "text-teal-700",
                    teal800: "text-teal-800",
                    teal900: "text-teal-900",
                    teal1000: "text-teal-1000",
                    teal1100: "text-teal-1100",
                    yellow0: "text-yellow-0",
                    yellow50: "text-yellow-50",
                    yellow100: "text-yellow-100",
                    yellow200: "text-yellow-200",
                    yellow300: "text-yellow-300",
                    yellow400: "text-yellow-400",
                    yellow500: "text-yellow-500",
                    yellow600: "text-yellow-600",
                    yellow700: "text-yellow-700",
                    yellow800: "text-yellow-800",
                    yellow900: "text-yellow-900",
                    yellow1000: "text-yellow-1000",
                    yellow1100: "text-yellow-1100",
                };
        },
        234622: (e, t, a) => {
            a.d(t, { i: () => s });
            var r = a(202784),
                n = a(808744),
                i = a(111677),
                l = a.n(i),
                o = a(725516);
            const d = {
                    analytics: {
                        accountOverview: l().ac248548,
                        activeTimesSubtitle: l().je62f358,
                        activeTimesTitle: l().bc2f16a4,
                        activityBreakdown: l().d603209e,
                        age13to17: l().fe90a642,
                        age18to24: l().a5c91a8e,
                        age25to34: l().cf30cdfa,
                        age35to44: l().gf672f7c,
                        age45to54: l().jf28b41c,
                        age55to64: l().ja78da94,
                        age65plus: l().g42ea0b0,
                        ageTitle: l().bf96fda4,
                        allContentTypes: l().f8321d82,
                        allTime: l().c219a552,
                        appInstallAttemptsInfo: "The number of times your app was installed.",
                        appInstallAttemptsLabel: "App Install Attempts",
                        AppOpensInfo: "The number of times your app was opened.",
                        AppOpensLabel: "App Opens",
                        attendingSpace: l().ac3fb6de,
                        audience: l().b069d89c,
                        audienceInsights: l().ie181958,
                        AverageWatchTimeInfo: l().j6f8d422,
                        AverageWatchTimeLabel: l().e7479ce4,
                        Avg: l().g1dfa7d0,
                        backToContent: l().h7d28188,
                        backToLiveOverviewAria: l().if2704e4,
                        backToSpaces: l().ea928ae4,
                        bar: l().e298b08e,
                        BookmarkInfo: l().c8aae62a,
                        BookmarkLabel: l().i3145aa0,
                        broadcast: l().e39b368e,
                        broadcastAltText: l().e8c07c22,
                        broadcastMetricsTitle: l().a4ce6e68,
                        broadcastViewsInfo: l().b2214c74,
                        broadcastWatchTimeInfo: l().d4fcf83a,
                        canceled: l().a89b0322,
                        communityContentType: l().d61b2bcc,
                        concurrentViewers: l().j3cb12ea,
                        countryTitle: l().c21037d0,
                        CreatePostInfo: l().b93931ee,
                        CreatePostLabel: l().fa4e68ca,
                        CreateQuoteInfo: "The number of times your content was quoted.",
                        CreateQuoteLabel: "Create Quote",
                        CreateReplyInfo: l().a1814798,
                        CreateReplyLabel: l().jdceda60,
                        CreateTweetInfo: "The number of times you posted.",
                        CreateTweetLabel: "Create Post",
                        daily: l().fcad1e2e,
                        Date: l().edeff232,
                        dayFr: l().addd5575({ date: "" }),
                        dayMo: l().a92e62bd({ date: "" }),
                        daySa: l().g7450c57({ date: "" }),
                        daySu: l().h08883e7({ date: "" }),
                        dayTh: l().ddb16777({ date: "" }),
                        dayTu: l().h8f395b3({ date: "" }),
                        dayWe: l().b8710b43({ date: "" }),
                        DetailExpandsInfo: "The number of times your content was expanded.",
                        DetailExpandsLabel: "Detail Expands",
                        deviceAndroid: l().i8385a2c,
                        deviceIOS: l().h201c4c2,
                        deviceOther: l().c365dcc6,
                        deviceTitle: l().d9c70840,
                        deviceWeb: l().g33f3050,
                        duration: l().d9d6e10e,
                        EmailTweetInfo: "The number of times your content was emailed.",
                        EmailTweetLabel: "Email Tweets",
                        Ended: l().ba55e824,
                        EngagementInfo: "Number of engagements",
                        EngagementLabel: l().dbe9353e,
                        EngagementRateInfo: l().d9d34182,
                        EngagementRateLabel: l().e623137c,
                        EngagementsInfo: l().id276c42,
                        EngagementsLabel: l().dbe9353e,
                        EstimatedRevenue: l().j033d090,
                        EstimatedRevenueInfo: "Estimated revenue for this video",
                        EstimatedRevenueLabel: l().j033d090,
                        filterSpaces: l().efd4d7d4,
                        first48Hours: l().a1334290,
                        FollowsInfo: l().e1a87d14,
                        FollowsLabel: l().j761451e,
                        followsOverTime: l().gc10a3b0,
                        followsOverTimeInfo: l().efa0f858,
                        genderFemale: l().de323650,
                        genderMale: l().b6ab31be,
                        genderNotSpecified: l().h3525cb8,
                        genderSubtitle: l().g2b06cc6,
                        genderTitle: l().a8d0108e,
                        gifLabel: l().i0db46e6,
                        HashtagClicksInfo: "The number of times your content was clicked on a hashtag.",
                        HashtagClicksLabel: "Hashtag Clicks",
                        Host: l().cededf2a,
                        hours: l().b66b3baa,
                        imageLabel: l().b327c12a,
                        ImpressionsInfo: l().b15df4b4,
                        ImpressionsLabel: l().e5fe61e0,
                        ImpressionToViewsLabel: l().cf8a0772,
                        inNetwork: l().c64974fc,
                        last48Hours: l().g13d8010,
                        lastHour: l().d5627596,
                        leastEngaged: l().baf120a6,
                        LikesInfo: l().ia1da622,
                        LikesLabel: l().d7b8ebaa,
                        line: l().eb2e0272,
                        LinkClicksInfo: l().cf573986,
                        LinkClicksLabel: l().d5f1e554,
                        listeners: l().eda23a02,
                        Live: l().b6da6b02,
                        LiveCapitalized: l().f2382014,
                        liveColumnHeader: l().b6da6b02,
                        liveDataTitle: l().c4a7a6aa,
                        livestreamAnalytics: l().a992032a,
                        livestreamOverview: l().ie45edda,
                        liveViewersTitle: l().e30fc268,
                        mediaActivity: l().bd37f68e,
                        MediaEngagementsInfo: "The number of times your media was engaged with.",
                        MediaEngagementsLabel: "Media Engagements",
                        MediaViewsInfo: l().j43b8f52,
                        MediaViewsLabel: l().ca826772,
                        mins: l().fe074210,
                        minutesWatched: l().jd03a1b8,
                        minutesWatchedSuffix: l().a20e91e8,
                        monetized: l().ic2bebee,
                        monthly: l().a3a4e8f8,
                        mostEngaged: l().a1d642c8,
                        networkTitle: l().d960b55c,
                        NewFollowsInfo: l().ifc4c1f8,
                        next: l().c1df579e,
                        no: l().i62a03aa,
                        noBroadcastsAvailableForFilter: l().fff1315a,
                        noDataAvailable: l().jbcb09a8,
                        none: l().jb38600c,
                        noPostsFound: l().df846d6c,
                        noSpacesAvailableFilter: l().g2ba40f6,
                        notAvailable: l().j44061a0,
                        notAvailableShort: l().c4a93912,
                        noViewerData: l().a6b78788,
                        ofTotal: l().b2438638,
                        organicViewsLabel: l().ic0399e0,
                        outNetwork: l().f21807e0,
                        overview: l().d59dbf8a,
                        payPeriod: l().ja5c444a,
                        peakConcurrentViewers: l().f04e025e,
                        peakViewersPrefix: l().d6d10662,
                        PermalinkClicksInfo: "The number of times your content was clicked on a permalink.",
                        PermalinkClicksLabel: "Permalink Clicks",
                        pleaseCheckBackAgainLater: l().d147bea2,
                        postAnalytics: l().f0336d68,
                        postIdLabel: l().g85fbd2e,
                        PostImpressionsInfo: l().ice5c5b6,
                        PostLink: l().hf4f9bfe,
                        postsAndReplies: l().bf5ebf5c,
                        postsContentType: l().fa4e68ca,
                        postsOverTime: l().b211652e,
                        postTextLabel: l().f6bab0da,
                        prePublished: l().f2efec0a,
                        previous: l().i61e0302,
                        ProfileVisitsInfo: l().b2bde01a,
                        ProfileVisitsLabel: l().aeee0182,
                        promotedViewsLabel: l().e08a706a,
                        PublishedDate: l().cbc99192,
                        QuoteTweetsInfo: "The number of times your content was quoted.",
                        QuoteTweetsLabel: "Quote posts",
                        realtimeTitle: l().a83c2a9a,
                        Recorded: l().e9d72896,
                        replayColumnHeader: l().gede4932,
                        repliesContentType: l().jdceda60,
                        RepliesInfo: l().j590577e,
                        RepliesLabel: l().jdceda60,
                        RepostsInfo: l().h0de359c,
                        RetweetsInfo: l().ca6e8de0,
                        RetweetsLabel: l().ja42739e,
                        Scheduled: l().f8464692,
                        ScheduledFor: l().e0568f2c,
                        scheduledStart: l().gd86baa8,
                        select: l().abf2d13c,
                        selectSecondaryMetric: l().fef3bfae,
                        ShareInfo: l().c6fbefd4,
                        ShareLabel: l().g70825e0,
                        spaceAnalytics: l().g7e3d2a4,
                        spacesOverview: l().fbc79a40,
                        spaceStats: l().d077112a,
                        speakers: l().j245c654,
                        status: l().cf3709da,
                        streamTimePrefix: l().e797dc32,
                        subscriberOnly: l().b649d8cc,
                        thumbnailAlt: l().j9282130,
                        timedOut: l().g629b8b0,
                        timeRangeInfoDescription: l().eb87323c,
                        timeRangeInfoTitle: l().i6a75722,
                        Total: l().c602f5b8,
                        totalColumnHeader: l().c602f5b8,
                        totalParticipants: l().b35e68ae,
                        totalReplayWatched: l().h78ee79a,
                        Type: l().e3efaed0,
                        UnfollowsInfo: "The number of times you were unfollowed.",
                        UnfollowsLabel: l().c37993e2,
                        UniqueImpressionsInfo: "The number of unique users who saw your content.",
                        UniqueImpressionsLabel: "Unique Impressions",
                        UniqueVideoViewsInfo: "The number of unique users who viewed your video.",
                        UniqueVideoViewsLabel: "Unique Video Views",
                        uniqueViewersLabel: l().b1ed35d0,
                        Unknown: l().bfad9306,
                        untitledBroadcast: l().b5a58f36,
                        untitledVideo: l().jceadc3e,
                        UploadedOn: l().i70f5278,
                        UrlClicksInfo: "The number of times your content was clicked on a URL.",
                        UrlClicksLabel: "URL Clicks",
                        UserProfileClicksInfo: "The number of times your profile was clicked on.",
                        UserProfileClicksLabel: "User Profile Clicks",
                        verifiedFollowers: l().a98b58b6,
                        verifiedFollowersInfo: l().a5de67ca,
                        Video: l().fc64990e,
                        videoCompletion: l().g3367ff4,
                        VideoCompletionRateInfo: l().a7b48b36,
                        VideoCompletionRateLabel: l().a2580f2a,
                        VideoCompletionsInfo: "The number of times your video was completed.",
                        VideoCompletionsLabel: "Video Completions",
                        videoId: l().ff95a9cc,
                        videoLink: l().a97e358e,
                        videoListWidgetFooter: l().e10e8b46,
                        videoOverview: l().ba37f6da,
                        VideoPlayed25PercentInfo: "The number of times your video was played for at least 25%.",
                        VideoPlayed25PercentLabel: "Video Played 25%",
                        VideoPlayed50PercentInfo: "The number of times your video was played for at least 50%.",
                        VideoPlayed50PercentLabel: "Video Played 50%",
                        VideoPlayed75PercentInfo: "The number of times your video was played for at least 75%.",
                        VideoPlayed75PercentLabel: "Video Played 75%",
                        VideoStartsInfo: "The number of times your video was started.",
                        VideoStartsLabel: "Video Starts",
                        videoThumbnail: l().f19846b2,
                        videoTitle: l().ccd6f4a8,
                        VideoViewInfo: l().c8410542,
                        VideoViewLabel: l().dcc05a7e,
                        VideoViewsInfo: l().bdaf100e,
                        VideoViewsLabel: l().b1b4d57e,
                        viewers: l().a532072a,
                        viewersLabel: l().a532072a,
                        views: l().d9508ab0,
                        Views: l().dcc05a7e,
                        viewSpace: l().d9f9dec0,
                        viewSpaceAnalytics: l().h0c1f37a,
                        WatchTimeInfo: l().e41fffbc,
                        WatchTimeLabel: l().if2909ba,
                        weekly: l().h9e0dfde,
                        yes: l().b7ec04f4,
                        YourVideos: l().i0e5bf4c,
                    },
                    business: {
                        earlyBetaAccess: l().ed99baea,
                        radar: {
                            advancedSearch: l().gf898b70,
                            advancedSearchExamples: [
                                { description: l().d2a43a7a, query: l().a8584698 },
                                { description: l().jb6f9292, query: l().j8ee77c4 },
                                { description: l().d0480758, query: l().f0048fa2 },
                                { description: l().da0df186, query: l().f2f463ea },
                                { description: l().a10a357e, query: l().ca8ed1e8 },
                                { description: l().i945a3f2, query: l().a9348088 },
                                { description: l().b5c3cdbc, query: l().e2634592 },
                            ],
                            alertsDisabled: l().i88ba038,
                            alertsEnabled: l().j2cb0214,
                            alertsInfoBody: l().ae852cd0,
                            alertsInfoTitle: l().d1d8633e,
                            allQueries: l().g096d0cc,
                            cancel: l().cfd2f35e,
                            clear: l().e77035aa,
                            days: l().g93586be,
                            delete: l().d96cf7ce,
                            deleteConfirmation: l().a895ec64,
                            deletedQuery: l().a4f5e431,
                            deleteQuery: l().db28b535,
                            editQueryTitle: l().bcf89b8a,
                            examples: l().ebfb897c,
                            exploreResults: l().f0002e72,
                            failedToCreateQuery: l().b0924d7a,
                            failedToDeleteQuery: l().cfd731ee,
                            failedToDisableAlert: l().g08bff82,
                            failedToEnableAlert: l().fa1fd798,
                            failedToGenerateQuery: l().ia7dce48,
                            failedToUpdateQuery: l().d494d4aa,
                            globalTownSquare: l().i4a49588,
                            granularity: { Day: l().c0799860, Hour: l().b43679d2, Minute: l().f1fce85e },
                            header: l().h70bdf0a,
                            impressions: l().e5fe61e0,
                            latest: l().d601fc20,
                            loading: l().i9028824,
                            market: l().ea3e0ec4,
                            maxQueries: l().d8d9aec2,
                            newQuery: l().c9aa246e,
                            newQuerySubtitle: l().b9b7a50e,
                            newQueryTitle: l().i9a09bb6,
                            noTrendsAvailable: l().da20008c,
                            onboardingDescription: "The best way to discover what's happening on X",
                            pleaseTryAgainLater: l().e78ca8c6,
                            posts: l().fa4e68ca,
                            query: l().ce3216ec,
                            queryInputPlaceholder: l().ef609bb8,
                            queryInputPlaceholderFollowUp: l().a636a738,
                            queryNotFound: l().d92ec304,
                            resetSelection: l().bbf29e20,
                            searchPlaceholder: l().ie3321ea,
                            summary: l().cf223996,
                            theEverythingApp: l().a27ccab8,
                            top: l().i66136aa,
                            trends: l().c5f4befa,
                            uniqueUsers: l().e7c44382,
                            untitledQuery: l().d559e5b8,
                            update: l().h3701ffe,
                            usingAdvancedSearch: l().i1d9be88,
                        },
                        people: { affiliation: l().ae9f604c, affiliationLabel: l().a7d2d8f4, business: l().j0e2cfa8, copyLink: l().e05c00b4, country: l().c21037d0, filters: l().i647fb04, followersCount: l().je21ffbe, fullProfile: l().i8d9797c, government: l().d2042392, landing: { title: "Discover people on X", description: "Search for top talent, sales prospects, and partners", search: "Search keywords, job titles, or topics", popular: "Popular Searches", getQueryTitle: (e) => `${e}`, getQueryCount: (e) => `${e}+ profiles` }, maximum: l().a36bebf2, maximumFollowers: l().i5ef8b4a, message: l().b7636014, minimum: l().fcf0ec1c, minimumFollowers: l().ccc0bbc6, onboarding1Description: l().je1bd63a, onboarding2Description: l().i6766078, onboarding2Title: l().d509bbd4, peopleHeader: l().g2fd3206, pipeline: { addPipeline: "Add to Pipeline", addNewPipeline: "Add New Pipeline", addPipelinePrompt: "Enter Pipeline Name", cancel: "Cancel", candidateCount: (e) => `${e} Candidates`, changeStage: "Change Stage", createPipeline: "Create new pipeline: ", createNewPipeline: "New Pipeline", delete: "Delete", deleteConfirmation: "Are you sure you want to delete this query?", deleteQuery: (e) => `Delete '${e}'`, error: "Error", pipeline: "Pipeline", pipelines: "Pipelines", pipelineName: "Pipeline Name", search: "Search", stages: "Stages", success: "Success", noCandidate: "No candidates found", untitled: "Untitled Pipeline", updatedAt: "Last Updated at " }, premium: l().f75d1806, reset: l().a5afaf54, resetAll: l().i9006fb0, results: l().fa598a82, search: l().a9ae1e78, searchPeople: l().fc9dd578, selectAnOption: l().g3688a48, user: l().ab5a91a4, verification: l().cef20fd0 },
                        landing: {
                            advertisingCapabilities: { description: l().a2b286b0, title: l().e2895a38, disclaimer: l().becba496 },
                            andMore: { analytics: { description: l().ded395ae, title: l().a47a20d4 }, premiumPlus: { description: l().b56d3ec6, title: l().hedf9d7c }, premiumSupport: { description: l().ie663a1a, title: l().j7f75bec }, title: l().h63a5c3c },
                            comingSoon: l().ebf5ec26,
                            footer: { cta: l().i859a9d4, title1: l().eeb424e2, title2: l().ab62db18 },
                            goldBadgeAndAffiliations: { description: l().j2c9bc4e, title: l().e7930f82 },
                            hero: { description: l().e77ea57e, title: l().a558a254 },
                            insights: { description: l().b099f256, title: l().ecb7fa02 },
                            jobPromotion: { description: l().cb5faa2a, title: l().c67b260c },
                            jobs: { description: l().if48b5c2, title: l().ba96929e },
                            month: l().aa0d60aa,
                            organizations: l().cebfdb52,
                            people: { description: l().i9b6fcbc, title: l().a6b5c3f0 },
                            pricing: { downgradeBasic: l().a51acce8, upgradeFullAccess: l().ie132f40, offer: l().b0d26232, offerEnds: l().f563b353, percentageOff: l().b29b2e69, offerAnualBilling: l().j3cfae29, affiliatesDisclaimerMonthly: l().jb74aea4, affiliatesDisclaimerYearly: l().fc9fc856, basic: l().j4a7d9a6, basicCta: l().fc785aec, basicFeaturesTitle: l().edf32072, basicFeaturesOffer: (e) => [l().b3caf146, "Month" === e ? l().a1dbf70c : l().i2a2286c, l().ba96929e, l().e8d0fd04, l().cf038828], fullAccessFeaturesOffer: (e) => [l().efd56302, "Month" === e ? l().bc1bb6aa : l().e1669560, l().hb973da4, l().g444c82e], billedAnnually: l().a1bc0bcf, billedMonthly: l().e0b39888, disclaimer: l().i0f58dac, enterprise: l().je182d8a, enterpriseCta: l().ge609bd6, enterpriseDescription: l().je6d2aec, enterpriseFeatures: [l().ed33b888, l().ade522c4, l().h551f266, l().c74f7856, l().b9b41f7a, l().b1f368ee], enterpriseFeaturesTitle: l().j189c5b2, enterprisePrice: l().i7f4b58e, fullAccess: l().bf6b72ac, fullAccessCta: l().h45fd8ae, fullAccessFeaturesTitle: l().f1c3b32c, highlight: l().f4307806, learnMore: l().i859a9d4, monthly: l().a3a4e8f8, title: l().ia9c37c4, yearly: l().ce7c21de },
                            subscribeButton: l().ca559b70,
                            wallOfLove: { coinbase: { text: l().a21a64f6, userTitle: l().dbb3fc54 }, vercel: { text: l().c1600210, userTitle: l().dbb3fc54 } },
                            offerBanner: { title: l().fb3e127a, description: l().a5fee980, days: l().c9051cac, hours: l().b66b3baa, minutes: l().fe074210, seconds: l().ie035790 },
                        },
                        tryTheBeta: l().cbd3dfaa,
                        hiring: { benefits: { careerPages: { description: l().h260121e, title: l().ae0ad604 }, connect: { description: l().i9b6fcbc, title: l().cbd4ba6e }, jobListings: { description: l().if48b5c2, title: l().b71927b2 }, promotion: { description: l().a0b5b7d4, title: l().aa3f0e90 } }, footer: { getStarted: l().hc67be9e }, hero: { cta: l().c9a67f9e, description: l().jd937cda, title: l().d92d2632 }, stats: { applications: { description: l().c10bee94, title: l().ib69d218 }, companies: { description: l().i953576c, title: l().j395b846 }, users: { description: l().g48a59c2, title: l().j228841a } }, pricing: { basicFeatures: [l().b3caf146, l().da570714, l().ae0ad604, l().c67b260c, l().h25a3132, l().cf038828, l().f25a2004], fullAccessFeatures: [l().c237b78e, l().fc3d58fe, l().j7f75bec] } },
                    },
                    user: { followButton: { blocked: l().if594962, cancel: l().cfd2f35e, discard: l().d4ab68e2, follow: l().eb5f060c, followers: l().c64974fc, following: l().d960b55c, followingConfirmationHeadline: l().a19cf46f, followingConfirmationText: l().e4c91b70, pending: l().b5334780, pendingConfirmationHeadline: l().j650c8dc, pendingConfirmationText: l().c02f8de1, unblock: l().e133be4e, unblockConfirmationHeadline: l().j546fb79, unblockConfirmationText: l().f5f01af6, unfollow: l().c0f56044 }, followers: l().c64974fc, following: l().d960b55c, joined: l().e2ee95a1 },
                },
                s = ({ children: e }) => {
                    const t = (0, o.z)();
                    return r.createElement(n.f, { analytics: t, i18nInput: d }, e);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-e96e9bea.582dbd3a.js.map
