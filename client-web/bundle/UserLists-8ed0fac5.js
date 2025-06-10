"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-8ed0fac5"],
    {
        73834: (e, t, s) => {
            s.d(t, { e: () => o });
            var r = s(615656),
                i = s(51525);
            const o = { [r.ZP.GenericNotFound]: { customAction: i.vv } };
        },
        42508: (e, t, s) => {
            s.d(t, { Z: () => r });
            const r = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, t, s) => {
            s.d(t, { ZP: () => i, n5: () => n });
            var r = s(42508);
            const i = ({ displaySensitiveMedia: e, isNotFound: t, isSuspended: s, isWithheld: r, user: i, userProfileInterstitialType: n, viewerUserId: a }) => {
                    const c = !!a && a === i.id_str,
                        d = i.blocked_by,
                        l = i.blocking,
                        h = o({ displaySensitiveMedia: e, isOwnProfile: c, user: i, userProfileInterstitialType: n }),
                        u = (c || !r) && !s;
                    return { avatar: c || (!h && !t && !s && !r), badges: c || !r, description: c || (!l && !d && !h && !s && !r), followButton: !(c || d || h || t || s || r), followersYouKnow: !c && !d && !l && !h && !t && !s && !r && (i.following || !i.protected), followIndicator: !r, fullName: u, label: u, stats: c || (!d && !h && !s && !r), subscriptionsCount: c || !i.has_hidden_subscriptions_on_profile };
                },
                o = ({ displaySensitiveMedia: e, isOwnProfile: t, user: s, userProfileInterstitialType: i }) => (i === r.Z.SensitiveMedia || i === r.Z.OffensiveProfileContent) && !(t || s.following || e),
                n = ({ isOwnProfile: e, isSoftBlockEnabled: t = !1, user: s }) => {
                    const r = s.blocked_by,
                        i = s.protected && !s.following;
                    return t ? e || !i : e || (!i && !r);
                };
        },
        286e3: (e, t, s) => {
            s.d(t, { Rc: () => u, nx: () => d });
            var r = s(499627),
                i = s(576469),
                o = s(390387);
            const n = "rweb.channelsTimelineBehavior",
                a = "channelsTimelineBehavior",
                c = Object.freeze({});
            const d = (e) => e[a],
                l = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                h = (e) => ({ payload: e, type: l }),
                u =
                    ({ listId: e, useRanked: t }) =>
                    (s, r, { userPersistence: o }) => {
                        const a = r(),
                            c = { ...d(a), [e]: { useRanked: t } };
                        s(h(c));
                        const l = i.Z.select(a, e);
                        return l && l.following ? o.get(n).then((s) => o.set(n, { ...s, [e]: { useRanked: t } })) : Promise.resolve();
                    };
            r.Z.register(
                {
                    [a]: function (e = c, t) {
                        return t && t.type === l ? { ...t.payload } : e;
                    },
                },
                () =>
                    (e, t, { userPersistence: s }) =>
                        (0, o.Qb)(t())
                            ? s.get(n).then((t) => {
                                  t && e(h(t));
                              })
                            : Promise.resolve(),
            );
        },
        876963: (e, t, s) => {
            s.d(t, { Z: () => l });
            var r = s(263428),
                i = (s(585488), s(483557)),
                o = s(703710),
                n = s(750085),
                a = s(218951);
            const c = (e) => ({ getEndpoint: (e) => e.withEndpoint(i.ZP).fetchCombinedLists, getEndpointParams: ({ count: t, cursor: s }) => ({ count: t, cursor: "string" == typeof s ? s : void 0, userId: e }) }),
                d = (e) => ({ query: r.Z, variables: ({ count: t, cursor: s }, r) => ({ count: t, cursor: "string" == typeof s ? s : void 0, isListMemberTargetUserId: "0", userId: e, timelineId: `combinedListsGraphQL-${e}`, ...(0, o.d)(r.apiClient.featureSwitches) }) }),
                l = (e, t) => (0, a.Z)({ context: "FETCH_COMBINED_LISTS", formatResponse: n.Z, network: "redux" === t ? c(e) : d(e), initialFetchCount: 100, perfKey: "combinedListsGraphQL", timelineId: `combinedListsGraphQL-${e}` });
        },
        204744: (e, t, s) => {
            s.d(t, { DI: () => L, H$: () => u, OB: () => E, Ww: () => l, YB: () => h, hj: () => _, qF: () => v });
            s(901951);
            var r = s(499627),
                i = s(390387);
            const o = "recentSearches",
                n = "rweb.recentSearches",
                a =
                    (e) =>
                    (t, s, { userPersistence: r }) =>
                        r.set(n, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                c = (e, t) => {
                    let s = [];
                    if (e.user) {
                        const r = e.user;
                        s = t.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== r.id));
                    } else if (e.event) {
                        const r = e.event;
                        s = t.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== r.id));
                    } else if (e && e.keyword) {
                        const r = e.keyword;
                        s = t.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== r.query));
                    } else if (e.list) {
                        const r = e.list;
                        s = t.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== r.id));
                    } else if (e.topic) {
                        const r = e.topic;
                        s = t.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== r.id));
                    }
                    return s;
                },
                d = { fetched: !1, recentSearches: [] };
            const l = (e) => e[o].recentSearches,
                h = (e) => l(e)[0] || null,
                u = (e) => e[o].fetched,
                p = "rweb/recentSearches/INIT_FROM_CACHE",
                m = (e) => ({ type: p, payload: e }),
                f = "rweb/recentSearches/REMOVE_QUERY",
                _ =
                    (e) =>
                    (t, s, { userPersistence: r }) => {
                        t({ payload: e, type: f });
                        const o = s(),
                            n = l(o);
                        return (0, i.Qb)(o) ? t(a(n)) : Promise.resolve();
                    },
                g = "rweb/recentSearches/CLEAR_ALL",
                v =
                    () =>
                    (e, t, { userPersistence: s }) => {
                        e({ type: g });
                        const r = t(),
                            o = l(r);
                        return (0, i.Qb)(r) ? e(a(o)) : Promise.resolve();
                    },
                y = "rweb/recentSearches/ADD_QUERY",
                L =
                    (e) =>
                    (t, s, { userPersistence: r }) => {
                        t({ payload: e, type: y });
                        const o = s(),
                            n = l(o);
                        return (0, i.Qb)(o) ? t(a(n)) : Promise.resolve();
                    },
                E =
                    () =>
                    (e, t, { userPersistence: s }) => {
                        const r = t();
                        return u(r)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: s }) => {
                                  const r = t();
                                  return (0, i.Qb)(r)
                                      ? s
                                            .get(n)
                                            .then((t) => {
                                                e(m(t));
                                            })
                                            .catch(() => {
                                                e(m());
                                            })
                                      : (e(m()), Promise.resolve());
                              });
                    };
            r.Z.register({
                [o]: function (e = d, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case y: {
                            const s = t.payload,
                                r = s ? c(s, e.recentSearches) : [];
                            return r.length > 49 && r.splice(49, 1), s && r.unshift(s), { ...e, recentSearches: r };
                        }
                        case f: {
                            const s = t.payload,
                                r = s ? c(s, e.recentSearches) : [];
                            return { ...e, recentSearches: r };
                        }
                        case g:
                            return { fetched: !0, recentSearches: [] };
                        case p:
                            return { ...e, ...t.payload, fetched: !0 };
                        default:
                            return e;
                    }
                },
            });
        },
        783284: (e, t, s) => {
            s.d(t, { Z: () => n });
            var r = s(644829),
                i = s(750085),
                o = s(218951);
            function n(e) {
                return (0, o.Z)({ timelineId: "list-search-timeline", context: "FETCH_LIST_SEARCH_TIMELINE", formatResponse: i.Z, network: { getEndpointParams: ({ count: t, cursor: s }) => ({ count: t, cursor: "string" == typeof s ? s : void 0, rawQuery: e }), getEndpoint: (e) => e.withEndpoint(r.Z).fetchListSearch }, perfKey: "list-search" });
            }
        },
        412171: (e, t, s) => {
            s.d(t, { Z: () => n });
            var r = s(483557),
                i = s(750085),
                o = s(218951);
            const n = () => (0, o.Z)({ timelineId: "listsDiscoveryGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchSuggestedLists, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_LISTS_DISCOVERY", perfKey: "listsDiscoveryGraphQL", formatResponse: i.Z });
        },
        688781: (e, t, s) => {
            s.d(t, { DK: () => d, ZP: () => a, i7: () => c });
            s(136728);
            var r = s(483557),
                i = s(750085),
                o = s(466015),
                n = s(218951);
            const a = ({ displayLocation: e, listDescription: t, listId: s, listName: o }) => (0, n.Z)({ timelineId: `listSuggestedUsers-graphQL-${s}`, network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchRecommendedUsersGraphQL, getEndpointParams: ({ count: t, cursor: r }) => ({ listId: s, count: t, cursor: "string" == typeof r ? r : void 0, displayLocation: e }) }, formatResponse: i.Z, context: "FETCH_LIST_SUGGESTED_USERS_GRAPHQL", perfKey: "suggestedUsersGraphQL" }),
                c = (e, t) => (s) => {
                    const r = (0, o.OD)(e),
                        i = (0, o.$0)({ entryId: r, id: e, sortIndex: Date.now().toString() });
                    s(t.injectEntry(i));
                },
                d = (e, t, s) => (r) => {
                    const i = [];
                    s.map((s) => {
                        i.push(e.removeEntry((0, o.OD)(s))), i.push(t.injectEntry((0, o.$0)({ id: s, sortIndex: Date.now().toString() })));
                    }),
                        r(i);
                };
        },
        506653: (e, t, s) => {
            s.d(t, { Z: () => n });
            var r = s(483557),
                i = s(750085),
                o = s(218951);
            const n = ({ listId: e, useRanked: t = !1 }) => (0, o.Z)({ timelineId: a({ listId: e, useRanked: t }), network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchTweetsGraphQL, getEndpointParams: ({ count: s, cursor: r }) => ({ listId: e, count: s, cursor: "string" == typeof r ? r : void 0, useRanked: t }) }, formatResponse: i.Z, context: "FETCH_LIST_TIMELINE_GRAPHQL", perfKey: "listTweetsGraphQL" });
            function a({ listId: e, useRanked: t = !1 }) {
                return `listTweets-GraphQL-${e}-${t ? "ranked" : "latest"}`;
            }
        },
        306518: (e, t, s) => {
            s.r(t), s.d(t, { ListRedirect: () => f, default: () => _ });
            var r = s(202784),
                i = s(73834),
                o = s(503229),
                n = s(312771),
                a = s(923128),
                c = s(615027),
                d = s(71620),
                l = s(668214),
                h = s(576469),
                u = s(510588);
            const p = (e, t) => {
                    const { match: s } = t;
                    return s && s.params && s.params.slugSubroute ? s.params.slugSubroute : void 0;
                },
                m = (0, l.Z)()
                    .propsFromState(() => ({ listId: u.Wy, screenName: u.ax, slug: u.Ge, fetchStatus: u.DV, subroute: p }))
                    .propsFromActions(() => ({ fetchListIfNeeded: h.Z.fetchOneIfNeeded, createLocalApiErrorHandler: (0, d.zr)("LISTS_REDIRECT") }));
            class f extends r.Component {
                constructor(e) {
                    super(e),
                        (this._handleListFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchListIfNeeded: t, listId: s, screenName: r, slug: o } = this.props;
                            t(s || "", r && o ? { screenName: r, slug: o } : {}).catch((t) => {
                                e(i.e)(t), this.setState({ fetchStatus: n.ZP.FAILED });
                            });
                        }),
                        (this.state = { fetchStatus: this.props.fetchStatus });
                }
                componentDidMount() {
                    this._handleListFetch();
                }
                render() {
                    const { history: e, listId: t, location: s, match: i, subroute: o } = this.props;
                    if (t) {
                        const e = o ? `/i/lists/${t}/${o}` : `/i/lists/${t}`;
                        return r.createElement(c.Z, { status: void 0, to: e });
                    }
                    return r.createElement(a.Z, { history: e, location: s, match: i });
                }
            }
            const _ = m((0, o.Z)(f));
        },
        234045: (e, t, s) => {
            s.r(t), s.d(t, { AddListMemberScreen: () => Q, default: () => O });
            var r = s(202784),
                i = s(154003),
                o = s(952428),
                n = s(731708),
                a = s(457311),
                c = s(392237),
                d = s(111677),
                l = s.n(d),
                h = s(912021),
                u = s(980407),
                p = s(810641),
                m = s(615027),
                f = s(49128),
                _ = s(24949),
                g = s(71620),
                v = s(668214),
                y = s(576469),
                L = s(206795),
                E = s(390387),
                b = s(601576),
                I = s(164692),
                S = s(919022);
            const T = [],
                w = (e, t) => {
                    const s = k(e, t),
                        r = s && s.id_str;
                    return r ? L.g$(e, r) : T;
                },
                Z = (e, t) => E._h(e),
                P = (e, t) => !(R(e, t) && t.location?.state?.fromApp),
                R = (e, t) => {
                    const s = k(e, t);
                    return s?.id_str;
                },
                k = (e, t) => {
                    const s = t.location && t.location.state && t.location.state.userId;
                    return s ? S.ZP.select(e, s) : void 0;
                },
                C = (0, v.Z)()
                    .propsFromState(() => ({ shouldRedirect: P, viewerUser: S.ZP.selectViewerUser, membershipListIds: (0, _.P1)(w, (e) => e), module: (0, _.P1)(Z, R, (e, t) => (e && t ? (0, I.Z)(e, t) : void 0)), user: k }))
                    .propsFromActions(() => ({ addToast: b.fz, addUserToList: y.Z.addUserToList, toggleIsMember: y.Z.toggleIsMember, createLocalApiErrorHandler: (0, g.zr)("ADD_LIST_MEMBER_SCREEN"), fetchMembershipsIfNeeded: L.NU, removeUserFromList: y.Z.removeUserFromList }))
                    .withAnalytics({ page: "lists", section: "add_member" }),
                A = l().i2209530,
                F = l().c7e11484,
                U = l().a96208ba,
                M = l().c09609d8,
                D = l().d2826908,
                x = l().he062e8a,
                N = l().c2fb1e94;
            class Q extends r.Component {
                constructor(e) {
                    super(e),
                        (this._renderRightControl = () => {
                            const { listsToAddTo: e, listsToRemoveFrom: t } = this.state;
                            return r.createElement(i.ZP, { disabled: 0 === e.length && 0 === t.length, onPress: this._handleSave, size: "small", style: H.button, type: "primaryFilled" }, A);
                        }),
                        (this._renderCreateListElement = () => {
                            const e = this._getTypeaheadUserItem();
                            return r.createElement(o.Z, { link: { pathname: "/i/lists/create", state: { suggestedUser: e } }, style: H.createList }, r.createElement(n.ZP, { color: "link", selectable: !1 }, D));
                        }),
                        (this._getEntryConfiguration = (0, h.Z)(() => (0, f.Z)({ role: "checkbox", onClick: this._handleListClick }))),
                        (this._getIsUserInList = (e) => {
                            const { membershipListIds: t } = this.props,
                                { listsToAddTo: s, listsToRemoveFrom: r } = this.state;
                            return (t && t.indexOf(e) > -1 && !this._containsListId(r, e)) || this._containsListId(s, e);
                        }),
                        (this._containsListId = (e, t) => e.indexOf(t) > -1),
                        (this._getTypeaheadUserItem = () => {
                            const { user: e } = this.props;
                            return e ? { can_dm: e.can_dm, can_media_tag: e.can_media_tag, id_str: e.id_str, name: e.name, profile_image_url_https: e.profile_image_url_https, protected: e.protected, screen_name: e.screen_name, social_context: { following: e.following, followed_by: e.followed_by }, verified: e.verified } : void 0;
                        }),
                        (this._handleListClick = (e, { listId: t, member_count: s }) => {
                            const { toggleIsMember: r, user: i } = this.props;
                            if ((e.stopPropagation(), e.preventDefault(), i)) {
                                const e = i.id_str;
                                this._getIsUserInList(t) ? this._handleRemoveListMember(t) : this._handleAddListMember(t, s), r({ targetUserId: e, listId: t });
                            }
                        }),
                        (this._handleClose = () => {
                            const { history: e, user: t } = this.props,
                                s = t && `/${t.screen_name}`;
                            e.goBack({ backLocation: s });
                        }),
                        (this._handleRemoveListMember = (e) => {
                            const { membershipListIds: t } = this.props;
                            e && t && (t.indexOf(e) > -1 ? this.setState({ listsToRemoveFrom: this.state.listsToRemoveFrom.concat(e) }) : this.setState({ listsToAddTo: this.state.listsToAddTo.filter((t) => t !== e) }));
                        }),
                        (this._handleAddListMember = (e, t) => {
                            const { addToast: s, membershipListIds: r } = this.props;
                            e && r && (t < 5e3 ? (r.indexOf(e) > -1 ? this.setState({ listsToRemoveFrom: this.state.listsToRemoveFrom.filter((t) => t !== e) }) : this.setState({ listsToAddTo: this.state.listsToAddTo.concat(e) })) : s({ text: N }));
                        }),
                        (this._handleSave = () => {
                            this._handleSaveAddToLists(), this._handleSaveRemoveFromLists(), this.setState({ saved: !0 }), this._handleClose();
                        }),
                        (this._handleSaveAddToLists = () => {
                            const { addUserToList: e, createLocalApiErrorHandler: t, user: s } = this.props,
                                { listsToAddTo: r } = this.state;
                            r.forEach((r) => {
                                r && s && e(r, { userId: s.id_str }).catch(t({}));
                            });
                        }),
                        (this._renderEmptyState = () => r.createElement(a.Z, { buttonLink: "/i/lists/create", buttonText: M, header: F, message: U })),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchMembershipsIfNeeded: t, user: s } = this.props;
                            s && t(s.id_str, { user_id: s.id_str, count: 1e3, filter_to_owned_lists: !0 }).catch(e());
                        }),
                        (this.state = { listsToAddTo: [], listsToRemoveFrom: [], saved: !1 });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                componentWillUnmount() {
                    const { toggleIsMember: e, user: t } = this.props,
                        { listsToAddTo: s, listsToRemoveFrom: r, saved: i } = this.state;
                    if (t && !i) {
                        const i = t.id_str;
                        [...s, ...r].forEach((t) => {
                            e({ targetUserId: i, listId: t });
                        });
                    }
                }
                render() {
                    const { history: e, module: t, shouldRedirect: s, viewerUser: i } = this.props;
                    if (s) {
                        const e = i ? `/${i.screen_name}/lists` : "/";
                        return r.createElement(m.Z, { to: e });
                    }
                    return t ? r.createElement(u.Z, { backLocation: i ? `/${i.screen_name}/lists` : "/", history: e, rightControl: this._renderRightControl(), title: x }, r.createElement(p.Z, { entryConfiguration: this._getEntryConfiguration(), header: this._renderCreateListElement(), module: t, renderEmptyState: this._renderEmptyState, title: x })) : null;
                }
                _handleSaveRemoveFromLists() {
                    const { createLocalApiErrorHandler: e, removeUserFromList: t, user: s } = this.props,
                        { listsToRemoveFrom: r } = this.state;
                    r.forEach((r) => {
                        r && s && t(r, { userId: s.id_str }).catch(e({}));
                    });
                }
            }
            const H = c.default.create((e) => ({ createList: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, emptyItem: { display: "inline-block", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space32 }, button: { marginStart: e.spaces.space12 } })),
                O = C(Q);
        },
        869701: (e, t, s) => {
            s.r(t), s.d(t, { CreateListScreen: () => v, default: () => y });
            var r = s(202784),
                i = s(154003),
                o = s(111677),
                n = s.n(o),
                a = s(980407),
                c = s(737613),
                d = s(583957),
                l = s(125363),
                h = s(390387),
                u = s(668214);
            const p = (e, t) => t.location.state?.suggestedUser,
                m = (0, u.Z)()
                    .propsFromState(() => ({ suggestedUser: p }))
                    .withAnalytics({ page: "spheres_create_form" }),
                f = "CREATE_LIST_SCREEN",
                _ = n().c1df579e,
                g = n().d2826908;
            function v(e) {
                const t = r.useRef(),
                    [s, o] = r.useState(!1),
                    [n, u] = r.useState(!1),
                    p = (0, l.v9)(h.Lz),
                    m = !s || n,
                    { analytics: v, history: y, location: L, suggestedUser: E } = e;
                return r.createElement(
                    a.Z,
                    {
                        backButtonType: E ? "back" : "close",
                        history: y,
                        onBackClick: (e) => {
                            v.scribeAction("cancel"), y.goBack();
                        },
                        rightControl: r.createElement(
                            i.ZP,
                            {
                                "aria-label": _,
                                disabled: m,
                                onPress: () => {
                                    u(!0), t.current && t.current.create();
                                },
                                size: "small",
                                type: "primaryFilled",
                            },
                            _,
                        ),
                        title: g,
                    },
                    p ? r.createElement(c.Z, { type: "List" }) : null,
                    r.createElement(d.Z, {
                        context: f,
                        history: y,
                        location: L,
                        onChange: (e) => {
                            o(e);
                        },
                        onError: () => {
                            u(!1);
                        },
                        ref: t,
                    }),
                );
            }
            const y = m(v);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-8ed0fac5.e1a13ada.js.map
