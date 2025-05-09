"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SafetyCenter-6107ac1a"],
    {
        395085: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "DesktopReportItem_reportItem",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "report_flow_id", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "ReportItemBody_reportItem" },
                ],
                type: "ReportItem",
                abstractKey: null,
                hash: "1658b31eb05ce195aa62f2b1c0218d5c",
            };
            const i = a;
        },
        626610: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "MobileReportItem_reportItem",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "report_flow_id", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "ReportItemBody_reportItem" },
                ],
                type: "ReportItem",
                abstractKey: null,
                hash: "31e1c0f2a5f9a1f3b5d1f8197e8a490d",
            };
            const i = a;
        },
        744891: (e, l, n) => {
            n.d(l, { Z: () => T });
            var a,
                i,
                t,
                s,
                r,
                u,
                o,
                d,
                c,
                g,
                p,
                m,
                y,
                k,
                F,
                K,
                _ = {
                    fragment: { argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "cursor" }]), kind: "Fragment", metadata: null, name: "OpenReportItemTimelineQuery", selections: [{ alias: null, args: (i = [{ kind: "Literal", name: "s", value: "7f13" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: "open_reports", args: null, concreteType: "OpenReportsSlice", kind: "LinkedField", name: "__Reports_Open_SafetyCenter_Query_slice_slice", plural: !1, selections: [{ alias: null, args: null, concreteType: "ReportItem", kind: "LinkedField", name: "items", plural: !0, selections: [t, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { args: null, kind: "FragmentSpread", name: "DesktopReportItem_reportItem" }, { args: null, kind: "FragmentSpread", name: "MobileReportItem_reportItem" }], storageKey: null }, (r = { alias: null, args: null, concreteType: "SliceInfo", kind: "LinkedField", name: "slice_info", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "next_cursor", storageKey: null }], storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"7f13")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "OpenReportItemTimelineQuery",
                        selections: [
                            {
                                alias: null,
                                args: i,
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
                                                    t,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: (u = [{ kind: "Variable", name: "cursor", variableName: "cursor" }]),
                                                                concreteType: "OpenReportsSlice",
                                                                kind: "LinkedField",
                                                                name: "open_reports",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "ReportItem",
                                                                        kind: "LinkedField",
                                                                        name: "items",
                                                                        plural: !0,
                                                                        selections: [
                                                                            t,
                                                                            s,
                                                                            { alias: null, args: null, kind: "ScalarField", name: "report_flow_id", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "report_status", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "report_status_label", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "report_status_label_text", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "create_time", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "update_time", storageKey: null },
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: null,
                                                                                kind: "LinkedField",
                                                                                name: "first_report_entity_results",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    t,
                                                                                    { kind: "TypeDiscriminator", abstractKey: "__isReportEntityResults" },
                                                                                    {
                                                                                        kind: "InlineFragment",
                                                                                        selections: [
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: null,
                                                                                                kind: "LinkedField",
                                                                                                name: "result",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    t,
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        selections: [
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "Tweet",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "tweet",
                                                                                                                plural: !1,
                                                                                                                selections: (m = [
                                                                                                                    { alias: null, args: null, concreteType: "TweetCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), (d = { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, (c = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }), (g = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null }, (p = { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }), { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null }, s], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: null },
                                                                                                                    {
                                                                                                                        alias: null,
                                                                                                                        args: null,
                                                                                                                        concreteType: "LegacyTweet",
                                                                                                                        kind: "LinkedField",
                                                                                                                        name: "legacy",
                                                                                                                        plural: !1,
                                                                                                                        selections: [
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "display_text_range", storageKey: null },
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "full_text", storageKey: null },
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                                                                                                                        ],
                                                                                                                        storageKey: null,
                                                                                                                    },
                                                                                                                    p,
                                                                                                                    s,
                                                                                                                ]),
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                        ],
                                                                                                        type: "TweetWithVisibilityResults",
                                                                                                        abstractKey: null,
                                                                                                    },
                                                                                                    { kind: "InlineFragment", selections: m, type: "Tweet", abstractKey: null },
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        selections: [
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: null,
                                                                                                                kind: "LinkedField",
                                                                                                                name: "tombstone",
                                                                                                                plural: !1,
                                                                                                                selections: [
                                                                                                                    t,
                                                                                                                    {
                                                                                                                        kind: "InlineFragment",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                alias: null,
                                                                                                                                args: null,
                                                                                                                                concreteType: "TimelineRichText",
                                                                                                                                kind: "LinkedField",
                                                                                                                                name: "text",
                                                                                                                                plural: !1,
                                                                                                                                selections: [
                                                                                                                                    {
                                                                                                                                        alias: null,
                                                                                                                                        args: null,
                                                                                                                                        concreteType: "TimelineRichTextEntity",
                                                                                                                                        kind: "LinkedField",
                                                                                                                                        name: "entities",
                                                                                                                                        plural: !0,
                                                                                                                                        selections: [
                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "format", storageKey: null },
                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "from_index", storageKey: null },
                                                                                                                                            {
                                                                                                                                                alias: null,
                                                                                                                                                args: null,
                                                                                                                                                concreteType: null,
                                                                                                                                                kind: "LinkedField",
                                                                                                                                                name: "ref",
                                                                                                                                                plural: !1,
                                                                                                                                                selections: [
                                                                                                                                                    t,
                                                                                                                                                    { kind: "TypeDiscriminator", abstractKey: "__isTimelineReferenceObject" },
                                                                                                                                                    { kind: "InlineFragment", selections: (k = [(y = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null })]), type: "TimelineRichTextCashtag", abstractKey: null },
                                                                                                                                                    { kind: "InlineFragment", selections: [s, (F = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null })], type: "TimelineRichTextList", abstractKey: null },
                                                                                                                                                    { kind: "InlineFragment", selections: k, type: "TimelineRichTextHashtag", abstractKey: null },
                                                                                                                                                    { kind: "InlineFragment", selections: [(K = { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }, s], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null })], type: "TimelineRichTextUser", abstractKey: null },
                                                                                                                                                    { kind: "InlineFragment", selections: [K, c], type: "TimelineRichTextMention", abstractKey: null },
                                                                                                                                                    {
                                                                                                                                                        kind: "InlineFragment",
                                                                                                                                                        selections: [
                                                                                                                                                            F,
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
                                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "subtitle", storageKey: null },
                                                                                                                                                                    { alias: "timelineWithContext", args: null, concreteType: "TimelineWithContext", kind: "LinkedField", name: "timeline_with_context", plural: !1, selections: [s, { alias: null, args: null, kind: "ScalarField", name: "context", storageKey: null }], storageKey: null },
                                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                                                                                                ],
                                                                                                                                                                storageKey: null,
                                                                                                                                                            },
                                                                                                                                                        ],
                                                                                                                                                        type: "TimelineUrl",
                                                                                                                                                        abstractKey: null,
                                                                                                                                                    },
                                                                                                                                                ],
                                                                                                                                                storageKey: null,
                                                                                                                                            },
                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "to_index", storageKey: null },
                                                                                                                                        ],
                                                                                                                                        storageKey: null,
                                                                                                                                    },
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "rtl", storageKey: null },
                                                                                                                                    y,
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "alignment", storageKey: null },
                                                                                                                                ],
                                                                                                                                storageKey: null,
                                                                                                                            },
                                                                                                                        ],
                                                                                                                        type: "TextTombstone",
                                                                                                                        abstractKey: null,
                                                                                                                    },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                        ],
                                                                                                        type: "TweetTombstone",
                                                                                                        abstractKey: null,
                                                                                                    },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                            s,
                                                                                        ],
                                                                                        type: "TweetResults",
                                                                                        abstractKey: null,
                                                                                    },
                                                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [o, { alias: "idStr", args: null, kind: "ScalarField", name: "id_str", storageKey: null }, g, d, c], storageKey: null }, p, s], type: "User", abstractKey: null }], storageKey: null }, s], type: "UserResults", abstractKey: null },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    r,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: u, filters: null, handle: "slice", key: "Reports_Open_SafetyCenter_Query_slice", kind: "LinkedHandle", name: "open_reports" },
                                                            s,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            s,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"7f13")',
                            },
                        ],
                    },
                    params: { id: "LyXlPAwyc53U9DtuIy2Pxg", metadata: { sliceInfoPath: ["viewer_v2", "user_results", "result", "open_reports", "slice_info"] }, name: "OpenReportItemTimelineQuery", operationKind: "query", text: null },
                };
            _.hash = "ac71fc8b4195e8b0282d4771a994c33c";
            const T = _;
        },
        816290: (e, l, n) => {
            n.d(l, { Z: () => C });
            var a,
                i,
                t,
                s,
                r,
                u,
                o,
                d,
                c,
                g,
                p,
                m,
                y,
                k,
                F,
                K,
                _,
                T,
                S,
                b,
                f,
                h,
                R,
                L,
                x,
                I,
                w,
                v = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "reportId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "ReportDetailSafetyCenterQuery",
                        selections: [
                            {
                                alias: null,
                                args: (i = [{ kind: "Literal", name: "s", value: "7f13" }]),
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
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: (t = [{ kind: "Variable", name: "report_notification_id", variableName: "reportId" }]),
                                                                concreteType: "ReportDetailV2",
                                                                kind: "LinkedField",
                                                                name: "report_detail",
                                                                plural: !1,
                                                                selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "actioned_report_type", storageKey: null }), (r = { alias: null, args: null, kind: "ScalarField", name: "header", storageKey: null }), (u = { alias: null, args: null, kind: "ScalarField", name: "last_update_time", storageKey: null }), (o = { alias: null, args: null, kind: "ScalarField", name: "outcome_text", storageKey: null }), (d = { alias: null, args: null, kind: "ScalarField", name: "remediation", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "report_entities_results", plural: !0, selections: [{ args: null, kind: "FragmentSpread", name: "ReportEntityList_reportEntityResults" }], storageKey: null }, (c = { alias: null, args: null, kind: "ScalarField", name: "report_status", storageKey: null }), (g = { alias: null, args: null, kind: "ScalarField", name: "report_status_label", storageKey: null }), (p = { alias: null, args: null, kind: "ScalarField", name: "report_status_label_text", storageKey: null }), (m = { alias: null, args: null, kind: "ScalarField", name: "rule_link", storageKey: null }), (y = { alias: null, args: null, kind: "ScalarField", name: "verdict", storageKey: null }), (k = { alias: null, args: null, kind: "ScalarField", name: "report_flow_id", storageKey: null }), (F = { alias: null, args: null, concreteType: "ProgressStep", kind: "LinkedField", name: "progress_steps", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "progress", storageKey: null }, r, g, p, { alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "inline_link", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "inline_link_text", storageKey: null }], storageKey: null })],
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
                                storageKey: 'viewer_v2(s:"7f13")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "ReportDetailSafetyCenterQuery",
                        selections: [
                            {
                                alias: null,
                                args: i,
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
                                                    (K = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: t,
                                                                concreteType: "ReportDetailV2",
                                                                kind: "LinkedField",
                                                                name: "report_detail",
                                                                plural: !1,
                                                                selections: [
                                                                    s,
                                                                    r,
                                                                    u,
                                                                    o,
                                                                    d,
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "report_entities_results",
                                                                        plural: !0,
                                                                        selections: [
                                                                            K,
                                                                            { kind: "TypeDiscriminator", abstractKey: "__isReportEntityResults" },
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: null,
                                                                                        kind: "LinkedField",
                                                                                        name: "result",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            K,
                                                                                            {
                                                                                                kind: "InlineFragment",
                                                                                                selections: [
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "Tweet",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "tweet",
                                                                                                        plural: !1,
                                                                                                        selections: (R = [
                                                                                                            { alias: null, args: null, concreteType: "TweetCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [K, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [(_ = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), (T = { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, (S = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }), (b = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null }, (f = { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }), { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null }, (h = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, h], storageKey: null }], storageKey: null },
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "LegacyTweet",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "legacy",
                                                                                                                plural: !1,
                                                                                                                selections: [
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "display_text_range", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "full_text", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                            f,
                                                                                                            h,
                                                                                                        ]),
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                ],
                                                                                                type: "TweetWithVisibilityResults",
                                                                                                abstractKey: null,
                                                                                            },
                                                                                            { kind: "InlineFragment", selections: R, type: "Tweet", abstractKey: null },
                                                                                            {
                                                                                                kind: "InlineFragment",
                                                                                                selections: [
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: null,
                                                                                                        kind: "LinkedField",
                                                                                                        name: "tombstone",
                                                                                                        plural: !1,
                                                                                                        selections: [
                                                                                                            K,
                                                                                                            {
                                                                                                                kind: "InlineFragment",
                                                                                                                selections: [
                                                                                                                    {
                                                                                                                        alias: null,
                                                                                                                        args: null,
                                                                                                                        concreteType: "TimelineRichText",
                                                                                                                        kind: "LinkedField",
                                                                                                                        name: "text",
                                                                                                                        plural: !1,
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                alias: null,
                                                                                                                                args: null,
                                                                                                                                concreteType: "TimelineRichTextEntity",
                                                                                                                                kind: "LinkedField",
                                                                                                                                name: "entities",
                                                                                                                                plural: !0,
                                                                                                                                selections: [
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "format", storageKey: null },
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "from_index", storageKey: null },
                                                                                                                                    {
                                                                                                                                        alias: null,
                                                                                                                                        args: null,
                                                                                                                                        concreteType: null,
                                                                                                                                        kind: "LinkedField",
                                                                                                                                        name: "ref",
                                                                                                                                        plural: !1,
                                                                                                                                        selections: [
                                                                                                                                            K,
                                                                                                                                            { kind: "TypeDiscriminator", abstractKey: "__isTimelineReferenceObject" },
                                                                                                                                            { kind: "InlineFragment", selections: (x = [(L = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null })]), type: "TimelineRichTextCashtag", abstractKey: null },
                                                                                                                                            { kind: "InlineFragment", selections: [h, (I = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null })], type: "TimelineRichTextList", abstractKey: null },
                                                                                                                                            { kind: "InlineFragment", selections: x, type: "TimelineRichTextHashtag", abstractKey: null },
                                                                                                                                            { kind: "InlineFragment", selections: [(w = { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [K, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }, h], type: "User", abstractKey: null }], storageKey: null }, h], storageKey: null })], type: "TimelineRichTextUser", abstractKey: null },
                                                                                                                                            { kind: "InlineFragment", selections: [w, S], type: "TimelineRichTextMention", abstractKey: null },
                                                                                                                                            {
                                                                                                                                                kind: "InlineFragment",
                                                                                                                                                selections: [
                                                                                                                                                    I,
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
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "subtitle", storageKey: null },
                                                                                                                                                            { alias: "timelineWithContext", args: null, concreteType: "TimelineWithContext", kind: "LinkedField", name: "timeline_with_context", plural: !1, selections: [h, { alias: null, args: null, kind: "ScalarField", name: "context", storageKey: null }], storageKey: null },
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                                                                                        ],
                                                                                                                                                        storageKey: null,
                                                                                                                                                    },
                                                                                                                                                ],
                                                                                                                                                type: "TimelineUrl",
                                                                                                                                                abstractKey: null,
                                                                                                                                            },
                                                                                                                                        ],
                                                                                                                                        storageKey: null,
                                                                                                                                    },
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "to_index", storageKey: null },
                                                                                                                                ],
                                                                                                                                storageKey: null,
                                                                                                                            },
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "rtl", storageKey: null },
                                                                                                                            L,
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "alignment", storageKey: null },
                                                                                                                        ],
                                                                                                                        storageKey: null,
                                                                                                                    },
                                                                                                                ],
                                                                                                                type: "TextTombstone",
                                                                                                                abstractKey: null,
                                                                                                            },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                ],
                                                                                                type: "TweetTombstone",
                                                                                                abstractKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    h,
                                                                                ],
                                                                                type: "TweetResults",
                                                                                abstractKey: null,
                                                                            },
                                                                            { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [K, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [_, { alias: "idStr", args: null, kind: "ScalarField", name: "id_str", storageKey: null }, b, T, S], storageKey: null }, f, h], type: "User", abstractKey: null }], storageKey: null }, h], type: "UserResults", abstractKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    c,
                                                                    g,
                                                                    p,
                                                                    m,
                                                                    y,
                                                                    k,
                                                                    F,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            h,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            h,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"7f13")',
                            },
                        ],
                    },
                    params: { id: "aBO7A9IMjPmr5He3LEBnDQ", metadata: {}, name: "ReportDetailSafetyCenterQuery", operationKind: "query", text: null },
                };
            v.hash = "db9ba7c16af30f3619d259fe3de070f3";
            const C = v;
        },
        422649: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "ReportItemBody_reportItem",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "report_status", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "report_status_label", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "report_status_label_text", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "create_time", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "update_time", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "first_report_entity_results",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                            { args: null, kind: "FragmentSpread", name: "UncontrolledReportEntity_reportEntityResults" },
                        ],
                        storageKey: null,
                    },
                ],
                type: "ReportItem",
                abstractKey: null,
                hash: "69d7171a6cea5a8a66c64f8a95f2ceff",
            };
            const i = a;
        },
        174349: (e, l, n) => {
            n.d(l, { Z: () => T });
            var a,
                i,
                t,
                s,
                r,
                u,
                o,
                d,
                c,
                g,
                p,
                m,
                y,
                k,
                F,
                K,
                _ = {
                    fragment: { argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "cursor" }]), kind: "Fragment", metadata: null, name: "ResolvedReportItemTimelineQuery", selections: [{ alias: null, args: (i = [{ kind: "Literal", name: "s", value: "7f13" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: "reviewed_reports", args: null, concreteType: "ReviewedReportsSlice", kind: "LinkedField", name: "__Reports_Resolved_SafetyCenter_Query_slice_slice", plural: !1, selections: [{ alias: null, args: null, concreteType: "ReportItem", kind: "LinkedField", name: "items", plural: !0, selections: [t, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { args: null, kind: "FragmentSpread", name: "DesktopReportItem_reportItem" }, { args: null, kind: "FragmentSpread", name: "MobileReportItem_reportItem" }], storageKey: null }, (r = { alias: null, args: null, concreteType: "SliceInfo", kind: "LinkedField", name: "slice_info", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "next_cursor", storageKey: null }], storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"7f13")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "ResolvedReportItemTimelineQuery",
                        selections: [
                            {
                                alias: null,
                                args: i,
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
                                                    t,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: (u = [{ kind: "Variable", name: "cursor", variableName: "cursor" }]),
                                                                concreteType: "ReviewedReportsSlice",
                                                                kind: "LinkedField",
                                                                name: "reviewed_reports",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "ReportItem",
                                                                        kind: "LinkedField",
                                                                        name: "items",
                                                                        plural: !0,
                                                                        selections: [
                                                                            t,
                                                                            s,
                                                                            { alias: null, args: null, kind: "ScalarField", name: "report_flow_id", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "report_status", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "report_status_label", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "report_status_label_text", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "create_time", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "update_time", storageKey: null },
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: null,
                                                                                kind: "LinkedField",
                                                                                name: "first_report_entity_results",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    t,
                                                                                    { kind: "TypeDiscriminator", abstractKey: "__isReportEntityResults" },
                                                                                    {
                                                                                        kind: "InlineFragment",
                                                                                        selections: [
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: null,
                                                                                                kind: "LinkedField",
                                                                                                name: "result",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    t,
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        selections: [
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "Tweet",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "tweet",
                                                                                                                plural: !1,
                                                                                                                selections: (m = [
                                                                                                                    { alias: null, args: null, concreteType: "TweetCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), (d = { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, (c = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }), (g = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null }, (p = { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }), { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null }, s], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: null },
                                                                                                                    {
                                                                                                                        alias: null,
                                                                                                                        args: null,
                                                                                                                        concreteType: "LegacyTweet",
                                                                                                                        kind: "LinkedField",
                                                                                                                        name: "legacy",
                                                                                                                        plural: !1,
                                                                                                                        selections: [
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "display_text_range", storageKey: null },
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "full_text", storageKey: null },
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                                                                                                                        ],
                                                                                                                        storageKey: null,
                                                                                                                    },
                                                                                                                    p,
                                                                                                                    s,
                                                                                                                ]),
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                        ],
                                                                                                        type: "TweetWithVisibilityResults",
                                                                                                        abstractKey: null,
                                                                                                    },
                                                                                                    { kind: "InlineFragment", selections: m, type: "Tweet", abstractKey: null },
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        selections: [
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: null,
                                                                                                                kind: "LinkedField",
                                                                                                                name: "tombstone",
                                                                                                                plural: !1,
                                                                                                                selections: [
                                                                                                                    t,
                                                                                                                    {
                                                                                                                        kind: "InlineFragment",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                alias: null,
                                                                                                                                args: null,
                                                                                                                                concreteType: "TimelineRichText",
                                                                                                                                kind: "LinkedField",
                                                                                                                                name: "text",
                                                                                                                                plural: !1,
                                                                                                                                selections: [
                                                                                                                                    {
                                                                                                                                        alias: null,
                                                                                                                                        args: null,
                                                                                                                                        concreteType: "TimelineRichTextEntity",
                                                                                                                                        kind: "LinkedField",
                                                                                                                                        name: "entities",
                                                                                                                                        plural: !0,
                                                                                                                                        selections: [
                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "format", storageKey: null },
                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "from_index", storageKey: null },
                                                                                                                                            {
                                                                                                                                                alias: null,
                                                                                                                                                args: null,
                                                                                                                                                concreteType: null,
                                                                                                                                                kind: "LinkedField",
                                                                                                                                                name: "ref",
                                                                                                                                                plural: !1,
                                                                                                                                                selections: [
                                                                                                                                                    t,
                                                                                                                                                    { kind: "TypeDiscriminator", abstractKey: "__isTimelineReferenceObject" },
                                                                                                                                                    { kind: "InlineFragment", selections: (k = [(y = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null })]), type: "TimelineRichTextCashtag", abstractKey: null },
                                                                                                                                                    { kind: "InlineFragment", selections: [s, (F = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null })], type: "TimelineRichTextList", abstractKey: null },
                                                                                                                                                    { kind: "InlineFragment", selections: k, type: "TimelineRichTextHashtag", abstractKey: null },
                                                                                                                                                    { kind: "InlineFragment", selections: [(K = { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }, s], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null })], type: "TimelineRichTextUser", abstractKey: null },
                                                                                                                                                    { kind: "InlineFragment", selections: [K, c], type: "TimelineRichTextMention", abstractKey: null },
                                                                                                                                                    {
                                                                                                                                                        kind: "InlineFragment",
                                                                                                                                                        selections: [
                                                                                                                                                            F,
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
                                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "subtitle", storageKey: null },
                                                                                                                                                                    { alias: "timelineWithContext", args: null, concreteType: "TimelineWithContext", kind: "LinkedField", name: "timeline_with_context", plural: !1, selections: [s, { alias: null, args: null, kind: "ScalarField", name: "context", storageKey: null }], storageKey: null },
                                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                                                                                                ],
                                                                                                                                                                storageKey: null,
                                                                                                                                                            },
                                                                                                                                                        ],
                                                                                                                                                        type: "TimelineUrl",
                                                                                                                                                        abstractKey: null,
                                                                                                                                                    },
                                                                                                                                                ],
                                                                                                                                                storageKey: null,
                                                                                                                                            },
                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "to_index", storageKey: null },
                                                                                                                                        ],
                                                                                                                                        storageKey: null,
                                                                                                                                    },
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "rtl", storageKey: null },
                                                                                                                                    y,
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "alignment", storageKey: null },
                                                                                                                                ],
                                                                                                                                storageKey: null,
                                                                                                                            },
                                                                                                                        ],
                                                                                                                        type: "TextTombstone",
                                                                                                                        abstractKey: null,
                                                                                                                    },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                        ],
                                                                                                        type: "TweetTombstone",
                                                                                                        abstractKey: null,
                                                                                                    },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                            s,
                                                                                        ],
                                                                                        type: "TweetResults",
                                                                                        abstractKey: null,
                                                                                    },
                                                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [o, { alias: "idStr", args: null, kind: "ScalarField", name: "id_str", storageKey: null }, g, d, c], storageKey: null }, p, s], type: "User", abstractKey: null }], storageKey: null }, s], type: "UserResults", abstractKey: null },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    r,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: u, filters: null, handle: "slice", key: "Reports_Resolved_SafetyCenter_Query_slice", kind: "LinkedHandle", name: "reviewed_reports" },
                                                            s,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            s,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"7f13")',
                            },
                        ],
                    },
                    params: { id: "tuj5LujGhTi8KZjt-3lVaA", metadata: { sliceInfoPath: ["viewer_v2", "user_results", "result", "reviewed_reports", "slice_info"] }, name: "ResolvedReportItemTimelineQuery", operationKind: "query", text: null },
                };
            _.hash = "b587758acca0ac8161a73ffaef583237";
            const T = _;
        },
        403556: (e, l, n) => {
            n.d(l, { Z: () => R });
            var a = n(807896),
                i = n(202784),
                t = n(194504),
                s = n(235902),
                r = n(392237),
                u = n(325686),
                o = n(674132),
                d = n.n(o),
                c = n(912021),
                g = n(516951),
                p = n(731708),
                m = n(310088),
                y = n(175993),
                k = n(58881),
                F = n(530732);
            const K = d().d2414d31,
                _ = () => d().ce4e85ae,
                T = d().fb9f6f39;
            class S extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, c.Z)((e, l) => {
                            const { pathname: n, query: a, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: a, method: "push", state: { ...i, lockScroll: l } };
                        })),
                        (this._unlisten = g.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, l, n, a) => {
                            const i = r.default.theme.colors.text,
                                t = r.default.theme.colors.gray700;
                            return n || a ? (e || l ? i : t) : e ? i : t;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: l } = this.props;
                            l && l(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": l, badgeCount: n, badgePip: a, children: t, color: s, isActive: o, isCompact: d, isPillLink: c, isRoundedRect: g, isWebRedesign: y, retainScrollPosition: S, style: f, to: h } = this.props,
                        { location: R } = this.state,
                        L = h ? this._getMemoizedLink(h, S) : void 0,
                        x = o ? o(h) : R?.pathname === L?.pathname,
                        I = k.Z.generate({ backgroundColor: "transparent", color: r.default.theme.colors.text, insetFocusRing: !0 }),
                        w = y ? "medium" : x ? "bold" : "medium";
                    return i.createElement(F.Z, { "aria-label": l, "aria-selected": x, focusable: !!x, interactiveStyles: I, link: L, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [c ? b.pill : b.link, c && x ? b.active : null, d ? (c ? b.compactPill : b.compactLink) : null, g ? b.roundedRect : null, f], withoutInteractiveStyles: y || c }, ({ isFocused: l, isHovered: o }) => i.createElement(u.Z, { style: c && b.flexGrow }, i.createElement(p.ZP, { size: y ? "headline2" : void 0, style: [b.text, { color: this._getTextColor(x, o, y, c) }, d && b.compactText, y && l && b.focusedText], weight: w }, e && i.createElement(e, { style: b.icon }), t, y || c ? null : i.createElement(u.Z, { style: x && [b.border, { backgroundColor: r.default.theme.colors[s] }] })), n ? i.createElement(m.Z, { count: n, standalone: !0, style: [b.badge, n >= 10 && b.multiDigitBadge, n >= 20 && b.truncatedCountBadge], truncatedCountFormatter: T, unreadCountLabel: K, withBorder: !1 }) : a ? i.createElement(m.Z, { pip: !0, standalone: !0, style: b.badgePip, textColor: "red500", unreadCountLabel: _, withBorder: !1 }) : null));
                }
            }
            (S.contextType = y.Z), (S.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const b = r.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                f = S,
                h = r.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                R = ({ alignFirstItem: e, "aria-label": l, isCompact: n, isPillLink: r, isRoundedRect: u, links: o, style: d, visibleItemIndex: c }) => {
                    const g = o
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: p } = s.ZP.useProps(),
                        m = p() && !r,
                        y = i.useMemo(
                            () =>
                                o.filter(Boolean).map(({ label: l, viewType: t, ...s }, o) => {
                                    const d = m ? [h.linkRedesign, 0 === o && h.firstLinkRedesign, e && 0 === o && h.withNoPaddingStart] : void 0;
                                    return i.createElement(f, (0, a.Z)({ viewType: t }, s, { isCompact: n, isPillLink: r, isRoundedRect: u, isWebRedesign: m, style: d }), l);
                                }),
                            [e, n, r, u, m, o],
                        );
                    return i.createElement(t.Z, { "aria-label": l, buttonsContainerStyle: r && h.gap, childrenStyle: !m && h.flexGrow, key: g, style: [r ? null : h.segmentedControl, m && h.leftAligned, d], visibleItemIndex: c }, y);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SafetyCenter-6107ac1a.de2c48fa.js.map
