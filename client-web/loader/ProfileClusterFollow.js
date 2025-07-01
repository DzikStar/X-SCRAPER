(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ProfileClusterFollow"],
    {
        801301: (e) => {
            e.exports = { queryId: "IWdZXQ2Hdh_gprXkyn58ug", operationName: "SidebarUserRecommendations", operationType: "query", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        864479: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => a });
            var r = s(807896),
                o = s(202784),
                n = s(771099);
            const a = (e) => (t) => o.createElement(n.$6, null, (s) => o.createElement(e, (0, r.Z)({}, t, { isInSidebar: s })));
        },
        751154: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { ProfileClusterFollowContainer: () => R, default: () => D });
            var r = s(202784),
                o = s(325686),
                n = s(154003),
                a = s(815858),
                i = s(420412),
                d = s(844685),
                l = s(392237),
                c = s(111677),
                m = s.n(c),
                p = s(837020),
                u = s(62857),
                _ = s(409438);
            const h = m().ba5a88e4,
                f = m().a526aa66,
                E = r.createElement(p.default, null);
            class I extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleRemoveClusterFollow = () => {
                            this.props.onRemoveClusterFollow();
                        }),
                        (this._renderCloseButton = () => r.createElement(n.ZP, { icon: E, onPress: this._handleRemoveClusterFollow, size: "xSmall", type: "brandText" }));
                }
                render() {
                    const { userIds: e } = this.props;
                    return r.createElement(a.Z, { animateMount: !0, duration: "longer", show: !0, type: "slide" }, r.createElement(o.Z, { "aria-label": f, role: "complementary", style: U.root }, r.createElement(i.Z, null), r.createElement(d.Z, { rightControl: this._renderCloseButton(), text: h }), r.createElement(u.Z, { displayMode: _.Z.UserCompact, userIds: e.slice(0, 3) }), r.createElement(i.Z, null)));
                }
            }
            const U = l.default.create((e) => ({ root: { marginTop: e.spaces.space12 } }));
            var y = s(967977),
                b = s(942893),
                L = s(312771),
                S = s(71620),
                T = s(668214),
                Z = s(994305);
            const C = "profile-cluster-follow",
                O = (e, t) => t.userId,
                w = (e, t) => {
                    const s = O(0, t);
                    return Z.Ic(e, { displayLocation: C, similarToUserId: s });
                },
                P = (e, t) => {
                    const s = O(0, t);
                    return Z.UD(e, { displayLocation: C, similarToUserId: s });
                },
                v = (0, T.Z)()
                    .propsFromState(() => ({ fetchStatus: P, recommendations: w }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, S.zr)("WHO_TO_FOLLOW_CONTAINER"), fetchRecommendationsIfNeeded: Z.yY }))
                    .withAnalytics(),
                A = { component: "suggest_profile_cluster_follow", element: "user", action: "results" },
                N = { component: "suggest_profile_cluster_follow", element: "close_button", action: "click" };
            class R extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleImpression = (e) => {
                            const { analytics: t } = this.props,
                                s = e && e.slice(0, 3).map((e) => ({ ...b.Z.forUser(e.user_id), suggestion_details: { source_data: e.token } }));
                            t.scribe({ ...A, data: { items: s } });
                        }),
                        (this._handleCloseButtonImpression = () => {
                            const { analytics: e, onRemoveClusterFollow: t } = this.props;
                            e.scribe(N), t();
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
                    return this._hasLoadedUsers() ? r.createElement(I, { onRemoveClusterFollow: this._handleCloseButtonImpression, userIds: t }) : null;
                }
                _fetchRecommendations(e) {
                    const { createLocalApiErrorHandler: t, fetchRecommendationsIfNeeded: s, userId: r } = e;
                    s({ limit: 3, displayLocation: C, similarToUserId: r }).catch(t(y.C));
                }
                _hasLoadedUsers() {
                    const { fetchStatus: e, recommendations: t } = this.props;
                    return e === L.ZP.LOADED && t.length > 0;
                }
            }
            const D = v(R);
        },
        62857: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => O });
            var r = s(807896),
                o = s(202784),
                n = s(476984),
                a = s.n(n),
                i = s(111677),
                d = s.n(i),
                l = s(615656),
                c = s(290402),
                m = s(325686),
                p = s(240089),
                u = s(663550),
                _ = s(409438);
            const h = ({ displayMode: e = _.Z.UserDetailed, renderUserCell: t, userIds: s }) =>
                o.createElement(
                    m.Z,
                    { role: "list" },
                    s.map((s, r) => (t ? t(s) : o.createElement(p.ZP, { decoration: p.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: s, promotedItemType: u.bj.USER, userId: s, withFollowsYou: !0 }))),
                );
            var f = s(312771),
                E = s(71620),
                I = s(973572),
                U = s(668214),
                y = s(919022);
            const b = (e, t) => t.userIds,
                L = (e, t) => {
                    const { filterPredicate: s = (e) => !!e, userIds: r } = t;
                    return r.filter((t) => {
                        const r = y.ZP.select(e, t);
                        return !!r && s(r);
                    });
                },
                S = (e, t) => {
                    const { userIds: s } = t;
                    return s.reduce((t, s) => {
                        const r = y.ZP.selectFetchStatus(e, s);
                        return r && (t[s] = r === f.ZP.NONE ? f.ZP.LOADING : r), t;
                    }, {});
                },
                T = (0, U.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, I.Z)(L, (e) => e),
                        fetchStatus: (0, I.Z)(L, S, b, (e, t, s) => {
                            let r = f.ZP.LOADED;
                            for (let o = 0; o < s.length; o++) {
                                const n = s[o];
                                if (-1 === e.indexOf(n)) {
                                    const e = t[n] || f.ZP.LOADING;
                                    r = r === f.ZP.LOADED ? e : r;
                                }
                                if (r === f.ZP.LOADED) break;
                            }
                            return r;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, E.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: y.ZP.fetchManyIfNeeded })),
                Z = d().f5b426c2;
            class C extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: s, fetchUsersIfNeeded: n, filterPredicate: a, userIds: i, ...d } = this.props;
                            return o.createElement(h, (0, r.Z)({}, d, { userIds: e }));
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
                    return o.createElement(c.Z, { "aria-label": Z, fetchStatus: this.state.allUsersUnavailable ? f.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: s, userIds: r } = this.props;
                    s(r).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        t({
                            [l.ZP.AddressBookLookupNotFound]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                            [l.ZP.OtherUserSuspended]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                        }),
                    );
                }
            }
            const O = T(C);
        },
        967977: (e, t, s) => {
            "use strict";
            s.d(t, { C: () => n });
            var r = s(516951),
                o = s(615656);
            const n = { [o.ZP.ResourceNotFound]: { customAction: r.Z } };
        },
        694180: (e, t, s) => {
            "use strict";
            s.d(t, { cM: () => f, dS: () => h, iY: () => E });
            var r = s(370751),
                o = s(399896),
                n = s(663550),
                a = s(499627),
                i = s(917799);
            const d = {},
                l = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                m = (0, r.Z)([n.dx.IMPRESSION, n.dx.DWELL]),
                p = (0, r.Z)([n.AJ.TREND_VIEW, n.AJ.SPOTLIGHT_IMPRESSION]),
                u = (e) => ({ payload: { eventKey: e }, type: c });
            const _ = (e, t) => !!e.promotedContent[t],
                h =
                    (e) =>
                    (t, s, { api: r }) => {
                        const { event: n, impression_id: a, promoted_trend_id: d } = e,
                            c = `trend-${d}-${n}`;
                        if (p.has(n) && _(s(), c)) return Promise.resolve();
                        const m = { promoted_trend_id: d, event: n, impression_id: a };
                        return (0, i._O)(t, { params: m, request: r.withEndpoint(o.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: m }, (e, t) => {
                            if (!t && p.has(n)) return [u(c)];
                        });
                    },
                f =
                    ({ disclosureType: e, itemId: t, itemType: s, params: r }) =>
                    (n, a, { api: d }) => {
                        const { event: c, impression_id: p } = r,
                            h = `${s}-${t ?? "undefined"}-${p ?? "undefined"}-${c ?? "undefined"}`;
                        if (m.has(c) && _(a(), h)) return Promise.resolve();
                        const f = e && "earned" === e.toLowerCase() ? "1" : null,
                            E = { ...r, earned: f, epoch_ms: Date.now() };
                        return (0, i._O)(n, { params: E, request: d.withEndpoint(o.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: E }, (e, t) => {
                            if (!t && m.has(c)) return [u(h)];
                        });
                    },
                E =
                    (e) =>
                    (t, s, { api: r }) =>
                        (0, i._O)(t, { params: e, request: r.withEndpoint(o.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            a.Z.register({
                promotedContent: function (e = d, t) {
                    if (!t) return e;
                    if (t.type === c) {
                        if (!t.payload) return e;
                        const { eventKey: s } = t.payload;
                        return { ...e, [s]: !0 };
                    }
                    return e;
                },
            });
        },
        994305: (e, t, s) => {
            "use strict";
            s.d(t, { yY: () => N, UD: () => A, Ic: () => v });
            var r = s(360917),
                o = s.n(r),
                n = s(506899),
                a = s(414742),
                i = s(125199);
            const d = new n.fK.Entity("recommendations", { user: i.Z }, { idAttribute: (e) => e.user?.rest_id });
            var l = s(801301),
                c = s.n(l),
                m = s(304819);
            const p = new n.fK.Entity("recommendations", { user: m.Z }, { idAttribute: (e) => e.user?.id_str });
            var u = s(387466),
                _ = s(120071);
            const h = (e) => ({ ..._.k(e), excluded: [], pc: !0 }),
                f = ({ apiClient: e, featureSwitches: t }) => ({
                    fetch(s, r = {}) {
                        const o = { ...h(t), ...s, ...(0, u.Y)(t) };
                        return e.get("users/recommendations", o, r).then((e) => (0, n.Fv)(e, [p]));
                    },
                    fetchSidebarUserRecommendations: (t) =>
                        e
                            .graphQL(
                                c(),
                                { profileUserId: t.user_id },
                                (0, a.kj)((e) => !e.sidebar_user_recommendations, "GQL Sidebar User Recommendations: Failed to render Sidebar User Recommendations"),
                            )
                            .then((e) => {
                                const t = e.sidebar_user_recommendations ?? [];
                                return (0, n.Fv)(
                                    t.map(({ token: e, user_results: { result: t } }) => ({ token: e, user: t, user_id: t?.rest_id })).filter(({ user: e }) => e),
                                    [d],
                                );
                            }),
                });
            var E = s(499627),
                I = s(917799),
                U = s(312771),
                y = s(56519);
            const b = "recommendations",
                L = 30,
                S = "rweb/recommendations/FETCH_REQUEST",
                T = "rweb/recommendations/FETCH_SUCCESS",
                Z = "rweb/recommendations/FETCH_FAILURE",
                C = {},
                O = ({ displayLocation: e, similarToUserId: t }) => e + (t ? `_${t}` : "");
            E.Z.register({
                [b]: function (e = C, t) {
                    if (!t?.meta) return e;
                    switch (t.type) {
                        case S: {
                            const s = O(t.meta);
                            return { ...e, [s]: { ...e[s], fetchStatus: U.ZP.LOADING } };
                        }
                        case Z: {
                            const s = O(t.meta);
                            return { ...e, [s]: { ...e[s], fetchStatus: U.ZP.FAILED } };
                        }
                        case T: {
                            const s = O(t.meta),
                                r = t.payload && t.payload.entities ? t.payload.entities : { recommendations: o() },
                                n = (t.payload && t.payload.result ? t.payload.result : P).map((e) => r.recommendations[e]);
                            return { ...e, [s]: { ...e[s], fetchStatus: U.ZP.LOADED, recommendations: n } };
                        }
                        default:
                            return e;
                    }
                },
            });
            const w = [],
                P = [],
                v = (e, { displayLocation: t, similarToUserId: s }) => {
                    const r = e[b][O({ displayLocation: t, similarToUserId: s })];
                    return r && r.recommendations ? r.recommendations : w;
                },
                A = (e, { displayLocation: t, similarToUserId: s }) => {
                    const r = e[b][O({ displayLocation: t, similarToUserId: s })];
                    return r ? r.fetchStatus : U.ZP.NONE;
                },
                N = (e) => (t, s, r) => {
                    const n = s(),
                        { displayLocation: a, similarToUserId: i } = e,
                        d = v(n, { displayLocation: a, similarToUserId: i }),
                        l = A(n, { displayLocation: a, similarToUserId: i }) === U.ZP.LOADED;
                    return d && l
                        ? Promise.resolve(o())
                        : t(
                              (
                                  (e) =>
                                  (t, s, { api: r, featureSwitches: o }) => {
                                      const { displayLocation: n, itsInterests: a, limit: i = L, similarToUserId: d } = e,
                                          l = "profile_accounts_sidebar" === n && o.isTrue("rweb_recommendations_sidebar_graphql_enabled");
                                      return (0, I._O)(t, { request: l ? r.withEndpoint(f).fetchSidebarUserRecommendations : r.withEndpoint(f).fetch, params: { display_location: n, itsInterests: a, limit: i, user_id: d } })({ actionTypes: { REQUEST: S, SUCCESS: T, FAILURE: Z }, context: "FETCH_RECOMMENDATIONS", meta: { displayLocation: n, similarToUserId: d } }, (e) => {
                                          if (e && e.entities) return [(0, y.dP)(e.entities)];
                                      });
                                  }
                              )(e),
                          );
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ProfileClusterFollow.6e5c003a.js.map
