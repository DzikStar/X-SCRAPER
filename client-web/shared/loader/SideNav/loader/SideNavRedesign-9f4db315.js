"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.SideNav~loader.SideNavRedesign-9f4db315"],
    {
        904940: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = ({ apiClient: e, featureSwitches: t }) => ({ metadataCreate: (t, a) => e.post("media/metadata/create", t, {}, { ...a, "content-type": "application/json" }), attachSubtitles: (t, a) => e.post("media/subtitles/create", { media_id: t.videoMediaUploadId, media_category: t.videoMediaCategory, subtitle_info: { subtitles: [{ media_id: t.subtitlesMediaUploadId, language_code: t.subtitlesLang, display_name: t.subtitlesDisplayName }] } }, {}, { ...a, "content-type": "application/json" }) });
        },
        708482: (e, t, a) => {
            a.d(t, { s: () => s });
            var n = a(10622),
                c = a.n(n);
            function s(e, t, a, n) {
                return c()(e, t, a, n ? { networkCacheConfig: { metadata: { isFatalError: n } } } : void 0).toPromise();
            }
        },
        866481: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { tweet: "SideNav_NewTweet_Button" };
        },
        229412: (e, t, a) => {
            a.d(t, { a: () => z });
            a(136728);
            var n = a(202784),
                c = a(325686),
                s = a(530732),
                r = a(310088),
                i = a(731708),
                o = a(673510),
                l = a(661810),
                d = a(392237),
                u = a(111677),
                p = a.n(u),
                h = a(297896),
                m = a(293723),
                g = a(58399),
                f = a(913973),
                b = a(516951),
                C = a(725516),
                _ = a(125363),
                E = a(806960);
            const w = p().h6beb5fb,
                y = p().d86bbf0f,
                A = d.default.create((e) => ({ notificationBadge: { paddingHorizontal: e.spaces.space4 } })),
                v = ({ notificationCount: e = 0 }) => (e > 0 ? n.createElement(r.Z, { count: e, style: e > 9 && A.notificationBadge, truncatedCountFormatter: w, unreadCountLabel: y }) : null);
            var I = a(110512),
                U = a(642153),
                k = a(899667),
                S = a(487552),
                Z = a(390387);
            const x = p().c61eea74,
                D = p().b7dc3885,
                M = p().d86bbf0f,
                B = p().h6beb5fb,
                L = ({ accountUsers: e, activeUser: t, handleMultiAccountSwitch: a, isUpdatedManageAccounts: s, renderUserDecoration: d, userTestId: u, withBadges: p }) => {
                    const h = (0, _.v9)(Z.BP),
                        m = !0,
                        [g, f] = n.useState(!1),
                        b = n.useMemo(() => e.filter((e) => e.user_id !== t?.id_str), [e, t]),
                        C = n.useMemo(() => b.reduce((e, t) => e + (t.badgeCount || 0), 0), [b]),
                        E = n.useCallback(() => {
                            f(!g);
                        }, [g]),
                        w = n.useMemo(() => (h && h > 0 ? n.createElement(c.Z, { onClick: E, style: F.personalAccountsLabel }, n.createElement(i.ZP, { color: "gray700", weight: "bold" }, x), g ? n.createElement(k.default, { style: F.IconChevronUp }) : n.createElement(S.default, { style: F.IconChevronDown })) : null), [m, h, E, g]),
                        y = n.useMemo(
                            () =>
                                b.map((e) => {
                                    const t = e.badgeCount ?? 0;
                                    return n.createElement(n.Fragment, { key: e.user_id }, n.createElement(o.ZP, { affiliateBadgeInfo: e.highlighted_label, "aria-label": D({ screenName: e.screen_name }), avatarDecoration: s && n.createElement(v, { notificationCount: t }), avatarUri: e.avatar_image_url, badgeContext: "account", decoration: d({ badgeCount: t, withBadges: p, isActiveUser: !1 }), displayMode: "UserCompact", isBlueVerified: e.is_blue_verified, isProtected: e.is_protected, isVerified: e.is_verified, name: e.name, onCellClick: a({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }), screenName: e.screen_name, testID: u, userId: e.user_id, verifiedType: e.verified_type, withLink: !1 }), s && n.createElement(l.Z, { style: F.accountDivider }));
                                }),
                            [a, b, d, u, p, s],
                        ),
                        A = n.useMemo(() => n.createElement(c.Z, { style: F.facePileContainer }, n.createElement(U.Z, { userAvatarSize: "large", userAvatarUrls: b.map((e) => e.avatar_image_url) }), C > 0 ? n.createElement(r.Z, { count: C, standalone: !0, truncatedCountFormatter: B, unreadCountLabel: M }) : null), [b, C]);
                    return b.length > 0 ? n.createElement(n.Fragment, null, !s && w, s || g || void 0 === h || 0 === h ? y : A) : null;
                },
                F = d.default.create((e) => ({ personalAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                P = n.memo(L);
            var T = a(22132);
            const N = p().c61eea74,
                R = p().d86bbf0f,
                H = p().h6beb5fb;
            function z(e) {
                const { accountSwitch: t, accountUsers: a, activeUser: d, clearDelegateUser: u, delegateAccountCount: p, delegateUser: w, isDelegateEnabled: y, isUpdatedManageAccounts: A, onDelegateSwitch: U, onUserSwitch: k, userTestId: S, withBadges: Z = !1 } = e,
                    x = !!w,
                    D = a.some((e) => e.user_id === d.id_str) || (p && p > 0) || x,
                    M = n.useCallback(() => {
                        u && u();
                    }, [u]),
                    B = n.useCallback(
                        ({ hasBadge: e, isProtected: a, userId: n }) =>
                            () => {
                                t({ hasBadge: e, isProtected: a, userId: n }), k?.();
                            },
                        [t, k],
                    ),
                    L = (0, _.v9)(E.pm),
                    F = (0, _.v9)(E.QA),
                    z = (0, C.z)(),
                    O = n.useCallback(
                        ({ isActiveUser: e, isLoggedInUser: t }) => {
                            const a = [];
                            return (
                                t &&
                                    a.push(
                                        n.createElement(
                                            s.Z,
                                            {
                                                link: "/logout",
                                                onClick: () => {
                                                    z.scribe({ action: "click", element: "log_out" });
                                                },
                                                testID: T.Z.logout,
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
                    W = n.useCallback(({ badgeCount: e, isActiveUser: t, withBadges: a }) => (t ? (y ? n.createElement(m.default, { style: [V.IconCheckmarkCircleFill, V.userDecoration] }) : n.createElement(f.default, { style: [V.iconCheckMark, V.userDecoration] })) : e && a ? n.createElement(r.Z, { count: e, standalone: !0, style: V.userDecoration, truncatedCountFormatter: H, unreadCountLabel: R }) : void 0), [y]),
                    j = n.useMemo(() => (A ? O : W), [A, W, O]),
                    G = n.useMemo(() => n.createElement(I.ZP, { activeUserId: d.id_str, delegateUser: w, isUpdatedManageAccounts: A, key: 0, onDelegateSwitch: U ?? b.Z, renderUserDecoration: j }), [d.id_str, w, A, U, j]),
                    $ = n.useMemo(() => n.createElement(P, { accountUsers: a, activeUser: d, handleMultiAccountSwitch: B, isUpdatedManageAccounts: !!A, key: 1, renderUserDecoration: j, userTestId: S, withBadges: Z }), [a, d, B, A, j, S, Z]),
                    q = [];
                return !A && y && q.push(G), q.push($), A && y && q.push(G), n.createElement(n.Fragment, null, A && y && n.createElement(c.Z, { style: V.personalAccountsLabel }, n.createElement(i.ZP, { color: "gray700", weight: "bold" }, N)), D ? n.createElement(n.Fragment, null, n.createElement(o.ZP, { affiliateBadgeInfo: d.highlightedLabel, avatarDecoration: A && n.createElement(v, { notificationCount: L + F }), avatarUri: d.profile_image_url_https, badgeContext: "account", decoration: j({ withBadges: Z, isActiveUser: !w, isLoggedInUser: !0 }), displayMode: "UserCompact", isBlueVerified: d.is_blue_verified, isProtected: d.protected, isVerified: d.verified, name: d.name, onCellClick: x ? M : void 0, screenName: d.screen_name, testID: S, userId: d.id_str, verifiedType: d.verified_type, withLink: !1 }), A && n.createElement(l.Z, { style: V.accountDivider })) : null, q, !A && (D || p || a.length) ? n.createElement(l.Z, { spacing: "space12" }) : null);
            }
            const V = d.default.create((e) => ({ iconCheckMark: { color: e.colors.primary, flexShrink: 0 }, IconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, marginEnd: e.spaces.space8 }, updatedIconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconExiting: { color: e.colors.red500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconChevronRight: { color: "inherit", flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, decorationsContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, userDecoration: { marginStart: e.spaces.space12 }, personalAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 } }));
        },
        763881: (e, t, a) => {
            a.d(t, { Z: () => fe });
            a(136728);
            var n = a(202784),
                c = a(400752),
                s = a(111677),
                r = a.n(s),
                i = a(325686),
                o = a(58881),
                l = a(392237),
                d = a(157130),
                u = a(530732),
                p = a(443781),
                h = a(884161),
                m = a(521514),
                g = a(614983),
                f = a.n(g),
                b = a(618186),
                C = a(366635),
                _ = a(310088),
                E = a(149170),
                w = a(952793),
                y = a(125363),
                A = a(919022);
            const v = r().d86bbf0f,
                I = r().h6beb5fb;
            function U(e) {
                const { isExpanded: t } = e,
                    a = (0, w.hC)("rweb_sourcemap_migration"),
                    c = (0, y.v9)(A.ZP.selectViewerUser);
                f()(c, "user must be defined");
                const { highlightedLabel: s, is_blue_verified: r, name: o, profile_image_url_https: l, protected: d, screen_name: u, verified: p, verified_type: h } = c;
                return n.createElement(n.Fragment, null, n.createElement(i.Z, null, n.createElement(b.Z, { "aria-label": o, screenName: u, size: "xLarge", style: a && S.userAvatarRedesign, uri: l }), t ? null : k(e)), t ? n.createElement(n.Fragment, null, n.createElement(C.Z, { affiliateBadgeInfo: s, badgeContext: "account", isBlueVerified: r, isProtected: d, isVerified: p, name: o, screenName: u, style: S.userName, verifiedType: h, withStackedLayout: !0 }), n.createElement(i.Z, { style: S.iconContainer }, n.createElement(E.default, { style: S.icon }), t ? k(e) : null)) : null);
            }
            function k({ hasMultiAccountBadges: e, isExpanded: t }) {
                return e ? n.createElement(_.Z, { pip: !0, style: t && S.pip, truncatedCountFormatter: I, unreadCountLabel: v }) : null;
            }
            const S = l.default.create((e) => ({ icon: { color: e.colors.text }, iconContainer: { alignItems: "flex-end", flexGrow: 1 }, pip: { position: "absolute", end: `calc(-1 * ${e.spaces.space4})`, top: `calc(-1 * ${e.spaces.space4})` }, userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 }, userAvatarRedesign: { width: e.spaces.space36, height: e.spaces.space36 } })),
                Z = r().b8e1d524,
                x = r().gef27c4c;
            class D extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderEmptyState = () => {
                            const { renderEmptyState: e } = this.props;
                            return e ? n.createElement(i.Z, { style: M.emptyStateWrapper }, e()) : null;
                        }),
                        (this._handleAccountSwitcherClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ action: "click" });
                        });
                }
                render() {
                    const { "aria-label": e, currentUser: t, delegateUser: a, hasMultiAccountBadges: c, hoverLabel: s, interactiveViewTestId: r, isExpanded: i, renderEmptyState: p, renderMenuSheet: m, style: g } = this.props,
                        f = this.context.featureSwitches.isTrue("rweb_sourcemap_migration"),
                        b = [M.anchorContainer, f && M.anchorContainerRedesign, g];
                    return t || p ? n.createElement(d.Z, { contentStyle: M.menuContainer, enableEnterKeyToggle: !0, renderContent: m, withArrow: !0, withFixedPosition: !0 }, n.createElement(u.Z, { "aria-label": e || x, hoverLabel: i ? void 0 : { label: s || Z }, interactiveStyles: o.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text }), onClick: this._handleAccountSwitcherClick, role: "button", style: b, testID: r }, a ? n.createElement(h.p, { forceUserId: a.userId }, n.createElement(U, { hasMultiAccountBadges: c, isExpanded: i })) : t ? n.createElement(U, { hasMultiAccountBadges: c, isExpanded: i }) : this._renderEmptyState())) : null;
                }
            }
            D.contextType = p.rC;
            const M = l.default.create((e) => ({ anchorContainer: { alignItems: "center", borderRadius: e.borderRadii.infinite, display: "flex", flexDirection: "row", padding: e.spaces.space12 }, anchorContainerRedesign: { padding: 8 }, icon: { color: e.colors.text }, iconContainer: { alignItems: "flex-end", flexGrow: 1 }, pip: { position: "absolute", end: `calc(-1 * ${e.spaces.space4})`, top: `calc(-1 * ${e.spaces.space4})` }, userName: { flexGrow: 1, marginHorizontal: e.spaces.space12 }, menuContainer: { width: m.Z.cardWidth.normal }, emptyStateWrapper: { height: e.spaces.space40, minWidth: e.spaces.space40, width: "100%" } }));
            var B = a(380155),
                L = a(755296),
                F = a(725516),
                P = a(193850),
                T = a(823161),
                N = a(879113),
                R = a(266704),
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
                            { height: n, width: c, x: s, y: r } = a.getBBox(),
                            i = [s, r, c, n].join(" ");
                        a.setAttribute("viewBox", i);
                    }),
                    n.createElement("div", { ref: t }, e)
                );
            };
            var W = a(725405);
            const j = r().h6beb5fb,
                G = r().d86bbf0f,
                $ = r().b7dc3885,
                q = l.default.create((e) => ({ avatarListWithOverflowContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12, alignItems: "center", marginTop: e.spaces.space16, position: "absolute", end: e.spaces.space16, height: e.spaces.space64 }, notificationBadge: { paddingHorizontal: e.spaces.space4 }, IconMoreCircle: { width: e.spaces.space40, height: e.spaces.space40 }, IconMoreCircleContainer: { color: "inherit" } })),
                K = ({ accountSwitch: e, accountUsers: t, activeUser: a, createLocalApiErrorHandlerAccountsFetch: c, fetchAccounts: s, fetchStatus: r, handleClose: o, manageAccountsMenuItem: l, shouldDisplayFetchRenderer: d }) => {
                    const p = t.filter((e) => e.user_id !== a?.id_str),
                        h = p.slice(2).reduce((e, t) => e + (t.badgeCount ?? 0), 0),
                        m = (0, W.Z)(),
                        g = n.useCallback(() => {
                            m.scribe({ element: l.scribeElement, action: "click" }), o();
                        }, [m, o, l]),
                        f = n.useMemo(() => n.createElement(u.Z, { link: l.link, onClick: g, style: q.IconMoreCircleContainer, testID: l.testID, withoutInteractiveStyles: !0 }, n.createElement(O, null, n.createElement(H.default, { style: q.IconMoreCircle })), h > 0 && n.createElement(_.Z, { count: h, style: h > 9 && q.notificationBadge, truncatedCountFormatter: j, unreadCountLabel: G })), [g, l.link, l.testID, h]),
                        b = n.useCallback(
                            ({ hasBadge: t, isProtected: a, userId: n }) =>
                                () => {
                                    e({ hasBadge: t, isProtected: a, userId: n }), o?.();
                                },
                            [e, o],
                        ),
                        C = n.useMemo(
                            () => () =>
                                p.slice(0, 2).map((e) => {
                                    const t = e.badgeCount;
                                    return n.createElement(u.Z, { key: e.user_id, onClick: b({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }) }, n.createElement(T.default, { "aria-label": $({ screenName: e.screen_name }), decoration: t ? n.createElement(_.Z, { count: t, style: t > 9 && q.notificationBadge, truncatedCountFormatter: j, unreadCountLabel: G }) : void 0, key: e.user_id, screenName: e.screen_name, size: "xLarge", uri: e.avatar_image_url, userId: e.user_id, withLink: !1 }));
                                }),
                            [b, p],
                        ),
                        E = n.useCallback(() => {
                            s().catch(c({ [V.ZP.AppInReadOnlyMode]: { customAction: z.Z } }));
                        }, [c, s]),
                        w = n.useMemo(() => n.createElement(n.Fragment, null, d ? n.createElement(N.Z, { fetchStatus: r, onRequestRetry: E, render: C }) : C()), [r, E, C, d]);
                    return n.createElement(i.Z, null, n.createElement(R.Z, { isAllowedToViewOptions: { avatar: !0, badges: !0, description: !0, followButton: !1, followersYouKnow: !1, followIndicator: !0, fullName: !0, label: !0, stats: !0, subscriptionsCount: !0 }, isLoggedIn: !0, isUserBlueVerified: a.is_blue_verified, isUserStatsWithLink: !0, isUserVerified: a.verified, userAvatarUri: a.profile_image_url_https, userFollowersCount: a.followers_count, userFriendsCount: a.friends_count, userName: a.name, userScreenName: a.screen_name }), n.createElement(i.Z, { style: q.avatarListWithOverflowContainer }, w, f));
                };
            var Y = a(71620),
                J = a(668214),
                Q = a(454319),
                X = a(956817),
                ee = a(390387),
                te = a(312771);
            const ae = (0, J.Z)()
                .propsFromState(() => ({ delegateAccountCount: ee.BP, delegateUser: ee.sy, fetchStatus: Q.UD, loggedInUser: A.ZP.selectLoggedInUser, multiAccountUsers: Q.pc, hasMultiAccountBadges: Q.pA }))
                .propsFromActions(() => ({ clearDelegateUser: ee.YJ, createLocalApiErrorHandlerAccountSwitch: (0, Y.zr)("ACCOUNT_SWITCHER_ACCOUNT_SWITCH"), createLocalApiErrorHandlerMultiListFetch: (0, Y.zr)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"), fetchMultiAccountList: Q.qc, switchAccount: X.y }))
                .adjustStateProps(({ delegateAccountCount: e, delegateUser: t, fetchStatus: a, hasMultiAccountBadges: n, loggedInUser: c, multiAccountUsers: s }) => ({ delegateAccountCount: e, delegateUser: t, fetchStatus: a === te.ZP.NONE ? te.ZP.LOADING : a, hasMultiAccountBadges: !!c && n, loggedInUser: c, multiAccountUsers: s }))
                .withAnalytics({ page: "nav", section: "account_switcher" });
            var ne = a(143670),
                ce = a(731708),
                se = a(229412);
            class re extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAdditionalMenuItems = () => (this.props.additionalMenuItems || []).map((e) => n.createElement(ne.Z, { Icon: e.Icon, actionText: e.actionText, badge: e.badge, isSelected: e.isSelected, key: e.link, link: e.link, onClick: this._handleMenuItemClick(e.scribeElement, e.onClick), selectable: !0, testID: e.testID }))),
                        (this._renderTitle = () => {
                            const { title: e } = this.props;
                            return e ? n.createElement(ce.ZP, { size: "headline1", style: ie.title, weight: "bold" }, e) : null;
                        }),
                        (this._renderUserAccounts = () => {
                            const { accountSwitch: e, accountUsers: t, activeUser: a, clearDelegateUser: c, delegateAccountCount: s, delegateUser: r, handleClose: i, withBadges: o = !1 } = this.props,
                                l = { accountSwitch: e, accountUsers: t, activeUser: a, clearDelegateUser: c, delegateAccountCount: s, delegateUser: r, isDelegateEnabled: this._isDelegateEnabled, onUserSwitch: i, onDelegateSwitch: i, withBadges: o };
                            return n.createElement(se.a, l);
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
                    return (this._isDelegateEnabled = !0), n.createElement(i.Z, { style: ie.menuContainer }, this._renderTitle(), t ? n.createElement(N.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._renderUserAccounts }) : this._renderUserAccounts(), this._renderAdditionalMenuItems());
                }
            }
            re.contextType = p.rC;
            const ie = l.default.create((e) => ({ menuContainer: { paddingVertical: e.spaces.space12 }, title: { paddingBottom: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                oe = (0, F.Z)(re);
            var le = a(22132);
            const de = r().j0a8da6e,
                ue = r().c6f2bf00,
                pe = r().a58e0e51,
                he = r().j62f43a6,
                me = r().d4c52015,
                ge = { actionText: ue, link: "/account/switch", scribeElement: "manage_accounts", testID: le.Z.manageAccounts },
                fe = ae(({ clearDelegateUser: e, createLocalApiErrorHandlerAccountSwitch: t, createLocalApiErrorHandlerMultiListFetch: a, delegateAccountCount: s, delegateUser: r, fetchMultiAccountList: i, fetchStatus: o, hasMultiAccountBadges: l, isExpanded: d, loggedInUser: u, multiAccountUsers: p, style: h, switchAccount: m, withUpdatedAccountSwitcher: g }) => {
                    const f = (0, F.z)();
                    (0, P.ip)();
                    const [b, C] = (0, c.KO)(P.lA),
                        _ = n.useCallback(() => {
                            const e = p.length > 1,
                                t = [];
                            return p.length >= 5 || r || t.push({ actionText: de, link: "/i/flow/login", scribeElement: "add_existing_account", testID: le.Z.addAccount }), e && t.push(ge), (s || b > 0) && t.push({ actionText: he, link: s || b > 0 ? "/i/delegate/delegations" : "/settings/delegate", scribeElement: "manage_accounts", testID: le.Z.manageAccounts, badge: { count: b, label: me } }), u && t.push({ actionText: pe({ screenName: u.screen_name }), link: "/logout", scribeElement: "log_out", testID: le.Z.logout }), t;
                        }, [s, r, u, p.length, b]),
                        E = n.useCallback(
                            ({ hasBadge: e, isProtected: a, userId: n }) => {
                                f.scribe({ component: a ? "switch_to_protected_account" : "switch_account", element: e ? "account_badged" : "account", action: "click" }), m({ user_id: n }).catch(t(B.y));
                            },
                            [f, t, m],
                        ),
                        w = n.useCallback(() => {
                            const { hasMultiAccountCookie: e } = (0, L.s)();
                            return e;
                        }, []),
                        y = n.useCallback((t) => (C(), u ? (g ? n.createElement(K, { accountSwitch: E, accountUsers: p, activeUser: u, createLocalApiErrorHandlerAccountsFetch: a, fetchAccounts: i, fetchStatus: o, handleClose: t, manageAccountsMenuItem: ge, shouldDisplayFetchRenderer: w() }) : n.createElement(oe, { accountSwitch: E, accountUsers: p, activeUser: u, additionalMenuItems: _(), clearDelegateUser: e, createLocalApiErrorHandlerAccountsFetch: a, delegateAccountCount: s, delegateUser: r, fetchAccounts: i, fetchStatus: o, handleClose: t, shouldDisplayFetchRenderer: w(), withBadges: !0 })) : null), [e, a, s, r, i, o, _, w, C, u, E, p, g]);
                    return n.createElement(D, { analytics: f, currentUser: u, delegateUser: r, hasMultiAccountBadges: l, interactiveViewTestId: le.Z.accountSwitcher, isExpanded: d, renderMenuSheet: y, style: h });
                });
        },
        22132: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { accountSwitcher: "SideNav_AccountSwitcher_Button", addAccount: "AccountSwitcher_AddAccount_Button", logout: "AccountSwitcher_Logout_Button", manageAccounts: "AccountSwitcher_ManageAccounts_Button" };
        },
        464097: (e, t, a) => {
            a.d(t, { Z: () => C });
            var n = a(202784),
                c = a(111677),
                s = a.n(c),
                r = a(186444),
                i = a(379327),
                o = a(154003),
                l = a(815858),
                d = a(731708);
            const u = ({ disabled: e, icon: t, isExpanded: a, label: c, link: s, onPress: r, size: i = "xLarge", testID: u }) => n.createElement(o.ZP, { "aria-label": c, disabled: e, hoverLabel: { label: c }, icon: a ? void 0 : t, link: s, onPress: r, size: i, testID: u, type: "primaryFilled" }, a ? n.createElement(l.Z, { animateMount: !0, duration: "long", show: !0, type: "fade" }, n.createElement(d.ZP, null, c)) : null);
            var p = a(725516),
                h = a(443781);
            const m = s().ee69d769({ verb: "" });
            class g extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe({ component: "new_tweet_button", action: "click" });
                        });
                }
                render() {
                    const { composeOptions: e, isExpanded: t, testID: a } = this.props,
                        c = this.context.featureSwitches.isTrue("rweb_sourcemap_migration");
                    return n.createElement(u, { icon: c ? b : f, isExpanded: t, label: m, link: { pathname: "/compose/post", state: e }, onPress: this._handlePress, size: c ? "medium" : void 0, testID: a });
                }
            }
            g.contextType = h.rC;
            const f = n.createElement(r.default, null),
                b = n.createElement(i.default, null),
                C = (0, p.Z)(g);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.SideNav~loader.SideNavRedesign-9f4db315.f06d326a.js.map
