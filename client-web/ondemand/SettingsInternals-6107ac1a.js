"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-6107ac1a", "icons/IconAward-js", "icons/IconDeviceTv-js", "icons/IconFeedback-js", "bundle.UserFollowLists-bc6ccf4c"],
    {
        629928: (e, t, n) => {
            n.d(t, { Z: () => u });
            var i,
                l,
                o,
                a,
                r,
                s,
                d,
                c = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "IDVerificationQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified", storageKey: null }), (a = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified_label_hidden", storageKey: null }), { kind: "RequiredField", field: (r = { alias: null, args: null, kind: "ScalarField", name: "identity_verification_status", storageKey: null }), action: "THROW" }, (s = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
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
                                                    { kind: "InlineFragment", selections: [l, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [o, a, r, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), s], storageKey: null }, d], type: "User", abstractKey: null },
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
        993770: (e, t, n) => {
            n.d(t, { Z: () => a });
            var i,
                l,
                o = {
                    fragment: {
                        argumentDefinitions: (i = [
                            { defaultValue: null, kind: "LocalArgument", name: "is_identity_verified_label_hidden" },
                            { defaultValue: null, kind: "LocalArgument", name: "user_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "IDVerificationUpdateHideLabelMutation",
                        selections: (l = [
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
                    operation: { argumentDefinitions: i, kind: "Operation", name: "IDVerificationUpdateHideLabelMutation", selections: l },
                    params: { id: "lqIzyQL1p3XCZg77zekzZA", metadata: {}, name: "IDVerificationUpdateHideLabelMutation", operationKind: "mutation", text: null },
                };
            o.hash = "6b62958a6368974d13a27b8fe59103e0";
            const a = o;
        },
        507421: (e, t, n) => {
            n.d(t, { Z: () => r });
            var i,
                l,
                o,
                a = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "PasskeyManagement_Query", selections: [{ kind: "RequiredField", field: { alias: null, args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(o = { alias: null, args: null, concreteType: "PasskeyTwoFactorAuthMethod", kind: "LinkedField", name: "passkey_auth_settings_with_view", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "client_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "created_at_ms", storageKey: null }, (l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
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
                                                    { kind: "InlineFragment", selections: [o, l], type: "User", abstractKey: null },
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
                    params: { id: "8fWHnipHAqfhgFo-rAXk5w", metadata: {}, name: "PasskeyManagement_Query", operationKind: "query", text: null },
                };
            a.hash = "b177c906c03e19affd73768f7a0ec360";
            const r = a;
        },
        130919: (e, t, n) => {
            n.d(t, { t: () => i });
            const i = Object.freeze({ CanVerifyIdentity: "CanVerifyIdentity", IdentityNonVerifiable: "IdentityNonVerifiable", IdentityVerified: "IdentityVerified", PendingResult: "PendingResult", RequestLocked: "RequestLocked", UnavailableMissingBlueSubscription: "UnavailableMissingBlueSubscription" });
        },
        96768: (e, t, n) => {
            n.d(t, { Z: () => r });
            var i,
                l,
                o,
                a = {
                    fragment: {
                        argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (l = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateStripePortalUrlMutation",
                        selections: (o = [
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
                    operation: { argumentDefinitions: [l, i], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: o },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            a.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const r = a;
        },
        762815: (e, t, n) => {
            n.d(t, { Z: () => r });
            var i,
                l,
                o,
                a = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useIDVerificationProcessVendorQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(l = { alias: null, args: null, concreteType: "IdentityVerificationProcessInfo", kind: "LinkedField", name: "identity_verification_process_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "IdentityVerificationVendor", kind: "LinkedField", name: "vendor", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "identifier", storageKey: null }], storageKey: null }], storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
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
                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [l, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, o], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            o,
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
            a.hash = "e2dfe548d137a744e29f47bdd00c2ff5";
            const r = a;
        },
        786033: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i,
                l,
                o,
                a,
                r,
                s = {
                    fragment: {
                        argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "error_url" }), (l = { defaultValue: null, kind: "LocalArgument", name: "success_url" }), (o = { defaultValue: null, kind: "LocalArgument", name: "verification_flow" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useIDVerificationSessionUrlMutation",
                        selections: (r = [
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
                                    { kind: "InlineFragment", selections: (a = [{ alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null }]), type: "StartIdentityVerificationResultSuccessAu10tixSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: a, type: "StartIdentityVerificationResultSuccessSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "StartIdentityVerificationResultFailure", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [l, i, o], kind: "Operation", name: "useIDVerificationSessionUrlMutation", selections: r },
                    params: { id: "EBjxezEpy-W30060X7_v6g", metadata: {}, name: "useIDVerificationSessionUrlMutation", operationKind: "mutation", text: null },
                };
            s.hash = "88a4b93bad19f92c67d5957375d338be";
            const d = s;
        },
        723587: (e, t, n) => {
            n.d(t, { Z: () => pe });
            var i = n(202784),
                l = n(614983),
                o = n.n(l),
                a = n(111677),
                r = n.n(a),
                s = n(516951),
                d = n(616894),
                c = n(235902),
                u = n(305098);
            const p = r().i8cfb6e6,
                m = r().ea100d6a,
                h = r().fe40537f,
                g = r().ab7c3460,
                f = r().i58d8718,
                b = i.createElement(d.default, null),
                y = ({ disabled: e, displayMode: t, onUnblock: n, showRelationshipChangeConfirmation: l, size: o, style: a, testID: r, userScreenName: s }) => i.createElement(u.Z, { buttonDefaultLabel: p, buttonHoverLabel: m, buttonType: "destructiveFilled", confirmationSheetConfirmLabel: m, confirmationSheetHeadline: h({ screenName: s }), confirmationSheetText: c.ZP.useProps().isSoftBlockEnabled() ? f : g, disabled: e, displayMode: t, icon: b, onClick: n, showRelationshipChangeConfirmation: l, size: o, style: a, testID: r });
            var w = n(466999),
                v = n(76388),
                k = n(911373),
                _ = n(733357),
                C = n(352924),
                F = n(392237);
            const S = r().ee05e96b,
                x = r().f238ba1d,
                T = r().aeb6f0a0,
                L = r().a77a27c0,
                R = r().b4397192,
                B = (e) => ({ customButtonColor: "white", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "plum500", customButtonHoverColor: "white", customButtonHoverBorderColor: "plum500" }),
                I = (e) => ({ customButtonColor: "plum500", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "transparent", customButtonHoverColor: "white", customButtonHoverBorderColor: "gray700", customButtonHoverBackgroundColor: "gray700" }),
                Z = F.default.create((e) => ({ hidden: { display: "none" } })),
                M = ({ "aria-describedby": e, buttonType: t, disabled: n, displayMode: l, id: o, isSuperFollowEligible: a, isSuperFollowing: r, isTransparent: s, name: d, onSuperFollow: c, onUnSuperFollow: p, size: m, style: h, testID: g }) => {
                    const f = i.useCallback(() => {
                            r ? p() : a && c();
                        }, [a, r, c, p]),
                        b = void 0 !== d ? `@${String(d)}` : "",
                        y = r ? L : T,
                        v = b.length > 0 && void 0 !== y ? x({ followType: y, screenName: b }) : "",
                        k = r ? R : T,
                        F = r ? I(s) : t ? void 0 : B(s),
                        M = i.useMemo(() => (void 0 !== e ? e : (0, C.F)()), [e]),
                        D = i.useCallback(() => {
                            const e = r ? L : a ? S({ followType: T, screenName: d }) : null;
                            return e && !(0, _.Z)(e) ? i.createElement(w.Z, { id: M, style: Z.hidden }, e) : null;
                        }, [r, a, M, d]);
                    return i.createElement(i.Fragment, null, i.createElement(u.Z, { "aria-describedby": M, "aria-label": v, buttonDefaultLabel: y, buttonHoverLabel: k, buttonType: t, customButtonConfig: F, disabled: n, displayMode: l, id: o, onClick: f, size: m, style: h, testID: g }), void 0 === e ? D() : null);
                },
                D = Object.freeze({ user: "user", topic: "topic", list: "list", community: "community", spaces: "spaces" }),
                H = r().cda66545,
                E = r().ee05e96b,
                V = r().a8d77a25,
                z = r().d0f4f3d9,
                K = r().f238ba1d,
                P = r().j6161cab,
                W = r().i4bb9ef7,
                U = r().ge753264,
                N = r().b837c0e8,
                O = i.createElement(v.default, null),
                A = i.createElement(k.default, null),
                q = r().ddac1f1d,
                $ = r().j8e33c40;
            class G extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getDescribedById = () => {
                            const { "aria-describedby": e } = this.props;
                            return void 0 !== e ? e : (0, C.F)();
                        }),
                        (this._renderDescribedBy = (e, t) => {
                            const n = this._getDescribedByText();
                            return (0, _.Z)(n) ? null : i.createElement(w.Z, { id: e, style: { display: "none" } }, n);
                        }),
                        (this._getDescribedByText = () => {
                            const { buttonText: e, isFollowing: t, isSuperFollowEligible: n, isSuperFollowing: i, name: l, type: o } = this.props;
                            let a = "";
                            const r = void 0 === l ? "" : l;
                            switch (o) {
                                case D.user:
                                case D.topic:
                                case D.list:
                                    i && e.unSuperFollow ? (a = e.unSuperFollow) : t ? (a = n ? E({ followType: e.superFollow, screenName: r }) : H({ followType: e.unfollow, screenName: r })) : t || (a = H({ followType: e.follow, screenName: r }));
                                    break;
                                case D.community:
                                    a = t ? V({ screenName: r }) : H({ followType: e.follow, screenName: r });
                                    break;
                                case D.spaces:
                                    t ? (a = H({ followType: e.unfollow, screenName: r })) : t || (a = H({ followType: e.follow, screenName: r }));
                                    break;
                                default:
                                    a = "";
                            }
                            return a;
                        }),
                        (this._getText = () => {
                            const { buttonText: e, name: t, type: n } = this.props,
                                i = void 0 !== t ? t : "",
                                l = W({ title: t }),
                                o = { [D.user]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: P({ screenName: t }), confirmationSheetText: U }, [D.topic]: { ariaFollowName: i, confirmationHeadline: l, confirmationSheetText: N }, [D.list]: { ariaFollowName: i, confirmationHeadline: l, confirmationSheetText: void 0 }, [D.community]: { ariaFollowName: i, confirmationHeadline: q({ communityName: t }), confirmationSheetText: $ }, [D.spaces]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: P({ screenName: t }), confirmationSheetText: U } };
                            return { ariaFollowName: o[n].ariaFollowName, followLabel: e.follow, followBackLabel: e.followBack, followingLabel: e.following, unfollowLabel: e.unfollow, superFollowLabel: e.superFollow, superFollowingLabel: e.superFollowing, unSuperFollowLabel: e.unSuperFollow, confirmationHeadline: e.confirmationHeadline || o[n].confirmationHeadline, confirmationSheetText: e.confirmationSheetText || o[n].confirmationSheetText };
                        }),
                        (this._handlePress = () => {
                            const { isFollowing: e, isSuperFollowEligible: t, isSuperFollowing: n, onFollow: i, onSuperFollow: l, onUnSuperFollow: o, onUnfollow: a } = this.props;
                            n ? o() : e ? (t ? l() : a()) : (i(), this.setState({ hasJustFollowed: !0 }));
                        }),
                        (this._handleHoverOut = () => {
                            this.state.hasJustFollowed && this.setState({ hasJustFollowed: !1 });
                        }),
                        (this.state = { hasJustFollowed: !1 });
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, disabled: n, displayMode: l, id: o, isFollowed: a, isFollowing: r, isSuperFollowEligible: s, isSuperFollowing: d, isTransparent: c, showRelationshipChangeConfirmation: p, size: m, style: h, testID: g, type: f, withConfirmationSheetText: b } = this.props,
                        { ariaFollowName: y, confirmationHeadline: w, confirmationSheetText: v, followBackLabel: k, followLabel: _, followingLabel: C, superFollowLabel: F, superFollowingLabel: S, unSuperFollowLabel: x, unfollowLabel: T } = this._getText(),
                        { hasJustFollowed: L } = this.state,
                        R = (t && t.followIcon) || A,
                        Z = (t && t.followingIcon) || O,
                        M = "only-text" !== l ? (r ? Z : R) : void 0;
                    let H = r ? C : _;
                    a && !r && k && (H = k);
                    let E = z;
                    (d || (r && s)) && (d && S ? ((E = K), (H = S)) : s && F && ((E = K), (H = F)));
                    const V = y.length > 0 && void 0 !== H ? E({ followType: H, screenName: y }) : "",
                        P = "primaryFilled";
                    let W, U, N, q;
                    const $ = c ? "brandText" : P,
                        G = c ? "destructiveText" : "destructiveOutlined",
                        j = !d && (!r || !s) && r,
                        Q = r ? "onMediaWhiteFilled" : "onMediaOutlined",
                        J = r ? "onMediaOutlined" : "onMediaWhiteFilled";
                    f === D.community ? (W = r ? T : _) : f === D.spaces ? ((W = r ? T : _), (U = Q), (N = J)) : d && x ? ((q = I(c)), (W = x)) : r ? ((W = L ? C : T), (U = L ? $ : G), (N = c ? "brandText" : "primaryOutlined"), s && F && ((q = B(c)), (W = F), (N = void 0), (U = void 0))) : ((W = a && k ? k : _), (U = c ? "brandText" : P), (N = c ? "brandText" : P));
                    const X = this._getDescribedById();
                    return i.createElement(i.Fragment, null, i.createElement(u.Z, { "aria-describedby": X, "aria-label": V, buttonDefaultLabel: H, buttonHoverLabel: W, buttonHoverType: U, buttonType: N, confirmationSheetConfirmLabel: T, confirmationSheetHeadline: w, confirmationSheetText: b ? v : void 0, customButtonConfig: q, disabled: n, displayMode: l, icon: M, id: o, onClick: this._handlePress, onHoverOut: this._handleHoverOut, showRelationshipChangeConfirmation: j && p, size: m, style: h, testID: g }), void 0 === e ? this._renderDescribedBy(X) : null);
                }
            }
            const j = G;
            var Q = n(311687);
            const J = r().f305840e,
                X = r().e23b20a0,
                Y = r().fe04d89a,
                ee = r().i036327c,
                te = r().j95e3097,
                ne = i.createElement(Q.default, null),
                ie = ({ disabled: e, displayMode: t, onCancelPendingFollow: n, showRelationshipChangeConfirmation: l, size: o, style: a, testID: r, userScreenName: s }) => i.createElement(u.Z, { buttonDefaultLabel: J, buttonHoverLabel: X, buttonType: "primaryOutlined", confirmationSheetCancelLabel: X, confirmationSheetConfirmLabel: Y, confirmationSheetHeadline: ee, confirmationSheetText: te({ screenName: s }), disabled: e, displayMode: t, icon: ne, onClick: n, showRelationshipChangeConfirmation: l, size: o, style: a, testID: r }),
                le = Object.freeze({ follow: "follow", subscribe: "subscribe" }),
                oe = r().ec72e2f8,
                ae = r().a5f7ce12,
                re = r().c3befdbe,
                se = r().d3029dbc,
                de = r().aeb6f0a0,
                ce = r().a77a27c0,
                ue = r().b4397192;
            class pe extends i.Component {
                constructor(e) {
                    super(e), this._validateProps();
                }
                componentDidUpdate() {
                    this._validateProps();
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, buttonText: n, buttonType: l, disabled: o, displayMode: a, id: r, isBlocking: s, isFollowRequestSent: d, isFollowed: c, isFollowing: u, isSuperFollowEligible: p, isSuperFollowing: m, isTransparent: h, name: g, onCancelPendingFollow: f, onFollow: b, onSuperFollow: w, onUnSuperFollow: v, onUnblock: k, onUnfollow: _, relationshipMode: C, showRelationshipChangeConfirmation: F, size: S, style: x, testIDs: T, type: L, withConfirmationSheetText: R } = this.props,
                        B = s,
                        I = d,
                        Z = C === le.subscribe && (p || m);
                    return B ? i.createElement(y, { disabled: o, displayMode: a, onUnblock: k, showRelationshipChangeConfirmation: F, size: S, style: x, testID: T?.unblock, userScreenName: g }) : I ? i.createElement(ie, { disabled: o, displayMode: a, onCancelPendingFollow: f, showRelationshipChangeConfirmation: F, size: S, style: x, testID: T?.cancel, userScreenName: g }) : Z ? i.createElement(M, { "aria-describedby": e, buttonType: l, disabled: o, displayMode: a, id: r, isSuperFollowEligible: p, isSuperFollowing: m, isTransparent: h, name: g, onSuperFollow: w, onUnSuperFollow: v, size: S, style: x, testID: m ? T?.manageSubscription : T?.subscribe }) : i.createElement(j, { "aria-describedby": e, buttonIcons: t, buttonText: n, disabled: o, displayMode: a, id: r, isFollowed: c, isFollowing: u, isSuperFollowEligible: p, isSuperFollowing: m, isTransparent: h, name: g, onFollow: b, onSuperFollow: w, onUnSuperFollow: v, onUnfollow: _, showRelationshipChangeConfirmation: F, size: S, style: x, testID: u ? T?.unfollow : T?.follow, type: L, withConfirmationSheetText: R });
                }
                _validateProps() {
                    const { name: e, showRelationshipChangeConfirmation: t } = this.props,
                        n = t && "string" == typeof e,
                        i = !t;
                    o()(n || i, "When showRelationshipChangeConfirmation is true, name must be defined.");
                }
            }
            pe.defaultProps = { buttonText: { follow: oe, followBack: ae, following: re, unfollow: se, superFollow: de, superFollowing: ce, unSuperFollow: ue }, displayMode: "only-text", relationshipMode: "follow", isBlocking: !1, isFollowRequestSent: !1, isTransparent: !1, onCancelPendingFollow: s.Z, onSuperFollow: s.Z, onUnblock: s.Z, onUnSuperFollow: s.Z, showRelationshipChangeConfirmation: !0, withConfirmationSheetText: !0 };
        },
        362075: (e, t, n) => {
            n.d(t, { Z: () => p });
            var i = n(807896),
                l = n(202784),
                o = n(325686),
                a = n(688715),
                r = n(950822),
                s = n(386802),
                d = n(392237);
            class c extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = l.createRef()),
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
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: n, dangerouslyDisableSandbox: i, src: s, style: d, title: c } = this.props,
                        { isModal: p } = this.context,
                        m = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        h = (0, r.Z)("iframe", { allow: `${m.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, a.ju)(s), style: u.iframe, title: c, ...(i ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${n ? " allow-top-navigation" : ""}` }) });
                    return l.createElement(o.Z, { style: p ? [u.root, u.modalPadding, d] : [u.root, d] }, h);
                }
            }
            c.contextType = s.t;
            const u = d.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                p = l.forwardRef((e, t) => l.createElement(c, (0, i.Z)({ forwardedRef: t }, e)));
        },
        943401: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(202784),
                l = n(731708),
                o = n(392237);
            class a extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return i.createElement(l.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: n } = this.props,
                        o = r.root;
                    return t && n ? i.createElement(l.ZP, { color: "gray700", size: "subtext2", style: o }, e, " ", this._renderLearnMore()) : i.createElement(l.ZP, { color: "gray700", size: "subtext2", style: o }, e);
                }
            }
            const r = o.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                s = a;
        },
        928088: (e, t, n) => {
            n.d(t, { Z: () => a });
            var i = n(202784),
                l = n(325686);
            const o = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                a = function ({ children: e }) {
                    return i.createElement(l.Z, { style: o.root }, e);
                };
        },
        88307: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(202784),
                l = n(325686),
                o = n(731708),
                a = n(392237);
            class r extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return i.createElement(o.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return t && e ? i.createElement(o.ZP, { link: t, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: t, learnMoreLink: n, subtext: a, withBottomBorder: r } = this.props;
                    return i.createElement(l.Z, { style: [s.root, r && s.bottomBorder] }, i.createElement(o.ZP, null, e), a ? (t && n ? this._renderSubtextAndLink() : i.createElement(o.ZP, { color: "gray700", size: "subtext2" }, a)) : null);
                }
            }
            r.defaultProps = { withBottomBorder: !0 };
            const s = a.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                d = r;
        },
        80512: (e, t, n) => {
            n.d(t, { Z: () => u });
            var i = n(202784),
                l = n(325686),
                o = n(815858),
                a = n(731708),
                r = n(449479),
                s = n(392237),
                d = n(451566);
            let c = 1;
            class u extends i.Component {
                constructor() {
                    super(),
                        (this._handleGateToggle = () => {
                            const { defaultOption: e, name: t, offValue: n, onChange: i, options: l, value: o } = this.props;
                            i(t, o === n ? e?.value || l[0].value : n);
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
                    const { "aria-label": e, description: t, disabled: n, label: s, name: c, offValue: u, onChange: m, options: h, value: g } = this.props;
                    return i.createElement(l.Z, { "aria-label": e, "aria-labelledby": s && !e ? this._labelId : void 0, role: "group", style: [p.root, n && p.disabled] }, i.createElement(i.Fragment, null, s ? i.createElement(l.Z, { id: this._labelId, role: "label", style: p.header }, i.createElement(l.Z, { style: p.label }, i.createElement(a.ZP, { weight: "bold" }, s), i.createElement(d.Z, { disabled: n, onValueChange: this._handleGateToggle, value: g !== u })), t ? i.createElement(a.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, h && i.createElement(o.Z, { onAnimateComplete: this._handleAnimationComplete, show: g !== u }, i.createElement(l.Z, null, i.createElement(l.Z, { style: p.radioGroup, tabIndex: 0 }, i.createElement(r.Z, { "aria-label": e || s, disabled: n, name: c, onChange: m, options: h, ref: this._setRadioGroupRef, value: g }))))));
                }
            }
            u.defaultProps = { disabled: !1 };
            const p = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        305098: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(807896),
                l = n(202784),
                o = n(325686),
                a = n(154003),
                r = n(190286),
                s = n(466792);
            Object.freeze({ iconText: "icon-text", onlyIcon: "only-icon", onlyText: "only-text" });
            class d extends l.Component {
                constructor(e) {
                    super(e),
                        (this._minWidth = 0),
                        (this._isMounted = !0),
                        (this._handleLabelMeasure = (e = !1) => {
                            setTimeout(() => {
                                const t = this._containerRef?.getBoundingClientRect().width,
                                    n = this._containerRef?.offsetWidth;
                                let i = 0;
                                t && n && (i = n ? t : n), (this._minWidth = Math.ceil(Math.max(this._minWidth, i))), e && this._isMounted && this.forceUpdate();
                            }, 0);
                        }),
                        (this._getCustomButtonProps = (e) => {
                            const { customButtonConfig: t } = this.props;
                            if (!t) return;
                            const { customButtonBackgroundColor: n, customButtonBorderColor: i, customButtonColor: l, customButtonHoverBackgroundColor: o, customButtonHoverBorderColor: a, customButtonHoverColor: r } = t,
                                s = { color: l, backgroundColor: n, borderColor: i };
                            return e && ((s.color = r || l), (s.backgroundColor = o || n), (s.borderColor = a || i)), s;
                        }),
                        (this._handleButtonPress = (e) => {
                            e.preventDefault(), this.props.showRelationshipChangeConfirmation ? this.setState({ showConfirmation: !0 }) : ((this._minWidth = 0), this.forceUpdate(), this.props.onClick());
                        }),
                        (this._handleConfirm = (e) => {
                            (this._minWidth = 0), this.setState({ showConfirmation: !1 }), this.props.onClick(), this._buttonRef?.focus();
                        }),
                        (this._handleCancel = () => {
                            this.setState({ showConfirmation: !1 }), this._buttonRef?.focus();
                        }),
                        (this._handleHoverIn = () => {
                            this._handleLabelMeasure(!0);
                        }),
                        (this._setButtonRef = (e) => {
                            this._buttonRef = e;
                        }),
                        (this._setContainerRef = (e) => {
                            (this._containerRef = e), this._handleLabelMeasure();
                        }),
                        (this.state = { showConfirmation: !1 });
                }
                componentWillUnmount() {
                    this._isMounted = !1;
                }
                componentDidUpdate(e) {
                    e.buttonDefaultLabel !== this.props.buttonDefaultLabel && this._handleLabelMeasure();
                }
                render() {
                    const { "aria-describedby": e, "aria-label": t, buttonDefaultLabel: n, buttonHoverLabel: d, buttonHoverType: c, buttonType: u, confirmationSheetCancelLabel: p, confirmationSheetConfirmLabel: m, confirmationSheetHeadline: h, confirmationSheetPrimaryButtonType: g, confirmationSheetText: f, disabled: b, displayMode: y, icon: w, id: v, onHoverOut: k, size: _, style: C, testID: F } = this.props,
                        S = [C, { minWidth: this._minWidth }];
                    return l.createElement(
                        o.Z,
                        { ref: this._setContainerRef, style: S },
                        l.createElement(s.Z, { onHoverIn: this._handleHoverIn, onHoverOut: k }, ({ isHovered: o }) => {
                            const r = o ? d : n,
                                s = o && c ? c : u,
                                p = this._getCustomButtonProps(o);
                            return l.createElement(a.ZP, (0, i.Z)({ "aria-describedby": e, "aria-label": "only-icon" === y ? r : t, disabled: b, icon: "only-text" !== y ? w : void 0, id: v, onPress: this._handleButtonPress, ref: this._setButtonRef, size: _, testID: F, type: s }, p), "only-icon" === y ? void 0 : r);
                        }),
                        this.state.showConfirmation ? l.createElement(r.Z, { cancelButtonLabel: p, confirmButtonLabel: m, confirmButtonType: g, headline: h, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: f }) : null,
                    );
                }
            }
            d.defaultProps = { showRelationshipChangeConfirmation: !1 };
            const c = d;
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => S });
            var i = n(807896),
                l = n(202784),
                o = n(194504),
                a = n(235902),
                r = n(392237),
                s = n(325686),
                d = n(111677),
                c = n.n(d),
                u = n(912021),
                p = n(516951),
                m = n(731708),
                h = n(310088),
                g = n(175993),
                f = n(58881),
                b = n(530732);
            const y = c().d2414d31,
                w = () => c().ce4e85ae,
                v = c().fb9f6f39;
            class k extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: n, query: i, state: l } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: i, method: "push", state: { ...l, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, i) => {
                            const l = r.default.theme.colors.text,
                                o = r.default.theme.colors.gray700;
                            return n || i ? (e || t ? l : o) : e ? l : o;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: i, children: o, color: a, isActive: d, isCompact: c, isPillLink: u, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: k, style: C, to: F } = this.props,
                        { location: S } = this.state,
                        x = F ? this._getMemoizedLink(F, k) : void 0,
                        T = d ? d(F) : S?.pathname === x?.pathname,
                        L = f.Z.generate({ backgroundColor: "transparent", color: r.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? _.pillHoverStyle.backgroundColor : void 0 }),
                        R = g ? "medium" : T ? "bold" : "medium";
                    return l.createElement(b.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: L, link: x, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [_.pillStyle] : [_.link]), ...(u && T ? [_.pillActiveStyle] : []), c ? (u ? _.compactPill : _.compactLink) : null, p ? _.roundedRect : null, C], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: d }) => l.createElement(s.Z, { style: u && _.flexGrow }, l.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [_.text, { color: this._getTextColor(T, d, g, u) }, c && _.compactText, g && t && _.focusedText, u && _.pillTextStyle, u && T && _.pillActiveTextStyle, u && d && _.pillHoverTextStyle], weight: R }, e && l.createElement(e, { style: _.icon }), o, g || u ? null : l.createElement(s.Z, { style: T && [_.border, { backgroundColor: r.default.theme.colors[a] }] })), n ? l.createElement(h.Z, { count: n, standalone: !0, style: [_.badge, n >= 10 && _.multiDigitBadge, n >= 20 && _.truncatedCountBadge], truncatedCountFormatter: v, unreadCountLabel: y, withBorder: !1 }) : i ? l.createElement(h.Z, { pip: !0, standalone: !0, style: _.badgePip, textColor: "red500", unreadCountLabel: w, withBorder: !1 }) : null));
                }
            }
            (k.contextType = g.Z), (k.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const _ = r.default.create((e) => ({
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
                C = k,
                F = r.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                S = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: r, isRoundedRect: s, links: d, style: c, visibleItemIndex: u }) => {
                    const p = d
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = a.ZP.useProps(),
                        h = m() && !r,
                        g = l.useMemo(
                            () =>
                                d.filter(Boolean).map(({ label: t, viewType: o, ...a }, d) => {
                                    const c = h ? [F.linkRedesign, 0 === d && F.firstLinkRedesign, e && 0 === d && F.withNoPaddingStart] : void 0;
                                    return l.createElement(C, (0, i.Z)({ viewType: o }, a, { isCompact: n, isPillLink: r, isRoundedRect: s, isWebRedesign: h, style: c }), t);
                                }),
                            [e, n, r, s, h, d],
                        );
                    return l.createElement(o.Z, { "aria-label": t, buttonsContainerStyle: r && F.gap, childrenStyle: !h && F.flexGrow, key: p, style: [r ? null : F.segmentedControl, h && F.leftAligned, c], visibleItemIndex: u }, g);
                };
        },
        262754: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                l = n(890601),
                o = n(783427),
                a = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M4.496 9.25c0-4.14 3.358-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.358 7.5-7.5 7.5-7.5-3.36-7.5-7.5zm7.5 9.5c-1.63 0-3.164-.41-4.505-1.13v5.82l4.498-1.87 4.502 1.87v-5.82c-1.338.72-2.869 1.13-4.495 1.13z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        875782: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                l = n(890601),
                o = n(783427),
                a = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1 4.5c0-1.105.895-2 2-2h18c1.105 0 2 .895 2 2v11c0 1.105-.895 2-2 2h-6v2h2c.552 0 1 .448 1 1s-.448 1-1 1H7c-.552 0-1-.448-1-1s.448-1 1-1h2v-2H3c-1.105 0-2-.895-2-2v-11zm10 15h2v-2h-2v2zm-8-14c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v9c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-9z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        790093: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                l = n(890601),
                o = n(783427),
                a = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                l = n(890601),
                o = n(783427),
                a = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        226597: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                l = n(890601),
                o = n(783427),
                a = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        155353: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                l = n(890601),
                o = n(783427),
                a = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-6107ac1a.8e64e54a.js.map
