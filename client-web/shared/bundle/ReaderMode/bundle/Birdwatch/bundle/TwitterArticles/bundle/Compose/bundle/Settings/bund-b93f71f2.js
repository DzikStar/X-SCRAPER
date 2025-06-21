"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"],
    {
        306677: (e, t, i) => {
            i.d(t, { D: () => a });
            var o = i(202784),
                n = i(325686),
                s = i(392237),
                r = i(390686);
            function a(e) {
                const { id: t, onFullyVisible: i, position: s, testID: a } = e,
                    c = o.useMemo(() => {
                        switch (s) {
                            case "top":
                                return l.topPixel;
                            case "bottom":
                                return l.bottomPixel;
                            case "right":
                                return l.rightPixel;
                            case "left":
                                return l.leftPixel;
                            default:
                                return;
                        }
                    }, [s]),
                    d = o.useCallback(
                        (e) => {
                            e.visibleFraction() >= r.xn && i();
                        },
                        [i],
                    );
                return o.createElement(n.Z, { style: [l.impressionPixelContainer, c], testID: a }, o.createElement(r.ZP, { key: t, onPlacementChange: d }, o.createElement(n.Z, { style: l.impressionPixel })));
            }
            const l = s.default.create((e) => ({ impressionPixel: { visibility: "hidden", height: "1px", width: "1px" }, impressionPixelContainer: { position: "absolute" }, topPixel: { top: "0", end: "50%" }, bottomPixel: { bottom: "0", end: "50%" }, rightPixel: { end: "0", top: "50%" }, leftPixel: { start: "0", top: "50%" } }));
        },
        778955: (e, t, i) => {
            i.d(t, { Z: () => Jt });
            var o = i(807896),
                n = (i(136728), i(202784)),
                s = i(576648),
                r = i(782261),
                a = i(537392),
                l = i(786475),
                c = i(731708),
                d = i(696591),
                u = i(15342),
                m = i(284702),
                h = i(495232),
                _ = i(522171),
                w = i(990804),
                p = i(190286),
                k = i(392237),
                b = i(111677),
                C = i.n(b),
                g = i(912021),
                y = i(123751),
                A = i(692518),
                f = i(933869),
                v = i(553161),
                T = i(931974),
                S = i(467691),
                E = i(965283),
                x = i(375260),
                N = i(706758),
                P = i(518966),
                R = i(200770),
                F = i(758600),
                I = i(349972),
                Z = i(155080),
                L = i(312922),
                D = i(163889),
                M = i(163390),
                B = i(942893),
                O = i(701796),
                V = i(214647),
                U = i(500002),
                H = i(175856),
                q = i(443781),
                W = i(369241),
                z = i(233391),
                Q = i(71620),
                $ = i(870358),
                j = i(429650),
                K = i(668214),
                G = i(575652),
                X = i(482176),
                Y = i(491963),
                J = i(723819),
                ee = i(411611),
                te = i(549116),
                ie = i(137855),
                oe = i(390387),
                ne = i(38562),
                se = i(601576),
                re = i(632960),
                ae = i(836255),
                le = i(695427),
                ce = i(268617),
                de = i(977154),
                ue = i(919022);
            const me = (e, t) => (0, H.t5)(e, H.y6),
                he = (e) => re.tS(e, ""),
                _e = (e, t) => (0, te.Yt)(e, t.tweet.id_str),
                we = (e, t) => (0, ie.HP)(e, t.tweet.id_str),
                pe = (e, t) => {
                    const i = (t.tweet.retweeted_status || t.tweet).community_id_str,
                        o = i ? Y.ZP.select(e, i) : void 0;
                    return (0, $.Wh)(o?.role);
                },
                ke = (e, t) => {
                    const i = (t.tweet.retweeted_status || t.tweet).community_id_str,
                        o = i ? Y.ZP.select(e, i) : void 0;
                    return "CommunityUserRemovedModerationState" === o?.viewer_relationship?.moderation_state?.__typename;
                },
                be = (e, t) => {
                    const i = t.tweet,
                        o = i?.card?.binding_values?.domain?.string_value,
                        n = i?.card?.url;
                    return n && o ? (0, G.T2)(e, n, o) : void 0;
                },
                Ce = (e, t) => {
                    const i = t.tweet,
                        o = i?.card?.binding_values?.domain?.string_value;
                    return o ? (0, G.L4)(e, o) : void 0;
                },
                ge = (e, t) => {
                    const { bookmarkFolderId: i } = t;
                    if (i) {
                        const t = X.ZP.select(e, i);
                        return t?.name;
                    }
                },
                ye = (0, K.Z)()
                    .propsFromState(() => ({ brandedLikeAnimationData: (0, ee.qh)(), composerData: he, dataSaverMode: ne.IX, isArticleDomainMatched: Ce, isInEditHistory: le.l0, isCommunityMember: pe, isViewerBannedFromCommunity: ke, liveCounts: _e, viewerUser: ue.ZP.selectViewerUser, nudgeActionTaken: we, sessionToken: oe.Jv, shouldShowArticleNudgeTip: me, wasArticleVisited: be, bookmarkFolderName: ge, replyVotingSurveyClicked: ne.yO, showGraduatedAccess: J.nQ }))
                    .adjustStateProps(({ bookmarkFolderName: e, brandedLikeAnimationData: t, composerData: i, dataSaverMode: o, isArticleDomainMatched: n, isCommunityMember: s, isInEditHistory: r, isViewerBannedFromCommunity: a, liveCounts: l, nudgeActionTaken: c, replyVotingSurveyClicked: d, sessionToken: u, shouldShowArticleNudgeTip: m, showGraduatedAccess: h, viewerUser: _, wasArticleVisited: w }, { tweet: p }) => ({ brandedLikeAnimationData: t, dataSaverMode: o, isArticleDomainMatched: n, isCommunityMember: s, isViewerBannedFromCommunity: a, isInEditHistory: r, liveCounts: l, nudgeActionTaken: c, replyVotingSurveyClicked: d, sessionToken: u, showGraduatedAccess: h, shouldShowArticleNudgeTip: m, wasArticleVisited: w, bookmarkFolderName: e, composerHasData: i.length > 0 && !(0, j.m_)(i[0]), viewerUserFavCount: _?.favourites_count || 0 }))
                    .propsFromActions(() => ({ addFlag: H.pj, addToast: se.fz, createLocalApiErrorHandler: (0, Q.zr)("TWEET_ACTIONS_BAR_CONTAINER"), onBookmark: ae.Z.bookmark, onLike: ae.Z.like, onRetweet: ae.Z.retweet, onUnbookmark: ae.Z.unbookmark, onUnlike: ae.Z.unlike, onUnretweet: ce.Z, removeTweetsFromBookmarksTimeline: de.qk, removeTweetFromBookmarkFolder: X.ZP.removeTweetFromBookmarkFolder, removeTweetFromBookmarkFolderTimeline: X.aL, updateCounts: ae.Z.updateCounts, resetDraft: re.Es, setArticlesVisited: G.Ji, setReplyVotingSurveyClicked: ne.e6, setTweetNudgeActionTaken: ie.NR, updateLiveCounts: te.NR }))
                    .withAnalytics();
            var Ae = i(688715),
                fe = i(529356),
                ve = i(952793),
                Te = i(686689),
                Se = i(533128);
            const Ee = C().f755f710,
                xe = C().ced4abbe,
                Ne = C().d00e1d2a,
                Pe = C().e6057014,
                Re = () => {
                    const e = (0, Ae.ju)("https://help.x.com/rules-and-policies/enforcement-options"),
                        t = n.createElement(c.ZP, { color: "blue500", link: e, withInteractiveStyling: !0 });
                    return n.createElement(C().I18NFormatMessage, { $i18n: "db79453f" }, n.cloneElement(t, null, C().g562676f));
                },
                Fe = () => {
                    const e = (0, Ae.ju)("https://help.x.com/rules-and-policies/enforcement-options"),
                        t = n.createElement(c.ZP, { color: "blue500", link: e, withInteractiveStyling: !0 });
                    return n.createElement(C().I18NFormatMessage, { $i18n: "i2a606d1" }, n.cloneElement(t, null, C().ee574c37));
                },
                Ie = C().ba352986,
                Ze = C().d09e76d8,
                Le = C().cfa1f802,
                De = C().af27a0f8,
                Me = C().id089506,
                Be = C().j24c37b2,
                Oe = ({ actionType: e, communityId: t, limitedActionsConfig: i, trustedFriendsScreenName: o, viewCountsEnabled: s }) => {
                    const r = Ee,
                        a = i === Ve.HiddenCommunityTweet,
                        l = i === Ve.NonCompliant,
                        c = i === Ve.CommunityNonMember || i === Ve.CommunityNonMemberClosedCommunity || i === Ve.CommunityNonMemberPublicCommunity,
                        d = i === Ve.CommunityMemberRemoved,
                        u = i === Ve.TrustedFriendsTweet,
                        m = i === Ve.FreedomOfSpeechNotReach;
                    if (!(a || l || c || d || u || m || t)) return null;
                    const h = (({ actionType: e, communityId: t, isCommunityMemberRemoved: i, isCommunityNonMember: o, isFreedomOfSpeechNotReach: n, isHiddenCommunityTweet: s, isNonCompliantTweet: r, isTrustedFriendsTweet: a, viewCountsEnabled: l }) => {
                            if (s || i) return C().cac4e916;
                            if (o || t) return e === Se.d.Reply ? C().ba352986 : C().cb18be32;
                            if (a && e === Se.d.Retweet) return C().dbb5fd8e;
                            if (r || n)
                                switch (e) {
                                    case Se.d.Reply:
                                        return C().ae2c8a1e;
                                    case Se.d.Like:
                                        return C().afe7ba26;
                                    case Se.d.AddToBookmarks:
                                        return C().df9e2356;
                                    case Se.d.CopyLink:
                                    case Se.d.ShareTweetVia:
                                        return C().jead3bc2;
                                    case Se.d.ViewTweetActivity:
                                        return C().h2a668b8;
                                    case Se.d.Retweet:
                                    case Se.d.QuoteTweet:
                                        return C().bd85267e;
                                    default:
                                        return "";
                                }
                            return l && Se.d.ViewTweetActivity ? C().dcc05a7e : "";
                        })({ actionType: e, isNonCompliantTweet: l, isCommunityNonMember: c, isHiddenCommunityTweet: a, isCommunityMemberRemoved: d, isTrustedFriendsTweet: u, isFreedomOfSpeechNotReach: m, viewCountsEnabled: s, communityId: t }),
                        _ = (({ actionType: e, communityId: t, isCommunityMemberRemoved: i, isCommunityNonMember: o, isFreedomOfSpeechNotReach: s, isHiddenCommunityTweet: r, isNonCompliantTweet: a, isTrustedFriendsTweet: l, trustedFriendsScreenName: c, viewCountsEnabled: d }) => (d && e === Se.d.ViewTweetActivity ? C().e213fada : r || i ? C().g0954ea6 : o || t ? (e === Se.d.Reply ? C().e7969518 : C().g2dc874a) : l && e === Se.d.Retweet && c ? n.createElement(C().I18NFormatMessage, { $i18n: "fe93026b", username: c }) : a ? n.createElement(Re, null) : s ? n.createElement(Fe, null) : ""))({ actionType: e, isNonCompliantTweet: l, isCommunityNonMember: c, isHiddenCommunityTweet: a, isCommunityMemberRemoved: d, isTrustedFriendsTweet: u, isFreedomOfSpeechNotReach: m, trustedFriendsScreenName: o, viewCountsEnabled: s, communityId: t });
                    return { headline: h, subtext: _, actionLabel: r };
                },
                Ve = Object.freeze({ HiddenCommunityTweet: "community_tweet_hidden", CommunityNonMember: "community_tweet_non_member", CommunityNonMemberClosedCommunity: "community_tweet_non_member_closed_community", CommunityNonMemberPublicCommunity: "community_tweet_non_member_public_community", CommunityMemberRemoved: "community_tweet_member_removed", NonCompliant: "non_compliant", TrustedFriendsTweet: "limit_trusted_friends_tweet", FreedomOfSpeechNotReach: "freedom_of_speech_not_reach" }),
                Ue = (e) => {
                    const { actionType: t, communityId: i, limitedActionResults: s, limitedActionsConfig: r, onAction: a, onClose: l, trustedFriendsScreenName: c, tweetPermalink: d } = e,
                        u = (0, ve.hC)("tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled"),
                        m = (0, ve.hC)("tweet_with_visibility_results_partial_gql_limited_actions_enabled"),
                        h = (0, ve.hC)("tweet_with_visibility_results_all_gql_limited_actions_enabled"),
                        _ = (0, ve.hC)("view_counts_public_visibility_enabled"),
                        w = (0, ve.hC)("communities_non_member_reply_enabled");
                    let p;
                    return (
                        u &&
                            (m || h) &&
                            (p = (({ actionType: e, communityId: t, communityNonMemberCanReply: i, limitedActionResults: o, onAction: s, tweetPermalink: r }) => {
                                const a = o?.find((t) => t.action === e);
                                let l,
                                    c,
                                    d,
                                    u = Ee;
                                if (!a || !a.prompt) return t ? (i ? { headline: De, subtext: Me, actionLink: `/i/communities/${t}/`, actionLabel: Be, secondaryActionLabel: c, onSecondaryAction: d } : { headline: Ie, subtext: Ze, actionLink: `/i/communities/${t}/`, actionLabel: Le, secondaryActionLabel: c, onSecondaryAction: d }) : null;
                                const { prompt: m } = a,
                                    h = n.createElement(Te.Z, { entities: m.headline.entities, rtl: m.headline.rtl, text: m.headline.text }),
                                    _ = n.createElement(Te.Z, { entities: m.subtext.entities, rtl: m.subtext.rtl, text: m.subtext.text });
                                switch (m?.ctaType) {
                                    case "SeeConversation":
                                        r && ((l = r), (u = xe), (c = Ee), (d = s));
                                        break;
                                    case "JoinCommunity":
                                        t && ((l = `/i/communities/${t}/join`), (u = Ne));
                                        break;
                                    case "AskToJoinCommunity":
                                        t && ((l = `/i/communities/${t}/join`), (u = Pe));
                                }
                                return { headline: h, subtext: _, actionLink: l, actionLabel: u, secondaryActionLabel: c, onSecondaryAction: d };
                            })({ actionType: t, communityId: i, communityNonMemberCanReply: w, onAction: a, tweetPermalink: d, limitedActionResults: s })),
                        p || (p = Oe({ limitedActionsConfig: r, actionType: t, viewCountsEnabled: _, trustedFriendsScreenName: c, communityId: i })),
                        p ? n.createElement(fe.Z, (0, o.Z)({ graphicDisplayMode: "none", onAction: a, onClose: l }, p)) : null
                    );
                };
            var He = i(638236),
                qe = i(818088),
                We = i(898361),
                ze = i(630715),
                Qe = i(717160),
                $e = i(186444),
                je = i(72591),
                Ke = i(738398),
                Ge = i(954300);
            const Xe = C().gb303814,
                Ye = C().de2d83d6,
                Je = C().f14df406,
                et = C().e05c00b4,
                tt = C().f61c4bb0,
                it = C().id35970e,
                ot = C().ff9348b8,
                nt = C().d03241f8,
                st = C().j08dd2d4,
                rt = C().b7fde1ea,
                at = C().d9a2bd78,
                lt = ({ handleCopyLink: e }) => ({ text: et, onClick: e, Icon: ze.default }),
                ct = ({ handleCopyLink: e }) => ({ text: Je, onClick: e, Icon: ze.default }),
                dt = ({ handleDMShare: e }) => ({ text: tt, onClick: e, Icon: Qe.default }),
                ut = ({ handlePostVideo: e }) => ({ text: it, onClick: e, Icon: $e.default }),
                mt = (e, t, i) => (({ handleDownloadVideo: o }) => ({ text: at, onClick: e.handleDownloadVideo, link: i && t ? { pathname: t, download: !0 } : void 0, Icon: je.default }))(e),
                ht = ({ handleShare: e }) => ({ text: nt, onClick: e, Icon: He.Z }),
                _t = ({ handleShare: e }) => ({ text: ot, onClick: e, Icon: He.Z }),
                wt = Object.freeze({ BOOKMARK: "bookmark", COPY_LINK: "copy_link", DM: "dm", POST_VIDEO: "post_video", SHARE_VIA: "share_via", DOWNLOAD_VIDEO: "download_video" });
            function pt(e, t, i, o) {
                const { bookmarked: n, user: a } = e.retweeted_status ?? e,
                    { canBookmarkToFolders: l, isBookmarkedToFolder: c, isFocalTweet: d, isLoggedIn: u, isPromoted: h, isXSmall: _, withRemoveFromBookmarks: w } = i,
                    p = [wt.COPY_LINK, wt.SHARE_VIA, wt.DM, wt.BOOKMARK, wt.POST_VIDEO, wt.DOWNLOAD_VIDEO],
                    k = {
                        [wt.BOOKMARK]: () => {
                            const i = w || n,
                                s = !(0, Se.$y)(t, e, Se.d.AddToBookmarks),
                                r = [];
                            return u && (!d && _ && (!i && s && r.push((({ handleBookmarkTweet: e }) => ({ text: Xe, onClick: e, Icon: qe.default }))(o)), i && r.push((({ handleUnbookmarkTweet: e }) => ({ text: st, onClick: e, Icon: Ke.default }))(o))), l && s && r.push((({ handleBookmarkTweetToFolder: e }) => ({ text: Ye, onClick: e, Icon: We.default }))(o)), i && c && r.push((({ handleUnbookmarkFromFolder: e }) => ({ text: rt, onClick: e, Icon: Ke.default }))(o))), r;
                        },
                        [wt.COPY_LINK]: () => {
                            if (!a.protected && s.Z.isAvailable() && !(0, Se.$y)(t, e, Se.d.CopyLink)) return [h ? ct(o) : lt(o)];
                        },
                        [wt.DM]: () => {
                            if (!a.protected && !(0, Se.$y)(t, e, Se.d.SendViaDm)) return [dt(o)];
                        },
                        [wt.POST_VIDEO]: () => {
                            if (!a.protected && !(0, Se.$y)(t, e, Se.d.PostVideo) && (0, Ge.wV)(e)) return [ut(o)];
                        },
                        [wt.DOWNLOAD_VIDEO]: () => {
                            if ((0, Ge.wV)(e)) {
                                const n = r.Z.getOriginalTweet(e),
                                    s = n.extended_entities?.media?.find((e) => "video" === e.type);
                                if (s && "video" === s.type) {
                                    const e = m.Z.extractVideoProps(y.Z.forTweet(n.id_str), s);
                                    if (e.source.downloadLink && t.isTrue("responsive_web_media_download_video_share_menu_enabled")) return [mt(o, e.source.downloadLink, i.isAnyPremiumSubscriber)];
                                }
                            }
                        },
                        [wt.SHARE_VIA]: () => {
                            const i = null != window.navigator.share;
                            if (!a.protected && !(0, Se.$y)(t, e, Se.d.ShareTweetVia) && i) return [h ? _t(o) : ht(o)];
                        },
                    },
                    b = p.flatMap((e) => k[e]() ?? []);
                return b;
            }
            var kt = i(851623),
                bt = (i(901951), i(620763)),
                Ct = i(400915),
                gt = i(58255),
                yt = i(125363),
                At = i(381904);
            const ft = C().fbfab656,
                vt = C().e668112c,
                Tt = (e) => {
                    const { actionItems: t, outerTweet: i, ...s } = e,
                        { activeItem: r } = (0, At.Y)(),
                        a = (0, yt.I0)(),
                        { isUserSpeakingRole: l } = (0, Ct.l7)(),
                        c = n.useCallback(() => {
                            l && (a((0, se.fz)({ text: vt })), gt.w.addSharing(r?.id || "", i.id_str));
                        }, [a, l, r, i]),
                        d = n.useMemo(() => {
                            const e = t.slice();
                            return l && e.unshift({ text: ft, onClick: c, Icon: bt.default }), e;
                        }, [t, c, l]);
                    return n.createElement(w.Z.ActionShare, (0, o.Z)({}, s, { actionItems: d }));
                },
                St = C().d4c339b9,
                Et = C().db0cb64f,
                xt = C().h6f99ac4,
                Nt = C().g1c463f6,
                Pt = C().a2e7377f,
                Rt = { InProgress: C().i47ad24c, Completion: C().def4a37c },
                Ft = C().f5d17674,
                It = C().d714acfa,
                Zt = C().b18dff26,
                Lt = C().c2453318,
                Dt = C().f88553c8,
                Mt = C().b5b36724,
                Bt = C().gce00a2a,
                Ot = C().g271f120,
                Vt = C().gad04d1a,
                Ut = C().d17df548,
                Ht = C().g062295e,
                qt = { component: "soft_intervention_nudge" },
                Wt = { component: "standardized_nudge" },
                zt = { component: "article_nudge" },
                Qt = { bookmark: kt.Z.bookmark, removeBookmark: kt.Z.removeBookmark },
                $t = { like: kt.Z.like, unlike: kt.Z.unlike },
                jt = { retweet: kt.Z.retweet, retweetConfirm: kt.Z.retweetConfirm, unretweet: kt.Z.unretweet, unretweetConfirm: kt.Z.unretweetConfirm },
                Kt = { favorite_count: "likeCount", quote_count: "quoteCount", reply_count: "replyCount", retweet_count: "retweetCount", view_count: "viewCount", bookmark_count: "bookmarkCount" },
                Gt = (e) => {
                    const t = document.createElement("textarea");
                    return (t.innerHTML = e), t.value;
                },
                Xt = Object.freeze({ replyCount: void 0, likeCount: void 0, retweetCount: void 0, viewCount: void 0, bookmarkCount: void 0, viewCountState: void 0 });
            class Yt extends n.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._shouldDisable = Se.$y.bind(null, this.context.featureSwitches)),
                        (this._articleNudgeEnabled = this.context.featureSwitches.isTrue("responsive_web_article_nudge_enabled")),
                        (this._viewCountsPublicVisibilityEnabled = this.context.featureSwitches.isTrue("view_counts_public_visibility_enabled")),
                        (this._randomSeed = Math.random()),
                        (this._getEngagementCount = (e) => {
                            const t = r.Z.getOriginalTweet(this.props.tweet),
                                i = Kt[e];
                            let o = 0;
                            const n = this.props.liveCounts[i];
                            if ("view_count" === e) {
                                const e = t?.views?.count;
                                o = ii(n, e);
                            } else {
                                const i = t[e];
                                if (((o = ii(n, i)), this._isEditTweetConsumptionEnabled(t) && t.isEdited && !this.props.isInEditHistory)) return r.Z.getAggregateCount(e, t, o);
                            }
                            return o;
                        }),
                        (this._getViewState = () => {
                            const { liveCounts: e, tweet: t } = this.props,
                                i = r.Z.getOriginalTweet(t);
                            return e.viewCountState || i?.views?.state || "Disabled";
                        }),
                        (this._renderSuperFollowerActionRetweetSubText = (e) => n.createElement(a.Fo, { query: ({ containerWidth: e }) => l.Z.isNarrowScreenWidth(e) }, (e) => (e ? n.createElement(c.ZP, null, Zt) : n.createElement(d.Z, null, Zt)))),
                        (this._possiblyRenderNudge = (0, g.Z)((e) => {
                            const { forwardPivotInfo: t, nudgeActionTaken: i, nudges: o, shouldShowArticleNudgeTip: s, tweet: r } = this.props,
                                { articleNudgeFollowed: a } = this.state,
                                { payload: l, source: c } = (0, E.p)(e, t, o, this._shouldShowArticleNudge());
                            return c === S.w.payload && l ? n.createElement(T.Z, { action: e, actionTaken: i, onActionTaken: this._handleSoftInterventionNudgeActionTaken, payload: l }) : c === S.w.forwardPivot && t ? n.createElement(v.Z, { action: e, actionTaken: i, forwardPivotInfo: t, onActionTaken: this._handleSoftInterventionNudgeActionTaken }) : c === S.w.article ? n.createElement(f.Z, { articleNudgeFollowed: a, key: "article-nudge", link: r?.card?.url, onClick: this._handleArticleClicked, shouldShowArticleNudgeTip: s }) : null;
                        })),
                        (this._renderShareAction = (e) => {
                            const { bookmarkFolderId: t, isFocalTweet: i, promotedContent: s, tweet: r, withRemoveFromBookmarks: c } = this.props,
                                { featureSwitches: d } = this.context;
                            return n.createElement(a.Fo, { query: ({ screenWidth: e }) => l.Z.isXSmallScreenWidth(e) }, (a) => {
                                const l = this._getShareMenuActionItems({ bookmarkFolderId: t, isFocalTweet: i, isXSmall: a, promotedContent: s, outerTweet: r, withRemoveFromBookmarks: c }),
                                    u = l.length < 1 || !0 === r.isPreviewDisplay,
                                    m = d.allTrue(["tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "tweet_with_visibility_results_all_gql_limited_actions_enabled"]),
                                    h = u && (r.limited_actions === Ve.NonCompliant || r.limited_actions === Ve.FreedomOfSpeechNotReach) && !m;
                                return n.createElement(Tt, (0, o.Z)({}, e, { actionItems: l, actionMenuDescription: this._possiblyRenderNudge(S.S.share), isDisabled: u && !h, isFaded: h, onMenuCancel: this._handleShareMenuCancel, onPress: this._handleSharePress(h), outerTweet: r, shouldAnimatePrompt: this.state.showSharePromptAnimation }));
                            });
                        }),
                        (this._shouldShowArticleNudge = () => {
                            const { forwardPivotInfo: e, isArticleDomainMatched: t, tweet: i, wasArticleVisited: o } = this.props,
                                { articleNudgeFollowed: n } = this.state,
                                { viewerUserId: s } = this.context,
                                r = i.promoted_content;
                            i.user || (0, D.ZP)("user not found for tweet", { extra: { tweetId: i.id_str } });
                            const a = i.retweeted_status?.user.id_str === s || i.user.id_str === s;
                            return this._articleNudgeEnabled && !e && !r && !a && !!t && (!o || n);
                        }),
                        (this._isShowRetweetActionMenuEnabled = () => {
                            const { isCommunityMember: e, isViewerBannedFromCommunity: t, tweet: i } = this.props,
                                o = r.Z.getOriginalTweet(i);
                            return this._isTweetRetweeted(o) || !this._shouldDisable(o, Se.d.ShowRetweetActionMenu, e, t);
                        }),
                        (this._handleMenuCancel = (e) => {
                            const { addFlag: t, shouldShowArticleNudgeTip: i, wasArticleVisited: o } = this.props;
                            this._scribeNudgeAction({ tweetActionName: e, action: "cancel" });
                            const n = this._shouldShowArticleNudge();
                            n && i && t(H.y6), this._articleNudgeEnabled && n && this._scribeArticleNudgeAction({ action: "cancel", element: o ? "after_read" : void 0 });
                        }),
                        (this._handleLikeMenuCancel = () => {
                            this._handleMenuCancel(S.S.like);
                        }),
                        (this._handleRetweetMenuCancel = () => {
                            this._handleMenuCancel(S.S.retweet);
                        }),
                        (this._handleShareMenuCancel = () => {
                            this._handleMenuCancel(S.S.share);
                        }),
                        (this._handleSoftInterventionNudgeActionTaken = (e, t) => {
                            const { addToast: i, nudgeActionTaken: o, setTweetNudgeActionTaken: n, tweet: s } = this.props;
                            this._scribeNudgeAction({ tweetActionName: e, element: "read_article", action: "click" }), o || (n(s.id_str), t && i({ text: t }));
                        }),
                        (this._handleHideConfirmation = () => {
                            this.setState({ showReplyDiscardTweetConfirmation: !1, showRetweetDiscardTweetConfirmation: !1 });
                        }),
                        (this._handleCloseEducationPrompt = () => {
                            this.setState({ showDisabledActionsEducation: !1 });
                        }),
                        (this._handleOpenEducationPrompt = (e) => () => {
                            this.setState({ showDisabledActionsEducation: !0, disabledAction: e });
                        }),
                        (this._scribeArticleNudgeActionsOnRetweet = () => {
                            const { isArticleDomainMatched: e, wasArticleVisited: t } = this.props;
                            this._articleNudgeEnabled && (this._scribeArticleNudgeAction({ element: "check_url", action: e ? "matched" : "not_matched" }), e && this._scribeArticleNudgeAction({ element: "check_url", action: t ? "visited" : "not_visited" }), this._shouldShowArticleNudge() && this._scribeArticleNudgeAction({ action: "impression" }));
                        }),
                        (this._defaultToComposerOnRetweetIfEnabled = () => {
                            const { history: e, isCommunityMember: t, isViewerBannedFromCommunity: i, promotedContent: o, tweet: n } = this.props,
                                { featureSwitches: s } = this.context,
                                a = r.Z.getOriginalTweet(n);
                            this._shouldDisable(a, Se.d.QuoteTweet, t, i) || this._isShowRetweetActionMenuEnabled() ? this.setState({ isQuoteTweetPrioritized: !1 }) : s.isTrue("targeted_project_friday_enabled") && (this.setState({ isQuoteTweetPrioritized: !0 }), this._shouldNudgeForceActionMenu(S.S.retweet) || (this._handleQuoteTweet(), e.push({ pathname: "/compose/post", state: { quotedStatus: r.Z.getOriginalTweet(n), promotedContent: o, hasArticleNudge: !1 } })));
                        }),
                        (this._handleRetweetPress = () => {
                            const { nudgeActionTaken: e } = this.props,
                                { viewerUserId: t } = this.context;
                            if (!t) return this._scribeAction(u.d.RETWEET), void this._showLoginSignupSheet(z.BH.retweet);
                            this._scribeNudgeAction({ tweetActionName: S.S.retweet, element: e ? "after_read" : void 0, action: "impression" }), this._scribeArticleNudgeActionsOnRetweet(), this._defaultToComposerOnRetweetIfEnabled();
                        }),
                        (this._handleRetweet = () => {
                            const { createLocalApiErrorHandler: e, isArticleDomainMatched: t, nudgeActionTaken: i, onRetweet: o, promotedContent: n, tweet: s, wasArticleVisited: r } = this.props;
                            this._scribeAction(u.d.RETWEET),
                                this._scribeSoftNudgeWithQuoteTweetAction("soft_nudge_with_qt_retweet"),
                                this._scribeNudgeAction({ tweetActionName: S.S.retweet, element: i ? "retweet_after_read" : "retweet", action: "click" }),
                                this._articleNudgeEnabled && t && this._scribeArticleNudgeAction({ element: r ? "retweet_after_read" : "retweet", action: "click" }),
                                this._modRetweets(1),
                                o(s.id_str, { promotedContent: n })
                                    .then(() => {
                                        this.props.addToast({ ariaOnly: !0, text: Ft }), this._maybeRedirectToGraduatedAccess();
                                    })
                                    .catch((t) => {
                                        this._modRetweets(-1), e(F.l)(t);
                                    });
                        }),
                        (this._maybeRedirectToGraduatedAccess = () => {
                            const { history: e, showGraduatedAccess: t } = this.props;
                            t && e.push({ pathname: "/i/graduated-access", query: { graduatedAccessScribeSrc: "compose" } });
                        }),
                        (this._handleUnretweet = () => {
                            const { createLocalApiErrorHandler: e, onUnretweet: t, promotedContent: i, tweet: o } = this.props;
                            this._scribeAction(u.d.UNRETWEET),
                                this._scribeSoftNudgeWithQuoteTweetAction("soft_nudge_with_qt_unretweet"),
                                this._modRetweets(-1),
                                t(o.id_str, { promotedContent: i })
                                    .then(() => {
                                        this.props.addToast({ ariaOnly: !0, text: It });
                                    })
                                    .catch((t) => {
                                        this._modRetweets(1), e(L.P)(t);
                                    });
                        }),
                        (this._handleQuoteTweet = () => {
                            const { composerHasData: e, isArticleDomainMatched: t, nudgeActionTaken: i, wasArticleVisited: o } = this.props;
                            this._scribeAction(u.d.QUOTE), this._scribeSoftNudgeWithQuoteTweetAction("soft_nudge_with_qt_quote"), this._scribeNudgeAction({ tweetActionName: S.S.retweet, element: i ? "retweet_with_comment_after_read" : "retweet_with_comment", action: "click" }), this._articleNudgeEnabled && t && this._scribeArticleNudgeAction({ element: o ? "retweet_with_comment_after_read" : "retweet_with_comment", action: "click" }), e && this.setState({ showRetweetDiscardTweetConfirmation: !0 });
                        }),
                        (this._handleViewEngagements = () => {
                            this._scribeAction(u.d.VIEW_ENGAGEMENTS);
                        }),
                        (this._handleConfirmQuoteTweet = () => {
                            const { resetDraft: e } = this.props;
                            e(), this._handleHideConfirmation();
                        }),
                        (this._handleLikeMenuPress = () => {
                            const { nudgeActionTaken: e } = this.props;
                            this._scribeNudgeAction({ tweetActionName: S.S.like, element: e ? "after_read" : void 0, action: "impression" });
                        }),
                        (this._handleOnLikeAnimationStart = () => {
                            const { brandedLikeAnimationData: e } = this.props;
                            e &&
                                window.requestAnimationFrame(() => {
                                    this._scribe({ component: "tweet", element: "branded_like", action: "play", data: { branded_campaign_details: { triggering_hashtag: e.hashtag, like_asset_url: e.assetUrl, other_hashtags: e.otherHashtags } } });
                                });
                        }),
                        (this._handleLike = () => {
                            const { featureSwitches: e, viewerUserId: t } = this.context,
                                { createLocalApiErrorHandler: i, nudgeActionTaken: o, onLike: n, onLikeSuccess: s, onUnlike: a, promotedContent: l, tweet: c, viewerUserFavCount: d } = this.props,
                                u = !r.Z.getOriginalTweet(c).favorited;
                            t
                                ? u
                                    ? (this._scribeNudgeAction({ tweetActionName: S.S.like, element: o ? "like_after_read" : "like", action: "click" }),
                                      this._modLikes(1),
                                      n(c.id_str, { promotedContent: l })
                                          .then(() => {
                                              const t = d + 1;
                                              t < e.getNumberValue("focused_timeline_actions_onboarding_likes") ? this.props.addToast({ text: Rt.InProgress }) : t === e.getNumberValue("focused_timeline_actions_onboarding_likes") && this.props.addToast({ text: Rt.Completion }), s && s();
                                          })
                                          .catch((e) => {
                                              this._modLikes(-1), this._scribe({ element: "like_button", action: "error" }), i(R.o)(e);
                                          }))
                                    : (this._modLikes(-1),
                                      a(c.id_str, { promotedContent: l }).catch((e) => {
                                          this._modLikes(1), this._scribe({ element: "like_button", action: "error" }), i(Z.l)(e);
                                      }))
                                : this._showLoginSignupSheet(z.BH.like),
                                this._scribeAction(u ? "favorite" : "unfavorite");
                        }),
                        (this._handleBookmarkTweet = () => {
                            const { createLocalApiErrorHandler: e, tweet: t } = this.props,
                                i = r.Z.getOriginalTweet(t),
                                o = !!this.context.userClaims?.isTrueAndEnabled("subscriptions_feature_1002");
                            this.props.onBookmark(i.id_str).then(
                                () => {
                                    this.props.addToast({ action: { label: Lt, onAction: o ? this._handleBookmarkTweetToFolder : this._handleUpsell }, text: xt });
                                },
                                (t) => {
                                    e(P.h)(t), this._scribeAction("bookmark_error");
                                },
                            ),
                                this._scribeAction("bookmark");
                        }),
                        (this._handleUnBookmarkFromFolder = () => {
                            const { bookmarkFolderId: e, bookmarkFolderName: t, createLocalApiErrorHandler: i, removeTweetFromBookmarkFolder: o, tweet: n } = this.props,
                                s = r.Z.getOriginalTweet(n);
                            e &&
                                o(e, { tweetId: s.id_str }).then(
                                    () => {
                                        this._scribe({ component: "bookmark_folder", element: "remove", action: "success" }), this.props.addToast({ text: Pt({ bookmarkFolderName: t }) });
                                    },
                                    (e) => {
                                        i(P.h)(e), this._scribe({ component: "bookmark_folder", element: "remove", action: "error" });
                                    },
                                );
                        }),
                        (this._handleBookmarkTweetToFolder = () => {
                            const { onBookmark: e, tweet: t } = this.props,
                                i = r.Z.getOriginalTweet(t);
                            e(i.id_str);
                            const { history: o } = this.props;
                            o.push({ pathname: "/i/bookmarks/add", state: { tweet_id: i.id_str } }), this._scribe({ element: "add_to_folder", action: "click" });
                        }),
                        (this._handleUnbookmarkTweet = () => {
                            const { bookmarkFolderId: e, createLocalApiErrorHandler: t, tweet: i } = this.props,
                                { viewerUserId: o } = this.context,
                                n = r.Z.getOriginalTweet(i);
                            this.props.onUnbookmark(n.id_str).then(
                                () => {
                                    this.props.removeTweetsFromBookmarksTimeline({ [n.id_str]: !0 }), e && o && this.props.removeTweetFromBookmarkFolderTimeline(e, n.id_str, o), this.props.addToast({ text: Nt });
                                },
                                (e) => {
                                    t(I.j)(e), this._scribeAction("unbookmark_error");
                                },
                            ),
                                this._scribeAction("unbookmark");
                        }),
                        (this._handleUpsell = () => {
                            const { history: e } = this.props;
                            e.push({ pathname: "/i/verified-get-verified", state: { variant: "BookmarkFolders" } });
                        }),
                        (this._handleAnalyticsPress = () => {
                            this._scribeAction("analytics");
                        }),
                        (this._handleReplyPress = () => {
                            const { onReplyPress: e } = this.props;
                            this._showReplyComposer(), e && e();
                        }),
                        (this._showReplyComposer = () => {
                            const { viewerUserId: e } = this.context,
                                { contextualClientEventInfo: t, history: i, location: o, promotedContent: n, socialContext: s, tweet: a } = this.props;
                            this._scribeAction("reply");
                            const l = r.Z.getOriginalTweet(a);
                            e ? (o.pathname.includes("mediaViewer") ? i.push({ state: { contextualClientEventInfo: t, focusComposer: !1, promotedContent: n, socialContext: s }, pathname: a.permalink }) : i.push({ state: { inReplyToStatusId: l.id_str, isSelfThreadReply: (0, V.aT)({ tweet: a, viewerUserId: e }), promotedContent: n }, pathname: "/compose/post" })) : this._showLoginSignupSheet(z.BH.reply);
                        }),
                        (this._handleConfirmReplyTweet = () => {
                            const { resetDraft: e } = this.props;
                            e(), this._handleHideConfirmation(), this._showReplyComposer();
                        }),
                        (this._handleDMShare = () => {
                            const { viewerUserId: e } = this.context,
                                { history: t, nudgeActionTaken: i, tweet: o } = this.props;
                            this._scribeAction("share_via_dm"), this._scribeNudgeAction({ tweetActionName: S.S.share, element: i ? "share_tweet_after_read" : "share_tweet", action: "click" }), e ? t.push({ state: { tweetAttachment: r.Z.getOriginalTweet(o) }, pathname: "/messages/compose" }) : this._showLoginSignupSheet(z.BH.dmshare);
                        }),
                        (this._handleCopyLink = () => {
                            const { nudgeActionTaken: e, sessionToken: t } = this.props;
                            s.Z.setString((0, O.w)(this.props.tweet.permalink, t)), this.props.addToast({ text: Dt }), this._scribeAction("copy_link"), this._scribeNudgeAction({ tweetActionName: S.S.share, element: e ? "share_tweet_after_read" : "share_tweet", action: "click" });
                        }),
                        (this._handlePostVideo = () => {
                            const { viewerUserId: e } = this.context,
                                { history: t, nudgeActionTaken: i, tweet: o } = this.props;
                            if ((this._scribeAction("post_video"), this._scribeNudgeAction({ tweetActionName: S.S.share, element: i ? "share_tweet_after_read" : "share_tweet", action: "click" }), !e)) return void this._showLoginSignupSheet(z.BH.generic);
                            const n = o?.entities?.media?.find((e) => "video" === e.type)?.expanded_url;
                            n && t.push({ pathname: "/compose/post", query: { text: (0, A.j)((0, O.w)(n)) } });
                        }),
                        (this._handleDownloadVideo = () => {
                            const { history: e, userClaims: t, viewerUserId: i } = this.context,
                                { tweet: o } = this.props,
                                n = t.isAnyPremiumSubscriber();
                            if ((this._scribeAction("download"), !i)) return void this._showLoginSignupSheet(z.BH.generic);
                            const s = o.extended_entities?.media?.find((e) => "video" === e.type);
                            if (!s || "video" !== s.type) return;
                            const r = m.Z.extractVideoProps(y.Z.forTweet(o.id_str), s).source.downloadLink;
                            !n && r && e.push("/i/verified-get-verified", { variant: "VideoDownload" });
                        }),
                        (this._handleSharePress = (e) => () => {
                            const { nudgeActionTaken: t } = this.props;
                            e && this._handleOpenEducationPrompt(Se.d.CopyLink)(), this._scribeAction("share_menu_click"), this._scribeNudgeAction({ tweetActionName: S.S.share, element: t ? "after_read" : void 0, action: "impression" });
                        }),
                        (this._handleGrokPress = () => {
                            this._scribeAction("grok_menu_click");
                        }),
                        (this._handleShare = () => {
                            const { nudgeActionTaken: e, sessionToken: t, tweet: i } = this.props,
                                o = r.Z.getOriginalTweet(i),
                                n = this.context.featureSwitches.isTrue("responsive_web_share_only_tweet_url_omit_title_and_text"),
                                s = (0, O.w)(o.permalink, t),
                                a = St({ fullName: o.user.name, screenName: o.user.screen_name }),
                                l = Et({ fullName: o.user.name, screenName: o.user.screen_name, tweet: Gt(o.text) }),
                                c = n ? { url: s } : { title: a, text: l, url: s };
                            navigator
                                .share(c)
                                .then(() => {
                                    this._scribeAction("share"), this._scribeNudgeAction({ tweetActionName: S.S.share, element: e ? "share_tweet_after_read" : "share_tweet", action: "click" });
                                })
                                .catch(() => {
                                    this._scribeAction("share_error");
                                });
                        }),
                        (this._replyWrapper = ({ children: e }) => {
                            const { displayStyle: t, tweet: i } = this.props,
                                o = r.Z.getOriginalTweet(i);
                            if ("limited_replies" !== o.limited_actions || !o.conversation_control) return e;
                            const s = "block" !== t,
                                a = o.conversation_control.policy,
                                l = o.conversation_control.conversation_owner.screen_name,
                                c = h.Z.getEducationType(a, !1);
                            return c ? n.createElement(x.Z, { screenName: l, scribeElement: "disabled_reply", style: ei.conversationControlsAnchor, tweetPermalink: s ? o.permalink : void 0, type: c }, e) : null;
                        }),
                        (this._handleCloseLoginSignupSheet = () => {
                            this.setState({ showLoginSignupSheet: !1 });
                        }),
                        (this._handleArticleClicked = () => {
                            const { setArticlesVisited: e, tweet: t } = this.props,
                                i = t?.card?.url;
                            i && (e(i), this._scribeArticleNudgeAction({ element: "read_article", action: "click" }), this.setState({ articleNudgeFollowed: !0 }));
                        }),
                        (this._getShareMenuActionItems = (0, g.Z)(({ bookmarkFolderId: e, isFocalTweet: t, isXSmall: i, outerTweet: o, promotedContent: n, withRemoveFromBookmarks: s }) => pt(o, this.context.featureSwitches, { canBookmarkToFolders: !!this.context.userClaims?.isTrueAndEnabled("subscriptions_feature_1002"), isBookmarkedToFolder: null != e, isFocalTweet: !!t, isLoggedIn: this.context.viewerUserId, isXSmall: !!i, isPromoted: null != n, withRemoveFromBookmarks: s, isAnyPremiumSubscriber: !!this.context.userClaims.isAnyPremiumSubscriber() }, { handleBookmarkTweet: this._handleBookmarkTweet, handleBookmarkTweetToFolder: this._handleBookmarkTweetToFolder, handleCopyLink: this._handleCopyLink, handleDMShare: this._handleDMShare, handlePostVideo: this._handlePostVideo, handleShare: this._handleShare, handleUnbookmarkTweet: this._handleUnbookmarkTweet, handleUnbookmarkFromFolder: this._handleUnBookmarkFromFolder, handleDownloadVideo: this._handleDownloadVideo }))),
                        (this._getRetweetWithCommentLink = (0, g.Z)((e, t, i) => ({ pathname: "/compose/post", state: { quotedStatus: e, promotedContent: t, hasArticleNudge: i } }))),
                        (this._showLoginSignupSheet = (e) => {
                            this.setState({ showLoginSignupSheet: !0, loginSignupSheetDisplayMode: e });
                        }),
                        (this._modLikes = (e) => {
                            const { liveCounts: t, tweet: i, updateLiveCounts: o } = this.props;
                            t.likeCount && o({ tweetId: i.id_str, liveCounts: { likeCount: t.likeCount + e } });
                        }),
                        (this._modRetweets = (e) => {
                            const { liveCounts: t, tweet: i, updateLiveCounts: o } = this.props;
                            t.retweetCount && o({ tweetId: i.id_str, liveCounts: { retweetCount: t.retweetCount + e } });
                        }),
                        (this._handleLivePipelineUpdate = (e) => {
                            const { bookmark_count: t, like_count: i, quote_count: o, reply_count: n, retweet_count: s, view_count_info: r } = e.tweet_engagement,
                                { liveCounts: a, updateLiveCounts: l } = this.props,
                                c = { ...a };
                            i && (c.likeCount = ii(a.likeCount, i)), o && (c.quoteCount = ii(a.quoteCount, o)), s && (c.retweetCount = ii(a.retweetCount, s)), n && (c.replyCount = ii(a.replyCount, n)), t && (c.bookmarkCount = ii(a.bookmarkCount, t)), r?.count && (c.viewCount = ii(a.viewCount, r.count)), r?.state && (c.viewCountState = r.state), l({ tweetId: this.props.tweet.id_str, liveCounts: c });
                        }),
                        (this._saveStateCounts = () => {
                            const { liveCounts: e, tweet: t, updateCounts: i, updateLiveCounts: o } = this.props,
                                { bookmarkCount: n, likeCount: s, replyCount: r, retweetCount: a, viewCount: l, viewCountState: c } = e;
                            (n || s || a || r || l || c) && (i(t.id_str, e), this._isEditTweetPerspectiveEnabled(t) && o({ tweetId: t.id_str, liveCounts: { ...Xt } }));
                        }),
                        (this.state = { articleNudgeFollowed: !1, disabledAction: void 0, isQuoteTweetPrioritized: !1, loginSignupSheetDisplayMode: void 0, showLoginSignupSheet: !1, showReplyDiscardTweetConfirmation: !1, showRetweetDiscardTweetConfirmation: !1, showDisabledActionsEducation: !1, showSharePromptAnimation: !1 });
                }
                componentDidMount() {
                    this._initializeLivePipeline();
                }
                componentDidUpdate(e, t) {
                    e.tweet.id_str !== this.props.tweet.id_str && (this._livePipelineSubscription && this._livePipelineSubscription.teardown(), this._initializeLivePipeline());
                }
                componentWillUnmount() {
                    this._livePipelineSubscription && this._livePipelineSubscription.teardown(), this._saveStateCounts();
                }
                _isEditTweetConsumptionEnabled(e) {
                    const { featureSwitches: t } = this.context;
                    return !!e.isEdited && (t.isTrue("responsive_web_edit_tweet_enabled") || t.isTrue("subscriptions_feature_labs_1004"));
                }
                _isEditTweetPerspectiveEnabled(e) {
                    return this._isEditTweetConsumptionEnabled(e) && this.context.featureSwitches.isTrue("responsive_web_edit_tweet_perspective_enabled");
                }
                _isTweetRetweeted(e) {
                    const { isInEditHistory: t } = this.props;
                    return t || !this._isEditTweetPerspectiveEnabled(e) ? e.retweeted : e.edit_perspective?.retweeted || e.retweeted;
                }
                render() {
                    const { actionSize: e, activeColor: t, allowBookmarkInActionsBar: i, brandedLikeAnimationData: s, color: a, composerHasData: l, displayStyle: c, enableKeyboardShortcuts: d, id: u, isCommunityMember: m, isFocalTweet: h, isViewerBannedFromCommunity: k, likeActionIconContainerRef: b, promotedContent: C, style: g, tweet: y, withActionsDisabled: A, withAnalyticsAction: f, withCount: v, withRemoveFromBookmarks: T } = this.props,
                        { viewerUserId: E } = this.context,
                        { disabledAction: x, isQuoteTweetPrioritized: N, showDisabledActionsEducation: P, showLoginSignupSheet: R, showReplyDiscardTweetConfirmation: F, showRetweetDiscardTweetConfirmation: I } = this.state,
                        Z = r.Z.getOriginalTweet(y),
                        L = this._getRetweetWithCommentLink(Z, C, this._shouldShowArticleNudge()),
                        D = `${Z.permalink}/quotes`,
                        B = Z.user.id_str === E,
                        O = this._isTweetRetweeted(Z),
                        V = this._shouldDisable(Z, Se.d.ViewTweetActivity, m, k),
                        U = this._shouldDisable(Z, Se.d.Reply, m, k, B),
                        H = !Z.favorited && this._shouldDisable(Z, Se.d.Like, m, k),
                        q = this._shouldDisable(Z, Se.d.Retweet, m, k),
                        Q = !O || this._shouldDisable(Z, Se.d.Unretweet, m, k),
                        $ = !Z.bookmarked && this._shouldDisable(Z, Se.d.AddToBookmarks, m, k),
                        j = this._shouldDisable(Z, Se.d.QuoteTweet, m, k),
                        K = U && "limited_replies" === Z.limited_actions && !this.context.featureSwitches.allTrue(["tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "tweet_with_visibility_results_all_gql_limited_actions_enabled"]),
                        G = this._shouldNudgeForceActionMenu(S.S.like) && !Z.favorited,
                        X = Z.trusted_friends_info?.screen_name,
                        Y = { [M.uq.bookmark]: T ? this._handleUnbookmarkTweet : this._handleBookmarkTweet },
                        J = q || N,
                        ee = !!E && (!N || this._shouldNudgeForceActionMenu(S.S.retweet) || this._shouldShowArticleNudge()),
                        te = (!ee && q) || (ee && q && Q && j),
                        ie = !X && Z.limited_actions !== Ve.FreedomOfSpeechNotReach && te,
                        oe = "block" === c,
                        ne = this._viewCountsPublicVisibilityEnabled,
                        se = Z.user.id_str === E && !!f && !Z.trusted_friends_info,
                        re = this.context.featureSwitches.isTrue("responsive_web_delete_tweet_stats_enabled"),
                        ae = !oe || !re;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(_.Z, { enabled: d, handlers: Y }),
                        n.createElement(w.Z, {
                            actionSize: e,
                            activeColor: t,
                            bookmarkCount: this._getEngagementCount("bookmark_count"),
                            color: a,
                            displayStyle: c,
                            enableKeyboardShortcuts: d,
                            id: u,
                            isDisabled: A,
                            isFocalTweet: h,
                            isFromProtectedAccount: Z.user.protected && Z.user.id_str !== E,
                            isLiked: Z.favorited,
                            isRetweeted: O,
                            likeCount: this._getEngagementCount("favorite_count"),
                            renderAnalyticsAction: (e) => n.createElement(w.Z.ActionAnalytics, (0, o.Z)({}, e, { isFaded: ne ? "Disabled" === this._getViewState() : V, onPress: V ? this._handleOpenEducationPrompt(Se.d.ViewTweetActivity) : this._handleAnalyticsPress, style: ei.actionBaseContainer })),
                            renderBookmarkAction: (e) =>
                                n.createElement(
                                    w.Z.ActionBookmark,
                                    (0, o.Z)({}, e, {
                                        isBookmarked: Boolean(T || Z.bookmarked),
                                        isFaded: $,
                                        onPress: () => {
                                            E ? ($ ? this._handleOpenEducationPrompt(Se.d.AddToBookmarks)() : Z.bookmarked ? this._handleUnbookmarkTweet() : this._handleBookmarkTweet()) : (this._scribeAction("bookmark"), this._showLoginSignupSheet(z.BH.bookmark));
                                        },
                                        style: h ? ei.actionBaseContainer : ei.bookmarkActionContainerTimelineBigScreen,
                                        testIDs: Qt,
                                        withCount: h,
                                    }),
                                ),
                            renderLikeAction: (e) => n.createElement(w.Z.ActionLike, (0, o.Z)({}, e, { actionMenuDescription: this._possiblyRenderNudge(S.S.like), enableActionMenu: !H && G, isDisabled: ("dynamic_product_ad" === Z.limited_actions && H) || e.isDisabled, isFaded: H, likeActionIconContainerRef: b, likeTransitionAnimation: s?.assetUrl, onAnimationStart: this._handleOnLikeAnimationStart, onLikeActionSelect: this._handleLike, onMenuCancel: this._handleLikeMenuCancel, onPress: H ? this._handleOpenEducationPrompt(Se.d.Like) : G ? this._handleLikeMenuPress : this._handleLike, style: ei.actionBaseContainer, testIDs: $t })),
                            renderReplyAction: (e) => n.createElement(w.Z.ActionReply, (0, o.Z)({}, e, { isDisabled: (0, Se.aU)(Z, U) || e.isDisabled, isFaded: U, onPress: U ? this._handleOpenEducationPrompt(Se.d.Reply) : this._handleReplyPress, renderWrapper: K ? this._replyWrapper : void 0, style: ei.actionBaseContainer, testID: kt.Z.reply })),
                            renderRetweetAction: (e) => n.createElement(w.Z.ActionRetweet, (0, o.Z)({}, e, { actionMenuDescription: this._possiblyRenderNudge(S.S.retweet), activeColor: Z?.exclusivity_info ? "plum500" : void 0, enableActionMenu: !te, excludeRetweetAction: J, excludeRetweetWithCommentAction: j, excludeViewQuotesRetweetsAction: ae, isDisabled: e.isDisabled || ie, isFaded: te, onMenuCancel: this._handleRetweetMenuCancel, onPress: te ? this._handleOpenEducationPrompt(Se.d.Retweet) : this._handleRetweetPress, onQuoteTweetActionSelect: this._handleQuoteTweet, onRetweetActionSelect: this._handleRetweet, onUnretweetActionSelect: this._handleUnretweet, onViewEngagementsActionSelect: this._handleViewEngagements, retweetActionSubText: Z?.exclusivity_info ? this._renderSuperFollowerActionRetweetSubText(Z.exclusivity_info.screen_name) : void 0, retweetWithCommentLink: l ? void 0 : L, style: ei.actionBaseContainer, testIDs: jt, viewQuotesRetweetsLink: D })),
                            renderShareAction: this._renderShareAction,
                            replyCount: this._getEngagementCount("reply_count"),
                            retweetCount: this._getEngagementCount("retweet_count") + this._getEngagementCount("quote_count"),
                            style: g,
                            tweetLink: Z.permalink,
                            viewCount: ne ? this._getEngagementCount("view_count") : void 0,
                            viewState: this._getViewState(),
                            withAnalytics: ne ? !!f : se,
                            withBookmark: i || h,
                            withCount: v,
                        }),
                        R ? n.createElement(W.ZP, { displayMode: this.state.loginSignupSheetDisplayMode, onClose: this._handleCloseLoginSignupSheet, postLoginPath: Z.permalink, tweetId: Z.id_str, userFullName: Z.user.name, userId: Z.user.id_str }) : null,
                        F ? n.createElement(p.Z, { confirmButtonLabel: Ut, confirmButtonType: "destructiveFilled", headline: Mt, onCancel: this._handleHideConfirmation, onConfirm: this._handleConfirmReplyTweet, text: Ot }) : null,
                        I ? n.createElement(p.Z, { confirmButtonLabel: Ht, confirmButtonLink: { pathname: "/compose/post", state: { quotedStatus: Z, promotedContent: C } }, confirmButtonType: "destructiveFilled", headline: Bt, onCancel: this._handleHideConfirmation, onConfirm: this._handleConfirmQuoteTweet, text: Vt }) : null,
                        P && x && (y.limited_actions || y.limited_action_results || Z?.community_id_str) ? n.createElement(Ue, { actionType: x, communityId: Z?.community_id_str, limitedActionResults: y.limited_action_results, limitedActionsConfig: y.limited_actions || "", onAction: this._handleCloseEducationPrompt, onClose: this._handleCloseEducationPrompt, trustedFriendsScreenName: X, tweetPermalink: oe ? void 0 : Z.permalink }) : null,
                    );
                }
                _scribe(e) {
                    const { viewerUserId: t } = this.context,
                        { analytics: i, promotedContent: o, tweet: n } = this.props,
                        s = t ? e.action : `${e.action}_attempt`,
                        r = i.contextualScribeData,
                        a = { ...r, ...e.data };
                    (a.items = B.Z.leftMergeScribeItems([B.Z.getTweetItem(n, o)], r?.items ?? [])), i.scribe({ ...e, action: s, data: a });
                }
                _scribeAction(e) {
                    this._scribe({ action: e });
                }
                _scribeSoftNudgeWithQuoteTweetAction(e) {
                    const { tweet: t } = this.props;
                    "soft_nudge_with_quote_tweet" === t.limited_actions && this._scribe({ action: e });
                }
                _scribeNudgeAction({ action: e, element: t, tweetActionName: i }) {
                    const { analytics: o, forwardPivotInfo: n, nudges: s, tweet: r } = this.props,
                        { source: a } = (0, E.p)(i, n, s, this._shouldShowArticleNudge());
                    a === S.w.payload && o.scribe({ ...Wt, element: t, action: e }), a === S.w.forwardPivot && o.scribe({ ...qt, element: t, action: e }), (a !== S.w.payload && a !== S.w.forwardPivot) || ("soft_nudge_with_quote_tweet" === r.limited_actions && i === S.S.retweet && ("impression" === e ? o.scribe({ ...qt, element: t, action: "soft_nudge_with_qt_impression" }) : "cancel" === e && o.scribe({ ...qt, element: t, action: "soft_nudge_with_qt_cancel" })));
                }
                _scribeArticleNudgeAction({ action: e, element: t }) {
                    const { analytics: i, tweet: o } = this.props;
                    if (this._articleNudgeEnabled) {
                        const n = { items: [{ token: o?.card?.url, retweeting_tweet_id: o.id_str }] };
                        i.scribe({ ...zt, element: t, action: e, data: n }), "soft_nudge_with_quote_tweet" === o.limited_actions && ("impression" === e ? i.scribe({ ...zt, element: t, action: "soft_nudge_with_qt_impression", data: n }) : "cancel" === e && i.scribe({ ...zt, element: t, action: "soft_nudge_with_qt_cancel", data: n }));
                    }
                }
                _shouldNudgeForceActionMenu(e) {
                    const { forwardPivotInfo: t, nudges: i } = this.props;
                    return Boolean((0, E.p)(e, t, i, this._shouldShowArticleNudge()).source);
                }
                _initializeLivePipeline() {
                    const { dataSaverMode: e, tweet: t } = this.props,
                        i = r.Z.getOriginalTweet(t);
                    if (this.context.viewerUserId)
                        return (0, N.ZP)().then(({ LivePipeline: t }) => {
                            !e && t.isSupportedAndReady(this.context.featureSwitches) && this.context.featureSwitches.isTrue("livepipeline_tweetengagement_enabled") && !this._livePipelineSubscription && (this._livePipelineSubscription = t && t.get().subscribeTopic(`/tweet_engagement/${i.id_str}`, this._handleLivePipelineUpdate));
                        });
                }
            }
            (Yt.contextType = q.rC), (Yt.defaultProps = { actionSize: "normal", color: "gray700", displayStyle: "inline", enableKeyboardShortcuts: !1, liveCounts: { ...Xt }, withCount: !1, withRemoveFromBookmarks: !1 });
            const Jt = (0, U.ZP)(ye(Yt)),
                ei = k.default.create((e) => ({ conversationControlsAnchor: { justifyContent: "center" }, actionBaseContainer: { flex: 1 }, bookmarkActionContainerTimelineBigScreen: { marginEnd: e.spaces.space8 } })),
                ti = (e) => parseInt(e, 10) || 0,
                ii = (e, t) => Math.max(ti(e), ti(t));
        },
        851623: (e, t, i) => {
            i.d(t, { Z: () => o });
            const o = { bookmark: "bookmark", removeBookmark: "removeBookmark", reply: "reply", like: "like", unlike: "unlike", retweet: "retweet", unretweet: "unretweet", retweetConfirm: "retweetConfirm", unretweetConfirm: "unretweetConfirm", caret: "caret" };
        },
        957818: (e, t, i) => {
            i.d(t, { Z: () => b });
            var o = i(202784),
                n = i(325686),
                s = i(392237),
                r = i(731708),
                a = i(235902),
                l = i(872405),
                c = i(178519),
                d = i(725516);
            const u = s.default.create((e) => ({ small: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 } })),
                m = "blue500",
                h = "gray700",
                _ = "subtext2",
                w = "medium",
                p = s.default.create((e) => ({ colorBlue: { color: e.colors.blue500 }, socialContextIconColumn: { alignItems: "flex-end", justifyContent: "end" }, cellWrapper: { flexDirection: "row" }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextTextRow: { flexDirection: "row" }, socialContextTextRowSeparator: { marginHorizontal: e.spaces.space4 }, tweetContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` } })),
                k = ({ context: e, onClick: t }) => {
                    let i;
                    if ("TimelineBasketballContext" === e.__typename) {
                        const { away_team_name: s, away_team_score: a, home_team_name: l, home_team_score: c, status: d, url: u } = e;
                        i = o.createElement(n.Z, { style: p.socialContextTextRow }, o.createElement(r.ZP, { color: m, link: u, numberOfLines: 1, onClick: t, size: _, weight: w, withoutTwemojiAndHashflags: !0 }, `${s} ${a >= 0 ? a : ""} vs ${c >= 0 ? c : ""} ${l}`), o.createElement(r.ZP, { color: h, size: _, style: p.socialContextTextRowSeparator }, "·"), o.createElement(r.ZP, { color: h, size: _, weight: w }, d));
                    } else "TimelineGenericContext" === e.__typename && (i = o.createElement(n.Z, { style: p.socialContextTextRow }, o.createElement(r.ZP, { color: m, link: e.url, numberOfLines: 1, onClick: t, size: _, weight: w, withoutTwemojiAndHashflags: !0 }, e.primary_text), e.secondary_text && o.createElement(n.Z, null, o.createElement(r.ZP, { color: h, size: _, style: p.socialContextTextRowSeparator }, "·"), o.createElement(r.ZP, { color: h, size: _, weight: w }, e.secondary_text))));
                    return e ? o.createElement(a.ZP.UseProps, null, (e) => o.createElement(o.Fragment, null, o.createElement(n.Z, { style: [p.tweetContext, e.socialContextRefreshEnabled() && p.socialContextRefresh] }, o.createElement(l.Z, { avatarCell: o.createElement(c.default, { style: [u.small, p.colorBlue] }), avatarCellStyle: [p.socialContextIconColumn] }, o.createElement(n.Z, { style: p.cellWrapper }, o.createElement(n.Z, { style: [p.colorBlue, p.socialContextTextColumn] }, i)))))) : null;
                },
                b = (e) => {
                    const t = (0, d.z)(),
                        { context: i } = e;
                    return o.createElement(k, {
                        context: i,
                        onClick: function () {
                            t.scribe({ action: "click", element: "tweet_context" });
                        },
                    });
                };
        },
        103574: (e, t, i) => {
            i.d(t, { Z: () => l });
            var o = i(202784),
                n = i(549613),
                s = i(668214),
                r = i(549116);
            const a = (e, t) => (0, r.Yt)(e, t.tweetId);
            const l = (0, s.Z)()
                    .propsFromState(() => ({ liveCounts: a }))
                    .adjustStateProps(({ liveCounts: e }) => ({ liveLikeCount: e && e.likeCount, liveQuoteCount: e && e.quoteCount, liveRetweetCount: e && e.retweetCount }))(function (e) {
                    const { isNonCompliantTweet: t, liveLikeCount: i, liveQuoteCount: s, liveRetweetCount: r, style: a, tweetBookmarkCount: l, tweetLikeCount: c, tweetPermalink: u, tweetQuoteTweetCount: m, tweetRetweetCount: h } = e,
                        _ = d(i, c),
                        w = d(s, m),
                        p = d(r, h);
                    return o.createElement(n.ZP, { bookmarkCount: l, isNonCompliantTweet: t, likeCount: _, permalink: u, quoteTweetCount: w, retweetCount: p, style: a });
                }),
                c = (e) => parseInt(e, 10) || 0,
                d = (e, t) => Math.max(c(e), c(t));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2.6328320a.js.map
