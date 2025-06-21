(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ProfileClusterFollow", "icons/IconFeedback-js"],
    {
        801301: (e) => {
            e.exports = { queryId: "IWdZXQ2Hdh_gprXkyn58ug", operationName: "SidebarUserRecommendations", operationType: "query", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        864479: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => a });
            var o = r(807896),
                s = r(202784),
                n = r(771099);
            const a = (e) => (t) => s.createElement(n.$6, null, (r) => s.createElement(e, (0, o.Z)({}, t, { isInSidebar: r })));
        },
        751154: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { ProfileClusterFollowContainer: () => F, default: () => O });
            var o = r(202784),
                s = r(325686),
                n = r(154003),
                a = r(815858),
                l = r(420412),
                i = r(844685),
                c = r(392237),
                d = r(111677),
                u = r.n(d),
                m = r(837020),
                p = r(62857),
                h = r(409438);
            const f = u().ba5a88e4,
                y = u().a526aa66,
                _ = o.createElement(m.default, null);
            class E extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleRemoveClusterFollow = () => {
                            this.props.onRemoveClusterFollow();
                        }),
                        (this._renderCloseButton = () => o.createElement(n.ZP, { icon: _, onPress: this._handleRemoveClusterFollow, size: "xSmall", type: "brandText" }));
                }
                render() {
                    const { userIds: e } = this.props;
                    return o.createElement(a.Z, { animateMount: !0, duration: "longer", show: !0, type: "slide" }, o.createElement(s.Z, { "aria-label": y, role: "complementary", style: w.root }, o.createElement(l.Z, null), o.createElement(i.Z, { rightControl: this._renderCloseButton(), text: f }), o.createElement(p.Z, { displayMode: h.Z.UserCompact, userIds: e.slice(0, 3) }), o.createElement(l.Z, null)));
                }
            }
            const w = c.default.create((e) => ({ root: { marginTop: e.spaces.space12 } }));
            var b = r(967977),
                C = r(942893),
                g = r(312771),
                I = r(71620),
                x = r(668214),
                S = r(994305);
            const T = "profile-cluster-follow",
                L = (e, t) => t.userId,
                U = (e, t) => {
                    const r = L(0, t);
                    return S.Ic(e, { displayLocation: T, similarToUserId: r });
                },
                Z = (e, t) => {
                    const r = L(0, t);
                    return S.UD(e, { displayLocation: T, similarToUserId: r });
                },
                P = (0, x.Z)()
                    .propsFromState(() => ({ fetchStatus: Z, recommendations: U }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, I.zr)("WHO_TO_FOLLOW_CONTAINER"), fetchRecommendationsIfNeeded: S.yY }))
                    .withAnalytics(),
                v = { component: "suggest_profile_cluster_follow", element: "user", action: "results" },
                R = { component: "suggest_profile_cluster_follow", element: "close_button", action: "click" };
            class F extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleImpression = (e) => {
                            const { analytics: t } = this.props,
                                r = e && e.slice(0, 3).map((e) => ({ ...C.Z.forUser(e.user_id), suggestion_details: { source_data: e.token } }));
                            t.scribe({ ...v, data: { items: r } });
                        }),
                        (this._handleCloseButtonImpression = () => {
                            const { analytics: e, onRemoveClusterFollow: t } = this.props;
                            e.scribe(R), t();
                        });
                }
                componentDidMount() {
                    const { recommendations: e } = this.props;
                    this._fetchRecommendations(this.props), e && e.length > 0 && this._handleImpression(e);
                }
                componentDidUpdate(e) {
                    const { recommendations: t } = this.props;
                    t !== e.recommendations && t && t.length > 0 && this._handleImpression(t);
                }
                render() {
                    const { recommendations: e } = this.props,
                        t = e && e.map((e) => e.user_id);
                    return this._hasLoadedUsers() ? o.createElement(E, { onRemoveClusterFollow: this._handleCloseButtonImpression, userIds: t }) : null;
                }
                _fetchRecommendations(e) {
                    const { createLocalApiErrorHandler: t, fetchRecommendationsIfNeeded: r, userId: o } = e;
                    r({ limit: 3, displayLocation: T, similarToUserId: o }).catch(t(b.C));
                }
                _hasLoadedUsers() {
                    const { fetchStatus: e, recommendations: t } = this.props;
                    return e === g.ZP.LOADED && t.length > 0;
                }
            }
            const O = P(F);
        },
        62857: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => L });
            var o = r(807896),
                s = r(202784),
                n = r(476984),
                a = r.n(n),
                l = r(111677),
                i = r.n(l),
                c = r(615656),
                d = r(290402),
                u = r(325686),
                m = r(240089),
                p = r(663550),
                h = r(409438);
            const f = ({ displayMode: e = h.Z.UserDetailed, renderUserCell: t, userIds: r }) =>
                s.createElement(
                    u.Z,
                    { role: "list" },
                    r.map((r, o) => (t ? t(r) : s.createElement(m.ZP, { decoration: m.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: r, promotedItemType: p.bj.USER, userId: r, withFollowsYou: !0 }))),
                );
            var y = r(312771),
                _ = r(71620),
                E = r(973572),
                w = r(668214),
                b = r(919022);
            const C = (e, t) => t.userIds,
                g = (e, t) => {
                    const { filterPredicate: r = (e) => !!e, userIds: o } = t;
                    return o.filter((t) => {
                        const o = b.ZP.select(e, t);
                        return !!o && r(o);
                    });
                },
                I = (e, t) => {
                    const { userIds: r } = t;
                    return r.reduce((t, r) => {
                        const o = b.ZP.selectFetchStatus(e, r);
                        return o && (t[r] = o === y.ZP.NONE ? y.ZP.LOADING : o), t;
                    }, {});
                },
                x = (0, w.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, E.Z)(g, (e) => e),
                        fetchStatus: (0, E.Z)(g, I, C, (e, t, r) => {
                            let o = y.ZP.LOADED;
                            for (let s = 0; s < r.length; s++) {
                                const n = r[s];
                                if (-1 === e.indexOf(n)) {
                                    const e = t[n] || y.ZP.LOADING;
                                    o = o === y.ZP.LOADED ? e : o;
                                }
                                if (o === y.ZP.LOADED) break;
                            }
                            return o;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: b.ZP.fetchManyIfNeeded })),
                S = i().f5b426c2;
            class T extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: r, fetchUsersIfNeeded: n, filterPredicate: a, userIds: l, ...i } = this.props;
                            return s.createElement(f, (0, o.Z)({}, i, { userIds: e }));
                        }),
                        (this._handleFetch = () => {
                            this._fetchUsersIfNeeded();
                        });
                }
                componentDidMount() {
                    this._fetchUsersIfNeeded();
                }
                componentDidUpdate(e) {
                    a()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded();
                }
                render() {
                    return s.createElement(d.Z, { "aria-label": S, fetchStatus: this.state.allUsersUnavailable ? y.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: r, userIds: o } = this.props;
                    r(o).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        t({
                            [c.ZP.AddressBookLookupNotFound]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                            [c.ZP.OtherUserSuspended]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                        }),
                    );
                }
            }
            const L = x(T);
        },
        967977: (e, t, r) => {
            "use strict";
            r.d(t, { C: () => n });
            var o = r(516951),
                s = r(615656);
            const n = { [s.ZP.ResourceNotFound]: { customAction: o.Z } };
        },
        694180: (e, t, r) => {
            "use strict";
            r.d(t, { cM: () => y, dS: () => f, iY: () => _ });
            var o = r(370751),
                s = r(399896),
                n = r(663550),
                a = r(499627),
                l = r(917799);
            const i = {},
                c = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                d = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, o.Z)([n.dx.IMPRESSION, n.dx.DWELL]),
                m = (0, o.Z)([n.AJ.TREND_VIEW, n.AJ.SPOTLIGHT_IMPRESSION]),
                p = (e) => ({ payload: { eventKey: e }, type: d });
            const h = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, r, { api: o }) => {
                        const { event: n, impression_id: a, promoted_trend_id: i } = e,
                            d = `trend-${i}-${n}`;
                        if (m.has(n) && h(r(), d)) return Promise.resolve();
                        const u = { promoted_trend_id: i, event: n, impression_id: a };
                        return (0, l._O)(t, { params: u, request: o.withEndpoint(s.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && m.has(n)) return [p(d)];
                        });
                    },
                y =
                    ({ disclosureType: e, itemId: t, itemType: r, params: o }) =>
                    (n, a, { api: i }) => {
                        const { event: d, impression_id: m } = o,
                            f = `${r}-${t ?? "undefined"}-${m ?? "undefined"}-${d ?? "undefined"}`;
                        if (u.has(d) && h(a(), f)) return Promise.resolve();
                        const y = e && "earned" === e.toLowerCase() ? "1" : null,
                            _ = { ...o, earned: y, epoch_ms: Date.now() };
                        return (0, l._O)(n, { params: _, request: i.withEndpoint(s.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: _ }, (e, t) => {
                            if (!t && u.has(d)) return [p(f)];
                        });
                    },
                _ =
                    (e) =>
                    (t, r, { api: o }) =>
                        (0, l._O)(t, { params: e, request: o.withEndpoint(s.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            a.Z.register({
                promotedContent: function (e = i, t) {
                    if (!t) return e;
                    if (t.type === d) {
                        if (!t.payload) return e;
                        const { eventKey: r } = t.payload;
                        return { ...e, [r]: !0 };
                    }
                    return e;
                },
            });
        },
        994305: (e, t, r) => {
            "use strict";
            r.d(t, { yY: () => R, UD: () => v, Ic: () => P });
            var o = r(360917),
                s = r.n(o),
                n = r(506899),
                a = r(414742),
                l = r(125199);
            const i = new n.fK.Entity("recommendations", { user: l.Z }, { idAttribute: (e) => e.user?.rest_id });
            var c = r(801301),
                d = r.n(c),
                u = r(304819);
            const m = new n.fK.Entity("recommendations", { user: u.Z }, { idAttribute: (e) => e.user?.id_str });
            var p = r(387466),
                h = r(120071);
            const f = (e) => ({ ...h.k(e), excluded: [], pc: !0 }),
                y = ({ apiClient: e, featureSwitches: t }) => ({
                    fetch(r, o = {}) {
                        const s = { ...f(t), ...r, ...(0, p.Y)(t) };
                        return e.get("users/recommendations", s, o).then((e) => (0, n.Fv)(e, [m]));
                    },
                    fetchSidebarUserRecommendations: (t) =>
                        e
                            .graphQL(
                                d(),
                                { profileUserId: t.user_id },
                                (0, a.kj)((e) => !e.sidebar_user_recommendations, "GQL Sidebar User Recommendations: Failed to render Sidebar User Recommendations"),
                            )
                            .then((e) => {
                                const t = e.sidebar_user_recommendations ?? [];
                                return (0, n.Fv)(
                                    t.map(({ token: e, user_results: { result: t } }) => ({ token: e, user: t, user_id: t?.rest_id })).filter(({ user: e }) => e),
                                    [i],
                                );
                            }),
                });
            var _ = r(499627),
                E = r(917799),
                w = r(312771),
                b = r(56519);
            const C = "recommendations",
                g = 30,
                I = "rweb/recommendations/FETCH_REQUEST",
                x = "rweb/recommendations/FETCH_SUCCESS",
                S = "rweb/recommendations/FETCH_FAILURE",
                T = {},
                L = ({ displayLocation: e, similarToUserId: t }) => e + (t ? `_${t}` : "");
            _.Z.register({
                [C]: function (e = T, t) {
                    if (!t?.meta) return e;
                    switch (t.type) {
                        case I: {
                            const r = L(t.meta);
                            return { ...e, [r]: { ...e[r], fetchStatus: w.ZP.LOADING } };
                        }
                        case S: {
                            const r = L(t.meta);
                            return { ...e, [r]: { ...e[r], fetchStatus: w.ZP.FAILED } };
                        }
                        case x: {
                            const r = L(t.meta),
                                o = t.payload && t.payload.entities ? t.payload.entities : { recommendations: s() },
                                n = (t.payload && t.payload.result ? t.payload.result : Z).map((e) => o.recommendations[e]);
                            return { ...e, [r]: { ...e[r], fetchStatus: w.ZP.LOADED, recommendations: n } };
                        }
                        default:
                            return e;
                    }
                },
            });
            const U = [],
                Z = [],
                P = (e, { displayLocation: t, similarToUserId: r }) => {
                    const o = e[C][L({ displayLocation: t, similarToUserId: r })];
                    return o && o.recommendations ? o.recommendations : U;
                },
                v = (e, { displayLocation: t, similarToUserId: r }) => {
                    const o = e[C][L({ displayLocation: t, similarToUserId: r })];
                    return o ? o.fetchStatus : w.ZP.NONE;
                },
                R = (e) => (t, r, o) => {
                    const n = r(),
                        { displayLocation: a, similarToUserId: l } = e,
                        i = P(n, { displayLocation: a, similarToUserId: l }),
                        c = v(n, { displayLocation: a, similarToUserId: l }) === w.ZP.LOADED;
                    return i && c
                        ? Promise.resolve(s())
                        : t(
                              (
                                  (e) =>
                                  (t, r, { api: o, featureSwitches: s }) => {
                                      const { displayLocation: n, itsInterests: a, limit: l = g, similarToUserId: i } = e,
                                          c = "profile_accounts_sidebar" === n && s.isTrue("rweb_recommendations_sidebar_graphql_enabled");
                                      return (0, E._O)(t, { request: c ? o.withEndpoint(y).fetchSidebarUserRecommendations : o.withEndpoint(y).fetch, params: { display_location: n, itsInterests: a, limit: l, user_id: i } })({ actionTypes: { REQUEST: I, SUCCESS: x, FAILURE: S }, context: "FETCH_RECOMMENDATIONS", meta: { displayLocation: n, similarToUserId: i } }, (e) => {
                                          if (e && e.entities) return [(0, b.dP)(e.entities)];
                                      });
                                  }
                              )(e),
                          );
                };
        },
        378729: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => y });
            var o = r(202784),
                s = r(325686),
                n = r(111677),
                a = r.n(n),
                l = r(283379),
                i = r(731708),
                c = r(392237);
            const d = a().f1a1b791,
                u = a().if2bf8b4,
                m = a().f3624b5c,
                p = a().b4b3b113,
                h = a().be222050,
                f = a().hcbbe447;
            class y extends o.Component {
                render() {
                    const { color: e, id: t, style: r } = this.props;
                    return o.createElement(s.Z, { style: [_.root, r] }, o.createElement(l.default, { style: [_.icon, e && _[e]] }), o.createElement(i.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: r } = this.props,
                        { adMetadataContainer: o, advertiser: s, advertiser_name: n, disclosure_type: a } = r,
                        l = e && s && e === s.id_str,
                        i = "string" == typeof a && "political" === a.toLowerCase(),
                        c = "string" == typeof a && "issue" === a.toLowerCase(),
                        y = !(!o || "POLITICAL" !== o.disclaimerType) || i,
                        _ = !(!o || "ISSUE" !== o.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: E } = o || {};
                    let w;
                    return (w = t || (!n || l || E ? (y ? m : _ ? h : u) : y ? p({ fullName: n }) : _ ? f({ fullName: n }) : d({ fullName: n }))), w;
                }
            }
            y.defaultProps = { color: "gray700" };
            const _ = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        537439: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => k });
            var o = r(202784),
                s = r(111677),
                n = r.n(s),
                a = r(492140),
                l = r(720600),
                i = r(761744),
                c = r(25001),
                d = r(453333),
                u = r(136483),
                m = r(98440),
                p = r(790093),
                h = r(452693),
                f = r(544367),
                y = r(264171),
                _ = r(159340),
                E = r(404971),
                w = r(262009),
                b = r(76388),
                C = r(488746),
                g = r(246492),
                I = r(520913),
                x = r(731708),
                S = r(642153),
                T = r(879891),
                L = r(392237),
                U = r(54606);
            const Z = n().ae408b76,
                P = n().j355f008,
                v = n().habf9678,
                R = n().db0798ed,
                F = n().dc716ec9,
                O = ({ text: e }) => {
                    const { direction: t } = (0, T.Z)();
                    return o.createElement(x.ZP, { dir: t, withHashflags: !0 }, e);
                },
                N = (e, t) =>
                    t
                        ? Z
                        : ((e) => {
                              const t = o.createElement(O, { text: e });
                              return o.createElement(n().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                A = L.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                D = L.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                k = ({ contextType: e, iconColor: t, iconSize: r, link: s, retweetData: n, text: x, topicData: T, userAvatarUrls: Z }) => {
                    const { isSelfRetweet: k, name: Q, screenName: B } = n || {},
                        M = ((e, t, r, s = []) => {
                            const n = A[t],
                                x = [r ? { color: L.default.theme.colors[r] } : D.colorDeepGray, n],
                                T = o.createElement(a.default, { style: x }),
                                Z = o.createElement(l.default, { style: x }),
                                P = o.createElement(i.default, { style: x }),
                                v = o.createElement(c.default, { style: x }),
                                R = o.createElement(d.default, { style: x }),
                                F = o.createElement(u.default, { style: D.circle }),
                                O = o.createElement(m.default, { style: x }),
                                N = o.createElement(p.default, { style: x }),
                                k = o.createElement(h.default, { style: x }),
                                Q = o.createElement(f.default, { style: x }),
                                B = o.createElement(y.default, { style: x }),
                                M = o.createElement(_.default, { style: x }),
                                H = o.createElement(E.default, { style: x }),
                                z = o.createElement(w.default, { style: x }),
                                G = o.createElement(b.default, { style: x }),
                                W = o.createElement(C.default, { style: x }),
                                j = o.createElement(g.default, { style: x }),
                                $ = o.createElement(S.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: s }),
                                q = o.createElement(I.default, { style: x });
                            switch (e) {
                                case U.Q.Pin:
                                case U.Q.ReplyPin:
                                    return T;
                                case U.Q.Retweet:
                                    return Z;
                                case U.Q.Like:
                                    return P;
                                case U.Q.Follow:
                                    return v;
                                case U.Q.Moment:
                                    return R;
                                case U.Q.NewTweets:
                                    return F;
                                case U.Q.Reply:
                                case U.Q.Conversation:
                                    return O;
                                case U.Q.Feedback:
                                    return N;
                                case U.Q.Topic:
                                    return k;
                                case U.Q.List:
                                    return Q;
                                case U.Q.Location:
                                    return B;
                                case U.Q.Community:
                                    return M;
                                case U.Q.Spaces:
                                    return H;
                                case U.Q.Sparkle:
                                    return z;
                                case U.Q.SocialProof:
                                case U.Q.FollowFollowed:
                                    return j;
                                case U.Q.FollowMutual:
                                    return W;
                                case U.Q.FollowFollowing:
                                    return G;
                                case U.Q.Facepile:
                                    return $;
                                case U.Q.Bird:
                                    return q;
                                case U.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, r, t, Z);
                    switch (e) {
                        case U.Q.Retweet:
                            return { Icon: M, text: x || N(Q, k), link: B ? `https://twitter.com/${B}` : void 0 };
                        case U.Q.Pin:
                            return { Icon: M, text: x || P };
                        case U.Q.ReplyPin:
                            return { Icon: M, text: v };
                        case U.Q.Topic:
                            return { Icon: M, "aria-label": "Recommendation" === T?.functionalityType || "RecWithEducation" === T?.functionalityType ? F({ topicName: x }) : R({ topicName: x }), text: x ? o.createElement(O, { text: x }) : null, link: s };
                        default:
                            return { Icon: M, text: x ? o.createElement(O, { text: x }) : null, link: s };
                    }
                };
        },
        126962: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => f });
            r(136728);
            var o = r(202784),
                s = r(325686),
                n = r(731708),
                a = r(872405),
                l = r(235902),
                i = r(392237),
                c = r(139052),
                d = r(488684),
                u = r(537439),
                m = r(54606);
            class p extends o.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: r, id: i, onLayout: c, rightControl: d, style: m, testID: p, textColor: f, textSize: y, topControl: _, weight: E, withBottomBorder: w, withLeftPadding: b, withTextCentered: C, ...g } = this.props,
                        { Icon: I, "aria-label": x, link: S, text: T } = (0, u.Z)(g),
                        L = o.createElement(n.ZP, { "aria-label": x, color: f, id: i, numberOfLines: 2, size: y, testID: p, weight: E, withoutTwemojiAndHashflags: !0 }, T),
                        { cellStyle: U, viewStyle: Z } = this._getStyles();
                    return T ? o.createElement(l.ZP.UseProps, null, (n) => o.createElement(o.Fragment, null, _ || null, o.createElement(s.Z, { onLayout: c, style: [m, Z, n.socialContextRefreshEnabled() && !b && h.socialContextRefresh] }, o.createElement(a.Z, { avatarCell: I || (b ? null : void 0), avatarCellStyle: [r, h.socialContextIconColumn, !b && h.unsetIconWidth, n.socialContextRefreshEnabled() && !b && h.socialContextRefreshIcon], avatarSize: e, cellStyle: U }, o.createElement(s.Z, { style: h.cellWrapper }, o.createElement(s.Z, { style: [h.socialContextTextColumn, n.socialContextRefreshEnabled() && !b && h.socialContextRefreshTextColumn] }, S ? this._renderLink(S, L) : L), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: r, id: s, onClick: a, retweetData: l, textColor: i, topicData: u } = this.props,
                        { screenName: p } = l || {},
                        h = o.createElement(n.ZP, { color: i, id: s, link: e, onClick: a, withoutTwemojiAndHashflags: !0 }, t);
                    return r === m.Q.Topic && u ? o.createElement(c.Z, { topicId: u.topicId }, h) : r === m.Q.Retweet && p ? o.createElement(d.Z, { screenName: p }, h) : h;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: r, withTextCentered: o } = this.props,
                        s = t === m.Q.TextOnly,
                        n = r ? [h.bottomBorderMargin, !!e && h.bottomBorder] : [],
                        a = r && !e ? [h.bottomBorder] : [];
                    return s && a.push(h.topicContext), o && a.push(h.socialContextTextCentered), { viewStyle: n, cellStyle: a };
                }
            }
            p.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const h = i.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                f = p;
        },
        54606: (e, t, r) => {
            "use strict";
            r.d(t, { Q: () => o });
            r(202784);
            const o = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        790093: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => i });
            var o = r(202784),
                s = r(890601),
                n = r(783427),
                a = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ProfileClusterFollow.65c5419a.js.map
