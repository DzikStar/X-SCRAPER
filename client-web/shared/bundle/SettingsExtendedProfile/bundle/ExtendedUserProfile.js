"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.SettingsExtendedProfile~bundle.ExtendedUserProfile"],
    {
        876242: (e, l, n) => {
            n.d(l, { Z: () => r });
            var a,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: (a = [
                            { defaultValue: null, kind: "LocalArgument", name: "blockId" },
                            { defaultValue: null, kind: "LocalArgument", name: "userId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useDeleteProfileBlockMutation",
                        selections: (i = [
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useDeleteProfileBlockMutation", selections: i },
                    params: { id: "EvvA9IQR0sKW0tGqXwSzKA", metadata: {}, name: "useDeleteProfileBlockMutation", operationKind: "mutation", text: null },
                };
            s.hash = "5d2c7077ac04854de170e0b8fd37dc6f";
            const r = s;
        },
        512547: (e, l, n) => {
            n.d(l, { Z: () => f });
            var a = n(202784),
                i = n(190286),
                s = n(111677),
                r = n.n(s),
                t = n(782642),
                o = n(72130),
                u = n(725516),
                c = n(876242),
                d = (n(585488), n(351743)),
                k = n.n(d);
            const m = c.Z,
                p = () => {
                    const [e, l] = k()(m);
                    return [
                        a.useCallback(
                            (l) => {
                                e(l);
                            },
                            [e],
                        ),
                        l,
                    ];
                },
                g = r().g9677c6e,
                y = r().a2b8c54c,
                f = ({ blockId: e, headline: l, onClose: n, onCompleted: s, queryId: r, subtext: c, userId: d }) => {
                    const k = (0, t.p)(),
                        m = (0, u.z)(),
                        [f, _] = p(),
                        b = a.useCallback(() => {
                            n();
                        }, [n]),
                        F = a.useCallback(() => {
                            m.scribe({ ...(0, o.MA)("delete_block_btn", "click") }),
                                f({
                                    variables: { blockId: e, userId: d },
                                    updater: (e, l) => {
                                        r && e.delete(r);
                                    },
                                    onCompleted: (e) => {
                                        e?.delete_profile_block?.success && (k({ text: y }), n(), s && s());
                                    },
                                });
                        }, [k, m, e, f, n, s, r, d]);
                    return a.createElement(i.Z, { confirmButtonDisabled: _, confirmButtonLabel: g, confirmButtonType: "destructiveFilled", enableMaskForDismiss: !0, headline: l, onCancel: b, onConfirm: F, text: c });
                };
        },
        785813: (e, l, n) => {
            n.d(l, { Z: () => s });
            var a = n(202784),
                i = n(366635);
            const s = (e) => (e ? a.createElement(i.Z, { affiliateBadgeInfo: e?.highlightedLabel, isBlueVerified: e?.is_blue_verified, isProtected: e?.protected, isVerified: e?.verified, name: e?.name, verifiedType: e?.verified_type }) : null);
        },
        825495: (e, l, n) => {
            n.d(l, { Z: () => s });
            var a = n(202784),
                i = n(823161);
            const s = (e) => {
                if (!e) return null;
                const l = "Square" === e?.profile_image_shape ? "square" : "circle";
                return a.createElement(i.default, { shape: l, size: "xLarge", uri: e?.profile_image_url_https });
            };
        },
        72130: (e, l, n) => {
            n.d(l, { Ak: () => t, MA: () => r, Rz: () => a, Zi: () => s, he: () => i });
            const a = () => ({ component: "extended_profile_settings", action: "click" }),
                i = (e) => ({ component: "extended_profile", element: "extended_profile_edit_btn", action: "click", data: e }),
                s = (e, l) => ({ component: "extended_profile", action: "impression", data: { profile_id: e, ...l } }),
                r = (e, l, n) => ({ component: "rich_text_editor", element: e, action: l, data: n }),
                t = (e, l, n) => ({ component: "work_history_editor", element: e, action: l, data: { version: 2, ...n } });
        },
        520385: (e, l, n) => {
            n.d(l, { Mp: () => i, NB: () => s, P2: () => r, j3: () => a, pR: () => t });
            const a = 5e4,
                i = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                s = (i.RICHTEXT, i.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                r = { about: s.ABOUT, work_experience: s.WORK_EXPERIENCE },
                t = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        238225: (e, l, n) => {
            n.d(l, { kI: () => y, vF: () => g, m1: () => p });
            var a,
                i,
                s,
                r,
                t = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchProfileBlocks_profileExistsQuery",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "screen_name", variableName: "screenName" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "has_profile_blocks", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }],
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
                                args: i,
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
                                            { kind: "InlineFragment", selections: [s, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    r,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "Z2BA99jFw6TxaJM5v7Irmg", metadata: {}, name: "useFetchProfileBlocks_profileExistsQuery", operationKind: "query", text: null },
                };
            t.hash = "159e51b19a254333fecf6035bc3245b7";
            var o = (function () {
                var e = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }],
                    l = [
                        { kind: "Literal", name: "s", value: "f3d8" },
                        { kind: "Variable", name: "screen_name", variableName: "screenName" },
                    ],
                    n = { alias: null, args: null, kind: "ScalarField", name: "has_profile_blocks", storageKey: null },
                    a = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null },
                    i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchProfileBlocks_profileQuery",
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
                    operation: { argumentDefinitions: e, kind: "Operation", name: "useFetchProfileBlocks_profileQuery", selections: [{ alias: null, args: l, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_screen_name", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [i, { kind: "InlineFragment", selections: [n, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [a, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [i, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }, s], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }] },
                    params: { id: "Azv1m7WiLnbn36nNCk7l0Q", metadata: {}, name: "useFetchProfileBlocks_profileQuery", operationKind: "query", text: null },
                };
            })();
            o.hash = "16584b716a8d455d79eefb53731f55ee";
            const u = o;
            var c = (function () {
                var e = [{ kind: "Literal", name: "s", value: "f3d8" }],
                    l = { alias: null, args: null, kind: "ScalarField", name: "has_xprofile_consent", storageKey: null },
                    n = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null },
                    a = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                    i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
                return {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [l, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useFetchProfileBlocks_profileBlocksSlice" }, { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [n], storageKey: null }, a], storageKey: null }, a], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [i, { kind: "InlineFragment", selections: [l, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [n, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [i, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }, a], storageKey: null }, a, s], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }] },
                    params: { id: "vRz7Yom7hObecKwzBRUBiQ", metadata: {}, name: "useFetchProfileBlocks_settingsQuery", operationKind: "query", text: null },
                };
            })();
            c.hash = "cb1d5a0879773e36614622dd4379b34e";
            const d = c;
            var k = {
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
            const m = k;
            n(585488);
            const p = m,
                g = d,
                y = u;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.SettingsExtendedProfile~bundle.ExtendedUserProfile.73df805a.js.map
