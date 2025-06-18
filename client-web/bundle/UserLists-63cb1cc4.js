"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-63cb1cc4"],
    {
        306518: (e, a, r) => {
            r.r(a), r.d(a, { ListRedirect: () => p, default: () => b });
            var t = r(202784),
                o = r(73834),
                d = r(503229),
                s = r(312771),
                n = r(923128),
                l = r(615027),
                i = r(71620),
                c = r(668214),
                u = r(576469),
                h = r(510588);
            const m = (e, a) => {
                    const { match: r } = a;
                    return r && r.params && r.params.slugSubroute ? r.params.slugSubroute : void 0;
                },
                D = (0, c.Z)()
                    .propsFromState(() => ({ listId: h.Wy, screenName: h.ax, slug: h.Ge, fetchStatus: h.DV, subroute: m }))
                    .propsFromActions(() => ({ fetchListIfNeeded: u.Z.fetchOneIfNeeded, createLocalApiErrorHandler: (0, i.zr)("LISTS_REDIRECT") }));
            class p extends t.Component {
                constructor(e) {
                    super(e),
                        (this._handleListFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchListIfNeeded: a, listId: r, screenName: t, slug: d } = this.props;
                            a(r || "", t && d ? { screenName: t, slug: d } : {}).catch((a) => {
                                e(o.e)(a), this.setState({ fetchStatus: s.ZP.FAILED });
                            });
                        }),
                        (this.state = { fetchStatus: this.props.fetchStatus });
                }
                componentDidMount() {
                    this._handleListFetch();
                }
                render() {
                    const { history: e, listId: a, location: r, match: o, subroute: d } = this.props;
                    if (a) {
                        const e = d ? `/i/lists/${a}/${d}` : `/i/lists/${a}`;
                        return t.createElement(l.Z, { status: void 0, to: e });
                    }
                    return t.createElement(n.Z, { history: e, location: r, match: o });
                }
            }
            const b = D((0, d.Z)(p));
        },
        234045: (e, a, r) => {
            r.r(a), r.d(a, { AddListMemberScreen: () => B, default: () => z });
            var t = r(202784),
                o = r(154003),
                d = r(952428),
                s = r(731708),
                n = r(457311),
                l = r(392237),
                i = r(111677),
                c = r.n(i),
                u = r(912021),
                h = r(980407),
                m = r(810641),
                D = r(615027),
                p = r(49128),
                b = r(24949),
                M = r(71620),
                f = r(668214),
                g = r(576469),
                A = r(206795),
                S = r(390387),
                _ = r(601576),
                y = r(164692),
                E = r(919022);
            const I = [],
                k = (e, a) => {
                    const r = Z(e, a),
                        t = r && r.id_str;
                    return t ? A.g$(e, t) : I;
                },
                L = (e, a) => S._h(e),
                w = (e, a) => !(v(e, a) && a.location?.state?.fromApp),
                v = (e, a) => {
                    const r = Z(e, a);
                    return r?.id_str;
                },
                Z = (e, a) => {
                    const r = a.location && a.location.state && a.location.state.userId;
                    return r ? E.ZP.select(e, r) : void 0;
                },
                C = (0, f.Z)()
                    .propsFromState(() => ({ shouldRedirect: w, viewerUser: E.ZP.selectViewerUser, membershipListIds: (0, b.P1)(k, (e) => e), module: (0, b.P1)(L, v, (e, a) => (e && a ? (0, y.Z)(e, a) : void 0)), user: Z }))
                    .propsFromActions(() => ({ addToast: _.fz, addUserToList: g.Z.addUserToList, toggleIsMember: g.Z.toggleIsMember, createLocalApiErrorHandler: (0, M.zr)("ADD_LIST_MEMBER_SCREEN"), fetchMembershipsIfNeeded: A.NU, removeUserFromList: g.Z.removeUserFromList }))
                    .withAnalytics({ page: "lists", section: "add_member" }),
                R = c().i2209530,
                N = c().c7e11484,
                T = c().a96208ba,
                P = c().c09609d8,
                U = c().d2826908,
                F = c().he062e8a,
                x = c().c2fb1e94;
            class B extends t.Component {
                constructor(e) {
                    super(e),
                        (this._renderRightControl = () => {
                            const { listsToAddTo: e, listsToRemoveFrom: a } = this.state;
                            return t.createElement(o.ZP, { disabled: 0 === e.length && 0 === a.length, onPress: this._handleSave, size: "small", style: H.button, type: "primaryFilled" }, R);
                        }),
                        (this._renderCreateListElement = () => {
                            const e = this._getTypeaheadUserItem();
                            return t.createElement(d.Z, { link: { pathname: "/i/lists/create", state: { suggestedUser: e } }, style: H.createList }, t.createElement(s.ZP, { color: "link", selectable: !1 }, U));
                        }),
                        (this._getEntryConfiguration = (0, u.Z)(() => (0, p.Z)({ role: "checkbox", onClick: this._handleListClick }))),
                        (this._getIsUserInList = (e) => {
                            const { membershipListIds: a } = this.props,
                                { listsToAddTo: r, listsToRemoveFrom: t } = this.state;
                            return (a && a.indexOf(e) > -1 && !this._containsListId(t, e)) || this._containsListId(r, e);
                        }),
                        (this._containsListId = (e, a) => e.indexOf(a) > -1),
                        (this._getTypeaheadUserItem = () => {
                            const { user: e } = this.props;
                            return e ? { can_dm: e.can_dm, can_media_tag: e.can_media_tag, id_str: e.id_str, name: e.name, profile_image_url_https: e.profile_image_url_https, protected: e.protected, screen_name: e.screen_name, social_context: { following: e.following, followed_by: e.followed_by }, verified: e.verified } : void 0;
                        }),
                        (this._handleListClick = (e, { listId: a, member_count: r }) => {
                            const { toggleIsMember: t, user: o } = this.props;
                            if ((e.stopPropagation(), e.preventDefault(), o)) {
                                const e = o.id_str;
                                this._getIsUserInList(a) ? this._handleRemoveListMember(a) : this._handleAddListMember(a, r), t({ targetUserId: e, listId: a });
                            }
                        }),
                        (this._handleClose = () => {
                            const { history: e, user: a } = this.props,
                                r = a && `/${a.screen_name}`;
                            e.goBack({ backLocation: r });
                        }),
                        (this._handleRemoveListMember = (e) => {
                            const { membershipListIds: a } = this.props;
                            e && a && (a.indexOf(e) > -1 ? this.setState({ listsToRemoveFrom: this.state.listsToRemoveFrom.concat(e) }) : this.setState({ listsToAddTo: this.state.listsToAddTo.filter((a) => a !== e) }));
                        }),
                        (this._handleAddListMember = (e, a) => {
                            const { addToast: r, membershipListIds: t } = this.props;
                            e && t && (a < 5e3 ? (t.indexOf(e) > -1 ? this.setState({ listsToRemoveFrom: this.state.listsToRemoveFrom.filter((a) => a !== e) }) : this.setState({ listsToAddTo: this.state.listsToAddTo.concat(e) })) : r({ text: x }));
                        }),
                        (this._handleSave = () => {
                            this._handleSaveAddToLists(), this._handleSaveRemoveFromLists(), this.setState({ saved: !0 }), this._handleClose();
                        }),
                        (this._handleSaveAddToLists = () => {
                            const { addUserToList: e, createLocalApiErrorHandler: a, user: r } = this.props,
                                { listsToAddTo: t } = this.state;
                            t.forEach((t) => {
                                t && r && e(t, { userId: r.id_str }).catch(a({}));
                            });
                        }),
                        (this._renderEmptyState = () => t.createElement(n.Z, { buttonLink: "/i/lists/create", buttonText: P, header: N, message: T })),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchMembershipsIfNeeded: a, user: r } = this.props;
                            r && a(r.id_str, { user_id: r.id_str, count: 1e3, filter_to_owned_lists: !0 }).catch(e());
                        }),
                        (this.state = { listsToAddTo: [], listsToRemoveFrom: [], saved: !1 });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                componentWillUnmount() {
                    const { toggleIsMember: e, user: a } = this.props,
                        { listsToAddTo: r, listsToRemoveFrom: t, saved: o } = this.state;
                    if (a && !o) {
                        const o = a.id_str;
                        [...r, ...t].forEach((a) => {
                            e({ targetUserId: o, listId: a });
                        });
                    }
                }
                render() {
                    const { history: e, module: a, shouldRedirect: r, viewerUser: o } = this.props;
                    if (r) {
                        const e = o ? `/${o.screen_name}/lists` : "/";
                        return t.createElement(D.Z, { to: e });
                    }
                    return a ? t.createElement(h.Z, { backLocation: o ? `/${o.screen_name}/lists` : "/", history: e, rightControl: this._renderRightControl(), title: F }, t.createElement(m.Z, { entryConfiguration: this._getEntryConfiguration(), header: this._renderCreateListElement(), module: a, renderEmptyState: this._renderEmptyState, title: F })) : null;
                }
                _handleSaveRemoveFromLists() {
                    const { createLocalApiErrorHandler: e, removeUserFromList: a, user: r } = this.props,
                        { listsToRemoveFrom: t } = this.state;
                    t.forEach((t) => {
                        t && r && a(t, { userId: r.id_str }).catch(e({}));
                    });
                }
            }
            const H = l.default.create((e) => ({ createList: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, emptyItem: { display: "inline-block", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space32 }, button: { marginStart: e.spaces.space12 } })),
                z = C(B);
        },
        869701: (e, a, r) => {
            r.r(a), r.d(a, { CreateListScreen: () => f, default: () => g });
            var t = r(202784),
                o = r(154003),
                d = r(111677),
                s = r.n(d),
                n = r(980407),
                l = r(737613),
                i = r(583957),
                c = r(125363),
                u = r(390387),
                h = r(668214);
            const m = (e, a) => a.location.state?.suggestedUser,
                D = (0, h.Z)()
                    .propsFromState(() => ({ suggestedUser: m }))
                    .withAnalytics({ page: "spheres_create_form" }),
                p = "CREATE_LIST_SCREEN",
                b = s().c1df579e,
                M = s().d2826908;
            function f(e) {
                const a = t.useRef(),
                    [r, d] = t.useState(!1),
                    [s, h] = t.useState(!1),
                    m = (0, c.v9)(u.Lz),
                    D = !r || s,
                    { analytics: f, history: g, location: A, suggestedUser: S } = e;
                return t.createElement(
                    n.Z,
                    {
                        backButtonType: S ? "back" : "close",
                        history: g,
                        onBackClick: (e) => {
                            f.scribeAction("cancel"), g.goBack();
                        },
                        rightControl: t.createElement(
                            o.ZP,
                            {
                                "aria-label": b,
                                disabled: D,
                                onPress: () => {
                                    h(!0), a.current && a.current.create();
                                },
                                size: "small",
                                type: "primaryFilled",
                            },
                            b,
                        ),
                        title: M,
                    },
                    m ? t.createElement(l.Z, { type: "List" }) : null,
                    t.createElement(i.Z, {
                        context: p,
                        history: g,
                        location: A,
                        onChange: (e) => {
                            d(e);
                        },
                        onError: () => {
                            h(!1);
                        },
                        ref: a,
                    }),
                );
            }
            const g = D(f);
        },
        260114: (e, a, r) => {
            r.r(a), r.d(a, { ListInfoScreen: () => F, default: () => B });
            var t = r(202784),
                o = r(325686),
                d = r(107267),
                s = r(779610),
                n = r(154003),
                l = r(242454),
                i = r(190286),
                c = r(392237),
                u = r(111677),
                h = r.n(u),
                m = r(187669),
                D = r(290402),
                p = r(980407),
                b = r(443781),
                M = r(737613),
                f = r(583957),
                g = r(73834),
                A = r(538327),
                S = r(725516),
                _ = r(125363),
                y = r(390387),
                E = r(615027),
                I = r(71620),
                k = r(668214),
                L = r(576469),
                w = r(510588);
            const v = (0, k.Z)()
                    .propsFromState(() => ({ basePath: w.$5, fetchStatus: w.DV, list: w.Fz, listId: w.xh, screenName: w.ax }))
                    .adjustStateProps(({ basePath: e, fetchStatus: a, list: r, listId: t, screenName: o }) => ({ authorId: r?.user, basePath: e, fetchStatus: a, list: r, listId: t, screenName: o }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, I.zr)("LIST_EDIT_SCREEN"), deleteList: L.Z.deleteList, fetchListIfNeeded: L.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "spheres_edit_form" }),
                Z = h().c4d7650c,
                C = h().b772cd66,
                R = h().ca5d0a82,
                N = h().h7f2418c,
                T = h().b18e5cd2,
                P = h().cdd73e9c,
                U = { confirmButtonLabel: h().d96cf7ce, headline: h().def8ff62, text: h().j8b9cde8 },
                F = (e) => {
                    const a = (0, S.z)(),
                        r = (0, d.useLocation)(),
                        c = (0, d.useHistory)(),
                        u = t.useRef(null),
                        [h, I] = t.useState(!1),
                        [k, L] = t.useState(!1),
                        { viewerUserId: w } = t.useContext(b.rC),
                        v = (0, _.v9)(y.Lz),
                        { authorId: F, basePath: B, createLocalApiErrorHandler: H, deleteList: z, fetchListIfNeeded: O, fetchStatus: $, list: V, listId: G, screenName: q } = e,
                        W = t.useCallback(() => {
                            O(G).catch(H(g.e));
                        }, [H, O, G]);
                    (0, m.q)(() => {
                        W();
                    });
                    const j = t.useCallback(() => {
                            a.scribe({ element: "delete", action: "click" }),
                                z(G)
                                    .then(() => q && c.replace(`/${q}/lists/`))
                                    .catch((e) => {
                                        H({ defaultToast: { text: T }, showToast: !0 })(e), L(!1);
                                    });
                        }, [a, H, z, c, G, q]),
                        Q = t.useMemo(() => ({ pathname: `${B}/members`, state: { previousStep: A.O.Edit } }), [B]),
                        X = t.useCallback(() => {
                            a.scribe({ element: "manage", action: "click" });
                        }, [a]),
                        K = t.useCallback(() => t.createElement(o.Z, { style: x.topBorder }, t.createElement(s.Z, { label: Z, link: Q, onPress: X })), [X, Q]),
                        J = t.useCallback(() => t.createElement(t.Fragment, null, t.createElement(o.Z, { style: x.mainSettings }, t.createElement(f.Z, { context: "LIST_EDIT_SCREEN", history: c, list: V, listId: G, location: r, onChange: Y, ref: u })), K(), t.createElement(l.Z, { color: "red500", label: P, onPress: ae }), k && t.createElement(i.Z, { confirmButtonLabel: U.confirmButtonLabel, confirmButtonType: "destructiveFilled", headline: U.headline, onCancel: re, onConfirm: j, text: U.text })), [j, c, V, G, r, K, k]);
                    function Y(e) {
                        I(e);
                    }
                    function ee() {
                        u.current && u.current.save();
                    }
                    function ae() {
                        L(!0);
                    }
                    function re() {
                        L(!1);
                    }
                    return F === w
                        ? t.createElement(
                              p.Z,
                              {
                                  history: c,
                                  onBackClick: function () {
                                      a.scribeAction("cancel"), c.goBack();
                                  },
                                  rightControl: t.createElement(n.ZP, { "aria-label": C, disabled: !h, onPress: ee, size: "small", type: "primaryFilled" }, C),
                                  title: R,
                              },
                              v ? t.createElement(M.Z, { type: "List" }) : null,
                              t.createElement(D.Z, { "aria-label": N, fetchStatus: $, onRequestRetry: W, render: J }),
                          )
                        : t.createElement(E.Z, { to: B });
                },
                x = c.default.create((e) => ({ mainSettings: { backgroundColor: e.colors.cellBackground }, topBorder: { borderTopWidth: e.borderWidths.small, borderTopStyle: "solid", borderTopColor: e.colors.borderColor } })),
                B = v(F);
        },
        435028: (e, a, r) => {
            r.r(a), r.d(a, { ListSubscribersScreen: () => A, default: () => S });
            var t = r(202784),
                o = r(457311),
                d = r(111677),
                s = r.n(d),
                n = r(980407),
                l = r(810641),
                i = r(24949),
                c = r(71620),
                u = r(668214),
                h = r(576469),
                m = r(78259),
                D = r(510588);
            const p = (0, u.Z)()
                    .propsFromState(() => ({ listId: D.xh, module: (0, i.P1)(D.xh, (e) => (0, m.Z)(e)) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, c.zr)("LIST_SUBSCRIBERS_SCREEN"), fetchListIfNeeded: h.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "spheres_detail", section: "subscribers" }),
                b = s().d1461f1e,
                M = s().bcbd3416,
                f = s().b197a56c,
                g = s().b197a56c;
            class A extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._noItemsRenderer = () => t.createElement(o.Z, { header: b, message: M })),
                        (this._handleListFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchListIfNeeded: a, listId: r } = this.props;
                            a(r).catch(e());
                        });
                }
                componentDidMount() {
                    this._handleListFetch();
                }
                render() {
                    const { history: e, module: a } = this.props;
                    return t.createElement(n.Z, { history: e, title: f }, t.createElement(l.Z, { module: a, renderEmptyState: this._noItemsRenderer, title: g }));
                }
            }
            const S = p(A);
        },
        197503: (e, a, r) => {
            r.r(a), r.d(a, { ListMembersScreen: () => S, default: () => _ });
            var t = r(202784),
                o = r(457311),
                d = r(111677),
                s = r.n(d),
                n = r(912021),
                l = r(370751),
                i = r(810641);
            const c = (e, a) => (e && e.id_str === a) || !1;
            var u = r(566741),
                h = r(71620),
                m = r(668214),
                D = r(390387),
                p = r(780936),
                b = r(510588);
            const M = (0, m.Z)()
                    .propsFromState(() => ({ author: b.l1, viewerUserId: D._h, listId: b.xh }))
                    .propsFromActions(() => ({ cleanupRemovedMembers: p.A, createLocalApiErrorHandler: (0, h.zr)("LIST_MEMBERS_SCREEN") }))
                    .withAnalytics({ section: "members" }),
                f = s().a332103e,
                g = s().d1461f1e,
                A = s().h9ce3406;
            class S extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._noItemsRenderer = () => t.createElement(o.Z, { header: g, message: f })),
                        (this.state = { removedUsers: new Set() }),
                        (this._getEntryConfiguration = () => {
                            const { author: e, listId: a, viewerUserId: r } = this.props,
                                { removedUsers: t } = this.state;
                            return this._getMemoizedEntryConfiguraton(e, a, r, t, this._isCurrentMember, this._onAdd, this._onRemove);
                        }),
                        (this._getMemoizedEntryConfiguraton = (0, n.Z)((e, a, r, t, o, d, s) => (0, u.Z)({ getIsMember: o, listId: a, isListAuthor: c(e, r), onAdd: d, onRemove: s }))),
                        (this._isCurrentMember = (e) => !this.state.removedUsers.has(e)),
                        (this._onAdd = (e) => {
                            const a = (0, l.Z)([...this.state.removedUsers]);
                            a.delete(e), this.setState({ removedUsers: a });
                        }),
                        (this._onRemove = (e) => {
                            const a = (0, l.Z)([...this.state.removedUsers]);
                            a.add(e), this.setState({ removedUsers: a });
                        });
                }
                componentWillUnmount() {
                    const { cleanupRemovedMembers: e, module: a } = this.props,
                        { removedUsers: r } = this.state;
                    e(a, r);
                }
                render() {
                    const { module: e } = this.props;
                    return t.createElement(i.Z, { entryConfiguration: this._getEntryConfiguration(), module: e, renderEmptyState: this._noItemsRenderer, title: A });
                }
            }
            const _ = M(S);
        },
        523646: (e, a, r) => {
            r.r(a), r.d(a, { ListSuggestionsScreen: () => T, default: () => U });
            var t = r(202784),
                o = r(325686),
                d = r(457311),
                s = r(834324),
                n = r(392237),
                l = r(111677),
                i = r.n(l),
                c = r(47086),
                u = r(912021),
                h = r(370751),
                m = r(443781),
                D = r(810641),
                p = r(874088),
                b = r(293115),
                M = r(339110),
                f = r(312771),
                g = r(566741),
                A = r(71620),
                S = r(668214),
                _ = r(688781),
                y = r(919022),
                E = r(510588);
            const I = (e, { suggestedUsersModule: a }) => a.selectInitialFetchStatus(e),
                k = (0, S.Z)()
                    .propsFromState(() => ({ suggestionsFetchStatus: I, list: E.Fz ?? void 0, listId: E.xh }))
                    .propsFromActions(() => ({ cleanupAddedUsers: _.DK, createLocalApiErrorHandler: (0, A.zr)("LIST_SUGGESTED_USERS_SCREEN"), fetchUserIfNeeded: y.ZP.fetchOneIfNeeded, injectSuggestedUser: _.i7 }))
                    .withAnalytics({ section: "suggested" }),
                L = i().fc9dd578,
                w = i().e2f7dc62,
                v = i().gc23cc00,
                Z = i().e3deb126,
                C = i().c2fb1e94,
                R = { section: "search" },
                N = [M.my.Users];
            class T extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { addedUsers: new Set(), query: "", showListMemberExceededMessage: !1 }),
                        (this._noItemsRenderer = () => t.createElement(d.Z, { header: w, message: v })),
                        (this._getMemoizedAddRemoveDecorations = (0, u.Z)((e, a, r, t, o) => (0, g.m)({ getIsMember: (e) => r.has(e), shouldAddUserToList: e, listId: a, onAdd: t, onRemove: o }))),
                        (this._getMemoizedEntryConfiguration = (0, u.Z)((e, a, r, t, o, d) => (0, g.Z)({ getIsMember: t, shouldAddUserToList: r, listId: e, isListAuthor: !0, onAdd: o, onRemove: d }))),
                        (this._isListMemberCountValid = () => {
                            const { list: e } = this.props;
                            return !e || e.member_count < 5e3;
                        }),
                        (this._isCurrentMember = (e) => this.state.addedUsers.has(e)),
                        (this._onAdd = (e) => {
                            if (this._isListMemberCountValid()) {
                                const { createLocalApiErrorHandler: a, fetchUserIfNeeded: r } = this.props;
                                r(e).catch(a());
                                const t = (0, h.Z)([...this.state.addedUsers]);
                                t.add(e), this.setState({ addedUsers: t });
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
                        r = this.props.suggestionsFetchStatus;
                    if (a !== f.ZP.LOADED && r === f.ZP.LOADED) {
                        const { injectSuggestedUser: e, suggestedUserId: a, suggestedUsersModule: r } = this.props;
                        a && e(a, r);
                    }
                }
                componentWillUnmount() {
                    const { cleanupAddedUsers: e, membersModule: a, suggestedUsersModule: r } = this.props,
                        { addedUsers: t } = this.state;
                    e(r, a, [...t]);
                }
                render() {
                    const { listId: e, suggestedUsersModule: a } = this.props,
                        { addedUsers: r, showListMemberExceededMessage: d } = this.state;
                    return t.createElement(o.Z, null, t.createElement(b.nO, { namespace: R }, t.createElement(p.default, { alwaysOpen: !0, filter: N, isModal: !0, onQueryChange: this._handleQueryChange, placeholder: L, renderUserDecoration: this._getMemoizedAddRemoveDecorations(this._isListMemberCountValid, e, r, this._onAdd, this._onRemove), rounded: !0, shouldAutoFocus: !0, shouldFocusOnClear: !0, source: M._4.ListMembersSuggested, style: P.input, withUserHoverCard: !0 })), d && t.createElement(o.Z, { style: P.callout }, t.createElement(s.Z, { Icon: c.default, text: C })), this.state.query ? null : t.createElement(D.Z, { entryConfiguration: this._getMemoizedEntryConfiguration(e, r, this._isListMemberCountValid, this._isCurrentMember, this._onAdd, this._onRemove), module: a, renderEmptyState: this._noItemsRenderer, title: Z }));
                }
            }
            T.contextType = m.rC;
            const P = n.default.create((e) => ({ input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 }, callout: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 } })),
                U = k(T);
        },
        566741: (e, a, r) => {
            r.d(a, { Z: () => c, m: () => l });
            var t = r(202784),
                o = r(131779),
                d = r(269011),
                s = r(335632),
                n = r(962741);
            const l =
                    ({ getIsMember: e, listId: a, onAdd: r, onRemove: d, shouldAddUserToList: s }) =>
                    ({ userId: n }) =>
                        t.createElement(o.Z, { getIsMember: e, listId: a, onAdd: r, onRemove: d, shouldAddUserToList: s ?? (() => !0), userId: n }),
                i = (0, s.G)({}),
                c = ({ getIsMember: e, isListAuthor: a, listId: r, onAdd: t, onRemove: o, shouldAddUserToList: s }) => ({ ...i, [n.ZP.User]: (0, d.Z)({ decoration: a ? l({ getIsMember: e, shouldAddUserToList: s, listId: r, onAdd: t, onRemove: o }) : void 0 }) });
        },
        761893: (e, a, r) => {
            r.r(a), r.d(a, { ListUserManagementScreen: () => U, default: () => F });
            var t = r(202784),
                o = r(360917),
                d = r.n(o),
                s = r(107267),
                n = r(154003),
                l = r(111677),
                i = r.n(l),
                c = r(980407),
                u = r(507651),
                h = r(293115),
                m = r(538327),
                D = r(717988),
                p = r(24949),
                b = r(71620),
                M = r(668214),
                f = r(576469),
                g = r(780936),
                A = r(688781),
                S = r(510588);
            const _ = (e, a) => a.location.state?.previousStep,
                y = (e, a) => a.location.state?.suggestedUser?.id_str,
                E = (e, a) => {
                    const r = S.Fz(e, a);
                    return r?.member_count || 0;
                },
                I = (0, M.Z)()
                    .propsFromState(() => ({ basePath: S.$5, listId: S.xh, memberCount: E, membersModule: (0, p.P1)(S.xh, (e) => (0, g.Z)(e)), previousStep: _, suggestedUserId: y, suggestedUsersModule: (0, p.P1)(S.Fz, S.xh, _, (e, a, r) => (0, A.ZP)({ displayLocation: r, listId: a, listName: e?.name, listDescription: e?.description })) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("LIST_MANAGE_MEMBERS_SCREEN"), fetchListIfNeeded: f.Z.fetchOneIfNeeded }))
                    .withAnalytics(),
                k = i().c4d7650c,
                L = i().f0ab07f5,
                w = i().ba5a88e4,
                v = i().b772cd66,
                Z = i().h9ce3406,
                C = i().dfeaeb26,
                R = { page: "spheres_create_members" },
                N = { page: "spheres_edit_members" },
                T = (0, D.p)(
                    () =>
                        Promise.all([
                            r.e("icons.8"),
                            r.e("icons.15"),
                            r.e("icons.7"),
                            r.e("icons.3"),
                            r.e("icons.24"),
                            r.e("icons.12"),
                            r.e("icons.22"),
                            r.e("icons.2"),
                            r.e("icons.18"),
                            r.e("icons.6"),
                            r.e("icons.1"),
                            r.e("modules.common-e907d115"),
                            r.e("modules.common-e019dbda"),
                            r.e("icons.14"),
                            r.e("modules.audio-6107ac1a"),
                            r.e("modules.audio-b953418a"),
                            r.e("modules.audio-7c51e6a7"),
                            r.e("modules.audio-04db59e9"),
                            r.e("modules.audio-76583d6c"),
                            r.e("modules.audio-b7a8a5fb"),
                            r.e("modules.audio-51f6e793"),
                            r.e("modules.audio-e019dbda"),
                            r.e("modules.audio-262c94d4"),
                            r.e("modules.audio-c6fe4ea4"),
                            r.e("icons.21"),
                            r.e("icons.16"),
                            r.e("icons.28"),
                            r.e("icons.17"),
                            r.e("icons.4"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                            r.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            r.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            r.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            r.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                            r.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            r.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            r.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            r.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            r.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            r.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            r.e("bundle.UserLists-bc6ccf4c"),
                            r.e("bundle.UserLists-2a1252f0"),
                            r.e("bundle.UserLists-e019dbda"),
                            r.e("bundle.UserLists-63cb1cc4"),
                            r.e("bundle.UserLists-6df79b50"),
                        ]).then(r.bind(r, 197503)),
                    { shouldMigrateToX: !1 },
                ),
                P = (0, D.p)(
                    () =>
                        Promise.all([
                            r.e("icons.8"),
                            r.e("icons.15"),
                            r.e("icons.7"),
                            r.e("icons.3"),
                            r.e("icons.24"),
                            r.e("icons.12"),
                            r.e("icons.22"),
                            r.e("icons.2"),
                            r.e("icons.18"),
                            r.e("icons.6"),
                            r.e("icons.1"),
                            r.e("modules.common-e907d115"),
                            r.e("modules.common-e019dbda"),
                            r.e("icons.14"),
                            r.e("modules.audio-6107ac1a"),
                            r.e("modules.audio-b953418a"),
                            r.e("modules.audio-7c51e6a7"),
                            r.e("modules.audio-04db59e9"),
                            r.e("modules.audio-76583d6c"),
                            r.e("modules.audio-b7a8a5fb"),
                            r.e("modules.audio-51f6e793"),
                            r.e("modules.audio-e019dbda"),
                            r.e("modules.audio-262c94d4"),
                            r.e("modules.audio-c6fe4ea4"),
                            r.e("icons.21"),
                            r.e("icons.16"),
                            r.e("icons.28"),
                            r.e("icons.17"),
                            r.e("icons.4"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                            r.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            r.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            r.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                            r.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                            r.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                            r.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                            r.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            r.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            r.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            r.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            r.e("bundle.UserLists-bc6ccf4c"),
                            r.e("bundle.UserLists-2a1252f0"),
                            r.e("bundle.UserLists-e019dbda"),
                            r.e("bundle.UserLists-63cb1cc4"),
                            r.e("bundle.UserLists-6df79b50"),
                        ]).then(r.bind(r, 523646)),
                    { shouldMigrateToX: !1 },
                ),
                U = (e) => {
                    const { basePath: a, createLocalApiErrorHandler: r, fetchListIfNeeded: o, history: l, listId: i, location: D, match: p, memberCount: b, membersModule: M, previousStep: f, suggestedUserId: g, suggestedUsersModule: A } = e;
                    t.useEffect(() => {
                        o(i).catch(r());
                    }, [r, o, i]);
                    let S = Z,
                        _ = d();
                    f === m.O.Creation ? ((S = C), (_ = R)) : f === m.O.Edit && ((S = k), (_ = N));
                    const y = f === m.O.Creation || f === m.O.Edit,
                        E = L({ memberCount: b }),
                        I = t.useMemo(
                            () => [
                                { to: { pathname: `/i/lists/${i}/members`, state: D.state }, label: E, key: E },
                                { to: { pathname: `/i/lists/${i}/members/suggested`, state: D.state }, label: w, key: w },
                            ],
                            [i, D.state, E],
                        ),
                        U = t.useCallback(() => {
                            g ? l.go(-3) : l.replace(a);
                        }, [a, l, g]),
                        F = t.useMemo(() => (f === m.O.Creation ? t.createElement(n.ZP, { onPress: U, size: "small", type: "primaryFilled" }, v) : void 0), [U, f]),
                        x = f === m.O.Edit || g ? "back" : "close",
                        B = t.useMemo(() => (y ? t.createElement(u.Z, { "aria-label": S, links: I }) : void 0), [I, y, S]),
                        H = t.useMemo(() => (y ? t.createElement(s.Switch, null, t.createElement(s.Route, { exact: !0, path: `/i/lists/${i}/members` }, t.createElement(T, { match: p, module: M })), t.createElement(s.Route, { exact: !0, path: `/i/lists/${i}/members/suggested` }, t.createElement(P, { match: p, membersModule: M, suggestedUserId: g, suggestedUsersModule: A }))) : t.createElement(T, { match: p, module: M })), [i, p, M, y, g, A]);
                    return t.createElement(h.nO, { namespace: _ }, t.createElement(c.Z, { backButtonType: x, history: l, rightControl: F, secondaryBar: B, title: S }, H));
                },
                F = I(U);
        },
        881206: (e, a, r) => {
            r.r(a), r.d(a, { ListScreen: () => re, default: () => oe });
            var t = r(202784),
                o = r(325686),
                d = r(108362),
                s = r(731708),
                n = r(392237),
                l = r(111677),
                i = r.n(l),
                c = r(121791),
                u = r(718e3),
                h = r(789831),
                m = r(290402),
                D = r(252021),
                p = r(32677),
                b = r(935167),
                M = r(73834),
                f = r(293115),
                g = r(942893),
                A = r(503229),
                S = r(87063),
                _ = r(466441),
                y = r(71620),
                E = r(668214),
                I = r(576469),
                k = r(510588);
            const L = (0, E.Z)()
                .propsFromState(() => ({ fetchStatus: k.DV, listId: k.xh, listMode: k.Ns, listName: k.By, screenName: k.ax }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("LIST_SCREEN"), fetchListIfNeeded: I.Z.fetchOneIfNeeded }))
                .withAnalytics({ page: "spheres_detail" });
            var w = r(688715),
                v = r(457311),
                Z = r(912021),
                C = r(791632),
                R = r(443781),
                N = r(38293),
                T = r(527409),
                P = r(652904),
                U = r(810641),
                F = r(725516),
                x = r(519896),
                B = r(506653),
                H = r(919022);
            const z = (e, a) => {
                    const r = k.ax(e, a);
                    return r ? H.ZP.selectByScreenName(e, r) : void 0;
                },
                O = (0, E.Z)().propsFromState(() => ({ listName: k.By, screenName: k.ax, useRanked: k._g, user: z })),
                $ = i().dcdc75a3,
                V = i().i9b7f6ba,
                G = i().a2515900,
                q = i().je23cdb2,
                W = i().fa884026,
                j = i().gba95028,
                Q = i().e79ed125,
                X = (0, w.ju)("https://support.x.com/articles/117063");
            class K extends t.Component {
                constructor(e, a) {
                    super(e, a),
                        (this.state = { showBlockedTweets: !1 }),
                        (this._renderHeaderAndContent = () => {
                            const { listId: e, useRanked: a, user: r } = this.props,
                                o = this._getModule(e, this._isSwitchRankingEnabled && !!a);
                            return o ? (r && r.blocking && !this.state.showBlockedTweets ? this._renderBlockingListOwner() : t.createElement(U.Z, { header: this._renderListDetail(), loadingAccessibilityLabel: V, module: o, prerollDisplayLocation: x.Nw.OTHER, renderEmptyState: this._renderEmptyState, title: W })) : null;
                        }),
                        (this._reconcileHistoryLocation = () => {
                            const { history: e, location: a, useRanked: r } = this.props,
                                t = a.query.show;
                            "top" !== t || r ? "top" !== t && r && e.replace({ pathname: a.pathname, query: { show: "top" } }) : e.replace({ pathname: a.pathname, query: {} });
                        }),
                        (this._getModule = (0, Z.Z)((e, a) => (e ? (0, B.Z)({ listId: e, useRanked: a }) : void 0))),
                        (this._renderListDetail = () => {
                            const { history: e, listId: a, location: r } = this.props,
                                o = (0, C.cu)(e);
                            return a && !o ? t.createElement(T.default, { basePath: r.pathname, listId: a }) : null;
                        }),
                        (this._handleShowBlockedTweets = () => {
                            this.setState({ showBlockedTweets: !0 });
                        }),
                        (this._renderEmptyState = ({ header: e = G, message: a = q, buttonText: r, onButtonPress: o } = {}) => t.createElement(t.Fragment, null, this._renderListDetail(), t.createElement(v.Z, { buttonText: r, buttonType: "brandOutlined", header: e, message: a, onButtonPress: o }))),
                        (this._isSwitchRankingEnabled = this.context.featureSwitches.isTrue("home_timeline_spheres_ranking_mode_control_enabled")),
                        this._isSwitchRankingEnabled && this._reconcileHistoryLocation();
                }
                componentDidUpdate(e) {
                    const a = e.useRanked !== this.props.useRanked;
                    this._isSwitchRankingEnabled && a && this._reconcileHistoryLocation();
                }
                render() {
                    const { listName: e, screenName: a } = this.props,
                        r = $({ screenName: a, listName: e });
                    return t.createElement(t.Fragment, null, t.createElement(N.Z, { title: r }), t.createElement(P.Z, null, this._renderHeaderAndContent()));
                }
                _renderBlockingListOwner() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const { screen_name: a } = e,
                        r = Q({ screenName: a }),
                        o = t.createElement(i().I18NFormatMessage, { $i18n: "f98ecc47", screenName: a }, t.createElement(s.ZP, { link: X }, i().a2216a79));
                    return this._renderEmptyState({ header: r, message: o, buttonText: j, onButtonPress: this._handleShowBlockedTweets });
                }
            }
            K.contextType = R.rC;
            const J = (0, F.Z)(O(K)),
                Y = i().fa884026,
                ee = i().eb7b54be,
                ae = i().j681933e,
                re = (e) => {
                    const { createLocalApiErrorHandler: a, fetchListIfNeeded: r, fetchStatus: n, history: l, listId: i, listMode: A, listName: y, location: E, match: I, screenName: k, scribeNamespace: L } = e,
                        w = t.createElement(p.Z, { history: l }),
                        v = "private" === A,
                        Z = () => t.createElement(J, { history: l, listId: i, location: E, match: I }),
                        C = t.useMemo(() => ({ items: [{ ...g.Z.forList(i) }] }), [i]),
                        R = t.createElement(b.ZP, { listId: i, match: I, scribeNamespace: L }),
                        N = t.useCallback(() => {
                            r(i).catch(a(M.e));
                        }, [a, r, i]);
                    return (
                        t.useEffect(() => {
                            N();
                        }, [N]),
                        n !== S.Z.LOADED || (y && k) ? t.createElement(f.nO, { data: C }, t.createElement(D.Z, { backLocation: k && `/${k}/lists`, documentTitle: Y, history: l, primaryContent: t.createElement(h.Z, { component: d.Z, fab: w }, n === S.Z.FAILED ? t.createElement(m.Z, { "aria-label": ee, fetchStatus: n, onRequestRetry: N, render: Z }) : Z()), rightControl: R, sidebarContent: t.createElement(u.Z, null), subtitle: k && `@${k}`, title: t.createElement(o.Z, { style: te.title }, t.createElement(s.ZP, null, y), v ? t.createElement(c.default, { "aria-label": ae, role: "img", style: te.iconLock }) : null) })) : t.createElement(_.default, { history: l, location: E, match: I })
                    );
                },
                te = n.default.create((e) => ({ iconLock: { alignSelf: "center", marginStart: e.spaces.space2 }, title: { flexDirection: "row" } })),
                oe = L((0, A.Z)(re));
        },
        510588: (e, a, r) => {
            r.d(a, { $5: () => u, By: () => M, DV: () => S, Fz: () => p, Ge: () => g, Ns: () => I, Wy: () => D, _g: () => y, ax: () => f, cx: () => b, l1: () => _, tt: () => E, xh: () => m });
            var t = r(614983),
                o = r.n(t),
                d = r(842799),
                s = r(286e3),
                n = r(576469),
                l = r(919022),
                i = r(312771);
            const c = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                u = (e, a) => {
                    const r = D(e, a),
                        t = f(e, a),
                        o = g(e, a);
                    return r ? `/i/lists/${r}` : t && o ? `/${t}/lists/${o}` : "";
                },
                h = (e, a) => a.match.params.listId || void 0,
                m = (e, a) => {
                    const r = a.match.params.listId;
                    return o()(r, "listId should always be specified"), r;
                },
                D = (e, a) =>
                    h(0, a) ||
                    ((e, a) => {
                        const r = p(e, a);
                        return r && r.id_str;
                    })(e, a),
                p = (e, a) => {
                    const r = h(0, a);
                    return r ? n.Z.select(e, r) : n.Z.selectByKey(e, A(e, a));
                },
                b = (e, a) => {
                    const r = p(e, a);
                    return r && r.following;
                },
                M = (e, a) => {
                    const r = p(e, a);
                    return r && r.name;
                },
                f = (e, a) => {
                    const r = h(0, a);
                    return a.match.params.screenName || void 0 || (r && n.Z.selectListAuthorScreenName(e, r));
                },
                g = (e, a) => {
                    const r = p(e, a);
                    return a.match.params.slug || (r && r.slug);
                },
                A = (e, a) => {
                    const r = a.match.params.slug,
                        t = a.match.params.screenName;
                    return r && t ? (0, d.Z)(t, r) : "";
                },
                S = (e, a) => {
                    const r =
                        D(e, a) ||
                        ((e, a) => {
                            const r = g(e, a),
                                t = f(e, a);
                            return r && t ? (0, d.Z)(t, r) : "";
                        })(e, a);
                    return n.Z.selectFetchStatus(e, r) || i.ZP.NONE;
                },
                _ = (e, a) => {
                    const r = f(e, a);
                    return r ? l.ZP.selectByScreenName(e, r) : void 0;
                },
                y = (e, a) => {
                    const r = D(e, a),
                        t = (0, s.nx)(e);
                    return (r && t[r] && t[r].useRanked) || !1;
                },
                E = (e, a) => {
                    const r = n.Z.select(e, a);
                    if (r) {
                        const e = r.customBanner;
                        return e || r.defaultBanner;
                    }
                    return { crop: [], image: c };
                },
                I = (e, a) => {
                    const r = p(e, a);
                    return r?.mode;
                };
        },
        424721: (e, a, r) => {
            r.r(a), r.d(a, { default: () => L });
            var t = r(202784),
                o = r(457311),
                d = r(111677),
                s = r.n(d),
                n = r(408178),
                l = r(252021),
                i = r(421730),
                c = r(810641),
                u = r(24949),
                h = r(71620),
                m = r(2430),
                D = r(668214),
                p = r(783284),
                b = r(735313);
            function M() {
                return (0, m.cI)("q");
            }
            const f = (0, D.Z)()
                    .propsFromState(() => ({ module: (0, u.P1)(M(), (e) => (0, p.Z)(e ?? "")), query: M() }))
                    .propsFromActions(() => ({ clearTimelineCache: (e) => (0, b.Z)(e), createLocalApiErrorHandler: (0, h.zr)("LIST_SEARCH_SCREEN") }))
                    .withAnalytics({ page: "list_search" }),
                g = s().e9f3dec4,
                A = s().b9192d55,
                S = s().d6a23192,
                _ = s().ie256518,
                y = s().j57a2568,
                E = s().hc76e8cd,
                I = s().d872881a,
                k = t.createElement(n.B, null);
            const L = f(function (e) {
                const { clearTimelineCache: a, createLocalApiErrorHandler: r, module: d, query: s = "" } = e;
                function n() {
                    return t.createElement(o.Z, { buttonLink: "/i/lists/create", buttonText: S, buttonType: "primaryFilled", header: E({ query: s }), message: I, secondaryButtonType: "primaryOutlined" });
                }
                t.useEffect(() => {
                    a(d).catch(r());
                }, [a, r, d]);
                const u = t.useMemo(() => t.createElement(i.Z, { initialValue: s }), [s]),
                    h = s || y,
                    m = s ? A({ query: s }) : g;
                return t.createElement(l.Z, {
                    backLocation: "/",
                    customSearchBox: u,
                    documentTitle: m,
                    history: e.history,
                    primaryContent: function () {
                        return t.createElement(c.Z, { module: d, renderEmptyState: n, title: y });
                    },
                    primaryContentLabel: _,
                    sidebarContent: k,
                    title: h,
                    withSearchBox: !0,
                });
            });
        },
        466441: (e, a, r) => {
            r.r(a), r.d(a, { NotFoundScreen: () => g, default: () => S });
            r(571372);
            var t = r(202784),
                o = r(386802),
                d = r(108362),
                s = r(392237),
                n = r(111677),
                l = r.n(n),
                i = r(187669),
                c = r(449067),
                u = r(38293),
                h = r(56851),
                m = r(652904),
                D = r(952793),
                p = r(163889),
                b = r(725516);
            const M = l().ba929da8,
                f = l().d203e242;
            function g(e) {
                const { splat: a } = e.match.params,
                    { isModal: r } = t.useContext(o.Z),
                    s = (0, D.hC)("responsive_web_report_page_not_found");
                return (
                    (0, i.q)(() => {
                        s && a && (0, p.ZP)(new Error(`Page not found: ${a}`));
                    }),
                    t.createElement(m.Z, null, t.createElement(c.Z.Configure, { backLocation: "/", documentTitle: M, title: f }), t.createElement(d.Z, { style: r && A.modal }, t.createElement(h.Z, null)), t.createElement(u.Z, { title: M, withMeta: !1 }))
                );
            }
            const A = s.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                S = (0, b.Z)(g, { page: "not_found" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-63cb1cc4.5c949a0a.js.map
