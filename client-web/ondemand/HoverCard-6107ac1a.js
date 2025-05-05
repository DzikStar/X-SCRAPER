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
            t.d(n, { Z: () => y });
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
                g,
                p,
                _,
                b = t(897455),
                f = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "count" }), (l = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (i = { defaultValue: !1, kind: "LocalArgument", name: "includePromotedContent" }), (r = { defaultValue: null, kind: "LocalArgument", name: "isListMemberTargetUserId" }), (s = { defaultValue: null, kind: "LocalArgument", name: "timelineId" }), (o = { defaultValue: !1, kind: "LocalArgument", name: "withBirdwatchNotes" }), (c = { defaultValue: !1, kind: "LocalArgument", name: "withClientEventToken" }), (d = { defaultValue: !1, kind: "LocalArgument", name: "withCommunity" }), (u = { defaultValue: !1, kind: "LocalArgument", name: "withDmMuting" }), (m = { defaultValue: !1, kind: "LocalArgument", name: "withQuickPromoteEligibilityTweetFields" }), (g = { defaultValue: !1, kind: "LocalArgument", name: "withVoice" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "managementListsPageTimelineQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: (p = [{ kind: "Literal", name: "s", value: "0c09" }]),
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
                        argumentDefinitions: [a, l, i, s, o, u, c, g, r, d, m],
                        kind: "Operation",
                        name: "managementListsPageTimelineQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: p,
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
                                            { alias: null, args: _, concreteType: "TimelineTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ args: null, fragment: b.Z, kind: "FragmentSpread" }], storageKey: null },
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
            f.hash = "5b66468936446aae49ccfb5965fb93f4";
            const y = f;
        },
        879113: (e, n, t) => {
            t.d(n, { Z: () => g });
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
            class g extends a.Component {
                shouldComponentUpdate(e) {
                    const n = e.fetchStatus === d,
                        t = this.props.fetchStatus !== e.fetchStatus;
                    return !(!n && !t) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: n, failureMessage: t, fetchStatus: l, icon: i, loadingMessage: r, onRequestRetry: d, render: g, renderFailure: p, retryMessage: _, retryable: b } = this.props;
                    switch (l) {
                        case c:
                            return b ? a.createElement(s.Z, { icon: i, onRequestRetry: d, retryMessage: _ }) : t ? a.createElement(o.m, { failureMessage: t }) : p();
                        case u:
                            return a.createElement(o.J, { "aria-label": e, color: n, loadingMessage: r });
                        case m:
                            return null;
                        default:
                            return g();
                    }
                }
            }
            g.defaultProps = { renderFailure: r.Z, retryable: !0 };
        },
        280278: (e, n, t) => {
            t.d(n, { ZP: () => _ });
            var a = t(202784),
                l = t(325686),
                i = t(827515),
                r = t(461756),
                s = t(731708),
                o = t(392237);
            const c = "up",
                d = "down",
                u = (e, n, t) => {
                    t((t) => {
                        const a = (0, i.Z)(e) ? (e > (t.count || 0) ? c : d) : c;
                        return { ...t, count: e, oldText: t.text, pendingCount: null, pendingText: null, text: n, transitionDirection: a };
                    });
                },
                m = {};
            [c, d].forEach((e) => {
                const n = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: n, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: n } };
            });
            const g = { position: "absolute" },
                p = o.default.create({ root: { overflow: "hidden" } }),
                _ = (e) => {
                    const { children: n, containerStyle: t, count: o, ...d } = e,
                        [_, b] = a.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        f = a.useRef(!1);
                    return (
                        a.useEffect(
                            () => (
                                (f.current = !0),
                                function () {
                                    f.current = !1;
                                }
                            ),
                            [],
                        ),
                        a.useEffect(() => {
                            if (f.current)
                                if (r.Z.reducedMotionEnabled) b((t) => ({ ...t, oldText: null, text: n, pendingText: null, pendingCount: null, count: e.count }));
                                else if (n !== _.pendingText) {
                                    n === _.text || ((0, i.Z)(e.count) && _.count === e.count) ? b((e) => ({ ...e, pendingCount: null, pendingText: null })) : (b((t) => ({ ...t, pendingCount: e.count, pendingText: n })), _.animating || u(e.count, n, b));
                                }
                        }, [n]),
                        a.useEffect(() => {
                            f.current &&
                                !1 === _.animating &&
                                (_.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && b((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : _.pendingText && u(_.pendingCount, _.pendingText, b));
                        }, [_.animating, _.oldText]),
                        a.useMemo(() => {
                            const e = m[_.transitionDirection],
                                n = _.oldText && !r.Z.reducedMotionEnabled,
                                i = !_.animating && _.oldText && !r.Z.reducedMotionEnabled,
                                o = { ...g, ...(_.animating ? e.post : e.active) },
                                c = { ...(i ? e.pre : e.active) };
                            return a.createElement(
                                l.Z,
                                { style: [p.root, t] },
                                n ? a.createElement("span", { style: o }, a.createElement(s.ZP, d, _.oldText)) : null,
                                a.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, n) => {
                                                e && n((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, b),
                                        style: c,
                                    },
                                    a.createElement(s.ZP, d, _.text),
                                ),
                            );
                        }, [t, d, _, f, b])
                    );
                };
        },
        646496: (e, n, t) => {
            t.d(n, { Z: () => _ });
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
                g = t(392237);
            const p = g.default.create((e) => ({ buttonBottomMargin: { marginBottom: e.spaces.space16 }, buttonLeftMargin: { marginStart: e.spaces.space20 }, buttonTopMargin: { marginTop: e.spaces.space20 }, buttonWrap: { flexWrap: "wrap-reverse" }, condensedContext: { marginTop: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, condensedContextV2: { marginTop: e.spaces.space16 }, iconCustom: { alignSelf: "flex-start", borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32, marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, facepile: { marginBottom: e.spaces.space16, alignSelf: "flex-start" }, facepileV2: { marginEnd: e.spaces.space8, marginTop: e.spaces.space16 }, interactiveStyle: { flexShrink: 1 }, interactiveStyleV2: { flexDirection: "row", alignItems: "center" }, knownFollowersContainer: { marginTop: e.spaces.space16, marginBottom: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", flexGrow: 1, flexShrink: 1 }, underline: { textDecorationLine: "underline" } })),
                _ = ({ children: e, context: n, imageSrc: t, knownFollowers: i, onFacepilesClick: _, onFacepilesImpression: b, subtitle: f, title: y, withAdditionalControls: w = !1 }) => {
                    const { firstUsername: k, knownFollowersAvatarUrls: v, trendingFollowersUrl: h, usersCount: T } = i || {},
                        x = i && i.knownFollowersAvatarUrls.length > 3;
                    a.useEffect(() => {
                        x && b && b();
                    }, [x, b]);
                    const E = t ? a.createElement(c.Z, { source: t, style: p.iconCustom }) : null,
                        F = n ? a.createElement(l.Z, { style: w ? p.condensedContextV2 : p.condensedContext }, a.createElement(s.ZP, { align: "left", color: "gray700", numberOfLines: 3, size: "subtext2" }, n), a.createElement(l.Z, { style: w ? p.buttonTopMargin : [p.buttonBottomMargin, p.buttonLeftMargin] }, e)) : null,
                        L = a.createElement(u.ZP, null, ({ containerWidth: t }) => {
                            const i = m.Z.isNarrowScreenWidth(t) ? "xLarge" : "xxLarge",
                                c = t < g.default.theme.breakpoints.xSmall ? p.buttonWrap : void 0,
                                u = w ? p.facepileV2 : null;
                            return a.createElement(
                                l.Z,
                                { style: w ? null : [p.knownFollowersContainer, c] },
                                a.createElement(d.Z, { interactiveStyles: null, link: h, onPress: _, style: w ? p.interactiveStyleV2 : p.interactiveStyle }, ({ isHovered: e }) => a.createElement(a.Fragment, null, a.createElement(o.Z, { style: [p.facepile, u], userAvatarSize: i, userAvatarUrls: v }), a.createElement(s.ZP, { color: "gray700", dir: "ltr", numberOfLines: 2, size: "subtext2", style: e && p.underline }, n || ((e, n) => a.createElement(r().I18NFormatMessage, { $i18n: "bb2cd6d3" }, e, n))(k, T)))),
                                ((n) => {
                                    const t = n < g.default.theme.breakpoints.xSmall ? p.buttonBottomMargin : [p.buttonBottomMargin, p.buttonLeftMargin];
                                    return w ? [e] : a.createElement(l.Z, { style: t }, e);
                                })(t),
                            );
                        }),
                        S = i && x ? L : F;
                    return a.createElement(a.Fragment, null, E, a.createElement(s.ZP, { size: "title2", weight: "heavy" }, y), f ? a.createElement(s.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, f) : null, S);
                };
        },
        971657: (e, n, t) => {
            t.r(n), t.d(n, { default: () => o });
            var a = t(202784),
                l = t(890601),
                i = t(783427),
                r = t(347101);
            const s = (e = {}) => {
                const { direction: n } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: n });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.HoverCard-6107ac1a.b26cceaa.js.map
