(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsTransparency-6107ac1a"],
    {
        242454: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => p });
            var r = o(807896),
                a = o(202784),
                s = o(325686),
                l = o(731708),
                i = o(58881),
                n = o(530732),
                c = o(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                p = ({ align: e = "center", color: t, label: o, ...p }) => {
                    const u = i.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return a.createElement(s.Z, { style: d.container }, a.createElement(n.Z, (0, r.Z)({}, p, { interactiveStyles: u, style: d.root }), a.createElement(l.ZP, { align: e, color: t }, o)));
                };
        },
        879113: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => h });
            var r = o(202784),
                a = o(476984),
                s = o.n(a),
                l = o(143778),
                i = o(750410),
                n = o(682830);
            const c = "failed",
                d = "loaded",
                p = "loading",
                u = "none";
            class h extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: a, icon: s, loadingMessage: l, onRequestRetry: d, render: h, renderFailure: g, retryMessage: m, retryable: b } = this.props;
                    switch (a) {
                        case c:
                            return b ? r.createElement(i.Z, { icon: s, onRequestRetry: d, retryMessage: m }) : o ? r.createElement(n.m, { failureMessage: o }) : g();
                        case p:
                            return r.createElement(n.J, { "aria-label": e, color: t, loadingMessage: l });
                        case u:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: l.Z, retryable: !0 };
        },
        449479: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => y });
            var r = o(202784),
                a = o(325686),
                s = o(913973),
                l = o(731708),
                i = o(950822),
                n = o(466792),
                c = o(58881),
                d = o(530732),
                p = o(352924),
                u = o(392237);
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, p.F)()),
                        (this.descriptionId = (0, p.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: o } = this.props;
                            o && !t && o(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: o, disabled: p, helpText: h, label: m, name: b, testID: f } = this.props,
                        y = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        x = o ? y : C;
                    return r.createElement(n.Z, { disabled: p }, (n) => r.createElement(a.Z, { role: "label", style: [g.root, !p && g.interactive], testID: f }, r.createElement(a.Z, { style: g.topContainer }, r.createElement(l.ZP, { id: this.labelId }, m), r.createElement(a.Z, { style: g.radioContainer }, r.createElement(d.Z, { interactiveStyles: x, interactivityState: n, style: g.radioBackground }, r.createElement(a.Z, { style: [g.circle, o && g.circleActive, p && g.circleDisabled, o && p && g.circleCheckedAndDisabled] }, o ? r.createElement(s.default, { style: g.checkMark }) : null)), (0, i.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: o, disabled: p, name: b, onChange: this._handleChange, ref: this._setRef, style: [g.nativeControl], type: "radio" }))), h ? r.createElement(l.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: g.helpText }, h) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            h.defaultProps = { disabled: !1, checked: !1 };
            const g = u.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                m = h,
                b = "radioGroup";
            let f = 1;
            class y extends r.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: o } = this.props;
                            o(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (o) => {
                            (this._radioRefs[e] = o), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${f}_LABEL`),
                        (f += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: o, label: s, name: i, options: n, value: c } = this.props;
                    return r.createElement(
                        a.Z,
                        { "aria-label": e, "aria-labelledby": s && !e ? this._labelId : void 0, role: "radiogroup", style: o && C.disabled, testID: `${b}${i}` },
                        s ? r.createElement(a.Z, { id: this._labelId, role: "label", style: C.header }, r.createElement(l.ZP, { style: C.label, weight: "bold" }, s), t ? r.createElement(l.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        n.map((e, t) => r.createElement(m, { "aria-posinset": t + 1, "aria-setsize": n.length, checked: e.value === c, disabled: o, helpText: e.helpText, key: e.value, label: e.label, name: i, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = u.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        101890: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => i });
            var r = o(202784),
                a = o(325686),
                s = o(449479),
                l = o(392237);
            const i = (e) => r.createElement(a.Z, { style: n.root }, r.createElement(s.Z, e)),
                n = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        403556: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => Z });
            var r = o(807896),
                a = o(202784),
                s = o(194504),
                l = o(235902),
                i = o(392237),
                n = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                u = o(516951),
                h = o(731708),
                g = o(310088),
                m = o(175993),
                b = o(58881),
                f = o(530732);
            const y = d().d2414d31,
                C = () => d().ce4e85ae,
                x = d().fb9f6f39;
            class k extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: r, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: r, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, r) => {
                            const a = i.default.theme.colors.text,
                                s = i.default.theme.colors.gray700;
                            return o || r ? (e || t ? a : s) : e ? a : s;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: r, children: s, color: l, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: m, retainScrollPosition: k, style: S, to: R } = this.props,
                        { location: Z } = this.state,
                        _ = R ? this._getMemoizedLink(R, k) : void 0,
                        w = c ? c(R) : Z?.pathname === _?.pathname,
                        E = b.Z.generate({ backgroundColor: "transparent", color: i.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? v.pillHoverStyle.backgroundColor : void 0 }),
                        I = m ? "medium" : w ? "bold" : "medium";
                    return a.createElement(f.Z, { "aria-label": t, "aria-selected": w, focusable: !!w, interactiveStyles: E, link: _, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [v.pillStyle] : [v.link]), ...(p && w ? [v.pillActiveStyle] : []), d ? (p ? v.compactPill : v.compactLink) : null, u ? v.roundedRect : null, S], withoutInteractiveStyles: m }, ({ isFocused: t, isHovered: c }) => a.createElement(n.Z, { style: p && v.flexGrow }, a.createElement(h.ZP, { size: m ? "headline2" : void 0, style: [v.text, { color: this._getTextColor(w, c, m, p) }, d && v.compactText, m && t && v.focusedText, p && v.pillTextStyle, p && w && v.pillActiveTextStyle, p && c && v.pillHoverTextStyle], weight: I }, e && a.createElement(e, { style: v.icon }), s, m || p ? null : a.createElement(n.Z, { style: w && [v.border, { backgroundColor: i.default.theme.colors[l] }] })), o ? a.createElement(g.Z, { count: o, standalone: !0, style: [v.badge, o >= 10 && v.multiDigitBadge, o >= 20 && v.truncatedCountBadge], truncatedCountFormatter: x, unreadCountLabel: y, withBorder: !1 }) : r ? a.createElement(g.Z, { pip: !0, standalone: !0, style: v.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (k.contextType = m.Z), (k.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const v = i.default.create((e) => ({
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
                S = k,
                R = i.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                Z = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: i, isRoundedRect: n, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = l.ZP.useProps(),
                        g = h() && !i,
                        m = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: s, ...l }, c) => {
                                    const d = g ? [R.linkRedesign, 0 === c && R.firstLinkRedesign, e && 0 === c && R.withNoPaddingStart] : void 0;
                                    return a.createElement(S, (0, r.Z)({ viewType: s }, l, { isCompact: o, isPillLink: i, isRoundedRect: n, isWebRedesign: g, style: d }), t);
                                }),
                            [e, o, i, n, g, c],
                        );
                    return a.createElement(s.Z, { "aria-label": t, buttonsContainerStyle: i && R.gap, childrenStyle: !g && R.flexGrow, key: u, style: [i ? null : R.segmentedControl, g && R.leftAligned, d], visibleItemIndex: p }, m);
                };
        },
        183806: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => r });
            const r = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        666536: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => s });
            var r = o(936386),
                a = o.n(r);
            const s = (e, t, o) => a()(e, t, o);
        },
        936386: (e) => {
            function t(e, t, o) {
                var r, a, s, l, i;
                function n() {
                    var c = Date.now() - l;
                    c < t && c >= 0 ? (r = setTimeout(n, t - c)) : ((r = null), o || ((i = e.apply(s, a)), (s = a = null)));
                }
                null == t && (t = 100);
                var c = function () {
                    (s = this), (a = arguments), (l = Date.now());
                    var c = o && !r;
                    return r || (r = setTimeout(n, t)), c && ((i = e.apply(s, a)), (s = a = null)), i;
                };
                return (
                    (c.clear = function () {
                        r && (clearTimeout(r), (r = null));
                    }),
                    (c.flush = function () {
                        r && ((i = e.apply(s, a)), (s = a = null), clearTimeout(r), (r = null));
                    }),
                    c
                );
            }
            (t.debounce = t), (e.exports = t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsTransparency-6107ac1a.24c35f4a.js.map
