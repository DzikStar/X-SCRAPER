(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-6107ac1a", "icons/IconAward-js", "icons/IconDeviceTv-js", "icons/IconFeedback-js"],
    {
        629928: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var r,
                i,
                a,
                l,
                o,
                s,
                c,
                d = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "IDVerificationQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (r = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified", storageKey: null }), (l = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified_label_hidden", storageKey: null }), { kind: "RequiredField", field: (o = { alias: null, args: null, kind: "ScalarField", name: "identity_verification_status", storageKey: null }), action: "THROW" }, (s = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "IDVerificationQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: r,
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
                                                    { kind: "InlineFragment", selections: [i, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [a, l, o, (c = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), s], storageKey: null }, c], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            c,
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
            d.hash = "6269adea05f11011ee2eec87df25951d";
            const u = d;
        },
        993770: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var r,
                i,
                a = {
                    fragment: {
                        argumentDefinitions: (r = [
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
                    operation: { argumentDefinitions: r, kind: "Operation", name: "IDVerificationUpdateHideLabelMutation", selections: i },
                    params: { id: "lqIzyQL1p3XCZg77zekzZA", metadata: {}, name: "IDVerificationUpdateHideLabelMutation", operationKind: "mutation", text: null },
                };
            a.hash = "6b62958a6368974d13a27b8fe59103e0";
            const l = a;
        },
        507421: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var r,
                i,
                a,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "PasskeyManagement_Query", selections: [{ kind: "RequiredField", field: { alias: null, args: (r = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(a = { alias: null, args: null, concreteType: "PasskeyTwoFactorAuthMethod", kind: "LinkedField", name: "passkey_auth_settings_with_view", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "client_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "created_at_ms", storageKey: null }, (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "PasskeyManagement_Query",
                        selections: [
                            {
                                alias: null,
                                args: r,
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
                                                    { kind: "InlineFragment", selections: [a, i], type: "User", abstractKey: null },
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
            l.hash = "b177c906c03e19affd73768f7a0ec360";
            const o = l;
        },
        130919: (e, t, n) => {
            "use strict";
            n.d(t, { t: () => r });
            const r = Object.freeze({ CanVerifyIdentity: "CanVerifyIdentity", IdentityNonVerifiable: "IdentityNonVerifiable", IdentityVerified: "IdentityVerified", PendingResult: "PendingResult", RequestLocked: "RequestLocked", UnavailableMissingBlueSubscription: "UnavailableMissingBlueSubscription" });
        },
        96768: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var r,
                i,
                a,
                l = {
                    fragment: {
                        argumentDefinitions: [(r = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (i = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateStripePortalUrlMutation",
                        selections: (a = [
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
                    operation: { argumentDefinitions: [i, r], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: a },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            l.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const o = l;
        },
        762815: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var r,
                i,
                a,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useIDVerificationProcessVendorQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (r = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(i = { alias: null, args: null, concreteType: "IdentityVerificationProcessInfo", kind: "LinkedField", name: "identity_verification_process_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "IdentityVerificationVendor", kind: "LinkedField", name: "vendor", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "identifier", storageKey: null }], storageKey: null }], storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useIDVerificationProcessVendorQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: r,
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
                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [i, (a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, a], type: "User", abstractKey: null },
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
                    params: { id: "_1MJNdYH_NfG1HVMWvOISA", metadata: {}, name: "useIDVerificationProcessVendorQuery", operationKind: "query", text: null },
                };
            l.hash = "e2dfe548d137a744e29f47bdd00c2ff5";
            const o = l;
        },
        786033: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var r,
                i,
                a,
                l,
                o,
                s = {
                    fragment: {
                        argumentDefinitions: [(r = { defaultValue: null, kind: "LocalArgument", name: "error_url" }), (i = { defaultValue: null, kind: "LocalArgument", name: "success_url" }), (a = { defaultValue: null, kind: "LocalArgument", name: "verification_flow" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useIDVerificationSessionUrlMutation",
                        selections: (o = [
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
                    operation: { argumentDefinitions: [i, r, a], kind: "Operation", name: "useIDVerificationSessionUrlMutation", selections: o },
                    params: { id: "EBjxezEpy-W30060X7_v6g", metadata: {}, name: "useIDVerificationSessionUrlMutation", operationKind: "mutation", text: null },
                };
            s.hash = "88a4b93bad19f92c67d5957375d338be";
            const c = s;
        },
        879113: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => m });
            var r = n(202784),
                i = n(476984),
                a = n.n(i),
                l = n(143778),
                o = n(750410),
                s = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class m extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: i, icon: a, loadingMessage: l, onRequestRetry: d, render: m, renderFailure: h, retryMessage: g, retryable: f } = this.props;
                    switch (i) {
                        case c:
                            return f ? r.createElement(o.Z, { icon: a, onRequestRetry: d, retryMessage: g }) : n ? r.createElement(s.m, { failureMessage: n }) : h();
                        case u:
                            return r.createElement(s.J, { "aria-label": e, color: t, loadingMessage: l });
                        case p:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: l.Z, retryable: !0 };
        },
        362075: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => p });
            var r = n(807896),
                i = n(202784),
                a = n(325686),
                l = n(688715),
                o = n(950822),
                s = n(386802),
                c = n(392237);
            class d extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = i.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: n } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return n ? n(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let r;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    r = JSON.parse(e.data);
                                } catch (t) {
                                    return void (n && n(`Invalid postMessage data from ${e.origin}: ${e.data}`));
                                }
                                t(r);
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
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: n, dangerouslyDisableSandbox: r, src: s, style: c, title: d } = this.props,
                        { isModal: p } = this.context,
                        m = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        h = (0, o.Z)("iframe", { allow: `${m.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, l.ju)(s), style: u.iframe, title: d, ...(r ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${n ? " allow-top-navigation" : ""}` }) });
                    return i.createElement(a.Z, { style: p ? [u.root, u.modalPadding, c] : [u.root, c] }, h);
                }
            }
            d.contextType = s.t;
            const u = c.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                p = i.forwardRef((e, t) => i.createElement(d, (0, r.Z)({ forwardedRef: t }, e)));
        },
        941978: (e, t, n) => {
            "use strict";
            n.d(t, { C: () => r });
            class r {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const t = this._load(e);
                    return !(t instanceof Promise) && !!t;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, t) {
                    if (this._cache[e]) return this._cache[e];
                    const n = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = n), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((t) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(t)
                                          .catch(() => t(!1))
                                    : t(!0);
                            }),
                    );
                }
            }
            new r();
        },
        491915: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => f });
            n(571372);
            var r = n(202784),
                i = n(325686),
                a = n(392237),
                l = n(111677),
                o = n.n(l),
                s = n(643442),
                c = n(466445),
                d = n(731708),
                u = n(154003),
                p = n(173739);
            const m = o().jcf3e7a2;
            function h({ animation: e, autoplay: t }) {
                const [n, a] = r.useState(t),
                    [l, o] = r.useState(0);
                return (
                    r.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && o(Math.round(e.currentTime));
                        });
                    }, [e]),
                    r.createElement(
                        i.Z,
                        { style: g.container },
                        r.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? r.createElement(s.default, null) : r.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        r.createElement(d.ZP, { style: g.frames }, `${l}/${e.totalFrames}`),
                        r.createElement(
                            i.Z,
                            { style: g.slider },
                            r.createElement(p.Z, {
                                "aria-label": m,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), a(!1);
                                },
                                value: l,
                            }),
                        ),
                    )
                );
            }
            const g = a.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function f(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: l, onError: o, withControls: s } = e,
                    c = r.useRef(void 0),
                    d = r.useRef({ animationLoaded: !1 }),
                    u = r.useRef(null),
                    [p, m] = r.useState(!1);
                return (
                    r.useEffect(() => {
                        function r(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: i } = d.current;
                        i ||
                            ((d.current.animationLoaded = !0),
                            y.load().then((i) => {
                                if (i && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        s = i.loadAnimation(a);
                                    (c.current = s),
                                        (s.onError = (e) => {
                                            const t = new v(e);
                                            "function" == typeof o && o(t), r(s, t);
                                        }),
                                        s.addEventListener("DOMLoaded", () => {
                                            m(!0), t && (s.play(), l && l());
                                        }),
                                        s.addEventListener("complete", () => {
                                            r(s);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, a, l, o, s]),
                    r.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    r.createElement(i.Z, null, r.createElement(i.Z, { style: [e.animationContainerStyle, b.centerAnimation] }, r.createElement("div", { ref: u, style: e.animationStyle }), s && c.current && p && r.createElement(h, { animation: c.current, autoplay: t })))
                );
            }
            f.Prepare = function () {
                return (
                    r.useEffect(() => {
                        y.load();
                    }, []),
                    null
                );
            };
            const y = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class v extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, v), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const b = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var r = n(202784),
                i = n(111677),
                a = n.n(i),
                l = n(149170),
                o = n(40644);
            const s = a().gaeb997e;
            const c = function ({ activeColor: e, label: t = s, Icon: n = l.default, iconSize: i = "normal", isDisabled: a, onClick: c, preventFocusShift: d, renderActionMenu: u, style: p, testID: m, withDarkBackground: h = !1 }) {
                const g = r.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    f = r.useMemo(() => ({ label: t }), [t]);
                return r.createElement(o.ZP, { Icon: n, activeColor: e || (h ? "white" : void 0), "aria-label": t, backgroundColor: h ? "translucentBlack77" : "transparent", color: h ? "white" : "gray700", hoverLabel: f, iconSize: i, isDisabled: a, onPress: g, preventFocusShift: d, renderMenu: u, style: p, testID: m });
            };
        },
        928088: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var r = n(202784),
                i = n(325686);
            const a = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                l = function ({ children: e }) {
                    return r.createElement(i.Z, { style: a.root }, e);
                };
        },
        88307: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var r = n(202784),
                i = n(325686),
                a = n(731708),
                l = n(392237);
            class o extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return r.createElement(a.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return t && e ? r.createElement(a.ZP, { link: t, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: t, learnMoreLink: n, subtext: l, withBottomBorder: o } = this.props;
                    return r.createElement(i.Z, { style: [s.root, o && s.bottomBorder] }, r.createElement(a.ZP, null, e), l ? (t && n ? this._renderSubtextAndLink() : r.createElement(a.ZP, { color: "gray700", size: "subtext2" }, l)) : null);
                }
            }
            o.defaultProps = { withBottomBorder: !0 };
            const s = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                c = o;
        },
        80512: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var r = n(202784),
                i = n(325686),
                a = n(815858),
                l = n(731708),
                o = n(449479),
                s = n(392237),
                c = n(451566);
            let d = 1;
            class u extends r.Component {
                constructor() {
                    super(),
                        (this._handleGateToggle = () => {
                            const { defaultOption: e, name: t, offValue: n, onChange: r, options: i, value: a } = this.props;
                            r(t, a === n ? e?.value || i[0].value : n);
                        }),
                        (this._handleAnimationComplete = () => {
                            this._radioGroupRef && this._radioGroupRef.focus();
                        }),
                        (this._setRadioGroupRef = (e) => {
                            this._radioGroupRef = e;
                        }),
                        (this._labelId = `RADIO_GROUP_${d}_LABEL`),
                        (d += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: n, label: s, name: d, offValue: u, onChange: m, options: h, value: g } = this.props;
                    return r.createElement(i.Z, { "aria-label": e, "aria-labelledby": s && !e ? this._labelId : void 0, role: "group", style: [p.root, n && p.disabled] }, r.createElement(r.Fragment, null, s ? r.createElement(i.Z, { id: this._labelId, role: "label", style: p.header }, r.createElement(i.Z, { style: p.label }, r.createElement(l.ZP, { weight: "bold" }, s), r.createElement(c.Z, { disabled: n, onValueChange: this._handleGateToggle, value: g !== u })), t ? r.createElement(l.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, h && r.createElement(a.Z, { onAnimateComplete: this._handleAnimationComplete, show: g !== u }, r.createElement(i.Z, null, r.createElement(i.Z, { style: p.radioGroup, tabIndex: 0 }, r.createElement(o.Z, { "aria-label": e || s, disabled: n, name: d, onChange: m, options: h, ref: this._setRadioGroupRef, value: g }))))));
                }
            }
            u.defaultProps = { disabled: !1 };
            const p = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        280278: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => g });
            var r = n(202784),
                i = n(325686),
                a = n(827515),
                l = n(461756),
                o = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, a.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                p = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                p[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                h = s.default.create({ root: { overflow: "hidden" } }),
                g = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [g, f] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        y = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (y.current = !0),
                                function () {
                                    y.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (y.current)
                                if (l.Z.reducedMotionEnabled) f((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== g.pendingText) {
                                    t === g.text || ((0, a.Z)(e.count) && g.count === e.count) ? f((e) => ({ ...e, pendingCount: null, pendingText: null })) : (f((n) => ({ ...n, pendingCount: e.count, pendingText: t })), g.animating || u(e.count, t, f));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            y.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              y.current && f((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && u(g.pendingCount, g.pendingText, f));
                        }, [g.animating, g.oldText]),
                        r.useMemo(() => {
                            const e = p[g.transitionDirection],
                                t = g.oldText && !l.Z.reducedMotionEnabled,
                                a = !g.animating && g.oldText && !l.Z.reducedMotionEnabled,
                                s = { ...m, ...(g.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return r.createElement(
                                i.Z,
                                { style: [h.root, n] },
                                t ? r.createElement("span", { style: s }, r.createElement(o.ZP, d, g.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(y.current, f),
                                        style: c,
                                    },
                                    r.createElement(o.ZP, d, g.text),
                                ),
                            );
                        }, [n, d, g, y, f])
                    );
                };
        },
        403556: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => C });
            var r = n(807896),
                i = n(202784),
                a = n(194504),
                l = n(235902),
                o = n(392237),
                s = n(325686),
                c = n(111677),
                d = n.n(c),
                u = n(912021),
                p = n(516951),
                m = n(731708),
                h = n(310088),
                g = n(175993),
                f = n(58881),
                y = n(530732);
            const v = d().d2414d31,
                b = () => d().ce4e85ae,
                k = d().fb9f6f39;
            class _ extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: n, query: r, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: r, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, r) => {
                            const i = o.default.theme.colors.text,
                                a = o.default.theme.colors.gray700;
                            return n || r ? (e || t ? i : a) : e ? i : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: r, children: a, color: l, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: _, style: x, to: S } = this.props,
                        { location: C } = this.state,
                        E = S ? this._getMemoizedLink(S, _) : void 0,
                        R = c ? c(S) : C?.pathname === E?.pathname,
                        Z = f.Z.generate({ backgroundColor: "transparent", color: o.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? w.pillHoverStyle.backgroundColor : void 0 }),
                        L = g ? "medium" : R ? "bold" : "medium";
                    return i.createElement(y.Z, { "aria-label": t, "aria-selected": R, focusable: !!R, interactiveStyles: Z, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [w.pillStyle] : [w.link]), ...(u && R ? [w.pillActiveStyle] : []), d ? (u ? w.compactPill : w.compactLink) : null, p ? w.roundedRect : null, x], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => i.createElement(s.Z, { style: u && w.flexGrow }, i.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(R, c, g, u) }, d && w.compactText, g && t && w.focusedText, u && w.pillTextStyle, u && R && w.pillActiveTextStyle, u && c && w.pillHoverTextStyle], weight: L }, e && i.createElement(e, { style: w.icon }), a, g || u ? null : i.createElement(s.Z, { style: R && [w.border, { backgroundColor: o.default.theme.colors[l] }] })), n ? i.createElement(h.Z, { count: n, standalone: !0, style: [w.badge, n >= 10 && w.multiDigitBadge, n >= 20 && w.truncatedCountBadge], truncatedCountFormatter: k, unreadCountLabel: v, withBorder: !1 }) : r ? i.createElement(h.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: b, withBorder: !1 }) : null));
                }
            }
            (_.contextType = g.Z), (_.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const w = o.default.create((e) => ({
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
                x = _,
                S = o.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                C = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: o, isRoundedRect: s, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = l.ZP.useProps(),
                        h = m() && !o,
                        g = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...l }, c) => {
                                    const d = h ? [S.linkRedesign, 0 === c && S.firstLinkRedesign, e && 0 === c && S.withNoPaddingStart] : void 0;
                                    return i.createElement(x, (0, r.Z)({ viewType: a }, l, { isCompact: n, isPillLink: o, isRoundedRect: s, isWebRedesign: h, style: d }), t);
                                }),
                            [e, n, o, s, h, c],
                        );
                    return i.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: o && S.gap, childrenStyle: !h && S.flexGrow, key: p, style: [o ? null : S.segmentedControl, h && S.leftAligned, d], visibleItemIndex: u }, g);
                };
        },
        40644: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => _ });
            var r = n(202784),
                i = n(325686),
                a = n(461756),
                l = n(731708),
                o = n(58881),
                s = n(530732),
                c = n(224162),
                d = n(491915),
                u = n(392237),
                p = n(551611),
                m = n(111677),
                h = n.n(m),
                g = n(891198),
                f = n(537392),
                y = n(280278);
            const v = h().e8d93005,
                b = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                k = ({ color: e, count: t }) => {
                    const n = (0, g.wl)(t, !0);
                    return r.createElement(f.ZP, null, ({ containerWidth: i }) => {
                        return r.createElement(y.ZP, { color: e, count: t, size: "subtext2", style: [b.count, ((a = i), a < u.default.theme.breakpoints.small && b.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(i) || n.length >= 5 ? v(t) : n) : void 0);
                        var a;
                    });
                };
            class _ extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: a, decoration: o } = this.props;
                            return r.createElement(c.ZP.Consumer, null, ({ direction: s }) => r.createElement(l.ZP, { color: e ? n : a, dir: s, style: [S.inner, e && "blue500" === n && S.blue500] }, r.createElement(i.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), o, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: i, iconSize: a, isActive: l, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                p = o.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                m = d && l && !e?.isHovered;
                            return r.createElement(s.Z, { hoverLabel: i, interactiveStyles: p, interactivityState: e, style: [u.default.absoluteFill, x[m ? "haloBackground" : n], !c && S.iconBackground, "small" === a && S.iconSmallBoundingBox, m && S.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: i, isFaded: l, onAnimationEnd: o, onAnimationStart: s, onError: c, showAnimation: m, transitionAnimationUrl: h } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && m) return r.createElement(d.ZP, { animation: h || p.Bf, animationContainerStyle: w[t], animationStyle: E, onAnimationEnd: o, onAnimationStart: s, onError: c });
                            {
                                const a = n && e ? e : this.props.Icon;
                                return r.createElement(a, { style: [w[t], !i && l && S.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? r.createElement(k, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: l, isDisabled: o, isPresentational: c, keyboardShortcut: p, link: m, preventFocusShift: h, renderMenu: g, renderWrapper: f = r.Fragment, style: y, testID: v } = this.props,
                        b = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return r.createElement(
                        i.Z,
                        { style: [S.root, y] },
                        r.createElement(
                            f,
                            null,
                            c
                                ? this._renderContent(l)
                                : r.createElement(s.Z, { "aria-haspopup": g ? "menu" : void 0, "aria-label": e, disabled: o, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: p, link: m, onClick: this._handlePress, preventFocusShift: h, renderMenu: g, style: [S.triggerAreaRoot, S.outlineNone], testID: v }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: r } = e,
                                          i = l || n || r || t;
                                      return this._renderContent(i, e);
                                  }),
                        ),
                        b ? r.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            _.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const w = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                x = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                S = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                C = "224.5%",
                E = { width: C, height: C };
        },
        551611: (e, t, n) => {
            "use strict";
            n.d(t, { Bf: () => i, ZP: () => l });
            var r = n(941978);
            const i = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends r.C {
                check(e) {
                    return super.check(e ?? i);
                }
            }
            const l = new a();
        },
        262754: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                i = n(890601),
                a = n(783427),
                l = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4.496 9.25c0-4.14 3.358-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.358 7.5-7.5 7.5-7.5-3.36-7.5-7.5zm7.5 9.5c-1.63 0-3.164-.41-4.505-1.13v5.82l4.498-1.87 4.502 1.87v-5.82c-1.338.72-2.869 1.13-4.495 1.13z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        875782: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                i = n(890601),
                a = n(783427),
                l = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1 4.5c0-1.105.895-2 2-2h18c1.105 0 2 .895 2 2v11c0 1.105-.895 2-2 2h-6v2h2c.552 0 1 .448 1 1s-.448 1-1 1H7c-.552 0-1-.448-1-1s.448-1 1-1h2v-2H3c-1.105 0-2-.895-2-2v-11zm10 15h2v-2h-2v2zm-8-14c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v9c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-9z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        790093: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                i = n(890601),
                a = n(783427),
                l = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        98440: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                i = n(890601),
                a = n(783427),
                l = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        226597: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                i = n(890601),
                a = n(783427),
                l = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        155353: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                i = n(890601),
                a = n(783427),
                l = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        662678: (e, t, n) => {
            "use strict";
            n.d(t, { G: () => i, Z: () => r });
            n(136728);
            const r = function (e, t) {
                return i(e, t);
            };
            function i(e, t) {
                return e.reduce(
                    (n, r, i) => {
                        const a = t ? t(r, i, e) : !!r;
                        return a && n[0].push(r), !a && n[1].push(r), n;
                    },
                    [[], []],
                );
            }
        },
        949874: (e) => {
            e.exports = function (e, t, n) {
                if (((e = e.replace(/\r?\n/g, "")), null != t && t < 5)) throw new Error("Maximum length must not be less than 5");
                if (((t = null != t ? t : 78), e.length <= t)) return e;
                t -= 4;
                var r = [],
                    i = e.length,
                    a = 0,
                    l = 0;
                if (!n) for (; ~(a = e.lastIndexOf(" ", t + l)) && !(a <= l); ) e.slice(l).length > t ? (r.push((l ? " " : "") + e.slice(l, a)), (l = a + 1)) : (r.push((l ? " " : "") + e.slice(l)), (l = i));
                for (t++; l < i; ) r.push(e.slice(l, (l += t)));
                return r.join("\r\n ");
            };
        },
        819858: (e, t, n) => {
            var r = n(691925),
                i = n(21681);
            function a(e, t, n) {
                Array.isArray(e[t]) ? e[t].push(n) : null != e[t] ? (e[t] = [e[t], n]) : (e[t] = n);
            }
            function l(e, t) {
                var n = t.split("="),
                    i = r(n[0]),
                    l = n[1];
                return (
                    (null != l && "" !== l) || ((l = n[0]), (i = "type")),
                    "type" === i
                        ? (l
                              .toLowerCase()
                              .split(",")
                              .forEach(function (t) {
                                  a(e, i, t);
                              }),
                          e)
                        : (a(e, i, l), e)
                );
            }
            e.exports = function (e) {
                for (var t = {}, n = null, o = /^([^;:]+)((?:;(?:[^;:]+))*)(?:\:(.+))?$/i, s = e.length - 1, c = 1; c < s; c++) {
                    n = e[c];
                    var d = o.exec(n);
                    if (d) {
                        var u = d[1].split("."),
                            p = u.pop(),
                            m = u.pop(),
                            h = d[3],
                            g = (d[2] ? d[2].replace(/^;|;$/g, "").split(";") : []).reduce(l, m ? { group: m } : {}),
                            f = r(p);
                        a(t, f, new i(f, h, g));
                    }
                }
                return t;
            };
        },
        21681: (e) => {
            function t(e, n, r) {
                if (!(this instanceof t)) return new t(n);
                null != r && Object.assign(this, r), (this._field = e), (this._data = n), Object.defineProperty(this, "_field", { enumerable: !1 }), Object.defineProperty(this, "_data", { enumerable: !1 });
            }
            function n(e) {
                return e.replace(/([A-Z])/g, "-$1").toUpperCase();
            }
            (t.fromJSON = function (e) {
                var n = e[0],
                    r = e[1];
                return /text/i.test(e[2]) || (r.value = e[2]), new t(n, Array.isArray(e[3]) ? e[3].join(";") : e[3], r);
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
                        for (var t = (this.group ? this.group + "." : "") + n(this._field), r = Object.keys(this), i = [], a = 0; a < r.length; a++) "group" !== r[a] && i.push(n(r[a]) + "=" + this[r[a]]);
                        return t + (i.length ? ";" + i.join(";") : i) + ":" + (Array.isArray(this._data) ? this._data.join(";") : this._data);
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
            function r() {
                if (!(this instanceof r)) return new r();
                (this.version = r.versions[r.versions.length - 1]), (this.data = {});
            }
            (r.mimeType = "text/vcard"),
                (r.extension = ".vcf"),
                (r.versions = ["2.1", "3.0", "4.0"]),
                (r.foldLine = n(949874)),
                (r.normalize = function (e) {
                    return (e + "")
                        .replace(/^[\s\r\n]+|[\s\r\n]+$/g, "")
                        .replace(/(\r?\n)\s*(\r?\n)|$/g, "$1")
                        .replace(/\r?\n[\x20\x09]+/g, "");
                }),
                (r.isSupported = function (e) {
                    return /^\d\.\d$/.test(e) && -1 !== r.versions.indexOf(e);
                }),
                (r.parse = function (e) {
                    for (var t = (e + "").split(/(?=BEGIN\:VCARD)/gi), n = [], i = 0; i < t.length; i++) n.push(new r().parse(t[i]));
                    return n;
                }),
                (r.parseLines = n(819858)),
                (r.fromJSON = function (e) {
                    if (null == (e = "string" == typeof e ? JSON.parse(e) : e) || !Array.isArray(e)) return new r();
                    if (!/vcard/i.test(e[0])) throw new Error("Object not in jCard format");
                    var t = new r();
                    return (
                        e[1].forEach(function (e) {
                            t.addProperty(r.Property.fromJSON(e));
                        }),
                        t
                    );
                }),
                (r.format = function (e, t) {
                    if (((t = t || e.version || r.versions[r.versions.length - 1]), !r.isSupported(t))) throw new Error('Unsupported vCard version "' + t + '"');
                    var n = [];
                    n.push("BEGIN:VCARD"), n.push("VERSION:" + t);
                    for (var i = Object.keys(e.data), a = "", l = 0; l < i.length; l++)
                        if ("version" !== i[l])
                            if (((a = e.data[i[l]]), Array.isArray(a))) for (var o = 0; o < a.length; o++) a[o].isEmpty() || n.push(r.foldLine(a[o].toString(t), 75));
                            else a.isEmpty() || n.push(r.foldLine(a.toString(t), 75));
                    return n.push("END:VCARD"), n.join("\n");
                }),
                (r.Property = n(21681)),
                (r.prototype = {
                    constructor: r,
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
                        return this.setProperty(new r.Property(e, t, n));
                    },
                    add: function (e, t, n) {
                        var i = new r.Property(e, t, n);
                        return this.addProperty(i), this;
                    },
                    setProperty: function (e) {
                        return (this.data[e._field] = e), this;
                    },
                    addProperty: function (e) {
                        var t = e._field;
                        return Array.isArray(this.data[t]) ? this.data[t].push(e) : null != this.data[t] ? (this.data[t] = [this.data[t], e]) : (this.data[t] = e), this;
                    },
                    parse: function (e) {
                        var t = r.normalize(e).split(/\r?\n/g),
                            n = t[0],
                            i = t[1],
                            a = t[t.length - 1];
                        if (!/BEGIN:VCARD/i.test(n)) throw new SyntaxError('Invalid vCard: Expected "BEGIN:VCARD" but found "' + n + '"');
                        if (!/END:VCARD/i.test(a)) throw new SyntaxError('Invalid vCard: Expected "END:VCARD" but found "' + a + '"');
                        if (!/VERSION:\d\.\d/i.test(i)) throw new SyntaxError('Invalid vCard: Expected "VERSION:\\d.\\d" but found "' + i + '"');
                        if (((this.version = i.substring(8, 11)), !r.isSupported(this.version))) throw new Error('Unsupported version "' + this.version + '"');
                        return (this.data = r.parseLines(t)), this;
                    },
                    toString: function (e, t) {
                        return (e = e || this.version), r.format(this, e);
                    },
                    toJCard: function (e) {
                        e = e || "4.0";
                        for (var t = Object.keys(this.data), n = [["version", {}, "text", e]], r = null, i = 0; i < t.length; i++)
                            if ("version" !== t[i])
                                if (((r = this.data[t[i]]), Array.isArray(r))) for (var a = 0; a < r.length; a++) n.push(r[a].toJSON());
                                else n.push(r.toJSON());
                        return ["vcard", n];
                    },
                    toJSON: function () {
                        return this.toJCard(this.version);
                    },
                }),
                (e.exports = r);
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
                                    var r = e.charAt(n);
                                    t && /[a-zA-Z]/.test(r) && r.toUpperCase() === r ? ((e = e.substr(0, n) + "-" + e.substr(n)), (t = !1), n++) : (t = r.toLowerCase() === r);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-6107ac1a.701d69fa.js.map
