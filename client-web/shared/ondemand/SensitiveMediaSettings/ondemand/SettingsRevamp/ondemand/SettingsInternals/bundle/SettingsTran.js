"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.SensitiveMediaSettings~ondemand.SettingsRevamp~ondemand.SettingsInternals~bundle.SettingsTran"],
    {
        290402: (e, t, r) => {
            r.d(t, { Z: () => m });
            var o = r(807896),
                n = r(202784),
                a = r(182056),
                i = r(879113),
                s = r(392237),
                l = r(111677),
                c = r.n(l),
                d = r(968478);
            const u = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, r) => {
                    const s = a.Z.isOnline();
                    return n.createElement(i.Z, (0, o.Z)({}, t, { icon: s ? void 0 : n.createElement(d.default, { style: p.icon }), retryMessage: s ? e : u }));
                },
                p = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = n.forwardRef(h);
        },
        253493: (e, t, r) => {
            r.d(t, { Z: () => w });
            var o = r(202784),
                n = r(107267),
                a = r(791632),
                i = r(325686),
                s = r(537392),
                l = r(10656),
                c = r(655352),
                d = r(555079),
                u = r(500002),
                h = r(625661),
                p = r(449067),
                m = r(655543),
                b = r(715601),
                g = r(392237);
            const f = g.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...g.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class y extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? o.createElement(i.Z, { style: f.fill }, o.createElement(b.Z, { style: f.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return o.createElement(s.ZP, null, ({ containerWidth: e }) => (l.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: r, screenType: n, showSubtitleOnRoot: a, showSubtitleOnWideDetail: i, withBottomBorder: s, withDetailOpen: l, ...d } = this.props;
                    return o.createElement(o.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : o.createElement(p.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return o.createElement(o.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: r, appBarStyle: n, backLocation: a, documentTitle: s, headerless: l, history: c, leftControl: u, middleControl: m, onBackClick: b, rightControl: g, screenType: y, searchBoxOptions: C, secondaryBar: w, showSubtitleOnRoot: k, showSubtitleOnWideDetail: Z, subtitle: _, title: E, titleIconCell: B, titleIconCellSize: v, withDetailOpen: S, withSearchBox: I, withTweetButton: x, withWideContainer: R } = this.props,
                        D = "root" === y,
                        T = "secondaryRoot" === y,
                        F = "primaryDetail" === y,
                        L = (F && Z) || (D && k),
                        P = D || (F && e),
                        O = D ? d.ey : F ? d.vX : void 0,
                        z = o.createElement(i.Z, { style: f.appBarContainer }, o.createElement(h.ZP, { backLocation: a, fixed: !1, hideBackButton: P, history: c, leftControl: u, middleControl: m, onBackClick: b, rightControl: g, secondaryBar: w, style: n, subtitle: L ? _ : void 0, title: E, titleDomId: O, titleIconCell: B, titleIconCellSize: v, withWideContainer: R })),
                        M = D || (T && S) ? null : o.createElement(p.Z.Configure, { SideNavButton: t, TabBar: r, backLocation: a, documentTitle: s, headerless: l, middleControl: m, onBackClick: b, rightControl: g, searchBoxOptions: C, subtitle: _, title: E, withSearchBox: I, withTweetButton: x });
                    return o.createElement(o.Fragment, null, M, z);
                }
            }
            (y.contextType = m.Z), (y.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const C = (0, u.ZP)(y),
                w = (e) => {
                    const t = (0, n.useHistory)();
                    return (0, a.HD)(t) ? e.children || null : o.createElement(C, e);
                };
        },
        829824: (e, t, r) => {
            r.d(t, { Z: () => f });
            var o = r(202784),
                n = r(99107),
                a = r(420740),
                i = r(731708),
                s = r(111677),
                l = r.n(s),
                c = r(443781),
                d = r(918621),
                u = r(725405),
                h = r(125363),
                p = r(390387);
            const m = l().ffeb836a,
                b = l().f2fb9746;
            function g() {
                const e = (0, u.Z)();
                return (
                    o.useEffect(() => {
                        e.scribe({ element: "error_page", action: "show" });
                    }, [e]),
                    o.createElement(a.Z, { title: m }, o.createElement(i.ZP, null, b))
                );
            }
            function f(e) {
                const { featureSwitches: t } = o.useContext(c.rC),
                    r = (0, h.v9)(p.Qb),
                    a = (0, d.Xh)(n.b7, t);
                return r || a ? e.children : o.createElement(g, null);
            }
        },
        264922: (e, t, r) => {
            r.d(t, { Z: () => k });
            var o = r(202784),
                n = r(108362),
                a = r(420412),
                i = r(154003),
                s = r(392237),
                l = r(111677),
                c = r.n(l),
                d = r(290402),
                u = r(253493),
                h = r(71620),
                p = r(668214),
                m = r(38562),
                b = r(919022);
            const g = (0, p.Z)()
                    .propsFromState(() => ({ fetchStatus: m.UD, viewerUser: b.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ fetchSettingsIfNeeded: m.Sb, createLocalApiErrorHandler: (0, h.zr)("SETTINGS_LOADER") })),
                f = "settingsDetailSave",
                y = c().i2209530;
            class C extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderWithFetchSettings = () => {
                            const { fetchStatus: e } = this.props;
                            return o.createElement(d.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render });
                        }),
                        (this._render = () => {
                            const { children: e, onSubmit: t, submitDisabled: r, submitLabel: s, submitType: l, withMarginBottom: c } = this.props;
                            return o.createElement(n.Z, { style: [w.contentRoot, c && w.withMarginBottom] }, e, t ? o.createElement(o.Fragment, null, o.createElement(a.Z, null), o.createElement(n.Z, { style: w.buttonContainer }, o.createElement(i.ZP, { disabled: r, onPress: t, style: w.button, testID: f, type: l }, s))) : null);
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchSettingsIfNeeded: t } = this.props;
                            t().catch(e());
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                getBackLocation() {
                    const { location: e, viewerUser: t } = this.props,
                        r = t ? "/settings" : "/settings/account/personalization";
                    return e && e.pathname === r ? "/" : r;
                }
                render() {
                    const { onBackClick: e, rightControl: t, screenType: r, secondaryBar: n, title: a, viewerUser: i, withBottomBorder: s } = this.props,
                        l = this.getBackLocation(),
                        c = i ? `@${i.screen_name}` : void 0;
                    return o.createElement(u.Z, { backLocation: l, onBackClick: e, rightControl: t, screenType: r, secondaryBar: n, showSubtitleOnWideDetail: !1, subtitle: c, title: a, withBottomBorder: s }, i ? this._renderWithFetchSettings() : this._render());
                }
            }
            C.defaultProps = { submitLabel: y, submitType: "brandFilled", withMarginBottom: !0 };
            const w = s.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingVertical: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.spaces.space12 }, withMarginBottom: { marginBottom: `calc(${e.spaces.space64} + ${s.default.iPhoneOffsetBottom})` } })),
                k = g(C);
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => p });
            var o = r(202784),
                n = r(476984),
                a = r.n(n),
                i = r(143778),
                s = r(750410),
                l = r(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class p extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: n, icon: a, loadingMessage: i, onRequestRetry: d, render: p, renderFailure: m, retryMessage: b, retryable: g } = this.props;
                    switch (n) {
                        case c:
                            return g ? o.createElement(s.Z, { icon: a, onRequestRetry: d, retryMessage: b }) : r ? o.createElement(l.m, { failureMessage: r }) : m();
                        case u:
                            return o.createElement(l.J, { "aria-label": e, color: t, loadingMessage: i });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => y });
            var o = r(202784),
                n = r(325686),
                a = r(913973),
                i = r(731708),
                s = r(950822),
                l = r(466792),
                c = r(58881),
                d = r(530732),
                u = r(352924),
                h = r(392237);
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: r } = this.props;
                            r && !t && r(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: u, helpText: p, label: b, name: g, testID: f } = this.props,
                        y = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        w = r ? y : C;
                    return o.createElement(l.Z, { disabled: u }, (l) => o.createElement(n.Z, { role: "label", style: [m.root, !u && m.interactive], testID: f }, o.createElement(n.Z, { style: m.topContainer }, o.createElement(i.ZP, { id: this.labelId }, b), o.createElement(n.Z, { style: m.radioContainer }, o.createElement(d.Z, { interactiveStyles: w, interactivityState: l, style: m.radioBackground }, o.createElement(n.Z, { style: [m.circle, r && m.circleActive, u && m.circleDisabled, r && u && m.circleCheckedAndDisabled] }, r ? o.createElement(a.default, { style: m.checkMark }) : null)), (0, s.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: u, name: g, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), p ? o.createElement(i.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const m = h.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                b = p,
                g = "radioGroup";
            let f = 1;
            class y extends o.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: r } = this.props;
                            r(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (r) => {
                            (this._radioRefs[e] = r), t && (this._radioRefs.checked = e);
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
                    const { "aria-label": e, description: t, disabled: r, label: a, name: s, options: l, value: c } = this.props;
                    return o.createElement(
                        n.Z,
                        { "aria-label": e, "aria-labelledby": a && !e ? this._labelId : void 0, role: "radiogroup", style: r && C.disabled, testID: `${g}${s}` },
                        a ? o.createElement(n.Z, { id: this._labelId, role: "label", style: C.header }, o.createElement(i.ZP, { style: C.label, weight: "bold" }, a), t ? o.createElement(i.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        l.map((e, t) => o.createElement(b, { "aria-posinset": t + 1, "aria-setsize": l.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: s, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = h.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        101890: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                n = r(325686),
                a = r(449479),
                i = r(392237);
            const s = (e) => o.createElement(n.Z, { style: l.root }, o.createElement(a.Z, e)),
                l = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.SensitiveMediaSettings~ondemand.SettingsRevamp~ondemand.SettingsInternals~bundle.SettingsTran.88454e9a.js.map
