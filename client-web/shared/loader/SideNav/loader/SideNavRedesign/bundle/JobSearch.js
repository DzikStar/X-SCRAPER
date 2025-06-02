"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.SideNav~loader.SideNavRedesign~bundle.JobSearch"],
    {
        229412: (e, t, a) => {
            a.d(t, { a: () => z });
            a(136728);
            var n = a(202784),
                c = a(325686),
                r = a(530732),
                s = a(310088),
                o = a(731708),
                i = a(673510),
                l = a(661810),
                u = a(392237),
                d = a(111677),
                p = a.n(d),
                h = a(297896),
                m = a(293723),
                g = a(58399),
                f = a(913973),
                C = a(516951),
                b = a(725516),
                E = a(125363),
                _ = a(806960);
            const A = p().h6beb5fb,
                w = p().d86bbf0f,
                y = u.default.create((e) => ({ notificationBadge: { paddingHorizontal: e.spaces.space4 } })),
                v = ({ notificationCount: e = 0 }) => (e > 0 ? n.createElement(s.Z, { count: e, style: e > 9 && y.notificationBadge, truncatedCountFormatter: A, unreadCountLabel: w }) : null);
            var I = a(110512),
                U = a(642153),
                k = a(899667),
                S = a(487552),
                Z = a(390387);
            const M = p().c61eea74,
                x = p().b7dc3885,
                D = p().d86bbf0f,
                B = p().h6beb5fb,
                L = ({ accountUsers: e, activeUser: t, handleMultiAccountSwitch: a, isUpdatedManageAccounts: r, renderUserDecoration: u, userTestId: d, withBadges: p }) => {
                    const h = (0, E.v9)(Z.BP),
                        m = !0,
                        [g, f] = n.useState(!1),
                        C = n.useMemo(() => e.filter((e) => e.user_id !== t?.id_str), [e, t]),
                        b = n.useMemo(() => C.reduce((e, t) => e + (t.badgeCount || 0), 0), [C]),
                        _ = n.useCallback(() => {
                            f(!g);
                        }, [g]),
                        A = n.useMemo(() => (h && h > 0 ? n.createElement(c.Z, { onClick: _, style: F.personalAccountsLabel }, n.createElement(o.ZP, { color: "gray700", weight: "bold" }, M), g ? n.createElement(k.default, { style: F.IconChevronUp }) : n.createElement(S.default, { style: F.IconChevronDown })) : null), [m, h, _, g]),
                        w = n.useMemo(
                            () =>
                                C.map((e) => {
                                    const t = e.badgeCount ?? 0;
                                    return n.createElement(n.Fragment, { key: e.user_id }, n.createElement(i.ZP, { affiliateBadgeInfo: e.highlighted_label, "aria-label": x({ screenName: e.screen_name }), avatarDecoration: r && n.createElement(v, { notificationCount: t }), avatarUri: e.avatar_image_url, badgeContext: "account", decoration: u({ badgeCount: t, withBadges: p, isActiveUser: !1 }), displayMode: "UserCompact", isBlueVerified: e.is_blue_verified, isProtected: e.is_protected, isVerified: e.is_verified, name: e.name, onCellClick: a({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }), screenName: e.screen_name, testID: d, userId: e.user_id, verifiedType: e.verified_type, withLink: !1 }), r && n.createElement(l.Z, { style: F.accountDivider }));
                                }),
                            [a, C, u, d, p, r],
                        ),
                        y = n.useMemo(() => n.createElement(c.Z, { style: F.facePileContainer }, n.createElement(U.Z, { userAvatarSize: "large", userAvatarUrls: C.map((e) => e.avatar_image_url) }), b > 0 ? n.createElement(s.Z, { count: b, standalone: !0, truncatedCountFormatter: B, unreadCountLabel: D }) : null), [C, b]);
                    return C.length > 0 ? n.createElement(n.Fragment, null, !r && A, r || g || void 0 === h || 0 === h ? w : y) : null;
                },
                F = u.default.create((e) => ({ personalAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                T = n.memo(L);
            var P = a(22132);
            const R = p().c61eea74,
                N = p().d86bbf0f,
                H = p().h6beb5fb;
            function z(e) {
                const { accountSwitch: t, accountUsers: a, activeUser: u, clearDelegateUser: d, delegateAccountCount: p, delegateUser: A, isDelegateEnabled: w, isUpdatedManageAccounts: y, onDelegateSwitch: U, onUserSwitch: k, userTestId: S, withBadges: Z = !1 } = e,
                    M = !!A,
                    x = a.some((e) => e.user_id === u.id_str) || (p && p > 0) || M,
                    D = n.useCallback(() => {
                        d && d();
                    }, [d]),
                    B = n.useCallback(
                        ({ hasBadge: e, isProtected: a, userId: n }) =>
                            () => {
                                t({ hasBadge: e, isProtected: a, userId: n }), k?.();
                            },
                        [t, k],
                    ),
                    L = (0, E.v9)(_.pm),
                    F = (0, E.v9)(_.QA),
                    z = (0, b.z)(),
                    O = n.useCallback(
                        ({ isActiveUser: e, isLoggedInUser: t }) => {
                            const a = [];
                            return (
                                t &&
                                    a.push(
                                        n.createElement(
                                            r.Z,
                                            {
                                                link: "/logout",
                                                onClick: () => {
                                                    z.scribe({ action: "click", element: "log_out" });
                                                },
                                                testID: P.Z.logout,
                                                withoutInteractiveStyles: !0,
                                            },
                                            n.createElement(h.default, { style: V.IconExiting }),
                                        ),
                                    ),
                                a.push(e ? n.createElement(m.default, { style: V.updatedIconCheckmarkCircleFill }) : n.createElement(g.default, { style: V.IconChevronRight })),
                                n.createElement(
                                    c.Z,
                                    { style: V.decorationsContainer },
                                    a.map((e, t) => n.createElement(n.Fragment, { key: t }, e)),
                                )
                            );
                        },
                        [z],
                    ),
                    W = n.useCallback(({ badgeCount: e, isActiveUser: t, withBadges: a }) => (t ? (w ? n.createElement(m.default, { style: [V.IconCheckmarkCircleFill, V.userDecoration] }) : n.createElement(f.default, { style: [V.iconCheckMark, V.userDecoration] })) : e && a ? n.createElement(s.Z, { count: e, standalone: !0, style: V.userDecoration, truncatedCountFormatter: H, unreadCountLabel: N }) : void 0), [w]),
                    j = n.useMemo(() => (y ? O : W), [y, W, O]),
                    q = n.useMemo(() => n.createElement(I.ZP, { activeUserId: u.id_str, delegateUser: A, isUpdatedManageAccounts: y, key: 0, onDelegateSwitch: U ?? C.Z, renderUserDecoration: j }), [u.id_str, A, y, U, j]),
                    G = n.useMemo(() => n.createElement(T, { accountUsers: a, activeUser: u, handleMultiAccountSwitch: B, isUpdatedManageAccounts: !!y, key: 1, renderUserDecoration: j, userTestId: S, withBadges: Z }), [a, u, B, y, j, S, Z]),
                    $ = [];
                return !y && w && $.push(q), $.push(G), y && w && $.push(q), n.createElement(n.Fragment, null, y && w && n.createElement(c.Z, { style: V.personalAccountsLabel }, n.createElement(o.ZP, { color: "gray700", weight: "bold" }, R)), x ? n.createElement(n.Fragment, null, n.createElement(i.ZP, { affiliateBadgeInfo: u.highlightedLabel, avatarDecoration: y && n.createElement(v, { notificationCount: L + F }), avatarUri: u.profile_image_url_https, badgeContext: "account", decoration: j({ withBadges: Z, isActiveUser: !A, isLoggedInUser: !0 }), displayMode: "UserCompact", isBlueVerified: u.is_blue_verified, isProtected: u.protected, isVerified: u.verified, name: u.name, onCellClick: M ? D : void 0, screenName: u.screen_name, testID: S, userId: u.id_str, verifiedType: u.verified_type, withLink: !1 }), y && n.createElement(l.Z, { style: V.accountDivider })) : null, $, !y && (x || p || a.length) ? n.createElement(l.Z, { spacing: "space12" }) : null);
            }
            const V = u.default.create((e) => ({ iconCheckMark: { color: e.colors.primary, flexShrink: 0 }, IconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, marginEnd: e.spaces.space8 }, updatedIconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconExiting: { color: e.colors.red500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconChevronRight: { color: "inherit", flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, decorationsContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, userDecoration: { marginStart: e.spaces.space12 }, personalAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 } }));
        },
        763881: (e, t, a) => {
            a.d(t, { Z: () => fe });
            a(136728);
            var n = a(202784),
                c = a(400752),
                r = a(111677),
                s = a.n(r),
                o = a(325686),
                i = a(58881),
                l = a(392237),
                u = a(157130),
                d = a(530732),
                p = a(443781),
                h = a(884161),
                m = a(521514),
                g = a(614983),
                f = a.n(g),
                C = a(618186),
                b = a(366635),
                E = a(310088),
                _ = a(149170),
                A = a(952793),
                w = a(125363),
                y = a(919022);
            const v = s().d86bbf0f,
                I = s().h6beb5fb;
            function U(e) {
                const { isExpanded: t } = e,
                    a = (0, A.hC)("rweb_sourcemap_migration"),
                    c = (0, w.v9)(y.ZP.selectViewerUser);
                f()(c, "user must be defined");
                const { highlightedLabel: r, is_blue_verified: s, name: i, profile_image_url_https: l, protected: u, screen_name: d, verified: p, verified_type: h } = c;
                return n.createElement(n.Fragment, null, n.createElement(o.Z, null, n.createElement(C.Z, { "aria-label": i, screenName: d, size: "xLarge", style: a && S.userAvatarRedesign, uri: l }), t ? null : k(e)), t ? n.createElement(n.Fragment, null, n.createElement(b.Z, { affiliateBadgeInfo: r, badgeContext: "account", isBlueVerified: s, isProtected: u, isVerified: p, name: i, screenName: d, style: S.userName, verifiedType: h, withStackedLayout: !0 }), n.createElement(o.Z, { style: S.iconContainer }, n.createElement(_.default, { style: S.icon }), t ? k(e) : null)) : null);
            }
            function k({ hasMultiAccountBadges: e, isExpanded: t }) {
                return e ? n.createElement(E.Z, { pip: !0, style: t && S.pip, truncatedCountFormatter: I, unreadCountLabel: v }) : null;
            }
            const S = l.default.create((e) => ({ icon: { color: e.colors.text }, iconContainer: { alignItems: "flex-end", flexGrow: 1 }, pip: { position: "absolute", end: `calc(-1 * ${e.spaces.space4})`, top: `calc(-1 * ${e.spaces.space4})` }, userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 }, userAvatarRedesign: { width: e.spaces.space36, height: e.spaces.space36 } })),
                Z = s().b8e1d524,
                M = s().gef27c4c;
            class x extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderEmptyState = () => {
                            const { renderEmptyState: e } = this.props;
                            return e ? n.createElement(o.Z, { style: D.emptyStateWrapper }, e()) : null;
                        }),
                        (this._handleAccountSwitcherClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ action: "click" });
                        });
                }
                render() {
                    const { "aria-label": e, currentUser: t, delegateUser: a, hasMultiAccountBadges: c, hoverLabel: r, interactiveViewTestId: s, isExpanded: o, renderEmptyState: p, renderMenuSheet: m, style: g } = this.props,
                        f = this.context.featureSwitches.isTrue("rweb_sourcemap_migration"),
                        C = [D.anchorContainer, f && D.anchorContainerRedesign, g];
                    return t || p ? n.createElement(u.Z, { contentStyle: D.menuContainer, enableEnterKeyToggle: !0, renderContent: m, withArrow: !0, withFixedPosition: !0 }, n.createElement(d.Z, { "aria-label": e || M, hoverLabel: o ? void 0 : { label: r || Z }, interactiveStyles: i.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text }), onClick: this._handleAccountSwitcherClick, role: "button", style: C, testID: s }, a ? n.createElement(h.p, { forceUserId: a.userId }, n.createElement(U, { hasMultiAccountBadges: c, isExpanded: o })) : t ? n.createElement(U, { hasMultiAccountBadges: c, isExpanded: o }) : this._renderEmptyState())) : null;
                }
            }
            x.contextType = p.rC;
            const D = l.default.create((e) => ({ anchorContainer: { alignItems: "center", borderRadius: e.borderRadii.infinite, display: "flex", flexDirection: "row", padding: e.spaces.space12 }, anchorContainerRedesign: { padding: 8 }, icon: { color: e.colors.text }, iconContainer: { alignItems: "flex-end", flexGrow: 1 }, pip: { position: "absolute", end: `calc(-1 * ${e.spaces.space4})`, top: `calc(-1 * ${e.spaces.space4})` }, userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 }, menuContainer: { width: m.Z.cardWidth.normal }, emptyStateWrapper: { height: e.spaces.space40, minWidth: e.spaces.space40, width: "100%" } }));
            var B = a(380155),
                L = a(755296),
                F = a(725516),
                T = a(193850),
                P = a(823161),
                R = a(879113),
                N = a(266704),
                H = a(550475),
                z = a(516951),
                V = a(615656);
            const O = ({ children: e }) => {
                const t = n.useRef(null);
                return (
                    n.useLayoutEffect(() => {
                        const e = t.current;
                        if (!e) return;
                        const a = e.getElementsByTagName("svg")[0],
                            { height: n, width: c, x: r, y: s } = a.getBBox(),
                            o = [r, s, c, n].join(" ");
                        a.setAttribute("viewBox", o);
                    }),
                    n.createElement("div", { ref: t }, e)
                );
            };
            var W = a(725405);
            const j = s().h6beb5fb,
                q = s().d86bbf0f,
                G = s().b7dc3885,
                $ = l.default.create((e) => ({ avatarListWithOverflowContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12, alignItems: "center", marginTop: e.spaces.space16, position: "absolute", end: e.spaces.space16, height: e.spaces.space64 }, notificationBadge: { paddingHorizontal: e.spaces.space4 }, IconMoreCircle: { width: e.spaces.space40, height: e.spaces.space40 }, IconMoreCircleContainer: { color: "inherit" } })),
                J = ({ accountSwitch: e, accountUsers: t, activeUser: a, createLocalApiErrorHandlerAccountsFetch: c, fetchAccounts: r, fetchStatus: s, handleClose: i, manageAccountsMenuItem: l, shouldDisplayFetchRenderer: u }) => {
                    const p = t.filter((e) => e.user_id !== a?.id_str),
                        h = p.slice(2).reduce((e, t) => e + (t.badgeCount ?? 0), 0),
                        m = (0, W.Z)(),
                        g = n.useCallback(() => {
                            m.scribe({ element: l.scribeElement, action: "click" }), i();
                        }, [m, i, l]),
                        f = n.useMemo(() => n.createElement(d.Z, { link: l.link, onClick: g, style: $.IconMoreCircleContainer, testID: l.testID, withoutInteractiveStyles: !0 }, n.createElement(O, null, n.createElement(H.default, { style: $.IconMoreCircle })), h > 0 && n.createElement(E.Z, { count: h, style: h > 9 && $.notificationBadge, truncatedCountFormatter: j, unreadCountLabel: q })), [g, l.link, l.testID, h]),
                        C = n.useCallback(
                            ({ hasBadge: t, isProtected: a, userId: n }) =>
                                () => {
                                    e({ hasBadge: t, isProtected: a, userId: n }), i?.();
                                },
                            [e, i],
                        ),
                        b = n.useMemo(
                            () => () =>
                                p.slice(0, 2).map((e) => {
                                    const t = e.badgeCount;
                                    return n.createElement(d.Z, { key: e.user_id, onClick: C({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }) }, n.createElement(P.default, { "aria-label": G({ screenName: e.screen_name }), decoration: t ? n.createElement(E.Z, { count: t, style: t > 9 && $.notificationBadge, truncatedCountFormatter: j, unreadCountLabel: q }) : void 0, key: e.user_id, screenName: e.screen_name, size: "xLarge", uri: e.avatar_image_url, userId: e.user_id, withLink: !1 }));
                                }),
                            [C, p],
                        ),
                        _ = n.useCallback(() => {
                            r().catch(c({ [V.ZP.AppInReadOnlyMode]: { customAction: z.Z } }));
                        }, [c, r]),
                        A = n.useMemo(() => n.createElement(n.Fragment, null, u ? n.createElement(R.Z, { fetchStatus: s, onRequestRetry: _, render: b }) : b()), [s, _, b, u]);
                    return n.createElement(o.Z, null, n.createElement(N.Z, { isAllowedToViewOptions: { avatar: !0, badges: !0, description: !0, followButton: !1, followersYouKnow: !1, followIndicator: !0, fullName: !0, label: !0, stats: !0, subscriptionsCount: !0 }, isLoggedIn: !0, isUserBlueVerified: a.is_blue_verified, isUserStatsWithLink: !0, isUserVerified: a.verified, userAvatarUri: a.profile_image_url_https, userFollowersCount: a.followers_count, userFriendsCount: a.friends_count, userName: a.name, userScreenName: a.screen_name }), n.createElement(o.Z, { style: $.avatarListWithOverflowContainer }, A, f));
                };
            var K = a(71620),
                Y = a(668214),
                Q = a(454319),
                X = a(956817),
                ee = a(390387),
                te = a(312771);
            const ae = (0, Y.Z)()
                .propsFromState(() => ({ delegateAccountCount: ee.BP, delegateUser: ee.sy, fetchStatus: Q.UD, loggedInUser: y.ZP.selectLoggedInUser, multiAccountUsers: Q.pc, hasMultiAccountBadges: Q.pA }))
                .propsFromActions(() => ({ clearDelegateUser: ee.YJ, createLocalApiErrorHandlerAccountSwitch: (0, K.zr)("ACCOUNT_SWITCHER_ACCOUNT_SWITCH"), createLocalApiErrorHandlerMultiListFetch: (0, K.zr)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"), fetchMultiAccountList: Q.qc, switchAccount: X.y }))
                .adjustStateProps(({ delegateAccountCount: e, delegateUser: t, fetchStatus: a, hasMultiAccountBadges: n, loggedInUser: c, multiAccountUsers: r }) => ({ delegateAccountCount: e, delegateUser: t, fetchStatus: a === te.ZP.NONE ? te.ZP.LOADING : a, hasMultiAccountBadges: !!c && n, loggedInUser: c, multiAccountUsers: r }))
                .withAnalytics({ page: "nav", section: "account_switcher" });
            var ne = a(143670),
                ce = a(731708),
                re = a(229412);
            class se extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAdditionalMenuItems = () => (this.props.additionalMenuItems || []).map((e) => n.createElement(ne.Z, { Icon: e.Icon, actionText: e.actionText, badge: e.badge, isSelected: e.isSelected, key: e.link, link: e.link, onClick: this._handleMenuItemClick(e.scribeElement, e.onClick), selectable: !0, testID: e.testID }))),
                        (this._renderTitle = () => {
                            const { title: e } = this.props;
                            return e ? n.createElement(ce.ZP, { size: "headline1", style: oe.title, weight: "bold" }, e) : null;
                        }),
                        (this._renderUserAccounts = () => {
                            const { accountSwitch: e, accountUsers: t, activeUser: a, clearDelegateUser: c, delegateAccountCount: r, delegateUser: s, handleClose: o, withBadges: i = !1 } = this.props,
                                l = { accountSwitch: e, accountUsers: t, activeUser: a, clearDelegateUser: c, delegateAccountCount: r, delegateUser: s, isDelegateEnabled: this._isDelegateEnabled, onUserSwitch: o, onDelegateSwitch: o, withBadges: i };
                            return n.createElement(re.a, l);
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandlerAccountsFetch: e, fetchAccounts: t } = this.props;
                            t().catch(e({ [V.ZP.AppInReadOnlyMode]: { customAction: z.Z } }));
                        }),
                        (this._handleMenuItemClick = (e, t) => () => {
                            const { analytics: a, handleClose: n } = this.props;
                            e && a.scribe({ element: e, action: "click" }), t?.(), n();
                        });
                }
                render() {
                    const { fetchStatus: e, shouldDisplayFetchRenderer: t } = this.props;
                    return (this._isDelegateEnabled = !0), n.createElement(o.Z, { style: oe.menuContainer }, this._renderTitle(), t ? n.createElement(R.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._renderUserAccounts }) : this._renderUserAccounts(), this._renderAdditionalMenuItems());
                }
            }
            se.contextType = p.rC;
            const oe = l.default.create((e) => ({ menuContainer: { paddingVertical: e.spaces.space12 }, title: { paddingBottom: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                ie = (0, F.Z)(se);
            var le = a(22132);
            const ue = s().j0a8da6e,
                de = s().c6f2bf00,
                pe = s().a58e0e51,
                he = s().j62f43a6,
                me = s().d4c52015,
                ge = { actionText: de, link: "/account/switch", scribeElement: "manage_accounts", testID: le.Z.manageAccounts },
                fe = ae(({ clearDelegateUser: e, createLocalApiErrorHandlerAccountSwitch: t, createLocalApiErrorHandlerMultiListFetch: a, delegateAccountCount: r, delegateUser: s, fetchMultiAccountList: o, fetchStatus: i, hasMultiAccountBadges: l, isExpanded: u, loggedInUser: d, multiAccountUsers: p, style: h, switchAccount: m, withUpdatedAccountSwitcher: g }) => {
                    const f = (0, F.z)();
                    (0, T.ip)();
                    const [C, b] = (0, c.KO)(T.lA),
                        E = n.useCallback(() => {
                            const e = p.length > 1,
                                t = [];
                            return p.length >= 5 || s || t.push({ actionText: ue, link: "/i/flow/login", scribeElement: "add_existing_account", testID: le.Z.addAccount }), e && t.push(ge), (r || C > 0) && t.push({ actionText: he, link: r || C > 0 ? "/i/delegate/delegations" : "/settings/delegate", scribeElement: "manage_accounts", testID: le.Z.manageAccounts, badge: { count: C, label: me } }), d && t.push({ actionText: pe({ screenName: d.screen_name }), link: "/logout", scribeElement: "log_out", testID: le.Z.logout }), t;
                        }, [r, s, d, p.length, C]),
                        _ = n.useCallback(
                            ({ hasBadge: e, isProtected: a, userId: n }) => {
                                f.scribe({ component: a ? "switch_to_protected_account" : "switch_account", element: e ? "account_badged" : "account", action: "click" }), m({ user_id: n }).catch(t(B.y));
                            },
                            [f, t, m],
                        ),
                        A = n.useCallback(() => {
                            const { hasMultiAccountCookie: e } = (0, L.s)();
                            return e;
                        }, []),
                        w = n.useCallback((t) => (b(), d ? (g ? n.createElement(J, { accountSwitch: _, accountUsers: p, activeUser: d, createLocalApiErrorHandlerAccountsFetch: a, fetchAccounts: o, fetchStatus: i, handleClose: t, manageAccountsMenuItem: ge, shouldDisplayFetchRenderer: A() }) : n.createElement(ie, { accountSwitch: _, accountUsers: p, activeUser: d, additionalMenuItems: E(), clearDelegateUser: e, createLocalApiErrorHandlerAccountsFetch: a, delegateAccountCount: r, delegateUser: s, fetchAccounts: o, fetchStatus: i, handleClose: t, shouldDisplayFetchRenderer: A(), withBadges: !0 })) : null), [e, a, r, s, o, i, E, A, b, d, _, p, g]);
                    return n.createElement(x, { analytics: f, currentUser: d, delegateUser: s, hasMultiAccountBadges: l, interactiveViewTestId: le.Z.accountSwitcher, isExpanded: u, renderMenuSheet: w, style: h });
                });
        },
        22132: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { accountSwitcher: "SideNav_AccountSwitcher_Button", addAccount: "AccountSwitcher_AddAccount_Button", logout: "AccountSwitcher_Logout_Button", manageAccounts: "AccountSwitcher_ManageAccounts_Button" };
        },
        879113: (e, t, a) => {
            a.d(t, { Z: () => h });
            var n = a(202784),
                c = a(476984),
                r = a.n(c),
                s = a(143778),
                o = a(750410),
                i = a(682830);
            const l = "failed",
                u = "loaded",
                d = "loading",
                p = "none";
            class h extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === u,
                        a = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !a) || !r()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: a, fetchStatus: c, icon: r, loadingMessage: s, onRequestRetry: u, render: h, renderFailure: m, retryMessage: g, retryable: f } = this.props;
                    switch (c) {
                        case l:
                            return f ? n.createElement(o.Z, { icon: r, onRequestRetry: u, retryMessage: g }) : a ? n.createElement(i.m, { failureMessage: a }) : m();
                        case d:
                            return n.createElement(i.J, { "aria-label": e, color: t, loadingMessage: s });
                        case p:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.SideNav~loader.SideNavRedesign~bundle.JobSearch.4ddcec8a.js.map
