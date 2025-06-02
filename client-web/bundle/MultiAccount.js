"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.MultiAccount", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var r = o(202784),
                a = o(614983),
                n = o.n(a),
                i = o(325686),
                c = o(370006),
                s = o(786998),
                l = o(929028),
                d = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            n()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: a, hideBackButton: n, isFullWidth: i, isLarge: l, leftControl: d, middleControl: h, position: p, rightControl: m, secondaryBar: g, style: f, subtitle: b, title: C, titleDomId: y, titleIconCell: w, titleIconCellSize: B, withBackground: _, withWideContainer: k } = this.props,
                        { isModal: E } = this.context,
                        Z = n ? d : r.createElement(c.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        v = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!_, E, !!g);
                    return r.createElement(r.Fragment, null, r.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: i, isLarge: l, leftControl: Z, middleControl: h, position: u(p, E, a), rightControl: m, style: f, subtitle: b, title: C, titleDomId: y, titleIconCell: w, titleIconCellSize: B, withBackground: v, withWideContainer: k }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = l.Z.getBackgroundStyles();
                    return t ? r.createElement(i.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        947135: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(202784),
                a = o(242454),
                n = o(190286);
            class i extends r.Component {
                constructor(e) {
                    super(e),
                        (this._handleClick = (e) => {
                            this.setState({ showConfirmation: !0 });
                        }),
                        (this._handleCancel = () => {
                            this.setState({ showConfirmation: !1 });
                        }),
                        (this._handleConfirm = () => {
                            this.setState({ showConfirmation: !1 }), this.props.onConfirmationSheetConfirm();
                        }),
                        (this.state = { showConfirmation: !1 });
                }
                render() {
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: o, confirmationSheetConfirmButtonType: i, confirmationSheetHeadline: c, confirmationSheetText: s, label: l } = this.props;
                    return r.createElement(r.Fragment, null, r.createElement(a.Z, { align: e, color: t, label: l, onPress: this._handleClick }), this.state.showConfirmation ? r.createElement(n.Z, { confirmButtonLabel: o, confirmButtonType: i, headline: c, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: s }) : null);
                }
            }
            i.defaultProps = { color: "red500", align: "center" };
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(807896),
                a = o(202784),
                n = o(182056),
                i = o(879113),
                c = o(392237),
                s = o(111677),
                l = o.n(s),
                d = o(968478);
            const u = l().aa6e3300,
                h = ({ retryMessage: e, ...t }, o) => {
                    const c = n.Z.isOnline();
                    return a.createElement(i.Z, (0, r.Z)({}, t, { icon: c ? void 0 : a.createElement(d.default, { style: p.icon }), retryMessage: c ? e : u }));
                },
                p = c.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = a.forwardRef(h);
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => g, w: () => p });
            var r = o(202784),
                a = o(325686),
                n = o(108362),
                i = o(386802),
                c = o(392237),
                s = o(652904),
                l = o(555079),
                d = o(625661),
                u = o(449067),
                h = o(715601);
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: n, centerTitle: i, hideBackButton: c, history: s, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: g, rightControl: f, secondaryBar: b, subtitle: C, title: y } = this.props,
                                { isModal: w } = this.context;
                            return r.createElement(a.Z, { style: w ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(d.ZP, { backButtonType: o || (w ? "close" : "back"), backLocation: n, centerTitle: i, fixed: !w, hideBackButton: c, history: s, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: g, ref: e, rightControl: f, secondaryBar: b, style: [w && m.appBarModal, t], subtitle: C, title: y, titleDomId: l.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: i, documentTitle: c, isFullWidth: l, isLarge: d, renderHeader: p, title: g, withoutBottomBarMobile: f } = this.props,
                        { isModal: b } = this.context,
                        C = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(s.Z, null, r.createElement(u.Z.Configure, { documentTitle: c, headerless: !0, title: g }), r.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, b && m.rootModal] }, !b && C, r.createElement(n.Z, { isFullWidth: l, isLarge: d, style: [m.container, b && m.containerModal, i] }, b ? r.createElement(h.Z, { style: m.viewport }, C, o) : o), t ? r.createElement(a.Z, { style: [m.bottomBarModal, !b && !f && m.bottomBarMobile] }, r.createElement(n.Z, { isFullWidth: l, isLarge: d }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = i.Z);
            const m = c.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: c.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = p;
        },
        229412: (e, t, o) => {
            o.d(t, { a: () => W });
            o(136728);
            var r = o(202784),
                a = o(325686),
                n = o(530732),
                i = o(310088),
                c = o(731708),
                s = o(673510),
                l = o(661810),
                d = o(392237),
                u = o(111677),
                h = o.n(u),
                p = o(297896),
                m = o(293723),
                g = o(58399),
                f = o(913973),
                b = o(516951),
                C = o(725516),
                y = o(125363),
                w = o(806960);
            const B = h().h6beb5fb,
                _ = h().d86bbf0f,
                k = d.default.create((e) => ({ notificationBadge: { paddingHorizontal: e.spaces.space4 } })),
                E = ({ notificationCount: e = 0 }) => (e > 0 ? r.createElement(i.Z, { count: e, style: e > 9 && k.notificationBadge, truncatedCountFormatter: B, unreadCountLabel: _ }) : null);
            var Z = o(110512),
                v = o(642153),
                A = o(899667),
                S = o(487552),
                x = o(390387);
            const M = h().c61eea74,
                L = h().b7dc3885,
                I = h().d86bbf0f,
                U = h().h6beb5fb,
                D = ({ accountUsers: e, activeUser: t, handleMultiAccountSwitch: o, isUpdatedManageAccounts: n, renderUserDecoration: d, userTestId: u, withBadges: h }) => {
                    const p = (0, y.v9)(x.BP),
                        m = !0,
                        [g, f] = r.useState(!1),
                        b = r.useMemo(() => e.filter((e) => e.user_id !== t?.id_str), [e, t]),
                        C = r.useMemo(() => b.reduce((e, t) => e + (t.badgeCount || 0), 0), [b]),
                        w = r.useCallback(() => {
                            f(!g);
                        }, [g]),
                        B = r.useMemo(() => (p && p > 0 ? r.createElement(a.Z, { onClick: w, style: T.personalAccountsLabel }, r.createElement(c.ZP, { color: "gray700", weight: "bold" }, M), g ? r.createElement(A.default, { style: T.IconChevronUp }) : r.createElement(S.default, { style: T.IconChevronDown })) : null), [m, p, w, g]),
                        _ = r.useMemo(
                            () =>
                                b.map((e) => {
                                    const t = e.badgeCount ?? 0;
                                    return r.createElement(r.Fragment, { key: e.user_id }, r.createElement(s.ZP, { affiliateBadgeInfo: e.highlighted_label, "aria-label": L({ screenName: e.screen_name }), avatarDecoration: n && r.createElement(E, { notificationCount: t }), avatarUri: e.avatar_image_url, badgeContext: "account", decoration: d({ badgeCount: t, withBadges: h, isActiveUser: !1 }), displayMode: "UserCompact", isBlueVerified: e.is_blue_verified, isProtected: e.is_protected, isVerified: e.is_verified, name: e.name, onCellClick: o({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }), screenName: e.screen_name, testID: u, userId: e.user_id, verifiedType: e.verified_type, withLink: !1 }), n && r.createElement(l.Z, { style: T.accountDivider }));
                                }),
                            [o, b, d, u, h, n],
                        ),
                        k = r.useMemo(() => r.createElement(a.Z, { style: T.facePileContainer }, r.createElement(v.Z, { userAvatarSize: "large", userAvatarUrls: b.map((e) => e.avatar_image_url) }), C > 0 ? r.createElement(i.Z, { count: C, standalone: !0, truncatedCountFormatter: U, unreadCountLabel: I }) : null), [b, C]);
                    return b.length > 0 ? r.createElement(r.Fragment, null, !n && B, n || g || void 0 === p || 0 === p ? _ : k) : null;
                },
                T = d.default.create((e) => ({ personalAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                P = r.memo(D);
            var F = o(22132);
            const R = h().c61eea74,
                z = h().d86bbf0f,
                H = h().h6beb5fb;
            function W(e) {
                const { accountSwitch: t, accountUsers: o, activeUser: d, clearDelegateUser: u, delegateAccountCount: h, delegateUser: B, isDelegateEnabled: _, isUpdatedManageAccounts: k, onDelegateSwitch: v, onUserSwitch: A, userTestId: S, withBadges: x = !1 } = e,
                    M = !!B,
                    L = o.some((e) => e.user_id === d.id_str) || (h && h > 0) || M,
                    I = r.useCallback(() => {
                        u && u();
                    }, [u]),
                    U = r.useCallback(
                        ({ hasBadge: e, isProtected: o, userId: r }) =>
                            () => {
                                t({ hasBadge: e, isProtected: o, userId: r }), A?.();
                            },
                        [t, A],
                    ),
                    D = (0, y.v9)(w.pm),
                    T = (0, y.v9)(w.QA),
                    W = (0, C.z)(),
                    N = r.useCallback(
                        ({ isActiveUser: e, isLoggedInUser: t }) => {
                            const o = [];
                            return (
                                t &&
                                    o.push(
                                        r.createElement(
                                            n.Z,
                                            {
                                                link: "/logout",
                                                onClick: () => {
                                                    W.scribe({ action: "click", element: "log_out" });
                                                },
                                                testID: F.Z.logout,
                                                withoutInteractiveStyles: !0,
                                            },
                                            r.createElement(p.default, { style: V.IconExiting }),
                                        ),
                                    ),
                                o.push(e ? r.createElement(m.default, { style: V.updatedIconCheckmarkCircleFill }) : r.createElement(g.default, { style: V.IconChevronRight })),
                                r.createElement(
                                    a.Z,
                                    { style: V.decorationsContainer },
                                    o.map((e, t) => r.createElement(r.Fragment, { key: t }, e)),
                                )
                            );
                        },
                        [W],
                    ),
                    G = r.useCallback(({ badgeCount: e, isActiveUser: t, withBadges: o }) => (t ? (_ ? r.createElement(m.default, { style: [V.IconCheckmarkCircleFill, V.userDecoration] }) : r.createElement(f.default, { style: [V.iconCheckMark, V.userDecoration] })) : e && o ? r.createElement(i.Z, { count: e, standalone: !0, style: V.userDecoration, truncatedCountFormatter: H, unreadCountLabel: z }) : void 0), [_]),
                    j = r.useMemo(() => (k ? N : G), [k, G, N]),
                    q = r.useMemo(() => r.createElement(Z.ZP, { activeUserId: d.id_str, delegateUser: B, isUpdatedManageAccounts: k, key: 0, onDelegateSwitch: v ?? b.Z, renderUserDecoration: j }), [d.id_str, B, k, v, j]),
                    O = r.useMemo(() => r.createElement(P, { accountUsers: o, activeUser: d, handleMultiAccountSwitch: U, isUpdatedManageAccounts: !!k, key: 1, renderUserDecoration: j, userTestId: S, withBadges: x }), [o, d, U, k, j, S, x]),
                    J = [];
                return !k && _ && J.push(q), J.push(O), k && _ && J.push(q), r.createElement(r.Fragment, null, k && _ && r.createElement(a.Z, { style: V.personalAccountsLabel }, r.createElement(c.ZP, { color: "gray700", weight: "bold" }, R)), L ? r.createElement(r.Fragment, null, r.createElement(s.ZP, { affiliateBadgeInfo: d.highlightedLabel, avatarDecoration: k && r.createElement(E, { notificationCount: D + T }), avatarUri: d.profile_image_url_https, badgeContext: "account", decoration: j({ withBadges: x, isActiveUser: !B, isLoggedInUser: !0 }), displayMode: "UserCompact", isBlueVerified: d.is_blue_verified, isProtected: d.protected, isVerified: d.verified, name: d.name, onCellClick: M ? I : void 0, screenName: d.screen_name, testID: S, userId: d.id_str, verifiedType: d.verified_type, withLink: !1 }), k && r.createElement(l.Z, { style: V.accountDivider })) : null, J, !k && (L || h || o.length) ? r.createElement(l.Z, { spacing: "space12" }) : null);
            }
            const V = d.default.create((e) => ({ iconCheckMark: { color: e.colors.primary, flexShrink: 0 }, IconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, marginEnd: e.spaces.space8 }, updatedIconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconExiting: { color: e.colors.red500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconChevronRight: { color: "inherit", flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, decorationsContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, userDecoration: { marginStart: e.spaces.space12 }, personalAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 } }));
        },
        22132: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = { accountSwitcher: "SideNav_AccountSwitcher_Button", addAccount: "AccountSwitcher_AddAccount_Button", logout: "AccountSwitcher_Logout_Button", manageAccounts: "AccountSwitcher_ManageAccounts_Button" };
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                a = o(500002),
                n = o(668214),
                i = o(997174),
                c = o(118823);
            const s = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: c.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class l extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: r },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: n, search: i },
                            locationKey: c,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const l = a || c;
                    ((l && a !== c) || (!l && o !== n) || r !== i || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const d = (0, a.ZP)(s(l));
        },
        366273: (e, t, o) => {
            o.r(t), o.d(t, { MultiAccountScreen: () => K, default: () => Y });
            o(136728);
            var r = o(202784),
                a = o(325686),
                n = o(688715),
                i = o(731708),
                c = o(154003),
                s = o(242454),
                l = o(420412),
                d = o(310088),
                u = o(392237),
                h = o(111677),
                p = o.n(h),
                m = o(913973),
                g = o(947135),
                f = o(290402),
                b = o(980407),
                C = o(229412),
                y = o(443781),
                w = o(380155),
                B = o(312771),
                _ = o(71620),
                k = o(668214),
                E = o(454319),
                Z = o(956817),
                v = o(24546),
                A = o(390387),
                S = o(680997),
                x = o(919022);
            const M = (0, k.Z)()
                    .propsFromState(() => ({ delegateAccountCount: A.BP, delegateUser: A.sy, loggedInUser: x.ZP.selectLoggedInUser, fetchStatus: E.UD, users: E.pc }))
                    .propsFromActions(() => ({ clearDelegateUser: A.YJ, fetchMultiAccountListIfNeeded: E.s2, createLocalApiErrorHandler: (0, _.zr)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"), logout: S.Z, logoutAll: S.d, sendAllPreviews: v.MH, switchAccount: Z.y }))
                    .withAnalytics({ page: "account_switcher" }),
                L = "AccountSwitcher_Add_Button",
                I = "AccountSwitcher_Switch_Button",
                U = p().b8e1d524,
                D = p().e69b7e02,
                T = p().j0a8da6e,
                P = p().b6bd6ae4,
                F = p().d577bccd,
                R = p().dc65b3e5,
                z = p().b8045b33,
                H = p().d075dc89,
                W = p().i859a9d4,
                V = (0, n.ju)("https://help.x.com/managing-your-account/managing-multiple-twitter-accounts"),
                N = p().ae1bbb26,
                G = p().bade139e,
                j = p().ae33b982,
                q = p().fa07bf68,
                O = p().d86bbf0f,
                J = p().h6beb5fb;
            class K extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { spinner: !1 }),
                        (this._render = () => r.createElement(r.Fragment, null, this._renderUsers(), this.isUpdatedManageAccounts ? this._updatedRenderActions() : this._renderActions())),
                        (this._updatedRenderActions = () => {
                            const e = this.context.featureSwitches.getNumberValue("responsive_web_multiple_account_limit", 5),
                                { delegateAccountCount: t, users: o } = this.props,
                                n = o.length >= e;
                            return r.createElement(r.Fragment, null, n ? r.createElement(a.Z, { style: [Q.whiteBackground, Q.infoText, Q.updatedAccountLimitText] }, r.createElement(i.ZP, { align: "center", color: "gray700" }, (t ? H : z)({ maxAccounts: e }), " ")) : r.createElement(c.ZP, { onPress: this._handleAddAccount, style: Q.updatedAddAccountButton, testID: L }, r.createElement(i.ZP, { color: "buttonBlack", weight: "normal" }, T)), r.createElement(a.Z, { style: Q.updatedLogoutAllButtonWrapper }, r.createElement(g.Z, { color: "red500", confirmationSheetConfirmButtonLabel: N, confirmationSheetConfirmButtonType: "primary", confirmationSheetHeadline: j, confirmationSheetText: q, key: "logoutAllButton", label: G, onConfirmationSheetConfirm: this._handleLogoutAll, withBottomBorder: !1 })));
                        }),
                        (this._renderActions = () => {
                            const e = this.context.featureSwitches.getNumberValue("responsive_web_multiple_account_limit", 5),
                                { users: t } = this.props,
                                o = t.length >= e;
                            return r.createElement(r.Fragment, null, r.createElement(s.Z, { align: "left", color: "primary", disabled: o, label: T, onPress: this._handleAddAccount, testID: L }), r.createElement(a.Z, { style: [Q.whiteBackground, Q.infoText] }, r.createElement(i.ZP, { color: "gray700" }, (o ? R : F)({ maxAccounts: e }), " ", r.createElement(i.ZP, { link: V }, W))), r.createElement(l.Z, null), r.createElement(g.Z, { color: "red500", confirmationSheetConfirmButtonLabel: N, confirmationSheetConfirmButtonType: "primary", confirmationSheetHeadline: j, confirmationSheetText: q, key: "logoutAllButton", label: G, onConfirmationSheetConfirm: this._handleLogoutAll, withBottomBorder: !1 }));
                        }),
                        (this._renderUsers = () => {
                            const { clearDelegateUser: e, delegateAccountCount: t, delegateUser: o, loggedInUser: a, users: n, withBadges: i = !1 } = this.props;
                            if (!a) return null;
                            const c = { accountSwitch: this._handleSwitchAccount, accountUsers: n, activeUser: a, clearDelegateUser: e, delegateAccountCount: t, delegateUser: o, isDelegateEnabled: !0, userTestId: I, withBadges: i, isUpdatedManageAccounts: this.isUpdatedManageAccounts };
                            return r.createElement(C.a, c);
                        }),
                        (this._renderCurrentUserCheckmark = () => r.createElement(m.default, { "aria-label": P, style: Q.iconCheckMark })),
                        (this._renderBadge = (e) => (e ? r.createElement(a.Z, null, r.createElement(d.Z, { count: e, standalone: !0, truncatedCountFormatter: J, unreadCountLabel: O })) : null)),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchMultiAccountListIfNeeded: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleAddAccount = () => {
                            const { analytics: e, history: t } = this.props;
                            e.scribe({ element: "sign_in", action: "click" }), t.push("/i/flow/login");
                        }),
                        (this._handleSwitchAccount = ({ hasBadge: e, userId: t }) => {
                            const { analytics: o, createLocalApiErrorHandler: r, switchAccount: a } = this.props;
                            this.setState({ spinner: !0 }), o.scribe({ element: e ? "account_bubble_badged" : "account_bubble", action: "click" }), a({ user_id: t }).catch((e) => (this.setState({ spinner: !1 }), r(w.y)(e)));
                        }),
                        (this._handleLogoutAll = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, logoutAll: o, sendAllPreviews: r } = this.props;
                            this.setState({ spinner: !0 }),
                                e.scribe({ element: "logout_all", action: "click" }),
                                r().finally(() => {
                                    o().catch((e) => (this.setState({ spinner: !1 }), t()(e)));
                                });
                        });
                }
                componentDidMount() {
                    const { fetchMultiAccountListIfNeeded: e } = this.props;
                    e();
                }
                render() {
                    const { fetchStatus: e, history: t } = this.props,
                        { spinner: o } = this.state,
                        a = this.context.featureSwitches.isTrue("rweb_sourcemap_migration");
                    return (this.isUpdatedManageAccounts = a && this.context.featureSwitches.isTrue("rweb_sourcemap_migration_updated_manage_accounts")), r.createElement(b.Z, { appBarStyle: this.isUpdatedManageAccounts && Q.updatedAppBarStyle, containerStyle: this.isUpdatedManageAccounts && Q.updatedModalStyle, history: t, title: this.isUpdatedManageAccounts ? D : U }, r.createElement(f.Z, { fetchStatus: o ? B.ZP.LOADING : e, onRequestRetry: this._handleFetch, render: this._render }));
                }
            }
            K.contextType = y.rC;
            const Q = u.default.create((e) => ({ iconCheckMark: { color: e.colors.primary, fontSize: "1.2em" }, infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, whiteBackground: { backgroundColor: e.colors.cellBackground }, updatedAddAccountButton: { margin: e.spaces.space16, marginBottom: 0, padding: e.spaces.space12, borderRadius: e.spaces.space12, backgroundColor: e.colors.gray0, border: "none" }, updatedAccountLimitText: { paddingBottom: 0 }, updatedLogoutAllButtonWrapper: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space24, borderRadius: e.spaces.space12, overflow: "hidden" }, updatedModalStyle: { paddingHorizontal: e.spaces.space8, height: "auto" }, updatedAppBarStyle: { paddingTop: e.spaces.space8 } })),
                Y = M(K);
        },
        242454: (e, t, o) => {
            o.d(t, { Z: () => u });
            var r = o(807896),
                a = o(202784),
                n = o(325686),
                i = o(731708),
                c = o(58881),
                s = o(530732),
                l = o(392237);
            const d = l.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: o, ...u }) => {
                    const h = c.Z.generate({ backgroundColor: l.default.theme.colors.transparent, color: l.default.theme.colors[t], insetFocusRing: !0 });
                    return a.createElement(n.Z, { style: d.container }, a.createElement(s.Z, (0, r.Z)({}, u, { interactiveStyles: h, style: d.root }), a.createElement(i.ZP, { align: e, color: t }, o)));
                };
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => p });
            var r = o(202784),
                a = o(476984),
                n = o.n(a),
                i = o(143778),
                c = o(750410),
                s = o(682830);
            const l = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class p extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !n()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: a, icon: n, loadingMessage: i, onRequestRetry: d, render: p, renderFailure: m, retryMessage: g, retryable: f } = this.props;
                    switch (a) {
                        case l:
                            return f ? r.createElement(c.Z, { icon: n, onRequestRetry: d, retryMessage: g }) : o ? r.createElement(s.m, { failureMessage: o }) : m();
                        case u:
                            return r.createElement(s.J, { "aria-label": e, color: t, loadingMessage: i });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784),
                a = o(325686),
                n = o(235902),
                i = o(885015),
                c = o(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: s } = n.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? l[e] : { backgroundColor: c.default.theme.colors[e] ?? c.default.theme.colors.borderColor };
                return o ? r.createElement(i.Z, { style: !t && l.root, withGutter: !0 }, r.createElement(a.Z, { style: l.gapColumn }, r.createElement(a.Z, { style: [l.gap, d] })), r.createElement(a.Z, { style: l.gapText }, o), r.createElement(a.Z, { style: l.gapColumn }, r.createElement(a.Z, { style: [l.gap, d] }))) : r.createElement(a.Z, { style: [!t && l.root, s() && l.rootRedesign, l.gap, d] });
            }
            const l = c.default.create((e) => ({ borderColor: { backgroundColor: c.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: c.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(807896),
                a = o(202784),
                n = o(325686),
                i = o(392237);
            class c extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...i } = this.props,
                        c = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, s.column, o && s.withGutterColumn] }));
                    return a.createElement(n.Z, (0, r.Z)({ style: [t, s.root, o && s.withGutter] }, i), c);
                }
            }
            c.defaultProps = { withGutter: !1 };
            const s = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                l = c;
        },
        58399: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(717683),
                c = o(347101);
            const s = (e = {}) => {
                const t = r.useContext(i.Z),
                    { direction: o } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style, t && c.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: o });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        246492: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        264171: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        262009: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.MultiAccount.dcf29dba.js.map
