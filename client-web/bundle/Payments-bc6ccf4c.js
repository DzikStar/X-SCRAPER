"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-bc6ccf4c", "icons/IconExiting-js", "icons/IconInstitutionStroke-js"],
    {
        661810: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                r = n(325686),
                a = n(392237);
            function i({ spacing: e, style: t }) {
                return o.createElement(r.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        362075: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(807896),
                r = n(202784),
                a = n(325686),
                i = n(688715),
                l = n(950822),
                s = n(386802),
                c = n(392237);
            class d extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = r.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: n } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return n ? n(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let o;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    o = JSON.parse(e.data);
                                } catch (t) {
                                    return void (n && n(`Invalid postMessage data from ${e.origin}: ${e.data}`));
                                }
                                t(o);
                            }
                        });
                }
                componentDidMount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.addEventListener("message", e, !1));
                }
                componentWillUnmount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.removeEventListener("message", e, !1));
                }
                render() {
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: n, dangerouslyDisableSandbox: o, src: s, style: c, title: d } = this.props,
                        { isModal: p } = this.context,
                        h = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        m = (0, l.Z)("iframe", { allow: `${h.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, i.ju)(s), style: u.iframe, title: d, ...(o ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${n ? " allow-top-navigation" : ""}` }) });
                    return r.createElement(a.Z, { style: p ? [u.root, u.modalPadding, c] : [u.root, c] }, m);
                }
            }
            d.contextType = s.t;
            const u = c.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                p = r.forwardRef((e, t) => r.createElement(d, (0, o.Z)({ forwardedRef: t }, e)));
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
                l = n.n(i),
                s = n(643442),
                c = n(466445),
                d = n(731708),
                u = n(154003),
                p = n(173739);
            const h = l().jcf3e7a2;
            function m({ animation: e, autoplay: t }) {
                const [n, a] = o.useState(t),
                    [i, l] = o.useState(0);
                return (
                    o.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && l(Math.round(e.currentTime));
                        });
                    }, [e]),
                    o.createElement(
                        r.Z,
                        { style: g.container },
                        o.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? o.createElement(s.default, null) : o.createElement(c.default, null),
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
            const g = a.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function f(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: i, onError: l, withControls: s } = e,
                    c = o.useRef(void 0),
                    d = o.useRef({ animationLoaded: !1 }),
                    u = o.useRef(null),
                    [p, h] = o.useState(!1);
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
                                        s = r.loadAnimation(a);
                                    (c.current = s),
                                        (s.onError = (e) => {
                                            const t = new y(e);
                                            "function" == typeof l && l(t), o(s, t);
                                        }),
                                        s.addEventListener("DOMLoaded", () => {
                                            h(!0), t && (s.play(), i && i());
                                        }),
                                        s.addEventListener("complete", () => {
                                            o(s);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, a, i, l, s]),
                    o.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    o.createElement(r.Z, null, o.createElement(r.Z, { style: [e.animationContainerStyle, v.centerAnimation] }, o.createElement("div", { ref: u, style: e.animationStyle }), s && c.current && p && o.createElement(m, { animation: c.current, autoplay: t })))
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
            const v = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(111677),
                a = n.n(r),
                i = n(149170),
                l = n(40644);
            const s = a().gaeb997e;
            const c = function ({ activeColor: e, label: t = s, Icon: n = i.default, iconSize: r = "normal", isDisabled: a, onClick: c, preventFocusShift: d, renderActionMenu: u, style: p, testID: h, withDarkBackground: m = !1 }) {
                const g = o.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    f = o.useMemo(() => ({ label: t }), [t]);
                return o.createElement(l.ZP, { Icon: n, activeColor: e || (m ? "white" : void 0), "aria-label": t, backgroundColor: m ? "translucentBlack77" : "transparent", color: m ? "white" : "gray700", hoverLabel: f, iconSize: r, isDisabled: a, onPress: g, preventFocusShift: d, renderMenu: u, style: p, testID: h });
            };
        },
        779610: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(325686),
                a = n(191796),
                i = n(58399),
                l = n(731708),
                s = n(952428),
                c = n(392237);
            const d = (e) => {
                    const { decoration: t, description: n, disabled: d = !1, isActive: p = !1, label: h, link: m, onPress: g, paddingHorizontal: f, renderRightContent: b, role: y = "tab", styleOverride: v, testID: C = "pivot", thumbnail: w, thumbnailSize: x, withoutArrow: S = !1 } = e,
                        E = [u.thumbnailContainer, "medium" === x && u.thumbnailContainerMedium],
                        k = "string" == typeof h ? o.createElement(l.ZP, null, h) : h,
                        Z = "object" == typeof m && m.external && !m.openInSameFrame,
                        P = n ? ("string" == typeof n ? o.createElement(l.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, n) : n) : null,
                        R = o.useMemo(() => ("space0" === f ? { paddingHorizontal: 0 } : { paddingHorizontal: f ? c.default.theme.spaces[f] : c.default.theme.componentDimensions.gutterHorizontal }), [f]);
                    return o.createElement(s.Z, { "aria-selected": "tab" === y ? p : null, disabled: d, link: d ? void 0 : m, onPress: g, role: y, style: [u.root, R, d && u.disabled, v], testID: C, withInteractiveStyling: !!m || !!g }, o.createElement(r.Z, { style: u.contentContainer }, w ? o.createElement(r.Z, { style: E }, w) : null, o.createElement(r.Z, { style: u.content }, k, P), b ? b() : null, (!m && !g) || d || S ? null : Z ? o.createElement(a.default, { style: u.icon }) : o.createElement(i.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var o = n(202784),
                r = n(325686),
                a = n(827515),
                i = n(461756),
                l = n(731708),
                s = n(392237);
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
            const h = { position: "absolute" },
                m = s.default.create({ root: { overflow: "hidden" } }),
                g = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
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
                                s = { ...h, ...(g.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return o.createElement(
                                r.Z,
                                { style: [m.root, n] },
                                t ? o.createElement("span", { style: s }, o.createElement(l.ZP, d, g.oldText)) : null,
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
                                    o.createElement(l.ZP, d, g.text),
                                ),
                            );
                        }, [n, d, g, b, f])
                    );
                };
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => k });
            var o = n(807896),
                r = n(202784),
                a = n(194504),
                i = n(235902),
                l = n(392237),
                s = n(325686),
                c = n(111677),
                d = n.n(c),
                u = n(912021),
                p = n(516951),
                h = n(731708),
                m = n(310088),
                g = n(175993),
                f = n(58881),
                b = n(530732);
            const y = d().d2414d31,
                v = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class w extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: n, query: o, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: o, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, o) => {
                            const r = l.default.theme.colors.text,
                                a = l.default.theme.colors.gray700;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: o, children: a, color: i, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: w, style: S, to: E } = this.props,
                        { location: k } = this.state,
                        Z = E ? this._getMemoizedLink(E, w) : void 0,
                        P = c ? c(E) : k?.pathname === Z?.pathname,
                        R = f.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? x.pillHoverStyle.backgroundColor : void 0 }),
                        _ = g ? "medium" : P ? "bold" : "medium";
                    return r.createElement(b.Z, { "aria-label": t, "aria-selected": P, focusable: !!P, interactiveStyles: R, link: Z, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [x.pillStyle] : [x.link]), ...(u && P ? [x.pillActiveStyle] : []), d ? (u ? x.compactPill : x.compactLink) : null, p ? x.roundedRect : null, S], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => r.createElement(s.Z, { style: u && x.flexGrow }, r.createElement(h.ZP, { size: g ? "headline2" : void 0, style: [x.text, { color: this._getTextColor(P, c, g, u) }, d && x.compactText, g && t && x.focusedText, u && x.pillTextStyle, u && P && x.pillActiveTextStyle, u && c && x.pillHoverTextStyle], weight: _ }, e && r.createElement(e, { style: x.icon }), a, g || u ? null : r.createElement(s.Z, { style: P && [x.border, { backgroundColor: l.default.theme.colors[i] }] })), n ? r.createElement(m.Z, { count: n, standalone: !0, style: [x.badge, n >= 10 && x.multiDigitBadge, n >= 20 && x.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : o ? r.createElement(m.Z, { pip: !0, standalone: !0, style: x.badgePip, textColor: "red500", unreadCountLabel: v, withBorder: !1 }) : null));
                }
            }
            (w.contextType = g.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const x = l.default.create((e) => ({
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
                S = w,
                E = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = i.ZP.useProps(),
                        m = h() && !l,
                        g = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...i }, c) => {
                                    const d = m ? [E.linkRedesign, 0 === c && E.firstLinkRedesign, e && 0 === c && E.withNoPaddingStart] : void 0;
                                    return r.createElement(S, (0, o.Z)({ viewType: a }, i, { isCompact: n, isPillLink: l, isRoundedRect: s, isWebRedesign: m, style: d }), t);
                                }),
                            [e, n, l, s, m, c],
                        );
                    return r.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: l && E.gap, childrenStyle: !m && E.flexGrow, key: p, style: [l ? null : E.segmentedControl, m && E.leftAligned, d], visibleItemIndex: u }, g);
                };
        },
        165822: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(325686),
                a = n(58881),
                i = n(530732),
                l = n(392237);
            const s = l.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: n, interactiveStyles: c, isCompact: d, link: u, lower: p, onClick: h, stackLayoutLowerStyle: m, stackLayoutUpperStyle: g, upper: f, withInsetFocusRing: b = !0, withInteractiveStyling: y = !1 }) => {
                    const v = c ?? a.Z.generate({ backgroundColor: l.default.theme.colors.transparent, color: l.default.theme.colors.primary, insetFocusRing: b }),
                        C = o.createElement(o.Fragment, null, o.createElement(r.Z, { style: [s.defaultUpperContainerStyle, g, d && { height: "auto" }] }, f), p ? o.createElement(r.Z, { style: [s.defaultLowerContainerStyle, m] }, p) : null);
                    return o.createElement(i.Z, { "aria-label": e, disabled: n, interactive: y, interactiveStyles: y ? v : void 0, link: u, onClick: h, style: [s.root, t] }, C);
                };
        },
        953035: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(715417),
                a = n(167630),
                i = n(731708),
                l = n(392237),
                s = n(165822);
            const c = l.default.create((e) => {
                    const t = `calc(2 * ${e.spaces.space32})`;
                    return { upper: { height: t, justifyContent: "flex-end" }, lower: { height: t, justifyContent: "flex-start" }, container: { alignItems: "center" }, icon: { height: e.spaces.space32, width: e.spaces.space32 }, compact: { height: "auto", marginTop: e.spaces.space8 } };
                }),
                d = ({ containerStyle: e, icon: t = r.default, iconColor: n = "primary", link: d, onClick: u, text: p, isCompact: h, disabled: m, isLoading: g, withInteractiveStyling: f, interactiveStyles: b, textStyle: y }) => {
                    const v = o.useMemo(() => ({ color: l.default.theme.colors[n] }), [n]);
                    return o.createElement(s.Z, { "aria-label": p, containerStyle: [c.container, e], disabled: m, interactiveStyles: b, isCompact: h, link: d, lower: g ? o.createElement(a.Z, { size: "small" }) : o.createElement(i.ZP, { style: [y, v] }, p), onClick: u, stackLayoutLowerStyle: [c.lower, h ? c.compact : null], stackLayoutUpperStyle: c.upper, upper: o.createElement(t, { style: [c.icon, v] }), withInteractiveStyling: f });
                };
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => w });
            var o = n(202784),
                r = n(325686),
                a = n(461756),
                i = n(731708),
                l = n(58881),
                s = n(530732),
                c = n(224162),
                d = n(491915),
                u = n(392237),
                p = n(551611),
                h = n(111677),
                m = n.n(h),
                g = n(891198),
                f = n(537392),
                b = n(280278);
            const y = m().e8d93005,
                v = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                C = ({ color: e, count: t }) => {
                    const n = (0, g.wl)(t, !0);
                    return o.createElement(f.ZP, null, ({ containerWidth: r }) => {
                        return o.createElement(b.ZP, { color: e, count: t, size: "subtext2", style: [v.count, ((a = r), a < u.default.theme.breakpoints.small && v.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || n.length >= 5 ? y(t) : n) : void 0);
                        var a;
                    });
                };
            class w extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: a, decoration: l } = this.props;
                            return o.createElement(c.ZP.Consumer, null, ({ direction: s }) => o.createElement(i.ZP, { color: e ? n : a, dir: s, style: [E.inner, e && "blue500" === n && E.blue500] }, o.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), l, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: r, iconSize: a, isActive: i, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                p = l.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                h = d && i && !e?.isHovered;
                            return o.createElement(s.Z, { hoverLabel: r, interactiveStyles: p, interactivityState: e, style: [u.default.absoluteFill, S[h ? "haloBackground" : n], !c && E.iconBackground, "small" === a && E.iconSmallBoundingBox, h && E.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: r, isFaded: i, onAnimationEnd: l, onAnimationStart: s, onError: c, showAnimation: h, transitionAnimationUrl: m } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && h) return o.createElement(d.ZP, { animation: m || p.Bf, animationContainerStyle: x[t], animationStyle: Z, onAnimationEnd: l, onAnimationStart: s, onError: c });
                            {
                                const a = n && e ? e : this.props.Icon;
                                return o.createElement(a, { style: [x[t], !r && i && E.iconFaded] });
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
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: i, isDisabled: l, isPresentational: c, keyboardShortcut: p, link: h, preventFocusShift: m, renderMenu: g, renderWrapper: f = o.Fragment, style: b, testID: y } = this.props,
                        v = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return o.createElement(
                        r.Z,
                        { style: [E.root, b] },
                        o.createElement(
                            f,
                            null,
                            c
                                ? this._renderContent(i)
                                : o.createElement(s.Z, { "aria-haspopup": g ? "menu" : void 0, "aria-label": e, disabled: l, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: p, link: h, onClick: this._handlePress, preventFocusShift: m, renderMenu: g, style: [E.triggerAreaRoot, E.outlineNone], testID: y }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: o } = e,
                                          r = i || n || o || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        v ? o.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            w.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const x = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                S = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                E = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                k = "224.5%",
                Z = { width: k, height: k };
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
        183806: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        297896: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        286555: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { clipRule: "evenodd", d: "M2 9.5h20V5.618L12 1.5 2 5.618zm18-2.543V7.5H4v-.543l8-3.294z", fillRule: "evenodd" }), o.createElement("path", { d: "M4 10.25h2v9H4zm4.667 0h2v9h-2zm6.666 0h-2v9h2zm2.667 0h2v9h-2zM2 20v2h20v-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        452693: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        662678: (e, t, n) => {
            n.d(t, { G: () => r, Z: () => o });
            n(136728);
            const o = function (e, t) {
                return r(e, t);
            };
            function r(e, t) {
                return e.reduce(
                    (n, o, r) => {
                        const a = t ? t(o, r, e) : !!o;
                        return a && n[0].push(o), !a && n[1].push(o), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-bc6ccf4c.5a9c837a.js.map
