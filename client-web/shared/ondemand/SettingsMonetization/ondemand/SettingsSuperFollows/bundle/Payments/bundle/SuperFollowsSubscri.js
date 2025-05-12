"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows~bundle.Payments~bundle.SuperFollowsSubscri"],
    {
        97882: (e, t, n) => {
            n.d(t, { T: () => a, x: () => i });
            var r = n(674132),
                o = n.n(r);
            const a = { AED: o().d857e44d, ALL: o().cb87e3db, ARS: o().a9d5ffd1, AUD: o().a0e8371d, BAM: o().gcc50dc9, BDT: o().a6a43585, BGN: o().a0cc8f2d, BHD: o().i31c32c5, BRL: o().i7dc69e9, BYR: o().c14a6c03, CAD: o().jaa3d537, CHF: o().a824080b, CLP: o().d9c0bedb, CNY: o().bf8c0613, COP: o().i8163625, CZK: o().adb53ba1, DKK: o().iabf697d, DZD: o().a1a0555b, EGP: o().f266f3d9, EUR: o().a9a8652b, GBP: o().dbf40761, GHS: o().b0d993d9, GTQ: o().ac1308e1, HKD: o().a7889ab3, HRK: o().c614f5cd, HUF: o().i55d57e3, IDR: o().e4b6002b, ILS: o().d28e983b, INR: o().e8c9232d, IQD: o().c8994ae1, ISK: o().f821c2a5, JPY: o().j348b9c9, KES: o().i6f93b9b, KRW: o().c6150bd5, KWD: o().i8921e09, KZT: o().ef239279, LBP: o().hecdb149, MAD: o().fdd039b7, MKD: o().f30c2c37, MXN: o().d9ea7bff, MYR: o().ea3df4b7, NGN: o().jaac21bb, NOK: o().hb435ced, NZD: o().ce699d81, PEN: o().bc56d3d7, PHP: o().f8561913, PKR: o().g6485d53, PLN: o().ff561cc1, QAR: o().b42011d3, RON: o().a6660bcd, RSD: o().f9b80449, RUB: o().gdee4d5d, SAR: o().h36f2103, SEK: o().a19ad037, SGD: o().g713f699, THB: o().ff2e39af, TND: o().be34316d, TRY: o().aef81b75, TWD: o().fcce70a5, TZS: o().jc9d352f, UAH: o().be1cb8c5, UGX: o().j9371501, USD: o().j7d4397d, VEF: o().d61441dd, VND: o().e2a99e97, ZAR: o().f7ce19ab, ZMW: o().b2a0213f },
                i = ({ amount: e, currencyCode: t = "USD", formatter: n = 1e6, removeTrailingZeros: r = !1, strictAmount: o = !1 }) => {
                    const i = o ? e : parseInt(e, 10) / n,
                        l = a[t]?.(i);
                    return r ? c(l) : l;
                },
                c = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        941978: (e, t, n) => {
            n.d(t, { C: () => r });
            class r {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const t = this._load(e);
                    return !(t instanceof Promise) && !!t;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, t) {
                    if (this._cache[e]) return this._cache[e];
                    const n = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = n), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((t) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(t)
                                          .catch(() => t(!1))
                                    : t(!0);
                            }),
                    );
                }
            }
            new r();
        },
        491915: (e, t, n) => {
            n.d(t, { ZP: () => b });
            n(571372);
            var r = n(202784),
                o = n(325686),
                a = n(392237),
                i = n(674132),
                c = n.n(i),
                l = n(643442),
                s = n(466445),
                d = n(731708),
                u = n(154003),
                m = n(173739);
            const h = c().jcf3e7a2;
            function f({ animation: e, autoplay: t }) {
                const [n, a] = r.useState(t),
                    [i, c] = r.useState(0);
                return (
                    r.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && c(Math.round(e.currentTime));
                        });
                    }, [e]),
                    r.createElement(
                        o.Z,
                        { style: p.container },
                        r.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? r.createElement(l.default, null) : r.createElement(s.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        r.createElement(d.ZP, { style: p.frames }, `${i}/${e.totalFrames}`),
                        r.createElement(
                            o.Z,
                            { style: p.slider },
                            r.createElement(m.Z, {
                                "aria-label": h,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), a(!1);
                                },
                                value: i,
                            }),
                        ),
                    )
                );
            }
            const p = a.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function b(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: i, onError: c, withControls: l } = e,
                    s = r.useRef(void 0),
                    d = r.useRef({ animationLoaded: !1 }),
                    u = r.useRef(null),
                    [m, h] = r.useState(!1);
                return (
                    r.useEffect(() => {
                        function r(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: o } = d.current;
                        o ||
                            ((d.current.animationLoaded = !0),
                            g.load().then((o) => {
                                if (o && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        l = o.loadAnimation(a);
                                    (s.current = l),
                                        (l.onError = (e) => {
                                            const t = new E(e);
                                            "function" == typeof c && c(t), r(l, t);
                                        }),
                                        l.addEventListener("DOMLoaded", () => {
                                            h(!0), t && (l.play(), i && i());
                                        }),
                                        l.addEventListener("complete", () => {
                                            r(l);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, a, i, c, l]),
                    r.useEffect(
                        () =>
                            function () {
                                s.current && s.current.destroy();
                            },
                        [s],
                    ),
                    r.createElement(o.Z, null, r.createElement(o.Z, { style: [e.animationContainerStyle, y.centerAnimation] }, r.createElement("div", { ref: u, style: e.animationStyle }), l && s.current && m && r.createElement(f, { animation: s.current, autoplay: t })))
                );
            }
            b.Prepare = function () {
                return (
                    r.useEffect(() => {
                        g.load();
                    }, []),
                    null
                );
            };
            const g = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class E extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, E), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const y = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        776588: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                o = n(325686),
                a = n(392237);
            const i = a.default.create((e) => ({ root: { display: "flex", flexDirection: "row", flexWrap: "nowrap", overflow: "hidden", width: "100%" }, borderRadius: { borderRadius: e.borderRadii.infinite }, lineWrap: { flexWrap: "wrap", overflow: "visible" }, word: { backgroundColor: e.colors.gray300, height: e.spaces.space4 }, wordWrapper: { justifyContent: "center" } })),
                c = function ({ color: e, lineHeightPx: t, maxWidthPx: n, style: c, withBorderRadius: l, withLineWrap: s, wordHeightPx: d, wordPercentWidths: u, wordSpacingPx: m }) {
                    const h = r.useMemo(
                        () =>
                            u.map((n, c) => {
                                const s = m || a.default.theme.spaces.space4,
                                    h = c !== u.length - 1 ? s : 0,
                                    f = r.createElement(o.Z, { key: c, style: [i.word, { width: t ? "100%" : `${n}%` }, e && { backgroundColor: a.default.theme.colors[e] }, !t && { marginEnd: h }, l && i.borderRadius, !!d && { height: d }] });
                                return t ? r.createElement(o.Z, { key: c, style: [i.wordWrapper, t && { marginEnd: h }, { height: t, width: `${n}%` }] }, f) : f;
                            }),
                        [e, t, l, d, m, u],
                    );
                    return r.createElement(o.Z, { style: [i.root, s && i.lineWrap, { maxWidth: n || "none" }, c] }, h);
                };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => p });
            var r = n(202784),
                o = n(325686),
                a = n(827515),
                i = n(461756),
                c = n(731708),
                l = n(392237);
            const s = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, a.Z)(e) ? (e > (n.count || 0) ? s : d) : s;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                m = {};
            [s, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === s ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === s ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const h = { position: "absolute" },
                f = l.default.create({ root: { overflow: "hidden" } }),
                p = (e) => {
                    const { children: t, containerStyle: n, count: l, ...d } = e,
                        [p, b] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: s }),
                        g = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (g.current = !0),
                                function () {
                                    g.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (g.current)
                                if (i.Z.reducedMotionEnabled) b((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== p.pendingText) {
                                    t === p.text || ((0, a.Z)(e.count) && p.count === e.count) ? b((e) => ({ ...e, pendingCount: null, pendingText: null })) : (b((n) => ({ ...n, pendingCount: e.count, pendingText: t })), p.animating || u(e.count, t, b));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            g.current &&
                                !1 === p.animating &&
                                (p.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              g.current && b((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : p.pendingText && u(p.pendingCount, p.pendingText, b));
                        }, [p.animating, p.oldText]),
                        r.useMemo(() => {
                            const e = m[p.transitionDirection],
                                t = p.oldText && !i.Z.reducedMotionEnabled,
                                a = !p.animating && p.oldText && !i.Z.reducedMotionEnabled,
                                l = { ...h, ...(p.animating ? e.post : e.active) },
                                s = { ...(a ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [f.root, n] },
                                t ? r.createElement("span", { style: l }, r.createElement(c.ZP, d, p.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(g.current, b),
                                        style: s,
                                    },
                                    r.createElement(c.ZP, d, p.text),
                                ),
                            );
                        }, [n, d, p, g, b])
                    );
                };
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => w });
            var r = n(202784),
                o = n(325686),
                a = n(461756),
                i = n(731708),
                c = n(58881),
                l = n(530732),
                s = n(224162),
                d = n(491915),
                u = n(392237),
                m = n(551611),
                h = n(674132),
                f = n.n(h),
                p = n(891198),
                b = n(537392),
                g = n(280278);
            const E = f().e8d93005,
                y = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                C = ({ color: e, count: t }) => {
                    const n = (0, p.wl)(t, !0);
                    return r.createElement(b.ZP, null, ({ containerWidth: o }) => {
                        return r.createElement(g.ZP, { color: e, count: t, size: "subtext2", style: [y.count, ((a = o), a < u.default.theme.breakpoints.small && y.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(o) || n.length >= 5 ? E(t) : n) : void 0);
                        var a;
                    });
                };
            class w extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: a, decoration: c } = this.props;
                            return r.createElement(s.ZP.Consumer, null, ({ direction: l }) => r.createElement(i.ZP, { color: e ? n : a, dir: l, style: [v.inner, e && "blue500" === n && v.blue500] }, r.createElement(o.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), c, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: o, iconSize: a, isActive: i, isDisabled: s, showBackgroundWhenActive: d } = this.props,
                                m = c.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                h = d && i && !e?.isHovered;
                            return r.createElement(l.Z, { hoverLabel: o, interactiveStyles: m, interactivityState: e, style: [u.default.absoluteFill, S[h ? "haloBackground" : n], !s && v.iconBackground, "small" === a && v.iconSmallBoundingBox, h && v.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: o, isFaded: i, onAnimationEnd: c, onAnimationStart: l, onError: s, showAnimation: h, transitionAnimationUrl: f } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && h) return r.createElement(d.ZP, { animation: f || m.Bf, animationContainerStyle: x[t], animationStyle: Z, onAnimationEnd: c, onAnimationStart: l, onError: s });
                            {
                                const a = n && e ? e : this.props.Icon;
                                return r.createElement(a, { style: [x[t], !o && i && v.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? r.createElement(C, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: i, isDisabled: c, isPresentational: s, keyboardShortcut: m, link: h, preventFocusShift: f, renderMenu: p, renderWrapper: b = r.Fragment, style: g, testID: E } = this.props,
                        y = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return r.createElement(
                        o.Z,
                        { style: [v.root, g] },
                        r.createElement(
                            b,
                            null,
                            s
                                ? this._renderContent(i)
                                : r.createElement(l.Z, { "aria-haspopup": p ? "menu" : void 0, "aria-label": e, disabled: c, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: m, link: h, onClick: this._handlePress, preventFocusShift: f, renderMenu: p, style: [v.triggerAreaRoot, v.outlineNone], testID: E }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: r } = e,
                                          o = i || n || r || t;
                                      return this._renderContent(o, e);
                                  }),
                        ),
                        y ? r.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            w.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const x = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                S = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                v = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                P = "224.5%",
                Z = { width: P, height: P };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => o, ZP: () => i });
            var r = n(941978);
            const o = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends r.C {
                check(e) {
                    return super.check(e ?? o);
                }
            }
            const i = new a();
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows~bundle.Payments~bundle.SuperFollowsSubscri.3bee0b3a.js.map
