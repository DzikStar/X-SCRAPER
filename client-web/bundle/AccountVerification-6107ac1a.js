"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountVerification-6107ac1a", "icons/IconDraggable-js"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var r = o(202784),
                a = o(614983),
                i = o.n(a),
                l = o(325686),
                s = o(370006),
                n = o(786998),
                d = o(929028),
                c = o(386802);
            function h(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class p extends r.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: a, hideBackButton: i, isFullWidth: l, isLarge: d, leftControl: c, middleControl: p, position: u, rightControl: b, secondaryBar: m, style: g, subtitle: y, title: f, titleDomId: C, titleIconCell: k, titleIconCellSize: B, withBackground: x, withWideContainer: Z } = this.props,
                        { isModal: w } = this.context,
                        _ = i ? c : r.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        v = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!x, w, !!m);
                    return r.createElement(r.Fragment, null, r.createElement(n.Z, { centerTitle: t, centeredLogo: o, isFullWidth: l, isLarge: d, leftControl: _, middleControl: p, position: h(u, w, a), rightControl: b, style: g, subtitle: y, title: f, titleDomId: C, titleIconCell: k, titleIconCellSize: B, withBackground: v, withWideContainer: Z }), m || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = d.Z.getBackgroundStyles();
                    return t ? r.createElement(l.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = c.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => b });
            var r = o(807896),
                a = o(202784),
                i = o(182056),
                l = o(879113),
                s = o(392237),
                n = o(111677),
                d = o.n(n),
                c = o(968478);
            const h = d().aa6e3300,
                p = ({ retryMessage: e, ...t }, o) => {
                    const s = i.Z.isOnline();
                    return a.createElement(l.Z, (0, r.Z)({}, t, { icon: s ? void 0 : a.createElement(c.default, { style: u.icon }), retryMessage: s ? e : h }));
                },
                u = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                b = a.forwardRef(p);
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => m, w: () => u });
            var r = o(202784),
                a = o(325686),
                i = o(108362),
                l = o(386802),
                s = o(392237),
                n = o(652904),
                d = o(555079),
                c = o(625661),
                h = o(449067),
                p = o(715601);
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: i, centerTitle: l, hideBackButton: s, history: n, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: m, rightControl: g, secondaryBar: y, subtitle: f, title: C } = this.props,
                                { isModal: k } = this.context;
                            return r.createElement(a.Z, { style: k ? [b.childViewAppBarRoot, b.appBarZindex] : b.appBarZindex }, r.createElement(c.ZP, { backButtonType: o || (k ? "close" : "back"), backLocation: i, centerTitle: l, fixed: !k, hideBackButton: s, history: n, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: m, ref: e, rightControl: g, secondaryBar: y, style: [k && b.appBarModal, t], subtitle: f, title: C, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: l, documentTitle: s, isFullWidth: d, isLarge: c, renderHeader: u, title: m, withoutBottomBarMobile: g } = this.props,
                        { isModal: y } = this.context,
                        f = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(n.Z, null, r.createElement(h.Z.Configure, { documentTitle: s, headerless: !0, title: m }), r.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [b.root, y && b.rootModal] }, !y && f, r.createElement(i.Z, { isFullWidth: d, isLarge: c, style: [b.container, y && b.containerModal, l] }, y ? r.createElement(p.Z, { style: b.viewport }, f, o) : o), t ? r.createElement(a.Z, { style: [b.bottomBarModal, !y && !g && b.bottomBarMobile] }, r.createElement(i.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = l.Z);
            const b = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                m = u;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                a = o(500002),
                i = o(668214),
                l = o(997174),
                s = o(118823);
            const n = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class d extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: r },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: i, search: l },
                            locationKey: s,
                        } = e;
                    let n = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (n = !0));
                    const d = a || s;
                    ((d && a !== s) || (!d && o !== i) || r !== l || n) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, a.ZP)(n(d));
        },
        449479: (e, t, o) => {
            o.d(t, { Z: () => f });
            var r = o(202784),
                a = o(325686),
                i = o(913973),
                l = o(731708),
                s = o(950822),
                n = o(466792),
                d = o(58881),
                c = o(530732),
                h = o(352924),
                p = o(392237);
            class u extends r.Component {
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
                    const { "aria-posinset": e, "aria-setsize": t, checked: o, disabled: h, helpText: u, label: m, name: g, testID: y } = this.props,
                        f = d.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = d.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        k = o ? f : C;
                    return r.createElement(n.Z, { disabled: h }, (n) => r.createElement(a.Z, { role: "label", style: [b.root, !h && b.interactive], testID: y }, r.createElement(a.Z, { style: b.topContainer }, r.createElement(l.ZP, { id: this.labelId }, m), r.createElement(a.Z, { style: b.radioContainer }, r.createElement(c.Z, { interactiveStyles: k, interactivityState: n, style: b.radioBackground }, r.createElement(a.Z, { style: [b.circle, o && b.circleActive, h && b.circleDisabled, o && h && b.circleCheckedAndDisabled] }, o ? r.createElement(i.default, { style: b.checkMark }) : null)), (0, s.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: o, disabled: h, name: g, onChange: this._handleChange, ref: this._setRef, style: [b.nativeControl], type: "radio" }))), u ? r.createElement(l.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: b.helpText }, u) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            u.defaultProps = { disabled: !1, checked: !1 };
            const b = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                m = u,
                g = "radioGroup";
            let y = 1;
            class f extends r.Component {
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
                        (this._labelId = `RADIO_GROUP_${y}_LABEL`),
                        (y += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: o, label: i, name: s, options: n, value: d } = this.props;
                    return r.createElement(
                        a.Z,
                        { "aria-label": e, "aria-labelledby": i && !e ? this._labelId : void 0, role: "radiogroup", style: o && C.disabled, testID: `${g}${s}` },
                        i ? r.createElement(a.Z, { id: this._labelId, role: "label", style: C.header }, r.createElement(l.ZP, { style: C.label, weight: "bold" }, i), t ? r.createElement(l.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        n.map((e, t) => r.createElement(m, { "aria-posinset": t + 1, "aria-setsize": n.length, checked: e.value === d, disabled: o, helpText: e.helpText, key: e.value, label: e.label, name: s, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === d), testID: e.testID })),
                    );
                }
            }
            f.defaultProps = { disabled: !1 };
            const C = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        678773: (e, t, o) => {
            o.r(t), o.d(t, { default: () => n });
            var r = o(202784),
                a = o(890601),
                i = o(783427),
                l = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const n = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountVerification-6107ac1a.9be39aba.js.map
