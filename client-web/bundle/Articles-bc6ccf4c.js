"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Articles-bc6ccf4c"],
    {
        425376: (e, t, n) => {
            n.d(t, { Z: () => g });
            var o = n(202784),
                a = n(325686),
                r = n(494394),
                i = n(530525),
                s = n(731708),
                l = n(439592),
                c = n(154003),
                d = n(769281),
                u = n(30899),
                p = n(138099),
                m = n(392237);
            const h = m.default.create((e) => ({ root: { paddingVertical: e.spacesPx.space32 }, rootWithImage: { paddingTop: 0 }, graphic: { marginBottom: e.spacesPx.space20 }, icon: { alignSelf: "center", height: e.spacesPx.space64, width: e.spacesPx.space64 }, container: { paddingHorizontal: e.spacesPx.space32 }, description: { marginTop: e.spacesPx.space8, marginBottom: e.spacesPx.space4 }, actionButton: { marginTop: e.spacesPx.space16 } })),
                g = ({ actionPrimary: e, actionSecondary: t, children: n, headline: g, icon: f, iconColor: b, image: y, onDismiss: x, shouldDisplay: C, text: E, withMask: v = !0 }) => {
                    const [k, w] = o.useState(!1),
                        Z = (e) => o.createElement(u.Z, { onDismiss: D, renderContent: () => S(D), switchOnlyOnXSmallBreakpoint: !0, visibilityBehavior: r.J.forceVisible, withArrow: !0, withFixedPosition: !0, withMask: v }, e),
                        P = () => o.createElement(p.Z, { onMaskClick: () => D(), type: "center", withMask: !0 }, S(D)),
                        S = (n) => o.createElement(a.Z, { style: [h.root, y && h.rootWithImage] }, B(), o.createElement(a.Z, { style: h.container }, _(), R(), T({ action: e, dismiss: n, type: t && "primaryFilled" }), T({ action: t, dismiss: n }))),
                        B = () => {
                            let e = f && o.createElement(f, { style: b ? [h.icon, { color: m.default.theme.colors[b] }] : h.icon });
                            return y && !d.Z.isEnabled && (e = o.createElement(i.Z, { "aria-label": "", aspectMode: l.Z.exact(2), image: y })), e && o.createElement(a.Z, { style: h.graphic }, e);
                        },
                        _ = () => o.createElement(s.ZP, { size: "title3", weight: "heavy" }, g),
                        R = () => o.createElement(s.ZP, { color: "gray700", style: h.description }, E),
                        T = ({ action: e, dismiss: t, type: n }) => e && o.createElement(c.ZP, { link: e.link && e.link, onPress: e.onClick ? e.onClick : t, size: "large", style: h.actionButton, type: n }, e.text),
                        D = () => {
                            x && x(), w(!0);
                        };
                    return C && !k ? (n ? Z(n) : P()) : n || null;
                };
        },
        664064: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(807896),
                a = n(202784),
                r = n(523561);
            const i = a.forwardRef(s);
            function s(e, t) {
                return a.createElement(l, (0, o.Z)({}, e, { ref: t }));
            }
            const l = (0, r.Z)({
                    loader: () =>
                        Promise.all([n.e("loader.Confetti-6107ac1a"), n.e("loader.Confetti-d728816b"), n.e("loader.Confetti-229eafb5"), n.e("loader.Confetti-5ccade72")])
                            .then(n.bind(n, 620151))
                            .then((e) => ({ default: e.Confetti })),
                }),
                c = i;
        },
        661810: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                a = n(325686),
                r = n(392237);
            function i({ spacing: e, style: t }) {
                return o.createElement(a.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? r.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = r.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(202784),
                a = n(476984),
                r = n.n(a),
                i = n(143778),
                s = n(750410),
                l = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class m extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !r()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: a, icon: r, loadingMessage: i, onRequestRetry: d, render: m, renderFailure: h, retryMessage: g, retryable: f } = this.props;
                    switch (a) {
                        case c:
                            return f ? o.createElement(s.Z, { icon: r, onRequestRetry: d, retryMessage: g }) : n ? o.createElement(l.m, { failureMessage: n }) : h();
                        case u:
                            return o.createElement(l.J, { "aria-label": e, color: t, loadingMessage: i });
                        case p:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        941978: (e, t, n) => {
            n.d(t, { C: () => o });
            class o {
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
            new o();
        },
        491915: (e, t, n) => {
            n.d(t, { ZP: () => f });
            n(571372);
            var o = n(202784),
                a = n(325686),
                r = n(392237),
                i = n(674132),
                s = n.n(i),
                l = n(643442),
                c = n(466445),
                d = n(731708),
                u = n(154003),
                p = n(173739);
            const m = s().jcf3e7a2;
            function h({ animation: e, autoplay: t }) {
                const [n, r] = o.useState(t),
                    [i, s] = o.useState(0);
                return (
                    o.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && s(Math.round(e.currentTime));
                        });
                    }, [e]),
                    o.createElement(
                        a.Z,
                        { style: g.container },
                        o.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? o.createElement(l.default, null) : o.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), r(!1)) : (e.play(), r(!0));
                            },
                            type: "primaryText",
                        }),
                        o.createElement(d.ZP, { style: g.frames }, `${i}/${e.totalFrames}`),
                        o.createElement(
                            a.Z,
                            { style: g.slider },
                            o.createElement(p.Z, {
                                "aria-label": m,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), r(!1);
                                },
                                value: i,
                            }),
                        ),
                    )
                );
            }
            const g = r.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function f(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: r, onAnimationStart: i, onError: s, withControls: l } = e,
                    c = o.useRef(void 0),
                    d = o.useRef({ animationLoaded: !1 }),
                    u = o.useRef(null),
                    [p, m] = o.useState(!1);
                return (
                    o.useEffect(() => {
                        function o(e, t) {
                            "function" == typeof r && r(t), e && e.destroy();
                        }
                        const { animationLoaded: a } = d.current;
                        a ||
                            ((d.current.animationLoaded = !0),
                            b.load().then((a) => {
                                if (a && u.current) {
                                    const r = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        l = a.loadAnimation(r);
                                    (c.current = l),
                                        (l.onError = (e) => {
                                            const t = new y(e);
                                            "function" == typeof s && s(t), o(l, t);
                                        }),
                                        l.addEventListener("DOMLoaded", () => {
                                            m(!0), t && (l.play(), i && i());
                                        }),
                                        l.addEventListener("complete", () => {
                                            o(l);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, r, i, s, l]),
                    o.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    o.createElement(a.Z, null, o.createElement(a.Z, { style: [e.animationContainerStyle, x.centerAnimation] }, o.createElement("div", { ref: u, style: e.animationStyle }), l && c.current && p && o.createElement(h, { animation: c.current, autoplay: t })))
                );
            }
            f.Prepare = function () {
                return (
                    o.useEffect(() => {
                        b.load();
                    }, []),
                    null
                );
            };
            const b = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class y extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, y), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const x = r.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                a = n(674132),
                r = n.n(a),
                i = n(149170),
                s = n(40644);
            const l = r().gaeb997e;
            const c = function ({ activeColor: e, label: t = l, Icon: n = i.default, iconSize: a = "normal", isDisabled: r, onClick: c, preventFocusShift: d, renderActionMenu: u, style: p, testID: m, withDarkBackground: h = !1 }) {
                const g = o.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    f = o.useMemo(() => ({ label: t }), [t]);
                return o.createElement(s.ZP, { Icon: n, activeColor: e || (h ? "white" : void 0), "aria-label": t, backgroundColor: h ? "translucentBlack77" : "transparent", color: h ? "white" : "gray700", hoverLabel: f, iconSize: a, isDisabled: r, onPress: g, preventFocusShift: d, renderMenu: u, style: p, testID: m });
            };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var o = n(202784),
                a = n(325686),
                r = n(827515),
                i = n(461756),
                s = n(731708),
                l = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const o = (0, r.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: o };
                    });
                },
                p = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                p[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                h = l.default.create({ root: { overflow: "hidden" } }),
                g = (e) => {
                    const { children: t, containerStyle: n, count: l, ...d } = e,
                        [g, f] = o.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        b = o.useRef(!1);
                    return (
                        o.useEffect(
                            () => (
                                (b.current = !0),
                                function () {
                                    b.current = !1;
                                }
                            ),
                            [],
                        ),
                        o.useEffect(() => {
                            if (b.current)
                                if (i.Z.reducedMotionEnabled) f((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== g.pendingText) {
                                    t === g.text || ((0, r.Z)(e.count) && g.count === e.count) ? f((e) => ({ ...e, pendingCount: null, pendingText: null })) : (f((n) => ({ ...n, pendingCount: e.count, pendingText: t })), g.animating || u(e.count, t, f));
                                }
                        }, [t]),
                        o.useEffect(() => {
                            b.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && f((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && u(g.pendingCount, g.pendingText, f));
                        }, [g.animating, g.oldText]),
                        o.useMemo(() => {
                            const e = p[g.transitionDirection],
                                t = g.oldText && !i.Z.reducedMotionEnabled,
                                r = !g.animating && g.oldText && !i.Z.reducedMotionEnabled,
                                l = { ...m, ...(g.animating ? e.post : e.active) },
                                c = { ...(r ? e.pre : e.active) };
                            return o.createElement(
                                a.Z,
                                { style: [h.root, n] },
                                t ? o.createElement("span", { style: l }, o.createElement(s.ZP, d, g.oldText)) : null,
                                o.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, f),
                                        style: c,
                                    },
                                    o.createElement(s.ZP, d, g.text),
                                ),
                            );
                        }, [n, d, g, b, f])
                    );
                };
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => Z });
            var o = n(807896),
                a = n(202784),
                r = n(194504),
                i = n(235902),
                s = n(392237),
                l = n(325686),
                c = n(674132),
                d = n.n(c),
                u = n(912021),
                p = n(516951),
                m = n(731708),
                h = n(310088),
                g = n(175993),
                f = n(58881),
                b = n(530732);
            const y = d().d2414d31,
                x = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class E extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: n, query: o, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: o, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, o) => {
                            const a = s.default.theme.colors.text,
                                r = s.default.theme.colors.gray700;
                            return n || o ? (e || t ? a : r) : e ? a : r;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: o, children: r, color: i, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: E, style: k, to: w } = this.props,
                        { location: Z } = this.state,
                        P = w ? this._getMemoizedLink(w, E) : void 0,
                        S = c ? c(w) : Z?.pathname === P?.pathname,
                        B = f.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        _ = g ? "medium" : S ? "bold" : "medium";
                    return a.createElement(b.Z, { "aria-label": t, "aria-selected": S, focusable: !!S, interactiveStyles: B, link: P, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? v.pill : v.link, u && S ? v.active : null, d ? (u ? v.compactPill : v.compactLink) : null, p ? v.roundedRect : null, k], withoutInteractiveStyles: g || u }, ({ isFocused: t, isHovered: c }) => a.createElement(l.Z, { style: u && v.flexGrow }, a.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [v.text, { color: this._getTextColor(S, c, g, u) }, d && v.compactText, g && t && v.focusedText], weight: _ }, e && a.createElement(e, { style: v.icon }), r, g || u ? null : a.createElement(l.Z, { style: S && [v.border, { backgroundColor: s.default.theme.colors[i] }] })), n ? a.createElement(h.Z, { count: n, standalone: !0, style: [v.badge, n >= 10 && v.multiDigitBadge, n >= 20 && v.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : o ? a.createElement(h.Z, { pip: !0, standalone: !0, style: v.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (E.contextType = g.Z), (E.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const v = s.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                k = E,
                w = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                Z = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: s, isRoundedRect: l, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = i.ZP.useProps(),
                        h = m() && !s,
                        g = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: r, ...i }, c) => {
                                    const d = h ? [w.linkRedesign, 0 === c && w.firstLinkRedesign, e && 0 === c && w.withNoPaddingStart] : void 0;
                                    return a.createElement(k, (0, o.Z)({ viewType: r }, i, { isCompact: n, isPillLink: s, isRoundedRect: l, isWebRedesign: h, style: d }), t);
                                }),
                            [e, n, s, l, h, c],
                        );
                    return a.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: s && w.gap, childrenStyle: !h && w.flexGrow, key: p, style: [s ? null : w.segmentedControl, h && w.leftAligned, d], visibleItemIndex: u }, g);
                };
        },
        620522: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = n(202784).createContext({ refsMap: {} });
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => E });
            var o = n(202784),
                a = n(325686),
                r = n(461756),
                i = n(731708),
                s = n(58881),
                l = n(530732),
                c = n(224162),
                d = n(491915),
                u = n(392237),
                p = n(551611),
                m = n(674132),
                h = n.n(m),
                g = n(891198),
                f = n(537392),
                b = n(280278);
            const y = h().e8d93005,
                x = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                C = ({ color: e, count: t }) => {
                    const n = (0, g.wl)(t, !0);
                    return o.createElement(f.ZP, null, ({ containerWidth: a }) => {
                        return o.createElement(b.ZP, { color: e, count: t, size: "subtext2", style: [x.count, ((r = a), r < u.default.theme.breakpoints.small && x.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(a) || n.length >= 5 ? y(t) : n) : void 0);
                        var r;
                    });
                };
            class E extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: r, decoration: s } = this.props;
                            return o.createElement(c.ZP.Consumer, null, ({ direction: l }) => o.createElement(i.ZP, { color: e ? n : r, dir: l, style: [w.inner, e && "blue500" === n && w.blue500] }, o.createElement(a.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), s, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: a, iconSize: r, isActive: i, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                p = s.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                m = d && i && !e?.isHovered;
                            return o.createElement(l.Z, { hoverLabel: a, interactiveStyles: p, interactivityState: e, style: [u.default.absoluteFill, k[m ? "haloBackground" : n], !c && w.iconBackground, "small" === r && w.iconSmallBoundingBox, m && w.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: a, isFaded: i, onAnimationEnd: s, onAnimationStart: l, onError: c, showAnimation: m, transitionAnimationUrl: h } = this.props;
                            if (!u.default.theme.highContrastEnabled && !r.Z.reducedMotionEnabled && e && m) return o.createElement(d.ZP, { animation: h || p.Bf, animationContainerStyle: v[t], animationStyle: P, onAnimationEnd: s, onAnimationStart: l, onError: c });
                            {
                                const r = n && e ? e : this.props.Icon;
                                return o.createElement(r, { style: [v[t], !a && i && w.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? o.createElement(C, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: i, isDisabled: s, isPresentational: c, keyboardShortcut: p, link: m, preventFocusShift: h, renderMenu: g, renderWrapper: f = o.Fragment, style: b, testID: y } = this.props,
                        x = !u.default.theme.highContrastEnabled && !r.Z.reducedMotionEnabled;
                    return o.createElement(
                        a.Z,
                        { style: [w.root, b] },
                        o.createElement(
                            f,
                            null,
                            c
                                ? this._renderContent(i)
                                : o.createElement(l.Z, { "aria-haspopup": g ? "menu" : void 0, "aria-label": e, disabled: s, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: p, link: m, onClick: this._handlePress, preventFocusShift: h, renderMenu: g, style: [w.triggerAreaRoot, w.outlineNone], testID: y }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: o } = e,
                                          a = i || n || o || t;
                                      return this._renderContent(a, e);
                                  }),
                        ),
                        x ? o.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            E.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const v = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                k = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                w = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                Z = "224.5%",
                P = { width: Z, height: Z };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => a, ZP: () => i });
            var o = n(941978);
            const a = "https://abs.twimg.com/sticky/animations/like.4.json";
            class r extends o.C {
                check(e) {
                    return super.check(e ?? a);
                }
            }
            const i = new r();
        },
        517747: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                a = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 6V3h2v8h-2V8H3V6h11zm7 2h-3.5V6H21v2zM8 16v-3h2v8H8v-3H3v-2h5zm13 2h-9.5v-2H21v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        490359: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = (e) => (Array.isArray(e) ? e[0] : void 0);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Articles-bc6ccf4c.d4ccf30a.js.map
