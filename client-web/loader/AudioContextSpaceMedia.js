"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AudioContextSpaceMedia", "loader.AudioDock", "loader.AudioContextVoiceMedia", "icons/IconFeedback-js"],
    {
        668371: (e, o, t) => {
            t.d(o, { Z: () => s });
            var n,
                l,
                i,
                a = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "restId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "FollowHostButtonQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (l = [
                                    { kind: "Variable", name: "rest_id", variableName: "restId" },
                                    { kind: "Literal", name: "s", value: "2e2a" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "FollowHostButton_user" }], type: "User", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "FollowHostButtonQuery",
                        selections: [
                            {
                                alias: "user",
                                args: l,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
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
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserCore",
                                                        kind: "LinkedField",
                                                        name: "core",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }], storageKey: null },
                                                    (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    i,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "bpY370mwoHjimSkkcTSk4A", metadata: {}, name: "FollowHostButtonQuery", operationKind: "query", text: null },
                };
            a.hash = "db24c8717c0ec5cd1bc10a4703756569";
            const s = a;
        },
        813323: (e, o, t) => {
            t.d(o, { Z: () => l });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "FollowHostButton_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserCore",
                        kind: "LinkedField",
                        name: "core",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }], storageKey: null },
                ],
                type: "User",
                abstractKey: null,
                hash: "96cdf1de6cd036d1367ad367e572a535",
            };
            const l = n;
        },
        288955: (e, o, t) => {
            t.d(o, { Z: () => r });
            var n = t(807896),
                l = t(202784),
                i = t(443781),
                a = t(369241);
            class s extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showLoginPrompt: !1 }),
                        (this._getHandler =
                            (e, o) =>
                            (t, ...n) => {
                                this.props.disabled || this.context.loggedInUserId ? e && e(t, ...n) : (t && t.preventDefault && t.preventDefault(), o && o(), this.setState({ showLoginPrompt: !0 }));
                            }),
                        (this._handleClose = () => {
                            this.setState({ showLoginPrompt: !1 });
                        });
                }
                render() {
                    const { children: e, disabled: o, ...t } = this.props;
                    return l.createElement(l.Fragment, null, e(this._getHandler), this.state.showLoginPrompt && l.createElement(a.ZP, (0, n.Z)({ onClose: this._handleClose }, t)));
                }
            }
            (s.defaultProps = { disabled: !1 }), (s.contextType = i.rC);
            const r = s;
        },
        666670: (e, o, t) => {
            t.d(o, { F: () => a });
            var n = t(516951),
                l = t(615656),
                i = t(51525);
            const a = { [l.ZP.AddressBookLookupNotFound]: { customAction: i.vv }, [l.ZP.GenericUserNotFound]: { customAction: n.Z }, [l.ZP.OtherUserSuspended]: { customAction: n.Z }, showToast: !0 };
        },
        723587: (e, o, t) => {
            t.d(o, { Z: () => me });
            var n = t(202784),
                l = t(614983),
                i = t.n(l),
                a = t(111677),
                s = t.n(a),
                r = t(516951),
                d = t(616894),
                u = t(235902),
                c = t(305098);
            const m = s().i8cfb6e6,
                h = s().ea100d6a,
                p = s().fe40537f,
                b = s().ab7c3460,
                f = s().i58d8718,
                w = n.createElement(d.default, null),
                g = ({ disabled: e, displayMode: o, onUnblock: t, showRelationshipChangeConfirmation: l, size: i, style: a, testID: s, userScreenName: r }) => n.createElement(c.Z, { buttonDefaultLabel: m, buttonHoverLabel: h, buttonType: "destructiveFilled", confirmationSheetConfirmLabel: h, confirmationSheetHeadline: p({ screenName: r }), confirmationSheetText: u.ZP.useProps().isSoftBlockEnabled() ? f : b, disabled: e, displayMode: o, icon: w, onClick: t, showRelationshipChangeConfirmation: l, size: i, style: a, testID: s });
            var y = t(466999),
                C = t(76388),
                F = t(911373),
                S = t(733357),
                v = t(352924),
                k = t(392237);
            const _ = s().ee05e96b,
                T = s().f238ba1d,
                B = s().aeb6f0a0,
                x = s().a77a27c0,
                L = s().b4397192,
                Z = (e) => ({ customButtonColor: "white", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "plum500", customButtonHoverColor: "white", customButtonHoverBorderColor: "plum500" }),
                H = (e) => ({ customButtonColor: "plum500", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "transparent", customButtonHoverColor: "white", customButtonHoverBorderColor: "gray700", customButtonHoverBackgroundColor: "gray700" }),
                E = k.default.create((e) => ({ hidden: { display: "none" } })),
                D = ({ "aria-describedby": e, buttonType: o, disabled: t, displayMode: l, id: i, isSuperFollowEligible: a, isSuperFollowing: s, isTransparent: r, name: d, onSuperFollow: u, onUnSuperFollow: m, size: h, style: p, testID: b }) => {
                    const f = n.useCallback(() => {
                            s ? m() : a && u();
                        }, [a, s, u, m]),
                        w = void 0 !== d ? `@${String(d)}` : "",
                        g = s ? x : B,
                        C = w.length > 0 && void 0 !== g ? T({ followType: g, screenName: w }) : "",
                        F = s ? L : B,
                        k = s ? H(r) : o ? void 0 : Z(r),
                        D = n.useMemo(() => (void 0 !== e ? e : (0, v.F)()), [e]),
                        M = n.useCallback(() => {
                            const e = s ? x : a ? _({ followType: B, screenName: d }) : null;
                            return e && !(0, S.Z)(e) ? n.createElement(y.Z, { id: D, style: E.hidden }, e) : null;
                        }, [s, a, D, d]);
                    return n.createElement(n.Fragment, null, n.createElement(c.Z, { "aria-describedby": D, "aria-label": C, buttonDefaultLabel: g, buttonHoverLabel: F, buttonType: o, customButtonConfig: k, disabled: t, displayMode: l, id: i, onClick: f, size: h, style: p, testID: b }), void 0 === e ? M() : null);
                },
                M = Object.freeze({ user: "user", topic: "topic", list: "list", community: "community", spaces: "spaces" }),
                R = s().cda66545,
                P = s().ee05e96b,
                I = s().a8d77a25,
                N = s().d0f4f3d9,
                U = s().f238ba1d,
                z = s().j6161cab,
                K = s().i4bb9ef7,
                O = s().ge753264,
                W = s().b837c0e8,
                j = n.createElement(C.default, null),
                A = n.createElement(F.default, null),
                G = s().ddac1f1d,
                J = s().j8e33c40;
            class q extends n.Component {
                constructor(e, o) {
                    super(e, o),
                        (this._getDescribedById = () => {
                            const { "aria-describedby": e } = this.props;
                            return void 0 !== e ? e : (0, v.F)();
                        }),
                        (this._renderDescribedBy = (e, o) => {
                            const t = this._getDescribedByText();
                            return (0, S.Z)(t) ? null : n.createElement(y.Z, { id: e, style: { display: "none" } }, t);
                        }),
                        (this._getDescribedByText = () => {
                            const { buttonText: e, isFollowing: o, isSuperFollowEligible: t, isSuperFollowing: n, name: l, type: i } = this.props;
                            let a = "";
                            const s = void 0 === l ? "" : l;
                            switch (i) {
                                case M.user:
                                case M.topic:
                                case M.list:
                                    n && e.unSuperFollow ? (a = e.unSuperFollow) : o ? (a = t ? P({ followType: e.superFollow, screenName: s }) : R({ followType: e.unfollow, screenName: s })) : o || (a = R({ followType: e.follow, screenName: s }));
                                    break;
                                case M.community:
                                    a = o ? I({ screenName: s }) : R({ followType: e.follow, screenName: s });
                                    break;
                                case M.spaces:
                                    o ? (a = R({ followType: e.unfollow, screenName: s })) : o || (a = R({ followType: e.follow, screenName: s }));
                                    break;
                                default:
                                    a = "";
                            }
                            return a;
                        }),
                        (this._getText = () => {
                            const { buttonText: e, name: o, type: t } = this.props,
                                n = void 0 !== o ? o : "",
                                l = K({ title: o }),
                                i = { [M.user]: { ariaFollowName: void 0 !== o ? `@${String(o)}` : "", confirmationHeadline: z({ screenName: o }), confirmationSheetText: O }, [M.topic]: { ariaFollowName: n, confirmationHeadline: l, confirmationSheetText: W }, [M.list]: { ariaFollowName: n, confirmationHeadline: l, confirmationSheetText: void 0 }, [M.community]: { ariaFollowName: n, confirmationHeadline: G({ communityName: o }), confirmationSheetText: J }, [M.spaces]: { ariaFollowName: void 0 !== o ? `@${String(o)}` : "", confirmationHeadline: z({ screenName: o }), confirmationSheetText: O } };
                            return { ariaFollowName: i[t].ariaFollowName, followLabel: e.follow, followBackLabel: e.followBack, followingLabel: e.following, unfollowLabel: e.unfollow, superFollowLabel: e.superFollow, superFollowingLabel: e.superFollowing, unSuperFollowLabel: e.unSuperFollow, confirmationHeadline: e.confirmationHeadline || i[t].confirmationHeadline, confirmationSheetText: e.confirmationSheetText || i[t].confirmationSheetText };
                        }),
                        (this._handlePress = () => {
                            const { isFollowing: e, isSuperFollowEligible: o, isSuperFollowing: t, onFollow: n, onSuperFollow: l, onUnSuperFollow: i, onUnfollow: a } = this.props;
                            t ? i() : e ? (o ? l() : a()) : (n(), this.setState({ hasJustFollowed: !0 }));
                        }),
                        (this._handleHoverOut = () => {
                            this.state.hasJustFollowed && this.setState({ hasJustFollowed: !1 });
                        }),
                        (this.state = { hasJustFollowed: !1 });
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: o, disabled: t, displayMode: l, id: i, isFollowed: a, isFollowing: s, isSuperFollowEligible: r, isSuperFollowing: d, isTransparent: u, showRelationshipChangeConfirmation: m, size: h, style: p, testID: b, type: f, withConfirmationSheetText: w } = this.props,
                        { ariaFollowName: g, confirmationHeadline: y, confirmationSheetText: C, followBackLabel: F, followLabel: S, followingLabel: v, superFollowLabel: k, superFollowingLabel: _, unSuperFollowLabel: T, unfollowLabel: B } = this._getText(),
                        { hasJustFollowed: x } = this.state,
                        L = (o && o.followIcon) || A,
                        E = (o && o.followingIcon) || j,
                        D = "only-text" !== l ? (s ? E : L) : void 0;
                    let R = s ? v : S;
                    a && !s && F && (R = F);
                    let P = N;
                    (d || (s && r)) && (d && _ ? ((P = U), (R = _)) : r && k && ((P = U), (R = k)));
                    const I = g.length > 0 && void 0 !== R ? P({ followType: R, screenName: g }) : "",
                        z = "primaryFilled";
                    let K, O, W, G;
                    const J = u ? "brandText" : z,
                        q = u ? "destructiveText" : "destructiveOutlined",
                        Q = !d && (!s || !r) && s,
                        V = s ? "onMediaWhiteFilled" : "onMediaOutlined",
                        $ = s ? "onMediaOutlined" : "onMediaWhiteFilled";
                    f === M.community ? (K = s ? B : S) : f === M.spaces ? ((K = s ? B : S), (O = V), (W = $)) : d && T ? ((G = H(u)), (K = T)) : s ? ((K = x ? v : B), (O = x ? J : q), (W = u ? "brandText" : "primaryOutlined"), r && k && ((G = Z(u)), (K = k), (W = void 0), (O = void 0))) : ((K = a && F ? F : S), (O = u ? "brandText" : z), (W = u ? "brandText" : z));
                    const Y = this._getDescribedById();
                    return n.createElement(n.Fragment, null, n.createElement(c.Z, { "aria-describedby": Y, "aria-label": I, buttonDefaultLabel: R, buttonHoverLabel: K, buttonHoverType: O, buttonType: W, confirmationSheetConfirmLabel: B, confirmationSheetHeadline: y, confirmationSheetText: w ? C : void 0, customButtonConfig: G, disabled: t, displayMode: l, icon: D, id: i, onClick: this._handlePress, onHoverOut: this._handleHoverOut, showRelationshipChangeConfirmation: Q && m, size: h, style: p, testID: b }), void 0 === e ? this._renderDescribedBy(Y) : null);
                }
            }
            const Q = q;
            var V = t(311687);
            const $ = s().f305840e,
                Y = s().e23b20a0,
                X = s().fe04d89a,
                ee = s().i036327c,
                oe = s().j95e3097,
                te = n.createElement(V.default, null),
                ne = ({ disabled: e, displayMode: o, onCancelPendingFollow: t, showRelationshipChangeConfirmation: l, size: i, style: a, testID: s, userScreenName: r }) => n.createElement(c.Z, { buttonDefaultLabel: $, buttonHoverLabel: Y, buttonType: "primaryOutlined", confirmationSheetCancelLabel: Y, confirmationSheetConfirmLabel: X, confirmationSheetHeadline: ee, confirmationSheetText: oe({ screenName: r }), disabled: e, displayMode: o, icon: te, onClick: t, showRelationshipChangeConfirmation: l, size: i, style: a, testID: s }),
                le = Object.freeze({ follow: "follow", subscribe: "subscribe" }),
                ie = s().ec72e2f8,
                ae = s().a5f7ce12,
                se = s().c3befdbe,
                re = s().d3029dbc,
                de = s().aeb6f0a0,
                ue = s().a77a27c0,
                ce = s().b4397192;
            class me extends n.Component {
                constructor(e) {
                    super(e), this._validateProps();
                }
                componentDidUpdate() {
                    this._validateProps();
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: o, buttonText: t, buttonType: l, disabled: i, displayMode: a, id: s, isBlocking: r, isFollowRequestSent: d, isFollowed: u, isFollowing: c, isSuperFollowEligible: m, isSuperFollowing: h, isTransparent: p, name: b, onCancelPendingFollow: f, onFollow: w, onSuperFollow: y, onUnSuperFollow: C, onUnblock: F, onUnfollow: S, relationshipMode: v, showRelationshipChangeConfirmation: k, size: _, style: T, testIDs: B, type: x, withConfirmationSheetText: L } = this.props,
                        Z = r,
                        H = d,
                        E = v === le.subscribe && (m || h);
                    return Z ? n.createElement(g, { disabled: i, displayMode: a, onUnblock: F, showRelationshipChangeConfirmation: k, size: _, style: T, testID: B?.unblock, userScreenName: b }) : H ? n.createElement(ne, { disabled: i, displayMode: a, onCancelPendingFollow: f, showRelationshipChangeConfirmation: k, size: _, style: T, testID: B?.cancel, userScreenName: b }) : E ? n.createElement(D, { "aria-describedby": e, buttonType: l, disabled: i, displayMode: a, id: s, isSuperFollowEligible: m, isSuperFollowing: h, isTransparent: p, name: b, onSuperFollow: y, onUnSuperFollow: C, size: _, style: T, testID: h ? B?.manageSubscription : B?.subscribe }) : n.createElement(Q, { "aria-describedby": e, buttonIcons: o, buttonText: t, disabled: i, displayMode: a, id: s, isFollowed: u, isFollowing: c, isSuperFollowEligible: m, isSuperFollowing: h, isTransparent: p, name: b, onFollow: w, onSuperFollow: y, onUnSuperFollow: C, onUnfollow: S, showRelationshipChangeConfirmation: k, size: _, style: T, testID: c ? B?.unfollow : B?.follow, type: x, withConfirmationSheetText: L });
                }
                _validateProps() {
                    const { name: e, showRelationshipChangeConfirmation: o } = this.props,
                        t = o && "string" == typeof e,
                        n = !o;
                    i()(t || n, "When showRelationshipChangeConfirmation is true, name must be defined.");
                }
            }
            me.defaultProps = { buttonText: { follow: ie, followBack: ae, following: se, unfollow: re, superFollow: de, superFollowing: ue, unSuperFollow: ce }, displayMode: "only-text", relationshipMode: "follow", isBlocking: !1, isFollowRequestSent: !1, isTransparent: !1, onCancelPendingFollow: r.Z, onSuperFollow: r.Z, onUnblock: r.Z, onUnSuperFollow: r.Z, showRelationshipChangeConfirmation: !0, withConfirmationSheetText: !0 };
        },
        420412: (e, o, t) => {
            t.d(o, { Z: () => r });
            var n = t(202784),
                l = t(325686),
                i = t(235902),
                a = t(885015),
                s = t(392237);
            function r({ borderColor: e = "borderColor", isSlim: o = !1, label: t }) {
                const { isWebRedesign: r } = i.ZP.useProps(),
                    u = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return t ? n.createElement(a.Z, { style: !o && d.root, withGutter: !0 }, n.createElement(l.Z, { style: d.gapColumn }, n.createElement(l.Z, { style: [d.gap, u] })), n.createElement(l.Z, { style: d.gapText }, t), n.createElement(l.Z, { style: d.gapColumn }, n.createElement(l.Z, { style: [d.gap, u] }))) : n.createElement(l.Z, { style: [!o && d.root, r() && d.rootRedesign, d.gap, u] });
            }
            const d = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, o, t) => {
            t.d(o, { Z: () => d });
            var n = t(807896),
                l = t(202784),
                i = t(325686),
                a = t(392237);
            class s extends l.Component {
                render() {
                    const { children: e, style: o, withGutter: t, ...a } = this.props,
                        s = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, r.column, t && r.withGutterColumn] }));
                    return l.createElement(i.Z, (0, n.Z)({ style: [o, r.root, t && r.withGutter] }, a), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const r = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = s;
        },
        305098: (e, o, t) => {
            t.d(o, { Z: () => u });
            var n = t(807896),
                l = t(202784),
                i = t(325686),
                a = t(154003),
                s = t(190286),
                r = t(466792);
            Object.freeze({ iconText: "icon-text", onlyIcon: "only-icon", onlyText: "only-text" });
            class d extends l.Component {
                constructor(e) {
                    super(e),
                        (this._minWidth = 0),
                        (this._isMounted = !0),
                        (this._handleLabelMeasure = (e = !1) => {
                            setTimeout(() => {
                                const o = this._containerRef?.getBoundingClientRect().width,
                                    t = this._containerRef?.offsetWidth;
                                let n = 0;
                                o && t && (n = t ? o : t), (this._minWidth = Math.ceil(Math.max(this._minWidth, n))), e && this._isMounted && this.forceUpdate();
                            }, 0);
                        }),
                        (this._getCustomButtonProps = (e) => {
                            const { customButtonConfig: o } = this.props;
                            if (!o) return;
                            const { customButtonBackgroundColor: t, customButtonBorderColor: n, customButtonColor: l, customButtonHoverBackgroundColor: i, customButtonHoverBorderColor: a, customButtonHoverColor: s } = o,
                                r = { color: l, backgroundColor: t, borderColor: n };
                            return e && ((r.color = s || l), (r.backgroundColor = i || t), (r.borderColor = a || n)), r;
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
                    const { "aria-describedby": e, "aria-label": o, buttonDefaultLabel: t, buttonHoverLabel: d, buttonHoverType: u, buttonType: c, confirmationSheetCancelLabel: m, confirmationSheetConfirmLabel: h, confirmationSheetHeadline: p, confirmationSheetPrimaryButtonType: b, confirmationSheetText: f, disabled: w, displayMode: g, icon: y, id: C, onHoverOut: F, size: S, style: v, testID: k } = this.props,
                        _ = [v, { minWidth: this._minWidth }];
                    return l.createElement(
                        i.Z,
                        { ref: this._setContainerRef, style: _ },
                        l.createElement(r.Z, { onHoverIn: this._handleHoverIn, onHoverOut: F }, ({ isHovered: i }) => {
                            const s = i ? d : t,
                                r = i && u ? u : c,
                                m = this._getCustomButtonProps(i);
                            return l.createElement(a.ZP, (0, n.Z)({ "aria-describedby": e, "aria-label": "only-icon" === g ? s : o, disabled: w, icon: "only-text" !== g ? y : void 0, id: C, onPress: this._handleButtonPress, ref: this._setButtonRef, size: S, testID: k, type: r }, m), "only-icon" === g ? void 0 : s);
                        }),
                        this.state.showConfirmation ? l.createElement(s.Z, { cancelButtonLabel: m, confirmButtonLabel: h, confirmButtonType: b, headline: p, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: f }) : null,
                    );
                }
            }
            d.defaultProps = { showRelationshipChangeConfirmation: !1 };
            const u = d;
        },
        790093: (e, o, t) => {
            t.r(o), t.d(o, { default: () => r });
            var n = t(202784),
                l = t(890601),
                i = t(783427),
                a = t(347101);
            const s = (e = {}) => {
                const { direction: o } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: o });
            };
            s.metadata = { width: 24, height: 24 };
            const r = s;
        },
        98440: (e, o, t) => {
            t.r(o), t.d(o, { default: () => r });
            var n = t(202784),
                l = t(890601),
                i = t(783427),
                a = t(347101);
            const s = (e = {}) => {
                const { direction: o } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: o });
            };
            s.metadata = { width: 24, height: 24 };
            const r = s;
        },
        662678: (e, o, t) => {
            t.d(o, { G: () => l, Z: () => n });
            t(136728);
            const n = function (e, o) {
                return l(e, o);
            };
            function l(e, o) {
                return e.reduce(
                    (t, n, l) => {
                        const i = o ? o(n, l, e) : !!n;
                        return i && t[0].push(n), !i && t[1].push(n), t;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioContextSpaceMedia.11b0599a.js.map
