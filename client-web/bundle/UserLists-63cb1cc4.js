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
                _ = d(390387),
                y = d(601576),
                g = d(164692),
                I = d(919022);
            const w = [],
                k = (e, a) => {
                    const d = Z(e, a),
                        r = d && d.id_str;
                    return r ? S.g$(e, r) : w;
                },
                E = (e, a) => _._h(e),
                v = (e, a) => !(L(e, a) && a.location?.state?.fromApp),
                L = (e, a) => {
                    const d = Z(e, a);
                    return d?.id_str;
                },
                Z = (e, a) => {
                    const d = a.location && a.location.state && a.location.state.userId;
                    return d ? I.ZP.select(e, d) : void 0;
                },
                P = (0, f.Z)()
                    .propsFromState(() => ({ shouldRedirect: v, viewerUser: I.ZP.selectViewerUser, membershipListIds: (0, M.P1)(k, (e) => e), module: (0, M.P1)(E, L, (e, a) => (e && a ? (0, g.Z)(e, a) : void 0)), user: Z }))
                    .propsFromActions(() => ({ addToast: y.fz, addUserToList: A.Z.addUserToList, toggleIsMember: A.Z.toggleIsMember, createLocalApiErrorHandler: (0, p.zr)("ADD_LIST_MEMBER_SCREEN"), fetchMembershipsIfNeeded: S.NU, removeUserFromList: A.Z.removeUserFromList }))
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
                O = P(B);
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
                    { analytics: f, history: A, location: S, suggestedUser: _ } = e;
                return r.createElement(
                    l.Z,
                    {
                        backButtonType: _ ? "back" : "close",
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
                _ = d(725516),
                y = d(125363),
                g = d(390387),
                I = d(615027),
                w = d(71620),
                k = d(668214),
                E = d(576469),
                v = d(510588);
            const L = (0, k.Z)()
                    .propsFromState(() => ({ basePath: v.$5, fetchStatus: v.DV, list: v.Fz, listId: v.xh, screenName: v.ax }))
                    .adjustStateProps(({ basePath: e, fetchStatus: a, list: d, listId: r, screenName: o }) => ({ authorId: d?.user, basePath: e, fetchStatus: a, list: d, listId: r, screenName: o }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, w.zr)("LIST_EDIT_SCREEN"), deleteList: E.Z.deleteList, fetchListIfNeeded: E.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "spheres_edit_form" }),
                Z = h().c4d7650c,
                P = h().b772cd66,
                C = h().ca5d0a82,
                N = h().h7f2418c,
                R = h().b18e5cd2,
                T = h().cdd73e9c,
                U = { confirmButtonLabel: h().d96cf7ce, headline: h().def8ff62, text: h().j8b9cde8 },
                F = (e) => {
                    const a = (0, _.z)(),
                        d = (0, s.useLocation)(),
                        c = (0, s.useHistory)(),
                        u = r.useRef(null),
                        [h, w] = r.useState(!1),
                        [k, E] = r.useState(!1),
                        { viewerUserId: v } = r.useContext(M.rC),
                        L = (0, y.v9)(g.Lz),
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
                                        H({ defaultToast: { text: R }, showToast: !0 })(e), E(!1);
                                    });
                        }, [a, H, O, c, q, W]),
                        X = r.useMemo(() => ({ pathname: `${B}/members`, state: { previousStep: S.O.Edit } }), [B]),
                        Q = r.useCallback(() => {
                            a.scribe({ element: "manage", action: "click" });
                        }, [a]),
                        K = r.useCallback(() => r.createElement(o.Z, { style: x.topBorder }, r.createElement(n.Z, { label: Z, link: X, onPress: Q })), [Q, X]),
                        J = r.useCallback(() => r.createElement(r.Fragment, null, r.createElement(o.Z, { style: x.mainSettings }, r.createElement(f.Z, { context: "LIST_EDIT_SCREEN", history: c, list: $, listId: q, location: d, onChange: Y, ref: u })), K(), r.createElement(t.Z, { color: "red500", label: T, onPress: ae }), k && r.createElement(i.Z, { confirmButtonLabel: U.confirmButtonLabel, confirmButtonType: "destructiveFilled", headline: U.headline, onCancel: de, onConfirm: G, text: U.text })), [G, c, $, q, d, K, k]);
                    function Y(e) {
                        w(e);
                    }
                    function ee() {
                        u.current && u.current.save();
                    }
                    function ae() {
                        E(!0);
                    }
                    function de() {
                        E(!1);
                    }
                    return F === v
                        ? r.createElement(
                              b.Z,
                              {
                                  history: c,
                                  onBackClick: function () {
                                      a.scribeAction("cancel"), c.goBack();
                                  },
                                  rightControl: r.createElement(l.ZP, { "aria-label": P, disabled: !h, onPress: ee, size: "small", type: "primaryFilled" }, P),
                                  title: C,
                              },
                              L ? r.createElement(p.Z, { type: "List" }) : null,
                              r.createElement(D.Z, { "aria-label": N, fetchStatus: z, onRequestRetry: j, render: J }),
                          )
                        : r.createElement(I.Z, { to: B });
                },
                x = c.default.create((e) => ({ mainSettings: { backgroundColor: e.colors.cellBackground }, topBorder: { borderTopWidth: e.borderWidths.small, borderTopStyle: "solid", borderTopColor: e.colors.borderColor } })),
                B = L(F);
        },
        435028: (e, a, d) => {
            d.r(a), d.d(a, { ListSubscribersScreen: () => S, default: () => _ });
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
            const _ = b(S);
        },
        197503: (e, a, d) => {
            d.r(a), d.d(a, { ListMembersScreen: () => _, default: () => y });
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
            class _ extends r.Component {
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
            const y = p(_);
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
                _ = d(668214),
                y = d(688781),
                g = d(919022),
                I = d(510588);
            const w = (e, { suggestedUsersModule: a }) => a.selectInitialFetchStatus(e),
                k = (0, _.Z)()
                    .propsFromState(() => ({ suggestionsFetchStatus: w, list: I.Fz ?? void 0, listId: I.xh }))
                    .propsFromActions(() => ({ cleanupAddedUsers: y.DK, createLocalApiErrorHandler: (0, S.zr)("LIST_SUGGESTED_USERS_SCREEN"), fetchUserIfNeeded: g.ZP.fetchOneIfNeeded, injectSuggestedUser: y.i7 }))
                    .withAnalytics({ section: "suggested" }),
                E = i().fc9dd578,
                v = i().e2f7dc62,
                L = i().gc23cc00,
                Z = i().e3deb126,
                P = i().c2fb1e94,
                C = { section: "search" },
                N = [p.my.Users];
            class R extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { addedUsers: new Set(), query: "", showListMemberExceededMessage: !1 }),
                        (this._noItemsRenderer = () => r.createElement(s.Z, { header: v, message: L })),
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
                    return r.createElement(o.Z, null, r.createElement(M.nO, { namespace: C }, r.createElement(b.default, { alwaysOpen: !0, filter: N, isModal: !0, onQueryChange: this._handleQueryChange, placeholder: E, renderUserDecoration: this._getMemoizedAddRemoveDecorations(this._isListMemberCountValid, e, d, this._onAdd, this._onRemove), rounded: !0, shouldAutoFocus: !0, shouldFocusOnClear: !0, source: p._4.ListMembersSuggested, style: T.input, withUserHoverCard: !0 })), s && r.createElement(o.Z, { style: T.callout }, r.createElement(n.Z, { Icon: c.default, text: P })), this.state.query ? null : r.createElement(D.Z, { entryConfiguration: this._getMemoizedEntryConfiguration(e, d, this._isListMemberCountValid, this._isCurrentMember, this._onAdd, this._onRemove), module: a, renderEmptyState: this._noItemsRenderer, title: Z }));
                }
            }
            R.contextType = m.rC;
            const T = l.default.create((e) => ({ input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 }, callout: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 } })),
                U = k(R);
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
                _ = d(510588);
            const y = (e, a) => a.location.state?.previousStep,
                g = (e, a) => a.location.state?.suggestedUser?.id_str,
                I = (e, a) => {
                    const d = _.Fz(e, a);
                    return d?.member_count || 0;
                },
                w = (0, p.Z)()
                    .propsFromState(() => ({ basePath: _.$5, listId: _.xh, memberCount: I, membersModule: (0, b.P1)(_.xh, (e) => (0, A.Z)(e)), previousStep: y, suggestedUserId: g, suggestedUsersModule: (0, b.P1)(_.Fz, _.xh, y, (e, a, d) => (0, S.ZP)({ displayLocation: d, listId: a, listName: e?.name, listDescription: e?.description })) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, M.zr)("LIST_MANAGE_MEMBERS_SCREEN"), fetchListIfNeeded: f.Z.fetchOneIfNeeded }))
                    .withAnalytics(),
                k = i().c4d7650c,
                E = i().f0ab07f5,
                v = i().ba5a88e4,
                L = i().b772cd66,
                Z = i().h9ce3406,
                P = i().dfeaeb26,
                C = { page: "spheres_create_members" },
                N = { page: "spheres_edit_members" },
                R = (0, D.p)(
                    () =>
                        Promise.all([
                            d.e("icons.0"),
                            d.e("icons.5"),
                            d.e("icons.12"),
                            d.e("icons.20"),
                            d.e("icons.2"),
                            d.e("icons.21"),
                            d.e("icons.28"),
                            d.e("icons.10"),
                            d.e("icons.17"),
                            d.e("icons.9"),
                            d.e("icons.23"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.22"),
                            d.e("icons.24"),
                            d.e("icons.14"),
                            d.e("icons.13"),
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
                            d.e("icons.6"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            d.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-8aa1f3e4"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-c6c15d67"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            d.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            d.e("shared~bundle.UserLists~ondemand.HoverCard"),
                            d.e("shared~bundle.HomeTimeline~bundle.UserLists"),
                            d.e("bundle.UserLists-6107ac1a"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                        ]).then(d.bind(d, 197503)),
                    { shouldMigrateToX: !1 },
                ),
                T = (0, D.p)(
                    () =>
                        Promise.all([
                            d.e("icons.0"),
                            d.e("icons.5"),
                            d.e("icons.12"),
                            d.e("icons.20"),
                            d.e("icons.2"),
                            d.e("icons.21"),
                            d.e("icons.28"),
                            d.e("icons.10"),
                            d.e("icons.17"),
                            d.e("icons.9"),
                            d.e("icons.23"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.22"),
                            d.e("icons.24"),
                            d.e("icons.14"),
                            d.e("icons.13"),
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
                            d.e("icons.6"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            d.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-8aa1f3e4"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-c6c15d67"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            d.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            d.e("shared~bundle.UserLists~ondemand.HoverCard"),
                            d.e("shared~bundle.HomeTimeline~bundle.UserLists"),
                            d.e("bundle.UserLists-6107ac1a"),
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
                    let _ = Z,
                        y = s();
                    f === m.O.Creation ? ((_ = P), (y = C)) : f === m.O.Edit && ((_ = k), (y = N));
                    const g = f === m.O.Creation || f === m.O.Edit,
                        I = E({ memberCount: M }),
                        w = r.useMemo(
                            () => [
                                { to: { pathname: `/i/lists/${i}/members`, state: D.state }, label: I, key: I },
                                { to: { pathname: `/i/lists/${i}/members/suggested`, state: D.state }, label: v, key: v },
                            ],
                            [i, D.state, I],
                        ),
                        U = r.useCallback(() => {
                            A ? t.go(-3) : t.replace(a);
                        }, [a, t, A]),
                        F = r.useMemo(() => (f === m.O.Creation ? r.createElement(l.ZP, { onPress: U, size: "small", type: "primaryFilled" }, L) : void 0), [U, f]),
                        x = f === m.O.Edit || A ? "back" : "close",
                        B = r.useMemo(() => (g ? r.createElement(u.Z, { "aria-label": _, links: w }) : void 0), [w, g, _]),
                        H = r.useMemo(() => (g ? r.createElement(n.Switch, null, r.createElement(n.Route, { exact: !0, path: `/i/lists/${i}/members` }, r.createElement(R, { match: b, module: p })), r.createElement(n.Route, { exact: !0, path: `/i/lists/${i}/members/suggested` }, r.createElement(T, { match: b, membersModule: p, suggestedUserId: A, suggestedUsersModule: S }))) : r.createElement(R, { match: b, module: p })), [i, b, p, g, A, S]);
                    return r.createElement(h.nO, { namespace: y }, r.createElement(c.Z, { backButtonType: x, history: t, rightControl: F, secondaryBar: B, title: _ }, H));
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
                _ = d(87063),
                y = d(466441),
                g = d(71620),
                I = d(668214),
                w = d(576469),
                k = d(510588);
            const E = (0, I.Z)()
                .propsFromState(() => ({ fetchStatus: k.DV, listId: k.xh, listMode: k.Ns, listName: k.By, screenName: k.ax }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("LIST_SCREEN"), fetchListIfNeeded: w.Z.fetchOneIfNeeded }))
                .withAnalytics({ page: "spheres_detail" });
            var v = d(688715),
                L = d(457311),
                Z = d(912021),
                P = d(791632),
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
                    const d = k.ax(e, a);
                    return d ? H.ZP.selectByScreenName(e, d) : void 0;
                },
                V = (0, I.Z)().propsFromState(() => ({ listName: k.By, screenName: k.ax, useRanked: k._g, user: O })),
                z = i().dcdc75a3,
                $ = i().i9b7f6ba,
                q = i().a2515900,
                W = i().je23cdb2,
                j = i().fa884026,
                G = i().gba95028,
                X = i().e79ed125,
                Q = (0, v.ju)("https://support.x.com/articles/117063");
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
                        (this._getModule = (0, Z.Z)((e, a) => (e ? (0, B.Z)({ listId: e, useRanked: a }) : void 0))),
                        (this._renderListDetail = () => {
                            const { history: e, listId: a, location: d } = this.props,
                                o = (0, P.cu)(e);
                            return a && !o ? r.createElement(R.default, { basePath: d.pathname, listId: a }) : null;
                        }),
                        (this._handleShowBlockedTweets = () => {
                            this.setState({ showBlockedTweets: !0 });
                        }),
                        (this._renderEmptyState = ({ header: e = q, message: a = W, buttonText: d, onButtonPress: o } = {}) => r.createElement(r.Fragment, null, this._renderListDetail(), r.createElement(L.Z, { buttonText: d, buttonType: "brandOutlined", header: e, message: a, onButtonPress: o }))),
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
                    const { createLocalApiErrorHandler: a, fetchListIfNeeded: d, fetchStatus: l, history: t, listId: i, listMode: S, listName: g, location: I, match: w, screenName: k, scribeNamespace: E } = e,
                        v = r.createElement(b.Z, { history: t }),
                        L = "private" === S,
                        Z = () => r.createElement(J, { history: t, listId: i, location: I, match: w }),
                        P = r.useMemo(() => ({ items: [{ ...A.Z.forList(i) }] }), [i]),
                        C = r.createElement(M.ZP, { listId: i, match: w, scribeNamespace: E }),
                        N = r.useCallback(() => {
                            d(i).catch(a(p.e));
                        }, [a, d, i]);
                    return (
                        r.useEffect(() => {
                            N();
                        }, [N]),
                        l !== _.Z.LOADED || (g && k) ? r.createElement(f.nO, { data: P }, r.createElement(D.Z, { backLocation: k && `/${k}/lists`, documentTitle: Y, history: t, primaryContent: r.createElement(h.Z, { component: s.Z, fab: v }, l === _.Z.FAILED ? r.createElement(m.Z, { "aria-label": ee, fetchStatus: l, onRequestRetry: N, render: Z }) : Z()), rightControl: C, sidebarContent: r.createElement(u.Z, null), subtitle: k && `@${k}`, title: r.createElement(o.Z, { style: re.title }, r.createElement(n.ZP, null, g), L ? r.createElement(c.default, { "aria-label": ae, role: "img", style: re.iconLock }) : null) })) : r.createElement(y.default, { history: t, location: I, match: w })
                    );
                },
                re = l.default.create((e) => ({ iconLock: { alignSelf: "center", marginStart: e.spaces.space2 }, title: { flexDirection: "row" } })),
                oe = E((0, S.Z)(de));
        },
        424721: (e, a, d) => {
            d.r(a), d.d(a, { default: () => E });
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
                _ = n().d6a23192,
                y = n().ie256518,
                g = n().j57a2568,
                I = n().hc76e8cd,
                w = n().d872881a,
                k = r.createElement(l.B, null);
            const E = f(function (e) {
                const { clearTimelineCache: a, createLocalApiErrorHandler: d, module: s, query: n = "" } = e;
                function l() {
                    return r.createElement(o.Z, { buttonLink: "/i/lists/create", buttonText: _, buttonType: "primaryFilled", header: I({ query: n }), message: w, secondaryButtonType: "primaryOutlined" });
                }
                r.useEffect(() => {
                    a(s).catch(d());
                }, [a, d, s]);
                const u = r.useMemo(() => r.createElement(i.Z, { initialValue: n }), [n]),
                    h = n || g,
                    m = n ? S({ query: n }) : A;
                return r.createElement(t.Z, {
                    backLocation: "/",
                    customSearchBox: u,
                    documentTitle: m,
                    history: e.history,
                    primaryContent: function () {
                        return r.createElement(c.Z, { module: s, renderEmptyState: l, title: g });
                    },
                    primaryContentLabel: y,
                    sidebarContent: k,
                    title: h,
                    withSearchBox: !0,
                });
            });
        },
        466441: (e, a, d) => {
            d.r(a), d.d(a, { NotFoundScreen: () => A, default: () => _ });
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
                _ = (0, M.Z)(A, { page: "not_found" });
        },
        289160: (e, a, d) => {
            d.d(a, { Z: () => I });
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
                _ = c().a1ba3bd8,
                y = o.Z,
                g = r.Z,
                I = M((e) => {
                    const { addToast: a, isMember: d, memberCount: r, setTrustedFriendsMemberCount: o, sliceID: n, sliceItemID: i, trustedFriendsId: c, type: h, userId: m } = e,
                        [D, b] = l()(y),
                        [M, I] = l()(g),
                        [w, k] = s.useState(d || !1),
                        E = (0, u.z)(),
                        v = s.useCallback(() => {
                            D({
                                variables: { trustedFriendsId: c, userId: m, slices: [n || ""] },
                                onCompleted(e) {
                                    if ("TrustedFriendsListMemberAddInvalid" === e?.trusted_friends_list_member_add?.__typename) k(!1), a("MaxMembersExceeded" === e?.trusted_friends_list_member_add?.reason ? { text: _ } : { text: S });
                                    else if ("TrustedFriendsListMemberAddSuccess" === e?.trusted_friends_list_member_add?.__typename && void 0 !== r) {
                                        const e = r + 1;
                                        E.scribe({ component: `trusted_friends_${h}`, element: "add_trusted_friends_button", action: "click", data: { trusted_friends_control_details: { list_member_count: e } } }), o(e);
                                    }
                                },
                            }),
                                k(!0);
                        }, [a, E, D, r, o, n, c, m, h]),
                        L = s.useCallback(() => {
                            M({
                                variables: { trustedFriendsId: c, userId: m, slices: [n || ""], itemID: i || "" },
                                onCompleted(e) {
                                    if ("TrustedFriendsListMemberRemoveInvalid" === e?.trusted_friends_list_member_remove?.__typename) k(!0), a({ text: A });
                                    else if ("TrustedFriendsListMemberRemoveSuccess" === e?.trusted_friends_list_member_remove?.__typename && void 0 !== r) {
                                        const e = r - 1;
                                        E.scribe({ component: `trusted_friends_${h}`, element: "remove_trusted_friends_button", action: "click", data: { trusted_friends_control_details: { list_member_count: e } } }), o(e);
                                    }
                                },
                            }),
                                k(!1);
                        }, [a, E, r, M, o, c, m, n, i, h]);
                    return w ? s.createElement(t.ZP, { "aria-label": p, disabled: I, onPress: L, size: "small", type: "primaryOutlined" }, p) : s.createElement(t.ZP, { "aria-label": f, disabled: b, onPress: v, size: "small", type: "primaryFilled" }, f);
                });
        },
        592240: (e, a, d) => {
            d.d(a, { Z: () => _ });
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
            const _ = o.memo(S);
        },
        696705: (e, a, d) => {
            d.r(a), d.d(a, { TrustedFriendsMembers: () => A, default: () => _, errorConfig: () => f, trustedFriendsMembersQuery: () => M });
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
            function _(e) {
                return o.createElement(u.H, { errorConfig: f }, o.createElement(A, e));
            }
        },
        582313: (e, a, d) => {
            d.r(a), d.d(a, { TrustedFriendsRecommended: () => E, default: () => L, trustedFriendsRecommendedQuery: () => I });
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
                _ = i().ac3fd6e2,
                y = i().eeb4d3f0,
                g = [D.my.TrustedFriendsSuggested],
                I = r.Z,
                w = "TRUSTED_FRIENDS_RECOMMENDED",
                k = { context: w },
                E = (e) => {
                    const [a, d] = o.useState(),
                        { trustedFriendsId: r } = e,
                        { data: l, fetchNext: t } = (0, M.C)(I, { trustedFriendsId: r }),
                        u = l.trusted_friends_list_by_rest_id.recommended_members_slice,
                        k = (0, b.oR)(l.trusted_friends_list_by_rest_id.id, "TrustedFriendsMembers_slice_result"),
                        E = u?.items_results ?? (0, m.o)(),
                        L = o.useCallback(({ user: e, userId: a }) => o.createElement(f.Z, { isMember: e?.is_trusted_friends_list_member, sliceID: k, trustedFriendsId: r, type: p.C.Search, userId: a }), [k, r]);
                    return o.createElement(s.Z, null, o.createElement(h.default, { alwaysOpen: !0, filter: g, isModal: !0, onQueryChange: d, placeholder: S, renderUserDecoration: L, rounded: !0, shouldAutoFocus: !0, shouldFocusOnClear: !0, source: D._4.TrustedFriendsSuggested, style: v.input, trustedFriendsId: r }), a ? null : o.createElement(o.Fragment, null, o.createElement(n.ZP, { color: "gray700", size: "body", style: v.education }, o.createElement(i().I18NFormatMessage, { $i18n: "e420d1ed" }, o.createElement(n.ZP, { color: "text", link: c.TRUSTED_FRIENDS_LEARN_MORE_URL, style: v.learnMore, weight: "bold", withUnderline: !0 }, i().f43112a4))), o.createElement(A.Z, { cacheKey: w, emptyStateHeader: _, emptyStateMessage: y, items: E, membersSliceID: k, onFetchNext: t, trustedFriendsId: r })));
                },
                v = l.default.create((e) => ({ input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space4 }, education: { marginHorizontal: e.spaces.space32, textAlign: "center", marginBottom: e.spaces.space8 }, learnMore: { whiteSpace: "nowrap" }, activityIndicatior: { paddingVertical: 250 } }));
            function L(e) {
                return o.createElement(u.H, { errorConfig: k }, o.createElement(E, e));
            }
        },
        273945: (e, a, d) => {
            d.r(a), d.d(a, { TRUSTED_FRIENDS_LEARN_MORE_URL: () => p, TrustedFriendsManagementScreen: () => _, default: () => y });
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
                            d.e("icons.0"),
                            d.e("icons.5"),
                            d.e("icons.12"),
                            d.e("icons.20"),
                            d.e("icons.2"),
                            d.e("icons.21"),
                            d.e("icons.28"),
                            d.e("icons.10"),
                            d.e("icons.17"),
                            d.e("icons.9"),
                            d.e("icons.23"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.22"),
                            d.e("icons.24"),
                            d.e("icons.14"),
                            d.e("icons.13"),
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
                            d.e("icons.6"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            d.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-8aa1f3e4"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-c6c15d67"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            d.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            d.e("shared~bundle.UserLists~ondemand.HoverCard"),
                            d.e("shared~bundle.HomeTimeline~bundle.UserLists"),
                            d.e("bundle.UserLists-6107ac1a"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                        ]).then(d.bind(d, 696705)),
                    { shouldMigrateToX: !1 },
                ),
                S = (0, h.p)(
                    () =>
                        Promise.all([
                            d.e("icons.0"),
                            d.e("icons.5"),
                            d.e("icons.12"),
                            d.e("icons.20"),
                            d.e("icons.2"),
                            d.e("icons.21"),
                            d.e("icons.28"),
                            d.e("icons.10"),
                            d.e("icons.17"),
                            d.e("icons.9"),
                            d.e("icons.23"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.22"),
                            d.e("icons.24"),
                            d.e("icons.14"),
                            d.e("icons.13"),
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
                            d.e("icons.6"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            d.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-8aa1f3e4"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-c6c15d67"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            d.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            d.e("shared~bundle.UserLists~ondemand.HoverCard"),
                            d.e("shared~bundle.HomeTimeline~bundle.UserLists"),
                            d.e("bundle.UserLists-6107ac1a"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                        ]).then(d.bind(d, 582313)),
                    { shouldMigrateToX: !1 },
                ),
                _ = (e) => {
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
                y = _;
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
            d.r(a), d.d(a, { UserListMembershipsScreen: () => w, default: () => k });
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
                _ = n().e05568cc,
                y = n().b86a098a,
                g = n().h06e09a2,
                I = n().gbaa5489;
            class w extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._entryConfiguration = (0, h.Z)({ shouldDisplayPin: !1 })),
                        (this._renderEmptyItem = () => {
                            const { user: e } = this.props,
                                { viewerUserId: a } = this.context,
                                d = a === e.id_str;
                            return r.createElement(o.Z, { header: d ? y : S({ screenName: e.screen_name }), message: d ? g : _ });
                        });
                }
                render() {
                    const { module: e, user: a } = this.props,
                        d = I({ screenName: a.screen_name });
                    return r.createElement(i.Z, null, r.createElement(t.Z, { title: d }), r.createElement(c.Z, { entryConfiguration: this._entryConfiguration, module: e, renderEmptyState: this._renderEmptyItem, title: d }));
                }
            }
            w.contextType = l.rC;
            const k = A((0, u.Z)(w));
        },
        49128: (e, a, d) => {
            d.d(a, { Z: () => n });
            var r = d(515110),
                o = d(335632),
                s = d(962741);
            const n = (e, a) => ({ ...(0, o.G)({ withMessageGaps: a?.withMessageGaps }), [s.ZP.TwitterList]: (0, r.Z)(e) });
        },
        854254: (e, a, d) => {
            d.r(a), d.d(a, { UserListsScreen: () => ge, default: () => we });
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
                _ = d(841993),
                y = d(421730),
                g = d(666670),
                I = d(655352),
                w = d(835546),
                k = d(503229),
                E = d(615027),
                v = d(189244),
                L = d(717988),
                Z = d(187669),
                P = d(38293),
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
                    (0, Z.q)(() => {
                        a.scribe({ action: "impression", ...$ });
                    }),
                    r.createElement(T.nO, { namespace: $ }, r.createElement(C.Z, null, r.createElement(r.Fragment, null, r.createElement(P.Z, { title: B({ screenName: d.screen_name }) }), r.createElement(N.Z, { entryConfiguration: z, module: t, renderEmptyState: i, title: H }))))
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
                    return r.createElement(C.Z, null, r.createElement(P.Z, { title: he({ screenName: d.screen_name }) }), r.createElement(N.Z, { entryConfiguration: s, module: a, renderEmptyState: this._renderEmptyTimeline, title: ne }));
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
                _e = u().e74be9ac,
                ye = (0, L.p)(
                    () =>
                        Promise.all([
                            d.e("icons.0"),
                            d.e("icons.5"),
                            d.e("icons.12"),
                            d.e("icons.20"),
                            d.e("icons.2"),
                            d.e("icons.21"),
                            d.e("icons.28"),
                            d.e("icons.10"),
                            d.e("icons.17"),
                            d.e("icons.9"),
                            d.e("icons.23"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.22"),
                            d.e("icons.24"),
                            d.e("icons.14"),
                            d.e("icons.13"),
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
                            d.e("icons.6"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                            d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            d.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-8aa1f3e4"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-c6c15d67"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            d.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            d.e("shared~bundle.UserLists~ondemand.HoverCard"),
                            d.e("shared~bundle.HomeTimeline~bundle.UserLists"),
                            d.e("bundle.UserLists-6107ac1a"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                        ]).then(d.bind(d, 188856)),
                    { shouldMigrateToX: !1 },
                );
            class ge extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMembershipsLabel = () => (this._isViewerUserView() ? Se : _e)),
                        (this._getOverflowMenuItems = () => {
                            const { user: e } = this.props,
                                a = [];
                            return e && a.push(this._getViewMembershipsAction(e)), a;
                        }),
                        (this._getViewMembershipsAction = (e) => ({ text: this._getMembershipsLabel(), Icon: h.default, onClick: m.Z, link: { pathname: `/${e.screen_name}/lists/memberships` } })),
                        (this._handleFetchUser = (e) => {
                            const { createLocalApiErrorHandler: a, fetchOneUserByScreenNameIfNeeded: d, screenName: r } = e || this.props;
                            r && d(r).catch(a(g.F));
                        }),
                        (this._renderActionMenu = (e) => {
                            const a = this._getOverflowMenuItems();
                            return r.createElement(p.default, { actionItems: a, onClose: e });
                        }),
                        (this._renderOverflowMenu = () => (this._getOverflowMenuItems().length > 0 ? r.createElement(b.Z, { "aria-label": be, renderMenu: this._renderActionMenu, style: Ie.overflowMenu }) : null)),
                        (this._renderRightControl = () => {
                            const e = this._isViewerUserView() ? r.createElement(D.Z, null) : null,
                                a = this._renderOverflowMenu();
                            return r.createElement(o.Z, { style: Ie.rightControl }, (0, I.ZP)() ? e : null, a);
                        }),
                        (this._renderPrimaryContent = () => {
                            const { history: e, user: a } = this.props,
                                d = this._isOwnManagementView() ? r.createElement(_.Z, { history: e, page: "list_management" }) : void 0;
                            if (a) {
                                return a?.protected && !a?.following && !this._isViewerUserView() ? r.createElement(n.Z, { header: Me({ screenName: a.screen_name }), message: Ae }) : r.createElement(f.Z, { component: l.Z, fab: d }, r.createElement(s.Switch, null, r.createElement(s.Route, { exact: !0, path: `/${v.qX}/lists` }, this._isViewerUserView() ? r.createElement(De, { user: a }) : r.createElement(W, { user: a })), r.createElement(s.Route, { exact: !0, path: `/${v.qX}/lists/memberships` }, r.createElement(ye, { user: a }))));
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
                    return a ? (o ? r.createElement(A.Z, { backLocation: "/", customSearchBox: s ? r.createElement(y.Z, null) : void 0, history: e, primaryContent: this._renderPrimaryContent(), primaryContentLabel: fe, rightControl: this._isMembershipsView() ? null : this._renderRightControl(), sidebarContent: r.createElement(M.Z, null), subtitle: s ? void 0 : r.createElement(t.Z, { screenName: a }), title: n, withSearchBox: s }) : r.createElement(E.Z, { to: `/${a}` })) : null;
                }
            }
            ge.contextType = S.rC;
            const Ie = i.default.create((e) => ({ overflowMenu: { marginStart: e.spaces.space12 }, rightControl: { alignItems: "center", flexDirection: "row" } })),
                we = J((0, k.Z)(ge));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-63cb1cc4.f97d78da.js.map
