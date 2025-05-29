"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-6107ac1a", "icons/IconDeviceLaptop-js", "icons/IconDevicePhone-js"],
    {
        629928: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n,
                i,
                l,
                r,
                s,
                o,
                d,
                c = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "IDVerificationQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified", storageKey: null }), (r = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified_label_hidden", storageKey: null }), { kind: "RequiredField", field: (s = { alias: null, args: null, kind: "ScalarField", name: "identity_verification_status", storageKey: null }), action: "THROW" }, (o = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "IDVerificationQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: n,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [i, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [l, r, s, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), o], storageKey: null }, d], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            d,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "3Wx7dsynDTSI0LO52L8L8A", metadata: { features: ["identity_verification_hide_verified_label_settings_enabled"] }, name: "IDVerificationQuery", operationKind: "query", text: null },
                };
            c.hash = "6269adea05f11011ee2eec87df25951d";
            const u = c;
        },
        993770: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n,
                i,
                l = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "is_identity_verified_label_hidden" },
                            { defaultValue: null, kind: "LocalArgument", name: "user_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "IDVerificationUpdateHideLabelMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "is_identity_verified_label_hidden", variableName: "is_identity_verified_label_hidden" },
                                    { kind: "Variable", name: "user_id", variableName: "user_id" },
                                ],
                                kind: "ScalarField",
                                name: "userverificationinfo_is_identity_verified_label_hidden_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "IDVerificationUpdateHideLabelMutation", selections: i },
                    params: { id: "lqIzyQL1p3XCZg77zekzZA", metadata: {}, name: "IDVerificationUpdateHideLabelMutation", operationKind: "mutation", text: null },
                };
            l.hash = "6b62958a6368974d13a27b8fe59103e0";
            const r = l;
        },
        507421: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n,
                i,
                l,
                r = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "PasskeyManagement_Query", selections: [{ kind: "RequiredField", field: { alias: null, args: (n = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(l = { alias: null, args: null, concreteType: "PasskeyTwoFactorAuthMethod", kind: "LinkedField", name: "passkey_auth_settings_with_view", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "client_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "created_at_ms", storageKey: null }, (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "PasskeyManagement_Query",
                        selections: [
                            {
                                alias: null,
                                args: n,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [l, i], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            i,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "8fWHnipHAqfhgFo-rAXk5w", metadata: {}, name: "PasskeyManagement_Query", operationKind: "query", text: null },
                };
            r.hash = "b177c906c03e19affd73768f7a0ec360";
            const s = r;
        },
        130919: (e, t, a) => {
            a.d(t, { t: () => n });
            const n = Object.freeze({ CanVerifyIdentity: "CanVerifyIdentity", IdentityNonVerifiable: "IdentityNonVerifiable", IdentityVerified: "IdentityVerified", PendingResult: "PendingResult", RequestLocked: "RequestLocked", UnavailableMissingBlueSubscription: "UnavailableMissingBlueSubscription" });
        },
        96768: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n,
                i,
                l,
                r = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (i = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateStripePortalUrlMutation",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "origin_product", variableName: "origin_product" },
                                    { kind: "Variable", name: "return_url", variableName: "return_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "CreateCustomerPortalSessionResponse",
                                kind: "LinkedField",
                                name: "customerportalsession_create",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "customer_portal_session_url", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, n], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: l },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            r.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const s = r;
        },
        762815: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n,
                i,
                l,
                r = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useIDVerificationProcessVendorQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(i = { alias: null, args: null, concreteType: "IdentityVerificationProcessInfo", kind: "LinkedField", name: "identity_verification_process_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "IdentityVerificationVendor", kind: "LinkedField", name: "vendor", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "identifier", storageKey: null }], storageKey: null }], storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useIDVerificationProcessVendorQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: n,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [i, (l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, l], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            l,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "_1MJNdYH_NfG1HVMWvOISA", metadata: {}, name: "useIDVerificationProcessVendorQuery", operationKind: "query", text: null },
                };
            r.hash = "e2dfe548d137a744e29f47bdd00c2ff5";
            const s = r;
        },
        786033: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n,
                i,
                l,
                r,
                s,
                o = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "error_url" }), (i = { defaultValue: null, kind: "LocalArgument", name: "success_url" }), (l = { defaultValue: null, kind: "LocalArgument", name: "verification_flow" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useIDVerificationSessionUrlMutation",
                        selections: (s = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "error_url", variableName: "error_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "success_url", variableName: "success_url" },
                                    { kind: "Variable", name: "verification_flow", variableName: "verification_flow" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "start_identity_verification",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    { kind: "InlineFragment", selections: (r = [{ alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null }]), type: "StartIdentityVerificationResultSuccessAu10tixSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: r, type: "StartIdentityVerificationResultSuccessSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "StartIdentityVerificationResultFailure", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, n, l], kind: "Operation", name: "useIDVerificationSessionUrlMutation", selections: s },
                    params: { id: "EBjxezEpy-W30060X7_v6g", metadata: {}, name: "useIDVerificationSessionUrlMutation", operationKind: "mutation", text: null },
                };
            o.hash = "88a4b93bad19f92c67d5957375d338be";
            const d = o;
        },
        362075: (e, t, a) => {
            a.d(t, { Z: () => p });
            var n = a(807896),
                i = a(202784),
                l = a(325686),
                r = a(688715),
                s = a(950822),
                o = a(386802),
                d = a(392237);
            class c extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = i.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: a } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return a ? a(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let n;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    n = JSON.parse(e.data);
                                } catch (t) {
                                    return void (a && a(`Invalid postMessage data from ${e.origin}: ${e.data}`));
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
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: a, dangerouslyDisableSandbox: n, src: o, style: d, title: c } = this.props,
                        { isModal: p } = this.context,
                        m = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        g = (0, s.Z)("iframe", { allow: `${m.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, r.ju)(o), style: u.iframe, title: c, ...(n ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${a ? " allow-top-navigation" : ""}` }) });
                    return i.createElement(l.Z, { style: p ? [u.root, u.modalPadding, d] : [u.root, d] }, g);
                }
            }
            c.contextType = o.t;
            const u = d.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                p = i.forwardRef((e, t) => i.createElement(c, (0, n.Z)({ forwardedRef: t }, e)));
        },
        449479: (e, t, a) => {
            a.d(t, { Z: () => b });
            var n = a(202784),
                i = a(325686),
                l = a(913973),
                r = a(731708),
                s = a(950822),
                o = a(466792),
                d = a(58881),
                c = a(530732),
                u = a(352924),
                p = a(392237);
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: a } = this.props;
                            a && !t && a(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: a, disabled: u, helpText: m, label: h, name: f, testID: y } = this.props,
                        b = d.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        k = d.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        _ = a ? b : k;
                    return n.createElement(o.Z, { disabled: u }, (o) => n.createElement(i.Z, { role: "label", style: [g.root, !u && g.interactive], testID: y }, n.createElement(i.Z, { style: g.topContainer }, n.createElement(r.ZP, { id: this.labelId }, h), n.createElement(i.Z, { style: g.radioContainer }, n.createElement(c.Z, { interactiveStyles: _, interactivityState: o, style: g.radioBackground }, n.createElement(i.Z, { style: [g.circle, a && g.circleActive, u && g.circleDisabled, a && u && g.circleCheckedAndDisabled] }, a ? n.createElement(l.default, { style: g.checkMark }) : null)), (0, s.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: a, disabled: u, name: f, onChange: this._handleChange, ref: this._setRef, style: [g.nativeControl], type: "radio" }))), m ? n.createElement(r.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: g.helpText }, m) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            m.defaultProps = { disabled: !1, checked: !1 };
            const g = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                h = m,
                f = "radioGroup";
            let y = 1;
            class b extends n.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: a } = this.props;
                            a(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (a) => {
                            (this._radioRefs[e] = a), t && (this._radioRefs.checked = e);
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
                    const { "aria-label": e, description: t, disabled: a, label: l, name: s, options: o, value: d } = this.props;
                    return n.createElement(
                        i.Z,
                        { "aria-label": e, "aria-labelledby": l && !e ? this._labelId : void 0, role: "radiogroup", style: a && k.disabled, testID: `${f}${s}` },
                        l ? n.createElement(i.Z, { id: this._labelId, role: "label", style: k.header }, n.createElement(r.ZP, { style: k.label, weight: "bold" }, l), t ? n.createElement(r.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        o.map((e, t) => n.createElement(h, { "aria-posinset": t + 1, "aria-setsize": o.length, checked: e.value === d, disabled: a, helpText: e.helpText, key: e.value, label: e.label, name: s, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === d), testID: e.testID })),
                    );
                }
            }
            b.defaultProps = { disabled: !1 };
            const k = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        943401: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(202784),
                i = a(731708),
                l = a(392237);
            class r extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return n.createElement(i.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: a } = this.props,
                        l = s.root;
                    return t && a ? n.createElement(i.ZP, { color: "gray700", size: "subtext2", style: l }, e, " ", this._renderLearnMore()) : n.createElement(i.ZP, { color: "gray700", size: "subtext2", style: l }, e);
                }
            }
            const s = l.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                o = r;
        },
        928088: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(202784),
                i = a(325686);
            const l = a(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                r = function ({ children: e }) {
                    return n.createElement(i.Z, { style: l.root }, e);
                };
        },
        101890: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(202784),
                i = a(325686),
                l = a(449479),
                r = a(392237);
            const s = (e) => n.createElement(i.Z, { style: o.root }, n.createElement(l.Z, e)),
                o = r.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        88307: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                i = a(325686),
                l = a(731708),
                r = a(392237);
            class s extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return n.createElement(l.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return t && e ? n.createElement(l.ZP, { link: t, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: t, learnMoreLink: a, subtext: r, withBottomBorder: s } = this.props;
                    return n.createElement(i.Z, { style: [o.root, s && o.bottomBorder] }, n.createElement(l.ZP, null, e), r ? (t && a ? this._renderSubtextAndLink() : n.createElement(l.ZP, { color: "gray700", size: "subtext2" }, r)) : null);
                }
            }
            s.defaultProps = { withBottomBorder: !0 };
            const o = r.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                d = s;
        },
        80512: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                i = a(325686),
                l = a(815858),
                r = a(731708),
                s = a(449479),
                o = a(392237),
                d = a(451566);
            let c = 1;
            class u extends n.Component {
                constructor() {
                    super(),
                        (this._handleGateToggle = () => {
                            const { defaultOption: e, name: t, offValue: a, onChange: n, options: i, value: l } = this.props;
                            n(t, l === a ? e?.value || i[0].value : a);
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
                    const { "aria-label": e, description: t, disabled: a, label: o, name: c, offValue: u, onChange: m, options: g, value: h } = this.props;
                    return n.createElement(i.Z, { "aria-label": e, "aria-labelledby": o && !e ? this._labelId : void 0, role: "group", style: [p.root, a && p.disabled] }, n.createElement(n.Fragment, null, o ? n.createElement(i.Z, { id: this._labelId, role: "label", style: p.header }, n.createElement(i.Z, { style: p.label }, n.createElement(r.ZP, { weight: "bold" }, o), n.createElement(d.Z, { disabled: a, onValueChange: this._handleGateToggle, value: h !== u })), t ? n.createElement(r.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, g && n.createElement(l.Z, { onAnimateComplete: this._handleAnimationComplete, show: h !== u }, n.createElement(i.Z, null, n.createElement(i.Z, { style: p.radioGroup, tabIndex: 0 }, n.createElement(s.Z, { "aria-label": e || o, disabled: a, name: c, onChange: m, options: g, ref: this._setRadioGroupRef, value: h }))))));
                }
            }
            u.defaultProps = { disabled: !1 };
            const p = o.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, t, a) => {
            a.d(t, { Z: () => x });
            var n = a(807896),
                i = a(202784),
                l = a(194504),
                r = a(235902),
                s = a(392237),
                o = a(325686),
                d = a(111677),
                c = a.n(d),
                u = a(912021),
                p = a(516951),
                m = a(731708),
                g = a(310088),
                h = a(175993),
                f = a(58881),
                y = a(530732);
            const b = c().d2414d31,
                k = () => c().ce4e85ae,
                _ = c().fb9f6f39;
            class v extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: a, query: n, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: a, query: n, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, a, n) => {
                            const i = s.default.theme.colors.text,
                                l = s.default.theme.colors.gray700;
                            return a || n ? (e || t ? i : l) : e ? i : l;
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
                    const { Icon: e, "aria-label": t, badgeCount: a, badgePip: n, children: l, color: r, isActive: d, isCompact: c, isPillLink: u, isRoundedRect: p, isWebRedesign: h, retainScrollPosition: v, style: C, to: R } = this.props,
                        { location: x } = this.state,
                        F = R ? this._getMemoizedLink(R, v) : void 0,
                        I = d ? d(R) : x?.pathname === F?.pathname,
                        L = f.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        Z = h ? "medium" : I ? "bold" : "medium";
                    return i.createElement(y.Z, { "aria-label": t, "aria-selected": I, focusable: !!I, interactiveStyles: L, link: F, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? w.pill : w.link, u && I ? w.active : null, c ? (u ? w.compactPill : w.compactLink) : null, p ? w.roundedRect : null, C], withoutInteractiveStyles: h || u }, ({ isFocused: t, isHovered: d }) => i.createElement(o.Z, { style: u && w.flexGrow }, i.createElement(m.ZP, { size: h ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(I, d, h, u) }, c && w.compactText, h && t && w.focusedText], weight: Z }, e && i.createElement(e, { style: w.icon }), l, h || u ? null : i.createElement(o.Z, { style: I && [w.border, { backgroundColor: s.default.theme.colors[r] }] })), a ? i.createElement(g.Z, { count: a, standalone: !0, style: [w.badge, a >= 10 && w.multiDigitBadge, a >= 20 && w.truncatedCountBadge], truncatedCountFormatter: _, unreadCountLabel: b, withBorder: !1 }) : n ? i.createElement(g.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: k, withBorder: !1 }) : null));
                }
            }
            (v.contextType = h.Z), (v.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
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
                C = v,
                R = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                x = ({ alignFirstItem: e, "aria-label": t, isCompact: a, isPillLink: s, isRoundedRect: o, links: d, style: c, visibleItemIndex: u }) => {
                    const p = d
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = r.ZP.useProps(),
                        g = m() && !s,
                        h = i.useMemo(
                            () =>
                                d.filter(Boolean).map(({ label: t, viewType: l, ...r }, d) => {
                                    const c = g ? [R.linkRedesign, 0 === d && R.firstLinkRedesign, e && 0 === d && R.withNoPaddingStart] : void 0;
                                    return i.createElement(C, (0, n.Z)({ viewType: l }, r, { isCompact: a, isPillLink: s, isRoundedRect: o, isWebRedesign: g, style: c }), t);
                                }),
                            [e, a, s, o, g, d],
                        );
                    return i.createElement(l.Z, { "aria-label": t, buttonsContainerStyle: s && R.gap, childrenStyle: !g && R.flexGrow, key: p, style: [s ? null : R.segmentedControl, g && R.leftAligned, c], visibleItemIndex: u }, h);
                };
        },
        762863: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var n = a(202784),
                i = a(890601),
                l = a(783427),
                r = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M21 16V4.5C21 3.12 19.88 2 18.5 2h-13C4.12 2 3 3.12 3 4.5V16H1v4c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2v-4h-2zM5 4.5c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5V16H5V4.5zM3 20v-2h18v2H3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        501578: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var n = a(202784),
                i = a(890601),
                l = a(783427),
                r = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M5 4.5C5 3.12 6.12 2 7.5 2h9C17.88 2 19 3.12 19 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-9C6.12 22 5 20.88 5 19.5v-15zM7.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h9c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-9zM15 19H9v-2h6v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        98440: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var n = a(202784),
                i = a(890601),
                l = a(783427),
                r = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        226597: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var n = a(202784),
                i = a(890601),
                l = a(783427),
                r = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        155353: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var n = a(202784),
                i = a(890601),
                l = a(783427),
                r = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-6107ac1a.735fb7ea.js.map
