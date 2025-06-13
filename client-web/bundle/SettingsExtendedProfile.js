"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsExtendedProfile"],
    {
        681488: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a,
                l,
                r,
                i,
                o,
                s = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "richtextValue" }), (l = { defaultValue: null, kind: "LocalArgument", name: "sectionId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "sectionType" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateRichtextBlockMutation",
                        selections: (o = [
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
                    operation: { argumentDefinitions: [a, i, l, r], kind: "Operation", name: "useCreateRichtextBlockMutation", selections: o },
                    params: { id: "lDE6HUnPgNvp1_8bcCM3-w", metadata: {}, name: "useCreateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            s.hash = "5369f2707d565366752d07f461b21f70";
            const c = s;
        },
        876242: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a,
                l,
                r = {
                    fragment: {
                        argumentDefinitions: (a = [
                            { defaultValue: null, kind: "LocalArgument", name: "blockId" },
                            { defaultValue: null, kind: "LocalArgument", name: "userId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useDeleteProfileBlockMutation",
                        selections: (l = [
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useDeleteProfileBlockMutation", selections: l },
                    params: { id: "EvvA9IQR0sKW0tGqXwSzKA", metadata: {}, name: "useDeleteProfileBlockMutation", operationKind: "mutation", text: null },
                };
            r.hash = "5d2c7077ac04854de170e0b8fd37dc6f";
            const i = r;
        },
        163956: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a,
                l,
                r = {
                    fragment: {
                        argumentDefinitions: (a = [
                            { defaultValue: null, kind: "LocalArgument", name: "blockId" },
                            { defaultValue: null, kind: "LocalArgument", name: "richtextValue" },
                            { defaultValue: null, kind: "LocalArgument", name: "userId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useUpdateRichtextBlockMutation",
                        selections: (l = [
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useUpdateRichtextBlockMutation", selections: l },
                    params: { id: "oDmWQK_udVhiqH89Lbd5LA", metadata: {}, name: "useUpdateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            r.hash = "96b616d665932ca695bc2d75fe26a33c";
            const i = r;
        },
        512547: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(202784),
                l = n(190286),
                r = n(111677),
                i = n.n(r),
                o = n(782642),
                s = n(72130),
                c = n(725516),
                u = n(876242),
                d = (n(585488), n(351743)),
                m = n.n(d);
            const p = u.Z,
                f = () => {
                    const [e, t] = m()(p);
                    return [
                        a.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                },
                k = i().g9677c6e,
                g = i().a2b8c54c,
                h = ({ blockId: e, headline: t, onClose: n, onCompleted: r, queryId: i, subtext: u, userId: d }) => {
                    const m = (0, o.p)(),
                        p = (0, c.z)(),
                        [h, y] = f(),
                        b = a.useCallback(() => {
                            n();
                        }, [n]),
                        _ = a.useCallback(() => {
                            p.scribe({ ...(0, s.MA)("delete_block_btn", "click") }),
                                h({
                                    variables: { blockId: e, userId: d },
                                    updater: (e, t) => {
                                        i && e.delete(i);
                                    },
                                    onCompleted: (e) => {
                                        e?.delete_profile_block?.success && (m({ text: g }), n(), r && r());
                                    },
                                });
                        }, [m, p, e, h, n, r, i, d]);
                    return a.createElement(l.Z, { confirmButtonDisabled: y, confirmButtonLabel: k, confirmButtonType: "destructiveFilled", enableMaskForDismiss: !0, headline: t, onCancel: b, onConfirm: _, text: u });
                };
        },
        785813: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(202784),
                l = n(366635);
            const r = (e) => (e ? a.createElement(l.Z, { affiliateBadgeInfo: e?.highlightedLabel, isBlueVerified: e?.is_blue_verified, isProtected: e?.protected, isVerified: e?.verified, name: e?.name, verifiedType: e?.verified_type }) : null);
        },
        825495: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(202784),
                l = n(823161);
            const r = (e) => {
                if (!e) return null;
                const t = "Square" === e?.profile_image_shape ? "square" : "circle";
                return a.createElement(l.default, { shape: t, size: "xLarge", uri: e?.profile_image_url_https });
            };
        },
        313433: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(202784),
                l = n(925873),
                r = n(392237),
                i = n(913670);
            const o = r.default.create((e) => ({ iconGray: { color: e.colors.gray700 } })),
                s = ({ editorState: e, onChange: t }) => {
                    const n = a.useCallback(
                        (n) => {
                            const a = l.Z.insertTextAtCursor(e, n.text);
                            t(a);
                        },
                        [e, t],
                    );
                    return a.createElement(i.Z, { iconStyle: o.iconGray, key: "emoji-picker", onEmojiSelect: n, size: "small", testID: "btn-emoji", type: "primaryText" });
                };
        },
        536790: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(571372), n(136728);
            var a = n(202784),
                l = n(301503),
                r = n(597496),
                i = n(339110),
                o = n(456910),
                s = n(230295),
                c = n(267446);
            class u extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = a.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: t, contextText: n, isInline: l, isInlineReply: o, onTypeaheadStateChange: s, source: c } = this.props,
                                { canShowTypeahead: u, queryContext: d } = this.state,
                                m = u && d ? { word: d.word, resultType: d.resultType } : void 0;
                            return a.createElement(r.H1, { composeCommunityId: t, contextText: n, isInline: l, isInlineReply: o, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: s, query: m, ref: this._genericWrapperRef, source: c || i._4.Compose }, e(this._handleInputChange));
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
                                const a = (0, c.k)(e, n.resultType);
                                t(this._replaceToken(a, n));
                            }
                            this._setQueryContext(void 0);
                        }),
                        (this._handleInputChange = (e) => {
                            if (!(0, s.T)(e)) throw new Error("RichTextTypeaheadComposeWrapper cannot handle plain text input changes");
                            {
                                const { queryContext: t } = this.state,
                                    n = t && t.word,
                                    a = this._getPlaintextFromCurrentBlock(e),
                                    { end: l, start: r, word: i } = o.si(this._getCaret(e), a),
                                    s = o.bR(i || "", "compose");
                                if (s?.q === n) return;
                                if ((this._genericWrapperRef.current && this._genericWrapperRef.current.resetSelectedItem(), -1 === r)) this._setQueryContext(void 0);
                                else if (s) {
                                    const { q: t, result_type: n } = s;
                                    this._setQueryContext({ word: t, resultType: n, editorState: e, startIndex: r, endIndex: l });
                                } else this._setQueryContext(void 0);
                            }
                        }),
                        (this._setQueryContext = (e) => this.setState({ queryContext: e, canShowTypeahead: !!e })),
                        (this._handleDismiss = () => this.setState({ canShowTypeahead: !1 }));
                }
                _replaceToken(e, t) {
                    const { editorState: n, endIndex: a, startIndex: r } = t,
                        i = n.getSelection().merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: r, focusOffset: a }),
                        o = l.Modifier.replaceText(n.getCurrentContent(), i, e),
                        s = l.EditorState.push(n, o, "insert-characters"),
                        c = r + e.length,
                        u = s.getSelection().merge({ anchorOffset: c, focusOffset: c });
                    return l.EditorState.forceSelection(s, u);
                }
            }
            const d = u;
        },
        72130: (e, t, n) => {
            n.d(t, { Ak: () => o, MA: () => i, Rz: () => a, Zi: () => r, he: () => l });
            const a = () => ({ component: "extended_profile_settings", action: "click" }),
                l = (e) => ({ component: "extended_profile", element: "extended_profile_edit_btn", action: "click", data: e }),
                r = (e, t) => ({ component: "extended_profile", action: "impression", data: { profile_id: e, ...t } }),
                i = (e, t, n) => ({ component: "rich_text_editor", element: e, action: t, data: n }),
                o = (e, t, n) => ({ component: "work_history_editor", element: e, action: t, data: { version: 2, ...n } });
        },
        520385: (e, t, n) => {
            n.d(t, { Mp: () => l, NB: () => r, P2: () => i, j3: () => a, pR: () => o });
            const a = 5e4,
                l = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                r = (l.RICHTEXT, l.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                i = { about: r.ABOUT, work_experience: r.WORK_EXPERIENCE },
                o = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        238225: (e, t, n) => {
            n.d(t, { kI: () => g, vF: () => k, m1: () => f });
            var a,
                l,
                r,
                i,
                o = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchProfileBlocks_profileExistsQuery",
                        selections: [
                            {
                                alias: null,
                                args: (l = [
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
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "useFetchProfileBlocks_profileExistsQuery",
                        selections: [
                            {
                                alias: null,
                                args: l,
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
                                            { kind: "InlineFragment", selections: [r, (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    i,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "Z2BA99jFw6TxaJM5v7Irmg", metadata: {}, name: "useFetchProfileBlocks_profileExistsQuery", operationKind: "query", text: null },
                };
            o.hash = "159e51b19a254333fecf6035bc3245b7";
            var s = (function () {
                var e = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }],
                    t = [
                        { kind: "Literal", name: "s", value: "f3d8" },
                        { kind: "Variable", name: "screen_name", variableName: "screenName" },
                    ],
                    n = { alias: null, args: null, kind: "ScalarField", name: "has_profile_blocks", storageKey: null },
                    a = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null },
                    l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
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
                                                            { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [a], storageKey: null },
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
                    operation: { argumentDefinitions: e, kind: "Operation", name: "useFetchProfileBlocks_profileQuery", selections: [{ alias: null, args: t, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_screen_name", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [n, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [a, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [l, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }, r], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }] },
                    params: { id: "Azv1m7WiLnbn36nNCk7l0Q", metadata: {}, name: "useFetchProfileBlocks_profileQuery", operationKind: "query", text: null },
                };
            })();
            s.hash = "16584b716a8d455d79eefb53731f55ee";
            const c = s;
            var u = (function () {
                var e = [{ kind: "Literal", name: "s", value: "f3d8" }],
                    t = { alias: null, args: null, kind: "ScalarField", name: "has_xprofile_consent", storageKey: null },
                    n = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null },
                    a = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                    l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
                return {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [t, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useFetchProfileBlocks_profileBlocksSlice" }, { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [n], storageKey: null }, a], storageKey: null }, a], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [t, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [n, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [l, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }, a], storageKey: null }, a, r], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }] },
                    params: { id: "vRz7Yom7hObecKwzBRUBiQ", metadata: {}, name: "useFetchProfileBlocks_settingsQuery", operationKind: "query", text: null },
                };
            })();
            u.hash = "cb1d5a0879773e36614622dd4379b34e";
            const d = u;
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
            const p = m;
            n(585488);
            const f = p,
                k = d,
                g = c;
        },
        794057: (e, t, n) => {
            n.d(t, { C0: () => i, DC: () => a, _e: () => r, iN: () => c, kd: () => o, pc: () => l });
            const a = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                l = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                r = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                i = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                o = { content_state: { blocks: [], entity_map: [] } },
                s = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                c = Object.freeze({ DRAFT: s.DRAFT, PUBLISHED: s.PUBLISHED });
        },
        482924: (e, t, n) => {
            n.d(t, { A: () => p });
            var a = n(202784),
                l = n(437429),
                r = n.n(l),
                i = n(57074),
                o = n.n(i),
                s = n(10622),
                c = n.n(s),
                u = n(71620),
                d = n(312771),
                m = n(535338);
            function p(e, t, n) {
                const l = o()(t),
                    i = o()(n),
                    s = r()(),
                    p = (0, u.po)(),
                    [f, k] = a.useState(null),
                    [g, h] = a.useState(!1),
                    y = a.useCallback(() => {
                        g ||
                            (h(!0),
                            c()(s, e, l, { networkCacheConfig: i?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    h(!1);
                                },
                                error: (e) => {
                                    p(e), h(!1), k(e);
                                },
                            }));
                    }, [s, p, e, g, l, i]),
                    b = (0, m.p)(e, t, n);
                return a.useMemo(() => (f ? { data: b, refetch: y, refetchStatus: d.ZP.FAILED, refetchError: f } : { data: b, refetch: y, refetchStatus: g ? d.ZP.LOADING : d.ZP.NONE, refetchError: void 0 }), [b, f, g, y]);
            }
        },
        242470: (e, t, n) => {
            n.d(t, { Z: () => v });
            var a = n(202784),
                l = n(301503),
                r = n(614983),
                i = n.n(r),
                o = n(154003),
                s = n(111677),
                c = n.n(s),
                u = n(952793),
                d = n(72130),
                m = n(520385),
                p = n(725405),
                f = n(681488),
                k = (n(585488), n(351743)),
                g = n.n(k);
            const h = f.Z,
                y = () => {
                    const [e, t] = g()(h);
                    return [
                        a.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                };
            const b = n(163956).Z,
                _ = () => {
                    const [e, t] = g()(b);
                    return [
                        a.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                },
                E = c().a9cc8f96,
                C = c().i2209530,
                v = ({ blockId: e, characterCount: t, disabled: n, editorState: r, onSave: s, queryId: c, sectionId: f, sectionType: k, setDirty: g, setError: h, setSaving: b, userId: v }) => {
                    const x = (0, u.hC)("xprofile_work_history_enabled"),
                        S = (0, p.Z)(),
                        [T] = y(),
                        [I] = _(),
                        F = a.useCallback(() => {
                            b(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            S.scribe({ ...(0, d.MA)(t, "error", { version: x ? 2 : 1 }) });
                        }, [S, e, x, b]),
                        Z = a.useCallback(() => {
                            g(!1), b(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            S.scribe({ ...(0, d.MA)(t, "success", { version: x ? 2 : 1 }) }), s();
                        }, [S, e, x, s, g, b]),
                        w = a.useCallback(() => {
                            const n = ((e) => {
                                if (!e) return;
                                const t = e.getCurrentContent(),
                                    n = (0, l.convertToRaw)(t);
                                return JSON.stringify(n);
                            })(r);
                            if (!n) return;
                            if (t > m.j3) return void h(E);
                            b(!0);
                            const a = e ? "update_block_btn" : "save_block_btn";
                            S.scribe({ ...(0, d.MA)(a, "click", {}) }),
                                e && v
                                    ? I({
                                          variables: { richtextValue: n, blockId: e, userId: v },
                                          onCompleted: Z,
                                          onError: F,
                                          updater: (e, t) => {
                                              if ((i()(c, "queryId must exist"), t?.update_richtext_profile_block?.success))
                                                  if (x) {
                                                      const t = e.get(`client:${c}:content`);
                                                      t && t.setValue(n, "value");
                                                  } else {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                          },
                                      })
                                    : v &&
                                      T(
                                          {
                                              variables: { richtextValue: n, userId: v, sectionId: f, sectionType: k },
                                              onCompleted: Z,
                                              updater: (e, t) => {
                                                  if ((i()(c, "queryId must exist"), t?.create_richtext_profile_block?.block_id)) {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                              },
                                          },
                                          c,
                                      );
                        }, [r, t, b, e, S, h, I, v, Z, F, c, x, T, f, k]);
                    return a.createElement(o.ZP, { disabled: n, onClick: w, size: "large", type: "brandFilled" }, C);
                };
        },
        371879: (e, t, n) => {
            n.r(t), n.d(t, { default: () => h });
            var a = n(202784),
                l = n(301503),
                r = n(925873),
                i = n(989272),
                o = n(977952),
                s = n(297256),
                c = n(392237),
                u = n(187669),
                d = n(949626),
                m = n(980407),
                p = n(478414);
            const f = (e) => {
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
                k = () => null,
                g = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 } })),
                h = ({ history: e }) => {
                    const [t, n] = a.useState(f(window?.__iOSDraftAdapterInitialContents__));
                    (0, u.q)(() => {
                        (0, i.fH)((0, p.yW)(p.kg, p.gv), p.kg);
                    }),
                        a.useEffect(() => {
                            const e = window.webkit?.messageHandlers?.draftEditorReady;
                            e && e.postMessage(!0);
                        }, []);
                    const c = a.useMemo(() => ({ editorState: t, element: o.Z, stripPastedStyles: !0 }), [t]),
                        h = a.useCallback((e) => {
                            const t = r.Z.convertEmojiToEntities(e);
                            n(t);
                        }, []),
                        y = a.useCallback(
                            () =>
                                ((e) => {
                                    if (!e) return;
                                    const t = e.getCurrentContent(),
                                        n = (0, l.convertToRaw)(t);
                                    return JSON.stringify(n);
                                })(t),
                            [t],
                        ),
                        b = a.useCallback((e) => {
                            n(f(e));
                        }, []);
                    a.useEffect(
                        () => (
                            (window.__iOSDraftAdapter__ = { __getContents__: y, __setContents__: b }),
                            () => {
                                delete window.__iOSDraftAdapter__;
                            }
                        ),
                        [y, b],
                    );
                    const _ = a.useMemo(() => a.createElement(d.Z, { className: p.kg }, a.createElement(s.b, { autoFocus: !0, inputStyle: g.container, isInputFullWidth: !0, onChange: h, richTextInputContext: c, textSizesOverride: (0, p.bb)(p.gv), withAppBar: !1 })), [h, c]);
                    return a.createElement(m.Z, { children: _, hideBackButton: !0, history: e, renderHeader: k });
                };
        },
        600193: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(668214),
                l = n(919022);
            const r = (0, a.Z)()
                .propsFromState(() => ({ viewerUser: l.ZP.selectViewerUser }))
                .withAnalytics({ page: "settings", section: "extendedprofile" });
        },
        992915: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Le });
            var a,
                l,
                r = n(807896),
                i = (n(136728), n(202784)),
                o = n(325686),
                s = n(277660),
                c = n.n(s),
                u = n(811176),
                d = n(247056),
                m = n(392237),
                p = n(111677),
                f = n.n(p),
                k = n(607127),
                g = n(149170),
                h = n(718e3),
                y = n(785813),
                b = n(825495),
                _ = n(252021),
                E = n(736063),
                C = n(782642),
                v = n(520385),
                x = n(238225),
                S = n(482924),
                T = n(600193),
                I = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "consented" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "ConsentScreen_xprofileMutation",
                        selections: (l = [
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "ConsentScreen_xprofileMutation", selections: l },
                    params: { id: "4RvEtxr03YPi6jxZZ_PkoQ", metadata: {}, name: "ConsentScreen_xprofileMutation", operationKind: "mutation", text: null },
                };
            I.hash = "aa72fdb65006a205db978375998ebfe6";
            const F = I;
            var Z = n(614983),
                w = n.n(Z),
                B = (n(585488), n(351743)),
                P = n.n(B),
                L = n(731708),
                R = n(593866),
                K = n(154003),
                D = n(40610),
                A = n(715417);
            const M = F,
                O = f().h367e724,
                V = f().ea5928d4,
                N = f().h7ef9dc8,
                U = f().c04ba4b4,
                q = f().d7666008,
                z = f().cb24ee16,
                W = f().c3d89aca,
                H = f().a1c93d74,
                j = m.default.create((e) => ({ consentRoot: { maxWidth: `calc(6 * ${e.spaces.space80})`, paddingHorizontal: e.spaces.space20, marginVertical: e.spaces.space32, marginHorizontal: "auto", alignSelf: "center", width: "100%", gap: e.spaces.space20 }, icon: { height: e.spaces.space20, width: e.spaces.space20, color: e.colors.text, marginEnd: e.spaces.space16 } })),
                Q = i.createElement(A.default, { style: j.icon }),
                $ = ({ queryId: e }) => {
                    const [t, n] = i.useState(""),
                        a = i.useMemo(
                            () => [
                                { label: U, decoration: Q },
                                { label: q, decoration: Q },
                                { label: z, decoration: Q },
                            ],
                            [],
                        ),
                        [l, r] = P()(M),
                        s = i.useCallback(() => {
                            n(""),
                                l({
                                    variables: { consented: !0 },
                                    onCompleted: (e) => {
                                        e?.update_xprofile_consent?.success || n(H);
                                    },
                                    onError: (e) => {
                                        n(H);
                                    },
                                    updater: (t, n) => {
                                        w()(e, "userId must be specified");
                                        const a = t.get(e);
                                        a && n?.update_xprofile_consent?.success && a.setValue(!0, "has_xprofile_consent");
                                    },
                                });
                        }, [l, e]);
                    return i.createElement(o.Z, { style: j.consentRoot }, i.createElement(L.ZP, { size: "title3", weight: "bold" }, O), i.createElement(L.ZP, { size: "body" }, V), i.createElement(L.ZP, { weight: "bold" }, N), i.createElement(R.Z, { items: a }), i.createElement(K.ZP, { disabled: r, onClick: s, size: "large", type: "brandFilled" }, W), t ? i.createElement(D.Z.Danger, { text: t, withIcon: !0 }) : null);
                },
                G = i.memo($);
            var X = n(301503),
                J = n(107267),
                Y = n(925873),
                ee = n(989272),
                te = n(891198),
                ne = n(977952),
                ae = n(167630),
                le = n(67369),
                re = n(297256),
                ie = n(751475),
                oe = n(908478),
                se = n(516951),
                ce = n(187669),
                ue = n(949626),
                de = n(512547),
                me = n(313433),
                pe = n(874111),
                fe = n(536790),
                ke = n(952793),
                ge = n(655352),
                he = n(478414),
                ye = n(72130),
                be = n(339110),
                _e = n(725516),
                Ee = n(242470);
            const Ce = f().b956c04a,
                ve = f().ifb23caa,
                xe = f().c2333081,
                Se = m.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16 }, desktopButton: { bottom: 0 }, mobileButton: { bottom: e.componentDimensions.appBarHeight }, v2Button: { padding: e.spaces.space16, justifyContent: "space-between", bottom: 0 }, error: { padding: e.spaces.space16 }, textCountLabel: { flexDirection: "row", alignSelf: "center" } })),
                Te = (0, _e.Z)(({ analytics: e, blockId: t, blocksQueryId: n, closeConfirm: a, initialState: l = "", onSave: r, refetch: s, showConfirmDelete: c, userId: u }) => {
                    const d = (0, ke.hC)("xprofile_emojis_enabled"),
                        m = (0, J.useHistory)(),
                        [p, f] = i.useState(""),
                        [k, g] = i.useState(
                            ((e) => {
                                const t = Y.Z.getContentStateFromRaw(e),
                                    n = Y.Z.initEditorState(t);
                                return Y.Z.convertEmojiToEntities(n);
                            })(l),
                        ),
                        [h, y] = i.useState(!1),
                        [b, _] = i.useState(!1),
                        E = i.useCallback((e, t) => b && !h, [b, h]),
                        C = i.useCallback(() => {
                            _(!1), y(!1);
                        }, []);
                    (0, ce.q)(() => {
                        (0, ee.fH)((0, he.yW)(he.Hx, he.K), he.Hx);
                    });
                    const x = i.useCallback(() => {
                            a(), _(!1), y(!1), e.scribe({ ...(0, ye.MA)("delete_block_btn", "success") }), g(Y.Z.initEditorState("")), s();
                        }, [e, a, s]),
                        S = (0, pe.c6)(k);
                    let T = S;
                    S > 1 && (T = te.ZP.getFormattedCount(S));
                    const I = i.useMemo(() => k?.getCurrentContent()?.hasText(), [k]),
                        F = i.useCallback(
                            (e) => {
                                const t = Y.Z.convertMentionsToEntities(Y.Z.convertEmojiToEntities(e));
                                b || (0, oe.Z)((0, X.convertToRaw)(t.getCurrentContent()), (0, X.convertToRaw)(k.getCurrentContent())) || _(!0), g(t);
                            },
                            [k, b],
                        ),
                        Z = i.useMemo(() => ({ editorState: k, element: ne.Z, stripPastedStyles: !0 }), [k]),
                        w = i.useMemo(() => {
                            if (h) return i.createElement(o.Z, { style: Se.flexRow }, i.createElement(ae.Z, { size: "small" }), i.createElement(L.ZP, { size: "subtext1" }, "Saving"));
                            const e = !!v.j3 && S > v.j3;
                            return i.createElement(o.Z, null, i.createElement(L.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: Se.textCountLabel }, xe({ count: T })));
                        }, [S, T, h]),
                        B = (0, le.Zz)(),
                        P = i.useMemo(() => {
                            const e = [Se.stickyButton];
                            return B && !(0, ge.ZP)() ? e.push(Se.mobileButton) : e.push(Se.desktopButton), e;
                        }, [B]),
                        R = i.useCallback(() => (d ? i.createElement(me.Z, { editorState: k, onChange: F }) : null), [k, d, F]),
                        K = i.useCallback(
                            () => (e) =>
                                i.createElement(re.b, {
                                    emojiPickerButton: R,
                                    inputStyle: Se.root,
                                    maxNumberOfLines: 100,
                                    numberOfLines: 30,
                                    onChange: (t) => {
                                        e(t), F(t);
                                    },
                                    richTextInputContext: Z,
                                    testID: "xprofile-composer",
                                    textSizesOverride: (0, he.bb)(he.K),
                                    toolbarRightControl: w,
                                }),
                            [F, R, Z, w],
                        );
                    return i.createElement(o.Z, null, p ? i.createElement(o.Z, { style: Se.error }, i.createElement(D.Z.Danger, { text: p, withIcon: !0 })) : null, i.createElement(ie.Z, { fallbackBackPath: "/", history: m, onNavigation: C, shouldBlockNavigation: E, shouldBlockUnload: b }, i.createElement(ue.Z, { className: he.Hx }, i.createElement(fe.Z, { contextText: (0, pe.iT)(k), isInline: !0, onTextUpdated: F, onTypeaheadStateChange: se.Z, source: be._4.LongformComposer }, K()))), i.createElement(o.Z, { style: P }, i.createElement(Ee.Z, { blockId: t, characterCount: S, disabled: h || !b || !I || S > v.j3, editorState: k, onSave: r, queryId: n, setDirty: _, setError: f, setSaving: y, userId: u })), c && t ? i.createElement(de.Z, { blockId: t, headline: Ce, onClose: a, onCompleted: x, queryId: n, subtext: ve, userId: u }) : null);
                }),
                Ie = f().a765e936,
                Fe = f().d4d68e44,
                Ze = ({ hasConsented: e, history: t, profileBlocksRef: n, queryId: a, refetch: l, viewerUser: r }) => {
                    const s = (0, C.p)(),
                        [m, p] = i.useState(!1),
                        f = c()(x.m1, n),
                        E = f?.items?.find((e) => e?.block_type === v.Mp.RICHTEXT),
                        S = E?.data?.value,
                        T = E?.block_id,
                        I = i.useCallback(() => {
                            p(!1);
                        }, []),
                        F = i.useCallback(
                            (e) => [
                                {
                                    text: Ie,
                                    Icon: k.default,
                                    disabled: !T,
                                    onClick: () => {
                                        p(!0), e();
                                    },
                                },
                            ],
                            [T],
                        ),
                        Z = i.useCallback((e) => i.createElement(u.Z, { cancelButtonLabel: "Cancel", items: F(e), onCloseRequested: e }), [F]);
                    return r
                        ? i.createElement(_.Z, {
                              backLocation: `/${r.screen_name}`,
                              history: t,
                              primaryContent: (() => {
                                  if (!r || !f) return null;
                                  if (!e) return i.createElement(o.Z, { style: we.root }, i.createElement(G, { queryId: a }));
                                  return i.createElement(
                                      o.Z,
                                      { style: we.root },
                                      i.createElement(Te, {
                                          blockId: T,
                                          blocksQueryId: a,
                                          closeConfirm: I,
                                          initialState: S,
                                          onSave: () => {
                                              s({ text: Fe }), t.push(`/${r.screen_name}/bio`);
                                          },
                                          refetch: l,
                                          showConfirmDelete: m,
                                          userId: r.id_str,
                                      }),
                                  );
                              })(),
                              rightControl: e ? i.createElement(o.Z, null, i.createElement(d.Z, { Icon: g.default, renderActionMenu: Z })) : null,
                              sidebarContent: i.createElement(h.Z, null),
                              subtitle: `@${r.screen_name}`,
                              title: (0, y.Z)(r),
                              titleIconCell: (0, b.Z)(r),
                          })
                        : null;
                },
                we = m.default.create((e) => ({ root: { paddingVertical: e.spaces.space20, height: "100%" }, flexRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, flexCol: { display: "flex", flexDirection: "column" }, flexOne: { flex: 1 }, avatar: { width: 90, height: 90 } })),
                Be = (e) => {
                    const { data: t, refetch: n } = (0, S.A)(x.vF, {}),
                        a = t?.viewer_v2?.user_results?.result?.profile_blocks,
                        l = Boolean(t?.viewer_v2?.user_results?.result?.has_xprofile_consent);
                    if (!e.viewerUser || !a) return null;
                    const o = l ? a.__id : t?.viewer_v2?.user_results?.result?.__id;
                    return i.createElement(Ze, (0, r.Z)({ hasConsented: l, profileBlocksRef: a, queryId: o, refetch: n }, e));
                },
                Pe = { context: "EXTENDED_PROFILE_SETTINGS" },
                Le = (0, T.Z)((e) => i.createElement(E.H, { errorConfig: Pe }, i.createElement(Be, e)));
        },
        751475: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(136728);
            var a = n(202784),
                l = n(111677),
                r = n.n(l),
                i = n(190286);
            const o = r().b15c0a18,
                s = r().aebf81c8,
                c = r().aa744c1e,
                u = r().fe04d89a,
                d = (e) => {
                    const { children: t, fallbackBackPath: n, history: l, onNavigation: r, shouldBlockNavigation: d, shouldBlockUnload: m } = e,
                        [p, f] = a.useState(void 0);
                    a.useEffect(() => {
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
                    const k = a.useCallback((e, t) => !(!p && d(e, t)) || (f({ nextLocation: e, action: t }), !1), [p, d]);
                    a.useEffect(() => {
                        const e = l.block(k);
                        return () => e();
                    }, [k, l]);
                    const g = a.useCallback(() => {
                            f(void 0);
                        }, [f]),
                        h = a.useCallback(() => {
                            r?.(),
                                f((e) => {
                                    if (null == e) return;
                                    const { action: t, nextLocation: a } = e;
                                    switch (t) {
                                        case "PUSH":
                                            l.push(a);
                                            break;
                                        case "REPLACE":
                                            l.replace(a);
                                            break;
                                        case "POP":
                                            l.goBackThroughModals({ fallbackPath: n });
                                    }
                                });
                        }, [n, l, r]);
                    return a.createElement(a.Fragment, null, t, p ? a.createElement(i.Z, { cancelButtonLabel: c, confirmButtonLabel: u, confirmButtonType: "destructiveFilled", headline: o, onCancel: g, onConfirm: h, text: s }) : null);
                };
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
            n.d(t, { ZP: () => g });
            n(571372);
            var a = n(202784),
                l = n(325686),
                r = n(392237),
                i = n(111677),
                o = n.n(i),
                s = n(643442),
                c = n(466445),
                u = n(731708),
                d = n(154003),
                m = n(173739);
            const p = o().jcf3e7a2;
            function f({ animation: e, autoplay: t }) {
                const [n, r] = a.useState(t),
                    [i, o] = a.useState(0);
                return (
                    a.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && o(Math.round(e.currentTime));
                        });
                    }, [e]),
                    a.createElement(
                        l.Z,
                        { style: k.container },
                        a.createElement(d.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? a.createElement(s.default, null) : a.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), r(!1)) : (e.play(), r(!0));
                            },
                            type: "primaryText",
                        }),
                        a.createElement(u.ZP, { style: k.frames }, `${i}/${e.totalFrames}`),
                        a.createElement(
                            l.Z,
                            { style: k.slider },
                            a.createElement(m.Z, {
                                "aria-label": p,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), r(!1);
                                },
                                value: i,
                            }),
                        ),
                    )
                );
            }
            const k = r.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function g(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: r, onAnimationStart: i, onError: o, withControls: s } = e,
                    c = a.useRef(void 0),
                    u = a.useRef({ animationLoaded: !1 }),
                    d = a.useRef(null),
                    [m, p] = a.useState(!1);
                return (
                    a.useEffect(() => {
                        function a(e, t) {
                            "function" == typeof r && r(t), e && e.destroy();
                        }
                        const { animationLoaded: l } = u.current;
                        l ||
                            ((u.current.animationLoaded = !0),
                            h.load().then((l) => {
                                if (l && d.current) {
                                    const r = { container: d.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        s = l.loadAnimation(r);
                                    (c.current = s),
                                        (s.onError = (e) => {
                                            const t = new y(e);
                                            "function" == typeof o && o(t), a(s, t);
                                        }),
                                        s.addEventListener("DOMLoaded", () => {
                                            p(!0), t && (s.play(), i && i());
                                        }),
                                        s.addEventListener("complete", () => {
                                            a(s);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, r, i, o, s]),
                    a.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    a.createElement(l.Z, null, a.createElement(l.Z, { style: [e.animationContainerStyle, b.centerAnimation] }, a.createElement("div", { ref: d, style: e.animationStyle }), s && c.current && m && a.createElement(f, { animation: c.current, autoplay: t })))
                );
            }
            g.Prepare = function () {
                return (
                    a.useEffect(() => {
                        h.load();
                    }, []),
                    null
                );
            };
            const h = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class y extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, y), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const b = r.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(202784),
                l = n(111677),
                r = n.n(l),
                i = n(149170),
                o = n(40644);
            const s = r().gaeb997e;
            const c = function ({ activeColor: e, label: t = s, Icon: n = i.default, iconSize: l = "normal", isDisabled: r, onClick: c, preventFocusShift: u, renderActionMenu: d, style: m, testID: p, withDarkBackground: f = !1 }) {
                const k = a.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    g = a.useMemo(() => ({ label: t }), [t]);
                return a.createElement(o.ZP, { Icon: n, activeColor: e || (f ? "white" : void 0), "aria-label": t, backgroundColor: f ? "translucentBlack77" : "transparent", color: f ? "white" : "gray700", hoverLabel: g, iconSize: l, isDisabled: r, onPress: k, preventFocusShift: u, renderMenu: d, style: m, testID: p });
            };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => k });
            var a = n(202784),
                l = n(325686),
                r = n(827515),
                i = n(461756),
                o = n(731708),
                s = n(392237);
            const c = "up",
                u = "down",
                d = (e, t, n) => {
                    n((n) => {
                        const a = (0, r.Z)(e) ? (e > (n.count || 0) ? c : u) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: a };
                    });
                },
                m = {};
            [c, u].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                f = s.default.create({ root: { overflow: "hidden" } }),
                k = (e) => {
                    const { children: t, containerStyle: n, count: s, ...u } = e,
                        [k, g] = a.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        h = a.useRef(!1);
                    return (
                        a.useEffect(
                            () => (
                                (h.current = !0),
                                function () {
                                    h.current = !1;
                                }
                            ),
                            [],
                        ),
                        a.useEffect(() => {
                            if (h.current)
                                if (i.Z.reducedMotionEnabled) g((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== k.pendingText) {
                                    t === k.text || ((0, r.Z)(e.count) && k.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), k.animating || d(e.count, t, g));
                                }
                        }, [t]),
                        a.useEffect(() => {
                            h.current &&
                                !1 === k.animating &&
                                (k.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              h.current && g((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : k.pendingText && d(k.pendingCount, k.pendingText, g));
                        }, [k.animating, k.oldText]),
                        a.useMemo(() => {
                            const e = m[k.transitionDirection],
                                t = k.oldText && !i.Z.reducedMotionEnabled,
                                r = !k.animating && k.oldText && !i.Z.reducedMotionEnabled,
                                s = { ...p, ...(k.animating ? e.post : e.active) },
                                c = { ...(r ? e.pre : e.active) };
                            return a.createElement(
                                l.Z,
                                { style: [f.root, n] },
                                t ? a.createElement("span", { style: s }, a.createElement(o.ZP, u, k.oldText)) : null,
                                a.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(h.current, g),
                                        style: c,
                                    },
                                    a.createElement(o.ZP, u, k.text),
                                ),
                            );
                        }, [n, u, k, h, g])
                    );
                };
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => E });
            var a = n(202784),
                l = n(325686),
                r = n(461756),
                i = n(731708),
                o = n(58881),
                s = n(530732),
                c = n(224162),
                u = n(491915),
                d = n(392237),
                m = n(551611),
                p = n(111677),
                f = n.n(p),
                k = n(891198),
                g = n(537392),
                h = n(280278);
            const y = f().e8d93005,
                b = d.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                _ = ({ color: e, count: t }) => {
                    const n = (0, k.wl)(t, !0);
                    return a.createElement(g.ZP, null, ({ containerWidth: l }) => {
                        return a.createElement(h.ZP, { color: e, count: t, size: "subtext2", style: [b.count, ((r = l), r < d.default.theme.breakpoints.small && b.narrowCount)] }, t > 0 ? (((e) => e < d.default.theme.breakpoints.xxSmall)(l) || n.length >= 5 ? y(t) : n) : void 0);
                        var r;
                    });
                };
            class E extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: r, decoration: o } = this.props;
                            return a.createElement(c.ZP.Consumer, null, ({ direction: s }) => a.createElement(i.ZP, { color: e ? n : r, dir: s, style: [x.inner, e && "blue500" === n && x.blue500] }, a.createElement(l.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), o, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: l, iconSize: r, isActive: i, isDisabled: c, showBackgroundWhenActive: u } = this.props,
                                m = o.Z.generate({ backgroundColor: d.default.theme.colors[n], color: d.default.theme.colors[t], insetFocusRing: !0 }),
                                p = u && i && !e?.isHovered;
                            return a.createElement(s.Z, { hoverLabel: l, interactiveStyles: m, interactivityState: e, style: [d.default.absoluteFill, v[p ? "haloBackground" : n], !c && x.iconBackground, "small" === r && x.iconSmallBoundingBox, p && x.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: l, isFaded: i, onAnimationEnd: o, onAnimationStart: s, onError: c, showAnimation: p, transitionAnimationUrl: f } = this.props;
                            if (!d.default.theme.highContrastEnabled && !r.Z.reducedMotionEnabled && e && p) return a.createElement(u.ZP, { animation: f || m.Bf, animationContainerStyle: C[t], animationStyle: T, onAnimationEnd: o, onAnimationStart: s, onError: c });
                            {
                                const r = n && e ? e : this.props.Icon;
                                return a.createElement(r, { style: [C[t], !l && i && x.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? a.createElement(_, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: i, isDisabled: o, isPresentational: c, keyboardShortcut: m, link: p, preventFocusShift: f, renderMenu: k, renderWrapper: g = a.Fragment, style: h, testID: y } = this.props,
                        b = !d.default.theme.highContrastEnabled && !r.Z.reducedMotionEnabled;
                    return a.createElement(
                        l.Z,
                        { style: [x.root, h] },
                        a.createElement(
                            g,
                            null,
                            c
                                ? this._renderContent(i)
                                : a.createElement(s.Z, { "aria-haspopup": k ? "menu" : void 0, "aria-label": e, disabled: o, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: m, link: p, onClick: this._handlePress, preventFocusShift: f, renderMenu: k, style: [x.triggerAreaRoot, x.outlineNone], testID: y }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: a } = e,
                                          l = i || n || a || t;
                                      return this._renderContent(l, e);
                                  }),
                        ),
                        b ? a.createElement(u.ZP.Prepare, null) : null,
                    );
                }
            }
            E.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const C = d.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                v = d.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                x = d.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                S = "224.5%",
                T = { width: S, height: S };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => l, ZP: () => i });
            var a = n(941978);
            const l = "https://abs.twimg.com/sticky/animations/like.4.json";
            class r extends a.C {
                check(e) {
                    return super.check(e ?? l);
                }
            }
            const i = new r();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsExtendedProfile.239fb66a.js.map
