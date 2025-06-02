"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.HoverCard"],
    {
        290402: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(807896),
                o = n(202784),
                s = n(182056),
                i = n(879113),
                a = n(392237),
                l = n(111677),
                c = n.n(l),
                d = n(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, n) => {
                    const a = s.Z.isOnline();
                    return o.createElement(i.Z, (0, r.Z)({}, t, { icon: a ? void 0 : o.createElement(d.default, { style: h.icon }), retryMessage: a ? e : u }));
                },
                h = a.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = o.forwardRef(p);
        },
        582751: (e, t, n) => {
            n.d(t, { Z8: () => i, mM: () => o, vx: () => s });
            var r = n(882122);
            const o = (e, t) => {
                    const n = r.lP(e, t);
                    if (void 0 === n) return n;
                    const o = r.c1(e, t),
                        s = r.og(e, t);
                    return n - (o.length - s.length);
                },
                s = (e, t) => r.og(e, t).map(({ profile_image_url_https: e }) => e),
                i = (e, t) => r.og(e, t).map(({ name: e }) => e);
        },
        904694: (e, t, n) => {
            n.r(t), n.d(t, { TopicHeader: () => H, default: () => W });
            var r = n(202784),
                o = n(325686),
                s = n(111677),
                i = n.n(s),
                a = n(731708),
                l = n(642153),
                c = n(992942),
                d = n(530732),
                u = n(537392),
                p = n(786475),
                h = n(392237);
            const m = h.default.create((e) => ({ buttonBottomMargin: { marginBottom: e.spaces.space16 }, buttonLeftMargin: { marginStart: e.spaces.space20 }, buttonTopMargin: { marginTop: e.spaces.space20 }, buttonWrap: { flexWrap: "wrap-reverse" }, condensedContext: { marginTop: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, condensedContextV2: { marginTop: e.spaces.space16 }, iconCustom: { alignSelf: "flex-start", borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32, marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, facepile: { marginBottom: e.spaces.space16, alignSelf: "flex-start" }, facepileV2: { marginEnd: e.spaces.space8, marginTop: e.spaces.space16 }, interactiveStyle: { flexShrink: 1 }, interactiveStyleV2: { flexDirection: "row", alignItems: "center" }, knownFollowersContainer: { marginTop: e.spaces.space16, marginBottom: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", flexGrow: 1, flexShrink: 1 }, underline: { textDecorationLine: "underline" } })),
                f = ({ children: e, context: t, imageSrc: n, knownFollowers: s, onFacepilesClick: f, onFacepilesImpression: g, subtitle: w, title: _, withAdditionalControls: y = !1 }) => {
                    const { firstUsername: b, knownFollowersAvatarUrls: S, trendingFollowersUrl: v, usersCount: E } = s || {},
                        C = s && s.knownFollowersAvatarUrls.length > 3;
                    r.useEffect(() => {
                        C && g && g();
                    }, [C, g]);
                    const x = n ? r.createElement(c.Z, { source: n, style: m.iconCustom }) : null,
                        Z = t ? r.createElement(o.Z, { style: y ? m.condensedContextV2 : m.condensedContext }, r.createElement(a.ZP, { align: "left", color: "gray700", numberOfLines: 3, size: "subtext2" }, t), r.createElement(o.Z, { style: y ? m.buttonTopMargin : [m.buttonBottomMargin, m.buttonLeftMargin] }, e)) : null,
                        I = r.createElement(u.ZP, null, ({ containerWidth: n }) => {
                            const s = p.Z.isNarrowScreenWidth(n) ? "xLarge" : "xxLarge",
                                c = n < h.default.theme.breakpoints.xSmall ? m.buttonWrap : void 0,
                                u = y ? m.facepileV2 : null;
                            return r.createElement(
                                o.Z,
                                { style: y ? null : [m.knownFollowersContainer, c] },
                                r.createElement(d.Z, { interactiveStyles: null, link: v, onPress: f, style: y ? m.interactiveStyleV2 : m.interactiveStyle }, ({ isHovered: e }) => r.createElement(r.Fragment, null, r.createElement(l.Z, { style: [m.facepile, u], userAvatarSize: s, userAvatarUrls: S }), r.createElement(a.ZP, { color: "gray700", dir: "ltr", numberOfLines: 2, size: "subtext2", style: e && m.underline }, t || ((e, t) => r.createElement(i().I18NFormatMessage, { $i18n: "bb2cd6d3" }, e, t))(b, E)))),
                                ((t) => {
                                    const n = t < h.default.theme.breakpoints.xSmall ? m.buttonBottomMargin : [m.buttonBottomMargin, m.buttonLeftMargin];
                                    return y ? [e] : r.createElement(o.Z, { style: n }, e);
                                })(n),
                            );
                        }),
                        T = s && C ? I : Z;
                    return r.createElement(r.Fragment, null, x, r.createElement(a.ZP, { size: "title2", weight: "heavy" }, _), w ? r.createElement(a.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, w) : null, T);
                };
            var g = n(791632),
                w = n(321835),
                _ = n(946409),
                y = n(618566),
                b = n(638090),
                S = n(500002),
                v = n(443781),
                E = n(265196),
                C = n(233391),
                x = n(863934),
                Z = n(288955),
                I = n(177371),
                T = n(459679),
                F = n(71620),
                N = n(668214),
                P = n(466380),
                k = n(919022);
            const O = (e, t) => P.Z.select(e, t.topicId),
                U = (e, t) => k.ZP.selectMany(e, t.facepile?.userIds || []),
                A = (e, t) => {
                    const n = U(e, t);
                    return (0, T.Z)(n, (e) => (!e || e.blocking || e.muting ? void 0 : e));
                },
                M = (0, N.Z)()
                    .propsFromState(() => ({ topic: O, users: A }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, F.zr)("TOPIC_HEADER"), follow: P.Z.follow, unfollow: P.Z.unfollow, undoTopicNotInterested: P.Z.undoNotInterested }))
                    .withAnalytics(),
                B = i().b1850062,
                L = i().d69b2d90,
                z = i().gf5e9ea6;
            class H extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._additionalControlsEnabled = this.context.featureSwitches.isTrue("topic_landing_page_clearer_controls_enabled")),
                        (this._followButtonTextVariant = (0, y.a)(this.context.featureSwitches.getStringValue("topic_landing_page_cta_text"))),
                        (this._handleUndoTopicNotInterested = () => {
                            const { createLocalApiErrorHandler: e, topic: t, undoTopicNotInterested: n } = this.props;
                            this._scribeAction({ element: "topic", action: "un_not_interested" }), t && n(t.id).catch(e());
                        }),
                        (this._handleOnClickFacepiles = () => {
                            this._scribeAction({ element: "facepile", action: "click" });
                        }),
                        (this._handleFacepilesImpression = () => {
                            this._scribeAction({ element: "facepile", action: "impression" });
                        });
                }
                render() {
                    const { facepile: e, history: t, onFollowHeaderOffscreen: n, topic: s, topicLandingContext: i, users: a } = this.props,
                        { description: l, name: c } = s || {},
                        d = a.slice(0, 4).map((e) => e.profile_image_url_https),
                        u = e?.facepileUrl && (0, _.s9)(e.facepileUrl),
                        p = (0, g.cu)(t),
                        h = a && a.length > 3 ? { firstUsername: a[0].name || "", usersCount: a.length - 1, knownFollowersAvatarUrls: d, trendingFollowersUrl: u || "" } : void 0;
                    return s && !p
                        ? r.createElement(
                              o.Z,
                              { style: V.root },
                              r.createElement(Z.Z, { customText: c, displayMode: C.BH.topic }, () => r.createElement(w.Z, { onOffscreenChange: n }, r.createElement(f, { children: this._renderTopicActions(), context: i, knownFollowers: h, onFacepilesClick: this._handleOnClickFacepiles, onFacepilesImpression: this._handleFacepilesImpression, subtitle: l, title: c, withAdditionalControls: this._additionalControlsEnabled }))),
                          )
                        : null;
                }
                _renderTopicActions() {
                    const { displayType: e, showRelationshipChangeConfirmation: t, topic: n } = this.props;
                    return n
                        ? r.createElement(u.ZP, { key: "topic-header-actions" }, ({ containerWidth: s }) => {
                              const i = p.Z.isNarrowScreenWidth(s) ? V.mainViewSmall : V.mainView,
                                  a = this._additionalControlsEnabled ? (p.Z.isNarrowScreenWidth(s) ? V.followButtonSmall : V.followButton) : null,
                                  l = p.Z.isNarrowScreenWidth(s) ? V.notInterestButtonSmall : V.notInterestButton;
                              return r.createElement(r.Fragment, null, n.not_interested && this._additionalControlsEnabled ? this._renderTopicContextTombstone() : e === b.el.Basic ? r.createElement(o.Z, { style: i }, !this._additionalControlsEnabled || n.following || n.not_interested ? null : r.createElement(x.Z, { size: "medium", style: l, text: B, topicId: n.id, type: "primaryOutlined", withIconOnly: !1 }), r.createElement(E.ZP, { showRelationshipChangeConfirmation: t, size: "medium", style: a, textMode: this._followButtonTextVariant, topic: n })) : null);
                          })
                        : null;
                }
                _renderTopicContextTombstone() {
                    return r.createElement(I.Z, { actionText: z, children: L, inline: !0, onClick: this._handleUndoTopicNotInterested });
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribe(e);
                }
            }
            (H.contextType = v.rC), (H.defaultProps = { displayType: b.el.Basic });
            const V = h.default.create((e) => ({ root: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical }, mainView: { flexDirection: "row", flexGrow: 1 }, mainViewSmall: { flexWrap: "wrap" }, notInterestButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginEnd: e.spaces.space4 }, followButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginStart: e.spaces.space4, minWidth: "inherit" }, followButtonSmall: { marginTop: e.spaces.space8, marginStart: 0, width: "100%" }, notInterestButtonSmall: { width: "100%" } })),
                W = (0, S.ZP)(M(H));
        },
        365112: (e, t, n) => {
            n.r(t), n.d(t, { UserProfileCardContainer: () => M, default: () => B });
            var r = n(202784),
                o = n(266704),
                s = n(290402),
                i = n(666670),
                a = n(835546),
                l = n(312771),
                c = n(154003),
                d = n(111677),
                u = n.n(d),
                p = n(457566),
                h = n(725516),
                m = n(979512);
            const f = u().fc7db594;
            function g({ screenName: e }) {
                const { openGrok: t } = (0, m.Z)(),
                    n = (0, h.z)(),
                    o = r.useCallback(() => {
                        t({ text: `@${e}`, autoSubmit: !0, source: "user_profile_summary" }), n.scribe({ element: "grok-user-info-button", action: "click" });
                    }, [n, t, e]);
                return r.createElement(c.ZP, { icon: r.createElement(p.x1, null), onPress: o }, f);
            }
            var w = n(461900),
                _ = n(443781),
                y = n(23134),
                b = n(288955),
                S = n(71620),
                v = n(668214),
                E = n(882122),
                C = n(38562),
                x = n(919022),
                Z = n(582751);
            const I = (0, x.W3)([x.pL]),
                T = (e, t) => I(e, t.screenName),
                F = (e, t) => x.ZP.selectByScreenName(e, t.screenName),
                N = (e, t) => x.ZP.selectIsUserNotFound(e, t.screenName),
                P = (e, t) => x.ZP.selectIsUserSuspended(e, t.screenName),
                k = (e, t) => x.ZP.selectIsUserWithheld(e, t.screenName),
                O = (e, t) => {
                    const n = F(e, t);
                    return n?.highlightedLabel;
                },
                U = (e, t) => {
                    const n = ((e, t) => x.ZP.selectIdByScreenName(e, t.screenName))(e, t);
                    return { avatarUrls: Z.vx(e, n), count: Z.mM(e, n), names: Z.Z8(e, n) };
                },
                A = (0, v.Z)()
                    .propsFromState(() => ({ displaySensitiveMedia: C.f1, fetchStatus: T, isNotFound: N, isSuspended: P, isWithheld: k, knownFollowers: U, user: F, userHighlightedLabel: O }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, S.zr)("USER_PROFILE_CARD"), fetchOneUserByScreenNameIfNeeded: x.ZP.fetchOneByScreenNameIfNeeded, fetchKnownFollowersIfNeeded: E.Hq }))
                    .withAnalytics();
            class M extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderUserProfileCard = () => {
                            const { displaySensitiveMedia: e, isNotFound: t, isSuspended: n, isWithheld: s, knownFollowers: i, onAvatarClick: l, onScreenNameClick: c, profileLink: d, promotedContent: u, screenName: p, user: h, userHighlightedLabel: m } = this.props;
                            if (n) return r.createElement(o.Z.Suspended, { onAvatarClick: l, onScreenNameClick: c, userScreenName: p });
                            if (!h) return null;
                            const { viewerUserId: f } = this.context,
                                g = !!f && f === h.id_str,
                                w = (0, a.n5)({ isOwnProfile: g, isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), user: h }),
                                _ = this.context.featureSwitches.isTrue("creator_subscriptions_subscription_count_enabled"),
                                y = (0, a.ZP)({ displaySensitiveMedia: e, isNotFound: t, isSuspended: n, isWithheld: s, viewerUserId: f, user: h }),
                                S = { ...y, subscriptionsCount: y.subscriptionsCount && _, label: y.label };
                            return r.createElement(b.Z, null, (e) => r.createElement(o.Z, { followButton: this._renderFollowUserButton(), grokButton: this._renderGrokButton(), isAllowedToViewOptions: S, isLoggedIn: !!f, isUserBlueVerified: h.is_blue_verified, isUserProtected: h.protected, isUserStatsWithLink: w, isUserVerified: h.verified, knownFollowers: i, onAvatarClick: l, onScreenNameClick: c, onUserStatsPress: e(), profileLink: d, promotedContent: u, subscriptionsCount: h.creator_subscriptions_count, userAvatarUri: h.profile_image_url_https, userDescription: h.description, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userHighlightedLabel: m, userId: h.id_str, userName: h.name, userScreenName: p, userTranslatorType: h.translator_type, userVerifiedType: h.verified_type, userWithFollowsYou: h.followed_by, userWithheldDescription: h.withheld_description, userWithheldEntities: h.withheld_entities }));
                        }),
                        (this._renderFollowUserButton = () => {
                            const { promotedContent: e, showRelationshipChangeConfirmation: t, user: n } = this.props,
                                o = n?.id_str;
                            return o ? r.createElement(y.C, { promotedContent: e, showRelationshipChangeConfirmation: t, userId: o }) : void 0;
                        }),
                        (this._renderGrokButton = () => {
                            const e = (0, w.$)(this.context),
                                t = this.context.featureSwitches.isTrue("responsive_web_grok_profile_summary_enabled"),
                                n = this.context.featureSwitches.getNumberValue("responsive_web_grok_profile_summary_min_followers", 1e6),
                                o = this.context.featureSwitches.getNumberValue("responsive_web_grok_profile_summary_min_posts", 100),
                                s = this.props.user?.followers_count ?? 0,
                                i = this.props.user?.statuses_count ?? 0,
                                a = this.props.user?.screen_name,
                                l = this.props.user?.protected,
                                c = !this.props.user?.verified_type || "User" === this.props.user?.verified_type;
                            return !e || !t || !a || s < n || i < o || l || !c ? null : r.createElement(g, { screenName: a });
                        }),
                        (this._handleFetchUser = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserByScreenNameIfNeeded: t, screenName: n } = this.props;
                            t(n).catch((t) => {
                                e(i.F)(t);
                            });
                        }),
                        (this._handleFetchKnownFollowers = () => {
                            const { createLocalApiErrorHandler: e, fetchKnownFollowersIfNeeded: t, user: n } = this.props,
                                r = n?.id_str;
                            r && t(r).catch(e({}));
                        });
                }
                componentDidMount() {
                    this._handleFetchUser(), this._handleFetchKnownFollowers();
                }
                componentDidUpdate(e) {
                    e.user?.id_str !== this.props.user?.id_str && this._handleFetchKnownFollowers();
                }
                render() {
                    const { fetchStatus: e, isSuspended: t } = this.props;
                    return r.createElement(s.Z, { fetchStatus: t ? l.ZP.LOADED : e, onRequestRetry: this._handleFetchUser, render: this._renderUserProfileCard });
                }
            }
            M.contextType = _.rC;
            const B = A(M);
        },
        879596: (e, t, n) => {
            n.d(t, { D: () => o });
            var r = n(111677);
            const o = { defaultToast: { text: n.n(r)().ca96fe6e }, showToast: !0 };
        },
        806528: (e, t, n) => {
            n.d(t, { Bz: () => c, ZW: () => m, ey: () => u, fw: () => a, iG: () => h, wM: () => l });
            var r = n(499627),
                o = n(341276);
            const s = "geoLocation",
                i = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const a = (e) => e[s],
                l = (e) => e[s].permissionStatus,
                c = (e) => e[s].position,
                d = "rweb/geoLocation/SET_PERMISSION_STATUS",
                u = (e) => ({ payload: e, type: d }),
                p = "rweb/geoLocation/SET_POSITION",
                h = () => (e, t) =>
                    f()
                        .then((t) => e({ payload: t, type: p }))
                        .catch((t) => (e(u(o.S.denied)), Promise.reject(t))),
                m = () => (e, t) => (c(t()) ? Promise.resolve() : e(h())),
                f = () =>
                    new Promise((e, t) =>
                        navigator.geolocation.getCurrentPosition((t) => {
                            const n = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(n);
                        }, t),
                    );
            r.Z.register({
                [s]: function (e = i, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case d:
                            return { ...e, permissionStatus: t.payload };
                        case p:
                            return { ...e, position: t.payload };
                        default:
                            return e;
                    }
                },
            });
        },
        341276: (e, t, n) => {
            n.d(t, { M: () => o, S: () => r });
            const r = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                o = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
        882122: (e, t, n) => {
            n.d(t, { Hq: () => _, c1: () => m, lP: () => g, og: () => f });
            var r = n(745123);
            var o = n(499627),
                s = n(917799),
                i = n(56519),
                a = n(919022);
            const l = "knownFollowers",
                c = `rweb/${l}`,
                d = [],
                u = (0, s.dg)(c, "FETCH_KNOWN_FOLLOWERS"),
                p = {};
            o.Z.register({
                [l]: function (e = p, t) {
                    if (!t) return e;
                    if (t.type === u.SUCCESS) {
                        const n = t.payload || {},
                            { total_count: r, users: o } = n && n.result,
                            { user_id: s } = t.meta || {};
                        return s ? { ...e, [s]: { knownFollowersCount: r, knownFollowerIds: o } } : e;
                    }
                    return e;
                },
            });
            const h = (e, t) => e[l][t],
                m = (e, t) => {
                    if (t) {
                        const o = w(e, t);
                        return (n = a.ZP.selectMany(e, o)), (r = (e) => !!e), n.filter(r);
                    }
                    var n, r;
                    return d;
                },
                f = (e, t) => m(e, t).filter(({ name: e, profile_image_url_https: t }) => !!t?.length && !!e?.length),
                g = (e, t) => {
                    let n;
                    if (t) {
                        const r = h(e, t);
                        n = r?.knownFollowersCount;
                    }
                    return n;
                },
                w = (e, t) => {
                    const n = h(e, t);
                    return n?.knownFollowerIds || d;
                },
                _ =
                    (e) =>
                    (t, n, { api: o }) =>
                        void 0 !== g(n(), e)
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, n, { api: o }) =>
                                          (0, s._O)(t, { request: o.withEndpoint(r.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: u, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, i.dP)(t)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
        },
        466380: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(807469),
                o = n(502909),
                s = n(600823);
            const i = (0, o.ZP)({ namespace: "topics" }),
                a = (0, o.tb)(i, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(r.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                l = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (n, r) => (n(i.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, n) => {
                    const { entityId: r } = t.meta,
                        o = e.entities[r];
                    return o ? ((e, t, n, r) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [n.id]: { ...n, ...r() } } } : e))(e, t, o, n) : e;
                },
                d = { follow: (0, o.Tx)(i, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, o.Tx)(i, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, o.Tx)(i, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, o.Tx)(i, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...i, ...a, ...l, ...d, customActionTypes: (0, o.X7)(d) },
                p = s.Z.register(u);
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                o = n(476984),
                s = n.n(o),
                i = n(143778),
                a = n(750410),
                l = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class h extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: o, icon: s, loadingMessage: i, onRequestRetry: d, render: h, renderFailure: m, retryMessage: f, retryable: g } = this.props;
                    switch (o) {
                        case c:
                            return g ? r.createElement(a.Z, { icon: s, onRequestRetry: d, retryMessage: f }) : n ? r.createElement(l.m, { failureMessage: n }) : m();
                        case u:
                            return r.createElement(l.J, { "aria-label": e, color: t, loadingMessage: i });
                        case p:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var r = n(202784),
                o = n(890601),
                s = n(783427),
                i = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        452693: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var r = n(202784),
                o = n(890601),
                s = n(783427),
                i = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        730895: (e, t, n) => {
            var r = n(821176);
            e.exports = function () {
                var e = r(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        890103: (e, t, n) => {
            var r = n(609859),
                o = n(807400),
                s = n(396616),
                i = n(730895),
                a = n(824229),
                l = r.RegExp,
                c = l.prototype;
            o &&
                a(function () {
                    var e = !0;
                    try {
                        l(".", "d");
                    } catch (t) {
                        e = !1;
                    }
                    var t = {},
                        n = "",
                        r = e ? "dgimsy" : "gimsy",
                        o = function (e, r) {
                            Object.defineProperty(t, e, {
                                get: function () {
                                    return (n += r), !0;
                                },
                            });
                        },
                        s = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var i in (e && (s.hasIndices = "d"), s)) o(i, s[i]);
                    return Object.getOwnPropertyDescriptor(c, "flags").get.call(t) !== r || n !== r;
                }) &&
                s(c, "flags", { configurable: !0, get: i });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.HoverCard.25fbd9ca.js.map
