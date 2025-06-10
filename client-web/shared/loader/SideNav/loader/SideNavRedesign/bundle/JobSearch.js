"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.SideNav~loader.SideNavRedesign~bundle.JobSearch"],
    {
        229412: (e, t, r) => {
            r.d(t, { a: () => W });
            r(136728);
            var n = r(202784),
                s = r(325686),
                a = r(530732),
                o = r(310088),
                i = r(731708),
                c = r(673510),
                l = r(661810),
                u = r(392237),
                d = r(111677),
                p = r.n(d),
                m = r(297896),
                h = r(293723),
                g = r(58399),
                f = r(913973),
                w = r(516951),
                C = r(725516),
                b = r(125363),
                E = r(806960);
            const _ = p().h6beb5fb,
                v = p().d86bbf0f,
                y = u.default.create((e) => ({ notificationBadge: { paddingHorizontal: e.spaces.space4 } })),
                A = ({ notificationCount: e = 0 }) => (e > 0 ? n.createElement(o.Z, { count: e, style: e > 9 && y.notificationBadge, truncatedCountFormatter: _, unreadCountLabel: v }) : null);
            var k = r(110512),
                U = r(642153),
                S = r(899667),
                Z = r(487552),
                I = r(390387);
            const F = p().c61eea74,
                L = p().b7dc3885,
                B = p().d86bbf0f,
                M = p().h6beb5fb,
                x = ({ accountUsers: e, activeUser: t, handleMultiAccountSwitch: r, isUpdatedManageAccounts: a, renderUserDecoration: u, userTestId: d, withBadges: p }) => {
                    const m = (0, b.v9)(I.BP),
                        h = !0,
                        [g, f] = n.useState(!1),
                        w = n.useMemo(() => e.filter((e) => e.user_id !== t?.id_str), [e, t]),
                        C = n.useMemo(() => w.reduce((e, t) => e + (t.badgeCount || 0), 0), [w]),
                        E = n.useCallback(() => {
                            f(!g);
                        }, [g]),
                        _ = n.useMemo(() => (m && m > 0 ? n.createElement(s.Z, { onClick: E, style: D.personalAccountsLabel }, n.createElement(i.ZP, { color: "gray700", weight: "bold" }, F), g ? n.createElement(S.default, { style: D.IconChevronUp }) : n.createElement(Z.default, { style: D.IconChevronDown })) : null), [h, m, E, g]),
                        v = n.useMemo(
                            () =>
                                w.map((e) => {
                                    const t = e.badgeCount ?? 0;
                                    return n.createElement(n.Fragment, { key: e.user_id }, n.createElement(c.ZP, { affiliateBadgeInfo: e.highlighted_label, "aria-label": L({ screenName: e.screen_name }), avatarDecoration: a && n.createElement(A, { notificationCount: t }), avatarUri: e.avatar_image_url, badgeContext: "account", decoration: u({ badgeCount: t, withBadges: p, isActiveUser: !1 }), displayMode: "UserCompact", isBlueVerified: e.is_blue_verified, isProtected: e.is_protected, isVerified: e.is_verified, name: e.name, onCellClick: r({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }), screenName: e.screen_name, testID: d, userId: e.user_id, verifiedType: e.verified_type, withLink: !1 }), a && n.createElement(l.Z, { style: D.accountDivider }));
                                }),
                            [r, w, u, d, p, a],
                        ),
                        y = n.useMemo(() => n.createElement(s.Z, { style: D.facePileContainer }, n.createElement(U.Z, { userAvatarSize: "large", userAvatarUrls: w.map((e) => e.avatar_image_url) }), C > 0 ? n.createElement(o.Z, { count: C, standalone: !0, truncatedCountFormatter: M, unreadCountLabel: B }) : null), [w, C]);
                    return w.length > 0 ? n.createElement(n.Fragment, null, !a && _, a || g || void 0 === m || 0 === m ? v : y) : null;
                },
                D = u.default.create((e) => ({ personalAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                N = n.memo(x);
            var P = r(22132);
            const T = p().c61eea74,
                V = p().d86bbf0f,
                H = p().h6beb5fb;
            function W(e) {
                const { accountSwitch: t, accountUsers: r, activeUser: u, clearDelegateUser: d, delegateAccountCount: p, delegateUser: _, isDelegateEnabled: v, isUpdatedManageAccounts: y, onDelegateSwitch: U, onUserSwitch: S, userTestId: Z, withBadges: I = !1 } = e,
                    F = !!_,
                    L = r.some((e) => e.user_id === u.id_str) || (p && p > 0) || F,
                    B = n.useCallback(() => {
                        d && d();
                    }, [d]),
                    M = n.useCallback(
                        ({ hasBadge: e, isProtected: r, userId: n }) =>
                            () => {
                                t({ hasBadge: e, isProtected: r, userId: n }), S?.();
                            },
                        [t, S],
                    ),
                    x = (0, b.v9)(E.pm),
                    D = (0, b.v9)(E.QA),
                    W = (0, C.z)(),
                    z = n.useCallback(
                        ({ isActiveUser: e, isLoggedInUser: t }) => {
                            const r = [];
                            return (
                                t &&
                                    r.push(
                                        n.createElement(
                                            a.Z,
                                            {
                                                link: "/logout",
                                                onClick: () => {
                                                    W.scribe({ action: "click", element: "log_out" });
                                                },
                                                testID: P.Z.logout,
                                                withoutInteractiveStyles: !0,
                                            },
                                            n.createElement(m.default, { style: R.IconExiting }),
                                        ),
                                    ),
                                r.push(e ? n.createElement(h.default, { style: R.updatedIconCheckmarkCircleFill }) : n.createElement(g.default, { style: R.IconChevronRight })),
                                n.createElement(
                                    s.Z,
                                    { style: R.decorationsContainer },
                                    r.map((e, t) => n.createElement(n.Fragment, { key: t }, e)),
                                )
                            );
                        },
                        [W],
                    ),
                    O = n.useCallback(({ badgeCount: e, isActiveUser: t, withBadges: r }) => (t ? (v ? n.createElement(h.default, { style: [R.IconCheckmarkCircleFill, R.userDecoration] }) : n.createElement(f.default, { style: [R.iconCheckMark, R.userDecoration] })) : e && r ? n.createElement(o.Z, { count: e, standalone: !0, style: R.userDecoration, truncatedCountFormatter: H, unreadCountLabel: V }) : void 0), [v]),
                    $ = n.useMemo(() => (y ? z : O), [y, O, z]),
                    G = n.useMemo(() => n.createElement(k.ZP, { activeUserId: u.id_str, delegateUser: _, isUpdatedManageAccounts: y, key: 0, onDelegateSwitch: U ?? w.Z, renderUserDecoration: $ }), [u.id_str, _, y, U, $]),
                    j = n.useMemo(() => n.createElement(N, { accountUsers: r, activeUser: u, handleMultiAccountSwitch: M, isUpdatedManageAccounts: !!y, key: 1, renderUserDecoration: $, userTestId: Z, withBadges: I }), [r, u, M, y, $, Z, I]),
                    Y = [];
                return !y && v && Y.push(G), Y.push(j), y && v && Y.push(G), n.createElement(n.Fragment, null, y && v && n.createElement(s.Z, { style: R.personalAccountsLabel }, n.createElement(i.ZP, { color: "gray700", weight: "bold" }, T)), L ? n.createElement(n.Fragment, null, n.createElement(c.ZP, { affiliateBadgeInfo: u.highlightedLabel, avatarDecoration: y && n.createElement(A, { notificationCount: x + D }), avatarUri: u.profile_image_url_https, badgeContext: "account", decoration: $({ withBadges: I, isActiveUser: !_, isLoggedInUser: !0 }), displayMode: "UserCompact", isBlueVerified: u.is_blue_verified, isProtected: u.protected, isVerified: u.verified, name: u.name, onCellClick: F ? B : void 0, screenName: u.screen_name, testID: Z, userId: u.id_str, verifiedType: u.verified_type, withLink: !1 }), y && n.createElement(l.Z, { style: R.accountDivider })) : null, Y, !y && (L || p || r.length) ? n.createElement(l.Z, { spacing: "space12" }) : null);
            }
            const R = u.default.create((e) => ({ iconCheckMark: { color: e.colors.primary, flexShrink: 0 }, IconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, marginEnd: e.spaces.space8 }, updatedIconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconExiting: { color: e.colors.red500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconChevronRight: { color: "inherit", flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, decorationsContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, userDecoration: { marginStart: e.spaces.space12 }, personalAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 } }));
        },
        763881: (e, t, r) => {
            r.d(t, { Z: () => fe });
            r(136728);
            var n = r(202784),
                s = r(400752),
                a = r(111677),
                o = r.n(a),
                i = r(325686),
                c = r(58881),
                l = r(392237),
                u = r(157130),
                d = r(530732),
                p = r(443781),
                m = r(884161),
                h = r(521514),
                g = r(614983),
                f = r.n(g),
                w = r(618186),
                C = r(366635),
                b = r(310088),
                E = r(149170),
                _ = r(952793),
                v = r(125363),
                y = r(919022);
            const A = o().d86bbf0f,
                k = o().h6beb5fb;
            function U(e) {
                const { isExpanded: t } = e,
                    r = (0, _.hC)("rweb_sourcemap_migration"),
                    s = (0, v.v9)(y.ZP.selectViewerUser);
                f()(s, "user must be defined");
                const { highlightedLabel: a, is_blue_verified: o, name: c, profile_image_url_https: l, protected: u, screen_name: d, verified: p, verified_type: m } = s;
                return n.createElement(n.Fragment, null, n.createElement(i.Z, null, n.createElement(w.Z, { "aria-label": c, screenName: d, size: "xLarge", style: r && Z.userAvatarRedesign, uri: l }), t ? null : S(e)), t ? n.createElement(n.Fragment, null, n.createElement(C.Z, { affiliateBadgeInfo: a, badgeContext: "account", isBlueVerified: o, isProtected: u, isVerified: p, name: c, screenName: d, style: Z.userName, verifiedType: m, withStackedLayout: !0 }), n.createElement(i.Z, { style: Z.iconContainer }, n.createElement(E.default, { style: Z.icon }), t ? S(e) : null)) : null);
            }
            function S({ hasMultiAccountBadges: e, isExpanded: t }) {
                return e ? n.createElement(b.Z, { pip: !0, style: t && Z.pip, truncatedCountFormatter: k, unreadCountLabel: A }) : null;
            }
            const Z = l.default.create((e) => ({ icon: { color: e.colors.text }, iconContainer: { alignItems: "flex-end", flexGrow: 1 }, pip: { position: "absolute", end: `calc(-1 * ${e.spaces.space4})`, top: `calc(-1 * ${e.spaces.space4})` }, userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 }, userAvatarRedesign: { width: e.spaces.space36, height: e.spaces.space36 } })),
                I = o().b8e1d524,
                F = o().gef27c4c;
            class L extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderEmptyState = () => {
                            const { renderEmptyState: e } = this.props;
                            return e ? n.createElement(i.Z, { style: B.emptyStateWrapper }, e()) : null;
                        }),
                        (this._handleAccountSwitcherClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ action: "click" });
                        });
                }
                render() {
                    const { "aria-label": e, currentUser: t, delegateUser: r, hasMultiAccountBadges: s, hoverLabel: a, interactiveViewTestId: o, isExpanded: i, renderEmptyState: p, renderMenuSheet: h, style: g } = this.props,
                        f = this.context.featureSwitches.isTrue("rweb_sourcemap_migration"),
                        w = [B.anchorContainer, f && B.anchorContainerRedesign, g];
                    return t || p ? n.createElement(u.Z, { contentStyle: B.menuContainer, enableEnterKeyToggle: !0, renderContent: h, withArrow: !0, withFixedPosition: !0 }, n.createElement(d.Z, { "aria-label": e || F, hoverLabel: i ? void 0 : { label: a || I }, interactiveStyles: c.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text }), onClick: this._handleAccountSwitcherClick, role: "button", style: w, testID: o }, r ? n.createElement(m.p, { forceUserId: r.userId }, n.createElement(U, { hasMultiAccountBadges: s, isExpanded: i })) : t ? n.createElement(U, { hasMultiAccountBadges: s, isExpanded: i }) : this._renderEmptyState())) : null;
                }
            }
            L.contextType = p.rC;
            const B = l.default.create((e) => ({ anchorContainer: { alignItems: "center", borderRadius: e.borderRadii.infinite, display: "flex", flexDirection: "row", padding: e.spaces.space12 }, anchorContainerRedesign: { padding: 8 }, icon: { color: e.colors.text }, iconContainer: { alignItems: "flex-end", flexGrow: 1 }, pip: { position: "absolute", end: `calc(-1 * ${e.spaces.space4})`, top: `calc(-1 * ${e.spaces.space4})` }, userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 }, menuContainer: { width: h.Z.cardWidth.normal }, emptyStateWrapper: { height: e.spaces.space40, minWidth: e.spaces.space40, width: "100%" } }));
            var M = r(380155),
                x = r(755296),
                D = r(725516),
                N = r(193850),
                P = r(823161),
                T = r(879113),
                V = r(266704),
                H = r(550475),
                W = r(516951),
                R = r(615656);
            const z = ({ children: e }) => {
                const t = n.useRef(null);
                return (
                    n.useLayoutEffect(() => {
                        const e = t.current;
                        if (!e) return;
                        const r = e.getElementsByTagName("svg")[0],
                            { height: n, width: s, x: a, y: o } = r.getBBox(),
                            i = [a, o, s, n].join(" ");
                        r.setAttribute("viewBox", i);
                    }),
                    n.createElement("div", { ref: t }, e)
                );
            };
            var O = r(725405);
            const $ = o().h6beb5fb,
                G = o().d86bbf0f,
                j = o().b7dc3885,
                Y = l.default.create((e) => ({ avatarListWithOverflowContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12, alignItems: "center", marginTop: e.spaces.space16, position: "absolute", end: e.spaces.space16, height: e.spaces.space64 }, notificationBadge: { paddingHorizontal: e.spaces.space4 }, IconMoreCircle: { width: e.spaces.space40, height: e.spaces.space40 }, IconMoreCircleContainer: { color: "inherit" } })),
                K = ({ accountSwitch: e, accountUsers: t, activeUser: r, createLocalApiErrorHandlerAccountsFetch: s, fetchAccounts: a, fetchStatus: o, handleClose: c, manageAccountsMenuItem: l, shouldDisplayFetchRenderer: u }) => {
                    const p = t.filter((e) => e.user_id !== r?.id_str),
                        m = p.slice(2).reduce((e, t) => e + (t.badgeCount ?? 0), 0),
                        h = (0, O.Z)(),
                        g = n.useCallback(() => {
                            h.scribe({ element: l.scribeElement, action: "click" }), c();
                        }, [h, c, l]),
                        f = n.useMemo(() => n.createElement(d.Z, { link: l.link, onClick: g, style: Y.IconMoreCircleContainer, testID: l.testID, withoutInteractiveStyles: !0 }, n.createElement(z, null, n.createElement(H.default, { style: Y.IconMoreCircle })), m > 0 && n.createElement(b.Z, { count: m, style: m > 9 && Y.notificationBadge, truncatedCountFormatter: $, unreadCountLabel: G })), [g, l.link, l.testID, m]),
                        w = n.useCallback(
                            ({ hasBadge: t, isProtected: r, userId: n }) =>
                                () => {
                                    e({ hasBadge: t, isProtected: r, userId: n }), c?.();
                                },
                            [e, c],
                        ),
                        C = n.useMemo(
                            () => () =>
                                p.slice(0, 2).map((e) => {
                                    const t = e.badgeCount;
                                    return n.createElement(d.Z, { key: e.user_id, onClick: w({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }) }, n.createElement(P.default, { "aria-label": j({ screenName: e.screen_name }), decoration: t ? n.createElement(b.Z, { count: t, style: t > 9 && Y.notificationBadge, truncatedCountFormatter: $, unreadCountLabel: G }) : void 0, key: e.user_id, screenName: e.screen_name, size: "xLarge", uri: e.avatar_image_url, userId: e.user_id, withLink: !1 }));
                                }),
                            [w, p],
                        ),
                        E = n.useCallback(() => {
                            a().catch(s({ [R.ZP.AppInReadOnlyMode]: { customAction: W.Z } }));
                        }, [s, a]),
                        _ = n.useMemo(() => n.createElement(n.Fragment, null, u ? n.createElement(T.Z, { fetchStatus: o, onRequestRetry: E, render: C }) : C()), [o, E, C, u]);
                    return n.createElement(i.Z, null, n.createElement(V.Z, { isAllowedToViewOptions: { avatar: !0, badges: !0, description: !0, followButton: !1, followersYouKnow: !1, followIndicator: !0, fullName: !0, label: !0, stats: !0, subscriptionsCount: !0 }, isLoggedIn: !0, isUserBlueVerified: r.is_blue_verified, isUserStatsWithLink: !0, isUserVerified: r.verified, userAvatarUri: r.profile_image_url_https, userFollowersCount: r.followers_count, userFriendsCount: r.friends_count, userName: r.name, userScreenName: r.screen_name }), n.createElement(i.Z, { style: Y.avatarListWithOverflowContainer }, _, f));
                };
            var q = r(71620),
                J = r(668214),
                Q = r(454319),
                X = r(956817),
                ee = r(390387),
                te = r(312771);
            const re = (0, J.Z)()
                .propsFromState(() => ({ delegateAccountCount: ee.BP, delegateUser: ee.sy, fetchStatus: Q.UD, loggedInUser: y.ZP.selectLoggedInUser, multiAccountUsers: Q.pc, hasMultiAccountBadges: Q.pA }))
                .propsFromActions(() => ({ clearDelegateUser: ee.YJ, createLocalApiErrorHandlerAccountSwitch: (0, q.zr)("ACCOUNT_SWITCHER_ACCOUNT_SWITCH"), createLocalApiErrorHandlerMultiListFetch: (0, q.zr)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"), fetchMultiAccountList: Q.qc, switchAccount: X.y }))
                .adjustStateProps(({ delegateAccountCount: e, delegateUser: t, fetchStatus: r, hasMultiAccountBadges: n, loggedInUser: s, multiAccountUsers: a }) => ({ delegateAccountCount: e, delegateUser: t, fetchStatus: r === te.ZP.NONE ? te.ZP.LOADING : r, hasMultiAccountBadges: !!s && n, loggedInUser: s, multiAccountUsers: a }))
                .withAnalytics({ page: "nav", section: "account_switcher" });
            var ne = r(143670),
                se = r(731708),
                ae = r(229412);
            class oe extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAdditionalMenuItems = () => (this.props.additionalMenuItems || []).map((e) => n.createElement(ne.Z, { Icon: e.Icon, actionText: e.actionText, badge: e.badge, isSelected: e.isSelected, key: e.link, link: e.link, onClick: this._handleMenuItemClick(e.scribeElement, e.onClick), selectable: !0, testID: e.testID }))),
                        (this._renderTitle = () => {
                            const { title: e } = this.props;
                            return e ? n.createElement(se.ZP, { size: "headline1", style: ie.title, weight: "bold" }, e) : null;
                        }),
                        (this._renderUserAccounts = () => {
                            const { accountSwitch: e, accountUsers: t, activeUser: r, clearDelegateUser: s, delegateAccountCount: a, delegateUser: o, handleClose: i, withBadges: c = !1 } = this.props,
                                l = { accountSwitch: e, accountUsers: t, activeUser: r, clearDelegateUser: s, delegateAccountCount: a, delegateUser: o, isDelegateEnabled: this._isDelegateEnabled, onUserSwitch: i, onDelegateSwitch: i, withBadges: c };
                            return n.createElement(ae.a, l);
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandlerAccountsFetch: e, fetchAccounts: t } = this.props;
                            t().catch(e({ [R.ZP.AppInReadOnlyMode]: { customAction: W.Z } }));
                        }),
                        (this._handleMenuItemClick = (e, t) => () => {
                            const { analytics: r, handleClose: n } = this.props;
                            e && r.scribe({ element: e, action: "click" }), t?.(), n();
                        });
                }
                render() {
                    const { fetchStatus: e, shouldDisplayFetchRenderer: t } = this.props;
                    return (this._isDelegateEnabled = !0), n.createElement(i.Z, { style: ie.menuContainer }, this._renderTitle(), t ? n.createElement(T.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._renderUserAccounts }) : this._renderUserAccounts(), this._renderAdditionalMenuItems());
                }
            }
            oe.contextType = p.rC;
            const ie = l.default.create((e) => ({ menuContainer: { paddingVertical: e.spaces.space12 }, title: { paddingBottom: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                ce = (0, D.Z)(oe);
            var le = r(22132);
            const ue = o().j0a8da6e,
                de = o().c6f2bf00,
                pe = o().a58e0e51,
                me = o().j62f43a6,
                he = o().d4c52015,
                ge = { actionText: de, link: "/account/switch", scribeElement: "manage_accounts", testID: le.Z.manageAccounts },
                fe = re(({ clearDelegateUser: e, createLocalApiErrorHandlerAccountSwitch: t, createLocalApiErrorHandlerMultiListFetch: r, delegateAccountCount: a, delegateUser: o, fetchMultiAccountList: i, fetchStatus: c, hasMultiAccountBadges: l, isExpanded: u, loggedInUser: d, multiAccountUsers: p, style: m, switchAccount: h, withUpdatedAccountSwitcher: g }) => {
                    const f = (0, D.z)();
                    (0, N.ip)();
                    const [w, C] = (0, s.KO)(N.lA),
                        b = n.useCallback(() => {
                            const e = p.length > 1,
                                t = [];
                            return p.length >= 5 || o || t.push({ actionText: ue, link: "/i/flow/login", scribeElement: "add_existing_account", testID: le.Z.addAccount }), e && t.push(ge), (a || w > 0) && t.push({ actionText: me, link: a || w > 0 ? "/i/delegate/delegations" : "/settings/delegate", scribeElement: "manage_accounts", testID: le.Z.manageAccounts, badge: { count: w, label: he } }), d && t.push({ actionText: pe({ screenName: d.screen_name }), link: "/logout", scribeElement: "log_out", testID: le.Z.logout }), t;
                        }, [a, o, d, p.length, w]),
                        E = n.useCallback(
                            ({ hasBadge: e, isProtected: r, userId: n }) => {
                                f.scribe({ component: r ? "switch_to_protected_account" : "switch_account", element: e ? "account_badged" : "account", action: "click" }), h({ user_id: n }).catch(t(M.y));
                            },
                            [f, t, h],
                        ),
                        _ = n.useCallback(() => {
                            const { hasMultiAccountCookie: e } = (0, x.s)();
                            return e;
                        }, []),
                        v = n.useCallback((t) => (C(), d ? (g ? n.createElement(K, { accountSwitch: E, accountUsers: p, activeUser: d, createLocalApiErrorHandlerAccountsFetch: r, fetchAccounts: i, fetchStatus: c, handleClose: t, manageAccountsMenuItem: ge, shouldDisplayFetchRenderer: _() }) : n.createElement(ce, { accountSwitch: E, accountUsers: p, activeUser: d, additionalMenuItems: b(), clearDelegateUser: e, createLocalApiErrorHandlerAccountsFetch: r, delegateAccountCount: a, delegateUser: o, fetchAccounts: i, fetchStatus: c, handleClose: t, shouldDisplayFetchRenderer: _(), withBadges: !0 })) : null), [e, r, a, o, i, c, b, _, C, d, E, p, g]);
                    return n.createElement(L, { analytics: f, currentUser: d, delegateUser: o, hasMultiAccountBadges: l, interactiveViewTestId: le.Z.accountSwitcher, isExpanded: u, renderMenuSheet: v, style: m });
                });
        },
        22132: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = { accountSwitcher: "SideNav_AccountSwitcher_Button", addAccount: "AccountSwitcher_AddAccount_Button", logout: "AccountSwitcher_Logout_Button", manageAccounts: "AccountSwitcher_ManageAccounts_Button" };
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => m });
            var n = r(202784),
                s = r(476984),
                a = r.n(s),
                o = r(143778),
                i = r(750410),
                c = r(682830);
            const l = "failed",
                u = "loaded",
                d = "loading",
                p = "none";
            class m extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === u,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: s, icon: a, loadingMessage: o, onRequestRetry: u, render: m, renderFailure: h, retryMessage: g, retryable: f } = this.props;
                    switch (s) {
                        case l:
                            return f ? n.createElement(i.Z, { icon: a, onRequestRetry: u, retryMessage: g }) : r ? n.createElement(c.m, { failureMessage: r }) : h();
                        case d:
                            return n.createElement(c.J, { "aria-label": e, color: t, loadingMessage: o });
                        case p:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: o.Z, retryable: !0 };
        },
        529509: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                s = r(325686),
                a = r(111677),
                o = r.n(a),
                i = r(815858),
                c = r(731708),
                l = r(642153),
                u = r(530732),
                d = r(392237);
            const p = o().a35a5b10,
                m = o().fc8cd112,
                h = (e) => n.createElement(c.ZP, null, e);
            class g extends n.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: r, textStyle: a, userScreenName: o, withFacepile: d } = this.props,
                        m = this._renderMessage();
                    return n.createElement(i.Z, { duration: "long", show: void 0 !== r, type: "fade" }, r ? n.createElement(u.Z, { "aria-label": p, interactiveStyles: null, link: o ? ((h = o), `/${h}/followers_you_follow`) : void 0 }, ({ isHovered: r, isPressed: i }) => n.createElement(s.Z, { style: f.content }, !e && d ? n.createElement(l.Z, { userAvatarUrls: t }) : null, n.createElement(c.ZP, { color: "gray700", size: "subtext2", style: [!e && f.message, (r || i) && !!o && f.underline, a] }, e && d ? n.createElement(l.Z, { style: f.inlineFacepile, userAvatarUrls: t }) : null, m))) : n.createElement(s.Z, { style: f.content }, n.createElement(c.ZP, { color: "gray700", size: "subtext2" }, m)));
                    var h;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : m;
                }
                _renderOneUsername(e) {
                    return n.createElement(o().I18NFormatMessage, { $i18n: "c9e6167d" }, h(e[0]));
                }
                _renderTwoUsernames(e) {
                    return n.createElement(o().I18NFormatMessage, { $i18n: "ha91d1eb" }, h(e[0]), h(e[1]));
                }
                _renderThreeUsernames(e) {
                    return n.createElement(o().I18NFormatMessage, { $i18n: "f1069f9b" }, h(e[0]), h(e[1]), h(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const r = t - 2;
                    return n.createElement(o().I18NFormatMessage, { $i18n: "e8404c1f" }, h(e[0]), h(e[1]), r);
                }
            }
            g.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const f = d.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        98538: (e, t, r) => {
            r.d(t, { Z: () => m });
            var n = r(202784),
                s = r(325686),
                a = r(731708),
                o = r(891198),
                i = r(280278),
                c = r(392237);
            const l = "subtext1",
                u = n.createContext({ onMedia: !1 });
            class d extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, o.Gb)(e) !== (0, o.wl)(e) ? { label: (0, o.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: r, onPress: s } = this.props;
                    return n.createElement(a.ZP, { color: r ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: s }, n.createElement(u.Provider, { value: { onMedia: r } }, e));
                }
            }
            (d.Group = (e) =>
                n.createElement(
                    s.Z,
                    { style: [p.row, e.style] },
                    n.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, r) => n.createElement(s.Z, { key: t, style: t < r.length - 1 && p.groupItemNonLast }, e)),
                )),
                (d.Label = ({ children: e, style: t }) => n.createElement(u.Consumer, null, ({ onMedia: r }) => n.createElement(a.ZP, { children: e, color: r ? "white" : "gray700", size: l, style: t }))),
                (d.Value = ({ animated: e, children: t, count: r, style: s, weight: o = "bold" }) => n.createElement(u.Consumer, null, ({ onMedia: c }) => (e ? n.createElement(i.ZP, { children: t, count: r, size: l, style: s, weight: o }) : n.createElement(a.ZP, { children: t, color: c ? "white" : "text", size: l, style: s, weight: o }))));
            const p = c.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                m = d;
        },
        266704: (e, t, r) => {
            r.d(t, { Z: () => E });
            var n = r(202784),
                s = r(325686),
                a = r(731708),
                o = r(235902),
                i = r(649846),
                c = r(529509),
                l = r(392237),
                u = r(823161),
                d = r(238406),
                p = r(366635),
                m = r(646797);
            const h = () => !1;
            class g extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: r, userScreenName: a } = this.props,
                                { followersYouKnow: o } = e;
                            if (o && t && r) {
                                const { avatarUrls: e, count: t, names: o } = r;
                                return t ? n.createElement(s.Z, { style: [f.marginTop12, f.minHeight] }, "number" == typeof t && n.createElement(c.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: o, userScreenName: a })) : null;
                            }
                        });
                }
                render() {
                    return n.createElement(o.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return n.createElement(s.Z, { style: f.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: r } = this.props,
                        { followButton: n } = t;
                    return n && r && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return n.createElement(s.Z, { style: f.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? n.createElement(s.Z, { style: f.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: r, promotedContent: a, userAvatarSize: i, userAvatarUri: c, userScreenName: l } = this.props,
                        { avatar: d } = e;
                    return n.createElement(s.Z, { style: f.row }, n.createElement(o.ZP.Provider, { value: { userAvatarLabel: h } }, n.createElement(u.default, { link: r, onClick: t, promotedContent: a, screenName: l, size: i, uri: d ? c : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: r } = this.props,
                        { label: a } = t;
                    return r ? n.createElement(n.Fragment, null, this._renderUserAvatar(), n.createElement(s.Z, { style: f.marginTop8 }, this._renderUserName(), a && this._renderHighlightedUserLabel())) : n.createElement(s.Z, { style: f.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: r, isUserVerified: s, onScreenNameClick: a, profileLink: o, promotedContent: i, userHighlightedLabel: c, userName: l, userScreenName: u, userTranslatorType: d, userVerifiedType: m, userWithFollowsYou: h, withNameWrap: g } = this.props,
                        { badges: f, followIndicator: w, fullName: C } = e;
                    return n.createElement(p.Z, { affiliateBadgeInfo: c, badgeContext: "account", isBlueVerified: f ? t : void 0, isProtected: f ? r : void 0, isVerified: f ? s : void 0, link: o, name: C ? l : u, nameSize: "headline2", onLinkClick: a, promotedContent: i, screenName: u, translatorType: f ? d : void 0, verifiedType: f ? m : void 0, withFollowsYou: w && h, withLink: !0, withNameWrap: g, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && n.createElement(i.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? n.createElement(s.Z, { style: f.marginTop4 }, n.createElement(a.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: r, userId: a, userWithheldDescription: o, userWithheldEntities: i } = this.props,
                        { description: c } = e;
                    return c && t && r && a ? n.createElement(s.Z, { style: [f.row, f.marginTop12] }, n.createElement(d.Z, { description: t, entities: r, userId: a, withheldDescription: o, withheldEntities: i })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: r, subscriptionsCount: a, userFollowersCount: o, userFriendsCount: i, userScreenName: c } = this.props,
                        { stats: l } = e;
                    return l ? n.createElement(s.Z, { style: [f.row, f.marginTop12] }, n.createElement(m.Z, { followersCount: o, friendsCount: i, onPress: r, screenName: c, subscriptionsCount: a, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            g.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const f = l.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var w = r(807896);
            var C = r(111677);
            const b = r.n(C)().ef633578;
            class E extends n.PureComponent {
                render() {
                    return n.createElement(g, this.props);
                }
            }
            (E.Promoted = (e) => {
                const { followButton: t, isUserProtected: r, isUserVerified: s, knownFollowers: a, onAvatarClick: o, onScreenNameClick: i, promotedContent: c, userDescription: l, userId: u, userName: d, userScreenName: p, ...m } = e,
                    h = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return n.createElement(g, (0, w.Z)({}, m, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: r, isUserStatsWithLink: h.isUserStatsWithLink, isUserVerified: s, knownFollowers: a, onAvatarClick: o, onScreenNameClick: i, promotedContent: c, userAvatarUri: h.profile_image_url_https, userDescription: l, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userId: u, userName: d, userScreenName: p, userWithFollowsYou: h.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (E.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: r }) {
                    const s = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return n.createElement(g, { errorMessage: b, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: s.protected, isUserStatsWithLink: s.isUserStatsWithLink, isUserVerified: s.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: s.profile_image_url_https, userDescription: s.description, userEntities: s.entities, userFollowersCount: s.followers_count, userFriendsCount: s.friends_count, userId: s.id_str, userName: r, userScreenName: r, userWithFollowsYou: s.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(202784),
                s = r(111677),
                a = r.n(s),
                o = r(891198),
                i = r(98538);
            class c extends n.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: r, screenName: s, style: c, subscribersCount: l, subscriptionsCount: u, withLink: d, withSubscribersCount: p, withSubscriptionsCount: m } = this.props,
                        h = `/${s}/verified_followers`;
                    return n.createElement(i.Z.Group, { style: c }, n.createElement(i.Z, { count: t, link: d ? `/${s}/following` : void 0, onPress: r }, n.createElement(a().I18NFormatMessage, { $i18n: "g3ed1dd5" }, n.createElement(i.Z.Value, null, a().e4f1e6e4({ formattedCount: (0, o.wl)(t) })), n.createElement(i.Z.Label, null, a().daf8a75f({ count: t })))), n.createElement(i.Z, { count: e, link: d ? h : void 0, onPress: r }, n.createElement(a().I18NFormatMessage, { $i18n: "i06724fb" }, n.createElement(i.Z.Value, null, a().ef1f4fc6({ formattedCount: (0, o.wl)(e) })), n.createElement(i.Z.Label, null, a().ad9b5988({ count: e })))), p && void 0 !== l && n.createElement(i.Z, { count: l, link: d ? `/${s}/creator-subscriptions/subscribers` : void 0, onPress: r }, n.createElement(a().I18NFormatMessage, { $i18n: "eb0084f3" }, n.createElement(i.Z.Value, null, a().a9980948({ formattedCount: (0, o.wl)(l) })), n.createElement(i.Z.Label, null, a().ce44a35c({ count: l })))), m && u && n.createElement(i.Z, { count: u, link: d ? `/${s}/creator-subscriptions/subscriptions` : void 0, onPress: r }, n.createElement(a().I18NFormatMessage, { $i18n: "fc1b8f67" }, n.createElement(i.Z.Value, null, a().id949f68({ formattedCount: (0, o.wl)(u) })), n.createElement(i.Z.Label, null, a().hb608cfc({ count: u })))));
                }
            }
            c.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.SideNav~loader.SideNavRedesign~bundle.JobSearch.ae06098a.js.map
