"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.SettingsInternals~bundle.SettingsRevamp~bundle.SettingsTransparency", "icons/IconEye-js"],
    {
        290402: (e, t, r) => {
            r.d(t, { Z: () => m });
            var o = r(807896),
                a = r(202784),
                s = r(182056),
                i = r(879113),
                n = r(392237),
                l = r(111677),
                c = r.n(l),
                d = r(968478);
            const p = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, r) => {
                    const n = s.Z.isOnline();
                    return a.createElement(i.Z, (0, o.Z)({}, t, { icon: n ? void 0 : a.createElement(d.default, { style: u.icon }), retryMessage: n ? e : p }));
                },
                u = n.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = a.forwardRef(h);
        },
        673110: (e, t, r) => {
            r.d(t, { Gv: () => u, UD: () => h });
            var o = r(226395),
                a = r(499627),
                s = r(917799),
                i = r(312771),
                n = r(291020);
            const l = "verifyPassword",
                c = `rweb/${n.Y}/${l}`,
                d = (0, s.dg)(c, "VERIFY_PASSWORD"),
                p = { fetchStatus: i.ZP.NONE };
            a.Z.register({
                [l]: function (e = p, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case d.REQUEST:
                            return { ...e, fetchStatus: i.ZP.LOADING };
                        case d.SUCCESS:
                            return { ...e, fetchStatus: i.ZP.LOADED };
                        case d.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: i.ZP.FAILED };
                        default:
                            return e;
                    }
                },
            });
            const h = (e) => e[l].fetchStatus,
                u =
                    (e) =>
                    (t, r, { api: a }) =>
                        (0, s._O)(t, { params: { password: e }, request: a.withEndpoint(o.Z).verifyPassword })({ actionTypes: d, context: "VERIFY_PASSWORD" });
        },
        609848: (e, t, r) => {
            r.d(t, { Z: () => A });
            var o = r(202784),
                a = r(325686),
                s = r(731708),
                i = r(688715),
                n = r(844685),
                l = r(855488),
                c = r(108362),
                d = r(154003),
                p = r(392237),
                h = r(111677),
                u = r.n(h),
                m = r(615656),
                g = r(290402),
                b = r(443781),
                f = r(500002),
                y = r(312771),
                w = r(615027),
                C = r(267966),
                E = r(71620),
                v = r(668214),
                Z = r(673110);
            const _ = (0, v.Z)()
                    .propsFromState(() => ({ verifyPasswordFetchStatus: Z.UD }))
                    .propsFromActions(() => ({ verifyPassword: Z.Gv, createLocalApiErrorHandler: (0, E.zr)("PASSWORD_GATEWAY") })),
                S = u().fe36fe10,
                k = u().dec3c9b8,
                P = u().hccd9dbe,
                R = u().d1091f50,
                D = u().g9677c6e,
                I = u().c8cb0b4c;
            class x extends o.Component {
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
                                    .catch(e({ [m.ZP.InvalidCurrentPassword]: { customAction: () => this.setState({ passwordError: I }) }, showToast: !0 }));
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
                        r = o.createElement(s.ZP, { link: { pathname: (0, i.ju)("https://x.com/i/flow/password_reset"), external: !0, openInSameFrame: !0 } }, R);
                    return o.createElement(o.Fragment, null, e ? o.createElement(n.Z, { text: e }) : null, o.createElement(a.Z, { style: [C.Z.viewItem, C.Z.bottomBorder] }, o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, P)), o.createElement(l.Z, { errorText: t, helperText: r, invalid: !!t, label: k, name: "current_password", onChange: this._handleChange, onSubmitEditing: this._handlePasswordSubmit, type: "password", value: this.state.password }), o.createElement(c.Z, { style: z.buttonContainer }, o.createElement(d.ZP, { disabled: !1, onPress: this._handlePasswordSubmit, style: z.button, type: "brandFilled" }, D)));
                }
                render() {
                    const { fetchStatus: e, location: t, render: r } = this.props,
                        { verificationRequired: a } = this.state,
                        s = e === y.ZP.FAILED && a;
                    return o.createElement(o.Fragment, null, s ? (this._passwordlessSsoEnabled ? o.createElement(w.Z, { to: { pathname: "/i/flow/verify_account_ownership", state: { input: { requested_variant: t.pathname } } } }) : this._renderPasswordPrompt()) : o.createElement(g.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: r }));
                }
            }
            (x.contextType = b.rC), (x.defaultProps = { titleHeader: S });
            const z = p.default.create((e) => ({ buttonContainer: { flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingBottom: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.componentDimensions.gutterHorizontal } })),
                F = _(x),
                A = (0, f.ZP)(F);
        },
        267966: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(392237);
            const a = (e) => ({ borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" }),
                s = o.default.create((e) => ({ descriptionText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, searchBox: { margin: e.spaces.space4 }, infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, linkItem: { padding: e.spaces.space12, backgroundColor: e.colors.cellBackground }, viewItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, backgroundColor: e.colors.cellBackground }, calloutTextBlock: { paddingVertical: e.spaces.space20, paddingHorizontal: e.componentDimensions.gutterHorizontal }, bottomBorder: { ...a(e) } }));
        },
        242454: (e, t, r) => {
            r.d(t, { Z: () => p });
            var o = r(807896),
                a = r(202784),
                s = r(325686),
                i = r(731708),
                n = r(58881),
                l = r(530732),
                c = r(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                p = ({ align: e = "center", color: t, label: r, ...p }) => {
                    const h = n.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return a.createElement(s.Z, { style: d.container }, a.createElement(l.Z, (0, o.Z)({}, p, { interactiveStyles: h, style: d.root }), a.createElement(i.ZP, { align: e, color: t }, r)));
                };
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => y });
            var o = r(202784),
                a = r(325686),
                s = r(913973),
                i = r(731708),
                n = r(950822),
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
                        w = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        C = r ? y : w;
                    return o.createElement(l.Z, { disabled: p }, (l) => o.createElement(a.Z, { role: "label", style: [m.root, !p && m.interactive], testID: f }, o.createElement(a.Z, { style: m.topContainer }, o.createElement(i.ZP, { id: this.labelId }, g), o.createElement(a.Z, { style: m.radioContainer }, o.createElement(d.Z, { interactiveStyles: C, interactivityState: l, style: m.radioBackground }, o.createElement(a.Z, { style: [m.circle, r && m.circleActive, p && m.circleDisabled, r && p && m.circleCheckedAndDisabled] }, r ? o.createElement(s.default, { style: m.checkMark }) : null)), (0, n.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: p, name: b, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), u ? o.createElement(i.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, u) : null));
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
                    const { "aria-label": e, description: t, disabled: r, label: s, name: n, options: l, value: c } = this.props;
                    return o.createElement(
                        a.Z,
                        { "aria-label": e, "aria-labelledby": s && !e ? this._labelId : void 0, role: "radiogroup", style: r && w.disabled, testID: `${b}${n}` },
                        s ? o.createElement(a.Z, { id: this._labelId, role: "label", style: w.header }, o.createElement(i.ZP, { style: w.label, weight: "bold" }, s), t ? o.createElement(i.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        l.map((e, t) => o.createElement(g, { "aria-posinset": t + 1, "aria-setsize": l.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: n, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const w = h.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        101890: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(202784),
                a = r(325686),
                s = r(449479),
                i = r(392237);
            const n = (e) => o.createElement(a.Z, { style: l.root }, o.createElement(s.Z, e)),
                l = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        988227: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                a = r(890601),
                s = r(783427),
                i = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.SettingsInternals~bundle.SettingsRevamp~bundle.SettingsTransparency.9781357a.js.map
