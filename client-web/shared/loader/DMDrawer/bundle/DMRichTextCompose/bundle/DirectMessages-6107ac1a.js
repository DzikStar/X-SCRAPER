"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-6107ac1a", "icons/IconBoldCompact-js", "icons/IconDrawerOn-js", "icons/IconItalic-js", "icons/IconQuoteStroke-js", "icons/IconVoice-js"],
    {
        897338: (e, t, n) => {
            n.d(t, { Z: () => i });
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
            const i = r;
        },
        257215: () => {},
        395337: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a,
                l,
                r,
                i,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (r = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [a, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [r], storageKey: null }, (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, i], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            o.hash = "42f499bfb2697230967b662ad70f78f8";
            const s = o;
        },
        858883: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a,
                l,
                r,
                i,
                o,
                s = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "conversationId" }), (l = { defaultValue: null, kind: "LocalArgument", name: "emojiReactions" }), (r = { defaultValue: null, kind: "LocalArgument", name: "messageId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "reactionTypes" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useDMReactionMutationAddMutation",
                        selections: (o = [
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
                    operation: { argumentDefinitions: [a, r, i, l], kind: "Operation", name: "useDMReactionMutationAddMutation", selections: o },
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
                i,
                o,
                s = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "conversationId" }), (l = { defaultValue: null, kind: "LocalArgument", name: "emojiReactions" }), (r = { defaultValue: null, kind: "LocalArgument", name: "messageId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "reactionTypes" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useDMReactionMutationRemoveMutation",
                        selections: (o = [
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
                    operation: { argumentDefinitions: [a, r, i, l], kind: "Operation", name: "useDMReactionMutationRemoveMutation", selections: o },
                    params: { id: "bV_Nim3RYHsaJwMkTXJ6ew", metadata: {}, name: "useDMReactionMutationRemoveMutation", operationKind: "mutation", text: null },
                };
            s.hash = "408e23aa034ffc8f2480a6fab3532c39";
            const d = s;
        },
        789990: (e, t, n) => {
            n.d(t, { Z: () => i });
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
            const i = r;
        },
        242454: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(807896),
                l = n(202784),
                r = n(325686),
                i = n(731708),
                o = n(58881),
                s = n(530732),
                d = n(392237);
            const c = d.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: n, ...u }) => {
                    const m = o.Z.generate({ backgroundColor: d.default.theme.colors.transparent, color: d.default.theme.colors[t], insetFocusRing: !0 });
                    return l.createElement(r.Z, { style: c.container }, l.createElement(s.Z, (0, a.Z)({}, u, { interactiveStyles: m, style: c.root }), l.createElement(i.ZP, { align: e, color: t }, n)));
                };
        },
        661810: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                l = n(325686),
                r = n(392237);
            function i({ spacing: e, style: t }) {
                return a.createElement(l.Z, { role: "separator", style: [o.divider, { marginVertical: null != e ? r.default.theme.spaces[e] : void 0 }, t] });
            }
            const o = r.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        15038: (e, t, n) => {
            n.d(t, { ZP: () => c });
            var a = n(202784),
                l = n(325686),
                r = n(950822),
                i = n(392237);
            const o = (e) => (0, r.Z)("div", e);
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
                        { active: i } = this.state,
                        s = t ? d.dragBorderValid : d.dragBorderInvalid;
                    return a.createElement(o, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [d.root, r, i && s, i && e] }, a.createElement(l.Z, { style: d.inner }, "function" == typeof n ? n(i) : n));
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
            var a = n(807896),
                l = n(202784),
                r = n(111677),
                i = n.n(r),
                o = n(154003),
                s = n(950822),
                d = n(392237);
            const c = i().i5450bec,
                u = i().f7432494;
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
                    const { accept: e, disabled: t, multiple: n, onChange: r, testID: i, ...d } = this.props,
                        m = !(e?.includes("video") || e?.includes("gif"));
                    return l.createElement(l.Fragment, null, l.createElement(o.ZP, (0, a.Z)({ hoverLabel: e ? { label: m ? u : c } : void 0 }, d, { disabled: t, onPress: this._handlePress })), (0, s.Z)("input", { accept: e, disabled: t, multiple: n, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: h.input, tabIndex: -1, testID: i, type: "file" }));
                }
            }
            m.defaultProps = { disabled: !1, multiple: !1 };
            const h = d.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                f = m;
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(202784),
                l = n(325686),
                r = n(235902),
                i = n(885015),
                o = n(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: s } = r.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: o.default.theme.colors[e] ?? o.default.theme.colors.borderColor };
                return n ? a.createElement(i.Z, { style: !t && d.root, withGutter: !0 }, a.createElement(l.Z, { style: d.gapColumn }, a.createElement(l.Z, { style: [d.gap, c] })), a.createElement(l.Z, { style: d.gapText }, n), a.createElement(l.Z, { style: d.gapColumn }, a.createElement(l.Z, { style: [d.gap, c] }))) : a.createElement(l.Z, { style: [!t && d.root, s() && d.rootRedesign, d.gap, c] });
            }
            const d = o.default.create((e) => ({ borderColor: { backgroundColor: o.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: o.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(807896),
                l = n(202784),
                r = n(325686),
                i = n(392237);
            class o extends l.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...i } = this.props,
                        o = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, s.column, n && s.withGutterColumn] }));
                    return l.createElement(r.Z, (0, a.Z)({ style: [t, s.root, n && s.withGutter] }, i), o);
                }
            }
            o.defaultProps = { withGutter: !1 };
            const s = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = o;
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => g });
            var a = n(202784),
                l = n(325686),
                r = n(111677),
                i = n.n(r),
                o = n(815858),
                s = n(731708),
                d = n(642153),
                c = n(530732),
                u = n(392237);
            const m = i().a35a5b10,
                h = i().fc8cd112,
                f = (e) => a.createElement(s.ZP, null, e);
            class g extends a.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: r, userScreenName: i, withFacepile: u } = this.props,
                        h = this._renderMessage();
                    return a.createElement(o.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? a.createElement(c.Z, { "aria-label": m, interactiveStyles: null, link: i ? ((f = i), `/${f}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: o }) => a.createElement(l.Z, { style: p.content }, !e && u ? a.createElement(d.Z, { userAvatarUrls: t }) : null, a.createElement(s.ZP, { color: "gray700", size: "subtext2", style: [!e && p.message, (n || o) && !!i && p.underline, r] }, e && u ? a.createElement(d.Z, { style: p.inlineFacepile, userAvatarUrls: t }) : null, h))) : a.createElement(l.Z, { style: p.content }, a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, h)));
                    var f;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : h;
                }
                _renderOneUsername(e) {
                    return a.createElement(i().I18NFormatMessage, { $i18n: "c9e6167d" }, f(e[0]));
                }
                _renderTwoUsernames(e) {
                    return a.createElement(i().I18NFormatMessage, { $i18n: "ha91d1eb" }, f(e[0]), f(e[1]));
                }
                _renderThreeUsernames(e) {
                    return a.createElement(i().I18NFormatMessage, { $i18n: "f1069f9b" }, f(e[0]), f(e[1]), f(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return a.createElement(i().I18NFormatMessage, { $i18n: "e8404c1f" }, f(e[0]), f(e[1]), n);
                }
            }
            g.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const p = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        135904: (e, t, n) => {
            n.d(t, { c: () => r, n: () => l });
            var a = n(392237);
            const l = "longform-styles",
                r = `\n    .longform-header-one {\n        font-size: ${a.default.theme.fontSizes.title2};\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.title1};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${a.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.title4};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${a.default.theme.fontSizes.title3};\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.title2};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${a.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.headline1};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};   \n        margin-bottom: ${a.default.theme.spaces.space12};\n        margin-left: calc(${a.default.theme.spaces.space28} + ${a.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${a.default.theme.spaces.space12} / 2);\n        margin-left: ${a.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${a.default.theme.spaces.space24} + ${a.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${a.default.theme.spaces.space2});\n        padding-left: calc(${a.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${a.default.theme.colors.gray900};\n        border-radius: ${a.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${a.default.theme.spaces.space28} + ${a.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${a.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${a.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, t, n) => {
            n.d(t, { Z: () => v });
            n(136728);
            var a = n(202784),
                l = n(301503),
                r = n(325686),
                i = n(595088),
                o = n(516951),
                s = n(731708),
                d = n(779802),
                c = n(537392),
                u = n(989272),
                m = n(925873),
                h = n(202253),
                f = n(786475),
                g = n(392237),
                p = n(135904);
            const b = { [d.P7.atomic]: { element: "section" }, [d.P7.header1]: { element: "h1", wrapper: a.createElement(s.ZP, null) }, [d.P7.header2]: { element: "h2", wrapper: a.createElement(s.ZP, null) } },
                y = (0, i.Z)(b).reduce((e, [t, n]) => e.set(t, n), l.DefaultDraftBlockRenderMap);
            let k = !1;
            const v = a.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: i, paragraphFontSizeOverride: s } = e;
                    a.useEffect(() => {
                        k || (u.fH(p.c, p.n), (k = !0));
                    }, []);
                    const g = [(0, h.ez)(i, s), h.aF, h.RU];
                    e.disable_entityLinkDecorator || g.push((0, h.NA)(i, s));
                    const b = m.Z.initEditorState(n, { decorators: g });
                    let v = o.Z;
                    return (
                        t &&
                            (v = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        a.createElement(c.ZP, null, ({ containerWidth: e }) => a.createElement(r.Z, { style: D.fontFamily }, a.createElement(l.Editor, { blockRenderMap: y, blockRendererFn: v, blockStyleFn: (0, d.su)(f.Z.isNarrowScreenWidth(e)), editorState: b, onChange: o.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                D = g.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => _, Ak: () => C, KJ: () => v, LI: () => Z, P7: () => p, PW: () => E, QF: () => b, Qm: () => k, Tr: () => z, b$: () => g, db: () => I, et: () => w, fR: () => f, iH: () => S, lD: () => y, su: () => D, u4: () => x, wX: () => $ });
            var a = n(202784),
                l = n(111677),
                r = n.n(l),
                i = n(394123),
                o = n(856661),
                s = n(69893),
                d = n(474761),
                c = n(428259),
                u = n(89085),
                m = n(630715),
                h = n(731708);
            const f = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                g = (e) => [
                    { buttonTestId: "btn-bold", Icon: i.default, key: f.bold, onPress: e(f.bold) },
                    { buttonTestId: "btn-italic", Icon: o.default, key: f.italic, onPress: e(f.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: f.strikethrough, onPress: e(f.strikethrough) },
                ],
                p = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                b = (e) => [{ buttonTestId: "btn-blockquote", Icon: d.default, key: p.blockquote, onPress: e(p.blockquote) }],
                y = (e) => [
                    { buttonTestId: "btn-ul", Icon: c.default, key: p.bulleted, onPress: e(p.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: p.numbered, onPress: e(p.numbered) },
                ],
                k = "LINK",
                v = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: k, onPress: e }],
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
                w = r().d5a48014,
                E = r().b92b6156,
                _ = r().ec5ed598,
                Z = ({ children: e, extendedWidth: t, size: n, weight: l }) => a.createElement(h.ZP, { extendedWidth: t, size: n, weight: l }, e),
                z = { blockType: p.paragraph, label: _, component: Z({ size: "body", children: _ }) },
                S = [{ blockType: p.header1, label: w, component: Z({ size: "title1", extendedWidth: !0, children: w }) }, { blockType: p.header2, label: E, component: Z({ size: "title3", weight: "heavy", children: E }) }, z],
                $ = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                C = ["delete", "delete-word", "delete-to-start-of-line"],
                x = "increase-text-size",
                I = "decrease-text-size";
        },
        989272: (e, t, n) => {
            n.d(t, { _i: () => l, fH: () => i, w3: () => r });
            n(136728);
            var a = n(392237);
            const l = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function r(e) {
                i(
                    (function () {
                        const e = a.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${l.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${l.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${l.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    o,
                );
                const t = s(e);
                return (
                    i(
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
            function i(e, t) {
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
            const o = "draftjs-styles";
            function s(e) {
                const t = (function (e) {
                    for (let t = 0; t < d.length; t++) {
                        if (d[t] === e) return String(t);
                    }
                    return d.push(e), String(d.length - 1);
                })(JSON.stringify(e));
                return `${o}_${t}`;
            }
            const d = [];
        },
        394123: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                l = n(890601),
                r = n(783427),
                i = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15.636 11.671c2.079-.583 3.093-2.18 3.093-3.929 0-2.307-1.471-4.741-5.983-4.741H5.623V21h7.579c4.411 0 6.008-2.484 6.008-4.994 0-2.383-1.343-3.955-3.574-4.335zm-3.295-6.287c2.535 0 3.27 1.319 3.27 2.662 0 1.242-.583 2.611-3.27 2.611H8.69V5.384h3.651zM8.69 18.617v-5.628h4.208c2.231 0 3.194 1.166 3.194 2.738 0 1.547-.887 2.89-3.397 2.89H8.69z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        826363: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                l = n(890601),
                r = n(783427),
                i = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M20 7.5H4v-3h16v3zm0 6H4v-3h16v3zm0 6H4v-3h16v3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        856661: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                l = n(890601),
                r = n(783427),
                i = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                l = n(890601),
                r = n(783427),
                i = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        74514: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                l = n(890601),
                r = n(783427),
                i = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 2C7.93 2 4.51 5.02 4 9.05L2.87 18H7.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4h4.24l-.64-5h-2.02l.38 3H5.13l.85-6.7C6.36 6.27 8.94 4 12 4V2zm0 18c-1.31 0-2.42-.83-2.83-2h5.66c-.41 1.17-1.52 2-2.83 2zm.3-12.29l1.41-1.42 1.76 1.76 4.29-4.72 1.48 1.34-5.7 6.28-3.24-3.24z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        474761: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                l = n(890601),
                r = n(783427),
                i = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M10.883 4H2v8.5h2.255c-.643 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.139-2 5.335-4.63 6.084-8.37.444-2.21.405-4.55.154-6.81L10.883 4zM4 10.5V6h5.081c.151 1.84.121 3.64-.213 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.662-3.14 2.662-5.07H4zM21.876 4h-8.882v8.5h2.255c-.644 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.138-2 5.334-4.63 6.083-8.37.444-2.21.406-4.55.154-6.81L21.876 4zm-6.883 6.5V6h5.082c.151 1.84.121 3.64-.214 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.663-3.14 2.663-5.07h-2.911z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        155353: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                l = n(890601),
                r = n(783427),
                i = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        385438: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                l = n(890601),
                r = n(783427),
                i = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M7 21V3h2v18H7zm8-2V5h2v14h-2zm-4-2V7h2v10h-2zm-8-2V9h2v6H3zm16 0V9h2v6h-2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-6107ac1a.4dbdbaaa.js.map
