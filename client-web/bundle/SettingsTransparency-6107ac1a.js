"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsTransparency-6107ac1a"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => u });
            var n = o(202784),
                i = o(614983),
                r = o.n(i),
                s = o(325686),
                a = o(370006),
                l = o(786998),
                c = o(929028),
                d = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class u extends n.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: i, hideBackButton: r, isFullWidth: s, isLarge: c, leftControl: d, middleControl: u, position: h, rightControl: m, secondaryBar: g, style: b, subtitle: f, title: y, titleDomId: C, titleIconCell: x, titleIconCellSize: k, withBackground: S, withWideContainer: v } = this.props,
                        { isModal: w } = this.context,
                        B = r ? d : n.createElement(a.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!S, w, !!g);
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: s, isLarge: c, leftControl: B, middleControl: u, position: p(h, w, i), rightControl: m, style: b, subtitle: f, title: y, titleDomId: C, titleIconCell: x, titleIconCellSize: k, withBackground: Z, withWideContainer: v }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(s.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = d.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        947135: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                i = o(242454),
                r = o(190286);
            class s extends n.Component {
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
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: o, confirmationSheetConfirmButtonType: s, confirmationSheetHeadline: a, confirmationSheetText: l, label: c } = this.props;
                    return n.createElement(n.Fragment, null, n.createElement(i.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? n.createElement(r.Z, { confirmButtonLabel: o, confirmButtonType: s, headline: a, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: l }) : null);
                }
            }
            s.defaultProps = { color: "red500", align: "center" };
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                i = o(202784),
                r = o(107267),
                s = o(403556),
                a = o(791632);
            const l = (e) => {
                    const t = (0, r.useHistory)(),
                        { isCompact: o, ...l } = e;
                    return i.createElement(s.Z, (0, n.Z)({}, l, { isCompact: o || (0, a.HD)(t) }));
                },
                c = i.memo(l);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                i = o(500002),
                r = o(668214),
                s = o(997174),
                a = o(118823);
            const l = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: s.NH }))
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
                            location: { pathname: r, search: s },
                            locationKey: a,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = i || a;
                    ((c && i !== a) || (!c && o !== r) || n !== s || l) && this._performPageUpdates(this.props);
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
                s = o(731708),
                a = o(58881),
                l = o(530732),
                c = o(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                p = ({ align: e = "center", color: t, label: o, ...p }) => {
                    const u = a.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return i.createElement(r.Z, { style: d.container }, i.createElement(l.Z, (0, n.Z)({}, p, { interactiveStyles: u, style: d.root }), i.createElement(s.ZP, { align: e, color: t }, o)));
                };
        },
        779610: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                i = o(325686),
                r = o(191796),
                s = o(58399),
                a = o(731708),
                l = o(952428),
                c = o(392237);
            const d = (e) => {
                    const { decoration: t, description: o, disabled: d = !1, isActive: u = !1, label: h, link: m, onPress: g, paddingHorizontal: b, renderRightContent: f, role: y = "tab", styleOverride: C, testID: x = "pivot", thumbnail: k, thumbnailSize: S, withoutArrow: v = !1 } = e,
                        w = [p.thumbnailContainer, "medium" === S && p.thumbnailContainerMedium],
                        B = "string" == typeof h ? n.createElement(a.ZP, null, h) : h,
                        Z = "object" == typeof m && m.external && !m.openInSameFrame,
                        _ = o ? ("string" == typeof o ? n.createElement(a.ZP, { color: "gray700", size: "subtext2", testID: `${x}-description` }, o) : o) : null,
                        P = n.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return n.createElement(l.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : m, onPress: g, role: y, style: [p.root, P, d && p.disabled, C], testID: x, withInteractiveStyling: !!m || !!g }, n.createElement(i.Z, { style: p.contentContainer }, k ? n.createElement(i.Z, { style: w }, k) : null, n.createElement(i.Z, { style: p.content }, B, _), f ? f() : null, (!m && !g) || d || v ? null : Z ? n.createElement(r.default, { style: p.icon }) : n.createElement(s.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        943401: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                i = o(731708),
                r = o(392237);
            class s extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return n.createElement(i.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: o } = this.props,
                        r = a.root;
                    return t && o ? n.createElement(i.ZP, { color: "gray700", size: "subtext2", style: r }, e, " ", this._renderLearnMore()) : n.createElement(i.ZP, { color: "gray700", size: "subtext2", style: r }, e);
                }
            }
            const a = r.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                l = s;
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => B });
            var n = o(807896),
                i = o(202784),
                r = o(194504),
                s = o(235902),
                a = o(392237),
                l = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                u = o(516951),
                h = o(731708),
                m = o(310088),
                g = o(175993),
                b = o(58881),
                f = o(530732);
            const y = d().d2414d31,
                C = () => d().ce4e85ae,
                x = d().fb9f6f39;
            class k extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: n, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: n, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, n) => {
                            const i = a.default.theme.colors.text,
                                r = a.default.theme.colors.gray700;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: n, children: r, color: s, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: k, style: v, to: w } = this.props,
                        { location: B } = this.state,
                        Z = w ? this._getMemoizedLink(w, k) : void 0,
                        _ = c ? c(w) : B?.pathname === Z?.pathname,
                        P = b.Z.generate({ backgroundColor: "transparent", color: a.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? S.pillHoverStyle.backgroundColor : void 0 }),
                        E = g ? "medium" : _ ? "bold" : "medium";
                    return i.createElement(f.Z, { "aria-label": t, "aria-selected": _, focusable: !!_, interactiveStyles: P, link: Z, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [S.pillStyle] : [S.link]), ...(p && _ ? [S.pillActiveStyle] : []), d ? (p ? S.compactPill : S.compactLink) : null, u ? S.roundedRect : null, v], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => i.createElement(l.Z, { style: p && S.flexGrow }, i.createElement(h.ZP, { size: g ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(_, c, g, p) }, d && S.compactText, g && t && S.focusedText, p && S.pillTextStyle, p && _ && S.pillActiveTextStyle, p && c && S.pillHoverTextStyle], weight: E }, e && i.createElement(e, { style: S.icon }), r, g || p ? null : i.createElement(l.Z, { style: _ && [S.border, { backgroundColor: a.default.theme.colors[s] }] })), o ? i.createElement(m.Z, { count: o, standalone: !0, style: [S.badge, o >= 10 && S.multiDigitBadge, o >= 20 && S.truncatedCountBadge], truncatedCountFormatter: x, unreadCountLabel: y, withBorder: !1 }) : n ? i.createElement(m.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (k.contextType = g.Z), (k.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const S = a.default.create((e) => ({
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
                v = k,
                w = a.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                B = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: a, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = s.ZP.useProps(),
                        m = h() && !a,
                        g = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: r, ...s }, c) => {
                                    const d = m ? [w.linkRedesign, 0 === c && w.firstLinkRedesign, e && 0 === c && w.withNoPaddingStart] : void 0;
                                    return i.createElement(v, (0, n.Z)({ viewType: r }, s, { isCompact: o, isPillLink: a, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, a, l, m, c],
                        );
                    return i.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: a && w.gap, childrenStyle: !m && w.flexGrow, key: u, style: [a ? null : w.segmentedControl, m && w.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsTransparency-6107ac1a.7eae57aa.js.map
