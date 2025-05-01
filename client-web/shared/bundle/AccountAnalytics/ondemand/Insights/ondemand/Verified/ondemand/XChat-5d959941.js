"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-5d959941"],
    {
        446368: (e, t, r) => {
            r.d(t, { ng: () => p, UH: () => o, z$: () => h, $8: () => i });
            var n = r(552322),
                a = r(202784);
            const l = (0, a.createContext)(void 0);
            function i() {
                const e = (0, a.useContext)(l);
                if (!e) throw new Error("useAnalytics must be used within an AnalyticsProvider");
                return e;
            }
            function o({ analytics: e, children: t }) {
                return (0, n.jsx)(l.Provider, { value: e, children: t });
            }
            const s = "undefined" == typeof window,
                u = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
            async function g(e, t = {}) {
                const r = new URL(e, "https://api.x.com"),
                    n = t?.headers ? new Headers(t.headers) : new Headers();
                n.set("Accept", "application/json"), n.set("Authorization", `Bearer ${u}`);
                const a = (function (e = "") {
                    const t = {};
                    return (
                        e.split(";").forEach((e) => {
                            const r = e.split("=");
                            2 === r.length && (t[decodeURIComponent(r[0].trim())] = decodeURIComponent(r[1].trim()));
                        }),
                        t
                    );
                })(s ? (n.get("cookie") ?? "") : document.cookie);
                a.auth_token && n.set("x-twitter-auth-type", "OAuth2Session"), a.ct0 && n.set("x-csrf-token", a.ct0);
                const l = await fetch(r, { ...t, credentials: "include", headers: n, signal: t.signal ?? AbortSignal.timeout(5e3) });
                if (!l.ok) throw new Error(`Http status ${l.status}: ${l.statusText}`);
                return l;
            }
            var d = r(298357),
                c = r.n(d),
                m = r(834406);
            class b {
                buffer = [];
                namespace;
                sequenceStartTimestamp;
                sequenceNumber = 0;
                constructor(e) {
                    (this.namespace = e),
                        "undefined" != typeof window &&
                            (document.addEventListener("visibilitychange", () => {
                                "hidden" === document.visibilityState && this.flushImmediate(!0);
                            }),
                            window.addEventListener("pagehide", () => {
                                this.flushImmediate(!0);
                            }),
                            window.addEventListener("logout", () => {
                                this.flushImmediate(!0);
                            }));
                }
                scribe(e, t) {
                    if (e.client && e.client !== this.namespace.client) throw new Error(`Invalid client segment: expected ${this.namespace.client} but got ${e.client}`);
                    const r = { ...this.namespace, ...e };
                    if (!r.client || !r.page || !r.action) throw new Error(`Invalid scribe namespace ${JSON.stringify(r)}`);
                    const n = Date.now();
                    this.sequenceStartTimestamp || (this.sequenceStartTimestamp = n);
                    const a = { ...t, _category_: "client_event", client_app_id: t?.client_app_id ?? m.env.NEXT_PUBLIC_APP_ID ?? m.env.APP_ID, client_event_sequence_number: ++this.sequenceNumber, client_event_sequence_start_timestamp: this.sequenceStartTimestamp, event_namespace: r, format_version: 2, triggered_on: n };
                    this.buffer.push(a), this.flush();
                }
                flush = "undefined" != typeof window ? c()(this.flushImmediate, 3e3, { trailing: !0 }) : this.flushImmediate;
                flushImmediate(e) {
                    const t = this.buffer.splice(0, this.buffer.length);
                    t.length && g("/1.1/jot/client_event.json", { body: `debug=true&log=${encodeURIComponent(JSON.stringify(t))}`, headers: { "Content-Type": "application/x-www-form-urlencoded" }, keepalive: e, method: "POST" });
                }
            }
            const x = (0, a.createContext)({ namespace: { client: "m5" } });
            function p({ children: e, ...t }) {
                const r = { ...(0, a.useContext)(x).namespace, ...t.namespace };
                return (0, n.jsx)(x.Provider, { value: { namespace: r }, children: e });
            }
            function h() {
                const e = (0, a.useContext)(x);
                return new b(e.namespace);
            }
        },
        642783: (e, t, r) => {
            r.d(t, { f: () => z });
            var n = r(552322),
                a = r(446368),
                l = r(19745),
                i = r(430962),
                o = r(968025),
                s = r(768246),
                u = r(202784),
                g = r(625067);
            const d = "night_mode";
            const c = { 0: "light", 1: "dim", 2: "dark" },
                m = (Object.fromEntries(Object.entries(c).map(([e, t]) => [t, Number(e)])), () => (0, g.Qc)(document.cookie)[d]),
                b = (e) => {
                    const t = Number(e);
                    return c[t] ?? x();
                },
                x = () => ("undefined" != typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
            var p = r(889906);
            const h = r(350096),
                y = (0, u.createContext)(null),
                f = () => {
                    if ("undefined" != typeof document) {
                        return (0, g.Qc)(document.cookie).twid;
                    }
                };
            function w({ children: e }) {
                const t = (0, p.useLazyLoadQuery)(h, {}),
                    r = t?.viewer?.user_results?.result ?? null,
                    a = (0, u.useMemo)(() => r, [r]);
                return (0, n.jsx)(y.Provider, { value: a, children: e });
            }
            function v({ children: e }) {
                return !!f() ? (0, n.jsx)(w, { children: e }) : (0, n.jsx)(y.Provider, { value: null, children: e });
            }
            var k = r(634979),
                j = r(727071);
            function z({ analytics: e, children: t, i18nInput: r, router: g, pathname: d, useParams: c, searchParams: x }) {
                return (
                    (0, u.useLayoutEffect)(() => {
                        const e = () => {
                            const e = b(m());
                            document.documentElement.dataset.theme = e;
                        };
                        e();
                        const t = window.matchMedia("(prefers-color-scheme: dark)");
                        return (
                            t.addEventListener("change", e),
                            () => {
                                t.removeEventListener("change", e);
                            }
                        );
                    }, []),
                    (0, n.jsx)(o.p, { router: g, children: (0, n.jsx)(k.H, { pathname: d, children: (0, n.jsx)(j.d, { useParams: c, children: (0, n.jsx)(s.x, { searchParams: x, children: (0, n.jsx)(i.TM, { i18nInput: r, children: (0, n.jsx)(v, { children: (0, n.jsxs)(a.UH, { analytics: e, children: [t, (0, n.jsx)(l.x, {})] }) }) }) }) }) }) })
                );
            }
        },
        607499: (e, t, r) => {
            r.d(t, { S: () => g });
            var n = r(552322),
                a = r(202784),
                l = r(455091),
                i = r(332161),
                o = r(993165),
                s = r(578950);
            function u({ message: e, retry: t }) {
                const { t: r } = (0, l.$G)();
                return (0, n.jsxs)("div", { className: "flex flex-col items-center justify-center gap-2 p-5", children: [(0, n.jsx)(i.x, { color: "gray700", children: e || r(t ? "Something went wrong. Try reloading." : "Something went wrong.") }), t && (0, n.jsx)(o.z, { icon: (0, n.jsx)(s.Z, {}), onClick: t, variant: "brandFilled", children: r("Retry") })] });
            }
            class g extends a.Component {
                state = { error: null };
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    this.props.onError?.(e, t);
                }
                _retry() {
                    this.props.onRetry?.(), this.setState({ error: null });
                }
                render() {
                    const { children: e, fallback: t, message: r, onRetry: a } = this.props,
                        { error: l } = this.state;
                    return l ? (void 0 !== t ? t : (0, n.jsx)(u, { message: r, retry: a })) : e;
                }
            }
        },
        727071: (e, t, r) => {
            r.d(t, { U: () => o, d: () => i });
            var n = r(552322),
                a = r(202784);
            const l = (0, a.createContext)(void 0),
                i = ({ useParams: e, children: t }) => (0, n.jsx)(l.Provider, { value: e, children: t }),
                o = () => {
                    const e = (0, a.useContext)(l);
                    if (void 0 === e) throw new Error("useParams must be used within a ParamProvider");
                    return e();
                };
        },
        634979: (e, t, r) => {
            r.d(t, { H: () => i, j: () => o });
            var n = r(552322),
                a = r(202784);
            const l = (0, a.createContext)(void 0);
            function i({ children: e, pathname: t }) {
                return (0, n.jsx)(l.Provider, { value: t, children: e });
            }
            function o() {
                const e = (0, a.useContext)(l);
                if (void 0 === e) throw new Error("usePathname must be used within a PathnameProvider");
                return e;
            }
        },
        968025: (e, t, r) => {
            r.d(t, { p: () => s, t: () => o });
            var n = r(552322),
                a = r(391218),
                l = r(202784);
            const i = (0, l.createContext)({
                push: function (e) {
                    history.pushState(null, "", e);
                },
            });
            function o() {
                const e = (0, l.useContext)(i);
                if (!e) throw new Error("useRouter must be called within a RouterProvider");
                return e;
            }
            function s({ children: e, router: t }) {
                return (0, n.jsx)(i.Provider, { value: t, children: (0, n.jsx)(a.pG, { navigate: t.push, children: e }) });
            }
        },
        768246: (e, t, r) => {
            r.d(t, { l: () => o, x: () => i });
            var n = r(552322),
                a = r(202784);
            const l = (0, a.createContext)(new URLSearchParams());
            function i({ children: e, searchParams: t }) {
                return (0, n.jsx)(l.Provider, { value: t, children: e });
            }
            function o() {
                const e = (0, a.useContext)(l);
                if (!e) throw new Error("useSearchParams must be used within a SearchParamsProvider");
                return e;
            }
        },
        350096: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            const n = {
                fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "viewerUserQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (a = [{ kind: "Literal", name: "safety_level", value: "UserSelfViewOnly" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(i = { kind: "InlineFragment", selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }, { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null }], type: "User", abstractKey: null })], storageKey: null }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")' }, action: "THROW" }], type: "Query", abstractKey: null },
                kind: "Request",
                operation: { argumentDefinitions: [], kind: "Operation", name: "viewerUserQuery", selections: [{ alias: "viewer", args: a, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, i], storageKey: null }, l], storageKey: null }], storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")' }] },
                params: { id: "WOcpZxozm0udY9P9irKvOw", metadata: {}, name: "viewerUserQuery", operationKind: "query", text: null },
            };
            var a, l, i;
            n.hash = "777d4308f91b1255b5b97d302fdd1a24";
            const o = n;
        },
        455091: (e, t, r) => {
            r.d(t, { cC: () => n.cC, $G: () => n.$G });
            var n = r(679816),
                a = r(424991),
                l = r(963463),
                i = r(573936);
            (0, a.Fs)()
                .use(l.Z)
                .use(i.D)
                .init({ debug: !1, fallbackLng: "en", interpolation: { escapeValue: !1, prefix: "{", suffix: "}" }, keySeparator: !1, react: { useSuspense: !0 }, resources: {} });
        },
        625067: (e, t) => {
            t.Qc = function (e, t) {
                const r = new o(),
                    n = e.length;
                if (n < 2) return r;
                const a = t?.decode || g;
                let l = 0;
                do {
                    const t = e.indexOf("=", l);
                    if (-1 === t) break;
                    const i = e.indexOf(";", l),
                        o = -1 === i ? n : i;
                    if (t > o) {
                        l = e.lastIndexOf(";", t - 1) + 1;
                        continue;
                    }
                    const g = s(e, l, t),
                        d = u(e, t, g),
                        c = e.slice(g, d);
                    if (void 0 === r[c]) {
                        let n = s(e, t + 1, o),
                            l = u(e, o, n);
                        const i = a(e.slice(n, l));
                        r[c] = i;
                    }
                    l = o + 1;
                } while (l < n);
                return r;
            };
            const r = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                n = /^[\u0021-\u003A\u003C-\u007E]*$/,
                a = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                l = /^[\u0020-\u003A\u003D-\u007E]*$/,
                i = Object.prototype.toString,
                o = (() => {
                    const e = function () {};
                    return (e.prototype = Object.create(null)), e;
                })();
            function s(e, t, r) {
                do {
                    const r = e.charCodeAt(t);
                    if (32 !== r && 9 !== r) return t;
                } while (++t < r);
                return r;
            }
            function u(e, t, r) {
                for (; t > r; ) {
                    const r = e.charCodeAt(--t);
                    if (32 !== r && 9 !== r) return t + 1;
                }
                return r;
            }
            function g(e) {
                if (-1 === e.indexOf("%")) return e;
                try {
                    return decodeURIComponent(e);
                } catch (t) {
                    return e;
                }
            }
        },
        378364: (e, t, r) => {
            r.d(t, { q: () => i });
            var n = r(552322),
                a = r(840489),
                l = r(812115);
            function i({ resolution: e, screenName: t, shape: r = "circle", size: i = "xLarge", url: o, withLink: s, className: u }) {
                const g = o
                        ? (function (e, t) {
                              return t ? e.replace(/(_[a-z0-9]+)?\.(?=jpeg|png|jpg$)/, `_${t}.`) : e;
                          })(o, e)
                        : void 0,
                    d = t && s,
                    c = d ? l.r : "div";
                return (0, n.jsx)(c, { className: (0, a.Z)("min-size flex overflow-hidden bg-gray-300", "circle" === r && "rounded-full", "square" === r && "rounded-sm", "fill" === i && "size-full", "jumbo" === i && "min-h-16 min-w-16 size-16", "large" === i && "min-h-8 min-w-8 size-8", "medium" === i && "min-h-6 min-w-6 size-6", "small" === i && "min-h-4 min-w-4 size-4", "xLarge" === i && "min-h-10 min-w-10 size-10", "xxLarge" === i && "min-h-12 min-w-12 size-12", "xxxLarge" === i && "min-h-14 min-w-14 size-14", s && "transition duration-200 hover:brightness-90", u), ...(d && { href: `https://x.com/${t}`, target: "external" === s ? "_blank" : void 0 }), ...(g && { children: (0, n.jsx)("img", { alt: "user avatar", className: "size-full", loading: "lazy", src: g }) }) });
            }
        },
        993165: (e, t, r) => {
            r.d(t, { z: () => m });
            var n = r(552322),
                a = r(549815),
                l = r(110929),
                i = r(202784),
                o = r(332161),
                s = r(644490),
                u = r(287326);
            const g = (0, l.j)("", { variants: { size: { large: "size-[22px]", medium: "size-5", small: "size-[18px]", xLarge: "size-6", xSmall: "size-4", xSmallCompact: "size-4" } } }),
                d = { large: "body", medium: "body", small: "subtext1", xLarge: "headline2", xSmall: "subtext1", xSmallCompact: "body" },
                c = (0, l.j)("inline-flex items-center justify-center gap-1 border border-solid transition focus-visible:outline disabled:pointer-events-none disabled:opacity-50", {
                    variants: {
                        backgroundColor: s.z7,
                        borderRadius: { "2xLarge": "rounded-2xl", "3xLarge": "rounded-3xl", full: "rounded-full", large: "rounded-lg", medium: "rounded-md", none: "rounded-none", small: "rounded-sm", xLarge: "rounded-xl", true: "rounded" },
                        color: s.eR,
                        padding: { large: "px-6", medium: "px-4", small: "px-4", xLarge: "px-8", xSmall: "px-3", xSmallCompact: "px-1" },
                        size: { large: "h-10 min-w-10", medium: "h-9 min-w-9", small: "h-8 min-w-8", xLarge: "h-14 min-w-14", xSmall: "h-6 min-w-6", xSmallCompact: "h-6 min-w-6" },
                        variant: {
                            brandFilled: "bg-primary border-transparent outline-primary text-white rounded-full active:bg-mix-black active:bg-mix-amount-15 focus:bg-mix-black focus:bg-mix-amount-10 hover:bg-mix-black hover:bg-mix-amount-10",
                            brandOutlined: "bg-transparent border-nested-border outline-primary border-solid text-primary rounded-full active:bg-mix-primary active:bg-mix-amount-15 focus:bg-mix-primary focus:bg-mix-amount-10 hover:bg-mix-primary hover:bg-mix-amount-10",
                            brandText: "bg-transparent border-transparent outline-primary text-primary rounded-full active:bg-mix-primary active:bg-mix-amount-15 focus:bg-mix-primary focus:bg-mix-amount-10 hover:bg-mix-primary hover:bg-mix-amount-10",
                            destructiveFilled: "bg-red-500 border-transparent outline-red-500 text-white rounded-full active:bg-mix-black active:bg-mix-amount-15 focus:bg-mix-black focus:bg-mix-amount-10 hover:bg-mix-black hover:bg-mix-amount-10",
                            destructiveOutlined: "bg-transparent border-red-100 border-solid outline-red-500 text-red-500 rounded-full active:bg-mix-red-500 active:bg-mix-amount-15 focus:bg-mix-red-500 focus:bg-mix-amount-10 hover:bg-mix-red-500 hover:bg-mix-amount-10",
                            destructiveText: "bg-transparent border-transparent outline-red-500 text-red-500 rounded-full active:bg-mix-red-500 active:bg-mix-amount-15 focus:bg-mix-red-500 focus:bg-mix-amount-10 hover:bg-mix-red-500 hover:bg-mix-amount-10",
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
                        },
                    },
                }),
                m = (0, i.forwardRef)(function ({ asChild: e, backgroundColor: t = "background", borderRadius: r = "full", children: s, className: m, color: b = "text", hoverLabel: x, icon: p, size: h = "medium", variant: y, ...f }, w) {
                    const v = e ? a.g7 : "button";
                    return (0, n.jsx)(u.O, { label: x, children: (0, n.jsx)(v, { className: c({ className: (0, l.cx)(!y && "outline-primary hover:brightness-90 focus:brightness-90 active:brightness-75", m), size: h, variant: y, ...(s && { padding: h }), ...(!y && { backgroundColor: t, borderRadius: r, color: b }) }), ref: w, ...f, children: (0, n.jsxs)(i.Fragment, { children: [p && (0, i.cloneElement)(p, { className: g({ size: h }) }), "string" == typeof s ? (0, n.jsx)(o.x, { color: "inherit", numberOfLines: 1, size: h && d[h], weight: "bold", children: s }) : s] }) }) });
                });
        },
        287326: (e, t, r) => {
            r.d(t, { O: () => i });
            var n = r(552322),
                a = r(306880),
                l = r(983666);
            function i({ children: e, delay: t = 1e3, label: r, offset: i = 4 }) {
                return r ? (0, n.jsx)(a.zt, { children: (0, n.jsxs)(a.fC, { delayDuration: t, children: [(0, n.jsx)(a.xz, { asChild: !0, children: e }), (0, n.jsx)(a.VY, { className: "z-50 overflow-hidden shadow-md", sideOffset: i, children: (0, n.jsx)(l._, { children: r }) })] }) }) : e;
            }
        },
        983666: (e, t, r) => {
            r.d(t, { _: () => o });
            var n = r(552322),
                a = r(840489),
                l = r(332161),
                i = r(644490);
            function o({ backgroundColor: e = "translucentBlack77", bold: t, children: r, color: o = "white", fontSize: s = "subtext3" }) {
                return (0, n.jsx)("div", { className: (0, a.Z)("rounded-sm inline-flex p-1", i.z7[e]), children: (0, n.jsx)(l.x, { color: o, numberOfLines: 1, size: s, weight: t ? "bold" : void 0, children: r }) });
            }
        },
        332161: (e, t, r) => {
            r.d(t, { x: () => u });
            var n = r(552322),
                a = r(110929),
                l = r(644490),
                i = r(812115);
            const o = "div",
                s = (0, a.j)("font-chirp max-w-full whitespace-pre-wrap", { variants: { color: l.eR, numberOfLines: { 1: "line-clamp-1", 2: "line-clamp-2", 3: "line-clamp-3", 4: "line-clamp-4", 5: "line-clamp-5" }, size: { body: "text-body", headline1: "text-headline1", headline2: "text-headline2", inherit: "text-[length:inherit]", subtext1: "text-subtext1", subtext2: "text-subtext2", subtext3: "text-subtext3", title1: "text-title1", title2: "text-title2", title3: "text-title3", title4: "text-title4" }, underline: { false: "no-underline", true: "underline" }, weight: { bold: "font-bold", extrabold: "font-extrabold", inherit: "font-inherit", light: "font-light", medium: "font-medium", normal: "font-normal" }, breakText: { all: "break-all", words: "text-break-words" } } });
            function u({ as: e, className: t, color: r, numberOfLines: l, size: u = "body", underline: g, weight: d = "normal", breakText: c = "words", ...m }) {
                const b = "a" === e,
                    x = b ? i.r : (e ?? o);
                return (0, n.jsx)(x, { ...m, className: s({ className: (0, a.cx)(b && !1 !== g && "hover:underline", t), color: r ?? (b ? "primary" : "text"), numberOfLines: l, size: u, underline: g, weight: d, breakText: c }) });
            }
        },
        19745: (e, t, r) => {
            r.d(t, { x: () => l });
            var n = r(552322),
                a = r(256958);
            function l({ ...e }) {
                return (0, n.jsx)(a.x7, { className: "toaster group w-[600px] flex flex-row justify-center right-1/2 translate-x-1/2", visibleToasts: 1, toastOptions: { classNames: { actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground", cancelButton: "group-[.toast]:bg-gray-50 group-[.toast]:text-gray-700", description: "group-[.toast]:text-gray-700", toast: "group toast group-[.toaster]:bg-primary group-[.toaster]:text-white group-[.toaster]:text-body group-[.toaster]:rounded-md w-auto" } }, ...e });
            }
        },
        351417: (e, t, r) => {
            r.d(t, { Q: () => l });
            var n = r(552322),
                a = r(332161);
            const l = ({ size: e = "body", screenName: t, withLink: r, color: l = "gray700" }) => (0, n.jsx)(a.x, { color: l, numberOfLines: 1, size: e, ...(r && { as: "a", href: `https://x.com/${t}`, target: "external" === r ? "_blank" : void 0, underline: !1 }), children: `@${t}` });
        },
        589259: (e, t, r) => {
            r.d(t, { R: () => b });
            var n = r(552322),
                a = r(840489),
                l = r(409851),
                i = r(914252),
                o = r(330001),
                s = r(278882),
                u = r(313941),
                g = r(133835);
            function d({ affiliation: e, isProtected: t, isSubscriber: r, isTranslator: a, verifiedType: d }) {
                const c = [];
                return "business" === d && c.push((0, n.jsx)(l.Z, {}, "business")), "government" === d && c.push((0, n.jsx)(i.Z, {}, "government")), "user" === d && c.push((0, n.jsx)(o.Z, { className: "fill-badge" }, "User")), r && c.push((0, n.jsx)(s.Z, { className: "fill-plum-500" }, "subscriber")), a && c.push((0, n.jsx)(u.Z, { className: "fill-yellow-500" }, "translator")), t && c.push((0, n.jsx)(g.Z, {}, "protected")), e && c.push((0, n.jsx)("img", { alt: e.label, className: "rounded-sm h-[1em] w-[1em]", loading: "lazy", src: e.url }, "affiliation")), c.length ? (0, n.jsx)("div", { className: "flex gap-1", children: c }) : null;
            }
            var c = r(332161),
                m = r(351417);
            function b({ badges: e, color: t = "text", isStacked: r, name: l, screenName: i, size: o = "body", withLink: s, screenNameColor: u = "gray700", screenNameSize: g }) {
                const b = i && s;
                return (0, n.jsxs)("div", { className: (0, a.Z)("overflow-hidden", r ? "flex-col items-start gap-0" : "flex items-center gap-1"), children: [(0, n.jsxs)("div", { className: "flex items-center gap-0.5 shrink-0 max-w-full", children: [(0, n.jsx)(c.x, { color: t, numberOfLines: 1, size: o, breakText: "all", weight: "bold", ...(b && { as: "a", href: `https://x.com/${i}`, target: "external" === s ? "_blank" : void 0 }), children: l }), e && Object.keys(e).length && (0, n.jsx)("div", { className: "shrink-0", children: (0, n.jsx)(c.x, { size: o, children: (0, n.jsx)(d, { ...e }) }) })] }), i && (0, n.jsx)(m.Q, { screenName: i, size: g || o, withLink: s, color: u })] });
            }
        },
        305399: (e, t, r) => {
            r.d(t, { a: () => a });
            var n = r(202784);
            const a = (e) => {
                const [t, r] = (0, n.useState)(!1);
                return (
                    (0, n.useEffect)(() => {
                        const t = window.matchMedia(e);
                        function n(e) {
                            r(e.matches);
                        }
                        return (
                            r(t.matches),
                            t.addEventListener("change", n),
                            () => {
                                t.removeEventListener("change", n);
                            }
                        );
                    }, [e]),
                    t
                );
            };
        },
        31674: (e, t, r) => {
            r.d(t, { cn: () => l });
            var n = r(840489),
                a = r(320324);
            function l(...e) {
                return (0, a.m6)((0, n.W)(e));
            }
        },
        644490: (e, t, r) => {
            r.d(t, { eR: () => a, z7: () => n });
            const n = {
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
                a = {
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-5d959941.0797525a.js.map
