"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Articles-6107ac1a"],
    {
        195382: (e, t, n) => {
            n.d(t, { Z: () => d });
            var l,
                a,
                i,
                s,
                r,
                o,
                c = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "articleEntityId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "ArticleRedirectScreenQuery",
                        selections: [
                            {
                                alias: null,
                                args: (a = [
                                    { kind: "Variable", name: "rest_id", variableName: "articleEntityId" },
                                    { kind: "Literal", name: "s", value: "4c07" },
                                ]),
                                concreteType: "ArticleEntityResults",
                                kind: "LinkedField",
                                name: "article_result_by_rest_id",
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
                                                        args: null,
                                                        concreteType: "ArticleEntityMetadata",
                                                        kind: "LinkedField",
                                                        name: "metadata",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_results", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], storageKey: null },
                                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "author_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(s = { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                type: "ArticleEntity",
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
                        argumentDefinitions: l,
                        kind: "Operation",
                        name: "ArticleRedirectScreenQuery",
                        selections: [
                            {
                                alias: null,
                                args: a,
                                concreteType: "ArticleEntityResults",
                                kind: "LinkedField",
                                name: "article_result_by_rest_id",
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
                                            (r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ArticleEntityMetadata",
                                                        kind: "LinkedField",
                                                        name: "metadata",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_results", plural: !1, selections: [i, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "author_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [s, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, o], type: "User", abstractKey: null }], storageKey: null }, o], storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    o,
                                                ],
                                                type: "ArticleEntity",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    o,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "X6ZxrOo0zyipREm6CNVKjg", metadata: {}, name: "ArticleRedirectScreenQuery", operationKind: "query", text: null },
                };
            c.hash = "cc8472864d0601af4b7e2f9a39aa4c8f";
            const d = c;
        },
        897455: (e, t, n) => {
            n.d(t, { Z: () => o });
            var l,
                a,
                i = n(311405),
                s = n(794357),
                r = {
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
                                { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "TimelineTimelineEntry", kind: "LinkedField", name: "entries", plural: !0, selections: (l = [{ args: null, fragment: i.Z, kind: "FragmentSpread" }]), storageKey: null }], type: "TimelineAddEntries", abstractKey: null },
                                { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "entry_id_to_replace", storageKey: null }, (a = { alias: null, args: null, concreteType: "TimelineTimelineEntry", kind: "LinkedField", name: "entry", plural: !1, selections: l, storageKey: null })], type: "TimelineReplaceEntry", abstractKey: null },
                                { kind: "InlineFragment", selections: [a], type: "TimelinePinEntry", abstractKey: null },
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
                                                { alias: null, args: null, concreteType: "TimelineTimelineItem", kind: "LinkedField", name: "item", plural: !1, selections: [{ args: null, fragment: s.Z, kind: "FragmentSpread" }], storageKey: null },
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
            r.hash = "7d0f17590e1c09ad3ae57e9a9d7fabd6";
            const o = r;
        },
        66351: (e, t, n) => {
            n.d(t, { Z: () => b });
            var l,
                a,
                i,
                s,
                r,
                o,
                c,
                d,
                u,
                m,
                p,
                g,
                _,
                y = n(897455),
                h = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "count" }), (a = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (i = { defaultValue: !1, kind: "LocalArgument", name: "includePromotedContent" }), (s = { defaultValue: null, kind: "LocalArgument", name: "isListMemberTargetUserId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "timelineId" }), (o = { defaultValue: !1, kind: "LocalArgument", name: "withBirdwatchNotes" }), (c = { defaultValue: !1, kind: "LocalArgument", name: "withClientEventToken" }), (d = { defaultValue: !1, kind: "LocalArgument", name: "withCommunity" }), (u = { defaultValue: !1, kind: "LocalArgument", name: "withDmMuting" }), (m = { defaultValue: !1, kind: "LocalArgument", name: "withQuickPromoteEligibilityTweetFields" }), (p = { defaultValue: !1, kind: "LocalArgument", name: "withVoice" })],
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
                                                args: (_ = [
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
                        argumentDefinitions: [l, a, i, r, o, u, c, p, s, d, m],
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
                                            { alias: null, args: _, concreteType: "TimelineTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ args: null, fragment: y.Z, kind: "FragmentSpread" }], storageKey: null },
                                            { alias: null, args: _, filters: null, handle: "timeline", key: "", kind: "LinkedHandle", name: "timeline", handleArgs: [{ kind: "Variable", name: "timelineId", variableName: "timelineId" }] },
                                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"0c09")',
                            },
                        ],
                    },
                    params: { id: "o7Ie-8fvnTo08OgS8gS3tw", metadata: { features: ["articles_preview_enabled", "c9s_tweet_anatomy_moderator_badge_enabled", "communities_web_enable_tweet_community_results_fetch", "creator_subscriptions_quote_tweet_preview_enabled", "creator_subscriptions_tweet_preview_api_enabled", "freedom_of_speech_not_reach_fetch_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "longform_notetweets_consumption_enabled", "longform_notetweets_inline_media_enabled", "longform_notetweets_rich_text_read_enabled", "premium_content_api_read_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "responsive_web_edit_tweet_api_enabled", "responsive_web_enhance_cards_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_grok_analysis_button_from_backend", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_grok_share_attachment_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_jetfuel_frame", "responsive_web_twitter_article_tweet_consumption_enabled", "rweb_tipjar_consumption_enabled", "rweb_video_screen_enabled", "standardized_nudges_misinfo", "tweet_awards_web_tipping_enabled", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "verified_phone_label_enabled", "view_counts_everywhere_api_enabled"] }, name: "managementListsPageTimelineQuery", operationKind: "query", text: null },
                };
            h.hash = "5b66468936446aae49ccfb5965fb93f4";
            const b = h;
        },
        425376: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var l = n(202784),
                a = n(325686),
                i = n(494394),
                s = n(530525),
                r = n(731708),
                o = n(439592),
                c = n(154003),
                d = n(769281),
                u = n(30899),
                m = n(138099),
                p = n(392237);
            const g = p.default.create((e) => ({ root: { paddingVertical: e.spacesPx.space32 }, rootWithImage: { paddingTop: 0 }, graphic: { marginBottom: e.spacesPx.space20 }, icon: { alignSelf: "center", height: e.spacesPx.space64, width: e.spacesPx.space64 }, container: { paddingHorizontal: e.spacesPx.space32 }, description: { marginTop: e.spacesPx.space8, marginBottom: e.spacesPx.space4 }, actionButton: { marginTop: e.spacesPx.space16 } })),
                _ = ({ actionPrimary: e, actionSecondary: t, children: n, headline: _, icon: y, iconColor: h, image: b, onDismiss: k, shouldDisplay: f, text: w, withMask: v = !0 }) => {
                    const [T, x] = l.useState(!1),
                        L = (e) => l.createElement(u.Z, { onDismiss: R, renderContent: () => F(R), switchOnlyOnXSmallBreakpoint: !0, visibilityBehavior: i.J.forceVisible, withArrow: !0, withFixedPosition: !0, withMask: v }, e),
                        C = () => l.createElement(m.Z, { onMaskClick: () => R(), type: "center", withMask: !0 }, F(R)),
                        F = (n) => l.createElement(a.Z, { style: [g.root, b && g.rootWithImage] }, S(), l.createElement(a.Z, { style: g.container }, Z(), K(), E({ action: e, dismiss: n, type: t && "primaryFilled" }), E({ action: t, dismiss: n }))),
                        S = () => {
                            let e = y && l.createElement(y, { style: h ? [g.icon, { color: p.default.theme.colors[h] }] : g.icon });
                            return b && !d.Z.isEnabled && (e = l.createElement(s.Z, { "aria-label": "", aspectMode: o.Z.exact(2), image: b })), e && l.createElement(a.Z, { style: g.graphic }, e);
                        },
                        Z = () => l.createElement(r.ZP, { size: "title3", weight: "heavy" }, _),
                        K = () => l.createElement(r.ZP, { color: "gray700", style: g.description }, w),
                        E = ({ action: e, dismiss: t, type: n }) => e && l.createElement(c.ZP, { link: e.link && e.link, onPress: e.onClick ? e.onClick : t, size: "large", style: g.actionButton, type: n }, e.text),
                        R = () => {
                            k && k(), x(!0);
                        };
                    return f && !T ? (n ? L(n) : C()) : n || null;
                };
        },
        664064: (e, t, n) => {
            n.d(t, { Z: () => c });
            var l = n(807896),
                a = n(202784),
                i = n(523561);
            const s = a.forwardRef(r);
            function r(e, t) {
                return a.createElement(o, (0, l.Z)({}, e, { ref: t }));
            }
            const o = (0, i.Z)({
                    loader: () =>
                        Promise.all([n.e("loader.Confetti-6107ac1a"), n.e("loader.Confetti-d728816b"), n.e("loader.Confetti-229eafb5"), n.e("loader.Confetti-5ccade72")])
                            .then(n.bind(n, 620151))
                            .then((e) => ({ default: e.Confetti })),
                }),
                c = s;
        },
        661810: (e, t, n) => {
            n.d(t, { Z: () => s });
            var l = n(202784),
                a = n(325686),
                i = n(392237);
            function s({ spacing: e, style: t }) {
                return l.createElement(a.Z, { role: "separator", style: [r.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const r = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => p });
            var l = n(202784),
                a = n(476984),
                i = n.n(a),
                s = n(143778),
                r = n(750410),
                o = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class p extends l.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: a, icon: i, loadingMessage: s, onRequestRetry: d, render: p, renderFailure: g, retryMessage: _, retryable: y } = this.props;
                    switch (a) {
                        case c:
                            return y ? l.createElement(r.Z, { icon: i, onRequestRetry: d, retryMessage: _ }) : n ? l.createElement(o.m, { failureMessage: n }) : g();
                        case u:
                            return l.createElement(o.J, { "aria-label": e, color: t, loadingMessage: s });
                        case m:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => L });
            var l = n(807896),
                a = n(202784),
                i = n(194504),
                s = n(235902),
                r = n(392237),
                o = n(325686),
                c = n(674132),
                d = n.n(c),
                u = n(912021),
                m = n(516951),
                p = n(731708),
                g = n(310088),
                _ = n(175993),
                y = n(58881),
                h = n(530732);
            const b = d().d2414d31,
                k = () => d().ce4e85ae,
                f = d().fb9f6f39;
            class w extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: n, query: l, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: l, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = m.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, l) => {
                            const a = r.default.theme.colors.text,
                                i = r.default.theme.colors.gray700;
                            return n || l ? (e || t ? a : i) : e ? a : i;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: l, children: i, color: s, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: m, isWebRedesign: _, retainScrollPosition: w, style: T, to: x } = this.props,
                        { location: L } = this.state,
                        C = x ? this._getMemoizedLink(x, w) : void 0,
                        F = c ? c(x) : L?.pathname === C?.pathname,
                        S = y.Z.generate({ backgroundColor: "transparent", color: r.default.theme.colors.text, insetFocusRing: !0 }),
                        Z = _ ? "medium" : F ? "bold" : "medium";
                    return a.createElement(h.Z, { "aria-label": t, "aria-selected": F, focusable: !!F, interactiveStyles: S, link: C, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? v.pill : v.link, u && F ? v.active : null, d ? (u ? v.compactPill : v.compactLink) : null, m ? v.roundedRect : null, T], withoutInteractiveStyles: _ || u }, ({ isFocused: t, isHovered: c }) => a.createElement(o.Z, { style: u && v.flexGrow }, a.createElement(p.ZP, { size: _ ? "headline2" : void 0, style: [v.text, { color: this._getTextColor(F, c, _, u) }, d && v.compactText, _ && t && v.focusedText], weight: Z }, e && a.createElement(e, { style: v.icon }), i, _ || u ? null : a.createElement(o.Z, { style: F && [v.border, { backgroundColor: r.default.theme.colors[s] }] })), n ? a.createElement(g.Z, { count: n, standalone: !0, style: [v.badge, n >= 10 && v.multiDigitBadge, n >= 20 && v.truncatedCountBadge], truncatedCountFormatter: f, unreadCountLabel: b, withBorder: !1 }) : l ? a.createElement(g.Z, { pip: !0, standalone: !0, style: v.badgePip, textColor: "red500", unreadCountLabel: k, withBorder: !1 }) : null));
                }
            }
            (w.contextType = _.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const v = r.default.create((e) => ({
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
                T = w,
                x = r.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                L = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: r, isRoundedRect: o, links: c, style: d, visibleItemIndex: u }) => {
                    const m = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: p } = s.ZP.useProps(),
                        g = p() && !r,
                        _ = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...s }, c) => {
                                    const d = g ? [x.linkRedesign, 0 === c && x.firstLinkRedesign, e && 0 === c && x.withNoPaddingStart] : void 0;
                                    return a.createElement(T, (0, l.Z)({ viewType: i }, s, { isCompact: n, isPillLink: r, isRoundedRect: o, isWebRedesign: g, style: d }), t);
                                }),
                            [e, n, r, o, g, c],
                        );
                    return a.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: r && x.gap, childrenStyle: !g && x.flexGrow, key: m, style: [r ? null : x.segmentedControl, g && x.leftAligned, d], visibleItemIndex: u }, _);
                };
        },
        620522: (e, t, n) => {
            n.d(t, { Z: () => l });
            const l = n(202784).createContext({ refsMap: {} });
        },
        609980: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var l = n(202784),
                a = n(890601),
                i = n(783427),
                s = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const o = r;
        },
        820803: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var l = n(202784),
                a = n(890601),
                i = n(783427),
                s = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M15 10H9V8h6v2zm-2 4H9v-2h4v2zm-.847 8.99c4.215-.652 8.988-5.523 9.097-11.469l-2-.037c-.083 4.574-3.395 8.102-6.25 9.211v-2.292l-1.786-.191C7.528 17.815 4.75 14.714 4.75 11c0-3.998 3.252-7.25 7.25-7.25v-2c-5.101 0-9.25 4.149-9.25 9.25 0 4.738 3.546 8.693 8.25 9.2v2.969l1.153-.179zm4.39-16.95l1.414 1.42L20 5.41l2.043 2.05 1.414-1.42L21.414 4l2.043-2.04L22.043.54 20 2.59 17.957.54l-1.414 1.42L18.586 4l-2.043 2.04z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const o = r;
        },
        490359: (e, t, n) => {
            n.d(t, { Z: () => l });
            const l = (e) => (Array.isArray(e) ? e[0] : void 0);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Articles-6107ac1a.3859b86a.js.map
