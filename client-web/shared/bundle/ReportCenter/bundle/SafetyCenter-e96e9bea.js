"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReportCenter~bundle.SafetyCenter-e96e9bea"],
    {
        704979: (e, l, n) => {
            n.d(l, { Z: () => c });
            var t,
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
                                                                (t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                                { kind: "InlineFragment", selections: (r = [(a = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null })]), type: "TimelineRichTextCashtag", abstractKey: null },
                                                                { kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), (s = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null })], type: "TimelineRichTextList", abstractKey: null },
                                                                { kind: "InlineFragment", selections: r, type: "TimelineRichTextHashtag", abstractKey: null },
                                                                { kind: "InlineFragment", selections: [(o = { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null })], type: "TimelineRichTextUser", abstractKey: null },
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
        625661: (e, l, n) => {
            n.d(l, { ZP: () => m });
            var t = n(202784),
                a = n(614983),
                r = n.n(a),
                i = n(325686),
                s = n(370006),
                o = n(786998),
                u = n(929028),
                c = n(386802);
            function d(e, l, n) {
                return e || (!l && n ? "fixed" : void 0);
            }
            class m extends t.Component {
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
                    const { backButtonType: e, centerTitle: l, centeredLogo: n, fixed: a, hideBackButton: r, isFullWidth: i, isLarge: u, leftControl: c, middleControl: m, position: g, rightControl: y, secondaryBar: p, style: k, subtitle: _, title: h, titleDomId: F, titleIconCell: T, titleIconCellSize: f, withBackground: K, withWideContainer: b } = this.props,
                        { isModal: w } = this.context,
                        S = r ? c : t.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        R = (function (e, l, n) {
                            return e && !(l && n);
                        })(!!K, w, !!p);
                    return t.createElement(t.Fragment, null, t.createElement(o.Z, { centerTitle: l, centeredLogo: n, isFullWidth: i, isLarge: u, leftControl: S, middleControl: m, position: d(g, w, a), rightControl: y, style: k, subtitle: _, title: h, titleDomId: F, titleIconCell: T, titleIconCellSize: f, withBackground: R, withWideContainer: b }), p || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: l } = this.context,
                        n = u.Z.getBackgroundStyles();
                    return l ? t.createElement(i.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = c.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        815753: (e, l, n) => {
            n.d(l, { Z: () => H });
            var t = {
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
            const a = t;
            var r,
                i,
                s,
                o = n(202784),
                u = (n(585488), n(277660)),
                c = n.n(u),
                d = n(807896),
                m = {
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
                                                (i = {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "TweetCore",
                                                    kind: "LinkedField",
                                                    name: "core",
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
                                                                                { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                                                {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: "ApiUser",
                                                                                    kind: "LinkedField",
                                                                                    name: "legacy",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                },
                                                                                { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                                                                                { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null },
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
                                                    storageKey: null,
                                                }),
                                                (s = {
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
                                { kind: "InlineFragment", selections: [i, s], type: "Tweet", abstractKey: null },
                                { kind: "InlineFragment", selections: [r, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "tombstone", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "TimelineRichText", kind: "LinkedField", name: "text", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "RichText_timelineRichText" }], storageKey: null }], type: "TextTombstone", abstractKey: null }], storageKey: null }], type: "TweetTombstone", abstractKey: null },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "TweetResults",
                    abstractKey: null,
                };
            m.hash = "6d52a5cf96c0121deafe315cb9ec8693";
            const g = m;
            var y = n(325686),
                p = n(386802),
                k = n(995145),
                _ = n(821966),
                h = n(54989),
                F = n(373926),
                T = n(823161),
                f = n(392237),
                K = n(332920),
                b = n.n(K),
                w = n(143778),
                S = n(323265),
                R = n(443781),
                x = n(382779);
            const C = b().c9853de0,
                v = { display_text_range: [0, 24], favorite_count: 0, favorited: !1, id: 0, lang: "en", permalink: "", reply_count: 0, retweet_count: 0, retweeted: !1 },
                E = { created_at: "", default_profile: !1, default_profile_image: !1, fast_followers_count: 0, favourites_count: 0, follow_request_sent: !1, has_custom_timelines: !1, id: 0, listed_count: 0, location: "", media_count: 0, normal_followers_count: 0, notifications: !1, profile_banner_url: "", show_all_inline_media: !1, statuses_count: 0, time_zone: "", url: "", utc_offset: 0, withheld_in_countries: [], entities: {}, followed_by: !1, followers_count: 0, following: !1, friends_count: 0, id_str: "0", is_translator: !1, translator_type: "none", withheld_scope: "" },
                L = ({ removeTweetContent: e, tweet_results: l }) => {
                    const n = c()(g, l),
                        { isModal: t } = o.useContext(p.Z),
                        { featureSwitches: a } = o.useContext(R.rC),
                        r = a.isTrue("sc_r4_enabled"),
                        i = n?.result?.__typename,
                        s = "TweetWithVisibilityResults" === i ? n.result?.tweet : n.result,
                        u = s?.legacy?.full_text,
                        m = S.ZP.isTwitterApp(),
                        f = o.useCallback((e) => o.createElement(k.Z.UserAvatar, (0, d.Z)({}, e, { withHoverCard: !m, withLink: !m })), [m]),
                        K = o.useCallback(() => (e ? null : o.createElement(_.Z, { label: C, render: (e) => o.createElement(h.Z, (0, d.Z)({}, e, { style: U.disclosure })) }, u || "")), [u, e]);
                    if ("TweetTombstone" === i) {
                        const e = n.result?.tombstone?.text;
                        if (e) return o.createElement(y.Z, { style: t && U.wideScreen }, o.createElement(F.Z, { withFooterGap: !1, withHeader: !1, withHorizontalPadding: !1 }, o.createElement(x.H, { timelineRichText: e })));
                    }
                    return ((l) => {
                        if (l?.core?.user_results.result?.legacy && l.legacy) {
                            const n = l.core.user_results.result.legacy,
                                { avatar: a, privacy: i, verification: s } = l.core.user_results.result,
                                u = { richText: { text: "abc", entities: [] }, richRevealText: { rtl: !1, text: "View", entities: [] }, text: "abc" },
                                c = { tweet: { ...v, id_str: l.legacy.id_str || "", created_at: l.legacy.created_at || "", text: e ? "" : l.legacy.full_text || "", tombstoneInfo: u, user: { ...E, description: n.description || "", profile_image_url_https: a?.image_url || "", protected: i?.protected || !1, screen_name: n.screen_name || "", name: n.name || "", verified: s?.verified || !1 } } };
                            return o.createElement(y.Z, { style: [U.tweet, t && U.wideScreen] }, r ? o.createElement(k.Z, (0, d.Z)({}, c, { renderActionsBar: w.Z, renderTimestamp: w.Z, renderTombstone: K, renderUserAvatar: w.Z, renderUserName: (e) => o.createElement(y.Z, { style: U.avatarContainer }, o.createElement(T.default, { screenName: c.tweet.user.screen_name, size: "small", uri: c.tweet.user.profile_image_url_https }), o.createElement(k.Z.UserName, e)), staticLinkConfig: null })) : o.createElement(k.Z, (0, d.Z)({}, c, { renderActionsBar: w.Z, renderTimestamp: (e) => o.createElement(k.Z.Timestamp, (0, d.Z)({}, e, { link: void 0 })), renderTombstone: K, renderUserAvatar: f, staticLinkConfig: null })));
                        }
                        return null;
                    })(s);
                },
                Z = o.memo(L),
                U = f.default.create((e) => ({ disclosure: { border: "none", marginVertical: e.spaces.space8 }, tweet: { borderWidth: e.borderWidths.small, borderColor: e.colors.gray100, borderStyle: "solid", borderRadius: e.borderRadii.xLarge }, wideScreen: { marginHorizontal: e.spaces.space32 }, avatarContainer: { flexDirection: "row", display: "flex", alignItems: "center", gap: 8, width: "100%" } }));
            var I = {
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
                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
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
                hash: "622c0ecc3d4028f1ff99c10cd60fcc94",
            };
            const B = I;
            var D = n(673510);
            const W = b().a23e724a,
                A = [],
                P = ({ userResults: e }) => {
                    const { featureSwitches: l } = o.useContext(R.rC),
                        n = l.isTrue("report_center_mvp_r2_enabled"),
                        t = c()(B, e),
                        { isModal: a } = o.useContext(p.Z),
                        r = t?.result?.legacy,
                        i = r?.idStr || "",
                        s = r?.name || "",
                        u = t?.result?.avatar?.image_url || "",
                        d = r?.screen_name || "";
                    return i ? o.createElement(y.Z, { style: [z.userCellContainer, a && z.wideScreen] }, o.createElement(D.ZP, { avatarUri: u, displayMode: "UserDetailed", entities: {}, name: s, screenName: d, userId: i })) : n ? o.createElement(F.Z, { indents: A }, W) : null;
                },
                z = f.default.create((e) => ({ userCellContainer: { borderWidth: e.borderWidths.small, borderColor: e.colors.gray100, borderStyle: "solid", borderRadius: e.borderRadii.xLarge }, wideScreen: { marginHorizontal: e.spaces.space32 } })),
                H = ({ removeTweetContent: e, report_entity_results: l }) => {
                    const n = c()(a, l);
                    switch (n.__typename) {
                        case "TweetResults":
                            return o.createElement(Z, { removeTweetContent: e, tweet_results: n });
                        case "UserResults":
                            return o.createElement(P, { userResults: n });
                        default:
                            return null;
                    }
                };
        },
        430759: (e, l, n) => {
            n.d(l, { Z: () => m });
            var t = { argumentDefinitions: [], kind: "Fragment", metadata: { plural: !0 }, name: "ReportEntityList_reportEntityResults", selections: [{ args: null, kind: "FragmentSpread", name: "UncontrolledReportEntity_reportEntityResults" }], type: "ReportEntityResults", abstractKey: "__isReportEntityResults", hash: "1a7e911003850331afd76cdc59ccccb6" };
            const a = t;
            var r = n(202784),
                i = n(325686),
                s = (n(585488), n(277660)),
                o = n.n(s),
                u = n(174326),
                c = n(392237),
                d = n(815753);
            const m = ({ carousel: e, report: l }) => {
                    const n = o()(a, l).map((e, l) => r.createElement(d.Z, { key: l, report_entity_results: e }));
                    return e && 1 !== n.length ? r.createElement(u.Z, { childrenStyle: g.carouselEntity, style: g.root }, n) : r.createElement(i.Z, { style: [g.root, g.simpleList] }, n);
                },
                g = c.default.create((e) => ({ root: { marginTop: e.spaces.space20 }, simpleList: { flexDirection: "column", gap: e.spaces.space8 }, carouselEntity: { maxWidth: "320px", width: "85%", marginEnd: e.spaces.space16 } }));
        },
        900664: (e, l, n) => {
            n.d(l, { Z: () => a });
            var t = (e) => {
                "vibrate" in window.navigator && window.navigator.vibrate(e);
            };
            const a = {
                cancel() {
                    t(0);
                },
                vibrate(e) {
                    void 0 === e && (e = 400), t(e);
                },
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReportCenter~bundle.SafetyCenter-e96e9bea.e64cda1a.js.map
