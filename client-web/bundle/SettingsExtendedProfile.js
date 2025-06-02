"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsExtendedProfile"],
    {
        681488: (e, t, n) => {
            n.d(t, { Z: () => c });
            var l,
                a,
                r,
                s,
                i,
                o = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "richtextValue" }), (a = { defaultValue: null, kind: "LocalArgument", name: "sectionId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "sectionType" }), (s = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
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
                    operation: { argumentDefinitions: [l, s, a, r], kind: "Operation", name: "useCreateRichtextBlockMutation", selections: i },
                    params: { id: "lDE6HUnPgNvp1_8bcCM3-w", metadata: {}, name: "useCreateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            o.hash = "5369f2707d565366752d07f461b21f70";
            const c = o;
        },
        163956: (e, t, n) => {
            n.d(t, { Z: () => s });
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
            const s = r;
        },
        313433: (e, t, n) => {
            n.d(t, { Z: () => o });
            var l = n(202784),
                a = n(925873),
                r = n(392237),
                s = n(913670);
            const i = r.default.create((e) => ({ iconGray: { color: e.colors.gray700 } })),
                o = ({ editorState: e, onChange: t }) => {
                    const n = l.useCallback(
                        (n) => {
                            const l = a.Z.insertTextAtCursor(e, n.text);
                            t(l);
                        },
                        [e, t],
                    );
                    return l.createElement(s.Z, { iconStyle: i.iconGray, key: "emoji-picker", onEmojiSelect: n, size: "small", testID: "btn-emoji", type: "primaryText" });
                };
        },
        536790: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(571372), n(136728);
            var l = n(202784),
                a = n(301503),
                r = n(597496),
                s = n(339110),
                i = n(456910),
                o = n(230295),
                c = n(267446);
            class u extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = l.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: t, contextText: n, isInline: a, isInlineReply: i, onTypeaheadStateChange: o, source: c } = this.props,
                                { canShowTypeahead: u, queryContext: d } = this.state,
                                m = u && d ? { word: d.word, resultType: d.resultType } : void 0;
                            return l.createElement(r.H1, { composeCommunityId: t, contextText: n, isInline: a, isInlineReply: i, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: o, query: m, ref: this._genericWrapperRef, source: c || s._4.Compose }, e(this._handleInputChange));
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
                                    { end: a, start: r, word: s } = i.si(this._getCaret(e), l),
                                    o = i.bR(s || "", "compose");
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
                        s = n.getSelection().merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: r, focusOffset: l }),
                        i = a.Modifier.replaceText(n.getCurrentContent(), s, e),
                        o = a.EditorState.push(n, i, "insert-characters"),
                        c = r + e.length,
                        u = o.getSelection().merge({ anchorOffset: c, focusOffset: c });
                    return a.EditorState.forceSelection(o, u);
                }
            }
            const d = u;
        },
        238225: (e, t, n) => {
            n.d(t, { kI: () => f, vF: () => g, m1: () => k });
            var l,
                a,
                r,
                s,
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
                                            { kind: "InlineFragment", selections: [r, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    s,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "Z2BA99jFw6TxaJM5v7Irmg", metadata: {}, name: "useFetchProfileBlocks_profileExistsQuery", operationKind: "query", text: null },
                };
            i.hash = "159e51b19a254333fecf6035bc3245b7";
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
                g = d,
                f = c;
        },
        794057: (e, t, n) => {
            n.d(t, { C0: () => s, DC: () => l, _e: () => r, iN: () => c, kd: () => i, pc: () => a });
            const l = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                a = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                r = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                s = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                i = { content_state: { blocks: [], entity_map: [] } },
                o = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                c = Object.freeze({ DRAFT: o.DRAFT, PUBLISHED: o.PUBLISHED });
        },
        482924: (e, t, n) => {
            n.d(t, { A: () => p });
            var l = n(202784),
                a = n(437429),
                r = n.n(a),
                s = n(57074),
                i = n.n(s),
                o = n(10622),
                c = n.n(o),
                u = n(71620),
                d = n(312771),
                m = n(535338);
            function p(e, t, n) {
                const a = i()(t),
                    s = i()(n),
                    o = r()(),
                    p = (0, u.po)(),
                    [k, g] = l.useState(null),
                    [f, y] = l.useState(!1),
                    b = l.useCallback(() => {
                        f ||
                            (y(!0),
                            c()(o, e, a, { networkCacheConfig: s?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    y(!1);
                                },
                                error: (e) => {
                                    p(e), y(!1), g(e);
                                },
                            }));
                    }, [o, p, e, f, a, s]),
                    h = (0, m.p)(e, t, n);
                return l.useMemo(() => (k ? { data: h, refetch: b, refetchStatus: d.ZP.FAILED, refetchError: k } : { data: h, refetch: b, refetchStatus: f ? d.ZP.LOADING : d.ZP.NONE, refetchError: void 0 }), [h, k, f, b]);
            }
        },
        242470: (e, t, n) => {
            n.d(t, { Z: () => E });
            var l = n(202784),
                a = n(301503),
                r = n(614983),
                s = n.n(r),
                i = n(154003),
                o = n(111677),
                c = n.n(o),
                u = n(952793),
                d = n(72130),
                m = n(520385),
                p = n(725405),
                k = n(681488),
                g = (n(585488), n(351743)),
                f = n.n(g);
            const y = k.Z,
                b = () => {
                    const [e, t] = f()(y);
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
            const h = n(163956).Z,
                _ = () => {
                    const [e, t] = f()(h);
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
                x = c().i2209530,
                E = ({ blockId: e, characterCount: t, disabled: n, editorState: r, onSave: o, queryId: c, sectionId: k, sectionType: g, setDirty: f, setError: y, setSaving: h, userId: E }) => {
                    const v = (0, u.hC)("xprofile_work_history_enabled"),
                        S = (0, p.Z)(),
                        [T] = b(),
                        [I] = _(),
                        F = l.useCallback(() => {
                            h(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            S.scribe({ ...(0, d.MA)(t, "error", { version: v ? 2 : 1 }) });
                        }, [S, e, v, h]),
                        K = l.useCallback(() => {
                            f(!1), h(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            S.scribe({ ...(0, d.MA)(t, "success", { version: v ? 2 : 1 }) }), o();
                        }, [S, e, v, o, f, h]),
                        L = l.useCallback(() => {
                            const n = ((e) => {
                                if (!e) return;
                                const t = e.getCurrentContent(),
                                    n = (0, a.convertToRaw)(t);
                                return JSON.stringify(n);
                            })(r);
                            if (!n) return;
                            if (t > m.j3) return void y(C);
                            h(!0);
                            const l = e ? "update_block_btn" : "save_block_btn";
                            S.scribe({ ...(0, d.MA)(l, "click", {}) }),
                                e && E
                                    ? I({
                                          variables: { richtextValue: n, blockId: e, userId: E },
                                          onCompleted: K,
                                          onError: F,
                                          updater: (e, t) => {
                                              if ((s()(c, "queryId must exist"), t?.update_richtext_profile_block?.success))
                                                  if (v) {
                                                      const t = e.get(`client:${c}:content`);
                                                      t && t.setValue(n, "value");
                                                  } else {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                          },
                                      })
                                    : E &&
                                      T(
                                          {
                                              variables: { richtextValue: n, userId: E, sectionId: k, sectionType: g },
                                              onCompleted: K,
                                              updater: (e, t) => {
                                                  if ((s()(c, "queryId must exist"), t?.create_richtext_profile_block?.block_id)) {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                              },
                                          },
                                          c,
                                      );
                        }, [r, t, h, e, S, y, I, E, K, F, c, v, T, k, g]);
                    return l.createElement(i.ZP, { disabled: n, onClick: L, size: "large", type: "brandFilled" }, x);
                };
        },
        371879: (e, t, n) => {
            n.r(t), n.d(t, { default: () => y });
            var l = n(202784),
                a = n(301503),
                r = n(925873),
                s = n(989272),
                i = n(977952),
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
                g = () => null,
                f = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 } })),
                y = ({ history: e }) => {
                    const [t, n] = l.useState(k(window?.__iOSDraftAdapterInitialContents__));
                    (0, u.q)(() => {
                        (0, s.fH)((0, p.yW)(p.kg, p.gv), p.kg);
                    }),
                        l.useEffect(() => {
                            const e = window.webkit?.messageHandlers?.draftEditorReady;
                            e && e.postMessage(!0);
                        }, []);
                    const c = l.useMemo(() => ({ editorState: t, element: i.Z, stripPastedStyles: !0 }), [t]),
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
                        h = l.useCallback((e) => {
                            n(k(e));
                        }, []);
                    l.useEffect(
                        () => (
                            (window.__iOSDraftAdapter__ = { __getContents__: b, __setContents__: h }),
                            () => {
                                delete window.__iOSDraftAdapter__;
                            }
                        ),
                        [b, h],
                    );
                    const _ = l.useMemo(() => l.createElement(d.Z, { className: p.kg }, l.createElement(o.b, { autoFocus: !0, inputStyle: f.container, isInputFullWidth: !0, onChange: y, richTextInputContext: c, textSizesOverride: (0, p.bb)(p.gv), withAppBar: !1 })), [y, c]);
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
            n.r(t), n.d(t, { default: () => Re });
            var l,
                a,
                r = n(807896),
                s = (n(136728), n(202784)),
                i = n(325686),
                o = n(277660),
                c = n.n(o),
                u = n(811176),
                d = n(247056),
                m = n(392237),
                p = n(111677),
                k = n.n(p),
                g = n(607127),
                f = n(149170),
                y = n(718e3),
                b = n(785813),
                h = n(825495),
                _ = n(252021),
                C = n(736063),
                x = n(782642),
                E = n(520385),
                v = n(238225),
                S = n(482924),
                T = n(600193),
                I = {
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
            I.hash = "aa72fdb65006a205db978375998ebfe6";
            const F = I;
            var K = n(614983),
                L = n.n(K),
                w = (n(585488), n(351743)),
                B = n.n(w),
                R = n(731708),
                Z = n(593866),
                P = n(154003),
                D = n(40610),
                A = n(715417);
            const M = F,
                O = k().h367e724,
                V = k().ea5928d4,
                N = k().h7ef9dc8,
                U = k().c04ba4b4,
                q = k().d7666008,
                z = k().cb24ee16,
                H = k().c3d89aca,
                Q = k().a1c93d74,
                j = m.default.create((e) => ({ consentRoot: { maxWidth: `calc(6 * ${e.spaces.space80})`, paddingHorizontal: e.spaces.space20, marginVertical: e.spaces.space32, marginHorizontal: "auto", alignSelf: "center", width: "100%", gap: e.spaces.space20 }, icon: { height: e.spaces.space20, width: e.spaces.space20, color: e.colors.text, marginEnd: e.spaces.space16 } })),
                W = s.createElement(A.default, { style: j.icon }),
                G = ({ queryId: e }) => {
                    const [t, n] = s.useState(""),
                        l = s.useMemo(
                            () => [
                                { label: U, decoration: W },
                                { label: q, decoration: W },
                                { label: z, decoration: W },
                            ],
                            [],
                        ),
                        [a, r] = B()(M),
                        o = s.useCallback(() => {
                            n(""),
                                a({
                                    variables: { consented: !0 },
                                    onCompleted: (e) => {
                                        e?.update_xprofile_consent?.success || n(Q);
                                    },
                                    onError: (e) => {
                                        n(Q);
                                    },
                                    updater: (t, n) => {
                                        L()(e, "userId must be specified");
                                        const l = t.get(e);
                                        l && n?.update_xprofile_consent?.success && l.setValue(!0, "has_xprofile_consent");
                                    },
                                });
                        }, [a, e]);
                    return s.createElement(i.Z, { style: j.consentRoot }, s.createElement(R.ZP, { size: "title3", weight: "bold" }, O), s.createElement(R.ZP, { size: "body" }, V), s.createElement(R.ZP, { weight: "bold" }, N), s.createElement(Z.Z, { items: l }), s.createElement(P.ZP, { disabled: r, onClick: o, size: "large", type: "brandFilled" }, H), t ? s.createElement(D.Z.Danger, { text: t, withIcon: !0 }) : null);
                },
                X = s.memo(G);
            var $ = n(301503),
                J = n(107267),
                Y = n(925873),
                ee = n(989272),
                te = n(891198),
                ne = n(977952),
                le = n(167630),
                ae = n(67369),
                re = n(297256),
                se = n(751475),
                ie = n(908478),
                oe = n(516951),
                ce = n(187669),
                ue = n(949626),
                de = n(128586),
                me = n(313433),
                pe = n(874111),
                ke = n(536790),
                ge = n(952793),
                fe = n(655352),
                ye = n(478414),
                be = n(72130),
                he = n(339110),
                _e = n(725516),
                Ce = n(242470);
            const xe = k().b956c04a,
                Ee = k().ifb23caa,
                ve = k().c2333081,
                Se = m.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16 }, desktopButton: { bottom: 0 }, mobileButton: { bottom: e.componentDimensions.appBarHeight }, v2Button: { padding: e.spaces.space16, justifyContent: "space-between", bottom: 0 }, error: { padding: e.spaces.space16 }, textCountLabel: { flexDirection: "row", alignSelf: "center" } })),
                Te = (0, _e.Z)(({ analytics: e, blockId: t, blocksQueryId: n, closeConfirm: l, initialState: a = "", onSave: r, refetch: o, showConfirmDelete: c, userId: u }) => {
                    const d = (0, ge.hC)("xprofile_emojis_enabled"),
                        m = (0, J.useHistory)(),
                        [p, k] = s.useState(""),
                        [g, f] = s.useState(
                            ((e) => {
                                const t = Y.Z.getContentStateFromRaw(e),
                                    n = Y.Z.initEditorState(t);
                                return Y.Z.convertEmojiToEntities(n);
                            })(a),
                        ),
                        [y, b] = s.useState(!1),
                        [h, _] = s.useState(!1),
                        C = s.useCallback((e, t) => h && !y, [h, y]),
                        x = s.useCallback(() => {
                            _(!1), b(!1);
                        }, []);
                    (0, ce.q)(() => {
                        (0, ee.fH)((0, ye.yW)(ye.Hx, ye.K), ye.Hx);
                    });
                    const v = s.useCallback(() => {
                            l(), _(!1), b(!1), e.scribe({ ...(0, be.MA)("delete_block_btn", "success") }), f(Y.Z.initEditorState("")), o();
                        }, [e, l, o]),
                        S = (0, pe.c6)(g);
                    let T = S;
                    S > 1 && (T = te.ZP.getFormattedCount(S));
                    const I = s.useMemo(() => g?.getCurrentContent()?.hasText(), [g]),
                        F = s.useCallback(
                            (e) => {
                                const t = Y.Z.convertMentionsToEntities(Y.Z.convertEmojiToEntities(e));
                                h || (0, ie.Z)((0, $.convertToRaw)(t.getCurrentContent()), (0, $.convertToRaw)(g.getCurrentContent())) || _(!0), f(t);
                            },
                            [g, h],
                        ),
                        K = s.useMemo(() => ({ editorState: g, element: ne.Z, stripPastedStyles: !0 }), [g]),
                        L = s.useMemo(() => {
                            if (y) return s.createElement(i.Z, { style: Se.flexRow }, s.createElement(le.Z, { size: "small" }), s.createElement(R.ZP, { size: "subtext1" }, "Saving"));
                            const e = !!E.j3 && S > E.j3;
                            return s.createElement(i.Z, null, s.createElement(R.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: Se.textCountLabel }, ve({ count: T })));
                        }, [S, T, y]),
                        w = (0, ae.Zz)(),
                        B = s.useMemo(() => {
                            const e = [Se.stickyButton];
                            return w && !(0, fe.ZP)() ? e.push(Se.mobileButton) : e.push(Se.desktopButton), e;
                        }, [w]),
                        Z = s.useCallback(() => (d ? s.createElement(me.Z, { editorState: g, onChange: F }) : null), [g, d, F]),
                        P = s.useCallback(
                            () => (e) =>
                                s.createElement(re.b, {
                                    emojiPickerButton: Z,
                                    inputStyle: Se.root,
                                    maxNumberOfLines: 100,
                                    numberOfLines: 30,
                                    onChange: (t) => {
                                        e(t), F(t);
                                    },
                                    richTextInputContext: K,
                                    testID: "xprofile-composer",
                                    textSizesOverride: (0, ye.bb)(ye.K),
                                    toolbarRightControl: L,
                                }),
                            [F, Z, K, L],
                        );
                    return s.createElement(i.Z, null, p ? s.createElement(i.Z, { style: Se.error }, s.createElement(D.Z.Danger, { text: p, withIcon: !0 })) : null, s.createElement(se.Z, { fallbackBackPath: "/", history: m, onNavigation: x, shouldBlockNavigation: C, shouldBlockUnload: h }, s.createElement(ue.Z, { className: ye.Hx }, s.createElement(ke.Z, { contextText: (0, pe.iT)(g), isInline: !0, onTextUpdated: F, onTypeaheadStateChange: oe.Z, source: he._4.LongformComposer }, P()))), s.createElement(i.Z, { style: B }, s.createElement(Ce.Z, { blockId: t, characterCount: S, disabled: y || !h || !I || S > E.j3, editorState: g, onSave: r, queryId: n, setDirty: _, setError: k, setSaving: b, userId: u })), c && t ? s.createElement(de.Z, { blockId: t, headline: xe, onClose: l, onCompleted: v, queryId: n, subtext: Ee, userId: u }) : null);
                }),
                Ie = k().a765e936,
                Fe = k().d4d68e44,
                Ke = ({ hasConsented: e, history: t, profileBlocksRef: n, queryId: l, refetch: a, viewerUser: r }) => {
                    const o = (0, x.p)(),
                        [m, p] = s.useState(!1),
                        k = c()(v.m1, n),
                        C = k?.items?.find((e) => e?.block_type === E.Mp.RICHTEXT),
                        S = C?.data?.value,
                        T = C?.block_id,
                        I = s.useCallback(() => {
                            p(!1);
                        }, []),
                        F = s.useCallback(
                            (e) => [
                                {
                                    text: Ie,
                                    Icon: g.default,
                                    disabled: !T,
                                    onClick: () => {
                                        p(!0), e();
                                    },
                                },
                            ],
                            [T],
                        ),
                        K = s.useCallback((e) => s.createElement(u.Z, { cancelButtonLabel: "Cancel", items: F(e), onCloseRequested: e }), [F]);
                    return r
                        ? s.createElement(_.Z, {
                              backLocation: `/${r.screen_name}`,
                              history: t,
                              primaryContent: (() => {
                                  if (!r || !k) return null;
                                  if (!e) return s.createElement(i.Z, { style: Le.root }, s.createElement(X, { queryId: l }));
                                  return s.createElement(
                                      i.Z,
                                      { style: Le.root },
                                      s.createElement(Te, {
                                          blockId: T,
                                          blocksQueryId: l,
                                          closeConfirm: I,
                                          initialState: S,
                                          onSave: () => {
                                              o({ text: Fe }), t.push(`/${r.screen_name}/bio`);
                                          },
                                          refetch: a,
                                          showConfirmDelete: m,
                                          userId: r.id_str,
                                      }),
                                  );
                              })(),
                              rightControl: e ? s.createElement(i.Z, null, s.createElement(d.Z, { Icon: f.default, renderActionMenu: K })) : null,
                              sidebarContent: s.createElement(y.Z, null),
                              subtitle: `@${r.screen_name}`,
                              title: (0, b.Z)(r),
                              titleIconCell: (0, h.Z)(r),
                          })
                        : null;
                },
                Le = m.default.create((e) => ({ root: { paddingVertical: e.spaces.space20, height: "100%" }, flexRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, flexCol: { display: "flex", flexDirection: "column" }, flexOne: { flex: 1 }, avatar: { width: 90, height: 90 } })),
                we = (e) => {
                    const { data: t, refetch: n } = (0, S.A)(v.vF, {}),
                        l = t?.viewer_v2?.user_results?.result?.profile_blocks,
                        a = Boolean(t?.viewer_v2?.user_results?.result?.has_xprofile_consent);
                    if (!e.viewerUser || !l) return null;
                    const i = a ? l.__id : t?.viewer_v2?.user_results?.result?.__id;
                    return s.createElement(Ke, (0, r.Z)({ hasConsented: a, profileBlocksRef: l, queryId: i, refetch: n }, e));
                },
                Be = { context: "EXTENDED_PROFILE_SETTINGS" },
                Re = (0, T.Z)((e) => s.createElement(C.H, { errorConfig: Be }, s.createElement(we, e)));
        },
        751475: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(136728);
            var l = n(202784),
                a = n(111677),
                r = n.n(a),
                s = n(190286);
            const i = r().b15c0a18,
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
                    const g = l.useCallback((e, t) => !(!p && d(e, t)) || (k({ nextLocation: e, action: t }), !1), [p, d]);
                    l.useEffect(() => {
                        const e = a.block(g);
                        return () => e();
                    }, [g, a]);
                    const f = l.useCallback(() => {
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
                    return l.createElement(l.Fragment, null, t, p ? l.createElement(s.Z, { cancelButtonLabel: c, confirmButtonLabel: u, confirmButtonType: "destructiveFilled", headline: i, onCancel: f, onConfirm: y, text: o }) : null);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsExtendedProfile.440ebaaa.js.map
