"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TweetCurationActionMenu-b7da5e41"],
    {
        301410: (e, t, i) => {
            i.d(t, { i: () => _.ZP, z: () => g });
            var s = i(202784),
                o = i(928123),
                r = i.n(o),
                n = i(72845),
                l = i.n(n),
                a = i(57074),
                c = i.n(a),
                d = i(516951),
                u = i(88656),
                h = i(71620),
                m = i(163889),
                _ = i(312771);
            const p = ({ render: e }) => e({ fetchStatus: _.ZP.LOADING, data: null, error: null, retry: d.Z });
            class w extends s.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    if (!(e instanceof u.Z)) throw e;
                    this.props.errorHandler(e), (0, m.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const b = ({ query: e, queryRef: t, render: i }) => {
                    const s = r()(e, t);
                    return i({ fetchStatus: _.ZP.LOADED, data: s, error: null, retry: d.Z });
                },
                g = (e, t) =>
                    function ({ fetchPolicy: i = "store-or-network", render: o, variables: r }) {
                        const [n, a] = l()(e),
                            d = (0, h.n7)(t.errorConfig.context),
                            u = c()(r),
                            m = s.useCallback(() => {
                                a(u, { fetchPolicy: "network-only" });
                            }, [a, u]);
                        return (
                            s.useLayoutEffect(() => {
                                a(u, { fetchPolicy: i });
                            }, [i, a, u]),
                            n
                                ? s.createElement(
                                      s.Suspense,
                                      { fallback: s.createElement(p, { render: o }) },
                                      s.createElement(w, { errorHandler: d(t.errorConfig.options || {}), key: n.fetchKey, retry: m }, (t, i) => (t ? o({ fetchStatus: _.ZP.FAILED, error: t, data: null, retry: i }) : s.createElement(b, { query: e, queryRef: n, render: o }))),
                                  )
                                : null
                        );
                    };
        },
        201847: (e, t, i) => {
            i.d(t, { ZP: () => Ie });
            var s = i(807896),
                o = (i(136728), i(202784)),
                r = i(325686),
                n = i(305845),
                l = i(966582),
                a = i(782261),
                c = i(154003),
                d = i(811176),
                u = i(247056),
                h = i(392237),
                m = i(674132),
                _ = i.n(m),
                p = i(149170),
                w = i(516951),
                b = i(683814),
                g = i(817648),
                C = i(459660),
                f = i(774426),
                y = i(182873),
                T = i(727828),
                A = i(376293),
                v = i(712816),
                E = i(142156),
                k = i(879596),
                U = i(870358),
                P = i(942893),
                S = i(214647),
                Z = i(500002),
                D = i(175856),
                I = i(443781),
                x = i(834324),
                O = i(73664),
                R = i(668214);
            const H = (e) => (0, D.t5)(e, D.FX),
                L = (0, R.Z)()
                    .propsFromState(() => ({ shouldShowConversationControlsTip: H }))
                    .propsFromActions(() => ({ addFlag: D.pj })),
                F = _().bae0cbc0,
                M = h.default.create((e) => ({ inlineCallout: { position: "absolute", end: e.spaces.space32, marginTop: e.spaces.space2, zIndex: 1 }, textStyle: { whiteSpace: "nowrap" } })),
                B = L(({ addFlag: e, shouldShowConversationControlsTip: t }) => {
                    const i = o.useRef(),
                        s = (0, O.R)(i),
                        n = o.useRef(!1),
                        l = t;
                    return (
                        o.useEffect(() => {
                            s &&
                                ((n.current = !0),
                                setTimeout(() => {
                                    e(D.FX);
                                }, 5e3));
                        }, [s, e]),
                        o.useEffect(
                            () => () => {
                                n.current && e(D.FX);
                            },
                            [e],
                        ),
                        o.createElement(r.Z, { ref: i, style: M.inlineCallout }, s && l ? o.createElement(x.Z, { text: F, textStyle: M.textStyle, withRightArrow: !0 }) : null)
                    );
                });
            var W = i(533128),
                q = i(851623),
                V = i(73066),
                N = i(463678),
                z = i(404914),
                X = i(921795),
                j = i(999999),
                G = i(237467),
                $ = i(234410),
                K = i(486809),
                Q = i(99217),
                J = i(448573),
                Y = i(457801),
                ee = i(722494),
                te = i(407608),
                ie = i(191444),
                se = i(317859),
                oe = i(901023),
                re = i(778104),
                ne = i(923936),
                le = i(172894),
                ae = i(383494),
                ce = i(810373),
                de = i(273039),
                ue = i(122447),
                he = i(190443),
                me = i(99643),
                _e = i(420438),
                pe = i(388975),
                we = i(59021),
                be = i(264639),
                ge = i(928875),
                Ce = i(872147),
                fe = i(102236),
                ye = i(736972),
                Te = i(750633),
                Ae = i(826767),
                ve = i(471927),
                Ee = i(256195),
                ke = i(329268),
                Ue = i(811507),
                Pe = i(690031);
            const Se = /\/mediaViewer$/;
            class Ze extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showModerationBlockConfirmation: !1, showEditWithPremiumUpsell: !1 }),
                        (this._hasPremiumPlus = this.context.userClaims.isVerifiedOrg() || this.context.userClaims.isVerifiedOrgAffiliate() || this.context.userClaims.hasSubscription("premium_plus")),
                        (this._shouldDisable = W.$y.bind(null, this.context.featureSwitches)),
                        (this._birdwatchAction = X.Z.bind(null, this.context.featureSwitches)),
                        (this._birdwatchRequestAction = j.Z.bind(null, this.context.featureSwitches)),
                        (this._editTweetCompositionEligible = this.context.featureSwitches.isTrue("responsive_web_edit_tweet_composition_enabled")),
                        (this._editTweetCompositionEnabledForUser = () => {
                            const { featureSwitches: e, userClaims: t } = this.context,
                                i = t.isTrueAndEnabled("subscriptions_feature_labs_1004"),
                                s = e.isTrue("responsive_web_edit_tweet_enabled");
                            return this._editTweetCompositionEligible && (i || s);
                        }),
                        (this._birdwatchNoteWritingEnabled = this.context.featureSwitches.isTrue("responsive_web_birdwatch_note_writing_enabled")),
                        (this._birdwatchNoteRequestEnabled = this.context.featureSwitches.isTrue("responsive_web_birdwatch_note_request_enabled")),
                        (this._onMenuClick = () => {
                            const { addFlag: e, onMenuClick: t, shouldShowConversationControlsTip: i, withChangeConversationControlsTooltip: s } = this.props;
                            i && s && e(D.FX), t && t();
                        }),
                        (this._openEditWithPremiumUpsell = () => {
                            this.setState({ showEditWithPremiumUpsell: !0 });
                        }),
                        (this._closeEditWithPremiumUpsell = () => {
                            this.setState({ showEditWithPremiumUpsell: !1 });
                        }),
                        (this._renderEditWithPremiumUpsell = () => (this.state.showEditWithPremiumUpsell ? o.createElement(T.Z, { onAction: this._closeEditWithPremiumUpsell, onClose: this._closeEditWithPremiumUpsell, variant: "EditPost" }) : null)),
                        (this._handleOnChangeConversationControls = (e) => {
                            const { addToast: t, analytics: i, changeConversationControls: s, createLocalApiErrorHandler: o, removeConversationControls: r, tweet: n } = this.props,
                                l = (0, g.Z)(n, e);
                            e === C.k.all
                                ? r &&
                                  r(n.id_str).then(() => {
                                      t({ text: l }), i.scribe({ element: He.all, action: "click", data: { items: [P.Z.getChangeConversationControlsItem(n, e)] } });
                                  }, o(E.w))
                                : s &&
                                  s(n.id_str, { policy: e, screenName: n.user?.screen_name }).then(() => {
                                      t({ text: l }), i.scribe({ element: He[e], action: "click", data: { items: [P.Z.getChangeConversationControlsItem(n, e)] } });
                                  }, o(E.w));
                        }),
                        (this._renderCurationActionMenu = (e) => (t) =>
                            o.createElement(n.l.Consumer, null, ({ downloadLink: i }) => {
                                const [s] = this._getActionItems(e, i);
                                return o.createElement(f.default, { actionItems: s, onClose: t });
                            })),
                        (this._getPrerollActionItems = () => {
                            const { analytics: e, history: t, onTweetDismiss: i, promotedContent: s, tweet: o, userCountry: r, userLanguage: n } = this.props,
                                { featureSwitches: a } = this.context,
                                c = this._scribeAction,
                                d = {},
                                u = [],
                                h = l.Z.isPromoted(s);
                            return (
                                (d.promotedTweetDismiss = (0, he.Z)({ onTweetDismiss: () => i?.(!1), hasPremiumPlus: this._hasPremiumPlus, promotedDismissUpsellEnabled: a.isTrue("subscriptions_hide_ad_upsell_enabled"), history: t })),
                                h && (d.adInfo = (0, N.Z)({ promotedContent: s, scribeAction: c })),
                                (d.report = (0, we.t)({ analytics: e, history: t, promotedContent: s, scribeAction: c, tweet: o, featureSwitches: a, reporterCountry: r, reporterLanguage: n })),
                                Oe.forEach((e) => {
                                    const t = d[e];
                                    if (t) {
                                        const e = { Icon: t.Icon, disabled: t.disabled, isEmphasized: t.isEmphasized, onClick: t.onClick, testID: t.testID, text: t.text };
                                        u.push(e);
                                    }
                                }),
                                u
                            );
                        }),
                        (this._getMuteOrUnmuteAction = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, dismissUserFromConversation: i, history: s, mute: o, promotedContent: r, tweet: n, unmute: l } = this.props,
                                { user: a } = n,
                                c = { addToast: e, createLocalApiErrorHandler: t, scribeAction: this._scribeAction },
                                d = this.context.featureSwitches.isTrue("subscriptions_mute_ad_upsell_enabled");
                            return (0, ae.Z)({ ...c, mute: o, unmute: l, user: a, dismissUserFromConversation: i, promotedContent: r, muteAdUpsellEnabled: d, history: s, hasPremiumPlus: this._hasPremiumPlus });
                        }),
                        (this._getHighlightOrUndoAction = () => {
                            const { addToast: e, highlight: t, tweet: i, undoHighlight: s } = this.props,
                                o = this._scribeAction,
                                { featureSwitches: r, userClaims: n } = this.context;
                            if (r.isTrue("highlights_tweets_action_enabled") && !this._shouldDisable(i, W.d.Highlight)) {
                                const l = n.isTrueAndEnabled("subscriptions_feature_highlights"),
                                    a = r.isTrue("subscriptions_sign_up_enabled") && r.isTrue("highlights_tweets_action_menu_upsell_enabled");
                                return l ? (0, oe.Z)({ addToast: e, scribeAction: o, tweetId: i.id_str, undoHighlight: s, highlight: t }) : a ? (0, re.Z)({ scribeAction: o }) : null;
                            }
                        }),
                        (this._getHighlightUpsellOnPinAction = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, highlight: i, pin: s, tweet: o, undoHighlight: r } = this.props,
                                n = this._scribeAction,
                                { featureSwitches: l, userClaims: a } = this.context,
                                c = l.isTrue("highlights_tweets_upsell_on_pin_action_enabled"),
                                d = l.isTrue("subscriptions_sign_up_enabled"),
                                u = l.isTrue("highlights_tweets_action_enabled") && !this._shouldDisable(o, W.d.Highlight),
                                h = a.isTrueAndEnabled("subscriptions_feature_highlights");
                            return u && c && d && !h ? (0, ne.Z)({ addToast: e, scribeAction: n, tweetId: o.id_str, undoHighlight: r, highlight: i, pin: s, createLocalApiErrorHandler: t, isBlueUpsellEligible: d && !h }) : (0, de.Z)({ addToast: e, scribeAction: n, pin: s, createLocalApiErrorHandler: t, tweetId: o.id_str });
                        }),
                        (this._getEditTweetAction = () => {
                            const { tweet: e } = this.props,
                                { featureSwitches: t, userClaims: i, viewerUserId: s } = this.context,
                                { user: o } = e,
                                r = this._scribeAction,
                                n = o.id_str === s;
                            if ((0, J.H)(e, { isUserTweetAuthor: n }) && !(0, W.$y)(t, e, W.d.EditTweet)) {
                                if (this._editTweetCompositionEnabledForUser()) return (0, J.Q)({ scribeAction: r, tweet: e, featureSwitches: t });
                                if (!this._editTweetCompositionEnabledForUser() && this._editTweetCompositionEligible && !i.isAnyPremiumSubscriber() && !i.hasSubscription("twitter_blue_legacy") && t.isTrue("subscriptions_sign_up_enabled") && t.isTrue("responsive_web_edit_tweet_upsell_enabled")) return (0, Y.Z)({ tweet: e, scribeAction: r, onClick: this._openEditWithPremiumUpsell });
                            }
                            return null;
                        }),
                        (this._getEditArticleAction = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, history: i, tweet: s, unpublishArticleEntity: o } = this.props,
                                { featureSwitches: r, viewerUserId: n } = this.context,
                                { user: l } = s,
                                a = this._scribeAction,
                                c = l.id_str === n && !(0, W.$y)(r, s, W.d.EditTweet);
                            return s.article && c ? (0, Q.Z)({ createLocalApiErrorHandler: t, scribeAction: a, addToast: e, unpublishArticleEntity: o, articleEnttiyId: s.article.rest_id, history: i }) : null;
                        }),
                        (this._getActionItems = (e, t) => {
                            const { deleteTweet: i, follow: s, hideReply: o, muteTweet: r, removeTag: n, unmentionUserFromConversation: c, unmuteTweet: d, unpin: u } = this.props,
                                { addFlag: h, addToast: m, analytics: _, createLocalApiErrorHandler: p, feedbackItems: w, forwardPivotDisplayType: b, forwardPivotLandingUrl: g, history: C, isPinned: f, onDeleteTweet: y, onTweetDismiss: T, promotedContent: v, shouldShowHideReplyTip: E, shouldShowMuteEducationTip: k, tweet: U, userCountry: P, userLanguage: S, withChangeConversationControls: Z, withHideReply: D, withMuteConversation: I, withUnhideReply: x, withViewHiddenReplies: O } = this.props,
                                { featureSwitches: R, userClaims: H, viewerUserId: L } = this.context,
                                { user: F } = U,
                                M = [],
                                B = l.Z.isPromoted(v) && l.Z.shouldShowAdDisclosure(v),
                                q = {},
                                X = this._scribeAction,
                                j = { addToast: m, createLocalApiErrorHandler: p, scribeAction: X },
                                Q = F.id_str === L;
                            Object.assign(q, this._getCommunityActions()), B && (q.adInfo = (0, N.Z)({ promotedContent: v, scribeAction: X })), Q && !this._shouldDisable(U, W.d.ViewTweetActivity) && (q.analytics = (0, z.Z)({ tweet: U, scribeAction: X, featureSwitches: R })), R.isTrue("responsive_web_delete_tweet_stats_enabled") && (q.viewTweetEngagements = (0, ke.Z)({ tweet: U, scribeAction: X, featureSwitches: R })), F.protected || this._shouldDisable(U, W.d.Embed) || U.isPreviewDisplay || (q.embed = (0, ee.Z)({ permalink: U.permalink, scribeAction: X, tweet: U, featureSwitches: R }));
                            const J = a.Z.isArticlePost(U) && R.isTrue("responsive_web_twitter_article_seed_tweet_enabled") && H.isTrueAndEnabled("subscriptions_feature_article_composer");
                            if (J) {
                                const e = this._getEditArticleAction();
                                e && (q.edit = e);
                            } else {
                                const e = this._getEditTweetAction();
                                e && (q.edit = e);
                            }
                            if ((R.isTrue("responsive_web_show_similar_posts_action_enabled") && "ShowSimilarPosts" === b && g && (q.relatedPosts = (0, me.Z)({ landingUrl: g.url, isArticle: J, scribeAction: X })), O && U.conversation_id_str === U.id_str && !this._shouldDisable(U, W.d.ViewHiddenReplies) && (q.viewHiddenReplies = (0, Ee.Z)({ permalink: U.permalink, scribeAction: X })), (0, pe.k)(L, U) && (q.removeTag = (0, pe.Z)({ createLocalApiErrorHandler: p, viewerUserId: L, removeTag: n, tweet: U })), (0, le.So)(L, U) && R.isTrue("dont_mention_me_enabled") && (q.leaveConversation = (0, le.ZP)({ ...j, unmentionUserFromConversation: c, tweet: U })), L))
                                if ((F.blocking || this._shouldDisable(U, W.d.ListsAddRemove, void 0, void 0, Q) || (q.addOrRemoveFromList = (0, V.Z)({ user: F, scribeAction: X })), this._birdwatchNoteWritingEnabled && !U.isStaleEdit && (q.birdwatch = this._birdwatchAction({ scribeAction: X, tweetId: U.id_str })), this._birdwatchNoteRequestEnabled && !U.isStaleEdit && (q.birdwatchRequest = this._birdwatchRequestAction({ scribeAction: X, tweetId: U.id_str })), Q)) {
                                    f ? (q.pinOrUnpin = (0, Ae.Z)({ ...j, tweetId: U.id_str, unpin: u })) : this._shouldDisable(U, W.d.PinToProfile) || (q.pinOrUnpin = this._getHighlightUpsellOnPinAction());
                                    const t = this._getHighlightOrUndoAction();
                                    t && (q.highlightOrUndo = t), this._shouldIncludeTweetAppealOption() && (q.appealTweetWarning = (0, we.t)({ analytics: _, history: C, isAppealTweetWarning: !0, promotedContent: v, scribeAction: X, tweet: U, featureSwitches: R, reporterCountry: P, reporterLanguage: S })), I && !this._shouldDisable(U, W.d.MuteConversation) && (q.muteOrUnmuteConversation = (0, ce.Z)({ ...j, addFlag: h, muteTweet: r, shouldShowMuteEducationTip: k, tweet: U, unmuteTweet: d })), Z && !this._shouldDisable(U, W.d.ConversationControls) && (q.changeConversationControls = (0, G.Z)({ tweet: U, onChangeConversationControls: e })), this._shouldDisable(U, W.d.Delete) || (q.delete = (0, $.Z)({ ...j, deleteTweet: i, onDeleteTweet: y, tweet: U, featureSwitches: R, userClaims: H }));
                                } else T && B && (q.promotedTweetDismiss = (0, he.Z)({ onTweetDismiss: T, hasPremiumPlus: this._hasPremiumPlus, promotedDismissUpsellEnabled: this.context.featureSwitches.isTrue("subscriptions_hide_ad_upsell_enabled"), history: C })), F.blocking || this._shouldDisable(U, W.d.Follow) || ((q.followOrUnfollow = F.following ? (0, ye.Z)({ ...j, unfollow: this.props.unfollow, promotedContent: v, user: F }) : (0, te.ZP)({ ...j, follow: s, promotedContent: v, user: F })), R.allTrue(["super_follow_android_web_subscription_enabled", "creator_subscriptions_subscribe_action_tweet_menu_enabled"]) && F.super_follow_eligible && !F.super_following && (q.subscribe = (0, fe.Z)({ scribeAction: X, history: C, user: F })), (q.muteOrUnmute = this._getMuteOrUnmuteAction())), I && (q.muteOrUnmuteConversation = (0, ce.Z)({ ...j, addFlag: h, muteTweet: r, shouldShowMuteEducationTip: k, tweet: U, unmuteTweet: d })), D && (q.hideReply = (0, ie.ZP)({ ...j, addFlag: h, hideReply: o, isSoftBlockEnabled: R.isTrue("xprofile_blocked_by_view_enabled"), onBlock: this._handleBlock, onTweetDismiss: T, shouldShowHideReplyTip: E, tweet: U })), x && (q.unhideReply = (0, Te.Z)({ ...j, tweet: U, unhideReply: this.props.unhideReply })), (q.blockOrUnblock = (0, A.op)({ blockAction: this._handleBlock, isSoftBlockEnabled: R.isTrue("xprofile_blocked_by_view_enabled"), source: A.SC.TWEET_CARET, testID: Pe.Z.block, unblockAction: this._handleUnblock, user: F }));
                            L && !Q && !U.isPreviewDisplay
                                ? (q.report = (0, we.t)({ analytics: _, history: C, promotedContent: v, scribeAction: X, tweet: U, featureSwitches: R, reporterCountry: P, reporterLanguage: S }))
                                : !L &&
                                  P &&
                                  (function (e) {
                                      return "DE" === e.toUpperCase();
                                  })(P) &&
                                  ((q.report = (0, we.x)({ promotedContent: v, scribeAction: X, tweet: U, featureSwitches: R })), R.isTrue("netzdg_in_loggedout_posts_enabled") && (q.reportNetzDG = ge.t({ tweet: U })));
                            const Y = R.getStringValue("dsa_report_illegal_content_url");
                            return (
                                !Q && R.isTrue("dsa_report_flow_enabled") && Y && (q.reportEUIllegalContentDSA = be.t({ tweet: U, promotedContent: v, scribeAction: X, reportUrl: Y })),
                                t && C.location.pathname.match(Se) && (q.downloadVideo = (0, K.Z)({ downloadVideoLink: t, scribeAction: X })),
                                Oe.forEach((e) => {
                                    if ("feedbackOptions" !== e || U.isStaleEdit) q[e] && M.push(q[e]);
                                    else {
                                        const e = w ? w.filter((e) => !e.excludeFromActionMenu) : [];
                                        M.push(...e);
                                    }
                                }),
                                [M, q]
                            );
                        }),
                        (this._getLeaveBehindMenuActions = () => {
                            const {
                                    feedbackItems: e,
                                    tweet: { user: t },
                                } = this.props,
                                [, i] = this._getActionItems(w.Z),
                                s = [];
                            return (
                                Re.forEach((o) => {
                                    if ("followOrUnfollow" !== o || t.following)
                                        if ("feedbackOptions" === o) {
                                            const t = e ? e.filter((e) => !e.excludeFromActionMenu) : [];
                                            s.push(...t);
                                        } else i[o] && s.push(i[o]);
                                }),
                                s
                            );
                        }),
                        (this._handleBlock = () => {
                            const { addToast: e, block: t, createLocalApiErrorHandler: i, dismissUserFromConversation: s, history: o, promotedContent: r, tweet: n } = this.props;
                            t(n.user.id_str, { promotedContent: r }).then(() => {
                                s({ userId: n.user.id_str, feedbackKeys: ["UnfollowEntity"] }), e({ action: { label: xe.unblock, onAction: this._handleUnblock }, text: xe.blockedSuccess });
                                const t = !!n.promoted_content?.impression_id;
                                if (this.context.featureSwitches.isTrue("subscriptions_block_ad_upsell_enabled") && t && !this._hasPremiumPlus) {
                                    const e = { variant: "BlockAd" };
                                    o.push("/i/verified-get-verified", e);
                                }
                            }, i(v.d)),
                                this._scribeAction({ element: "block" });
                        }),
                        (this._handleUnblock = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, tweet: i, unblock: s } = this.props;
                            s(i.user.id_str, { promotedContent: t }).catch(e(k.D)), this._scribeAction({ element: "unblock" });
                        }),
                        (this._handleImmediateDismissClick = () => {
                            const e = this._getLeaveBehindMenuActions();
                            this.props.setLeaveBehindActionItems?.(e), this._onMenuClick();
                        }),
                        (this._scribeAction = ({ action: e, additionalData: t, element: i }) => {
                            const { analytics: s, promotedContent: o, tweet: r } = this.props,
                                n = s.contextualScribeData;
                            let l = n?.items ? n : { ...(n || {}), items: [P.Z.getTweetItem(r, o)] };
                            return t && (l = { ...l, ...t }), s.scribe({ element: i, action: e || "click", data: l });
                        });
                }
                render() {
                    const { isActiveCreator: e, isDisabled: t, isForPreroll: i, menuControlProps: n, tweet: l, withChangeConversationControlsTooltip: a, withImmediateDismiss: h } = this.props,
                        m = l.conversation_control?.policy || C.k.all;
                    return i
                        ? o.createElement(c.ZP, { icon: o.createElement(p.default, { style: { height: "18px" } }), renderMenu: (e) => o.createElement(d.Z, { items: this._getPrerollActionItems(), onCloseRequested: e, shouldCloseOnClick: !0 }), size: "smallCompact", style: De.prerollDismissButton, type: "onMediaDominantColorFilled" })
                        : h
                          ? o.createElement(r.Z, { style: De.dismissButton }, o.createElement(y.Z, { onClick: this._handleImmediateDismissClick }))
                          : o.createElement(
                                r.Z,
                                { style: De.overflowMenu },
                                a ? o.createElement(B, null) : null,
                                o.createElement(b.Z, { controlled: !0, disallowedReplyControls: [], isActiveCreator: e, midConversationTweet: l, onChange: this._handleOnChangeConversationControls, setDisallowedReplyControls: () => {}, value: m }, ({ openPopover: e }) => o.createElement(u.Z, (0, s.Z)({}, n, { isDisabled: t, onClick: this._onMenuClick, renderActionMenu: this._renderCurationActionMenu(e), testID: q.Z.caret }))),
                                a ? o.createElement(B, null) : null,
                                this._renderEditWithPremiumUpsell(),
                            );
                }
                _getCommunityActions() {
                    const e = {},
                        { tweet: t } = this.props,
                        { community_id_str: i, id_str: s } = t,
                        { viewerUserId: o } = this.context;
                    if (!i || !o) return e;
                    const {
                            analytics: { contextualScribeNamespace: r },
                            community: n,
                            disableRemoveFromCommunity: l,
                            withCommunityModerationAuthority: a,
                        } = this.props,
                        { community_relationship: c, user: d } = t,
                        u = !l && a;
                    if ((d.id_str !== o && u && (this._shouldDisable(t, W.d.HideCommunityTweet) || (e.hideTweet = (0, se.Z)(s, { ...r, element: "hide_tweet" })), this._shouldDisable(t, W.d.RemoveFromCommunity) || (e.removeCommunityMember = (0, _e.Z)(d, i, { ...r, element: "remove_community_member" }))), this._shouldDisable(t, W.d.SearchUsersPost) || (e.searchUsersPost = (0, Ce.Z)(d, i, { ...r, element: "search_users_post" })), U.X7.includes(c?.actions.pin_action_result.__typename) && !this._shouldDisable(t, W.d.PinCommunityTweet))) {
                        const t = "CommunityTweetPinActionReplace" === n?.actions?.pin_action_result?.__typename;
                        e.pinCommunityTweet = (0, ue.Z)(s, i, t, { ...r, element: "pin_community_tweet" });
                    }
                    return U.Gd.includes(c?.actions.unpin_action_result.__typename) && !this._shouldDisable(t, W.d.UnpinCommunityTweet) && (e.unpinCommunityTweet = (0, ve.Z)(s, i, { ...r, element: "unpin_community_tweet" })), e;
                }
                _shouldIncludeTweetAppealOption() {
                    const { forwardPivotDisplayType: e, isNsfwUser: t, tweet: i, userCountry: s, userLanguage: o } = this.props,
                        { featureSwitches: r, viewerUserId: n } = this.context;
                    return (0, S.rT)({ viewerUserId: n, featureSwitches: r, forwardPivotDisplayType: e, tweet: i, userCountry: s, userLanguage: o }) || (0, S.V4)({ viewerUserId: n, featureSwitches: r, isNsfwUser: t, tweet: i, userCountry: s, userLanguage: o });
                }
            }
            (Ze.defaultProps = { withRemoveFromBookmarks: !1 }), (Ze.contextType = I.rC);
            const De = h.default.create((e) => ({ overflowMenu: { display: "flex", flexDirection: "row", alignItems: "center" }, dismissButton: { flexDirection: "row", alignItems: "center", marginTop: e.spaces.space8 }, prerollDismissButton: { width: "2rem", height: "1rem", backgroundColor: "rgba(0,0,0,.5)", borderRadius: "4px" } })),
                Ie = (0, Z.ZP)((0, Ue.Z)(Ze)),
                xe = { unblock: _().e133be4e, blockedSuccess: _().a9fd20be },
                Oe = ["searchUsersPost", "hideTweet", "removeCommunityMember", "delete", "edit", "appealTweetWarning", "pinOrUnpin", "highlightOrUndo", "promotedTweetDismiss", "adInfo", "removeTag", "feedbackOptions", "followOrUnfollow", "subscribe", "addOrRemoveFromList", "muteOrUnmute", "muteOrUnmuteConversation", "leaveConversation", "changeConversationControls", "blockOrUnblock", "viewTweetEngagements", "downloadVideo", "hideReply", "unhideReply", "embed", "report", "reportNetzDG", "reportEUIllegalContentDSA", "analytics", "relatedPosts", "viewHiddenReplies", "birdwatch", "birdwatchRequest", "pinCommunityTweet", "unpinCommunityTweet"],
                Re = ["feedbackOptions", "followOrUnfollow", "muteOrUnmute", "blockOrUnblock", "report", "reportEUIllegalContentDSA"];
            const He = Object.freeze({ all: "change_conversation_control_to_everyone", community: "change_conversation_control_to_community", by_invitation: "change_conversation_control_to_mentioned", followers: "change_conversation_control_to_followers", subscribers: "change_conversation_control_to_subscribers", community_members: "community_members", community_hidden_tweet: "community_hidden_tweet", super_followers_exclusive: "super_followers_exclusive", community_tweet_member_removed: "community_tweet_member_removed", trusted_friends_tweet: "trusted_friends_tweet", verified: "change_conversation_control_to_verified", premium: "change_conversation_control_to_premium" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu-b7da5e41.40bb01ea.js.map
