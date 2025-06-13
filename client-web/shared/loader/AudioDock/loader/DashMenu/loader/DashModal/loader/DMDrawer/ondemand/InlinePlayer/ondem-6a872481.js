"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"],
    {
        551394: (e, l, n) => {
            n.d(l, { Z: () => o });
            var a,
                r,
                t,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "userId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "ConferenceChatMessageItemQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (r = [
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
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "ConferenceChatMessageItemQuery",
                        selections: [
                            {
                                alias: "user",
                                args: r,
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
                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserCore",
                                                        kind: "LinkedField",
                                                        name: "core",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserVerification",
                                                        kind: "LinkedField",
                                                        name: "verification",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
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
                                                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [t], storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    i,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "xxmSFYAIxIYK89GiO5k5rQ", metadata: {}, name: "ConferenceChatMessageItemQuery", operationKind: "query", text: null },
                };
            s.hash = "b53a5f7f42bcef093dfec2d264f5d1c4";
            const o = s;
        },
        164282: (e, l, n) => {
            n.d(l, { Z: () => r });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "UserAvatar_user",
                selections: [
                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }, action: "THROW" }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "THROW" }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }], storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                ],
                type: "User",
                abstractKey: null,
                hash: "1613f86e9357e2d280d685aea0003641",
            };
            const r = a;
        },
        929446: (e, l, n) => {
            n.d(l, { Z: () => r });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "UserCell_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                    { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }, action: "THROW" },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserCore",
                        kind: "LinkedField",
                        name: "core",
                        plural: !1,
                        selections: [
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }, action: "THROW" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "THROW" },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
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
                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserVerification",
                        kind: "LinkedField",
                        name: "verification",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "2ed5f16889d23a8b1d55df8a2f7bb966",
            };
            const r = a;
        },
        547666: (e, l, n) => {
            n.d(l, { Z: () => t });
            var a,
                r = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "UserName_user",
                    selections: [
                        { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                        {
                            alias: null,
                            args: null,
                            concreteType: "UserCore",
                            kind: "LinkedField",
                            name: "core",
                            plural: !1,
                            selections: [
                                { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }, action: "THROW" },
                                { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "THROW" },
                            ],
                            storageKey: null,
                        },
                        { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
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
                                        { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                        { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [a], storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                        { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                        { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                        {
                            alias: null,
                            args: null,
                            concreteType: "UserVerification",
                            kind: "LinkedField",
                            name: "verification",
                            plural: !1,
                            selections: [
                                { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "User",
                    abstractKey: null,
                };
            r.hash = "2eb1236e44f24e4adfd7cfb28527321c";
            const t = r;
        },
        266568: (e, l, n) => {
            n.d(l, { Z: () => o });
            var a,
                r,
                t,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "userId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useUserCellDataQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (r = [
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
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "useUserCellDataQuery",
                        selections: [
                            {
                                alias: "user",
                                args: r,
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
                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserCore",
                                                        kind: "LinkedField",
                                                        name: "core",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null },
                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
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
                                                                            (t = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
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
                                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [t], storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }], storageKey: null },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserVerification",
                                                        kind: "LinkedField",
                                                        name: "verification",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    i,
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    i,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "E-QuW7aWt06njansMRe0ww", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "useUserCellDataQuery", operationKind: "query", text: null },
                };
            s.hash = "c0b0e360f052f6c6c200824ff1f8e0de";
            const o = s;
        },
        316118: (e, l, n) => {
            n.d(l, { Z: () => r });
            n(136728);
            var a = n(925885);
            function r(e) {
                const l = [],
                    n = (0, a.Z)(e);
                for (let e = 0; e < n.length; e++) l.push(n[e].hashtag);
                return l;
            }
        },
        872722: (e, l, n) => {
            var a = n(23103),
                r = n(609736),
                t = n(513064),
                i = n(639646),
                s = n(443231),
                o = n(910905),
                u = n(643329),
                d = Array,
                c = Math.max,
                p = Math.min;
            a(
                { target: "Array", proto: !0 },
                {
                    toSpliced: function (e, l) {
                        var n,
                            a,
                            r,
                            g,
                            m = o(this),
                            y = i(m),
                            h = s(e, y),
                            k = arguments.length,
                            f = 0;
                        for (0 === k ? (n = a = 0) : 1 === k ? ((n = 0), (a = y - h)) : ((n = k - 2), (a = p(c(u(l), 0), y - h))), r = t(y + n - a), g = d(r); f < h; f++) g[f] = m[f];
                        for (; f < h + n; f++) g[f] = arguments[f - h + 2];
                        for (; f < r; f++) g[f] = m[f + a - n];
                        return g;
                    },
                },
            ),
                r("toSpliced");
        },
        452661: (e, l, n) => {
            n.d(l, { Z: () => y });
            var a = n(18198),
                r = {
                    centroidDimension: function (e, l, n, a) {
                        var t = e.touchBank,
                            i = 0,
                            s = 0,
                            o = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                        if (null !== o) o.touchActive && o.currentTimeStamp > l && ((i += a && n ? o.currentPageX : a && !n ? o.currentPageY : !a && n ? o.previousPageX : o.previousPageY), (s = 1));
                        else
                            for (var u = 0; u < t.length; u++) {
                                var d = t[u];
                                if (null != d && d.touchActive && d.currentTimeStamp >= l) {
                                    (i += a && n ? d.currentPageX : a && !n ? d.currentPageY : !a && n ? d.previousPageX : d.previousPageY), s++;
                                }
                            }
                        return s > 0 ? i / s : r.noCentroid;
                    },
                    currentCentroidXOfTouchesChangedAfter: function (e, l) {
                        return r.centroidDimension(e, l, !0, !0);
                    },
                    currentCentroidYOfTouchesChangedAfter: function (e, l) {
                        return r.centroidDimension(e, l, !1, !0);
                    },
                    previousCentroidXOfTouchesChangedAfter: function (e, l) {
                        return r.centroidDimension(e, l, !0, !1);
                    },
                    previousCentroidYOfTouchesChangedAfter: function (e, l) {
                        return r.centroidDimension(e, l, !1, !1);
                    },
                    currentCentroidX: function (e) {
                        return r.centroidDimension(e, 0, !0, !0);
                    },
                    currentCentroidY: function (e) {
                        return r.centroidDimension(e, 0, !1, !0);
                    },
                    noCentroid: -1,
                };
            const t = r;
            var i = t.currentCentroidXOfTouchesChangedAfter,
                s = t.currentCentroidYOfTouchesChangedAfter,
                o = t.previousCentroidXOfTouchesChangedAfter,
                u = t.previousCentroidYOfTouchesChangedAfter,
                d = t.currentCentroidX,
                c = t.currentCentroidY,
                p = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, l) {
                        (e.numberActiveTouches = l.numberActiveTouches), (e.moveX = i(l, e._accountsForMovesUpTo)), (e.moveY = s(l, e._accountsForMovesUpTo));
                        var n = e._accountsForMovesUpTo,
                            a = o(l, n),
                            r = i(l, n),
                            t = u(l, n),
                            d = s(l, n),
                            c = e.dx + (r - a),
                            p = e.dy + (d - t),
                            g = l.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (c - e.dx) / g), (e.vy = (p - e.dy) / g), (e.dx = c), (e.dy = p), (e._accountsForMovesUpTo = l.mostRecentTimeStamp);
                    },
                    create(e) {
                        var l = { handle: null, shouldCancelClick: !1, timeout: null },
                            n = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (l) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(l, n),
                                onMoveShouldSetResponder: (l) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(l, n),
                                onStartShouldSetResponderCapture: (l) => (1 === l.nativeEvent.touches.length && p._initializeGestureState(n), (n.numberActiveTouches = l.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(l, n)),
                                onMoveShouldSetResponderCapture(l) {
                                    var a = l.touchHistory;
                                    return n._accountsForMovesUpTo !== a.mostRecentTimeStamp && (p._updateGestureStateOnMove(n, a), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(l, n));
                                },
                                onResponderGrant: (r) => (
                                    l.handle || (l.handle = a.Z.createInteractionHandle()),
                                    l.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(l),
                                    (l.shouldCancelClick = !0),
                                    (n.x0 = d(r.touchHistory)),
                                    (n.y0 = c(r.touchHistory)),
                                    (n.dx = 0),
                                    (n.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(r, n),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(r, n)
                                ),
                                onResponderReject(a) {
                                    g(l, e.onPanResponderReject, a, n);
                                },
                                onResponderRelease(a) {
                                    g(l, e.onPanResponderRelease, a, n), m(l), p._initializeGestureState(n);
                                },
                                onResponderStart(l) {
                                    var a = l.touchHistory;
                                    (n.numberActiveTouches = a.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(l, n);
                                },
                                onResponderMove(l) {
                                    var a = l.touchHistory;
                                    n._accountsForMovesUpTo !== a.mostRecentTimeStamp && (p._updateGestureStateOnMove(n, a), e.onPanResponderMove && e.onPanResponderMove(l, n));
                                },
                                onResponderEnd(a) {
                                    var r = a.touchHistory;
                                    (n.numberActiveTouches = r.numberActiveTouches), g(l, e.onPanResponderEnd, a, n);
                                },
                                onResponderTerminate(a) {
                                    g(l, e.onPanResponderTerminate, a, n), m(l), p._initializeGestureState(n);
                                },
                                onResponderTerminationRequest: (l) => null == e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(l, n),
                                onClickCapture: (e) => {
                                    !0 === l.shouldCancelClick && (e.stopPropagation(), e.preventDefault());
                                },
                            },
                            getInteractionHandle: () => l.handle,
                        };
                    },
                };
            function g(e, l, n, r) {
                e.handle && (a.Z.clearInteractionHandle(e.handle), (e.handle = null)), l && l(n, r);
            }
            function m(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const y = p;
        },
        372612: (e, l, n) => {
            n.d(l, { Z: () => F });
            var a = n(133028),
                r = n(807896),
                t = n(231461),
                i = n(202784),
                s = n(890601),
                o = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;
            const u = (e, l) => {
                var n;
                return "string" == typeof e ? "" + parseFloat(e) * l + e.match(o)[1] : ((n = e), !isNaN(parseFloat(n)) && isFinite(n) ? e * l : void 0);
            };
            var d = n(297689),
                c = n(325686),
                p = ["aria-label", "accessibilityLabel", "activeThumbColor", "activeTrackColor", "disabled", "onValueChange", "style", "thumbColor", "trackColor", "value"],
                g = {},
                m = "0px 1px 3px rgba(0,0,0,0.5)",
                y = m + ", 0 0 0 10px rgba(0,0,0,0.1)",
                h = "#D5D5D5",
                k = "#BDBDBD",
                f = i.forwardRef((e, l) => {
                    var n = e["aria-label"],
                        a = e.accessibilityLabel,
                        o = e.activeThumbColor,
                        f = e.activeTrackColor,
                        F = e.disabled,
                        _ = void 0 !== F && F,
                        b = e.onValueChange,
                        S = e.style,
                        T = void 0 === S ? g : S,
                        K = e.thumbColor,
                        C = e.trackColor,
                        P = e.value,
                        R = void 0 !== P && P,
                        L = (0, t.Z)(e, p),
                        U = i.useRef(null);
                    function A(e) {
                        var l = "focus" === e.nativeEvent.type ? y : m;
                        null != U.current && (U.current.style.boxShadow = l);
                    }
                    var D = d.Z.flatten(T),
                        w = D.height,
                        O = D.width,
                        M = w || "20px",
                        I = u(M, 2),
                        x = O > I ? O : I,
                        H = u(M, 0.5),
                        N = !0 === R ? (null != C && "object" == typeof C ? C.true : null != f ? f : "#A3D3CF") : null != C && "object" == typeof C ? C.false : null != C ? C : "#939393",
                        Z = R ? (null != o ? o : "#009688") : null != K ? K : "#FAFAFA",
                        E = M,
                        q = E,
                        j = [v.root, T, _ && v.cursorDefault, { height: M, width: x }],
                        Y = !0 === R ? (("string" == typeof f && null != f) || ("object" == typeof C && null != C && C.true) ? N : h) : ("string" == typeof C && null != C) || ("object" == typeof C && null != C && C.false) ? N : h,
                        V = !0 === R ? (null == o ? k : Z) : null == K ? k : Z,
                        X = [v.track, { backgroundColor: _ ? Y : N, borderRadius: H }],
                        B = [v.thumb, R && v.thumbActive, { backgroundColor: _ ? V : Z, height: E, marginStart: R ? u(q, -1) : 0, width: q }],
                        G = (0, s.Z)("input", {
                            "aria-label": n || a,
                            checked: R,
                            disabled: _,
                            onBlur: A,
                            onChange: function (e) {
                                null != b && b(e.nativeEvent.target.checked);
                            },
                            onFocus: A,
                            ref: l,
                            style: [v.nativeControl, v.cursorInherit],
                            type: "checkbox",
                            role: "switch",
                        });
                    return i.createElement(c.Z, (0, r.Z)({}, L, { style: j }), i.createElement(c.Z, { style: X }), i.createElement(c.Z, { ref: U, style: B }), G);
                });
            f.displayName = "Switch";
            var v = d.Z.create({ root: { cursor: "pointer", userSelect: "none" }, cursorDefault: { cursor: "default" }, cursorInherit: { cursor: "inherit" }, track: (0, a.Z)((0, a.Z)({ forcedColorAdjust: "none" }, d.Z.absoluteFillObject), {}, { height: "70%", margin: "auto", transitionDuration: "0.1s", width: "100%" }), thumb: { forcedColorAdjust: "none", alignSelf: "flex-start", borderRadius: "100%", boxShadow: m, start: "0%", transform: "translateZ(0)", transitionDuration: "0.1s" }, thumbActive: { insetInlineStart: "100%" }, nativeControl: (0, a.Z)((0, a.Z)({}, d.Z.absoluteFillObject), {}, { height: "100%", margin: 0, appearance: "none", padding: 0, width: "100%" }) });
            const F = f;
        },
        702239: (e, l, n) => {
            n.d(l, { Nq: () => d, oD: () => p, t0: () => c });
            var a,
                r = n(202784),
                t = n(928316),
                i =
                    ((a = function (e, l) {
                        return (
                            (a =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, l) {
                                        e.__proto__ = l;
                                    }) ||
                                function (e, l) {
                                    for (var n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                                }),
                            a(e, l)
                        );
                    }),
                    function (e, l) {
                        if ("function" != typeof l && null !== l) throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
                        function n() {
                            this.constructor = e;
                        }
                        a(e, l), (e.prototype = null === l ? Object.create(l) : ((n.prototype = l.prototype), new n()));
                    }),
                s = "html",
                o = "svg",
                u = function (e, l) {
                    var n,
                        a,
                        r,
                        t = {};
                    if (e === s) r = document.createElement("div");
                    else {
                        if (e !== o) throw new Error('Invalid element type "'.concat(e, '" for createPortalNode: must be "html" or "svg".'));
                        r = document.createElementNS("http://www.w3.org/2000/svg", "g");
                    }
                    if (l && "object" == typeof l)
                        for (var i = 0, u = Object.entries(l.attributes); i < u.length; i++) {
                            var d = u[i],
                                c = d[0],
                                p = d[1];
                            r.setAttribute(c, p);
                        }
                    var g = {
                        element: r,
                        elementType: e,
                        setPortalProps: function (e) {
                            t = e;
                        },
                        getInitialPortalProps: function () {
                            return t;
                        },
                        mount: function (l, r) {
                            if (r !== a) {
                                if (
                                    (g.unmount(),
                                    l !== n &&
                                        !(function (e, l) {
                                            var n,
                                                a,
                                                r,
                                                t = null !== (n = e.ownerDocument) && void 0 !== n ? n : document,
                                                i = null !== (r = null !== (a = t.defaultView) && void 0 !== a ? a : t.parentWindow) && void 0 !== r ? r : window;
                                            if (l === s) return e instanceof i.HTMLElement;
                                            if (l === o) return e instanceof i.SVGElement;
                                            throw new Error('Unrecognized element type "'.concat(l, '" for validateElementType.'));
                                        })(l, e))
                                )
                                    throw new Error('Invalid element type for portal: "'.concat(e, '" portalNodes must be used with ').concat(e, " elements, but OutPortal is within <").concat(l.tagName, ">."));
                                l.replaceChild(g.element, r), (n = l), (a = r);
                            }
                        },
                        unmount: function (e) {
                            (e && e !== a) || (n && a && (n.replaceChild(a, g.element), (n = void 0), (a = void 0)));
                        },
                    };
                    return g;
                },
                d = (function (e) {
                    function l(l) {
                        var n = e.call(this, l) || this;
                        return (
                            (n.addPropsChannel = function () {
                                Object.assign(n.props.node, {
                                    setPortalProps: function (e) {
                                        n.setState({ nodeProps: e });
                                    },
                                });
                            }),
                            (n.state = { nodeProps: n.props.node.getInitialPortalProps() }),
                            n
                        );
                    }
                    return (
                        i(l, e),
                        (l.prototype.componentDidMount = function () {
                            this.addPropsChannel();
                        }),
                        (l.prototype.componentDidUpdate = function () {
                            this.addPropsChannel();
                        }),
                        (l.prototype.render = function () {
                            var e = this,
                                l = this.props,
                                n = l.children,
                                a = l.node;
                            return t.createPortal(
                                r.Children.map(n, function (l) {
                                    return r.isValidElement(l) ? r.cloneElement(l, e.state.nodeProps) : l;
                                }),
                                a.element,
                            );
                        }),
                        l
                    );
                })(r.PureComponent),
                c = (function (e) {
                    function l(l) {
                        var n = e.call(this, l) || this;
                        return (n.placeholderNode = r.createRef()), n.passPropsThroughPortal(), n;
                    }
                    return (
                        i(l, e),
                        (l.prototype.passPropsThroughPortal = function () {
                            var e = Object.assign({}, this.props, { node: void 0 });
                            this.props.node.setPortalProps(e);
                        }),
                        (l.prototype.componentDidMount = function () {
                            var e = this.props.node;
                            this.currentPortalNode = e;
                            var l = this.placeholderNode.current,
                                n = l.parentNode;
                            e.mount(n, l), this.passPropsThroughPortal();
                        }),
                        (l.prototype.componentDidUpdate = function () {
                            var e = this.props.node;
                            this.currentPortalNode && e !== this.currentPortalNode && (this.currentPortalNode.unmount(this.placeholderNode.current), this.currentPortalNode.setPortalProps({}), (this.currentPortalNode = e));
                            var l = this.placeholderNode.current,
                                n = l.parentNode;
                            e.mount(n, l), this.passPropsThroughPortal();
                        }),
                        (l.prototype.componentWillUnmount = function () {
                            var e = this.props.node;
                            e.unmount(this.placeholderNode.current), e.setPortalProps({});
                        }),
                        (l.prototype.render = function () {
                            return r.createElement("div", { ref: this.placeholderNode });
                        }),
                        l
                    );
                })(r.PureComponent),
                p = u.bind(null, s);
            u.bind(null, o);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481.da78370a.js.map
