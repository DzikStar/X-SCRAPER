"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsExtendedProfile"],
    {
        681488: (e, t, n) => {
            n.d(t, { Z: () => c });
            var l,
                a,
                r,
                i,
                s,
                o = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "richtextValue" }), (a = { defaultValue: null, kind: "LocalArgument", name: "sectionId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "sectionType" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateRichtextBlockMutation",
                        selections: (s = [
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
                    operation: { argumentDefinitions: [l, i, a, r], kind: "Operation", name: "useCreateRichtextBlockMutation", selections: s },
                    params: { id: "lDE6HUnPgNvp1_8bcCM3-w", metadata: {}, name: "useCreateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            o.hash = "5369f2707d565366752d07f461b21f70";
            const c = o;
        },
        876242: (e, t, n) => {
            n.d(t, { Z: () => i });
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
            const i = r;
        },
        163956: (e, t, n) => {
            n.d(t, { Z: () => i });
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
            const i = r;
        },
        512547: (e, t, n) => {
            n.d(t, { Z: () => y });
            var l = n(202784),
                a = n(190286),
                r = n(332920),
                i = n.n(r),
                s = n(782642),
                o = n(72130),
                c = n(725516),
                u = n(876242),
                d = (n(585488), n(351743)),
                m = n.n(d);
            const p = u.Z,
                k = () => {
                    const [e, t] = m()(p);
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
                f = i().g9677c6e,
                g = i().a2b8c54c,
                y = ({ blockId: e, headline: t, onClose: n, onCompleted: r, queryId: i, subtext: u, userId: d }) => {
                    const m = (0, s.p)(),
                        p = (0, c.z)(),
                        [y, b] = k(),
                        _ = l.useCallback(() => {
                            n();
                        }, [n]),
                        h = l.useCallback(() => {
                            p.scribe({ ...(0, o.MA)("delete_block_btn", "click") }),
                                y({
                                    variables: { blockId: e, userId: d },
                                    updater: (e, t) => {
                                        i && e.delete(i);
                                    },
                                    onCompleted: (e) => {
                                        e?.delete_profile_block?.success && (m({ text: g }), n(), r && r());
                                    },
                                });
                        }, [m, p, e, y, n, r, i, d]);
                    return l.createElement(a.Z, { confirmButtonDisabled: b, confirmButtonLabel: f, confirmButtonType: "destructiveFilled", enableMaskForDismiss: !0, headline: t, onCancel: _, onConfirm: h, text: u });
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
            n.d(t, { Z: () => o });
            var l = n(202784),
                a = n(925873),
                r = n(392237),
                i = n(913670);
            const s = r.default.create((e) => ({ iconGray: { color: e.colors.gray700 } })),
                o = ({ editorState: e, onChange: t }) => {
                    const n = l.useCallback(
                        (n) => {
                            const l = a.Z.insertTextAtCursor(e, n.text);
                            t(l);
                        },
                        [e, t],
                    );
                    return l.createElement(i.Z, { iconStyle: s.iconGray, key: "emoji-picker", onEmojiSelect: n, size: "small", testID: "btn-emoji", type: "primaryText" });
                };
        },
        536790: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(571372), n(136728);
            var l = n(202784),
                a = n(301503),
                r = n(597496),
                i = n(339110),
                s = n(456910),
                o = n(230295),
                c = n(267446);
            class u extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = l.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: t, contextText: n, isInline: a, isInlineReply: s, onTypeaheadStateChange: o, source: c } = this.props,
                                { canShowTypeahead: u, queryContext: d } = this.state,
                                m = u && d ? { word: d.word, resultType: d.resultType } : void 0;
                            return l.createElement(r.H1, { composeCommunityId: t, contextText: n, isInline: a, isInlineReply: s, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: o, query: m, ref: this._genericWrapperRef, source: c || i._4.Compose }, e(this._handleInputChange));
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
                            if (!(0, o.T)(e)) throw new Error("RichTextTypeaheadComposeWrapper cannot handle plain text input changes");
                            {
                                const { queryContext: t } = this.state,
                                    n = t && t.word,
                                    l = this._getPlaintextFromCurrentBlock(e),
                                    { end: a, start: r, word: i } = s.si(this._getCaret(e), l),
                                    o = s.bR(i || "", "compose");
                                if (o?.q === n) return;
                                if ((this._genericWrapperRef.current && this._genericWrapperRef.current.resetSelectedItem(), -1 === r)) this._setQueryContext(void 0);
                                else if (o) {
                                    const { q: t, result_type: n } = o;
                                    this._setQueryContext({ word: t, resultType: n, editorState: e, startIndex: r, endIndex: a });
                                } else this._setQueryContext(void 0);
                            }
                        }),
                        (this._setQueryContext = (e) => this.setState({ queryContext: e, canShowTypeahead: !!e })),
                        (this._handleDismiss = () => this.setState({ canShowTypeahead: !1 }));
                }
                _replaceToken(e, t) {
                    const { editorState: n, endIndex: l, startIndex: r } = t,
                        i = n.getSelection().merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: r, focusOffset: l }),
                        s = a.Modifier.replaceText(n.getCurrentContent(), i, e),
                        o = a.EditorState.push(n, s, "insert-characters"),
                        c = r + e.length,
                        u = o.getSelection().merge({ anchorOffset: c, focusOffset: c });
                    return a.EditorState.forceSelection(o, u);
                }
            }
            const d = u;
        },
        72130: (e, t, n) => {
            n.d(t, { Ak: () => s, MA: () => i, Rz: () => l, Zi: () => r, he: () => a });
            const l = () => ({ component: "extended_profile_settings", action: "click" }),
                a = (e) => ({ component: "extended_profile", element: "extended_profile_edit_btn", action: "click", data: e }),
                r = (e, t) => ({ component: "extended_profile", action: "impression", data: { profile_id: e, ...t } }),
                i = (e, t, n) => ({ component: "rich_text_editor", element: e, action: t, data: n }),
                s = (e, t, n) => ({ component: "work_history_editor", element: e, action: t, data: { version: 2, ...n } });
        },
        520385: (e, t, n) => {
            n.d(t, { Mp: () => a, NB: () => r, P2: () => i, j3: () => l, pR: () => s });
            const l = 5e4,
                a = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                r = (a.RICHTEXT, a.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                i = { about: r.ABOUT, work_experience: r.WORK_EXPERIENCE },
                s = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        238225: (e, t, n) => {
            n.d(t, { kI: () => g, vF: () => f, m1: () => k });
            var l,
                a,
                r,
                i,
                s = {
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
            s.hash = "159e51b19a254333fecf6035bc3245b7";
            var o = (function () {
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
            o.hash = "16584b716a8d455d79eefb53731f55ee";
            const c = o;
            var u = (function () {
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
            const k = p,
                f = d,
                g = c;
        },
        794057: (e, t, n) => {
            n.d(t, { C0: () => i, DC: () => l, _e: () => r, iN: () => c, kd: () => s, pc: () => a });
            const l = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                a = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                r = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                i = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                s = { content_state: { blocks: [], entity_map: [] } },
                o = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                c = Object.freeze({ DRAFT: o.DRAFT, PUBLISHED: o.PUBLISHED });
        },
        482924: (e, t, n) => {
            n.d(t, { A: () => p });
            var l = n(202784),
                a = n(437429),
                r = n.n(a),
                i = n(57074),
                s = n.n(i),
                o = n(10622),
                c = n.n(o),
                u = n(71620),
                d = n(312771),
                m = n(535338);
            function p(e, t, n) {
                const a = s()(t),
                    i = s()(n),
                    o = r()(),
                    p = (0, u.po)(),
                    [k, f] = l.useState(null),
                    [g, y] = l.useState(!1),
                    b = l.useCallback(() => {
                        g ||
                            (y(!0),
                            c()(o, e, a, { networkCacheConfig: i?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    y(!1);
                                },
                                error: (e) => {
                                    p(e), y(!1), f(e);
                                },
                            }));
                    }, [o, p, e, g, a, i]),
                    _ = (0, m.p)(e, t, n);
                return l.useMemo(() => (k ? { data: _, refetch: b, refetchStatus: d.ZP.FAILED, refetchError: k } : { data: _, refetch: b, refetchStatus: g ? d.ZP.LOADING : d.ZP.NONE, refetchError: void 0 }), [_, k, g, b]);
            }
        },
        242470: (e, t, n) => {
            n.d(t, { Z: () => x });
            var l = n(202784),
                a = n(301503),
                r = n(614983),
                i = n.n(r),
                s = n(154003),
                o = n(332920),
                c = n.n(o),
                u = n(952793),
                d = n(72130),
                m = n(520385),
                p = n(725405),
                k = n(681488),
                f = (n(585488), n(351743)),
                g = n.n(f);
            const y = k.Z,
                b = () => {
                    const [e, t] = g()(y);
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
            const _ = n(163956).Z,
                h = () => {
                    const [e, t] = g()(_);
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
                C = c().a9cc8f96,
                E = c().i2209530,
                x = ({ blockId: e, characterCount: t, disabled: n, editorState: r, onSave: o, queryId: c, sectionId: k, sectionType: f, setDirty: g, setError: y, setSaving: _, userId: x }) => {
                    const v = (0, u.hC)("xprofile_work_history_enabled"),
                        T = (0, p.Z)(),
                        [I] = b(),
                        [S] = h(),
                        F = l.useCallback(() => {
                            _(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            T.scribe({ ...(0, d.MA)(t, "error", { version: v ? 2 : 1 }) });
                        }, [T, e, v, _]),
                        K = l.useCallback(() => {
                            g(!1), _(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            T.scribe({ ...(0, d.MA)(t, "success", { version: v ? 2 : 1 }) }), o();
                        }, [T, e, v, o, g, _]),
                        R = l.useCallback(() => {
                            const n = ((e) => {
                                if (!e) return;
                                const t = e.getCurrentContent(),
                                    n = (0, a.convertToRaw)(t);
                                return JSON.stringify(n);
                            })(r);
                            if (!n) return;
                            if (t > m.j3) return void y(C);
                            _(!0);
                            const l = e ? "update_block_btn" : "save_block_btn";
                            T.scribe({ ...(0, d.MA)(l, "click", {}) }),
                                e && x
                                    ? S({
                                          variables: { richtextValue: n, blockId: e, userId: x },
                                          onCompleted: K,
                                          onError: F,
                                          updater: (e, t) => {
                                              if ((i()(c, "queryId must exist"), t?.update_richtext_profile_block?.success))
                                                  if (v) {
                                                      const t = e.get(`client:${c}:content`);
                                                      t && t.setValue(n, "value");
                                                  } else {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                          },
                                      })
                                    : x &&
                                      I(
                                          {
                                              variables: { richtextValue: n, userId: x, sectionId: k, sectionType: f },
                                              onCompleted: K,
                                              updater: (e, t) => {
                                                  if ((i()(c, "queryId must exist"), t?.create_richtext_profile_block?.block_id)) {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                              },
                                          },
                                          c,
                                      );
                        }, [r, t, _, e, T, y, S, x, K, F, c, v, I, k, f]);
                    return l.createElement(s.ZP, { disabled: n, onClick: R, size: "large", type: "brandFilled" }, E);
                };
        },
        371879: (e, t, n) => {
            n.r(t), n.d(t, { default: () => y });
            var l = n(202784),
                a = n(301503),
                r = n(925873),
                i = n(989272),
                s = n(977952),
                o = n(297256),
                c = n(392237),
                u = n(187669),
                d = n(949626),
                m = n(980407),
                p = n(478414);
            const k = (e) => {
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
                f = () => null,
                g = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 } })),
                y = ({ history: e }) => {
                    const [t, n] = l.useState(k(window?.__iOSDraftAdapterInitialContents__));
                    (0, u.q)(() => {
                        (0, i.fH)((0, p.yW)(p.kg, p.gv), p.kg);
                    }),
                        l.useEffect(() => {
                            const e = window.webkit?.messageHandlers?.draftEditorReady;
                            e && e.postMessage(!0);
                        }, []);
                    const c = l.useMemo(() => ({ editorState: t, element: s.Z, stripPastedStyles: !0 }), [t]),
                        y = l.useCallback((e) => {
                            const t = r.Z.convertEmojiToEntities(e);
                            n(t);
                        }, []),
                        b = l.useCallback(
                            () =>
                                ((e) => {
                                    if (!e) return;
                                    const t = e.getCurrentContent(),
                                        n = (0, a.convertToRaw)(t);
                                    return JSON.stringify(n);
                                })(t),
                            [t],
                        ),
                        _ = l.useCallback((e) => {
                            n(k(e));
                        }, []);
                    l.useEffect(
                        () => (
                            (window.__iOSDraftAdapter__ = { __getContents__: b, __setContents__: _ }),
                            () => {
                                delete window.__iOSDraftAdapter__;
                            }
                        ),
                        [b, _],
                    );
                    const h = l.useMemo(() => l.createElement(d.Z, { className: p.kg }, l.createElement(o.b, { autoFocus: !0, inputStyle: g.container, isInputFullWidth: !0, onChange: y, richTextInputContext: c, textSizesOverride: (0, p.bb)(p.gv), withAppBar: !1 })), [y, c]);
                    return l.createElement(m.Z, { children: h, hideBackButton: !0, history: e, renderHeader: f });
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
            n.r(t), n.d(t, { default: () => Ze });
            var l,
                a,
                r = n(807896),
                i = (n(136728), n(202784)),
                s = n(325686),
                o = n(277660),
                c = n.n(o),
                u = n(811176),
                d = n(247056),
                m = n(392237),
                p = n(332920),
                k = n.n(p),
                f = n(607127),
                g = n(149170),
                y = n(718e3),
                b = n(785813),
                _ = n(825495),
                h = n(252021),
                C = n(736063),
                E = n(782642),
                x = n(520385),
                v = n(238225),
                T = n(482924),
                I = n(600193),
                S = {
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
            S.hash = "aa72fdb65006a205db978375998ebfe6";
            const F = S;
            var K = n(614983),
                R = n.n(K),
                B = (n(585488), n(351743)),
                L = n.n(B),
                Z = n(731708),
                w = n(593866),
                P = n(154003),
                D = n(40610),
                A = n(715417);
            const O = F,
                M = k().h367e724,
                V = k().ea5928d4,
                N = k().h7ef9dc8,
                U = k().c04ba4b4,
                q = k().d7666008,
                z = k().cb24ee16,
                W = k().c3d89aca,
                H = k().a1c93d74,
                Q = m.default.create((e) => ({ consentRoot: { maxWidth: `calc(6 * ${e.spaces.space80})`, paddingHorizontal: e.spaces.space20, marginVertical: e.spaces.space32, marginHorizontal: "auto", alignSelf: "center", width: "100%", gap: e.spaces.space20 }, icon: { height: e.spaces.space20, width: e.spaces.space20, color: e.colors.text, marginEnd: e.spaces.space16 } })),
                j = i.createElement(A.default, { style: Q.icon }),
                G = ({ queryId: e }) => {
                    const [t, n] = i.useState(""),
                        l = i.useMemo(
                            () => [
                                { label: U, decoration: j },
                                { label: q, decoration: j },
                                { label: z, decoration: j },
                            ],
                            [],
                        ),
                        [a, r] = L()(O),
                        o = i.useCallback(() => {
                            n(""),
                                a({
                                    variables: { consented: !0 },
                                    onCompleted: (e) => {
                                        e?.update_xprofile_consent?.success || n(H);
                                    },
                                    onError: (e) => {
                                        n(H);
                                    },
                                    updater: (t, n) => {
                                        R()(e, "userId must be specified");
                                        const l = t.get(e);
                                        l && n?.update_xprofile_consent?.success && l.setValue(!0, "has_xprofile_consent");
                                    },
                                });
                        }, [a, e]);
                    return i.createElement(s.Z, { style: Q.consentRoot }, i.createElement(Z.ZP, { size: "title3", weight: "bold" }, M), i.createElement(Z.ZP, { size: "body" }, V), i.createElement(Z.ZP, { weight: "bold" }, N), i.createElement(w.Z, { items: l }), i.createElement(P.ZP, { disabled: r, onClick: o, size: "large", type: "brandFilled" }, W), t ? i.createElement(D.Z.Danger, { text: t, withIcon: !0 }) : null);
                },
                X = i.memo(G);
            var $ = n(301503),
                J = n(107267),
                Y = n(925873),
                ee = n(989272),
                te = n(891198),
                ne = n(977952),
                le = n(167630),
                ae = n(67369),
                re = n(297256),
                ie = n(751475),
                se = n(908478),
                oe = n(516951),
                ce = n(187669),
                ue = n(949626),
                de = n(512547),
                me = n(313433),
                pe = n(874111),
                ke = n(536790),
                fe = n(952793),
                ge = n(655352),
                ye = n(478414),
                be = n(72130),
                _e = n(339110),
                he = n(725516),
                Ce = n(242470);
            const Ee = k().b956c04a,
                xe = k().ifb23caa,
                ve = k().c2333081,
                Te = m.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16 }, desktopButton: { bottom: 0 }, mobileButton: { bottom: e.componentDimensions.appBarHeight }, v2Button: { padding: e.spaces.space16, justifyContent: "space-between", bottom: 0 }, error: { padding: e.spaces.space16 }, textCountLabel: { flexDirection: "row", alignSelf: "center" } })),
                Ie = (0, he.Z)(({ analytics: e, blockId: t, blocksQueryId: n, closeConfirm: l, initialState: a = "", onSave: r, refetch: o, showConfirmDelete: c, userId: u }) => {
                    const d = (0, fe.hC)("xprofile_emojis_enabled"),
                        m = (0, J.useHistory)(),
                        [p, k] = i.useState(""),
                        [f, g] = i.useState(
                            ((e) => {
                                const t = Y.Z.getContentStateFromRaw(e),
                                    n = Y.Z.initEditorState(t);
                                return Y.Z.convertEmojiToEntities(n);
                            })(a),
                        ),
                        [y, b] = i.useState(!1),
                        [_, h] = i.useState(!1),
                        C = i.useCallback((e, t) => _ && !y, [_, y]),
                        E = i.useCallback(() => {
                            h(!1), b(!1);
                        }, []);
                    (0, ce.q)(() => {
                        (0, ee.fH)((0, ye.yW)(ye.Hx, ye.K), ye.Hx);
                    });
                    const v = i.useCallback(() => {
                            l(), h(!1), b(!1), e.scribe({ ...(0, be.MA)("delete_block_btn", "success") }), g(Y.Z.initEditorState("")), o();
                        }, [e, l, o]),
                        T = (0, pe.c6)(f);
                    let I = T;
                    T > 1 && (I = te.ZP.getFormattedCount(T));
                    const S = i.useMemo(() => f?.getCurrentContent()?.hasText(), [f]),
                        F = i.useCallback(
                            (e) => {
                                const t = Y.Z.convertMentionsToEntities(Y.Z.convertEmojiToEntities(e));
                                _ || (0, se.Z)((0, $.convertToRaw)(t.getCurrentContent()), (0, $.convertToRaw)(f.getCurrentContent())) || h(!0), g(t);
                            },
                            [f, _],
                        ),
                        K = i.useMemo(() => ({ editorState: f, element: ne.Z, stripPastedStyles: !0 }), [f]),
                        R = i.useMemo(() => {
                            if (y) return i.createElement(s.Z, { style: Te.flexRow }, i.createElement(le.Z, { size: "small" }), i.createElement(Z.ZP, { size: "subtext1" }, "Saving"));
                            const e = !!x.j3 && T > x.j3;
                            return i.createElement(s.Z, null, i.createElement(Z.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: Te.textCountLabel }, ve({ count: I })));
                        }, [T, I, y]),
                        B = (0, ae.Zz)(),
                        L = i.useMemo(() => {
                            const e = [Te.stickyButton];
                            return B && !(0, ge.ZP)() ? e.push(Te.mobileButton) : e.push(Te.desktopButton), e;
                        }, [B]),
                        w = i.useCallback(() => (d ? i.createElement(me.Z, { editorState: f, onChange: F }) : null), [f, d, F]),
                        P = i.useCallback(
                            () => (e) =>
                                i.createElement(re.b, {
                                    emojiPickerButton: w,
                                    inputStyle: Te.root,
                                    maxNumberOfLines: 100,
                                    numberOfLines: 30,
                                    onChange: (t) => {
                                        e(t), F(t);
                                    },
                                    richTextInputContext: K,
                                    testID: "xprofile-composer",
                                    textSizesOverride: (0, ye.bb)(ye.K),
                                    toolbarRightControl: R,
                                }),
                            [F, w, K, R],
                        );
                    return i.createElement(s.Z, null, p ? i.createElement(s.Z, { style: Te.error }, i.createElement(D.Z.Danger, { text: p, withIcon: !0 })) : null, i.createElement(ie.Z, { fallbackBackPath: "/", history: m, onNavigation: E, shouldBlockNavigation: C, shouldBlockUnload: _ }, i.createElement(ue.Z, { className: ye.Hx }, i.createElement(ke.Z, { contextText: (0, pe.iT)(f), isInline: !0, onTextUpdated: F, onTypeaheadStateChange: oe.Z, source: _e._4.LongformComposer }, P()))), i.createElement(s.Z, { style: L }, i.createElement(Ce.Z, { blockId: t, characterCount: T, disabled: y || !_ || !S || T > x.j3, editorState: f, onSave: r, queryId: n, setDirty: h, setError: k, setSaving: b, userId: u })), c && t ? i.createElement(de.Z, { blockId: t, headline: Ee, onClose: l, onCompleted: v, queryId: n, subtext: xe, userId: u }) : null);
                }),
                Se = k().a765e936,
                Fe = k().d4d68e44,
                Ke = ({ hasConsented: e, history: t, profileBlocksRef: n, queryId: l, refetch: a, viewerUser: r }) => {
                    const o = (0, E.p)(),
                        [m, p] = i.useState(!1),
                        k = c()(v.m1, n),
                        C = k?.items?.find((e) => e?.block_type === x.Mp.RICHTEXT),
                        T = C?.data?.value,
                        I = C?.block_id,
                        S = i.useCallback(() => {
                            p(!1);
                        }, []),
                        F = i.useCallback(
                            (e) => [
                                {
                                    text: Se,
                                    Icon: f.default,
                                    disabled: !I,
                                    onClick: () => {
                                        p(!0), e();
                                    },
                                },
                            ],
                            [I],
                        ),
                        K = i.useCallback((e) => i.createElement(u.Z, { cancelButtonLabel: "Cancel", items: F(e), onCloseRequested: e }), [F]);
                    return r
                        ? i.createElement(h.Z, {
                              backLocation: `/${r.screen_name}`,
                              history: t,
                              primaryContent: (() => {
                                  if (!r || !k) return null;
                                  if (!e) return i.createElement(s.Z, { style: Re.root }, i.createElement(X, { queryId: l }));
                                  return i.createElement(
                                      s.Z,
                                      { style: Re.root },
                                      i.createElement(Ie, {
                                          blockId: I,
                                          blocksQueryId: l,
                                          closeConfirm: S,
                                          initialState: T,
                                          onSave: () => {
                                              o({ text: Fe }), t.push(`/${r.screen_name}/bio`);
                                          },
                                          refetch: a,
                                          showConfirmDelete: m,
                                          userId: r.id_str,
                                      }),
                                  );
                              })(),
                              rightControl: e ? i.createElement(s.Z, null, i.createElement(d.Z, { Icon: g.default, renderActionMenu: K })) : null,
                              sidebarContent: i.createElement(y.Z, null),
                              subtitle: `@${r.screen_name}`,
                              title: (0, b.Z)(r),
                              titleIconCell: (0, _.Z)(r),
                          })
                        : null;
                },
                Re = m.default.create((e) => ({ root: { paddingVertical: e.spaces.space20, height: "100%" }, flexRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, flexCol: { display: "flex", flexDirection: "column" }, flexOne: { flex: 1 }, avatar: { width: 90, height: 90 } })),
                Be = (e) => {
                    const { data: t, refetch: n } = (0, T.A)(v.vF, {}),
                        l = t?.viewer_v2?.user_results?.result?.profile_blocks,
                        a = Boolean(t?.viewer_v2?.user_results?.result?.has_xprofile_consent);
                    if (!e.viewerUser || !l) return null;
                    const s = a ? l.__id : t?.viewer_v2?.user_results?.result?.__id;
                    return i.createElement(Ke, (0, r.Z)({ hasConsented: a, profileBlocksRef: l, queryId: s, refetch: n }, e));
                },
                Le = { context: "EXTENDED_PROFILE_SETTINGS" },
                Ze = (0, I.Z)((e) => i.createElement(C.H, { errorConfig: Le }, i.createElement(Be, e)));
        },
        751475: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(136728);
            var l = n(202784),
                a = n(332920),
                r = n.n(a),
                i = n(190286);
            const s = r().b15c0a18,
                o = r().aebf81c8,
                c = r().aa744c1e,
                u = r().fe04d89a,
                d = (e) => {
                    const { children: t, fallbackBackPath: n, history: a, onNavigation: r, shouldBlockNavigation: d, shouldBlockUnload: m } = e,
                        [p, k] = l.useState(void 0);
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
                    const f = l.useCallback((e, t) => !(!p && d(e, t)) || (k({ nextLocation: e, action: t }), !1), [p, d]);
                    l.useEffect(() => {
                        const e = a.block(f);
                        return () => e();
                    }, [f, a]);
                    const g = l.useCallback(() => {
                            k(void 0);
                        }, [k]),
                        y = l.useCallback(() => {
                            r?.(),
                                k((e) => {
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
                    return l.createElement(l.Fragment, null, t, p ? l.createElement(i.Z, { cancelButtonLabel: c, confirmButtonLabel: u, confirmButtonType: "destructiveFilled", headline: s, onCancel: g, onConfirm: y, text: o }) : null);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsExtendedProfile.edde687a.js.map
