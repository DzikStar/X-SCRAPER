"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"],
    {
        551394: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n,
                i,
                s,
                r,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "userId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "ConferenceChatMessageItemQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (i = [
                                    { kind: "Variable", name: "rest_id", variableName: "userId" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
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
                                                    { args: null, kind: "FragmentSpread", name: "UserAvatar_user" },
                                                    { args: null, kind: "FragmentSpread", name: "UserName_user" },
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
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "ConferenceChatMessageItemQuery",
                        selections: [
                            {
                                alias: "user",
                                args: i,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
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
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiUser",
                                                        kind: "LinkedField",
                                                        name: "legacy",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                    {
                                                        alias: "affiliates_highlighted_label",
                                                        args: null,
                                                        concreteType: "HighlightedUserLabelResponse",
                                                        kind: "LinkedField",
                                                        name: "identity_profile_labels_highlighted_label",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "HighlightedUserLabel",
                                                                kind: "LinkedField",
                                                                name: "label",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [s], storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    r,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "9dDHwpQSi-_wuKFAVF2WsA", metadata: {}, name: "ConferenceChatMessageItemQuery", operationKind: "query", text: null },
                };
            t.hash = "b53a5f7f42bcef093dfec2d264f5d1c4";
            const u = t;
        },
        326439: (e, l, a) => {
            a.d(l, { Z: () => d });
            var n,
                i,
                s,
                r,
                t,
                u = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SensitiveMediaSettingsQuery", selections: [{ alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "cd25" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserSensitiveMediaSettingsInfo", kind: "LinkedField", name: "sensitive_media_settings", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "SensitiveMediaOptions_userSensitiveMediaSettingsInfo" }, (r = { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "SensitiveMediaSettingsQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: n,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
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
                                                    i,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            s,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "UserSensitiveMediaSettingsInfo",
                                                                kind: "LinkedField",
                                                                name: "sensitive_media_settings",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "SensitiveMediaSettings",
                                                                        kind: "LinkedField",
                                                                        name: "sensitive_media_settings",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_adult_content", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_violent_content", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_other_content", storageKey: null },
                                                                            { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    r,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            t,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"cd25")',
                            },
                        ],
                    },
                    params: { id: "ft92vAsha0RhDxwgq_ojWQ", metadata: {}, name: "SensitiveMediaSettingsQuery", operationKind: "query", text: null },
                };
            u.hash = "47444c8ec7640b723fc59a35b0544d70";
            const d = u;
        },
        164282: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "UserAvatar_user",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "THROW", path: "legacy.screen_name" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }, action: "THROW", path: "legacy.profile_image_url_https" },
                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                ],
                type: "User",
                abstractKey: null,
                hash: "1809eaa760a3c16f934a9638456cdb7a",
            };
            const i = n;
        },
        929446: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "UserCell_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }, action: "THROW", path: "legacy.profile_image_url_https" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }, action: "THROW", path: "legacy.name" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "THROW", path: "legacy.screen_name" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, action: "THROW", path: "legacy.protected" },
                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, action: "THROW", path: "legacy.verified" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }, action: "THROW", path: "legacy.followed_by" },
                        ],
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: "HighlightedUserLabelResponse",
                        kind: "LinkedField",
                        name: "identity_profile_labels_highlighted_label",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "HighlightedUserLabel",
                                kind: "LinkedField",
                                name: "label",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "TimelineUrl" }], storageKey: null },
                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }], storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "04f3cb26e5bf3558231cc091914dd02e",
            };
            const i = n;
        },
        547666: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                i = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "UserName_user",
                    selections: [
                        { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                        {
                            alias: null,
                            args: null,
                            concreteType: "ApiUser",
                            kind: "LinkedField",
                            name: "legacy",
                            plural: !1,
                            selections: [
                                { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, action: "THROW", path: "legacy.protected" },
                                { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, action: "THROW", path: "legacy.verified" },
                                { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }, action: "THROW", path: "legacy.name" },
                                { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "THROW", path: "legacy.screen_name" },
                            ],
                            storageKey: null,
                        },
                        {
                            alias: "affiliates_highlighted_label",
                            args: null,
                            concreteType: "HighlightedUserLabelResponse",
                            kind: "LinkedField",
                            name: "identity_profile_labels_highlighted_label",
                            plural: !1,
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "HighlightedUserLabel",
                                    kind: "LinkedField",
                                    name: "label",
                                    plural: !1,
                                    selections: [
                                        { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                        { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [n], storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                        { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                        { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "User",
                    abstractKey: null,
                };
            i.hash = "233e96d7634631d76826fb436a7dcd8d";
            const s = i;
        },
        498510: (e, l, a) => {
            a.d(l, { Z: () => d });
            var n,
                i,
                s,
                r,
                t,
                u = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "fetchDownloadSettingAllowedQuery",
                        selections: [
                            { kind: "RequiredField", field: (n = { alias: null, args: null, concreteType: "UserPreferences", kind: "LinkedField", name: "user_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "allow_video_downloads", storageKey: null }], storageKey: null }), action: "THROW", path: "user_preferences" },
                            {
                                alias: "viewer",
                                args: (i = [{ kind: "Literal", name: "s", value: "4721" }]),
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
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
                                                    (s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            (r = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "LegacyExtendedUserProfile",
                                                                kind: "LinkedField",
                                                                name: "legacy_extended_profile",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "LegacyExtendedBirthDate",
                                                                        kind: "LinkedField",
                                                                        name: "birthdate",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "month", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "year", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            }),
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
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "fetchDownloadSettingAllowedQuery", selections: [n, { alias: "viewer", args: i, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [r, (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, t], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "P4Y9VY-Vn1cJuBnjOVZ4xA", metadata: {}, name: "fetchDownloadSettingAllowedQuery", operationKind: "query", text: null },
                };
            u.hash = "8a9c6728758bc2d477246d6d2dbf9e46";
            const d = u;
        },
        882127: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "fetchDownloadSettingAllowed_viewer",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserResults",
                        kind: "LinkedField",
                        name: "user_results",
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
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "LegacyExtendedUserProfile",
                                                kind: "LinkedField",
                                                name: "legacy_extended_profile",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "LegacyExtendedBirthDate",
                                                        kind: "LinkedField",
                                                        name: "birthdate",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "month", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "year", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
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
                type: "Viewer",
                abstractKey: null,
                hash: "7c8218ed97677fa6b6cff281b5c2fef5",
            };
            const i = n;
        },
        266568: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n,
                i,
                s,
                r,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "userId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useUserCellDataQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (i = [
                                    { kind: "Variable", name: "rest_id", variableName: "userId" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "UserCell_user" }], type: "User", abstractKey: null }], storageKey: null }],
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
                        name: "useUserCellDataQuery",
                        selections: [
                            {
                                alias: "user",
                                args: i,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
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
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiUser",
                                                        kind: "LinkedField",
                                                        name: "legacy",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "HighlightedUserLabelResponse",
                                                        kind: "LinkedField",
                                                        name: "identity_profile_labels_highlighted_label",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "HighlightedUserLabel",
                                                                kind: "LinkedField",
                                                                name: "label",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "TimelineUrl",
                                                                        kind: "LinkedField",
                                                                        name: "url",
                                                                        plural: !1,
                                                                        selections: [
                                                                            (s = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
                                                                            { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null },
                                                                            {
                                                                                alias: "urtEndpointOptions",
                                                                                args: null,
                                                                                concreteType: "TimelineUrtEndpointOptions",
                                                                                kind: "LinkedField",
                                                                                name: "urt_endpoint_options",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    { alias: "cacheId", args: null, kind: "ScalarField", name: "cache_id", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "subtitle", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                    {
                                                                                        alias: "requestParams",
                                                                                        args: null,
                                                                                        concreteType: "RequestParamsEntry",
                                                                                        kind: "LinkedField",
                                                                                        name: "request_params",
                                                                                        plural: !0,
                                                                                        selections: [
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [s], storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    r,
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    r,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "HmyX6T5KhY6ZTdhgZvylWg", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "useUserCellDataQuery", operationKind: "query", text: null },
                };
            t.hash = "c0b0e360f052f6c6c200824ff1f8e0de";
            const u = t;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e.bdb2f6ca.js.map
