"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.SideNav~loader.SideNavRedesign~bundle.JobSearch"],
    {
        229412: (e, t, n) => {
            n.d(t, { a: () => W });
            n(136728);
            var r = n(202784),
                s = n(325686),
                a = n(530732),
                o = n(310088),
                i = n(731708),
                c = n(673510),
                l = n(661810),
                u = n(392237),
                d = n(332920),
                p = n.n(d),
                m = n(297896),
                h = n(293723),
                g = n(58399),
                f = n(913973),
                w = n(516951),
                C = n(725516),
                E = n(125363),
                b = n(806960);
            const _ = p().h6beb5fb,
                v = p().d86bbf0f,
                y = u.default.create((e) => ({ notificationBadge: { paddingHorizontal: e.spaces.space4 } })),
                A = ({ notificationCount: e = 0 }) => (e > 0 ? r.createElement(o.Z, { count: e, style: e > 9 && y.notificationBadge, truncatedCountFormatter: _, unreadCountLabel: v }) : null);
            var k = n(110512),
                U = n(642153),
                Z = n(899667),
                S = n(487552),
                I = n(390387);
            const x = p().c61eea74,
                F = p().b7dc3885,
                T = p().d86bbf0f,
                L = p().h6beb5fb,
                B = ({ accountUsers: e, activeUser: t, handleMultiAccountSwitch: n, isUpdatedManageAccounts: a, renderUserDecoration: u, userTestId: d, withBadges: p }) => {
                    const m = (0, E.v9)(I.BP),
                        h = !0,
                        [g, f] = r.useState(!1),
                        w = r.useMemo(() => e.filter((e) => e.user_id !== t?.id_str), [e, t]),
                        C = r.useMemo(() => w.reduce((e, t) => e + (t.badgeCount || 0), 0), [w]),
                        b = r.useCallback(() => {
                            f(!g);
                        }, [g]),
                        _ = r.useMemo(() => (m && m > 0 ? r.createElement(s.Z, { onClick: b, style: D.personalAccountsLabel }, r.createElement(i.ZP, { color: "gray700", weight: "bold" }, x), g ? r.createElement(Z.default, { style: D.IconChevronUp }) : r.createElement(S.default, { style: D.IconChevronDown })) : null), [h, m, b, g]),
                        v = r.useMemo(
                            () =>
                                w.map((e) => {
                                    const t = e.badgeCount ?? 0;
                                    return r.createElement(r.Fragment, { key: e.user_id }, r.createElement(c.ZP, { affiliateBadgeInfo: e.highlighted_label, "aria-label": F({ screenName: e.screen_name }), avatarDecoration: a && r.createElement(A, { notificationCount: t }), avatarUri: e.avatar_image_url, badgeContext: "account", decoration: u({ badgeCount: t, withBadges: p, isActiveUser: !1 }), displayMode: "UserCompact", isBlueVerified: e.is_blue_verified, isProtected: e.is_protected, isVerified: e.is_verified, name: e.name, onCellClick: n({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }), screenName: e.screen_name, testID: d, userId: e.user_id, verifiedType: e.verified_type, withLink: !1 }), a && r.createElement(l.Z, { style: D.accountDivider }));
                                }),
                            [n, w, u, d, p, a],
                        ),
                        y = r.useMemo(() => r.createElement(s.Z, { style: D.facePileContainer }, r.createElement(U.Z, { userAvatarSize: "large", userAvatarUrls: w.map((e) => e.avatar_image_url) }), C > 0 ? r.createElement(o.Z, { count: C, standalone: !0, truncatedCountFormatter: L, unreadCountLabel: T }) : null), [w, C]);
                    return w.length > 0 ? r.createElement(r.Fragment, null, !a && _, a || g || void 0 === m || 0 === m ? v : y) : null;
                },
                D = u.default.create((e) => ({ personalAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                M = r.memo(B);
            var P = n(22132);
            const N = p().c61eea74,
                V = p().d86bbf0f,
                H = p().h6beb5fb;
            function W(e) {
                const { accountSwitch: t, accountUsers: n, activeUser: u, clearDelegateUser: d, delegateAccountCount: p, delegateUser: _, isDelegateEnabled: v, isUpdatedManageAccounts: y, onDelegateSwitch: U, onUserSwitch: Z, userTestId: S, withBadges: I = !1 } = e,
                    x = !!_,
                    F = n.some((e) => e.user_id === u.id_str) || (p && p > 0) || x,
                    T = r.useCallback(() => {
                        d && d();
                    }, [d]),
                    L = r.useCallback(
                        ({ hasBadge: e, isProtected: n, userId: r }) =>
                            () => {
                                t({ hasBadge: e, isProtected: n, userId: r }), Z?.();
                            },
                        [t, Z],
                    ),
                    B = (0, E.v9)(b.pm),
                    D = (0, E.v9)(b.QA),
                    W = (0, C.z)(),
                    O = r.useCallback(
                        ({ isActiveUser: e, isLoggedInUser: t }) => {
                            const n = [];
                            return (
                                t &&
                                    n.push(
                                        r.createElement(
                                            a.Z,
                                            {
                                                link: "/logout",
                                                onClick: () => {
                                                    W.scribe({ action: "click", element: "log_out" });
                                                },
                                                testID: P.Z.logout,
                                                withoutInteractiveStyles: !0,
                                            },
                                            r.createElement(m.default, { style: z.IconExiting }),
                                        ),
                                    ),
                                n.push(e ? r.createElement(h.default, { style: z.updatedIconCheckmarkCircleFill }) : r.createElement(g.default, { style: z.IconChevronRight })),
                                r.createElement(
                                    s.Z,
                                    { style: z.decorationsContainer },
                                    n.map((e, t) => r.createElement(r.Fragment, { key: t }, e)),
                                )
                            );
                        },
                        [W],
                    ),
                    R = r.useCallback(({ badgeCount: e, isActiveUser: t, withBadges: n }) => (t ? (v ? r.createElement(h.default, { style: [z.IconCheckmarkCircleFill, z.userDecoration] }) : r.createElement(f.default, { style: [z.iconCheckMark, z.userDecoration] })) : e && n ? r.createElement(o.Z, { count: e, standalone: !0, style: z.userDecoration, truncatedCountFormatter: H, unreadCountLabel: V }) : void 0), [v]),
                    $ = r.useMemo(() => (y ? O : R), [y, R, O]),
                    G = r.useMemo(() => r.createElement(k.ZP, { activeUserId: u.id_str, delegateUser: _, isUpdatedManageAccounts: y, key: 0, onDelegateSwitch: U ?? w.Z, renderUserDecoration: $ }), [u.id_str, _, y, U, $]),
                    j = r.useMemo(() => r.createElement(M, { accountUsers: n, activeUser: u, handleMultiAccountSwitch: L, isUpdatedManageAccounts: !!y, key: 1, renderUserDecoration: $, userTestId: S, withBadges: I }), [n, u, L, y, $, S, I]),
                    Y = [];
                return !y && v && Y.push(G), Y.push(j), y && v && Y.push(G), r.createElement(r.Fragment, null, y && v && r.createElement(s.Z, { style: z.personalAccountsLabel }, r.createElement(i.ZP, { color: "gray700", weight: "bold" }, N)), F ? r.createElement(r.Fragment, null, r.createElement(c.ZP, { affiliateBadgeInfo: u.highlightedLabel, avatarDecoration: y && r.createElement(A, { notificationCount: B + D }), avatarUri: u.profile_image_url_https, badgeContext: "account", decoration: $({ withBadges: I, isActiveUser: !_, isLoggedInUser: !0 }), displayMode: "UserCompact", isBlueVerified: u.is_blue_verified, isProtected: u.protected, isVerified: u.verified, name: u.name, onCellClick: x ? T : void 0, screenName: u.screen_name, testID: S, userId: u.id_str, verifiedType: u.verified_type, withLink: !1 }), y && r.createElement(l.Z, { style: z.accountDivider })) : null, Y, !y && (F || p || n.length) ? r.createElement(l.Z, { spacing: "space12" }) : null);
            }
            const z = u.default.create((e) => ({ iconCheckMark: { color: e.colors.primary, flexShrink: 0 }, IconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, marginEnd: e.spaces.space8 }, updatedIconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconExiting: { color: e.colors.red500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconChevronRight: { color: "inherit", flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, decorationsContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, userDecoration: { marginStart: e.spaces.space12 }, personalAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 } }));
        },
        763881: (e, t, n) => {
            n.d(t, { Z: () => fe });
            n(136728);
            var r = n(202784),
                s = n(400752),
                a = n(332920),
                o = n.n(a),
                i = n(325686),
                c = n(58881),
                l = n(392237),
                u = n(157130),
                d = n(530732),
                p = n(443781),
                m = n(884161),
                h = n(521514),
                g = n(614983),
                f = n.n(g),
                w = n(618186),
                C = n(366635),
                E = n(310088),
                b = n(149170),
                _ = n(952793),
                v = n(125363),
                y = n(919022);
            const A = o().d86bbf0f,
                k = o().h6beb5fb;
            function U(e) {
                const { isExpanded: t } = e,
                    n = (0, _.hC)("rweb_sourcemap_migration"),
                    s = (0, v.v9)(y.ZP.selectViewerUser);
                f()(s, "user must be defined");
                const { highlightedLabel: a, is_blue_verified: o, name: c, profile_image_url_https: l, protected: u, screen_name: d, verified: p, verified_type: m } = s;
                return r.createElement(r.Fragment, null, r.createElement(i.Z, null, r.createElement(w.Z, { "aria-label": c, screenName: d, size: "xLarge", style: n && S.userAvatarRedesign, uri: l }), t ? null : Z(e)), t ? r.createElement(r.Fragment, null, r.createElement(C.Z, { affiliateBadgeInfo: a, badgeContext: "account", isBlueVerified: o, isProtected: u, isVerified: p, name: c, screenName: d, style: S.userName, verifiedType: m, withStackedLayout: !0 }), r.createElement(i.Z, { style: S.iconContainer }, r.createElement(b.default, { style: S.icon }), t ? Z(e) : null)) : null);
            }
            function Z({ hasMultiAccountBadges: e, isExpanded: t }) {
                return e ? r.createElement(E.Z, { pip: !0, style: t && S.pip, truncatedCountFormatter: k, unreadCountLabel: A }) : null;
            }
            const S = l.default.create((e) => ({ icon: { color: e.colors.text }, iconContainer: { alignItems: "flex-end", flexGrow: 1 }, pip: { position: "absolute", end: `calc(-1 * ${e.spaces.space4})`, top: `calc(-1 * ${e.spaces.space4})` }, userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 }, userAvatarRedesign: { width: e.spaces.space36, height: e.spaces.space36 } })),
                I = o().b8e1d524,
                x = o().gef27c4c;
            class F extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderEmptyState = () => {
                            const { renderEmptyState: e } = this.props;
                            return e ? r.createElement(i.Z, { style: T.emptyStateWrapper }, e()) : null;
                        }),
                        (this._handleAccountSwitcherClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ action: "click" });
                        });
                }
                render() {
                    const { "aria-label": e, currentUser: t, delegateUser: n, hasMultiAccountBadges: s, hoverLabel: a, interactiveViewTestId: o, isExpanded: i, renderEmptyState: p, renderMenuSheet: h, style: g } = this.props,
                        f = this.context.featureSwitches.isTrue("rweb_sourcemap_migration"),
                        w = [T.anchorContainer, f && T.anchorContainerRedesign, g];
                    return t || p ? r.createElement(u.Z, { contentStyle: T.menuContainer, enableEnterKeyToggle: !0, renderContent: h, withArrow: !0, withFixedPosition: !0 }, r.createElement(d.Z, { "aria-label": e || x, hoverLabel: i ? void 0 : { label: a || I }, interactiveStyles: c.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text }), onClick: this._handleAccountSwitcherClick, role: "button", style: w, testID: o }, n ? r.createElement(m.p, { forceUserId: n.userId }, r.createElement(U, { hasMultiAccountBadges: s, isExpanded: i })) : t ? r.createElement(U, { hasMultiAccountBadges: s, isExpanded: i }) : this._renderEmptyState())) : null;
                }
            }
            F.contextType = p.rC;
            const T = l.default.create((e) => ({ anchorContainer: { alignItems: "center", borderRadius: e.borderRadii.infinite, display: "flex", flexDirection: "row", padding: e.spaces.space12 }, anchorContainerRedesign: { padding: 8 }, icon: { color: e.colors.text }, iconContainer: { alignItems: "flex-end", flexGrow: 1 }, pip: { position: "absolute", end: `calc(-1 * ${e.spaces.space4})`, top: `calc(-1 * ${e.spaces.space4})` }, userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 }, menuContainer: { width: h.Z.cardWidth.normal }, emptyStateWrapper: { height: e.spaces.space40, minWidth: e.spaces.space40, width: "100%" } }));
            var L = n(380155),
                B = n(755296),
                D = n(725516),
                M = n(193850),
                P = n(823161),
                N = n(879113),
                V = n(266704),
                H = n(550475),
                W = n(516951),
                z = n(615656);
            const O = ({ children: e }) => {
                const t = r.useRef(null);
                return (
                    r.useLayoutEffect(() => {
                        const e = t.current;
                        if (!e) return;
                        const n = e.getElementsByTagName("svg")[0],
                            { height: r, width: s, x: a, y: o } = n.getBBox(),
                            i = [a, o, s, r].join(" ");
                        n.setAttribute("viewBox", i);
                    }),
                    r.createElement("div", { ref: t }, e)
                );
            };
            var R = n(725405);
            const $ = o().h6beb5fb,
                G = o().d86bbf0f,
                j = o().b7dc3885,
                Y = l.default.create((e) => ({ avatarListWithOverflowContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12, alignItems: "center", marginTop: e.spaces.space16, position: "absolute", end: e.spaces.space16, height: e.spaces.space64 }, notificationBadge: { paddingHorizontal: e.spaces.space4 }, IconMoreCircle: { width: e.spaces.space40, height: e.spaces.space40 }, IconMoreCircleContainer: { color: "inherit" } })),
                K = ({ accountSwitch: e, accountUsers: t, activeUser: n, createLocalApiErrorHandlerAccountsFetch: s, fetchAccounts: a, fetchStatus: o, handleClose: c, manageAccountsMenuItem: l, shouldDisplayFetchRenderer: u }) => {
                    const p = t.filter((e) => e.user_id !== n?.id_str),
                        m = p.slice(2).reduce((e, t) => e + (t.badgeCount ?? 0), 0),
                        h = (0, R.Z)(),
                        g = r.useCallback(() => {
                            h.scribe({ element: l.scribeElement, action: "click" }), c();
                        }, [h, c, l]),
                        f = r.useMemo(() => r.createElement(d.Z, { link: l.link, onClick: g, style: Y.IconMoreCircleContainer, testID: l.testID, withoutInteractiveStyles: !0 }, r.createElement(O, null, r.createElement(H.default, { style: Y.IconMoreCircle })), m > 0 && r.createElement(E.Z, { count: m, style: m > 9 && Y.notificationBadge, truncatedCountFormatter: $, unreadCountLabel: G })), [g, l.link, l.testID, m]),
                        w = r.useCallback(
                            ({ hasBadge: t, isProtected: n, userId: r }) =>
                                () => {
                                    e({ hasBadge: t, isProtected: n, userId: r }), c?.();
                                },
                            [e, c],
                        ),
                        C = r.useMemo(
                            () => () =>
                                p.slice(0, 2).map((e) => {
                                    const t = e.badgeCount;
                                    return r.createElement(d.Z, { key: e.user_id, onClick: w({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }) }, r.createElement(P.default, { "aria-label": j({ screenName: e.screen_name }), decoration: t ? r.createElement(E.Z, { count: t, style: t > 9 && Y.notificationBadge, truncatedCountFormatter: $, unreadCountLabel: G }) : void 0, key: e.user_id, screenName: e.screen_name, size: "xLarge", uri: e.avatar_image_url, userId: e.user_id, withLink: !1 }));
                                }),
                            [w, p],
                        ),
                        b = r.useCallback(() => {
                            a().catch(s({ [z.ZP.AppInReadOnlyMode]: { customAction: W.Z } }));
                        }, [s, a]),
                        _ = r.useMemo(() => r.createElement(r.Fragment, null, u ? r.createElement(N.Z, { fetchStatus: o, onRequestRetry: b, render: C }) : C()), [o, b, C, u]);
                    return r.createElement(i.Z, null, r.createElement(V.Z, { isAllowedToViewOptions: { avatar: !0, badges: !0, description: !0, followButton: !1, followersYouKnow: !1, followIndicator: !0, fullName: !0, label: !0, stats: !0, subscriptionsCount: !0 }, isLoggedIn: !0, isUserBlueVerified: n.is_blue_verified, isUserStatsWithLink: !0, isUserVerified: n.verified, userAvatarUri: n.profile_image_url_https, userFollowersCount: n.followers_count, userFriendsCount: n.friends_count, userName: n.name, userScreenName: n.screen_name }), r.createElement(i.Z, { style: Y.avatarListWithOverflowContainer }, _, f));
                };
            var q = n(71620),
                J = n(668214),
                Q = n(454319),
                X = n(956817),
                ee = n(390387),
                te = n(312771);
            const ne = (0, J.Z)()
                .propsFromState(() => ({ delegateAccountCount: ee.BP, delegateUser: ee.sy, fetchStatus: Q.UD, loggedInUser: y.ZP.selectLoggedInUser, multiAccountUsers: Q.pc, hasMultiAccountBadges: Q.pA }))
                .propsFromActions(() => ({ clearDelegateUser: ee.YJ, createLocalApiErrorHandlerAccountSwitch: (0, q.zr)("ACCOUNT_SWITCHER_ACCOUNT_SWITCH"), createLocalApiErrorHandlerMultiListFetch: (0, q.zr)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"), fetchMultiAccountList: Q.qc, switchAccount: X.y }))
                .adjustStateProps(({ delegateAccountCount: e, delegateUser: t, fetchStatus: n, hasMultiAccountBadges: r, loggedInUser: s, multiAccountUsers: a }) => ({ delegateAccountCount: e, delegateUser: t, fetchStatus: n === te.ZP.NONE ? te.ZP.LOADING : n, hasMultiAccountBadges: !!s && r, loggedInUser: s, multiAccountUsers: a }))
                .withAnalytics({ page: "nav", section: "account_switcher" });
            var re = n(143670),
                se = n(731708),
                ae = n(229412);
            class oe extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAdditionalMenuItems = () => (this.props.additionalMenuItems || []).map((e) => r.createElement(re.Z, { Icon: e.Icon, actionText: e.actionText, badge: e.badge, isSelected: e.isSelected, key: e.link, link: e.link, onClick: this._handleMenuItemClick(e.scribeElement, e.onClick), selectable: !0, testID: e.testID }))),
                        (this._renderTitle = () => {
                            const { title: e } = this.props;
                            return e ? r.createElement(se.ZP, { size: "headline1", style: ie.title, weight: "bold" }, e) : null;
                        }),
                        (this._renderUserAccounts = () => {
                            const { accountSwitch: e, accountUsers: t, activeUser: n, clearDelegateUser: s, delegateAccountCount: a, delegateUser: o, handleClose: i, withBadges: c = !1 } = this.props,
                                l = { accountSwitch: e, accountUsers: t, activeUser: n, clearDelegateUser: s, delegateAccountCount: a, delegateUser: o, isDelegateEnabled: this._isDelegateEnabled, onUserSwitch: i, onDelegateSwitch: i, withBadges: c };
                            return r.createElement(ae.a, l);
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandlerAccountsFetch: e, fetchAccounts: t } = this.props;
                            t().catch(e({ [z.ZP.AppInReadOnlyMode]: { customAction: W.Z } }));
                        }),
                        (this._handleMenuItemClick = (e, t) => () => {
                            const { analytics: n, handleClose: r } = this.props;
                            e && n.scribe({ element: e, action: "click" }), t?.(), r();
                        });
                }
                render() {
                    const { fetchStatus: e, shouldDisplayFetchRenderer: t } = this.props;
                    return (this._isDelegateEnabled = !0), r.createElement(i.Z, { style: ie.menuContainer }, this._renderTitle(), t ? r.createElement(N.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._renderUserAccounts }) : this._renderUserAccounts(), this._renderAdditionalMenuItems());
                }
            }
            oe.contextType = p.rC;
            const ie = l.default.create((e) => ({ menuContainer: { paddingVertical: e.spaces.space12 }, title: { paddingBottom: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                ce = (0, D.Z)(oe);
            var le = n(22132);
            const ue = o().j0a8da6e,
                de = o().c6f2bf00,
                pe = o().a58e0e51,
                me = o().j62f43a6,
                he = o().d4c52015,
                ge = { actionText: de, link: "/account/switch", scribeElement: "manage_accounts", testID: le.Z.manageAccounts },
                fe = ne(({ clearDelegateUser: e, createLocalApiErrorHandlerAccountSwitch: t, createLocalApiErrorHandlerMultiListFetch: n, delegateAccountCount: a, delegateUser: o, fetchMultiAccountList: i, fetchStatus: c, hasMultiAccountBadges: l, isExpanded: u, loggedInUser: d, multiAccountUsers: p, style: m, switchAccount: h, withUpdatedAccountSwitcher: g }) => {
                    const f = (0, D.z)();
                    (0, M.ip)();
                    const [w, C] = (0, s.KO)(M.lA),
                        E = r.useCallback(() => {
                            const e = p.length > 1,
                                t = [];
                            return p.length >= 5 || o || t.push({ actionText: ue, link: "/i/flow/login", scribeElement: "add_existing_account", testID: le.Z.addAccount }), e && t.push(ge), (a || w > 0) && t.push({ actionText: me, link: a || w > 0 ? "/i/delegate/delegations" : "/settings/delegate", scribeElement: "manage_accounts", testID: le.Z.manageAccounts, badge: { count: w, label: he } }), d && t.push({ actionText: pe({ screenName: d.screen_name }), link: "/logout", scribeElement: "log_out", testID: le.Z.logout }), t;
                        }, [a, o, d, p.length, w]),
                        b = r.useCallback(
                            ({ hasBadge: e, isProtected: n, userId: r }) => {
                                f.scribe({ component: n ? "switch_to_protected_account" : "switch_account", element: e ? "account_badged" : "account", action: "click" }), h({ user_id: r }).catch(t(L.y));
                            },
                            [f, t, h],
                        ),
                        _ = r.useCallback(() => {
                            const { hasMultiAccountCookie: e } = (0, B.s)();
                            return e;
                        }, []),
                        v = r.useCallback((t) => (C(), d ? (g ? r.createElement(K, { accountSwitch: b, accountUsers: p, activeUser: d, createLocalApiErrorHandlerAccountsFetch: n, fetchAccounts: i, fetchStatus: c, handleClose: t, manageAccountsMenuItem: ge, shouldDisplayFetchRenderer: _() }) : r.createElement(ce, { accountSwitch: b, accountUsers: p, activeUser: d, additionalMenuItems: E(), clearDelegateUser: e, createLocalApiErrorHandlerAccountsFetch: n, delegateAccountCount: a, delegateUser: o, fetchAccounts: i, fetchStatus: c, handleClose: t, shouldDisplayFetchRenderer: _(), withBadges: !0 })) : null), [e, n, a, o, i, c, E, _, C, d, b, p, g]);
                    return r.createElement(F, { analytics: f, currentUser: d, delegateUser: o, hasMultiAccountBadges: l, interactiveViewTestId: le.Z.accountSwitcher, isExpanded: u, renderMenuSheet: v, style: m });
                });
        },
        22132: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = { accountSwitcher: "SideNav_AccountSwitcher_Button", addAccount: "AccountSwitcher_AddAccount_Button", logout: "AccountSwitcher_Logout_Button", manageAccounts: "AccountSwitcher_ManageAccounts_Button" };
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(202784),
                s = n(325686),
                a = n(332920),
                o = n.n(a),
                i = n(815858),
                c = n(731708),
                l = n(642153),
                u = n(530732),
                d = n(392237);
            const p = o().a35a5b10,
                m = o().fc8cd112,
                h = (e) => r.createElement(c.ZP, null, e);
            class g extends r.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: a, userScreenName: o, withFacepile: d } = this.props,
                        m = this._renderMessage();
                    return r.createElement(i.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? r.createElement(u.Z, { "aria-label": p, interactiveStyles: null, link: o ? ((h = o), `/${h}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: i }) => r.createElement(s.Z, { style: f.content }, !e && d ? r.createElement(l.Z, { userAvatarUrls: t }) : null, r.createElement(c.ZP, { color: "gray700", size: "subtext2", style: [!e && f.message, (n || i) && !!o && f.underline, a] }, e && d ? r.createElement(l.Z, { style: f.inlineFacepile, userAvatarUrls: t }) : null, m))) : r.createElement(s.Z, { style: f.content }, r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, m)));
                    var h;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : m;
                }
                _renderOneUsername(e) {
                    return r.createElement(o().I18NFormatMessage, { $i18n: "c9e6167d" }, h(e[0]));
                }
                _renderTwoUsernames(e) {
                    return r.createElement(o().I18NFormatMessage, { $i18n: "ha91d1eb" }, h(e[0]), h(e[1]));
                }
                _renderThreeUsernames(e) {
                    return r.createElement(o().I18NFormatMessage, { $i18n: "f1069f9b" }, h(e[0]), h(e[1]), h(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return r.createElement(o().I18NFormatMessage, { $i18n: "e8404c1f" }, h(e[0]), h(e[1]), n);
                }
            }
            g.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const f = d.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var r = n(202784),
                s = n(325686),
                a = n(827515),
                o = n(461756),
                i = n(731708),
                c = n(392237);
            const l = "up",
                u = "down",
                d = (e, t, n) => {
                    n((n) => {
                        const r = (0, a.Z)(e) ? (e > (n.count || 0) ? l : u) : l;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                p = {};
            [l, u].forEach((e) => {
                const t = "0.3s";
                p[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === l ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === l ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                h = c.default.create({ root: { overflow: "hidden" } }),
                g = (e) => {
                    const { children: t, containerStyle: n, count: c, ...u } = e,
                        [g, f] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: l }),
                        w = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (w.current = !0),
                                function () {
                                    w.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (w.current)
                                if (o.Z.reducedMotionEnabled) f((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== g.pendingText) {
                                    t === g.text || ((0, a.Z)(e.count) && g.count === e.count) ? f((e) => ({ ...e, pendingCount: null, pendingText: null })) : (f((n) => ({ ...n, pendingCount: e.count, pendingText: t })), g.animating || d(e.count, t, f));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            w.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              w.current && f((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && d(g.pendingCount, g.pendingText, f));
                        }, [g.animating, g.oldText]),
                        r.useMemo(() => {
                            const e = p[g.transitionDirection],
                                t = g.oldText && !o.Z.reducedMotionEnabled,
                                a = !g.animating && g.oldText && !o.Z.reducedMotionEnabled,
                                c = { ...m, ...(g.animating ? e.post : e.active) },
                                l = { ...(a ? e.pre : e.active) };
                            return r.createElement(
                                s.Z,
                                { style: [h.root, n] },
                                t ? r.createElement("span", { style: c }, r.createElement(i.ZP, u, g.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(w.current, f),
                                        style: l,
                                    },
                                    r.createElement(i.ZP, u, g.text),
                                ),
                            );
                        }, [n, u, g, w, f])
                    );
                };
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(202784),
                s = n(325686),
                a = n(731708),
                o = n(891198),
                i = n(280278),
                c = n(392237);
            const l = "subtext1",
                u = r.createContext({ onMedia: !1 });
            class d extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, o.Gb)(e) !== (0, o.wl)(e) ? { label: (0, o.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: s } = this.props;
                    return r.createElement(a.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: s }, r.createElement(u.Provider, { value: { onMedia: n } }, e));
                }
            }
            (d.Group = (e) =>
                r.createElement(
                    s.Z,
                    { style: [p.row, e.style] },
                    r.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => r.createElement(s.Z, { key: t, style: t < n.length - 1 && p.groupItemNonLast }, e)),
                )),
                (d.Label = ({ children: e, style: t }) => r.createElement(u.Consumer, null, ({ onMedia: n }) => r.createElement(a.ZP, { children: e, color: n ? "white" : "gray700", size: l, style: t }))),
                (d.Value = ({ animated: e, children: t, count: n, style: s, weight: o = "bold" }) => r.createElement(u.Consumer, null, ({ onMedia: c }) => (e ? r.createElement(i.ZP, { children: t, count: n, size: l, style: s, weight: o }) : r.createElement(a.ZP, { children: t, color: c ? "white" : "text", size: l, style: s, weight: o }))));
            const p = c.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                m = d;
        },
        266704: (e, t, n) => {
            n.d(t, { Z: () => b });
            var r = n(202784),
                s = n(325686),
                a = n(731708),
                o = n(235902),
                i = n(649846),
                c = n(529509),
                l = n(392237),
                u = n(823161),
                d = n(238406),
                p = n(366635),
                m = n(646797);
            const h = () => !1;
            class g extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: n, userScreenName: a } = this.props,
                                { followersYouKnow: o } = e;
                            if (o && t && n) {
                                const { avatarUrls: e, count: t, names: o } = n;
                                return t ? r.createElement(s.Z, { style: [f.marginTop12, f.minHeight] }, "number" == typeof t && r.createElement(c.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: o, userScreenName: a })) : null;
                            }
                        });
                }
                render() {
                    return r.createElement(o.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return r.createElement(s.Z, { style: f.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: n } = this.props,
                        { followButton: r } = t;
                    return r && n && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return r.createElement(s.Z, { style: f.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? r.createElement(s.Z, { style: f.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: n, promotedContent: a, userAvatarSize: i, userAvatarUri: c, userScreenName: l } = this.props,
                        { avatar: d } = e;
                    return r.createElement(s.Z, { style: f.row }, r.createElement(o.ZP.Provider, { value: { userAvatarLabel: h } }, r.createElement(u.default, { link: n, onClick: t, promotedContent: a, screenName: l, size: i, uri: d ? c : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: n } = this.props,
                        { label: a } = t;
                    return n ? r.createElement(r.Fragment, null, this._renderUserAvatar(), r.createElement(s.Z, { style: f.marginTop8 }, this._renderUserName(), a && this._renderHighlightedUserLabel())) : r.createElement(s.Z, { style: f.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: n, isUserVerified: s, onScreenNameClick: a, profileLink: o, promotedContent: i, userHighlightedLabel: c, userName: l, userScreenName: u, userTranslatorType: d, userVerifiedType: m, userWithFollowsYou: h, withNameWrap: g } = this.props,
                        { badges: f, followIndicator: w, fullName: C } = e;
                    return r.createElement(p.Z, { affiliateBadgeInfo: c, badgeContext: "account", isBlueVerified: f ? t : void 0, isProtected: f ? n : void 0, isVerified: f ? s : void 0, link: o, name: C ? l : u, nameSize: "headline2", onLinkClick: a, promotedContent: i, screenName: u, translatorType: f ? d : void 0, verifiedType: f ? m : void 0, withFollowsYou: w && h, withLink: !0, withNameWrap: g, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && r.createElement(i.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? r.createElement(s.Z, { style: f.marginTop4 }, r.createElement(a.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: n, userId: a, userWithheldDescription: o, userWithheldEntities: i } = this.props,
                        { description: c } = e;
                    return c && t && n && a ? r.createElement(s.Z, { style: [f.row, f.marginTop12] }, r.createElement(d.Z, { description: t, entities: n, userId: a, withheldDescription: o, withheldEntities: i })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: n, subscriptionsCount: a, userFollowersCount: o, userFriendsCount: i, userScreenName: c } = this.props,
                        { stats: l } = e;
                    return l ? r.createElement(s.Z, { style: [f.row, f.marginTop12] }, r.createElement(m.Z, { followersCount: o, friendsCount: i, onPress: n, screenName: c, subscriptionsCount: a, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            g.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const f = l.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var w = n(807896);
            var C = n(332920);
            const E = n.n(C)().ef633578;
            class b extends r.PureComponent {
                render() {
                    return r.createElement(g, this.props);
                }
            }
            (b.Promoted = (e) => {
                const { followButton: t, isUserProtected: n, isUserVerified: s, knownFollowers: a, onAvatarClick: o, onScreenNameClick: i, promotedContent: c, userDescription: l, userId: u, userName: d, userScreenName: p, ...m } = e,
                    h = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return r.createElement(g, (0, w.Z)({}, m, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: n, isUserStatsWithLink: h.isUserStatsWithLink, isUserVerified: s, knownFollowers: a, onAvatarClick: o, onScreenNameClick: i, promotedContent: c, userAvatarUri: h.profile_image_url_https, userDescription: l, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userId: u, userName: d, userScreenName: p, userWithFollowsYou: h.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (b.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: n }) {
                    const s = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return r.createElement(g, { errorMessage: E, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: s.protected, isUserStatsWithLink: s.isUserStatsWithLink, isUserVerified: s.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: s.profile_image_url_https, userDescription: s.description, userEntities: s.entities, userFollowersCount: s.followers_count, userFriendsCount: s.friends_count, userId: s.id_str, userName: n, userScreenName: n, userWithFollowsYou: s.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                s = n(332920),
                a = n.n(s),
                o = n(891198),
                i = n(98538);
            class c extends r.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: n, screenName: s, style: c, subscribersCount: l, subscriptionsCount: u, withLink: d, withSubscribersCount: p, withSubscriptionsCount: m } = this.props,
                        h = `/${s}/verified_followers`;
                    return r.createElement(i.Z.Group, { style: c }, r.createElement(i.Z, { count: t, link: d ? `/${s}/following` : void 0, onPress: n }, r.createElement(a().I18NFormatMessage, { $i18n: "g3ed1dd5" }, r.createElement(i.Z.Value, null, a().e4f1e6e4({ formattedCount: (0, o.wl)(t) })), r.createElement(i.Z.Label, null, a().daf8a75f({ count: t })))), r.createElement(i.Z, { count: e, link: d ? h : void 0, onPress: n }, r.createElement(a().I18NFormatMessage, { $i18n: "i06724fb" }, r.createElement(i.Z.Value, null, a().ef1f4fc6({ formattedCount: (0, o.wl)(e) })), r.createElement(i.Z.Label, null, a().ad9b5988({ count: e })))), p && void 0 !== l && r.createElement(i.Z, { count: l, link: d ? `/${s}/creator-subscriptions/subscribers` : void 0, onPress: n }, r.createElement(a().I18NFormatMessage, { $i18n: "eb0084f3" }, r.createElement(i.Z.Value, null, a().a9980948({ formattedCount: (0, o.wl)(l) })), r.createElement(i.Z.Label, null, a().ce44a35c({ count: l })))), m && u && r.createElement(i.Z, { count: u, link: d ? `/${s}/creator-subscriptions/subscriptions` : void 0, onPress: n }, r.createElement(a().I18NFormatMessage, { $i18n: "fc1b8f67" }, r.createElement(i.Z.Value, null, a().id949f68({ formattedCount: (0, o.wl)(u) })), r.createElement(i.Z.Label, null, a().hb608cfc({ count: u })))));
                }
            }
            c.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.SideNav~loader.SideNavRedesign~bundle.JobSearch.a3afbfca.js.map
