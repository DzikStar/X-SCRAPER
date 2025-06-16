"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-99ebe121"],
    {
        260114: (e, a, d) => {
            d.r(a), d.d(a, { ListInfoScreen: () => T, default: () => B });
            var r = d(202784),
                o = d(325686),
                n = d(107267),
                l = d(779610),
                s = d(154003),
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
                w = d(125363),
                _ = d(390387),
                k = d(615027),
                I = d(71620),
                g = d(668214),
                E = d(576469),
                v = d(510588);
            const Z = (0, g.Z)()
                    .propsFromState(() => ({ basePath: v.$5, fetchStatus: v.DV, list: v.Fz, listId: v.xh, screenName: v.ax }))
                    .adjustStateProps(({ basePath: e, fetchStatus: a, list: d, listId: r, screenName: o }) => ({ authorId: d?.user, basePath: e, fetchStatus: a, list: d, listId: r, screenName: o }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, I.zr)("LIST_EDIT_SCREEN"), deleteList: E.Z.deleteList, fetchListIfNeeded: E.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "spheres_edit_form" }),
                P = h().c4d7650c,
                N = h().b772cd66,
                C = h().ca5d0a82,
                L = h().h7f2418c,
                R = h().b18e5cd2,
                U = h().cdd73e9c,
                F = { confirmButtonLabel: h().d96cf7ce, headline: h().def8ff62, text: h().j8b9cde8 },
                T = (e) => {
                    const a = (0, y.z)(),
                        d = (0, n.useLocation)(),
                        c = (0, n.useHistory)(),
                        u = r.useRef(null),
                        [h, I] = r.useState(!1),
                        [g, E] = r.useState(!1),
                        { viewerUserId: v } = r.useContext(M.rC),
                        Z = (0, w.v9)(_.Lz),
                        { authorId: T, basePath: B, createLocalApiErrorHandler: O, deleteList: H, fetchListIfNeeded: V, fetchStatus: z, list: $, listId: q, screenName: W } = e,
                        j = r.useCallback(() => {
                            V(q).catch(O(A.e));
                        }, [O, V, q]);
                    (0, m.q)(() => {
                        j();
                    });
                    const G = r.useCallback(() => {
                            a.scribe({ element: "delete", action: "click" }),
                                H(q)
                                    .then(() => W && c.replace(`/${W}/lists/`))
                                    .catch((e) => {
                                        O({ defaultToast: { text: R }, showToast: !0 })(e), E(!1);
                                    });
                        }, [a, O, H, c, q, W]),
                        X = r.useMemo(() => ({ pathname: `${B}/members`, state: { previousStep: S.O.Edit } }), [B]),
                        K = r.useCallback(() => {
                            a.scribe({ element: "manage", action: "click" });
                        }, [a]),
                        Q = r.useCallback(() => r.createElement(o.Z, { style: x.topBorder }, r.createElement(l.Z, { label: P, link: X, onPress: K })), [K, X]),
                        J = r.useCallback(() => r.createElement(r.Fragment, null, r.createElement(o.Z, { style: x.mainSettings }, r.createElement(f.Z, { context: "LIST_EDIT_SCREEN", history: c, list: $, listId: q, location: d, onChange: Y, ref: u })), Q(), r.createElement(t.Z, { color: "red500", label: U, onPress: ae }), g && r.createElement(i.Z, { confirmButtonLabel: F.confirmButtonLabel, confirmButtonType: "destructiveFilled", headline: F.headline, onCancel: de, onConfirm: G, text: F.text })), [G, c, $, q, d, Q, g]);
                    function Y(e) {
                        I(e);
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
                    return T === v
                        ? r.createElement(
                              b.Z,
                              {
                                  history: c,
                                  onBackClick: function () {
                                      a.scribeAction("cancel"), c.goBack();
                                  },
                                  rightControl: r.createElement(s.ZP, { "aria-label": N, disabled: !h, onPress: ee, size: "small", type: "primaryFilled" }, N),
                                  title: C,
                              },
                              Z ? r.createElement(p.Z, { type: "List" }) : null,
                              r.createElement(D.Z, { "aria-label": L, fetchStatus: z, onRequestRetry: j, render: J }),
                          )
                        : r.createElement(k.Z, { to: B });
                },
                x = c.default.create((e) => ({ mainSettings: { backgroundColor: e.colors.cellBackground }, topBorder: { borderTopWidth: e.borderWidths.small, borderTopStyle: "solid", borderTopColor: e.colors.borderColor } })),
                B = Z(T);
        },
        435028: (e, a, d) => {
            d.r(a), d.d(a, { ListSubscribersScreen: () => S, default: () => y });
            var r = d(202784),
                o = d(457311),
                n = d(111677),
                l = d.n(n),
                s = d(980407),
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
                M = l().d1461f1e,
                p = l().bcbd3416,
                f = l().b197a56c,
                A = l().b197a56c;
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
                    return r.createElement(s.Z, { history: e, title: f }, r.createElement(t.Z, { module: a, renderEmptyState: this._noItemsRenderer, title: A }));
                }
            }
            const y = b(S);
        },
        197503: (e, a, d) => {
            d.r(a), d.d(a, { ListMembersScreen: () => y, default: () => w });
            var r = d(202784),
                o = d(457311),
                n = d(111677),
                l = d.n(n),
                s = d(912021),
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
                f = l().a332103e,
                A = l().d1461f1e,
                S = l().h9ce3406;
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
                        (this._getMemoizedEntryConfiguraton = (0, s.Z)((e, a, d, r, o, n, l) => (0, u.Z)({ getIsMember: o, listId: a, isListAuthor: c(e, d), onAdd: n, onRemove: l }))),
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
            const w = p(y);
        },
        523646: (e, a, d) => {
            d.r(a), d.d(a, { ListSuggestionsScreen: () => R, default: () => F });
            var r = d(202784),
                o = d(325686),
                n = d(457311),
                l = d(834324),
                s = d(392237),
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
                w = d(688781),
                _ = d(919022),
                k = d(510588);
            const I = (e, { suggestedUsersModule: a }) => a.selectInitialFetchStatus(e),
                g = (0, y.Z)()
                    .propsFromState(() => ({ suggestionsFetchStatus: I, list: k.Fz ?? void 0, listId: k.xh }))
                    .propsFromActions(() => ({ cleanupAddedUsers: w.DK, createLocalApiErrorHandler: (0, S.zr)("LIST_SUGGESTED_USERS_SCREEN"), fetchUserIfNeeded: _.ZP.fetchOneIfNeeded, injectSuggestedUser: w.i7 }))
                    .withAnalytics({ section: "suggested" }),
                E = i().fc9dd578,
                v = i().e2f7dc62,
                Z = i().gc23cc00,
                P = i().e3deb126,
                N = i().c2fb1e94,
                C = { section: "search" },
                L = [p.my.Users];
            class R extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { addedUsers: new Set(), query: "", showListMemberExceededMessage: !1 }),
                        (this._noItemsRenderer = () => r.createElement(n.Z, { header: v, message: Z })),
                        (this._getMemoizedAddRemoveDecorations = (0, u.Z)((e, a, d, r, o) => (0, A.m)({ getIsMember: (e) => d.has(e), shouldAddUserToList: e, listId: a, onAdd: r, onRemove: o }))),
                        (this._getMemoizedEntryConfiguration = (0, u.Z)((e, a, d, r, o, n) => (0, A.Z)({ getIsMember: r, shouldAddUserToList: d, listId: e, isListAuthor: !0, onAdd: o, onRemove: n }))),
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
                        { addedUsers: d, showListMemberExceededMessage: n } = this.state;
                    return r.createElement(o.Z, null, r.createElement(M.nO, { namespace: C }, r.createElement(b.default, { alwaysOpen: !0, filter: L, isModal: !0, onQueryChange: this._handleQueryChange, placeholder: E, renderUserDecoration: this._getMemoizedAddRemoveDecorations(this._isListMemberCountValid, e, d, this._onAdd, this._onRemove), rounded: !0, shouldAutoFocus: !0, shouldFocusOnClear: !0, source: p._4.ListMembersSuggested, style: U.input, withUserHoverCard: !0 })), n && r.createElement(o.Z, { style: U.callout }, r.createElement(l.Z, { Icon: c.default, text: N })), this.state.query ? null : r.createElement(D.Z, { entryConfiguration: this._getMemoizedEntryConfiguration(e, d, this._isListMemberCountValid, this._isCurrentMember, this._onAdd, this._onRemove), module: a, renderEmptyState: this._noItemsRenderer, title: P }));
                }
            }
            R.contextType = m.rC;
            const U = s.default.create((e) => ({ input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 }, callout: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 } })),
                F = g(R);
        },
        566741: (e, a, d) => {
            d.d(a, { Z: () => c, m: () => t });
            var r = d(202784),
                o = d(131779),
                n = d(269011),
                l = d(335632),
                s = d(962741);
            const t =
                    ({ getIsMember: e, listId: a, onAdd: d, onRemove: n, shouldAddUserToList: l }) =>
                    ({ userId: s }) =>
                        r.createElement(o.Z, { getIsMember: e, listId: a, onAdd: d, onRemove: n, shouldAddUserToList: l ?? (() => !0), userId: s }),
                i = (0, l.G)({}),
                c = ({ getIsMember: e, isListAuthor: a, listId: d, onAdd: r, onRemove: o, shouldAddUserToList: l }) => ({ ...i, [s.ZP.User]: (0, n.Z)({ decoration: a ? t({ getIsMember: e, shouldAddUserToList: l, listId: d, onAdd: r, onRemove: o }) : void 0 }) });
        },
        761893: (e, a, d) => {
            d.r(a), d.d(a, { ListUserManagementScreen: () => F, default: () => T });
            var r = d(202784),
                o = d(360917),
                n = d.n(o),
                l = d(107267),
                s = d(154003),
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
            const w = (e, a) => a.location.state?.previousStep,
                _ = (e, a) => a.location.state?.suggestedUser?.id_str,
                k = (e, a) => {
                    const d = y.Fz(e, a);
                    return d?.member_count || 0;
                },
                I = (0, p.Z)()
                    .propsFromState(() => ({ basePath: y.$5, listId: y.xh, memberCount: k, membersModule: (0, b.P1)(y.xh, (e) => (0, A.Z)(e)), previousStep: w, suggestedUserId: _, suggestedUsersModule: (0, b.P1)(y.Fz, y.xh, w, (e, a, d) => (0, S.ZP)({ displayLocation: d, listId: a, listName: e?.name, listDescription: e?.description })) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, M.zr)("LIST_MANAGE_MEMBERS_SCREEN"), fetchListIfNeeded: f.Z.fetchOneIfNeeded }))
                    .withAnalytics(),
                g = i().c4d7650c,
                E = i().f0ab07f5,
                v = i().ba5a88e4,
                Z = i().b772cd66,
                P = i().h9ce3406,
                N = i().dfeaeb26,
                C = { page: "spheres_create_members" },
                L = { page: "spheres_edit_members" },
                R = (0, D.p)(
                    () =>
                        Promise.all([
                            d.e("icons.21"),
                            d.e("icons.16"),
                            d.e("icons.10"),
                            d.e("icons.1"),
                            d.e("icons.19"),
                            d.e("icons.0"),
                            d.e("icons.23"),
                            d.e("icons.8"),
                            d.e("icons.2"),
                            d.e("icons.3"),
                            d.e("icons.15"),
                            d.e("icons.4"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.7"),
                            d.e("icons.9"),
                            d.e("icons.28"),
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
                            d.e("icons.18"),
                            d.e("icons.29"),
                            d.e("icons.27"),
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
                            d.e("shared~bundle.Communities~bundle.UserLists"),
                            d.e("bundle.UserLists-bc6ccf4c"),
                            d.e("bundle.UserLists-2a1252f0"),
                            d.e("bundle.UserLists-b308cbaf"),
                            d.e("bundle.UserLists-8ed0fac5"),
                            d.e("bundle.UserLists-99ebe121"),
                        ]).then(d.bind(d, 197503)),
                    { shouldMigrateToX: !1 },
                ),
                U = (0, D.p)(
                    () =>
                        Promise.all([
                            d.e("icons.21"),
                            d.e("icons.16"),
                            d.e("icons.10"),
                            d.e("icons.1"),
                            d.e("icons.19"),
                            d.e("icons.0"),
                            d.e("icons.23"),
                            d.e("icons.8"),
                            d.e("icons.2"),
                            d.e("icons.3"),
                            d.e("icons.15"),
                            d.e("icons.4"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.7"),
                            d.e("icons.9"),
                            d.e("icons.28"),
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
                            d.e("icons.18"),
                            d.e("icons.29"),
                            d.e("icons.27"),
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
                            d.e("shared~bundle.Communities~bundle.UserLists"),
                            d.e("bundle.UserLists-bc6ccf4c"),
                            d.e("bundle.UserLists-2a1252f0"),
                            d.e("bundle.UserLists-b308cbaf"),
                            d.e("bundle.UserLists-8ed0fac5"),
                            d.e("bundle.UserLists-99ebe121"),
                        ]).then(d.bind(d, 523646)),
                    { shouldMigrateToX: !1 },
                ),
                F = (e) => {
                    const { basePath: a, createLocalApiErrorHandler: d, fetchListIfNeeded: o, history: t, listId: i, location: D, match: b, memberCount: M, membersModule: p, previousStep: f, suggestedUserId: A, suggestedUsersModule: S } = e;
                    r.useEffect(() => {
                        o(i).catch(d());
                    }, [d, o, i]);
                    let y = P,
                        w = n();
                    f === m.O.Creation ? ((y = N), (w = C)) : f === m.O.Edit && ((y = g), (w = L));
                    const _ = f === m.O.Creation || f === m.O.Edit,
                        k = E({ memberCount: M }),
                        I = r.useMemo(
                            () => [
                                { to: { pathname: `/i/lists/${i}/members`, state: D.state }, label: k, key: k },
                                { to: { pathname: `/i/lists/${i}/members/suggested`, state: D.state }, label: v, key: v },
                            ],
                            [i, D.state, k],
                        ),
                        F = r.useCallback(() => {
                            A ? t.go(-3) : t.replace(a);
                        }, [a, t, A]),
                        T = r.useMemo(() => (f === m.O.Creation ? r.createElement(s.ZP, { onPress: F, size: "small", type: "primaryFilled" }, Z) : void 0), [F, f]),
                        x = f === m.O.Edit || A ? "back" : "close",
                        B = r.useMemo(() => (_ ? r.createElement(u.Z, { "aria-label": y, links: I }) : void 0), [I, _, y]),
                        O = r.useMemo(() => (_ ? r.createElement(l.Switch, null, r.createElement(l.Route, { exact: !0, path: `/i/lists/${i}/members` }, r.createElement(R, { match: b, module: p })), r.createElement(l.Route, { exact: !0, path: `/i/lists/${i}/members/suggested` }, r.createElement(U, { match: b, membersModule: p, suggestedUserId: A, suggestedUsersModule: S }))) : r.createElement(R, { match: b, module: p })), [i, b, p, _, A, S]);
                    return r.createElement(h.nO, { namespace: w }, r.createElement(c.Z, { backButtonType: x, history: t, rightControl: T, secondaryBar: B, title: y }, O));
                },
                T = I(F);
        },
        881206: (e, a, d) => {
            d.r(a), d.d(a, { ListScreen: () => de, default: () => oe });
            var r = d(202784),
                o = d(325686),
                n = d(108362),
                l = d(731708),
                s = d(392237),
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
                w = d(466441),
                _ = d(71620),
                k = d(668214),
                I = d(576469),
                g = d(510588);
            const E = (0, k.Z)()
                .propsFromState(() => ({ fetchStatus: g.DV, listId: g.xh, listMode: g.Ns, listName: g.By, screenName: g.ax }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("LIST_SCREEN"), fetchListIfNeeded: I.Z.fetchOneIfNeeded }))
                .withAnalytics({ page: "spheres_detail" });
            var v = d(688715),
                Z = d(457311),
                P = d(912021),
                N = d(791632),
                C = d(443781),
                L = d(38293),
                R = d(527409),
                U = d(652904),
                F = d(810641),
                T = d(725516),
                x = d(519896),
                B = d(506653),
                O = d(919022);
            const H = (e, a) => {
                    const d = g.ax(e, a);
                    return d ? O.ZP.selectByScreenName(e, d) : void 0;
                },
                V = (0, k.Z)().propsFromState(() => ({ listName: g.By, screenName: g.ax, useRanked: g._g, user: H })),
                z = i().dcdc75a3,
                $ = i().i9b7f6ba,
                q = i().a2515900,
                W = i().je23cdb2,
                j = i().fa884026,
                G = i().gba95028,
                X = i().e79ed125,
                K = (0, v.ju)("https://support.x.com/articles/117063");
            class Q extends r.Component {
                constructor(e, a) {
                    super(e, a),
                        (this.state = { showBlockedTweets: !1 }),
                        (this._renderHeaderAndContent = () => {
                            const { listId: e, useRanked: a, user: d } = this.props,
                                o = this._getModule(e, this._isSwitchRankingEnabled && !!a);
                            return o ? (d && d.blocking && !this.state.showBlockedTweets ? this._renderBlockingListOwner() : r.createElement(F.Z, { header: this._renderListDetail(), loadingAccessibilityLabel: $, module: o, prerollDisplayLocation: x.Nw.OTHER, renderEmptyState: this._renderEmptyState, title: j })) : null;
                        }),
                        (this._reconcileHistoryLocation = () => {
                            const { history: e, location: a, useRanked: d } = this.props,
                                r = a.query.show;
                            "top" !== r || d ? "top" !== r && d && e.replace({ pathname: a.pathname, query: { show: "top" } }) : e.replace({ pathname: a.pathname, query: {} });
                        }),
                        (this._getModule = (0, P.Z)((e, a) => (e ? (0, B.Z)({ listId: e, useRanked: a }) : void 0))),
                        (this._renderListDetail = () => {
                            const { history: e, listId: a, location: d } = this.props,
                                o = (0, N.cu)(e);
                            return a && !o ? r.createElement(R.default, { basePath: d.pathname, listId: a }) : null;
                        }),
                        (this._handleShowBlockedTweets = () => {
                            this.setState({ showBlockedTweets: !0 });
                        }),
                        (this._renderEmptyState = ({ header: e = q, message: a = W, buttonText: d, onButtonPress: o } = {}) => r.createElement(r.Fragment, null, this._renderListDetail(), r.createElement(Z.Z, { buttonText: d, buttonType: "brandOutlined", header: e, message: a, onButtonPress: o }))),
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
                    return r.createElement(r.Fragment, null, r.createElement(L.Z, { title: d }), r.createElement(U.Z, null, this._renderHeaderAndContent()));
                }
                _renderBlockingListOwner() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const { screen_name: a } = e,
                        d = X({ screenName: a }),
                        o = r.createElement(i().I18NFormatMessage, { $i18n: "f98ecc47", screenName: a }, r.createElement(l.ZP, { link: K }, i().a2216a79));
                    return this._renderEmptyState({ header: d, message: o, buttonText: G, onButtonPress: this._handleShowBlockedTweets });
                }
            }
            Q.contextType = C.rC;
            const J = (0, T.Z)(V(Q)),
                Y = i().fa884026,
                ee = i().eb7b54be,
                ae = i().j681933e,
                de = (e) => {
                    const { createLocalApiErrorHandler: a, fetchListIfNeeded: d, fetchStatus: s, history: t, listId: i, listMode: S, listName: _, location: k, match: I, screenName: g, scribeNamespace: E } = e,
                        v = r.createElement(b.Z, { history: t }),
                        Z = "private" === S,
                        P = () => r.createElement(J, { history: t, listId: i, location: k, match: I }),
                        N = r.useMemo(() => ({ items: [{ ...A.Z.forList(i) }] }), [i]),
                        C = r.createElement(M.ZP, { listId: i, match: I, scribeNamespace: E }),
                        L = r.useCallback(() => {
                            d(i).catch(a(p.e));
                        }, [a, d, i]);
                    return (
                        r.useEffect(() => {
                            L();
                        }, [L]),
                        s !== y.Z.LOADED || (_ && g) ? r.createElement(f.nO, { data: N }, r.createElement(D.Z, { backLocation: g && `/${g}/lists`, documentTitle: Y, history: t, primaryContent: r.createElement(h.Z, { component: n.Z, fab: v }, s === y.Z.FAILED ? r.createElement(m.Z, { "aria-label": ee, fetchStatus: s, onRequestRetry: L, render: P }) : P()), rightControl: C, sidebarContent: r.createElement(u.Z, null), subtitle: g && `@${g}`, title: r.createElement(o.Z, { style: re.title }, r.createElement(l.ZP, null, _), Z ? r.createElement(c.default, { "aria-label": ae, role: "img", style: re.iconLock }) : null) })) : r.createElement(w.default, { history: t, location: k, match: I })
                    );
                },
                re = s.default.create((e) => ({ iconLock: { alignSelf: "center", marginStart: e.spaces.space2 }, title: { flexDirection: "row" } })),
                oe = E((0, S.Z)(de));
        },
        510588: (e, a, d) => {
            d.d(a, { $5: () => u, By: () => p, DV: () => y, Fz: () => b, Ge: () => A, Ns: () => I, Wy: () => D, _g: () => _, ax: () => f, cx: () => M, l1: () => w, tt: () => k, xh: () => m });
            var r = d(614983),
                o = d.n(r),
                n = d(842799),
                l = d(286e3),
                s = d(576469),
                t = d(919022),
                i = d(312771);
            const c = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                u = (e, a) => {
                    const d = D(e, a),
                        r = f(e, a),
                        o = A(e, a);
                    return d ? `/i/lists/${d}` : r && o ? `/${r}/lists/${o}` : "";
                },
                h = (e, a) => a.match.params.listId || void 0,
                m = (e, a) => {
                    const d = a.match.params.listId;
                    return o()(d, "listId should always be specified"), d;
                },
                D = (e, a) =>
                    h(0, a) ||
                    ((e, a) => {
                        const d = b(e, a);
                        return d && d.id_str;
                    })(e, a),
                b = (e, a) => {
                    const d = h(0, a);
                    return d ? s.Z.select(e, d) : s.Z.selectByKey(e, S(e, a));
                },
                M = (e, a) => {
                    const d = b(e, a);
                    return d && d.following;
                },
                p = (e, a) => {
                    const d = b(e, a);
                    return d && d.name;
                },
                f = (e, a) => {
                    const d = h(0, a);
                    return a.match.params.screenName || void 0 || (d && s.Z.selectListAuthorScreenName(e, d));
                },
                A = (e, a) => {
                    const d = b(e, a);
                    return a.match.params.slug || (d && d.slug);
                },
                S = (e, a) => {
                    const d = a.match.params.slug,
                        r = a.match.params.screenName;
                    return d && r ? (0, n.Z)(r, d) : "";
                },
                y = (e, a) => {
                    const d =
                        D(e, a) ||
                        ((e, a) => {
                            const d = A(e, a),
                                r = f(e, a);
                            return d && r ? (0, n.Z)(r, d) : "";
                        })(e, a);
                    return s.Z.selectFetchStatus(e, d) || i.ZP.NONE;
                },
                w = (e, a) => {
                    const d = f(e, a);
                    return d ? t.ZP.selectByScreenName(e, d) : void 0;
                },
                _ = (e, a) => {
                    const d = D(e, a),
                        r = (0, l.nx)(e);
                    return (d && r[d] && r[d].useRanked) || !1;
                },
                k = (e, a) => {
                    const d = s.Z.select(e, a);
                    if (d) {
                        const e = d.customBanner;
                        return e || d.defaultBanner;
                    }
                    return { crop: [], image: c };
                },
                I = (e, a) => {
                    const d = b(e, a);
                    return d?.mode;
                };
        },
        424721: (e, a, d) => {
            d.r(a), d.d(a, { default: () => E });
            var r = d(202784),
                o = d(457311),
                n = d(111677),
                l = d.n(n),
                s = d(408178),
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
                A = l().e9f3dec4,
                S = l().b9192d55,
                y = l().d6a23192,
                w = l().ie256518,
                _ = l().j57a2568,
                k = l().hc76e8cd,
                I = l().d872881a,
                g = r.createElement(s.B, null);
            const E = f(function (e) {
                const { clearTimelineCache: a, createLocalApiErrorHandler: d, module: n, query: l = "" } = e;
                function s() {
                    return r.createElement(o.Z, { buttonLink: "/i/lists/create", buttonText: y, buttonType: "primaryFilled", header: k({ query: l }), message: I, secondaryButtonType: "primaryOutlined" });
                }
                r.useEffect(() => {
                    a(n).catch(d());
                }, [a, d, n]);
                const u = r.useMemo(() => r.createElement(i.Z, { initialValue: l }), [l]),
                    h = l || _,
                    m = l ? S({ query: l }) : A;
                return r.createElement(t.Z, {
                    backLocation: "/",
                    customSearchBox: u,
                    documentTitle: m,
                    history: e.history,
                    primaryContent: function () {
                        return r.createElement(c.Z, { module: n, renderEmptyState: s, title: _ });
                    },
                    primaryContentLabel: w,
                    sidebarContent: g,
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
                n = d(108362),
                l = d(392237),
                s = d(111677),
                t = d.n(s),
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
                    l = (0, D.hC)("responsive_web_report_page_not_found");
                return (
                    (0, i.q)(() => {
                        l && a && (0, b.ZP)(new Error(`Page not found: ${a}`));
                    }),
                    r.createElement(m.Z, null, r.createElement(c.Z.Configure, { backLocation: "/", documentTitle: p, title: f }), r.createElement(n.Z, { style: d && S.modal }, r.createElement(h.Z, null)), r.createElement(u.Z, { title: p, withMeta: !1 }))
                );
            }
            const S = l.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                y = (0, M.Z)(A, { page: "not_found" });
        },
        289160: (e, a, d) => {
            d.d(a, { Z: () => k });
            var r = d(301327),
                o = d(464258),
                n = d(202784),
                l = (d(585488), d(351743)),
                s = d.n(l),
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
                w = o.Z,
                _ = r.Z,
                k = M((e) => {
                    const { addToast: a, isMember: d, memberCount: r, setTrustedFriendsMemberCount: o, sliceID: l, sliceItemID: i, trustedFriendsId: c, type: h, userId: m } = e,
                        [D, b] = s()(w),
                        [M, k] = s()(_),
                        [I, g] = n.useState(d || !1),
                        E = (0, u.z)(),
                        v = n.useCallback(() => {
                            D({
                                variables: { trustedFriendsId: c, userId: m, slices: [l || ""] },
                                onCompleted(e) {
                                    if ("TrustedFriendsListMemberAddInvalid" === e?.trusted_friends_list_member_add?.__typename) g(!1), a("MaxMembersExceeded" === e?.trusted_friends_list_member_add?.reason ? { text: y } : { text: S });
                                    else if ("TrustedFriendsListMemberAddSuccess" === e?.trusted_friends_list_member_add?.__typename && void 0 !== r) {
                                        const e = r + 1;
                                        E.scribe({ component: `trusted_friends_${h}`, element: "add_trusted_friends_button", action: "click", data: { trusted_friends_control_details: { list_member_count: e } } }), o(e);
                                    }
                                },
                            }),
                                g(!0);
                        }, [a, E, D, r, o, l, c, m, h]),
                        Z = n.useCallback(() => {
                            M({
                                variables: { trustedFriendsId: c, userId: m, slices: [l || ""], itemID: i || "" },
                                onCompleted(e) {
                                    if ("TrustedFriendsListMemberRemoveInvalid" === e?.trusted_friends_list_member_remove?.__typename) g(!0), a({ text: A });
                                    else if ("TrustedFriendsListMemberRemoveSuccess" === e?.trusted_friends_list_member_remove?.__typename && void 0 !== r) {
                                        const e = r - 1;
                                        E.scribe({ component: `trusted_friends_${h}`, element: "remove_trusted_friends_button", action: "click", data: { trusted_friends_control_details: { list_member_count: e } } }), o(e);
                                    }
                                },
                            }),
                                g(!1);
                        }, [a, E, r, M, o, c, m, l, i, h]);
                    return I ? n.createElement(t.ZP, { "aria-label": p, disabled: k, onPress: Z, size: "small", type: "primaryOutlined" }, p) : n.createElement(t.ZP, { "aria-label": f, disabled: b, onPress: v, size: "small", type: "primaryFilled" }, f);
                });
        },
        592240: (e, a, d) => {
            d.d(a, { Z: () => y });
            var r = d(438532),
                o = d(202784),
                n = (d(585488), d(277660)),
                l = d.n(n),
                s = d(457311),
                t = d(166852),
                i = d(459679),
                c = d(965245),
                u = d(966722),
                h = d(836640),
                m = d(535708),
                D = d(289160);
            const b = u.Z;
            function M({ membersSliceID: e, trustedFriendsId: a, user: d }) {
                const r = l()(b, d),
                    n = o.useCallback(() => o.createElement(D.Z, { isMember: r.is_trusted_friends_list_member, sliceID: e, sliceItemID: r.id, trustedFriendsId: a, type: m.C.Recommendations, userId: r.rest_id }), [e, a, r.id, r.is_trusted_friends_list_member, r.rest_id]);
                return o.createElement(h.J, { decoration: n, user: r });
            }
            const p = o.memo(M),
                f = (e) => e.id,
                A = r.Z;
            function S({ cacheKey: e, emptyStateHeader: a, emptyStateMessage: d, items: r, membersSliceID: n, onFetchNext: u, trustedFriendsId: h }) {
                const m = l()(A, r),
                    D = o.useMemo(
                        () =>
                            (0, t.Z)(
                                (0, i.Z)(m, (e) => ("User" === e.result?.__typename ? e.result : void 0)),
                                (e) => e.id,
                            ),
                        [m],
                    ),
                    b = o.useCallback((e) => o.createElement(p, { membersSliceID: n, trustedFriendsId: h, user: e }), [n, h]),
                    M = o.useCallback(() => o.createElement(s.Z, { header: a, message: d }), [a, d]);
                return o.createElement(c.Z, { cacheKey: e, identityFunction: f, items: D, noItemsRenderer: M, onNearEnd: u, renderer: b, withoutHeadroom: !0 });
            }
            const y = o.memo(S);
        },
        696705: (e, a, d) => {
            d.r(a), d.d(a, { TrustedFriendsMembers: () => A, default: () => y, errorConfig: () => f, trustedFriendsMembersQuery: () => M });
            var r = d(917874),
                o = d(202784),
                n = d(325686),
                l = (d(585488), d(731708)),
                s = d(392237),
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
                        s = d.trusted_friends_list_by_rest_id.members_slice;
                    return o.createElement(n.Z, null, o.createElement(l.ZP, { color: "gray700", size: "body", style: S.education }, o.createElement(i().I18NFormatMessage, { $i18n: "e420d1ed" }, o.createElement(l.ZP, { color: "text", link: c.TRUSTED_FRIENDS_LEARN_MORE_URL, style: S.learnMore, weight: "bold", withUnderline: !0 }, i().f43112a4))), o.createElement(m.Z, { cacheKey: p, emptyStateHeader: D, emptyStateMessage: b, items: s.items_results, membersSliceID: s.__id, onFetchNext: r, trustedFriendsId: a }));
                },
                S = s.default.create((e) => ({ education: { marginHorizontal: e.spaces.space32, textAlign: "center", marginTop: e.spaces.space16, marginBottom: e.spaces.space4 }, learnMore: { whiteSpace: "nowrap" }, activityIndicatior: { paddingVertical: 250 } }));
            function y(e) {
                return o.createElement(u.H, { errorConfig: f }, o.createElement(A, e));
            }
        },
        582313: (e, a, d) => {
            d.r(a), d.d(a, { TrustedFriendsRecommended: () => E, default: () => Z, trustedFriendsRecommendedQuery: () => k });
            var r = d(319145),
                o = d(202784),
                n = d(325686),
                l = (d(585488), d(731708)),
                s = d(392237),
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
                w = i().eeb4d3f0,
                _ = [D.my.TrustedFriendsSuggested],
                k = r.Z,
                I = "TRUSTED_FRIENDS_RECOMMENDED",
                g = { context: I },
                E = (e) => {
                    const [a, d] = o.useState(),
                        { trustedFriendsId: r } = e,
                        { data: s, fetchNext: t } = (0, M.C)(k, { trustedFriendsId: r }),
                        u = s.trusted_friends_list_by_rest_id.recommended_members_slice,
                        g = (0, b.oR)(s.trusted_friends_list_by_rest_id.id, "TrustedFriendsMembers_slice_result"),
                        E = u?.items_results ?? (0, m.o)(),
                        Z = o.useCallback(({ user: e, userId: a }) => o.createElement(f.Z, { isMember: e?.is_trusted_friends_list_member, sliceID: g, trustedFriendsId: r, type: p.C.Search, userId: a }), [g, r]);
                    return o.createElement(n.Z, null, o.createElement(h.default, { alwaysOpen: !0, filter: _, isModal: !0, onQueryChange: d, placeholder: S, renderUserDecoration: Z, rounded: !0, shouldAutoFocus: !0, shouldFocusOnClear: !0, source: D._4.TrustedFriendsSuggested, style: v.input, trustedFriendsId: r }), a ? null : o.createElement(o.Fragment, null, o.createElement(l.ZP, { color: "gray700", size: "body", style: v.education }, o.createElement(i().I18NFormatMessage, { $i18n: "e420d1ed" }, o.createElement(l.ZP, { color: "text", link: c.TRUSTED_FRIENDS_LEARN_MORE_URL, style: v.learnMore, weight: "bold", withUnderline: !0 }, i().f43112a4))), o.createElement(A.Z, { cacheKey: I, emptyStateHeader: y, emptyStateMessage: w, items: E, membersSliceID: g, onFetchNext: t, trustedFriendsId: r })));
                },
                v = s.default.create((e) => ({ input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space4 }, education: { marginHorizontal: e.spaces.space32, textAlign: "center", marginBottom: e.spaces.space8 }, learnMore: { whiteSpace: "nowrap" }, activityIndicatior: { paddingVertical: 250 } }));
            function Z(e) {
                return o.createElement(u.H, { errorConfig: g }, o.createElement(E, e));
            }
        },
        273945: (e, a, d) => {
            d.r(a), d.d(a, { TRUSTED_FRIENDS_LEARN_MORE_URL: () => p, TrustedFriendsManagementScreen: () => y, default: () => w });
            var r = d(202784),
                o = d(107267),
                n = d(688715),
                l = d(111677),
                s = d.n(l),
                t = d(980407),
                i = d(507651),
                c = d(293115),
                u = d(725516),
                h = d(717988),
                m = d(466441);
            const D = s().e1e5d552,
                b = s().cf44066a,
                M = s().ef8f5d90,
                p = (0, n.ju)("https://help.x.com/using-twitter/twitter-circle"),
                f = { page: "trusted_friends_edit" },
                A = (0, h.p)(
                    () =>
                        Promise.all([
                            d.e("icons.21"),
                            d.e("icons.16"),
                            d.e("icons.10"),
                            d.e("icons.1"),
                            d.e("icons.19"),
                            d.e("icons.0"),
                            d.e("icons.23"),
                            d.e("icons.8"),
                            d.e("icons.2"),
                            d.e("icons.3"),
                            d.e("icons.15"),
                            d.e("icons.4"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.7"),
                            d.e("icons.9"),
                            d.e("icons.28"),
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
                            d.e("icons.18"),
                            d.e("icons.29"),
                            d.e("icons.27"),
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
                            d.e("shared~bundle.Communities~bundle.UserLists"),
                            d.e("bundle.UserLists-bc6ccf4c"),
                            d.e("bundle.UserLists-2a1252f0"),
                            d.e("bundle.UserLists-b308cbaf"),
                            d.e("bundle.UserLists-8ed0fac5"),
                            d.e("bundle.UserLists-99ebe121"),
                        ]).then(d.bind(d, 696705)),
                    { shouldMigrateToX: !1 },
                ),
                S = (0, h.p)(
                    () =>
                        Promise.all([
                            d.e("icons.21"),
                            d.e("icons.16"),
                            d.e("icons.10"),
                            d.e("icons.1"),
                            d.e("icons.19"),
                            d.e("icons.0"),
                            d.e("icons.23"),
                            d.e("icons.8"),
                            d.e("icons.2"),
                            d.e("icons.3"),
                            d.e("icons.15"),
                            d.e("icons.4"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.7"),
                            d.e("icons.9"),
                            d.e("icons.28"),
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
                            d.e("icons.18"),
                            d.e("icons.29"),
                            d.e("icons.27"),
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
                            d.e("shared~bundle.Communities~bundle.UserLists"),
                            d.e("bundle.UserLists-bc6ccf4c"),
                            d.e("bundle.UserLists-2a1252f0"),
                            d.e("bundle.UserLists-b308cbaf"),
                            d.e("bundle.UserLists-8ed0fac5"),
                            d.e("bundle.UserLists-99ebe121"),
                        ]).then(d.bind(d, 582313)),
                    { shouldMigrateToX: !1 },
                ),
                y = (e) => {
                    const { history: a, location: d } = e,
                        n = e.match.params.trustedFriendsId,
                        l = (0, u.z)(),
                        s = r.useCallback(() => {
                            if (!n) return null;
                            const e = [
                                { to: { pathname: `/i/circles/${n}/members`, state: d.state }, label: b, key: b },
                                { to: { pathname: `/i/circles/${n}/members/suggested`, state: d.state }, label: M, key: M },
                            ];
                            return r.createElement(i.Z, { "aria-label": D, links: e });
                        }, [d, n]);
                    return r.createElement(
                        c.nO,
                        { namespace: f },
                        r.createElement(
                            t.Z,
                            {
                                backButtonType: "close",
                                history: a,
                                onBackClick: () => {
                                    l.scribe({ element: "trusted_friends", component: "list_dismiss_button", action: "click" }), a.goBack();
                                },
                                secondaryBar: s(),
                                title: D,
                            },
                            n ? r.createElement(o.Switch, null, r.createElement(o.Route, { exact: !0, path: `/i/circles/${n}/members` }, r.createElement(A, { trustedFriendsId: n })), r.createElement(o.Route, { exact: !0, path: `/i/circles/${n}/members/suggested` }, r.createElement(S, { trustedFriendsId: n }))) : r.createElement(m.default, e),
                        ),
                    );
                },
                w = y;
        },
        535708: (e, a, d) => {
            d.d(a, { C: () => r });
            const r = Object.freeze({ Recommendations: "recommendations", Search: "search" });
        },
        235521: (e, a, d) => {
            d.r(a), d.d(a, { UserListsDiscoveryScreen: () => p, default: () => f });
            var r = d(202784),
                o = d(457311),
                n = d(111677),
                l = d.n(n),
                s = d(718e3),
                t = d(252021),
                i = d(443781),
                c = d(652904),
                u = d(810641),
                h = d(412171);
            const m = (0, d(668214).Z)().withAnalytics({ page: "list_discovery" }),
                D = l().h421e74c,
                b = l().aa62dea8,
                M = l().e5e4d3aa;
            class p extends r.Component {
                constructor(...e) {
                    super(...e), (this._renderPrimaryContent = () => r.createElement(u.Z, { module: (0, h.Z)(), renderEmptyState: this._renderEmptyState, title: D })), (this._renderEmptyState = () => r.createElement(o.Z, { header: b, message: M }));
                }
                render() {
                    const { history: e } = this.props;
                    return r.createElement(c.Z, null, r.createElement(t.Z, { backLocation: "/", history: e, primaryContent: this._renderPrimaryContent, sidebarContent: r.createElement(s.Z, { withWhoToFollow: !1 }), title: D }));
                }
            }
            p.contextType = i.rC;
            const f = m(p);
        },
        188856: (e, a, d) => {
            d.r(a), d.d(a, { UserListMembershipsScreen: () => I, default: () => g });
            var r = d(202784),
                o = d(457311),
                n = d(111677),
                l = d.n(n),
                s = d(443781),
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
                S = l().b69e2f71,
                y = l().e05568cc,
                w = l().b86a098a,
                _ = l().h06e09a2,
                k = l().gbaa5489;
            class I extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._entryConfiguration = (0, h.Z)({ shouldDisplayPin: !1 })),
                        (this._renderEmptyItem = () => {
                            const { user: e } = this.props,
                                { viewerUserId: a } = this.context,
                                d = a === e.id_str;
                            return r.createElement(o.Z, { header: d ? w : S({ screenName: e.screen_name }), message: d ? _ : y });
                        });
                }
                render() {
                    const { module: e, user: a } = this.props,
                        d = k({ screenName: a.screen_name });
                    return r.createElement(i.Z, null, r.createElement(t.Z, { title: d }), r.createElement(c.Z, { entryConfiguration: this._entryConfiguration, module: e, renderEmptyState: this._renderEmptyItem, title: d }));
                }
            }
            I.contextType = s.rC;
            const g = A((0, u.Z)(I));
        },
        49128: (e, a, d) => {
            d.d(a, { Z: () => l });
            var r = d(515110),
                o = d(335632),
                n = d(962741);
            const l = (e, a) => ({ ...(0, o.G)({ withMessageGaps: a?.withMessageGaps }), [n.ZP.TwitterList]: (0, r.Z)(e) });
        },
        854254: (e, a, d) => {
            d.r(a), d.d(a, { UserListsScreen: () => _e, default: () => Ie });
            d(136728);
            var r = d(202784),
                o = d(325686),
                n = d(107267),
                l = d(457311),
                s = d(108362),
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
                w = d(421730),
                _ = d(666670),
                k = d(655352),
                I = d(835546),
                g = d(503229),
                E = d(615027),
                v = d(189244),
                Z = d(717988),
                P = d(187669),
                N = d(38293),
                C = d(652904),
                L = d(810641),
                R = d(952793),
                U = d(293115),
                F = d(725405),
                T = d(876963),
                x = d(49128);
            const B = u().bbcaa24b,
                O = u().gbc2cf50,
                H = u().b081cdf7,
                V = u().f5978664,
                z = (0, x.Z)({ shouldDisplayPin: !1 }),
                $ = { page: "spheres_list", section: "all" };
            function q(e) {
                const a = (0, F.Z)(),
                    { user: d } = e,
                    { id_str: o, screen_name: n } = d,
                    s = (0, R.hC)("responsive_web_timeline_relay_user_lists_enabled"),
                    t = r.useMemo(() => (0, T.Z)(o, s ? "relay" : "redux"), [o, s]),
                    i = r.useCallback(() => r.createElement(l.Z, { header: H({ screenName: n }), message: V }), [n]);
                return (
                    (0, P.q)(() => {
                        a.scribe({ action: "impression", ...$ });
                    }),
                    r.createElement(U.nO, { namespace: $ }, r.createElement(C.Z, null, r.createElement(r.Fragment, null, r.createElement(N.Z, { title: B({ screenName: d.screen_name }) }), r.createElement(L.Z, { entryConfiguration: z, module: t, renderEmptyState: i, title: O }))))
                );
            }
            const W = r.memo(q);
            var j = d(71620),
                G = d(668214),
                X = d(919022);
            const K = (e, a) => a.match.params.screenName || void 0,
                Q = (e, a) => {
                    const d = K(0, a);
                    if (d) return X.ZP.selectByScreenName(e, d);
                },
                J = (0, G.Z)()
                    .propsFromState(() => ({ screenName: K, user: Q }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, j.zr)("USER_LISTS"), fetchOneUserByScreenNameIfNeeded: X.ZP.fetchOneByScreenNameIfNeeded }));
            var Y = d(912021),
                ee = d(24949),
                ae = d(558369),
                de = d(652881);
            const re = (0, Y.Z)((e) => (0, de.ZP)(e)),
                oe = (e) => !0 === (0, ae.FG)(e, "responsive_web_timeline_relay_lists_management_enabled"),
                ne = (0, G.Z)()
                    .propsFromState(() => ({ module: (0, ee.P1)(oe, (e) => re(e)) }))
                    .withAnalytics({ page: "list_management" }),
                le = u().gbc2cf50,
                se = u().f5978664,
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
                            return r.createElement(l.Z, { buttonLink: d ? "/i/lists/create" : void 0, buttonText: d ? ie : void 0, header: d ? ue : ce({ screenName: e.screen_name }), message: d ? te : se });
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
                        n = this._getEntryConfiguration(o);
                    return r.createElement(C.Z, null, r.createElement(N.Z, { title: he({ screenName: d.screen_name }) }), r.createElement(L.Z, { entryConfiguration: n, module: a, renderEmptyState: this._renderEmptyTimeline, title: le }));
                }
            }
            me.contextType = S.rC;
            const De = ne(me),
                be = u().h63a5c3c,
                Me = u().d2004da3,
                pe = u().b0041756,
                fe = u().a64512a4,
                Ae = u().i0bcc456,
                Se = u().d8315ca0,
                ye = u().e74be9ac,
                we = (0, Z.p)(
                    () =>
                        Promise.all([
                            d.e("icons.21"),
                            d.e("icons.16"),
                            d.e("icons.10"),
                            d.e("icons.1"),
                            d.e("icons.19"),
                            d.e("icons.0"),
                            d.e("icons.23"),
                            d.e("icons.8"),
                            d.e("icons.2"),
                            d.e("icons.3"),
                            d.e("icons.15"),
                            d.e("icons.4"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.7"),
                            d.e("icons.9"),
                            d.e("icons.28"),
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
                            d.e("icons.18"),
                            d.e("icons.29"),
                            d.e("icons.27"),
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
                            d.e("shared~bundle.Communities~bundle.UserLists"),
                            d.e("bundle.UserLists-bc6ccf4c"),
                            d.e("bundle.UserLists-2a1252f0"),
                            d.e("bundle.UserLists-b308cbaf"),
                            d.e("bundle.UserLists-8ed0fac5"),
                            d.e("bundle.UserLists-99ebe121"),
                        ]).then(d.bind(d, 188856)),
                    { shouldMigrateToX: !1 },
                );
            class _e extends r.Component {
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
                            r && d(r).catch(a(_.F));
                        }),
                        (this._renderActionMenu = (e) => {
                            const a = this._getOverflowMenuItems();
                            return r.createElement(p.default, { actionItems: a, onClose: e });
                        }),
                        (this._renderOverflowMenu = () => (this._getOverflowMenuItems().length > 0 ? r.createElement(b.Z, { "aria-label": be, renderMenu: this._renderActionMenu, style: ke.overflowMenu }) : null)),
                        (this._renderRightControl = () => {
                            const e = this._isViewerUserView() ? r.createElement(D.Z, null) : null,
                                a = this._renderOverflowMenu();
                            return r.createElement(o.Z, { style: ke.rightControl }, (0, k.ZP)() ? e : null, a);
                        }),
                        (this._renderPrimaryContent = () => {
                            const { history: e, user: a } = this.props,
                                d = this._isOwnManagementView() ? r.createElement(y.Z, { history: e, page: "list_management" }) : void 0;
                            if (a) {
                                return a?.protected && !a?.following && !this._isViewerUserView() ? r.createElement(l.Z, { header: Me({ screenName: a.screen_name }), message: Ae }) : r.createElement(f.Z, { component: s.Z, fab: d }, r.createElement(n.Switch, null, r.createElement(n.Route, { exact: !0, path: `/${v.qX}/lists` }, this._isViewerUserView() ? r.createElement(De, { user: a }) : r.createElement(W, { user: a })), r.createElement(n.Route, { exact: !0, path: `/${v.qX}/lists/memberships` }, r.createElement(we, { user: a }))));
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
                        o = !d || (d && (0, I.n5)({ isOwnProfile: this._isViewerUserView(), isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), user: d })),
                        n = this._isOwnManagementView(),
                        l = this._isMembershipsView() ? this._getMembershipsLabel() : pe;
                    return a ? (o ? r.createElement(A.Z, { backLocation: "/", customSearchBox: n ? r.createElement(w.Z, null) : void 0, history: e, primaryContent: this._renderPrimaryContent(), primaryContentLabel: fe, rightControl: this._isMembershipsView() ? null : this._renderRightControl(), sidebarContent: r.createElement(M.Z, null), subtitle: n ? void 0 : r.createElement(t.Z, { screenName: a }), title: l, withSearchBox: n }) : r.createElement(E.Z, { to: `/${a}` })) : null;
                }
            }
            _e.contextType = S.rC;
            const ke = i.default.create((e) => ({ overflowMenu: { marginStart: e.spaces.space12 }, rightControl: { alignItems: "center", flexDirection: "row" } })),
                Ie = J((0, g.Z)(_e));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-99ebe121.2ddf9eea.js.map
