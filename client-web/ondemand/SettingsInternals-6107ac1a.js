(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-6107ac1a"],
    {
        629928: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var i,
                a,
                r,
                l,
                s,
                o,
                d,
                u = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "IDVerificationQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified", storageKey: null }), (l = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified_label_hidden", storageKey: null }), { kind: "RequiredField", field: (s = { alias: null, args: null, kind: "ScalarField", name: "identity_verification_status", storageKey: null }), action: "THROW" }, (o = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "IDVerificationQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: i,
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
                                                    { kind: "InlineFragment", selections: [a, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [r, l, s, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), o], storageKey: null }, d], type: "User", abstractKey: null },
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
            u.hash = "6269adea05f11011ee2eec87df25951d";
            const c = u;
        },
        993770: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var i,
                a,
                r = {
                    fragment: {
                        argumentDefinitions: (i = [
                            { defaultValue: null, kind: "LocalArgument", name: "is_identity_verified_label_hidden" },
                            { defaultValue: null, kind: "LocalArgument", name: "user_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "IDVerificationUpdateHideLabelMutation",
                        selections: (a = [
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
                    operation: { argumentDefinitions: i, kind: "Operation", name: "IDVerificationUpdateHideLabelMutation", selections: a },
                    params: { id: "lqIzyQL1p3XCZg77zekzZA", metadata: {}, name: "IDVerificationUpdateHideLabelMutation", operationKind: "mutation", text: null },
                };
            r.hash = "6b62958a6368974d13a27b8fe59103e0";
            const l = r;
        },
        507421: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var i,
                a,
                r,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "PasskeyManagement_Query", selections: [{ kind: "RequiredField", field: { alias: null, args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(r = { alias: null, args: null, concreteType: "PasskeyTwoFactorAuthMethod", kind: "LinkedField", name: "passkey_auth_settings_with_view", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "client_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "created_at_ms", storageKey: null }, (a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "PasskeyManagement_Query",
                        selections: [
                            {
                                alias: null,
                                args: i,
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
                                                    { kind: "InlineFragment", selections: [r, a], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            a,
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
            l.hash = "b177c906c03e19affd73768f7a0ec360";
            const s = l;
        },
        130919: (e, t, n) => {
            "use strict";
            n.d(t, { t: () => i });
            const i = Object.freeze({ CanVerifyIdentity: "CanVerifyIdentity", IdentityNonVerifiable: "IdentityNonVerifiable", IdentityVerified: "IdentityVerified", PendingResult: "PendingResult", RequestLocked: "RequestLocked", UnavailableMissingBlueSubscription: "UnavailableMissingBlueSubscription" });
        },
        762815: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var i,
                a,
                r,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useIDVerificationProcessVendorQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(a = { alias: null, args: null, concreteType: "IdentityVerificationProcessInfo", kind: "LinkedField", name: "identity_verification_process_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "IdentityVerificationVendor", kind: "LinkedField", name: "vendor", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "identifier", storageKey: null }], storageKey: null }], storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useIDVerificationProcessVendorQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: i,
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
                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [a, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, r], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            r,
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
            l.hash = "e2dfe548d137a744e29f47bdd00c2ff5";
            const s = l;
        },
        786033: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => d });
            var i,
                a,
                r,
                l,
                s,
                o = {
                    fragment: {
                        argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "error_url" }), (a = { defaultValue: null, kind: "LocalArgument", name: "success_url" }), (r = { defaultValue: null, kind: "LocalArgument", name: "verification_flow" })],
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
                                    { kind: "InlineFragment", selections: (l = [{ alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null }]), type: "StartIdentityVerificationResultSuccessAu10tixSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: l, type: "StartIdentityVerificationResultSuccessSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "StartIdentityVerificationResultFailure", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [a, i, r], kind: "Operation", name: "useIDVerificationSessionUrlMutation", selections: s },
                    params: { id: "EBjxezEpy-W30060X7_v6g", metadata: {}, name: "useIDVerificationSessionUrlMutation", operationKind: "mutation", text: null },
                };
            o.hash = "88a4b93bad19f92c67d5957375d338be";
            const d = o;
        },
        362075: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => p });
            var i = n(807896),
                a = n(202784),
                r = n(325686),
                l = n(688715),
                s = n(950822),
                o = n(386802),
                d = n(392237);
            class u extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = a.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: n } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return n ? n(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let i;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    i = JSON.parse(e.data);
                                } catch (t) {
                                    return void (n && n(`Invalid postMessage data from ${e.origin}: ${e.data}`));
                                }
                                t(i);
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
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: n, dangerouslyDisableSandbox: i, src: o, style: d, title: u } = this.props,
                        { isModal: p } = this.context,
                        m = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        g = (0, s.Z)("iframe", { allow: `${m.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, l.ju)(o), style: c.iframe, title: u, ...(i ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${n ? " allow-top-navigation" : ""}` }) });
                    return a.createElement(r.Z, { style: p ? [c.root, c.modalPadding, d] : [c.root, d] }, g);
                }
            }
            u.contextType = o.t;
            const c = d.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                p = a.forwardRef((e, t) => a.createElement(u, (0, i.Z)({ forwardedRef: t }, e)));
        },
        928088: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var i = n(202784),
                a = n(325686);
            const r = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                l = function ({ children: e }) {
                    return i.createElement(a.Z, { style: r.root }, e);
                };
        },
        88307: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => d });
            var i = n(202784),
                a = n(325686),
                r = n(731708),
                l = n(392237);
            class s extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return i.createElement(r.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return t && e ? i.createElement(r.ZP, { link: t, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: t, learnMoreLink: n, subtext: l, withBottomBorder: s } = this.props;
                    return i.createElement(a.Z, { style: [o.root, s && o.bottomBorder] }, i.createElement(r.ZP, null, e), l ? (t && n ? this._renderSubtextAndLink() : i.createElement(r.ZP, { color: "gray700", size: "subtext2" }, l)) : null);
                }
            }
            s.defaultProps = { withBottomBorder: !0 };
            const o = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                d = s;
        },
        80512: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var i = n(202784),
                a = n(325686),
                r = n(815858),
                l = n(731708),
                s = n(449479),
                o = n(392237),
                d = n(451566);
            let u = 1;
            class c extends i.Component {
                constructor() {
                    super(),
                        (this._handleGateToggle = () => {
                            const { defaultOption: e, name: t, offValue: n, onChange: i, options: a, value: r } = this.props;
                            i(t, r === n ? e?.value || a[0].value : n);
                        }),
                        (this._handleAnimationComplete = () => {
                            this._radioGroupRef && this._radioGroupRef.focus();
                        }),
                        (this._setRadioGroupRef = (e) => {
                            this._radioGroupRef = e;
                        }),
                        (this._labelId = `RADIO_GROUP_${u}_LABEL`),
                        (u += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: n, label: o, name: u, offValue: c, onChange: m, options: g, value: f } = this.props;
                    return i.createElement(a.Z, { "aria-label": e, "aria-labelledby": o && !e ? this._labelId : void 0, role: "group", style: [p.root, n && p.disabled] }, i.createElement(i.Fragment, null, o ? i.createElement(a.Z, { id: this._labelId, role: "label", style: p.header }, i.createElement(a.Z, { style: p.label }, i.createElement(l.ZP, { weight: "bold" }, o), i.createElement(d.Z, { disabled: n, onValueChange: this._handleGateToggle, value: f !== c })), t ? i.createElement(l.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, g && i.createElement(r.Z, { onAnimateComplete: this._handleAnimationComplete, show: f !== c }, i.createElement(a.Z, null, i.createElement(a.Z, { style: p.radioGroup, tabIndex: 0 }, i.createElement(s.Z, { "aria-label": e || o, disabled: n, name: u, onChange: m, options: g, ref: this._setRadioGroupRef, value: f }))))));
                }
            }
            c.defaultProps = { disabled: !1 };
            const p = o.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => C });
            var i = n(807896),
                a = n(202784),
                r = n(194504),
                l = n(235902),
                s = n(392237),
                o = n(325686),
                d = n(332920),
                u = n.n(d),
                c = n(912021),
                p = n(516951),
                m = n(731708),
                g = n(310088),
                f = n(175993),
                h = n(58881),
                y = n(530732);
            const b = u().d2414d31,
                k = () => u().ce4e85ae,
                v = u().fb9f6f39;
            class _ extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, c.Z)((e, t) => {
                            const { pathname: n, query: i, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: i, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, i) => {
                            const a = s.default.theme.colors.text,
                                r = s.default.theme.colors.gray700;
                            return n || i ? (e || t ? a : r) : e ? a : r;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: i, children: r, color: l, isActive: d, isCompact: u, isPillLink: c, isRoundedRect: p, isWebRedesign: f, retainScrollPosition: _, style: x, to: R } = this.props,
                        { location: C } = this.state,
                        L = R ? this._getMemoizedLink(R, _) : void 0,
                        S = d ? d(R) : C?.pathname === L?.pathname,
                        F = h.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        I = f ? "medium" : S ? "bold" : "medium";
                    return a.createElement(y.Z, { "aria-label": t, "aria-selected": S, focusable: !!S, interactiveStyles: F, link: L, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [c ? w.pill : w.link, c && S ? w.active : null, u ? (c ? w.compactPill : w.compactLink) : null, p ? w.roundedRect : null, x], withoutInteractiveStyles: f || c }, ({ isFocused: t, isHovered: d }) => a.createElement(o.Z, { style: c && w.flexGrow }, a.createElement(m.ZP, { size: f ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(S, d, f, c) }, u && w.compactText, f && t && w.focusedText], weight: I }, e && a.createElement(e, { style: w.icon }), r, f || c ? null : a.createElement(o.Z, { style: S && [w.border, { backgroundColor: s.default.theme.colors[l] }] })), n ? a.createElement(g.Z, { count: n, standalone: !0, style: [w.badge, n >= 10 && w.multiDigitBadge, n >= 20 && w.truncatedCountBadge], truncatedCountFormatter: v, unreadCountLabel: b, withBorder: !1 }) : i ? a.createElement(g.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: k, withBorder: !1 }) : null));
                }
            }
            (_.contextType = f.Z), (_.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
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
                x = _,
                R = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                C = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: s, isRoundedRect: o, links: d, style: u, visibleItemIndex: c }) => {
                    const p = d
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = l.ZP.useProps(),
                        g = m() && !s,
                        f = a.useMemo(
                            () =>
                                d.filter(Boolean).map(({ label: t, viewType: r, ...l }, d) => {
                                    const u = g ? [R.linkRedesign, 0 === d && R.firstLinkRedesign, e && 0 === d && R.withNoPaddingStart] : void 0;
                                    return a.createElement(x, (0, i.Z)({ viewType: r }, l, { isCompact: n, isPillLink: s, isRoundedRect: o, isWebRedesign: g, style: u }), t);
                                }),
                            [e, n, s, o, g, d],
                        );
                    return a.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: s && R.gap, childrenStyle: !g && R.flexGrow, key: p, style: [s ? null : R.segmentedControl, g && R.leftAligned, u], visibleItemIndex: c }, f);
                };
        },
        949874: (e) => {
            e.exports = function (e, t, n) {
                if (((e = e.replace(/\r?\n/g, "")), null != t && t < 5)) throw new Error("Maximum length must not be less than 5");
                if (((t = null != t ? t : 78), e.length <= t)) return e;
                t -= 4;
                var i = [],
                    a = e.length,
                    r = 0,
                    l = 0;
                if (!n) for (; ~(r = e.lastIndexOf(" ", t + l)) && !(r <= l); ) e.slice(l).length > t ? (i.push((l ? " " : "") + e.slice(l, r)), (l = r + 1)) : (i.push((l ? " " : "") + e.slice(l)), (l = a));
                for (t++; l < a; ) i.push(e.slice(l, (l += t)));
                return i.join("\r\n ");
            };
        },
        819858: (e, t, n) => {
            var i = n(691925),
                a = n(21681);
            function r(e, t, n) {
                Array.isArray(e[t]) ? e[t].push(n) : null != e[t] ? (e[t] = [e[t], n]) : (e[t] = n);
            }
            function l(e, t) {
                var n = t.split("="),
                    a = i(n[0]),
                    l = n[1];
                return (
                    (null != l && "" !== l) || ((l = n[0]), (a = "type")),
                    "type" === a
                        ? (l
                              .toLowerCase()
                              .split(",")
                              .forEach(function (t) {
                                  r(e, a, t);
                              }),
                          e)
                        : (r(e, a, l), e)
                );
            }
            e.exports = function (e) {
                for (var t = {}, n = null, s = /^([^;:]+)((?:;(?:[^;:]+))*)(?:\:(.+))?$/i, o = e.length - 1, d = 1; d < o; d++) {
                    n = e[d];
                    var u = s.exec(n);
                    if (u) {
                        var c = u[1].split("."),
                            p = c.pop(),
                            m = c.pop(),
                            g = u[3],
                            f = (u[2] ? u[2].replace(/^;|;$/g, "").split(";") : []).reduce(l, m ? { group: m } : {}),
                            h = i(p);
                        r(t, h, new a(h, g, f));
                    }
                }
                return t;
            };
        },
        21681: (e) => {
            function t(e, n, i) {
                if (!(this instanceof t)) return new t(n);
                null != i && Object.assign(this, i), (this._field = e), (this._data = n), Object.defineProperty(this, "_field", { enumerable: !1 }), Object.defineProperty(this, "_data", { enumerable: !1 });
            }
            function n(e) {
                return e.replace(/([A-Z])/g, "-$1").toUpperCase();
            }
            (t.fromJSON = function (e) {
                var n = e[0],
                    i = e[1];
                return /text/i.test(e[2]) || (i.value = e[2]), new t(n, Array.isArray(e[3]) ? e[3].join(";") : e[3], i);
            }),
                (t.prototype = {
                    constructor: t,
                    is: function (e) {
                        return (e = (e + "").toLowerCase()), Array.isArray(this.type) ? this.type.indexOf(e) : this.type === e;
                    },
                    isEmpty: function () {
                        return null == this._data && 0 === Object.keys(this).length;
                    },
                    clone: function () {
                        return new t(this._field, this._data, this);
                    },
                    toString: function (e) {
                        for (var t = (this.group ? this.group + "." : "") + n(this._field), i = Object.keys(this), a = [], r = 0; r < i.length; r++) "group" !== i[r] && a.push(n(i[r]) + "=" + this[i[r]]);
                        return t + (a.length ? ";" + a.join(";") : a) + ":" + (Array.isArray(this._data) ? this._data.join(";") : this._data);
                    },
                    valueOf: function () {
                        return this._data;
                    },
                    toJSON: function () {
                        var e = Object.assign({}, this);
                        "text" === e.value && ((e.value = void 0), delete e.value);
                        var t = [this._field, e, this.value || "text"];
                        switch (this._field) {
                            default:
                                t.push(this._data);
                                break;
                            case "adr":
                            case "n":
                                t.push(this._data.split(";"));
                        }
                        return t;
                    },
                }),
                (e.exports = t);
        },
        588960: (e, t, n) => {
            function i() {
                if (!(this instanceof i)) return new i();
                (this.version = i.versions[i.versions.length - 1]), (this.data = {});
            }
            (i.mimeType = "text/vcard"),
                (i.extension = ".vcf"),
                (i.versions = ["2.1", "3.0", "4.0"]),
                (i.foldLine = n(949874)),
                (i.normalize = function (e) {
                    return (e + "")
                        .replace(/^[\s\r\n]+|[\s\r\n]+$/g, "")
                        .replace(/(\r?\n)\s*(\r?\n)|$/g, "$1")
                        .replace(/\r?\n[\x20\x09]+/g, "");
                }),
                (i.isSupported = function (e) {
                    return /^\d\.\d$/.test(e) && -1 !== i.versions.indexOf(e);
                }),
                (i.parse = function (e) {
                    for (var t = (e + "").split(/(?=BEGIN\:VCARD)/gi), n = [], a = 0; a < t.length; a++) n.push(new i().parse(t[a]));
                    return n;
                }),
                (i.parseLines = n(819858)),
                (i.fromJSON = function (e) {
                    if (null == (e = "string" == typeof e ? JSON.parse(e) : e) || !Array.isArray(e)) return new i();
                    if (!/vcard/i.test(e[0])) throw new Error("Object not in jCard format");
                    var t = new i();
                    return (
                        e[1].forEach(function (e) {
                            t.addProperty(i.Property.fromJSON(e));
                        }),
                        t
                    );
                }),
                (i.format = function (e, t) {
                    if (((t = t || e.version || i.versions[i.versions.length - 1]), !i.isSupported(t))) throw new Error('Unsupported vCard version "' + t + '"');
                    var n = [];
                    n.push("BEGIN:VCARD"), n.push("VERSION:" + t);
                    for (var a = Object.keys(e.data), r = "", l = 0; l < a.length; l++)
                        if ("version" !== a[l])
                            if (((r = e.data[a[l]]), Array.isArray(r))) for (var s = 0; s < r.length; s++) r[s].isEmpty() || n.push(i.foldLine(r[s].toString(t), 75));
                            else r.isEmpty() || n.push(i.foldLine(r.toString(t), 75));
                    return n.push("END:VCARD"), n.join("\n");
                }),
                (i.Property = n(21681)),
                (i.prototype = {
                    constructor: i,
                    get: function (e) {
                        return null == this.data[e]
                            ? this.data[e]
                            : Array.isArray(this.data[e])
                              ? this.data[e].map(function (e) {
                                    return e.clone();
                                })
                              : this.data[e].clone();
                    },
                    set: function (e, t, n) {
                        return this.setProperty(new i.Property(e, t, n));
                    },
                    add: function (e, t, n) {
                        var a = new i.Property(e, t, n);
                        return this.addProperty(a), this;
                    },
                    setProperty: function (e) {
                        return (this.data[e._field] = e), this;
                    },
                    addProperty: function (e) {
                        var t = e._field;
                        return Array.isArray(this.data[t]) ? this.data[t].push(e) : null != this.data[t] ? (this.data[t] = [this.data[t], e]) : (this.data[t] = e), this;
                    },
                    parse: function (e) {
                        var t = i.normalize(e).split(/\r?\n/g),
                            n = t[0],
                            a = t[1],
                            r = t[t.length - 1];
                        if (!/BEGIN:VCARD/i.test(n)) throw new SyntaxError('Invalid vCard: Expected "BEGIN:VCARD" but found "' + n + '"');
                        if (!/END:VCARD/i.test(r)) throw new SyntaxError('Invalid vCard: Expected "END:VCARD" but found "' + r + '"');
                        if (!/VERSION:\d\.\d/i.test(a)) throw new SyntaxError('Invalid vCard: Expected "VERSION:\\d.\\d" but found "' + a + '"');
                        if (((this.version = a.substring(8, 11)), !i.isSupported(this.version))) throw new Error('Unsupported version "' + this.version + '"');
                        return (this.data = i.parseLines(t)), this;
                    },
                    toString: function (e, t) {
                        return (e = e || this.version), i.format(this, e);
                    },
                    toJCard: function (e) {
                        e = e || "4.0";
                        for (var t = Object.keys(this.data), n = [["version", {}, "text", e]], i = null, a = 0; a < t.length; a++)
                            if ("version" !== t[a])
                                if (((i = this.data[t[a]]), Array.isArray(i))) for (var r = 0; r < i.length; r++) n.push(i[r].toJSON());
                                else n.push(i.toJSON());
                        return ["vcard", n];
                    },
                    toJSON: function () {
                        return this.toJCard(this.version);
                    },
                }),
                (e.exports = i);
        },
        691925: (e) => {
            "use strict";
            e.exports = function () {
                var e = [].map
                    .call(arguments, function (e) {
                        return e.trim();
                    })
                    .filter(function (e) {
                        return e.length;
                    })
                    .join("-");
                return e.length
                    ? 1 === e.length
                        ? e.toLowerCase()
                        : /[_.\- ]+/.test(e)
                          ? (e = (function (e) {
                                for (var t = !1, n = 0; n < e.length; n++) {
                                    var i = e.charAt(n);
                                    t && /[a-zA-Z]/.test(i) && i.toUpperCase() === i ? ((e = e.substr(0, n) + "-" + e.substr(n)), (t = !1), n++) : (t = i.toLowerCase() === i);
                                }
                                return e;
                            })(e))
                                .replace(/^[_.\- ]+/, "")
                                .toLowerCase()
                                .replace(/[_.\- ]+(\w|$)/g, function (e, t) {
                                    return t.toUpperCase();
                                })
                          : e === e.toUpperCase()
                            ? e.toLowerCase()
                            : e[0] !== e[0].toLowerCase()
                              ? e[0].toLowerCase() + e.slice(1)
                              : e
                    : "";
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-6107ac1a.2333b65a.js.map
