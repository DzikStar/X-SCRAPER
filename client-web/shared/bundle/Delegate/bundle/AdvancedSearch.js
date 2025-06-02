"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Delegate~bundle.AdvancedSearch"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var a = o(202784),
                r = o(614983),
                i = o.n(r),
                l = o(325686),
                n = o(370006),
                s = o(786998),
                d = o(929028),
                c = o(386802);
            function h(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            i()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: i, isFullWidth: l, isLarge: d, leftControl: c, middleControl: p, position: u, rightControl: b, secondaryBar: m, style: g, subtitle: f, title: y, titleDomId: C, titleIconCell: k, titleIconCellSize: B, withBackground: _, withWideContainer: Z } = this.props,
                        { isModal: x } = this.context,
                        v = i ? c : a.createElement(n.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        w = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!_, x, !!m);
                    return a.createElement(a.Fragment, null, a.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: l, isLarge: d, leftControl: v, middleControl: p, position: h(u, x, r), rightControl: b, style: g, subtitle: f, title: y, titleDomId: C, titleIconCell: k, titleIconCellSize: B, withBackground: w, withWideContainer: Z }), m || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = d.Z.getBackgroundStyles();
                    return t ? a.createElement(l.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = c.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => m, w: () => u });
            var a = o(202784),
                r = o(325686),
                i = o(108362),
                l = o(386802),
                n = o(392237),
                s = o(652904),
                d = o(555079),
                c = o(625661),
                h = o(449067),
                p = o(715601);
            class u extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: i, centerTitle: l, hideBackButton: n, history: s, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: m, rightControl: g, secondaryBar: f, subtitle: y, title: C } = this.props,
                                { isModal: k } = this.context;
                            return a.createElement(r.Z, { style: k ? [b.childViewAppBarRoot, b.appBarZindex] : b.appBarZindex }, a.createElement(c.ZP, { backButtonType: o || (k ? "close" : "back"), backLocation: i, centerTitle: l, fixed: !k, hideBackButton: n, history: s, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: m, ref: e, rightControl: g, secondaryBar: f, style: [k && b.appBarModal, t], subtitle: y, title: C, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: l, documentTitle: n, isFullWidth: d, isLarge: c, renderHeader: u, title: m, withoutBottomBarMobile: g } = this.props,
                        { isModal: f } = this.context,
                        y = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(s.Z, null, a.createElement(h.Z.Configure, { documentTitle: n, headerless: !0, title: m }), a.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [b.root, f && b.rootModal] }, !f && y, a.createElement(i.Z, { isFullWidth: d, isLarge: c, style: [b.container, f && b.containerModal, l] }, f ? a.createElement(p.Z, { style: b.viewport }, y, o) : o), t ? a.createElement(r.Z, { style: [b.bottomBarModal, !f && !g && b.bottomBarMobile] }, a.createElement(i.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = l.Z);
            const b = n.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: n.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                m = u;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var a = o(202784),
                r = o(500002),
                i = o(668214),
                l = o(997174),
                n = o(118823);
            const s = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: n.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class d extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: a },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: i, search: l },
                            locationKey: n,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const d = r || n;
                    ((d && r !== n) || (!d && o !== i) || a !== l || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, r.ZP)(s(d));
        },
        449479: (e, t, o) => {
            o.d(t, { Z: () => y });
            var a = o(202784),
                r = o(325686),
                i = o(913973),
                l = o(731708),
                n = o(950822),
                s = o(466792),
                d = o(58881),
                c = o(530732),
                h = o(352924),
                p = o(392237);
            class u extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, h.F)()),
                        (this.descriptionId = (0, h.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: o } = this.props;
                            o && !t && o(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: o, disabled: h, helpText: u, label: m, name: g, testID: f } = this.props,
                        y = d.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = d.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        k = o ? y : C;
                    return a.createElement(s.Z, { disabled: h }, (s) => a.createElement(r.Z, { role: "label", style: [b.root, !h && b.interactive], testID: f }, a.createElement(r.Z, { style: b.topContainer }, a.createElement(l.ZP, { id: this.labelId }, m), a.createElement(r.Z, { style: b.radioContainer }, a.createElement(c.Z, { interactiveStyles: k, interactivityState: s, style: b.radioBackground }, a.createElement(r.Z, { style: [b.circle, o && b.circleActive, h && b.circleDisabled, o && h && b.circleCheckedAndDisabled] }, o ? a.createElement(i.default, { style: b.checkMark }) : null)), (0, n.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: o, disabled: h, name: g, onChange: this._handleChange, ref: this._setRef, style: [b.nativeControl], type: "radio" }))), u ? a.createElement(l.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: b.helpText }, u) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            u.defaultProps = { disabled: !1, checked: !1 };
            const b = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                m = u,
                g = "radioGroup";
            let f = 1;
            class y extends a.Component {
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
                    const { "aria-label": e, description: t, disabled: o, label: i, name: n, options: s, value: d } = this.props;
                    return a.createElement(
                        r.Z,
                        { "aria-label": e, "aria-labelledby": i && !e ? this._labelId : void 0, role: "radiogroup", style: o && C.disabled, testID: `${g}${n}` },
                        i ? a.createElement(r.Z, { id: this._labelId, role: "label", style: C.header }, a.createElement(l.ZP, { style: C.label, weight: "bold" }, i), t ? a.createElement(l.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => a.createElement(m, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === d, disabled: o, helpText: e.helpText, key: e.value, label: e.label, name: n, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === d), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        80512: (e, t, o) => {
            o.d(t, { Z: () => h });
            var a = o(202784),
                r = o(325686),
                i = o(815858),
                l = o(731708),
                n = o(449479),
                s = o(392237),
                d = o(451566);
            let c = 1;
            class h extends a.Component {
                constructor() {
                    super(),
                        (this._handleGateToggle = () => {
                            const { defaultOption: e, name: t, offValue: o, onChange: a, options: r, value: i } = this.props;
                            a(t, i === o ? e?.value || r[0].value : o);
                        }),
                        (this._handleAnimationComplete = () => {
                            this._radioGroupRef && this._radioGroupRef.focus();
                        }),
                        (this._setRadioGroupRef = (e) => {
                            this._radioGroupRef = e;
                        }),
                        (this._labelId = `RADIO_GROUP_${c}_LABEL`),
                        (c += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: o, label: s, name: c, offValue: h, onChange: u, options: b, value: m } = this.props;
                    return a.createElement(r.Z, { "aria-label": e, "aria-labelledby": s && !e ? this._labelId : void 0, role: "group", style: [p.root, o && p.disabled] }, a.createElement(a.Fragment, null, s ? a.createElement(r.Z, { id: this._labelId, role: "label", style: p.header }, a.createElement(r.Z, { style: p.label }, a.createElement(l.ZP, { weight: "bold" }, s), a.createElement(d.Z, { disabled: o, onValueChange: this._handleGateToggle, value: m !== h })), t ? a.createElement(l.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, b && a.createElement(i.Z, { onAnimateComplete: this._handleAnimationComplete, show: m !== h }, a.createElement(r.Z, null, a.createElement(r.Z, { style: p.radioGroup, tabIndex: 0 }, a.createElement(n.Z, { "aria-label": e || s, disabled: o, name: c, onChange: u, options: b, ref: this._setRadioGroupRef, value: m }))))));
                }
            }
            h.defaultProps = { disabled: !1 };
            const p = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        452693: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var a = o(202784),
                r = o(890601),
                i = o(783427),
                l = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Delegate~bundle.AdvancedSearch.f1f9f0ba.js.map
