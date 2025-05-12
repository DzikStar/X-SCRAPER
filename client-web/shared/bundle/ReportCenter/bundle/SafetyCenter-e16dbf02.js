"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReportCenter~bundle.SafetyCenter-e16dbf02"],
    {
        495232: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(202784);
            const o = {
                getEducationType: (e, t) => {
                    switch (e) {
                        case "followers":
                            return t ? "conversationControlsFollowersCanEngage" : "conversationControlsFollowersCannotEngage";
                        case "community":
                            return t ? "conversationControlsCommunityCanEngage" : "conversationControlsCommunityCannotEngage";
                        case "by_invitation":
                            return t ? "conversationControlsByInvitationCanEngage" : "conversationControlsByInvitationCannotEngage";
                        case "subscribers":
                            return t ? "conversationControlsSubscribersCanEngage" : "conversationControlsSubscribersCannotEngage";
                        case "community_hidden_tweet":
                            return "communityHiddenTweetEducation";
                        case "community_tweet_member_removed":
                            return "communityRemovedMemberEducation";
                        case "verified":
                            return t ? "conversationControlsVerifiedCanEngage" : "conversationControlsVerifiedCannotEngage";
                        default:
                            return;
                    }
                },
            };
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => y });
            var o = n(202784),
                i = n(325686),
                a = n(674132),
                r = n.n(a),
                l = n(815858),
                s = n(731708),
                c = n(642153),
                d = n(530732),
                u = n(392237);
            const m = r().a35a5b10,
                b = r().fc8cd112,
                p = (e) => o.createElement(s.ZP, null, e);
            class y extends o.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: a, userScreenName: r, withFacepile: u } = this.props,
                        b = this._renderMessage();
                    return o.createElement(l.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? o.createElement(d.Z, { "aria-label": m, interactiveStyles: null, link: r ? ((p = r), `/${p}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: l }) => o.createElement(i.Z, { style: h.content }, !e && u ? o.createElement(c.Z, { userAvatarUrls: t }) : null, o.createElement(s.ZP, { color: "gray700", size: "subtext2", style: [!e && h.message, (n || l) && !!r && h.underline, a] }, e && u ? o.createElement(c.Z, { style: h.inlineFacepile, userAvatarUrls: t }) : null, b))) : o.createElement(i.Z, { style: h.content }, o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, b)));
                    var p;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : b;
                }
                _renderOneUsername(e) {
                    return o.createElement(r().I18NFormatMessage, { $i18n: "c9e6167d" }, p(e[0]));
                }
                _renderTwoUsernames(e) {
                    return o.createElement(r().I18NFormatMessage, { $i18n: "ha91d1eb" }, p(e[0]), p(e[1]));
                }
                _renderThreeUsernames(e) {
                    return o.createElement(r().I18NFormatMessage, { $i18n: "f1069f9b" }, p(e[0]), p(e[1]), p(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return o.createElement(r().I18NFormatMessage, { $i18n: "e8404c1f" }, p(e[0]), p(e[1]), n);
                }
            }
            y.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const h = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        32471: (e, t, n) => {
            n.d(t, { Z: () => f });
            var o = n(202784),
                i = n(325686),
                a = n(530732),
                r = n(674132),
                l = n.n(r),
                s = n(731708),
                c = n(966582),
                d = n(392237);
            const u = l().d7e50a66,
                m = "INDIRECT",
                b = "NO_SPONSORSHIP",
                p = "ISSUE";
            class y extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderDisclaimerDetails = () => {
                            const { onPoliticalSponsorWebsiteClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n, sponsorshipCandidate: i, sponsorshipOrganization: a, sponsorshipOrganizationWebsite: r, sponsorshipType: c } = t.adMetadataContainer ?? {},
                                d = r && n !== p ? o.createElement(s.ZP, { link: r, onClick: e }) : o.createElement(s.ZP, { color: "gray700", size: "subtext2" });
                            if (!a) return null;
                            const u = o.createElement(l().I18NFormatMessage, { $i18n: "e1e348dd" }, o.cloneElement(d, null, l().hdd29d51({ sponsorshipOrganization: a }))),
                                y = o.createElement(l().I18NFormatMessage, { $i18n: "c7dea0d1" }, o.cloneElement(d, null, l().b97f7079({ sponsorshipOrganization: a }))),
                                h = i ? o.createElement(l().I18NFormatMessage, { $i18n: "b5c2371b", sponsorshipCandidate: i }, o.cloneElement(d, null, l().b02627a9({ sponsorshipOrganization: a }))) : null;
                            return o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, n === p ? u : c === b ? y : c === m ? h : u);
                        }),
                        (this._renderLearnMoreLink = () => {
                            const { onPromotedDisclaimerLearnMoreClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n } = t.adMetadataContainer ?? {},
                                i = n === p ? "issue_ad" : "political_ad";
                            return o.createElement(s.ZP, { link: "https://business.twitter.com/en/help/ads-policies/ads-content-policies/political-content/political-ads-disclosure.html", onClick: e?.(i), size: "subtext2", style: h.learnMore }, u);
                        });
                }
                render() {
                    const { promotedContent: e } = this.props;
                    if (!e.adMetadataContainer) return null;
                    const { disclaimerType: t } = e.adMetadataContainer,
                        n = c.Z.getDisclosureType(e);
                    return "POLITICAL" !== t && "ISSUE" !== t && "political" !== n && "issue" !== n ? null : o.createElement(o.Fragment, null, this._renderDisclaimerDetails(), this._renderLearnMoreLink());
                }
            }
            const h = d.default.create((e) => ({ learnMore: { alignSelf: "flex-start" } }));
            var C = n(378729);
            const f = function (e) {
                const { contentAuthorId: t, id: n, onPoliticalSponsorWebsiteClick: r, onPromotedDisclaimerLearnMoreClick: l, onPromotedIndicatorClick: s, promotedContent: d, promotedContentAdvertiser: u, screenName: m, style: b, testID: p, withoutDisclaimerDetails: h } = e;
                if (!c.Z.isPromoted(d)) return null;
                let f = null;
                return !h && d && (f = o.createElement(y, { contentAuthorId: t, onPoliticalSponsorWebsiteClick: r, onPromotedDisclaimerLearnMoreClick: l, promotedContent: d, screenName: m })), o.createElement(i.Z, { id: n, style: b, testID: p }, u && d ? o.createElement(a.Z, { interactiveStyles: null, link: { pathname: `https://twitter.com/${u.screen_name}`, state: { promotedTweetState: d } }, onPress: s }, o.createElement(C.Z, { contentAuthorId: t, promotedContent: d })) : !!d && o.createElement(C.Z, { contentAuthorId: t, promotedContent: d }), f);
            };
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => b });
            var o = n(202784),
                i = n(325686),
                a = n(731708),
                r = n(891198),
                l = n(280278),
                s = n(392237);
            const c = "subtext1",
                d = o.createContext({ onMedia: !1 });
            class u extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, r.Gb)(e) !== (0, r.wl)(e) ? { label: (0, r.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: i } = this.props;
                    return o.createElement(a.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: i }, o.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (u.Group = (e) =>
                o.createElement(
                    i.Z,
                    { style: [m.row, e.style] },
                    o.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => o.createElement(i.Z, { key: t, style: t < n.length - 1 && m.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => o.createElement(d.Consumer, null, ({ onMedia: n }) => o.createElement(a.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: n, style: i, weight: r = "bold" }) => o.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? o.createElement(l.ZP, { children: t, count: n, size: c, style: i, weight: r }) : o.createElement(a.ZP, { children: t, color: s ? "white" : "text", size: c, style: i, weight: r }))));
            const m = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                b = u;
        },
        366985: (e, t, n) => {
            n.d(t, { L: () => a, j: () => r });
            n(202784);
            var o = n(352924),
                i = n(782261);
            function a(e) {
                const t = i.Z.getOriginalTweet(e),
                    n = !!(t.favorite_count || t.reply_count || t.quote_count || t.retweet_count),
                    a = { actionsBar: (0, o.b)(), avatar: (0, o.b)(), conversationControlLabel: (0, o.b)(), conversationLevel: (0, o.b)(), editCallout: (0, o.b)(), exclusivityInfoLabel: (0, o.b)(), premiumInfoLabel: (0, o.b)(), longformNotesLabel: (0, o.b)(), media: (0, o.b)(), promotedLabel: (0, o.b)(), promotionStatusLabel: (0, o.b)(), replyContext: (0, o.b)(), richContent: (0, o.b)(), socialContext: (0, o.b)(), text: (0, o.b)(), timestamp: (0, o.b)(), tombstone: (0, o.b)(), trustedFriendsLabel: (0, o.b)(), userLabel: (0, o.b)(), username: (0, o.b)() };
                return [a, [a.promotedLabel, a.promotionStatusLabel, a.conversationLevel, a.socialContext, a.username, a.avatar, a.userLabel, a.timestamp, a.tombstone, a.replyContext, a.text, a.media, a.richContent, a.editCallout, a.exclusivityInfoLabel, a.premiumInfoLabel, a.trustedFriendsLabel, a.conversationControlLabel, a.longformNotesLabel, n ? a.actionsBar : void 0].filter(Boolean)];
            }
            function r({ children: e, tweet: t }) {
                return e(a(t));
            }
        },
        721083: (e, t, n) => {
            n.d(t, { Z: () => k });
            var o = n(807896),
                i = (n(571372), n(202784)),
                a = n(900664),
                r = n(674132),
                l = n.n(r),
                s = n(432181),
                c = n(761744),
                d = n(323265),
                u = n(811176),
                m = n(233184),
                b = n(522171),
                p = n(40644),
                y = n(439481);
            const h = l().d636ebc6,
                C = l().eb3a8b0c,
                f = l().j472ecfc,
                w = l().a0af935c,
                g = l().dac92b0d,
                v = l().aa650427;
            function E(e = new Error("TweetActionLike.onError")) {
                m.Z.report(e);
            }
            function k({ actionMenuDescription: e, activeColor: t = "magenta500", color: n, count: r, enableActionMenu: l = !1, enableKeyboardShortcuts: m, iconSize: k, isDisabled: I, isFaded: x, isLiked: S, isPresentational: Z, likeActionIconContainerRef: A, likeTransitionAnimation: _, link: P, onAnimationStart: T, onError: L = E, onLikeActionSelect: M, onMenuCancel: F, onPress: D, style: R, testIDs: N, withCount: O }) {
                const z = O && "number" == typeof r;
                let W = S ? w : h;
                const B = i.useMemo(() => ({ label: S ? C : h }), [S]);
                z && (W = S ? v({ count: r }) : g({ count: r }));
                const U = (function ({ isLiked: e, likeTransitionAnimation: t }) {
                    const [n, o] = i.useState(!1),
                        a = i.useRef(e);
                    return (
                        i.useEffect(() => {
                            ("object" == typeof t || y.ZP.check(t)) && e !== a.current && (o(e), (a.current = e));
                        }, [e, t]),
                        { onAnimationEnd: i.useCallback(() => o(!1), [o]), showAnimation: n, transitionAnimationUrl: t }
                    );
                })({ isLiked: S, likeTransitionAnimation: _ });
                const V = i.useCallback(
                    (t) => {
                        const n = [
                            {
                                text: f,
                                onClick() {
                                    t(), M?.();
                                },
                                testID: N?.like,
                                Icon: s.default,
                            },
                        ];
                        return i.createElement(u.Z, {
                            description: e,
                            items: n,
                            onCloseRequested: function () {
                                t(), F?.();
                            },
                        });
                    },
                    [e, M, F, N?.like],
                );
                return i.createElement(
                    p.ZP,
                    (0, o.Z)({}, U, {
                        ActiveIcon: c.default,
                        Icon: s.default,
                        actionIconContainerRef: A,
                        activeColor: t,
                        "aria-label": W,
                        color: n,
                        count: r,
                        enableKeyboardShortcuts: m,
                        hoverLabel: B,
                        iconSize: k,
                        isActive: S,
                        isDisabled: I,
                        isFaded: x,
                        isPresentational: Z,
                        keyboardShortcut: b.Z.shortcuts.like,
                        link: P,
                        onAnimationStart: T,
                        onError: L,
                        onPress: function () {
                            d.ZP.isFirefox() || a.Z.vibrate(5), D?.();
                        },
                        renderMenu: l ? V : void 0,
                        style: R,
                        testID: N && (S ? N.unlike : N.like),
                        withCount: z,
                    }),
                );
            }
        },
        982266: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(202784),
                i = n(811176),
                a = n(247056);
            function r({ Icon: e, isDisabled: t, items: n, onOpen: r }) {
                const l = o.useCallback((e) => o.createElement(i.Z, { items: n, onCloseRequested: e }), [n]);
                return n.length ? o.createElement(a.Z, { Icon: e, isDisabled: t, onClick: r, renderActionMenu: l }) : null;
            }
        },
        15342: (e, t, n) => {
            n.d(t, { d: () => k, Z: () => I });
            var o = n(202784),
                i = n(674132),
                a = n.n(i),
                r = n(720600),
                l = n(155353),
                s = n(522171),
                c = n(40644),
                d = (n(136728), n(885724)),
                u = n(53674),
                m = n(811176);
            const b = a().f2919fb8,
                p = a().fd1e5446,
                y = a().bb5c5864,
                h = a().f65198c2;
            function C(e) {
                const t = (function ({ excludeRetweetAction: e = !1, excludeRetweetWithCommentAction: t = !1, excludeViewQuotesRetweetsAction: n = !1, isRetweeted: i, onMenuCancel: a, onQuoteTweetActionSelect: r, onRetweetActionSelect: s, onUnretweetActionSelect: c, onViewEngagementsActionSelect: m, retweetActionSubText: C, retweetWithCommentLink: f, testIDs: w, viewQuotesRetweetsLink: g }) {
                        const v = w?.retweetConfirm,
                            E = w?.unretweetConfirm;
                        return o.useMemo(() => {
                            const o = [];
                            return (
                                i ||
                                    e ||
                                    o.push({
                                        text: b,
                                        subText: C,
                                        onClick() {
                                            a?.(), s?.();
                                        },
                                        testID: v,
                                        Icon: l.default,
                                    }),
                                i &&
                                    o.push({
                                        text: p,
                                        onClick() {
                                            a?.(), c?.();
                                        },
                                        testID: E,
                                        Icon: l.default,
                                    }),
                                t ||
                                    o.push({
                                        text: y,
                                        onClick() {
                                            a?.(), r?.();
                                        },
                                        Icon: d.default,
                                        link: f,
                                    }),
                                n ||
                                    o.push({
                                        text: h,
                                        onClick() {
                                            a?.(), m?.();
                                        },
                                        Icon: u.default,
                                        link: g,
                                    }),
                                o
                            );
                        }, [e, t, n, i, a, r, s, c, m, C, f, v, E, g]);
                    })(e),
                    { onMenuCancel: n } = e,
                    i = o.useCallback(() => {
                        n?.();
                    }, [n]);
                return o.createElement(m.Z, { description: e.actionMenuDescription, items: t, onCloseRequested: i });
            }
            const f = a().f2919fb8,
                w = a().fd1e5446,
                g = a().b8c465e2,
                v = a().dfad425d,
                E = a().a386dc55,
                k = { RETWEET: "retweet", UNRETWEET: "unretweet", QUOTE: "quote", VIEW_ENGAGEMENTS: "view_engagements" };
            function I({ actionMenuDescription: e, activeColor: t = "green500", color: n, count: i, enableActionMenu: a = !1, enableKeyboardShortcuts: d, excludeRetweetAction: u, excludeRetweetWithCommentAction: m, excludeViewQuotesRetweetsAction: b, iconSize: p, isDisabled: y, isFaded: h, isPresentational: k, isRetweeted: I, onMenuCancel: x, onPress: S, onQuoteTweetActionSelect: Z, onRetweetActionSelect: A, onUnretweetActionSelect: _, onViewEngagementsActionSelect: P, retweetActionSubText: T, retweetWithCommentLink: L, style: M, testIDs: F, viewQuotesRetweetsLink: D, withCount: R }) {
                const N = R && "number" == typeof i;
                let O = I ? g : f;
                N && (O = I ? E({ count: i }) : v({ count: i }));
                const z = o.useMemo(() => ({ label: I ? w : f }), [I]),
                    W = o.useMemo(() => ({ retweetConfirm: F?.retweetConfirm, unretweetConfirm: F?.unretweetConfirm }), [F?.retweetConfirm, F?.unretweetConfirm]),
                    B = o.useCallback(
                        (t) =>
                            o.createElement(C, {
                                actionMenuDescription: e,
                                excludeRetweetAction: u,
                                excludeRetweetWithCommentAction: m,
                                excludeViewQuotesRetweetsAction: b,
                                isRetweeted: I,
                                onMenuCancel: () => {
                                    t(), x?.();
                                },
                                onQuoteTweetActionSelect: Z,
                                onRetweetActionSelect: A,
                                onUnretweetActionSelect: _,
                                onViewEngagementsActionSelect: P,
                                retweetActionSubText: T,
                                retweetWithCommentLink: L,
                                testIDs: W,
                                viewQuotesRetweetsLink: D,
                            }),
                        [e, u, m, b, I, x, Z, A, _, P, T, W, L, D],
                    );
                return o.createElement(c.ZP, { ActiveIcon: r.default, Icon: l.default, activeColor: t, "aria-label": O, color: n, count: i, enableKeyboardShortcuts: d, hoverLabel: z, iconSize: p, isActive: I, isDisabled: y, isFaded: h, isPresentational: k, keyboardShortcut: s.Z.shortcuts.retweet, onPress: S, renderMenu: a ? B : void 0, style: M, testID: I ? F?.unretweet : F?.retweet, withCount: N });
            }
        },
        990804: (e, t, n) => {
            n.d(t, { Z: () => se });
            var o = n(202784),
                i = n(325686),
                a = n(674132),
                r = n.n(a),
                l = n(976145),
                s = n(235902),
                c = n(392237);
            function d({ "aria-label": e, "aria-labelledby": t, children: n, displayStyle: a = "inline", id: r, style: l }) {
                const c = s.ZP.useProps().withEdgeToEdgeTweetAnatomy();
                return o.createElement(i.Z, { "aria-label": e, "aria-labelledby": t, id: r, role: "group", style: [u.container, u[`${a}Container`], c && u.noMaxWidth, l] }, n);
            }
            const u = c.default.create((e) => ({ container: { columnGap: e.spacesPx.space4, flexDirection: "row" }, inlineContainer: { justifyContent: "space-between", maxWidth: 600 }, noMaxWidth: { maxWidth: "none" }, blockContainer: { alignItems: "stretch", height: "100%", justifyContent: "space-around", minHeight: "1.875rem", paddingHorizontal: e.spaces.space4 } }));
            var m = n(807896),
                b = n(53674),
                p = n(40644);
            const y = { label: r().f2849136 },
                h = r().f206e970,
                C = { label: r().b05a39b2 },
                f = r().c7073f5b;
            n(571372);
            var w = n(900664),
                g = n(73416),
                v = n(883069),
                E = n(323265),
                k = n(233184),
                I = n(522171);
            const x = r().dbc0c2f4,
                S = r().hf417cf0,
                Z = r().c7a989ce,
                A = r().febd30ed,
                _ = r().a8dc9587;
            function P(e = new Error("TweetActionBookmark.onError")) {
                k.Z.report(e);
            }
            var T = n(721083),
                L = n(194661);
            const M = r().hdf7226a,
                F = { label: M },
                D = r().c9940955;
            function R({ activeColor: e, color: t, count: n, enableKeyboardShortcuts: i, iconSize: a, isDisabled: r, isFaded: l, isPresentational: s, link: c, onPress: d, renderWrapper: u, style: m, testID: b, withCount: y }) {
                const h = y && "number" == typeof n,
                    C = h ? D({ count: n }) : M;
                return o.createElement(p.ZP, { Icon: L.default, activeColor: e, "aria-label": C, color: t, count: n, enableKeyboardShortcuts: i, hoverLabel: F, iconSize: a, isDisabled: r, isFaded: l, isPresentational: s, keyboardShortcut: I.Z.shortcuts.reply, link: c, onPress: d, renderWrapper: u, style: m, testID: b, withCount: h });
            }
            const N = o.memo(R);
            var O = n(15342),
                z = n(744610),
                W = n(137937),
                B = n(461756),
                U = n(811176),
                V = n(638236);
            const K = { label: r().dc63da16 },
                j = r().cee0585c,
                $ = W.Z.bezier(0.45, 0, 0, 1);
            const Q = function ({ activeColor: e, color: t, count: n, iconSize: i, isDisabled: a, isFaded: r, isPresentational: l, onPress: s, style: c, tweetLink: d, withCount: u }) {
                    const m = u && void 0 !== n;
                    return o.createElement(p.ZP, { Icon: b.default, activeColor: e, "aria-label": m ? f({ count: n }) : h, color: t, count: n, hoverLabel: m ? C : y, iconSize: i, isDisabled: a, isFaded: r, isPresentational: l, link: !d || a || r ? void 0 : `${d}/analytics`, onPress: s, style: c, withCount: m });
                },
                H = T.Z,
                q = N,
                G = function ({ actionItems: e, actionMenuDescription: t, activeColor: n, color: i, enableKeyboardShortcuts: a, iconSize: r, isDisabled: l, isFaded: s, isPresentational: c, onMenuCancel: d, onPress: u, shouldAnimatePrompt: m, style: b, withCount: y }) {
                    const h = o.useRef({ wiggle: new z.Z.Value(0), scale: new z.Z.Value(1) }).current,
                        C = o.useCallback(
                            (n) =>
                                o.createElement(U.Z, {
                                    description: t,
                                    items: e,
                                    onCloseRequested: function () {
                                        n(), d?.();
                                    },
                                    shouldCloseOnClick: !0,
                                }),
                            [e, t, d],
                        );
                    o.useEffect(() => {
                        m && !B.Z.reducedMotionEnabled && z.Z.parallel([z.Z.timing(h.wiggle, { toValue: 4, duration: 500, useNativeDriver: !1 }), z.Z.sequence([z.Z.timing(h.scale, w({ toValue: 1.45 })), z.Z.timing(h.scale, w({ toValue: 1 }))])]).start();
                    }, [h.scale, m, h.wiggle]);
                    const f = h.wiggle.interpolate({ inputRange: [0, 1, 2, 3, 4], outputRange: ["0deg", "15deg", "-15deg", "15deg", "0deg"] });
                    function w(e) {
                        return { ...e, useNativeDriver: !1, easing: $, duration: 250 };
                    }
                    const g = o.useRef([{}, { transform: [{ rotate: f }, { scale: h.scale }, { translate3d: "0, 0, 0" }], justifyContent: "inherit", display: "inline-grid" }]);
                    return o.createElement(z.Z.View, { style: g.current }, o.createElement(p.ZP, { Icon: V.Z, activeColor: n, "aria-label": j, color: i, enableKeyboardShortcuts: a, hoverLabel: K, iconSize: r, isDisabled: l, isFaded: s, isPresentational: c, keyboardShortcut: I.Z.shortcuts.share, onPress: u, renderMenu: s ? void 0 : C, style: b, withCount: y }));
                },
                J = function ({ activeColor: e, color: t, count: n, enableKeyboardShortcuts: i, iconSize: a, isDisabled: r, isFaded: l, isBookmarked: s, isPresentational: c, onError: d = P, onPress: u, style: m, testIDs: b, withCount: y }) {
                    const h = y && "number" == typeof n;
                    let C = s ? Z : x;
                    const f = o.useMemo(() => ({ label: s ? S : x }), [s]);
                    return (
                        h && (C = s ? _({ count: n }) : A({ count: n })),
                        o.createElement(p.ZP, {
                            ActiveIcon: g.default,
                            Icon: v.default,
                            activeColor: e,
                            "aria-label": C,
                            color: t,
                            count: n,
                            enableKeyboardShortcuts: i,
                            hoverLabel: f,
                            iconSize: a,
                            isActive: s,
                            isDisabled: r,
                            isFaded: l,
                            isPresentational: c,
                            keyboardShortcut: I.Z.shortcuts.bookmark,
                            onError: d,
                            onPress: function () {
                                E.ZP.isFirefox() || w.Z.vibrate(5), u?.();
                            },
                            style: m,
                            testID: b && (s ? b.removeBookmark : b.bookmark),
                            withCount: h,
                        })
                    );
                };
            const X = r().a0af935c,
                Y = r().b8c465e2,
                ee = r().c7a989ce,
                te = (e) => o.createElement(se.ActionAnalytics, e),
                ne = (e) => o.createElement(se.ActionLike, e),
                oe = (e) => o.createElement(se.ActionReply, e),
                ie = (e) => o.createElement(se.ActionRetweet, e),
                ae = (e) => o.createElement(se.ActionShare, e),
                re = (e) => o.createElement(se.ActionBookmark, e),
                le = [];
            function se({ actionSize: e = "normal", activeColor: t, bookmarkCount: n, color: a = "gray700", displayStyle: c, enableKeyboardShortcuts: u = !0, isDisabled: m = !1, isBookmarked: b = !1, isFocalTweet: p = !1, isFromProtectedAccount: y, isLiked: h, isRetweeted: C, isPresentational: f, likeCount: w, id: g, renderAnalyticsAction: v = te, renderLikeAction: E = ne, renderReplyAction: k = oe, renderRetweetAction: I = ie, renderShareAction: x = ae, renderBookmarkAction: S = re, replyCount: Z, retweetCount: A, style: _, tweetLink: P, viewCount: T, viewState: L, withAnalytics: M = !1, withCount: F = !1, withBookmark: D = !1 }) {
                const R = o.useRef(null),
                    N = s.ZP.useProps(),
                    O = N.tweetViewCountsEnabled(),
                    z = N.testViewCountShow(),
                    W = O || z,
                    B = M && W,
                    U = M && !B,
                    V = W ? "EnabledWithCount" === L && F : F,
                    K = o.useMemo(() => {
                        if (!F) return;
                        const e = r().b03835c7,
                            t = r().g4a195e7,
                            o = r().e089b42d,
                            i = r().e0a8fe39,
                            a = r().c58b2ab7;
                        return (0, l.Z)([Z ? e({ replyCount: Z }) : null, A ? t({ retweetCount: A }) : null, C ? Y : null, w ? o({ likeCount: w }) : null, h ? X : null, b && D ? ee : null, n ? i({ bookmarkCount: n }) : null, T ? a({ viewCount: T }) : null].filter(Boolean), !0);
                    }, [n, b, h, C, w, Z, A, T, F, D]),
                    j = o.useMemo(() => ({ color: a, iconSize: e, isDisabled: m }), [a, e, m]),
                    $ = o.useMemo(() => k({ ...j, activeColor: t, count: Z, enableKeyboardShortcuts: u, isPresentational: f, withCount: F }), [j, t, Z, u, f, F, k]),
                    Q = o.useMemo(() => I({ ...j, activeColor: t, count: A, enableKeyboardShortcuts: u, isFromProtectedAccount: y, isRetweeted: C, isPresentational: f, withCount: F }), [j, t, A, u, y, C, f, F, I]),
                    H = o.useMemo(() => E({ ...j, activeColor: t, count: w, enableKeyboardShortcuts: u, isLiked: h, isPresentational: f, withCount: F }), [j, t, w, u, h, f, F, E]),
                    q = o.useMemo(() => (B ? v({ ...j, count: T, isPresentational: f, tweetLink: P, withCount: V }) : null), [B, j, T, f, P, V, v]),
                    G = o.useMemo(() => (D ? S({ ...j, activeColor: t, count: n, enableKeyboardShortcuts: u, isPresentational: f, isBookmarked: b, withCount: F }) : null), [D, j, t, n, u, f, b, F, S]),
                    J = o.useMemo(() => (U ? v({ ...j, isPresentational: f, tweetLink: P }) : null), [U, j, f, P, v]),
                    se = o.useMemo(() => x({ ...j, actionItems: le, activeColor: t, enableKeyboardShortcuts: u, isPresentational: f, withCount: F && U }), [j, t, u, f, U, F, x]);
                return o.createElement(i.Z, { ref: R }, o.createElement(d, { "aria-label": K, displayStyle: c, id: g, style: _ }, $, Q, H, q, G, J, se));
            }
            (se.ActionAnalytics = Q),
                (se.ActionLike = H),
                (se.ActionReply = q),
                (se.ActionRetweet = function ({ isFromProtectedAccount: e = !1, ...t }) {
                    return o.createElement(O.Z, (0, m.Z)({}, t, { excludeRetweetAction: t.excludeRetweetAction || e, excludeRetweetWithCommentAction: t.excludeRetweetWithCommentAction || e, isDisabled: t.isDisabled || (!t.isRetweeted && e) }));
                }),
                (se.ActionShare = G),
                (se.ActionBookmark = J);
        },
        821966: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                i = n(674132),
                a = n.n(i),
                r = n(54989);
            const l = a().b05a39b2,
                s = a().c566d3a6,
                c = (e) => o.createElement(r.Z, e),
                d = ({ children: e, hideLabel: t = s, label: n, lang: i, render: a = c, revealLabel: r = l }) => {
                    const [d, u] = o.useState(!1);
                    return a({ actionText: d ? t : r, children: d ? e : n, lang: i, onActionClick: () => u(!d) });
                };
            d.displayName = "TweetDisclosure";
            const u = d;
        },
        737082: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                i = n(495232),
                a = n(235902),
                r = n(392237),
                l = n(495580),
                s = n(830911),
                c = n(782261);
            const d = r.default.create((e) => ({ compact: { alignSelf: "flex-start" }, inline: { marginTop: e.spaces.space8, marginBottom: e.spaces.space4 }, detail: { marginTop: e.spaces.space12, marginBottom: e.spaces.space16 } })),
                u = ({ displayStyle: e = "inline", ...t }) => {
                    const n = { displayStyle: e, ...t },
                        r = (({ displayStyle: e, exclusivityInfoLabelNativeID: t, hideExclusivityInfoEducationTextInReplies: n, loggedInUser: o, tweet: i }) => {
                            const a = c.Z.getOriginalTweet(i),
                                r = !!a.in_reply_to_status_id_str,
                                { exclusivity_info: l, permalink: s, user: d } = a;
                            if (!l || ("inline" === e && r && n)) return;
                            const u = l.screen_name,
                                m = u === o?.screen_name,
                                b = d.screen_name === o?.screen_name;
                            return { displayMode: "detail" === e ? "detail" : "compact", id: t, screenName: u, scribeElement: "exclusivity_info_context", tweetPermalink: s, type: m ? "exclusiveToSuperFollowersCreator" : b ? "exclusiveToSuperFollowersReplyOwn" : "exclusiveToSuperFollowersReplyOthers" };
                        })(n),
                        u = (({ displayStyle: e, hideTrustedFriendsEducationTextInReplies: t, loggedInUser: n, trustedFriendsLabelNativeID: o, tweet: i }) => {
                            const r = a.ZP.useProps(),
                                l = r.trustedFriendsEnabled(),
                                s = r.trustedFriendsCreationEnabled(),
                                d = c.Z.getOriginalTweet(i),
                                u = !!d.in_reply_to_status_id_str,
                                { permalink: m, trusted_friends_info: b, user: p } = d;
                            if (!l || !b || ("inline" === e && u && t)) return;
                            const y = b.screen_name,
                                h = y === n?.screen_name,
                                C = p.screen_name === n?.screen_name;
                            return { displayMode: "detail" === e ? "detail" : u ? "compact" : "inline", id: o, screenName: y, scribeElement: "exclusivity_info_context", tweetPermalink: m, type: h && s ? "trustedFriendsCreator" : C ? "trustedFriendsReplyOwn" : "trustedFriendsReplyOthers" };
                        })(n),
                        m = (({ conversationControlLabelNativeID: e, displayStyle: t, hideConversationControlsEducationText: n, loggedInUser: o, tweet: a }) => {
                            const r = !!o,
                                l = c.Z.getOriginalTweet(a),
                                { conversation_control: s, limited_actions: d, permalink: u } = l,
                                m = c.Z.getDisabledActions(l),
                                b = m?.includes("Reply") || d,
                                p = r && !b;
                            if (!s || ("inline" === t && (!p || n))) return;
                            const y = s.conversation_owner.screen_name,
                                h = s.policy,
                                C = i.Z.getEducationType(h, p);
                            return C ? { displayMode: "detail" === t ? "detail" : "compact", id: e, tweetPermalink: u, screenName: y, scribeElement: "conversation_control_context", type: C } : void 0;
                        })(n),
                        b = (({ conversationControlLabelNativeID: e, displayStyle: t, hideConversationControlsEducationText: n, loggedInUser: o, tweet: r }) => {
                            const l = a.ZP.useProps().c9sEnabled(),
                                s = c.Z.getOriginalTweet(r),
                                { community_id_str: d, limited_actions: u } = s,
                                m = "community_tweet_hidden" === u,
                                b = i.Z.getEducationType("community_hidden_tweet");
                            if (l && d && m && b) return { displayMode: "detail" === t ? "detail" : "compact", id: e, screenName: "", scribeElement: "hidden_community_tweet_education", type: b };
                        })(n),
                        p = (({ conversationControlLabelNativeID: e, displayStyle: t, hideConversationControlsEducationText: n, loggedInUser: o, tweet: r }) => {
                            const l = a.ZP.useProps().c9sEnabled(),
                                s = c.Z.getOriginalTweet(r),
                                { community_id_str: d, limited_actions: u } = s,
                                m = "community_tweet_member_removed" === u,
                                b = i.Z.getEducationType("community_tweet_member_removed");
                            if (l && d && m && b) return { displayMode: "detail" === t ? "detail" : "compact", id: e, screenName: "", scribeElement: "removed_member_community_tweet_education", type: b };
                        })(n),
                        y = (({ premiumInfoLabelNativeID: e, tweet: t }) => {
                            const n = c.Z.getOriginalTweet(t),
                                o = n.premium_info,
                                i = !!n.in_reply_to_status_id_str;
                            if (o && !i) return { type: "premiumExclusive", displayMode: "compact", id: e, screenName: o.screen_name, scribeElement: "premium_info_context" };
                        })(n),
                        h = r || u || m || b || p || y;
                    if (!h) return null;
                    const { handleAnchorAction: C, handleAnchorOpen: f, handleAnchorSecondaryAction: w } = n,
                        { anchorless: g, displayMode: v, id: E, screenName: k, scribeElement: I, tweetPermalink: x, type: S } = h,
                        Z = d[v];
                    return "inline" !== e || g ? o.createElement(s.Z, { displayMode: v, id: E, screenName: k, style: Z, type: S }) : o.createElement(l.Z, { onAction: C, onOpen: f ? () => f(I) : void 0, onSecondaryAction: w, screenName: k, style: Z, tweetPermalink: x, type: S }, o.createElement(s.Z, { displayMode: v, id: E, screenName: k, type: S }));
                };
        },
        495580: (e, t, n) => {
            n.d(t, { Z: () => I });
            var o = n(202784),
                i = n(325686),
                a = n(674132),
                r = n.n(a),
                l = n(430895),
                s = n(283119),
                c = n(388941),
                d = n(144251),
                u = n(47086),
                m = n(491831),
                b = n(337985),
                p = n(731708),
                y = n(807896),
                h = n(946847),
                C = n(30899),
                f = n(392237);
            const w = r().b09adb0c,
                g = r().c2637ef6,
                v = (e) => {
                    const { Icon: t, actionLabel: n, actionLink: a, children: r, headline: l, onAction: s, onDismiss: c, onOpen: d, onSecondaryAction: u, style: m, subtext: b, thumbnailColor: p, tweetPermalink: f } = e;
                    return o.createElement(
                        i.Z,
                        {
                            onClick: (e) => {
                                e.stopPropagation();
                            },
                            style: m,
                        },
                        o.createElement(
                            C.Z,
                            {
                                onDismiss: c,
                                renderContent: (e, r) => {
                                    const c = () => {
                                            u && u(), e();
                                        },
                                        d =
                                            f || (n && a)
                                                ? {
                                                      actionLabel: n ?? w,
                                                      actionLink: a ?? f,
                                                      onAction: () => {
                                                          s && s(), e();
                                                      },
                                                      secondaryActionLabel: g,
                                                      onSecondaryAction: c,
                                                  }
                                                : { actionLabel: g, onAction: c };
                                    return o.createElement(i.Z, { style: "popover" === r ? E.interstitialPopover : void 0 }, o.createElement(h.Z, (0, y.Z)({}, d, { contentStyle: E.content, graphic: t, graphicDisplayMode: "thumbnail", graphicThumbnailColor: p, headline: l, subtext: b, withBottomPadding: !1, withCloseButton: !1 })));
                                },
                                withFixedPosition: !0,
                            },
                            o.createElement(i.Z, { onClick: d, role: "button", style: E.cursor }, r),
                        ),
                    );
                },
                E = f.default.create((e) => ({ interstitialPopover: { maxWidth: 5 * e.spacesPx.space64 }, cursor: { cursor: "pointer" }, content: { marginVertical: 0, marginBottom: e.spaces.space28 } })),
                k = {
                    conversationControlsFollowersCanEngage: { Icon: l.default, headline: r().bb7b821a, subtext: r().fc41217b },
                    conversationControlsFollowersCannotEngage: { Icon: l.default, headline: r().ab105904, subtext: r().fc41217b },
                    conversationControlsCommunityCanEngage: { Icon: s.default, headline: r().bb7b821a, subtext: r().f064f477 },
                    conversationControlsCommunityCannotEngage: { Icon: s.default, headline: r().ab105904, subtext: r().f064f477 },
                    conversationControlsByInvitationCanEngage: { Icon: c.default, headline: r().bb7b821a, subtext: r().ea9ac5c9 },
                    conversationControlsByInvitationCannotEngage: { Icon: c.default, headline: r().ab105904, subtext: r().ea9ac5c9 },
                    conversationControlsSubscribersCanEngage: { Icon: c.default, headline: r().bb7b821a, subtext: r().d2ae1499 },
                    conversationControlsSubscribersCannotEngage: { Icon: c.default, headline: r().ab105904, subtext: r().d2ae1499 },
                    conversationControlsVerifiedCanEngage: { Icon: d.default, headline: r().bb7b821a, subtext: r().a4e254ff },
                    conversationControlsVerifiedCannotEngage: { Icon: d.default, headline: r().ab105904, subtext: r().a4e254ff },
                    communityHiddenTweetEducation: { Icon: u.default, headline: r().daba4484, subtext: r().f956070a },
                    communityRemovedMemberEducation: { Icon: u.default, headline: r().daba4484, subtext: r().ceb6841c },
                    exclusiveToSuperFollowersCreator: { Icon: m.default, thumbnailColor: "exclusive", headline: r().j620ce06, subtext: r().bd414b44 },
                    exclusiveToSuperFollowersReplyOwn: { Icon: m.default, thumbnailColor: "exclusive", headline: r().j620ce06, subtext: r().dd0da5d9 },
                    exclusiveToSuperFollowersReplyOthers: { Icon: m.default, thumbnailColor: "exclusive", headline: r().g1c6a77e, subtext: r().d3b143d7 },
                    trustedFriendsCreator: { Icon: b.default, actionLabel: r().cb731cae, actionLink: "/i/circles", thumbnailColor: "success", headline: r().c33d3a84, subtext: () => o.createElement(r().I18NFormatMessage, { $i18n: "b6a393af" }, o.createElement(p.ZP, { color: "text", link: "https://help.x.com/using-twitter/twitter-circle", weight: "bold", withUnderline: !0 }, r().c4f10e71)) },
                },
                I = (e) => {
                    const { children: t, onAction: n, onDismiss: a, onOpen: r, onSecondaryAction: l, screenName: s, style: c, tweetPermalink: d, type: u } = e;
                    if (!k[u]) return o.createElement(i.Z, { style: c }, t);
                    const { Icon: m, actionLabel: b, actionLink: p, headline: y, subtext: h, thumbnailColor: C } = k[u],
                        f = ((e, t) => ("string" != typeof e ? e({ screenName: t }) : e))(h, s);
                    return o.createElement(v, { Icon: m, actionLabel: b, actionLink: p, headline: y, onAction: n, onDismiss: a, onOpen: r, onSecondaryAction: l, style: c, subtext: f, thumbnailColor: C, tweetPermalink: d }, t);
                };
        },
        830911: (e, t, n) => {
            n.d(t, { Z: () => v });
            var o = n(202784),
                i = n(325686),
                a = n(674132),
                r = n.n(a),
                l = n(430895),
                s = n(283119),
                c = n(388941),
                d = n(144251),
                u = n(47086),
                m = n(491831),
                b = n(337985),
                p = n(883437),
                y = n(235902),
                h = n(834324),
                C = n(868634),
                f = n(392237);
            const w = (e, t) => ("string" != typeof e ? e({ screenName: t }) : e),
                g = ["exclusiveToSuperFollowersCreator", "exclusiveToSuperFollowersReplyOwn", "exclusiveToSuperFollowersReplyOthers"],
                v = (e) => {
                    const t = y.ZP.useProps().redesignedLabelForSubscribedTweets(),
                        n = (({ redesignedLabelForSubscribedTweets: e }) => ({
                            conversationControlsFollowersCanEngage: { Icon: l.default, calloutType: "primary", headline: r().bb7b821a, detail: r().fc41217b, inline: r().e5dc76d0 },
                            conversationControlsFollowersCannotEngage: { Icon: l.default, calloutType: "primary", headline: r().ab105904, detail: r().fc41217b, inline: r().fd1cda7a },
                            conversationControlsCommunityCanEngage: { Icon: s.default, calloutType: "primary", headline: r().bb7b821a, detail: r().f064f477, inline: r().e5dc76d0 },
                            conversationControlsCommunityCannotEngage: { Icon: s.default, calloutType: "primary", headline: r().ab105904, detail: r().f064f477, inline: r().fd1cda7a },
                            conversationControlsByInvitationCanEngage: { Icon: c.default, calloutType: "primary", headline: r().bb7b821a, detail: r().ea9ac5c9, inline: r().e5dc76d0 },
                            conversationControlsByInvitationCannotEngage: { Icon: c.default, calloutType: "primary", headline: r().ab105904, detail: r().ea9ac5c9, inline: r().fd1cda7a },
                            conversationControlsSubscribersCanEngage: { Icon: c.default, calloutType: "primary", headline: r().bb7b821a, detail: r().d2ae1499, inline: r().e5dc76d0 },
                            conversationControlsSubscribersCannotEngage: { Icon: c.default, calloutType: "primary", headline: r().ab105904, detail: r().d2ae1499, inline: r().fd1cda7a },
                            conversationControlsVerifiedCanEngage: { Icon: d.default, calloutType: "primary", headline: r().bb7b821a, detail: r().a4e254ff, inline: r().e5dc76d0 },
                            conversationControlsVerifiedCannotEngage: { Icon: d.default, calloutType: "primary", headline: r().ab105904, detail: r().a4e254ff, detailAction: { label: r().j1b02fd8, link: { pathname: "/i/premium_sign_up", state: { referring_page: "verified_only_replies" } } }, inline: r().fd1cda7a },
                            communityHiddenTweetEducation: { Icon: u.default, calloutType: "primary", headline: r().daba4484, detail: r().f956070a, inline: r().daba4484 },
                            communityRemovedMemberEducation: { Icon: u.default, calloutType: "primary", headline: r().daba4484, detail: r().cc17f408, inline: r().daba4484 },
                            exclusiveToSuperFollowersCreator: { Icon: m.default, calloutType: "exclusive", headline: r().j620ce06, detail: r().bd414b44, inline: r().bd414b44 },
                            exclusiveToSuperFollowersReplyOwn: { Icon: m.default, calloutType: "exclusive", headline: r().j620ce06, detail: r().dd0da5d9, inline: r().dd0da5d9 },
                            exclusiveToSuperFollowersReplyOthers: { Icon: m.default, calloutType: "exclusive", headline: r().g1c6a77e, detail: r().d3b143d7, inline: r().f6337117 },
                            trustedFriendsCreator: { Icon: b.default, calloutType: "success", detail: r().g766a06d, inline: r().g766a06d },
                            trustedFriendsReplyOwn: { Icon: b.default, calloutType: "success", detail: r().g766a06d, inline: r().g766a06d },
                            trustedFriendsReplyOthers: { Icon: b.default, calloutType: "success", detail: r().g766a06d, detailAction: { label: r().d7e50a66, link: "https://help.x.com/using-twitter/twitter-circle" }, inline: r().g766a06d },
                            linksDisabledInReplies: { Icon: p.default, calloutType: "primary", headline: r().j040a368, detail: r().b31d0af7, inline: r().eab0f780 },
                            premiumExclusive: { Icon: d.default, calloutType: "primary", headline: r().f17a1f54, detail: r().f17a1f54, inline: r().f17a1f54 },
                        }))({ redesignedLabelForSubscribedTweets: t }),
                        { displayMode: a, id: f, screenName: v, style: k, type: I } = e,
                        { Icon: x, calloutType: S, detail: Z, detailAction: A, headline: _, inline: P } = n[I],
                        T = "compact" === a,
                        L = "detail" === a,
                        M = L ? A : void 0,
                        F = L ? _ : void 0,
                        D = w(L ? Z : P, v),
                        R = "exclusiveToSuperFollowersCreator" === I ? r().bd414b44 : r().a0953370,
                        N = g.includes(I) && t && o.createElement(C.ZP, { background: "gray0", style: T ? E.marginTop : null }, R),
                        O = "premiumExclusive" === I ? o.createElement(C.ZP, { background: "gray0", style: T ? E.marginTop : null }, _) : null;
                    return o.createElement(i.Z, { style: k }, O || N || (T ? null : o.createElement(h.Z, { Icon: x, action: M, headline: F, id: f, text: D, type: S, withThumbnail: !0 })));
                },
                E = f.default.create((e) => ({ marginTop: { marginTop: e.spaces.space8 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReportCenter~bundle.SafetyCenter-e16dbf02.70664f0a.js.map
