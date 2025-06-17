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
            async function c(e, t = {}) {
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
            var g = r(298357),
                d = r.n(g),
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
                flush = "undefined" != typeof window ? d()(this.flushImmediate, 15e3, { trailing: !0 }) : this.flushImmediate;
                flushImmediate(e) {
                    const t = this.buffer.splice(0, this.buffer.length);
                    t.length && c("/1.1/jot/client_event.json", { body: new URLSearchParams({ debug: "true", log: JSON.stringify(t) }), keepalive: e, method: "POST" });
                }
            }
            const x = (0, a.createContext)({ namespace: { client: "m5" } });
            function p({ children: e, ...t }) {
                const r = { ...(0, a.useContext)(x).namespace, ...t.namespace };
                return (0, n.jsx)(x.Provider, { value: { namespace: r }, children: e });
            }
            function h() {
                const e = (0, a.useContext)(x);
                return (0, a.useMemo)(() => new b(e.namespace), [e.namespace]);
            }
        },
        125959: (e, t, r) => {
            function n(e = [], t = (e, t) => fetch(e, t)) {
                return e.reduceRight((e, t) => (r, n) => t(e, r, n), t);
            }
            r.d(t, { g: () => n });
        },
        918962: (e, t, r) => {
            r.d(t, { l: () => a });
            var n = r(381415);
            const a = (e, t, r) => {
                const a = (function (e) {
                        return e instanceof URL ? e : new URL(e, "https://api.x.com");
                    })(t),
                    l = new Headers(r?.headers);
                if (
                    (function (e) {
                        return "api.x.com" === e.hostname || e.href.startsWith("https://x.com/i/api");
                    })(a)
                ) {
                    const e = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
                    if (!e) throw new Error("Bearer token is required");
                    l.set("Authorization", `Bearer ${e}`);
                    const t = l.get("cookie") ?? ("undefined" != typeof document ? document.cookie : void 0);
                    if (t) {
                        const e = (0, n.Qc)(t);
                        e.auth_token && l.set("x-twitter-auth-type", "OAuth2Session"), e.ct0 && l.set("x-csrf-token", e.ct0);
                    }
                }
                return e(a, { ...r, credentials: "include", headers: l });
            };
        },
        381415: (e, t) => {
            t.Qc = function (e, t) {
                const r = new o(),
                    n = e.length;
                if (n < 2) return r;
                const a = t?.decode || c;
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
                    const c = s(e, l, t),
                        g = u(e, t, c),
                        d = e.slice(c, g);
                    if (void 0 === r[d]) {
                        let n = s(e, t + 1, o),
                            l = u(e, o, n);
                        const i = a(e.slice(n, l));
                        r[d] = i;
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
            function c(e) {
                if (-1 === e.indexOf("%")) return e;
                try {
                    return decodeURIComponent(e);
                } catch (t) {
                    return e;
                }
            }
        },
        560870: (e) => {
            function t(e) {
                try {
                    return JSON.stringify(e);
                } catch (e) {
                    return '"[Circular]"';
                }
            }
            e.exports = function (e, r, n) {
                var a = (n && n.stringify) || t;
                if ("object" == typeof e && null !== e) {
                    var l = r.length + 1;
                    if (1 === l) return e;
                    var i = new Array(l);
                    i[0] = a(e);
                    for (var o = 1; o < l; o++) i[o] = a(r[o]);
                    return i.join(" ");
                }
                if ("string" != typeof e) return e;
                var s = r.length;
                if (0 === s) return e;
                for (var u = "", c = 0, g = -1, d = (e && e.length) || 0, m = 0; m < d; ) {
                    if (37 === e.charCodeAt(m) && m + 1 < d) {
                        switch (((g = g > -1 ? g : 0), e.charCodeAt(m + 1))) {
                            case 100:
                            case 102:
                                if (c >= s) break;
                                if (null == r[c]) break;
                                g < m && (u += e.slice(g, m)), (u += Number(r[c])), (g = m + 2), m++;
                                break;
                            case 105:
                                if (c >= s) break;
                                if (null == r[c]) break;
                                g < m && (u += e.slice(g, m)), (u += Math.floor(Number(r[c]))), (g = m + 2), m++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (c >= s) break;
                                if (void 0 === r[c]) break;
                                g < m && (u += e.slice(g, m));
                                var b = typeof r[c];
                                if ("string" === b) {
                                    (u += "'" + r[c] + "'"), (g = m + 2), m++;
                                    break;
                                }
                                if ("function" === b) {
                                    (u += r[c].name || "<anonymous>"), (g = m + 2), m++;
                                    break;
                                }
                                (u += a(r[c])), (g = m + 2), m++;
                                break;
                            case 115:
                                if (c >= s) break;
                                g < m && (u += e.slice(g, m)), (u += String(r[c])), (g = m + 2), m++;
                                break;
                            case 37:
                                g < m && (u += e.slice(g, m)), (u += "%"), (g = m + 2), m++, c--;
                        }
                        ++c;
                    }
                    ++m;
                }
                if (-1 === g) return e;
                g < d && (u += e.slice(g));
                return u;
            };
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
                c = r(625067);
            const g = "night_mode";
            const d = { 0: "light", 1: "dim", 2: "dark" },
                m = (Object.fromEntries(Object.entries(d).map(([e, t]) => [t, Number(e)])), () => (0, c.Qc)(document.cookie)[g]),
                b = (e) => {
                    const t = Number(e);
                    return d[t] ?? x();
                },
                x = () => ("undefined" != typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
            var p = r(889906);
            const h = r(350096),
                f = (0, u.createContext)(null),
                v = () => {
                    if ("undefined" != typeof document) {
                        return (0, c.Qc)(document.cookie).twid;
                    }
                };
            function y({ children: e }) {
                const t = (0, p.useLazyLoadQuery)(h, {}),
                    r = t?.viewer?.user_results?.result ?? null,
                    a = (0, u.useMemo)(() => r, [r]);
                return (0, n.jsx)(f.Provider, { value: a, children: e });
            }
            function w({ children: e }) {
                return !!v() ? (0, n.jsx)(y, { children: e }) : (0, n.jsx)(f.Provider, { value: null, children: e });
            }
            var j = r(634979),
                k = r(727071);
            function z({ analytics: e, children: t, i18nInput: r, router: c, pathname: g, useParams: d, searchParams: x }) {
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
                    (0, n.jsx)(o.p, { router: c, children: (0, n.jsx)(j.H, { pathname: g, children: (0, n.jsx)(k.d, { useParams: d, children: (0, n.jsx)(s.x, { searchParams: x, children: (0, n.jsx)(i.TM, { i18nInput: r, children: (0, n.jsx)(w, { children: (0, n.jsxs)(a.UH, { analytics: e, children: [t, (0, n.jsx)(l.x, {})] }) }) }) }) }) }) })
                );
            }
        },
        134877: (e, t, r) => {
            r.d(t, { S: () => p });
            var n = r(552322),
                a = r(384099),
                l = r.n(a);
            var i = r(125959),
                o = r(918962);
            const s = [];
            s.push(
                ((e = "responsive_web") => {
                    const t = (0, i.g)([o.l]);
                    let r;
                    return (
                        (r = "prod"),
                        {
                            async log({ context: n, error: a, level: l, message: i }) {
                                const o = new Date(),
                                    s = { id: o.getTime(), index: `${e}_${r}${"error" === l ? "" : "_log"}`, source: { "@timestamp": o.toISOString(), message: i }, type: l.toUpperCase(), ...n };
                                "undefined" != typeof window && (s.source.url = window.location.href), a instanceof Error && ((s.source.error_details = a.stack), (s.tag = a.name));
                                try {
                                    await t("/1.1/jot/error_log.json", { body: new URLSearchParams({ log: JSON.stringify(s) }), method: "POST" });
                                } catch (a) {}
                            },
                        }
                    );
                })(),
            );
            const u = new (class {
                logger = l()({ level: "debug" });
                plugins;
                constructor(e) {
                    this.plugins = e;
                }
                log(e, t, r, n) {
                    this.logger[e](t, r?.stack, n);
                    const a = { level: e, message: t, error: r, context: n };
                    for (const e of this.plugins) e.log(a);
                }
                error(e, t, r) {
                    this.log("error", e, t, r);
                }
                info(e, t) {
                    this.log("info", e, void 0, t);
                }
                warn(e, t) {
                    this.log("warn", e, void 0, t);
                }
            })(s);
            var c = r(202784),
                g = r(263033),
                d = r(611105),
                m = r(332161),
                b = r(993165);
            function x({ message: e, retry: t }) {
                const { t: r } = (0, g.$G)();
                return (0, n.jsxs)("div", { className: "flex flex-col items-center justify-center gap-2 p-5", children: [(0, n.jsx)(m.x, { color: "gray700", children: e || r(t ? "Something went wrong. Try reloading." : "Something went wrong.") }), t && (0, n.jsx)(b.z, { icon: (0, n.jsx)(d.Z, {}), onClick: t, variant: "brandFilled", children: r("Retry") })] });
            }
            class p extends c.Component {
                state = { error: null };
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    u.error("Error boundary", e, { user_visible: !0 }), this.props.onError?.(e, t);
                }
                _retry() {
                    this.props.onRetry?.(), this.setState({ error: null });
                }
                render() {
                    const { children: e, fallback: t, message: r, onRetry: a } = this.props,
                        { error: l } = this.state;
                    return l ? (void 0 !== t ? t : (0, n.jsx)(x, { message: r, retry: a })) : e;
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
        625067: (e, t) => {
            t.Qc = function (e, t) {
                const r = new o(),
                    n = e.length;
                if (n < 2) return r;
                const a = t?.decode || c;
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
                    const c = s(e, l, t),
                        g = u(e, t, c),
                        d = e.slice(c, g);
                    if (void 0 === r[d]) {
                        let n = s(e, t + 1, o),
                            l = u(e, o, n);
                        const i = a(e.slice(n, l));
                        r[d] = i;
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
            function c(e) {
                if (-1 === e.indexOf("%")) return e;
                try {
                    return decodeURIComponent(e);
                } catch (t) {
                    return e;
                }
            }
        },
        699416: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(552322);
            const a = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z" }) });
        },
        907934: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(552322);
            const a = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z" }) });
        },
        89596: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(552322);
            const a = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z" }) });
        },
        611105: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(552322);
            const a = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M12 4c-4.418 0-8 3.58-8 8s3.582 8 8 8c3.806 0 6.993-2.66 7.802-6.22l1.95.44C20.742 18.67 16.76 22 12 22 6.477 22 2 17.52 2 12S6.477 2 12 2c3.272 0 6.176 1.57 8 4V3.5h2v6h-6v-2h2.616C17.175 5.39 14.749 4 12 4z" }) });
        },
        913577: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(552322);
            const a = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M16 6c0 2.21-1.79 4-4 4S8 8.21 8 6s1.79-4 4-4 4 1.79 4 4zm-.76 8.57l-3.95.58 2.86 2.78-.68 3.92L17 20l3.53 1.85-.68-3.92 2.86-2.78-3.95-.58L17 11l-1.76 3.57zm-.45-3.09c-.89-.32-1.86-.48-2.89-.48-2.35 0-4.37.85-5.86 2.44-1.48 1.57-2.36 3.8-2.63 6.46l-.11 1.09h8.58l.52-2.49-4.05-4.3 5.59-.99.85-1.73z" }) });
        },
        101680: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(552322);
            const a = (e) => (0, n.jsxs)("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22", width: "1em", height: "1em", display: "flex", role: "img", ...e, children: [(0, n.jsxs)("linearGradient", { id: "a", gradientUnits: "userSpaceOnUse", x1: 4.411, x2: 18.083, y1: 2.495, y2: 21.508, children: [(0, n.jsx)("stop", { offset: 0, stopColor: "#f4e72a" }), (0, n.jsx)("stop", { offset: 0.539, stopColor: "#cd8105" }), (0, n.jsx)("stop", { offset: 0.68, stopColor: "#cb7b00" }), (0, n.jsx)("stop", { offset: 1, stopColor: "#f4ec26" }), (0, n.jsx)("stop", { offset: 1, stopColor: "#f4e72a" })] }), (0, n.jsxs)("linearGradient", { id: "b", gradientUnits: "userSpaceOnUse", x1: 5.355, x2: 16.361, y1: 3.395, y2: 19.133, children: [(0, n.jsx)("stop", { offset: 0, stopColor: "#f9e87f" }), (0, n.jsx)("stop", { offset: 0.406, stopColor: "#e2b719" }), (0, n.jsx)("stop", { offset: 0.989, stopColor: "#e2b719" })] }), (0, n.jsxs)("g", { clipRule: "evenodd", fillRule: "evenodd", children: [(0, n.jsx)("path", { d: "M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z", fill: "url(#a)" }), (0, n.jsx)("path", { d: "M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z", fill: "url(#b)" }), (0, n.jsx)("path", { d: "M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z", fill: "#d18800" })] })] });
        },
        490881: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(552322);
            const a = (e) => (0, n.jsx)("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22", width: "1em", height: "1em", display: "flex", role: "img", ...e, children: (0, n.jsx)("path", { clipRule: "evenodd", d: "M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z", fill: "#829aab", fillRule: "evenodd" }) });
        },
        808116: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(552322);
            const a = (e) => (0, n.jsx)("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22", width: "1em", height: "1em", display: "flex", role: "img", ...e, children: (0, n.jsx)("path", { d: "M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" }) });
        },
        378364: (e, t, r) => {
            r.d(t, { q: () => s });
            var n = r(552322),
                a = r(840489),
                l = r(322506),
                i = r(202784);
            const o = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png";
            function s({ resolution: e, screenName: t, shape: r = "circle", size: s = "xLarge", url: u, withLink: c, className: g }) {
                const d = u
                        ? (function (e, t) {
                              return t ? e.replace(/(_[a-z0-9]+)?\.(?=jpeg|png|jpg$)/, `_${t}.`) : e;
                          })(u, e)
                        : void 0,
                    m = t && c,
                    b = m ? l.r : "div",
                    [x, p] = (0, i.useState)(!1);
                return (0, n.jsx)(b, {
                    className: (0, a.Z)("min-size flex overflow-hidden bg-gray-300", "circle" === r && "rounded-full", "square" === r && "rounded-sm", "fill" === s && "size-full", "jumbo" === s && "min-h-16 min-w-16 size-16", "large" === s && "min-h-8 min-w-8 size-8", "medium" === s && "min-h-6 min-w-6 size-6", "small" === s && "min-h-4 min-w-4 size-4", "xLarge" === s && "min-h-10 min-w-10 size-10", "xxLarge" === s && "min-h-12 min-w-12 size-12", "xxxLarge" === s && "min-h-14 min-w-14 size-14", c && "transition duration-200 hover:brightness-90", g),
                    ...(m && { href: `https://x.com/${t}`, target: "external" === c ? "_blank" : void 0 }),
                    ...(d && {
                        children: (0, n.jsx)("img", {
                            alt: "user avatar",
                            className: "size-full",
                            loading: "lazy",
                            onError: () => {
                                p(!0);
                            },
                            src: x ? o : d,
                        }),
                    }),
                });
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
            const c = (0, l.j)("", { variants: { size: { large: "size-[22px]", medium: "size-5", small: "size-[18px]", xLarge: "size-6", xxLargeCompact: "size-4", xSmall: "size-4", xSmallCompact: "size-4" } } }),
                g = { large: "body", medium: "body", small: "subtext1", xLarge: "headline2", xxLargeCompact: "body", xSmall: "subtext1", xSmallCompact: "body" },
                d = (0, l.j)("inline-flex items-center justify-center gap-1 border border-solid transition focus-visible:outline disabled:pointer-events-none disabled:opacity-50", {
                    variants: {
                        backgroundColor: s.z7,
                        borderRadius: { "2xLarge": "rounded-2xl", "3xLarge": "rounded-3xl", full: "rounded-full", large: "rounded-lg", medium: "rounded-md", none: "rounded-none", small: "rounded-sm", xLarge: "rounded-xl", true: "rounded" },
                        color: s.eR,
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
                m = (0, i.forwardRef)(function ({ asChild: e, backgroundColor: t = "background", borderRadius: r = "full", children: s, className: m, color: b = "text", hoverLabel: x, icon: p, size: h = "medium", variant: f, ...v }, y) {
                    const w = e ? a.g7 : "button";
                    return (0, n.jsx)(u.O, { label: x, children: (0, n.jsx)(w, { className: d({ className: (0, l.cx)(!f && "outline-primary hover:brightness-90 focus:brightness-90 active:brightness-75", m), size: h, variant: f, ...(s && { padding: h }), ...(!f && { backgroundColor: t, borderRadius: r, color: b }) }), ref: y, ...v, children: (0, n.jsxs)(i.Fragment, { children: [p && (0, i.cloneElement)(p, { className: c({ size: h }) }), "string" == typeof s ? (0, n.jsx)(o.x, { color: "inherit", numberOfLines: 1, size: h && g[h], weight: "bold", children: s }) : s] }) }) });
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
        322506: (e, t, r) => {
            r.d(t, { r: () => i });
            var n = r(552322),
                a = r(202784),
                l = r(812115);
            const i = (0, a.forwardRef)((e, t) => {
                const { href: r, ...a } = e;
                return (0, n.jsx)(l.r, { ref: t, href: r && ((i = r), "undefined" != typeof window && "x.com" === window.location.hostname && i.startsWith("https://x.com") ? i.replace("https://x.com", "") : i), ...a });
                var i;
            });
        },
        332161: (e, t, r) => {
            r.d(t, { x: () => u });
            var n = r(552322),
                a = r(110929),
                l = r(644490),
                i = r(322506);
            const o = "div",
                s = (0, a.j)("font-chirp max-w-full whitespace-pre-wrap", { variants: { color: l.eR, numberOfLines: { 1: "line-clamp-1", 2: "line-clamp-2", 3: "line-clamp-3", 4: "line-clamp-4", 5: "line-clamp-5" }, size: { body: "text-body", headline1: "text-headline1", headline2: "text-headline2", inherit: "text-[length:inherit]", subtext1: "text-subtext1", subtext2: "text-subtext2", subtext3: "text-subtext3", title1: "text-title1", title2: "text-title2", title3: "text-title3", title4: "text-title4" }, underline: { false: "no-underline", true: "underline" }, weight: { bold: "font-bold", extrabold: "font-extrabold", inherit: "font-inherit", light: "font-light", medium: "font-medium", normal: "font-normal" }, breakText: { all: "break-all", words: "text-break-words" } } });
            function u({ as: e, className: t, color: r, numberOfLines: l, size: u = "body", underline: c, weight: g = "normal", breakText: d = "words", ...m }) {
                const b = "a" === e,
                    x = b ? i.r : (e ?? o);
                return (0, n.jsx)(x, { ...m, className: s({ className: (0, a.cx)(b && !1 !== c && "hover:underline", t), color: r ?? (b ? "primary" : "text"), numberOfLines: l, size: u, underline: c, weight: g, breakText: d }) });
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
                l = r(101680),
                i = r(490881),
                o = r(808116),
                s = r(913577),
                u = r(907934),
                c = r(89596);
            function g({ affiliation: e, isProtected: t, isSubscriber: r, isTranslator: a, verifiedType: g }) {
                const d = [];
                return "business" === g && d.push((0, n.jsx)(l.Z, {}, "business")), "government" === g && d.push((0, n.jsx)(i.Z, {}, "government")), "user" === g && d.push((0, n.jsx)(o.Z, { className: "fill-badge" }, "User")), r && d.push((0, n.jsx)(s.Z, { className: "fill-plum-500" }, "subscriber")), a && d.push((0, n.jsx)(u.Z, { className: "fill-yellow-500" }, "translator")), t && d.push((0, n.jsx)(c.Z, {}, "protected")), e && d.push((0, n.jsx)("img", { alt: e.label, className: "rounded-sm h-[1em] w-[1em]", loading: "lazy", src: e.url }, "affiliation")), d.length ? (0, n.jsx)("div", { className: "flex gap-1", children: d }) : null;
            }
            var d = r(332161),
                m = r(351417);
            function b({ badges: e, color: t = "text", isStacked: r, name: l, screenName: i, size: o = "body", weight: s = "bold", withLink: u, screenNameColor: c = "gray700", screenNameSize: b }) {
                const x = i && u;
                return (0, n.jsxs)("div", { className: (0, a.Z)("overflow-hidden", r ? "flex-col items-start gap-0" : "flex items-center gap-1"), children: [(0, n.jsxs)("div", { className: "flex items-center gap-0.5 shrink-0 max-w-full", children: [(0, n.jsx)(d.x, { color: t, numberOfLines: 1, size: o, breakText: "all", weight: s, ...(x && { as: "a", href: `https://x.com/${i}`, target: "external" === u ? "_blank" : void 0 }), children: l }), e && Object.keys(e).length && (0, n.jsx)("div", { className: "shrink-0", children: (0, n.jsx)(d.x, { size: o, children: (0, n.jsx)(g, { ...e }) }) })] }), i && (0, n.jsx)(m.Q, { screenName: i, size: b || o, withLink: u, color: c })] });
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
        384099: (e, t, r) => {
            const n = r(560870);
            e.exports = g;
            const a =
                    (function () {
                        function e(e) {
                            return void 0 !== e && e;
                        }
                        try {
                            return (
                                "undefined" != typeof globalThis ||
                                    Object.defineProperty(Object.prototype, "globalThis", {
                                        get: function () {
                                            return delete Object.prototype.globalThis, (this.globalThis = this);
                                        },
                                        configurable: !0,
                                    }),
                                globalThis
                            );
                        } catch (t) {
                            return e(self) || e(window) || e(this) || {};
                        }
                    })().console || {},
                l = { mapHttpRequest: h, mapHttpResponse: h, wrapRequestSerializer: f, wrapResponseSerializer: f, wrapErrorSerializer: f, req: h, res: h, err: x, errWithCause: x };
            function i(e, t) {
                return "silent" === e ? 1 / 0 : t.levels.values[e];
            }
            const o = Symbol("pino.logFuncs"),
                s = Symbol("pino.hierarchy"),
                u = { error: "log", fatal: "error", warn: "error", info: "log", debug: "log", trace: "log" };
            function c(e, t) {
                const r = { logger: t, parent: e[s] };
                t[s] = r;
            }
            function g(e) {
                (e = e || {}).browser = e.browser || {};
                const t = e.browser.transmit;
                if (t && "function" != typeof t.send) throw Error("pino: transmit option must have a send function");
                const r = e.browser.write || a;
                e.browser.write && (e.browser.asObject = !0);
                const n = e.serializers || {},
                    l = (function (e, t) {
                        if (Array.isArray(e))
                            return e.filter(function (e) {
                                return "!stdSerializers.err" !== e;
                            });
                        return !0 === e && Object.keys(t);
                    })(e.browser.serialize, n);
                let s = e.browser.serialize;
                Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (s = !1);
                const x = Object.keys(e.customLevels || {}),
                    h = ["error", "fatal", "warn", "info", "debug", "trace"].concat(x);
                "function" == typeof r &&
                    h.forEach(function (e) {
                        r[e] = r;
                    }),
                    (!1 === e.enabled || e.browser.disabled) && (e.level = "silent");
                const f = e.level || "info",
                    y = Object.create(r);
                y.log || (y.log = v),
                    (function (e, t, r) {
                        const n = {};
                        t.forEach((e) => {
                            n[e] = r[e] ? r[e] : a[e] || a[u[e] || "log"] || v;
                        }),
                            (e[o] = n);
                    })(y, h, r),
                    c({}, y),
                    Object.defineProperty(y, "levelVal", {
                        get: function () {
                            return i(this.level, this);
                        },
                    }),
                    Object.defineProperty(y, "level", {
                        get: function () {
                            return this._level;
                        },
                        set: function (e) {
                            if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                            (this._level = e),
                                d(this, w, y, "error"),
                                d(this, w, y, "fatal"),
                                d(this, w, y, "warn"),
                                d(this, w, y, "info"),
                                d(this, w, y, "debug"),
                                d(this, w, y, "trace"),
                                x.forEach((e) => {
                                    d(this, w, y, e);
                                });
                        },
                    });
                const w = { transmit: t, serialize: l, asObject: e.browser.asObject, asObjectBindingsOnly: e.browser.asObjectBindingsOnly, formatters: e.browser.formatters, levels: h, timestamp: p(e), messageKey: e.messageKey || "msg", onChild: e.onChild || v };
                function j(r, a, i) {
                    if (!a) throw new Error("missing bindings for child Pino");
                    (i = i || {}), l && a.serializers && (i.serializers = a.serializers);
                    const o = i.serializers;
                    if (l && o) {
                        var s = Object.assign({}, n, o),
                            u = !0 === e.browser.serialize ? Object.keys(s) : l;
                        delete a.serializers, m([a], u, s, this._stdErrSerialize);
                    }
                    function g(e) {
                        (this._childLevel = 1 + (0 | e._childLevel)), (this.bindings = a), s && ((this.serializers = s), (this._serialize = u)), t && (this._logEvent = b([].concat(e._logEvent.bindings, a)));
                    }
                    g.prototype = this;
                    const d = new g(this);
                    return (
                        c(this, d),
                        (d.child = function (...e) {
                            return j.call(this, r, ...e);
                        }),
                        (d.level = i.level || this.level),
                        r.onChild(d),
                        d
                    );
                }
                return (
                    (y.levels = (function (e) {
                        const t = e.customLevels || {},
                            r = Object.assign({}, g.levels.values, t),
                            n = Object.assign(
                                {},
                                g.levels.labels,
                                (function (e) {
                                    const t = {};
                                    return (
                                        Object.keys(e).forEach(function (r) {
                                            t[e[r]] = r;
                                        }),
                                        t
                                    );
                                })(t),
                            );
                        return { values: r, labels: n };
                    })(e)),
                    (y.level = f),
                    (y.isLevelEnabled = function (e) {
                        return !!this.levels.values[e] && this.levels.values[e] >= this.levels.values[this.level];
                    }),
                    (y.setMaxListeners = y.getMaxListeners = y.emit = y.addListener = y.on = y.prependListener = y.once = y.prependOnceListener = y.removeListener = y.removeAllListeners = y.listeners = y.listenerCount = y.eventNames = y.write = y.flush = v),
                    (y.serializers = n),
                    (y._serialize = l),
                    (y._stdErrSerialize = s),
                    (y.child = function (...e) {
                        return j.call(this, w, ...e);
                    }),
                    t && (y._logEvent = b()),
                    y
                );
            }
            function d(e, t, r, l) {
                if ((Object.defineProperty(e, l, { value: i(e.level, r) > i(l, r) ? v : r[o][l], writable: !0, enumerable: !0, configurable: !0 }), e[l] === v)) {
                    if (!t.transmit) return;
                    const n = i(t.transmit.level || e.level, r);
                    if (i(l, r) < n) return;
                }
                e[l] = (function (e, t, r, l) {
                    return (
                        (s = e[o][l]),
                        function () {
                            const o = t.timestamp(),
                                u = new Array(arguments.length),
                                c = Object.getPrototypeOf && Object.getPrototypeOf(this) === a ? a : this;
                            for (var g = 0; g < u.length; g++) u[g] = arguments[g];
                            var d = !1;
                            if (
                                (t.serialize && (m(u, this._serialize, this.serializers, this._stdErrSerialize), (d = !0)),
                                t.asObject || t.formatters
                                    ? s.call(
                                          c,
                                          ...(function (e, t, r, a, l) {
                                              const { level: i, log: o = (e) => e } = l.formatters || {},
                                                  s = r.slice();
                                              let u = s[0];
                                              const c = {};
                                              let g = 1 + (0 | e._childLevel);
                                              if ((g < 1 && (g = 1), a && (c.time = a), i)) {
                                                  const r = i(t, e.levels.values[t]);
                                                  Object.assign(c, r);
                                              } else c.level = e.levels.values[t];
                                              if (l.asObjectBindingsOnly) {
                                                  if (null !== u && "object" == typeof u) for (; g-- && "object" == typeof s[0]; ) Object.assign(c, s.shift());
                                                  return [o(c), ...s];
                                              }
                                              if (null !== u && "object" == typeof u) {
                                                  for (; g-- && "object" == typeof s[0]; ) Object.assign(c, s.shift());
                                                  u = s.length ? n(s.shift(), s) : void 0;
                                              } else "string" == typeof u && (u = n(s.shift(), s));
                                              return void 0 !== u && (c[l.messageKey] = u), [o(c)];
                                          })(this, l, u, o, t),
                                      )
                                    : s.apply(c, u),
                                t.transmit)
                            ) {
                                const n = t.transmit.level || e._level,
                                    a = i(n, r),
                                    s = i(l, r);
                                if (s < a) return;
                                !(function (e, t, r, n = !1) {
                                    const a = t.send,
                                        l = t.ts,
                                        i = t.methodLevel,
                                        o = t.methodValue,
                                        s = t.val,
                                        u = e._logEvent.bindings;
                                    n || m(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize),
                                        (e._logEvent.ts = l),
                                        (e._logEvent.messages = r.filter(function (e) {
                                            return -1 === u.indexOf(e);
                                        })),
                                        (e._logEvent.level.label = i),
                                        (e._logEvent.level.value = o),
                                        a(i, e._logEvent, s),
                                        (e._logEvent = b(u));
                                })(this, { ts: o, methodLevel: l, methodValue: s, transmitLevel: n, transmitValue: r.levels.values[t.transmit.level || e._level], send: t.transmit.send, val: i(e._level, r) }, u, d);
                            }
                        }
                    );
                    var s;
                })(e, t, r, l);
                const u = (function (e) {
                    const t = [];
                    e.bindings && t.push(e.bindings);
                    let r = e[s];
                    for (; r.parent; ) (r = r.parent), r.logger.bindings && t.push(r.logger.bindings);
                    return t.reverse();
                })(e);
                0 !== u.length &&
                    (e[l] = (function (e, t) {
                        return function () {
                            return t.apply(this, [...e, ...arguments]);
                        };
                    })(u, e[l]));
            }
            function m(e, t, r, n) {
                for (const a in e)
                    if (n && e[a] instanceof Error) e[a] = g.stdSerializers.err(e[a]);
                    else if ("object" == typeof e[a] && !Array.isArray(e[a]) && t) for (const n in e[a]) t.indexOf(n) > -1 && n in r && (e[a][n] = r[n](e[a][n]));
            }
            function b(e) {
                return { ts: 0, messages: [], bindings: e || [], level: { label: "", value: 0 } };
            }
            function x(e) {
                const t = { type: e.constructor.name, msg: e.message, stack: e.stack };
                for (const r in e) void 0 === t[r] && (t[r] = e[r]);
                return t;
            }
            function p(e) {
                return "function" == typeof e.timestamp ? e.timestamp : !1 === e.timestamp ? y : w;
            }
            function h() {
                return {};
            }
            function f(e) {
                return e;
            }
            function v() {}
            function y() {
                return !1;
            }
            function w() {
                return Date.now();
            }
            (g.levels = { values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 }, labels: { 10: "trace", 20: "debug", 30: "info", 40: "warn", 50: "error", 60: "fatal" } }),
                (g.stdSerializers = l),
                (g.stdTimeFunctions = Object.assign(
                    {},
                    {
                        nullTime: y,
                        epochTime: w,
                        unixTime: function () {
                            return Math.round(Date.now() / 1e3);
                        },
                        isoTime: function () {
                            return new Date(Date.now()).toISOString();
                        },
                    },
                )),
                (e.exports.default = g),
                (e.exports.pino = g);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-5d959941.2bc2775a.js.map
