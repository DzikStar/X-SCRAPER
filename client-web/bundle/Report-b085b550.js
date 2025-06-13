"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Report-b085b550"],
    {
        340130: (e, t, r) => {
            r.d(t, { C7: () => _, EL: () => s, H6: () => p, I4: () => i, NK: () => d, TG: () => c, Yu: () => a, eR: () => l, lt: () => m });
            var o = r(275365);
            const s = "dmSearchSlice",
                i = Object.freeze([o.Cr.MESSAGE_DELETE, o.Cr.REACTION_DELETE, o.Cr.MESSAGE_MARK_AS_SPAM, o.Cr.MESSAGE_MARK_AS_NOT_SPAM, o.Cr.CONVO_METADATA_UPDATE, o.Cr.DISABLE_NOTIFICATIONS, o.Cr.ENABLE_NOTIFICATIONS]),
                n = Object.freeze({ CONVERSATION_CREATE: "ConversationCreate", CONVERSATION_NAME_UPDATE: "ConversationNameUpdate", JOIN_CONVERSATION: "JoinConversation", LAST_MESSAGE_READ_UPDATE: "LastMessageReadUpdate", MESSAGE_CREATE: "MessageCreate", MESSAGE_HIDE: "MessageHide", PARTICIPANTS_JOIN: "ParticipantsJoin", PARTICIPANTS_LEAVE: "ParticipantsLeave", UNKNOWN: "Unknown", WELCOME_MESSAGE_CREATE: "WelcomeMessageCreate" }),
                a = (n.CONVERSATION_NAME_UPDATE, o.Cr.CONVERSATION_NAME_UPDATE, n.JOIN_CONVERSATION, o.Cr.JOIN_CONVERSATION, n.MESSAGE_CREATE, o.Cr.MESSAGE, n.PARTICIPANTS_JOIN, o.Cr.PARTICIPANTS_JOIN, n.PARTICIPANTS_LEAVE, o.Cr.PARTICIPANTS_LEAVE, Object.freeze({ MAX_PINS_REACHED: "max_pins_reached" })),
                c = Object.freeze({ ALL: "all", GROUPS: "groups", PEOPLE: "people", MESSAGES: "messages" }),
                d = Object.freeze({ GROUP: 1, ONE_TO_ONE: 0 }),
                l = Object.freeze({ ALL: "all", CELL_X_BUTTON: "cell_x_button", CONVERSATION_INFO: "conversation_info", DM_TAB: "dm_tab", GLOBAL_SETTINGS_MENU: "global_settings_menu", GROUPS: "groups", MESSAGES: "messages", PEOPLE: "people", REQUEST_ACTION_SHEET: "request_action_sheet", THREE_DOT_MENU: "three_dot_menu" }),
                p = Object.freeze({ PRIMARY: "primary", REQUEST: "requests", LOW_QUALITY: "low_quality", NOT_AVAILABLE: "not_available" }),
                _ = Object.freeze({ CARD: "card", GIF: "gif", NOT_APPLICABLE: "not_applicable", PHOTO: "photo", TEXT: "text", TWEET: "tweet", UNKNOWN: "unknown", VIDEO: "video", VOICE: "voice" }),
                m = Object.freeze({ CONVERSATION: "conversation", MESSAGE: "message" });
        },
        593953: (e, t, r) => {
            r.d(t, { BB: () => R, FW: () => E, Fb: () => O, KC: () => A, LK: () => f, Ly: () => D, NL: () => L, Qu: () => w, SM: () => y, Ss: () => C, Xx: () => M, Y: () => v, bZ: () => h, dI: () => S, e4: () => b, k2: () => N, oK: () => g, rR: () => T, vg: () => U, vm: () => I, y9: () => k });
            r(543673), r(240753), r(128399);
            var o = r(202784),
                s = r(310452),
                i = r(354149),
                n = r(688715),
                a = r(166852),
                c = r(450681),
                d = r(7330),
                l = r(704762),
                p = r(198506),
                _ = r(147143),
                m = r(798538),
                u = r(340130);
            const C = (e, t) => t.location && t.location.state && t.location.state.tweetAttachment,
                h = (e, t) => t.location && t.location.state && t.location.state.participants,
                T = (e, t) => t.location && t.location.state && t.location.state.isNewGroupConversation,
                A = (e) => e && (0, a.Z)(e),
                E = (e, t) => {
                    if (e && t) {
                        const r = (0, l.Z)(e),
                            o = t.toLowerCase().indexOf(e.toLowerCase());
                        return { startIndex: o, endIndex: o + r };
                    }
                    return { startIndex: -1, endIndex: -1 };
                },
                y = (e, t) => {
                    const r = s.ZP.plainTextParts(t);
                    return () =>
                        o.createElement(
                            o.Fragment,
                            null,
                            r.map((t, r) => {
                                let s = t;
                                return "text" === t.entityType ? (s = { ...t, highlights: e, highlightType: "background" }) : "emoji" === t.entityType && (s = { ...t, highlights: e }), o.createElement(i.ZP, { key: `${r}`, part: s });
                            }),
                        );
                },
                v = (e, t) => {
                    const r = A(e),
                        o = r?.filter((e) => t && -1 !== t.toLowerCase().indexOf(e.toLowerCase())),
                        s = o?.length
                            ? (0, c.Z)(
                                  o.map((e) =>
                                      ((e, t) => {
                                          if (e && t) {
                                              const r = (0, l.Z)(e),
                                                  o = t.toLowerCase().indexOf(e.toLowerCase());
                                              return [o, o + r];
                                          }
                                      })(e, t),
                                  ),
                              )
                            : void 0;
                    return s && s?.length ? s.sort((e, t) => e[0] - t[0]) : void 0;
                },
                w = (e) => {
                    const { message_data: t } = e;
                    let r = u.C7.UNKNOWN;
                    const o = (t && t.attachment) || {};
                    return o.tweet ? (r = u.C7.TWEET) : o.photo ? (r = u.C7.PHOTO) : o.animated_gif ? (r = u.C7.GIF) : o.video ? (r = o.video.audio_only ? u.C7.VOICE : u.C7.VIDEO) : o.card ? (r = u.C7.CARD) : t?.text && (r = u.C7.TEXT), r;
                };
            function g(e, t) {
                return e.findIndex((e) => e.id === t);
            }
            function b(e) {
                return e === _._2.SECONDARY ? u.H6.REQUEST : e === _._2.TERTIARY ? u.H6.LOW_QUALITY : u.H6.PRIMARY;
            }
            function f(e) {
                return e.isTrue("dm_voice_rendering_enabled");
            }
            function S(e, t) {
                return !!(e && e.video && f(t)) && !!e.video.audio_only;
            }
            function R(e, t, r, o) {
                return { pathname: `/i/report/dm_conversation/${e}`, state: { clientReferer: t, inboxType: o, scribeNamespace: r } };
            }
            function I(e, t) {
                if (!e) return { name: "", screenName: "", idStr: "" };
                const r = (0, p.Z)(e, t).map(({ user: e }) => e),
                    o = r && r[0];
                return { name: (o && o.name) || "", screenName: (o && o.screen_name) || "", idStr: (o && o.id_str) || "" };
            }
            const O = (e) => (e === _._2.TERTIARY ? "low_quality_timeline" : e === _._2.SECONDARY ? "requests_timeline" : "inbox_timeline"),
                N = (e) => (e === _._2.TERTIARY ? "/messages/requests/additional" : e === _._2.SECONDARY ? "/messages/requests" : "/messages"),
                D = (e) => () => m.m1(e),
                M = (e) => (t) => m.De(e, t),
                k = (e, t) => {
                    const r = (0, d.Z)(e, (e) => !!e.message_data && e.message_data && e.message_data.recipient_id === t);
                    return r && r.message_data && r.message_data.quick_reply && r.message_data.quick_reply && "options" === r.message_data.quick_reply.type ? r.message_data.quick_reply : void 0;
                },
                L = (e) => !!e?.startsWith("e"),
                P = (0, n.ju)("https://help.x.com/forms/dsa/report"),
                U = (e, t) => {
                    const r = new URL(e.getStringValue("dsa_report_illegal_content_url") || P);
                    return t.entry_id && r.searchParams.set("dm_id", t.entry_id), r.searchParams.set("content_type", "dm" === t.type ? "dm_message" : "dm_conversation"), r.searchParams.set("is_encrypted", t.is_encrypted ? "true" : "false"), t.conversation_id && r.searchParams.set("dm_convo_id", t.conversation_id), r.toString();
                };
        },
        294010: (e, t, r) => {
            r.r(t), r.d(t, { ReportFlowComplete: () => O, default: () => D });
            r(136728);
            var o = r(202784),
                s = r(325686),
                i = r(392237),
                n = r(111677),
                a = r.n(n),
                c = r(516951),
                d = r(143778),
                l = r(187669),
                p = r(290402),
                _ = r(545334),
                m = r(847607),
                u = r(712816),
                C = r(879596),
                h = r(312771),
                T = r(71620),
                A = r(208115),
                E = r(668214),
                y = r(629196),
                v = r(601576),
                w = r(919022);
            const g = (e, t) => {
                    const r = t.location.query.action;
                    if ("string" == typeof r) return r;
                },
                b = (e, t) => {
                    const r = t.location.query.reported_user_id;
                    if ("string" == typeof r) return r;
                },
                f = (e, t) => {
                    const r = t.location.query.reported_screen_name;
                    if ("string" == typeof r) return r;
                },
                S = (0, E.Z)()
                    .propsFromState(() => ({ action: g, canGoBack: A.q, reportedUserId: b, reportedScreenName: f }))
                    .propsFromActions(() => ({ addToast: v.fz, block: w.ZP.block, createLocalApiErrorHandler: (0, T.zr)("REPORT_SCREEN"), mute: y.r, unblock: w.ZP.unblock, unfollow: w.ZP.unfollow, unmute: w.ZP.unmute })),
                R = a().a9fd20be,
                I = a().i2b9632e;
            function O(e) {
                return (
                    (0, l.q)(() => {
                        const { action: t, addToast: r, block: o, canGoBack: s, createLocalApiErrorHandler: i, history: n, mute: a, reportedScreenName: c, reportedUserId: d } = e;
                        s
                            ? (d && "mute" === t
                                  ? a(d).then(
                                        () => {
                                            var t, o;
                                            r({
                                                action: {
                                                    label: _.d,
                                                    onAction:
                                                        ((t = d),
                                                        (o = c),
                                                        () => {
                                                            const { addToast: r, createLocalApiErrorHandler: s, unmute: i } = e;
                                                            i(t).then(
                                                                () => {
                                                                    r({ text: (0, m.X6)(o) });
                                                                },
                                                                s({ showToast: !0 }),
                                                            );
                                                        }),
                                                },
                                                text: (0, m.FK)(c),
                                            });
                                        },
                                        i({ showToast: !0 }),
                                    )
                                  : d &&
                                    "block" === t &&
                                    o(d).then(() => {
                                        var t;
                                        r({
                                            action: {
                                                label: _.d,
                                                onAction:
                                                    ((t = d),
                                                    () => {
                                                        const { addToast: r, createLocalApiErrorHandler: o, unblock: s } = e;
                                                        s(t).then(() => {
                                                            r({ text: I });
                                                        }, o(C.D));
                                                    }),
                                            },
                                            text: R,
                                        });
                                    }, i(u.d)),
                              n.goBackThroughModals())
                            : n.push("/");
                    }),
                    o.createElement(s.Z, { style: N.root }, o.createElement(p.Z, { fetchStatus: h.ZP.LOADING, onRequestRetry: c.Z, render: d.Z, retryable: !1 }))
                );
            }
            const N = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } })),
                D = S(O);
        },
        679406: (e, t, r) => {
            r.r(t), r.d(t, { ReportScreen: () => he, default: () => Te });
            r(136728);
            var o = r(202784),
                s = r(468811),
                i = r.n(s),
                n = r(688715),
                a = r(154003),
                c = r(362075),
                d = r(392237),
                l = r(111677),
                p = r.n(l),
                _ = r(161821),
                m = r(840647),
                u = r(980407),
                C = r(443781),
                h = r(545334),
                T = r(847607),
                A = r(712816),
                E = r(879596),
                y = r(323683),
                v = r(163889),
                w = r(730996),
                g = r(395067),
                b = r(479506),
                f = r(942893),
                S = r(593953),
                R = r(71620),
                I = r(208115),
                O = r(2430),
                N = r(668214),
                D = r(481242),
                M = r(837455),
                k = r(296196),
                L = r(275365),
                P = r(182991),
                U = r(576469),
                Z = r(197914),
                x = r(228356),
                H = r(629196),
                B = r(390387),
                G = r(601576),
                F = r(836255),
                V = r(919022);
            const q = (e, t) => t.location && t.location.state && t.location.state.clientReferer,
                W = (e, t) => t.location && t.location.state && t.location.state.inboxType,
                z = (e, t) => t.location && t.location.state && t.location.state.scribeNamespace,
                j = (e, t) => !!(t.location && t.location.state && t.location.state.isMedia) || !1,
                Y = (e, t) => t.location && t.location.state && t.location.state.promotedContent,
                K = (e, t) => t.location && t.location.state && t.location.state.conversationSection,
                X = (e, t) => t.location && t.location.query && (0, O.BX)(t.location.query.community_id),
                $ = (e, t) => (0, g.HO)(J(e, t)),
                J = (e, t) => t.match.params.reportType,
                Q = (e, t) => t.match.params.reportedId,
                ee = (e, t) => {
                    const r = J(e, t),
                        o = Q(0, t);
                    switch (r) {
                        case g.C2.Tweet:
                        case g.C2.AppealTweetWarning:
                        case g.C2.LimitedDiscoveryAppealTweet:
                        case g.C2.ProfileOnlyDiscoveryAppealTweet:
                        case g.C2.HideCommunityTweet:
                            return F.Z.selectHydrated(e, o);
                        default:
                            return;
                    }
                },
                te = (e, t) => {
                    const r = J(e, t) === g.C2.User ? Q(0, t) : void 0;
                    return r ? V.ZP.select(e, r) : void 0;
                },
                re = (e, t) => {
                    let r;
                    const o = J(e, t);
                    if (((o !== g.C2.DMConversation && o !== g.C2.DMMessage) || (r = o === g.C2.DMConversation ? Q(0, t) : t.location.state ? t.location.state.conversationId : void 0), r)) {
                        const t = (0, P.x)(e, r),
                            o = ((e) => B.x0(e))(e);
                        return oe(t, o);
                    }
                },
                oe = (e, t) => {
                    if (e && e.data) {
                        let r;
                        return (r = e.data.type === L.eD.GROUP ? "0" : e.data.participants.filter((e) => e.user_id !== t)[0].user_id), { conversationId: e.data.conversation_id, reportedUserId: r };
                    }
                },
                se = (e, t) => (J(e, t) === g.C2.Moment ? x.Z.select(e, Q(0, t)) : void 0),
                ie = (e, t) => {
                    const r = J(e, t) === g.C2.List ? Q(0, t) : void 0;
                    return r ? U.Z.select(e, r) : void 0;
                },
                ne = (e, t) => {
                    const r = J(e, t) === g.C2.Moment ? Q(0, t) : void 0;
                    return r ? Z.Z.select(e, r) : void 0;
                },
                ae = (0, N.Z)()
                    .propsFromState(() => ({ canGoBack: I.q, clientReferer: q, communityId: X, dmConversation: re, reportedId: Q, inboxType: W, isMedia: j, lang: B.VT, liveEvent: ne, moment: se, list: ie, promotedContent: Y, conversationSection: K, reportType: J, reportSource: $, scribeNamespace: z, tweet: ee, user: te }))
                    .propsFromActions(() => ({ addToast: G.fz, block: V.ZP.block, createLocalApiErrorHandler: (0, R.zr)("REPORT_SCREEN"), fetchUpdates: k.fetchUpdates, mute: H.r, markTweetAsReported: F.Z.markAsReported, markTweetsAsRemovedFromCommunity: F.Z.markTweetsAsRemovedFromCommunity, markUserAsRemovedFromCommunity: M.Z.markUserAsRemovedFromCommunity, richScribeAction: D.richScribeAction, unblock: V.ZP.unblock, unfollow: V.ZP.unfollow, unmute: V.ZP.unmute })),
                ce = p().f1824804,
                de = p().h030c24c,
                le = p().b12ffee6,
                pe = p().f9f27fa2,
                _e = p().a9fd20be,
                me = p().i2b9632e,
                ue = p().b772cd66,
                Ce = (0, n.ju)("https://x.com");
            class he extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderDoneButton = () => {
                            const { isDone: e } = this.state;
                            return e ? o.createElement(a.ZP, { onPress: this._handleDone, size: "xSmall", type: "primaryFilled" }, ue) : void 0;
                        }),
                        (this._handleDone = () => {
                            const { clientReferer: e, createLocalApiErrorHandler: t, fetchUpdates: r, history: o, inboxType: s, promotedContent: i, reportType: n } = this.props;
                            switch ((this._scribeAction("done"), n)) {
                                case g.C2.DMConversation:
                                case g.C2.DMMessage:
                                    o.replace((0, S.k2)(s)), r().catch(t({}));
                                    break;
                                case g.C2.Tweet: {
                                    const t = this.context.featureSwitches.isTrue("subscriptions_report_ad_upsell_enabled"),
                                        r = this.context.userClaims.hasSubscription("premium_plus") || this.context.userClaims.isVerifiedOrg() || this.context.userClaims.isVerifiedOrgAffiliate();
                                    if (t && !r && i?.impression_id) {
                                        const t = { variant: "ReportAd", dismissPath: e };
                                        o.push("/i/verified-get-verified", t);
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
                            const { addToast: t, createLocalApiErrorHandler: r, promotedContent: o, unblock: s } = this.props;
                            s(e, { promotedContent: o }).then(() => {
                                t({ text: me });
                            }, r(E.D));
                        }),
                        (this._handleUndoMute = (e, t) => () => {
                            const { addToast: r, createLocalApiErrorHandler: o, unmute: s } = this.props;
                            s(e).then(
                                () => {
                                    r({ text: (0, T.X6)(t) });
                                },
                                o({ showToast: !0 }),
                            );
                        }),
                        (this._getReportTitle = () => {
                            const { reportType: e } = this.props;
                            switch (e) {
                                case g.C2.AppealTweetWarning:
                                    return ce;
                                case g.C2.RemoveCommunityMember:
                                    return le;
                                case g.C2.HideCommunityTweet:
                                    return pe;
                                default:
                                    return de;
                            }
                        }),
                        (this._getReportedTweetId = () => {
                            const { liveEvent: e, moment: t, reportType: r, tweet: o } = this.props;
                            switch (r) {
                                case g.C2.Moment: {
                                    const r = (e ? (0, _.Z)(e.slates) : []).find((e) => e.tweet_id);
                                    return r ? r.tweet_id : t && t.cover_media && t.cover_media.tweet_id;
                                }
                                case g.C2.AppealTweetWarning:
                                case g.C2.LimitedDiscoveryAppealTweet:
                                case g.C2.ProfileOnlyDiscoveryAppealTweet:
                                case g.C2.HideCommunityTweet:
                                case g.C2.Tweet:
                                    return o && o.id_str;
                                default:
                                    return;
                            }
                        }),
                        (this._getReportedUserId = (e) => {
                            const { dmConversation: t, list: r, liveEvent: o, moment: s, reportType: i, reportedId: n, tweet: a, user: c } = this.props;
                            switch (i) {
                                case g.C2.DMConversation:
                                case g.C2.DMMessage:
                                    return e && e.data && t && "0" === t.reportedUserId ? e.data.reported_user_id : t && t.reportedUserId;
                                case g.C2.Moment:
                                    return (o && o.liveEventDetails.attribution_user_id) || (s && s.author && s.author.id);
                                case g.C2.User:
                                    return c && c.id_str;
                                case g.C2.List:
                                    return r && r.user;
                                case g.C2.AppealTweetWarning:
                                case g.C2.LimitedDiscoveryAppealTweet:
                                case g.C2.ProfileOnlyDiscoveryAppealTweet:
                                case g.C2.HideCommunityTweet:
                                case g.C2.Tweet:
                                    return a && a.user.id_str;
                                case g.C2.RemoveCommunityMember:
                                    return n;
                                default:
                                    return void (0, v.ZP)(`Unknown report type ${i}`);
                            }
                        }),
                        (this._getReportedUserScreenName = (e) => {
                            const { liveEvent: t, moment: r, reportType: o, tweet: s, user: i } = this.props;
                            switch (o) {
                                case g.C2.Moment: {
                                    const e = t?.liveEventDetails.attribution_user_id,
                                        o = e ? t?.users?.[e] : void 0;
                                    if (o) return o?.screen_name;
                                    if (r && r.author) return r.author.screen_name;
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
                            const { clientReferer: e, conversationSection: t, dmConversation: r, isMedia: o, lang: s, list: i, liveEvent: n, moment: a, promotedContent: c, reportSource: d, reportType: l, reportedId: p, scribeNamespace: _ } = this.props,
                                u = l === g.C2.DMConversation,
                                C = l === g.C2.DMMessage,
                                h = l === g.C2.Moment,
                                T = l === g.C2.List,
                                A = { client_location: [_?.page, _?.section, _?.component].join(":"), client_referer: e, client_app_id: (0, m.Z)().clientAppId, conversation_section: t, source: d, report_flow_id: this._reportFlowId, reported_user_id: this._getReportedUserId(), reported_tweet_id: this._getReportedTweetId(), reported_direct_message_conversation_id: (C || u) && r && r.conversationId, reported_direct_message_id: C && p, reported_moment_id: h ? (n && n.liveEventDetails.id) || (a && a.id_str) : void 0, reported_list_id: T ? i && i.id_str : void 0, is_promoted: !!c, impression_id: c?.impression_id, is_media: o, initiated_in_app: "1", lang: s, community_id: this._getCommunityId() },
                                E = Object.keys(A)
                                    .filter((e) => !!A[e])
                                    .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(A[e])}`)
                                    .join("&");
                            return `${Ce}/i/safety/report_story?${E}`;
                        }),
                        (this._messageHandler = (e) => {
                            const { addToast: t, markTweetAsReported: r, markTweetsAsRemovedFromCommunity: o, markUserAsRemovedFromCommunity: s, reportSource: i } = this.props;
                            if (e.origin !== Ce || "ReportAction" !== e.data.type) return;
                            const { block: n, createLocalApiErrorHandler: a, mute: c, promotedContent: d, unfollow: l } = this.props,
                                p = this._getReportedUserId(e);
                            switch (e.data.action) {
                                case "block":
                                    p &&
                                        n(p, { promotedContent: d }).then(() => {
                                            t({ action: { label: h.d, onAction: this._handleUndoBlock(p) }, text: _e });
                                        }, a(A.d));
                                    break;
                                case "unfollow":
                                    p && l(p, { promotedContent: d }).catch(a(y.X));
                                    break;
                                case "mute":
                                    p &&
                                        c(p).then(
                                            () => {
                                                const r = this._getReportedUserScreenName(e);
                                                t({ action: { label: h.d, onAction: this._handleUndoMute(p, r) }, text: (0, T.FK)(r) });
                                            },
                                            a({ showToast: !0 }),
                                        );
                                    break;
                                case "complete": {
                                    this.setState({ isDone: !0 });
                                    const e = this._getReportedTweetId();
                                    if ((e && (i === w.g.Tweet && r(e, g.az.Tombstone), i === w.g.HideCommunityTweet && r(e, g.az.HiddenCommunityTweet)), i === w.g.RemoveCommunityMember)) {
                                        const e = this._getReportedUserId(),
                                            t = this._getCommunityId();
                                        e && t && (o(e, t, g.az.RemovedCommunityMember), s(`${t}_${e}`));
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
                    return this._accessedDirectly ? null : o.createElement(u.Z, { backButtonType: t ? "close" : "back", history: e, onBackClick: t ? this._handleDone : this._handleBack, rightControl: this._renderDoneButton(), title: this._getReportTitle() }, o.createElement(c.Z, { allowForms: !0, src: this._reportUrl, style: d.default.absoluteFill }));
                }
                _wasAccessedDirectly() {
                    const { canGoBack: e, communityId: t, dmConversation: r, list: o, liveEvent: s, moment: i, reportType: n, reportedId: a, scribeNamespace: c, tweet: d, user: l } = this.props,
                        p = s && s.liveEventDetails.attribution_user_id;
                    return !e || !c || (n === g.C2.AppealTweetWarning && !d) || (n === g.C2.LimitedDiscoveryAppealTweet && !d) || (n === g.C2.ProfileOnlyDiscoveryAppealTweet && !d) || (n === g.C2.HideCommunityTweet && !d) || (n === g.C2.RemoveCommunityMember && !t && !a) || (n === g.C2.Tweet && !d) || (n === g.C2.User && !l) || (n === g.C2.DMConversation && !r) || (n === g.C2.DMMessage && (!a || !r)) || (n === g.C2.Moment && !i && !p) || (n === g.C2.List && !o);
                }
                _getScribeNamespace() {
                    if (this._scribeNamespace) return this._scribeNamespace;
                    const { reportType: e, scribeNamespace: t } = this.props;
                    let r;
                    switch (e) {
                        case g.C2.AppealTweetWarning:
                            r = "appeal_tweet_warning";
                            break;
                        case g.C2.LimitedDiscoveryAppealTweet:
                            r = "limited_discovery_appeal_tweet";
                            break;
                        case g.C2.ProfileOnlyDiscoveryAppealTweet:
                            r = "profile_only_discovery_appeal_tweet";
                            break;
                        case g.C2.DMConversation:
                            r = "report_dm_conversation";
                            break;
                        case g.C2.Moment:
                            r = "report_moment";
                            break;
                        case g.C2.Tweet:
                            r = "report_tweet";
                            break;
                        case g.C2.User:
                            r = "report_user";
                    }
                    return (this._scribeNamespace = { ...t, element: r }), this._scribeNamespace;
                }
                _getScribeData() {
                    if (this._scribeData) return this._scribeData;
                    const { promotedContent: e, reportType: t, scribeNamespace: r, tweet: o, user: s } = this.props;
                    if (t === g.C2.Tweet || t === g.C2.AppealTweetWarning || t === g.C2.LimitedDiscoveryAppealTweet || t === g.C2.ProfileOnlyDiscoveryAppealTweet) this._scribeData = { associations: { [b.Z.AssociationType.ASSOCIATED_TWEET]: { association_id: o && o.id_str, association_namespace: { page: r?.page } } }, promoted: !!e, items: o ? [f.Z.forTweet(o)] : [] };
                    else if (t === g.C2.User) {
                        const e = s ? [f.Z.forUser(s.id_str)] : [];
                        this._scribeData = { associations: { [b.Z.AssociationType.ASSOCIATED_USER]: { association_id: s && s.id_str } }, items: e, targets: e };
                    }
                    return this._scribeData;
                }
                _scribeAction(e) {
                    const { richScribeAction: t } = this.props,
                        r = { ...this._getScribeData(), report_details: { report_flow_id: this._reportFlowId } };
                    t({ ...this._getScribeNamespace(), action: e }, r);
                }
            }
            (he.defaultProps = { addMessageListener: (e) => window.addEventListener("message", e), isMedia: !1, removeMessageListener: (e) => window.removeEventListener("message", e) }), (he.contextType = C.rC);
            const Te = ae(he);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Report-b085b550.e536713a.js.map
