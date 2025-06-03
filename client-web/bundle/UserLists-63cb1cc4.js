"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-63cb1cc4"],
    {
        306518: (e, a, r) => {
            r.r(a), r.d(a, { ListRedirect: () => D, default: () => b });
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
                p = (0, c.Z)()
                    .propsFromState(() => ({ listId: h.Wy, screenName: h.ax, slug: h.Ge, fetchStatus: h.DV, subroute: m }))
                    .propsFromActions(() => ({ fetchListIfNeeded: u.Z.fetchOneIfNeeded, createLocalApiErrorHandler: (0, i.zr)("LISTS_REDIRECT") }));
            class D extends t.Component {
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
            const b = p((0, d.Z)(D));
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
                p = r(615027),
                D = r(49128),
                b = r(24949),
                M = r(71620),
                f = r(668214),
                A = r(576469),
                S = r(206795),
                g = r(390387),
                y = r(601576),
                _ = r(164692),
                E = r(919022);
            const I = [],
                L = (e, a) => {
                    const r = Z(e, a),
                        t = r && r.id_str;
                    return t ? S.g$(e, t) : I;
                },
                v = (e, a) => g._h(e),
                w = (e, a) => !(k(e, a) && a.location?.state?.fromApp),
                k = (e, a) => {
                    const r = Z(e, a);
                    return r?.id_str;
                },
                Z = (e, a) => {
                    const r = a.location && a.location.state && a.location.state.userId;
                    return r ? E.ZP.select(e, r) : void 0;
                },
                P = (0, f.Z)()
                    .propsFromState(() => ({ shouldRedirect: w, viewerUser: E.ZP.selectViewerUser, membershipListIds: (0, b.P1)(L, (e) => e), module: (0, b.P1)(v, k, (e, a) => (e && a ? (0, _.Z)(e, a) : void 0)), user: Z }))
                    .propsFromActions(() => ({ addToast: y.fz, addUserToList: A.Z.addUserToList, toggleIsMember: A.Z.toggleIsMember, createLocalApiErrorHandler: (0, M.zr)("ADD_LIST_MEMBER_SCREEN"), fetchMembershipsIfNeeded: S.NU, removeUserFromList: A.Z.removeUserFromList }))
                    .withAnalytics({ page: "lists", section: "add_member" }),
                C = c().i2209530,
                R = c().c7e11484,
                N = c().a96208ba,
                T = c().c09609d8,
                U = c().d2826908,
                F = c().he062e8a,
                x = c().c2fb1e94;
            class B extends t.Component {
                constructor(e) {
                    super(e),
                        (this._renderRightControl = () => {
                            const { listsToAddTo: e, listsToRemoveFrom: a } = this.state;
                            return t.createElement(o.ZP, { disabled: 0 === e.length && 0 === a.length, onPress: this._handleSave, size: "small", style: H.button, type: "primaryFilled" }, C);
                        }),
                        (this._renderCreateListElement = () => {
                            const e = this._getTypeaheadUserItem();
                            return t.createElement(d.Z, { link: { pathname: "/i/lists/create", state: { suggestedUser: e } }, style: H.createList }, t.createElement(s.ZP, { color: "link", selectable: !1 }, U));
                        }),
                        (this._getEntryConfiguration = (0, u.Z)(() => (0, D.Z)({ role: "checkbox", onClick: this._handleListClick }))),
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
                        (this._renderEmptyState = () => t.createElement(n.Z, { buttonLink: "/i/lists/create", buttonText: T, header: R, message: N })),
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
                        return t.createElement(p.Z, { to: e });
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
                z = P(B);
        },
        869701: (e, a, r) => {
            r.r(a), r.d(a, { CreateListScreen: () => f, default: () => A });
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
                p = (0, h.Z)()
                    .propsFromState(() => ({ suggestedUser: m }))
                    .withAnalytics({ page: "spheres_create_form" }),
                D = "CREATE_LIST_SCREEN",
                b = s().c1df579e,
                M = s().d2826908;
            function f(e) {
                const a = t.useRef(),
                    [r, d] = t.useState(!1),
                    [s, h] = t.useState(!1),
                    m = (0, c.v9)(u.Lz),
                    p = !r || s,
                    { analytics: f, history: A, location: S, suggestedUser: g } = e;
                return t.createElement(
                    n.Z,
                    {
                        backButtonType: g ? "back" : "close",
                        history: A,
                        onBackClick: (e) => {
                            f.scribeAction("cancel"), A.goBack();
                        },
                        rightControl: t.createElement(
                            o.ZP,
                            {
                                "aria-label": b,
                                disabled: p,
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
                        context: D,
                        history: A,
                        location: S,
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
            const A = p(f);
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
                p = r(290402),
                D = r(980407),
                b = r(443781),
                M = r(737613),
                f = r(583957),
                A = r(73834),
                S = r(538327),
                g = r(725516),
                y = r(125363),
                _ = r(390387),
                E = r(615027),
                I = r(71620),
                L = r(668214),
                v = r(576469),
                w = r(510588);
            const k = (0, L.Z)()
                    .propsFromState(() => ({ basePath: w.$5, fetchStatus: w.DV, list: w.Fz, listId: w.xh, screenName: w.ax }))
                    .adjustStateProps(({ basePath: e, fetchStatus: a, list: r, listId: t, screenName: o }) => ({ authorId: r?.user, basePath: e, fetchStatus: a, list: r, listId: t, screenName: o }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, I.zr)("LIST_EDIT_SCREEN"), deleteList: v.Z.deleteList, fetchListIfNeeded: v.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "spheres_edit_form" }),
                Z = h().c4d7650c,
                P = h().b772cd66,
                C = h().ca5d0a82,
                R = h().h7f2418c,
                N = h().b18e5cd2,
                T = h().cdd73e9c,
                U = { confirmButtonLabel: h().d96cf7ce, headline: h().def8ff62, text: h().j8b9cde8 },
                F = (e) => {
                    const a = (0, g.z)(),
                        r = (0, d.useLocation)(),
                        c = (0, d.useHistory)(),
                        u = t.useRef(null),
                        [h, I] = t.useState(!1),
                        [L, v] = t.useState(!1),
                        { viewerUserId: w } = t.useContext(b.rC),
                        k = (0, y.v9)(_.Lz),
                        { authorId: F, basePath: B, createLocalApiErrorHandler: H, deleteList: z, fetchListIfNeeded: O, fetchStatus: $, list: V, listId: q, screenName: W } = e,
                        j = t.useCallback(() => {
                            O(q).catch(H(A.e));
                        }, [H, O, q]);
                    (0, m.q)(() => {
                        j();
                    });
                    const G = t.useCallback(() => {
                            a.scribe({ element: "delete", action: "click" }),
                                z(q)
                                    .then(() => W && c.replace(`/${W}/lists/`))
                                    .catch((e) => {
                                        H({ defaultToast: { text: N }, showToast: !0 })(e), v(!1);
                                    });
                        }, [a, H, z, c, q, W]),
                        Q = t.useMemo(() => ({ pathname: `${B}/members`, state: { previousStep: S.O.Edit } }), [B]),
                        X = t.useCallback(() => {
                            a.scribe({ element: "manage", action: "click" });
                        }, [a]),
                        K = t.useCallback(() => t.createElement(o.Z, { style: x.topBorder }, t.createElement(s.Z, { label: Z, link: Q, onPress: X })), [X, Q]),
                        J = t.useCallback(() => t.createElement(t.Fragment, null, t.createElement(o.Z, { style: x.mainSettings }, t.createElement(f.Z, { context: "LIST_EDIT_SCREEN", history: c, list: V, listId: q, location: r, onChange: Y, ref: u })), K(), t.createElement(l.Z, { color: "red500", label: T, onPress: ae }), L && t.createElement(i.Z, { confirmButtonLabel: U.confirmButtonLabel, confirmButtonType: "destructiveFilled", headline: U.headline, onCancel: re, onConfirm: G, text: U.text })), [G, c, V, q, r, K, L]);
                    function Y(e) {
                        I(e);
                    }
                    function ee() {
                        u.current && u.current.save();
                    }
                    function ae() {
                        v(!0);
                    }
                    function re() {
                        v(!1);
                    }
                    return F === w
                        ? t.createElement(
                              D.Z,
                              {
                                  history: c,
                                  onBackClick: function () {
                                      a.scribeAction("cancel"), c.goBack();
                                  },
                                  rightControl: t.createElement(n.ZP, { "aria-label": P, disabled: !h, onPress: ee, size: "small", type: "primaryFilled" }, P),
                                  title: C,
                              },
                              k ? t.createElement(M.Z, { type: "List" }) : null,
                              t.createElement(p.Z, { "aria-label": R, fetchStatus: $, onRequestRetry: j, render: J }),
                          )
                        : t.createElement(E.Z, { to: B });
                },
                x = c.default.create((e) => ({ mainSettings: { backgroundColor: e.colors.cellBackground }, topBorder: { borderTopWidth: e.borderWidths.small, borderTopStyle: "solid", borderTopColor: e.colors.borderColor } })),
                B = k(F);
        },
        435028: (e, a, r) => {
            r.r(a), r.d(a, { ListSubscribersScreen: () => S, default: () => g });
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
                p = r(510588);
            const D = (0, u.Z)()
                    .propsFromState(() => ({ listId: p.xh, module: (0, i.P1)(p.xh, (e) => (0, m.Z)(e)) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, c.zr)("LIST_SUBSCRIBERS_SCREEN"), fetchListIfNeeded: h.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "spheres_detail", section: "subscribers" }),
                b = s().d1461f1e,
                M = s().bcbd3416,
                f = s().b197a56c,
                A = s().b197a56c;
            class S extends t.Component {
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
                    return t.createElement(n.Z, { history: e, title: f }, t.createElement(l.Z, { module: a, renderEmptyState: this._noItemsRenderer, title: A }));
                }
            }
            const g = D(S);
        },
        197503: (e, a, r) => {
            r.r(a), r.d(a, { ListMembersScreen: () => g, default: () => y });
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
                p = r(390387),
                D = r(780936),
                b = r(510588);
            const M = (0, m.Z)()
                    .propsFromState(() => ({ author: b.l1, viewerUserId: p._h, listId: b.xh }))
                    .propsFromActions(() => ({ cleanupRemovedMembers: D.A, createLocalApiErrorHandler: (0, h.zr)("LIST_MEMBERS_SCREEN") }))
                    .withAnalytics({ section: "members" }),
                f = s().a332103e,
                A = s().d1461f1e,
                S = s().h9ce3406;
            class g extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._noItemsRenderer = () => t.createElement(o.Z, { header: A, message: f })),
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
                    return t.createElement(i.Z, { entryConfiguration: this._getEntryConfiguration(), module: e, renderEmptyState: this._noItemsRenderer, title: S });
                }
            }
            const y = M(g);
        },
        523646: (e, a, r) => {
            r.r(a), r.d(a, { ListSuggestionsScreen: () => N, default: () => U });
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
                p = r(810641),
                D = r(874088),
                b = r(293115),
                M = r(339110),
                f = r(312771),
                A = r(566741),
                S = r(71620),
                g = r(668214),
                y = r(688781),
                _ = r(919022),
                E = r(510588);
            const I = (e, { suggestedUsersModule: a }) => a.selectInitialFetchStatus(e),
                L = (0, g.Z)()
                    .propsFromState(() => ({ suggestionsFetchStatus: I, list: E.Fz ?? void 0, listId: E.xh }))
                    .propsFromActions(() => ({ cleanupAddedUsers: y.DK, createLocalApiErrorHandler: (0, S.zr)("LIST_SUGGESTED_USERS_SCREEN"), fetchUserIfNeeded: _.ZP.fetchOneIfNeeded, injectSuggestedUser: y.i7 }))
                    .withAnalytics({ section: "suggested" }),
                v = i().fc9dd578,
                w = i().e2f7dc62,
                k = i().gc23cc00,
                Z = i().e3deb126,
                P = i().c2fb1e94,
                C = { section: "search" },
                R = [M.my.Users];
            class N extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { addedUsers: new Set(), query: "", showListMemberExceededMessage: !1 }),
                        (this._noItemsRenderer = () => t.createElement(d.Z, { header: w, message: k })),
                        (this._getMemoizedAddRemoveDecorations = (0, u.Z)((e, a, r, t, o) => (0, A.m)({ getIsMember: (e) => r.has(e), shouldAddUserToList: e, listId: a, onAdd: t, onRemove: o }))),
                        (this._getMemoizedEntryConfiguration = (0, u.Z)((e, a, r, t, o, d) => (0, A.Z)({ getIsMember: t, shouldAddUserToList: r, listId: e, isListAuthor: !0, onAdd: o, onRemove: d }))),
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
                    return t.createElement(o.Z, null, t.createElement(b.nO, { namespace: C }, t.createElement(D.default, { alwaysOpen: !0, filter: R, isModal: !0, onQueryChange: this._handleQueryChange, placeholder: v, renderUserDecoration: this._getMemoizedAddRemoveDecorations(this._isListMemberCountValid, e, r, this._onAdd, this._onRemove), rounded: !0, shouldAutoFocus: !0, shouldFocusOnClear: !0, source: M._4.ListMembersSuggested, style: T.input, withUserHoverCard: !0 })), d && t.createElement(o.Z, { style: T.callout }, t.createElement(s.Z, { Icon: c.default, text: P })), this.state.query ? null : t.createElement(p.Z, { entryConfiguration: this._getMemoizedEntryConfiguration(e, r, this._isListMemberCountValid, this._isCurrentMember, this._onAdd, this._onRemove), module: a, renderEmptyState: this._noItemsRenderer, title: Z }));
                }
            }
            N.contextType = m.rC;
            const T = n.default.create((e) => ({ input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 }, callout: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 } })),
                U = L(N);
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
                p = r(717988),
                D = r(24949),
                b = r(71620),
                M = r(668214),
                f = r(576469),
                A = r(780936),
                S = r(688781),
                g = r(510588);
            const y = (e, a) => a.location.state?.previousStep,
                _ = (e, a) => a.location.state?.suggestedUser?.id_str,
                E = (e, a) => {
                    const r = g.Fz(e, a);
                    return r?.member_count || 0;
                },
                I = (0, M.Z)()
                    .propsFromState(() => ({ basePath: g.$5, listId: g.xh, memberCount: E, membersModule: (0, D.P1)(g.xh, (e) => (0, A.Z)(e)), previousStep: y, suggestedUserId: _, suggestedUsersModule: (0, D.P1)(g.Fz, g.xh, y, (e, a, r) => (0, S.ZP)({ displayLocation: r, listId: a, listName: e?.name, listDescription: e?.description })) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("LIST_MANAGE_MEMBERS_SCREEN"), fetchListIfNeeded: f.Z.fetchOneIfNeeded }))
                    .withAnalytics(),
                L = i().c4d7650c,
                v = i().f0ab07f5,
                w = i().ba5a88e4,
                k = i().b772cd66,
                Z = i().h9ce3406,
                P = i().dfeaeb26,
                C = { page: "spheres_create_members" },
                R = { page: "spheres_edit_members" },
                N = (0, p.p)(
                    () =>
                        Promise.all([
                            r.e("icons.0"),
                            r.e("icons.13"),
                            r.e("icons.22"),
                            r.e("icons.29"),
                            r.e("icons.5"),
                            r.e("icons.7"),
                            r.e("icons.1"),
                            r.e("icons.15"),
                            r.e("icons.25"),
                            r.e("icons.10"),
                            r.e("icons.20"),
                            r.e("icons.14"),
                            r.e("icons.11"),
                            r.e("modules.common-e907d115"),
                            r.e("modules.common-e019dbda"),
                            r.e("icons.16"),
                            r.e("icons.17"),
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
                            r.e("icons.6"),
                            r.e("icons.26"),
                            r.e("icons.3"),
                            r.e("icons.9"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            r.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            r.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            r.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                            r.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                            r.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                            r.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                            r.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
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
                T = (0, p.p)(
                    () =>
                        Promise.all([
                            r.e("icons.0"),
                            r.e("icons.13"),
                            r.e("icons.22"),
                            r.e("icons.29"),
                            r.e("icons.5"),
                            r.e("icons.7"),
                            r.e("icons.1"),
                            r.e("icons.15"),
                            r.e("icons.25"),
                            r.e("icons.10"),
                            r.e("icons.20"),
                            r.e("icons.14"),
                            r.e("icons.11"),
                            r.e("modules.common-e907d115"),
                            r.e("modules.common-e019dbda"),
                            r.e("icons.16"),
                            r.e("icons.17"),
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
                            r.e("icons.6"),
                            r.e("icons.26"),
                            r.e("icons.3"),
                            r.e("icons.9"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            r.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            r.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            r.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                            r.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                            r.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                            r.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                            r.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
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
                    const { basePath: a, createLocalApiErrorHandler: r, fetchListIfNeeded: o, history: l, listId: i, location: p, match: D, memberCount: b, membersModule: M, previousStep: f, suggestedUserId: A, suggestedUsersModule: S } = e;
                    t.useEffect(() => {
                        o(i).catch(r());
                    }, [r, o, i]);
                    let g = Z,
                        y = d();
                    f === m.O.Creation ? ((g = P), (y = C)) : f === m.O.Edit && ((g = L), (y = R));
                    const _ = f === m.O.Creation || f === m.O.Edit,
                        E = v({ memberCount: b }),
                        I = t.useMemo(
                            () => [
                                { to: { pathname: `/i/lists/${i}/members`, state: p.state }, label: E, key: E },
                                { to: { pathname: `/i/lists/${i}/members/suggested`, state: p.state }, label: w, key: w },
                            ],
                            [i, p.state, E],
                        ),
                        U = t.useCallback(() => {
                            A ? l.go(-3) : l.replace(a);
                        }, [a, l, A]),
                        F = t.useMemo(() => (f === m.O.Creation ? t.createElement(n.ZP, { onPress: U, size: "small", type: "primaryFilled" }, k) : void 0), [U, f]),
                        x = f === m.O.Edit || A ? "back" : "close",
                        B = t.useMemo(() => (_ ? t.createElement(u.Z, { "aria-label": g, links: I }) : void 0), [I, _, g]),
                        H = t.useMemo(() => (_ ? t.createElement(s.Switch, null, t.createElement(s.Route, { exact: !0, path: `/i/lists/${i}/members` }, t.createElement(N, { match: D, module: M })), t.createElement(s.Route, { exact: !0, path: `/i/lists/${i}/members/suggested` }, t.createElement(T, { match: D, membersModule: M, suggestedUserId: A, suggestedUsersModule: S }))) : t.createElement(N, { match: D, module: M })), [i, D, M, _, A, S]);
                    return t.createElement(h.nO, { namespace: y }, t.createElement(c.Z, { backButtonType: x, history: l, rightControl: F, secondaryBar: B, title: g }, H));
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
                p = r(252021),
                D = r(32677),
                b = r(935167),
                M = r(73834),
                f = r(293115),
                A = r(942893),
                S = r(503229),
                g = r(87063),
                y = r(466441),
                _ = r(71620),
                E = r(668214),
                I = r(576469),
                L = r(510588);
            const v = (0, E.Z)()
                .propsFromState(() => ({ fetchStatus: L.DV, listId: L.xh, listMode: L.Ns, listName: L.By, screenName: L.ax }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("LIST_SCREEN"), fetchListIfNeeded: I.Z.fetchOneIfNeeded }))
                .withAnalytics({ page: "spheres_detail" });
            var w = r(688715),
                k = r(457311),
                Z = r(912021),
                P = r(791632),
                C = r(443781),
                R = r(38293),
                N = r(527409),
                T = r(652904),
                U = r(810641),
                F = r(725516),
                x = r(519896),
                B = r(506653),
                H = r(919022);
            const z = (e, a) => {
                    const r = L.ax(e, a);
                    return r ? H.ZP.selectByScreenName(e, r) : void 0;
                },
                O = (0, E.Z)().propsFromState(() => ({ listName: L.By, screenName: L.ax, useRanked: L._g, user: z })),
                $ = i().dcdc75a3,
                V = i().i9b7f6ba,
                q = i().a2515900,
                W = i().je23cdb2,
                j = i().fa884026,
                G = i().gba95028,
                Q = i().e79ed125,
                X = (0, w.ju)("https://support.x.com/articles/117063");
            class K extends t.Component {
                constructor(e, a) {
                    super(e, a),
                        (this.state = { showBlockedTweets: !1 }),
                        (this._renderHeaderAndContent = () => {
                            const { listId: e, useRanked: a, user: r } = this.props,
                                o = this._getModule(e, this._isSwitchRankingEnabled && !!a);
                            return o ? (r && r.blocking && !this.state.showBlockedTweets ? this._renderBlockingListOwner() : t.createElement(U.Z, { header: this._renderListDetail(), loadingAccessibilityLabel: V, module: o, prerollDisplayLocation: x.Nw.OTHER, renderEmptyState: this._renderEmptyState, title: j })) : null;
                        }),
                        (this._reconcileHistoryLocation = () => {
                            const { history: e, location: a, useRanked: r } = this.props,
                                t = a.query.show;
                            "top" !== t || r ? "top" !== t && r && e.replace({ pathname: a.pathname, query: { show: "top" } }) : e.replace({ pathname: a.pathname, query: {} });
                        }),
                        (this._getModule = (0, Z.Z)((e, a) => (e ? (0, B.Z)({ listId: e, useRanked: a }) : void 0))),
                        (this._renderListDetail = () => {
                            const { history: e, listId: a, location: r } = this.props,
                                o = (0, P.cu)(e);
                            return a && !o ? t.createElement(N.default, { basePath: r.pathname, listId: a }) : null;
                        }),
                        (this._handleShowBlockedTweets = () => {
                            this.setState({ showBlockedTweets: !0 });
                        }),
                        (this._renderEmptyState = ({ header: e = q, message: a = W, buttonText: r, onButtonPress: o } = {}) => t.createElement(t.Fragment, null, this._renderListDetail(), t.createElement(k.Z, { buttonText: r, buttonType: "brandOutlined", header: e, message: a, onButtonPress: o }))),
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
                    return t.createElement(t.Fragment, null, t.createElement(R.Z, { title: r }), t.createElement(T.Z, null, this._renderHeaderAndContent()));
                }
                _renderBlockingListOwner() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const { screen_name: a } = e,
                        r = Q({ screenName: a }),
                        o = t.createElement(i().I18NFormatMessage, { $i18n: "f98ecc47", screenName: a }, t.createElement(s.ZP, { link: X }, i().a2216a79));
                    return this._renderEmptyState({ header: r, message: o, buttonText: G, onButtonPress: this._handleShowBlockedTweets });
                }
            }
            K.contextType = C.rC;
            const J = (0, F.Z)(O(K)),
                Y = i().fa884026,
                ee = i().eb7b54be,
                ae = i().j681933e,
                re = (e) => {
                    const { createLocalApiErrorHandler: a, fetchListIfNeeded: r, fetchStatus: n, history: l, listId: i, listMode: S, listName: _, location: E, match: I, screenName: L, scribeNamespace: v } = e,
                        w = t.createElement(D.Z, { history: l }),
                        k = "private" === S,
                        Z = () => t.createElement(J, { history: l, listId: i, location: E, match: I }),
                        P = t.useMemo(() => ({ items: [{ ...A.Z.forList(i) }] }), [i]),
                        C = t.createElement(b.ZP, { listId: i, match: I, scribeNamespace: v }),
                        R = t.useCallback(() => {
                            r(i).catch(a(M.e));
                        }, [a, r, i]);
                    return (
                        t.useEffect(() => {
                            R();
                        }, [R]),
                        n !== g.Z.LOADED || (_ && L) ? t.createElement(f.nO, { data: P }, t.createElement(p.Z, { backLocation: L && `/${L}/lists`, documentTitle: Y, history: l, primaryContent: t.createElement(h.Z, { component: d.Z, fab: w }, n === g.Z.FAILED ? t.createElement(m.Z, { "aria-label": ee, fetchStatus: n, onRequestRetry: R, render: Z }) : Z()), rightControl: C, sidebarContent: t.createElement(u.Z, null), subtitle: L && `@${L}`, title: t.createElement(o.Z, { style: te.title }, t.createElement(s.ZP, null, _), k ? t.createElement(c.default, { "aria-label": ae, role: "img", style: te.iconLock }) : null) })) : t.createElement(y.default, { history: l, location: E, match: I })
                    );
                },
                te = n.default.create((e) => ({ iconLock: { alignSelf: "center", marginStart: e.spaces.space2 }, title: { flexDirection: "row" } })),
                oe = v((0, S.Z)(re));
        },
        510588: (e, a, r) => {
            r.d(a, { $5: () => u, By: () => M, DV: () => g, Fz: () => D, Ge: () => A, Ns: () => I, Wy: () => p, _g: () => _, ax: () => f, cx: () => b, l1: () => y, tt: () => E, xh: () => m });
            var t = r(614983),
                o = r.n(t),
                d = r(842799),
                s = r(286e3),
                n = r(576469),
                l = r(919022),
                i = r(312771);
            const c = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                u = (e, a) => {
                    const r = p(e, a),
                        t = f(e, a),
                        o = A(e, a);
                    return r ? `/i/lists/${r}` : t && o ? `/${t}/lists/${o}` : "";
                },
                h = (e, a) => a.match.params.listId || void 0,
                m = (e, a) => {
                    const r = a.match.params.listId;
                    return o()(r, "listId should always be specified"), r;
                },
                p = (e, a) =>
                    h(0, a) ||
                    ((e, a) => {
                        const r = D(e, a);
                        return r && r.id_str;
                    })(e, a),
                D = (e, a) => {
                    const r = h(0, a);
                    return r ? n.Z.select(e, r) : n.Z.selectByKey(e, S(e, a));
                },
                b = (e, a) => {
                    const r = D(e, a);
                    return r && r.following;
                },
                M = (e, a) => {
                    const r = D(e, a);
                    return r && r.name;
                },
                f = (e, a) => {
                    const r = h(0, a);
                    return a.match.params.screenName || void 0 || (r && n.Z.selectListAuthorScreenName(e, r));
                },
                A = (e, a) => {
                    const r = D(e, a);
                    return a.match.params.slug || (r && r.slug);
                },
                S = (e, a) => {
                    const r = a.match.params.slug,
                        t = a.match.params.screenName;
                    return r && t ? (0, d.Z)(t, r) : "";
                },
                g = (e, a) => {
                    const r =
                        p(e, a) ||
                        ((e, a) => {
                            const r = A(e, a),
                                t = f(e, a);
                            return r && t ? (0, d.Z)(t, r) : "";
                        })(e, a);
                    return n.Z.selectFetchStatus(e, r) || i.ZP.NONE;
                },
                y = (e, a) => {
                    const r = f(e, a);
                    return r ? l.ZP.selectByScreenName(e, r) : void 0;
                },
                _ = (e, a) => {
                    const r = p(e, a),
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
                    const r = D(e, a);
                    return r?.mode;
                };
        },
        424721: (e, a, r) => {
            r.r(a), r.d(a, { default: () => v });
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
                p = r(668214),
                D = r(783284),
                b = r(735313);
            function M() {
                return (0, m.cI)("q");
            }
            const f = (0, p.Z)()
                    .propsFromState(() => ({ module: (0, u.P1)(M(), (e) => (0, D.Z)(e ?? "")), query: M() }))
                    .propsFromActions(() => ({ clearTimelineCache: (e) => (0, b.Z)(e), createLocalApiErrorHandler: (0, h.zr)("LIST_SEARCH_SCREEN") }))
                    .withAnalytics({ page: "list_search" }),
                A = s().e9f3dec4,
                S = s().b9192d55,
                g = s().d6a23192,
                y = s().ie256518,
                _ = s().j57a2568,
                E = s().hc76e8cd,
                I = s().d872881a,
                L = t.createElement(n.B, null);
            const v = f(function (e) {
                const { clearTimelineCache: a, createLocalApiErrorHandler: r, module: d, query: s = "" } = e;
                function n() {
                    return t.createElement(o.Z, { buttonLink: "/i/lists/create", buttonText: g, buttonType: "primaryFilled", header: E({ query: s }), message: I, secondaryButtonType: "primaryOutlined" });
                }
                t.useEffect(() => {
                    a(d).catch(r());
                }, [a, r, d]);
                const u = t.useMemo(() => t.createElement(i.Z, { initialValue: s }), [s]),
                    h = s || _,
                    m = s ? S({ query: s }) : A;
                return t.createElement(l.Z, {
                    backLocation: "/",
                    customSearchBox: u,
                    documentTitle: m,
                    history: e.history,
                    primaryContent: function () {
                        return t.createElement(c.Z, { module: d, renderEmptyState: n, title: _ });
                    },
                    primaryContentLabel: y,
                    sidebarContent: L,
                    title: h,
                    withSearchBox: !0,
                });
            });
        },
        466441: (e, a, r) => {
            r.r(a), r.d(a, { NotFoundScreen: () => A, default: () => g });
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
                p = r(952793),
                D = r(163889),
                b = r(725516);
            const M = l().ba929da8,
                f = l().d203e242;
            function A(e) {
                const { splat: a } = e.match.params,
                    { isModal: r } = t.useContext(o.Z),
                    s = (0, p.hC)("responsive_web_report_page_not_found");
                return (
                    (0, i.q)(() => {
                        s && a && (0, D.ZP)(new Error(`Page not found: ${a}`));
                    }),
                    t.createElement(m.Z, null, t.createElement(c.Z.Configure, { backLocation: "/", documentTitle: M, title: f }), t.createElement(d.Z, { style: r && S.modal }, t.createElement(h.Z, null)), t.createElement(u.Z, { title: M, withMeta: !1 }))
                );
            }
            const S = s.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                g = (0, b.Z)(A, { page: "not_found" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-63cb1cc4.f994a66a.js.map
