"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-6107ac1a", "icons/IconBookmarkPlusStroke-js", "icons/IconDraggable-js", "icons/IconDrawerOn-js", "icons/IconFeedback-js", "icons/IconGifPillStroke-js", "icons/IconStrikethrough-js"],
    {
        897338: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a,
                r,
                o = {
                    fragment: {
                        argumentDefinitions: (a = [
                            { defaultValue: null, kind: "LocalArgument", name: "messageId" },
                            { defaultValue: null, kind: "LocalArgument", name: "requestId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "DMMessageDeleteMutation",
                        selections: (r = [
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "DMMessageDeleteMutation", selections: r },
                    params: { id: "BJ6DtxA2llfjnRoRjaiIiw", metadata: {}, name: "DMMessageDeleteMutation", operationKind: "mutation", text: null },
                };
            o.hash = "fe3dd704e587b1e45bf85431c18a3260";
            const l = o;
        },
        257215: () => {},
        395337: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a,
                r,
                o,
                l,
                i = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (o = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [a, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [o], storageKey: null }, (l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, l], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            i.hash = "42f499bfb2697230967b662ad70f78f8";
            const s = i;
        },
        858883: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a,
                r,
                o,
                l,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "conversationId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "emojiReactions" }), (o = { defaultValue: null, kind: "LocalArgument", name: "messageId" }), (l = { defaultValue: null, kind: "LocalArgument", name: "reactionTypes" })],
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
                    operation: { argumentDefinitions: [a, o, l, r], kind: "Operation", name: "useDMReactionMutationAddMutation", selections: i },
                    params: { id: "VyDyV9pC2oZEj6g52hgnhA", metadata: {}, name: "useDMReactionMutationAddMutation", operationKind: "mutation", text: null },
                };
            s.hash = "a57cdb58c1da320b32c0a3a4d4202090";
            const c = s;
        },
        781054: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a,
                r,
                o,
                l,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "conversationId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "emojiReactions" }), (o = { defaultValue: null, kind: "LocalArgument", name: "messageId" }), (l = { defaultValue: null, kind: "LocalArgument", name: "reactionTypes" })],
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
                    operation: { argumentDefinitions: [a, o, l, r], kind: "Operation", name: "useDMReactionMutationRemoveMutation", selections: i },
                    params: { id: "bV_Nim3RYHsaJwMkTXJ6ew", metadata: {}, name: "useDMReactionMutationRemoveMutation", operationKind: "mutation", text: null },
                };
            s.hash = "408e23aa034ffc8f2480a6fab3532c39";
            const c = s;
        },
        789990: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a,
                r,
                o = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "conversationId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useTypingNotifierMutation",
                        selections: (r = [
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useTypingNotifierMutation", selections: r },
                    params: { id: "HL96-xZ3Y81IEzAdczDokg", metadata: {}, name: "useTypingNotifierMutation", operationKind: "mutation", text: null },
                };
            o.hash = "016aa94bbbc10fa863737925fa5456c9";
            const l = o;
        },
        242454: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(807896),
                r = n(202784),
                o = n(325686),
                l = n(731708),
                i = n(58881),
                s = n(530732),
                c = n(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: n, ...u }) => {
                    const m = i.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return r.createElement(o.Z, { style: d.container }, r.createElement(s.Z, (0, a.Z)({}, u, { interactiveStyles: m, style: d.root }), r.createElement(l.ZP, { align: e, color: t }, n)));
                };
        },
        661810: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(325686),
                o = n(392237);
            function l({ spacing: e, style: t }) {
                return a.createElement(r.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? o.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = o.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        15038: (e, t, n) => {
            n.d(t, { ZP: () => d });
            var a = n(202784),
                r = n(325686),
                o = n(950822),
                l = n(392237);
            const i = (e) => (0, o.Z)("div", e);
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
                    const { activeStyle: e, allowDragDrop: t, children: n, style: o } = this.props,
                        { active: l } = this.state,
                        s = t ? c.dragBorderValid : c.dragBorderInvalid;
                    return a.createElement(i, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [c.root, o, l && s, l && e] }, a.createElement(r.Z, { style: c.inner }, "function" == typeof n ? n(l) : n));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            s.defaultProps = { allowDragDrop: !0 };
            const c = l.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                d = s;
        },
        449161: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(807896),
                r = n(202784),
                o = n(111677),
                l = n.n(o),
                i = n(154003),
                s = n(950822),
                c = n(392237);
            const d = l().i5450bec,
                u = l().f7432494;
            class m extends r.Component {
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
                    const { accept: e, disabled: t, multiple: n, onChange: o, testID: l, ...c } = this.props,
                        m = !(e?.includes("video") || e?.includes("gif"));
                    return r.createElement(r.Fragment, null, r.createElement(i.ZP, (0, a.Z)({ hoverLabel: e ? { label: m ? u : d } : void 0 }, c, { disabled: t, onPress: this._handlePress })), (0, s.Z)("input", { accept: e, disabled: t, multiple: n, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: h.input, tabIndex: -1, testID: l, type: "file" }));
                }
            }
            m.defaultProps = { disabled: !1, multiple: !1 };
            const h = c.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                f = m;
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(202784),
                r = n(325686),
                o = n(235902),
                l = n(885015),
                i = n(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: s } = o.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? a.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(r.Z, { style: c.gapColumn }, a.createElement(r.Z, { style: [c.gap, d] })), a.createElement(r.Z, { style: c.gapText }, n), a.createElement(r.Z, { style: c.gapColumn }, a.createElement(r.Z, { style: [c.gap, d] }))) : a.createElement(r.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(807896),
                r = n(202784),
                o = n(325686),
                l = n(392237);
            class i extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...l } = this.props,
                        i = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, s.column, n && s.withGutterColumn] }));
                    return r.createElement(o.Z, (0, a.Z)({ style: [t, s.root, n && s.withGutter] }, l), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => g });
            var a = n(202784),
                r = n(325686),
                o = n(111677),
                l = n.n(o),
                i = n(815858),
                s = n(731708),
                c = n(642153),
                d = n(530732),
                u = n(392237);
            const m = l().a35a5b10,
                h = l().fc8cd112,
                f = (e) => a.createElement(s.ZP, null, e);
            class g extends a.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: o, userScreenName: l, withFacepile: u } = this.props,
                        h = this._renderMessage();
                    return a.createElement(i.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? a.createElement(d.Z, { "aria-label": m, interactiveStyles: null, link: l ? ((f = l), `/${f}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: i }) => a.createElement(r.Z, { style: p.content }, !e && u ? a.createElement(c.Z, { userAvatarUrls: t }) : null, a.createElement(s.ZP, { color: "gray700", size: "subtext2", style: [!e && p.message, (n || i) && !!l && p.underline, o] }, e && u ? a.createElement(c.Z, { style: p.inlineFacepile, userAvatarUrls: t }) : null, h))) : a.createElement(r.Z, { style: p.content }, a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, h)));
                    var f;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : h;
                }
                _renderOneUsername(e) {
                    return a.createElement(l().I18NFormatMessage, { $i18n: "c9e6167d" }, f(e[0]));
                }
                _renderTwoUsernames(e) {
                    return a.createElement(l().I18NFormatMessage, { $i18n: "ha91d1eb" }, f(e[0]), f(e[1]));
                }
                _renderThreeUsernames(e) {
                    return a.createElement(l().I18NFormatMessage, { $i18n: "f1069f9b" }, f(e[0]), f(e[1]), f(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return a.createElement(l().I18NFormatMessage, { $i18n: "e8404c1f" }, f(e[0]), f(e[1]), n);
                }
            }
            g.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const p = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        135904: (e, t, n) => {
            n.d(t, { c: () => o, n: () => r });
            var a = n(392237);
            const r = "longform-styles",
                o = `\n    .longform-header-one {\n        font-size: ${a.default.theme.fontSizes.title2};\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.title1};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${a.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.title4};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${a.default.theme.fontSizes.title3};\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.title2};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${a.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.headline1};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};   \n        margin-bottom: ${a.default.theme.spaces.space12};\n        margin-left: calc(${a.default.theme.spaces.space28} + ${a.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${a.default.theme.spaces.space12} / 2);\n        margin-left: ${a.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${a.default.theme.spaces.space24} + ${a.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${a.default.theme.spaces.space2});\n        padding-left: calc(${a.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${a.default.theme.colors.gray900};\n        border-radius: ${a.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${a.default.theme.spaces.space28} + ${a.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${a.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${a.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, t, n) => {
            n.d(t, { Z: () => k });
            n(136728);
            var a = n(202784),
                r = n(301503),
                o = n(325686),
                l = n(595088),
                i = n(516951),
                s = n(731708),
                c = n(779802),
                d = n(537392),
                u = n(989272),
                m = n(925873),
                h = n(202253),
                f = n(786475),
                g = n(392237),
                p = n(135904);
            const b = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: a.createElement(s.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: a.createElement(s.ZP, null) } },
                y = (0, l.Z)(b).reduce((e, [t, n]) => e.set(t, n), r.DefaultDraftBlockRenderMap);
            let v = !1;
            const k = a.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: l, paragraphFontSizeOverride: s } = e;
                    a.useEffect(() => {
                        v || (u.fH(p.c, p.n), (v = !0));
                    }, []);
                    const g = [(0, h.ez)(l, s), h.aF, h.RU];
                    e.disable_entityLinkDecorator || g.push((0, h.NA)(l, s));
                    const b = m.Z.initEditorState(n, { decorators: g });
                    let k = i.Z;
                    return (
                        t &&
                            (k = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        a.createElement(d.ZP, null, ({ containerWidth: e }) => a.createElement(o.Z, { style: D.fontFamily }, a.createElement(r.Editor, { blockRenderMap: y, blockRendererFn: k, blockStyleFn: (0, c.su)(f.Z.isNarrowScreenWidth(e)), editorState: b, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                D = g.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => C, Ak: () => P, KJ: () => k, LI: () => Z, P7: () => p, PW: () => E, QF: () => b, Qm: () => v, Tr: () => _, b$: () => g, db: () => M, et: () => w, fR: () => f, iH: () => S, lD: () => y, su: () => D, u4: () => z, wX: () => x });
            var a = n(202784),
                r = n(111677),
                o = n.n(r),
                l = n(394123),
                i = n(856661),
                s = n(69893),
                c = n(474761),
                d = n(428259),
                u = n(89085),
                m = n(630715),
                h = n(731708);
            const f = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                g = (e) => [
                    { buttonTestId: "btn-bold", Icon: l.default, key: f.bold, onPress: e(f.bold) },
                    { buttonTestId: "btn-italic", Icon: i.default, key: f.italic, onPress: e(f.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: f.strikethrough, onPress: e(f.strikethrough) },
                ],
                p = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                b = (e) => [{ buttonTestId: "btn-blockquote", Icon: c.default, key: p.blockquote, onPress: e(p.blockquote) }],
                y = (e) => [
                    { buttonTestId: "btn-ul", Icon: d.default, key: p.bulleted, onPress: e(p.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: p.numbered, onPress: e(p.numbered) },
                ],
                v = "LINK",
                k = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: v, onPress: e }],
                D = (e, t) => (n) => {
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
                w = o().d5a48014,
                E = o().b92b6156,
                C = o().ec5ed598,
                Z = ({ children: e, extendedWidth: t, size: n, weight: r }) => a.createElement(h.ZP, { extendedWidth: t, size: n, weight: r }, e),
                _ = { blockType: p.paragraph, label: C, component: Z({ size: "body", children: C }) },
                S = [{ blockType: p.header1, label: w, component: Z({ size: "title1", extendedWidth: !0, children: w }) }, { blockType: p.header2, label: E, component: Z({ size: "title3", weight: "heavy", children: E }) }, _],
                x = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                P = ["delete", "delete-word", "delete-to-start-of-line"],
                z = "increase-text-size",
                M = "decrease-text-size";
        },
        941978: (e, t, n) => {
            n.d(t, { C: () => a });
            class a {
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
            new a();
        },
        491915: (e, t, n) => {
            n.d(t, { ZP: () => p });
            n(571372);
            var a = n(202784),
                r = n(325686),
                o = n(392237),
                l = n(111677),
                i = n.n(l),
                s = n(643442),
                c = n(466445),
                d = n(731708),
                u = n(154003),
                m = n(173739);
            const h = i().jcf3e7a2;
            function f({ animation: e, autoplay: t }) {
                const [n, o] = a.useState(t),
                    [l, i] = a.useState(0);
                return (
                    a.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && i(Math.round(e.currentTime));
                        });
                    }, [e]),
                    a.createElement(
                        r.Z,
                        { style: g.container },
                        a.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? a.createElement(s.default, null) : a.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), o(!1)) : (e.play(), o(!0));
                            },
                            type: "primaryText",
                        }),
                        a.createElement(d.ZP, { style: g.frames }, `${l}/${e.totalFrames}`),
                        a.createElement(
                            r.Z,
                            { style: g.slider },
                            a.createElement(m.Z, {
                                "aria-label": h,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), o(!1);
                                },
                                value: l,
                            }),
                        ),
                    )
                );
            }
            const g = o.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function p(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: o, onAnimationStart: l, onError: i, withControls: s } = e,
                    c = a.useRef(void 0),
                    d = a.useRef({ animationLoaded: !1 }),
                    u = a.useRef(null),
                    [m, h] = a.useState(!1);
                return (
                    a.useEffect(() => {
                        function a(e, t) {
                            "function" == typeof o && o(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = d.current;
                        r ||
                            ((d.current.animationLoaded = !0),
                            b.load().then((r) => {
                                if (r && u.current) {
                                    const o = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        s = r.loadAnimation(o);
                                    (c.current = s),
                                        (s.onError = (e) => {
                                            const t = new y(e);
                                            "function" == typeof i && i(t), a(s, t);
                                        }),
                                        s.addEventListener("DOMLoaded", () => {
                                            h(!0), t && (s.play(), l && l());
                                        }),
                                        s.addEventListener("complete", () => {
                                            a(s);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, o, l, i, s]),
                    a.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    a.createElement(r.Z, null, a.createElement(r.Z, { style: [e.animationContainerStyle, v.centerAnimation] }, a.createElement("div", { ref: u, style: e.animationStyle }), s && c.current && m && a.createElement(f, { animation: c.current, autoplay: t })))
                );
            }
            p.Prepare = function () {
                return (
                    a.useEffect(() => {
                        b.load();
                    }, []),
                    null
                );
            };
            const b = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class y extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, y), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const v = o.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(202784),
                r = n(111677),
                o = n.n(r),
                l = n(149170),
                i = n(40644);
            const s = o().gaeb997e;
            const c = function ({ activeColor: e, label: t = s, Icon: n = l.default, iconSize: r = "normal", isDisabled: o, onClick: c, preventFocusShift: d, renderActionMenu: u, style: m, testID: h, withDarkBackground: f = !1 }) {
                const g = a.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    p = a.useMemo(() => ({ label: t }), [t]);
                return a.createElement(i.ZP, { Icon: n, activeColor: e || (f ? "white" : void 0), "aria-label": t, backgroundColor: f ? "translucentBlack77" : "transparent", color: f ? "white" : "gray700", hoverLabel: p, iconSize: r, isDisabled: o, onPress: g, preventFocusShift: d, renderMenu: u, style: m, testID: h });
            };
        },
        989272: (e, t, n) => {
            n.d(t, { _i: () => r, fH: () => l, w3: () => o });
            n(136728);
            var a = n(392237);
            const r = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function o(e) {
                l(
                    (function () {
                        const e = a.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${r.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${r.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${r.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    i,
                );
                const t = s(e);
                return (
                    l(
                        (function (e) {
                            const t = s(e);
                            let n = e.placeholderTextColor;
                            const r = e.contentHorizontalPadding;
                            n || (n = a.default.theme.colors.gray700);
                            return `\n    .${t} .public-DraftEditorPlaceholder-root {\n      color: ${n};\n    }\n\n    .${t} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${n};\n    }\n\n    ${r ? `\n        .${t} .public-DraftEditor-content,\n        .${t} .public-DraftEditorPlaceholder-root {\n          padding-left: ${r};\n          padding-right: ${r};\n        }\n      ` : ""}\n  `;
                        })(e),
                        t,
                    ),
                    t
                );
            }
            function l(e, t) {
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
                    for (let t = 0; t < c.length; t++) {
                        if (c[t] === e) return String(t);
                    }
                    return c.push(e), String(c.length - 1);
                })(JSON.stringify(e));
                return `${i}_${t}`;
            }
            const c = [];
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var a = n(202784),
                r = n(325686),
                o = n(827515),
                l = n(461756),
                i = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const a = (0, o.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: a };
                    });
                },
                m = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const h = { position: "absolute" },
                f = s.default.create({ root: { overflow: "hidden" } }),
                g = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [g, p] = a.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        b = a.useRef(!1);
                    return (
                        a.useEffect(
                            () => (
                                (b.current = !0),
                                function () {
                                    b.current = !1;
                                }
                            ),
                            [],
                        ),
                        a.useEffect(() => {
                            if (b.current)
                                if (l.Z.reducedMotionEnabled) p((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== g.pendingText) {
                                    t === g.text || ((0, o.Z)(e.count) && g.count === e.count) ? p((e) => ({ ...e, pendingCount: null, pendingText: null })) : (p((n) => ({ ...n, pendingCount: e.count, pendingText: t })), g.animating || u(e.count, t, p));
                                }
                        }, [t]),
                        a.useEffect(() => {
                            b.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && p((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && u(g.pendingCount, g.pendingText, p));
                        }, [g.animating, g.oldText]),
                        a.useMemo(() => {
                            const e = m[g.transitionDirection],
                                t = g.oldText && !l.Z.reducedMotionEnabled,
                                o = !g.animating && g.oldText && !l.Z.reducedMotionEnabled,
                                s = { ...h, ...(g.animating ? e.post : e.active) },
                                c = { ...(o ? e.pre : e.active) };
                            return a.createElement(
                                r.Z,
                                { style: [f.root, n] },
                                t ? a.createElement("span", { style: s }, a.createElement(i.ZP, d, g.oldText)) : null,
                                a.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, p),
                                        style: c,
                                    },
                                    a.createElement(i.ZP, d, g.text),
                                ),
                            );
                        }, [n, d, g, b, p])
                    );
                };
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => D });
            var a = n(202784),
                r = n(325686),
                o = n(461756),
                l = n(731708),
                i = n(58881),
                s = n(530732),
                c = n(224162),
                d = n(491915),
                u = n(392237),
                m = n(551611),
                h = n(111677),
                f = n.n(h),
                g = n(891198),
                p = n(537392),
                b = n(280278);
            const y = f().e8d93005,
                v = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                k = ({ color: e, count: t }) => {
                    const n = (0, g.wl)(t, !0);
                    return a.createElement(p.ZP, null, ({ containerWidth: r }) => {
                        return a.createElement(b.ZP, { color: e, count: t, size: "subtext2", style: [v.count, ((o = r), o < u.default.theme.breakpoints.small && v.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || n.length >= 5 ? y(t) : n) : void 0);
                        var o;
                    });
                };
            class D extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: o, decoration: i } = this.props;
                            return a.createElement(c.ZP.Consumer, null, ({ direction: s }) => a.createElement(l.ZP, { color: e ? n : o, dir: s, style: [C.inner, e && "blue500" === n && C.blue500] }, a.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), i, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: r, iconSize: o, isActive: l, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                m = i.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                h = d && l && !e?.isHovered;
                            return a.createElement(s.Z, { hoverLabel: r, interactiveStyles: m, interactivityState: e, style: [u.default.absoluteFill, E[h ? "haloBackground" : n], !c && C.iconBackground, "small" === o && C.iconSmallBoundingBox, h && C.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: r, isFaded: l, onAnimationEnd: i, onAnimationStart: s, onError: c, showAnimation: h, transitionAnimationUrl: f } = this.props;
                            if (!u.default.theme.highContrastEnabled && !o.Z.reducedMotionEnabled && e && h) return a.createElement(d.ZP, { animation: f || m.Bf, animationContainerStyle: w[t], animationStyle: _, onAnimationEnd: i, onAnimationStart: s, onError: c });
                            {
                                const o = n && e ? e : this.props.Icon;
                                return a.createElement(o, { style: [w[t], !r && l && C.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? a.createElement(k, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: l, isDisabled: i, isPresentational: c, keyboardShortcut: m, link: h, preventFocusShift: f, renderMenu: g, renderWrapper: p = a.Fragment, style: b, testID: y } = this.props,
                        v = !u.default.theme.highContrastEnabled && !o.Z.reducedMotionEnabled;
                    return a.createElement(
                        r.Z,
                        { style: [C.root, b] },
                        a.createElement(
                            p,
                            null,
                            c
                                ? this._renderContent(l)
                                : a.createElement(s.Z, { "aria-haspopup": g ? "menu" : void 0, "aria-label": e, disabled: i, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: m, link: h, onClick: this._handlePress, preventFocusShift: f, renderMenu: g, style: [C.triggerAreaRoot, C.outlineNone], testID: y }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: a } = e,
                                          r = l || n || a || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        v ? a.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            D.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const w = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                E = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                C = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                Z = "224.5%",
                _ = { width: Z, height: Z };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => r, ZP: () => l });
            var a = n(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class o extends a.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const l = new o();
        },
        818088: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        678773: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        826363: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M20 7.5H4v-3h16v3zm0 6H4v-3h16v3zm0 6H4v-3h16v3z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        790093: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        937450: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        226597: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        155353: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        69893: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-6107ac1a.37cffbca.js.map
