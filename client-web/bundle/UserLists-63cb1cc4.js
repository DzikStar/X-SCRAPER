"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-63cb1cc4"],
    {
        306518: (e, a, d) => {
            d.r(a), d.d(a, { ListRedirect: () => b, default: () => M });
            var r = d(202784),
                o = d(73834),
                s = d(503229),
                n = d(312771),
                l = d(923128),
                t = d(615027),
                i = d(71620),
                c = d(668214),
                u = d(576469),
                h = d(510588);
            const m = (e, a) => {
                    const { match: d } = a;
                    return d && d.params && d.params.slugSubroute ? d.params.slugSubroute : void 0;
                },
                D = (0, c.Z)()
                    .propsFromState(() => ({ listId: h.Wy, screenName: h.ax, slug: h.Ge, fetchStatus: h.DV, subroute: m }))
                    .propsFromActions(() => ({ fetchListIfNeeded: u.Z.fetchOneIfNeeded, createLocalApiErrorHandler: (0, i.zr)("LISTS_REDIRECT") }));
            class b extends r.Component {
                constructor(e) {
                    super(e),
                        (this._handleListFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchListIfNeeded: a, listId: d, screenName: r, slug: s } = this.props;
                            a(d || "", r && s ? { screenName: r, slug: s } : {}).catch((a) => {
                                e(o.e)(a), this.setState({ fetchStatus: n.ZP.FAILED });
                            });
                        }),
                        (this.state = { fetchStatus: this.props.fetchStatus });
                }
                componentDidMount() {
                    this._handleListFetch();
                }
                render() {
                    const { history: e, listId: a, location: d, match: o, subroute: s } = this.props;
                    if (a) {
                        const e = s ? `/i/lists/${a}/${s}` : `/i/lists/${a}`;
                        return r.createElement(t.Z, { status: void 0, to: e });
                    }
                    return r.createElement(l.Z, { history: e, location: d, match: o });
                }
            }
            const M = D((0, s.Z)(b));
        },
        234045: (e, a, d) => {
            d.r(a), d.d(a, { AddListMemberScreen: () => B, default: () => O });
            var r = d(202784),
                o = d(154003),
                s = d(952428),
                n = d(731708),
                l = d(457311),
                t = d(392237),
                i = d(111677),
                c = d.n(i),
                u = d(912021),
                h = d(980407),
                m = d(810641),
                D = d(615027),
                b = d(49128),
                M = d(24949),
                p = d(71620),
                f = d(668214),
                A = d(576469),
                S = d(206795),
                y = d(390387),
                _ = d(601576),
                I = d(164692),
                g = d(919022);
            const w = [],
                E = (e, a) => {
                    const d = L(e, a),
                        r = d && d.id_str;
                    return r ? S.g$(e, r) : w;
                },
                v = (e, a) => y._h(e),
                k = (e, a) => !(P(e, a) && a.location?.state?.fromApp),
                P = (e, a) => {
                    const d = L(e, a);
                    return d?.id_str;
                },
                L = (e, a) => {
                    const d = a.location && a.location.state && a.location.state.userId;
                    return d ? g.ZP.select(e, d) : void 0;
                },
                Z = (0, f.Z)()
                    .propsFromState(() => ({ shouldRedirect: k, viewerUser: g.ZP.selectViewerUser, membershipListIds: (0, M.P1)(E, (e) => e), module: (0, M.P1)(v, P, (e, a) => (e && a ? (0, I.Z)(e, a) : void 0)), user: L }))
                    .propsFromActions(() => ({ addToast: _.fz, addUserToList: A.Z.addUserToList, toggleIsMember: A.Z.toggleIsMember, createLocalApiErrorHandler: (0, p.zr)("ADD_LIST_MEMBER_SCREEN"), fetchMembershipsIfNeeded: S.NU, removeUserFromList: A.Z.removeUserFromList }))
                    .withAnalytics({ page: "lists", section: "add_member" }),
                C = c().i2209530,
                N = c().c7e11484,
                R = c().a96208ba,
                T = c().c09609d8,
                U = c().d2826908,
                F = c().he062e8a,
                x = c().c2fb1e94;
            class B extends r.Component {
                constructor(e) {
                    super(e),
                        (this._renderRightControl = () => {
                            const { listsToAddTo: e, listsToRemoveFrom: a } = this.state;
                            return r.createElement(o.ZP, { disabled: 0 === e.length && 0 === a.length, onPress: this._handleSave, size: "small", style: H.button, type: "primaryFilled" }, C);
                        }),
                        (this._renderCreateListElement = () => {
                            const e = this._getTypeaheadUserItem();
                            return r.createElement(s.Z, { link: { pathname: "/i/lists/create", state: { suggestedUser: e } }, style: H.createList }, r.createElement(n.ZP, { color: "link", selectable: !1 }, U));
                        }),
                        (this._getEntryConfiguration = (0, u.Z)(() => (0, b.Z)({ role: "checkbox", onClick: this._handleListClick }))),
                        (this._getIsUserInList = (e) => {
                            const { membershipListIds: a } = this.props,
                                { listsToAddTo: d, listsToRemoveFrom: r } = this.state;
                            return (a && a.indexOf(e) > -1 && !this._containsListId(r, e)) || this._containsListId(d, e);
                        }),
                        (this._containsListId = (e, a) => e.indexOf(a) > -1),
                        (this._getTypeaheadUserItem = () => {
                            const { user: e } = this.props;
                            return e ? { can_dm: e.can_dm, can_media_tag: e.can_media_tag, id_str: e.id_str, name: e.name, profile_image_url_https: e.profile_image_url_https, protected: e.protected, screen_name: e.screen_name, social_context: { following: e.following, followed_by: e.followed_by }, verified: e.verified } : void 0;
                        }),
                        (this._handleListClick = (e, { listId: a, member_count: d }) => {
                            const { toggleIsMember: r, user: o } = this.props;
                            if ((e.stopPropagation(), e.preventDefault(), o)) {
                                const e = o.id_str;
                                this._getIsUserInList(a) ? this._handleRemoveListMember(a) : this._handleAddListMember(a, d), r({ targetUserId: e, listId: a });
                            }
                        }),
                        (this._handleClose = () => {
                            const { history: e, user: a } = this.props,
                                d = a && `/${a.screen_name}`;
                            e.goBack({ backLocation: d });
                        }),
                        (this._handleRemoveListMember = (e) => {
                            const { membershipListIds: a } = this.props;
                            e && a && (a.indexOf(e) > -1 ? this.setState({ listsToRemoveFrom: this.state.listsToRemoveFrom.concat(e) }) : this.setState({ listsToAddTo: this.state.listsToAddTo.filter((a) => a !== e) }));
                        }),
                        (this._handleAddListMember = (e, a) => {
                            const { addToast: d, membershipListIds: r } = this.props;
                            e && r && (a < 5e3 ? (r.indexOf(e) > -1 ? this.setState({ listsToRemoveFrom: this.state.listsToRemoveFrom.filter((a) => a !== e) }) : this.setState({ listsToAddTo: this.state.listsToAddTo.concat(e) })) : d({ text: x }));
                        }),
                        (this._handleSave = () => {
                            this._handleSaveAddToLists(), this._handleSaveRemoveFromLists(), this.setState({ saved: !0 }), this._handleClose();
                        }),
                        (this._handleSaveAddToLists = () => {
                            const { addUserToList: e, createLocalApiErrorHandler: a, user: d } = this.props,
                                { listsToAddTo: r } = this.state;
                            r.forEach((r) => {
                                r && d && e(r, { userId: d.id_str }).catch(a({}));
                            });
                        }),
                        (this._renderEmptyState = () => r.createElement(l.Z, { buttonLink: "/i/lists/create", buttonText: T, header: N, message: R })),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchMembershipsIfNeeded: a, user: d } = this.props;
                            d && a(d.id_str, { user_id: d.id_str, count: 1e3, filter_to_owned_lists: !0 }).catch(e());
                        }),
                        (this.state = { listsToAddTo: [], listsToRemoveFrom: [], saved: !1 });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                componentWillUnmount() {
                    const { toggleIsMember: e, user: a } = this.props,
                        { listsToAddTo: d, listsToRemoveFrom: r, saved: o } = this.state;
                    if (a && !o) {
                        const o = a.id_str;
                        [...d, ...r].forEach((a) => {
                            e({ targetUserId: o, listId: a });
                        });
                    }
                }
                render() {
                    const { history: e, module: a, shouldRedirect: d, viewerUser: o } = this.props;
                    if (d) {
                        const e = o ? `/${o.screen_name}/lists` : "/";
                        return r.createElement(D.Z, { to: e });
                    }
                    return a ? r.createElement(h.Z, { backLocation: o ? `/${o.screen_name}/lists` : "/", history: e, rightControl: this._renderRightControl(), title: F }, r.createElement(m.Z, { entryConfiguration: this._getEntryConfiguration(), header: this._renderCreateListElement(), module: a, renderEmptyState: this._renderEmptyState, title: F })) : null;
                }
                _handleSaveRemoveFromLists() {
                    const { createLocalApiErrorHandler: e, removeUserFromList: a, user: d } = this.props,
                        { listsToRemoveFrom: r } = this.state;
                    r.forEach((r) => {
                        r && d && a(r, { userId: d.id_str }).catch(e({}));
                    });
                }
            }
            const H = t.default.create((e) => ({ createList: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, emptyItem: { display: "inline-block", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space32 }, button: { marginStart: e.spaces.space12 } })),
                O = Z(B);
        },
        869701: (e, a, d) => {
            d.r(a), d.d(a, { CreateListScreen: () => f, default: () => A });
            var r = d(202784),
                o = d(154003),
                s = d(111677),
                n = d.n(s),
                l = d(980407),
                t = d(737613),
                i = d(583957),
                c = d(125363),
                u = d(390387),
                h = d(668214);
            const m = (e, a) => a.location.state?.suggestedUser,
                D = (0, h.Z)()
                    .propsFromState(() => ({ suggestedUser: m }))
                    .withAnalytics({ page: "spheres_create_form" }),
                b = "CREATE_LIST_SCREEN",
                M = n().c1df579e,
                p = n().d2826908;
            function f(e) {
                const a = r.useRef(),
                    [d, s] = r.useState(!1),
                    [n, h] = r.useState(!1),
                    m = (0, c.v9)(u.Lz),
                    D = !d || n,
                    { analytics: f, history: A, location: S, suggestedUser: y } = e;
                return r.createElement(
                    l.Z,
                    {
                        backButtonType: y ? "back" : "close",
                        history: A,
                        onBackClick: (e) => {
                            f.scribeAction("cancel"), A.goBack();
                        },
                        rightControl: r.createElement(
                            o.ZP,
                            {
                                "aria-label": M,
                                disabled: D,
                                onPress: () => {
                                    h(!0), a.current && a.current.create();
                                },
                                size: "small",
                                type: "primaryFilled",
                            },
                            M,
                        ),
                        title: p,
                    },
                    m ? r.createElement(t.Z, { type: "List" }) : null,
                    r.createElement(i.Z, {
                        context: b,
                        history: A,
                        location: S,
                        onChange: (e) => {
                            s(e);
                        },
                        onError: () => {
                            h(!1);
                        },
                        ref: a,
                    }),
                );
            }
            const A = D(f);
        },
        260114: (e, a, d) => {
            d.r(a), d.d(a, { ListInfoScreen: () => F, default: () => B });
            var r = d(202784),
                o = d(325686),
                s = d(107267),
                n = d(779610),
                l = d(154003),
                t = d(242454),
                i = d(190286),
                c = d(392237),
                u = d(111677),
                h = d.n(u),
                m = d(187669),
                D = d(290402),
                b = d(980407),
                M = d(443781),
                p = d(737613),
                f = d(583957),
                A = d(73834),
                S = d(538327),
                y = d(725516),
                _ = d(125363),
                I = d(390387),
                g = d(615027),
                w = d(71620),
                E = d(668214),
                v = d(576469),
                k = d(510588);
            const P = (0, E.Z)()
                    .propsFromState(() => ({ basePath: k.$5, fetchStatus: k.DV, list: k.Fz, listId: k.xh, screenName: k.ax }))
                    .adjustStateProps(({ basePath: e, fetchStatus: a, list: d, listId: r, screenName: o }) => ({ authorId: d?.user, basePath: e, fetchStatus: a, list: d, listId: r, screenName: o }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, w.zr)("LIST_EDIT_SCREEN"), deleteList: v.Z.deleteList, fetchListIfNeeded: v.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "spheres_edit_form" }),
                L = h().c4d7650c,
                Z = h().b772cd66,
                C = h().ca5d0a82,
                N = h().h7f2418c,
                R = h().b18e5cd2,
                T = h().cdd73e9c,
                U = { confirmButtonLabel: h().d96cf7ce, headline: h().def8ff62, text: h().j8b9cde8 },
                F = (e) => {
                    const a = (0, y.z)(),
                        d = (0, s.useLocation)(),
                        c = (0, s.useHistory)(),
                        u = r.useRef(null),
                        [h, w] = r.useState(!1),
                        [E, v] = r.useState(!1),
                        { viewerUserId: k } = r.useContext(M.rC),
                        P = (0, _.v9)(I.Lz),
                        { authorId: F, basePath: B, createLocalApiErrorHandler: H, deleteList: O, fetchListIfNeeded: V, fetchStatus: z, list: $, listId: q, screenName: W } = e,
                        j = r.useCallback(() => {
                            V(q).catch(H(A.e));
                        }, [H, V, q]);
                    (0, m.q)(() => {
                        j();
                    });
                    const G = r.useCallback(() => {
                            a.scribe({ element: "delete", action: "click" }),
                                O(q)
                                    .then(() => W && c.replace(`/${W}/lists/`))
                                    .catch((e) => {
                                        H({ defaultToast: { text: R }, showToast: !0 })(e), v(!1);
                                    });
                        }, [a, H, O, c, q, W]),
                        X = r.useMemo(() => ({ pathname: `${B}/members`, state: { previousStep: S.O.Edit } }), [B]),
                        Q = r.useCallback(() => {
                            a.scribe({ element: "manage", action: "click" });
                        }, [a]),
                        K = r.useCallback(() => r.createElement(o.Z, { style: x.topBorder }, r.createElement(n.Z, { label: L, link: X, onPress: Q })), [Q, X]),
                        J = r.useCallback(() => r.createElement(r.Fragment, null, r.createElement(o.Z, { style: x.mainSettings }, r.createElement(f.Z, { context: "LIST_EDIT_SCREEN", history: c, list: $, listId: q, location: d, onChange: Y, ref: u })), K(), r.createElement(t.Z, { color: "red500", label: T, onPress: ae }), E && r.createElement(i.Z, { confirmButtonLabel: U.confirmButtonLabel, confirmButtonType: "destructiveFilled", headline: U.headline, onCancel: de, onConfirm: G, text: U.text })), [G, c, $, q, d, K, E]);
                    function Y(e) {
                        w(e);
                    }
                    function ee() {
                        u.current && u.current.save();
                    }
                    function ae() {
                        v(!0);
                    }
                    function de() {
                        v(!1);
                    }
                    return F === k
                        ? r.createElement(
                              b.Z,
                              {
                                  history: c,
                                  onBackClick: function () {
                                      a.scribeAction("cancel"), c.goBack();
                                  },
                                  rightControl: r.createElement(l.ZP, { "aria-label": Z, disabled: !h, onPress: ee, size: "small", type: "primaryFilled" }, Z),
                                  title: C,
                              },
                              P ? r.createElement(p.Z, { type: "List" }) : null,
                              r.createElement(D.Z, { "aria-label": N, fetchStatus: z, onRequestRetry: j, render: J }),
                          )
                        : r.createElement(g.Z, { to: B });
                },
                x = c.default.create((e) => ({ mainSettings: { backgroundColor: e.colors.cellBackground }, topBorder: { borderTopWidth: e.borderWidths.small, borderTopStyle: "solid", borderTopColor: e.colors.borderColor } })),
                B = P(F);
        },
        435028: (e, a, d) => {
            d.r(a), d.d(a, { ListSubscribersScreen: () => S, default: () => y });
            var r = d(202784),
                o = d(457311),
                s = d(111677),
                n = d.n(s),
                l = d(980407),
                t = d(810641),
                i = d(24949),
                c = d(71620),
                u = d(668214),
                h = d(576469),
                m = d(78259),
                D = d(510588);
            const b = (0, u.Z)()
                    .propsFromState(() => ({ listId: D.xh, module: (0, i.P1)(D.xh, (e) => (0, m.Z)(e)) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, c.zr)("LIST_SUBSCRIBERS_SCREEN"), fetchListIfNeeded: h.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "spheres_detail", section: "subscribers" }),
                M = n().d1461f1e,
                p = n().bcbd3416,
                f = n().b197a56c,
                A = n().b197a56c;
            class S extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._noItemsRenderer = () => r.createElement(o.Z, { header: M, message: p })),
                        (this._handleListFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchListIfNeeded: a, listId: d } = this.props;
                            a(d).catch(e());
                        });
                }
                componentDidMount() {
                    this._handleListFetch();
                }
                render() {
                    const { history: e, module: a } = this.props;
                    return r.createElement(l.Z, { history: e, title: f }, r.createElement(t.Z, { module: a, renderEmptyState: this._noItemsRenderer, title: A }));
                }
            }
            const y = b(S);
        },
        197503: (e, a, d) => {
            d.r(a), d.d(a, { ListMembersScreen: () => y, default: () => _ });
            var r = d(202784),
                o = d(457311),
                s = d(111677),
                n = d.n(s),
                l = d(912021),
                t = d(370751),
                i = d(810641);
            const c = (e, a) => (e && e.id_str === a) || !1;
            var u = d(566741),
                h = d(71620),
                m = d(668214),
                D = d(390387),
                b = d(780936),
                M = d(510588);
            const p = (0, m.Z)()
                    .propsFromState(() => ({ author: M.l1, viewerUserId: D._h, listId: M.xh }))
                    .propsFromActions(() => ({ cleanupRemovedMembers: b.A, createLocalApiErrorHandler: (0, h.zr)("LIST_MEMBERS_SCREEN") }))
                    .withAnalytics({ section: "members" }),
                f = n().a332103e,
                A = n().d1461f1e,
                S = n().h9ce3406;
            class y extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._noItemsRenderer = () => r.createElement(o.Z, { header: A, message: f })),
                        (this.state = { removedUsers: new Set() }),
                        (this._getEntryConfiguration = () => {
                            const { author: e, listId: a, viewerUserId: d } = this.props,
                                { removedUsers: r } = this.state;
                            return this._getMemoizedEntryConfiguraton(e, a, d, r, this._isCurrentMember, this._onAdd, this._onRemove);
                        }),
                        (this._getMemoizedEntryConfiguraton = (0, l.Z)((e, a, d, r, o, s, n) => (0, u.Z)({ getIsMember: o, listId: a, isListAuthor: c(e, d), onAdd: s, onRemove: n }))),
                        (this._isCurrentMember = (e) => !this.state.removedUsers.has(e)),
                        (this._onAdd = (e) => {
                            const a = (0, t.Z)([...this.state.removedUsers]);
                            a.delete(e), this.setState({ removedUsers: a });
                        }),
                        (this._onRemove = (e) => {
                            const a = (0, t.Z)([...this.state.removedUsers]);
                            a.add(e), this.setState({ removedUsers: a });
                        });
                }
                componentWillUnmount() {
                    const { cleanupRemovedMembers: e, module: a } = this.props,
                        { removedUsers: d } = this.state;
                    e(a, d);
                }
                render() {
                    const { module: e } = this.props;
                    return r.createElement(i.Z, { entryConfiguration: this._getEntryConfiguration(), module: e, renderEmptyState: this._noItemsRenderer, title: S });
                }
            }
            const _ = p(y);
        },
        523646: (e, a, d) => {
            d.r(a), d.d(a, { ListSuggestionsScreen: () => R, default: () => U });
            var r = d(202784),
                o = d(325686),
                s = d(457311),
                n = d(834324),
                l = d(392237),
                t = d(111677),
                i = d.n(t),
                c = d(47086),
                u = d(912021),
                h = d(370751),
                m = d(443781),
                D = d(810641),
                b = d(874088),
                M = d(293115),
                p = d(339110),
                f = d(312771),
                A = d(566741),
                S = d(71620),
                y = d(668214),
                _ = d(688781),
                I = d(919022),
                g = d(510588);
            const w = (e, { suggestedUsersModule: a }) => a.selectInitialFetchStatus(e),
                E = (0, y.Z)()
                    .propsFromState(() => ({ suggestionsFetchStatus: w, list: g.Fz ?? void 0, listId: g.xh }))
                    .propsFromActions(() => ({ cleanupAddedUsers: _.DK, createLocalApiErrorHandler: (0, S.zr)("LIST_SUGGESTED_USERS_SCREEN"), fetchUserIfNeeded: I.ZP.fetchOneIfNeeded, injectSuggestedUser: _.i7 }))
                    .withAnalytics({ section: "suggested" }),
                v = i().fc9dd578,
                k = i().e2f7dc62,
                P = i().gc23cc00,
                L = i().e3deb126,
                Z = i().c2fb1e94,
                C = { section: "search" },
                N = [p.my.Users];
            class R extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { addedUsers: new Set(), query: "", showListMemberExceededMessage: !1 }),
                        (this._noItemsRenderer = () => r.createElement(s.Z, { header: k, message: P })),
                        (this._getMemoizedAddRemoveDecorations = (0, u.Z)((e, a, d, r, o) => (0, A.m)({ getIsMember: (e) => d.has(e), shouldAddUserToList: e, listId: a, onAdd: r, onRemove: o }))),
                        (this._getMemoizedEntryConfiguration = (0, u.Z)((e, a, d, r, o, s) => (0, A.Z)({ getIsMember: r, shouldAddUserToList: d, listId: e, isListAuthor: !0, onAdd: o, onRemove: s }))),
                        (this._isListMemberCountValid = () => {
                            const { list: e } = this.props;
                            return !e || e.member_count < 5e3;
                        }),
                        (this._isCurrentMember = (e) => this.state.addedUsers.has(e)),
                        (this._onAdd = (e) => {
                            if (this._isListMemberCountValid()) {
                                const { createLocalApiErrorHandler: a, fetchUserIfNeeded: d } = this.props;
                                d(e).catch(a());
                                const r = (0, h.Z)([...this.state.addedUsers]);
                                r.add(e), this.setState({ addedUsers: r });
                            } else this.setState({ showListMemberExceededMessage: !0 });
                        }),
                        (this._onRemove = (e) => {
                            const a = (0, h.Z)([...this.state.addedUsers]);
                            a.delete(e), this.setState({ addedUsers: a });
                        }),
                        (this._handleQueryChange = (e) => {
                            this.setState({ query: e });
                        });
                }
                componentDidUpdate(e) {
                    const a = e.suggestionsFetchStatus,
                        d = this.props.suggestionsFetchStatus;
                    if (a !== f.ZP.LOADED && d === f.ZP.LOADED) {
                        const { injectSuggestedUser: e, suggestedUserId: a, suggestedUsersModule: d } = this.props;
                        a && e(a, d);
                    }
                }
                componentWillUnmount() {
                    const { cleanupAddedUsers: e, membersModule: a, suggestedUsersModule: d } = this.props,
                        { addedUsers: r } = this.state;
                    e(d, a, [...r]);
                }
                render() {
                    const { listId: e, suggestedUsersModule: a } = this.props,
                        { addedUsers: d, showListMemberExceededMessage: s } = this.state;
                    return r.createElement(o.Z, null, r.createElement(M.nO, { namespace: C }, r.createElement(b.default, { alwaysOpen: !0, filter: N, isModal: !0, onQueryChange: this._handleQueryChange, placeholder: v, renderUserDecoration: this._getMemoizedAddRemoveDecorations(this._isListMemberCountValid, e, d, this._onAdd, this._onRemove), rounded: !0, shouldAutoFocus: !0, shouldFocusOnClear: !0, source: p._4.ListMembersSuggested, style: T.input, withUserHoverCard: !0 })), s && r.createElement(o.Z, { style: T.callout }, r.createElement(n.Z, { Icon: c.default, text: Z })), this.state.query ? null : r.createElement(D.Z, { entryConfiguration: this._getMemoizedEntryConfiguration(e, d, this._isListMemberCountValid, this._isCurrentMember, this._onAdd, this._onRemove), module: a, renderEmptyState: this._noItemsRenderer, title: L }));
                }
            }
            R.contextType = m.rC;
            const T = l.default.create((e) => ({ input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 }, callout: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 } })),
                U = E(R);
        },
        566741: (e, a, d) => {
            d.d(a, { Z: () => c, m: () => t });
            var r = d(202784),
                o = d(131779),
                s = d(269011),
                n = d(335632),
                l = d(962741);
            const t =
                    ({ getIsMember: e, listId: a, onAdd: d, onRemove: s, shouldAddUserToList: n }) =>
                    ({ userId: l }) =>
                        r.createElement(o.Z, { getIsMember: e, listId: a, onAdd: d, onRemove: s, shouldAddUserToList: n ?? (() => !0), userId: l }),
                i = (0, n.G)({}),
                c = ({ getIsMember: e, isListAuthor: a, listId: d, onAdd: r, onRemove: o, shouldAddUserToList: n }) => ({ ...i, [l.ZP.User]: (0, s.Z)({ decoration: a ? t({ getIsMember: e, shouldAddUserToList: n, listId: d, onAdd: r, onRemove: o }) : void 0 }) });
        },
        761893: (e, a, d) => {
            d.r(a), d.d(a, { ListUserManagementScreen: () => U, default: () => F });
            var r = d(202784),
                o = d(360917),
                s = d.n(o),
                n = d(107267),
                l = d(154003),
                t = d(111677),
                i = d.n(t),
                c = d(980407),
                u = d(507651),
                h = d(293115),
                m = d(538327),
                D = d(717988),
                b = d(24949),
                M = d(71620),
                p = d(668214),
                f = d(576469),
                A = d(780936),
                S = d(688781),
                y = d(510588);
            const _ = (e, a) => a.location.state?.previousStep,
                I = (e, a) => a.location.state?.suggestedUser?.id_str,
                g = (e, a) => {
                    const d = y.Fz(e, a);
                    return d?.member_count || 0;
                },
                w = (0, p.Z)()
                    .propsFromState(() => ({ basePath: y.$5, listId: y.xh, memberCount: g, membersModule: (0, b.P1)(y.xh, (e) => (0, A.Z)(e)), previousStep: _, suggestedUserId: I, suggestedUsersModule: (0, b.P1)(y.Fz, y.xh, _, (e, a, d) => (0, S.ZP)({ displayLocation: d, listId: a, listName: e?.name, listDescription: e?.description })) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, M.zr)("LIST_MANAGE_MEMBERS_SCREEN"), fetchListIfNeeded: f.Z.fetchOneIfNeeded }))
                    .withAnalytics(),
                E = i().c4d7650c,
                v = i().f0ab07f5,
                k = i().ba5a88e4,
                P = i().b772cd66,
                L = i().h9ce3406,
                Z = i().dfeaeb26,
                C = { page: "spheres_create_members" },
                N = { page: "spheres_edit_members" },
                R = (0, D.p)(
                    () =>
                        Promise.all([
                            d.e("icons.23"),
                            d.e("icons.0"),
                            d.e("icons.2"),
                            d.e("icons.16"),
                            d.e("icons.19"),
                            d.e("icons.10"),
                            d.e("icons.13"),
                            d.e("icons.24"),
                            d.e("icons.7"),
                            d.e("icons.22"),
                            d.e("icons.27"),
                            d.e("icons.17"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.11"),
                            d.e("icons.26"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.8"),
                            d.e("icons.4"),
                            d.e("icons.14"),
                            d.e("icons.21"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSp"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            d.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            d.e("shared~bundle.UserLists~ondemand.HoverCard"),
                            d.e("bundle.UserLists-bc6ccf4c"),
                            d.e("bundle.UserLists-2a1252f0"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                        ]).then(d.bind(d, 197503)),
                    { shouldMigrateToX: !1 },
                ),
                T = (0, D.p)(
                    () =>
                        Promise.all([
                            d.e("icons.23"),
                            d.e("icons.0"),
                            d.e("icons.2"),
                            d.e("icons.16"),
                            d.e("icons.19"),
                            d.e("icons.10"),
                            d.e("icons.13"),
                            d.e("icons.24"),
                            d.e("icons.7"),
                            d.e("icons.22"),
                            d.e("icons.27"),
                            d.e("icons.17"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.11"),
                            d.e("icons.26"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.8"),
                            d.e("icons.4"),
                            d.e("icons.14"),
                            d.e("icons.21"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSp"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            d.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            d.e("shared~bundle.UserLists~ondemand.HoverCard"),
                            d.e("bundle.UserLists-bc6ccf4c"),
                            d.e("bundle.UserLists-2a1252f0"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                        ]).then(d.bind(d, 523646)),
                    { shouldMigrateToX: !1 },
                ),
                U = (e) => {
                    const { basePath: a, createLocalApiErrorHandler: d, fetchListIfNeeded: o, history: t, listId: i, location: D, match: b, memberCount: M, membersModule: p, previousStep: f, suggestedUserId: A, suggestedUsersModule: S } = e;
                    r.useEffect(() => {
                        o(i).catch(d());
                    }, [d, o, i]);
                    let y = L,
                        _ = s();
                    f === m.O.Creation ? ((y = Z), (_ = C)) : f === m.O.Edit && ((y = E), (_ = N));
                    const I = f === m.O.Creation || f === m.O.Edit,
                        g = v({ memberCount: M }),
                        w = r.useMemo(
                            () => [
                                { to: { pathname: `/i/lists/${i}/members`, state: D.state }, label: g, key: g },
                                { to: { pathname: `/i/lists/${i}/members/suggested`, state: D.state }, label: k, key: k },
                            ],
                            [i, D.state, g],
                        ),
                        U = r.useCallback(() => {
                            A ? t.go(-3) : t.replace(a);
                        }, [a, t, A]),
                        F = r.useMemo(() => (f === m.O.Creation ? r.createElement(l.ZP, { onPress: U, size: "small", type: "primaryFilled" }, P) : void 0), [U, f]),
                        x = f === m.O.Edit || A ? "back" : "close",
                        B = r.useMemo(() => (I ? r.createElement(u.Z, { "aria-label": y, links: w }) : void 0), [w, I, y]),
                        H = r.useMemo(() => (I ? r.createElement(n.Switch, null, r.createElement(n.Route, { exact: !0, path: `/i/lists/${i}/members` }, r.createElement(R, { match: b, module: p })), r.createElement(n.Route, { exact: !0, path: `/i/lists/${i}/members/suggested` }, r.createElement(T, { match: b, membersModule: p, suggestedUserId: A, suggestedUsersModule: S }))) : r.createElement(R, { match: b, module: p })), [i, b, p, I, A, S]);
                    return r.createElement(h.nO, { namespace: _ }, r.createElement(c.Z, { backButtonType: x, history: t, rightControl: F, secondaryBar: B, title: y }, H));
                },
                F = w(U);
        },
        881206: (e, a, d) => {
            d.r(a), d.d(a, { ListScreen: () => de, default: () => oe });
            var r = d(202784),
                o = d(325686),
                s = d(108362),
                n = d(731708),
                l = d(392237),
                t = d(111677),
                i = d.n(t),
                c = d(121791),
                u = d(718e3),
                h = d(789831),
                m = d(290402),
                D = d(252021),
                b = d(32677),
                M = d(935167),
                p = d(73834),
                f = d(293115),
                A = d(942893),
                S = d(503229),
                y = d(87063),
                _ = d(466441),
                I = d(71620),
                g = d(668214),
                w = d(576469),
                E = d(510588);
            const v = (0, g.Z)()
                .propsFromState(() => ({ fetchStatus: E.DV, listId: E.xh, listMode: E.Ns, listName: E.By, screenName: E.ax }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, I.zr)("LIST_SCREEN"), fetchListIfNeeded: w.Z.fetchOneIfNeeded }))
                .withAnalytics({ page: "spheres_detail" });
            var k = d(688715),
                P = d(457311),
                L = d(912021),
                Z = d(791632),
                C = d(443781),
                N = d(38293),
                R = d(527409),
                T = d(652904),
                U = d(810641),
                F = d(725516),
                x = d(519896),
                B = d(506653),
                H = d(919022);
            const O = (e, a) => {
                    const d = E.ax(e, a);
                    return d ? H.ZP.selectByScreenName(e, d) : void 0;
                },
                V = (0, g.Z)().propsFromState(() => ({ listName: E.By, screenName: E.ax, useRanked: E._g, user: O })),
                z = i().dcdc75a3,
                $ = i().i9b7f6ba,
                q = i().a2515900,
                W = i().je23cdb2,
                j = i().fa884026,
                G = i().gba95028,
                X = i().e79ed125,
                Q = (0, k.ju)("https://support.x.com/articles/117063");
            class K extends r.Component {
                constructor(e, a) {
                    super(e, a),
                        (this.state = { showBlockedTweets: !1 }),
                        (this._renderHeaderAndContent = () => {
                            const { listId: e, useRanked: a, user: d } = this.props,
                                o = this._getModule(e, this._isSwitchRankingEnabled && !!a);
                            return o ? (d && d.blocking && !this.state.showBlockedTweets ? this._renderBlockingListOwner() : r.createElement(U.Z, { header: this._renderListDetail(), loadingAccessibilityLabel: $, module: o, prerollDisplayLocation: x.Nw.OTHER, renderEmptyState: this._renderEmptyState, title: j })) : null;
                        }),
                        (this._reconcileHistoryLocation = () => {
                            const { history: e, location: a, useRanked: d } = this.props,
                                r = a.query.show;
                            "top" !== r || d ? "top" !== r && d && e.replace({ pathname: a.pathname, query: { show: "top" } }) : e.replace({ pathname: a.pathname, query: {} });
                        }),
                        (this._getModule = (0, L.Z)((e, a) => (e ? (0, B.Z)({ listId: e, useRanked: a }) : void 0))),
                        (this._renderListDetail = () => {
                            const { history: e, listId: a, location: d } = this.props,
                                o = (0, Z.cu)(e);
                            return a && !o ? r.createElement(R.default, { basePath: d.pathname, listId: a }) : null;
                        }),
                        (this._handleShowBlockedTweets = () => {
                            this.setState({ showBlockedTweets: !0 });
                        }),
                        (this._renderEmptyState = ({ header: e = q, message: a = W, buttonText: d, onButtonPress: o } = {}) => r.createElement(r.Fragment, null, this._renderListDetail(), r.createElement(P.Z, { buttonText: d, buttonType: "brandOutlined", header: e, message: a, onButtonPress: o }))),
                        (this._isSwitchRankingEnabled = this.context.featureSwitches.isTrue("home_timeline_spheres_ranking_mode_control_enabled")),
                        this._isSwitchRankingEnabled && this._reconcileHistoryLocation();
                }
                componentDidUpdate(e) {
                    const a = e.useRanked !== this.props.useRanked;
                    this._isSwitchRankingEnabled && a && this._reconcileHistoryLocation();
                }
                render() {
                    const { listName: e, screenName: a } = this.props,
                        d = z({ screenName: a, listName: e });
                    return r.createElement(r.Fragment, null, r.createElement(N.Z, { title: d }), r.createElement(T.Z, null, this._renderHeaderAndContent()));
                }
                _renderBlockingListOwner() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const { screen_name: a } = e,
                        d = X({ screenName: a }),
                        o = r.createElement(i().I18NFormatMessage, { $i18n: "f98ecc47", screenName: a }, r.createElement(n.ZP, { link: Q }, i().a2216a79));
                    return this._renderEmptyState({ header: d, message: o, buttonText: G, onButtonPress: this._handleShowBlockedTweets });
                }
            }
            K.contextType = C.rC;
            const J = (0, F.Z)(V(K)),
                Y = i().fa884026,
                ee = i().eb7b54be,
                ae = i().j681933e,
                de = (e) => {
                    const { createLocalApiErrorHandler: a, fetchListIfNeeded: d, fetchStatus: l, history: t, listId: i, listMode: S, listName: I, location: g, match: w, screenName: E, scribeNamespace: v } = e,
                        k = r.createElement(b.Z, { history: t }),
                        P = "private" === S,
                        L = () => r.createElement(J, { history: t, listId: i, location: g, match: w }),
                        Z = r.useMemo(() => ({ items: [{ ...A.Z.forList(i) }] }), [i]),
                        C = r.createElement(M.ZP, { listId: i, match: w, scribeNamespace: v }),
                        N = r.useCallback(() => {
                            d(i).catch(a(p.e));
                        }, [a, d, i]);
                    return (
                        r.useEffect(() => {
                            N();
                        }, [N]),
                        l !== y.Z.LOADED || (I && E) ? r.createElement(f.nO, { data: Z }, r.createElement(D.Z, { backLocation: E && `/${E}/lists`, documentTitle: Y, history: t, primaryContent: r.createElement(h.Z, { component: s.Z, fab: k }, l === y.Z.FAILED ? r.createElement(m.Z, { "aria-label": ee, fetchStatus: l, onRequestRetry: N, render: L }) : L()), rightControl: C, sidebarContent: r.createElement(u.Z, null), subtitle: E && `@${E}`, title: r.createElement(o.Z, { style: re.title }, r.createElement(n.ZP, null, I), P ? r.createElement(c.default, { "aria-label": ae, role: "img", style: re.iconLock }) : null) })) : r.createElement(_.default, { history: t, location: g, match: w })
                    );
                },
                re = l.default.create((e) => ({ iconLock: { alignSelf: "center", marginStart: e.spaces.space2 }, title: { flexDirection: "row" } })),
                oe = v((0, S.Z)(de));
        },
        424721: (e, a, d) => {
            d.r(a), d.d(a, { default: () => v });
            var r = d(202784),
                o = d(457311),
                s = d(111677),
                n = d.n(s),
                l = d(408178),
                t = d(252021),
                i = d(421730),
                c = d(810641),
                u = d(24949),
                h = d(71620),
                m = d(2430),
                D = d(668214),
                b = d(783284),
                M = d(735313);
            function p() {
                return (0, m.cI)("q");
            }
            const f = (0, D.Z)()
                    .propsFromState(() => ({ module: (0, u.P1)(p(), (e) => (0, b.Z)(e ?? "")), query: p() }))
                    .propsFromActions(() => ({ clearTimelineCache: (e) => (0, M.Z)(e), createLocalApiErrorHandler: (0, h.zr)("LIST_SEARCH_SCREEN") }))
                    .withAnalytics({ page: "list_search" }),
                A = n().e9f3dec4,
                S = n().b9192d55,
                y = n().d6a23192,
                _ = n().ie256518,
                I = n().j57a2568,
                g = n().hc76e8cd,
                w = n().d872881a,
                E = r.createElement(l.B, null);
            const v = f(function (e) {
                const { clearTimelineCache: a, createLocalApiErrorHandler: d, module: s, query: n = "" } = e;
                function l() {
                    return r.createElement(o.Z, { buttonLink: "/i/lists/create", buttonText: y, buttonType: "primaryFilled", header: g({ query: n }), message: w, secondaryButtonType: "primaryOutlined" });
                }
                r.useEffect(() => {
                    a(s).catch(d());
                }, [a, d, s]);
                const u = r.useMemo(() => r.createElement(i.Z, { initialValue: n }), [n]),
                    h = n || I,
                    m = n ? S({ query: n }) : A;
                return r.createElement(t.Z, {
                    backLocation: "/",
                    customSearchBox: u,
                    documentTitle: m,
                    history: e.history,
                    primaryContent: function () {
                        return r.createElement(c.Z, { module: s, renderEmptyState: l, title: I });
                    },
                    primaryContentLabel: _,
                    sidebarContent: E,
                    title: h,
                    withSearchBox: !0,
                });
            });
        },
        466441: (e, a, d) => {
            d.r(a), d.d(a, { NotFoundScreen: () => A, default: () => y });
            d(571372);
            var r = d(202784),
                o = d(386802),
                s = d(108362),
                n = d(392237),
                l = d(111677),
                t = d.n(l),
                i = d(187669),
                c = d(449067),
                u = d(38293),
                h = d(56851),
                m = d(652904),
                D = d(952793),
                b = d(163889),
                M = d(725516);
            const p = t().ba929da8,
                f = t().d203e242;
            function A(e) {
                const { splat: a } = e.match.params,
                    { isModal: d } = r.useContext(o.Z),
                    n = (0, D.hC)("responsive_web_report_page_not_found");
                return (
                    (0, i.q)(() => {
                        n && a && (0, b.ZP)(new Error(`Page not found: ${a}`));
                    }),
                    r.createElement(m.Z, null, r.createElement(c.Z.Configure, { backLocation: "/", documentTitle: p, title: f }), r.createElement(s.Z, { style: d && S.modal }, r.createElement(h.Z, null)), r.createElement(u.Z, { title: p, withMeta: !1 }))
                );
            }
            const S = n.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                y = (0, M.Z)(A, { page: "not_found" });
        },
        289160: (e, a, d) => {
            d.d(a, { Z: () => g });
            var r = d(301327),
                o = d(464258),
                s = d(202784),
                n = (d(585488), d(351743)),
                l = d.n(n),
                t = d(154003),
                i = d(111677),
                c = d.n(i),
                u = d(725516),
                h = d(668214),
                m = d(601576),
                D = d(137204);
            const b = (e) => {
                    const a = (0, D.Ln)(e);
                    return a?.length ? a[0].member_count : void 0;
                },
                M = (0, h.Z)()
                    .propsFromState(() => ({ memberCount: b }))
                    .propsFromActions(() => ({ addToast: m.fz, setTrustedFriendsMemberCount: D.MI })),
                p = c().e68b09b4,
                f = c().af40a8e0,
                A = c().ef4602ec,
                S = c().a4d60c94,
                y = c().a1ba3bd8,
                _ = o.Z,
                I = r.Z,
                g = M((e) => {
                    const { addToast: a, isMember: d, memberCount: r, setTrustedFriendsMemberCount: o, sliceID: n, sliceItemID: i, trustedFriendsId: c, type: h, userId: m } = e,
                        [D, b] = l()(_),
                        [M, g] = l()(I),
                        [w, E] = s.useState(d || !1),
                        v = (0, u.z)(),
                        k = s.useCallback(() => {
                            D({
                                variables: { trustedFriendsId: c, userId: m, slices: [n || ""] },
                                onCompleted(e) {
                                    if ("TrustedFriendsListMemberAddInvalid" === e?.trusted_friends_list_member_add?.__typename) E(!1), a("MaxMembersExceeded" === e?.trusted_friends_list_member_add?.reason ? { text: y } : { text: S });
                                    else if ("TrustedFriendsListMemberAddSuccess" === e?.trusted_friends_list_member_add?.__typename && void 0 !== r) {
                                        const e = r + 1;
                                        v.scribe({ component: `trusted_friends_${h}`, element: "add_trusted_friends_button", action: "click", data: { trusted_friends_control_details: { list_member_count: e } } }), o(e);
                                    }
                                },
                            }),
                                E(!0);
                        }, [a, v, D, r, o, n, c, m, h]),
                        P = s.useCallback(() => {
                            M({
                                variables: { trustedFriendsId: c, userId: m, slices: [n || ""], itemID: i || "" },
                                onCompleted(e) {
                                    if ("TrustedFriendsListMemberRemoveInvalid" === e?.trusted_friends_list_member_remove?.__typename) E(!0), a({ text: A });
                                    else if ("TrustedFriendsListMemberRemoveSuccess" === e?.trusted_friends_list_member_remove?.__typename && void 0 !== r) {
                                        const e = r - 1;
                                        v.scribe({ component: `trusted_friends_${h}`, element: "remove_trusted_friends_button", action: "click", data: { trusted_friends_control_details: { list_member_count: e } } }), o(e);
                                    }
                                },
                            }),
                                E(!1);
                        }, [a, v, r, M, o, c, m, n, i, h]);
                    return w ? s.createElement(t.ZP, { "aria-label": p, disabled: g, onPress: P, size: "small", type: "primaryOutlined" }, p) : s.createElement(t.ZP, { "aria-label": f, disabled: b, onPress: k, size: "small", type: "primaryFilled" }, f);
                });
        },
        592240: (e, a, d) => {
            d.d(a, { Z: () => y });
            var r = d(438532),
                o = d(202784),
                s = (d(585488), d(277660)),
                n = d.n(s),
                l = d(457311),
                t = d(166852),
                i = d(459679),
                c = d(965245),
                u = d(966722),
                h = d(836640),
                m = d(535708),
                D = d(289160);
            const b = u.Z;
            function M({ membersSliceID: e, trustedFriendsId: a, user: d }) {
                const r = n()(b, d),
                    s = o.useCallback(() => o.createElement(D.Z, { isMember: r.is_trusted_friends_list_member, sliceID: e, sliceItemID: r.id, trustedFriendsId: a, type: m.C.Recommendations, userId: r.rest_id }), [e, a, r.id, r.is_trusted_friends_list_member, r.rest_id]);
                return o.createElement(h.J, { decoration: s, user: r });
            }
            const p = o.memo(M),
                f = (e) => e.id,
                A = r.Z;
            function S({ cacheKey: e, emptyStateHeader: a, emptyStateMessage: d, items: r, membersSliceID: s, onFetchNext: u, trustedFriendsId: h }) {
                const m = n()(A, r),
                    D = o.useMemo(
                        () =>
                            (0, t.Z)(
                                (0, i.Z)(m, (e) => ("User" === e.result?.__typename ? e.result : void 0)),
                                (e) => e.id,
                            ),
                        [m],
                    ),
                    b = o.useCallback((e) => o.createElement(p, { membersSliceID: s, trustedFriendsId: h, user: e }), [s, h]),
                    M = o.useCallback(() => o.createElement(l.Z, { header: a, message: d }), [a, d]);
                return o.createElement(c.Z, { cacheKey: e, identityFunction: f, items: D, noItemsRenderer: M, onNearEnd: u, renderer: b, withoutHeadroom: !0 });
            }
            const y = o.memo(S);
        },
        696705: (e, a, d) => {
            d.r(a), d.d(a, { TrustedFriendsMembers: () => A, default: () => y, errorConfig: () => f, trustedFriendsMembersQuery: () => M });
            var r = d(917874),
                o = d(202784),
                s = d(325686),
                n = (d(585488), d(731708)),
                l = d(392237),
                t = d(111677),
                i = d.n(t),
                c = d(273945),
                u = d(736063),
                h = d(127218),
                m = d(592240);
            const D = i().ec13f9cc,
                b = i().dab58e32,
                M = r.Z,
                p = "TRUSTED_FRIENDS_MEMBERS",
                f = { context: p },
                A = (e) => {
                    const { trustedFriendsId: a } = e,
                        { data: d, fetchNext: r } = (0, h.C)(M, { trustedFriendsId: a }),
                        l = d.trusted_friends_list_by_rest_id.members_slice;
                    return o.createElement(s.Z, null, o.createElement(n.ZP, { color: "gray700", size: "body", style: S.education }, o.createElement(i().I18NFormatMessage, { $i18n: "e420d1ed" }, o.createElement(n.ZP, { color: "text", link: c.TRUSTED_FRIENDS_LEARN_MORE_URL, style: S.learnMore, weight: "bold", withUnderline: !0 }, i().f43112a4))), o.createElement(m.Z, { cacheKey: p, emptyStateHeader: D, emptyStateMessage: b, items: l.items_results, membersSliceID: l.__id, onFetchNext: r, trustedFriendsId: a }));
                },
                S = l.default.create((e) => ({ education: { marginHorizontal: e.spaces.space32, textAlign: "center", marginTop: e.spaces.space16, marginBottom: e.spaces.space4 }, learnMore: { whiteSpace: "nowrap" }, activityIndicatior: { paddingVertical: 250 } }));
            function y(e) {
                return o.createElement(u.H, { errorConfig: f }, o.createElement(A, e));
            }
        },
        582313: (e, a, d) => {
            d.r(a), d.d(a, { TrustedFriendsRecommended: () => v, default: () => P, trustedFriendsRecommendedQuery: () => g });
            var r = d(319145),
                o = d(202784),
                s = d(325686),
                n = (d(585488), d(731708)),
                l = d(392237),
                t = d(111677),
                i = d.n(t),
                c = d(273945),
                u = d(736063),
                h = d(874088),
                m = d(735e3),
                D = d(339110),
                b = d(700797),
                M = d(127218),
                p = d(535708),
                f = d(289160),
                A = d(592240);
            const S = i().fc9dd578,
                y = i().ac3fd6e2,
                _ = i().eeb4d3f0,
                I = [D.my.TrustedFriendsSuggested],
                g = r.Z,
                w = "TRUSTED_FRIENDS_RECOMMENDED",
                E = { context: w },
                v = (e) => {
                    const [a, d] = o.useState(),
                        { trustedFriendsId: r } = e,
                        { data: l, fetchNext: t } = (0, M.C)(g, { trustedFriendsId: r }),
                        u = l.trusted_friends_list_by_rest_id.recommended_members_slice,
                        E = (0, b.oR)(l.trusted_friends_list_by_rest_id.id, "TrustedFriendsMembers_slice_result"),
                        v = u?.items_results ?? (0, m.o)(),
                        P = o.useCallback(({ user: e, userId: a }) => o.createElement(f.Z, { isMember: e?.is_trusted_friends_list_member, sliceID: E, trustedFriendsId: r, type: p.C.Search, userId: a }), [E, r]);
                    return o.createElement(s.Z, null, o.createElement(h.default, { alwaysOpen: !0, filter: I, isModal: !0, onQueryChange: d, placeholder: S, renderUserDecoration: P, rounded: !0, shouldAutoFocus: !0, shouldFocusOnClear: !0, source: D._4.TrustedFriendsSuggested, style: k.input, trustedFriendsId: r }), a ? null : o.createElement(o.Fragment, null, o.createElement(n.ZP, { color: "gray700", size: "body", style: k.education }, o.createElement(i().I18NFormatMessage, { $i18n: "e420d1ed" }, o.createElement(n.ZP, { color: "text", link: c.TRUSTED_FRIENDS_LEARN_MORE_URL, style: k.learnMore, weight: "bold", withUnderline: !0 }, i().f43112a4))), o.createElement(A.Z, { cacheKey: w, emptyStateHeader: y, emptyStateMessage: _, items: v, membersSliceID: E, onFetchNext: t, trustedFriendsId: r })));
                },
                k = l.default.create((e) => ({ input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space4 }, education: { marginHorizontal: e.spaces.space32, textAlign: "center", marginBottom: e.spaces.space8 }, learnMore: { whiteSpace: "nowrap" }, activityIndicatior: { paddingVertical: 250 } }));
            function P(e) {
                return o.createElement(u.H, { errorConfig: E }, o.createElement(v, e));
            }
        },
        273945: (e, a, d) => {
            d.r(a), d.d(a, { TRUSTED_FRIENDS_LEARN_MORE_URL: () => p, TrustedFriendsManagementScreen: () => y, default: () => _ });
            var r = d(202784),
                o = d(107267),
                s = d(688715),
                n = d(111677),
                l = d.n(n),
                t = d(980407),
                i = d(507651),
                c = d(293115),
                u = d(725516),
                h = d(717988),
                m = d(466441);
            const D = l().e1e5d552,
                b = l().cf44066a,
                M = l().ef8f5d90,
                p = (0, s.ju)("https://help.x.com/using-twitter/twitter-circle"),
                f = { page: "trusted_friends_edit" },
                A = (0, h.p)(
                    () =>
                        Promise.all([
                            d.e("icons.23"),
                            d.e("icons.0"),
                            d.e("icons.2"),
                            d.e("icons.16"),
                            d.e("icons.19"),
                            d.e("icons.10"),
                            d.e("icons.13"),
                            d.e("icons.24"),
                            d.e("icons.7"),
                            d.e("icons.22"),
                            d.e("icons.27"),
                            d.e("icons.17"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.11"),
                            d.e("icons.26"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.8"),
                            d.e("icons.4"),
                            d.e("icons.14"),
                            d.e("icons.21"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSp"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            d.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            d.e("shared~bundle.UserLists~ondemand.HoverCard"),
                            d.e("bundle.UserLists-bc6ccf4c"),
                            d.e("bundle.UserLists-2a1252f0"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                        ]).then(d.bind(d, 696705)),
                    { shouldMigrateToX: !1 },
                ),
                S = (0, h.p)(
                    () =>
                        Promise.all([
                            d.e("icons.23"),
                            d.e("icons.0"),
                            d.e("icons.2"),
                            d.e("icons.16"),
                            d.e("icons.19"),
                            d.e("icons.10"),
                            d.e("icons.13"),
                            d.e("icons.24"),
                            d.e("icons.7"),
                            d.e("icons.22"),
                            d.e("icons.27"),
                            d.e("icons.17"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.11"),
                            d.e("icons.26"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.8"),
                            d.e("icons.4"),
                            d.e("icons.14"),
                            d.e("icons.21"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSp"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            d.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            d.e("shared~bundle.UserLists~ondemand.HoverCard"),
                            d.e("bundle.UserLists-bc6ccf4c"),
                            d.e("bundle.UserLists-2a1252f0"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                        ]).then(d.bind(d, 582313)),
                    { shouldMigrateToX: !1 },
                ),
                y = (e) => {
                    const { history: a, location: d } = e,
                        s = e.match.params.trustedFriendsId,
                        n = (0, u.z)(),
                        l = r.useCallback(() => {
                            if (!s) return null;
                            const e = [
                                { to: { pathname: `/i/circles/${s}/members`, state: d.state }, label: b, key: b },
                                { to: { pathname: `/i/circles/${s}/members/suggested`, state: d.state }, label: M, key: M },
                            ];
                            return r.createElement(i.Z, { "aria-label": D, links: e });
                        }, [d, s]);
                    return r.createElement(
                        c.nO,
                        { namespace: f },
                        r.createElement(
                            t.Z,
                            {
                                backButtonType: "close",
                                history: a,
                                onBackClick: () => {
                                    n.scribe({ element: "trusted_friends", component: "list_dismiss_button", action: "click" }), a.goBack();
                                },
                                secondaryBar: l(),
                                title: D,
                            },
                            s ? r.createElement(o.Switch, null, r.createElement(o.Route, { exact: !0, path: `/i/circles/${s}/members` }, r.createElement(A, { trustedFriendsId: s })), r.createElement(o.Route, { exact: !0, path: `/i/circles/${s}/members/suggested` }, r.createElement(S, { trustedFriendsId: s }))) : r.createElement(m.default, e),
                        ),
                    );
                },
                _ = y;
        },
        535708: (e, a, d) => {
            d.d(a, { C: () => r });
            const r = Object.freeze({ Recommendations: "recommendations", Search: "search" });
        },
        235521: (e, a, d) => {
            d.r(a), d.d(a, { UserListsDiscoveryScreen: () => p, default: () => f });
            var r = d(202784),
                o = d(457311),
                s = d(111677),
                n = d.n(s),
                l = d(718e3),
                t = d(252021),
                i = d(443781),
                c = d(652904),
                u = d(810641),
                h = d(412171);
            const m = (0, d(668214).Z)().withAnalytics({ page: "list_discovery" }),
                D = n().h421e74c,
                b = n().aa62dea8,
                M = n().e5e4d3aa;
            class p extends r.Component {
                constructor(...e) {
                    super(...e), (this._renderPrimaryContent = () => r.createElement(u.Z, { module: (0, h.Z)(), renderEmptyState: this._renderEmptyState, title: D })), (this._renderEmptyState = () => r.createElement(o.Z, { header: b, message: M }));
                }
                render() {
                    const { history: e } = this.props;
                    return r.createElement(c.Z, null, r.createElement(t.Z, { backLocation: "/", history: e, primaryContent: this._renderPrimaryContent, sidebarContent: r.createElement(l.Z, { withWhoToFollow: !1 }), title: D }));
                }
            }
            p.contextType = i.rC;
            const f = m(p);
        },
        188856: (e, a, d) => {
            d.r(a), d.d(a, { UserListMembershipsScreen: () => w, default: () => E });
            var r = d(202784),
                o = d(457311),
                s = d(111677),
                n = d.n(s),
                l = d(443781),
                t = d(38293),
                i = d(652904),
                c = d(810641),
                u = d(503229),
                h = d(49128),
                m = d(24949),
                D = d(668214),
                b = d(206795),
                M = d(823885);
            const p = (e, a) => a.user.id_str,
                f = (e, a) => b.g$(e, a.user.id_str),
                A = (0, D.Z)()
                    .propsFromState(() => ({ listIds: (0, m.P1)(f, (e) => e), module: (0, m.P1)(p, (e) => (0, M.Z)(e)) }))
                    .withAnalytics({ page: "lists", section: "memberships" }),
                S = n().b69e2f71,
                y = n().e05568cc,
                _ = n().b86a098a,
                I = n().h06e09a2,
                g = n().gbaa5489;
            class w extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._entryConfiguration = (0, h.Z)({ shouldDisplayPin: !1 })),
                        (this._renderEmptyItem = () => {
                            const { user: e } = this.props,
                                { viewerUserId: a } = this.context,
                                d = a === e.id_str;
                            return r.createElement(o.Z, { header: d ? _ : S({ screenName: e.screen_name }), message: d ? I : y });
                        });
                }
                render() {
                    const { module: e, user: a } = this.props,
                        d = g({ screenName: a.screen_name });
                    return r.createElement(i.Z, null, r.createElement(t.Z, { title: d }), r.createElement(c.Z, { entryConfiguration: this._entryConfiguration, module: e, renderEmptyState: this._renderEmptyItem, title: d }));
                }
            }
            w.contextType = l.rC;
            const E = A((0, u.Z)(w));
        },
        49128: (e, a, d) => {
            d.d(a, { Z: () => n });
            var r = d(515110),
                o = d(335632),
                s = d(962741);
            const n = (e, a) => ({ ...(0, o.G)({ withMessageGaps: a?.withMessageGaps }), [s.ZP.TwitterList]: (0, r.Z)(e) });
        },
        854254: (e, a, d) => {
            d.r(a), d.d(a, { UserListsScreen: () => Ie, default: () => we });
            d(136728);
            var r = d(202784),
                o = d(325686),
                s = d(107267),
                n = d(457311),
                l = d(108362),
                t = d(601413),
                i = d(392237),
                c = d(111677),
                u = d.n(c),
                h = d(689582),
                m = d(516951),
                D = d(399887),
                b = d(805104),
                M = d(718e3),
                p = d(774426),
                f = d(789831),
                A = d(252021),
                S = d(443781),
                y = d(841993),
                _ = d(421730),
                I = d(666670),
                g = d(655352),
                w = d(835546),
                E = d(503229),
                v = d(615027),
                k = d(189244),
                P = d(717988),
                L = d(187669),
                Z = d(38293),
                C = d(652904),
                N = d(810641),
                R = d(952793),
                T = d(293115),
                U = d(725405),
                F = d(876963),
                x = d(49128);
            const B = u().bbcaa24b,
                H = u().gbc2cf50,
                O = u().b081cdf7,
                V = u().f5978664,
                z = (0, x.Z)({ shouldDisplayPin: !1 }),
                $ = { page: "spheres_list", section: "all" };
            function q(e) {
                const a = (0, U.Z)(),
                    { user: d } = e,
                    { id_str: o, screen_name: s } = d,
                    l = (0, R.hC)("responsive_web_timeline_relay_user_lists_enabled"),
                    t = r.useMemo(() => (0, F.Z)(o, l ? "relay" : "redux"), [o, l]),
                    i = r.useCallback(() => r.createElement(n.Z, { header: O({ screenName: s }), message: V }), [s]);
                return (
                    (0, L.q)(() => {
                        a.scribe({ action: "impression", ...$ });
                    }),
                    r.createElement(T.nO, { namespace: $ }, r.createElement(C.Z, null, r.createElement(r.Fragment, null, r.createElement(Z.Z, { title: B({ screenName: d.screen_name }) }), r.createElement(N.Z, { entryConfiguration: z, module: t, renderEmptyState: i, title: H }))))
                );
            }
            const W = r.memo(q);
            var j = d(71620),
                G = d(668214),
                X = d(919022);
            const Q = (e, a) => a.match.params.screenName || void 0,
                K = (e, a) => {
                    const d = Q(0, a);
                    if (d) return X.ZP.selectByScreenName(e, d);
                },
                J = (0, G.Z)()
                    .propsFromState(() => ({ screenName: Q, user: K }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, j.zr)("USER_LISTS"), fetchOneUserByScreenNameIfNeeded: X.ZP.fetchOneByScreenNameIfNeeded }));
            var Y = d(912021),
                ee = d(24949),
                ae = d(558369),
                de = d(652881);
            const re = (0, Y.Z)((e) => (0, de.ZP)(e)),
                oe = (e) => !0 === (0, ae.FG)(e, "responsive_web_timeline_relay_lists_management_enabled"),
                se = (0, G.Z)()
                    .propsFromState(() => ({ module: (0, ee.P1)(oe, (e) => re(e)) }))
                    .withAnalytics({ page: "list_management" }),
                ne = u().gbc2cf50,
                le = u().f5978664,
                te = u().d1e5e328,
                ie = u().c09609d8,
                ce = u().b081cdf7,
                ue = u().h243711c,
                he = u().bbcaa24b;
            class me extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderEmptyTimeline = () => {
                            const { user: e } = this.props,
                                { viewerUserId: a } = this.context,
                                d = a === e.id_str;
                            return r.createElement(n.Z, { buttonLink: d ? "/i/lists/create" : void 0, buttonText: d ? ie : void 0, header: d ? ue : ce({ screenName: e.screen_name }), message: d ? te : le });
                        }),
                        (this._getEntryConfiguration = (0, Y.Z)((e) => (0, x.Z)({}, { withMessageGaps: !1 })));
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    e.scribe({ action: "impression" });
                }
                render() {
                    const { viewerUserId: e } = this.context,
                        { module: a, user: d } = this.props,
                        o = e === d.id_str,
                        s = this._getEntryConfiguration(o);
                    return r.createElement(C.Z, null, r.createElement(Z.Z, { title: he({ screenName: d.screen_name }) }), r.createElement(N.Z, { entryConfiguration: s, module: a, renderEmptyState: this._renderEmptyTimeline, title: ne }));
                }
            }
            me.contextType = S.rC;
            const De = se(me),
                be = u().h63a5c3c,
                Me = u().d2004da3,
                pe = u().b0041756,
                fe = u().a64512a4,
                Ae = u().i0bcc456,
                Se = u().d8315ca0,
                ye = u().e74be9ac,
                _e = (0, P.p)(
                    () =>
                        Promise.all([
                            d.e("icons.23"),
                            d.e("icons.0"),
                            d.e("icons.2"),
                            d.e("icons.16"),
                            d.e("icons.19"),
                            d.e("icons.10"),
                            d.e("icons.13"),
                            d.e("icons.24"),
                            d.e("icons.7"),
                            d.e("icons.22"),
                            d.e("icons.27"),
                            d.e("icons.17"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.11"),
                            d.e("icons.26"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.8"),
                            d.e("icons.4"),
                            d.e("icons.14"),
                            d.e("icons.21"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSp"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                            d.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            d.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            d.e("shared~bundle.UserLists~ondemand.HoverCard"),
                            d.e("bundle.UserLists-bc6ccf4c"),
                            d.e("bundle.UserLists-2a1252f0"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                        ]).then(d.bind(d, 188856)),
                    { shouldMigrateToX: !1 },
                );
            class Ie extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMembershipsLabel = () => (this._isViewerUserView() ? Se : ye)),
                        (this._getOverflowMenuItems = () => {
                            const { user: e } = this.props,
                                a = [];
                            return e && a.push(this._getViewMembershipsAction(e)), a;
                        }),
                        (this._getViewMembershipsAction = (e) => ({ text: this._getMembershipsLabel(), Icon: h.default, onClick: m.Z, link: { pathname: `/${e.screen_name}/lists/memberships` } })),
                        (this._handleFetchUser = (e) => {
                            const { createLocalApiErrorHandler: a, fetchOneUserByScreenNameIfNeeded: d, screenName: r } = e || this.props;
                            r && d(r).catch(a(I.F));
                        }),
                        (this._renderActionMenu = (e) => {
                            const a = this._getOverflowMenuItems();
                            return r.createElement(p.default, { actionItems: a, onClose: e });
                        }),
                        (this._renderOverflowMenu = () => (this._getOverflowMenuItems().length > 0 ? r.createElement(b.Z, { "aria-label": be, renderMenu: this._renderActionMenu, style: ge.overflowMenu }) : null)),
                        (this._renderRightControl = () => {
                            const e = this._isViewerUserView() ? r.createElement(D.Z, null) : null,
                                a = this._renderOverflowMenu();
                            return r.createElement(o.Z, { style: ge.rightControl }, (0, g.ZP)() ? e : null, a);
                        }),
                        (this._renderPrimaryContent = () => {
                            const { history: e, user: a } = this.props,
                                d = this._isOwnManagementView() ? r.createElement(y.Z, { history: e, page: "list_management" }) : void 0;
                            if (a) {
                                return a?.protected && !a?.following && !this._isViewerUserView() ? r.createElement(n.Z, { header: Me({ screenName: a.screen_name }), message: Ae }) : r.createElement(f.Z, { component: l.Z, fab: d }, r.createElement(s.Switch, null, r.createElement(s.Route, { exact: !0, path: `/${k.qX}/lists` }, this._isViewerUserView() ? r.createElement(De, { user: a }) : r.createElement(W, { user: a })), r.createElement(s.Route, { exact: !0, path: `/${k.qX}/lists/memberships` }, r.createElement(_e, { user: a }))));
                            }
                            return null;
                        });
                }
                componentDidMount() {
                    this._handleFetchUser();
                }
                _isViewerUserView() {
                    const { user: e } = this.props,
                        { viewerUserId: a } = this.context;
                    return e?.id_str === a;
                }
                _isMembershipsView() {
                    const { location: e } = this.props;
                    return e.pathname.indexOf("/lists/memberships") >= 0;
                }
                _isOwnManagementView() {
                    return this._isViewerUserView() && !this._isMembershipsView();
                }
                render() {
                    const { history: e, screenName: a, user: d } = this.props,
                        o = !d || (d && (0, w.n5)({ isOwnProfile: this._isViewerUserView(), isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), user: d })),
                        s = this._isOwnManagementView(),
                        n = this._isMembershipsView() ? this._getMembershipsLabel() : pe;
                    return a ? (o ? r.createElement(A.Z, { backLocation: "/", customSearchBox: s ? r.createElement(_.Z, null) : void 0, history: e, primaryContent: this._renderPrimaryContent(), primaryContentLabel: fe, rightControl: this._isMembershipsView() ? null : this._renderRightControl(), sidebarContent: r.createElement(M.Z, null), subtitle: s ? void 0 : r.createElement(t.Z, { screenName: a }), title: n, withSearchBox: s }) : r.createElement(v.Z, { to: `/${a}` })) : null;
                }
            }
            Ie.contextType = S.rC;
            const ge = i.default.create((e) => ({ overflowMenu: { marginStart: e.spaces.space12 }, rightControl: { alignItems: "center", flexDirection: "row" } })),
                we = J((0, E.Z)(Ie));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-63cb1cc4.69aa917a.js.map
