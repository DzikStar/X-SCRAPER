"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conversation-b8b7ca9d"],
    {
        886404: (e, t, o) => {
            o.d(t, { c_: () => l, lm: () => c, n6: () => i });
            var n = o(202784),
                r = o(321835);
            const s = { isShowHeaderReplyButton: !1, onInlineReplyOffScreen: () => {} },
                a = n.createContext(s);
            function i({ children: e }) {
                const [t, o] = n.useState(!1),
                    r = n.useCallback((e) => {
                        o(e);
                    }, []);
                return n.createElement(a.Provider, { value: { isShowHeaderReplyButton: t, onInlineReplyOffScreen: r } }, e);
            }
            function l({ children: e }) {
                const [t, o] = n.useState(!1),
                    { onInlineReplyOffScreen: s } = n.useContext(a),
                    i = n.useCallback(
                        ({ isOffscreen: e }) => {
                            t && e && s(e);
                        },
                        [t, s],
                    );
                return n.createElement(r.Z, { onImpression: () => o(!0), onOffscreenChange: i, testID: "inline_reply_offscreen" }, e);
            }
            function c({ children: e }) {
                const { isShowHeaderReplyButton: t } = n.useContext(a);
                return t ? e : null;
            }
        },
        726615: (e, t, o) => {
            o.r(t), o.d(t, { ConversationScreen: () => Be, ConversationTimeline: () => Ve, default: () => Qe });
            o(136728);
            var n = o(202784),
                r = o(272175),
                s = o(325686),
                a = o(731708),
                i = o(642153),
                l = o(688715),
                c = o(782261),
                d = o(529356),
                u = o(154003),
                h = o(392237),
                p = o(674132),
                m = o.n(p),
                w = o(841972),
                _ = o(912021),
                g = o(908478),
                f = o(791632),
                C = o(640872),
                T = o(718e3),
                y = o(293256),
                S = o(651930),
                v = o(898948),
                I = o(252021),
                E = o(443781),
                N = o(38293),
                Z = o(652904),
                x = o(668843),
                F = o(167496),
                b = o(927192),
                R = o(26193),
                P = o(340179),
                L = o(833773),
                U = o(946409),
                k = o(933083),
                D = o(293115),
                A = o(942893),
                M = o(988566),
                H = o(503229),
                q = o(163162),
                O = o(214647),
                $ = o(962741),
                j = o(788993),
                z = o(360142),
                B = o(312771),
                G = o(973931),
                V = o(71620),
                W = o(208115),
                K = o(668214),
                Q = o(332510),
                X = o(491963),
                J = o(821288),
                Y = o(997174),
                ee = o(118823),
                te = o(390387),
                oe = o(836255),
                ne = o(735313),
                re = o(919022);
            const se = (e, t) => (e.sidebarState ? e.sidebarState[t] : e.location?.state?.[t]),
                ae = (e, t) => "PUSH" === t.history.action,
                ie = (e, t) => {
                    const o = se(t, "focal");
                    return o || le(e, t);
                },
                le = (e, t) => {
                    const { location: o, match: n, sidebarState: r } = t;
                    return r && o.query?.post_id && "string" == typeof o.query.post_id ? o.query.post_id : n.params && n.params.statusId ? n.params.statusId : o.query && o.query.tweet_id && "string" == typeof o.query.tweet_id ? o.query.tweet_id : o.query && o.query.post_id && "string" == typeof o.query.post_id ? o.query.post_id : "";
                },
                ce = (e, t) => t.match.params.screenName,
                de = (e, t) => se(t, "socialContext"),
                ue = (e, t) => se(t, "topicFollowPrompt"),
                he = (e, t) => se(t, "contextTweetId"),
                pe = (e, t) => se(t, "promotedContent"),
                me = (e, t) => se(t, "overflow"),
                we = (e, t) => se(t, "contextualClientEventInfo"),
                _e = (e, t) => {
                    const o = se(t, "referrer"),
                        n = ie(e, t);
                    return !!o && o.includes(`/i/topics/tweet/${n}`);
                },
                ge = (e, t) => oe.Z.selectHydrated(e, ie(e, t)),
                fe = (e, t) => {
                    const o = ie(e, t),
                        n = oe.Z.selectHydrated(e, o);
                    return n && n.conversation_id_str ? oe.Z.selectHydrated(e, n.conversation_id_str) : null;
                },
                Ce = (e, t) => oe.Z.selectFetchStatus(e, ie(e, t)),
                Te = (e, t) => (t.location.query && "string" == typeof t.location.query.cxt ? t.location.query.cxt : void 0),
                ye = (0, Q.R)(
                    [
                        ge,
                        (e, t) => {
                            const o = ge(e, t);
                            return o ? (0, X.z0)(e, o) : void 0;
                        },
                    ],
                    (e, t) => (e && t ? (0, M.GK)(e, t) : void 0),
                );
            const Se = (function () {
                    let e = [];
                    return {
                        getStableRef: function (t) {
                            for (const o of e) if ((0, g.Z)(o, t)) return o;
                            return e.push(t), e.length > 20 && (e = e.slice(-20)), t;
                        },
                    };
                })(),
                ve = (e, t) => {
                    const o = ge(e, t),
                        n = o ? o.conversation_id_str : null,
                        r = n ? (0, J.Ln)(e, n) : Ie;
                    return r ? Se.getStableRef(re.ZP.selectMany(e, r)) : Ie;
                },
                Ie = [],
                Ee = (0, K.Z)()
                    .propsFromState(() => ({ canGoBack: W.q, communitySocialContextOfFocalTweet: ye, contextTweetId: he, contextualClientEventInfo: we, conversationFollowNudgeUsers: ve, focalTweet: ge, initialFetchStatus: Ce, isForwardNavigation: ae, isReferredFromExploreTopics: _e, userLanguage: te.VT, viewerUser: re.ZP.selectViewerUser, overflowCount: me, promotedContent: pe, richLandingContextId: Te, rootTweet: fe, screenName: ce, selectedTweetId: le, socialContext: de, startLocation: ee.Lg, statusId: ie, topicFollowPrompt: ue, tweetDetailNav: Y.wZ }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, V.zr)("CONVERSATION_SCREEN"), clearTimelineCache: (e, t) => (0, ne.Z)(e, t) }))
                    .withAnalytics({ page: "tweet" });
            var Ne = o(886404);
            const Ze = m().a4d3eb67,
                xe = m().b3d183ce,
                Fe = m().c299a6c0,
                be = m().h3d5d79e,
                Re = m().cfe877ca,
                Pe = m().e06b864c,
                Le = m().d17df548,
                Ue = m().df079228,
                ke = n.createElement(w.default, null),
                De = m().f5b3dc1e,
                Ae = m().a078ff70,
                Me = { page: "tweet" },
                He = { page: "tweet", section: "landing" },
                qe = (0, _.Z)((e) => (0, P.i)(e)),
                Oe = (0, _.Z)((e, t, o, n, r) => ({ referrer: e, controller_data: e && t?.details?.timelinesDetails?.controllerData, overflowCount: o, with_rux_injections: n, rux_context: r })),
                $e = (0, _.Z)((e, t, o, n) => {
                    let r = "Relevance";
                    return n === F.r.recency ? (r = "Recency") : n === F.r.likes && (r = "Likes"), (0, z.ZP)({ focalTweetId: e, fetchOptions: t, withReplies: o, rankingMode: r });
                }),
                je = [j.Z.Community];
            function ze({ context: e }) {
                if (!e) return null;
                if (e.contextType === j.Z.Community) {
                    const t = e.landingUrl ? (0, U.s9)(e.landingUrl) : void 0;
                    return n.createElement(a.ZP, { link: t }, e.text);
                }
                return null;
            }
            class Be extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getScribeData = (0, _.Z)((e, t) => ({ items: [A.Z.forTweet(e, t)], tweet_id: e }))),
                        (this._getFollowNudgeAvatars = () => {
                            const { conversationFollowNudgeUsers: e } = this.props,
                                t = e.map((e) => e.profile_image_url_https);
                            return n.createElement(i.Z, { borderWidth: "medium", userAvatarSize: "jumbo", userAvatarUrls: t });
                        }),
                        (this._handleShowFollowNudge = () => {
                            this.setState({ shouldShowFirstStateFollowNudge: !0 });
                        }),
                        (this._handleShowSecondStateFollowNudge = () => {
                            const { history: e, screenName: t, statusId: o } = this.props;
                            this.setState({ shouldShowFirstStateFollowNudge: !1 });
                            const n = t ? `/${t.toLowerCase()}/status/${o}/follow_in_thread` : "";
                            return e.push(n);
                        }),
                        (this._handleCloseFollowNudge = () => {
                            this.setState({ shouldShowFirstStateFollowNudge: !1 });
                        }),
                        (this._changeDropdownState = (e) => {
                            this.setState({ replyDropdownSelection: e }, () => {
                                this._clearTimelineCache();
                            });
                        }),
                        (this._getMetadata = () => {
                            const { focalTweet: e } = this.props;
                            if (null == e?.user) return {};
                            var t;
                            return { canonical: (0, l.ju)(`https://x.com${this._getCanonicalPath() || ""}`), title: (t = e) ? Ze({ fullName: t.user.name, tweetText: t.article ? t.article.title : t.full_text }) : "" };
                        }),
                        (this._getFabState = () => {
                            const { promotedContent: e, statusId: t } = this.props;
                            return { inReplyToStatusId: t, promotedContent: e };
                        }),
                        (this._getNavigationParams = () => {
                            const { contextualClientEventInfo: e, overflowCount: t, richLandingContextId: o, tweetDetailNav: n } = this.props,
                                r = this._shouldRenderRuxInjections();
                            return Oe(n, e, t, r, o);
                        }),
                        (this._getModule = () => {
                            const { statusId: e } = this.props,
                                t = this._getNavigationParams();
                            return $e(e, t, !!this.context.viewerUserId, this.state.replyDropdownSelection);
                        }),
                        (this._handleEntriesRendered = ({ entries: e, fetchStatus: t }) => {
                            const { recordTTFL: o } = this.props;
                            if ((t === B.ZP.FAILED && (this._shouldRecordTTFL = !1), this._shouldRecordTTFL && e.length)) {
                                const t = e.some(({ type: e }) => e === $.ZP.Tweet);
                                (this._shouldRecordTTFL = !1), t && o && o("permalink");
                            }
                        }),
                        (this._shouldRedirectToCanonical = () => {
                            const { focalTweet: e, screenName: t, selectedTweetId: o, statusId: n } = this.props;
                            return !(o !== n || !e?.user?.screen_name) && t && e && t.toLowerCase() !== e.user.screen_name.toLowerCase();
                        }),
                        (this._redirectToCanonical = () => {
                            const { history: e, location: t } = this.props;
                            e.replace({ pathname: this._getCanonicalPath(), query: t.query, state: t.state });
                        }),
                        (this._getCanonicalPath = () => {
                            const { focalTweet: e } = this.props;
                            return e ? `/${e.user.screen_name}/status/${e.id_str}` : "/";
                        }),
                        (this._getPathForTweetId = (e, t) => `/${t || "i"}/status/${e}`),
                        (this._getScribeNamespace = () => (this._shouldRenderRuxInjections() ? He : Me)),
                        (this.state = { shouldShowFirstStateFollowNudge: !1, replyDropdownSelection: F.r.relevance }),
                        (this._shouldRecordTTFL = !0),
                        (this._followNudgeConversationEnabled = this.context.featureSwitches.isTrue("follow_nudge_conversation_enabled"));
                }
                shouldComponentUpdate(e, t) {
                    return !(0, g.Z)(e, this.props) || !(0, g.Z)(this.state, t);
                }
                componentDidMount() {
                    const { isForwardNavigation: e } = this.props;
                    e && this._clearTimelineCache();
                }
                componentWillUnmount() {
                    this.context.setBackgroundClickHandler(null);
                }
                componentDidUpdate(e) {
                    const { conversationFollowNudgeUsers: t } = this.props;
                    this._shouldRedirectToCanonical() ? this._redirectToCanonical() : this.props.statusId !== e.statusId && this.props.isForwardNavigation && this._clearTimelineCache();
                    const o = t.length !== e.conversationFollowNudgeUsers.length,
                        n = t.length && 7 === t.length;
                    this._followNudgeConversationEnabled && o && n && this._handleShowFollowNudge();
                }
                render() {
                    const { communitySocialContextOfFocalTweet: e, focalTweet: t, history: o, promotedContent: s, socialContext: a, statusId: i } = this.props,
                        { canonical: u, deepLink: h, title: p } = this._getMetadata(),
                        m = (function (...e) {
                            return e.find((e) => e && je.includes(e.contextType));
                        })(a, e),
                        w = m && n.createElement(ze, { context: m }),
                        _ = this.context.featureSwitches.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                        g = t ? c.Z.getLocalizedEntityName({ tweet: t, articlesEnabled: _, capitalized: !0 }) : null;
                    return n.createElement(D.nO, { data: this._getScribeData(i, s), namespace: this._getScribeNamespace() }, n.createElement(Z.Z, null, u ? n.createElement(r.ql, null, n.createElement("link", { href: (0, l.ju)(`https://publish.x.com/oembed?url=${u}`), rel: "alternate", title: p, type: "application/json+oembed" })) : null, n.createElement(S.Z, { deepLink: h }), n.createElement(y.Z, { canonical: u, preserveCasing: !0 }), n.createElement(M.pz.Provider, { value: m?.contextType }, n.createElement(Ne.n6, null, n.createElement(I.Z, { backLocation: "/", documentTitle: p, history: o, primaryContent: this._renderTimeline(), rightControl: this._renderRightControl(), sidebarContent: this._renderSidebarContent(), subtitle: w, title: (m && ((f = m), f && f.contextType === j.Z.Community ? be : null)) || (t && t.self_thread ? Fe : g) })), this.state.shouldShowFirstStateFollowNudge ? n.createElement(d.Z, { actionLabel: Re, graphic: this._getFollowNudgeAvatars, graphicDisplayMode: "illustration", headline: Pe, onAction: this._handleShowSecondStateFollowNudge, onClose: this._handleCloseFollowNudge, onSecondaryAction: this._handleCloseFollowNudge, secondaryActionLabel: De, subtext: Ae, withCloseButton: !0 }) : null), n.createElement(N.Z, { title: p, withMeta: !1 })));
                    var f;
                }
                _renderRightControl() {
                    const { featureSwitches: e } = this.context,
                        { focalTweet: t, history: o, promotedContent: r, screenName: a } = this.props,
                        i = e.isTrue("responsive_web_twitter_article_seed_tweet_detail_enabled") && t?.article,
                        l = e.isTrue("reply_sorting_enabled");
                    return n.createElement(
                        s.Z,
                        { style: Ke.mobileAppBarRightControl },
                        a && t && i && !t.isPreviewDisplay ? n.createElement(u.ZP, { "aria-label": Ue, icon: ke, link: (0, G.a)(t.id_str, a), type: "primaryText" }) : null,
                        t
                            ? n.createElement(
                                  Ne.lm,
                                  null,
                                  n.createElement(
                                      u.ZP,
                                      {
                                          "aria-label": Le,
                                          onClick: () => {
                                              t && this.context.viewerUserId && o.push({ state: { inReplyToStatusId: t.id_str, isSelfThreadReply: (0, O.aT)({ tweet: t, viewerUserId: this.context.viewerUserId }), promotedContent: r }, pathname: "/compose/post" });
                                          },
                                          size: "small",
                                      },
                                      Le,
                                  ),
                                  l && n.createElement(F.Z, { changeDropdownState: this._changeDropdownState, replyDropdownSelection: this.state.replyDropdownSelection }),
                              )
                            : null,
                        n.createElement(x.C, { focalTweet: t, module: this._getModule() }),
                    );
                }
                _renderSidebarContent() {
                    const { focalTweet: e } = this.props;
                    return e && e.user.id_str ? n.createElement(Ge, { tweetId: e.id_str }) : null;
                }
                _renderTimeline() {
                    const { contextTweetId: e, focalTweet: t, location: o, promotedContent: r, rootTweet: s, screenName: a, selectedTweetId: i, socialContext: l, statusId: c, topicFollowPrompt: d } = this.props,
                        u = { selectedTweetId: i };
                    return n.createElement(v.Z, { collectionName: xe }, n.createElement(b.Z, { apiErrorHandlerMap: qe(a), contextTweetId: e, fetchOptions: this._getNavigationParams(), focalTweet: t, focalTweetId: c, location: o, module: this._getModule(), onEntriesRendered: this._handleEntriesRendered, promotedContent: r, rootTweet: s || void 0, selectedTweet: u, socialContext: l, topicFollowPrompt: d, withRuxInjections: this._shouldRenderRuxInjections() }));
                }
                _shouldRenderRuxInjections() {
                    const { featureSwitches: e } = this.context,
                        { canGoBack: t, history: o, isReferredFromExploreTopics: n, richLandingContextId: r } = this.props;
                    return (
                        !(0, f.HD)(o) &&
                        (!!r ||
                            n ||
                            (function (e, t) {
                                const o = L.zI({ emptyIfServerRendered: !1, featureSwitches: t, httpReferer: (!e && document.referrer) || "" });
                                return L.bi(o);
                            })(t, e))
                    );
                }
                _clearTimelineCache(e = this._getModule(), t = this._getNavigationParams()) {
                    const { clearTimelineCache: o, createLocalApiErrorHandler: n, screenName: r } = this.props;
                    o(e, t).catch(n(qe(r)));
                }
            }
            (Be.contextType = C.Z), (Be.defaultProps = { recordTTFL: k.k$ });
            const Ge = n.memo(({ tweetId: e }) => n.createElement(T.Z, { focalTweetId: e, withTopicsToFollow: !1, withWhoToFollow: !1 }, n.createElement(R.Z, { focalTweetId: e }))),
                Ve =
                    ((We = Ee((e) => {
                        const { contextTweetId: t, focalTweet: o, location: r, promotedContent: s, rootTweet: a, screenName: i, selectedTweetId: l, socialContext: c, statusId: d, topicFollowPrompt: u } = e,
                            h = { selectedTweetId: l },
                            p = (() => {
                                const { contextualClientEventInfo: t, overflowCount: o, richLandingContextId: n, tweetDetailNav: r } = e;
                                return Oe(r, t, o, !1, n);
                            })(),
                            { viewerUserId: m } = (0, E.QZ)(),
                            w = $e(d, p, !!m);
                        return (0, q.XV)("ConversationTimeline", e), n.createElement(b.Z, { apiErrorHandlerMap: qe(i), contextTweetId: t, fetchOptions: p, focalTweet: o, focalTweetId: d, location: r, module: w, promotedContent: s, rootTweet: a || void 0, selectedTweet: h, socialContext: c, topicFollowPrompt: u });
                    })),
                    function (e) {
                        const { location: t } = e,
                            o = t.state?.sidebarState ?? Xe,
                            r = { ...e, sidebarState: o };
                        return n.createElement(We, r);
                    });
            var We;
            const Ke = h.default.create((e) => ({ mobileAppBarRightControl: { flexDirection: "row", alignItems: "center", height: e.componentDimensions.appBarHeightPx } })),
                Qe = Ee((0, H.Z)(Be));
            const Xe = {};
        },
        909299: (e, t, o) => {
            o.r(t), o.d(t, { ConversationFollowNudgeScreen: () => E, default: () => Z });
            var n = o(202784),
                r = o(325686),
                s = o(154003),
                a = o(392237),
                i = o(674132),
                l = o.n(i),
                c = o(290402),
                d = o(980407),
                u = o(62857),
                h = o(409438),
                p = o(71620),
                m = o(668214),
                w = o(821288),
                _ = o(836255),
                g = o(919022);
            const f = (e, t) => t.match.params.screenName,
                C = (e, t) => t.match.params.statusId,
                T = (e, t) => ((e, t) => e.location && e.location.state && e.location.state[t])(t, "promotedContent"),
                y = (e, t) => {
                    const o = ((e, t) => _.Z.selectHydrated(e, t.match.params.statusId))(e, t),
                        n = o ? o.conversation_id_str : null,
                        r = n ? (0, w.Ln)(e, n) : [];
                    return r ? g.ZP.selectMany(e, r) : [];
                },
                S = (0, m.Z)()
                    .propsFromState(() => ({ conversationFollowNudgeUsers: y, promotedContent: T, screenName: f, statusId: C }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, p.zr)("CONVERSATION_FOLLOW_NUDGE_SCREEN"), follow: g.ZP.follow }))
                    .withAnalytics({ page: "conversation follow nudge" }),
                v = l().cfe877ca,
                I = l().j231d352;
            function E(e) {
                const { history: t, screenName: o, statusId: a } = e,
                    i = n.createElement(
                        s.ZP,
                        {
                            onClick: () => {
                                const { conversationFollowNudgeUsers: t, follow: o, promotedContent: n } = e;
                                t.map((e) => o(e.id_str, { promotedContent: n }));
                            },
                            type: "primaryText",
                        },
                        I,
                    );
                return n.createElement(
                    d.Z,
                    { backButtonType: "close", backLocation: `/${o}/status/${a}`, containerStyle: N.root, history: t, rightControl: i, title: v },
                    n.createElement(
                        r.Z,
                        { style: N.root },
                        n.createElement(c.Z, {
                            render: () => {
                                const t = (() => {
                                    const { conversationFollowNudgeUsers: t } = e;
                                    return t.map((e) => e.id_str);
                                })();
                                return n.createElement(u.Z, { displayMode: h.Z.UserCompact, userIds: t });
                            },
                        }),
                    ),
                );
            }
            const N = a.default.create((e) => ({ root: { margin: e.spaces.space8 } })),
                Z = S(n.memo(E));
        },
        475028: (e, t, o) => {
            o.r(t), o.d(t, { ConversationHiddenRepliesScreen: () => k, default: () => D });
            var n = o(202784),
                r = o(731708),
                s = o(688715),
                a = o(457311),
                i = o(674132),
                l = o.n(i),
                c = o(912021),
                d = o(718e3),
                u = o(252021),
                h = o(652904),
                p = o(810641),
                m = o(185654),
                w = o(71620),
                _ = o(668214),
                g = o(735313),
                f = o(919022);
            const C = (e, t) => t.match.params.statusId,
                T = (e, t) => t.match.params.screenName,
                y = (e, t) => "PUSH" === t.history.action,
                S = (0, _.Z)()
                    .propsFromState(() => ({ screenName: T, statusId: C, isForwardNavigation: y, viewerUser: f.ZP.selectViewerUser }))
                    .adjustStateProps((e) => {
                        const { viewerUser: t, ...o } = e;
                        return { loggedInScreenName: t ? t.screen_name : void 0, ...o };
                    })
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, w.zr)("HIDDEN_REPLIES_PAGE"), clearTimelineCache: (e) => (0, g.Z)(e) }))
                    .withAnalytics({ page: "tweet", section: "moderated_replies" });
            var v = o(769471),
                I = o(801184),
                E = o(335632),
                N = o(962741),
                Z = o(263863);
            const x = ({ withUnhideReply: e }) => (0, v.Z)({}, (0, E.G)({}), { [N.ZP.Tweet]: { handlers: { [Z.Z.Tweet]: (0, I.Cw)({ createAdditionalProps: () => ({ withUnhideReply: e }), displayBlocked: !0, divider: { top: !0, bottom: !0 } }) } } }),
                F = l().d806aa1a,
                b = l().d80c77dc,
                R = l().ef939f4b,
                P = l().efb9a9e0,
                L = n.createElement(l().I18NFormatMessage, { $i18n: "f5a533b1" }, n.createElement(r.ZP, { link: (0, s.ju)("https://help.x.com/using-twitter/mentions-and-replies#hidden-reply") }, l().b21c2549)),
                U = () => n.createElement(a.Z, { header: P, message: L });
            class k extends n.Component {
                constructor(e) {
                    super(e),
                        (this._getMemoizedModule = (0, c.Z)((e) => (0, m.Z)(e))),
                        (this._getModule = () => {
                            const { statusId: e } = this.props;
                            return this._getMemoizedModule(e);
                        }),
                        this._clearTimelineCache();
                }
                render() {
                    const { history: e, loggedInScreenName: t, screenName: o, statusId: r } = this.props;
                    return o && r ? n.createElement(h.Z, null, n.createElement(u.Z, { backLocation: `/${o.toLowerCase()}/status/${r}`, history: e, primaryContent: this._renderPrimaryContent(), sidebarContent: n.createElement(d.Z, null), subtitle: o === t ? b : R({ screenName: o }), title: F })) : null;
                }
                _renderPrimaryContent() {
                    const { loggedInScreenName: e, screenName: t } = this.props;
                    return n.createElement(p.Z, { entryConfiguration: x({ withUnhideReply: t === e }), module: this._getModule(), renderEmptyState: U, title: F });
                }
                _clearTimelineCache(e = this._getModule()) {
                    const { clearTimelineCache: t, createLocalApiErrorHandler: o, isForwardNavigation: n } = this.props;
                    n && t(e).catch(o({}));
                }
            }
            const D = S(k);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-b8b7ca9d.60c03c4a.js.map
