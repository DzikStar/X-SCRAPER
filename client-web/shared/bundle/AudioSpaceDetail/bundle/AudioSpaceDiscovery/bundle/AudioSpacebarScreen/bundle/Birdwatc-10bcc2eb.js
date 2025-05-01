"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"],
    {
        95894: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(202784),
                n = r(215045),
                s = r(325686),
                l = r(797553),
                o = r(392237),
                i = r(738124),
                c = r(643426);
            const d = o.default.create((e) => ({ dropdown: { padding: e.spaces.space16 }, item: { marginBottom: e.spaces.space8 }, divider: { marginTop: e.spaces.space8 } })),
                u = ({ children: e, props: t, scribeContext: r, style: o }) => {
                    const u = t.element("popover"),
                        [m, h] = a.useState(!1);
                    return a.createElement(s.Z, { style: { position: "relative", display: "inline-block" } }, a.createElement(n.Z, { onPress: () => h(!0), style: [{ flexShrink: 1 }, o] }, e), m && u && a.createElement(l.default, { contentStyle: d.dropdown, onDismiss: () => h(!1) }, a.createElement(c.b.Provider, { value: { dismiss: () => h(!1) } }, a.createElement(i.Z, { parentContext: r, payload: u }))));
                };
        },
        77481: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(202784),
                n = r(682830),
                s = r(738124),
                l = r(313129);
            const o = ({ autoRefreshSeconds: e, children: t, scribeContext: r, src: n }) => {
                    const { jfResponse: o } = (0, l.Q_)(n ?? "", e ?? 30) ?? {};
                    return o && o.root ? a.createElement(s.Z, { parentContext: r, payload: o.root.value }) : a.createElement(a.Fragment, null, t);
                },
                i = ({ children: e, props: t, scribeContext: r, style: s }) => {
                    const l = t.url("src"),
                        i = t.int("autoRefreshSeconds");
                    return a.createElement(a.Suspense, { fallback: (e?.length ?? 0) > 0 ? a.createElement(a.Fragment, null, e) : a.createElement(n.J, null) }, a.createElement(o, { autoRefreshSeconds: i, scribeContext: r, src: l }, e));
                };
        },
        343158: (e, t, r) => {
            r.d(t, { Z: () => m });
            var a = r(202784),
                n = r(325686),
                s = r(731708),
                l = r(392237),
                o = r(324345);
            const i = ({ part: e, style: t }) => {
                    const [r, n, l] = e;
                    switch (r) {
                        case o.N.Text:
                            return a.createElement(s.ZP, { style: t }, n);
                        case o.N.Link:
                        case o.N.Hashtag:
                            return a.createElement(s.ZP, { link: c(l), style: { ...t, color: void 0 } }, n);
                        case o.N.Mention:
                        case o.N.Symbol:
                            return a.createElement(s.ZP, { link: c(l), style: { ...t, color: void 0 } }, "@", n);
                        case o.N.Bold:
                            return a.createElement(s.ZP, { style: [d.bold, t] }, n);
                        case o.N.Italic:
                            return a.createElement(s.ZP, { style: [d.italic, t] }, n);
                        case o.N.Empty:
                        default:
                            return null;
                    }
                },
                c = (e) => ({ pathname: e ?? "/", external: !0, openInSameFrame: !1 }),
                d = l.default.create((e) => ({ container: { display: "block" }, italic: { fontStyle: "italic" }, bold: { fontWeight: "bold" } })),
                u = (e) => {
                    const { color: t, fontSize: r, fontStyle: a, fontWeight: n, letterSpacing: s, lineHeight: l, ...o } = e;
                    return [{ fontSize: r, fontStyle: a, fontWeight: n, letterSpacing: s, lineHeight: l, color: t }, o];
                },
                m = ({ children: e, props: t, style: r }) => {
                    const s = t.richtext("text") ?? [],
                        [l, o] = u(r);
                    return a.createElement(
                        n.Z,
                        { style: [d.container, o] },
                        s.map((e, t) => a.createElement(i, { key: t, part: e, style: l })),
                    );
                };
        },
        800539: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(202784),
                n = r(215045),
                s = r(138099),
                l = r(392237),
                o = r(323265),
                i = r(738124),
                c = r(643426);
            const d = l.default.create((e) => ({ sheet: { backgroundColor: "rgba(0,0,0,0)" }, sheetFullScreen: { justifyContent: "center" } })),
                u = ({ children: e, props: t, scribeContext: r, style: l }) => {
                    const u = t.element("cover"),
                        m = t.bool("blurBackground") ?? !0,
                        [h, p] = a.useState(!1),
                        g = o.ZP.isMobileOS();
                    return a.createElement(a.Fragment, null, h && u ? a.createElement(s.Z, { onMaskClick: () => p(!1), role: "preview", style: [d.sheet, g && d.sheetFullScreen], type: "full", withMask: m }, a.createElement(c.b.Provider, { value: { dismiss: () => p(!1) } }, a.createElement(i.Z, { parentContext: r, payload: u }))) : null, a.createElement(n.Z, { onPress: () => p(!0), style: [{ flexShrink: 1 }, l] }, e));
                };
        },
        710856: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(202784),
                n = r(325686),
                s = r(922477);
            const l = ({ props: e, style: t }) => {
                const r = e.str("width"),
                    l = e.str("height"),
                    o = e.str("fill"),
                    i = o ? (0, s.L)(o) : void 0,
                    c = { width: r && !r.endsWith("%") ? `${r}px` : r, height: l && !l.endsWith("%") ? `${l}px` : l, borderRadius: "50%", backgroundColor: i };
                return a.createElement(n.Z, { style: [c, t] });
            };
        },
        922477: (e, t, r) => {
            r.d(t, { L: () => o, Z: () => i });
            var a = r(202784),
                n = r(325686),
                s = r(297678);
            const l = (e) => `#${Math.max(0, Math.min(e, 16777215)).toString(16).padStart(6, "0")}`,
                o = (e) => {
                    const t = e.split("-");
                    return 2 === t.length ? l(s.Z[t[0]][t[1]]) : 1 === t.length ? l(s.Z[t[0]][""]) : void 0;
                },
                i = ({ props: e, style: t }) => {
                    const r = e.str("fill"),
                        s = r ? o(r) : void 0,
                        l = e.bool("rounded"),
                        i = e.int("cornerRadius"),
                        c = e.str("width"),
                        d = e.str("height"),
                        u = { width: c && !c.endsWith("%") ? `${c}px` : c, height: d && !d.endsWith("%") ? `${d}px` : d, background: s, borderRadius: l ? 9999 : i, flexShrink: 1 };
                    return a.createElement(n.Z, { style: [t, u] });
                };
        },
        233531: (e, t, r) => {
            r.d(t, { Z: () => h });
            r(136728);
            var a = r(202784),
                n = r(576648),
                s = r(215045),
                l = r(534319),
                o = r(443781),
                i = r(643426);
            const c = 0,
                d = 7,
                u = 8,
                m = 9,
                h = ({ children: e, props: t, style: r }) => {
                    const { dismiss: h } = a.useContext(i.b),
                        p = t.url("url") ?? "",
                        g = t.enum("target") ?? "",
                        f = t.bool("dismissOnClick") ?? !1,
                        { history: b } = (0, o.QZ)(),
                        k = a.useCallback(() => {
                            switch (g) {
                                case c:
                                    b.push({ state: { text: p }, pathname: "/compose/post" });
                                    break;
                                case d:
                                    b.push({ state: { text: p }, pathname: "/messages/compose" });
                                    break;
                                case u:
                                    l.Z.share({ url: p });
                                    break;
                                case m:
                                    n.Z.setString(p);
                                    break;
                                default:
                                    l.Z.share({ url: p });
                            }
                            f && h?.();
                        }, [h, f, b, g, p]);
                    return a.createElement(s.Z, { onPress: k, style: [{ flexShrink: 1 }, r] }, e);
                };
        },
        792842: (e, t, r) => {
            r.d(t, { C: () => b });
            var a = r(202784),
                n = r(878052),
                s = r(215045),
                l = r(325686),
                o = r(138099),
                i = r(738124),
                c = r(643426);
            const d = 0,
                u = 1,
                m = 2,
                h = 6,
                p = 8,
                g = 9,
                f = (e) => {
                    const t = n.Z.get("screen").height;
                    switch (e) {
                        case d:
                            return 400;
                        case u:
                            return 0.5 * t;
                        case m:
                            return 0.9 * t;
                        case p:
                            return 300;
                        case g:
                            return 200;
                        default:
                            return;
                    }
                },
                b = ({ children: e, props: t, scribeContext: r, style: n }) => {
                    const d = t.element("content"),
                        u = t.enum("mode") ?? h,
                        m = t.bool("bgInteraction") ?? !0,
                        [p, g] = a.useState(!1);
                    return a.createElement(a.Fragment, null, p && d && a.createElement(o.Z, { onMaskClick: () => g(!1), role: "preview", type: "bottom", withMask: m }, a.createElement(c.b.Provider, { value: { dismiss: () => g(!1) } }, a.createElement(l.Z, { style: { width: "100%", height: f(u) } }, a.createElement(i.Z, { parentContext: r, payload: d })))), a.createElement(s.Z, { onPress: () => g(!0), style: [{ flexShrink: 1 }, n] }, e));
                };
        },
        422089: (e, t, r) => {
            r.d(t, { Z: () => M });
            var a = r(202784),
                n = r(325686),
                s = r(466999),
                l = r(107267),
                o = r(392237),
                i = r(167630),
                c = r(674132),
                d = r.n(c),
                u = r(403808),
                m = r(323265),
                h = r(443781),
                p = r(125363),
                g = r(390387),
                f = r(929378),
                b = r(163889),
                k = r(725516),
                y = r(684799);
            const w = Object.freeze({ light: "default", dark: "dim", darker: "dark", business: "business" }),
                Z = d().ic6aa5f4,
                E = 327,
                v = 468,
                S = 500,
                x = 523,
                C = o.default.create((e) => ({ container: { position: "relative", alignItems: "center" }, spinner: { alignItems: "center", position: "absolute", start: 0, end: 0, justifyContent: "center" }, label: { color: e.colors.text } })),
                M = ({ props: e }) => {
                    const t = e.str("publicKey") ?? e.str("webKey"),
                        { featureSwitches: r } = a.useContext(h.rC),
                        c = (0, k.z)(),
                        d = (0, p.v9)(g.OW),
                        M = (0, l.useLocation)(),
                        W = e.str("dataExchangeToken") ?? "",
                        O = e.str("name") ?? "arkose_token",
                        T = t ? r.getStringValue(t) : "",
                        P = a.useMemo(() => m.ZP.isWebView(), []),
                        $ = P ? (window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "default") : w[o.default.theme.paletteName],
                        I = a.useMemo(() => P || window.innerWidth < v, [P]),
                        [z, N] = a.useState(I ? S : x),
                        [F, L] = a.useState(I ? E : v),
                        [R, _] = a.useState(f.t.passive),
                        j = a.useMemo(() => (I ? Math.min((window.innerWidth - 32) / E, (window.innerHeight - 32) / S) : 1), [I]),
                        H = M.query?.guestId,
                        B = a.useMemo(() => (P && "string" == typeof H ? H : P ? "" : d || ""), [P, H, d]),
                        V = a.useCallback(() => {
                            f.Z.loadIframe(c, B, t || "", t || "");
                        }, [c, B, t]),
                        { change: q, submit: K, values: A } = a.useContext(y.q3),
                        [D, J] = a.useState("loading"),
                        Q = (0, u.r)((e) => {
                            if ("string" == typeof e.data)
                                try {
                                    const r = JSON.parse(e.data);
                                    switch (r.eventId) {
                                        case "challenge-suppressed":
                                            f.Z.suppressedChallenge(c, B, t || "0", t || "0"), _(f.t.passive);
                                            break;
                                        case "challenge-shown":
                                            f.Z.shownChallenge(c, B, t || "0", t || "0"), _(f.t.interactive), J("shown");
                                            break;
                                        case "challenge-complete": {
                                            f.Z.completeChallenge(c, B, R, t || "0", t || "0");
                                            const e = r.payload.sessionToken;
                                            q(O, e), J("complete");
                                            break;
                                        }
                                        case "challenge-iframeSize":
                                            N(r.payload.frameHeight), L(r.payload.frameWidth);
                                            break;
                                        case "challenge-loaded":
                                            J("loaded");
                                            break;
                                        case "challenge-failed":
                                            J("failed");
                                            break;
                                        case "challenge-error":
                                            J("errored");
                                    }
                                } catch (e) {
                                    J("errored"), (0, b.ZP)(e);
                                }
                        });
                    a.useEffect(
                        () => (
                            window.addEventListener("message", Q, !1),
                            () => {
                                window.removeEventListener("message", Q, !1);
                            }
                        ),
                        [Q],
                    );
                    const G = null != A[O],
                        U = a.useRef(!1);
                    return (
                        a.useEffect(() => {
                            G && !U.current && ((U.current = !0), K());
                        }, [G, K]),
                        a.createElement(n.Z, { style: C.container }, a.createElement(n.Z, { style: [C.spinner, { height: z }] }, "loading" === D || "loaded" === D ? a.createElement(i.Z, null) : "complete" === D ? a.createElement(s.Z, { style: C.label }, Z) : null), a.createElement("iframe", { height: z, id: "arkoseFrame", onLoad: V, src: [`https://iframe.arkoselabs.com/${T}/index.html?theme=${$}`, W && `&data=${W}`].filter(Boolean).join(""), style: { MozTransform: `scale(${j})`, OTransform: `scale(${j})`, WebkitTransform: `scale(${j})`, borderWidth: 0, MozTransformOrigin: "50% 0", OTransformOrigin: "50% 0", WebkitTransformOrigin: "50% 0", alignSelf: "center" }, title: "arkoseFrame", width: F }))
                    );
                };
        },
        778468: (e, t, r) => {
            r.d(t, { Z: () => o });
            var a = r(202784),
                n = r(392237),
                s = r(3196);
            const l = n.default.create((e) => ({ button: { borderRadius: e.borderRadii.medium, width: "100%", paddingVertical: e.spaces.space20 } })),
                o = ({ style: e }) => a.createElement(s.Z, { style: l.button });
        },
        725102: (e, t, r) => {
            r.d(t, { Z: () => M });
            var a = r(202784),
                n = r(244448),
                s = r(325686),
                l = r(466999),
                o = r(107267),
                i = r(392237),
                c = r(167630),
                d = r(674132),
                u = r.n(d),
                m = r(403808),
                h = r(323265),
                p = r(443781),
                g = r(125363),
                f = r(390387),
                b = r(929378),
                k = r(163889),
                y = r(725516);
            const w = Object.freeze({ light: "default", dark: "dim", darker: "dark", business: "business" }),
                Z = u().ic6aa5f4,
                E = 327,
                v = 468,
                S = 500,
                x = 523,
                C = i.default.create((e) => ({ container: { position: "relative", alignItems: "center" }, spinner: { alignItems: "center", position: "absolute", start: 0, end: 0, justifyContent: "center" }, label: { color: e.colors.text } })),
                M = ({ p: e }) => {
                    const t = e.str("publicKey") ?? e.str("webKey"),
                        { featureSwitches: r } = a.useContext(p.rC),
                        d = (0, y.z)(),
                        u = (0, g.v9)(f.OW),
                        M = (0, o.useLocation)(),
                        W = e.str("dataExchangeToken") ?? "",
                        O = e.str("name") ?? "arkose_token",
                        T = t ? r.getStringValue(t) : "",
                        P = a.useMemo(() => h.ZP.isWebView(), []),
                        $ = P ? (window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "default") : w[i.default.theme.paletteName],
                        I = a.useMemo(() => P || window.innerWidth < v, [P]),
                        [z, N] = a.useState(I ? S : x),
                        [F, L] = a.useState(I ? E : v),
                        [R, _] = a.useState(b.t.passive),
                        j = a.useMemo(() => (I ? Math.min((window.innerWidth - 32) / E, (window.innerHeight - 32) / S) : 1), [I]),
                        H = M.query?.guestId,
                        B = a.useMemo(() => (P && "string" == typeof H ? H : P ? "" : u || ""), [P, H, u]),
                        V = a.useCallback(() => {
                            b.Z.loadIframe(d, B, t || "", t || "");
                        }, [d, B, t]),
                        { change: q, submit: K, values: A } = a.useContext(n.q3),
                        [D, J] = a.useState("loading"),
                        Q = (0, m.r)((e) => {
                            if ("string" == typeof e.data)
                                try {
                                    const r = JSON.parse(e.data);
                                    switch (r.eventId) {
                                        case "challenge-suppressed":
                                            b.Z.suppressedChallenge(d, B, t || "0", t || "0"), _(b.t.passive);
                                            break;
                                        case "challenge-shown":
                                            b.Z.shownChallenge(d, B, t || "0", t || "0"), _(b.t.interactive), J("shown");
                                            break;
                                        case "challenge-complete": {
                                            b.Z.completeChallenge(d, B, R, t || "0", t || "0");
                                            const e = r.payload.sessionToken;
                                            q(O, e), J("complete");
                                            break;
                                        }
                                        case "challenge-iframeSize":
                                            N(r.payload.frameHeight), L(r.payload.frameWidth);
                                            break;
                                        case "challenge-loaded":
                                            J("loaded");
                                            break;
                                        case "challenge-failed":
                                            J("failed");
                                            break;
                                        case "challenge-error":
                                            J("errored");
                                    }
                                } catch (e) {
                                    J("errored"), (0, k.ZP)(e);
                                }
                        });
                    a.useEffect(
                        () => (
                            window.addEventListener("message", Q, !1),
                            () => {
                                window.removeEventListener("message", Q, !1);
                            }
                        ),
                        [Q],
                    );
                    const G = null != A[O],
                        U = a.useRef(!1);
                    return (
                        a.useEffect(() => {
                            G && !U.current && ((U.current = !0), K());
                        }, [G, K]),
                        a.createElement(s.Z, { style: C.container }, a.createElement(s.Z, { style: [C.spinner, { height: z }] }, "loading" === D || "loaded" === D ? a.createElement(c.Z, null) : "complete" === D ? a.createElement(l.Z, { style: C.label }, Z) : null), a.createElement("iframe", { height: z, id: "arkoseFrame", onLoad: V, src: [`https://iframe.arkoselabs.com/${T}/index.html?theme=${$}`, W && `&data=${W}`].filter(Boolean).join(""), style: { MozTransform: `scale(${j})`, OTransform: `scale(${j})`, WebkitTransform: `scale(${j})`, borderWidth: 0, MozTransformOrigin: "50% 0", OTransformOrigin: "50% 0", WebkitTransformOrigin: "50% 0", alignSelf: "center" }, title: "arkoseFrame", width: F }))
                    );
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb.ef67106a.js.map
