"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-5d959941"],
    {
        446368: (e, t, n) => {
            n.d(t, { ng: () => g, UH: () => l, z$: () => v, $8: () => o });
            var r = n(552322),
                s = n(202784);
            const i = (0, s.createContext)(void 0);
            function o() {
                const e = (0, s.useContext)(i);
                if (!e) throw new Error("useAnalytics must be used within an AnalyticsProvider");
                return e;
            }
            function l({ analytics: e, children: t }) {
                return (0, r.jsx)(i.Provider, { value: e, children: t });
            }
            const a = "undefined" == typeof window,
                c = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
            async function u(e, t = {}) {
                const n = new URL(e, "https://api.x.com"),
                    r = t?.headers ? new Headers(t.headers) : new Headers();
                r.set("Accept", "application/json"), r.set("Authorization", `Bearer ${c}`);
                const s = (function (e = "") {
                    const t = {};
                    return (
                        e.split(";").forEach((e) => {
                            const n = e.split("=");
                            2 === n.length && (t[decodeURIComponent(n[0].trim())] = decodeURIComponent(n[1].trim()));
                        }),
                        t
                    );
                })(a ? (r.get("cookie") ?? "") : document.cookie);
                s.auth_token && r.set("x-twitter-auth-type", "OAuth2Session"), s.ct0 && r.set("x-csrf-token", s.ct0);
                const i = await fetch(n, { ...t, credentials: "include", headers: r, signal: t.signal ?? AbortSignal.timeout(5e3) });
                if (!i.ok) throw new Error(`Http status ${i.status}: ${i.statusText}`);
                return i;
            }
            var d = n(298357),
                f = n.n(d),
                h = n(834406);
            class m {
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
                    const n = { ...this.namespace, ...e };
                    if (!n.client || !n.page || !n.action) throw new Error(`Invalid scribe namespace ${JSON.stringify(n)}`);
                    const r = Date.now();
                    this.sequenceStartTimestamp || (this.sequenceStartTimestamp = r);
                    const s = { ...t, _category_: "client_event", client_app_id: t?.client_app_id ?? h.env.NEXT_PUBLIC_APP_ID ?? h.env.APP_ID, client_event_sequence_number: ++this.sequenceNumber, client_event_sequence_start_timestamp: this.sequenceStartTimestamp, event_namespace: n, format_version: 2, triggered_on: r };
                    this.buffer.push(s), this.flush();
                }
                flush = "undefined" != typeof window ? f()(this.flushImmediate, 15e3, { trailing: !0 }) : this.flushImmediate;
                flushImmediate(e) {
                    const t = this.buffer.splice(0, this.buffer.length);
                    t.length && u("/1.1/jot/client_event.json", { body: new URLSearchParams({ debug: "true", log: JSON.stringify(t) }), keepalive: e, method: "POST" });
                }
            }
            const p = (0, s.createContext)({ namespace: { client: "m5" } });
            function g({ children: e, ...t }) {
                const n = { ...(0, s.useContext)(p).namespace, ...t.namespace };
                return (0, r.jsx)(p.Provider, { value: { namespace: n }, children: e });
            }
            function v() {
                const e = (0, s.useContext)(p);
                return (0, s.useMemo)(() => new m(e.namespace), [e.namespace]);
            }
        },
        125959: (e, t, n) => {
            function r(e = [], t = (e, t) => fetch(e, t)) {
                return e.reduceRight((e, t) => (n, r) => t(e, n, r), t);
            }
            n.d(t, { g: () => r });
        },
        918962: (e, t, n) => {
            n.d(t, { l: () => s });
            var r = n(381415);
            const s = (e, t, n) => {
                const s = (function (e) {
                        return e instanceof URL ? e : new URL(e, "https://api.x.com");
                    })(t),
                    i = new Headers(n?.headers);
                if (
                    (function (e) {
                        return "api.x.com" === e.hostname || e.href.startsWith("https://x.com/i/api");
                    })(s)
                ) {
                    const e = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
                    if (!e) throw new Error("Bearer token is required");
                    i.set("Authorization", `Bearer ${e}`);
                    const t = i.get("cookie") ?? ("undefined" != typeof document ? document.cookie : void 0);
                    if (t) {
                        const e = (0, r.Qc)(t);
                        e.auth_token && i.set("x-twitter-auth-type", "OAuth2Session"), e.ct0 && i.set("x-csrf-token", e.ct0);
                    }
                }
                return e(s, { ...n, credentials: "include", headers: i });
            };
        },
        431882: (e, t, n) => {
            n.d(t, { Yd: () => i, kg: () => u, pp: () => a });
            var r = n(384099),
                s = n.n(r);
            class i {
                logger = s()({ level: "debug" });
                plugins;
                constructor(e) {
                    this.plugins = e;
                }
                log(e, t, n, r) {
                    this.logger[e](t, n?.stack, r);
                    const s = { level: e, message: t, error: n, context: r };
                    for (const e of this.plugins) e.log(s);
                }
                error(e, t, n) {
                    this.log("error", e, t, n);
                }
                info(e, t) {
                    this.log("info", e, void 0, t);
                }
                warn(e, t) {
                    this.log("warn", e, void 0, t);
                }
            }
            var o = n(125959),
                l = n(918962);
            const a = (e = "responsive_web") => {
                    const t = (0, o.g)([l.l]);
                    let n;
                    return (
                        (n = "prod"),
                        {
                            async log({ context: r, error: s, level: i, message: o }) {
                                const l = new Date(),
                                    a = { id: l.getTime(), index: `${e}_${n}${"error" === i ? "" : "_log"}`, source: { "@timestamp": l.toISOString(), message: o }, type: i.toUpperCase(), ...r };
                                "undefined" != typeof window && (a.source.url = window.location.href), s instanceof Error && ((a.source.error_details = s.stack), (a.tag = s.name));
                                try {
                                    await t("/1.1/jot/error_log.json", { body: new URLSearchParams({ log: JSON.stringify(a) }), method: "POST" });
                                } catch (s) {}
                            },
                        }
                    );
                },
                c = [];
            c.push(a());
            const u = new i(c);
        },
        381415: (e, t) => {
            t.Qc = function (e, t) {
                const n = new l(),
                    r = e.length;
                if (r < 2) return n;
                const s = t?.decode || u;
                let i = 0;
                do {
                    const t = e.indexOf("=", i);
                    if (-1 === t) break;
                    const o = e.indexOf(";", i),
                        l = -1 === o ? r : o;
                    if (t > l) {
                        i = e.lastIndexOf(";", t - 1) + 1;
                        continue;
                    }
                    const u = a(e, i, t),
                        d = c(e, t, u),
                        f = e.slice(u, d);
                    if (void 0 === n[f]) {
                        let r = a(e, t + 1, l),
                            i = c(e, l, r);
                        const o = s(e.slice(r, i));
                        n[f] = o;
                    }
                    i = l + 1;
                } while (i < r);
                return n;
            };
            const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                r = /^[\u0021-\u003A\u003C-\u007E]*$/,
                s = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                i = /^[\u0020-\u003A\u003D-\u007E]*$/,
                o = Object.prototype.toString,
                l = (() => {
                    const e = function () {};
                    return (e.prototype = Object.create(null)), e;
                })();
            function a(e, t, n) {
                do {
                    const n = e.charCodeAt(t);
                    if (32 !== n && 9 !== n) return t;
                } while (++t < n);
                return n;
            }
            function c(e, t, n) {
                for (; t > n; ) {
                    const n = e.charCodeAt(--t);
                    if (32 !== n && 9 !== n) return t + 1;
                }
                return n;
            }
            function u(e) {
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
            e.exports = function (e, n, r) {
                var s = (r && r.stringify) || t;
                if ("object" == typeof e && null !== e) {
                    var i = n.length + 1;
                    if (1 === i) return e;
                    var o = new Array(i);
                    o[0] = s(e);
                    for (var l = 1; l < i; l++) o[l] = s(n[l]);
                    return o.join(" ");
                }
                if ("string" != typeof e) return e;
                var a = n.length;
                if (0 === a) return e;
                for (var c = "", u = 0, d = -1, f = (e && e.length) || 0, h = 0; h < f; ) {
                    if (37 === e.charCodeAt(h) && h + 1 < f) {
                        switch (((d = d > -1 ? d : 0), e.charCodeAt(h + 1))) {
                            case 100:
                            case 102:
                                if (u >= a) break;
                                if (null == n[u]) break;
                                d < h && (c += e.slice(d, h)), (c += Number(n[u])), (d = h + 2), h++;
                                break;
                            case 105:
                                if (u >= a) break;
                                if (null == n[u]) break;
                                d < h && (c += e.slice(d, h)), (c += Math.floor(Number(n[u]))), (d = h + 2), h++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (u >= a) break;
                                if (void 0 === n[u]) break;
                                d < h && (c += e.slice(d, h));
                                var m = typeof n[u];
                                if ("string" === m) {
                                    (c += "'" + n[u] + "'"), (d = h + 2), h++;
                                    break;
                                }
                                if ("function" === m) {
                                    (c += n[u].name || "<anonymous>"), (d = h + 2), h++;
                                    break;
                                }
                                (c += s(n[u])), (d = h + 2), h++;
                                break;
                            case 115:
                                if (u >= a) break;
                                d < h && (c += e.slice(d, h)), (c += String(n[u])), (d = h + 2), h++;
                                break;
                            case 37:
                                d < h && (c += e.slice(d, h)), (c += "%"), (d = h + 2), h++, u--;
                        }
                        ++u;
                    }
                    ++h;
                }
                if (-1 === d) return e;
                d < f && (c += e.slice(d));
                return c;
            };
        },
        109871: (e, t, n) => {
            n.d(t, { L: () => h });
            var r = n(552322),
                s = n(19745),
                i = n(905394),
                o = n(171774),
                l = n(202784),
                a = n(107267),
                c = n(727071);
            function u({ children: e }) {
                const t = (0, a.useLocation)(),
                    n = (0, a.useHistory)(),
                    s = (0, l.useMemo)(() => ({ getServerSnapshot: () => ({ pathname: t.pathname, search: t.search }), getSnapshot: () => ({ pathname: t.pathname, search: t.search }), subscribe: (e) => n.listen(e) }), [n, t]);
                return (0, r.jsx)(o.v, { ...s, children: e });
            }
            function d({ children: e }) {
                const t = (0, a.useHistory)(),
                    n = (0, l.useMemo)(() => ({ goBack: t.goBack, push: t.push, replace: t.replace }), [t]);
                return (0, r.jsx)(i.s, { navigate: n, children: e });
            }
            function f({ children: e }) {
                const t = (0, a.useParams)();
                return (0, r.jsx)(c.d, { useParams: () => t, children: e });
            }
            function h({ children: e }) {
                return (0, r.jsx)(d, { children: (0, r.jsx)(f, { children: (0, r.jsxs)(u, { children: [e, (0, r.jsx)(s.x, {})] }) }) });
            }
        },
        642783: (e, t, n) => {
            n.d(t, { f: () => x });
            var r = n(552322),
                s = n(446368),
                i = n(19745),
                o = n(109871),
                l = n(430962),
                a = n(202784),
                c = n(625067);
            const u = "night_mode";
            const d = { 0: "light", 1: "dim", 2: "dark" },
                f = (Object.fromEntries(Object.entries(d).map(([e, t]) => [t, Number(e)])), () => (0, c.Qc)(document.cookie)[u]),
                h = (e) => {
                    const t = Number(e);
                    return d[t] ?? m();
                },
                m = () => ("undefined" != typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
            var p = n(889906);
            const g = n(350096),
                v = (0, a.createContext)(null),
                w = () => {
                    if ("undefined" != typeof document) {
                        return (0, c.Qc)(document.cookie).twid;
                    }
                };
            function b({ children: e }) {
                const t = (0, p.useLazyLoadQuery)(g, {}),
                    n = t?.viewer?.user_results?.result ?? null,
                    s = (0, a.useMemo)(() => n, [n]);
                return (0, r.jsx)(v.Provider, { value: s, children: e });
            }
            function y({ children: e }) {
                return !!w() ? (0, r.jsx)(b, { children: e }) : (0, r.jsx)(v.Provider, { value: null, children: e });
            }
            function x({ analytics: e, children: t, i18nInput: n }) {
                return (
                    (0, a.useLayoutEffect)(() => {
                        const e = () => {
                            const e = h(f());
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
                    (0, r.jsx)(o.L, { children: (0, r.jsx)(l.TM, { i18nInput: n, children: (0, r.jsx)(y, { children: (0, r.jsxs)(s.UH, { analytics: e, children: [t, (0, r.jsx)(i.x, {})] }) }) }) })
                );
            }
        },
        607499: (e, t, n) => {
            n.d(t, { S: () => d });
            var r = n(552322),
                s = n(431882),
                i = n(202784),
                o = n(455091),
                l = n(611105),
                a = n(332161),
                c = n(993165);
            function u({ message: e, retry: t }) {
                const { t: n } = (0, o.$G)();
                return (0, r.jsxs)("div", { className: "flex flex-col items-center justify-center gap-2 p-5", children: [(0, r.jsx)(a.x, { color: "gray700", children: e || n(t ? "Something went wrong. Try reloading." : "Something went wrong.") }), t && (0, r.jsx)(c.z, { icon: (0, r.jsx)(l.Z, {}), onClick: t, variant: "brandFilled", children: n("Retry") })] });
            }
            class d extends i.Component {
                state = { error: null };
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    s.kg.error("Error boundary", e, { user_visible: !0 }), this.props.onError?.(e, t);
                }
                _retry() {
                    this.props.onRetry?.(), this.setState({ error: null });
                }
                render() {
                    const { children: e, fallback: t, message: n, onRetry: s } = this.props,
                        { error: i } = this.state;
                    return i ? (void 0 !== t ? t : (0, r.jsx)(u, { message: n, retry: s })) : e;
                }
            }
        },
        727071: (e, t, n) => {
            n.d(t, { U: () => l, d: () => o });
            var r = n(552322),
                s = n(202784);
            const i = (0, s.createContext)(void 0),
                o = ({ useParams: e, children: t }) => (0, r.jsx)(i.Provider, { value: e, children: t }),
                l = () => {
                    const e = (0, s.useContext)(i);
                    if (void 0 === e) throw new Error("useParams must be used within a ParamProvider");
                    return e();
                };
        },
        350096: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            const r = {
                fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "viewerUserQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (s = [{ kind: "Literal", name: "safety_level", value: "UserSelfViewOnly" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(o = { kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }, { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null }], type: "User", abstractKey: null })], storageKey: null }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")' }, action: "THROW" }], type: "Query", abstractKey: null },
                kind: "Request",
                operation: { argumentDefinitions: [], kind: "Operation", name: "viewerUserQuery", selections: [{ alias: "viewer", args: s, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, o], storageKey: null }, i], storageKey: null }], storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")' }] },
                params: { id: "WOcpZxozm0udY9P9irKvOw", metadata: {}, name: "viewerUserQuery", operationKind: "query", text: null },
            };
            var s, i, o;
            r.hash = "777d4308f91b1255b5b97d302fdd1a24";
            const l = r;
        },
        455091: (e, t, n) => {
            n.d(t, { $G: () => r.$G });
            var r = n(679816);
            n(552322), n(424991), n(963463), n(573936);
        },
        625067: (e, t) => {
            t.Qc = function (e, t) {
                const n = new l(),
                    r = e.length;
                if (r < 2) return n;
                const s = t?.decode || u;
                let i = 0;
                do {
                    const t = e.indexOf("=", i);
                    if (-1 === t) break;
                    const o = e.indexOf(";", i),
                        l = -1 === o ? r : o;
                    if (t > l) {
                        i = e.lastIndexOf(";", t - 1) + 1;
                        continue;
                    }
                    const u = a(e, i, t),
                        d = c(e, t, u),
                        f = e.slice(u, d);
                    if (void 0 === n[f]) {
                        let r = a(e, t + 1, l),
                            i = c(e, l, r);
                        const o = s(e.slice(r, i));
                        n[f] = o;
                    }
                    i = l + 1;
                } while (i < r);
                return n;
            };
            const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                r = /^[\u0021-\u003A\u003C-\u007E]*$/,
                s = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                i = /^[\u0020-\u003A\u003D-\u007E]*$/,
                o = Object.prototype.toString,
                l = (() => {
                    const e = function () {};
                    return (e.prototype = Object.create(null)), e;
                })();
            function a(e, t, n) {
                do {
                    const n = e.charCodeAt(t);
                    if (32 !== n && 9 !== n) return t;
                } while (++t < n);
                return n;
            }
            function c(e, t, n) {
                for (; t > n; ) {
                    const n = e.charCodeAt(--t);
                    if (32 !== n && 9 !== n) return t + 1;
                }
                return n;
            }
            function u(e) {
                if (-1 === e.indexOf("%")) return e;
                try {
                    return decodeURIComponent(e);
                } catch (t) {
                    return e;
                }
            }
        },
        699416: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(552322);
            const s = (e) => (0, r.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, r.jsx)("path", { d: "M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z" }) });
        },
        907934: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(552322);
            const s = (e) => (0, r.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, r.jsx)("path", { d: "M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z" }) });
        },
        89596: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(552322);
            const s = (e) => (0, r.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, r.jsx)("path", { d: "M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z" }) });
        },
        611105: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(552322);
            const s = (e) => (0, r.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, r.jsx)("path", { d: "M12 4c-4.418 0-8 3.58-8 8s3.582 8 8 8c3.806 0 6.993-2.66 7.802-6.22l1.95.44C20.742 18.67 16.76 22 12 22 6.477 22 2 17.52 2 12S6.477 2 12 2c3.272 0 6.176 1.57 8 4V3.5h2v6h-6v-2h2.616C17.175 5.39 14.749 4 12 4z" }) });
        },
        913577: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(552322);
            const s = (e) => (0, r.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, r.jsx)("path", { d: "M16 6c0 2.21-1.79 4-4 4S8 8.21 8 6s1.79-4 4-4 4 1.79 4 4zm-.76 8.57l-3.95.58 2.86 2.78-.68 3.92L17 20l3.53 1.85-.68-3.92 2.86-2.78-3.95-.58L17 11l-1.76 3.57zm-.45-3.09c-.89-.32-1.86-.48-2.89-.48-2.35 0-4.37.85-5.86 2.44-1.48 1.57-2.36 3.8-2.63 6.46l-.11 1.09h8.58l.52-2.49-4.05-4.3 5.59-.99.85-1.73z" }) });
        },
        101680: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(552322);
            const s = (e) => (0, r.jsxs)("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22", width: "1em", height: "1em", display: "flex", role: "img", ...e, children: [(0, r.jsxs)("linearGradient", { id: "a", gradientUnits: "userSpaceOnUse", x1: 4.411, x2: 18.083, y1: 2.495, y2: 21.508, children: [(0, r.jsx)("stop", { offset: 0, stopColor: "#f4e72a" }), (0, r.jsx)("stop", { offset: 0.539, stopColor: "#cd8105" }), (0, r.jsx)("stop", { offset: 0.68, stopColor: "#cb7b00" }), (0, r.jsx)("stop", { offset: 1, stopColor: "#f4ec26" }), (0, r.jsx)("stop", { offset: 1, stopColor: "#f4e72a" })] }), (0, r.jsxs)("linearGradient", { id: "b", gradientUnits: "userSpaceOnUse", x1: 5.355, x2: 16.361, y1: 3.395, y2: 19.133, children: [(0, r.jsx)("stop", { offset: 0, stopColor: "#f9e87f" }), (0, r.jsx)("stop", { offset: 0.406, stopColor: "#e2b719" }), (0, r.jsx)("stop", { offset: 0.989, stopColor: "#e2b719" })] }), (0, r.jsxs)("g", { clipRule: "evenodd", fillRule: "evenodd", children: [(0, r.jsx)("path", { d: "M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z", fill: "url(#a)" }), (0, r.jsx)("path", { d: "M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z", fill: "url(#b)" }), (0, r.jsx)("path", { d: "M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z", fill: "#d18800" })] })] });
        },
        490881: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(552322);
            const s = (e) => (0, r.jsx)("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22", width: "1em", height: "1em", display: "flex", role: "img", ...e, children: (0, r.jsx)("path", { clipRule: "evenodd", d: "M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z", fill: "#829aab", fillRule: "evenodd" }) });
        },
        808116: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(552322);
            const s = (e) => (0, r.jsx)("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22", width: "1em", height: "1em", display: "flex", role: "img", ...e, children: (0, r.jsx)("path", { d: "M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" }) });
        },
        384099: (e, t, n) => {
            const r = n(560870);
            e.exports = d;
            const s =
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
                i = { mapHttpRequest: v, mapHttpResponse: v, wrapRequestSerializer: w, wrapResponseSerializer: w, wrapErrorSerializer: w, req: v, res: v, err: p, errWithCause: p };
            function o(e, t) {
                return "silent" === e ? 1 / 0 : t.levels.values[e];
            }
            const l = Symbol("pino.logFuncs"),
                a = Symbol("pino.hierarchy"),
                c = { error: "log", fatal: "error", warn: "error", info: "log", debug: "log", trace: "log" };
            function u(e, t) {
                const n = { logger: t, parent: e[a] };
                t[a] = n;
            }
            function d(e) {
                (e = e || {}).browser = e.browser || {};
                const t = e.browser.transmit;
                if (t && "function" != typeof t.send) throw Error("pino: transmit option must have a send function");
                const n = e.browser.write || s;
                e.browser.write && (e.browser.asObject = !0);
                const r = e.serializers || {},
                    i = (function (e, t) {
                        if (Array.isArray(e))
                            return e.filter(function (e) {
                                return "!stdSerializers.err" !== e;
                            });
                        return !0 === e && Object.keys(t);
                    })(e.browser.serialize, r);
                let a = e.browser.serialize;
                Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (a = !1);
                const p = Object.keys(e.customLevels || {}),
                    v = ["error", "fatal", "warn", "info", "debug", "trace"].concat(p);
                "function" == typeof n &&
                    v.forEach(function (e) {
                        n[e] = n;
                    }),
                    (!1 === e.enabled || e.browser.disabled) && (e.level = "silent");
                const w = e.level || "info",
                    y = Object.create(n);
                y.log || (y.log = b),
                    (function (e, t, n) {
                        const r = {};
                        t.forEach((e) => {
                            r[e] = n[e] ? n[e] : s[e] || s[c[e] || "log"] || b;
                        }),
                            (e[l] = r);
                    })(y, v, n),
                    u({}, y),
                    Object.defineProperty(y, "levelVal", {
                        get: function () {
                            return o(this.level, this);
                        },
                    }),
                    Object.defineProperty(y, "level", {
                        get: function () {
                            return this._level;
                        },
                        set: function (e) {
                            if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                            (this._level = e),
                                f(this, x, y, "error"),
                                f(this, x, y, "fatal"),
                                f(this, x, y, "warn"),
                                f(this, x, y, "info"),
                                f(this, x, y, "debug"),
                                f(this, x, y, "trace"),
                                p.forEach((e) => {
                                    f(this, x, y, e);
                                });
                        },
                    });
                const x = { transmit: t, serialize: i, asObject: e.browser.asObject, asObjectBindingsOnly: e.browser.asObjectBindingsOnly, formatters: e.browser.formatters, levels: v, timestamp: g(e), messageKey: e.messageKey || "msg", onChild: e.onChild || b };
                function j(n, s, o) {
                    if (!s) throw new Error("missing bindings for child Pino");
                    (o = o || {}), i && s.serializers && (o.serializers = s.serializers);
                    const l = o.serializers;
                    if (i && l) {
                        var a = Object.assign({}, r, l),
                            c = !0 === e.browser.serialize ? Object.keys(a) : i;
                        delete s.serializers, h([s], c, a, this._stdErrSerialize);
                    }
                    function d(e) {
                        (this._childLevel = 1 + (0 | e._childLevel)), (this.bindings = s), a && ((this.serializers = a), (this._serialize = c)), t && (this._logEvent = m([].concat(e._logEvent.bindings, s)));
                    }
                    d.prototype = this;
                    const f = new d(this);
                    return (
                        u(this, f),
                        (f.child = function (...e) {
                            return j.call(this, n, ...e);
                        }),
                        (f.level = o.level || this.level),
                        n.onChild(f),
                        f
                    );
                }
                return (
                    (y.levels = (function (e) {
                        const t = e.customLevels || {},
                            n = Object.assign({}, d.levels.values, t),
                            r = Object.assign(
                                {},
                                d.levels.labels,
                                (function (e) {
                                    const t = {};
                                    return (
                                        Object.keys(e).forEach(function (n) {
                                            t[e[n]] = n;
                                        }),
                                        t
                                    );
                                })(t),
                            );
                        return { values: n, labels: r };
                    })(e)),
                    (y.level = w),
                    (y.isLevelEnabled = function (e) {
                        return !!this.levels.values[e] && this.levels.values[e] >= this.levels.values[this.level];
                    }),
                    (y.setMaxListeners = y.getMaxListeners = y.emit = y.addListener = y.on = y.prependListener = y.once = y.prependOnceListener = y.removeListener = y.removeAllListeners = y.listeners = y.listenerCount = y.eventNames = y.write = y.flush = b),
                    (y.serializers = r),
                    (y._serialize = i),
                    (y._stdErrSerialize = a),
                    (y.child = function (...e) {
                        return j.call(this, x, ...e);
                    }),
                    t && (y._logEvent = m()),
                    y
                );
            }
            function f(e, t, n, i) {
                if ((Object.defineProperty(e, i, { value: o(e.level, n) > o(i, n) ? b : n[l][i], writable: !0, enumerable: !0, configurable: !0 }), e[i] === b)) {
                    if (!t.transmit) return;
                    const r = o(t.transmit.level || e.level, n);
                    if (o(i, n) < r) return;
                }
                e[i] = (function (e, t, n, i) {
                    return (
                        (a = e[l][i]),
                        function () {
                            const l = t.timestamp(),
                                c = new Array(arguments.length),
                                u = Object.getPrototypeOf && Object.getPrototypeOf(this) === s ? s : this;
                            for (var d = 0; d < c.length; d++) c[d] = arguments[d];
                            var f = !1;
                            if (
                                (t.serialize && (h(c, this._serialize, this.serializers, this._stdErrSerialize), (f = !0)),
                                t.asObject || t.formatters
                                    ? a.call(
                                          u,
                                          ...(function (e, t, n, s, i) {
                                              const { level: o, log: l = (e) => e } = i.formatters || {},
                                                  a = n.slice();
                                              let c = a[0];
                                              const u = {};
                                              let d = 1 + (0 | e._childLevel);
                                              if ((d < 1 && (d = 1), s && (u.time = s), o)) {
                                                  const n = o(t, e.levels.values[t]);
                                                  Object.assign(u, n);
                                              } else u.level = e.levels.values[t];
                                              if (i.asObjectBindingsOnly) {
                                                  if (null !== c && "object" == typeof c) for (; d-- && "object" == typeof a[0]; ) Object.assign(u, a.shift());
                                                  return [l(u), ...a];
                                              }
                                              if (null !== c && "object" == typeof c) {
                                                  for (; d-- && "object" == typeof a[0]; ) Object.assign(u, a.shift());
                                                  c = a.length ? r(a.shift(), a) : void 0;
                                              } else "string" == typeof c && (c = r(a.shift(), a));
                                              return void 0 !== c && (u[i.messageKey] = c), [l(u)];
                                          })(this, i, c, l, t),
                                      )
                                    : a.apply(u, c),
                                t.transmit)
                            ) {
                                const r = t.transmit.level || e._level,
                                    s = o(r, n),
                                    a = o(i, n);
                                if (a < s) return;
                                !(function (e, t, n, r = !1) {
                                    const s = t.send,
                                        i = t.ts,
                                        o = t.methodLevel,
                                        l = t.methodValue,
                                        a = t.val,
                                        c = e._logEvent.bindings;
                                    r || h(n, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize),
                                        (e._logEvent.ts = i),
                                        (e._logEvent.messages = n.filter(function (e) {
                                            return -1 === c.indexOf(e);
                                        })),
                                        (e._logEvent.level.label = o),
                                        (e._logEvent.level.value = l),
                                        s(o, e._logEvent, a),
                                        (e._logEvent = m(c));
                                })(this, { ts: l, methodLevel: i, methodValue: a, transmitLevel: r, transmitValue: n.levels.values[t.transmit.level || e._level], send: t.transmit.send, val: o(e._level, n) }, c, f);
                            }
                        }
                    );
                    var a;
                })(e, t, n, i);
                const c = (function (e) {
                    const t = [];
                    e.bindings && t.push(e.bindings);
                    let n = e[a];
                    for (; n.parent; ) (n = n.parent), n.logger.bindings && t.push(n.logger.bindings);
                    return t.reverse();
                })(e);
                0 !== c.length &&
                    (e[i] = (function (e, t) {
                        return function () {
                            return t.apply(this, [...e, ...arguments]);
                        };
                    })(c, e[i]));
            }
            function h(e, t, n, r) {
                for (const s in e)
                    if (r && e[s] instanceof Error) e[s] = d.stdSerializers.err(e[s]);
                    else if ("object" == typeof e[s] && !Array.isArray(e[s]) && t) for (const r in e[s]) t.indexOf(r) > -1 && r in n && (e[s][r] = n[r](e[s][r]));
            }
            function m(e) {
                return { ts: 0, messages: [], bindings: e || [], level: { label: "", value: 0 } };
            }
            function p(e) {
                const t = { type: e.constructor.name, msg: e.message, stack: e.stack };
                for (const n in e) void 0 === t[n] && (t[n] = e[n]);
                return t;
            }
            function g(e) {
                return "function" == typeof e.timestamp ? e.timestamp : !1 === e.timestamp ? y : x;
            }
            function v() {
                return {};
            }
            function w(e) {
                return e;
            }
            function b() {}
            function y() {
                return !1;
            }
            function x() {
                return Date.now();
            }
            (d.levels = { values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 }, labels: { 10: "trace", 20: "debug", 30: "info", 40: "warn", 50: "error", 60: "fatal" } }),
                (d.stdSerializers = i),
                (d.stdTimeFunctions = Object.assign(
                    {},
                    {
                        nullTime: y,
                        epochTime: x,
                        unixTime: function () {
                            return Math.round(Date.now() / 1e3);
                        },
                        isoTime: function () {
                            return new Date(Date.now()).toISOString();
                        },
                    },
                )),
                (e.exports.default = d),
                (e.exports.pino = d);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-5d959941.644dbeea.js.map
