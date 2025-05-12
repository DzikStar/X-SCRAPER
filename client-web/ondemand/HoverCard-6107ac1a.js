"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.HoverCard-6107ac1a"],
    {
        897455: (e, n, t) => {
            t.d(n, { Z: () => o });
            var a,
                l,
                i = t(311405),
                r = t(794357),
                s = {
                    kind: "SplitOperation",
                    metadata: {},
                    name: "TimelineRelay$normalization",
                    selections: [
                        { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                        {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "instructions",
                            plural: !0,
                            selections: [
                                { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                { kind: "TypeDiscriminator", abstractKey: "__isTimelineTimelineInstruction" },
                                { alias: "type", args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "TimelineTimelineEntry", kind: "LinkedField", name: "entries", plural: !0, selections: (a = [{ args: null, fragment: i.Z, kind: "FragmentSpread" }]), storageKey: null }], type: "TimelineAddEntries", abstractKey: null },
                                { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "entry_id_to_replace", storageKey: null }, (l = { alias: null, args: null, concreteType: "TimelineTimelineEntry", kind: "LinkedField", name: "entry", plural: !1, selections: a, storageKey: null })], type: "TimelineReplaceEntry", abstractKey: null },
                                { kind: "InlineFragment", selections: [l], type: "TimelinePinEntry", abstractKey: null },
                                {
                                    kind: "InlineFragment",
                                    selections: [
                                        {
                                            alias: "moduleItems",
                                            args: null,
                                            concreteType: "TimelineModuleItem",
                                            kind: "LinkedField",
                                            name: "module_items",
                                            plural: !0,
                                            selections: [
                                                { alias: "entryId", args: null, kind: "ScalarField", name: "entry_id", storageKey: null },
                                                { alias: null, args: null, concreteType: "TimelineTimelineItem", kind: "LinkedField", name: "item", plural: !1, selections: [{ args: null, fragment: r.Z, kind: "FragmentSpread" }], storageKey: null },
                                            ],
                                            storageKey: null,
                                        },
                                    ],
                                    type: "TimelineAddToModule",
                                    abstractKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                    ],
                };
            s.hash = "7d0f17590e1c09ad3ae57e9a9d7fabd6";
            const o = s;
        },
        66351: (e, n, t) => {
            t.d(n, { Z: () => f });
            var a,
                l,
                i,
                r,
                s,
                o,
                c,
                d,
                u,
                m,
                _,
                g,
                p,
                b = t(897455),
                y = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "count" }), (l = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (i = { defaultValue: !1, kind: "LocalArgument", name: "includePromotedContent" }), (r = { defaultValue: null, kind: "LocalArgument", name: "isListMemberTargetUserId" }), (s = { defaultValue: null, kind: "LocalArgument", name: "timelineId" }), (o = { defaultValue: !1, kind: "LocalArgument", name: "withBirdwatchNotes" }), (c = { defaultValue: !1, kind: "LocalArgument", name: "withClientEventToken" }), (d = { defaultValue: !1, kind: "LocalArgument", name: "withCommunity" }), (u = { defaultValue: !1, kind: "LocalArgument", name: "withDmMuting" }), (m = { defaultValue: !1, kind: "LocalArgument", name: "withQuickPromoteEligibilityTweetFields" }), (_ = { defaultValue: !1, kind: "LocalArgument", name: "withVoice" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "managementListsPageTimelineQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: (g = [{ kind: "Literal", name: "s", value: "0c09" }]),
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "Timeline",
                                        kind: "LinkedField",
                                        name: "list_management_timeline",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: (p = [
                                                    { kind: "Literal", name: "cards_platform", value: "Web-12" },
                                                    { kind: "Variable", name: "count", variableName: "count" },
                                                    { kind: "Variable", name: "cursor", variableName: "cursor" },
                                                ]),
                                                concreteType: "TimelineTimeline",
                                                kind: "LinkedField",
                                                name: "timeline",
                                                plural: !1,
                                                selections: [{ args: null, kind: "FragmentSpread", name: "TimelineRelay" }],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"0c09")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [a, l, i, s, o, u, c, _, r, d, m],
                        kind: "Operation",
                        name: "managementListsPageTimelineQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: g,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "Timeline",
                                        kind: "LinkedField",
                                        name: "list_management_timeline",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: p, concreteType: "TimelineTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ args: null, fragment: b.Z, kind: "FragmentSpread" }], storageKey: null },
                                            { alias: null, args: p, filters: null, handle: "timeline", key: "", kind: "LinkedHandle", name: "timeline", handleArgs: [{ kind: "Variable", name: "timelineId", variableName: "timelineId" }] },
                                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"0c09")',
                            },
                        ],
                    },
                    params: { id: "X4iYIGyhEuizi3A24hPipQ", metadata: { features: ["articles_preview_enabled", "c9s_tweet_anatomy_moderator_badge_enabled", "communities_web_enable_tweet_community_results_fetch", "creator_subscriptions_quote_tweet_preview_enabled", "creator_subscriptions_tweet_preview_api_enabled", "freedom_of_speech_not_reach_fetch_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "longform_notetweets_consumption_enabled", "longform_notetweets_inline_media_enabled", "longform_notetweets_rich_text_read_enabled", "premium_content_api_read_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "responsive_web_edit_tweet_api_enabled", "responsive_web_enhance_cards_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_grok_analysis_button_from_backend", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_grok_share_attachment_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_jetfuel_frame", "responsive_web_twitter_article_tweet_consumption_enabled", "rweb_tipjar_consumption_enabled", "rweb_video_screen_enabled", "standardized_nudges_misinfo", "tweet_awards_web_tipping_enabled", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "verified_phone_label_enabled", "view_counts_everywhere_api_enabled"] }, name: "managementListsPageTimelineQuery", operationKind: "query", text: null },
                };
            y.hash = "5b66468936446aae49ccfb5965fb93f4";
            const f = y;
        },
        879113: (e, n, t) => {
            t.d(n, { Z: () => _ });
            var a = t(202784),
                l = t(476984),
                i = t.n(l),
                r = t(143778),
                s = t(750410),
                o = t(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class _ extends a.Component {
                shouldComponentUpdate(e) {
                    const n = e.fetchStatus === d,
                        t = this.props.fetchStatus !== e.fetchStatus;
                    return !(!n && !t) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: n, failureMessage: t, fetchStatus: l, icon: i, loadingMessage: r, onRequestRetry: d, render: _, renderFailure: g, retryMessage: p, retryable: b } = this.props;
                    switch (l) {
                        case c:
                            return b ? a.createElement(s.Z, { icon: i, onRequestRetry: d, retryMessage: p }) : t ? a.createElement(o.m, { failureMessage: t }) : g();
                        case u:
                            return a.createElement(o.J, { "aria-label": e, color: n, loadingMessage: r });
                        case m:
                            return null;
                        default:
                            return _();
                    }
                }
            }
            _.defaultProps = { renderFailure: r.Z, retryable: !0 };
        },
        646496: (e, n, t) => {
            t.d(n, { Z: () => p });
            var a = t(202784),
                l = t(325686),
                i = t(674132),
                r = t.n(i),
                s = t(731708),
                o = t(642153),
                c = t(992942),
                d = t(530732),
                u = t(537392),
                m = t(786475),
                _ = t(392237);
            const g = _.default.create((e) => ({ buttonBottomMargin: { marginBottom: e.spaces.space16 }, buttonLeftMargin: { marginStart: e.spaces.space20 }, buttonTopMargin: { marginTop: e.spaces.space20 }, buttonWrap: { flexWrap: "wrap-reverse" }, condensedContext: { marginTop: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, condensedContextV2: { marginTop: e.spaces.space16 }, iconCustom: { alignSelf: "flex-start", borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32, marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, facepile: { marginBottom: e.spaces.space16, alignSelf: "flex-start" }, facepileV2: { marginEnd: e.spaces.space8, marginTop: e.spaces.space16 }, interactiveStyle: { flexShrink: 1 }, interactiveStyleV2: { flexDirection: "row", alignItems: "center" }, knownFollowersContainer: { marginTop: e.spaces.space16, marginBottom: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", flexGrow: 1, flexShrink: 1 }, underline: { textDecorationLine: "underline" } })),
                p = ({ children: e, context: n, imageSrc: t, knownFollowers: i, onFacepilesClick: p, onFacepilesImpression: b, subtitle: y, title: f, withAdditionalControls: w = !1 }) => {
                    const { firstUsername: k, knownFollowersAvatarUrls: v, trendingFollowersUrl: h, usersCount: T } = i || {},
                        F = i && i.knownFollowersAvatarUrls.length > 3;
                    a.useEffect(() => {
                        F && b && b();
                    }, [F, b]);
                    const L = t ? a.createElement(c.Z, { source: t, style: g.iconCustom }) : null,
                        E = n ? a.createElement(l.Z, { style: w ? g.condensedContextV2 : g.condensedContext }, a.createElement(s.ZP, { align: "left", color: "gray700", numberOfLines: 3, size: "subtext2" }, n), a.createElement(l.Z, { style: w ? g.buttonTopMargin : [g.buttonBottomMargin, g.buttonLeftMargin] }, e)) : null,
                        x = a.createElement(u.ZP, null, ({ containerWidth: t }) => {
                            const i = m.Z.isNarrowScreenWidth(t) ? "xLarge" : "xxLarge",
                                c = t < _.default.theme.breakpoints.xSmall ? g.buttonWrap : void 0,
                                u = w ? g.facepileV2 : null;
                            return a.createElement(
                                l.Z,
                                { style: w ? null : [g.knownFollowersContainer, c] },
                                a.createElement(d.Z, { interactiveStyles: null, link: h, onPress: p, style: w ? g.interactiveStyleV2 : g.interactiveStyle }, ({ isHovered: e }) => a.createElement(a.Fragment, null, a.createElement(o.Z, { style: [g.facepile, u], userAvatarSize: i, userAvatarUrls: v }), a.createElement(s.ZP, { color: "gray700", dir: "ltr", numberOfLines: 2, size: "subtext2", style: e && g.underline }, n || ((e, n) => a.createElement(r().I18NFormatMessage, { $i18n: "bb2cd6d3" }, e, n))(k, T)))),
                                ((n) => {
                                    const t = n < _.default.theme.breakpoints.xSmall ? g.buttonBottomMargin : [g.buttonBottomMargin, g.buttonLeftMargin];
                                    return w ? [e] : a.createElement(l.Z, { style: t }, e);
                                })(t),
                            );
                        }),
                        S = i && F ? x : E;
                    return a.createElement(a.Fragment, null, L, a.createElement(s.ZP, { size: "title2", weight: "heavy" }, f), y ? a.createElement(s.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, y) : null, S);
                };
        },
        748138: (e, n, t) => {
            t.r(n), t.d(n, { default: () => o });
            var a = t(202784),
                l = t(890601),
                i = t(783427),
                r = t(347101);
            const s = (e = {}) => {
                const { direction: n } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: n });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        258292: (e, n, t) => {
            t.r(n), t.d(n, { default: () => o });
            var a = t(202784),
                l = t(890601),
                i = t(783427),
                r = t(347101);
            const s = (e = {}) => {
                const { direction: n } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: n });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        730895: (e, n, t) => {
            var a = t(821176);
            e.exports = function () {
                var e = a(this),
                    n = "";
                return e.hasIndices && (n += "d"), e.global && (n += "g"), e.ignoreCase && (n += "i"), e.multiline && (n += "m"), e.dotAll && (n += "s"), e.unicode && (n += "u"), e.unicodeSets && (n += "v"), e.sticky && (n += "y"), n;
            };
        },
        890103: (e, n, t) => {
            var a = t(609859),
                l = t(807400),
                i = t(396616),
                r = t(730895),
                s = t(824229),
                o = a.RegExp,
                c = o.prototype;
            l &&
                s(function () {
                    var e = !0;
                    try {
                        o(".", "d");
                    } catch (n) {
                        e = !1;
                    }
                    var n = {},
                        t = "",
                        a = e ? "dgimsy" : "gimsy",
                        l = function (e, a) {
                            Object.defineProperty(n, e, {
                                get: function () {
                                    return (t += a), !0;
                                },
                            });
                        },
                        i = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var r in (e && (i.hasIndices = "d"), i)) l(r, i[r]);
                    return Object.getOwnPropertyDescriptor(c, "flags").get.call(n) !== a || t !== a;
                }) &&
                i(c, "flags", { configurable: !0, get: r });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.HoverCard-6107ac1a.23e9a96a.js.map
