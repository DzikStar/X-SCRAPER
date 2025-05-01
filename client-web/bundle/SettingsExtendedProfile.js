"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsExtendedProfile"],
    {
        681488: (e, t, l) => {
            l.d(t, { Z: () => c });
            var n,
                a,
                r,
                i,
                s,
                o = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "richtextValue" }), (a = { defaultValue: null, kind: "LocalArgument", name: "sectionId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "sectionType" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
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
                    operation: { argumentDefinitions: [n, i, a, r], kind: "Operation", name: "useCreateRichtextBlockMutation", selections: s },
                    params: { id: "lDE6HUnPgNvp1_8bcCM3-w", metadata: {}, name: "useCreateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            o.hash = "5369f2707d565366752d07f461b21f70";
            const c = o;
        },
        876242: (e, t, l) => {
            l.d(t, { Z: () => i });
            var n,
                a,
                r = {
                    fragment: {
                        argumentDefinitions: (n = [
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useDeleteProfileBlockMutation", selections: a },
                    params: { id: "EvvA9IQR0sKW0tGqXwSzKA", metadata: {}, name: "useDeleteProfileBlockMutation", operationKind: "mutation", text: null },
                };
            r.hash = "5d2c7077ac04854de170e0b8fd37dc6f";
            const i = r;
        },
        163956: (e, t, l) => {
            l.d(t, { Z: () => i });
            var n,
                a,
                r = {
                    fragment: {
                        argumentDefinitions: (n = [
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useUpdateRichtextBlockMutation", selections: a },
                    params: { id: "oDmWQK_udVhiqH89Lbd5LA", metadata: {}, name: "useUpdateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            r.hash = "96b616d665932ca695bc2d75fe26a33c";
            const i = r;
        },
        512547: (e, t, l) => {
            l.d(t, { Z: () => b });
            var n = l(202784),
                a = l(190286),
                r = l(674132),
                i = l.n(r),
                s = l(782642),
                o = l(72130),
                c = l(725516),
                u = l(876242),
                d = (l(585488), l(351743)),
                m = l.n(d);
            const k = u.Z,
                p = () => {
                    const [e, t] = m()(k);
                    return [
                        n.useCallback(
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
                b = ({ blockId: e, headline: t, onClose: l, onCompleted: r, queryId: i, subtext: u, userId: d }) => {
                    const m = (0, s.p)(),
                        k = (0, c.z)(),
                        [b, y] = p(),
                        _ = n.useCallback(() => {
                            l();
                        }, [l]),
                        h = n.useCallback(() => {
                            k.scribe({ ...(0, o.MA)("delete_block_btn", "click") }),
                                b({
                                    variables: { blockId: e, userId: d },
                                    updater: (e, t) => {
                                        i && e.delete(i);
                                    },
                                    onCompleted: (e) => {
                                        e?.delete_profile_block?.success && (m({ text: g }), l(), r && r());
                                    },
                                });
                        }, [m, k, e, b, l, r, i, d]);
                    return n.createElement(a.Z, { confirmButtonDisabled: y, confirmButtonLabel: f, confirmButtonType: "destructiveFilled", enableMaskForDismiss: !0, headline: t, onCancel: _, onConfirm: h, text: u });
                };
        },
        785813: (e, t, l) => {
            l.d(t, { Z: () => r });
            var n = l(202784),
                a = l(366635);
            const r = (e) => (e ? n.createElement(a.Z, { affiliateBadgeInfo: e?.highlightedLabel, isBlueVerified: e?.is_blue_verified, isProtected: e?.protected, isVerified: e?.verified, name: e?.name, verifiedType: e?.verified_type }) : null);
        },
        825495: (e, t, l) => {
            l.d(t, { Z: () => r });
            var n = l(202784),
                a = l(823161);
            const r = (e) => {
                if (!e) return null;
                const t = "Square" === e?.profile_image_shape ? "square" : "circle";
                return n.createElement(a.default, { shape: t, size: "xLarge", uri: e?.profile_image_url_https });
            };
        },
        313433: (e, t, l) => {
            l.d(t, { Z: () => o });
            var n = l(202784),
                a = l(925873),
                r = l(392237),
                i = l(913670);
            const s = r.default.create((e) => ({ iconGray: { color: e.colors.gray700 } })),
                o = ({ editorState: e, onChange: t }) => {
                    const l = n.useCallback(
                        (l) => {
                            const n = a.Z.insertTextAtCursor(e, l.text);
                            t(n);
                        },
                        [e, t],
                    );
                    return n.createElement(i.Z, { iconStyle: s.iconGray, key: "emoji-picker", onEmojiSelect: l, size: "small", testID: "btn-emoji", type: "primaryText" });
                };
        },
        72130: (e, t, l) => {
            l.d(t, { Ak: () => s, MA: () => i, Rz: () => n, Zi: () => r, he: () => a });
            const n = () => ({ component: "extended_profile_settings", action: "click" }),
                a = (e) => ({ component: "extended_profile", element: "extended_profile_edit_btn", action: "click", data: e }),
                r = (e, t) => ({ component: "extended_profile", action: "impression", data: { profile_id: e, ...t } }),
                i = (e, t, l) => ({ component: "rich_text_editor", element: e, action: t, data: l }),
                s = (e, t, l) => ({ component: "work_history_editor", element: e, action: t, data: { version: 2, ...l } });
        },
        520385: (e, t, l) => {
            l.d(t, { Mp: () => a, NB: () => r, P2: () => i, j3: () => n, pR: () => s });
            const n = 5e4,
                a = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                r = (a.RICHTEXT, a.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                i = { about: r.ABOUT, work_experience: r.WORK_EXPERIENCE },
                s = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        238225: (e, t, l) => {
            l.d(t, { kI: () => g, vF: () => f, m1: () => p });
            var n,
                a,
                r,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
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
                        argumentDefinitions: n,
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
                    l = { alias: null, args: null, kind: "ScalarField", name: "has_profile_blocks", storageKey: null },
                    n = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null },
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
                                                    l,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ProfileBlocksSlice",
                                                        kind: "LinkedField",
                                                        name: "profile_blocks",
                                                        plural: !1,
                                                        selections: [
                                                            { args: null, kind: "FragmentSpread", name: "useFetchProfileBlocks_profileBlocksSlice" },
                                                            { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [n], storageKey: null },
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
                    operation: { argumentDefinitions: e, kind: "Operation", name: "useFetchProfileBlocks_profileQuery", selections: [{ alias: null, args: t, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_screen_name", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [a, { kind: "InlineFragment", selections: [l, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [n, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [a, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }, r], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }] },
                    params: { id: "Azv1m7WiLnbn36nNCk7l0Q", metadata: {}, name: "useFetchProfileBlocks_profileQuery", operationKind: "query", text: null },
                };
            })();
            o.hash = "16584b716a8d455d79eefb53731f55ee";
            const c = o;
            var u = (function () {
                var e = [{ kind: "Literal", name: "s", value: "f3d8" }],
                    t = { alias: null, args: null, kind: "ScalarField", name: "has_xprofile_consent", storageKey: null },
                    l = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null },
                    n = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                    a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
                return {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [t, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useFetchProfileBlocks_profileBlocksSlice" }, { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [l], storageKey: null }, n], storageKey: null }, n], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [a, { kind: "InlineFragment", selections: [t, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [l, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [a, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }, n], storageKey: null }, n, r], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }] },
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
            const k = m;
            l(585488);
            const p = k,
                f = d,
                g = c;
        },
        794057: (e, t, l) => {
            l.d(t, { C0: () => i, DC: () => n, _e: () => r, iN: () => c, kd: () => s, pc: () => a });
            const n = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                a = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                r = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                i = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                s = { content_state: { blocks: [], entity_map: [] } },
                o = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                c = Object.freeze({ DRAFT: o.DRAFT, PUBLISHED: o.PUBLISHED });
        },
        482924: (e, t, l) => {
            l.d(t, { A: () => k });
            var n = l(202784),
                a = l(437429),
                r = l.n(a),
                i = l(57074),
                s = l.n(i),
                o = l(10622),
                c = l.n(o),
                u = l(71620),
                d = l(312771),
                m = l(535338);
            function k(e, t, l) {
                const a = s()(t),
                    i = s()(l),
                    o = r()(),
                    k = (0, u.po)(),
                    [p, f] = n.useState(null),
                    [g, b] = n.useState(!1),
                    y = n.useCallback(() => {
                        g ||
                            (b(!0),
                            c()(o, e, a, { networkCacheConfig: i?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    b(!1);
                                },
                                error: (e) => {
                                    k(e), b(!1), f(e);
                                },
                            }));
                    }, [o, k, e, g, a, i]),
                    _ = (0, m.p)(e, t, l);
                return n.useMemo(() => (p ? { data: _, refetch: y, refetchStatus: d.ZP.FAILED, refetchError: p } : { data: _, refetch: y, refetchStatus: g ? d.ZP.LOADING : d.ZP.NONE, refetchError: void 0 }), [_, p, g, y]);
            }
        },
        242470: (e, t, l) => {
            l.d(t, { Z: () => C });
            var n = l(202784),
                a = l(301503),
                r = l(614983),
                i = l.n(r),
                s = l(154003),
                o = l(674132),
                c = l.n(o),
                u = l(952793),
                d = l(72130),
                m = l(520385),
                k = l(725405),
                p = l(681488),
                f = (l(585488), l(351743)),
                g = l.n(f);
            const b = p.Z,
                y = () => {
                    const [e, t] = g()(b);
                    return [
                        n.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                };
            const _ = l(163956).Z,
                h = () => {
                    const [e, t] = g()(_);
                    return [
                        n.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                },
                E = c().a9cc8f96,
                v = c().i2209530,
                C = ({ blockId: e, characterCount: t, disabled: l, editorState: r, onSave: o, queryId: c, sectionId: p, sectionType: f, setDirty: g, setError: b, setSaving: _, userId: C }) => {
                    const x = (0, u.hC)("xprofile_work_history_enabled"),
                        I = (0, k.Z)(),
                        [F] = y(),
                        [T] = h(),
                        S = n.useCallback(() => {
                            _(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            I.scribe({ ...(0, d.MA)(t, "error", { version: x ? 2 : 1 }) });
                        }, [I, e, x, _]),
                        L = n.useCallback(() => {
                            g(!1), _(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            I.scribe({ ...(0, d.MA)(t, "success", { version: x ? 2 : 1 }) }), o();
                        }, [I, e, x, o, g, _]),
                        K = n.useCallback(() => {
                            const l = ((e) => {
                                if (!e) return;
                                const t = e.getCurrentContent(),
                                    l = (0, a.convertToRaw)(t);
                                return JSON.stringify(l);
                            })(r);
                            if (!l) return;
                            if (t > m.j3) return void b(E);
                            _(!0);
                            const n = e ? "update_block_btn" : "save_block_btn";
                            I.scribe({ ...(0, d.MA)(n, "click", {}) }),
                                e && C
                                    ? T({
                                          variables: { richtextValue: l, blockId: e, userId: C },
                                          onCompleted: L,
                                          onError: S,
                                          updater: (e, t) => {
                                              if ((i()(c, "queryId must exist"), t?.update_richtext_profile_block?.success))
                                                  if (x) {
                                                      const t = e.get(`client:${c}:content`);
                                                      t && t.setValue(l, "value");
                                                  } else {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                          },
                                      })
                                    : C &&
                                      F(
                                          {
                                              variables: { richtextValue: l, userId: C, sectionId: p, sectionType: f },
                                              onCompleted: L,
                                              updater: (e, t) => {
                                                  if ((i()(c, "queryId must exist"), t?.create_richtext_profile_block?.block_id)) {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                              },
                                          },
                                          c,
                                      );
                        }, [r, t, _, e, I, b, T, C, L, S, c, x, F, p, f]);
                    return n.createElement(s.ZP, { disabled: l, onClick: K, size: "large", type: "brandFilled" }, v);
                };
        },
        371879: (e, t, l) => {
            l.r(t), l.d(t, { default: () => b });
            var n = l(202784),
                a = l(301503),
                r = l(925873),
                i = l(989272),
                s = l(977952),
                o = l(297256),
                c = l(392237),
                u = l(187669),
                d = l(949626),
                m = l(980407),
                k = l(478414);
            const p = (e) => {
                    const t = ((e) => {
                            try {
                                return e ? JSON.parse(e) : void 0;
                            } catch {
                                return;
                            }
                        })(e),
                        l = r.Z.initEditorState(t);
                    return r.Z.convertEmojiToEntities(l);
                },
                f = () => null,
                g = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 } })),
                b = ({ history: e }) => {
                    const [t, l] = n.useState(p(window?.__iOSDraftAdapterInitialContents__));
                    (0, u.q)(() => {
                        (0, i.fH)((0, k.yW)(k.kg, k.gv), k.kg);
                    }),
                        n.useEffect(() => {
                            const e = window.webkit?.messageHandlers?.draftEditorReady;
                            e && e.postMessage(!0);
                        }, []);
                    const c = n.useMemo(() => ({ editorState: t, element: s.Z, stripPastedStyles: !0 }), [t]),
                        b = n.useCallback((e) => {
                            const t = r.Z.convertEmojiToEntities(e);
                            l(t);
                        }, []),
                        y = n.useCallback(
                            () =>
                                ((e) => {
                                    if (!e) return;
                                    const t = e.getCurrentContent(),
                                        l = (0, a.convertToRaw)(t);
                                    return JSON.stringify(l);
                                })(t),
                            [t],
                        ),
                        _ = n.useCallback((e) => {
                            l(p(e));
                        }, []);
                    n.useEffect(
                        () => (
                            (window.__iOSDraftAdapter__ = { __getContents__: y, __setContents__: _ }),
                            () => {
                                delete window.__iOSDraftAdapter__;
                            }
                        ),
                        [y, _],
                    );
                    const h = n.useMemo(() => n.createElement(d.Z, { className: k.kg }, n.createElement(o.b, { autoFocus: !0, inputStyle: g.container, isInputFullWidth: !0, onChange: b, richTextInputContext: c, textSizesOverride: (0, k.bb)(k.gv), withAppBar: !1 })), [b, c]);
                    return n.createElement(m.Z, { children: h, hideBackButton: !0, history: e, renderHeader: f });
                };
        },
        600193: (e, t, l) => {
            l.d(t, { Z: () => r });
            var n = l(668214),
                a = l(919022);
            const r = (0, n.Z)()
                .propsFromState(() => ({ viewerUser: a.ZP.selectViewerUser }))
                .withAnalytics({ page: "settings", section: "extendedprofile" });
        },
        992915: (e, t, l) => {
            l.r(t), l.d(t, { default: () => Ze });
            var n,
                a,
                r = l(807896),
                i = (l(136728), l(202784)),
                s = l(325686),
                o = l(277660),
                c = l.n(o),
                u = l(811176),
                d = l(247056),
                m = l(392237),
                k = l(674132),
                p = l.n(k),
                f = l(607127),
                g = l(149170),
                b = l(718e3),
                y = l(785813),
                _ = l(825495),
                h = l(252021),
                E = l(736063),
                v = l(782642),
                C = l(520385),
                x = l(238225),
                I = l(482924),
                F = l(600193),
                T = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "consented" }]),
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "ConsentScreen_xprofileMutation", selections: a },
                    params: { id: "4RvEtxr03YPi6jxZZ_PkoQ", metadata: {}, name: "ConsentScreen_xprofileMutation", operationKind: "mutation", text: null },
                };
            T.hash = "aa72fdb65006a205db978375998ebfe6";
            const S = T;
            var L = l(614983),
                K = l.n(L),
                B = (l(585488), l(351743)),
                R = l.n(B),
                Z = l(731708),
                P = l(593866),
                w = l(154003),
                D = l(40610),
                A = l(715417);
            const M = S,
                O = p().h367e724,
                V = p().ea5928d4,
                N = p().h7ef9dc8,
                U = p().c04ba4b4,
                z = p().d7666008,
                q = p().cb24ee16,
                H = p().c3d89aca,
                j = p().a1c93d74,
                W = m.default.create((e) => ({ consentRoot: { maxWidth: `calc(6 * ${e.spaces.space80})`, paddingHorizontal: e.spaces.space20, marginVertical: e.spaces.space32, marginHorizontal: "auto", alignSelf: "center", width: "100%", gap: e.spaces.space20 }, icon: { height: e.spaces.space20, width: e.spaces.space20, color: e.colors.text, marginEnd: e.spaces.space16 } })),
                Q = i.createElement(A.default, { style: W.icon }),
                G = ({ queryId: e }) => {
                    const [t, l] = i.useState(""),
                        n = i.useMemo(
                            () => [
                                { label: U, decoration: Q },
                                { label: z, decoration: Q },
                                { label: q, decoration: Q },
                            ],
                            [],
                        ),
                        [a, r] = R()(M),
                        o = i.useCallback(() => {
                            l(""),
                                a({
                                    variables: { consented: !0 },
                                    onCompleted: (e) => {
                                        e?.update_xprofile_consent?.success || l(j);
                                    },
                                    onError: (e) => {
                                        l(j);
                                    },
                                    updater: (t, l) => {
                                        K()(e, "userId must be specified");
                                        const n = t.get(e);
                                        n && l?.update_xprofile_consent?.success && n.setValue(!0, "has_xprofile_consent");
                                    },
                                });
                        }, [a, e]);
                    return i.createElement(s.Z, { style: W.consentRoot }, i.createElement(Z.ZP, { size: "title3", weight: "bold" }, O), i.createElement(Z.ZP, { size: "body" }, V), i.createElement(Z.ZP, { weight: "bold" }, N), i.createElement(P.Z, { items: n }), i.createElement(w.ZP, { disabled: r, onClick: o, size: "large", type: "brandFilled" }, H), t ? i.createElement(D.Z.Danger, { text: t, withIcon: !0 }) : null);
                },
                X = i.memo(G);
            var $ = l(301503),
                J = l(107267),
                Y = l(925873),
                ee = l(989272),
                te = l(891198),
                le = l(977952),
                ne = l(167630),
                ae = l(67369),
                re = l(297256),
                ie = l(751475),
                se = l(908478),
                oe = l(516951),
                ce = l(187669),
                ue = l(949626),
                de = l(512547),
                me = l(313433),
                ke = l(874111),
                pe = l(536790),
                fe = l(952793),
                ge = l(655352),
                be = l(478414),
                ye = l(72130),
                _e = l(339110),
                he = l(725516),
                Ee = l(242470);
            const ve = p().b956c04a,
                Ce = p().ifb23caa,
                xe = p().c2333081,
                Ie = m.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16 }, desktopButton: { bottom: 0 }, mobileButton: { bottom: e.componentDimensions.appBarHeight }, v2Button: { padding: e.spaces.space16, justifyContent: "space-between", bottom: 0 }, error: { padding: e.spaces.space16 }, textCountLabel: { flexDirection: "row", alignSelf: "center" } })),
                Fe = (0, he.Z)(({ analytics: e, blockId: t, blocksQueryId: l, closeConfirm: n, initialState: a = "", onSave: r, refetch: o, showConfirmDelete: c, userId: u }) => {
                    const d = (0, fe.hC)("xprofile_emojis_enabled"),
                        m = (0, J.useHistory)(),
                        [k, p] = i.useState(""),
                        [f, g] = i.useState(
                            ((e) => {
                                const t = Y.Z.getContentStateFromRaw(e),
                                    l = Y.Z.initEditorState(t);
                                return Y.Z.convertEmojiToEntities(l);
                            })(a),
                        ),
                        [b, y] = i.useState(!1),
                        [_, h] = i.useState(!1),
                        E = i.useCallback((e, t) => _ && !b, [_, b]),
                        v = i.useCallback(() => {
                            h(!1), y(!1);
                        }, []);
                    (0, ce.q)(() => {
                        (0, ee.fH)((0, be.yW)(be.Hx, be.K), be.Hx);
                    });
                    const x = i.useCallback(() => {
                            n(), h(!1), y(!1), e.scribe({ ...(0, ye.MA)("delete_block_btn", "success") }), g(Y.Z.initEditorState("")), o();
                        }, [e, n, o]),
                        I = (0, ke.c6)(f);
                    let F = I;
                    I > 1 && (F = te.ZP.getFormattedCount(I));
                    const T = i.useMemo(() => f?.getCurrentContent()?.hasText(), [f]),
                        S = i.useCallback(
                            (e) => {
                                const t = Y.Z.convertMentionsToEntities(Y.Z.convertEmojiToEntities(e));
                                _ || (0, se.Z)((0, $.convertToRaw)(t.getCurrentContent()), (0, $.convertToRaw)(f.getCurrentContent())) || h(!0), g(t);
                            },
                            [f, _],
                        ),
                        L = i.useMemo(() => ({ editorState: f, element: le.Z, stripPastedStyles: !0 }), [f]),
                        K = i.useMemo(() => {
                            if (b) return i.createElement(s.Z, { style: Ie.flexRow }, i.createElement(ne.Z, { size: "small" }), i.createElement(Z.ZP, { size: "subtext1" }, "Saving"));
                            const e = !!C.j3 && I > C.j3;
                            return i.createElement(s.Z, null, i.createElement(Z.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: Ie.textCountLabel }, xe({ count: F })));
                        }, [I, F, b]),
                        B = (0, ae.Zz)(),
                        R = i.useMemo(() => {
                            const e = [Ie.stickyButton];
                            return B && !(0, ge.ZP)() ? e.push(Ie.mobileButton) : e.push(Ie.desktopButton), e;
                        }, [B]),
                        P = i.useCallback(() => (d ? i.createElement(me.Z, { editorState: f, onChange: S }) : null), [f, d, S]),
                        w = i.useCallback(
                            () => (e) =>
                                i.createElement(re.b, {
                                    emojiPickerButton: P,
                                    inputStyle: Ie.root,
                                    maxNumberOfLines: 100,
                                    numberOfLines: 30,
                                    onChange: (t) => {
                                        e(t), S(t);
                                    },
                                    richTextInputContext: L,
                                    testID: "xprofile-composer",
                                    textSizesOverride: (0, be.bb)(be.K),
                                    toolbarRightControl: K,
                                }),
                            [S, P, L, K],
                        );
                    return i.createElement(s.Z, null, k ? i.createElement(s.Z, { style: Ie.error }, i.createElement(D.Z.Danger, { text: k, withIcon: !0 })) : null, i.createElement(ie.Z, { fallbackBackPath: "/", history: m, onNavigation: v, shouldBlockNavigation: E, shouldBlockUnload: _ }, i.createElement(ue.Z, { className: be.Hx }, i.createElement(pe.Z, { contextText: (0, ke.iT)(f), isInline: !0, onTextUpdated: S, onTypeaheadStateChange: oe.Z, source: _e._4.LongformComposer }, w()))), i.createElement(s.Z, { style: R }, i.createElement(Ee.Z, { blockId: t, characterCount: I, disabled: b || !_ || !T || I > C.j3, editorState: f, onSave: r, queryId: l, setDirty: h, setError: p, setSaving: y, userId: u })), c && t ? i.createElement(de.Z, { blockId: t, headline: ve, onClose: n, onCompleted: x, queryId: l, subtext: Ce, userId: u }) : null);
                }),
                Te = p().a765e936,
                Se = p().d4d68e44,
                Le = ({ hasConsented: e, history: t, profileBlocksRef: l, queryId: n, refetch: a, viewerUser: r }) => {
                    const o = (0, v.p)(),
                        [m, k] = i.useState(!1),
                        p = c()(x.m1, l),
                        E = p?.items?.find((e) => e?.block_type === C.Mp.RICHTEXT),
                        I = E?.data?.value,
                        F = E?.block_id,
                        T = i.useCallback(() => {
                            k(!1);
                        }, []),
                        S = i.useCallback(
                            (e) => [
                                {
                                    text: Te,
                                    Icon: f.default,
                                    disabled: !F,
                                    onClick: () => {
                                        k(!0), e();
                                    },
                                },
                            ],
                            [F],
                        ),
                        L = i.useCallback((e) => i.createElement(u.Z, { cancelButtonLabel: "Cancel", items: S(e), onCloseRequested: e }), [S]);
                    return r
                        ? i.createElement(h.Z, {
                              backLocation: `/${r.screen_name}`,
                              history: t,
                              primaryContent: (() => {
                                  if (!r || !p) return null;
                                  if (!e) return i.createElement(s.Z, { style: Ke.root }, i.createElement(X, { queryId: n }));
                                  return i.createElement(
                                      s.Z,
                                      { style: Ke.root },
                                      i.createElement(Fe, {
                                          blockId: F,
                                          blocksQueryId: n,
                                          closeConfirm: T,
                                          initialState: I,
                                          onSave: () => {
                                              o({ text: Se }), t.push(`/${r.screen_name}/bio`);
                                          },
                                          refetch: a,
                                          showConfirmDelete: m,
                                          userId: r.id_str,
                                      }),
                                  );
                              })(),
                              rightControl: e ? i.createElement(s.Z, null, i.createElement(d.Z, { Icon: g.default, renderActionMenu: L })) : null,
                              sidebarContent: i.createElement(b.Z, null),
                              subtitle: `@${r.screen_name}`,
                              title: (0, y.Z)(r),
                              titleIconCell: (0, _.Z)(r),
                          })
                        : null;
                },
                Ke = m.default.create((e) => ({ root: { paddingVertical: e.spaces.space20, height: "100%" }, flexRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, flexCol: { display: "flex", flexDirection: "column" }, flexOne: { flex: 1 }, avatar: { width: 90, height: 90 } })),
                Be = (e) => {
                    const { data: t, refetch: l } = (0, I.A)(x.vF, {}),
                        n = t?.viewer_v2?.user_results?.result?.profile_blocks,
                        a = Boolean(t?.viewer_v2?.user_results?.result?.has_xprofile_consent);
                    if (!e.viewerUser || !n) return null;
                    const s = a ? n.__id : t?.viewer_v2?.user_results?.result?.__id;
                    return i.createElement(Le, (0, r.Z)({ hasConsented: a, profileBlocksRef: n, queryId: s, refetch: l }, e));
                },
                Re = { context: "EXTENDED_PROFILE_SETTINGS" },
                Ze = (0, F.Z)((e) => i.createElement(E.H, { errorConfig: Re }, i.createElement(Be, e)));
        },
        751475: (e, t, l) => {
            l.d(t, { Z: () => d });
            l(136728);
            var n = l(202784),
                a = l(674132),
                r = l.n(a),
                i = l(190286);
            const s = r().b15c0a18,
                o = r().aebf81c8,
                c = r().aa744c1e,
                u = r().fe04d89a,
                d = (e) => {
                    const { children: t, fallbackBackPath: l, history: a, onNavigation: r, shouldBlockNavigation: d, shouldBlockUnload: m } = e,
                        [k, p] = n.useState(void 0);
                    n.useEffect(() => {
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
                    const f = n.useCallback((e, t) => !(!k && d(e, t)) || (p({ nextLocation: e, action: t }), !1), [k, d]);
                    n.useEffect(() => {
                        const e = a.block(f);
                        return () => e();
                    }, [f, a]);
                    const g = n.useCallback(() => {
                            p(void 0);
                        }, [p]),
                        b = n.useCallback(() => {
                            r?.(),
                                p((e) => {
                                    if (null == e) return;
                                    const { action: t, nextLocation: n } = e;
                                    switch (t) {
                                        case "PUSH":
                                            a.push(n);
                                            break;
                                        case "REPLACE":
                                            a.replace(n);
                                            break;
                                        case "POP":
                                            a.goBackThroughModals({ fallbackPath: l });
                                    }
                                });
                        }, [l, a, r]);
                    return n.createElement(n.Fragment, null, t, k ? n.createElement(i.Z, { cancelButtonLabel: c, confirmButtonLabel: u, confirmButtonType: "destructiveFilled", headline: s, onCancel: g, onConfirm: b, text: o }) : null);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsExtendedProfile.dc40f84a.js.map
