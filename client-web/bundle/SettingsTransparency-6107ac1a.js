"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsTransparency-6107ac1a"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var n = o(202784),
                i = o(614983),
                r = o.n(i),
                a = o(325686),
                s = o(370006),
                l = o(786998),
                c = o(929028),
                d = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            r()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: i, hideBackButton: r, isFullWidth: a, isLarge: c, leftControl: d, middleControl: h, position: u, rightControl: m, secondaryBar: g, style: b, subtitle: f, title: C, titleDomId: y, titleIconCell: k, titleIconCellSize: x, withBackground: w, withWideContainer: B } = this.props,
                        { isModal: Z } = this.context,
                        S = r ? d : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        _ = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!w, Z, !!g);
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: c, leftControl: S, middleControl: h, position: p(u, Z, i), rightControl: m, style: b, subtitle: f, title: C, titleDomId: y, titleIconCell: k, titleIconCellSize: x, withBackground: _, withWideContainer: B }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(a.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        947135: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(202784),
                i = o(242454),
                r = o(190286);
            class a extends n.Component {
                constructor(e) {
                    super(e),
                        (this._handleClick = (e) => {
                            this.setState({ showConfirmation: !0 });
                        }),
                        (this._handleCancel = () => {
                            this.setState({ showConfirmation: !1 });
                        }),
                        (this._handleConfirm = () => {
                            this.setState({ showConfirmation: !1 }), this.props.onConfirmationSheetConfirm();
                        }),
                        (this.state = { showConfirmation: !1 });
                }
                render() {
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: o, confirmationSheetConfirmButtonType: a, confirmationSheetHeadline: s, confirmationSheetText: l, label: c } = this.props;
                    return n.createElement(n.Fragment, null, n.createElement(i.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? n.createElement(r.Z, { confirmButtonLabel: o, confirmButtonType: a, headline: s, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: l }) : null);
                }
            }
            a.defaultProps = { color: "red500", align: "center" };
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                i = o(202784),
                r = o(107267),
                a = o(403556),
                s = o(791632);
            const l = (e) => {
                    const t = (0, r.useHistory)();
                    return i.createElement(a.Z, (0, n.Z)({}, e, { isCompact: (0, s.HD)(t) }));
                },
                c = i.memo(l);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                i = o(500002),
                r = o(668214),
                a = o(997174),
                s = o(118823);
            const l = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: i,
                        } = this.props,
                        {
                            location: { pathname: r, search: a },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = i || s;
                    ((c && i !== s) || (!c && o !== r) || n !== a || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, i.ZP)(l(c));
        },
        242454: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(807896),
                i = o(202784),
                r = o(325686),
                a = o(731708),
                s = o(58881),
                l = o(530732),
                c = o(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                p = ({ align: e = "center", color: t, label: o, ...p }) => {
                    const h = s.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return i.createElement(r.Z, { style: d.container }, i.createElement(l.Z, (0, n.Z)({}, p, { interactiveStyles: h, style: d.root }), i.createElement(a.ZP, { align: e, color: t }, o)));
                };
        },
        779610: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                i = o(325686),
                r = o(191796),
                a = o(58399),
                s = o(731708),
                l = o(952428),
                c = o(392237);
            const d = (e) => {
                    const { decoration: t, description: o, disabled: d = !1, isActive: h = !1, label: u, link: m, onPress: g, paddingHorizontal: b, renderRightContent: f, role: C = "tab", styleOverride: y, testID: k = "pivot", thumbnail: x, thumbnailSize: w, withoutArrow: B = !1 } = e,
                        Z = [p.thumbnailContainer, "medium" === w && p.thumbnailContainerMedium],
                        S = "string" == typeof u ? n.createElement(s.ZP, null, u) : u,
                        _ = "object" == typeof m && m.external && !m.openInSameFrame,
                        v = o ? ("string" == typeof o ? n.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: `${k}-description` }, o) : o) : null,
                        P = n.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return n.createElement(l.Z, { "aria-selected": "tab" === C ? h : null, disabled: d, link: d ? void 0 : m, onPress: g, role: C, style: [p.root, P, d && p.disabled, y], testID: k, withInteractiveStyling: !!m || !!g }, n.createElement(i.Z, { style: p.contentContainer }, x ? n.createElement(i.Z, { style: Z }, x) : null, n.createElement(i.Z, { style: p.content }, S, v), f ? f() : null, (!m && !g) || d || B ? null : _ ? n.createElement(r.default, { style: p.icon }) : n.createElement(a.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        943401: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                i = o(731708),
                r = o(392237);
            class a extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return n.createElement(i.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: o } = this.props,
                        r = s.root;
                    return t && o ? n.createElement(i.ZP, { color: "gray700", size: "subtext2", style: r }, e, " ", this._renderLearnMore()) : n.createElement(i.ZP, { color: "gray700", size: "subtext2", style: r }, e);
                }
            }
            const s = r.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                l = a;
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => S });
            var n = o(807896),
                i = o(202784),
                r = o(194504),
                a = o(235902),
                s = o(392237),
                l = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                h = o(516951),
                u = o(731708),
                m = o(310088),
                g = o(175993),
                b = o(58881),
                f = o(530732);
            const C = d().d2414d31,
                y = () => d().ce4e85ae,
                k = d().fb9f6f39;
            class x extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: n, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: n, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = h.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, n) => {
                            const i = s.default.theme.colors.text,
                                r = s.default.theme.colors.gray700;
                            return o || n ? (e || t ? i : r) : e ? i : r;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: n, children: r, color: a, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: h, isWebRedesign: g, retainScrollPosition: x, style: B, to: Z } = this.props,
                        { location: S } = this.state,
                        _ = Z ? this._getMemoizedLink(Z, x) : void 0,
                        v = c ? c(Z) : S?.pathname === _?.pathname,
                        P = b.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        E = g ? "medium" : v ? "bold" : "medium";
                    return i.createElement(f.Z, { "aria-label": t, "aria-selected": v, focusable: !!v, interactiveStyles: P, link: _, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? w.pill : w.link, p && v ? w.active : null, d ? (p ? w.compactPill : w.compactLink) : null, h ? w.roundedRect : null, B], withoutInteractiveStyles: g || p }, ({ isFocused: t, isHovered: c }) => i.createElement(l.Z, { style: p && w.flexGrow }, i.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(v, c, g, p) }, d && w.compactText, g && t && w.focusedText], weight: E }, e && i.createElement(e, { style: w.icon }), r, g || p ? null : i.createElement(l.Z, { style: v && [w.border, { backgroundColor: s.default.theme.colors[a] }] })), o ? i.createElement(m.Z, { count: o, standalone: !0, style: [w.badge, o >= 10 && w.multiDigitBadge, o >= 20 && w.truncatedCountBadge], truncatedCountFormatter: k, unreadCountLabel: C, withBorder: !1 }) : n ? i.createElement(m.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: y, withBorder: !1 }) : null));
                }
            }
            (x.contextType = g.Z), (x.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const w = s.default.create((e) => ({
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
                B = x,
                Z = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                S = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: s, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const h = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = a.ZP.useProps(),
                        m = u() && !s,
                        g = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: r, ...a }, c) => {
                                    const d = m ? [Z.linkRedesign, 0 === c && Z.firstLinkRedesign, e && 0 === c && Z.withNoPaddingStart] : void 0;
                                    return i.createElement(B, (0, n.Z)({ viewType: r }, a, { isCompact: o, isPillLink: s, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, s, l, m, c],
                        );
                    return i.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: s && Z.gap, childrenStyle: !m && Z.flexGrow, key: h, style: [s ? null : Z.segmentedControl, m && Z.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsTransparency-6107ac1a.b8c94b6a.js.map
