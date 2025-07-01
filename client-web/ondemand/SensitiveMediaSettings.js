"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SensitiveMediaSettings"],
    {
        290402: (e, t, n) => {
            n.d(t, { Z: () => g });
            var a = n(807896),
                i = n(202784),
                l = n(182056),
                s = n(879113),
                r = n(392237),
                o = n(111677),
                c = n.n(o),
                d = n(968478);
            const u = c().aa6e3300,
                m = ({ retryMessage: e, ...t }, n) => {
                    const r = l.Z.isOnline();
                    return i.createElement(s.Z, (0, a.Z)({}, t, { icon: r ? void 0 : i.createElement(d.default, { style: p.icon }), retryMessage: r ? e : u }));
                },
                p = r.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                g = i.forwardRef(m);
        },
        687124: (e, t, n) => {
            n.r(t), n.d(t, { default: () => re });
            var a = n(202784),
                i = n(614983),
                l = n.n(i),
                s = n(107267),
                r = n(731708),
                o = n(688715),
                c = n(420412),
                d = n(111677),
                u = n.n(d),
                m = n(652904),
                p = n(736063),
                g = n(725516),
                h = n(535338),
                b = n(829824),
                _ = n(170069),
                f = n(264922),
                v = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "SensitiveMediaOptions_userSensitiveMediaSettingsInfo",
                    selections: [
                        { args: null, kind: "FragmentSpread", name: "useEditSensitiveMediaSettings_userSensitiveMediaSettingsInfo" },
                        {
                            alias: null,
                            args: null,
                            concreteType: "SensitiveMediaSettings",
                            kind: "LinkedField",
                            name: "sensitive_media_settings",
                            plural: !1,
                            selections: [
                                { alias: null, args: null, kind: "ScalarField", name: "view_adult_content", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "view_violent_content", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "view_other_content", storageKey: null },
                                { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                            ],
                            storageKey: null,
                        },
                        { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null },
                    ],
                    type: "UserSensitiveMediaSettingsInfo",
                    abstractKey: null,
                    hash: "bcf9782c0890b1105e4360151a225157",
                };
            const y = v;
            n(585488);
            var k,
                C,
                w,
                E,
                S,
                Z = n(277660),
                x = n.n(Z),
                I = n(101890),
                M = {
                    fragment: {
                        argumentDefinitions: [(k = { defaultValue: null, kind: "LocalArgument", name: "userId" }), (C = { defaultValue: null, kind: "LocalArgument", name: "view_adult_content" }), (w = { defaultValue: null, kind: "LocalArgument", name: "view_other_content" }), (E = { defaultValue: null, kind: "LocalArgument", name: "view_violent_content" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useEditSensitiveMediaSettingsMutation",
                        selections: (S = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                    { kind: "Variable", name: "view_adult_content", variableName: "view_adult_content" },
                                    { kind: "Variable", name: "view_other_content", variableName: "view_other_content" },
                                    { kind: "Variable", name: "view_violent_content", variableName: "view_violent_content" },
                                ],
                                kind: "ScalarField",
                                name: "user_sensitive_media_settings_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [k, C, E, w], kind: "Operation", name: "useEditSensitiveMediaSettingsMutation", selections: S },
                    params: { id: "YWGRWrle16Fb6JvAjvjoTQ", metadata: {}, name: "useEditSensitiveMediaSettingsMutation", operationKind: "mutation", text: null },
                };
            M.hash = "eb15339231659adbad5b6149eb6e1565";
            const R = M;
            var F = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useEditSensitiveMediaSettings_userSensitiveMediaSettingsInfo",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "SensitiveMediaSettings",
                        kind: "LinkedField",
                        name: "sensitive_media_settings",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "view_adult_content", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "view_violent_content", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "view_other_content", storageKey: null },
                            { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null },
                ],
                type: "UserSensitiveMediaSettingsInfo",
                abstractKey: null,
                hash: "36108d86a14a7e44115d983679f72f62",
            };
            const D = F;
            var K = n(351743),
                V = n.n(K),
                z = n(71620);
            const P = D,
                T = R,
                j = (e, t) => {
                    const { sensitive_media_settings: n } = x()(P, e),
                        [i, s] = V()(T),
                        r = (0, g.z)(),
                        o = (0, z.po)();
                    return [
                        a.useCallback(
                            (e, a) => {
                                const s = { view_adult_content: n.view_adult_content, view_violent_content: n.view_violent_content, view_other_content: n.view_other_content, [e]: a },
                                    c = (t) => {
                                        const i = n.__id;
                                        l()(i, "sensitiveMediaSettingsId must be specified");
                                        const s = t.get(i);
                                        l()(s, "sensitiveMediaSettingsRecord must be specified"), s.setValue(a, e);
                                    };
                                r.scribe({ action: "click", section: "sensitive-media-settings", component: e, element: a }),
                                    i({
                                        variables: { userId: t, ...s },
                                        onCompleted: () => {},
                                        onError: (e) => {
                                            o(e);
                                        },
                                        optimisticUpdater: c,
                                        updater: c,
                                    });
                            },
                            [i, r, o, n, t],
                        ),
                        s,
                    ];
                },
                A = u().aa4342be,
                G = u().jfec3aa0,
                B = u().c365dcc6,
                H = u().j6bacd6a,
                W = u().a73e66a8,
                $ = u().fef1b8dc,
                L = u().d0a5a1c0,
                O = u().ga197e26,
                U = u().eb723386,
                N = u().ea31c622,
                q = u().e40985c4,
                J = a.createElement(u().I18NFormatMessage, { $i18n: "cbc4f32d" }, a.createElement(r.ZP, { link: (0, o.ju)("https://help.x.com/rules-and-policies/media-settings") }, u().h7e0672b)),
                Q = y,
                X = (e) => [
                    { value: "Warn", label: L, helpText: e },
                    { value: "Allow", label: O },
                    { value: "Drop", label: U },
                ],
                Y = [
                    { title: A, description: N, options: X(H), key: "view_violent_content" },
                    { title: G, description: q, options: X(W), key: "view_adult_content" },
                    { title: B, description: J, options: X($), key: "view_other_content" },
                ],
                ee = ({ userId: e, userSensitiveMediaSettingsInfo: t }) => {
                    const n = x()(Q, t),
                        { can_user_allow_sensitive_content: i, sensitive_media_settings: l } = n,
                        [s] = j(n, e);
                    return a.createElement(
                        a.Fragment,
                        null,
                        Y.map((e) => {
                            const { description: t, key: n, options: r, title: o } = e,
                                c = l[n];
                            return "view_adult_content" === n && !i ? null : a.createElement(I.Z, { description: t, key: n, label: o, name: n, onChange: s, options: r, value: c });
                        }),
                    );
                };
            var te = n(653798);
            const ne = u().h9f2da68,
                ae = a.createElement(u().I18NFormatMessage, { $i18n: "e212a9ab" }, a.createElement(r.ZP, { link: (0, o.ju)("https://help.x.com/rules-and-policies/media-policy") }, u().ee320a07)),
                ie = u().b70a2cde,
                le = () => {
                    const e = (0, h.p)(te.S, {}),
                        t = e?.viewer?.user_results?.result;
                    l()("User" === t?.__typename, "Result must be of type User");
                    const n = t?.sensitive_media_settings,
                        i = t?.rest_id;
                    return l()(n, "Result must include sensitive media settings data"), a.createElement(a.Fragment, null, a.createElement(_.Z, null, ae, `\n\n${ie}`), a.createElement(c.Z, null), a.createElement(ee, { userId: i, userSensitiveMediaSettingsInfo: n }));
                },
                se = { context: "SensitiveMediaSettings" },
                re = a.memo(
                    (0, g.Z)(
                        () => {
                            const e = (0, s.useLocation)();
                            return a.createElement(m.Z, null, a.createElement(f.Z, { location: e, title: ne }, a.createElement(b.Z, null, a.createElement(p.H, { errorConfig: se }, a.createElement(le, null)))));
                        },
                        { page: "settings", section: "content_you_see", component: "sensitive_media_settings" },
                    ),
                );
        },
        829824: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var a = n(202784),
                i = n(99107),
                l = n(420740),
                s = n(731708),
                r = n(111677),
                o = n.n(r),
                c = n(443781),
                d = n(918621),
                u = n(725405),
                m = n(125363),
                p = n(390387);
            const g = o().ffeb836a,
                h = o().f2fb9746;
            function b() {
                const e = (0, u.Z)();
                return (
                    a.useEffect(() => {
                        e.scribe({ element: "error_page", action: "show" });
                    }, [e]),
                    a.createElement(l.Z, { title: g }, a.createElement(s.ZP, null, h))
                );
            }
            function _(e) {
                const { featureSwitches: t } = a.useContext(c.rC),
                    n = (0, m.v9)(p.Qb),
                    l = (0, d.Xh)(i.b7, t);
                return n || l ? e.children : a.createElement(b, null);
            }
        },
        170069: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(202784),
                i = n(325686),
                l = n(731708),
                s = n(392237);
            const r = ({ children: e }) => a.createElement(i.Z, { style: o.labelContainer }, a.createElement(i.Z, { style: o.contentContainer }, a.createElement(i.Z, { style: o.appText }, a.createElement(l.ZP, { color: "gray700", size: "subtext2" }, e)))),
                o = s.default.create((e) => ({ contentContainer: { alignItems: "center", flex: 1, flexDirection: "row", justifyContent: "space-between" }, labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, minHeight: `calc(${s.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})` }, appText: { flexShrink: 1, width: "100%" } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                i = n(476984),
                l = n.n(i),
                s = n(143778),
                r = n(750410),
                o = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class p extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !l()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: i, icon: l, loadingMessage: s, onRequestRetry: d, render: p, renderFailure: g, retryMessage: h, retryable: b } = this.props;
                    switch (i) {
                        case c:
                            return b ? a.createElement(r.Z, { icon: l, onRequestRetry: d, retryMessage: h }) : n ? a.createElement(o.m, { failureMessage: n }) : g();
                        case u:
                            return a.createElement(o.J, { "aria-label": e, color: t, loadingMessage: s });
                        case m:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                i = n(325686),
                l = n(235902),
                s = n(885015),
                r = n(392237);
            function o({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: o } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: r.default.theme.colors[e] ?? r.default.theme.colors.borderColor };
                return n ? a.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(i.Z, { style: c.gapColumn }, a.createElement(i.Z, { style: [c.gap, d] })), a.createElement(i.Z, { style: c.gapText }, n), a.createElement(i.Z, { style: c.gapColumn }, a.createElement(i.Z, { style: [c.gap, d] }))) : a.createElement(i.Z, { style: [!t && c.root, o() && c.rootRedesign, c.gap, d] });
            }
            const c = r.default.create((e) => ({ borderColor: { backgroundColor: r.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: r.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(807896),
                i = n(202784),
                l = n(325686),
                s = n(392237);
            class r extends i.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...s } = this.props,
                        r = i.Children.map(e, (e) => e && i.cloneElement(e, { style: [e.props.style, o.column, n && o.withGutterColumn] }));
                    return i.createElement(l.Z, (0, a.Z)({ style: [t, o.root, n && o.withGutter] }, s), r);
                }
            }
            r.defaultProps = { withGutter: !1 };
            const o = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = r;
        },
        449479: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                i = n(325686),
                l = n(913973),
                s = n(731708),
                r = n(950822),
                o = n(466792),
                c = n(58881),
                d = n(530732),
                u = n(352924),
                m = n(392237);
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: n } = this.props;
                            n && !t && n(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: n, disabled: u, helpText: p, label: h, name: b, testID: _ } = this.props,
                        f = c.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        v = c.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        y = n ? f : v;
                    return a.createElement(o.Z, { disabled: u }, (o) => a.createElement(i.Z, { role: "label", style: [g.root, !u && g.interactive], testID: _ }, a.createElement(i.Z, { style: g.topContainer }, a.createElement(s.ZP, { id: this.labelId }, h), a.createElement(i.Z, { style: g.radioContainer }, a.createElement(d.Z, { interactiveStyles: y, interactivityState: o, style: g.radioBackground }, a.createElement(i.Z, { style: [g.circle, n && g.circleActive, u && g.circleDisabled, n && u && g.circleCheckedAndDisabled] }, n ? a.createElement(l.default, { style: g.checkMark }) : null)), (0, r.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: n, disabled: u, name: b, onChange: this._handleChange, ref: this._setRef, style: [g.nativeControl], type: "radio" }))), p ? a.createElement(s.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: g.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const g = m.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...m.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                h = p,
                b = "radioGroup";
            let _ = 1;
            class f extends a.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: n } = this.props;
                            n(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (n) => {
                            (this._radioRefs[e] = n), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${_}_LABEL`),
                        (_ += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: n, label: l, name: r, options: o, value: c } = this.props;
                    return a.createElement(
                        i.Z,
                        { "aria-label": e, "aria-labelledby": l && !e ? this._labelId : void 0, role: "radiogroup", style: n && v.disabled, testID: `${b}${r}` },
                        l ? a.createElement(i.Z, { id: this._labelId, role: "label", style: v.header }, a.createElement(s.ZP, { style: v.label, weight: "bold" }, l), t ? a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        o.map((e, t) => a.createElement(h, { "aria-posinset": t + 1, "aria-setsize": o.length, checked: e.value === c, disabled: n, helpText: e.helpText, key: e.value, label: e.label, name: r, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            f.defaultProps = { disabled: !1 };
            const v = m.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        101890: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(202784),
                i = n(325686),
                l = n(449479),
                s = n(392237);
            const r = (e) => a.createElement(i.Z, { style: o.root }, a.createElement(l.Z, e)),
                o = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SensitiveMediaSettings.c956529a.js.map
