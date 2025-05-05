"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Articles-6107ac1a"],
    {
        195382: (e, n, t) => {
            t.d(n, { Z: () => d });
            var a,
                l,
                i,
                s,
                r,
                o,
                c = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "articleEntityId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "ArticleRedirectScreenQuery",
                        selections: [
                            {
                                alias: null,
                                args: (l = [
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
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "ArticleRedirectScreenQuery",
                        selections: [
                            {
                                alias: null,
                                args: l,
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
        897455: (e, n, t) => {
            t.d(n, { Z: () => o });
            var a,
                l,
                i = t(311405),
                s = t(794357),
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
        66351: (e, n, t) => {
            t.d(n, { Z: () => k });
            var a,
                l,
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
                y = t(897455),
                b = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "count" }), (l = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (i = { defaultValue: !1, kind: "LocalArgument", name: "includePromotedContent" }), (s = { defaultValue: null, kind: "LocalArgument", name: "isListMemberTargetUserId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "timelineId" }), (o = { defaultValue: !1, kind: "LocalArgument", name: "withBirdwatchNotes" }), (c = { defaultValue: !1, kind: "LocalArgument", name: "withClientEventToken" }), (d = { defaultValue: !1, kind: "LocalArgument", name: "withCommunity" }), (u = { defaultValue: !1, kind: "LocalArgument", name: "withDmMuting" }), (m = { defaultValue: !1, kind: "LocalArgument", name: "withQuickPromoteEligibilityTweetFields" }), (p = { defaultValue: !1, kind: "LocalArgument", name: "withVoice" })],
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
                        argumentDefinitions: [a, l, i, r, o, u, c, p, s, d, m],
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
                    params: { id: "ZmLrrToilEeH8pjsNWXhxg", metadata: { features: ["articles_preview_enabled", "c9s_tweet_anatomy_moderator_badge_enabled", "communities_web_enable_tweet_community_results_fetch", "creator_subscriptions_quote_tweet_preview_enabled", "creator_subscriptions_tweet_preview_api_enabled", "freedom_of_speech_not_reach_fetch_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "longform_notetweets_consumption_enabled", "longform_notetweets_inline_media_enabled", "longform_notetweets_rich_text_read_enabled", "premium_content_api_read_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "responsive_web_edit_tweet_api_enabled", "responsive_web_enhance_cards_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_grok_analysis_button_from_backend", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_grok_share_attachment_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_jetfuel_frame", "responsive_web_twitter_article_tweet_consumption_enabled", "rweb_tipjar_consumption_enabled", "rweb_video_screen_enabled", "standardized_nudges_misinfo", "tweet_awards_web_tipping_enabled", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "verified_phone_label_enabled", "view_counts_everywhere_api_enabled"] }, name: "managementListsPageTimelineQuery", operationKind: "query", text: null },
                };
            b.hash = "5b66468936446aae49ccfb5965fb93f4";
            const k = b;
        },
        425376: (e, n, t) => {
            t.d(n, { Z: () => _ });
            var a = t(202784),
                l = t(325686),
                i = t(494394),
                s = t(530525),
                r = t(731708),
                o = t(439592),
                c = t(154003),
                d = t(769281),
                u = t(30899),
                m = t(138099),
                p = t(392237);
            const g = p.default.create((e) => ({ root: { paddingVertical: e.spacesPx.space32 }, rootWithImage: { paddingTop: 0 }, graphic: { marginBottom: e.spacesPx.space20 }, icon: { alignSelf: "center", height: e.spacesPx.space64, width: e.spacesPx.space64 }, container: { paddingHorizontal: e.spacesPx.space32 }, description: { marginTop: e.spacesPx.space8, marginBottom: e.spacesPx.space4 }, actionButton: { marginTop: e.spacesPx.space16 } })),
                _ = ({ actionPrimary: e, actionSecondary: n, children: t, headline: _, icon: y, iconColor: b, image: k, onDismiss: h, shouldDisplay: f, text: w, withMask: v = !0 }) => {
                    const [T, x] = a.useState(!1),
                        F = (e) => a.createElement(u.Z, { onDismiss: E, renderContent: () => C(E), switchOnlyOnXSmallBreakpoint: !0, visibilityBehavior: i.J.forceVisible, withArrow: !0, withFixedPosition: !0, withMask: v }, e),
                        L = () => a.createElement(m.Z, { onMaskClick: () => E(), type: "center", withMask: !0 }, C(E)),
                        C = (t) => a.createElement(l.Z, { style: [g.root, k && g.rootWithImage] }, K(), a.createElement(l.Z, { style: g.container }, S(), R(), Z({ action: e, dismiss: t, type: n && "primaryFilled" }), Z({ action: n, dismiss: t }))),
                        K = () => {
                            let e = y && a.createElement(y, { style: b ? [g.icon, { color: p.default.theme.colors[b] }] : g.icon });
                            return k && !d.Z.isEnabled && (e = a.createElement(s.Z, { "aria-label": "", aspectMode: o.Z.exact(2), image: k })), e && a.createElement(l.Z, { style: g.graphic }, e);
                        },
                        S = () => a.createElement(r.ZP, { size: "title3", weight: "heavy" }, _),
                        R = () => a.createElement(r.ZP, { color: "gray700", style: g.description }, w),
                        Z = ({ action: e, dismiss: n, type: t }) => e && a.createElement(c.ZP, { link: e.link && e.link, onPress: e.onClick ? e.onClick : n, size: "large", style: g.actionButton, type: t }, e.text),
                        E = () => {
                            h && h(), x(!0);
                        };
                    return f && !T ? (t ? F(t) : L()) : t || null;
                };
        },
        664064: (e, n, t) => {
            t.d(n, { Z: () => c });
            var a = t(807896),
                l = t(202784),
                i = t(523561);
            const s = l.forwardRef(r);
            function r(e, n) {
                return l.createElement(o, (0, a.Z)({}, e, { ref: n }));
            }
            const o = (0, i.Z)({
                    loader: () =>
                        Promise.all([t.e("loader.Confetti-6107ac1a"), t.e("loader.Confetti-d728816b"), t.e("loader.Confetti-229eafb5"), t.e("loader.Confetti-5ccade72")])
                            .then(t.bind(t, 620151))
                            .then((e) => ({ default: e.Confetti })),
                }),
                c = s;
        },
        661810: (e, n, t) => {
            t.d(n, { Z: () => s });
            var a = t(202784),
                l = t(325686),
                i = t(392237);
            function s({ spacing: e, style: n }) {
                return a.createElement(l.Z, { role: "separator", style: [r.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, n] });
            }
            const r = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, n, t) => {
            t.d(n, { Z: () => p });
            var a = t(202784),
                l = t(476984),
                i = t.n(l),
                s = t(143778),
                r = t(750410),
                o = t(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class p extends a.Component {
                shouldComponentUpdate(e) {
                    const n = e.fetchStatus === d,
                        t = this.props.fetchStatus !== e.fetchStatus;
                    return !(!n && !t) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: n, failureMessage: t, fetchStatus: l, icon: i, loadingMessage: s, onRequestRetry: d, render: p, renderFailure: g, retryMessage: _, retryable: y } = this.props;
                    switch (l) {
                        case c:
                            return y ? a.createElement(r.Z, { icon: i, onRequestRetry: d, retryMessage: _ }) : t ? a.createElement(o.m, { failureMessage: t }) : g();
                        case u:
                            return a.createElement(o.J, { "aria-label": e, color: n, loadingMessage: s });
                        case m:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        403556: (e, n, t) => {
            t.d(n, { Z: () => F });
            var a = t(807896),
                l = t(202784),
                i = t(194504),
                s = t(235902),
                r = t(392237),
                o = t(325686),
                c = t(674132),
                d = t.n(c),
                u = t(912021),
                m = t(516951),
                p = t(731708),
                g = t(310088),
                _ = t(175993),
                y = t(58881),
                b = t(530732);
            const k = d().d2414d31,
                h = () => d().ce4e85ae,
                f = d().fb9f6f39;
            class w extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, n) => {
                            const { pathname: t, query: a, state: l } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: t, query: a, method: "push", state: { ...l, lockScroll: n } };
                        })),
                        (this._unlisten = m.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, n, t, a) => {
                            const l = r.default.theme.colors.text,
                                i = r.default.theme.colors.gray700;
                            return t || a ? (e || n ? l : i) : e ? l : i;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: n } = this.props;
                            n && n(e);
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
                    const { Icon: e, "aria-label": n, badgeCount: t, badgePip: a, children: i, color: s, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: m, isWebRedesign: _, retainScrollPosition: w, style: T, to: x } = this.props,
                        { location: F } = this.state,
                        L = x ? this._getMemoizedLink(x, w) : void 0,
                        C = c ? c(x) : F?.pathname === L?.pathname,
                        K = y.Z.generate({ backgroundColor: "transparent", color: r.default.theme.colors.text, insetFocusRing: !0 }),
                        S = _ ? "medium" : C ? "bold" : "medium";
                    return l.createElement(b.Z, { "aria-label": n, "aria-selected": C, focusable: !!C, interactiveStyles: K, link: L, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? v.pill : v.link, u && C ? v.active : null, d ? (u ? v.compactPill : v.compactLink) : null, m ? v.roundedRect : null, T], withoutInteractiveStyles: _ || u }, ({ isFocused: n, isHovered: c }) => l.createElement(o.Z, { style: u && v.flexGrow }, l.createElement(p.ZP, { size: _ ? "headline2" : void 0, style: [v.text, { color: this._getTextColor(C, c, _, u) }, d && v.compactText, _ && n && v.focusedText], weight: S }, e && l.createElement(e, { style: v.icon }), i, _ || u ? null : l.createElement(o.Z, { style: C && [v.border, { backgroundColor: r.default.theme.colors[s] }] })), t ? l.createElement(g.Z, { count: t, standalone: !0, style: [v.badge, t >= 10 && v.multiDigitBadge, t >= 20 && v.truncatedCountBadge], truncatedCountFormatter: f, unreadCountLabel: k, withBorder: !1 }) : a ? l.createElement(g.Z, { pip: !0, standalone: !0, style: v.badgePip, textColor: "red500", unreadCountLabel: h, withBorder: !1 }) : null));
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
                F = ({ alignFirstItem: e, "aria-label": n, isCompact: t, isPillLink: r, isRoundedRect: o, links: c, style: d, visibleItemIndex: u }) => {
                    const m = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: p } = s.ZP.useProps(),
                        g = p() && !r,
                        _ = l.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: n, viewType: i, ...s }, c) => {
                                    const d = g ? [x.linkRedesign, 0 === c && x.firstLinkRedesign, e && 0 === c && x.withNoPaddingStart] : void 0;
                                    return l.createElement(T, (0, a.Z)({ viewType: i }, s, { isCompact: t, isPillLink: r, isRoundedRect: o, isWebRedesign: g, style: d }), n);
                                }),
                            [e, t, r, o, g, c],
                        );
                    return l.createElement(i.Z, { "aria-label": n, buttonsContainerStyle: r && x.gap, childrenStyle: !g && x.flexGrow, key: m, style: [r ? null : x.segmentedControl, g && x.leftAligned, d], visibleItemIndex: u }, _);
                };
        },
        620522: (e, n, t) => {
            t.d(n, { Z: () => a });
            const a = t(202784).createContext({ refsMap: {} });
        },
        490359: (e, n, t) => {
            t.d(n, { Z: () => a });
            const a = (e) => (Array.isArray(e) ? e[0] : void 0);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Articles-6107ac1a.1370d16a.js.map
