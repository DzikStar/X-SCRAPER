"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.SettingsRevamp~bundle.SettingsTransparency"],
    {
        253493: (e, t, r) => {
            r.d(t, { Z: () => w });
            var o = r(202784),
                n = r(107267),
                a = r(791632),
                s = r(325686),
                i = r(537392),
                l = r(10656),
                c = r(655352),
                d = r(555079),
                p = r(500002),
                h = r(625661),
                u = r(449067),
                m = r(655543),
                g = r(715601),
                b = r(392237);
            const f = b.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...b.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class y extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? o.createElement(s.Z, { style: f.fill }, o.createElement(g.Z, { style: f.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return o.createElement(i.ZP, null, ({ containerWidth: e }) => (l.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: r, screenType: n, showSubtitleOnRoot: a, showSubtitleOnWideDetail: s, withBottomBorder: i, withDetailOpen: l, ...d } = this.props;
                    return o.createElement(o.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : o.createElement(u.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return o.createElement(o.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: r, appBarStyle: n, backLocation: a, documentTitle: i, headerless: l, history: c, leftControl: p, middleControl: m, onBackClick: g, rightControl: b, screenType: y, searchBoxOptions: C, secondaryBar: w, showSubtitleOnRoot: E, showSubtitleOnWideDetail: Z, subtitle: S, title: _, titleIconCell: v, titleIconCellSize: k, withDetailOpen: D, withSearchBox: B, withTweetButton: x, withWideContainer: P } = this.props,
                        I = "root" === y,
                        R = "secondaryRoot" === y,
                        F = "primaryDetail" === y,
                        T = (F && Z) || (I && E),
                        z = I || (F && e),
                        H = I ? d.ey : F ? d.vX : void 0,
                        L = o.createElement(s.Z, { style: f.appBarContainer }, o.createElement(h.ZP, { backLocation: a, fixed: !1, hideBackButton: z, history: c, leftControl: p, middleControl: m, onBackClick: g, rightControl: b, secondaryBar: w, style: n, subtitle: T ? S : void 0, title: _, titleDomId: H, titleIconCell: v, titleIconCellSize: k, withWideContainer: P })),
                        A = I || (R && D) ? null : o.createElement(u.Z.Configure, { SideNavButton: t, TabBar: r, backLocation: a, documentTitle: i, headerless: l, middleControl: m, onBackClick: g, rightControl: b, searchBoxOptions: C, subtitle: S, title: _, withSearchBox: B, withTweetButton: x });
                    return o.createElement(o.Fragment, null, A, L);
                }
            }
            (y.contextType = m.Z), (y.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const C = (0, p.ZP)(y),
                w = (e) => {
                    const t = (0, n.useHistory)();
                    return (0, a.HD)(t) ? e.children || null : o.createElement(C, e);
                };
        },
        673110: (e, t, r) => {
            r.d(t, { Gv: () => u, UD: () => h });
            var o = r(226395),
                n = r(499627),
                a = r(917799),
                s = r(312771),
                i = r(291020);
            const l = "verifyPassword",
                c = `rweb/${i.Y}/${l}`,
                d = (0, a.dg)(c, "VERIFY_PASSWORD"),
                p = { fetchStatus: s.ZP.NONE };
            n.Z.register({
                [l]: function (e = p, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case d.REQUEST:
                            return { ...e, fetchStatus: s.ZP.LOADING };
                        case d.SUCCESS:
                            return { ...e, fetchStatus: s.ZP.LOADED };
                        case d.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: s.ZP.FAILED };
                        default:
                            return e;
                    }
                },
            });
            const h = (e) => e[l].fetchStatus,
                u =
                    (e) =>
                    (t, r, { api: n }) =>
                        (0, a._O)(t, { params: { password: e }, request: n.withEndpoint(o.Z).verifyPassword })({ actionTypes: d, context: "VERIFY_PASSWORD" });
        },
        609848: (e, t, r) => {
            r.d(t, { Z: () => T });
            var o = r(202784),
                n = r(325686),
                a = r(731708),
                s = r(688715),
                i = r(844685),
                l = r(855488),
                c = r(108362),
                d = r(154003),
                p = r(392237),
                h = r(674132),
                u = r.n(h),
                m = r(615656),
                g = r(290402),
                b = r(443781),
                f = r(500002),
                y = r(312771),
                C = r(615027),
                w = r(267966),
                E = r(71620),
                Z = r(668214),
                S = r(673110);
            const _ = (0, Z.Z)()
                    .propsFromState(() => ({ verifyPasswordFetchStatus: S.UD }))
                    .propsFromActions(() => ({ verifyPassword: S.Gv, createLocalApiErrorHandler: (0, E.zr)("PASSWORD_GATEWAY") })),
                v = u().fe36fe10,
                k = u().dec3c9b8,
                D = u().hccd9dbe,
                B = u().d1091f50,
                x = u().g9677c6e,
                P = u().c8cb0b4c;
            class I extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { password: "" }),
                        (this._passwordlessSsoEnabled = this.context.featureSwitches.isTrue("responsive_web_passwordless_sso_enabled")),
                        (this._handlePasswordSubmit = () => {
                            const { createLocalApiErrorHandler: e, verifyPassword: t } = this.props,
                                { password: r } = this.state;
                            "" !== r &&
                                t(r)
                                    .then(() => {
                                        this.setState({ password: "", verificationRequired: !1 }), this._makeFetch();
                                    })
                                    .catch(e({ [m.ZP.InvalidCurrentPassword]: { customAction: () => this.setState({ passwordError: P }) }, showToast: !0 }));
                        }),
                        (this._makeFetch = () => {
                            const { createLocalApiErrorHandler: e, fetch: t } = this.props;
                            t()
                                .then(() => {
                                    this.setState({ verificationRequired: !1 });
                                })
                                .catch(
                                    e({
                                        [m.ZP.PasswordVerificationRequired]: {
                                            customAction: () => {
                                                this.setState({ verificationRequired: !0 });
                                            },
                                        },
                                        showToast: !1,
                                    }),
                                );
                        }),
                        (this._handleFetch = this._makeFetch),
                        (this._handleChange = (e) => {
                            this.setState({ passwordError: void 0, password: e.target.value });
                        });
                }
                componentDidMount() {
                    this._makeFetch();
                }
                componentDidUpdate(e) {
                    e.fetchStatus === y.ZP.LOADED && this.props.fetchStatus === y.ZP.NONE && this._makeFetch();
                }
                _renderPasswordPrompt() {
                    const { titleHeader: e } = this.props,
                        { passwordError: t } = this.state,
                        r = o.createElement(a.ZP, { link: { pathname: (0, s.ju)("https://x.com/i/flow/password_reset"), external: !0, openInSameFrame: !0 } }, B);
                    return o.createElement(o.Fragment, null, e ? o.createElement(i.Z, { text: e }) : null, o.createElement(n.Z, { style: [w.Z.viewItem, w.Z.bottomBorder] }, o.createElement(a.ZP, { color: "gray700", size: "subtext2" }, D)), o.createElement(l.Z, { errorText: t, helperText: r, invalid: !!t, label: k, name: "current_password", onChange: this._handleChange, onSubmitEditing: this._handlePasswordSubmit, type: "password", value: this.state.password }), o.createElement(c.Z, { style: R.buttonContainer }, o.createElement(d.ZP, { disabled: !1, onPress: this._handlePasswordSubmit, style: R.button, type: "brandFilled" }, x)));
                }
                render() {
                    const { fetchStatus: e, location: t, render: r } = this.props,
                        { verificationRequired: n } = this.state,
                        a = e === y.ZP.FAILED && n;
                    return o.createElement(o.Fragment, null, a ? (this._passwordlessSsoEnabled ? o.createElement(C.Z, { to: { pathname: "/i/flow/verify_account_ownership", state: { input: { requested_variant: t.pathname } } } }) : this._renderPasswordPrompt()) : o.createElement(g.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: r }));
                }
            }
            (I.contextType = b.rC), (I.defaultProps = { titleHeader: v });
            const R = p.default.create((e) => ({ buttonContainer: { flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingBottom: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.componentDimensions.gutterHorizontal } })),
                F = _(I),
                T = (0, f.ZP)(F);
        },
        264922: (e, t, r) => {
            r.d(t, { Z: () => E });
            var o = r(202784),
                n = r(108362),
                a = r(420412),
                s = r(154003),
                i = r(392237),
                l = r(674132),
                c = r.n(l),
                d = r(290402),
                p = r(253493),
                h = r(71620),
                u = r(668214),
                m = r(38562),
                g = r(919022);
            const b = (0, u.Z)()
                    .propsFromState(() => ({ fetchStatus: m.UD, viewerUser: g.ZP.selectViewerUser }))
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
                            const { children: e, onSubmit: t, submitDisabled: r, submitLabel: i, submitType: l, withMarginBottom: c } = this.props;
                            return o.createElement(n.Z, { style: [w.contentRoot, c && w.withMarginBottom] }, e, t ? o.createElement(o.Fragment, null, o.createElement(a.Z, null), o.createElement(n.Z, { style: w.buttonContainer }, o.createElement(s.ZP, { disabled: r, onPress: t, style: w.button, testID: f, type: l }, i))) : null);
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
                    const { onBackClick: e, rightControl: t, screenType: r, secondaryBar: n, title: a, viewerUser: s, withBottomBorder: i } = this.props,
                        l = this.getBackLocation(),
                        c = s ? `@${s.screen_name}` : void 0;
                    return o.createElement(p.Z, { backLocation: l, onBackClick: e, rightControl: t, screenType: r, secondaryBar: n, showSubtitleOnWideDetail: !1, subtitle: c, title: a, withBottomBorder: i }, s ? this._renderWithFetchSettings() : this._render());
                }
            }
            C.defaultProps = { submitLabel: y, submitType: "brandFilled", withMarginBottom: !0 };
            const w = i.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingVertical: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.spaces.space12 }, withMarginBottom: { marginBottom: `calc(${e.spaces.space64} + ${i.default.iPhoneOffsetBottom})` } })),
                E = b(C);
        },
        267966: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(392237);
            const n = (e) => ({ borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" }),
                a = o.default.create((e) => ({ descriptionText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, searchBox: { margin: e.spaces.space4 }, infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, linkItem: { padding: e.spaces.space12, backgroundColor: e.colors.cellBackground }, viewItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, backgroundColor: e.colors.cellBackground }, calloutTextBlock: { paddingVertical: e.spaces.space20, paddingHorizontal: e.componentDimensions.gutterHorizontal }, bottomBorder: { ...n(e) } }));
        },
        242454: (e, t, r) => {
            r.d(t, { Z: () => p });
            var o = r(807896),
                n = r(202784),
                a = r(325686),
                s = r(731708),
                i = r(58881),
                l = r(530732),
                c = r(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                p = ({ align: e = "center", color: t, label: r, ...p }) => {
                    const h = i.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return n.createElement(a.Z, { style: d.container }, n.createElement(l.Z, (0, o.Z)({}, p, { interactiveStyles: h, style: d.root }), n.createElement(s.ZP, { align: e, color: t }, r)));
                };
        },
        779610: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(202784),
                n = r(325686),
                a = r(191796),
                s = r(58399),
                i = r(731708),
                l = r(952428),
                c = r(392237);
            const d = (e) => {
                    const { decoration: t, description: r, disabled: d = !1, isActive: h = !1, label: u, link: m, onPress: g, paddingHorizontal: b, renderRightContent: f, role: y = "tab", styleOverride: C, testID: w = "pivot", thumbnail: E, thumbnailSize: Z, withoutArrow: S = !1 } = e,
                        _ = [p.thumbnailContainer, "medium" === Z && p.thumbnailContainerMedium],
                        v = "string" == typeof u ? o.createElement(i.ZP, null, u) : u,
                        k = "object" == typeof m && m.external && !m.openInSameFrame,
                        D = r ? ("string" == typeof r ? o.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${w}-description` }, r) : r) : null,
                        B = o.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return o.createElement(l.Z, { "aria-selected": "tab" === y ? h : null, disabled: d, link: d ? void 0 : m, onPress: g, role: y, style: [p.root, B, d && p.disabled, C], testID: w, withInteractiveStyling: !!m || !!g }, o.createElement(n.Z, { style: p.contentContainer }, E ? o.createElement(n.Z, { style: _ }, E) : null, o.createElement(n.Z, { style: p.content }, v, D), f ? f() : null, (!m && !g) || d || S ? null : k ? o.createElement(a.default, { style: p.icon }) : o.createElement(s.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => y });
            var o = r(202784),
                n = r(325686),
                a = r(913973),
                s = r(731708),
                i = r(950822),
                l = r(466792),
                c = r(58881),
                d = r(530732),
                p = r(352924),
                h = r(392237);
            class u extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, p.F)()),
                        (this.descriptionId = (0, p.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: r } = this.props;
                            r && !t && r(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: p, helpText: u, label: g, name: b, testID: f } = this.props,
                        y = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        w = r ? y : C;
                    return o.createElement(l.Z, { disabled: p }, (l) => o.createElement(n.Z, { role: "label", style: [m.root, !p && m.interactive], testID: f }, o.createElement(n.Z, { style: m.topContainer }, o.createElement(s.ZP, { id: this.labelId }, g), o.createElement(n.Z, { style: m.radioContainer }, o.createElement(d.Z, { interactiveStyles: w, interactivityState: l, style: m.radioBackground }, o.createElement(n.Z, { style: [m.circle, r && m.circleActive, p && m.circleDisabled, r && p && m.circleCheckedAndDisabled] }, r ? o.createElement(a.default, { style: m.checkMark }) : null)), (0, i.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: p, name: b, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), u ? o.createElement(s.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, u) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            u.defaultProps = { disabled: !1, checked: !1 };
            const m = h.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                g = u,
                b = "radioGroup";
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
                    const { "aria-label": e, description: t, disabled: r, label: a, name: i, options: l, value: c } = this.props;
                    return o.createElement(
                        n.Z,
                        { "aria-label": e, "aria-labelledby": a && !e ? this._labelId : void 0, role: "radiogroup", style: r && C.disabled, testID: `${b}${i}` },
                        a ? o.createElement(n.Z, { id: this._labelId, role: "label", style: C.header }, o.createElement(s.ZP, { style: C.label, weight: "bold" }, a), t ? o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        l.map((e, t) => o.createElement(g, { "aria-posinset": t + 1, "aria-setsize": l.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: i, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = h.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        943401: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                n = r(731708),
                a = r(392237);
            class s extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return o.createElement(n.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: r } = this.props,
                        a = i.root;
                    return t && r ? o.createElement(n.ZP, { color: "gray700", size: "subtext2", style: a }, e, " ", this._renderLearnMore()) : o.createElement(n.ZP, { color: "gray700", size: "subtext2", style: a }, e);
                }
            }
            const i = a.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                l = s;
        },
        101890: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(202784),
                n = r(325686),
                a = r(449479),
                s = r(392237);
            const i = (e) => o.createElement(n.Z, { style: l.root }, o.createElement(a.Z, e)),
                l = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.SettingsRevamp~bundle.SettingsTransparency.1993c75a.js.map
