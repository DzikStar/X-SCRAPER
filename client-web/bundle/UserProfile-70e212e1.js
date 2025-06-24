"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserProfile-70e212e1"],
    {
        95600: (e, t, s) => {
            s.r(t), s.d(t, { AffiliatesScreen: () => m, default: () => f });
            var r = s(202784),
                i = s(111677),
                o = s.n(i),
                n = s(443781),
                l = s(351791),
                a = s(984915),
                c = s(729996);
            const d = ({ fullName: e, screenName: t }) => o().je5311d3({ fullName: e, screenName: t }),
                h = ({ screenName: e }) => o().fd0772eb({ screenName: e }),
                u = ({ fullName: e }) => o().ccf03833({ fullName: e });
            class m extends r.Component {
                render() {
                    const { displayBlocked: e, fullName: t, screenName: s, userId: i } = this.props;
                    return r.createElement(a.Z, { scribeSection: "affiliates", userId: i }, ({ scribeNamespace: o }) => r.createElement(c.ZP, { displayBlocked: e, loadingLabelFormatter: h({ screenName: s }), module: (0, l.Z)(i, "NotAssigned"), scribeNamespace: o, timelineEmptyHeaderFormatter: "", timelineEmptyMessageFormatter: "", timelineTitleFormatter: u({ fullName: t }), titleFormatter: d({ fullName: t, screenName: s }), userId: i }));
                }
            }
            (m.contextType = n.rC), (m.defaultProps = { displayBlocked: !1 });
            const f = m;
        },
        34655: (e, t, s) => {
            s.r(t), s.d(t, { UserLikesScreen: () => N, default: () => y });
            var r = s(202784),
                i = s(40610),
                o = s(392237),
                n = s(111677),
                l = s.n(n),
                a = s(121791),
                c = s(443781),
                d = s(392280),
                h = s(984915),
                u = s(729996);
            const m = ({ fullName: e, screenName: t }) => l().hbf64b75({ fullName: e, screenName: t }),
                f = ({ screenName: e }) => l().a64da953({ screenName: e }),
                p = () => l().d34b5306,
                _ = () => l().d3d4a21c,
                w = ({ fullName: e }) => l().d95c3d31({ fullName: e }),
                b = l().eeb7d696;
            class N extends r.Component {
                render() {
                    const { displayBlocked: e, fullName: t, isOwnProfile: s, screenName: o, userId: n } = this.props,
                        { featureSwitches: c, viewerUserId: N } = this.context,
                        y = c.isTrue("rweb_sourcemap_migration"),
                        E = N === n,
                        P = E ? _ : p,
                        S = E ? l().bb0e41bc : (({ screenName: e }) => l().be3d5b9f({ screenName: e }))({ screenName: o });
                    return r.createElement(h.Z, { scribeSection: "likes", userId: n }, ({ scribeNamespace: l }) => r.createElement(r.Fragment, null, s ? r.createElement(i.Z.Custom, { Icon: a.default, style: y ? g.calloutRedesign : g.callout, text: b }) : null, r.createElement(u.ZP, { displayBlocked: e, loadingLabelFormatter: f({ screenName: o }), module: (0, d.Z)(n), scribeNamespace: l, timelineEmptyHeaderFormatter: S, timelineEmptyMessageFormatter: P(), timelineTitleFormatter: w({ fullName: t }), titleFormatter: m({ fullName: t, screenName: o }), userId: n })));
                }
            }
            (N.contextType = c.rC), (N.defaultProps = { displayBlocked: !1 });
            const g = o.default.create((e) => ({ callout: { margin: e.spaces.space4, width: "auto" }, calloutRedesign: { marginVertical: e.spaces.space4, marginHorizontal: e.spaces.space16, width: "auto" } })),
                y = N;
        },
        30801: (e, t, s) => {
            s.r(t), s.d(t, { UserMediaScreen: () => b, default: () => N });
            var r = s(202784),
                i = s(111677),
                o = s.n(i),
                n = s(443781),
                l = s(611186),
                a = s(984915),
                c = s(729996);
            const d = ({ fullName: e, screenName: t }) => o().h6e91bb1({ screenName: t, fullName: e }),
                h = ({ screenName: e }) => o().fe38901b({ screenName: e }),
                u = ({ screenName: e }) => o().bc4223a3({ screenName: e }),
                m = () => o().ccc363f6,
                f = () => o().d1614228,
                p = () => o().d7dc8d0a,
                _ = ({ fullName: e }) => o().hf761abf({ fullName: e }),
                w = "media";
            function b(e) {
                const { displayBlocked: t = !1, fullName: s, screenName: i, userId: o } = e,
                    { viewerUserId: b } = (0, n.QZ)(),
                    N = r.useMemo(() => (0, l.Z)(o), [o]),
                    g = b === o,
                    y = g ? p() : m(),
                    E = g ? f() : u({ screenName: i });
                return r.createElement(a.Z, { scribeSection: w, userId: o }, ({ scribeNamespace: e }) => r.createElement(c.ZP, { displayBlocked: t, loadingLabelFormatter: h({ screenName: i }), module: N, scribeNamespace: e, timelineEmptyHeaderFormatter: E, timelineEmptyMessageFormatter: y, timelineTitleFormatter: _({ fullName: s }), titleFormatter: d({ fullName: s, screenName: i }), userId: o }));
            }
            const N = b;
        },
        984915: (e, t, s) => {
            s.d(t, { Z: () => a });
            var r = s(202784),
                i = s(912021),
                o = s(443781),
                n = s(293115),
                l = s(942893);
            class a extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getScribeData = (0, i.Z)((e) => (e ? { items: [l.Z.getUserItem({ id_str: e })], profile_id: e } : void 0))),
                        (this._getScribeNamespace = (0, i.Z)((e, t) => {
                            const s = t ? { section: t } : void 0;
                            return e ? { page: "me", ...s } : { page: "profile", ...s };
                        }));
                }
                render() {
                    const { children: e, scribeSection: t, userId: s } = this.props,
                        i = !!this.context.viewerUserId && s === this.context.viewerUserId,
                        o = this._getScribeNamespace(i, t);
                    return r.createElement(n.nO, { data: this._getScribeData(s), namespace: o }, "function" == typeof e ? e({ scribeNamespace: o }) : e);
                }
            }
            a.contextType = o.rC;
        },
        729996: (e, t, s) => {
            s.d(t, { ZP: () => P });
            var r = s(202784),
                i = s(457311),
                o = s(111677),
                n = s.n(o),
                l = s(615656),
                a = s(898948),
                c = s(443781),
                d = s(38293),
                h = s(652904),
                u = s(810641),
                m = s(438965),
                f = s(335632),
                p = s(466015),
                _ = s(788993),
                w = s(519896),
                b = s(668214),
                N = s(919022);
            const g = (0, b.Z)().propsFromActions(() => ({ fetchUser: N.ZP.fetchOne })),
                y = n().h088ae72,
                E = (e) => {
                    let t = -1;
                    if (
                        (e.forEach((e, s) => {
                            p.CL(e) && e.content.socialContext && e.content.socialContext.generalContext && "string" == typeof e.content.socialContext.generalContext.contextType && e.content.socialContext.generalContext.contextType === _.Z.Pin && (t = s);
                        }),
                        t > -1)
                    ) {
                        const s = [e[t], ...e];
                        return s.splice(t + 1, 1), s;
                    }
                    return e;
                };
            const P = g(function (e) {
                const { featureSwitches: t } = (0, c.QZ)(),
                    { displayBlocked: s = !1, fetchOptions: o = {}, fetchUser: n, loadingLabelFormatter: p, module: _, onEntriesRendered: b, showWithheldBannerOnMyTweets: N = !1, timelineTitleFormatter: g, timelineEmptyHeaderFormatter: P, timelineEmptyMessageFormatter: S, timelineEmptyStateButtonLabel: C, timelineEmptyStateButtonLink: F, timelineEmptyStateImageVariants: T, titleFormatter: I, userId: Z } = e,
                    v = r.useMemo(() => (0, f.G)({ displayBlocked: s, hideReplyContextMode: t.isTrue("rweb_tweets_reply_context_hidden") ? m.j.TIMELINE : void 0, showWithheldBannerOnMyTweets: N }), [s, t, N]),
                    O = r.useMemo(() => ({ [l.ZP.NotAuthorizedToViewUser]: { customAction: () => n(Z) } }), [n, Z]),
                    k = r.useCallback(() => r.createElement(i.Z, { buttonLink: F, buttonText: C, header: P, imageVariants: T, message: S && S }), [P, S, C, F, T]);
                return r.createElement(a.Z, { collectionName: y }, r.createElement(h.Z, null, r.createElement(d.Z, { title: I }), r.createElement(u.Z, { apiErrorHandlerMap: O, entryConfiguration: v, fetchOptions: o, loadingAccessibilityLabel: p, module: _, onEntriesRendered: b, preprocessEntryList: E, prerollDisplayLocation: w.Nw.PROFILE_TWEETS, refreshControl: null, renderEmptyState: k, title: g })));
            });
        },
        642692: (e, t, s) => {
            s.r(t), s.d(t, { default: () => C });
            var r = s(202784),
                i = s(111677),
                o = s.n(i),
                n = s(912021),
                l = s(443781),
                a = s(195250),
                c = s(615027),
                d = s(984915),
                h = s(729996);
            const u = o().c6ea308b,
                m = o().b9891db3,
                f = Object.freeze({ default: "tweets", with_replies: "tweets_and_replies", superfollows: "superfollows_tweets", highlights: "highlights_tweets", articles: "article_tweets" }),
                p = Object.freeze({ default: ({ screenName: e }) => o().c203db71({ screenName: e }), with_replies: ({ screenName: e }) => o().c203db71({ screenName: e }), superfollows: ({ screenName: e }) => o().e1ab545d({ screenName: e }), highlights: ({ screenName: e }) => o().ac3f4be9({ screenName: e }), articles: ({ screenName: e }) => o().da38f955({ screenName: e }) }),
                _ = Object.freeze({ default: () => o().b7363b66, with_replies: () => o().b7363b66, superfollows: () => o().ce659062, highlights: () => o().f1e98cc2, articles: () => o().d5c743c6 }),
                w = Object.freeze({ default: () => o().d1e5e328, with_replies: () => o().d1e5e328, superfollows: () => o().hb26a1fe, highlights: () => o().b7c3572e, articles: () => o().i8123550 }),
                b = Object.freeze({ default: ({ screenName: e }) => o().b786a77d({ screenName: e }), with_replies: ({ screenName: e }) => o().b786a77d({ screenName: e }), superfollows: ({ screenName: e }) => o().j7b80397({ screenName: e }), highlights: () => o().jbae8c54, articles: () => o().g8fb219e }),
                N = Object.freeze({ default: () => o().f34dfc18, with_replies: () => o().f34dfc18, superfollows: () => o().h9346040, articles: () => o().i4c3ddc6 }),
                g = Object.freeze({ default: () => o().e0118142, articles: () => o().ee9e42aa }),
                y = Object.freeze({ default: "/compose/post", articles: "/compose/articles" }),
                E = Object.freeze({ default: ({ fullName: e }) => o().e0c1d871({ fullName: e }), with_replies: ({ fullName: e }) => o().e0c1d871({ fullName: e }), superfollows: ({ fullName: e }) => o().c575828f({ fullName: e }), highlights: ({ fullName: e }) => o().e8300dbb({ fullName: e }), articles: ({ fullName: e }) => o().c46b420d({ fullName: e }) }),
                P = Object.freeze({ default: ({ fullName: e, screenName: t }) => o().c6ea308b({ fullName: e, screenName: t }), with_replies: ({ fullName: e, screenName: t }) => o().b9891db3({ fullName: e, screenName: t }), superfollows: ({ fullName: e, screenName: t }) => o().h5a65db7({ fullName: e, screenName: t }), highlights: ({ fullName: e, screenName: t }) => o().g7ccac9d({ fullName: e, screenName: t }), articles: ({ fullName: e, screenName: t }) => o().ja6e5d35({ fullName: e, screenName: t }) });
            class S extends r.Component {
                constructor(...e) {
                    super(...e), (this._getMemoizeModule = (0, n.Z)((e, t, s) => (0, a.ZP)(e, t, s))), (this._getTitleFormatter = (e) => ("default" === e ? u : "with_replies" === e ? m : P[e]));
                }
                render() {
                    const { displayBlocked: e, fullName: t, isActiveCreator: s, isSuperEligible: i, isSuperFollowing: o, mode: n, onEntriesRendered: l, screenName: u, userId: m } = this.props,
                        P = p,
                        S = _,
                        C = w,
                        F = b,
                        T = N,
                        I = E,
                        Z = this.context.viewerUserId === m,
                        v = this.context.featureSwitches.isTrue("creator_monetization_profile_subscription_tweets_tab_enabled"),
                        O = "superfollows" !== n || (v ? i : (Z && s) || o),
                        k = P[n],
                        x = this._getMemoizeModule(this.context.featureSwitches, m, n),
                        L = Z && n !== a.uh.highlights,
                        B = Z ? S[n]() : F[n]({ screenName: u }),
                        D = Z ? C[n] && C[n]() : T[n] && T[n](),
                        R = L ? (g[n]?.() ?? g.default()) : void 0,
                        U = L ? (y[n] ?? y.default) : void 0,
                        A = I[n],
                        M = this._getTitleFormatter(n);
                    return O ? r.createElement(d.Z, { scribeSection: f[n], userId: m }, ({ scribeNamespace: s }) => r.createElement(h.ZP, { displayBlocked: e, loadingLabelFormatter: k({ screenName: u }), module: x, onEntriesRendered: l, scribeNamespace: s, timelineEmptyHeaderFormatter: B, timelineEmptyMessageFormatter: D, timelineEmptyStateButtonLabel: R, timelineEmptyStateButtonLink: U, timelineTitleFormatter: A({ fullName: t }), titleFormatter: M({ fullName: t, screenName: u }), userId: m })) : r.createElement(c.Z, { to: `/${u}` });
                }
                _isLoggedIn() {
                    return !!this.context.viewerUserId;
                }
            }
            (S.contextType = l.rC), (S.defaultProps = { displayBlocked: !1, mode: "default" });
            const C = S;
        },
        722176: (e, t, s) => {
            s.d(t, { Z: () => Ne });
            var r = s(202784),
                i = s(325686),
                o = s(108362),
                n = s(366635),
                l = s(688715),
                a = s(392237),
                c = s(111677),
                d = s.n(c),
                h = s(912021),
                u = s(791632),
                m = s(718e3),
                f = s(789831),
                p = s(290402),
                _ = s(293256),
                w = s(709840),
                b = s(252021),
                N = s(344612),
                g = s(443781),
                y = s(32677),
                E = s(23134),
                P = s(231214),
                S = s(652904),
                C = s(614347),
                F = s(144256),
                T = s(948503),
                I = s(666670),
                Z = s(933083),
                v = s(656520),
                O = s(835546),
                k = s(42508),
                x = s(503229),
                L = s(962741),
                B = s(312771),
                D = s(484163),
                R = s(189490),
                U = s(379205),
                A = s(932782),
                M = s(217491),
                V = s(930351),
                H = s(21437),
                z = s(220544),
                j = s(644917),
                W = s(923790),
                q = s(529356),
                $ = s(860174),
                G = s(725516),
                Q = s(71620),
                J = s(668214),
                K = s(257166),
                X = s(390387),
                Y = s(601576),
                ee = s(919022);
            const te = (0, J.Z)()
                    .propsFromState(() => ({ isLoggedIn: X.Qb }))
                    .propsFromActions(() => ({ addToast: Y.fz, createLocalApiErrorHandler: (0, Q.zr)("DEVICE_FOLLOW_PROFILE_PROMPT"), follow: ee.ZP.follow, pushSubscribe: K.pushSubscribe, updateDeviceFollowing: ee.ZP.updateDeviceFollowing }))
                    .withAnalytics({ section: "repeat_profile_visits_notification_prompt" }),
                se = d().defba9a4,
                re = d().d11934ec,
                ie = d().a2cd2b0a,
                oe = d().cfd2f35e,
                ne = d().a70bae53,
                le = d().f51a4c29,
                ae = d().cfa5e58d,
                ce = d().be3a652d,
                de = te(({ addToast: e, createLocalApiErrorHandler: t, deviceFollowPromptUserId: s, follow: i, fullName: o, isLoggedIn: n, onSheetDismiss: l, pushSubscribe: a, updateDeviceFollowing: c }) => {
                    const { featureSwitches: d } = r.useContext(g.rC),
                        h = (0, G.z)(),
                        u = d.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled"),
                        m = n && (d.isTrue("responsive_web_repeat_profile_visits_notifications_enabled") || u),
                        f = u ? re : ie,
                        p = u ? ne({ fullName: o }) : le({ fullName: o }),
                        _ = () => {
                            l();
                        };
                    return (
                        r.useEffect(() => (h.scribe({ action: "impression" }), _), [m]),
                        m
                            ? r.createElement(q.Z, {
                                  actionLabel: f,
                                  headline: se,
                                  isFullHeightOnMobile: !0,
                                  onAction: () => {
                                      a()
                                          .then(() => {
                                              u
                                                  ? (h.scribe({ action: "device_follow_without_follow" }),
                                                    c(s, { device: !0 })
                                                        .then(() => {
                                                            _(), e({ text: ce({ fullName: o }) });
                                                        })
                                                        .catch((e) => {
                                                            t($.Z), _();
                                                        }))
                                                  : (h.scribe({ action: "follow" }),
                                                    i(s, {})
                                                        .then(() =>
                                                            c(s, { device: !0 }).then(() => {
                                                                _(), e({ text: ae({ fullName: o }) });
                                                            }),
                                                        )
                                                        .catch((e) => {
                                                            t($.Z), _();
                                                        }));
                                          })
                                          .catch((e) => {
                                              t($.Z), _();
                                          });
                                  },
                                  onClose: _,
                                  onSecondaryAction: () => {
                                      h.scribe({ action: "cancel" }), _();
                                  },
                                  role: "dialog",
                                  secondaryActionLabel: oe,
                                  subtext: p,
                                  useBrandedActionButtons: !1,
                                  withCloseButton: !1,
                              })
                            : null
                    );
                }),
                he = d().fa98627a,
                ue = d().c6ea308b,
                me = d().c203db71,
                fe = { section: "profile_interstitial" },
                pe = "likes",
                _e = "media",
                we = "affiliates";
            class be extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._shouldEnableProfessionalCategoryLabelHoldback = this.context.featureSwitches.isTrue("responsive_web_professional_journeys_holdback_enabled")),
                        (this._canShowRepeatProfileNotificationsPrompt = this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled")),
                        (this._shouldDisplayCustomProfessionalCategoryIcon = this.context.featureSwitches.isTrue("responsive_web_professional_cateogory_icon")),
                        (this._isSuperFollowSubscriptionEnabled = this.context.featureSwitches.isTrue("super_follow_android_web_subscription_enabled")),
                        (this._composeOptions = (0, h.Z)((e) => ({ defaultText: e }))),
                        (this._getFabState = (0, h.Z)((e) => () => ({ defaultText: e }))),
                        (this._renderContainer = () => {
                            const { fetchStatus: e, isNotFound: t, isRefreshing: s, isSuspended: n, screenName: l } = this.props,
                                a = n || t;
                            return r.createElement(F.Z, { isRefreshing: s, onRefresh: this._handlePullToRefresh }, r.createElement(i.Z, { style: ge.containerGrow }, r.createElement(o.Z, null, r.createElement(p.Z, { "aria-label": me({ screenName: l }), fetchStatus: a ? B.ZP.LOADED : e, onRequestRetry: this._handleRequestRetry, render: this._renderHeaderAndContent }))));
                        }),
                        (this._renderHeaderAndContent = () => {
                            const { showDeviceFollowInterstitial: e } = this.state,
                                { history: t, location: s, user: i } = this.props,
                                o = (0, u.cu)(t);
                            return r.createElement(r.Fragment, null, e && i && "string" == typeof s.query.profile_user_id && r.createElement(de, { deviceFollowPromptUserId: s.query.profile_user_id, fullName: i.name, onSheetDismiss: this._handleOnDismissDeviceFollowInterstitial }), o ? null : this._renderHeader(), this._renderContent());
                        }),
                        (this._renderContent = () => {
                            const { isNotFound: e, isSuspended: t, isWithheld: s, screenName: i, suspendHeader: o, suspendMessage: n, user: l } = this.props,
                                { showBlockedTweets: a } = this.state,
                                c = this._isViewingOwnProfile();
                            if (t) return r.createElement(z.Z, { screenName: this._getScreenName(), suspendHeader: o, suspendMessage: n });
                            if (e) return r.createElement(D.Z, { screenName: this._getScreenName() });
                            if (s && c) return r.createElement(W.C, { user: l }, this._renderUserProfileDefault());
                            if (s) return r.createElement(j.Z, { user: l });
                            if (this._shouldShowProfileInterstitial()) {
                                const { userProfileInterstitialType: e } = this.props;
                                return r.createElement(V.Z, { onConfirm: this._handleOnConfirmProfileInterstitial, screenName: i, userProfileInterstitialType: e });
                            }
                            return l && l.blocking && !a ? r.createElement(R.Z, { onShowBlockedTweets: this._handleShowBlockedTweets, screenName: l.screen_name }) : l && this._isProtectedFromViewer() ? r.createElement(H.Z, { screenName: l.screen_name }) : this._renderUserProfileDefault();
                        }),
                        (this._isViewingOwnProfile = () => {
                            const { viewerUserId: e } = this.context,
                                { user: t } = this.props;
                            return t && e === t.id_str;
                        }),
                        (this._shouldShowProfileInterstitial = (e = this.props.userProfileInterstitialType) => {
                            const { displaySensitiveMedia: t, user: s } = this.props;
                            if (!s || !e) return !1;
                            const { showBlockedTweets: r, userProfileInterstitialDismissed: i } = this.state,
                                o = s.blocking && !r,
                                n = s.blocked_by,
                                l = (e === k.Z.SensitiveMedia || e === k.Z.OffensiveProfileContent) && (s.following || t || !1);
                            return !(this._isViewingOwnProfile() || this._isProtectedFromViewer() || o || n || i || l);
                        }),
                        (this._isProtectedFromViewer = () => {
                            const { user: e } = this.props;
                            return e && e.protected && !this._isViewingOwnProfile() && !e.following;
                        }),
                        (this._getScreenName = () => {
                            const { screenName: e, user: t } = this.props;
                            return t?.screen_name || e;
                        }),
                        (this._handleRequestRetry = () => {
                            this._fetchOneUserIfNeeded(this.props);
                        }),
                        (this._handlePullToRefresh = () => {
                            const { user: e } = this.props;
                            e ? this._fetchOneUser(e.id_str) : this._fetchOneUserIfNeeded(this.props);
                        }),
                        (this._handleShowBlockedTweets = () => {
                            this.setState({ showBlockedTweets: !0 });
                        }),
                        (this._handleOnConfirmProfileInterstitial = () => {
                            const { scribeAction: e, scribeNamespace: t } = this.props;
                            this.setState({ userProfileInterstitialDismissed: !0 }), e({ ...t, ...fe, action: "click" });
                        }),
                        (this._handleOnDismissDeviceFollowInterstitial = () => {
                            this.setState({ showDeviceFollowInterstitial: !1 });
                        }),
                        (this._handleEntriesRendered = ({ entries: e, fetchStatus: t }) => {
                            const { recordTTFL: s } = this.props;
                            if ((t === B.ZP.FAILED && (this._shouldRecordTTFL = !1), this._shouldRecordTTFL && e.length)) {
                                const t = e.some(({ type: e }) => e === L.ZP.Tweet);
                                this._shouldRecordTTFL = !1;
                                t && s("profile", { source: "graphql" });
                            }
                        }),
                        (this._handleFollowButtonOffscreen = ({ isOffscreen: e }) => {
                            this.setState({ showFollowButtonRightControl: e });
                        }),
                        (this._getProfessionalCategory = () => {
                            const { user: e } = this.props;
                            return e?.professional?.category?.[0];
                        }),
                        (this._shouldDisplayProfessionalCategoryLabel = () => {
                            const e = this._isViewingOwnProfile();
                            if (this._shouldEnableProfessionalCategoryLabelHoldback && !e) return !1;
                            const t = this._getProfessionalCategory();
                            return !!t && (t?.display ?? !0);
                        }),
                        (this._getProfessionalCategoryNameIfDisplayable = () => (this._shouldDisplayProfessionalCategoryLabel() ? this._getProfessionalCategory()?.name : void 0)),
                        (this._shouldRecordTTFL = !0),
                        (this._shouldRecordTTFMC = !0),
                        (this.state = { userProfileInterstitialDismissed: !1, showBlockedTweets: !1, showDeviceFollowInterstitial: !1, showFollowButtonRightControl: !1 });
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, fetchSettingsIfNeeded: t, scribeAction: s, scribeNamespace: r } = this.props;
                    this._fetchOneUserIfNeeded(this.props).then(() => {
                        this._canShowRepeatProfileNotificationsPrompt && this._shouldShowDeviceFollowPrompt() && !this._isUserBlockedOrBlockingOrWitheld() && this.setState({ showDeviceFollowInterstitial: !0 });
                    }),
                        this._shouldDisplayProfessionalCategoryLabel() && s({ ...r, ...v._L() }),
                        t()
                            .catch(e())
                            .then(() => {
                                this._shouldShowProfileInterstitial() && s({ ...r, ...fe, action: "impression" });
                            });
                }
                componentDidUpdate(e) {
                    const { fetchStatus: t, recordTTFMC: s } = this.props;
                    if (e.fetchStatus !== t && t === B.ZP.FAILED) this._shouldRecordTTFMC = !1;
                    else if (this._shouldRecordTTFMC && e.fetchStatus !== t && t === B.ZP.LOADED && this._isValidProfile()) {
                        s("profile", { source: "graphql" }), (this._shouldRecordTTFMC = !1);
                    }
                    e.user && !e.user.blocking && this.props.user && this.props.user.blocking && (window.scrollTo(0, 0), this.setState({ showBlockedTweets: !1 }));
                }
                UNSAFE_componentWillReceiveProps(e) {
                    const { screenName: t, scribeAction: s, scribeNamespace: r, userProfileInterstitialType: i } = this.props;
                    e.screenName !== t ? (this._fetchOneUserIfNeeded(e), this.setState({ userProfileInterstitialDismissed: !1 })) : !i && this._shouldShowProfileInterstitial(e.userProfileInterstitialType) && s({ ...r, ...fe, action: "impression" });
                }
                render() {
                    const { fetchStatus: e, history: t, isIntentRoute: s, isNotFound: i, isSuspended: o, isWithheld: a, location: c, screenName: d, user: h } = this.props,
                        u = this._isViewingOwnProfile(),
                        m = o || i || (a && !u),
                        N = h ? ue({ screenName: h.screen_name, fullName: h.name }) : void 0,
                        g = u ? "" : `@${(h && h.screen_name) || d || ""} `,
                        E = this._composeOptions(g),
                        C = m ? null : r.createElement(y.Z, { getLocationState: this._getFabState(g), history: t }),
                        F = h && !m ? r.createElement(n.Z, { affiliateBadgeInfo: h.highlightedLabel, badgeContext: "account", isBlueVerified: h.is_blue_verified, isProtected: h.protected, isVerified: h.verified, name: h.name, screenName: h.screen_name, verifiedType: h.verified_type, withScreenName: !1 }) : he,
                        T = h && !m && e === B.ZP.LOADED ? this._renderSubtitle(h) : void 0,
                        I = h && (0, l.ju)(`https://x.com/${h.screen_name || ""}`);
                    return r.createElement(S.Z, null, r.createElement(b.Z, { backLocation: "/", composeOptions: E, documentTitle: N, history: t, primaryContent: r.createElement(f.Z, { fab: C }, h && r.createElement(w.E, { user: h }), I ? r.createElement(_.Z, { canonical: I }) : null, r.createElement(p.Z, { "aria-label": me({ screenName: d }), fetchStatus: h || m ? B.ZP.LOADED : e, onRequestRetry: this._handleRequestRetry, render: this._renderContainer }), s ? r.createElement(P.Z, { history: t, location: c, screenName: h?.screen_name, userId: h?.id_str }) : null), rightControl: this._renderRightControl(), sidebarContent: this._renderSidebarContent(), subtitle: T, title: F }));
                }
                _renderRightControl() {
                    const { promotedContent: e, user: t } = this.props,
                        { showFollowButtonRightControl: s } = this.state;
                    return t ? r.createElement(r.Fragment, null, s ? (this._isViewingOwnProfile() ? null : r.createElement(E.C, { isSuperFollowSubscriptionEnabled: this._isSuperFollowSubscriptionEnabled, promotedContent: e, userId: t.id_str })) : r.createElement(i.Z, { style: ge.rightControlContainer }, r.createElement(C.E, { user: t }), r.createElement(T.r, { user: t }))) : null;
                }
                _renderSubtitle(e) {
                    const { location: t } = this.props,
                        s = t.pathname.toLowerCase(),
                        i = e.screen_name.toLowerCase();
                    return s.indexOf(`/${i}/${pe}`) > -1 ? r.createElement(N.ZP, { count: e.favourites_count, type: "likes" }) : s.indexOf(`/${i}/${_e}`) > -1 ? r.createElement(N.ZP, { count: e.media_count, type: "media" }) : s.indexOf(`/${i}/${we}`) > -1 ? null : r.createElement(N.ZP, { count: e.statuses_count, type: "tweets" });
                }
                _renderSidebarContent() {
                    const { viewerUserId: e } = this.context,
                        { user: t } = this.props;
                    return t ? r.createElement(m.Z, { isOwnProfile: this._isViewingOwnProfile(), profileScreenName: t.screen_name, profileUserId: t.id_str, withTopicsToFollow: (0, O.n5)({ user: t, isOwnProfile: this._isViewingOwnProfile() || !1 }), withTrends: !!e }) : r.createElement(m.Z, null);
                }
                _renderHeader() {
                    const { viewerUserId: e } = this.context,
                        { isActiveCreator: t, isNotFound: s, isSuspended: i, isWithheld: o, promotedContent: n, screenName: l, superFollowersCount: a, user: c } = this.props,
                        { showBlockedTweets: d } = this.state,
                        h = this._shouldShowProfileInterstitial(),
                        u = !this._isViewingOwnProfile() && (i || s || h),
                        m = this._shouldDisplayCustomProfessionalCategoryIcon ? this._getProfessionalCategory()?.icon_name : void 0,
                        f = this._getProfessionalCategoryNameIfDisplayable();
                    if (u) {
                        const { name: e } = c || {},
                            t = { name: e, screen_name: l || "" };
                        return r.createElement(M.Z, { fullUser: c, restrictedUser: t, shouldDisplayUserActionSheet: !i && !s });
                    }
                    return c ? r.createElement(A.Z, { isActiveCreator: t, isWithheld: o, onFollowButtonOffscreen: this._handleFollowButtonOffscreen, professionalCategoryIcon: m, professionalCategoryName: f, promotedContent: n, showBlockedTweets: d, superFollowersCount: a, user: c, viewerUserId: e }) : null;
                }
                _renderUserProfileDefault() {
                    const { isActiveCreator: e, user: t } = this.props,
                        { showBlockedTweets: s } = this.state;
                    return r.createElement(U.Z, { isActiveCreator: e, onEntriesRendered: this._handleEntriesRendered, showBlockedTweets: s, user: t });
                }
                _fetchOneUserIfNeeded(e) {
                    const { createLocalApiErrorHandler: t, fetchOneByScreenNameWithExtraFieldsIfNeeded: s, screenName: r } = e;
                    return r ? s(r).catch(t(I.F)) : Promise.resolve();
                }
                _fetchOneUser(e) {
                    const { createLocalApiErrorHandler: t, fetchOneUser: s } = this.props;
                    return s(e).catch(t(I.F));
                }
                _isUserBlockedOrBlockingOrWitheld() {
                    const { isWithheld: e, user: t } = this.props;
                    return t?.blocking || t?.blocked_by || e;
                }
                _shouldShowDeviceFollowPrompt() {
                    const { location: e, user: t } = this.props;
                    return t && e?.query?.profile_user_id && e.query.profile_user_id === t.id_str && !t.notifications;
                }
                _isValidProfile() {
                    const { isNotFound: e, isSuspended: t, isWithheld: s, user: r } = this.props;
                    return r && !r.blocking && !r.blocked_by && !this._isViewingOwnProfile() && !this._isProtectedFromViewer() && !t && !e && !s && !this._shouldShowProfileInterstitial();
                }
            }
            (be.contextType = g.rC), (be.defaultProps = { recordTTFL: Z.k$, recordTTFMC: Z.Ms });
            const Ne = (0, x.Z)(be),
                ge = a.default.create((e) => ({ containerGrow: { flexGrow: 1 }, rightControlContainer: { flexDirection: "row", gap: e.spaces.space8 }, interstitialedProfile: { height: "100%", position: "fixed", width: "100%", filter: "blur(10px)" }, withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 }, withheldMessageHeader: { paddingBottom: e.spaces.space4 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserProfile-70e212e1.13436c3a.js.map
