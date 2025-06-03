"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-6107ac1a", "icons/IconBulletedList-js", "icons/IconVoice-js"],
    {
        897338: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a,
                l,
                r = {
                    fragment: {
                        argumentDefinitions: (a = [
                            { defaultValue: null, kind: "LocalArgument", name: "messageId" },
                            { defaultValue: null, kind: "LocalArgument", name: "requestId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "DMMessageDeleteMutation",
                        selections: (l = [
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "DMMessageDeleteMutation", selections: l },
                    params: { id: "BJ6DtxA2llfjnRoRjaiIiw", metadata: {}, name: "DMMessageDeleteMutation", operationKind: "mutation", text: null },
                };
            r.hash = "fe3dd704e587b1e45bf85431c18a3260";
            const o = r;
        },
        257215: () => {},
        395337: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a,
                l,
                r,
                o,
                i = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (r = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [a, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [r], storageKey: null }, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, o], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            i.hash = "42f499bfb2697230967b662ad70f78f8";
            const s = i;
        },
        858883: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a,
                l,
                r,
                o,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "conversationId" }), (l = { defaultValue: null, kind: "LocalArgument", name: "emojiReactions" }), (r = { defaultValue: null, kind: "LocalArgument", name: "messageId" }), (o = { defaultValue: null, kind: "LocalArgument", name: "reactionTypes" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useDMReactionMutationAddMutation",
                        selections: (i = [
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
                    operation: { argumentDefinitions: [a, r, o, l], kind: "Operation", name: "useDMReactionMutationAddMutation", selections: i },
                    params: { id: "VyDyV9pC2oZEj6g52hgnhA", metadata: {}, name: "useDMReactionMutationAddMutation", operationKind: "mutation", text: null },
                };
            s.hash = "a57cdb58c1da320b32c0a3a4d4202090";
            const d = s;
        },
        781054: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a,
                l,
                r,
                o,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "conversationId" }), (l = { defaultValue: null, kind: "LocalArgument", name: "emojiReactions" }), (r = { defaultValue: null, kind: "LocalArgument", name: "messageId" }), (o = { defaultValue: null, kind: "LocalArgument", name: "reactionTypes" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useDMReactionMutationRemoveMutation",
                        selections: (i = [
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
                    operation: { argumentDefinitions: [a, r, o, l], kind: "Operation", name: "useDMReactionMutationRemoveMutation", selections: i },
                    params: { id: "bV_Nim3RYHsaJwMkTXJ6ew", metadata: {}, name: "useDMReactionMutationRemoveMutation", operationKind: "mutation", text: null },
                };
            s.hash = "408e23aa034ffc8f2480a6fab3532c39";
            const d = s;
        },
        789990: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a,
                l,
                r = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "conversationId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useTypingNotifierMutation",
                        selections: (l = [
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useTypingNotifierMutation", selections: l },
                    params: { id: "HL96-xZ3Y81IEzAdczDokg", metadata: {}, name: "useTypingNotifierMutation", operationKind: "mutation", text: null },
                };
            r.hash = "016aa94bbbc10fa863737925fa5456c9";
            const o = r;
        },
        242454: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(807896),
                l = n(202784),
                r = n(325686),
                o = n(731708),
                i = n(58881),
                s = n(530732),
                d = n(392237);
            const c = d.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: n, ...u }) => {
                    const m = i.Z.generate({ backgroundColor: d.default.theme.colors.transparent, color: d.default.theme.colors[t], insetFocusRing: !0 });
                    return l.createElement(r.Z, { style: c.container }, l.createElement(s.Z, (0, a.Z)({}, u, { interactiveStyles: m, style: c.root }), l.createElement(o.ZP, { align: e, color: t }, n)));
                };
        },
        661810: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                l = n(325686),
                r = n(392237);
            function o({ spacing: e, style: t }) {
                return a.createElement(l.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? r.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = r.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        15038: (e, t, n) => {
            n.d(t, { ZP: () => c });
            var a = n(202784),
                l = n(325686),
                r = n(950822),
                o = n(392237);
            const i = (e) => (0, r.Z)("div", e);
            class s extends a.Component {
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
                    const { activeStyle: e, allowDragDrop: t, children: n, style: r } = this.props,
                        { active: o } = this.state,
                        s = t ? d.dragBorderValid : d.dragBorderInvalid;
                    return a.createElement(i, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [d.root, r, o && s, o && e] }, a.createElement(l.Z, { style: d.inner }, "function" == typeof n ? n(o) : n));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            s.defaultProps = { allowDragDrop: !0 };
            const d = o.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                c = s;
        },
        449161: (e, t, n) => {
            n.d(t, { Z: () => g });
            var a = n(807896),
                l = n(202784),
                r = n(111677),
                o = n.n(r),
                i = n(154003),
                s = n(950822),
                d = n(392237);
            const c = o().i5450bec,
                u = o().f7432494;
            class m extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                n = e.target,
                                a = n.files;
                            a.length && t && t(a), (n.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: n, onChange: r, testID: o, ...d } = this.props,
                        m = !(e?.includes("video") || e?.includes("gif"));
                    return l.createElement(l.Fragment, null, l.createElement(i.ZP, (0, a.Z)({ hoverLabel: e ? { label: m ? u : c } : void 0 }, d, { disabled: t, onPress: this._handlePress })), (0, s.Z)("input", { accept: e, disabled: t, multiple: n, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: f.input, tabIndex: -1, testID: o, type: "file" }));
                }
            }
            m.defaultProps = { disabled: !1, multiple: !1 };
            const f = d.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                g = m;
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(202784),
                l = n(325686),
                r = n(235902),
                o = n(885015),
                i = n(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: s } = r.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? a.createElement(o.Z, { style: !t && d.root, withGutter: !0 }, a.createElement(l.Z, { style: d.gapColumn }, a.createElement(l.Z, { style: [d.gap, c] })), a.createElement(l.Z, { style: d.gapText }, n), a.createElement(l.Z, { style: d.gapColumn }, a.createElement(l.Z, { style: [d.gap, c] }))) : a.createElement(l.Z, { style: [!t && d.root, s() && d.rootRedesign, d.gap, c] });
            }
            const d = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(807896),
                l = n(202784),
                r = n(325686),
                o = n(392237);
            class i extends l.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...o } = this.props,
                        i = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, s.column, n && s.withGutterColumn] }));
                    return l.createElement(r.Z, (0, a.Z)({ style: [t, s.root, n && s.withGutter] }, o), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = o.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = i;
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(202784),
                l = n(325686),
                r = n(111677),
                o = n.n(r),
                i = n(815858),
                s = n(731708),
                d = n(642153),
                c = n(530732),
                u = n(392237);
            const m = o().a35a5b10,
                f = o().fc8cd112,
                g = (e) => a.createElement(s.ZP, null, e);
            class h extends a.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: r, userScreenName: o, withFacepile: u } = this.props,
                        f = this._renderMessage();
                    return a.createElement(i.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? a.createElement(c.Z, { "aria-label": m, interactiveStyles: null, link: o ? ((g = o), `/${g}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: i }) => a.createElement(l.Z, { style: p.content }, !e && u ? a.createElement(d.Z, { userAvatarUrls: t }) : null, a.createElement(s.ZP, { color: "gray700", size: "subtext2", style: [!e && p.message, (n || i) && !!o && p.underline, r] }, e && u ? a.createElement(d.Z, { style: p.inlineFacepile, userAvatarUrls: t }) : null, f))) : a.createElement(l.Z, { style: p.content }, a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, f)));
                    var g;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : f;
                }
                _renderOneUsername(e) {
                    return a.createElement(o().I18NFormatMessage, { $i18n: "c9e6167d" }, g(e[0]));
                }
                _renderTwoUsernames(e) {
                    return a.createElement(o().I18NFormatMessage, { $i18n: "ha91d1eb" }, g(e[0]), g(e[1]));
                }
                _renderThreeUsernames(e) {
                    return a.createElement(o().I18NFormatMessage, { $i18n: "f1069f9b" }, g(e[0]), g(e[1]), g(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return a.createElement(o().I18NFormatMessage, { $i18n: "e8404c1f" }, g(e[0]), g(e[1]), n);
                }
            }
            h.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const p = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        135904: (e, t, n) => {
            n.d(t, { c: () => r, n: () => l });
            var a = n(392237);
            const l = "longform-styles",
                r = `\n    .longform-header-one {\n        font-size: ${a.default.theme.fontSizes.title2};\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.title1};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${a.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.title4};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${a.default.theme.fontSizes.title3};\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.title2};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${a.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.headline1};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};   \n        margin-bottom: ${a.default.theme.spaces.space12};\n        margin-left: calc(${a.default.theme.spaces.space28} + ${a.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${a.default.theme.spaces.space12} / 2);\n        margin-left: ${a.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${a.default.theme.spaces.space24} + ${a.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${a.default.theme.spaces.space2});\n        padding-left: calc(${a.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${a.default.theme.colors.gray900};\n        border-radius: ${a.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${a.default.theme.spaces.space28} + ${a.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${a.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${a.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, t, n) => {
            n.d(t, { Z: () => D });
            n(136728);
            var a = n(202784),
                l = n(301503),
                r = n(325686),
                o = n(595088),
                i = n(516951),
                s = n(731708),
                d = n(779802),
                c = n(537392),
                u = n(989272),
                m = n(925873),
                f = n(202253),
                g = n(786475),
                h = n(392237),
                p = n(135904);
            const b = { [d.P7.atomic]: { element: "section" }, [d.P7.header1]: { element: "h1", wrapper: a.createElement(s.ZP, null) }, [d.P7.header2]: { element: "h2", wrapper: a.createElement(s.ZP, null) } },
                y = (0, o.Z)(b).reduce((e, [t, n]) => e.set(t, n), l.DefaultDraftBlockRenderMap);
            let k = !1;
            const D = a.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: o, paragraphFontSizeOverride: s } = e;
                    a.useEffect(() => {
                        k || (u.fH(p.c, p.n), (k = !0));
                    }, []);
                    const h = [(0, f.ez)(o, s), f.aF, f.RU];
                    e.disable_entityLinkDecorator || h.push((0, f.NA)(o, s));
                    const b = m.Z.initEditorState(n, { decorators: h });
                    let D = i.Z;
                    return (
                        t &&
                            (D = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        a.createElement(c.ZP, null, ({ containerWidth: e }) => a.createElement(r.Z, { style: v.fontFamily }, a.createElement(l.Editor, { blockRenderMap: y, blockRendererFn: D, blockStyleFn: (0, d.su)(g.Z.isNarrowScreenWidth(e)), editorState: b, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                v = h.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => E, Ak: () => z, KJ: () => D, LI: () => S, P7: () => p, PW: () => _, QF: () => b, Qm: () => k, Tr: () => $, b$: () => h, db: () => I, et: () => w, fR: () => g, iH: () => C, lD: () => y, su: () => v, u4: () => x, wX: () => Z });
            var a = n(202784),
                l = n(111677),
                r = n.n(l),
                o = n(394123),
                i = n(856661),
                s = n(69893),
                d = n(474761),
                c = n(428259),
                u = n(89085),
                m = n(630715),
                f = n(731708);
            const g = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                h = (e) => [
                    { buttonTestId: "btn-bold", Icon: o.default, key: g.bold, onPress: e(g.bold) },
                    { buttonTestId: "btn-italic", Icon: i.default, key: g.italic, onPress: e(g.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: g.strikethrough, onPress: e(g.strikethrough) },
                ],
                p = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                b = (e) => [{ buttonTestId: "btn-blockquote", Icon: d.default, key: p.blockquote, onPress: e(p.blockquote) }],
                y = (e) => [
                    { buttonTestId: "btn-ul", Icon: c.default, key: p.bulleted, onPress: e(p.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: p.numbered, onPress: e(p.numbered) },
                ],
                k = "LINK",
                D = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: k, onPress: e }],
                v = (e, t) => (n) => {
                    const a = (t) => (e ? `${t}-narrow` : t);
                    switch (n.getType()) {
                        case p.bulleted:
                            return a("longform-unordered-list-item");
                        case p.blockquote:
                            return a("longform-blockquote");
                        case p.header1:
                            return a("longform-header-one");
                        case p.header2:
                            return a("longform-header-two");
                        case p.numbered:
                            return a("longform-ordered-list-item");
                        case p.paragraph:
                            return a("longform-unstyled");
                        default:
                            return t?.(n) || "";
                    }
                },
                w = r().d5a48014,
                _ = r().b92b6156,
                E = r().ec5ed598,
                S = ({ children: e, extendedWidth: t, size: n, weight: l }) => a.createElement(f.ZP, { extendedWidth: t, size: n, weight: l }, e),
                $ = { blockType: p.paragraph, label: E, component: S({ size: "body", children: E }) },
                C = [{ blockType: p.header1, label: w, component: S({ size: "title1", extendedWidth: !0, children: w }) }, { blockType: p.header2, label: _, component: S({ size: "title3", weight: "heavy", children: _ }) }, $],
                Z = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                z = ["delete", "delete-word", "delete-to-start-of-line"],
                x = "increase-text-size",
                I = "decrease-text-size";
        },
        989272: (e, t, n) => {
            n.d(t, { _i: () => l, fH: () => o, w3: () => r });
            n(136728);
            var a = n(392237);
            const l = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function r(e) {
                o(
                    (function () {
                        const e = a.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${l.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${l.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${l.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    i,
                );
                const t = s(e);
                return (
                    o(
                        (function (e) {
                            const t = s(e);
                            let n = e.placeholderTextColor;
                            const l = e.contentHorizontalPadding;
                            n || (n = a.default.theme.colors.gray700);
                            return `\n    .${t} .public-DraftEditorPlaceholder-root {\n      color: ${n};\n    }\n\n    .${t} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${n};\n    }\n\n    ${l ? `\n        .${t} .public-DraftEditor-content,\n        .${t} .public-DraftEditorPlaceholder-root {\n          padding-left: ${l};\n          padding-right: ${l};\n        }\n      ` : ""}\n  `;
                        })(e),
                        t,
                    ),
                    t
                );
            }
            function o(e, t) {
                if (
                    !(function (e) {
                        return !!document.getElementById(e);
                    })(t)
                ) {
                    const n = document.createElement("style");
                    n.setAttribute("id", t), (n.innerHTML = e);
                    const a = document.head;
                    a && a.insertBefore(n, a.firstChild);
                }
            }
            const i = "draftjs-styles";
            function s(e) {
                const t = (function (e) {
                    for (let t = 0; t < d.length; t++) {
                        if (d[t] === e) return String(t);
                    }
                    return d.push(e), String(d.length - 1);
                })(JSON.stringify(e));
                return `${i}_${t}`;
            }
            const d = [];
        },
        428259: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                l = n(890601),
                r = n(783427),
                o = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M6 13.5c-1.934 0-3.5 1.567-3.5 3.5s1.566 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.566-3.5-3.5-3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75s.788-1.75 1.75-1.75 1.75.783 1.75 1.75-.788 1.75-1.75 1.75zM22 8H12V6h10v2zM6 3.5C4.066 3.5 2.5 5.067 2.5 7s1.566 3.5 3.5 3.5S9.5 8.933 9.5 7 7.934 3.5 6 3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75S5.038 5.25 6 5.25 7.75 6.033 7.75 7 6.962 8.75 6 8.75zM22 18H12v-2h10v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        41065: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                l = n(890601),
                r = n(783427),
                o = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                l = n(890601),
                r = n(783427),
                o = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        385438: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                l = n(890601),
                r = n(783427),
                o = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M7 21V3h2v18H7zm8-2V5h2v14h-2zm-4-2V7h2v10h-2zm-8-2V9h2v6H3zm16 0V9h2v6h-2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-6107ac1a.4f4e011a.js.map
