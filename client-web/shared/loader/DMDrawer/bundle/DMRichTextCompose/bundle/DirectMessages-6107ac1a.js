"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-6107ac1a", "icons/IconBookmarkPlusStroke-js", "icons/IconDraggable-js", "icons/IconDrawerOn-js", "icons/IconFeedback-js", "icons/IconGifPillStroke-js", "icons/IconStrikethrough-js"],
    {
        897338: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o,
                a,
                l = {
                    fragment: {
                        argumentDefinitions: (o = [
                            { defaultValue: null, kind: "LocalArgument", name: "messageId" },
                            { defaultValue: null, kind: "LocalArgument", name: "requestId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "DMMessageDeleteMutation",
                        selections: (a = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "message_id", variableName: "messageId" },
                                    { kind: "Variable", name: "request_id", variableName: "requestId" },
                                ],
                                kind: "ScalarField",
                                name: "dm_message_hide_delete",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: o, kind: "Operation", name: "DMMessageDeleteMutation", selections: a },
                    params: { id: "BJ6DtxA2llfjnRoRjaiIiw", metadata: {}, name: "DMMessageDeleteMutation", operationKind: "mutation", text: null },
                };
            l.hash = "fe3dd704e587b1e45bf85431c18a3260";
            const i = l;
        },
        257215: () => {},
        395337: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o,
                a,
                l,
                i,
                r = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (l = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [o, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [a, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [l], storageKey: null }, (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, i], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            r.hash = "42f499bfb2697230967b662ad70f78f8";
            const s = r;
        },
        858883: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o,
                a,
                l,
                i,
                r,
                s = {
                    fragment: {
                        argumentDefinitions: [(o = { defaultValue: null, kind: "LocalArgument", name: "conversationId" }), (a = { defaultValue: null, kind: "LocalArgument", name: "emojiReactions" }), (l = { defaultValue: null, kind: "LocalArgument", name: "messageId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "reactionTypes" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useDMReactionMutationAddMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    {
                                        fields: [
                                            { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                            { kind: "Variable", name: "emoji_reactions", variableName: "emojiReactions" },
                                            { kind: "Variable", name: "message_id", variableName: "messageId" },
                                            { kind: "Variable", name: "reaction_types", variableName: "reactionTypes" },
                                        ],
                                        kind: "ObjectValue",
                                        name: "dm_reactions",
                                    },
                                    { kind: "Literal", name: "s", value: "e54f" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "create_dm_reaction",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [o, l, i, a], kind: "Operation", name: "useDMReactionMutationAddMutation", selections: r },
                    params: { id: "VyDyV9pC2oZEj6g52hgnhA", metadata: {}, name: "useDMReactionMutationAddMutation", operationKind: "mutation", text: null },
                };
            s.hash = "a57cdb58c1da320b32c0a3a4d4202090";
            const d = s;
        },
        781054: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o,
                a,
                l,
                i,
                r,
                s = {
                    fragment: {
                        argumentDefinitions: [(o = { defaultValue: null, kind: "LocalArgument", name: "conversationId" }), (a = { defaultValue: null, kind: "LocalArgument", name: "emojiReactions" }), (l = { defaultValue: null, kind: "LocalArgument", name: "messageId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "reactionTypes" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useDMReactionMutationRemoveMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    {
                                        fields: [
                                            { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                            { kind: "Variable", name: "emoji_reactions", variableName: "emojiReactions" },
                                            { kind: "Variable", name: "message_id", variableName: "messageId" },
                                            { kind: "Variable", name: "reaction_types", variableName: "reactionTypes" },
                                        ],
                                        kind: "ObjectValue",
                                        name: "dm_reactions",
                                    },
                                    { kind: "Literal", name: "s", value: "e54f" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "delete_dm_reaction",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [o, l, i, a], kind: "Operation", name: "useDMReactionMutationRemoveMutation", selections: r },
                    params: { id: "bV_Nim3RYHsaJwMkTXJ6ew", metadata: {}, name: "useDMReactionMutationRemoveMutation", operationKind: "mutation", text: null },
                };
            s.hash = "408e23aa034ffc8f2480a6fab3532c39";
            const d = s;
        },
        789990: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o,
                a,
                l = {
                    fragment: {
                        argumentDefinitions: (o = [{ defaultValue: null, kind: "LocalArgument", name: "conversationId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useTypingNotifierMutation",
                        selections: (a = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                    { kind: "Literal", name: "s", value: "e54f" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "post_typing_indicator",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: o, kind: "Operation", name: "useTypingNotifierMutation", selections: a },
                    params: { id: "HL96-xZ3Y81IEzAdczDokg", metadata: {}, name: "useTypingNotifierMutation", operationKind: "mutation", text: null },
                };
            l.hash = "016aa94bbbc10fa863737925fa5456c9";
            const i = l;
        },
        242454: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(807896),
                a = n(202784),
                l = n(325686),
                i = n(731708),
                r = n(58881),
                s = n(530732),
                d = n(392237);
            const c = d.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: n, ...u }) => {
                    const m = r.Z.generate({ backgroundColor: d.default.theme.colors.transparent, color: d.default.theme.colors[t], insetFocusRing: !0 });
                    return a.createElement(l.Z, { style: c.container }, a.createElement(s.Z, (0, o.Z)({}, u, { interactiveStyles: m, style: c.root }), a.createElement(i.ZP, { align: e, color: t }, n)));
                };
        },
        661810: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                a = n(325686),
                l = n(392237);
            function i({ spacing: e, style: t }) {
                return o.createElement(a.Z, { role: "separator", style: [r.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const r = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        15038: (e, t, n) => {
            n.d(t, { ZP: () => c });
            var o = n(202784),
                a = n(325686),
                l = n(950822),
                i = n(392237);
            const r = (e) => (0, l.Z)("div", e);
            class s extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._dragEnterCount = 0),
                        (this.state = { active: !1 }),
                        (this._handleDragDrop = (e) => {
                            const { onFilesAdded: t } = this.props;
                            e.preventDefault();
                            t(Array.from(e && e.dataTransfer.files)), this._updateDragCount(0);
                        }),
                        (this._handleDragEnter = (e) => {
                            const { onDragEnter: t } = this.props;
                            e.preventDefault(), t && t(), this._updateDragCount(this._dragEnterCount + 1);
                        }),
                        (this._handleDragLeave = (e) => {
                            e.preventDefault(), this._updateDragCount(this._dragEnterCount - 1);
                        }),
                        (this._handleDragOver = (e) => {
                            e.preventDefault();
                        });
                }
                render() {
                    const { activeStyle: e, allowDragDrop: t, children: n, style: l } = this.props,
                        { active: i } = this.state,
                        s = t ? d.dragBorderValid : d.dragBorderInvalid;
                    return o.createElement(r, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [d.root, l, i && s, i && e] }, o.createElement(a.Z, { style: d.inner }, "function" == typeof n ? n(i) : n));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            s.defaultProps = { allowDragDrop: !0 };
            const d = i.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                c = s;
        },
        449161: (e, t, n) => {
            n.d(t, { Z: () => f });
            var o = n(807896),
                a = n(202784),
                l = n(111677),
                i = n.n(l),
                r = n(154003),
                s = n(950822),
                d = n(392237);
            const c = i().i5450bec,
                u = i().f7432494;
            class m extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                n = e.target,
                                o = n.files;
                            o.length && t && t(o), (n.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: n, onChange: l, testID: i, ...d } = this.props,
                        m = !(e?.includes("video") || e?.includes("gif"));
                    return a.createElement(a.Fragment, null, a.createElement(r.ZP, (0, o.Z)({ hoverLabel: e ? { label: m ? u : c } : void 0 }, d, { disabled: t, onPress: this._handlePress })), (0, s.Z)("input", { accept: e, disabled: t, multiple: n, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: h.input, tabIndex: -1, testID: i, type: "file" }));
                }
            }
            m.defaultProps = { disabled: !1, multiple: !1 };
            const h = d.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                f = m;
        },
        723587: (e, t, n) => {
            n.d(t, { Z: () => me });
            var o = n(202784),
                a = n(614983),
                l = n.n(a),
                i = n(111677),
                r = n.n(i),
                s = n(516951),
                d = n(616894),
                c = n(235902),
                u = n(305098);
            const m = r().i8cfb6e6,
                h = r().ea100d6a,
                f = r().fe40537f,
                p = r().ab7c3460,
                g = r().i58d8718,
                b = o.createElement(d.default, null),
                y = ({ disabled: e, displayMode: t, onUnblock: n, showRelationshipChangeConfirmation: a, size: l, style: i, testID: r, userScreenName: s }) => o.createElement(u.Z, { buttonDefaultLabel: m, buttonHoverLabel: h, buttonType: "destructiveFilled", confirmationSheetConfirmLabel: h, confirmationSheetHeadline: f({ screenName: s }), confirmationSheetText: c.ZP.useProps().isSoftBlockEnabled() ? g : p, disabled: e, displayMode: t, icon: b, onClick: n, showRelationshipChangeConfirmation: a, size: l, style: i, testID: r });
            var w = n(466999),
                v = n(76388),
                k = n(911373),
                D = n(733357),
                C = n(352924),
                S = n(392237);
            const _ = r().ee05e96b,
                F = r().f238ba1d,
                E = r().aeb6f0a0,
                T = r().a77a27c0,
                x = r().b4397192,
                Z = (e) => ({ customButtonColor: "white", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "plum500", customButtonHoverColor: "white", customButtonHoverBorderColor: "plum500" }),
                M = (e) => ({ customButtonColor: "plum500", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "transparent", customButtonHoverColor: "white", customButtonHoverBorderColor: "gray700", customButtonHoverBackgroundColor: "gray700" }),
                z = S.default.create((e) => ({ hidden: { display: "none" } })),
                I = ({ "aria-describedby": e, buttonType: t, disabled: n, displayMode: a, id: l, isSuperFollowEligible: i, isSuperFollowing: r, isTransparent: s, name: d, onSuperFollow: c, onUnSuperFollow: m, size: h, style: f, testID: p }) => {
                    const g = o.useCallback(() => {
                            r ? m() : i && c();
                        }, [i, r, c, m]),
                        b = void 0 !== d ? `@${String(d)}` : "",
                        y = r ? T : E,
                        v = b.length > 0 && void 0 !== y ? F({ followType: y, screenName: b }) : "",
                        k = r ? x : E,
                        S = r ? M(s) : t ? void 0 : Z(s),
                        I = o.useMemo(() => (void 0 !== e ? e : (0, C.F)()), [e]),
                        B = o.useCallback(() => {
                            const e = r ? T : i ? _({ followType: E, screenName: d }) : null;
                            return e && !(0, D.Z)(e) ? o.createElement(w.Z, { id: I, style: z.hidden }, e) : null;
                        }, [r, i, I, d]);
                    return o.createElement(o.Fragment, null, o.createElement(u.Z, { "aria-describedby": I, "aria-label": v, buttonDefaultLabel: y, buttonHoverLabel: k, buttonType: t, customButtonConfig: S, disabled: n, displayMode: a, id: l, onClick: g, size: h, style: f, testID: p }), void 0 === e ? B() : null);
                },
                B = Object.freeze({ user: "user", topic: "topic", list: "list", community: "community", spaces: "spaces" }),
                L = r().cda66545,
                H = r().ee05e96b,
                R = r().a8d77a25,
                $ = r().d0f4f3d9,
                P = r().f238ba1d,
                N = r().j6161cab,
                V = r().i4bb9ef7,
                O = r().ge753264,
                U = r().b837c0e8,
                K = o.createElement(v.default, null),
                W = o.createElement(k.default, null),
                A = r().ddac1f1d,
                j = r().j8e33c40;
            class q extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getDescribedById = () => {
                            const { "aria-describedby": e } = this.props;
                            return void 0 !== e ? e : (0, C.F)();
                        }),
                        (this._renderDescribedBy = (e, t) => {
                            const n = this._getDescribedByText();
                            return (0, D.Z)(n) ? null : o.createElement(w.Z, { id: e, style: { display: "none" } }, n);
                        }),
                        (this._getDescribedByText = () => {
                            const { buttonText: e, isFollowing: t, isSuperFollowEligible: n, isSuperFollowing: o, name: a, type: l } = this.props;
                            let i = "";
                            const r = void 0 === a ? "" : a;
                            switch (l) {
                                case B.user:
                                case B.topic:
                                case B.list:
                                    o && e.unSuperFollow ? (i = e.unSuperFollow) : t ? (i = n ? H({ followType: e.superFollow, screenName: r }) : L({ followType: e.unfollow, screenName: r })) : t || (i = L({ followType: e.follow, screenName: r }));
                                    break;
                                case B.community:
                                    i = t ? R({ screenName: r }) : L({ followType: e.follow, screenName: r });
                                    break;
                                case B.spaces:
                                    t ? (i = L({ followType: e.unfollow, screenName: r })) : t || (i = L({ followType: e.follow, screenName: r }));
                                    break;
                                default:
                                    i = "";
                            }
                            return i;
                        }),
                        (this._getText = () => {
                            const { buttonText: e, name: t, type: n } = this.props,
                                o = void 0 !== t ? t : "",
                                a = V({ title: t }),
                                l = { [B.user]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: N({ screenName: t }), confirmationSheetText: O }, [B.topic]: { ariaFollowName: o, confirmationHeadline: a, confirmationSheetText: U }, [B.list]: { ariaFollowName: o, confirmationHeadline: a, confirmationSheetText: void 0 }, [B.community]: { ariaFollowName: o, confirmationHeadline: A({ communityName: t }), confirmationSheetText: j }, [B.spaces]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: N({ screenName: t }), confirmationSheetText: O } };
                            return { ariaFollowName: l[n].ariaFollowName, followLabel: e.follow, followBackLabel: e.followBack, followingLabel: e.following, unfollowLabel: e.unfollow, superFollowLabel: e.superFollow, superFollowingLabel: e.superFollowing, unSuperFollowLabel: e.unSuperFollow, confirmationHeadline: e.confirmationHeadline || l[n].confirmationHeadline, confirmationSheetText: e.confirmationSheetText || l[n].confirmationSheetText };
                        }),
                        (this._handlePress = () => {
                            const { isFollowing: e, isSuperFollowEligible: t, isSuperFollowing: n, onFollow: o, onSuperFollow: a, onUnSuperFollow: l, onUnfollow: i } = this.props;
                            n ? l() : e ? (t ? a() : i()) : (o(), this.setState({ hasJustFollowed: !0 }));
                        }),
                        (this._handleHoverOut = () => {
                            this.state.hasJustFollowed && this.setState({ hasJustFollowed: !1 });
                        }),
                        (this.state = { hasJustFollowed: !1 });
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, disabled: n, displayMode: a, id: l, isFollowed: i, isFollowing: r, isSuperFollowEligible: s, isSuperFollowing: d, isTransparent: c, showRelationshipChangeConfirmation: m, size: h, style: f, testID: p, type: g, withConfirmationSheetText: b } = this.props,
                        { ariaFollowName: y, confirmationHeadline: w, confirmationSheetText: v, followBackLabel: k, followLabel: D, followingLabel: C, superFollowLabel: S, superFollowingLabel: _, unSuperFollowLabel: F, unfollowLabel: E } = this._getText(),
                        { hasJustFollowed: T } = this.state,
                        x = (t && t.followIcon) || W,
                        z = (t && t.followingIcon) || K,
                        I = "only-text" !== a ? (r ? z : x) : void 0;
                    let L = r ? C : D;
                    i && !r && k && (L = k);
                    let H = $;
                    (d || (r && s)) && (d && _ ? ((H = P), (L = _)) : s && S && ((H = P), (L = S)));
                    const R = y.length > 0 && void 0 !== L ? H({ followType: L, screenName: y }) : "",
                        N = "primaryFilled";
                    let V, O, U, A;
                    const j = c ? "brandText" : N,
                        q = c ? "destructiveText" : "destructiveOutlined",
                        G = !d && (!r || !s) && r,
                        J = r ? "onMediaWhiteFilled" : "onMediaOutlined",
                        Q = r ? "onMediaOutlined" : "onMediaWhiteFilled";
                    g === B.community ? (V = r ? E : D) : g === B.spaces ? ((V = r ? E : D), (O = J), (U = Q)) : d && F ? ((A = M(c)), (V = F)) : r ? ((V = T ? C : E), (O = T ? j : q), (U = c ? "brandText" : "primaryOutlined"), s && S && ((A = Z(c)), (V = S), (U = void 0), (O = void 0))) : ((V = i && k ? k : D), (O = c ? "brandText" : N), (U = c ? "brandText" : N));
                    const X = this._getDescribedById();
                    return o.createElement(o.Fragment, null, o.createElement(u.Z, { "aria-describedby": X, "aria-label": R, buttonDefaultLabel: L, buttonHoverLabel: V, buttonHoverType: O, buttonType: U, confirmationSheetConfirmLabel: E, confirmationSheetHeadline: w, confirmationSheetText: b ? v : void 0, customButtonConfig: A, disabled: n, displayMode: a, icon: I, id: l, onClick: this._handlePress, onHoverOut: this._handleHoverOut, showRelationshipChangeConfirmation: G && m, size: h, style: f, testID: p }), void 0 === e ? this._renderDescribedBy(X) : null);
                }
            }
            const G = q;
            var J = n(311687);
            const Q = r().f305840e,
                X = r().e23b20a0,
                Y = r().fe04d89a,
                ee = r().i036327c,
                te = r().j95e3097,
                ne = o.createElement(J.default, null),
                oe = ({ disabled: e, displayMode: t, onCancelPendingFollow: n, showRelationshipChangeConfirmation: a, size: l, style: i, testID: r, userScreenName: s }) => o.createElement(u.Z, { buttonDefaultLabel: Q, buttonHoverLabel: X, buttonType: "primaryOutlined", confirmationSheetCancelLabel: X, confirmationSheetConfirmLabel: Y, confirmationSheetHeadline: ee, confirmationSheetText: te({ screenName: s }), disabled: e, displayMode: t, icon: ne, onClick: n, showRelationshipChangeConfirmation: a, size: l, style: i, testID: r }),
                ae = Object.freeze({ follow: "follow", subscribe: "subscribe" }),
                le = r().ec72e2f8,
                ie = r().a5f7ce12,
                re = r().c3befdbe,
                se = r().d3029dbc,
                de = r().aeb6f0a0,
                ce = r().a77a27c0,
                ue = r().b4397192;
            class me extends o.Component {
                constructor(e) {
                    super(e), this._validateProps();
                }
                componentDidUpdate() {
                    this._validateProps();
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, buttonText: n, buttonType: a, disabled: l, displayMode: i, id: r, isBlocking: s, isFollowRequestSent: d, isFollowed: c, isFollowing: u, isSuperFollowEligible: m, isSuperFollowing: h, isTransparent: f, name: p, onCancelPendingFollow: g, onFollow: b, onSuperFollow: w, onUnSuperFollow: v, onUnblock: k, onUnfollow: D, relationshipMode: C, showRelationshipChangeConfirmation: S, size: _, style: F, testIDs: E, type: T, withConfirmationSheetText: x } = this.props,
                        Z = s,
                        M = d,
                        z = C === ae.subscribe && (m || h);
                    return Z ? o.createElement(y, { disabled: l, displayMode: i, onUnblock: k, showRelationshipChangeConfirmation: S, size: _, style: F, testID: E?.unblock, userScreenName: p }) : M ? o.createElement(oe, { disabled: l, displayMode: i, onCancelPendingFollow: g, showRelationshipChangeConfirmation: S, size: _, style: F, testID: E?.cancel, userScreenName: p }) : z ? o.createElement(I, { "aria-describedby": e, buttonType: a, disabled: l, displayMode: i, id: r, isSuperFollowEligible: m, isSuperFollowing: h, isTransparent: f, name: p, onSuperFollow: w, onUnSuperFollow: v, size: _, style: F, testID: h ? E?.manageSubscription : E?.subscribe }) : o.createElement(G, { "aria-describedby": e, buttonIcons: t, buttonText: n, disabled: l, displayMode: i, id: r, isFollowed: c, isFollowing: u, isSuperFollowEligible: m, isSuperFollowing: h, isTransparent: f, name: p, onFollow: b, onSuperFollow: w, onUnSuperFollow: v, onUnfollow: D, showRelationshipChangeConfirmation: S, size: _, style: F, testID: u ? E?.unfollow : E?.follow, type: T, withConfirmationSheetText: x });
                }
                _validateProps() {
                    const { name: e, showRelationshipChangeConfirmation: t } = this.props,
                        n = t && "string" == typeof e,
                        o = !t;
                    l()(n || o, "When showRelationshipChangeConfirmation is true, name must be defined.");
                }
            }
            me.defaultProps = { buttonText: { follow: le, followBack: ie, following: re, unfollow: se, superFollow: de, superFollowing: ce, unSuperFollow: ue }, displayMode: "only-text", relationshipMode: "follow", isBlocking: !1, isFollowRequestSent: !1, isTransparent: !1, onCancelPendingFollow: s.Z, onSuperFollow: s.Z, onUnblock: s.Z, onUnSuperFollow: s.Z, showRelationshipChangeConfirmation: !0, withConfirmationSheetText: !0 };
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(202784),
                a = n(325686),
                l = n(235902),
                i = n(885015),
                r = n(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: s } = l.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: r.default.theme.colors[e] ?? r.default.theme.colors.borderColor };
                return n ? o.createElement(i.Z, { style: !t && d.root, withGutter: !0 }, o.createElement(a.Z, { style: d.gapColumn }, o.createElement(a.Z, { style: [d.gap, c] })), o.createElement(a.Z, { style: d.gapText }, n), o.createElement(a.Z, { style: d.gapColumn }, o.createElement(a.Z, { style: [d.gap, c] }))) : o.createElement(a.Z, { style: [!t && d.root, s() && d.rootRedesign, d.gap, c] });
            }
            const d = r.default.create((e) => ({ borderColor: { backgroundColor: r.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: r.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(807896),
                a = n(202784),
                l = n(325686),
                i = n(392237);
            class r extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...i } = this.props,
                        r = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, s.column, n && s.withGutterColumn] }));
                    return a.createElement(l.Z, (0, o.Z)({ style: [t, s.root, n && s.withGutter] }, i), r);
                }
            }
            r.defaultProps = { withGutter: !1 };
            const s = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = r;
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(202784),
                a = n(325686),
                l = n(111677),
                i = n.n(l),
                r = n(815858),
                s = n(731708),
                d = n(642153),
                c = n(530732),
                u = n(392237);
            const m = i().a35a5b10,
                h = i().fc8cd112,
                f = (e) => o.createElement(s.ZP, null, e);
            class p extends o.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: l, userScreenName: i, withFacepile: u } = this.props,
                        h = this._renderMessage();
                    return o.createElement(r.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? o.createElement(c.Z, { "aria-label": m, interactiveStyles: null, link: i ? ((f = i), `/${f}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: r }) => o.createElement(a.Z, { style: g.content }, !e && u ? o.createElement(d.Z, { userAvatarUrls: t }) : null, o.createElement(s.ZP, { color: "gray700", size: "subtext2", style: [!e && g.message, (n || r) && !!i && g.underline, l] }, e && u ? o.createElement(d.Z, { style: g.inlineFacepile, userAvatarUrls: t }) : null, h))) : o.createElement(a.Z, { style: g.content }, o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, h)));
                    var f;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : h;
                }
                _renderOneUsername(e) {
                    return o.createElement(i().I18NFormatMessage, { $i18n: "c9e6167d" }, f(e[0]));
                }
                _renderTwoUsernames(e) {
                    return o.createElement(i().I18NFormatMessage, { $i18n: "ha91d1eb" }, f(e[0]), f(e[1]));
                }
                _renderThreeUsernames(e) {
                    return o.createElement(i().I18NFormatMessage, { $i18n: "f1069f9b" }, f(e[0]), f(e[1]), f(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return o.createElement(i().I18NFormatMessage, { $i18n: "e8404c1f" }, f(e[0]), f(e[1]), n);
                }
            }
            p.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const g = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        135904: (e, t, n) => {
            n.d(t, { c: () => l, n: () => a });
            var o = n(392237);
            const a = "longform-styles",
                l = `\n    .longform-header-one {\n        font-size: ${o.default.theme.fontSizes.title2};\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title1};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${o.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${o.default.theme.fontSizes.title3};\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title2};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${o.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.headline1};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};   \n        margin-bottom: ${o.default.theme.spaces.space12};\n        margin-left: calc(${o.default.theme.spaces.space28} + ${o.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${o.default.theme.spaces.space12} / 2);\n        margin-left: ${o.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${o.default.theme.spaces.space24} + ${o.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${o.default.theme.spaces.space2});\n        padding-left: calc(${o.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${o.default.theme.colors.gray900};\n        border-radius: ${o.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${o.default.theme.spaces.space28} + ${o.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, t, n) => {
            n.d(t, { Z: () => v });
            n(136728);
            var o = n(202784),
                a = n(301503),
                l = n(325686),
                i = n(595088),
                r = n(516951),
                s = n(731708),
                d = n(779802),
                c = n(537392),
                u = n(989272),
                m = n(925873),
                h = n(202253),
                f = n(786475),
                p = n(392237),
                g = n(135904);
            const b = { [d.P7.atomic]: { element: "section" }, [d.P7.header1]: { element: "h1", wrapper: o.createElement(s.ZP, null) }, [d.P7.header2]: { element: "h2", wrapper: o.createElement(s.ZP, null) } },
                y = (0, i.Z)(b).reduce((e, [t, n]) => e.set(t, n), a.DefaultDraftBlockRenderMap);
            let w = !1;
            const v = o.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: i, paragraphFontSizeOverride: s } = e;
                    o.useEffect(() => {
                        w || (u.fH(g.c, g.n), (w = !0));
                    }, []);
                    const p = [(0, h.ez)(i, s), h.aF, h.RU];
                    e.disable_entityLinkDecorator || p.push((0, h.NA)(i, s));
                    const b = m.Z.initEditorState(n, { decorators: p });
                    let v = r.Z;
                    return (
                        t &&
                            (v = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        o.createElement(c.ZP, null, ({ containerWidth: e }) => o.createElement(l.Z, { style: k.fontFamily }, o.createElement(a.Editor, { blockRenderMap: y, blockRendererFn: v, blockStyleFn: (0, d.su)(f.Z.isNarrowScreenWidth(e)), editorState: b, onChange: r.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                k = p.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => S, Ak: () => x, KJ: () => v, LI: () => _, P7: () => g, PW: () => C, QF: () => b, Qm: () => w, Tr: () => F, b$: () => p, db: () => M, et: () => D, fR: () => f, iH: () => E, lD: () => y, su: () => k, u4: () => Z, wX: () => T });
            var o = n(202784),
                a = n(111677),
                l = n.n(a),
                i = n(394123),
                r = n(856661),
                s = n(69893),
                d = n(474761),
                c = n(428259),
                u = n(89085),
                m = n(630715),
                h = n(731708);
            const f = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                p = (e) => [
                    { buttonTestId: "btn-bold", Icon: i.default, key: f.bold, onPress: e(f.bold) },
                    { buttonTestId: "btn-italic", Icon: r.default, key: f.italic, onPress: e(f.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: f.strikethrough, onPress: e(f.strikethrough) },
                ],
                g = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                b = (e) => [{ buttonTestId: "btn-blockquote", Icon: d.default, key: g.blockquote, onPress: e(g.blockquote) }],
                y = (e) => [
                    { buttonTestId: "btn-ul", Icon: c.default, key: g.bulleted, onPress: e(g.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: g.numbered, onPress: e(g.numbered) },
                ],
                w = "LINK",
                v = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: w, onPress: e }],
                k = (e, t) => (n) => {
                    const o = (t) => (e ? `${t}-narrow` : t);
                    switch (n.getType()) {
                        case g.bulleted:
                            return o("longform-unordered-list-item");
                        case g.blockquote:
                            return o("longform-blockquote");
                        case g.header1:
                            return o("longform-header-one");
                        case g.header2:
                            return o("longform-header-two");
                        case g.numbered:
                            return o("longform-ordered-list-item");
                        case g.paragraph:
                            return o("longform-unstyled");
                        default:
                            return t?.(n) || "";
                    }
                },
                D = l().d5a48014,
                C = l().b92b6156,
                S = l().ec5ed598,
                _ = ({ children: e, extendedWidth: t, size: n, weight: a }) => o.createElement(h.ZP, { extendedWidth: t, size: n, weight: a }, e),
                F = { blockType: g.paragraph, label: S, component: _({ size: "body", children: S }) },
                E = [{ blockType: g.header1, label: D, component: _({ size: "title1", extendedWidth: !0, children: D }) }, { blockType: g.header2, label: C, component: _({ size: "title3", weight: "heavy", children: C }) }, F],
                T = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                x = ["delete", "delete-word", "delete-to-start-of-line"],
                Z = "increase-text-size",
                M = "decrease-text-size";
        },
        989272: (e, t, n) => {
            n.d(t, { _i: () => a, fH: () => i, w3: () => l });
            n(136728);
            var o = n(392237);
            const a = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function l(e) {
                i(
                    (function () {
                        const e = o.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${a.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${a.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${a.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    r,
                );
                const t = s(e);
                return (
                    i(
                        (function (e) {
                            const t = s(e);
                            let n = e.placeholderTextColor;
                            const a = e.contentHorizontalPadding;
                            n || (n = o.default.theme.colors.gray700);
                            return `\n    .${t} .public-DraftEditorPlaceholder-root {\n      color: ${n};\n    }\n\n    .${t} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${n};\n    }\n\n    ${a ? `\n        .${t} .public-DraftEditor-content,\n        .${t} .public-DraftEditorPlaceholder-root {\n          padding-left: ${a};\n          padding-right: ${a};\n        }\n      ` : ""}\n  `;
                        })(e),
                        t,
                    ),
                    t
                );
            }
            function i(e, t) {
                if (
                    !(function (e) {
                        return !!document.getElementById(e);
                    })(t)
                ) {
                    const n = document.createElement("style");
                    n.setAttribute("id", t), (n.innerHTML = e);
                    const o = document.head;
                    o && o.insertBefore(n, o.firstChild);
                }
            }
            const r = "draftjs-styles";
            function s(e) {
                const t = (function (e) {
                    for (let t = 0; t < d.length; t++) {
                        if (d[t] === e) return String(t);
                    }
                    return d.push(e), String(d.length - 1);
                })(JSON.stringify(e));
                return `${r}_${t}`;
            }
            const d = [];
        },
        305098: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(807896),
                a = n(202784),
                l = n(325686),
                i = n(154003),
                r = n(190286),
                s = n(466792);
            Object.freeze({ iconText: "icon-text", onlyIcon: "only-icon", onlyText: "only-text" });
            class d extends a.Component {
                constructor(e) {
                    super(e),
                        (this._minWidth = 0),
                        (this._isMounted = !0),
                        (this._handleLabelMeasure = (e = !1) => {
                            setTimeout(() => {
                                const t = this._containerRef?.getBoundingClientRect().width,
                                    n = this._containerRef?.offsetWidth;
                                let o = 0;
                                t && n && (o = n ? t : n), (this._minWidth = Math.ceil(Math.max(this._minWidth, o))), e && this._isMounted && this.forceUpdate();
                            }, 0);
                        }),
                        (this._getCustomButtonProps = (e) => {
                            const { customButtonConfig: t } = this.props;
                            if (!t) return;
                            const { customButtonBackgroundColor: n, customButtonBorderColor: o, customButtonColor: a, customButtonHoverBackgroundColor: l, customButtonHoverBorderColor: i, customButtonHoverColor: r } = t,
                                s = { color: a, backgroundColor: n, borderColor: o };
                            return e && ((s.color = r || a), (s.backgroundColor = l || n), (s.borderColor = i || o)), s;
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
                    const { "aria-describedby": e, "aria-label": t, buttonDefaultLabel: n, buttonHoverLabel: d, buttonHoverType: c, buttonType: u, confirmationSheetCancelLabel: m, confirmationSheetConfirmLabel: h, confirmationSheetHeadline: f, confirmationSheetPrimaryButtonType: p, confirmationSheetText: g, disabled: b, displayMode: y, icon: w, id: v, onHoverOut: k, size: D, style: C, testID: S } = this.props,
                        _ = [C, { minWidth: this._minWidth }];
                    return a.createElement(
                        l.Z,
                        { ref: this._setContainerRef, style: _ },
                        a.createElement(s.Z, { onHoverIn: this._handleHoverIn, onHoverOut: k }, ({ isHovered: l }) => {
                            const r = l ? d : n,
                                s = l && c ? c : u,
                                m = this._getCustomButtonProps(l);
                            return a.createElement(i.ZP, (0, o.Z)({ "aria-describedby": e, "aria-label": "only-icon" === y ? r : t, disabled: b, icon: "only-text" !== y ? w : void 0, id: v, onPress: this._handleButtonPress, ref: this._setButtonRef, size: D, testID: S, type: s }, m), "only-icon" === y ? void 0 : r);
                        }),
                        this.state.showConfirmation ? a.createElement(r.Z, { cancelButtonLabel: m, confirmButtonLabel: h, confirmButtonType: p, headline: f, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: g }) : null,
                    );
                }
            }
            d.defaultProps = { showRelationshipChangeConfirmation: !1 };
            const c = d;
        },
        818088: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                a = n(890601),
                l = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        678773: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                a = n(890601),
                l = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        826363: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                a = n(890601),
                l = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M20 7.5H4v-3h16v3zm0 6H4v-3h16v3zm0 6H4v-3h16v3z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        790093: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                a = n(890601),
                l = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        937450: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                a = n(890601),
                l = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                a = n(890601),
                l = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        226597: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                a = n(890601),
                l = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        155353: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                a = n(890601),
                l = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        69893: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                a = n(890601),
                l = n(783427),
                i = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-6107ac1a.27a7e47a.js.map
