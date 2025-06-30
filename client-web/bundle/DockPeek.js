"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DockPeek"],
    {
        292546: (e, t, n) => {
            n.d(t, { Z: () => s });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(202784),
                r = n(107267);
            const s = () => {
                const e = (0, r.useLocation)(),
                    t = (0, r.useHistory)(),
                    [n, s] = a.useState(new URLSearchParams(e.search));
                a.useEffect(() => {
                    s(new URLSearchParams(e.search));
                }, [e.search]);
                const o = a.useCallback(
                    (a, r) => {
                        const s = new URLSearchParams(n);
                        s.set(a, r), t.push(`${e.pathname}?${s.toString()}`);
                    },
                    [t, e.pathname, n],
                );
                return [a.useMemo(() => new URLSearchParams(e.search), [e.search]), o];
            };
        },
        635322: (e, t, n) => {
            n.d(t, { J: () => f });
            var a = n(202784),
                r = n(244448),
                s = n(107267),
                o = n(682830),
                c = (n(631673), n(553160)),
                l = n(725102),
                i = n(634125),
                u = (n(571372), n(736230));
            const d = a.createContext({ setSystemActionHandler: () => {} }),
                h = ({ children: e, systemActionHandlers: t }) => {
                    const n = a.useRef(new Map());
                    a.useEffect(() => {
                        (t ? Array.from(t?.entries()) : []).forEach(([e, t]) => {
                            n.current.set(e, t);
                        });
                    }, [t]);
                    const r = a.useCallback((e, t) => {
                            n.current.set(e, t);
                        }, []),
                        s = a.useCallback((e) => {
                            const t = e,
                                { matchupId: a, pickedByGrok: r, teamName: s } = t,
                                o = n.current.get(1);
                            o && o?.(s, a, r);
                        }, []),
                        o = { setSystemActionHandler: r, [u.bP.MARCH_MADNESS_PICK]: s };
                    return a.createElement(d.Provider, { value: o }, e);
                };
            var m = n(39182);
            const p = "/i/jf";
            function f({ path: e, systemActionHandlers: t }) {
                const n = (0, s.useLocation)();
                return "undefined" == typeof window ? null : a.createElement(h, { systemActionHandlers: t }, a.createElement(a.Suspense, { fallback: a.createElement(o.J, null) }, a.createElement(g, { isHighlights: !1, path: e ?? n.pathname.slice(p.length) + n.search, renderEmptyState: () => null })));
            }
            const g = ({ isHighlights: e, path: t, renderEmptyState: n }) => {
                const s = (0, m.E)(),
                    o = (0, r.bk)();
                a.useEffect(() => {
                    if (o && o.Runtime) {
                        const e = { "x.com.GenericURT": c.Z, SignupArkoseSecurityChallenge: l.Z };
                        o.Runtime.addComponentOverride(e);
                    }
                }, [o]);
                const { Analytics: u } = o;
                return a.createElement(i.Z, null, a.createElement(r.mQ, { analytics: u, jfPath: t, key: `${t}-${s}` }));
            };
        },
        39182: (e, t, n) => {
            n.d(t, { E: () => o });
            n(571372);
            var a = n(202784),
                r = n(251067),
                s = n(355335);
            const o = () => {
                const e = a.useRef(null),
                    [t, n] = a.useState(Date.now()),
                    { isDev: o } = (0, s.Z)();
                return (
                    a.useEffect(() => {
                        if (!o || (0, r.fH)(r.vw.prod)) return;
                        const t = () => {
                            (e.current = new WebSocket("wss://localhost.x.com:3000/__dev")),
                                (e.current.onmessage = (e) => {
                                    if ("string" == typeof e.data) {
                                        const e = Date.now();
                                        n(e);
                                    }
                                }),
                                (e.current.onerror = (e) => {
                                    throw new Error(e.type);
                                }),
                                (e.current.onclose = () => {
                                    setTimeout(t, 3e3);
                                });
                        };
                        return (
                            t(),
                            () => {
                                e.current && e.current.close();
                            }
                        );
                    }, [o]),
                    t
                );
            };
        },
        149103: (e, t, n) => {
            n.r(t), n.d(t, { default: () => L });
            var a = n(202784),
                r = n(400752),
                s = n(83825),
                o = n(292546),
                c = n(807896),
                l = n(325686),
                i = n(537392),
                u = n(392237),
                d = n(138099),
                h = n(154003),
                m = n(111677),
                p = n.n(m),
                f = n(487552),
                g = n(837020),
                w = n(715601),
                E = n(635322),
                y = n(731708),
                b = n(530732),
                P = n(215337);
            function k({ "aria-label": e, children: t, onPress: n, style: r }) {
                return a.createElement(b.Z, { "aria-label": e, onPress: n, style: [x.button, r] }, a.createElement(P.Z, { angle: 80, colors: [u.default.theme.colors.blue500, u.default.theme.colors.blue700], style: x.gradient }, t));
            }
            const x = u.default.create((e) => ({ button: { overflow: "hidden", width: "100%", boxShadow: e.boxShadows.small, height: e.spacesPx.space48, borderRadius: e.spacesPx.space48 }, gradient: { height: "100%", justifyContent: "center", paddingHorizontal: e.spaces.space24 } }));
            function C({ onPress: e }) {
                const t = p().g4743c56;
                return a.createElement(a.Fragment, null, a.createElement(l.Z, { style: v.ctaButtonContainer }, a.createElement(k, { "aria-label": t, onPress: e, style: v.ctaButton }, a.createElement(y.ZP, { align: "center", color: "white", numberOfLines: 1, size: "headline1", weight: "bold" }, t))));
            }
            const v = u.default.create((e) => ({ ctaButtonContainer: { width: "100%", gap: e.spaces.space8, marginTop: e.spaces.space24 }, ctaButton: { width: "100%" } }));
            function Z(e) {
                const t = (0, i.iv)().width < u.default.theme.breakpoints.medium,
                    n = { type: "bottom", role: "menu", onMaskClick: e.onClose, allowBackNavigation: !0, withKeyboardNavigation: !0, withMask: !0 },
                    [r, s] = (function () {
                        const [e, t] = a.useState(null),
                            n = a.useMemo(() => {
                                if (!e)
                                    return function (e) {
                                        const n = e.nativeEvent.layout;
                                        n && t(n);
                                    };
                            }, [e]);
                        return [e, n];
                    })();
                return a.createElement(d.Z, n, a.createElement(w.Z, { onLayout: s, style: S.sheetContainer }, a.createElement(l.Z, { style: S.header }, t && a.createElement(l.Z, { style: S.headerLeft }, a.createElement(h.ZP, (0, c.Z)({ "aria-label": R.collapse, icon: a.createElement(f.default, { style: S.closeIcon }), onPress: e.onJoin, pullLeft: !0 }, H))), a.createElement(l.Z, { style: S.headerRight }, a.createElement(h.ZP, (0, c.Z)({ "aria-label": R.close, icon: a.createElement(g.default, { style: S.closeIcon }), onPress: e.onClose, pullLeft: !0 }, H)))), a.createElement(l.Z, { style: [S.withoutPadding, S.content, ...(t ? [] : [S.contentNarrow])] }, a.createElement(E.J, { path: e.path ?? "" })), !t && a.createElement(C, { onPress: e.onJoin })));
            }
            const S = u.default.create((e) => ({ sheetContainer: { flex: 1, padding: e.spacesPx.space24, paddingTop: e.spacesPx.space12 }, withoutPadding: { paddingHorizontal: 0, paddingVertical: 0 }, content: { overflowY: "auto", flex: 1, scrollbarWidth: "none" }, contentNarrow: { maxHeight: "60vh" }, header: { flexDirection: "row", marginBottom: e.spacesPx.space12 }, headerLeft: { flex: 1, alignItems: "flex-start" }, headerRight: { flex: 1, alignItems: "flex-end" }, closeIcon: { width: e.spacesPx.space24, height: e.spacesPx.space24 } })),
                H = { borderColor: "transparent", color: "text", size: "medium" },
                R = { collapse: p().d227d19e, close: p().ia5e7488 };
            function L(e) {
                const [t] = (0, o.Z)(),
                    n = t.get("peek"),
                    c = t.get("collapsed"),
                    l = t.get("expanded"),
                    i = (0, r.b9)(s.P);
                return a.createElement(Z, {
                    onClose: () => {
                        e.history.goBackThroughModals();
                    },
                    onJoin: () => {
                        c && l && i([c, l]), e.history.goBackThroughModals();
                    },
                    path: n,
                });
            }
        },
        215337: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                r = n(325686);
            class s extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, n) => {
                                    const a = t[n];
                                    let r = "";
                                    return a && (r = ` ${100 * a}%`), e + r;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: n, style: s } = this.props;
                    return a.createElement(r.Z, { style: [s, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, n);
                }
            }
            s.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DockPeek.cf20a25a.js.map
