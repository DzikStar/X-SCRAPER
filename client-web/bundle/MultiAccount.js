"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.MultiAccount"],
    {
        929446: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = {
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
            const r = n;
        },
        625661: (e, t, a) => {
            a.d(t, { ZP: () => p });
            var n = a(202784),
                r = a(614983),
                o = a.n(r),
                l = a(325686),
                i = a(370006),
                s = a(786998),
                c = a(929028),
                d = a(386802);
            function u(e, t, a) {
                return e || (!t && a ? "fixed" : void 0);
            }
            class p extends n.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: a, fixed: r, hideBackButton: o, isFullWidth: l, isLarge: c, leftControl: d, middleControl: p, position: h, rightControl: m, secondaryBar: g, style: f, subtitle: b, title: y, titleDomId: C, titleIconCell: k, titleIconCellSize: _, withBackground: B, withWideContainer: w } = this.props,
                        { isModal: S } = this.context,
                        E = o ? d : n.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        A = (function (e, t, a) {
                            return e && !(t && a);
                        })(!!B, S, !!g);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { centerTitle: t, centeredLogo: a, isFullWidth: l, isLarge: c, leftControl: E, middleControl: p, position: u(h, S, r), rightControl: m, style: f, subtitle: b, title: y, titleDomId: C, titleIconCell: k, titleIconCellSize: _, withBackground: A, withWideContainer: w }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        a = c.Z.getBackgroundStyles();
                    return t ? n.createElement(l.Z, { style: !!e && a }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        947135: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(202784),
                r = a(242454),
                o = a(190286);
            class l extends n.Component {
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
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: a, confirmationSheetConfirmButtonType: l, confirmationSheetHeadline: i, confirmationSheetText: s, label: c } = this.props;
                    return n.createElement(n.Fragment, null, n.createElement(r.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? n.createElement(o.Z, { confirmButtonLabel: a, confirmButtonType: l, headline: i, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: s }) : null);
                }
            }
            l.defaultProps = { color: "red500", align: "center" };
        },
        290402: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(807896),
                r = a(202784),
                o = a(182056),
                l = a(879113),
                i = a(392237),
                s = a(111677),
                c = a.n(s),
                d = a(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, a) => {
                    const i = o.Z.isOnline();
                    return r.createElement(l.Z, (0, n.Z)({}, t, { icon: i ? void 0 : r.createElement(d.default, { style: h.icon }), retryMessage: i ? e : u }));
                },
                h = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = r.forwardRef(p);
        },
        980407: (e, t, a) => {
            a.d(t, { Z: () => g, w: () => h });
            var n = a(202784),
                r = a(325686),
                o = a(108362),
                l = a(386802),
                i = a(392237),
                s = a(652904),
                c = a(555079),
                d = a(625661),
                u = a(449067),
                p = a(715601);
            class h extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: a, backLocation: o, centerTitle: l, hideBackButton: i, history: s, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: g, rightControl: f, secondaryBar: b, subtitle: y, title: C } = this.props,
                                { isModal: k } = this.context;
                            return n.createElement(r.Z, { style: k ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, n.createElement(d.ZP, { backButtonType: a || (k ? "close" : "back"), backLocation: o, centerTitle: l, fixed: !k, hideBackButton: i, history: s, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: g, ref: e, rightControl: f, secondaryBar: b, style: [k && m.appBarModal, t], subtitle: y, title: C, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: a } = this.context;
                            t && (a ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: a, containerStyle: l, documentTitle: i, isFullWidth: c, isLarge: d, renderHeader: h, title: g, withoutBottomBarMobile: f } = this.props,
                        { isModal: b } = this.context,
                        y = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(s.Z, null, n.createElement(u.Z.Configure, { documentTitle: i, headerless: !0, title: g }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, b && m.rootModal] }, !b && y, n.createElement(o.Z, { isFullWidth: c, isLarge: d, style: [m.container, b && m.containerModal, l] }, b ? n.createElement(p.Z, { style: m.viewport }, y, a) : a), t ? n.createElement(r.Z, { style: [m.bottomBarModal, !b && !f && m.bottomBarMobile] }, n.createElement(o.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = l.Z);
            const m = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = h;
        },
        229412: (e, t, a) => {
            a.d(t, { a: () => W });
            a(136728);
            var n = a(202784),
                r = a(325686),
                o = a(530732),
                l = a(310088),
                i = a(731708),
                s = a(673510),
                c = a(661810),
                d = a(392237),
                u = a(111677),
                p = a.n(u),
                h = a(297896),
                m = a(293723),
                g = a(58399),
                f = a(913973),
                b = a(516951),
                y = a(725516),
                C = a(125363),
                k = a(806960);
            const _ = p().h6beb5fb,
                B = p().d86bbf0f,
                w = d.default.create((e) => ({ notificationBadge: { paddingHorizontal: e.spaces.space4 } })),
                S = ({ notificationCount: e = 0 }) => (e > 0 ? n.createElement(l.Z, { count: e, style: e > 9 && w.notificationBadge, truncatedCountFormatter: _, unreadCountLabel: B }) : null);
            var E = a(110512),
                A = a(642153),
                Z = a(899667),
                v = a(487552),
                x = a(390387);
            const L = p().c61eea74,
                U = p().b7dc3885,
                F = p().d86bbf0f,
                T = p().h6beb5fb,
                M = ({ accountUsers: e, activeUser: t, handleMultiAccountSwitch: a, isUpdatedManageAccounts: o, renderUserDecoration: d, userTestId: u, withBadges: p }) => {
                    const h = (0, C.v9)(x.BP),
                        m = !0,
                        [g, f] = n.useState(!1),
                        b = n.useMemo(() => e.filter((e) => e.user_id !== t?.id_str), [e, t]),
                        y = n.useMemo(() => b.reduce((e, t) => e + (t.badgeCount || 0), 0), [b]),
                        k = n.useCallback(() => {
                            f(!g);
                        }, [g]),
                        _ = n.useMemo(() => (h && h > 0 ? n.createElement(r.Z, { onClick: k, style: I.personalAccountsLabel }, n.createElement(i.ZP, { color: "gray700", weight: "bold" }, L), g ? n.createElement(Z.default, { style: I.IconChevronUp }) : n.createElement(v.default, { style: I.IconChevronDown })) : null), [m, h, k, g]),
                        B = n.useMemo(
                            () =>
                                b.map((e) => {
                                    const t = e.badgeCount ?? 0;
                                    return n.createElement(n.Fragment, { key: e.user_id }, n.createElement(s.ZP, { affiliateBadgeInfo: e.highlighted_label, "aria-label": U({ screenName: e.screen_name }), avatarDecoration: o && n.createElement(S, { notificationCount: t }), avatarUri: e.avatar_image_url, badgeContext: "account", decoration: d({ badgeCount: t, withBadges: p, isActiveUser: !1 }), displayMode: "UserCompact", isBlueVerified: e.is_blue_verified, isProtected: e.is_protected, isVerified: e.is_verified, name: e.name, onCellClick: a({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }), screenName: e.screen_name, testID: u, userId: e.user_id, verifiedType: e.verified_type, withLink: !1 }), o && n.createElement(c.Z, { style: I.accountDivider }));
                                }),
                            [a, b, d, u, p, o],
                        ),
                        w = n.useMemo(() => n.createElement(r.Z, { style: I.facePileContainer }, n.createElement(A.Z, { userAvatarSize: "large", userAvatarUrls: b.map((e) => e.avatar_image_url) }), y > 0 ? n.createElement(l.Z, { count: y, standalone: !0, truncatedCountFormatter: T, unreadCountLabel: F }) : null), [b, y]);
                    return b.length > 0 ? n.createElement(n.Fragment, null, !o && _, o || g || void 0 === h || 0 === h ? B : w) : null;
                },
                I = d.default.create((e) => ({ personalAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                D = n.memo(M);
            var P = a(22132);
            const R = p().c61eea74,
                H = p().d86bbf0f,
                K = p().h6beb5fb;
            function W(e) {
                const { accountSwitch: t, accountUsers: a, activeUser: d, clearDelegateUser: u, delegateAccountCount: p, delegateUser: _, isDelegateEnabled: B, isUpdatedManageAccounts: w, onDelegateSwitch: A, onUserSwitch: Z, userTestId: v, withBadges: x = !1 } = e,
                    L = !!_,
                    U = a.some((e) => e.user_id === d.id_str) || (p && p > 0) || L,
                    F = n.useCallback(() => {
                        u && u();
                    }, [u]),
                    T = n.useCallback(
                        ({ hasBadge: e, isProtected: a, userId: n }) =>
                            () => {
                                t({ hasBadge: e, isProtected: a, userId: n }), Z?.();
                            },
                        [t, Z],
                    ),
                    M = (0, C.v9)(k.pm),
                    I = (0, C.v9)(k.QA),
                    W = (0, y.z)(),
                    N = n.useCallback(
                        ({ isActiveUser: e, isLoggedInUser: t }) => {
                            const a = [];
                            return (
                                t &&
                                    a.push(
                                        n.createElement(
                                            o.Z,
                                            {
                                                link: "/logout",
                                                onClick: () => {
                                                    W.scribe({ action: "click", element: "log_out" });
                                                },
                                                testID: P.Z.logout,
                                                withoutInteractiveStyles: !0,
                                            },
                                            n.createElement(h.default, { style: z.IconExiting }),
                                        ),
                                    ),
                                a.push(e ? n.createElement(m.default, { style: z.updatedIconCheckmarkCircleFill }) : n.createElement(g.default, { style: z.IconChevronRight })),
                                n.createElement(
                                    r.Z,
                                    { style: z.decorationsContainer },
                                    a.map((e, t) => n.createElement(n.Fragment, { key: t }, e)),
                                )
                            );
                        },
                        [W],
                    ),
                    V = n.useCallback(({ badgeCount: e, isActiveUser: t, withBadges: a }) => (t ? (B ? n.createElement(m.default, { style: [z.IconCheckmarkCircleFill, z.userDecoration] }) : n.createElement(f.default, { style: [z.iconCheckMark, z.userDecoration] })) : e && a ? n.createElement(l.Z, { count: e, standalone: !0, style: z.userDecoration, truncatedCountFormatter: K, unreadCountLabel: H }) : void 0), [B]),
                    G = n.useMemo(() => (w ? N : V), [w, V, N]),
                    q = n.useMemo(() => n.createElement(E.ZP, { activeUserId: d.id_str, delegateUser: _, isUpdatedManageAccounts: w, key: 0, onDelegateSwitch: A ?? b.Z, renderUserDecoration: G }), [d.id_str, _, w, A, G]),
                    O = n.useMemo(() => n.createElement(D, { accountUsers: a, activeUser: d, handleMultiAccountSwitch: T, isUpdatedManageAccounts: !!w, key: 1, renderUserDecoration: G, userTestId: v, withBadges: x }), [a, d, T, w, G, v, x]),
                    j = [];
                return !w && B && j.push(q), j.push(O), w && B && j.push(q), n.createElement(n.Fragment, null, w && B && n.createElement(r.Z, { style: z.personalAccountsLabel }, n.createElement(i.ZP, { color: "gray700", weight: "bold" }, R)), U ? n.createElement(n.Fragment, null, n.createElement(s.ZP, { affiliateBadgeInfo: d.highlightedLabel, avatarDecoration: w && n.createElement(S, { notificationCount: M + I }), avatarUri: d.profile_image_url_https, badgeContext: "account", decoration: G({ withBadges: x, isActiveUser: !_, isLoggedInUser: !0 }), displayMode: "UserCompact", isBlueVerified: d.is_blue_verified, isProtected: d.protected, isVerified: d.verified, name: d.name, onCellClick: L ? F : void 0, screenName: d.screen_name, testID: v, userId: d.id_str, verifiedType: d.verified_type, withLink: !1 }), w && n.createElement(c.Z, { style: z.accountDivider })) : null, j, !w && (U || p || a.length) ? n.createElement(c.Z, { spacing: "space12" }) : null);
            }
            const z = d.default.create((e) => ({ iconCheckMark: { color: e.colors.primary, flexShrink: 0 }, IconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, marginEnd: e.spaces.space8 }, updatedIconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconExiting: { color: e.colors.red500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconChevronRight: { color: "inherit", flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, decorationsContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, userDecoration: { marginStart: e.spaces.space12 }, personalAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 } }));
        },
        22132: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { accountSwitcher: "SideNav_AccountSwitcher_Button", addAccount: "AccountSwitcher_AddAccount_Button", logout: "AccountSwitcher_Logout_Button", manageAccounts: "AccountSwitcher_ManageAccounts_Button" };
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                r = a(500002),
                o = a(668214),
                l = a(997174),
                i = a(118823);
            const s = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: o, search: l },
                            locationKey: i,
                        } = e;
                    let s = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (s = !0));
                    const c = r || i;
                    ((c && r !== i) || (!c && a !== o) || n !== l || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(s(c));
        },
        366273: (e, t, a) => {
            a.r(t), a.d(t, { MultiAccountScreen: () => J, default: () => Y });
            a(136728);
            var n = a(202784),
                r = a(325686),
                o = a(688715),
                l = a(731708),
                i = a(154003),
                s = a(242454),
                c = a(420412),
                d = a(310088),
                u = a(392237),
                p = a(111677),
                h = a.n(p),
                m = a(913973),
                g = a(947135),
                f = a(290402),
                b = a(980407),
                y = a(229412),
                C = a(443781),
                k = a(380155),
                _ = a(312771),
                B = a(71620),
                w = a(668214),
                S = a(454319),
                E = a(956817),
                A = a(24546),
                Z = a(390387),
                v = a(680997),
                x = a(919022);
            const L = (0, w.Z)()
                    .propsFromState(() => ({ delegateAccountCount: Z.BP, delegateUser: Z.sy, loggedInUser: x.ZP.selectLoggedInUser, fetchStatus: S.UD, users: S.pc }))
                    .propsFromActions(() => ({ clearDelegateUser: Z.YJ, fetchMultiAccountListIfNeeded: S.s2, createLocalApiErrorHandler: (0, B.zr)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"), logout: v.Z, logoutAll: v.d, sendAllPreviews: A.MH, switchAccount: E.y }))
                    .withAnalytics({ page: "account_switcher" }),
                U = "AccountSwitcher_Add_Button",
                F = "AccountSwitcher_Switch_Button",
                T = h().b8e1d524,
                M = h().e69b7e02,
                I = h().j0a8da6e,
                D = h().b6bd6ae4,
                P = h().d577bccd,
                R = h().dc65b3e5,
                H = h().b8045b33,
                K = h().d075dc89,
                W = h().i859a9d4,
                z = (0, o.ju)("https://help.x.com/managing-your-account/managing-multiple-twitter-accounts"),
                N = h().ae1bbb26,
                V = h().bade139e,
                G = h().ae33b982,
                q = h().fa07bf68,
                O = h().d86bbf0f,
                j = h().h6beb5fb;
            class J extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { spinner: !1 }),
                        (this._render = () => n.createElement(n.Fragment, null, this._renderUsers(), this.isUpdatedManageAccounts ? this._updatedRenderActions() : this._renderActions())),
                        (this._updatedRenderActions = () => {
                            const e = this.context.featureSwitches.getNumberValue("responsive_web_multiple_account_limit", 5),
                                { delegateAccountCount: t, users: a } = this.props,
                                o = a.length >= e;
                            return n.createElement(n.Fragment, null, o ? n.createElement(r.Z, { style: [Q.whiteBackground, Q.infoText, Q.updatedAccountLimitText] }, n.createElement(l.ZP, { align: "center", color: "gray700" }, (t ? K : H)({ maxAccounts: e }), " ")) : n.createElement(i.ZP, { onPress: this._handleAddAccount, style: Q.updatedAddAccountButton, testID: U }, n.createElement(l.ZP, { color: "buttonBlack", weight: "normal" }, I)), n.createElement(r.Z, { style: Q.updatedLogoutAllButtonWrapper }, n.createElement(g.Z, { color: "red500", confirmationSheetConfirmButtonLabel: N, confirmationSheetConfirmButtonType: "primary", confirmationSheetHeadline: G, confirmationSheetText: q, key: "logoutAllButton", label: V, onConfirmationSheetConfirm: this._handleLogoutAll, withBottomBorder: !1 })));
                        }),
                        (this._renderActions = () => {
                            const e = this.context.featureSwitches.getNumberValue("responsive_web_multiple_account_limit", 5),
                                { users: t } = this.props,
                                a = t.length >= e;
                            return n.createElement(n.Fragment, null, n.createElement(s.Z, { align: "left", color: "primary", disabled: a, label: I, onPress: this._handleAddAccount, testID: U }), n.createElement(r.Z, { style: [Q.whiteBackground, Q.infoText] }, n.createElement(l.ZP, { color: "gray700" }, (a ? R : P)({ maxAccounts: e }), " ", n.createElement(l.ZP, { link: z }, W))), n.createElement(c.Z, null), n.createElement(g.Z, { color: "red500", confirmationSheetConfirmButtonLabel: N, confirmationSheetConfirmButtonType: "primary", confirmationSheetHeadline: G, confirmationSheetText: q, key: "logoutAllButton", label: V, onConfirmationSheetConfirm: this._handleLogoutAll, withBottomBorder: !1 }));
                        }),
                        (this._renderUsers = () => {
                            const { clearDelegateUser: e, delegateAccountCount: t, delegateUser: a, loggedInUser: r, users: o, withBadges: l = !1 } = this.props;
                            if (!r) return null;
                            const i = { accountSwitch: this._handleSwitchAccount, accountUsers: o, activeUser: r, clearDelegateUser: e, delegateAccountCount: t, delegateUser: a, isDelegateEnabled: !0, userTestId: F, withBadges: l, isUpdatedManageAccounts: this.isUpdatedManageAccounts };
                            return n.createElement(y.a, i);
                        }),
                        (this._renderCurrentUserCheckmark = () => n.createElement(m.default, { "aria-label": D, style: Q.iconCheckMark })),
                        (this._renderBadge = (e) => (e ? n.createElement(r.Z, null, n.createElement(d.Z, { count: e, standalone: !0, truncatedCountFormatter: j, unreadCountLabel: O })) : null)),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchMultiAccountListIfNeeded: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleAddAccount = () => {
                            const { analytics: e, history: t } = this.props;
                            e.scribe({ element: "sign_in", action: "click" }), t.push("/i/flow/login");
                        }),
                        (this._handleSwitchAccount = ({ hasBadge: e, userId: t }) => {
                            const { analytics: a, createLocalApiErrorHandler: n, switchAccount: r } = this.props;
                            this.setState({ spinner: !0 }), a.scribe({ element: e ? "account_bubble_badged" : "account_bubble", action: "click" }), r({ user_id: t }).catch((e) => (this.setState({ spinner: !1 }), n(k.y)(e)));
                        }),
                        (this._handleLogoutAll = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, logoutAll: a, sendAllPreviews: n } = this.props;
                            this.setState({ spinner: !0 }),
                                e.scribe({ element: "logout_all", action: "click" }),
                                n().finally(() => {
                                    a().catch((e) => (this.setState({ spinner: !1 }), t()(e)));
                                });
                        });
                }
                componentDidMount() {
                    const { fetchMultiAccountListIfNeeded: e } = this.props;
                    e();
                }
                render() {
                    const { fetchStatus: e, history: t } = this.props,
                        { spinner: a } = this.state,
                        r = this.context.featureSwitches.isTrue("rweb_sourcemap_migration");
                    return (this.isUpdatedManageAccounts = r && this.context.featureSwitches.isTrue("rweb_sourcemap_migration_updated_manage_accounts")), n.createElement(b.Z, { appBarStyle: this.isUpdatedManageAccounts && Q.updatedAppBarStyle, containerStyle: this.isUpdatedManageAccounts && Q.updatedModalStyle, history: t, title: this.isUpdatedManageAccounts ? M : T }, n.createElement(f.Z, { fetchStatus: a ? _.ZP.LOADING : e, onRequestRetry: this._handleFetch, render: this._render }));
                }
            }
            J.contextType = C.rC;
            const Q = u.default.create((e) => ({ iconCheckMark: { color: e.colors.primary, fontSize: "1.2em" }, infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, whiteBackground: { backgroundColor: e.colors.cellBackground }, updatedAddAccountButton: { margin: e.spaces.space16, marginBottom: 0, padding: e.spaces.space12, borderRadius: e.spaces.space12, backgroundColor: e.colors.gray0, border: "none" }, updatedAccountLimitText: { paddingBottom: 0 }, updatedLogoutAllButtonWrapper: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space24, borderRadius: e.spaces.space12, overflow: "hidden" }, updatedModalStyle: { paddingHorizontal: e.spaces.space8, height: "auto" }, updatedAppBarStyle: { paddingTop: e.spaces.space8 } })),
                Y = L(J);
        },
        242454: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(807896),
                r = a(202784),
                o = a(325686),
                l = a(731708),
                i = a(58881),
                s = a(530732),
                c = a(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: a, ...u }) => {
                    const p = i.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return r.createElement(o.Z, { style: d.container }, r.createElement(s.Z, (0, n.Z)({}, u, { interactiveStyles: p, style: d.root }), r.createElement(l.ZP, { align: e, color: t }, a)));
                };
        },
        879113: (e, t, a) => {
            a.d(t, { Z: () => h });
            var n = a(202784),
                r = a(476984),
                o = a.n(r),
                l = a(143778),
                i = a(750410),
                s = a(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class h extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        a = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !a) || !o()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: a, fetchStatus: r, icon: o, loadingMessage: l, onRequestRetry: d, render: h, renderFailure: m, retryMessage: g, retryable: f } = this.props;
                    switch (r) {
                        case c:
                            return f ? n.createElement(i.Z, { icon: o, onRequestRetry: d, retryMessage: g }) : a ? n.createElement(s.m, { failureMessage: a }) : m();
                        case u:
                            return n.createElement(s.J, { "aria-label": e, color: t, loadingMessage: l });
                        case p:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: l.Z, retryable: !0 };
        },
        420412: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(202784),
                r = a(325686),
                o = a(235902),
                l = a(885015),
                i = a(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: a }) {
                const { isWebRedesign: s } = o.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return a ? n.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, n.createElement(r.Z, { style: c.gapColumn }, n.createElement(r.Z, { style: [c.gap, d] })), n.createElement(r.Z, { style: c.gapText }, a), n.createElement(r.Z, { style: c.gapColumn }, n.createElement(r.Z, { style: [c.gap, d] }))) : n.createElement(r.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(807896),
                r = a(202784),
                o = a(325686),
                l = a(392237);
            class i extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: a, ...l } = this.props,
                        i = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, s.column, a && s.withGutterColumn] }));
                    return r.createElement(o.Z, (0, n.Z)({ style: [t, s.root, a && s.withGutter] }, l), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.MultiAccount.a9bd158a.js.map
