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
                                return d.topPixel;
                            case "bottom":
                                return d.bottomPixel;
                            case "right":
                                return d.rightPixel;
                            case "left":
                                return d.leftPixel;
                            default:
                                return;
                        }
                    }, [s]),
                    l = o.useCallback(
                        (e) => {
                            e.visibleFraction() >= r.xn && i();
                        },
                        [i],
                    );
                return o.createElement(n.Z, { style: [d.impressionPixelContainer, c], testID: a }, o.createElement(r.ZP, { key: t, onPlacementChange: l }, o.createElement(n.Z, { style: d.impressionPixel })));
            }
            const d = s.default.create((e) => ({ impressionPixel: { visibility: "hidden", height: "1px", width: "1px" }, impressionPixelContainer: { position: "absolute" }, topPixel: { top: "0", end: "50%" }, bottomPixel: { bottom: "0", end: "50%" }, rightPixel: { end: "0", top: "50%" }, leftPixel: { start: "0", top: "50%" } }));
        },
        778955: (e, t, i) => {
            i.d(t, { Z: () => ti });
            var o = i(807896),
                n = (i(136728), i(202784)),
                s = i(576648),
                r = i(782261),
                a = i(537392),
                d = i(786475),
                c = i(731708),
                l = i(696591),
                u = i(15342),
                h = i(284702),
                m = i(495232),
                _ = i(522171),
                w = i(990804),
                p = i(190286),
                k = i(392237),
                b = i(674132),
                C = i.n(b),
                g = i(912021),
                A = i(123751),
                y = i(692518),
                v = i(933869),
                f = i(553161),
                T = i(931974),
                S = i(467691),
                N = i(965283),
                E = i(375260),
                P = i(706758),
                R = i(518966),
                F = i(200770),
                I = i(758600),
                x = i(349972),
                L = i(155080),
                Z = i(312922),
                D = i(163889),
                M = i(163390),
                B = i(942893),
                O = i(701796),
                V = i(214647),
                U = i(500002),
                H = i(175856),
                q = i(443781),
                W = i(369241),
                Q = i(233391),
                j = i(71620),
                z = i(870358),
                $ = i(429650),
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
                de = i(695427),
                ce = i(268617),
                le = i(977154),
                ue = i(919022);
            const he = (e, t) => (0, H.t5)(e, H.y6),
                me = (e) => re.tS(e, ""),
                _e = (e, t) => (0, te.Yt)(e, t.tweet.id_str),
                we = (e, t) => (0, ie.HP)(e, t.tweet.id_str),
                pe = (e, t) => {
                    const i = (t.tweet.retweeted_status || t.tweet).community_id_str,
                        o = i ? Y.ZP.select(e, i) : void 0;
                    return (0, z.Wh)(o?.role);
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
                Ae = (0, K.Z)()
                    .propsFromState(() => ({ brandedLikeAnimationData: (0, ee.qh)(), composerData: me, dataSaverMode: ne.IX, isArticleDomainMatched: Ce, isInEditHistory: de.l0, isCommunityMember: pe, isViewerBannedFromCommunity: ke, liveCounts: _e, viewerUser: ue.ZP.selectViewerUser, nudgeActionTaken: we, sessionToken: oe.Jv, shouldShowArticleNudgeTip: he, wasArticleVisited: be, bookmarkFolderName: ge, replyVotingSurveyClicked: ne.yO, showGraduatedAccess: J.nQ }))
                    .adjustStateProps(({ bookmarkFolderName: e, brandedLikeAnimationData: t, composerData: i, dataSaverMode: o, isArticleDomainMatched: n, isCommunityMember: s, isInEditHistory: r, isViewerBannedFromCommunity: a, liveCounts: d, nudgeActionTaken: c, replyVotingSurveyClicked: l, sessionToken: u, shouldShowArticleNudgeTip: h, showGraduatedAccess: m, viewerUser: _, wasArticleVisited: w }, { tweet: p }) => ({ brandedLikeAnimationData: t, dataSaverMode: o, isArticleDomainMatched: n, isCommunityMember: s, isViewerBannedFromCommunity: a, isInEditHistory: r, liveCounts: d, nudgeActionTaken: c, replyVotingSurveyClicked: l, sessionToken: u, showGraduatedAccess: m, shouldShowArticleNudgeTip: h, wasArticleVisited: w, bookmarkFolderName: e, composerHasData: i.length > 0 && !(0, $.m_)(i[0]), viewerUserFavCount: _?.favourites_count || 0 }))
                    .propsFromActions(() => ({ addFlag: H.pj, addToast: se.fz, createLocalApiErrorHandler: (0, j.zr)("TWEET_ACTIONS_BAR_CONTAINER"), onBookmark: ae.Z.bookmark, onLike: ae.Z.like, onRetweet: ae.Z.retweet, onUnbookmark: ae.Z.unbookmark, onUnlike: ae.Z.unlike, onUnretweet: ce.Z, removeTweetsFromBookmarksTimeline: le.qk, removeTweetFromBookmarkFolder: X.ZP.removeTweetFromBookmarkFolder, removeTweetFromBookmarkFolderTimeline: X.aL, updateCounts: ae.Z.updateCounts, resetDraft: re.Es, setArticlesVisited: G.Ji, setReplyVotingSurveyClicked: ne.e6, setTweetNudgeActionTaken: ie.NR, updateLiveCounts: te.NR }))
                    .withAnalytics();
            var ye = i(688715),
                ve = i(529356),
                fe = i(952793),
                Te = i(686689),
                Se = i(533128);
            const Ne = C().f755f710,
                Ee = C().ced4abbe,
                Pe = C().d00e1d2a,
                Re = C().e6057014,
                Fe = () => {
                    const e = (0, ye.ju)("https://help.x.com/rules-and-policies/enforcement-options"),
                        t = n.createElement(c.ZP, { color: "blue500", link: e, withInteractiveStyling: !0 });
                    return n.createElement(C().I18NFormatMessage, { $i18n: "db79453f" }, n.cloneElement(t, null, C().g562676f));
                },
                Ie = () => {
                    const e = (0, ye.ju)("https://help.x.com/rules-and-policies/enforcement-options"),
                        t = n.createElement(c.ZP, { color: "blue500", link: e, withInteractiveStyling: !0 });
                    return n.createElement(C().I18NFormatMessage, { $i18n: "i2a606d1" }, n.cloneElement(t, null, C().ee574c37));
                },
                xe = C().ba352986,
                Le = C().d09e76d8,
                Ze = C().cfa1f802,
                De = C().af27a0f8,
                Me = C().id089506,
                Be = C().j24c37b2,
                Oe = ({ actionType: e, communityId: t, limitedActionsConfig: i, trustedFriendsScreenName: o, viewCountsEnabled: s }) => {
                    const r = Ne,
                        a = i === Ve.HiddenCommunityTweet,
                        d = i === Ve.NonCompliant,
                        c = i === Ve.CommunityNonMember || i === Ve.CommunityNonMemberClosedCommunity || i === Ve.CommunityNonMemberPublicCommunity,
                        l = i === Ve.CommunityMemberRemoved,
                        u = i === Ve.TrustedFriendsTweet,
                        h = i === Ve.FreedomOfSpeechNotReach;
                    if (!(a || d || c || l || u || h || t)) return null;
                    const m = (({ actionType: e, communityId: t, isCommunityMemberRemoved: i, isCommunityNonMember: o, isFreedomOfSpeechNotReach: n, isHiddenCommunityTweet: s, isNonCompliantTweet: r, isTrustedFriendsTweet: a, viewCountsEnabled: d }) => {
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
                            return d && Se.d.ViewTweetActivity ? C().dcc05a7e : "";
                        })({ actionType: e, isNonCompliantTweet: d, isCommunityNonMember: c, isHiddenCommunityTweet: a, isCommunityMemberRemoved: l, isTrustedFriendsTweet: u, isFreedomOfSpeechNotReach: h, viewCountsEnabled: s, communityId: t }),
                        _ = (({ actionType: e, communityId: t, isCommunityMemberRemoved: i, isCommunityNonMember: o, isFreedomOfSpeechNotReach: s, isHiddenCommunityTweet: r, isNonCompliantTweet: a, isTrustedFriendsTweet: d, trustedFriendsScreenName: c, viewCountsEnabled: l }) => (l && e === Se.d.ViewTweetActivity ? C().e213fada : r || i ? C().g0954ea6 : o || t ? (e === Se.d.Reply ? C().e7969518 : C().g2dc874a) : d && e === Se.d.Retweet && c ? n.createElement(C().I18NFormatMessage, { $i18n: "fe93026b", username: c }) : a ? n.createElement(Fe, null) : s ? n.createElement(Ie, null) : ""))({ actionType: e, isNonCompliantTweet: d, isCommunityNonMember: c, isHiddenCommunityTweet: a, isCommunityMemberRemoved: l, isTrustedFriendsTweet: u, isFreedomOfSpeechNotReach: h, trustedFriendsScreenName: o, viewCountsEnabled: s, communityId: t });
                    return { headline: m, subtext: _, actionLabel: r };
                },
                Ve = Object.freeze({ HiddenCommunityTweet: "community_tweet_hidden", CommunityNonMember: "community_tweet_non_member", CommunityNonMemberClosedCommunity: "community_tweet_non_member_closed_community", CommunityNonMemberPublicCommunity: "community_tweet_non_member_public_community", CommunityMemberRemoved: "community_tweet_member_removed", NonCompliant: "non_compliant", TrustedFriendsTweet: "limit_trusted_friends_tweet", FreedomOfSpeechNotReach: "freedom_of_speech_not_reach" }),
                Ue = (e) => {
                    const { actionType: t, communityId: i, limitedActionResults: s, limitedActionsConfig: r, onAction: a, onClose: d, trustedFriendsScreenName: c, tweetPermalink: l } = e,
                        u = (0, fe.hC)("tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled"),
                        h = (0, fe.hC)("tweet_with_visibility_results_partial_gql_limited_actions_enabled"),
                        m = (0, fe.hC)("tweet_with_visibility_results_all_gql_limited_actions_enabled"),
                        _ = (0, fe.hC)("view_counts_public_visibility_enabled"),
                        w = (0, fe.hC)("communities_non_member_reply_enabled");
                    let p;
                    return (
                        u &&
                            (h || m) &&
                            (p = (({ actionType: e, communityId: t, communityNonMemberCanReply: i, limitedActionResults: o, onAction: s, tweetPermalink: r }) => {
                                const a = o?.find((t) => t.action === e);
                                let d,
                                    c,
                                    l,
                                    u = Ne;
                                if (!a || !a.prompt) return t ? (i ? { headline: De, subtext: Me, actionLink: `/i/communities/${t}/`, actionLabel: Be, secondaryActionLabel: c, onSecondaryAction: l } : { headline: xe, subtext: Le, actionLink: `/i/communities/${t}/`, actionLabel: Ze, secondaryActionLabel: c, onSecondaryAction: l }) : null;
                                const { prompt: h } = a,
                                    m = n.createElement(Te.Z, { entities: h.headline.entities, rtl: h.headline.rtl, text: h.headline.text }),
                                    _ = n.createElement(Te.Z, { entities: h.subtext.entities, rtl: h.subtext.rtl, text: h.subtext.text });
                                switch (h?.ctaType) {
                                    case "SeeConversation":
                                        r && ((d = r), (u = Ee), (c = Ne), (l = s));
                                        break;
                                    case "JoinCommunity":
                                        t && ((d = `/i/communities/${t}/join`), (u = Pe));
                                        break;
                                    case "AskToJoinCommunity":
                                        t && ((d = `/i/communities/${t}/join`), (u = Re));
                                }
                                return { headline: m, subtext: _, actionLink: d, actionLabel: u, secondaryActionLabel: c, onSecondaryAction: l };
                            })({ actionType: t, communityId: i, communityNonMemberCanReply: w, onAction: a, tweetPermalink: l, limitedActionResults: s })),
                        p || (p = Oe({ limitedActionsConfig: r, actionType: t, viewCountsEnabled: _, trustedFriendsScreenName: c, communityId: i })),
                        p ? n.createElement(ve.Z, (0, o.Z)({ graphicDisplayMode: "none", onAction: a, onClose: d }, p)) : null
                    );
                };
            var He = i(638236),
                qe = i(818088),
                We = i(898361),
                Qe = i(630715),
                je = i(717160),
                ze = i(186444),
                $e = i(72591),
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
                dt = ({ handleCopyLink: e }) => ({ text: et, onClick: e, Icon: Qe.default }),
                ct = ({ handleCopyLink: e }) => ({ text: Je, onClick: e, Icon: Qe.default }),
                lt = ({ handleDMShare: e }) => ({ text: tt, onClick: e, Icon: je.default }),
                ut = ({ handlePostVideo: e }) => ({ text: it, onClick: e, Icon: ze.default }),
                ht = (e, t, i) => (({ handleDownloadVideo: o }) => ({ text: at, onClick: e.handleDownloadVideo, link: i && t ? { pathname: t, download: !0 } : void 0, Icon: $e.default }))(e),
                mt = ({ handleShare: e }) => ({ text: nt, onClick: e, Icon: He.Z }),
                _t = ({ handleShare: e }) => ({ text: ot, onClick: e, Icon: He.Z }),
                wt = Object.freeze({ BOOKMARK: "bookmark", COPY_LINK: "copy_link", DM: "dm", POST_VIDEO: "post_video", SHARE_VIA: "share_via", DOWNLOAD_VIDEO: "download_video" });
            function pt(e, t, i, o) {
                const { bookmarked: n, user: a } = e.retweeted_status ?? e,
                    { canBookmarkToFolders: d, isBookmarkedToFolder: c, isFocalTweet: l, isLoggedIn: u, isPromoted: m, isXSmall: _, withRemoveFromBookmarks: w } = i,
                    p = [wt.COPY_LINK, wt.SHARE_VIA, wt.DM, wt.BOOKMARK, wt.POST_VIDEO, wt.DOWNLOAD_VIDEO],
                    k = {
                        [wt.BOOKMARK]: () => {
                            const i = w || n,
                                s = !(0, Se.$y)(t, e, Se.d.AddToBookmarks),
                                r = [];
                            return u && (!l && _ && (!i && s && r.push((({ handleBookmarkTweet: e }) => ({ text: Xe, onClick: e, Icon: qe.default }))(o)), i && r.push((({ handleUnbookmarkTweet: e }) => ({ text: st, onClick: e, Icon: Ke.default }))(o))), d && s && r.push((({ handleBookmarkTweetToFolder: e }) => ({ text: Ye, onClick: e, Icon: We.default }))(o)), i && c && r.push((({ handleUnbookmarkFromFolder: e }) => ({ text: rt, onClick: e, Icon: Ke.default }))(o))), r;
                        },
                        [wt.COPY_LINK]: () => {
                            if (!a.protected && s.Z.isAvailable() && !(0, Se.$y)(t, e, Se.d.CopyLink)) return [m ? ct(o) : dt(o)];
                        },
                        [wt.DM]: () => {
                            if (!a.protected && !(0, Se.$y)(t, e, Se.d.SendViaDm)) return [lt(o)];
                        },
                        [wt.POST_VIDEO]: () => {
                            if (!a.protected && !(0, Se.$y)(t, e, Se.d.PostVideo) && (0, Ge.wV)(e)) return [ut(o)];
                        },
                        [wt.DOWNLOAD_VIDEO]: () => {
                            if ((0, Ge.wV)(e)) {
                                const n = r.Z.getOriginalTweet(e),
                                    s = n.extended_entities?.media?.find((e) => "video" === e.type);
                                if (s && "video" === s.type) {
                                    const e = h.Z.extractVideoProps(A.Z.forTweet(n.id_str), s);
                                    if (e.source.downloadLink && t.isTrue("responsive_web_media_download_video_share_menu_enabled")) return [ht(o, e.source.downloadLink, i.isAnyPremiumSubscriber)];
                                }
                            }
                        },
                        [wt.SHARE_VIA]: () => {
                            const i = null != window.navigator.share;
                            if (!a.protected && !(0, Se.$y)(t, e, Se.d.ShareTweetVia) && i) return [m ? _t(o) : mt(o)];
                        },
                    },
                    b = p.flatMap((e) => k[e]() ?? []);
                return b;
            }
            var kt = i(851623),
                bt = (i(901951), i(620763)),
                Ct = i(400915),
                gt = i(58255),
                At = i(125363),
                yt = i(381904);
            const vt = C().fbfab656,
                ft = C().e668112c,
                Tt = (e) => {
                    const { actionItems: t, outerTweet: i, ...s } = e,
                        { activeItem: r } = (0, yt.Y)(),
                        a = (0, At.I0)(),
                        { isUserSpeakingRole: d } = (0, Ct.l7)(),
                        c = n.useCallback(() => {
                            d && (a((0, se.fz)({ text: ft })), gt.w.addSharing(r?.id || "", i.id_str));
                        }, [a, d, r, i]),
                        l = n.useMemo(() => {
                            const e = t.slice();
                            return d && e.unshift({ text: vt, onClick: c, Icon: bt.default }), e;
                        }, [t, c, d]);
                    return n.createElement(w.Z.ActionShare, (0, o.Z)({}, s, { actionItems: l }));
                },
                St = C().d4c339b9,
                Nt = C().db0cb64f,
                Et = C().h6f99ac4,
                Pt = C().g1c463f6,
                Rt = C().a2e7377f,
                Ft = { InProgress: C().i47ad24c, Completion: C().def4a37c },
                It = C().bcab06d2,
                xt = C().i5efe23e,
                Lt = C().f5d17674,
                Zt = C().d714acfa,
                Dt = C().b18dff26,
                Mt = C().c2453318,
                Bt = C().f88553c8,
                Ot = C().b5b36724,
                Vt = C().gce00a2a,
                Ut = C().g271f120,
                Ht = C().gad04d1a,
                qt = C().d17df548,
                Wt = C().g062295e,
                Qt = { component: "soft_intervention_nudge" },
                jt = { component: "standardized_nudge" },
                zt = { component: "article_nudge" },
                $t = { bookmark: kt.Z.bookmark, removeBookmark: kt.Z.removeBookmark },
                Kt = { like: kt.Z.like, unlike: kt.Z.unlike },
                Gt = { retweet: kt.Z.retweet, retweetConfirm: kt.Z.retweetConfirm, unretweet: kt.Z.unretweet, unretweetConfirm: kt.Z.unretweetConfirm },
                Xt = { favorite_count: "likeCount", quote_count: "quoteCount", reply_count: "replyCount", retweet_count: "retweetCount", view_count: "viewCount", bookmark_count: "bookmarkCount" },
                Yt = (e) => {
                    const t = document.createElement("textarea");
                    return (t.innerHTML = e), t.value;
                },
                Jt = Object.freeze({ replyCount: void 0, likeCount: void 0, retweetCount: void 0, viewCount: void 0, bookmarkCount: void 0, viewCountState: void 0 });
            class ei extends n.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._shouldDisable = Se.$y.bind(null, this.context.featureSwitches)),
                        (this._articleNudgeEnabled = this.context.featureSwitches.isTrue("responsive_web_article_nudge_enabled")),
                        (this._viewCountsPublicVisibilityEnabled = this.context.featureSwitches.isTrue("view_counts_public_visibility_enabled")),
                        (this._randomSeed = Math.random()),
                        (this._getEngagementCount = (e) => {
                            const t = r.Z.getOriginalTweet(this.props.tweet),
                                i = Xt[e];
                            let o = 0;
                            const n = this.props.liveCounts[i];
                            if ("view_count" === e) {
                                const e = t?.views?.count;
                                o = ni(n, e);
                            } else {
                                const i = t[e];
                                if (((o = ni(n, i)), this._isEditTweetConsumptionEnabled(t) && t.isEdited && !this.props.isInEditHistory)) return r.Z.getAggregateCount(e, t, o);
                            }
                            return o;
                        }),
                        (this._getViewState = () => {
                            const { liveCounts: e, tweet: t } = this.props,
                                i = r.Z.getOriginalTweet(t);
                            return e.viewCountState || i?.views?.state || "Disabled";
                        }),
                        (this._renderSuperFollowerActionRetweetSubText = (e) => n.createElement(a.Fo, { query: ({ containerWidth: e }) => d.Z.isNarrowScreenWidth(e) }, (e) => (e ? n.createElement(c.ZP, null, Dt) : n.createElement(l.Z, null, Dt)))),
                        (this._possiblyRenderNudge = (0, g.Z)((e) => {
                            const { forwardPivotInfo: t, nudgeActionTaken: i, nudges: o, shouldShowArticleNudgeTip: s, tweet: r } = this.props,
                                { articleNudgeFollowed: a } = this.state,
                                { payload: d, source: c } = (0, N.p)(e, t, o, this._shouldShowArticleNudge());
                            return c === S.w.payload && d ? n.createElement(T.Z, { action: e, actionTaken: i, onActionTaken: this._handleSoftInterventionNudgeActionTaken, payload: d }) : c === S.w.forwardPivot && t ? n.createElement(f.Z, { action: e, actionTaken: i, forwardPivotInfo: t, onActionTaken: this._handleSoftInterventionNudgeActionTaken }) : c === S.w.article ? n.createElement(v.Z, { articleNudgeFollowed: a, key: "article-nudge", link: r?.card?.url, onClick: this._handleArticleClicked, shouldShowArticleNudgeTip: s }) : null;
                        })),
                        (this._renderShareAction = (e) => {
                            const { bookmarkFolderId: t, isFocalTweet: i, promotedContent: s, tweet: r, withRemoveFromBookmarks: c } = this.props,
                                { featureSwitches: l } = this.context;
                            return n.createElement(a.Fo, { query: ({ screenWidth: e }) => d.Z.isXSmallScreenWidth(e) }, (a) => {
                                const d = this._getShareMenuActionItems({ bookmarkFolderId: t, isFocalTweet: i, isXSmall: a, promotedContent: s, outerTweet: r, withRemoveFromBookmarks: c }),
                                    u = d.length < 1 || !0 === r.isPreviewDisplay,
                                    h = l.allTrue(["tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "tweet_with_visibility_results_all_gql_limited_actions_enabled"]),
                                    m = u && (r.limited_actions === Ve.NonCompliant || r.limited_actions === Ve.FreedomOfSpeechNotReach) && !h;
                                return n.createElement(Tt, (0, o.Z)({}, e, { actionItems: d, actionMenuDescription: this._possiblyRenderNudge(S.S.share), isDisabled: u && !m, isFaded: m, onMenuCancel: this._handleShareMenuCancel, onPress: this._handleSharePress(m), outerTweet: r, shouldAnimatePrompt: this.state.showSharePromptAnimation }));
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
                            if (!t) return this._scribeAction(u.d.RETWEET), void this._showLoginSignupSheet(Q.BH.retweet);
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
                                        this.props.addToast({ ariaOnly: !0, text: Lt }), this._maybeRedirectToGraduatedAccess();
                                    })
                                    .catch((t) => {
                                        this._modRetweets(-1), e(I.l)(t);
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
                                        this.props.addToast({ ariaOnly: !0, text: Zt });
                                    })
                                    .catch((t) => {
                                        this._modRetweets(1), e(Z.P)(t);
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
                                { createLocalApiErrorHandler: i, nudgeActionTaken: o, onLike: n, onLikeSuccess: s, onUnlike: a, promotedContent: d, tweet: c, viewerUserFavCount: l } = this.props,
                                u = !r.Z.getOriginalTweet(c).favorited;
                            t
                                ? u
                                    ? (this._scribeNudgeAction({ tweetActionName: S.S.like, element: o ? "like_after_read" : "like", action: "click" }),
                                      this._modLikes(1),
                                      n(c.id_str, { promotedContent: d })
                                          .then(() => {
                                              const t = l + 1;
                                              t < e.getNumberValue("focused_timeline_actions_onboarding_likes") ? this.props.addToast({ text: Ft.InProgress }) : t === e.getNumberValue("focused_timeline_actions_onboarding_likes") ? this.props.addToast({ text: Ft.Completion }) : this.props.addToast({ ariaOnly: !0, text: It }), s && s();
                                          })
                                          .catch((e) => {
                                              this._modLikes(-1), this._scribe({ element: "like_button", action: "error" }), i(F.o)(e);
                                          }))
                                    : (this._modLikes(-1),
                                      a(c.id_str, { promotedContent: d })
                                          .then(() => {
                                              this.props.addToast({ ariaOnly: !0, text: xt });
                                          })
                                          .catch((e) => {
                                              this._modLikes(1), this._scribe({ element: "like_button", action: "error" }), i(L.l)(e);
                                          }))
                                : this._showLoginSignupSheet(Q.BH.like),
                                this._scribeAction(u ? "favorite" : "unfavorite");
                        }),
                        (this._handleBookmarkTweet = () => {
                            const { createLocalApiErrorHandler: e, tweet: t } = this.props,
                                i = r.Z.getOriginalTweet(t),
                                o = !!this.context.userClaims?.isTrueAndEnabled("subscriptions_feature_1002");
                            this.props.onBookmark(i.id_str).then(
                                () => {
                                    this.props.addToast({ action: { label: Mt, onAction: o ? this._handleBookmarkTweetToFolder : this._handleUpsell }, text: Et });
                                },
                                (t) => {
                                    e(R.h)(t), this._scribeAction("bookmark_error");
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
                                        this._scribe({ component: "bookmark_folder", element: "remove", action: "success" }), this.props.addToast({ text: Rt({ bookmarkFolderName: t }) });
                                    },
                                    (e) => {
                                        i(R.h)(e), this._scribe({ component: "bookmark_folder", element: "remove", action: "error" });
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
                                    this.props.removeTweetsFromBookmarksTimeline({ [n.id_str]: !0 }), e && o && this.props.removeTweetFromBookmarkFolderTimeline(e, n.id_str, o), this.props.addToast({ text: Pt });
                                },
                                (e) => {
                                    t(x.j)(e), this._scribeAction("unbookmark_error");
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
                            const d = r.Z.getOriginalTweet(a);
                            e ? (o.pathname.includes("mediaViewer") ? i.push({ state: { contextualClientEventInfo: t, focusComposer: !1, promotedContent: n, socialContext: s }, pathname: a.permalink }) : i.push({ state: { inReplyToStatusId: d.id_str, isSelfThreadReply: (0, V.aT)({ tweet: a, viewerUserId: e }), promotedContent: n }, pathname: "/compose/post" })) : this._showLoginSignupSheet(Q.BH.reply);
                        }),
                        (this._handleConfirmReplyTweet = () => {
                            const { resetDraft: e } = this.props;
                            e(), this._handleHideConfirmation(), this._showReplyComposer();
                        }),
                        (this._handleDMShare = () => {
                            const { viewerUserId: e } = this.context,
                                { history: t, nudgeActionTaken: i, tweet: o } = this.props;
                            this._scribeAction("share_via_dm"), this._scribeNudgeAction({ tweetActionName: S.S.share, element: i ? "share_tweet_after_read" : "share_tweet", action: "click" }), e ? t.push({ state: { tweetAttachment: r.Z.getOriginalTweet(o) }, pathname: "/messages/compose" }) : this._showLoginSignupSheet(Q.BH.dmshare);
                        }),
                        (this._handleCopyLink = () => {
                            const { nudgeActionTaken: e, sessionToken: t } = this.props;
                            s.Z.setString((0, O.w)(this.props.tweet.permalink, t)), this.props.addToast({ text: Bt }), this._scribeAction("copy_link"), this._scribeNudgeAction({ tweetActionName: S.S.share, element: e ? "share_tweet_after_read" : "share_tweet", action: "click" });
                        }),
                        (this._handlePostVideo = () => {
                            const { viewerUserId: e } = this.context,
                                { history: t, nudgeActionTaken: i, tweet: o } = this.props;
                            if ((this._scribeAction("post_video"), this._scribeNudgeAction({ tweetActionName: S.S.share, element: i ? "share_tweet_after_read" : "share_tweet", action: "click" }), !e)) return void this._showLoginSignupSheet(Q.BH.generic);
                            const n = o?.entities?.media?.find((e) => "video" === e.type)?.expanded_url;
                            n && t.push({ pathname: "/compose/post", query: { text: (0, y.j)((0, O.w)(n)) } });
                        }),
                        (this._handleDownloadVideo = () => {
                            const { history: e, userClaims: t, viewerUserId: i } = this.context,
                                { tweet: o } = this.props,
                                n = t.isAnyPremiumSubscriber();
                            if ((this._scribeAction("download"), !i)) return void this._showLoginSignupSheet(Q.BH.generic);
                            const s = o.extended_entities?.media?.find((e) => "video" === e.type);
                            if (!s || "video" !== s.type) return;
                            const r = h.Z.extractVideoProps(A.Z.forTweet(o.id_str), s).source.downloadLink;
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
                                d = Nt({ fullName: o.user.name, screenName: o.user.screen_name, tweet: Yt(o.text) }),
                                c = n ? { url: s } : { title: a, text: d, url: s };
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
                                d = o.conversation_control.conversation_owner.screen_name,
                                c = m.Z.getEducationType(a, !1);
                            return c ? n.createElement(E.Z, { screenName: d, scribeElement: "disabled_reply", style: ii.conversationControlsAnchor, tweetPermalink: s ? o.permalink : void 0, type: c }, e) : null;
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
                                { liveCounts: a, updateLiveCounts: d } = this.props,
                                c = { ...a };
                            i && (c.likeCount = ni(a.likeCount, i)), o && (c.quoteCount = ni(a.quoteCount, o)), s && (c.retweetCount = ni(a.retweetCount, s)), n && (c.replyCount = ni(a.replyCount, n)), t && (c.bookmarkCount = ni(a.bookmarkCount, t)), r?.count && (c.viewCount = ni(a.viewCount, r.count)), r?.state && (c.viewCountState = r.state), d({ tweetId: this.props.tweet.id_str, liveCounts: c });
                        }),
                        (this._saveStateCounts = () => {
                            const { liveCounts: e, tweet: t, updateCounts: i, updateLiveCounts: o } = this.props,
                                { bookmarkCount: n, likeCount: s, replyCount: r, retweetCount: a, viewCount: d, viewCountState: c } = e;
                            (n || s || a || r || d || c) && (i(t.id_str, e), this._isEditTweetPerspectiveEnabled(t) && o({ tweetId: t.id_str, liveCounts: { ...Jt } }));
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
                    const { actionSize: e, activeColor: t, allowBookmarkInActionsBar: i, brandedLikeAnimationData: s, color: a, composerHasData: d, displayStyle: c, enableKeyboardShortcuts: l, id: u, isCommunityMember: h, isFocalTweet: m, isViewerBannedFromCommunity: k, likeActionIconContainerRef: b, promotedContent: C, style: g, tweet: A, withActionsDisabled: y, withAnalyticsAction: v, withCount: f, withRemoveFromBookmarks: T } = this.props,
                        { viewerUserId: N } = this.context,
                        { disabledAction: E, isQuoteTweetPrioritized: P, showDisabledActionsEducation: R, showLoginSignupSheet: F, showReplyDiscardTweetConfirmation: I, showRetweetDiscardTweetConfirmation: x } = this.state,
                        L = r.Z.getOriginalTweet(A),
                        Z = this._getRetweetWithCommentLink(L, C, this._shouldShowArticleNudge()),
                        D = `${L.permalink}/quotes`,
                        B = L.user.id_str === N,
                        O = this._isTweetRetweeted(L),
                        V = this._shouldDisable(L, Se.d.ViewTweetActivity, h, k),
                        U = this._shouldDisable(L, Se.d.Reply, h, k, B),
                        H = !L.favorited && this._shouldDisable(L, Se.d.Like, h, k),
                        q = this._shouldDisable(L, Se.d.Retweet, h, k),
                        j = !O || this._shouldDisable(L, Se.d.Unretweet, h, k),
                        z = !L.bookmarked && this._shouldDisable(L, Se.d.AddToBookmarks, h, k),
                        $ = this._shouldDisable(L, Se.d.QuoteTweet, h, k),
                        K = U && "limited_replies" === L.limited_actions && !this.context.featureSwitches.allTrue(["tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "tweet_with_visibility_results_all_gql_limited_actions_enabled"]),
                        G = this._shouldNudgeForceActionMenu(S.S.like) && !L.favorited,
                        X = L.trusted_friends_info?.screen_name,
                        Y = { [M.uq.bookmark]: T ? this._handleUnbookmarkTweet : this._handleBookmarkTweet },
                        J = q || P,
                        ee = !!N && (!P || this._shouldNudgeForceActionMenu(S.S.retweet) || this._shouldShowArticleNudge()),
                        te = (!ee && q) || (ee && q && j && $),
                        ie = !X && L.limited_actions !== Ve.FreedomOfSpeechNotReach && te,
                        oe = "block" === c,
                        ne = this._viewCountsPublicVisibilityEnabled,
                        se = L.user.id_str === N && !!v && !L.trusted_friends_info,
                        re = this.context.featureSwitches.isTrue("responsive_web_delete_tweet_stats_enabled"),
                        ae = !oe || !re;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(_.Z, { enabled: l, handlers: Y }),
                        n.createElement(w.Z, {
                            actionSize: e,
                            activeColor: t,
                            bookmarkCount: this._getEngagementCount("bookmark_count"),
                            color: a,
                            displayStyle: c,
                            enableKeyboardShortcuts: l,
                            id: u,
                            isDisabled: y,
                            isFocalTweet: m,
                            isFromProtectedAccount: L.user.protected && L.user.id_str !== N,
                            isLiked: L.favorited,
                            isRetweeted: O,
                            likeCount: this._getEngagementCount("favorite_count"),
                            renderAnalyticsAction: (e) => n.createElement(w.Z.ActionAnalytics, (0, o.Z)({}, e, { isFaded: ne ? "Disabled" === this._getViewState() : V, onPress: V ? this._handleOpenEducationPrompt(Se.d.ViewTweetActivity) : this._handleAnalyticsPress, style: ii.actionBaseContainer })),
                            renderBookmarkAction: (e) =>
                                n.createElement(
                                    w.Z.ActionBookmark,
                                    (0, o.Z)({}, e, {
                                        isBookmarked: Boolean(T || L.bookmarked),
                                        isFaded: z,
                                        onPress: () => {
                                            N ? (z ? this._handleOpenEducationPrompt(Se.d.AddToBookmarks)() : L.bookmarked ? this._handleUnbookmarkTweet() : this._handleBookmarkTweet()) : (this._scribeAction("bookmark"), this._showLoginSignupSheet(Q.BH.bookmark));
                                        },
                                        style: m ? ii.actionBaseContainer : ii.bookmarkActionContainerTimelineBigScreen,
                                        testIDs: $t,
                                        withCount: m,
                                    }),
                                ),
                            renderLikeAction: (e) => n.createElement(w.Z.ActionLike, (0, o.Z)({}, e, { actionMenuDescription: this._possiblyRenderNudge(S.S.like), enableActionMenu: !H && G, isDisabled: ("dynamic_product_ad" === L.limited_actions && H) || e.isDisabled, isFaded: H, likeActionIconContainerRef: b, likeTransitionAnimation: s?.assetUrl, onAnimationStart: this._handleOnLikeAnimationStart, onLikeActionSelect: this._handleLike, onMenuCancel: this._handleLikeMenuCancel, onPress: H ? this._handleOpenEducationPrompt(Se.d.Like) : G ? this._handleLikeMenuPress : this._handleLike, style: ii.actionBaseContainer, testIDs: Kt })),
                            renderReplyAction: (e) => n.createElement(w.Z.ActionReply, (0, o.Z)({}, e, { isDisabled: (0, Se.aU)(L, U) || e.isDisabled, isFaded: U, onPress: U ? this._handleOpenEducationPrompt(Se.d.Reply) : this._handleReplyPress, renderWrapper: K ? this._replyWrapper : void 0, style: ii.actionBaseContainer, testID: kt.Z.reply })),
                            renderRetweetAction: (e) => n.createElement(w.Z.ActionRetweet, (0, o.Z)({}, e, { actionMenuDescription: this._possiblyRenderNudge(S.S.retweet), activeColor: L?.exclusivity_info ? "plum500" : void 0, enableActionMenu: !te, excludeRetweetAction: J, excludeRetweetWithCommentAction: $, excludeViewQuotesRetweetsAction: ae, isDisabled: e.isDisabled || ie, isFaded: te, onMenuCancel: this._handleRetweetMenuCancel, onPress: te ? this._handleOpenEducationPrompt(Se.d.Retweet) : this._handleRetweetPress, onQuoteTweetActionSelect: this._handleQuoteTweet, onRetweetActionSelect: this._handleRetweet, onUnretweetActionSelect: this._handleUnretweet, onViewEngagementsActionSelect: this._handleViewEngagements, retweetActionSubText: L?.exclusivity_info ? this._renderSuperFollowerActionRetweetSubText(L.exclusivity_info.screen_name) : void 0, retweetWithCommentLink: d ? void 0 : Z, style: ii.actionBaseContainer, testIDs: Gt, viewQuotesRetweetsLink: D })),
                            renderShareAction: this._renderShareAction,
                            replyCount: this._getEngagementCount("reply_count"),
                            retweetCount: this._getEngagementCount("retweet_count") + this._getEngagementCount("quote_count"),
                            style: g,
                            tweetLink: L.permalink,
                            viewCount: ne ? this._getEngagementCount("view_count") : void 0,
                            viewState: this._getViewState(),
                            withAnalytics: ne ? !!v : se,
                            withBookmark: i || m,
                            withCount: f,
                        }),
                        F ? n.createElement(W.ZP, { displayMode: this.state.loginSignupSheetDisplayMode, onClose: this._handleCloseLoginSignupSheet, postLoginPath: L.permalink, tweetId: L.id_str, userFullName: L.user.name, userId: L.user.id_str }) : null,
                        I ? n.createElement(p.Z, { confirmButtonLabel: qt, confirmButtonType: "destructiveFilled", headline: Ot, onCancel: this._handleHideConfirmation, onConfirm: this._handleConfirmReplyTweet, text: Ut }) : null,
                        x ? n.createElement(p.Z, { confirmButtonLabel: Wt, confirmButtonLink: { pathname: "/compose/post", state: { quotedStatus: L, promotedContent: C } }, confirmButtonType: "destructiveFilled", headline: Vt, onCancel: this._handleHideConfirmation, onConfirm: this._handleConfirmQuoteTweet, text: Ht }) : null,
                        R && E && (A.limited_actions || A.limited_action_results || L?.community_id_str) ? n.createElement(Ue, { actionType: E, communityId: L?.community_id_str, limitedActionResults: A.limited_action_results, limitedActionsConfig: A.limited_actions || "", onAction: this._handleCloseEducationPrompt, onClose: this._handleCloseEducationPrompt, trustedFriendsScreenName: X, tweetPermalink: oe ? void 0 : L.permalink }) : null,
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
                        { source: a } = (0, N.p)(i, n, s, this._shouldShowArticleNudge());
                    a === S.w.payload && o.scribe({ ...jt, element: t, action: e }), a === S.w.forwardPivot && o.scribe({ ...Qt, element: t, action: e }), (a !== S.w.payload && a !== S.w.forwardPivot) || ("soft_nudge_with_quote_tweet" === r.limited_actions && i === S.S.retweet && ("impression" === e ? o.scribe({ ...Qt, element: t, action: "soft_nudge_with_qt_impression" }) : "cancel" === e && o.scribe({ ...Qt, element: t, action: "soft_nudge_with_qt_cancel" })));
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
                    return Boolean((0, N.p)(e, t, i, this._shouldShowArticleNudge()).source);
                }
                _initializeLivePipeline() {
                    const { dataSaverMode: e, tweet: t } = this.props,
                        i = r.Z.getOriginalTweet(t);
                    if (this.context.viewerUserId)
                        return (0, P.ZP)().then(({ LivePipeline: t }) => {
                            !e && t.isSupportedAndReady(this.context.featureSwitches) && this.context.featureSwitches.isTrue("livepipeline_tweetengagement_enabled") && !this._livePipelineSubscription && (this._livePipelineSubscription = t && t.get().subscribeTopic(`/tweet_engagement/${i.id_str}`, this._handleLivePipelineUpdate));
                        });
                }
            }
            (ei.contextType = q.rC), (ei.defaultProps = { actionSize: "normal", color: "gray700", displayStyle: "inline", enableKeyboardShortcuts: !1, liveCounts: { ...Jt }, withCount: !1, withRemoveFromBookmarks: !1 });
            const ti = (0, U.ZP)(Ae(ei)),
                ii = k.default.create((e) => ({ conversationControlsAnchor: { justifyContent: "center" }, actionBaseContainer: { flex: 1 }, bookmarkActionContainerTimelineBigScreen: { marginEnd: e.spaces.space8 } })),
                oi = (e) => parseInt(e, 10) || 0,
                ni = (e, t) => Math.max(oi(e), oi(t));
        },
        851623: (e, t, i) => {
            i.d(t, { Z: () => o });
            const o = { bookmark: "bookmark", removeBookmark: "removeBookmark", reply: "reply", like: "like", unlike: "unlike", retweet: "retweet", unretweet: "unretweet", retweetConfirm: "retweetConfirm", unretweetConfirm: "unretweetConfirm", caret: "caret" };
        },
        103574: (e, t, i) => {
            i.d(t, { Z: () => d });
            var o = i(202784),
                n = i(549613),
                s = i(668214),
                r = i(549116);
            const a = (e, t) => (0, r.Yt)(e, t.tweetId);
            const d = (0, s.Z)()
                    .propsFromState(() => ({ liveCounts: a }))
                    .adjustStateProps(({ liveCounts: e }) => ({ liveLikeCount: e && e.likeCount, liveQuoteCount: e && e.quoteCount, liveRetweetCount: e && e.retweetCount }))(function (e) {
                    const { isNonCompliantTweet: t, liveLikeCount: i, liveQuoteCount: s, liveRetweetCount: r, style: a, tweetBookmarkCount: d, tweetLikeCount: c, tweetPermalink: u, tweetQuoteTweetCount: h, tweetRetweetCount: m } = e,
                        _ = l(i, c),
                        w = l(s, h),
                        p = l(r, m);
                    return o.createElement(n.ZP, { bookmarkCount: d, isNonCompliantTweet: t, likeCount: _, permalink: u, quoteTweetCount: w, retweetCount: p, style: a });
                }),
                c = (e) => parseInt(e, 10) || 0,
                l = (e, t) => Math.max(c(e), c(t));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2.391fee0a.js.map
