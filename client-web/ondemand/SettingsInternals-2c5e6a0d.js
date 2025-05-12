"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-2c5e6a0d"],
    {
        362075: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(807896),
                r = o(202784),
                a = o(325686),
                i = o(688715),
                s = o(950822),
                l = o(386802),
                c = o(392237);
            class d extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = r.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: o } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return o ? o(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let n;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    n = JSON.parse(e.data);
                                } catch (t) {
                                    return void (o && o(`Invalid postMessage data from ${e.origin}: ${e.data}`));
                                }
                                t(n);
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
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: o, dangerouslyDisableSandbox: n, src: l, style: c, title: d } = this.props,
                        { isModal: p } = this.context,
                        h = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        m = (0, s.Z)("iframe", { allow: `${h.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, i.ju)(l), style: u.iframe, title: d, ...(n ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${o ? " allow-top-navigation" : ""}` }) });
                    return r.createElement(a.Z, { style: p ? [u.root, u.modalPadding, c] : [u.root, c] }, m);
                }
            }
            d.contextType = l.t;
            const u = c.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                p = r.forwardRef((e, t) => r.createElement(d, (0, n.Z)({ forwardedRef: t }, e)));
        },
        941978: (e, t, o) => {
            o.d(t, { C: () => n });
            class n {
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
                    const o = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = o), this._cache[e];
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
            new n();
        },
        491915: (e, t, o) => {
            o.d(t, { ZP: () => f });
            o(571372);
            var n = o(202784),
                r = o(325686),
                a = o(392237),
                i = o(674132),
                s = o.n(i),
                l = o(643442),
                c = o(466445),
                d = o(731708),
                u = o(154003),
                p = o(173739);
            const h = s().jcf3e7a2;
            function m({ animation: e, autoplay: t }) {
                const [o, a] = n.useState(t),
                    [i, s] = n.useState(0);
                return (
                    n.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && s(Math.round(e.currentTime));
                        });
                    }, [e]),
                    n.createElement(
                        r.Z,
                        { style: g.container },
                        n.createElement(u.ZP, {
                            "aria-label": o ? "Pause" : "Play",
                            icon: o ? n.createElement(l.default, null) : n.createElement(c.default, null),
                            onClick: function () {
                                o ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        n.createElement(d.ZP, { style: g.frames }, `${i}/${e.totalFrames}`),
                        n.createElement(
                            r.Z,
                            { style: g.slider },
                            n.createElement(p.Z, {
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
                const { autoplay: t = !0, loop: o = !1, onAnimationEnd: a, onAnimationStart: i, onError: s, withControls: l } = e,
                    c = n.useRef(void 0),
                    d = n.useRef({ animationLoaded: !1 }),
                    u = n.useRef(null),
                    [p, h] = n.useState(!1);
                return (
                    n.useEffect(() => {
                        function n(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = d.current;
                        r ||
                            ((d.current.animationLoaded = !0),
                            b.load().then((r) => {
                                if (r && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: o, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        l = r.loadAnimation(a);
                                    (c.current = l),
                                        (l.onError = (e) => {
                                            const t = new y(e);
                                            "function" == typeof s && s(t), n(l, t);
                                        }),
                                        l.addEventListener("DOMLoaded", () => {
                                            h(!0), t && (l.play(), i && i());
                                        }),
                                        l.addEventListener("complete", () => {
                                            n(l);
                                        });
                                }
                            }));
                    }, [e.animation, t, o, a, i, s, l]),
                    n.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    n.createElement(r.Z, null, n.createElement(r.Z, { style: [e.animationContainerStyle, C.centerAnimation] }, n.createElement("div", { ref: u, style: e.animationStyle }), l && c.current && p && n.createElement(m, { animation: c.current, autoplay: t })))
                );
            }
            f.Prepare = function () {
                return (
                    n.useEffect(() => {
                        b.load();
                    }, []),
                    null
                );
            };
            const b = { load: () => o.e("ondemand.LottieWeb").then(o.t.bind(o, 548888, 23)) };
            class y extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, y), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const C = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(674132),
                a = o.n(r),
                i = o(149170),
                s = o(40644);
            const l = a().gaeb997e;
            const c = function ({ activeColor: e, label: t = l, Icon: o = i.default, iconSize: r = "normal", isDisabled: a, onClick: c, preventFocusShift: d, renderActionMenu: u, style: p, testID: h, withDarkBackground: m = !1 }) {
                const g = n.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    f = n.useMemo(() => ({ label: t }), [t]);
                return n.createElement(s.ZP, { Icon: o, activeColor: e || (m ? "white" : void 0), "aria-label": t, backgroundColor: m ? "translucentBlack77" : "transparent", color: m ? "white" : "gray700", hoverLabel: f, iconSize: r, isDisabled: a, onPress: g, preventFocusShift: d, renderMenu: u, style: p, testID: h });
            };
        },
        88307: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(325686),
                a = o(731708),
                i = o(392237);
            class s extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return n.createElement(a.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return t && e ? n.createElement(a.ZP, { link: t, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: t, learnMoreLink: o, subtext: i, withBottomBorder: s } = this.props;
                    return n.createElement(r.Z, { style: [l.root, s && l.bottomBorder] }, n.createElement(a.ZP, null, e), i ? (t && o ? this._renderSubtextAndLink() : n.createElement(a.ZP, { color: "gray700", size: "subtext2" }, i)) : null);
                }
            }
            s.defaultProps = { withBottomBorder: !0 };
            const l = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                c = s;
        },
        80512: (e, t, o) => {
            o.d(t, { Z: () => u });
            var n = o(202784),
                r = o(325686),
                a = o(815858),
                i = o(731708),
                s = o(449479),
                l = o(392237),
                c = o(451566);
            let d = 1;
            class u extends n.Component {
                constructor() {
                    super(),
                        (this._handleGateToggle = () => {
                            const { defaultOption: e, name: t, offValue: o, onChange: n, options: r, value: a } = this.props;
                            n(t, a === o ? e?.value || r[0].value : o);
                        }),
                        (this._handleAnimationComplete = () => {
                            this._radioGroupRef && this._radioGroupRef.focus();
                        }),
                        (this._setRadioGroupRef = (e) => {
                            this._radioGroupRef = e;
                        }),
                        (this._labelId = `RADIO_GROUP_${d}_LABEL`),
                        (d += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: o, label: l, name: d, offValue: u, onChange: h, options: m, value: g } = this.props;
                    return n.createElement(r.Z, { "aria-label": e, "aria-labelledby": l && !e ? this._labelId : void 0, role: "group", style: [p.root, o && p.disabled] }, n.createElement(n.Fragment, null, l ? n.createElement(r.Z, { id: this._labelId, role: "label", style: p.header }, n.createElement(r.Z, { style: p.label }, n.createElement(i.ZP, { weight: "bold" }, l), n.createElement(c.Z, { disabled: o, onValueChange: this._handleGateToggle, value: g !== u })), t ? n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, m && n.createElement(a.Z, { onAnimateComplete: this._handleAnimationComplete, show: g !== u }, n.createElement(r.Z, null, n.createElement(r.Z, { style: p.radioGroup, tabIndex: 0 }, n.createElement(s.Z, { "aria-label": e || l, disabled: o, name: d, onChange: h, options: m, ref: this._setRadioGroupRef, value: g }))))));
                }
            }
            u.defaultProps = { disabled: !1 };
            const p = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => _ });
            var n = o(807896),
                r = o(202784),
                a = o(194504),
                i = o(235902),
                s = o(392237),
                l = o(325686),
                c = o(674132),
                d = o.n(c),
                u = o(912021),
                p = o(516951),
                h = o(731708),
                m = o(310088),
                g = o(175993),
                f = o(58881),
                b = o(530732);
            const y = d().d2414d31,
                C = () => d().ce4e85ae,
                w = d().fb9f6f39;
            class v extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: o, query: n, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: n, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, n) => {
                            const r = s.default.theme.colors.text,
                                a = s.default.theme.colors.gray700;
                            return o || n ? (e || t ? r : a) : e ? r : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: n, children: a, color: i, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: v, style: E, to: k } = this.props,
                        { location: _ } = this.state,
                        S = k ? this._getMemoizedLink(k, v) : void 0,
                        P = c ? c(k) : _?.pathname === S?.pathname,
                        Z = f.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        B = g ? "medium" : P ? "bold" : "medium";
                    return r.createElement(b.Z, { "aria-label": t, "aria-selected": P, focusable: !!P, interactiveStyles: Z, link: S, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? x.pill : x.link, u && P ? x.active : null, d ? (u ? x.compactPill : x.compactLink) : null, p ? x.roundedRect : null, E], withoutInteractiveStyles: g || u }, ({ isFocused: t, isHovered: c }) => r.createElement(l.Z, { style: u && x.flexGrow }, r.createElement(h.ZP, { size: g ? "headline2" : void 0, style: [x.text, { color: this._getTextColor(P, c, g, u) }, d && x.compactText, g && t && x.focusedText], weight: B }, e && r.createElement(e, { style: x.icon }), a, g || u ? null : r.createElement(l.Z, { style: P && [x.border, { backgroundColor: s.default.theme.colors[i] }] })), o ? r.createElement(m.Z, { count: o, standalone: !0, style: [x.badge, o >= 10 && x.multiDigitBadge, o >= 20 && x.truncatedCountBadge], truncatedCountFormatter: w, unreadCountLabel: y, withBorder: !1 }) : n ? r.createElement(m.Z, { pip: !0, standalone: !0, style: x.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (v.contextType = g.Z), (v.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const x = s.default.create((e) => ({
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
                E = v,
                k = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                _ = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: s, isRoundedRect: l, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = i.ZP.useProps(),
                        m = h() && !s,
                        g = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...i }, c) => {
                                    const d = m ? [k.linkRedesign, 0 === c && k.firstLinkRedesign, e && 0 === c && k.withNoPaddingStart] : void 0;
                                    return r.createElement(E, (0, n.Z)({ viewType: a }, i, { isCompact: o, isPillLink: s, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, s, l, m, c],
                        );
                    return r.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: s && k.gap, childrenStyle: !m && k.flexGrow, key: p, style: [s ? null : k.segmentedControl, m && k.leftAligned, d], visibleItemIndex: u }, g);
                };
        },
        40644: (e, t, o) => {
            o.d(t, { ZP: () => v });
            var n = o(202784),
                r = o(325686),
                a = o(461756),
                i = o(731708),
                s = o(58881),
                l = o(530732),
                c = o(224162),
                d = o(491915),
                u = o(392237),
                p = o(551611),
                h = o(674132),
                m = o.n(h),
                g = o(891198),
                f = o(537392),
                b = o(280278);
            const y = m().e8d93005,
                C = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                w = ({ color: e, count: t }) => {
                    const o = (0, g.wl)(t, !0);
                    return n.createElement(f.ZP, null, ({ containerWidth: r }) => {
                        return n.createElement(b.ZP, { color: e, count: t, size: "subtext2", style: [C.count, ((a = r), a < u.default.theme.breakpoints.small && C.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || o.length >= 5 ? y(t) : o) : void 0);
                        var a;
                    });
                };
            class v extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: o, color: a, decoration: s } = this.props;
                            return n.createElement(c.ZP.Consumer, null, ({ direction: l }) => n.createElement(i.ZP, { color: e ? o : a, dir: l, style: [k.inner, e && "blue500" === o && k.blue500] }, n.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), s, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: o, hoverLabel: r, iconSize: a, isActive: i, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                p = s.Z.generate({ backgroundColor: u.default.theme.colors[o], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                h = d && i && !e?.isHovered;
                            return n.createElement(l.Z, { hoverLabel: r, interactiveStyles: p, interactivityState: e, style: [u.default.absoluteFill, E[h ? "haloBackground" : o], !c && k.iconBackground, "small" === a && k.iconSmallBoundingBox, h && k.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: o, isDisabled: r, isFaded: i, onAnimationEnd: s, onAnimationStart: l, onError: c, showAnimation: h, transitionAnimationUrl: m } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && h) return n.createElement(d.ZP, { animation: m || p.Bf, animationContainerStyle: x[t], animationStyle: S, onAnimationEnd: s, onAnimationStart: l, onError: c });
                            {
                                const a = o && e ? e : this.props.Icon;
                                return n.createElement(a, { style: [x[t], !r && i && k.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? n.createElement(w, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: o } = this.props;
                            o || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: o, isActive: i, isDisabled: s, isPresentational: c, keyboardShortcut: p, link: h, preventFocusShift: m, renderMenu: g, renderWrapper: f = n.Fragment, style: b, testID: y } = this.props,
                        C = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return n.createElement(
                        r.Z,
                        { style: [k.root, b] },
                        n.createElement(
                            f,
                            null,
                            c
                                ? this._renderContent(i)
                                : n.createElement(l.Z, { "aria-haspopup": g ? "menu" : void 0, "aria-label": e, disabled: s, enableKeyboardShortcuts: o, focusable: t, interactiveStyles: null, keyboardShortcut: p, link: h, onClick: this._handlePress, preventFocusShift: m, renderMenu: g, style: [k.triggerAreaRoot, k.outlineNone], testID: y }, (e) => {
                                      const { isFocused: t, isHovered: o, isPressed: n } = e,
                                          r = i || o || n || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        C ? n.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            v.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const x = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                E = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                k = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                _ = "224.5%",
                S = { width: _, height: _ };
        },
        551611: (e, t, o) => {
            o.d(t, { Bf: () => r, ZP: () => i });
            var n = o(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends n.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const i = new a();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-2c5e6a0d.37f9576a.js.map
