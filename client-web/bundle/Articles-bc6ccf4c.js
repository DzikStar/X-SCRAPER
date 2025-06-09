"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Articles-bc6ccf4c"],
    {
        425376: (e, t, n) => {
            n.d(t, { Z: () => g });
            var o = n(202784),
                r = n(325686),
                a = n(494394),
                i = n(530525),
                s = n(731708),
                l = n(439592),
                c = n(154003),
                d = n(769281),
                u = n(30899),
                p = n(138099),
                m = n(392237);
            const h = m.default.create((e) => ({ root: { paddingVertical: e.spacesPx.space32 }, rootWithImage: { paddingTop: 0 }, graphic: { marginBottom: e.spacesPx.space20 }, icon: { alignSelf: "center", height: e.spacesPx.space64, width: e.spacesPx.space64 }, container: { paddingHorizontal: e.spacesPx.space32 }, description: { marginTop: e.spacesPx.space8, marginBottom: e.spacesPx.space4 }, actionButton: { marginTop: e.spacesPx.space16 } })),
                g = ({ actionPrimary: e, actionSecondary: t, children: n, headline: g, icon: f, iconColor: b, image: y, onDismiss: x, shouldDisplay: C, text: E, withMask: S = !0 }) => {
                    const [v, k] = o.useState(!1),
                        w = (e) => o.createElement(u.Z, { onDismiss: A, renderContent: () => Z(A), switchOnlyOnXSmallBreakpoint: !0, visibilityBehavior: a.J.forceVisible, withArrow: !0, withFixedPosition: !0, withMask: S }, e),
                        P = () => o.createElement(p.Z, { onMaskClick: () => A(), type: "center", withMask: !0 }, Z(A)),
                        Z = (n) => o.createElement(r.Z, { style: [h.root, y && h.rootWithImage] }, B(), o.createElement(r.Z, { style: h.container }, _(), T(), R({ action: e, dismiss: n, type: t && "primaryFilled" }), R({ action: t, dismiss: n }))),
                        B = () => {
                            let e = f && o.createElement(f, { style: b ? [h.icon, { color: m.default.theme.colors[b] }] : h.icon });
                            return y && !d.Z.isEnabled && (e = o.createElement(i.Z, { "aria-label": "", aspectMode: l.Z.exact(2), image: y })), e && o.createElement(r.Z, { style: h.graphic }, e);
                        },
                        _ = () => o.createElement(s.ZP, { size: "title3", weight: "heavy" }, g),
                        T = () => o.createElement(s.ZP, { color: "gray700", style: h.description }, E),
                        R = ({ action: e, dismiss: t, type: n }) => e && o.createElement(c.ZP, { link: e.link && e.link, onPress: e.onClick ? e.onClick : t, size: "large", style: h.actionButton, type: n }, e.text),
                        A = () => {
                            x && x(), k(!0);
                        };
                    return C && !v ? (n ? w(n) : P()) : n || null;
                };
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(202784),
                r = n(476984),
                a = n.n(r),
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
                    return !(!t && !n) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: a, loadingMessage: i, onRequestRetry: d, render: m, renderFailure: h, retryMessage: g, retryable: f } = this.props;
                    switch (r) {
                        case c:
                            return f ? o.createElement(s.Z, { icon: a, onRequestRetry: d, retryMessage: g }) : n ? o.createElement(l.m, { failureMessage: n }) : h();
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
                r = n(325686),
                a = n(392237),
                i = n(111677),
                s = n.n(i),
                l = n(643442),
                c = n(466445),
                d = n(731708),
                u = n(154003),
                p = n(173739);
            const m = s().jcf3e7a2;
            function h({ animation: e, autoplay: t }) {
                const [n, a] = o.useState(t),
                    [i, s] = o.useState(0);
                return (
                    o.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && s(Math.round(e.currentTime));
                        });
                    }, [e]),
                    o.createElement(
                        r.Z,
                        { style: g.container },
                        o.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? o.createElement(l.default, null) : o.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        o.createElement(d.ZP, { style: g.frames }, `${i}/${e.totalFrames}`),
                        o.createElement(
                            r.Z,
                            { style: g.slider },
                            o.createElement(p.Z, {
                                "aria-label": m,
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
            const g = a.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function f(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: i, onError: s, withControls: l } = e,
                    c = o.useRef(void 0),
                    d = o.useRef({ animationLoaded: !1 }),
                    u = o.useRef(null),
                    [p, m] = o.useState(!1);
                return (
                    o.useEffect(() => {
                        function o(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = d.current;
                        r ||
                            ((d.current.animationLoaded = !0),
                            b.load().then((r) => {
                                if (r && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        l = r.loadAnimation(a);
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
                    }, [e.animation, t, n, a, i, s, l]),
                    o.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    o.createElement(r.Z, null, o.createElement(r.Z, { style: [e.animationContainerStyle, x.centerAnimation] }, o.createElement("div", { ref: u, style: e.animationStyle }), l && c.current && p && o.createElement(h, { animation: c.current, autoplay: t })))
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
            const x = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(111677),
                a = n.n(r),
                i = n(149170),
                s = n(40644);
            const l = a().gaeb997e;
            const c = function ({ activeColor: e, label: t = l, Icon: n = i.default, iconSize: r = "normal", isDisabled: a, onClick: c, preventFocusShift: d, renderActionMenu: u, style: p, testID: m, withDarkBackground: h = !1 }) {
                const g = o.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    f = o.useMemo(() => ({ label: t }), [t]);
                return o.createElement(s.ZP, { Icon: n, activeColor: e || (h ? "white" : void 0), "aria-label": t, backgroundColor: h ? "translucentBlack77" : "transparent", color: h ? "white" : "gray700", hoverLabel: f, iconSize: r, isDisabled: a, onPress: g, preventFocusShift: d, renderMenu: u, style: p, testID: m });
            };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var o = n(202784),
                r = n(325686),
                a = n(827515),
                i = n(461756),
                s = n(731708),
                l = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const o = (0, a.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
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
                                    t === g.text || ((0, a.Z)(e.count) && g.count === e.count) ? f((e) => ({ ...e, pendingCount: null, pendingText: null })) : (f((n) => ({ ...n, pendingCount: e.count, pendingText: t })), g.animating || u(e.count, t, f));
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
                                a = !g.animating && g.oldText && !i.Z.reducedMotionEnabled,
                                l = { ...m, ...(g.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return o.createElement(
                                r.Z,
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
            n.d(t, { Z: () => w });
            var o = n(807896),
                r = n(202784),
                a = n(194504),
                i = n(235902),
                s = n(392237),
                l = n(325686),
                c = n(111677),
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
            class E extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: n, query: o, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: o, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, o) => {
                            const r = s.default.theme.colors.text,
                                a = s.default.theme.colors.gray700;
                            return n || o ? (e || t ? r : a) : e ? r : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: o, children: a, color: i, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: E, style: v, to: k } = this.props,
                        { location: w } = this.state,
                        P = k ? this._getMemoizedLink(k, E) : void 0,
                        Z = c ? c(k) : w?.pathname === P?.pathname,
                        B = f.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? S.pillHoverStyle.backgroundColor : void 0 }),
                        _ = g ? "medium" : Z ? "bold" : "medium";
                    return r.createElement(b.Z, { "aria-label": t, "aria-selected": Z, focusable: !!Z, interactiveStyles: B, link: P, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [S.pillStyle] : [S.link]), ...(u && Z ? [S.pillActiveStyle] : []), d ? (u ? S.compactPill : S.compactLink) : null, p ? S.roundedRect : null, v], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => r.createElement(l.Z, { style: u && S.flexGrow }, r.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(Z, c, g, u) }, d && S.compactText, g && t && S.focusedText, u && S.pillTextStyle, u && Z && S.pillActiveTextStyle, u && c && S.pillHoverTextStyle], weight: _ }, e && r.createElement(e, { style: S.icon }), a, g || u ? null : r.createElement(l.Z, { style: Z && [S.border, { backgroundColor: s.default.theme.colors[i] }] })), n ? r.createElement(h.Z, { count: n, standalone: !0, style: [S.badge, n >= 10 && S.multiDigitBadge, n >= 20 && S.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : o ? r.createElement(h.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (E.contextType = g.Z), (E.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const S = s.default.create((e) => ({
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
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                v = E,
                k = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                w = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: s, isRoundedRect: l, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = i.ZP.useProps(),
                        h = m() && !s,
                        g = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...i }, c) => {
                                    const d = h ? [k.linkRedesign, 0 === c && k.firstLinkRedesign, e && 0 === c && k.withNoPaddingStart] : void 0;
                                    return r.createElement(v, (0, o.Z)({ viewType: a }, i, { isCompact: n, isPillLink: s, isRoundedRect: l, isWebRedesign: h, style: d }), t);
                                }),
                            [e, n, s, l, h, c],
                        );
                    return r.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: s && k.gap, childrenStyle: !h && k.flexGrow, key: p, style: [s ? null : k.segmentedControl, h && k.leftAligned, d], visibleItemIndex: u }, g);
                };
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => E });
            var o = n(202784),
                r = n(325686),
                a = n(461756),
                i = n(731708),
                s = n(58881),
                l = n(530732),
                c = n(224162),
                d = n(491915),
                u = n(392237),
                p = n(551611),
                m = n(111677),
                h = n.n(m),
                g = n(891198),
                f = n(537392),
                b = n(280278);
            const y = h().e8d93005,
                x = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                C = ({ color: e, count: t }) => {
                    const n = (0, g.wl)(t, !0);
                    return o.createElement(f.ZP, null, ({ containerWidth: r }) => {
                        return o.createElement(b.ZP, { color: e, count: t, size: "subtext2", style: [x.count, ((a = r), a < u.default.theme.breakpoints.small && x.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || n.length >= 5 ? y(t) : n) : void 0);
                        var a;
                    });
                };
            class E extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: a, decoration: s } = this.props;
                            return o.createElement(c.ZP.Consumer, null, ({ direction: l }) => o.createElement(i.ZP, { color: e ? n : a, dir: l, style: [k.inner, e && "blue500" === n && k.blue500] }, o.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), s, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: r, iconSize: a, isActive: i, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                p = s.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                m = d && i && !e?.isHovered;
                            return o.createElement(l.Z, { hoverLabel: r, interactiveStyles: p, interactivityState: e, style: [u.default.absoluteFill, v[m ? "haloBackground" : n], !c && k.iconBackground, "small" === a && k.iconSmallBoundingBox, m && k.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: r, isFaded: i, onAnimationEnd: s, onAnimationStart: l, onError: c, showAnimation: m, transitionAnimationUrl: h } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && m) return o.createElement(d.ZP, { animation: h || p.Bf, animationContainerStyle: S[t], animationStyle: P, onAnimationEnd: s, onAnimationStart: l, onError: c });
                            {
                                const a = n && e ? e : this.props.Icon;
                                return o.createElement(a, { style: [S[t], !r && i && k.iconFaded] });
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
                        x = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return o.createElement(
                        r.Z,
                        { style: [k.root, b] },
                        o.createElement(
                            f,
                            null,
                            c
                                ? this._renderContent(i)
                                : o.createElement(l.Z, { "aria-haspopup": g ? "menu" : void 0, "aria-label": e, disabled: s, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: p, link: m, onClick: this._handlePress, preventFocusShift: h, renderMenu: g, style: [k.triggerAreaRoot, k.outlineNone], testID: y }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: o } = e,
                                          r = i || n || o || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        x ? o.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            E.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const S = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                v = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                k = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                w = "224.5%",
                P = { width: w, height: w };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => r, ZP: () => i });
            var o = n(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends o.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const i = new a();
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Articles-bc6ccf4c.93d3850a.js.map
