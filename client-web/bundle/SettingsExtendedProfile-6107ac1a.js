"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsExtendedProfile-6107ac1a"],
    {
        491939: (e, n, t) => {
            t.d(n, { Z: () => i });
            var l,
                a,
                r = {
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
            r.hash = "aa72fdb65006a205db978375998ebfe6";
            const i = r;
        },
        681488: (e, n, t) => {
            t.d(n, { Z: () => c });
            var l,
                a,
                r,
                i,
                o,
                s = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "richtextValue" }), (a = { defaultValue: null, kind: "LocalArgument", name: "sectionId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "sectionType" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
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
                    operation: { argumentDefinitions: [l, i, a, r], kind: "Operation", name: "useCreateRichtextBlockMutation", selections: o },
                    params: { id: "lDE6HUnPgNvp1_8bcCM3-w", metadata: {}, name: "useCreateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            s.hash = "5369f2707d565366752d07f461b21f70";
            const c = s;
        },
        876242: (e, n, t) => {
            t.d(n, { Z: () => i });
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
        899212: (e, n, t) => {
            t.d(n, { Z: () => a });
            var l = {
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
            const a = l;
        },
        523841: () => {
            var e,
                n,
                t,
                l,
                a = {
                    fragment: {
                        argumentDefinitions: (e = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchProfileBlocks_profileExistsQuery",
                        selections: [
                            {
                                alias: null,
                                args: (n = [
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "screen_name", variableName: "screenName" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "has_profile_blocks", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "useFetchProfileBlocks_profileExistsQuery",
                        selections: [
                            {
                                alias: null,
                                args: n,
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
                                            { kind: "InlineFragment", selections: [t, (l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    l,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "Z2BA99jFw6TxaJM5v7Irmg", metadata: {}, name: "useFetchProfileBlocks_profileExistsQuery", operationKind: "query", text: null },
                };
            a.hash = "159e51b19a254333fecf6035bc3245b7";
        },
        796627: (e, n, t) => {
            t.d(n, { Z: () => u });
            var l,
                a,
                r,
                i,
                o,
                s,
                c = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchProfileBlocks_profileQuery",
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
                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "has_profile_blocks", storageKey: null }),
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ProfileBlocksSlice",
                                                        kind: "LinkedField",
                                                        name: "profile_blocks",
                                                        plural: !1,
                                                        selections: [
                                                            { args: null, kind: "FragmentSpread", name: "useFetchProfileBlocks_profileBlocksSlice" },
                                                            { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null })], storageKey: null },
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
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useFetchProfileBlocks_profileQuery", selections: [{ alias: null, args: a, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_screen_name", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [r, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [i, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [o, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }] },
                    params: { id: "Azv1m7WiLnbn36nNCk7l0Q", metadata: {}, name: "useFetchProfileBlocks_profileQuery", operationKind: "query", text: null },
                };
            c.hash = "16584b716a8d455d79eefb53731f55ee";
            const u = c;
        },
        579724: (e, n, t) => {
            t.d(n, { Z: () => u });
            var l,
                a,
                r,
                i,
                o,
                s,
                c = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: (l = [{ kind: "Literal", name: "s", value: "f3d8" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "has_xprofile_consent", storageKey: null }), { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useFetchProfileBlocks_profileBlocksSlice" }, { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null })], storageKey: null }, (i = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }, i], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: l, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [a, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [r, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [o, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }, i], storageKey: null }, i, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }] },
                    params: { id: "vRz7Yom7hObecKwzBRUBiQ", metadata: {}, name: "useFetchProfileBlocks_settingsQuery", operationKind: "query", text: null },
                };
            c.hash = "cb1d5a0879773e36614622dd4379b34e";
            const u = c;
        },
        163956: (e, n, t) => {
            t.d(n, { Z: () => i });
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
        751475: (e, n, t) => {
            t.d(n, { Z: () => d });
            t(136728);
            var l = t(202784),
                a = t(674132),
                r = t.n(a),
                i = t(190286);
            const o = r().b15c0a18,
                s = r().aebf81c8,
                c = r().aa744c1e,
                u = r().fe04d89a,
                d = (e) => {
                    const { children: n, fallbackBackPath: t, history: a, onNavigation: r, shouldBlockNavigation: d, shouldBlockUnload: m } = e,
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
                    const g = l.useCallback((e, n) => !(!f && d(e, n)) || (p({ nextLocation: e, action: n }), !1), [f, d]);
                    l.useEffect(() => {
                        const e = a.block(g);
                        return () => e();
                    }, [g, a]);
                    const h = l.useCallback(() => {
                            p(void 0);
                        }, [p]),
                        k = l.useCallback(() => {
                            r?.(),
                                p((e) => {
                                    if (null == e) return;
                                    const { action: n, nextLocation: l } = e;
                                    switch (n) {
                                        case "PUSH":
                                            a.push(l);
                                            break;
                                        case "REPLACE":
                                            a.replace(l);
                                            break;
                                        case "POP":
                                            a.goBackThroughModals({ fallbackPath: t });
                                    }
                                });
                        }, [t, a, r]);
                    return l.createElement(l.Fragment, null, n, f ? l.createElement(i.Z, { cancelButtonLabel: c, confirmButtonLabel: u, confirmButtonType: "destructiveFilled", headline: o, onCancel: h, onConfirm: k, text: s }) : null);
                };
        },
        135904: (e, n, t) => {
            t.d(n, { c: () => r, n: () => a });
            var l = t(392237);
            const a = "longform-styles",
                r = `\n    .longform-header-one {\n        font-size: ${l.default.theme.fontSizes.title2};\n        font-weight: ${l.default.theme.fontWeights.heavy};\n        line-height: ${l.default.theme.lineHeights.title1};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${l.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${l.default.theme.fontWeights.heavy};\n        line-height: ${l.default.theme.lineHeights.title4};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${l.default.theme.fontSizes.title3};\n        font-weight: ${l.default.theme.fontWeights.heavy};\n        line-height: ${l.default.theme.lineHeights.title2};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${l.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${l.default.theme.fontWeights.heavy};\n        line-height: ${l.default.theme.lineHeights.headline1};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${l.default.theme.fontSizes.headline2};\n        line-height: ${l.default.theme.lineHeights.title4};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${l.default.theme.fontSizes.headline2};\n        line-height: ${l.default.theme.lineHeights.title4};\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${l.default.theme.fontSizes.headline2};\n        line-height: ${l.default.theme.lineHeights.title4};   \n        margin-bottom: ${l.default.theme.spaces.space12};\n        margin-left: calc(${l.default.theme.spaces.space28} + ${l.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${l.default.theme.fontSizes.headline2};\n        line-height: ${l.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${l.default.theme.spaces.space12} / 2);\n        margin-left: ${l.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${l.default.theme.spaces.space24} + ${l.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${l.default.theme.spaces.space2});\n        padding-left: calc(${l.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${l.default.theme.colors.gray900};\n        border-radius: ${l.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${l.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${l.default.theme.spaces.space28} + ${l.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${l.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${l.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        779802: (e, n, t) => {
            t.d(n, { $u: () => w, Ak: () => K, KJ: () => v, LI: () => x, P7: () => h, PW: () => D, QF: () => k, Qm: () => y, Tr: () => E, b$: () => g, db: () => C, et: () => S, fR: () => p, iH: () => F, lD: () => b, su: () => _, u4: () => L, wX: () => P });
            var l = t(202784),
                a = t(674132),
                r = t.n(a),
                i = t(394123),
                o = t(856661),
                s = t(69893),
                c = t(474761),
                u = t(428259),
                d = t(89085),
                m = t(630715),
                f = t(731708);
            const p = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                g = (e) => [
                    { buttonTestId: "btn-bold", Icon: i.default, key: p.bold, onPress: e(p.bold) },
                    { buttonTestId: "btn-italic", Icon: o.default, key: p.italic, onPress: e(p.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: p.strikethrough, onPress: e(p.strikethrough) },
                ],
                h = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                k = (e) => [{ buttonTestId: "btn-blockquote", Icon: c.default, key: h.blockquote, onPress: e(h.blockquote) }],
                b = (e) => [
                    { buttonTestId: "btn-ul", Icon: u.default, key: h.bulleted, onPress: e(h.bulleted) },
                    { buttonTestId: "btn-ol", Icon: d.default, key: h.numbered, onPress: e(h.numbered) },
                ],
                y = "LINK",
                v = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: y, onPress: e }],
                _ = (e, n) => (t) => {
                    const l = (n) => (e ? `${n}-narrow` : n);
                    switch (t.getType()) {
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
                            return n?.(t) || "";
                    }
                },
                S = r().d5a48014,
                D = r().b92b6156,
                w = r().ec5ed598,
                x = ({ children: e, extendedWidth: n, size: t, weight: a }) => l.createElement(f.ZP, { extendedWidth: n, size: t, weight: a }, e),
                E = { blockType: h.paragraph, label: w, component: x({ size: "body", children: w }) },
                F = [{ blockType: h.header1, label: S, component: x({ size: "title1", extendedWidth: !0, children: S }) }, { blockType: h.header2, label: D, component: x({ size: "title3", weight: "heavy", children: D }) }, E],
                P = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                K = ["delete", "delete-word", "delete-to-start-of-line"],
                L = "increase-text-size",
                C = "decrease-text-size";
        },
        941978: (e, n, t) => {
            t.d(n, { C: () => l });
            class l {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const n = this._load(e);
                    return !(n instanceof Promise) && !!n;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, n) {
                    if (this._cache[e]) return this._cache[e];
                    const t = n().then((n) => {
                        this._cache[e] = n;
                    });
                    return this._cache[e] || (this._cache[e] = t), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((n) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(n)
                                          .catch(() => n(!1))
                                    : n(!0);
                            }),
                    );
                }
            }
            new l();
        },
        491915: (e, n, t) => {
            t.d(n, { ZP: () => h });
            t(571372);
            var l = t(202784),
                a = t(325686),
                r = t(392237),
                i = t(674132),
                o = t.n(i),
                s = t(643442),
                c = t(466445),
                u = t(731708),
                d = t(154003),
                m = t(173739);
            const f = o().jcf3e7a2;
            function p({ animation: e, autoplay: n }) {
                const [t, r] = l.useState(n),
                    [i, o] = l.useState(0);
                return (
                    l.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && o(Math.round(e.currentTime));
                        });
                    }, [e]),
                    l.createElement(
                        a.Z,
                        { style: g.container },
                        l.createElement(d.ZP, {
                            "aria-label": t ? "Pause" : "Play",
                            icon: t ? l.createElement(s.default, null) : l.createElement(c.default, null),
                            onClick: function () {
                                t ? (e.pause(), r(!1)) : (e.play(), r(!0));
                            },
                            type: "primaryText",
                        }),
                        l.createElement(u.ZP, { style: g.frames }, `${i}/${e.totalFrames}`),
                        l.createElement(
                            a.Z,
                            { style: g.slider },
                            l.createElement(m.Z, {
                                "aria-label": f,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (n) {
                                    e.goToAndStop(n, !0), r(!1);
                                },
                                value: i,
                            }),
                        ),
                    )
                );
            }
            const g = r.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function h(e) {
                const { autoplay: n = !0, loop: t = !1, onAnimationEnd: r, onAnimationStart: i, onError: o, withControls: s } = e,
                    c = l.useRef(void 0),
                    u = l.useRef({ animationLoaded: !1 }),
                    d = l.useRef(null),
                    [m, f] = l.useState(!1);
                return (
                    l.useEffect(() => {
                        function l(e, n) {
                            "function" == typeof r && r(n), e && e.destroy();
                        }
                        const { animationLoaded: a } = u.current;
                        a ||
                            ((u.current.animationLoaded = !0),
                            k.load().then((a) => {
                                if (a && d.current) {
                                    const r = { container: d.current, renderer: "svg", loop: t, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        s = a.loadAnimation(r);
                                    (c.current = s),
                                        (s.onError = (e) => {
                                            const n = new b(e);
                                            "function" == typeof o && o(n), l(s, n);
                                        }),
                                        s.addEventListener("DOMLoaded", () => {
                                            f(!0), n && (s.play(), i && i());
                                        }),
                                        s.addEventListener("complete", () => {
                                            l(s);
                                        });
                                }
                            }));
                    }, [e.animation, n, t, r, i, o, s]),
                    l.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    l.createElement(a.Z, null, l.createElement(a.Z, { style: [e.animationContainerStyle, y.centerAnimation] }, l.createElement("div", { ref: d, style: e.animationStyle }), s && c.current && m && l.createElement(p, { animation: c.current, autoplay: n })))
                );
            }
            h.Prepare = function () {
                return (
                    l.useEffect(() => {
                        k.load();
                    }, []),
                    null
                );
            };
            const k = { load: () => t.e("ondemand.LottieWeb").then(t.t.bind(t, 548888, 23)) };
            class b extends Error {
                constructor(e, ...n) {
                    super(...n), Error.captureStackTrace && Error.captureStackTrace(this, b), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const y = r.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, n, t) => {
            t.d(n, { Z: () => c });
            var l = t(202784),
                a = t(674132),
                r = t.n(a),
                i = t(149170),
                o = t(40644);
            const s = r().gaeb997e;
            const c = function ({ activeColor: e, label: n = s, Icon: t = i.default, iconSize: a = "normal", isDisabled: r, onClick: c, preventFocusShift: u, renderActionMenu: d, style: m, testID: f, withDarkBackground: p = !1 }) {
                const g = l.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    h = l.useMemo(() => ({ label: n }), [n]);
                return l.createElement(o.ZP, { Icon: t, activeColor: e || (p ? "white" : void 0), "aria-label": n, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: h, iconSize: a, isDisabled: r, onPress: g, preventFocusShift: u, renderMenu: d, style: m, testID: f });
            };
        },
        989272: (e, n, t) => {
            t.d(n, { _i: () => a, fH: () => i, w3: () => r });
            t(136728);
            var l = t(392237);
            const a = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function r(e) {
                i(
                    (function () {
                        const e = l.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${a.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${a.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${a.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    o,
                );
                const n = s(e);
                return (
                    i(
                        (function (e) {
                            const n = s(e);
                            let t = e.placeholderTextColor;
                            const a = e.contentHorizontalPadding;
                            t || (t = l.default.theme.colors.gray700);
                            return `\n    .${n} .public-DraftEditorPlaceholder-root {\n      color: ${t};\n    }\n\n    .${n} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${t};\n    }\n\n    ${a ? `\n        .${n} .public-DraftEditor-content,\n        .${n} .public-DraftEditorPlaceholder-root {\n          padding-left: ${a};\n          padding-right: ${a};\n        }\n      ` : ""}\n  `;
                        })(e),
                        n,
                    ),
                    n
                );
            }
            function i(e, n) {
                if (
                    !(function (e) {
                        return !!document.getElementById(e);
                    })(n)
                ) {
                    const t = document.createElement("style");
                    t.setAttribute("id", n), (t.innerHTML = e);
                    const l = document.head;
                    l && l.insertBefore(t, l.firstChild);
                }
            }
            const o = "draftjs-styles";
            function s(e) {
                const n = (function (e) {
                    for (let n = 0; n < c.length; n++) {
                        if (c[n] === e) return String(n);
                    }
                    return c.push(e), String(c.length - 1);
                })(JSON.stringify(e));
                return `${o}_${n}`;
            }
            const c = [];
        },
        280278: (e, n, t) => {
            t.d(n, { ZP: () => g });
            var l = t(202784),
                a = t(325686),
                r = t(827515),
                i = t(461756),
                o = t(731708),
                s = t(392237);
            const c = "up",
                u = "down",
                d = (e, n, t) => {
                    t((t) => {
                        const l = (0, r.Z)(e) ? (e > (t.count || 0) ? c : u) : c;
                        return { ...t, count: e, oldText: t.text, pendingCount: null, pendingText: null, text: n, transitionDirection: l };
                    });
                },
                m = {};
            [c, u].forEach((e) => {
                const n = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: n, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: n } };
            });
            const f = { position: "absolute" },
                p = s.default.create({ root: { overflow: "hidden" } }),
                g = (e) => {
                    const { children: n, containerStyle: t, count: s, ...u } = e,
                        [g, h] = l.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        k = l.useRef(!1);
                    return (
                        l.useEffect(
                            () => (
                                (k.current = !0),
                                function () {
                                    k.current = !1;
                                }
                            ),
                            [],
                        ),
                        l.useEffect(() => {
                            if (k.current)
                                if (i.Z.reducedMotionEnabled) h((t) => ({ ...t, oldText: null, text: n, pendingText: null, pendingCount: null, count: e.count }));
                                else if (n !== g.pendingText) {
                                    n === g.text || ((0, r.Z)(e.count) && g.count === e.count) ? h((e) => ({ ...e, pendingCount: null, pendingText: null })) : (h((t) => ({ ...t, pendingCount: e.count, pendingText: n })), g.animating || d(e.count, n, h));
                                }
                        }, [n]),
                        l.useEffect(() => {
                            k.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              k.current && h((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && d(g.pendingCount, g.pendingText, h));
                        }, [g.animating, g.oldText]),
                        l.useMemo(() => {
                            const e = m[g.transitionDirection],
                                n = g.oldText && !i.Z.reducedMotionEnabled,
                                r = !g.animating && g.oldText && !i.Z.reducedMotionEnabled,
                                s = { ...f, ...(g.animating ? e.post : e.active) },
                                c = { ...(r ? e.pre : e.active) };
                            return l.createElement(
                                a.Z,
                                { style: [p.root, t] },
                                n ? l.createElement("span", { style: s }, l.createElement(o.ZP, u, g.oldText)) : null,
                                l.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, n) => {
                                                e && n((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(k.current, h),
                                        style: c,
                                    },
                                    l.createElement(o.ZP, u, g.text),
                                ),
                            );
                        }, [t, u, g, k, h])
                    );
                };
        },
        40644: (e, n, t) => {
            t.d(n, { ZP: () => _ });
            var l = t(202784),
                a = t(325686),
                r = t(461756),
                i = t(731708),
                o = t(58881),
                s = t(530732),
                c = t(224162),
                u = t(491915),
                d = t(392237),
                m = t(551611),
                f = t(674132),
                p = t.n(f),
                g = t(891198),
                h = t(537392),
                k = t(280278);
            const b = p().e8d93005,
                y = d.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                v = ({ color: e, count: n }) => {
                    const t = (0, g.wl)(n, !0);
                    return l.createElement(h.ZP, null, ({ containerWidth: a }) => {
                        return l.createElement(k.ZP, { color: e, count: n, size: "subtext2", style: [y.count, ((r = a), r < d.default.theme.breakpoints.small && y.narrowCount)] }, n > 0 ? (((e) => e < d.default.theme.breakpoints.xxSmall)(a) || t.length >= 5 ? b(n) : t) : void 0);
                        var r;
                    });
                };
            class _ extends l.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, n) => {
                            const { activeColor: t, color: r, decoration: o } = this.props;
                            return l.createElement(c.ZP.Consumer, null, ({ direction: s }) => l.createElement(i.ZP, { color: e ? t : r, dir: s, style: [w.inner, e && "blue500" === t && w.blue500] }, l.createElement(a.Z, { ref: this.props.actionIconContainerRef }, n ? this._renderButton(n) : null, this._renderIcon()), o, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: n, backgroundColor: t, hoverLabel: a, iconSize: r, isActive: i, isDisabled: c, showBackgroundWhenActive: u } = this.props,
                                m = o.Z.generate({ backgroundColor: d.default.theme.colors[t], color: d.default.theme.colors[n], insetFocusRing: !0 }),
                                f = u && i && !e?.isHovered;
                            return l.createElement(s.Z, { hoverLabel: a, interactiveStyles: m, interactivityState: e, style: [d.default.absoluteFill, D[f ? "haloBackground" : t], !c && w.iconBackground, "small" === r && w.iconSmallBoundingBox, f && w.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: n, isActive: t, isDisabled: a, isFaded: i, onAnimationEnd: o, onAnimationStart: s, onError: c, showAnimation: f, transitionAnimationUrl: p } = this.props;
                            if (!d.default.theme.highContrastEnabled && !r.Z.reducedMotionEnabled && e && f) return l.createElement(u.ZP, { animation: p || m.Bf, animationContainerStyle: S[n], animationStyle: E, onAnimationEnd: o, onAnimationStart: s, onError: c });
                            {
                                const r = t && e ? e : this.props.Icon;
                                return l.createElement(r, { style: [S[n], !a && i && w.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: n } = this.props;
                            return n ? l.createElement(v, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: n, renderWrapper: t } = this.props;
                            t || (e.stopPropagation(), n && n(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: n, enableKeyboardShortcuts: t, isActive: i, isDisabled: o, isPresentational: c, keyboardShortcut: m, link: f, preventFocusShift: p, renderMenu: g, renderWrapper: h = l.Fragment, style: k, testID: b } = this.props,
                        y = !d.default.theme.highContrastEnabled && !r.Z.reducedMotionEnabled;
                    return l.createElement(
                        a.Z,
                        { style: [w.root, k] },
                        l.createElement(
                            h,
                            null,
                            c
                                ? this._renderContent(i)
                                : l.createElement(s.Z, { "aria-haspopup": g ? "menu" : void 0, "aria-label": e, disabled: o, enableKeyboardShortcuts: t, focusable: n, interactiveStyles: null, keyboardShortcut: m, link: f, onClick: this._handlePress, preventFocusShift: p, renderMenu: g, style: [w.triggerAreaRoot, w.outlineNone], testID: b }, (e) => {
                                      const { isFocused: n, isHovered: t, isPressed: l } = e,
                                          a = i || t || l || n;
                                      return this._renderContent(a, e);
                                  }),
                        ),
                        y ? l.createElement(u.ZP.Prepare, null) : null,
                    );
                }
            }
            _.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const S = d.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                D = d.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                w = d.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                x = "224.5%",
                E = { width: x, height: x };
        },
        551611: (e, n, t) => {
            t.d(n, { Bf: () => a, ZP: () => i });
            var l = t(941978);
            const a = "https://abs.twimg.com/sticky/animations/like.4.json";
            class r extends l.C {
                check(e) {
                    return super.check(e ?? a);
                }
            }
            const i = new r();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsExtendedProfile-6107ac1a.ca74506a.js.map
