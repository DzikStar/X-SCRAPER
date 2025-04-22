"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReportCenter~bundle.SafetyCenter-e96e9bea"],
    {
        704979: (e, l, t) => {
            t.d(l, { Z: () => c });
            var n,
                a,
                r,
                i,
                s,
                o,
                u = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "RichText_timelineRichText",
                    selections: [
                        {
                            kind: "InlineDataFragmentSpread",
                            name: "formatRichText_timelineRichText",
                            selections: [
                                {
                                    kind: "InlineDataFragmentSpread",
                                    name: "formatRichText_updateRelayEntities_timelineRichText",
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
                                                        {
                                                            kind: "InlineDataFragmentSpread",
                                                            name: "formatRichText_timelineReferenceObject",
                                                            selections: [
                                                                (n = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                                { kind: "InlineFragment", selections: (r = [(a = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null })]), type: "TimelineRichTextCashtag", abstractKey: null },
                                                                { kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), (s = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null })], type: "TimelineRichTextList", abstractKey: null },
                                                                { kind: "InlineFragment", selections: r, type: "TimelineRichTextHashtag", abstractKey: null },
                                                                { kind: "InlineFragment", selections: [(o = { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [n, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null })], type: "TimelineRichTextUser", abstractKey: null },
                                                                { kind: "InlineFragment", selections: [o, { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], type: "TimelineRichTextMention", abstractKey: null },
                                                                {
                                                                    kind: "InlineDataFragmentSpread",
                                                                    name: "formatUrl_timelineUrl",
                                                                    selections: [
                                                                        {
                                                                            kind: "InlineFragment",
                                                                            selections: [
                                                                                s,
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
                                                                                        { alias: "timelineWithContext", args: null, concreteType: "TimelineWithContext", kind: "LinkedField", name: "timeline_with_context", plural: !1, selections: [i, { alias: null, args: null, kind: "ScalarField", name: "context", storageKey: null }], storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                },
                                                                            ],
                                                                            type: "TimelineUrl",
                                                                            abstractKey: null,
                                                                        },
                                                                    ],
                                                                    args: null,
                                                                    argumentDefinitions: [],
                                                                },
                                                            ],
                                                            args: null,
                                                            argumentDefinitions: [],
                                                        },
                                                    ],
                                                    storageKey: null,
                                                },
                                                { alias: null, args: null, kind: "ScalarField", name: "to_index", storageKey: null },
                                            ],
                                            storageKey: null,
                                        },
                                    ],
                                    args: null,
                                    argumentDefinitions: [],
                                },
                            ],
                            args: null,
                            argumentDefinitions: [],
                        },
                        { alias: null, args: null, kind: "ScalarField", name: "rtl", storageKey: null },
                        a,
                        { alias: null, args: null, kind: "ScalarField", name: "alignment", storageKey: null },
                    ],
                    type: "TimelineRichText",
                    abstractKey: null,
                };
            u.hash = "e0ccc0e45e3e5e3650f3f763fd746317";
            const c = u;
        },
        625661: (e, l, t) => {
            t.d(l, { ZP: () => m });
            var n = t(202784),
                a = t(614983),
                r = t.n(a),
                i = t(325686),
                s = t(370006),
                o = t(786998),
                u = t(929028),
                c = t(386802);
            function d(e, l, t) {
                return e || (!l && t ? "fixed" : void 0);
            }
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: l } = this.props;
                            r()(l || e, "Either onBackClick must be specified, or history should be supplied"), l ? l(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: l } = this.props;
                            l && l.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: l, centeredLogo: t, fixed: a, hideBackButton: r, isFullWidth: i, isLarge: u, leftControl: c, middleControl: m, position: g, rightControl: y, secondaryBar: p, style: k, subtitle: _, title: h, titleDomId: F, titleIconCell: f, titleIconCellSize: T, withBackground: K, withWideContainer: b } = this.props,
                        { isModal: w } = this.context,
                        R = r ? c : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        S = (function (e, l, t) {
                            return e && !(l && t);
                        })(!!K, w, !!p);
                    return n.createElement(n.Fragment, null, n.createElement(o.Z, { centerTitle: l, centeredLogo: t, isFullWidth: i, isLarge: u, leftControl: R, middleControl: m, position: d(g, w, a), rightControl: y, style: k, subtitle: _, title: h, titleDomId: F, titleIconCell: f, titleIconCellSize: T, withBackground: S, withWideContainer: b }), p || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: l } = this.context,
                        t = u.Z.getBackgroundStyles();
                    return l ? n.createElement(i.Z, { style: !!e && t }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = c.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        815753: (e, l, t) => {
            t.d(l, { Z: () => V });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "UncontrolledReportEntity_reportEntityResults",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "ReportEntityTweet_tweetResults" },
                    { args: null, kind: "FragmentSpread", name: "ReportEntityUser_userResults" },
                ],
                type: "ReportEntityResults",
                abstractKey: "__isReportEntityResults",
                hash: "9004c662349dd00b791d95621cc9c9f4",
            };
            const a = n;
            var r,
                i,
                s,
                o,
                u,
                c,
                d,
                m,
                g = t(202784),
                y = (t(585488), t(277660)),
                p = t.n(y),
                k = t(807896),
                _ = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "ReportEntityTweet_tweetResults",
                    selections: [
                        (r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
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
                                        r,
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "Tweet",
                                            kind: "LinkedField",
                                            name: "tweet",
                                            plural: !1,
                                            selections: [
                                                { alias: null, args: null, concreteType: "TweetCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), (s = { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }), { kind: "RequiredField", field: (o = { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }), action: "THROW", path: "result.tweet.core.user_results.result.legacy.protected" }, (u = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }), (c = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), { kind: "RequiredField", field: (d = { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }), action: "THROW", path: "result.tweet.core.user_results.result.legacy.verified" }], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null },
                                                (m = {
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
                                                }),
                                                { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                            ],
                                            storageKey: null,
                                        },
                                    ],
                                    type: "TweetWithVisibilityResults",
                                    abstractKey: null,
                                },
                                { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "TweetCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [i, s, { kind: "RequiredField", field: o, action: "THROW", path: "result.core.user_results.result.legacy.protected" }, u, c, { kind: "RequiredField", field: d, action: "THROW", path: "result.core.user_results.result.legacy.verified" }], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }, m], type: "Tweet", abstractKey: null },
                                { kind: "InlineFragment", selections: [r, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "tombstone", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "TimelineRichText", kind: "LinkedField", name: "text", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "RichText_timelineRichText" }], storageKey: null }], type: "TextTombstone", abstractKey: null }], storageKey: null }], type: "TweetTombstone", abstractKey: null },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "TweetResults",
                    abstractKey: null,
                };
            _.hash = "6ca7b30df98086509a3ad250e68ff073";
            const h = _;
            var F = t(325686),
                f = t(386802),
                T = t(995145),
                K = t(821966),
                b = t(54989),
                w = t(373926),
                R = t(823161),
                S = t(392237),
                x = t(674132),
                C = t.n(x),
                E = t(143778),
                v = t(323265),
                L = t(443781),
                Z = t(382779);
            const I = C().c9853de0,
                U = { display_text_range: [0, 24], favorite_count: 0, favorited: !1, id: 0, lang: "en", permalink: "", reply_count: 0, retweet_count: 0, retweeted: !1 },
                B = { created_at: "", default_profile: !1, default_profile_image: !1, fast_followers_count: 0, favourites_count: 0, follow_request_sent: !1, has_custom_timelines: !1, id: 0, listed_count: 0, location: "", media_count: 0, normal_followers_count: 0, notifications: !1, profile_banner_url: "", show_all_inline_media: !1, statuses_count: 0, time_zone: "", url: "", utc_offset: 0, withheld_in_countries: [], entities: {}, followed_by: !1, followers_count: 0, following: !1, friends_count: 0, id_str: "0", is_translator: !1, translator_type: "none", withheld_scope: "" },
                D = ({ removeTweetContent: e, tweet_results: l }) => {
                    const t = p()(h, l),
                        { isModal: n } = g.useContext(f.Z),
                        { featureSwitches: a } = g.useContext(L.rC),
                        r = a.isTrue("sc_r4_enabled"),
                        i = t?.result?.__typename,
                        s = "TweetWithVisibilityResults" === i ? t.result?.tweet : t.result,
                        o = s?.legacy?.full_text,
                        u = v.ZP.isTwitterApp(),
                        c = g.useCallback((e) => g.createElement(T.Z.UserAvatar, (0, k.Z)({}, e, { withHoverCard: !u, withLink: !u })), [u]),
                        d = g.useCallback(() => (e ? null : g.createElement(K.Z, { label: I, render: (e) => g.createElement(b.Z, (0, k.Z)({}, e, { style: H.disclosure })) }, o || "")), [o, e]);
                    if ("TweetTombstone" === i) {
                        const e = t.result?.tombstone?.text;
                        if (e) return g.createElement(F.Z, { style: n && H.wideScreen }, g.createElement(w.Z, { withFooterGap: !1, withHeader: !1, withHorizontalPadding: !1 }, g.createElement(Z.H, { timelineRichText: e })));
                    }
                    return ((l) => {
                        if (l?.core?.user_results.result?.legacy && l.legacy) {
                            const t = l.core.user_results.result.legacy,
                                a = { richText: { text: "abc", entities: [] }, richRevealText: { rtl: !1, text: "View", entities: [] }, text: "abc" },
                                i = { tweet: { ...U, id_str: l.legacy.id_str || "", created_at: l.legacy.created_at || "", text: e ? "" : l.legacy.full_text || "", tombstoneInfo: a, user: { ...B, description: t.description || "", profile_image_url_https: t.profile_image_url_https || "", protected: t.protected || !1, screen_name: t.screen_name || "", name: t.name || "", verified: t.verified || !1 } } };
                            return g.createElement(F.Z, { style: [H.tweet, n && H.wideScreen] }, r ? g.createElement(T.Z, (0, k.Z)({}, i, { renderActionsBar: E.Z, renderTimestamp: E.Z, renderTombstone: d, renderUserAvatar: E.Z, renderUserName: (e) => g.createElement(F.Z, { style: H.avatarContainer }, g.createElement(R.default, { screenName: i.tweet.user.screen_name, size: "small", uri: i.tweet.user.profile_image_url_https }), g.createElement(T.Z.UserName, e)), staticLinkConfig: null })) : g.createElement(T.Z, (0, k.Z)({}, i, { renderActionsBar: E.Z, renderTimestamp: (e) => g.createElement(T.Z.Timestamp, (0, k.Z)({}, e, { link: void 0 })), renderTombstone: d, renderUserAvatar: c, staticLinkConfig: null })));
                        }
                        return null;
                    })(s);
                },
                W = g.memo(D),
                H = S.default.create((e) => ({ disclosure: { border: "none", marginVertical: e.spaces.space8 }, tweet: { borderWidth: e.borderWidths.small, borderColor: e.colors.gray100, borderStyle: "solid", borderRadius: e.borderRadii.xLarge }, wideScreen: { marginHorizontal: e.spaces.space32 }, avatarContainer: { flexDirection: "row", display: "flex", alignItems: "center", gap: 8, width: "100%" } }));
            var A = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "ReportEntityUser_userResults",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
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
                                        args: null,
                                        concreteType: "ApiUser",
                                        kind: "LinkedField",
                                        name: "legacy",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                            { alias: "idStr", args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
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
                type: "UserResults",
                abstractKey: null,
                hash: "fd6bd3ce65fc643c13eaf27668e8d085",
            };
            const q = A;
            var z = t(673510);
            const O = C().a23e724a,
                P = [],
                M = ({ userResults: e }) => {
                    const { featureSwitches: l } = g.useContext(L.rC),
                        t = l.isTrue("report_center_mvp_r2_enabled"),
                        n = p()(q, e),
                        { isModal: a } = g.useContext(f.Z),
                        r = n?.result?.legacy,
                        i = r?.idStr || "",
                        s = r?.name || "",
                        o = r?.profile_image_url_https || "",
                        u = r?.screen_name || "";
                    return i ? g.createElement(F.Z, { style: [N.userCellContainer, a && N.wideScreen] }, g.createElement(z.ZP, { avatarUri: o, displayMode: "UserDetailed", entities: {}, name: s, screenName: u, userId: i })) : t ? g.createElement(w.Z, { indents: P }, O) : null;
                },
                N = S.default.create((e) => ({ userCellContainer: { borderWidth: e.borderWidths.small, borderColor: e.colors.gray100, borderStyle: "solid", borderRadius: e.borderRadii.xLarge }, wideScreen: { marginHorizontal: e.spaces.space32 } })),
                V = ({ removeTweetContent: e, report_entity_results: l }) => {
                    const t = p()(a, l);
                    switch (t.__typename) {
                        case "TweetResults":
                            return g.createElement(W, { removeTweetContent: e, tweet_results: t });
                        case "UserResults":
                            return g.createElement(M, { userResults: t });
                        default:
                            return null;
                    }
                };
        },
        430759: (e, l, t) => {
            t.d(l, { Z: () => m });
            var n = { argumentDefinitions: [], kind: "Fragment", metadata: { plural: !0 }, name: "ReportEntityList_reportEntityResults", selections: [{ args: null, kind: "FragmentSpread", name: "UncontrolledReportEntity_reportEntityResults" }], type: "ReportEntityResults", abstractKey: "__isReportEntityResults", hash: "1a7e911003850331afd76cdc59ccccb6" };
            const a = n;
            var r = t(202784),
                i = t(325686),
                s = (t(585488), t(277660)),
                o = t.n(s),
                u = t(174326),
                c = t(392237),
                d = t(815753);
            const m = ({ carousel: e, report: l }) => {
                    const t = o()(a, l).map((e, l) => r.createElement(d.Z, { key: l, report_entity_results: e }));
                    return e && 1 !== t.length ? r.createElement(u.Z, { childrenStyle: g.carouselEntity, style: g.root }, t) : r.createElement(i.Z, { style: [g.root, g.simpleList] }, t);
                },
                g = c.default.create((e) => ({ root: { marginTop: e.spaces.space20 }, simpleList: { flexDirection: "column", gap: e.spaces.space8 }, carouselEntity: { maxWidth: "320px", width: "85%", marginEnd: e.spaces.space16 } }));
        },
        900664: (e, l, t) => {
            t.d(l, { Z: () => a });
            var n = (e) => {
                "vibrate" in window.navigator && window.navigator.vibrate(e);
            };
            const a = {
                cancel() {
                    n(0);
                },
                vibrate(e) {
                    void 0 === e && (e = 400), n(e);
                },
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReportCenter~bundle.SafetyCenter-e96e9bea.8fe7487a.js.map
