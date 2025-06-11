"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.MultiAccount"],
    {
        929446: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "UserCell_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                    { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }, action: "THROW" },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserCore",
                        kind: "LinkedField",
                        name: "core",
                        plural: !1,
                        selections: [
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }, action: "THROW" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "THROW" },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "HighlightedUserLabelResponse",
                        kind: "LinkedField",
                        name: "identity_profile_labels_highlighted_label",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "HighlightedUserLabel",
                                kind: "LinkedField",
                                name: "label",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "TimelineUrl" }], storageKey: null },
                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }], storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserVerification",
                        kind: "LinkedField",
                        name: "verification",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "2ed5f16889d23a8b1d55df8a2f7bb966",
            };
            const n = a;
        },
        625661: (e, t, r) => {
            r.d(t, { ZP: () => p });
            var a = r(202784),
                n = r(614983),
                o = r.n(n),
                l = r(325686),
                i = r(370006),
                s = r(786998),
                c = r(929028),
                d = r(386802);
            function u(e, t, r) {
                return e || (!t && r ? "fixed" : void 0);
            }
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            o()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: r, fixed: n, hideBackButton: o, isFullWidth: l, isLarge: c, leftControl: d, middleControl: p, position: m, rightControl: h, secondaryBar: g, style: f, subtitle: y, title: b, titleDomId: C, titleIconCell: w, titleIconCellSize: k, withBackground: E, withWideContainer: x } = this.props,
                        { isModal: v } = this.context,
                        B = o ? d : a.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        _ = (function (e, t, r) {
                            return e && !(t && r);
                        })(!!E, v, !!g);
                    return a.createElement(a.Fragment, null, a.createElement(s.Z, { centerTitle: t, centeredLogo: r, isFullWidth: l, isLarge: c, leftControl: B, middleControl: p, position: u(m, v, n), rightControl: h, style: f, subtitle: y, title: b, titleDomId: C, titleIconCell: w, titleIconCellSize: k, withBackground: _, withWideContainer: x }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        r = c.Z.getBackgroundStyles();
                    return t ? a.createElement(l.Z, { style: !!e && r }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        947135: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(202784),
                n = r(242454),
                o = r(190286);
            class l extends a.Component {
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
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: r, confirmationSheetConfirmButtonType: l, confirmationSheetHeadline: i, confirmationSheetText: s, label: c } = this.props;
                    return a.createElement(a.Fragment, null, a.createElement(n.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? a.createElement(o.Z, { confirmButtonLabel: r, confirmButtonType: l, headline: i, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: s }) : null);
                }
            }
            l.defaultProps = { color: "red500", align: "center" };
        },
        290402: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(807896),
                n = r(202784),
                o = r(182056),
                l = r(879113),
                i = r(392237),
                s = r(111677),
                c = r.n(s),
                d = r(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, r) => {
                    const i = o.Z.isOnline();
                    return n.createElement(l.Z, (0, a.Z)({}, t, { icon: i ? void 0 : n.createElement(d.default, { style: m.icon }), retryMessage: i ? e : u }));
                },
                m = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                h = n.forwardRef(p);
        },
        980407: (e, t, r) => {
            r.d(t, { Z: () => g, w: () => m });
            var a = r(202784),
                n = r(325686),
                o = r(108362),
                l = r(386802),
                i = r(392237),
                s = r(652904),
                c = r(555079),
                d = r(625661),
                u = r(449067),
                p = r(715601);
            class m extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: r, backLocation: o, centerTitle: l, hideBackButton: i, history: s, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: g, rightControl: f, secondaryBar: y, subtitle: b, title: C } = this.props,
                                { isModal: w } = this.context;
                            return a.createElement(n.Z, { style: w ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, a.createElement(d.ZP, { backButtonType: r || (w ? "close" : "back"), backLocation: o, centerTitle: l, fixed: !w, hideBackButton: i, history: s, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: g, ref: e, rightControl: f, secondaryBar: y, style: [w && h.appBarModal, t], subtitle: b, title: C, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: r } = this.context;
                            t && (r ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: r, containerStyle: l, documentTitle: i, isFullWidth: c, isLarge: d, renderHeader: m, title: g, withoutBottomBarMobile: f } = this.props,
                        { isModal: y } = this.context,
                        b = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(s.Z, null, a.createElement(u.Z.Configure, { documentTitle: i, headerless: !0, title: g }), a.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, y && h.rootModal] }, !y && b, a.createElement(o.Z, { isFullWidth: c, isLarge: d, style: [h.container, y && h.containerModal, l] }, y ? a.createElement(p.Z, { style: h.viewport }, b, r) : r), t ? a.createElement(n.Z, { style: [h.bottomBarModal, !y && !f && h.bottomBarMobile] }, a.createElement(o.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = l.Z);
            const h = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = m;
        },
        229412: (e, t, r) => {
            r.d(t, { a: () => z });
            r(136728);
            var a = r(202784),
                n = r(325686),
                o = r(530732),
                l = r(310088),
                i = r(731708),
                s = r(673510),
                c = r(661810),
                d = r(392237),
                u = r(111677),
                p = r.n(u),
                m = r(297896),
                h = r(293723),
                g = r(58399),
                f = r(913973),
                y = r(516951),
                b = r(725516),
                C = r(125363),
                w = r(806960);
            const k = p().h6beb5fb,
                E = p().d86bbf0f,
                x = d.default.create((e) => ({ notificationBadge: { paddingHorizontal: e.spaces.space4 } })),
                v = ({ notificationCount: e = 0 }) => (e > 0 ? a.createElement(l.Z, { count: e, style: e > 9 && x.notificationBadge, truncatedCountFormatter: k, unreadCountLabel: E }) : null);
            var B = r(110512),
                _ = r(642153),
                S = r(899667),
                Z = r(487552),
                A = r(390387);
            const L = p().c61eea74,
                F = p().b7dc3885,
                T = p().d86bbf0f,
                I = p().h6beb5fb,
                U = ({ accountUsers: e, activeUser: t, handleMultiAccountSwitch: r, isUpdatedManageAccounts: o, renderUserDecoration: d, userTestId: u, withBadges: p }) => {
                    const m = (0, C.v9)(A.BP),
                        h = !0,
                        [g, f] = a.useState(!1),
                        y = a.useMemo(() => e.filter((e) => e.user_id !== t?.id_str), [e, t]),
                        b = a.useMemo(() => y.reduce((e, t) => e + (t.badgeCount || 0), 0), [y]),
                        w = a.useCallback(() => {
                            f(!g);
                        }, [g]),
                        k = a.useMemo(() => (m && m > 0 ? a.createElement(n.Z, { onClick: w, style: P.personalAccountsLabel }, a.createElement(i.ZP, { color: "gray700", weight: "bold" }, L), g ? a.createElement(S.default, { style: P.IconChevronUp }) : a.createElement(Z.default, { style: P.IconChevronDown })) : null), [h, m, w, g]),
                        E = a.useMemo(
                            () =>
                                y.map((e) => {
                                    const t = e.badgeCount ?? 0;
                                    return a.createElement(a.Fragment, { key: e.user_id }, a.createElement(s.ZP, { affiliateBadgeInfo: e.highlighted_label, "aria-label": F({ screenName: e.screen_name }), avatarDecoration: o && a.createElement(v, { notificationCount: t }), avatarUri: e.avatar_image_url, badgeContext: "account", decoration: d({ badgeCount: t, withBadges: p, isActiveUser: !1 }), displayMode: "UserCompact", isBlueVerified: e.is_blue_verified, isProtected: e.is_protected, isVerified: e.is_verified, name: e.name, onCellClick: r({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }), screenName: e.screen_name, testID: u, userId: e.user_id, verifiedType: e.verified_type, withLink: !1 }), o && a.createElement(c.Z, { style: P.accountDivider }));
                                }),
                            [r, y, d, u, p, o],
                        ),
                        x = a.useMemo(() => a.createElement(n.Z, { style: P.facePileContainer }, a.createElement(_.Z, { userAvatarSize: "large", userAvatarUrls: y.map((e) => e.avatar_image_url) }), b > 0 ? a.createElement(l.Z, { count: b, standalone: !0, truncatedCountFormatter: I, unreadCountLabel: T }) : null), [y, b]);
                    return y.length > 0 ? a.createElement(a.Fragment, null, !o && k, o || g || void 0 === m || 0 === m ? E : x) : null;
                },
                P = d.default.create((e) => ({ personalAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                M = a.memo(U);
            var D = r(22132);
            const R = p().c61eea74,
                H = p().d86bbf0f,
                W = p().h6beb5fb;
            function z(e) {
                const { accountSwitch: t, accountUsers: r, activeUser: d, clearDelegateUser: u, delegateAccountCount: p, delegateUser: k, isDelegateEnabled: E, isUpdatedManageAccounts: x, onDelegateSwitch: _, onUserSwitch: S, userTestId: Z, withBadges: A = !1 } = e,
                    L = !!k,
                    F = r.some((e) => e.user_id === d.id_str) || (p && p > 0) || L,
                    T = a.useCallback(() => {
                        u && u();
                    }, [u]),
                    I = a.useCallback(
                        ({ hasBadge: e, isProtected: r, userId: a }) =>
                            () => {
                                t({ hasBadge: e, isProtected: r, userId: a }), S?.();
                            },
                        [t, S],
                    ),
                    U = (0, C.v9)(w.pm),
                    P = (0, C.v9)(w.QA),
                    z = (0, b.z)(),
                    Q = a.useCallback(
                        ({ isActiveUser: e, isLoggedInUser: t }) => {
                            const r = [];
                            return (
                                t &&
                                    r.push(
                                        a.createElement(
                                            o.Z,
                                            {
                                                link: "/logout",
                                                onClick: () => {
                                                    z.scribe({ action: "click", element: "log_out" });
                                                },
                                                testID: D.Z.logout,
                                                withoutInteractiveStyles: !0,
                                            },
                                            a.createElement(m.default, { style: N.IconExiting }),
                                        ),
                                    ),
                                r.push(e ? a.createElement(h.default, { style: N.updatedIconCheckmarkCircleFill }) : a.createElement(g.default, { style: N.IconChevronRight })),
                                a.createElement(
                                    n.Z,
                                    { style: N.decorationsContainer },
                                    r.map((e, t) => a.createElement(a.Fragment, { key: t }, e)),
                                )
                            );
                        },
                        [z],
                    ),
                    V = a.useCallback(({ badgeCount: e, isActiveUser: t, withBadges: r }) => (t ? (E ? a.createElement(h.default, { style: [N.IconCheckmarkCircleFill, N.userDecoration] }) : a.createElement(f.default, { style: [N.iconCheckMark, N.userDecoration] })) : e && r ? a.createElement(l.Z, { count: e, standalone: !0, style: N.userDecoration, truncatedCountFormatter: W, unreadCountLabel: H }) : void 0), [E]),
                    K = a.useMemo(() => (x ? Q : V), [x, V, Q]),
                    G = a.useMemo(() => a.createElement(B.ZP, { activeUserId: d.id_str, delegateUser: k, isUpdatedManageAccounts: x, key: 0, onDelegateSwitch: _ ?? y.Z, renderUserDecoration: K }), [d.id_str, k, x, _, K]),
                    O = a.useMemo(() => a.createElement(M, { accountUsers: r, activeUser: d, handleMultiAccountSwitch: I, isUpdatedManageAccounts: !!x, key: 1, renderUserDecoration: K, userTestId: Z, withBadges: A }), [r, d, I, x, K, Z, A]),
                    j = [];
                return !x && E && j.push(G), j.push(O), x && E && j.push(G), a.createElement(a.Fragment, null, x && E && a.createElement(n.Z, { style: N.personalAccountsLabel }, a.createElement(i.ZP, { color: "gray700", weight: "bold" }, R)), F ? a.createElement(a.Fragment, null, a.createElement(s.ZP, { affiliateBadgeInfo: d.highlightedLabel, avatarDecoration: x && a.createElement(v, { notificationCount: U + P }), avatarUri: d.profile_image_url_https, badgeContext: "account", decoration: K({ withBadges: A, isActiveUser: !k, isLoggedInUser: !0 }), displayMode: "UserCompact", isBlueVerified: d.is_blue_verified, isProtected: d.protected, isVerified: d.verified, name: d.name, onCellClick: L ? T : void 0, screenName: d.screen_name, testID: Z, userId: d.id_str, verifiedType: d.verified_type, withLink: !1 }), x && a.createElement(c.Z, { style: N.accountDivider })) : null, j, !x && (F || p || r.length) ? a.createElement(c.Z, { spacing: "space12" }) : null);
            }
            const N = d.default.create((e) => ({ iconCheckMark: { color: e.colors.primary, flexShrink: 0 }, IconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, marginEnd: e.spaces.space8 }, updatedIconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconExiting: { color: e.colors.red500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconChevronRight: { color: "inherit", flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, decorationsContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, userDecoration: { marginStart: e.spaces.space12 }, personalAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 } }));
        },
        22132: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = { accountSwitcher: "SideNav_AccountSwitcher_Button", addAccount: "AccountSwitcher_AddAccount_Button", logout: "AccountSwitcher_Logout_Button", manageAccounts: "AccountSwitcher_ManageAccounts_Button" };
        },
        652904: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(202784),
                n = r(500002),
                o = r(668214),
                l = r(997174),
                i = r(118823);
            const s = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class c extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: r, search: a },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: o, search: l },
                            locationKey: i,
                        } = e;
                    let s = !1;
                    t.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && t.pathname === r && ((this._isInBackground = !1), (s = !0));
                    const c = n || i;
                    ((c && n !== i) || (!c && r !== o) || a !== l || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: r, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), r(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, n.ZP)(s(c));
        },
        366273: (e, t, r) => {
            r.r(t), r.d(t, { MultiAccountScreen: () => $, default: () => X });
            r(136728);
            var a = r(202784),
                n = r(325686),
                o = r(688715),
                l = r(731708),
                i = r(154003),
                s = r(242454),
                c = r(420412),
                d = r(310088),
                u = r(392237),
                p = r(111677),
                m = r.n(p),
                h = r(913973),
                g = r(947135),
                f = r(290402),
                y = r(980407),
                b = r(229412),
                C = r(443781),
                w = r(380155),
                k = r(312771),
                E = r(71620),
                x = r(668214),
                v = r(454319),
                B = r(956817),
                _ = r(24546),
                S = r(390387),
                Z = r(680997),
                A = r(919022);
            const L = (0, x.Z)()
                    .propsFromState(() => ({ delegateAccountCount: S.BP, delegateUser: S.sy, loggedInUser: A.ZP.selectLoggedInUser, fetchStatus: v.UD, users: v.pc }))
                    .propsFromActions(() => ({ clearDelegateUser: S.YJ, fetchMultiAccountListIfNeeded: v.s2, createLocalApiErrorHandler: (0, E.zr)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"), logout: Z.Z, logoutAll: Z.d, sendAllPreviews: _.MH, switchAccount: B.y }))
                    .withAnalytics({ page: "account_switcher" }),
                F = "AccountSwitcher_Add_Button",
                T = "AccountSwitcher_Switch_Button",
                I = m().b8e1d524,
                U = m().e69b7e02,
                P = m().j0a8da6e,
                M = m().b6bd6ae4,
                D = m().d577bccd,
                R = m().dc65b3e5,
                H = m().b8045b33,
                W = m().d075dc89,
                z = m().i859a9d4,
                N = (0, o.ju)("https://help.x.com/managing-your-account/managing-multiple-twitter-accounts"),
                Q = m().ae1bbb26,
                V = m().bade139e,
                K = m().ae33b982,
                G = m().fa07bf68,
                O = m().d86bbf0f,
                j = m().h6beb5fb;
            class $ extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { spinner: !1 }),
                        (this._render = () => a.createElement(a.Fragment, null, this._renderUsers(), this.isUpdatedManageAccounts ? this._updatedRenderActions() : this._renderActions())),
                        (this._updatedRenderActions = () => {
                            const e = this.context.featureSwitches.getNumberValue("responsive_web_multiple_account_limit", 5),
                                { delegateAccountCount: t, users: r } = this.props,
                                o = r.length >= e;
                            return a.createElement(a.Fragment, null, o ? a.createElement(n.Z, { style: [q.whiteBackground, q.infoText, q.updatedAccountLimitText] }, a.createElement(l.ZP, { align: "center", color: "gray700" }, (t ? W : H)({ maxAccounts: e }), " ")) : a.createElement(i.ZP, { onPress: this._handleAddAccount, style: q.updatedAddAccountButton, testID: F }, a.createElement(l.ZP, { color: "buttonBlack", weight: "normal" }, P)), a.createElement(n.Z, { style: q.updatedLogoutAllButtonWrapper }, a.createElement(g.Z, { color: "red500", confirmationSheetConfirmButtonLabel: Q, confirmationSheetConfirmButtonType: "primary", confirmationSheetHeadline: K, confirmationSheetText: G, key: "logoutAllButton", label: V, onConfirmationSheetConfirm: this._handleLogoutAll, withBottomBorder: !1 })));
                        }),
                        (this._renderActions = () => {
                            const e = this.context.featureSwitches.getNumberValue("responsive_web_multiple_account_limit", 5),
                                { users: t } = this.props,
                                r = t.length >= e;
                            return a.createElement(a.Fragment, null, a.createElement(s.Z, { align: "left", color: "primary", disabled: r, label: P, onPress: this._handleAddAccount, testID: F }), a.createElement(n.Z, { style: [q.whiteBackground, q.infoText] }, a.createElement(l.ZP, { color: "gray700" }, (r ? R : D)({ maxAccounts: e }), " ", a.createElement(l.ZP, { link: N }, z))), a.createElement(c.Z, null), a.createElement(g.Z, { color: "red500", confirmationSheetConfirmButtonLabel: Q, confirmationSheetConfirmButtonType: "primary", confirmationSheetHeadline: K, confirmationSheetText: G, key: "logoutAllButton", label: V, onConfirmationSheetConfirm: this._handleLogoutAll, withBottomBorder: !1 }));
                        }),
                        (this._renderUsers = () => {
                            const { clearDelegateUser: e, delegateAccountCount: t, delegateUser: r, loggedInUser: n, users: o, withBadges: l = !1 } = this.props;
                            if (!n) return null;
                            const i = { accountSwitch: this._handleSwitchAccount, accountUsers: o, activeUser: n, clearDelegateUser: e, delegateAccountCount: t, delegateUser: r, isDelegateEnabled: !0, userTestId: T, withBadges: l, isUpdatedManageAccounts: this.isUpdatedManageAccounts };
                            return a.createElement(b.a, i);
                        }),
                        (this._renderCurrentUserCheckmark = () => a.createElement(h.default, { "aria-label": M, style: q.iconCheckMark })),
                        (this._renderBadge = (e) => (e ? a.createElement(n.Z, null, a.createElement(d.Z, { count: e, standalone: !0, truncatedCountFormatter: j, unreadCountLabel: O })) : null)),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchMultiAccountListIfNeeded: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleAddAccount = () => {
                            const { analytics: e, history: t } = this.props;
                            e.scribe({ element: "sign_in", action: "click" }), t.push("/i/flow/login");
                        }),
                        (this._handleSwitchAccount = ({ hasBadge: e, userId: t }) => {
                            const { analytics: r, createLocalApiErrorHandler: a, switchAccount: n } = this.props;
                            this.setState({ spinner: !0 }), r.scribe({ element: e ? "account_bubble_badged" : "account_bubble", action: "click" }), n({ user_id: t }).catch((e) => (this.setState({ spinner: !1 }), a(w.y)(e)));
                        }),
                        (this._handleLogoutAll = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, logoutAll: r, sendAllPreviews: a } = this.props;
                            this.setState({ spinner: !0 }),
                                e.scribe({ element: "logout_all", action: "click" }),
                                a().finally(() => {
                                    r().catch((e) => (this.setState({ spinner: !1 }), t()(e)));
                                });
                        });
                }
                componentDidMount() {
                    const { fetchMultiAccountListIfNeeded: e } = this.props;
                    e();
                }
                render() {
                    const { fetchStatus: e, history: t } = this.props,
                        { spinner: r } = this.state,
                        n = this.context.featureSwitches.isTrue("rweb_sourcemap_migration");
                    return (this.isUpdatedManageAccounts = n && this.context.featureSwitches.isTrue("rweb_sourcemap_migration_updated_manage_accounts")), a.createElement(y.Z, { appBarStyle: this.isUpdatedManageAccounts && q.updatedAppBarStyle, containerStyle: this.isUpdatedManageAccounts && q.updatedModalStyle, history: t, title: this.isUpdatedManageAccounts ? U : I }, a.createElement(f.Z, { fetchStatus: r ? k.ZP.LOADING : e, onRequestRetry: this._handleFetch, render: this._render }));
                }
            }
            $.contextType = C.rC;
            const q = u.default.create((e) => ({ iconCheckMark: { color: e.colors.primary, fontSize: "1.2em" }, infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, whiteBackground: { backgroundColor: e.colors.cellBackground }, updatedAddAccountButton: { margin: e.spaces.space16, marginBottom: 0, padding: e.spaces.space12, borderRadius: e.spaces.space12, backgroundColor: e.colors.gray0, border: "none" }, updatedAccountLimitText: { paddingBottom: 0 }, updatedLogoutAllButtonWrapper: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space24, borderRadius: e.spaces.space12, overflow: "hidden" }, updatedModalStyle: { paddingHorizontal: e.spaces.space8, height: "auto" }, updatedAppBarStyle: { paddingTop: e.spaces.space8 } })),
                X = L($);
        },
        242454: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(807896),
                n = r(202784),
                o = r(325686),
                l = r(731708),
                i = r(58881),
                s = r(530732),
                c = r(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: r, ...u }) => {
                    const p = i.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return n.createElement(o.Z, { style: d.container }, n.createElement(s.Z, (0, a.Z)({}, u, { interactiveStyles: p, style: d.root }), n.createElement(l.ZP, { align: e, color: t }, r)));
                };
        },
        642153: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(202784),
                n = r(325686),
                o = r(392237),
                l = r(823161);
            const i = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: r = "small", style: i, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: u } = e,
                        p = d.length,
                        m = "transparent" === t;
                    return a.createElement(
                        n.Z,
                        { style: [s.root, i, { height: l.default.getSizeStyle(c)?.height }] },
                        d.map((e, n) => a.createElement(l.default, { backgroundColor: t, borderColor: t, borderWidth: m ? "none" : r, key: n, size: c, style: [0 !== n && { marginStart: -1 * o.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: p - n }], uri: e })),
                    );
                },
                s = o.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => m });
            var a = r(202784),
                n = r(476984),
                o = r.n(n),
                l = r(143778),
                i = r(750410),
                s = r(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class m extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !o()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: n, icon: o, loadingMessage: l, onRequestRetry: d, render: m, renderFailure: h, retryMessage: g, retryable: f } = this.props;
                    switch (n) {
                        case c:
                            return f ? a.createElement(i.Z, { icon: o, onRequestRetry: d, retryMessage: g }) : r ? a.createElement(s.m, { failureMessage: r }) : h();
                        case u:
                            return a.createElement(s.J, { "aria-label": e, color: t, loadingMessage: l });
                        case p:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: l.Z, retryable: !0 };
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(202784),
                n = r(325686),
                o = r(235902),
                l = r(885015),
                i = r(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: s } = o.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return r ? a.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(n.Z, { style: c.gapColumn }, a.createElement(n.Z, { style: [c.gap, d] })), a.createElement(n.Z, { style: c.gapText }, r), a.createElement(n.Z, { style: c.gapColumn }, a.createElement(n.Z, { style: [c.gap, d] }))) : a.createElement(n.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(807896),
                n = r(202784),
                o = r(325686),
                l = r(392237);
            class i extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...l } = this.props,
                        i = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, s.column, r && s.withGutterColumn] }));
                    return n.createElement(o.Z, (0, a.Z)({ style: [t, s.root, r && s.withGutter] }, l), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        215337: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(202784),
                n = r(325686);
            class o extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, r) => {
                                    const a = t[r];
                                    let n = "";
                                    return a && (n = ` ${100 * a}%`), e + n;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: r, style: o } = this.props;
                    return a.createElement(n.Z, { style: [o, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, r);
                }
            }
            o.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const l = o;
        },
        378729: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(202784),
                n = r(325686),
                o = r(111677),
                l = r.n(o),
                i = r(283379),
                s = r(731708),
                c = r(392237);
            const d = l().f1a1b791,
                u = l().if2bf8b4,
                p = l().f3624b5c,
                m = l().b4b3b113,
                h = l().be222050,
                g = l().hcbbe447;
            class f extends a.Component {
                render() {
                    const { color: e, id: t, style: r } = this.props;
                    return a.createElement(n.Z, { style: [y.root, r] }, a.createElement(i.default, { style: [y.icon, e && y[e]] }), a.createElement(s.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: r } = this.props,
                        { adMetadataContainer: a, advertiser: n, advertiser_name: o, disclosure_type: l } = r,
                        i = e && n && e === n.id_str,
                        s = "string" == typeof l && "political" === l.toLowerCase(),
                        c = "string" == typeof l && "issue" === l.toLowerCase(),
                        f = !(!a || "POLITICAL" !== a.disclaimerType) || s,
                        y = !(!a || "ISSUE" !== a.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: b } = a || {};
                    let C;
                    return (C = t || (!o || i || b ? (f ? p : y ? h : u) : f ? m({ fullName: o }) : y ? g({ fullName: o }) : d({ fullName: o }))), C;
                }
            }
            f.defaultProps = { color: "gray700" };
            const y = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        537439: (e, t, r) => {
            r.d(t, { Z: () => R });
            var a = r(202784),
                n = r(111677),
                o = r.n(n),
                l = r(492140),
                i = r(720600),
                s = r(761744),
                c = r(25001),
                d = r(453333),
                u = r(136483),
                p = r(98440),
                m = r(790093),
                h = r(452693),
                g = r(544367),
                f = r(264171),
                y = r(159340),
                b = r(404971),
                C = r(262009),
                w = r(76388),
                k = r(488746),
                E = r(246492),
                x = r(520913),
                v = r(731708),
                B = r(642153),
                _ = r(879891),
                S = r(392237),
                Z = r(54606);
            const A = o().ae408b76,
                L = o().j355f008,
                F = o().habf9678,
                T = o().db0798ed,
                I = o().dc716ec9,
                U = ({ text: e }) => {
                    const { direction: t } = (0, _.Z)();
                    return a.createElement(v.ZP, { dir: t, withHashflags: !0 }, e);
                },
                P = (e, t) =>
                    t
                        ? A
                        : ((e) => {
                              const t = a.createElement(U, { text: e });
                              return a.createElement(o().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                M = S.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                D = S.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                R = ({ contextType: e, iconColor: t, iconSize: r, link: n, retweetData: o, text: v, topicData: _, userAvatarUrls: A }) => {
                    const { isSelfRetweet: R, name: H, screenName: W } = o || {},
                        z = ((e, t, r, n = []) => {
                            const o = M[t],
                                v = [r ? { color: S.default.theme.colors[r] } : D.colorDeepGray, o],
                                _ = a.createElement(l.default, { style: v }),
                                A = a.createElement(i.default, { style: v }),
                                L = a.createElement(s.default, { style: v }),
                                F = a.createElement(c.default, { style: v }),
                                T = a.createElement(d.default, { style: v }),
                                I = a.createElement(u.default, { style: D.circle }),
                                U = a.createElement(p.default, { style: v }),
                                P = a.createElement(m.default, { style: v }),
                                R = a.createElement(h.default, { style: v }),
                                H = a.createElement(g.default, { style: v }),
                                W = a.createElement(f.default, { style: v }),
                                z = a.createElement(y.default, { style: v }),
                                N = a.createElement(b.default, { style: v }),
                                Q = a.createElement(C.default, { style: v }),
                                V = a.createElement(w.default, { style: v }),
                                K = a.createElement(k.default, { style: v }),
                                G = a.createElement(E.default, { style: v }),
                                O = a.createElement(B.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: n }),
                                j = a.createElement(x.default, { style: v });
                            switch (e) {
                                case Z.Q.Pin:
                                case Z.Q.ReplyPin:
                                    return _;
                                case Z.Q.Retweet:
                                    return A;
                                case Z.Q.Like:
                                    return L;
                                case Z.Q.Follow:
                                    return F;
                                case Z.Q.Moment:
                                    return T;
                                case Z.Q.NewTweets:
                                    return I;
                                case Z.Q.Reply:
                                case Z.Q.Conversation:
                                    return U;
                                case Z.Q.Feedback:
                                    return P;
                                case Z.Q.Topic:
                                    return R;
                                case Z.Q.List:
                                    return H;
                                case Z.Q.Location:
                                    return W;
                                case Z.Q.Community:
                                    return z;
                                case Z.Q.Spaces:
                                    return N;
                                case Z.Q.Sparkle:
                                    return Q;
                                case Z.Q.SocialProof:
                                case Z.Q.FollowFollowed:
                                    return G;
                                case Z.Q.FollowMutual:
                                    return K;
                                case Z.Q.FollowFollowing:
                                    return V;
                                case Z.Q.Facepile:
                                    return O;
                                case Z.Q.Bird:
                                    return j;
                                case Z.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, r, t, A);
                    switch (e) {
                        case Z.Q.Retweet:
                            return { Icon: z, text: v || P(H, R), link: W ? `https://twitter.com/${W}` : void 0 };
                        case Z.Q.Pin:
                            return { Icon: z, text: v || L };
                        case Z.Q.ReplyPin:
                            return { Icon: z, text: F };
                        case Z.Q.Topic:
                            return { Icon: z, "aria-label": "Recommendation" === _?.functionalityType || "RecWithEducation" === _?.functionalityType ? I({ topicName: v }) : T({ topicName: v }), text: v ? a.createElement(U, { text: v }) : null, link: n };
                        default:
                            return { Icon: z, text: v ? a.createElement(U, { text: v }) : null, link: n };
                    }
                };
        },
        126962: (e, t, r) => {
            r.d(t, { Z: () => g });
            r(136728);
            var a = r(202784),
                n = r(325686),
                o = r(731708),
                l = r(872405),
                i = r(235902),
                s = r(392237),
                c = r(139052),
                d = r(488684),
                u = r(537439),
                p = r(54606);
            class m extends a.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: r, id: s, onLayout: c, rightControl: d, style: p, testID: m, textColor: g, textSize: f, topControl: y, weight: b, withBottomBorder: C, withLeftPadding: w, withTextCentered: k, ...E } = this.props,
                        { Icon: x, "aria-label": v, link: B, text: _ } = (0, u.Z)(E),
                        S = a.createElement(o.ZP, { "aria-label": v, color: g, id: s, numberOfLines: 2, size: f, testID: m, weight: b, withoutTwemojiAndHashflags: !0 }, _),
                        { cellStyle: Z, viewStyle: A } = this._getStyles();
                    return _ ? a.createElement(i.ZP.UseProps, null, (o) => a.createElement(a.Fragment, null, y || null, a.createElement(n.Z, { onLayout: c, style: [p, A, o.socialContextRefreshEnabled() && !w && h.socialContextRefresh] }, a.createElement(l.Z, { avatarCell: x || (w ? null : void 0), avatarCellStyle: [r, h.socialContextIconColumn, !w && h.unsetIconWidth, o.socialContextRefreshEnabled() && !w && h.socialContextRefreshIcon], avatarSize: e, cellStyle: Z }, a.createElement(n.Z, { style: h.cellWrapper }, a.createElement(n.Z, { style: [h.socialContextTextColumn, o.socialContextRefreshEnabled() && !w && h.socialContextRefreshTextColumn] }, B ? this._renderLink(B, S) : S), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: r, id: n, onClick: l, retweetData: i, textColor: s, topicData: u } = this.props,
                        { screenName: m } = i || {},
                        h = a.createElement(o.ZP, { color: s, id: n, link: e, onClick: l, withoutTwemojiAndHashflags: !0 }, t);
                    return r === p.Q.Topic && u ? a.createElement(c.Z, { topicId: u.topicId }, h) : r === p.Q.Retweet && m ? a.createElement(d.Z, { screenName: m }, h) : h;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: r, withTextCentered: a } = this.props,
                        n = t === p.Q.TextOnly,
                        o = r ? [h.bottomBorderMargin, !!e && h.bottomBorder] : [],
                        l = r && !e ? [h.bottomBorder] : [];
                    return n && l.push(h.topicContext), a && l.push(h.socialContextTextCentered), { viewStyle: o, cellStyle: l };
                }
            }
            m.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const h = s.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                g = m;
        },
        54606: (e, t, r) => {
            r.d(t, { Q: () => a });
            r(202784);
            const a = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(807896),
                n = r(202784),
                o = r(325686),
                l = r(215337),
                i = r(392237),
                s = r(977220);
            const c = (e) => `${e}%`,
                d = i.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: c(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: c(-80) }] } } } }));
            function u() {
                const e = (0, s.ai)();
                return n.createElement("defs", null, n.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: p, x1: "-9.62%", x2: "109.62%", y1: "82.19%", y2: "17.81%" }, n.createElement("stop", { stopColor: e.primary }), n.createElement("stop", { offset: "1.05", stopColor: e.secondary })));
            }
            const p = "space-gradient";
            u.fill = `url(#${p})`;
            const m = {
                    Default: function ({ children: e, style: t, type: r = "audiospace" }) {
                        return n.createElement(
                            l.Z,
                            (0, a.Z)(
                                {},
                                (function (e) {
                                    const t = (0, s.ai)(e);
                                    return { ...(0, s.Cs)(), colors: [t.primary, t.secondary], locations: [-0.1505, 1.0496] };
                                })(r),
                                { style: t },
                            ),
                            e,
                        );
                    },
                    Animated: function (e) {
                        return n.createElement(
                            o.Z,
                            { style: [d.container, e.style] },
                            n.createElement(
                                l.Z,
                                (0, a.Z)(
                                    {},
                                    (function () {
                                        const e = (0, s.ai)();
                                        return { ...(0, s.Cs)(), colors: [e.primary, e.secondary, e.primary, e.secondary, e.primary], locations: [0.16, 0.24, 0.54, 0.62, 0.88] };
                                    })(),
                                    { style: d.animate },
                                ),
                                e.children,
                            ),
                        );
                    },
                    SVGLinearGradient: u,
                    getColors: s.ai,
                    getDarkModeColors: s.K,
                },
                h = Object.freeze(m);
        },
        977220: (e, t, r) => {
            r.d(t, { Cs: () => d, K: () => i, ai: () => s });
            var a = r(465233),
                n = r(483054),
                o = r(295559),
                l = r(392237);
            function i(e = "audiospace") {
                return l.default.theme.highContrastEnabled ? p(u.HighContrast[e]) : p(u.Default[e]);
            }
            function s(e = "audiospace") {
                return l.default.theme.highContrastEnabled ? u.HighContrast[e] : u.Default[e];
            }
            const c = { angle: 61.63, angleUnit: "deg" };
            function d() {
                return (0, a.Z)(c);
            }
            const u = { Default: { audiospace: { primary: "#2D42FF", secondary: "#9C63FA" }, livevideo: { primary: "#F91880", secondary: "#F91880" } }, HighContrast: { audiospace: { primary: "#2C3CEF", secondary: "#8439FF" }, livevideo: { primary: "#890A46", secondary: "#890A46" } } };
            function p(e) {
                return { primary: m(e.primary), secondary: m(e.secondary) };
            }
            function m(e) {
                const t = o.xO(e),
                    r = n.$n({ color: t, coefficient: 0.5 });
                return o.vq(o.rb(r)).slice(0, -2);
            }
        },
        433460: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(807896),
                n = r(202784),
                o = r(325686),
                l = r(111677),
                i = r.n(l),
                s = r(404971),
                c = r(868634),
                d = r(336373),
                u = r(181054),
                p = r(392237),
                m = r(823161);
            const h = function (e) {
                const t = d.Z.useAnalytics(),
                    [r, o] = n.useState(),
                    l = !!(r && r > 70),
                    { "aria-label": i, presenceRingType: s, spaceId: c, ...p } = e,
                    h =
                        i ||
                        (function (e, t) {
                            switch (e) {
                                case "audiospace":
                                    return b.activeAudioSpace({ screenName: t });
                                case "livevideo":
                                    return b.activeLiveVideo({ screenName: t });
                                default:
                                    return;
                            }
                        })(s, e.screenName);
                n.useEffect(() => {
                    switch (s) {
                        case "audiospace":
                            t.scribe({ action: "impression", element: "audiospace_ring" });
                            break;
                        case "livevideo":
                            t.scribe({ action: "impression", element: "livevideo_ring" });
                    }
                }, [t, s]);
                const f = n.useCallback((e) => n.createElement(u.Z.Default, (0, a.Z)({}, e, { type: s })), [s]);
                return n.createElement(
                    m.default,
                    (0, a.Z)({}, p, {
                        BorderComponent: f,
                        "aria-label": h,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== r && o(t.width);
                            }
                        },
                        borderWidth: l ? "large" : "medium",
                        decoration: n.createElement(g, { isWide: l, type: s }),
                        gapWidth: l ? "space4" : "space2",
                        onClick: function () {
                            switch (s) {
                                case "audiospace":
                                    t.scribe({ action: "click", element: "audiospace_ring" });
                                    break;
                                case "livevideo":
                                    t.scribe({ action: "click", element: "livevideo_ring" });
                            }
                        },
                        withLink: !0,
                    }),
                );
            };
            function g(e) {
                switch (e.type) {
                    case "audiospace":
                    case "livevideo":
                        return n.createElement(f, e);
                    default:
                        return null;
                }
            }
            function f(e) {
                return "livevideo" === e.type ? n.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [y.liveVideoLabelContainer, y.borderNarrow, e.isWide ? y.liveVideoLabel : y.liveVideoLabelNarrow], type: "live" }) : n.createElement(o.Z, { style: [y.root, e.isWide ? y.rootWide : y.rootNarrow] }, n.createElement(u.Z.Default, { style: [y.spaceGradient, e.isWide ? y.borderWide : y.borderNarrow] }, n.createElement(s.default, { style: y.spaceIcon })));
            }
            const y = p.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        r = "100%",
                        a = e.spacesPx.space4,
                        n = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * a, bottom: -1 * a }, rootNarrow: { end: -1 * n, bottom: -1 * n }, borderWide: { borderWidth: a }, borderNarrow: { borderWidth: n }, spaceGradient: { justifyContent: "center", width: r, height: r, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                b = { withoutUsernameFallback: i().b3688156, activeAudioSpace: i().c0eb8825, activeLiveVideo: i().d068dc6d };
        },
        238406: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(202784),
                n = r(731708),
                o = r(354149),
                l = r(310452),
                i = r(720283);
            const s = ({ animateIn: e, description: t, entities: r, isConcise: s, style: c, testID: d, userId: u, withheldDescription: p, withheldEntities: m }) => {
                const { description: h, entities: g } = (0, i.H)({ description: t, entities: r, withheldDescription: p, withheldEntities: m }),
                    f = l.ZP.descriptionTextParts(h, g);
                return f.length
                    ? a.createElement(
                          n.ZP,
                          { dir: "auto", numberOfLines: s ? 2 : void 0, style: c, testID: d },
                          f.map((t, r) => a.createElement(o.ZP, { animateIn: e, key: `user_${u}_textpart_${r}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, r) => {
            r.d(t, { H: () => a });
            const a = ({ description: e, entities: t, withheldDescription: r, withheldEntities: a }) => (r ? { description: r, entities: a } : { description: e, entities: t });
        },
        748138: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                n = r(890601),
                o = r(783427),
                l = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.MultiAccount.283af2aa.js.map
