"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b2a4a903"],
    {
        552531: (e, t, r) => {
            r.d(t, { Z: () => a });
            var s = r(202784),
                n = r(555874);
            const a = ({ children: e, props: t, style: r }) => {
                const a = s.useCallback(({ item: e }) => e, []);
                return s.createElement(n.Z, { data: e ?? [], keyExtractor: (e, t) => `${t}`, renderItem: a });
            };
        },
        610467: (e, t, r) => {
            r.d(t, { Z: () => a });
            var s = r(202784),
                n = r(335923);
            const a = ({ children: e, props: t, style: r }) => {
                const a = t.str("t") ?? "";
                return s.createElement(n.Z, { markdownText: a, style: [{ flexShrink: 1 }, r] });
            };
        },
        183854: (e, t, r) => {
            r.d(t, { Z: () => u });
            var s = r(202784),
                n = r(215045),
                a = r(797553),
                l = r(661810),
                o = r(392237),
                i = r(738124),
                c = r(643426);
            const d = o.default.create((e) => ({ dropdown: { padding: e.spaces.space16 }, item: { marginBottom: e.spaces.space8 }, divider: { marginTop: e.spaces.space8 } })),
                u = ({ children: e, props: t, scribeContext: r, style: o }) => {
                    const u = t.elements("labels"),
                        [p, m] = s.useState(!1),
                        [h, g] = s.useState(0),
                        f = e ?? [],
                        b = u ? u[h] : void 0;
                    return b && u && u?.length === f.length
                        ? s.createElement(
                              s.Fragment,
                              null,
                              p && u
                                  ? s.createElement(
                                        a.default,
                                        { contentStyle: d.dropdown, onDismiss: () => m(!1) },
                                        s.createElement(
                                            c.b.Provider,
                                            { value: { dismiss: () => m(!1) } },
                                            e?.map((e, t) => s.createElement(n.Z, { key: t, onPress: () => g(t), style: d.item }, 0 !== t && s.createElement(l.Z, { style: d.item }), e)),
                                        ),
                                    )
                                  : s.createElement(n.Z, { onPress: () => m(!0), style: [{ flexShrink: 1 }, o] }, b ? s.createElement(i.Z, { parentContext: r, payload: b }) : void 0),
                          )
                        : null;
                };
        },
        643426: (e, t, r) => {
            r.d(t, { b: () => s });
            const s = r(202784).createContext({ dismiss: void 0 });
        },
        172993: (e, t, r) => {
            r.d(t, { Z: () => d });
            r(136728);
            var s = r(202784),
                n = r(215045),
                a = r(443781),
                l = r(946409),
                o = r(725405),
                i = r(579578);
            const c = "https://x.com",
                d = ({ children: e, props: t, scribeContext: r, style: d }) => {
                    const u = (0, o.Z)(),
                        { history: p } = (0, a.QZ)(),
                        m = t.url("url") ?? "",
                        h = t.strDict("scribe:press") ?? {},
                        g = s.useCallback((e) => {
                            e.stopPropagation();
                        }, []);
                    return s.createElement(
                        n.Z,
                        {
                            onPointerDown: g,
                            onPress: () => {
                                if (m) {
                                    if (m.startsWith("twitter://jf/")) {
                                        const e = m.slice(10);
                                        p.push(`/i/${e}`);
                                    } else if (m.startsWith("twitter://")) {
                                        const e = (0, l.Mh)(m);
                                        e && p.push(e.pathname ?? "", e.state);
                                    } else if (m.startsWith("https://twitter.com")) {
                                        const e = m.slice(10);
                                        p.push(e);
                                    } else if (m.startsWith(c)) {
                                        const e = m.slice(13);
                                        p.push(e);
                                    } else window && (window.location.href = m);
                                    const e = (0, i.Q)("click", { ...r, ...h });
                                    u.scribe(e);
                                }
                            },
                            style: [{ flexShrink: 1 }, d],
                        },
                        e,
                    );
                };
        },
        779227: (e, t, r) => {
            r.d(t, { Z: () => m });
            r(136728);
            var s = r(202784),
                n = r(744610),
                a = r(215045),
                l = r(392237),
                o = r(443781),
                i = r(725405),
                c = r(579578),
                d = r(643426);
            const u = l.default.create((e) => ({ hover: { opacity: 0.8 } })),
                p = (e) => {
                    const { paddingBottom: t, paddingEnd: r, paddingLeft: s, paddingRight: n, paddingStart: a, paddingTop: l, ...o } = e;
                    return [{ paddingStart: a, paddingTop: l, paddingBottom: t, paddingEnd: r, paddingLeft: s, paddingRight: n }, o];
                },
                m = ({ children: e, props: t, scribeContext: r, style: l }) => {
                    const { history: m } = (0, o.QZ)(),
                        h = (0, i.Z)(),
                        g = t.str("to") ?? "",
                        f = t.bool("animate") ?? !0,
                        b = g.startsWith("/") ? g.slice(1) : g,
                        { dismiss: y } = s.useContext(d.b),
                        Z = s.useRef(new n.Z.Value(1)).current,
                        [k, v] = s.useState(!1),
                        E = k ? u.hover : {},
                        w = s.useCallback(() => {
                            f && n.Z.spring(Z, { toValue: 0.9, velocity: 1, useNativeDriver: !0 }).start();
                        }, [f, Z]),
                        S = s.useCallback(() => {
                            f && n.Z.spring(Z, { toValue: 1, velocity: 1, useNativeDriver: !0 }).start();
                        }, [f, Z]),
                        x = { transform: [{ scale: Z }] },
                        C = s.useCallback(() => {
                            const e = t.strDict("scribe:press") ?? {},
                                s = (0, c.Q)("navigate", { ...r, ...e });
                            h.scribe(s), ":back" === b ? m.goBack() : y && ":dismiss" === b ? y() : m.push(`/i/jf/${b}`);
                        }, [b, y, h, r, m, t]),
                        P = s.useCallback((e) => {
                            e.stopPropagation();
                        }, []),
                        [W, M] = p(l);
                    return s.createElement(
                        n.Z.View,
                        { style: [{ flexShrink: 1 }, M, x, E] },
                        s.createElement(
                            a.Z,
                            {
                                onMouseEnter: () => {
                                    v(!0);
                                },
                                onMouseLeave: () => {
                                    v(!1);
                                },
                                onPointerDown: P,
                                onPress: C,
                                onPressIn: w,
                                onPressOut: S,
                                style: [W, { flexGrow: 1 }],
                            },
                            e,
                        ),
                    );
                };
        },
        723129: (e, t, r) => {
            r.d(t, { Z: () => a });
            var s = r(202784),
                n = r(325686);
            const a = ({ children: e, props: t }) => {
                const r = t.int("activePage") ?? 0;
                if (e) return s.createElement(n.Z, { style: { flex: 1 } }, e[r]);
            };
        },
        312604: (e, t, r) => {
            r.d(t, { Z: () => o });
            var s = r(202784),
                n = r(325686),
                a = r(738124);
            const l = 0;
            const o = function ({ children: e, props: t, style: r }) {
                const o = t.element("header"),
                    i = t.element("footer"),
                    c = t.enum("headerBehavior"),
                    d = { ...(c === l && { position: "fixed", top: 8 }) },
                    u = { ...(c === l && { position: "fixed", bottom: 8 }) };
                return s.createElement(n.Z, { style: [{ flex: 1 }, r] }, s.createElement(n.Z, { style: d }, o && s.createElement(a.Z, { payload: o, style: d })), e, s.createElement(n.Z, { style: u }, i && s.createElement(a.Z, { payload: i })));
            };
        },
        121152: (e, t, r) => {
            r.d(t, { Z: () => a });
            var s = r(202784),
                n = r(325686);
            const a = ({ children: e, props: t, style: r }) => s.createElement(n.Z, { style: r }, e);
        },
        95894: (e, t, r) => {
            r.d(t, { Z: () => u });
            var s = r(202784),
                n = r(215045),
                a = r(325686),
                l = r(797553),
                o = r(392237),
                i = r(738124),
                c = r(643426);
            const d = o.default.create((e) => ({ dropdown: { padding: e.spaces.space16 }, item: { marginBottom: e.spaces.space8 }, divider: { marginTop: e.spaces.space8 } })),
                u = ({ children: e, props: t, scribeContext: r, style: o }) => {
                    const u = t.element("popover"),
                        [p, m] = s.useState(!1);
                    return s.createElement(a.Z, { style: { position: "relative", display: "inline-block" } }, s.createElement(n.Z, { onPress: () => m(!0), style: [{ flexShrink: 1 }, o] }, e), p && u && s.createElement(l.default, { contentStyle: d.dropdown, onDismiss: () => m(!1) }, s.createElement(c.b.Provider, { value: { dismiss: () => m(!1) } }, s.createElement(i.Z, { parentContext: r, payload: u }))));
                };
        },
        77481: (e, t, r) => {
            r.d(t, { Z: () => i });
            var s = r(202784),
                n = r(682830),
                a = r(738124),
                l = r(313129);
            const o = ({ autoRefreshSeconds: e, children: t, scribeContext: r, src: n }) => {
                    const { jfResponse: o } = (0, l.Q_)(n ?? "", e ?? 30) ?? {};
                    return o && o.root ? s.createElement(a.Z, { parentContext: r, payload: o.root.value }) : s.createElement(s.Fragment, null, t);
                },
                i = ({ children: e, props: t, scribeContext: r, style: a }) => {
                    const l = t.url("src"),
                        i = t.int("autoRefreshSeconds");
                    return s.createElement(s.Suspense, { fallback: (e?.length ?? 0) > 0 ? s.createElement(s.Fragment, null, e) : s.createElement(n.J, null) }, s.createElement(o, { autoRefreshSeconds: i, scribeContext: r, src: l }, e));
                };
        },
        343158: (e, t, r) => {
            r.d(t, { Z: () => p });
            var s = r(202784),
                n = r(325686),
                a = r(731708),
                l = r(392237),
                o = r(324345);
            const i = ({ part: e, style: t }) => {
                    const [r, n, l] = e;
                    switch (r) {
                        case o.N.Text:
                            return s.createElement(a.ZP, { style: t }, n);
                        case o.N.Link:
                        case o.N.Hashtag:
                            return s.createElement(a.ZP, { link: c(l), style: { ...t, color: void 0 } }, n);
                        case o.N.Mention:
                        case o.N.Symbol:
                            return s.createElement(a.ZP, { link: c(l), style: { ...t, color: void 0 } }, "@", n);
                        case o.N.Bold:
                            return s.createElement(a.ZP, { style: [d.bold, t] }, n);
                        case o.N.Italic:
                            return s.createElement(a.ZP, { style: [d.italic, t] }, n);
                        case o.N.Empty:
                        default:
                            return null;
                    }
                },
                c = (e) => ({ pathname: e ?? "/", external: !0, openInSameFrame: !1 }),
                d = l.default.create((e) => ({ container: { display: "block" }, italic: { fontStyle: "italic" }, bold: { fontWeight: "bold" } })),
                u = (e) => {
                    const { color: t, fontSize: r, fontStyle: s, fontWeight: n, letterSpacing: a, lineHeight: l, ...o } = e;
                    return [{ fontSize: r, fontStyle: s, fontWeight: n, letterSpacing: a, lineHeight: l, color: t }, o];
                },
                p = ({ children: e, props: t, style: r }) => {
                    const a = t.richtext("text") ?? [],
                        [l, o] = u(r);
                    return s.createElement(
                        n.Z,
                        { style: [d.container, o] },
                        a.map((e, t) => s.createElement(i, { key: t, part: e, style: l })),
                    );
                };
        },
        800539: (e, t, r) => {
            r.d(t, { Z: () => u });
            var s = r(202784),
                n = r(215045),
                a = r(138099),
                l = r(392237),
                o = r(323265),
                i = r(738124),
                c = r(643426);
            const d = l.default.create((e) => ({ sheet: { backgroundColor: "rgba(0,0,0,0)" }, sheetFullScreen: { justifyContent: "center" } })),
                u = ({ children: e, props: t, scribeContext: r, style: l }) => {
                    const u = t.element("cover"),
                        p = t.bool("blurBackground") ?? !0,
                        [m, h] = s.useState(!1),
                        g = o.ZP.isMobileOS();
                    return s.createElement(s.Fragment, null, m && u ? s.createElement(a.Z, { onMaskClick: () => h(!1), role: "preview", style: [d.sheet, g && d.sheetFullScreen], type: "full", withMask: p }, s.createElement(c.b.Provider, { value: { dismiss: () => h(!1) } }, s.createElement(i.Z, { parentContext: r, payload: u }))) : null, s.createElement(n.Z, { onPress: () => h(!0), style: [{ flexShrink: 1 }, l] }, e));
                };
        },
        710856: (e, t, r) => {
            r.d(t, { Z: () => l });
            var s = r(202784),
                n = r(325686),
                a = r(922477);
            const l = ({ props: e, style: t }) => {
                const r = e.str("width"),
                    l = e.str("height"),
                    o = e.str("fill"),
                    i = o ? (0, a.L)(o) : void 0,
                    c = { width: r && !r.endsWith("%") ? `${r}px` : r, height: l && !l.endsWith("%") ? `${l}px` : l, borderRadius: "50%", backgroundColor: i };
                return s.createElement(n.Z, { style: [c, t] });
            };
        },
        922477: (e, t, r) => {
            r.d(t, { L: () => o, Z: () => i });
            var s = r(202784),
                n = r(325686),
                a = r(297678);
            const l = (e) => `#${Math.max(0, Math.min(e, 16777215)).toString(16).padStart(6, "0")}`,
                o = (e) => {
                    const t = e.split("-");
                    return 2 === t.length ? l(a.Z[t[0]][t[1]]) : 1 === t.length ? l(a.Z[t[0]][""]) : void 0;
                },
                i = ({ props: e, style: t }) => {
                    const r = e.str("fill"),
                        a = r ? o(r) : void 0,
                        l = e.bool("rounded"),
                        i = e.int("cornerRadius"),
                        c = e.str("width"),
                        d = e.str("height"),
                        u = { width: c && !c.endsWith("%") ? `${c}px` : c, height: d && !d.endsWith("%") ? `${d}px` : d, background: a, borderRadius: l ? 9999 : i, flexShrink: 1 };
                    return s.createElement(n.Z, { style: [t, u] });
                };
        },
        233531: (e, t, r) => {
            r.d(t, { Z: () => m });
            r(136728);
            var s = r(202784),
                n = r(576648),
                a = r(215045),
                l = r(534319),
                o = r(443781),
                i = r(643426);
            const c = 0,
                d = 7,
                u = 8,
                p = 9,
                m = ({ children: e, props: t, style: r }) => {
                    const { dismiss: m } = s.useContext(i.b),
                        h = t.url("url") ?? "",
                        g = t.enum("target") ?? "",
                        f = t.bool("dismissOnClick") ?? !1,
                        { history: b } = (0, o.QZ)(),
                        y = s.useCallback(() => {
                            switch (g) {
                                case c:
                                    b.push({ state: { text: h }, pathname: "/compose/post" });
                                    break;
                                case d:
                                    b.push({ state: { text: h }, pathname: "/messages/compose" });
                                    break;
                                case u:
                                    l.Z.share({ url: h });
                                    break;
                                case p:
                                    n.Z.setString(h);
                                    break;
                                default:
                                    l.Z.share({ url: h });
                            }
                            f && m?.();
                        }, [m, f, b, g, h]);
                    return s.createElement(a.Z, { onPress: y, style: [{ flexShrink: 1 }, r] }, e);
                };
        },
        792842: (e, t, r) => {
            r.d(t, { C: () => b });
            var s = r(202784),
                n = r(878052),
                a = r(215045),
                l = r(325686),
                o = r(138099),
                i = r(738124),
                c = r(643426);
            const d = 0,
                u = 1,
                p = 2,
                m = 6,
                h = 8,
                g = 9,
                f = (e) => {
                    const t = n.Z.get("screen").height;
                    switch (e) {
                        case d:
                            return 400;
                        case u:
                            return 0.5 * t;
                        case p:
                            return 0.9 * t;
                        case h:
                            return 300;
                        case g:
                            return 200;
                        default:
                            return;
                    }
                },
                b = ({ children: e, props: t, scribeContext: r, style: n }) => {
                    const d = t.element("content"),
                        u = t.enum("mode") ?? m,
                        p = t.bool("bgInteraction") ?? !0,
                        [h, g] = s.useState(!1);
                    return s.createElement(s.Fragment, null, h && d && s.createElement(o.Z, { onMaskClick: () => g(!1), role: "preview", type: "bottom", withMask: p }, s.createElement(c.b.Provider, { value: { dismiss: () => g(!1) } }, s.createElement(l.Z, { style: { width: "100%", height: f(u) } }, s.createElement(i.Z, { parentContext: r, payload: d })))), s.createElement(a.Z, { onPress: () => g(!0), style: [{ flexShrink: 1 }, n] }, e));
                };
        },
        422089: (e, t, r) => {
            r.d(t, { Z: () => P });
            var s = r(202784),
                n = r(325686),
                a = r(466999),
                l = r(107267),
                o = r(392237),
                i = r(167630),
                c = r(674132),
                d = r.n(c),
                u = r(403808),
                p = r(323265),
                m = r(443781),
                h = r(125363),
                g = r(390387),
                f = r(929378),
                b = r(163889),
                y = r(725516),
                Z = r(684799);
            const k = Object.freeze({ light: "default", dark: "dim", darker: "dark", business: "business" }),
                v = d().ic6aa5f4,
                E = 327,
                w = 468,
                S = 500,
                x = 523,
                C = o.default.create((e) => ({ container: { position: "relative", alignItems: "center" }, spinner: { alignItems: "center", position: "absolute", start: 0, end: 0, justifyContent: "center" }, label: { color: e.colors.text } })),
                P = ({ props: e }) => {
                    const t = e.str("publicKey") ?? e.str("webKey"),
                        { featureSwitches: r } = s.useContext(m.rC),
                        c = (0, y.z)(),
                        d = (0, h.v9)(g.OW),
                        P = (0, l.useLocation)(),
                        W = e.str("dataExchangeToken") ?? "",
                        M = e.str("name") ?? "arkose_token",
                        T = t ? r.getStringValue(t) : "",
                        $ = s.useMemo(() => p.ZP.isWebView(), []),
                        R = $ ? (window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "default") : k[o.default.theme.paletteName],
                        N = s.useMemo(() => $ || window.innerWidth < w, [$]),
                        [O, B] = s.useState(N ? S : x),
                        [D, F] = s.useState(N ? E : w),
                        [I, L] = s.useState(f.t.passive),
                        _ = s.useMemo(() => (N ? Math.min((window.innerWidth - 32) / E, (window.innerHeight - 32) / S) : 1), [N]),
                        j = P.query?.guestId,
                        z = s.useMemo(() => ($ && "string" == typeof j ? j : $ ? "" : d || ""), [$, j, d]),
                        V = s.useCallback(() => {
                            f.Z.loadIframe(c, z, t || "", t || "");
                        }, [c, z, t]),
                        { change: Q, submit: H, values: A } = s.useContext(Z.q3),
                        [q, J] = s.useState("loading"),
                        K = (0, u.r)((e) => {
                            if ("string" == typeof e.data)
                                try {
                                    const r = JSON.parse(e.data);
                                    switch (r.eventId) {
                                        case "challenge-suppressed":
                                            f.Z.suppressedChallenge(c, z, t || "0", t || "0"), L(f.t.passive);
                                            break;
                                        case "challenge-shown":
                                            f.Z.shownChallenge(c, z, t || "0", t || "0"), L(f.t.interactive), J("shown");
                                            break;
                                        case "challenge-complete": {
                                            f.Z.completeChallenge(c, z, I, t || "0", t || "0");
                                            const e = r.payload.sessionToken;
                                            Q(M, e), J("complete");
                                            break;
                                        }
                                        case "challenge-iframeSize":
                                            B(r.payload.frameHeight), F(r.payload.frameWidth);
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
                    s.useEffect(
                        () => (
                            window.addEventListener("message", K, !1),
                            () => {
                                window.removeEventListener("message", K, !1);
                            }
                        ),
                        [K],
                    );
                    const G = null != A[M],
                        U = s.useRef(!1);
                    return (
                        s.useEffect(() => {
                            G && !U.current && ((U.current = !0), H());
                        }, [G, H]),
                        s.createElement(n.Z, { style: C.container }, s.createElement(n.Z, { style: [C.spinner, { height: O }] }, "loading" === q || "loaded" === q ? s.createElement(i.Z, null) : "complete" === q ? s.createElement(a.Z, { style: C.label }, v) : null), s.createElement("iframe", { height: O, id: "arkoseFrame", onLoad: V, src: [`https://iframe.arkoselabs.com/${T}/index.html?theme=${R}`, W && `&data=${W}`].filter(Boolean).join(""), style: { MozTransform: `scale(${_})`, OTransform: `scale(${_})`, WebkitTransform: `scale(${_})`, borderWidth: 0, MozTransformOrigin: "50% 0", OTransformOrigin: "50% 0", WebkitTransformOrigin: "50% 0", alignSelf: "center" }, title: "arkoseFrame", width: D }))
                    );
                };
        },
        778468: (e, t, r) => {
            r.d(t, { Z: () => o });
            var s = r(202784),
                n = r(392237),
                a = r(3196);
            const l = n.default.create((e) => ({ button: { borderRadius: e.borderRadii.medium, width: "100%", paddingVertical: e.spaces.space20 } })),
                o = ({ style: e }) => s.createElement(a.Z, { style: l.button });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b2a4a903.5b91b9ea.js.map
