"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsExtendedProfile", "shared~bundle.WorkHistory~bundle.JobSearch~ondemand.Verified~bundle.UserJobs~bundle.ExtendedUserProfile"],
    {
        681488: (e, t, n) => {
            n.d(t, { Z: () => c });
            var l,
                a,
                r,
                o,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "richtextValue" }), (a = { defaultValue: null, kind: "LocalArgument", name: "sectionId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "sectionType" }), (o = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateRichtextBlockMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "richtext_value", variableName: "richtextValue" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "section_id", variableName: "sectionId" },
                                    { kind: "Variable", name: "section_type", variableName: "sectionType" },
                                    { kind: "Literal", name: "surface", value: "ExtendedProfile" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "CreateRichtextProfileBlockResult",
                                kind: "LinkedField",
                                name: "create_richtext_profile_block",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [l, o, a, r], kind: "Operation", name: "useCreateRichtextBlockMutation", selections: i },
                    params: { id: "lDE6HUnPgNvp1_8bcCM3-w", metadata: {}, name: "useCreateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            s.hash = "5369f2707d565366752d07f461b21f70";
            const c = s;
        },
        876242: (e, t, n) => {
            n.d(t, { Z: () => o });
            var l,
                a,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "blockId" },
                            { defaultValue: null, kind: "LocalArgument", name: "userId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useDeleteProfileBlockMutation",
                        selections: (a = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "block_id", variableName: "blockId" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "ProfileBlockOperationSuccess",
                                kind: "LinkedField",
                                name: "delete_profile_block",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useDeleteProfileBlockMutation", selections: a },
                    params: { id: "EvvA9IQR0sKW0tGqXwSzKA", metadata: {}, name: "useDeleteProfileBlockMutation", operationKind: "mutation", text: null },
                };
            r.hash = "5d2c7077ac04854de170e0b8fd37dc6f";
            const o = r;
        },
        163956: (e, t, n) => {
            n.d(t, { Z: () => o });
            var l,
                a,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "blockId" },
                            { defaultValue: null, kind: "LocalArgument", name: "richtextValue" },
                            { defaultValue: null, kind: "LocalArgument", name: "userId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useUpdateRichtextBlockMutation",
                        selections: (a = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "block_id", variableName: "blockId" },
                                    { kind: "Variable", name: "richtext_value", variableName: "richtextValue" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "ProfileBlockOperationSuccess",
                                kind: "LinkedField",
                                name: "update_richtext_profile_block",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useUpdateRichtextBlockMutation", selections: a },
                    params: { id: "oDmWQK_udVhiqH89Lbd5LA", metadata: {}, name: "useUpdateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            r.hash = "96b616d665932ca695bc2d75fe26a33c";
            const o = r;
        },
        949626: (e, t, n) => {
            n.d(t, { Z: () => a });
            n(202784);
            var l = n(950822);
            const a = (e) => (0, l.Z)("div", e);
        },
        512547: (e, t, n) => {
            n.d(t, { Z: () => b });
            var l = n(202784),
                a = n(190286),
                r = n(674132),
                o = n.n(r),
                i = n(782642),
                s = n(72130),
                c = n(725516),
                d = n(876242),
                u = (n(585488), n(351743)),
                m = n.n(u);
            const f = d.Z,
                p = () => {
                    const [e, t] = m()(f);
                    return [
                        l.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                },
                g = o().g9677c6e,
                h = o().a2b8c54c,
                b = ({ blockId: e, headline: t, onClose: n, onCompleted: r, queryId: o, subtext: d, userId: u }) => {
                    const m = (0, i.p)(),
                        f = (0, c.z)(),
                        [b, k] = p(),
                        y = l.useCallback(() => {
                            n();
                        }, [n]),
                        _ = l.useCallback(() => {
                            f.scribe({ ...(0, s.MA)("delete_block_btn", "click") }),
                                b({
                                    variables: { blockId: e, userId: u },
                                    updater: (e, t) => {
                                        o && e.delete(o);
                                    },
                                    onCompleted: (e) => {
                                        e?.delete_profile_block?.success && (m({ text: h }), n(), r && r());
                                    },
                                });
                        }, [m, f, e, b, n, r, o, u]);
                    return l.createElement(a.Z, { confirmButtonDisabled: k, confirmButtonLabel: g, confirmButtonType: "destructiveFilled", enableMaskForDismiss: !0, headline: t, onCancel: y, onConfirm: _, text: d });
                };
        },
        785813: (e, t, n) => {
            n.d(t, { Z: () => r });
            var l = n(202784),
                a = n(366635);
            const r = (e) => (e ? l.createElement(a.Z, { affiliateBadgeInfo: e?.highlightedLabel, isBlueVerified: e?.is_blue_verified, isProtected: e?.protected, isVerified: e?.verified, name: e?.name, verifiedType: e?.verified_type }) : null);
        },
        825495: (e, t, n) => {
            n.d(t, { Z: () => r });
            var l = n(202784),
                a = n(823161);
            const r = (e) => {
                if (!e) return null;
                const t = "Square" === e?.profile_image_shape ? "square" : "circle";
                return l.createElement(a.default, { shape: t, size: "xLarge", uri: e?.profile_image_url_https });
            };
        },
        313433: (e, t, n) => {
            n.d(t, { Z: () => s });
            var l = n(202784),
                a = n(925873),
                r = n(392237),
                o = n(913670);
            const i = r.default.create((e) => ({ iconGray: { color: e.colors.gray700 } })),
                s = ({ editorState: e, onChange: t }) => {
                    const n = l.useCallback(
                        (n) => {
                            const l = a.Z.insertTextAtCursor(e, n.text);
                            t(l);
                        },
                        [e, t],
                    );
                    return l.createElement(o.Z, { iconStyle: i.iconGray, key: "emoji-picker", onEmojiSelect: n, size: "small", testID: "btn-emoji", type: "primaryText" });
                };
        },
        536790: (e, t, n) => {
            n.d(t, { Z: () => u });
            n(571372), n(136728);
            var l = n(202784),
                a = n(301503),
                r = n(597496),
                o = n(339110),
                i = n(456910),
                s = n(230295),
                c = n(267446);
            class d extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = l.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: t, contextText: n, isInline: a, isInlineReply: i, onTypeaheadStateChange: s, source: c } = this.props,
                                { canShowTypeahead: d, queryContext: u } = this.state,
                                m = d && u ? { word: u.word, resultType: u.resultType } : void 0;
                            return l.createElement(r.H1, { composeCommunityId: t, contextText: n, isInline: a, isInlineReply: i, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: s, query: m, ref: this._genericWrapperRef, source: c || o._4.Compose }, e(this._handleInputChange));
                        }),
                        (this._getCaret = (e) => e.getSelection().getStartOffset()),
                        (this._getPlaintextFromCurrentBlock = (e) => {
                            const t = e.getSelection().anchorKey;
                            return e.getCurrentContent().getBlockForKey(t).getText();
                        }),
                        (this._handleSelectItem = (e) => {
                            const { onTextUpdated: t } = this.props,
                                { queryContext: n } = this.state;
                            if (n) {
                                const l = (0, c.k)(e, n.resultType);
                                t(this._replaceToken(l, n));
                            }
                            this._setQueryContext(void 0);
                        }),
                        (this._handleInputChange = (e) => {
                            if (!(0, s.T)(e)) throw new Error("RichTextTypeaheadComposeWrapper cannot handle plain text input changes");
                            {
                                const { queryContext: t } = this.state,
                                    n = t && t.word,
                                    l = this._getPlaintextFromCurrentBlock(e),
                                    { end: a, start: r, word: o } = i.si(this._getCaret(e), l),
                                    s = i.bR(o || "", "compose");
                                if (s?.q === n) return;
                                if ((this._genericWrapperRef.current && this._genericWrapperRef.current.resetSelectedItem(), -1 === r)) this._setQueryContext(void 0);
                                else if (s) {
                                    const { q: t, result_type: n } = s;
                                    this._setQueryContext({ word: t, resultType: n, editorState: e, startIndex: r, endIndex: a });
                                } else this._setQueryContext(void 0);
                            }
                        }),
                        (this._setQueryContext = (e) => this.setState({ queryContext: e, canShowTypeahead: !!e })),
                        (this._handleDismiss = () => this.setState({ canShowTypeahead: !1 }));
                }
                _replaceToken(e, t) {
                    const { editorState: n, endIndex: l, startIndex: r } = t,
                        o = n.getSelection().merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: r, focusOffset: l }),
                        i = a.Modifier.replaceText(n.getCurrentContent(), o, e),
                        s = a.EditorState.push(n, i, "insert-characters"),
                        c = r + e.length,
                        d = s.getSelection().merge({ anchorOffset: c, focusOffset: c });
                    return a.EditorState.forceSelection(s, d);
                }
            }
            const u = d;
        },
        478414: (e, t, n) => {
            n.d(t, { Hx: () => s, K: () => r, bb: () => i, gv: () => o, kg: () => c, yW: () => d });
            var l = n(779802),
                a = n(392237);
            const r = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext1" },
                o = { h1FontSize: "title4", h2FontSize: "headline1", paragraphFontSize: "headline2" },
                i = ({ h1FontSize: e, h2FontSize: t, paragraphFontSize: n }) => [
                    { blockType: l.P7.header1, label: l.et, component: (0, l.LI)({ size: e, children: l.et, extendedWidth: !0 }) },
                    { blockType: l.P7.header2, label: l.PW, component: (0, l.LI)({ size: t, weight: "bold", children: l.PW }) },
                    { blockType: l.P7.paragraph, label: l.$u, component: (0, l.LI)({ size: n, children: l.$u }) },
                ],
                s = "extended-profile",
                c = "extended-profile-mobile-webview",
                d = (e, { h1FontSize: t, h2FontSize: n, paragraphFontSize: l }) =>
                    `\n    .${e} .longform-header-one {\n        font-family: ${a.default.theme.fontFamilies.chirpExtended};\n        font-size: ${a.default.theme.fontSizes[t]};\n        line-height: ${a.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-one-narrow {\n        font-family: ${a.default.theme.fontFamilies.chirpExtended};\n        font-size: ${a.default.theme.fontSizes[t]};\n        line-height: ${a.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two {\n        font-size: ${a.default.theme.fontSizes[n]};\n        font-weight: ${a.default.theme.fontWeights.bold};\n        line-height: ${a.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two-narrow {\n        font-size: calc(${a.default.theme.fontSizes[n]} + 1px);\n        font-weight: ${a.default.theme.fontWeights.bold};\n        line-height: ${a.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled, \n    .${e} .longform-blockquote {\n        font-size: ${a.default.theme.fontSizes[l]};\n        line-height: ${a.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled-narrow, \n    .${e} .longform-blockquote-narrow {\n        font-size: ${a.default.theme.fontSizes[l]};\n        line-height: ${a.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item, \n    .${e} .longform-ordered-list-item {\n        display: block;\n        font-size: ${a.default.theme.fontSizes[l]};\n        line-height: ${a.default.theme.lineHeights.headline1};\n        margin-bottom: ${a.default.theme.spaces.space2};\n        margin-left: calc(${a.default.theme.spaces.space20} + ${a.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item-narrow, \n    .${e} .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${a.default.theme.fontSizes[l]};\n        line-height: ${a.default.theme.lineHeights.headline1};\n        margin-bottom: ${a.default.theme.spaces.space2};\n        margin-left: ${a.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .${e} .longform-blockquote, \n    .${e} .longform-blockquote-narrow {\n        margin-bottom: 0;\n        margin-left: 0;\n        margin-top: calc(-${a.default.theme.spaces.space2});\n        padding-left: calc(${a.default.theme.spaces.space20} + 2px);\n        position: relative;\n    }\n\n    .${e} .longform-blockquote:before, \n    .${e} .longform-blockquote-narrow:before {\n        background: ${a.default.theme.colors.gray900};\n        border-radius: ${a.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .${e} .longform-header-one .public-DraftStyleDefault-block,\n    .${e} .longform-header-two .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .${e} .public-DraftStyleDefault-ul, \n    .${e} .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .${e} .longform-unordered-list-item:before, \n    .${e} .longform-ordered-list-item:before,\n    .${e} .longform-unordered-list-item-narrow:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${a.default.theme.spaces.space20} + ${a.default.theme.spaces.space2}));\n    }\n\n    .${e} .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${a.default.theme.fontSizes[l]}\n    }\n\n    .${e} .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${a.default.theme.fontSizes[l]}\n    }\n\n    .${e} .longform-ordered-list-item:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .${e} .longform-ordered-list-item::marker, \n    .${e} .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        72130: (e, t, n) => {
            n.d(t, { Ak: () => i, MA: () => o, Rz: () => l, Zi: () => r, he: () => a });
            const l = () => ({ component: "extended_profile_settings", action: "click" }),
                a = (e) => ({ component: "extended_profile", element: "extended_profile_edit_btn", action: "click", data: e }),
                r = (e, t) => ({ component: "extended_profile", action: "impression", data: { profile_id: e, ...t } }),
                o = (e, t, n) => ({ component: "rich_text_editor", element: e, action: t, data: n }),
                i = (e, t, n) => ({ component: "work_history_editor", element: e, action: t, data: { version: 2, ...n } });
        },
        520385: (e, t, n) => {
            n.d(t, { Mp: () => a, NB: () => r, P2: () => o, j3: () => l, pR: () => i });
            const l = 5e4,
                a = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                r = (a.RICHTEXT, a.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                o = { about: r.ABOUT, work_experience: r.WORK_EXPERIENCE },
                i = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        238225: (e, t, n) => {
            n.d(t, { kI: () => h, vF: () => g, m1: () => p });
            var l,
                a,
                r,
                o,
                i = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchProfileBlocks_profileExistsQuery",
                        selections: [
                            {
                                alias: null,
                                args: (a = [
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "screen_name", variableName: "screenName" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "has_profile_blocks", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: l,
                        kind: "Operation",
                        name: "useFetchProfileBlocks_profileExistsQuery",
                        selections: [
                            {
                                alias: null,
                                args: a,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
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
                                            { kind: "InlineFragment", selections: [r, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    o,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "Z2BA99jFw6TxaJM5v7Irmg", metadata: {}, name: "useFetchProfileBlocks_profileExistsQuery", operationKind: "query", text: null },
                };
            i.hash = "159e51b19a254333fecf6035bc3245b7";
            var s = (function () {
                var e = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }],
                    t = [
                        { kind: "Literal", name: "s", value: "f3d8" },
                        { kind: "Variable", name: "screen_name", variableName: "screenName" },
                    ],
                    n = { alias: null, args: null, kind: "ScalarField", name: "has_profile_blocks", storageKey: null },
                    l = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null },
                    a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchProfileBlocks_profileQuery",
                        selections: [
                            {
                                alias: null,
                                args: t,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
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
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    n,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ProfileBlocksSlice",
                                                        kind: "LinkedField",
                                                        name: "profile_blocks",
                                                        plural: !1,
                                                        selections: [
                                                            { args: null, kind: "FragmentSpread", name: "useFetchProfileBlocks_profileBlocksSlice" },
                                                            { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [l], storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: e, kind: "Operation", name: "useFetchProfileBlocks_profileQuery", selections: [{ alias: null, args: t, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_screen_name", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [a, { kind: "InlineFragment", selections: [n, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [l, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [a, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }, r], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }] },
                    params: { id: "Azv1m7WiLnbn36nNCk7l0Q", metadata: {}, name: "useFetchProfileBlocks_profileQuery", operationKind: "query", text: null },
                };
            })();
            s.hash = "16584b716a8d455d79eefb53731f55ee";
            const c = s;
            var d = (function () {
                var e = [{ kind: "Literal", name: "s", value: "f3d8" }],
                    t = { alias: null, args: null, kind: "ScalarField", name: "has_xprofile_consent", storageKey: null },
                    n = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null },
                    l = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                    a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
                return {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [t, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useFetchProfileBlocks_profileBlocksSlice" }, { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [n], storageKey: null }, l], storageKey: null }, l], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [a, { kind: "InlineFragment", selections: [t, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [n, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [a, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }, l], storageKey: null }, l, r], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }] },
                    params: { id: "vRz7Yom7hObecKwzBRUBiQ", metadata: {}, name: "useFetchProfileBlocks_settingsQuery", operationKind: "query", text: null },
                };
            })();
            d.hash = "cb1d5a0879773e36614622dd4379b34e";
            const u = d;
            var m = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useFetchProfileBlocks_profileBlocksSlice",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "ProfileBlock",
                        kind: "LinkedField",
                        name: "items",
                        plural: !0,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null },
                            { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "ProfileBlocksSlice",
                abstractKey: null,
                hash: "cfa3efa58699d441f9f70469bb096ba6",
            };
            const f = m;
            n(585488);
            const p = f,
                g = u,
                h = c;
        },
        794057: (e, t, n) => {
            n.d(t, { C0: () => o, DC: () => l, _e: () => r, iN: () => c, kd: () => i, pc: () => a });
            const l = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                a = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                r = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                o = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                i = { content_state: { blocks: [], entity_map: [] } },
                s = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                c = Object.freeze({ DRAFT: s.DRAFT, PUBLISHED: s.PUBLISHED });
        },
        482924: (e, t, n) => {
            n.d(t, { A: () => f });
            var l = n(202784),
                a = n(437429),
                r = n.n(a),
                o = n(57074),
                i = n.n(o),
                s = n(10622),
                c = n.n(s),
                d = n(71620),
                u = n(312771),
                m = n(535338);
            function f(e, t, n) {
                const a = i()(t),
                    o = i()(n),
                    s = r()(),
                    f = (0, d.po)(),
                    [p, g] = l.useState(null),
                    [h, b] = l.useState(!1),
                    k = l.useCallback(() => {
                        h ||
                            (b(!0),
                            c()(s, e, a, { networkCacheConfig: o?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    b(!1);
                                },
                                error: (e) => {
                                    f(e), b(!1), g(e);
                                },
                            }));
                    }, [s, f, e, h, a, o]),
                    y = (0, m.p)(e, t, n);
                return l.useMemo(() => (p ? { data: y, refetch: k, refetchStatus: u.ZP.FAILED, refetchError: p } : { data: y, refetch: k, refetchStatus: h ? u.ZP.LOADING : u.ZP.NONE, refetchError: void 0 }), [y, p, h, k]);
            }
        },
        242470: (e, t, n) => {
            n.d(t, { Z: () => E });
            var l = n(202784),
                a = n(301503),
                r = n(614983),
                o = n.n(r),
                i = n(154003),
                s = n(674132),
                c = n.n(s),
                d = n(952793),
                u = n(72130),
                m = n(520385),
                f = n(725405),
                p = n(681488),
                g = (n(585488), n(351743)),
                h = n.n(g);
            const b = p.Z,
                k = () => {
                    const [e, t] = h()(b);
                    return [
                        l.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                };
            const y = n(163956).Z,
                _ = () => {
                    const [e, t] = h()(y);
                    return [
                        l.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                },
                S = c().a9cc8f96,
                x = c().i2209530,
                E = ({ blockId: e, characterCount: t, disabled: n, editorState: r, onSave: s, queryId: c, sectionId: p, sectionType: g, setDirty: h, setError: b, setSaving: y, userId: E }) => {
                    const w = (0, d.hC)("xprofile_work_history_enabled"),
                        D = (0, f.Z)(),
                        [v] = k(),
                        [C] = _(),
                        I = l.useCallback(() => {
                            y(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            D.scribe({ ...(0, u.MA)(t, "error", { version: w ? 2 : 1 }) });
                        }, [D, e, w, y]),
                        T = l.useCallback(() => {
                            h(!1), y(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            D.scribe({ ...(0, u.MA)(t, "success", { version: w ? 2 : 1 }) }), s();
                        }, [D, e, w, s, h, y]),
                        $ = l.useCallback(() => {
                            const n = ((e) => {
                                if (!e) return;
                                const t = e.getCurrentContent(),
                                    n = (0, a.convertToRaw)(t);
                                return JSON.stringify(n);
                            })(r);
                            if (!n) return;
                            if (t > m.j3) return void b(S);
                            y(!0);
                            const l = e ? "update_block_btn" : "save_block_btn";
                            D.scribe({ ...(0, u.MA)(l, "click", {}) }),
                                e && E
                                    ? C({
                                          variables: { richtextValue: n, blockId: e, userId: E },
                                          onCompleted: T,
                                          onError: I,
                                          updater: (e, t) => {
                                              if ((o()(c, "queryId must exist"), t?.update_richtext_profile_block?.success))
                                                  if (w) {
                                                      const t = e.get(`client:${c}:content`);
                                                      t && t.setValue(n, "value");
                                                  } else {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                          },
                                      })
                                    : E &&
                                      v(
                                          {
                                              variables: { richtextValue: n, userId: E, sectionId: p, sectionType: g },
                                              onCompleted: T,
                                              updater: (e, t) => {
                                                  if ((o()(c, "queryId must exist"), t?.create_richtext_profile_block?.block_id)) {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                              },
                                          },
                                          c,
                                      );
                        }, [r, t, y, e, D, b, C, E, T, I, c, w, v, p, g]);
                    return l.createElement(i.ZP, { disabled: n, onClick: $, size: "large", type: "brandFilled" }, x);
                };
        },
        371879: (e, t, n) => {
            n.r(t), n.d(t, { default: () => b });
            var l = n(202784),
                a = n(301503),
                r = n(925873),
                o = n(989272),
                i = n(977952),
                s = n(297256),
                c = n(392237),
                d = n(187669),
                u = n(949626),
                m = n(980407),
                f = n(478414);
            const p = (e) => {
                    const t = ((e) => {
                            try {
                                return e ? JSON.parse(e) : void 0;
                            } catch {
                                return;
                            }
                        })(e),
                        n = r.Z.initEditorState(t);
                    return r.Z.convertEmojiToEntities(n);
                },
                g = () => null,
                h = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 } })),
                b = ({ history: e }) => {
                    const [t, n] = l.useState(p(window?.__iOSDraftAdapterInitialContents__));
                    (0, d.q)(() => {
                        (0, o.fH)((0, f.yW)(f.kg, f.gv), f.kg);
                    }),
                        l.useEffect(() => {
                            const e = window.webkit?.messageHandlers?.draftEditorReady;
                            e && e.postMessage(!0);
                        }, []);
                    const c = l.useMemo(() => ({ editorState: t, element: i.Z, stripPastedStyles: !0 }), [t]),
                        b = l.useCallback((e) => {
                            const t = r.Z.convertEmojiToEntities(e);
                            n(t);
                        }, []),
                        k = l.useCallback(
                            () =>
                                ((e) => {
                                    if (!e) return;
                                    const t = e.getCurrentContent(),
                                        n = (0, a.convertToRaw)(t);
                                    return JSON.stringify(n);
                                })(t),
                            [t],
                        ),
                        y = l.useCallback((e) => {
                            n(p(e));
                        }, []);
                    l.useEffect(
                        () => (
                            (window.__iOSDraftAdapter__ = { __getContents__: k, __setContents__: y }),
                            () => {
                                delete window.__iOSDraftAdapter__;
                            }
                        ),
                        [k, y],
                    );
                    const _ = l.useMemo(() => l.createElement(u.Z, { className: f.kg }, l.createElement(s.b, { autoFocus: !0, inputStyle: h.container, isInputFullWidth: !0, onChange: b, richTextInputContext: c, textSizesOverride: (0, f.bb)(f.gv), withAppBar: !1 })), [b, c]);
                    return l.createElement(m.Z, { children: _, hideBackButton: !0, history: e, renderHeader: g });
                };
        },
        600193: (e, t, n) => {
            n.d(t, { Z: () => r });
            var l = n(668214),
                a = n(919022);
            const r = (0, l.Z)()
                .propsFromState(() => ({ viewerUser: a.ZP.selectViewerUser }))
                .withAnalytics({ page: "settings", section: "extendedprofile" });
        },
        992915: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Le });
            var l,
                a,
                r = n(807896),
                o = (n(136728), n(202784)),
                i = n(325686),
                s = n(277660),
                c = n.n(s),
                d = n(811176),
                u = n(247056),
                m = n(392237),
                f = n(674132),
                p = n.n(f),
                g = n(607127),
                h = n(149170),
                b = n(718e3),
                k = n(785813),
                y = n(825495),
                _ = n(252021),
                S = n(736063),
                x = n(782642),
                E = n(520385),
                w = n(238225),
                D = n(482924),
                v = n(600193),
                C = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "consented" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "ConsentScreen_xprofileMutation",
                        selections: (a = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "consented", variableName: "consented" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "UpdateXprofileConsentResult",
                                kind: "LinkedField",
                                name: "update_xprofile_consent",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "ConsentScreen_xprofileMutation", selections: a },
                    params: { id: "4RvEtxr03YPi6jxZZ_PkoQ", metadata: {}, name: "ConsentScreen_xprofileMutation", operationKind: "mutation", text: null },
                };
            C.hash = "aa72fdb65006a205db978375998ebfe6";
            const I = C;
            var T = n(614983),
                $ = n.n(T),
                F = (n(585488), n(351743)),
                P = n.n(F),
                L = n(731708),
                R = n(593866),
                z = n(154003),
                K = n(40610),
                B = n(715417);
            const Z = I,
                A = p().h367e724,
                O = p().ea5928d4,
                M = p().h7ef9dc8,
                q = p().c04ba4b4,
                V = p().d7666008,
                H = p().cb24ee16,
                N = p().c3d89aca,
                W = p().a1c93d74,
                U = m.default.create((e) => ({ consentRoot: { maxWidth: `calc(6 * ${e.spaces.space80})`, paddingHorizontal: e.spaces.space20, marginVertical: e.spaces.space32, marginHorizontal: "auto", alignSelf: "center", width: "100%", gap: e.spaces.space20 }, icon: { height: e.spaces.space20, width: e.spaces.space20, color: e.colors.text, marginEnd: e.spaces.space16 } })),
                Q = o.createElement(B.default, { style: U.icon }),
                j = ({ queryId: e }) => {
                    const [t, n] = o.useState(""),
                        l = o.useMemo(
                            () => [
                                { label: q, decoration: Q },
                                { label: V, decoration: Q },
                                { label: H, decoration: Q },
                            ],
                            [],
                        ),
                        [a, r] = P()(Z),
                        s = o.useCallback(() => {
                            n(""),
                                a({
                                    variables: { consented: !0 },
                                    onCompleted: (e) => {
                                        e?.update_xprofile_consent?.success || n(W);
                                    },
                                    onError: (e) => {
                                        n(W);
                                    },
                                    updater: (t, n) => {
                                        $()(e, "userId must be specified");
                                        const l = t.get(e);
                                        l && n?.update_xprofile_consent?.success && l.setValue(!0, "has_xprofile_consent");
                                    },
                                });
                        }, [a, e]);
                    return o.createElement(i.Z, { style: U.consentRoot }, o.createElement(L.ZP, { size: "title3", weight: "bold" }, A), o.createElement(L.ZP, { size: "body" }, O), o.createElement(L.ZP, { weight: "bold" }, M), o.createElement(R.Z, { items: l }), o.createElement(z.ZP, { disabled: r, onClick: s, size: "large", type: "brandFilled" }, N), t ? o.createElement(K.Z.Danger, { text: t, withIcon: !0 }) : null);
                },
                G = o.memo(j);
            var X = n(301503),
                J = n(107267),
                Y = n(925873),
                ee = n(989272),
                te = n(891198),
                ne = n(977952),
                le = n(167630),
                ae = n(67369),
                re = n(297256),
                oe = n(751475),
                ie = n(908478),
                se = n(516951),
                ce = n(187669),
                de = n(949626),
                ue = n(512547),
                me = n(313433),
                fe = n(874111),
                pe = n(536790),
                ge = n(952793),
                he = n(655352),
                be = n(478414),
                ke = n(72130),
                ye = n(339110),
                _e = n(725516),
                Se = n(242470);
            const xe = p().b956c04a,
                Ee = p().ifb23caa,
                we = p().c2333081,
                De = m.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16 }, desktopButton: { bottom: 0 }, mobileButton: { bottom: e.componentDimensions.appBarHeight }, v2Button: { padding: e.spaces.space16, justifyContent: "space-between", bottom: 0 }, error: { padding: e.spaces.space16 }, textCountLabel: { flexDirection: "row", alignSelf: "center" } })),
                ve = (0, _e.Z)(({ analytics: e, blockId: t, blocksQueryId: n, closeConfirm: l, initialState: a = "", onSave: r, refetch: s, showConfirmDelete: c, userId: d }) => {
                    const u = (0, ge.hC)("xprofile_emojis_enabled"),
                        m = (0, J.useHistory)(),
                        [f, p] = o.useState(""),
                        [g, h] = o.useState(
                            ((e) => {
                                const t = Y.Z.getContentStateFromRaw(e),
                                    n = Y.Z.initEditorState(t);
                                return Y.Z.convertEmojiToEntities(n);
                            })(a),
                        ),
                        [b, k] = o.useState(!1),
                        [y, _] = o.useState(!1),
                        S = o.useCallback((e, t) => y && !b, [y, b]),
                        x = o.useCallback(() => {
                            _(!1), k(!1);
                        }, []);
                    (0, ce.q)(() => {
                        (0, ee.fH)((0, be.yW)(be.Hx, be.K), be.Hx);
                    });
                    const w = o.useCallback(() => {
                            l(), _(!1), k(!1), e.scribe({ ...(0, ke.MA)("delete_block_btn", "success") }), h(Y.Z.initEditorState("")), s();
                        }, [e, l, s]),
                        D = (0, fe.c6)(g);
                    let v = D;
                    D > 1 && (v = te.ZP.getFormattedCount(D));
                    const C = o.useMemo(() => g?.getCurrentContent()?.hasText(), [g]),
                        I = o.useCallback(
                            (e) => {
                                const t = Y.Z.convertMentionsToEntities(Y.Z.convertEmojiToEntities(e));
                                y || (0, ie.Z)((0, X.convertToRaw)(t.getCurrentContent()), (0, X.convertToRaw)(g.getCurrentContent())) || _(!0), h(t);
                            },
                            [g, y],
                        ),
                        T = o.useMemo(() => ({ editorState: g, element: ne.Z, stripPastedStyles: !0 }), [g]),
                        $ = o.useMemo(() => {
                            if (b) return o.createElement(i.Z, { style: De.flexRow }, o.createElement(le.Z, { size: "small" }), o.createElement(L.ZP, { size: "subtext1" }, "Saving"));
                            const e = !!E.j3 && D > E.j3;
                            return o.createElement(i.Z, null, o.createElement(L.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: De.textCountLabel }, we({ count: v })));
                        }, [D, v, b]),
                        F = (0, ae.Zz)(),
                        P = o.useMemo(() => {
                            const e = [De.stickyButton];
                            return F && !(0, he.ZP)() ? e.push(De.mobileButton) : e.push(De.desktopButton), e;
                        }, [F]),
                        R = o.useCallback(() => (u ? o.createElement(me.Z, { editorState: g, onChange: I }) : null), [g, u, I]),
                        z = o.useCallback(
                            () => (e) =>
                                o.createElement(re.b, {
                                    emojiPickerButton: R,
                                    inputStyle: De.root,
                                    maxNumberOfLines: 100,
                                    numberOfLines: 30,
                                    onChange: (t) => {
                                        e(t), I(t);
                                    },
                                    richTextInputContext: T,
                                    testID: "xprofile-composer",
                                    textSizesOverride: (0, be.bb)(be.K),
                                    toolbarRightControl: $,
                                }),
                            [I, R, T, $],
                        );
                    return o.createElement(i.Z, null, f ? o.createElement(i.Z, { style: De.error }, o.createElement(K.Z.Danger, { text: f, withIcon: !0 })) : null, o.createElement(oe.Z, { fallbackBackPath: "/", history: m, onNavigation: x, shouldBlockNavigation: S, shouldBlockUnload: y }, o.createElement(de.Z, { className: be.Hx }, o.createElement(pe.Z, { contextText: (0, fe.iT)(g), isInline: !0, onTextUpdated: I, onTypeaheadStateChange: se.Z, source: ye._4.LongformComposer }, z()))), o.createElement(i.Z, { style: P }, o.createElement(Se.Z, { blockId: t, characterCount: D, disabled: b || !y || !C || D > E.j3, editorState: g, onSave: r, queryId: n, setDirty: _, setError: p, setSaving: k, userId: d })), c && t ? o.createElement(ue.Z, { blockId: t, headline: xe, onClose: l, onCompleted: w, queryId: n, subtext: Ee, userId: d }) : null);
                }),
                Ce = p().a765e936,
                Ie = p().d4d68e44,
                Te = ({ hasConsented: e, history: t, profileBlocksRef: n, queryId: l, refetch: a, viewerUser: r }) => {
                    const s = (0, x.p)(),
                        [m, f] = o.useState(!1),
                        p = c()(w.m1, n),
                        S = p?.items?.find((e) => e?.block_type === E.Mp.RICHTEXT),
                        D = S?.data?.value,
                        v = S?.block_id,
                        C = o.useCallback(() => {
                            f(!1);
                        }, []),
                        I = o.useCallback(
                            (e) => [
                                {
                                    text: Ce,
                                    Icon: g.default,
                                    disabled: !v,
                                    onClick: () => {
                                        f(!0), e();
                                    },
                                },
                            ],
                            [v],
                        ),
                        T = o.useCallback((e) => o.createElement(d.Z, { cancelButtonLabel: "Cancel", items: I(e), onCloseRequested: e }), [I]);
                    return r
                        ? o.createElement(_.Z, {
                              backLocation: `/${r.screen_name}`,
                              history: t,
                              primaryContent: (() => {
                                  if (!r || !p) return null;
                                  if (!e) return o.createElement(i.Z, { style: $e.root }, o.createElement(G, { queryId: l }));
                                  return o.createElement(
                                      i.Z,
                                      { style: $e.root },
                                      o.createElement(ve, {
                                          blockId: v,
                                          blocksQueryId: l,
                                          closeConfirm: C,
                                          initialState: D,
                                          onSave: () => {
                                              s({ text: Ie }), t.push(`/${r.screen_name}/bio`);
                                          },
                                          refetch: a,
                                          showConfirmDelete: m,
                                          userId: r.id_str,
                                      }),
                                  );
                              })(),
                              rightControl: e ? o.createElement(i.Z, null, o.createElement(u.Z, { Icon: h.default, renderActionMenu: T })) : null,
                              sidebarContent: o.createElement(b.Z, null),
                              subtitle: `@${r.screen_name}`,
                              title: (0, k.Z)(r),
                              titleIconCell: (0, y.Z)(r),
                          })
                        : null;
                },
                $e = m.default.create((e) => ({ root: { paddingVertical: e.spaces.space20, height: "100%" }, flexRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, flexCol: { display: "flex", flexDirection: "column" }, flexOne: { flex: 1 }, avatar: { width: 90, height: 90 } })),
                Fe = (e) => {
                    const { data: t, refetch: n } = (0, D.A)(w.vF, {}),
                        l = t?.viewer_v2?.user_results?.result?.profile_blocks,
                        a = Boolean(t?.viewer_v2?.user_results?.result?.has_xprofile_consent);
                    if (!e.viewerUser || !l) return null;
                    const i = a ? l.__id : t?.viewer_v2?.user_results?.result?.__id;
                    return o.createElement(Te, (0, r.Z)({ hasConsented: a, profileBlocksRef: l, queryId: i, refetch: n }, e));
                },
                Pe = { context: "EXTENDED_PROFILE_SETTINGS" },
                Le = (0, v.Z)((e) => o.createElement(S.H, { errorConfig: Pe }, o.createElement(Fe, e)));
        },
        751475: (e, t, n) => {
            n.d(t, { Z: () => u });
            n(136728);
            var l = n(202784),
                a = n(674132),
                r = n.n(a),
                o = n(190286);
            const i = r().b15c0a18,
                s = r().aebf81c8,
                c = r().aa744c1e,
                d = r().fe04d89a,
                u = (e) => {
                    const { children: t, fallbackBackPath: n, history: a, onNavigation: r, shouldBlockNavigation: u, shouldBlockUnload: m } = e,
                        [f, p] = l.useState(void 0);
                    l.useEffect(() => {
                        const e = (e) => {
                            m && (e.preventDefault(), (e.returnValue = ""));
                        };
                        return (
                            window.addEventListener("beforeunload", e),
                            () => {
                                window.removeEventListener("beforeunload", e);
                            }
                        );
                    }, [m]);
                    const g = l.useCallback((e, t) => !(!f && u(e, t)) || (p({ nextLocation: e, action: t }), !1), [f, u]);
                    l.useEffect(() => {
                        const e = a.block(g);
                        return () => e();
                    }, [g, a]);
                    const h = l.useCallback(() => {
                            p(void 0);
                        }, [p]),
                        b = l.useCallback(() => {
                            r?.(),
                                p((e) => {
                                    if (null == e) return;
                                    const { action: t, nextLocation: l } = e;
                                    switch (t) {
                                        case "PUSH":
                                            a.push(l);
                                            break;
                                        case "REPLACE":
                                            a.replace(l);
                                            break;
                                        case "POP":
                                            a.goBackThroughModals({ fallbackPath: n });
                                    }
                                });
                        }, [n, a, r]);
                    return l.createElement(l.Fragment, null, t, f ? l.createElement(o.Z, { cancelButtonLabel: c, confirmButtonLabel: d, confirmButtonType: "destructiveFilled", headline: i, onCancel: h, onConfirm: b, text: s }) : null);
                };
        },
        135904: (e, t, n) => {
            n.d(t, { c: () => r, n: () => a });
            var l = n(392237);
            const a = "longform-styles",
                r = `\n    .longform-header-one {\n        font-size: ${l.default.theme.fontSizes.title2};\n        font-weight: ${l.default.theme.fontWeights.heavy};\n        line-height: ${l.default.theme.lineHeights.title1};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${l.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${l.default.theme.fontWeights.heavy};\n        line-height: ${l.default.theme.lineHeights.title4};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${l.default.theme.fontSizes.title3};\n        font-weight: ${l.default.theme.fontWeights.heavy};\n        line-height: ${l.default.theme.lineHeights.title2};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${l.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${l.default.theme.fontWeights.heavy};\n        line-height: ${l.default.theme.lineHeights.headline1};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${l.default.theme.fontSizes.headline2};\n        line-height: ${l.default.theme.lineHeights.title4};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${l.default.theme.fontSizes.headline2};\n        line-height: ${l.default.theme.lineHeights.title4};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${l.default.theme.fontSizes.headline2};\n        line-height: ${l.default.theme.lineHeights.title4};   \n        margin-bottom: ${l.default.theme.spaces.space12};\n        margin-left: calc(${l.default.theme.spaces.space28} + ${l.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${l.default.theme.fontSizes.headline2};\n        line-height: ${l.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${l.default.theme.spaces.space12} / 2);\n        margin-left: ${l.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${l.default.theme.spaces.space24} + ${l.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${l.default.theme.spaces.space2});\n        padding-left: calc(${l.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${l.default.theme.colors.gray900};\n        border-radius: ${l.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${l.default.theme.spaces.space28} + ${l.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${l.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${l.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => w, Ak: () => T, KJ: () => _, LI: () => D, P7: () => h, PW: () => E, QF: () => b, Qm: () => y, Tr: () => v, b$: () => g, db: () => F, et: () => x, fR: () => p, iH: () => C, lD: () => k, su: () => S, u4: () => $, wX: () => I });
            var l = n(202784),
                a = n(674132),
                r = n.n(a),
                o = n(394123),
                i = n(856661),
                s = n(69893),
                c = n(474761),
                d = n(428259),
                u = n(89085),
                m = n(630715),
                f = n(731708);
            const p = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                g = (e) => [
                    { buttonTestId: "btn-bold", Icon: o.default, key: p.bold, onPress: e(p.bold) },
                    { buttonTestId: "btn-italic", Icon: i.default, key: p.italic, onPress: e(p.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: p.strikethrough, onPress: e(p.strikethrough) },
                ],
                h = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                b = (e) => [{ buttonTestId: "btn-blockquote", Icon: c.default, key: h.blockquote, onPress: e(h.blockquote) }],
                k = (e) => [
                    { buttonTestId: "btn-ul", Icon: d.default, key: h.bulleted, onPress: e(h.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: h.numbered, onPress: e(h.numbered) },
                ],
                y = "LINK",
                _ = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: y, onPress: e }],
                S = (e, t) => (n) => {
                    const l = (t) => (e ? `${t}-narrow` : t);
                    switch (n.getType()) {
                        case h.bulleted:
                            return l("longform-unordered-list-item");
                        case h.blockquote:
                            return l("longform-blockquote");
                        case h.header1:
                            return l("longform-header-one");
                        case h.header2:
                            return l("longform-header-two");
                        case h.numbered:
                            return l("longform-ordered-list-item");
                        case h.paragraph:
                            return l("longform-unstyled");
                        default:
                            return t?.(n) || "";
                    }
                },
                x = r().d5a48014,
                E = r().b92b6156,
                w = r().ec5ed598,
                D = ({ children: e, extendedWidth: t, size: n, weight: a }) => l.createElement(f.ZP, { extendedWidth: t, size: n, weight: a }, e),
                v = { blockType: h.paragraph, label: w, component: D({ size: "body", children: w }) },
                C = [{ blockType: h.header1, label: x, component: D({ size: "title1", extendedWidth: !0, children: x }) }, { blockType: h.header2, label: E, component: D({ size: "title3", weight: "heavy", children: E }) }, v],
                I = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                T = ["delete", "delete-word", "delete-to-start-of-line"],
                $ = "increase-text-size",
                F = "decrease-text-size";
        },
        989272: (e, t, n) => {
            n.d(t, { _i: () => a, fH: () => o, w3: () => r });
            n(136728);
            var l = n(392237);
            const a = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function r(e) {
                o(
                    (function () {
                        const e = l.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${a.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${a.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${a.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    i,
                );
                const t = s(e);
                return (
                    o(
                        (function (e) {
                            const t = s(e);
                            let n = e.placeholderTextColor;
                            const a = e.contentHorizontalPadding;
                            n || (n = l.default.theme.colors.gray700);
                            return `\n    .${t} .public-DraftEditorPlaceholder-root {\n      color: ${n};\n    }\n\n    .${t} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${n};\n    }\n\n    ${a ? `\n        .${t} .public-DraftEditor-content,\n        .${t} .public-DraftEditorPlaceholder-root {\n          padding-left: ${a};\n          padding-right: ${a};\n        }\n      ` : ""}\n  `;
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
                    const l = document.head;
                    l && l.insertBefore(n, l.firstChild);
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsExtendedProfile.86f6855a.js.map
