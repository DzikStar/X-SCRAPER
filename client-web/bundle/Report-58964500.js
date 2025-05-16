"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Report-58964500"],
    {
        294010: (e, t, o) => {
            o.r(t), o.d(t, { ReportFlowComplete: () => U, default: () => I });
            o(136728);
            var r = o(202784),
                s = o(325686),
                i = o(392237),
                n = o(674132),
                a = o.n(n),
                c = o(516951),
                d = o(143778),
                p = o(187669),
                l = o(290402),
                m = o(545334),
                u = o(847607),
                h = o(712816),
                _ = o(879596),
                C = o(312771),
                y = o(71620),
                w = o(208115),
                v = o(668214),
                b = o(629196),
                T = o(601576),
                f = o(919022);
            const g = (e, t) => {
                    const o = t.location.query.action;
                    if ("string" == typeof o) return o;
                },
                k = (e, t) => {
                    const o = t.location.query.reported_user_id;
                    if ("string" == typeof o) return o;
                },
                A = (e, t) => {
                    const o = t.location.query.reported_screen_name;
                    if ("string" == typeof o) return o;
                },
                D = (0, v.Z)()
                    .propsFromState(() => ({ action: g, canGoBack: w.q, reportedUserId: k, reportedScreenName: A }))
                    .propsFromActions(() => ({ addToast: T.fz, block: f.ZP.block, createLocalApiErrorHandler: (0, y.zr)("REPORT_SCREEN"), mute: b.r, unblock: f.ZP.unblock, unfollow: f.ZP.unfollow, unmute: f.ZP.unmute })),
                R = a().a9fd20be,
                M = a().i2b9632e;
            function U(e) {
                return (
                    (0, p.q)(() => {
                        const { action: t, addToast: o, block: r, canGoBack: s, createLocalApiErrorHandler: i, history: n, mute: a, reportedScreenName: c, reportedUserId: d } = e;
                        s
                            ? (d && "mute" === t
                                  ? a(d).then(
                                        () => {
                                            var t, r;
                                            o({
                                                action: {
                                                    label: m.d,
                                                    onAction:
                                                        ((t = d),
                                                        (r = c),
                                                        () => {
                                                            const { addToast: o, createLocalApiErrorHandler: s, unmute: i } = e;
                                                            i(t).then(
                                                                () => {
                                                                    o({ text: (0, u.X6)(r) });
                                                                },
                                                                s({ showToast: !0 }),
                                                            );
                                                        }),
                                                },
                                                text: (0, u.FK)(c),
                                            });
                                        },
                                        i({ showToast: !0 }),
                                    )
                                  : d &&
                                    "block" === t &&
                                    r(d).then(() => {
                                        var t;
                                        o({
                                            action: {
                                                label: m.d,
                                                onAction:
                                                    ((t = d),
                                                    () => {
                                                        const { addToast: o, createLocalApiErrorHandler: r, unblock: s } = e;
                                                        s(t).then(() => {
                                                            o({ text: M });
                                                        }, r(_.D));
                                                    }),
                                            },
                                            text: R,
                                        });
                                    }, i(h.d)),
                              n.goBackThroughModals())
                            : n.push("/");
                    }),
                    r.createElement(s.Z, { style: E.root }, r.createElement(l.Z, { fetchStatus: C.ZP.LOADING, onRequestRetry: c.Z, render: d.Z, retryable: !1 }))
                );
            }
            const E = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } })),
                I = D(U);
        },
        679406: (e, t, o) => {
            o.r(t), o.d(t, { ReportScreen: () => Ce, default: () => ye });
            o(136728);
            var r = o(202784),
                s = o(468811),
                i = o.n(s),
                n = o(688715),
                a = o(154003),
                c = o(362075),
                d = o(392237),
                p = o(674132),
                l = o.n(p),
                m = o(161821),
                u = o(840647),
                h = o(980407),
                _ = o(443781),
                C = o(545334),
                y = o(847607),
                w = o(712816),
                v = o(879596),
                b = o(323683),
                T = o(163889),
                f = o(730996),
                g = o(395067),
                k = o(479506),
                A = o(942893),
                D = o(593953),
                R = o(71620),
                M = o(208115),
                U = o(2430),
                E = o(668214),
                I = o(481242),
                S = o(837455),
                Z = o(296196),
                L = o(275365),
                P = o(182991),
                x = o(576469),
                H = o(197914),
                B = o(228356),
                F = o(629196),
                N = o(390387),
                O = o(601576),
                q = o(836255),
                W = o(919022);
            const z = (e, t) => t.location && t.location.state && t.location.state.clientReferer,
                G = (e, t) => t.location && t.location.state && t.location.state.inboxType,
                $ = (e, t) => t.location && t.location.state && t.location.state.scribeNamespace,
                j = (e, t) => !!(t.location && t.location.state && t.location.state.isMedia) || !1,
                X = (e, t) => t.location && t.location.state && t.location.state.promotedContent,
                V = (e, t) => t.location && t.location.state && t.location.state.conversationSection,
                K = (e, t) => t.location && t.location.query && (0, U.BX)(t.location.query.community_id),
                J = (e, t) => (0, g.HO)(Q(e, t)),
                Q = (e, t) => t.match.params.reportType,
                Y = (e, t) => t.match.params.reportedId,
                ee = (e, t) => {
                    const o = Q(e, t),
                        r = Y(0, t);
                    switch (o) {
                        case g.C2.Tweet:
                        case g.C2.AppealTweetWarning:
                        case g.C2.LimitedDiscoveryAppealTweet:
                        case g.C2.ProfileOnlyDiscoveryAppealTweet:
                        case g.C2.HideCommunityTweet:
                            return q.Z.selectHydrated(e, r);
                        default:
                            return;
                    }
                },
                te = (e, t) => {
                    const o = Q(e, t) === g.C2.User ? Y(0, t) : void 0;
                    return o ? W.ZP.select(e, o) : void 0;
                },
                oe = (e, t) => {
                    let o;
                    const r = Q(e, t);
                    if (((r !== g.C2.DMConversation && r !== g.C2.DMMessage) || (o = r === g.C2.DMConversation ? Y(0, t) : t.location.state ? t.location.state.conversationId : void 0), o)) {
                        const t = (0, P.x)(e, o),
                            r = ((e) => N.x0(e))(e);
                        return re(t, r);
                    }
                },
                re = (e, t) => {
                    if (e && e.data) {
                        let o;
                        return (o = e.data.type === L.eD.GROUP ? "0" : e.data.participants.filter((e) => e.user_id !== t)[0].user_id), { conversationId: e.data.conversation_id, reportedUserId: o };
                    }
                },
                se = (e, t) => (Q(e, t) === g.C2.Moment ? B.Z.select(e, Y(0, t)) : void 0),
                ie = (e, t) => {
                    const o = Q(e, t) === g.C2.List ? Y(0, t) : void 0;
                    return o ? x.Z.select(e, o) : void 0;
                },
                ne = (e, t) => {
                    const o = Q(e, t) === g.C2.Moment ? Y(0, t) : void 0;
                    return o ? H.Z.select(e, o) : void 0;
                },
                ae = (0, E.Z)()
                    .propsFromState(() => ({ canGoBack: M.q, clientReferer: z, communityId: K, dmConversation: oe, reportedId: Y, inboxType: G, isMedia: j, lang: N.VT, liveEvent: ne, moment: se, list: ie, promotedContent: X, conversationSection: V, reportType: Q, reportSource: J, scribeNamespace: $, tweet: ee, user: te }))
                    .propsFromActions(() => ({ addToast: O.fz, block: W.ZP.block, createLocalApiErrorHandler: (0, R.zr)("REPORT_SCREEN"), fetchUpdates: Z.fetchUpdates, mute: F.r, markTweetAsReported: q.Z.markAsReported, markTweetsAsRemovedFromCommunity: q.Z.markTweetsAsRemovedFromCommunity, markUserAsRemovedFromCommunity: S.Z.markUserAsRemovedFromCommunity, richScribeAction: I.richScribeAction, unblock: W.ZP.unblock, unfollow: W.ZP.unfollow, unmute: W.ZP.unmute })),
                ce = l().f1824804,
                de = l().h030c24c,
                pe = l().b12ffee6,
                le = l().f9f27fa2,
                me = l().a9fd20be,
                ue = l().i2b9632e,
                he = l().b772cd66,
                _e = (0, n.ju)("https://x.com");
            class Ce extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderDoneButton = () => {
                            const { isDone: e } = this.state;
                            return e ? r.createElement(a.ZP, { onPress: this._handleDone, size: "xSmall", type: "primaryFilled" }, he) : void 0;
                        }),
                        (this._handleDone = () => {
                            const { clientReferer: e, createLocalApiErrorHandler: t, fetchUpdates: o, history: r, inboxType: s, promotedContent: i, reportType: n } = this.props;
                            switch ((this._scribeAction("done"), n)) {
                                case g.C2.DMConversation:
                                case g.C2.DMMessage:
                                    r.replace((0, D.k2)(s)), o().catch(t({}));
                                    break;
                                case g.C2.Tweet: {
                                    const t = this.context.featureSwitches.isTrue("subscriptions_report_ad_upsell_enabled"),
                                        o = this.context.userClaims.hasSubscription("premium_plus") || this.context.userClaims.isVerifiedOrg() || this.context.userClaims.isVerifiedOrgAffiliate();
                                    if (t && !o && i?.impression_id) {
                                        const t = { variant: "ReportAd", dismissPath: e };
                                        r.push("/i/verified-get-verified", t);
                                    } else this._goBack();
                                    break;
                                }
                                default:
                                    this._goBack();
                            }
                        }),
                        (this._goBack = () => {
                            const { history: e } = this.props,
                                t = Math.min(-1, this._initialHistoryLength - window.history.length - 1);
                            e.go(t);
                        }),
                        (this._handleBack = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        }),
                        (this._handleCancel = () => {
                            this._goBack();
                        }),
                        (this._handleUndoBlock = (e) => () => {
                            const { addToast: t, createLocalApiErrorHandler: o, promotedContent: r, unblock: s } = this.props;
                            s(e, { promotedContent: r }).then(() => {
                                t({ text: ue });
                            }, o(v.D));
                        }),
                        (this._handleUndoMute = (e, t) => () => {
                            const { addToast: o, createLocalApiErrorHandler: r, unmute: s } = this.props;
                            s(e).then(
                                () => {
                                    o({ text: (0, y.X6)(t) });
                                },
                                r({ showToast: !0 }),
                            );
                        }),
                        (this._getReportTitle = () => {
                            const { reportType: e } = this.props;
                            switch (e) {
                                case g.C2.AppealTweetWarning:
                                    return ce;
                                case g.C2.RemoveCommunityMember:
                                    return pe;
                                case g.C2.HideCommunityTweet:
                                    return le;
                                default:
                                    return de;
                            }
                        }),
                        (this._getReportedTweetId = () => {
                            const { liveEvent: e, moment: t, reportType: o, tweet: r } = this.props;
                            switch (o) {
                                case g.C2.Moment: {
                                    const o = (e ? (0, m.Z)(e.slates) : []).find((e) => e.tweet_id);
                                    return o ? o.tweet_id : t && t.cover_media && t.cover_media.tweet_id;
                                }
                                case g.C2.AppealTweetWarning:
                                case g.C2.LimitedDiscoveryAppealTweet:
                                case g.C2.ProfileOnlyDiscoveryAppealTweet:
                                case g.C2.HideCommunityTweet:
                                case g.C2.Tweet:
                                    return r && r.id_str;
                                default:
                                    return;
                            }
                        }),
                        (this._getReportedUserId = (e) => {
                            const { dmConversation: t, list: o, liveEvent: r, moment: s, reportType: i, reportedId: n, tweet: a, user: c } = this.props;
                            switch (i) {
                                case g.C2.DMConversation:
                                case g.C2.DMMessage:
                                    return e && e.data && t && "0" === t.reportedUserId ? e.data.reported_user_id : t && t.reportedUserId;
                                case g.C2.Moment:
                                    return (r && r.liveEventDetails.attribution_user_id) || (s && s.author && s.author.id);
                                case g.C2.User:
                                    return c && c.id_str;
                                case g.C2.List:
                                    return o && o.user;
                                case g.C2.AppealTweetWarning:
                                case g.C2.LimitedDiscoveryAppealTweet:
                                case g.C2.ProfileOnlyDiscoveryAppealTweet:
                                case g.C2.HideCommunityTweet:
                                case g.C2.Tweet:
                                    return a && a.user.id_str;
                                case g.C2.RemoveCommunityMember:
                                    return n;
                                default:
                                    return void (0, T.ZP)(`Unknown report type ${i}`);
                            }
                        }),
                        (this._getReportedUserScreenName = (e) => {
                            const { liveEvent: t, moment: o, reportType: r, tweet: s, user: i } = this.props;
                            switch (r) {
                                case g.C2.Moment: {
                                    const e = t?.liveEventDetails.attribution_user_id,
                                        r = e ? t?.users?.[e] : void 0;
                                    if (r) return r?.screen_name;
                                    if (o && o.author) return o.author.screen_name;
                                    break;
                                }
                                case g.C2.Tweet:
                                    return s?.user.screen_name;
                                case g.C2.User:
                                    return i?.screen_name;
                            }
                        }),
                        (this._getCommunityId = () => {
                            const { communityId: e, reportType: t } = this.props;
                            if (t === g.C2.RemoveCommunityMember) return e;
                        }),
                        (this._getReportUrl = () => {
                            const { clientReferer: e, conversationSection: t, dmConversation: o, isMedia: r, lang: s, list: i, liveEvent: n, moment: a, promotedContent: c, reportSource: d, reportType: p, reportedId: l, scribeNamespace: m } = this.props,
                                h = p === g.C2.DMConversation,
                                _ = p === g.C2.DMMessage,
                                C = p === g.C2.Moment,
                                y = p === g.C2.List,
                                w = { client_location: [m?.page, m?.section, m?.component].join(":"), client_referer: e, client_app_id: (0, u.Z)().clientAppId, conversation_section: t, source: d, report_flow_id: this._reportFlowId, reported_user_id: this._getReportedUserId(), reported_tweet_id: this._getReportedTweetId(), reported_direct_message_conversation_id: (_ || h) && o && o.conversationId, reported_direct_message_id: _ && l, reported_moment_id: C ? (n && n.liveEventDetails.id) || (a && a.id_str) : void 0, reported_list_id: y ? i && i.id_str : void 0, is_promoted: !!c, impression_id: c?.impression_id, is_media: r, initiated_in_app: "1", lang: s, community_id: this._getCommunityId() },
                                v = Object.keys(w)
                                    .filter((e) => !!w[e])
                                    .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(w[e])}`)
                                    .join("&");
                            return `${_e}/i/safety/report_story?${v}`;
                        }),
                        (this._messageHandler = (e) => {
                            const { addToast: t, markTweetAsReported: o, markTweetsAsRemovedFromCommunity: r, markUserAsRemovedFromCommunity: s, reportSource: i } = this.props;
                            if (e.origin !== _e || "ReportAction" !== e.data.type) return;
                            const { block: n, createLocalApiErrorHandler: a, mute: c, promotedContent: d, unfollow: p } = this.props,
                                l = this._getReportedUserId(e);
                            switch (e.data.action) {
                                case "block":
                                    l &&
                                        n(l, { promotedContent: d }).then(() => {
                                            t({ action: { label: C.d, onAction: this._handleUndoBlock(l) }, text: me });
                                        }, a(w.d));
                                    break;
                                case "unfollow":
                                    l && p(l, { promotedContent: d }).catch(a(b.X));
                                    break;
                                case "mute":
                                    l &&
                                        c(l).then(
                                            () => {
                                                const o = this._getReportedUserScreenName(e);
                                                t({ action: { label: C.d, onAction: this._handleUndoMute(l, o) }, text: (0, y.FK)(o) });
                                            },
                                            a({ showToast: !0 }),
                                        );
                                    break;
                                case "complete": {
                                    this.setState({ isDone: !0 });
                                    const e = this._getReportedTweetId();
                                    if ((e && (i === f.g.Tweet && o(e, g.az.Tombstone), i === f.g.HideCommunityTweet && o(e, g.az.HiddenCommunityTweet)), i === f.g.RemoveCommunityMember)) {
                                        const e = this._getReportedUserId(),
                                            t = this._getCommunityId();
                                        e && t && (r(e, t, g.az.RemovedCommunityMember), s(`${t}_${e}`));
                                    }
                                    break;
                                }
                                case "error":
                                    this.setState({ isDone: !0 });
                                    break;
                                case "cancel":
                                    this._handleCancel();
                            }
                        }),
                        (this.state = { isDone: !1 }),
                        (this._accessedDirectly = this._wasAccessedDirectly()),
                        (this._reportFlowId = i().v4()),
                        (this._reportUrl = this._accessedDirectly ? "" : this._getReportUrl()),
                        (this._initialHistoryLength = window.history.length);
                }
                componentDidMount() {
                    const { addMessageListener: e, history: t } = this.props;
                    e(this._messageHandler), this._wasAccessedDirectly() ? t.push("/") : this._scribeAction("impression");
                }
                componentWillUnmount() {
                    const { isDone: e } = this.state;
                    this.props.removeMessageListener(this._messageHandler), e || this._wasAccessedDirectly() || this._scribeAction("cancel");
                }
                render() {
                    const { history: e } = this.props,
                        { isDone: t } = this.state;
                    return this._accessedDirectly ? null : r.createElement(h.Z, { backButtonType: t ? "close" : "back", history: e, onBackClick: t ? this._handleDone : this._handleBack, rightControl: this._renderDoneButton(), title: this._getReportTitle() }, r.createElement(c.Z, { allowForms: !0, src: this._reportUrl, style: d.default.absoluteFill }));
                }
                _wasAccessedDirectly() {
                    const { canGoBack: e, communityId: t, dmConversation: o, list: r, liveEvent: s, moment: i, reportType: n, reportedId: a, scribeNamespace: c, tweet: d, user: p } = this.props,
                        l = s && s.liveEventDetails.attribution_user_id;
                    return !e || !c || (n === g.C2.AppealTweetWarning && !d) || (n === g.C2.LimitedDiscoveryAppealTweet && !d) || (n === g.C2.ProfileOnlyDiscoveryAppealTweet && !d) || (n === g.C2.HideCommunityTweet && !d) || (n === g.C2.RemoveCommunityMember && !t && !a) || (n === g.C2.Tweet && !d) || (n === g.C2.User && !p) || (n === g.C2.DMConversation && !o) || (n === g.C2.DMMessage && (!a || !o)) || (n === g.C2.Moment && !i && !l) || (n === g.C2.List && !r);
                }
                _getScribeNamespace() {
                    if (this._scribeNamespace) return this._scribeNamespace;
                    const { reportType: e, scribeNamespace: t } = this.props;
                    let o;
                    switch (e) {
                        case g.C2.AppealTweetWarning:
                            o = "appeal_tweet_warning";
                            break;
                        case g.C2.LimitedDiscoveryAppealTweet:
                            o = "limited_discovery_appeal_tweet";
                            break;
                        case g.C2.ProfileOnlyDiscoveryAppealTweet:
                            o = "profile_only_discovery_appeal_tweet";
                            break;
                        case g.C2.DMConversation:
                            o = "report_dm_conversation";
                            break;
                        case g.C2.Moment:
                            o = "report_moment";
                            break;
                        case g.C2.Tweet:
                            o = "report_tweet";
                            break;
                        case g.C2.User:
                            o = "report_user";
                    }
                    return (this._scribeNamespace = { ...t, element: o }), this._scribeNamespace;
                }
                _getScribeData() {
                    if (this._scribeData) return this._scribeData;
                    const { promotedContent: e, reportType: t, scribeNamespace: o, tweet: r, user: s } = this.props;
                    if (t === g.C2.Tweet || t === g.C2.AppealTweetWarning || t === g.C2.LimitedDiscoveryAppealTweet || t === g.C2.ProfileOnlyDiscoveryAppealTweet) this._scribeData = { associations: { [k.Z.AssociationType.ASSOCIATED_TWEET]: { association_id: r && r.id_str, association_namespace: { page: o?.page } } }, promoted: !!e, items: r ? [A.Z.forTweet(r)] : [] };
                    else if (t === g.C2.User) {
                        const e = s ? [A.Z.forUser(s.id_str)] : [];
                        this._scribeData = { associations: { [k.Z.AssociationType.ASSOCIATED_USER]: { association_id: s && s.id_str } }, items: e, targets: e };
                    }
                    return this._scribeData;
                }
                _scribeAction(e) {
                    const { richScribeAction: t } = this.props,
                        o = { ...this._getScribeData(), report_details: { report_flow_id: this._reportFlowId } };
                    t({ ...this._getScribeNamespace(), action: e }, o);
                }
            }
            (Ce.defaultProps = { addMessageListener: (e) => window.addEventListener("message", e), isMedia: !1, removeMessageListener: (e) => window.removeEventListener("message", e) }), (Ce.contextType = _.rC);
            const ye = ae(Ce);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Report-58964500.92039e3a.js.map
