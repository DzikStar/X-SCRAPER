"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.MultiAccount"],
    {
        929446: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = {
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
            const n = o;
        },
        625661: (e, t, r) => {
            r.d(t, { ZP: () => p });
            var o = r(202784),
                n = r(614983),
                a = r.n(n),
                l = r(325686),
                i = r(370006),
                s = r(786998),
                c = r(929028),
                d = r(386802);
            function u(e, t, r) {
                return e || (!t && r ? "fixed" : void 0);
            }
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            a()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: r, fixed: n, hideBackButton: a, isFullWidth: l, isLarge: c, leftControl: d, middleControl: p, position: m, rightControl: h, secondaryBar: g, style: f, subtitle: y, title: b, titleDomId: C, titleIconCell: w, titleIconCellSize: k, withBackground: x, withWideContainer: E } = this.props,
                        { isModal: B } = this.context,
                        S = a ? d : o.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        v = (function (e, t, r) {
                            return e && !(t && r);
                        })(!!x, B, !!g);
                    return o.createElement(o.Fragment, null, o.createElement(s.Z, { centerTitle: t, centeredLogo: r, isFullWidth: l, isLarge: c, leftControl: S, middleControl: p, position: u(m, B, n), rightControl: h, style: f, subtitle: y, title: b, titleDomId: C, titleIconCell: w, titleIconCellSize: k, withBackground: v, withWideContainer: E }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        r = c.Z.getBackgroundStyles();
                    return t ? o.createElement(l.Z, { style: !!e && r }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        947135: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                n = r(242454),
                a = r(190286);
            class l extends o.Component {
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
                    return o.createElement(o.Fragment, null, o.createElement(n.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? o.createElement(a.Z, { confirmButtonLabel: r, confirmButtonType: l, headline: i, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: s }) : null);
                }
            }
            l.defaultProps = { color: "red500", align: "center" };
        },
        290402: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(807896),
                n = r(202784),
                a = r(182056),
                l = r(879113),
                i = r(392237),
                s = r(111677),
                c = r.n(s),
                d = r(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, r) => {
                    const i = a.Z.isOnline();
                    return n.createElement(l.Z, (0, o.Z)({}, t, { icon: i ? void 0 : n.createElement(d.default, { style: m.icon }), retryMessage: i ? e : u }));
                },
                m = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                h = n.forwardRef(p);
        },
        980407: (e, t, r) => {
            r.d(t, { Z: () => g, w: () => m });
            var o = r(202784),
                n = r(325686),
                a = r(108362),
                l = r(386802),
                i = r(392237),
                s = r(652904),
                c = r(555079),
                d = r(625661),
                u = r(449067),
                p = r(715601);
            class m extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: r, backLocation: a, centerTitle: l, hideBackButton: i, history: s, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: g, rightControl: f, secondaryBar: y, subtitle: b, title: C } = this.props,
                                { isModal: w } = this.context;
                            return o.createElement(n.Z, { style: w ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, o.createElement(d.ZP, { backButtonType: r || (w ? "close" : "back"), backLocation: a, centerTitle: l, fixed: !w, hideBackButton: i, history: s, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: g, ref: e, rightControl: f, secondaryBar: y, style: [w && h.appBarModal, t], subtitle: b, title: C, titleDomId: c.Q_ }));
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
                    return o.createElement(s.Z, null, o.createElement(u.Z.Configure, { documentTitle: i, headerless: !0, title: g }), o.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, y && h.rootModal] }, !y && b, o.createElement(a.Z, { isFullWidth: c, isLarge: d, style: [h.container, y && h.containerModal, l] }, y ? o.createElement(p.Z, { style: h.viewport }, b, r) : r), t ? o.createElement(n.Z, { style: [h.bottomBarModal, !y && !f && h.bottomBarMobile] }, o.createElement(a.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = l.Z);
            const h = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = m;
        },
        652904: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(202784),
                n = r(500002),
                a = r(668214),
                l = r(997174),
                i = r(118823);
            const s = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class c extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: r, search: o },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: a, search: l },
                            locationKey: i,
                        } = e;
                    let s = !1;
                    t.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && t.pathname === r && ((this._isInBackground = !1), (s = !0));
                    const c = n || i;
                    ((c && n !== i) || (!c && r !== a) || o !== l || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: r, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), r(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, n.ZP)(s(c));
        },
        366273: (e, t, r) => {
            r.r(t), r.d(t, { MultiAccountScreen: () => $, default: () => X });
            r(136728);
            var o = r(202784),
                n = r(325686),
                a = r(688715),
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
                x = r(71620),
                E = r(668214),
                B = r(454319),
                S = r(956817),
                v = r(24546),
                _ = r(390387),
                Z = r(680997),
                T = r(919022);
            const L = (0, E.Z)()
                    .propsFromState(() => ({ delegateAccountCount: _.BP, delegateUser: _.sy, loggedInUser: T.ZP.selectLoggedInUser, fetchStatus: B.UD, users: B.pc }))
                    .propsFromActions(() => ({ clearDelegateUser: _.YJ, fetchMultiAccountListIfNeeded: B.s2, createLocalApiErrorHandler: (0, x.zr)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"), logout: Z.Z, logoutAll: Z.d, sendAllPreviews: v.MH, switchAccount: S.y }))
                    .withAnalytics({ page: "account_switcher" }),
                A = "AccountSwitcher_Add_Button",
                F = "AccountSwitcher_Switch_Button",
                P = m().b8e1d524,
                R = m().e69b7e02,
                I = m().j0a8da6e,
                U = m().b6bd6ae4,
                M = m().d577bccd,
                D = m().dc65b3e5,
                H = m().b8045b33,
                W = m().d075dc89,
                z = m().i859a9d4,
                N = (0, a.ju)("https://help.x.com/managing-your-account/managing-multiple-twitter-accounts"),
                Q = m().ae1bbb26,
                K = m().bade139e,
                V = m().ae33b982,
                G = m().fa07bf68,
                O = m().d86bbf0f,
                j = m().h6beb5fb;
            class $ extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { spinner: !1 }),
                        (this._render = () => o.createElement(o.Fragment, null, this._renderUsers(), this.isUpdatedManageAccounts ? this._updatedRenderActions() : this._renderActions())),
                        (this._updatedRenderActions = () => {
                            const e = this.context.featureSwitches.getNumberValue("responsive_web_multiple_account_limit", 5),
                                { delegateAccountCount: t, users: r } = this.props,
                                a = r.length >= e;
                            return o.createElement(o.Fragment, null, a ? o.createElement(n.Z, { style: [q.whiteBackground, q.infoText, q.updatedAccountLimitText] }, o.createElement(l.ZP, { align: "center", color: "gray700" }, (t ? W : H)({ maxAccounts: e }), " ")) : o.createElement(i.ZP, { onPress: this._handleAddAccount, style: q.updatedAddAccountButton, testID: A }, o.createElement(l.ZP, { color: "buttonBlack", weight: "normal" }, I)), o.createElement(n.Z, { style: q.updatedLogoutAllButtonWrapper }, o.createElement(g.Z, { color: "red500", confirmationSheetConfirmButtonLabel: Q, confirmationSheetConfirmButtonType: "primary", confirmationSheetHeadline: V, confirmationSheetText: G, key: "logoutAllButton", label: K, onConfirmationSheetConfirm: this._handleLogoutAll, withBottomBorder: !1 })));
                        }),
                        (this._renderActions = () => {
                            const e = this.context.featureSwitches.getNumberValue("responsive_web_multiple_account_limit", 5),
                                { users: t } = this.props,
                                r = t.length >= e;
                            return o.createElement(o.Fragment, null, o.createElement(s.Z, { align: "left", color: "primary", disabled: r, label: I, onPress: this._handleAddAccount, testID: A }), o.createElement(n.Z, { style: [q.whiteBackground, q.infoText] }, o.createElement(l.ZP, { color: "gray700" }, (r ? D : M)({ maxAccounts: e }), " ", o.createElement(l.ZP, { link: N }, z))), o.createElement(c.Z, null), o.createElement(g.Z, { color: "red500", confirmationSheetConfirmButtonLabel: Q, confirmationSheetConfirmButtonType: "primary", confirmationSheetHeadline: V, confirmationSheetText: G, key: "logoutAllButton", label: K, onConfirmationSheetConfirm: this._handleLogoutAll, withBottomBorder: !1 }));
                        }),
                        (this._renderUsers = () => {
                            const { clearDelegateUser: e, delegateAccountCount: t, delegateUser: r, loggedInUser: n, users: a, withBadges: l = !1 } = this.props;
                            if (!n) return null;
                            const i = { accountSwitch: this._handleSwitchAccount, accountUsers: a, activeUser: n, clearDelegateUser: e, delegateAccountCount: t, delegateUser: r, isDelegateEnabled: !0, userTestId: F, withBadges: l, isUpdatedManageAccounts: this.isUpdatedManageAccounts };
                            return o.createElement(b.a, i);
                        }),
                        (this._renderCurrentUserCheckmark = () => o.createElement(h.default, { "aria-label": U, style: q.iconCheckMark })),
                        (this._renderBadge = (e) => (e ? o.createElement(n.Z, null, o.createElement(d.Z, { count: e, standalone: !0, truncatedCountFormatter: j, unreadCountLabel: O })) : null)),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchMultiAccountListIfNeeded: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleAddAccount = () => {
                            const { analytics: e, history: t } = this.props;
                            e.scribe({ element: "sign_in", action: "click" }), t.push("/i/flow/login");
                        }),
                        (this._handleSwitchAccount = ({ hasBadge: e, userId: t }) => {
                            const { analytics: r, createLocalApiErrorHandler: o, switchAccount: n } = this.props;
                            this.setState({ spinner: !0 }), r.scribe({ element: e ? "account_bubble_badged" : "account_bubble", action: "click" }), n({ user_id: t }).catch((e) => (this.setState({ spinner: !1 }), o(w.y)(e)));
                        }),
                        (this._handleLogoutAll = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, logoutAll: r, sendAllPreviews: o } = this.props;
                            this.setState({ spinner: !0 }),
                                e.scribe({ element: "logout_all", action: "click" }),
                                o().finally(() => {
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
                    return (this.isUpdatedManageAccounts = n && this.context.featureSwitches.isTrue("rweb_sourcemap_migration_updated_manage_accounts")), o.createElement(y.Z, { appBarStyle: this.isUpdatedManageAccounts && q.updatedAppBarStyle, containerStyle: this.isUpdatedManageAccounts && q.updatedModalStyle, history: t, title: this.isUpdatedManageAccounts ? R : P }, o.createElement(f.Z, { fetchStatus: r ? k.ZP.LOADING : e, onRequestRetry: this._handleFetch, render: this._render }));
                }
            }
            $.contextType = C.rC;
            const q = u.default.create((e) => ({ iconCheckMark: { color: e.colors.primary, fontSize: "1.2em" }, infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, whiteBackground: { backgroundColor: e.colors.cellBackground }, updatedAddAccountButton: { margin: e.spaces.space16, marginBottom: 0, padding: e.spaces.space12, borderRadius: e.spaces.space12, backgroundColor: e.colors.gray0, border: "none" }, updatedAccountLimitText: { paddingBottom: 0 }, updatedLogoutAllButtonWrapper: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space24, borderRadius: e.spaces.space12, overflow: "hidden" }, updatedModalStyle: { paddingHorizontal: e.spaces.space8, height: "auto" }, updatedAppBarStyle: { paddingTop: e.spaces.space8 } })),
                X = L($);
        },
        242454: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(807896),
                n = r(202784),
                a = r(325686),
                l = r(731708),
                i = r(58881),
                s = r(530732),
                c = r(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: r, ...u }) => {
                    const p = i.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return n.createElement(a.Z, { style: d.container }, n.createElement(s.Z, (0, o.Z)({}, u, { interactiveStyles: p, style: d.root }), n.createElement(l.ZP, { align: e, color: t }, r)));
                };
        },
        642153: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(202784),
                n = r(325686),
                a = r(392237),
                l = r(823161);
            const i = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: r = "small", style: i, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: u } = e,
                        p = d.length,
                        m = "transparent" === t;
                    return o.createElement(
                        n.Z,
                        { style: [s.root, i, { height: l.default.getSizeStyle(c)?.height }] },
                        d.map((e, n) => o.createElement(l.default, { backgroundColor: t, borderColor: t, borderWidth: m ? "none" : r, key: n, size: c, style: [0 !== n && { marginStart: -1 * a.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: p - n }], uri: e })),
                    );
                },
                s = a.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                n = r(325686),
                a = r(235902),
                l = r(885015),
                i = r(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: s } = a.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return r ? o.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, o.createElement(n.Z, { style: c.gapColumn }, o.createElement(n.Z, { style: [c.gap, d] })), o.createElement(n.Z, { style: c.gapText }, r), o.createElement(n.Z, { style: c.gapColumn }, o.createElement(n.Z, { style: [c.gap, d] }))) : o.createElement(n.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(807896),
                n = r(202784),
                a = r(325686),
                l = r(392237);
            class i extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...l } = this.props,
                        i = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, s.column, r && s.withGutterColumn] }));
                    return n.createElement(a.Z, (0, o.Z)({ style: [t, s.root, r && s.withGutter] }, l), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        215337: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                n = r(325686);
            class a extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, r) => {
                                    const o = t[r];
                                    let n = "";
                                    return o && (n = ` ${100 * o}%`), e + n;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: r, style: a } = this.props;
                    return o.createElement(n.Z, { style: [a, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, r);
                }
            }
            a.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const l = a;
        },
        378729: (e, t, r) => {
            r.d(t, { Z: () => f });
            var o = r(202784),
                n = r(325686),
                a = r(111677),
                l = r.n(a),
                i = r(283379),
                s = r(731708),
                c = r(392237);
            const d = l().f1a1b791,
                u = l().if2bf8b4,
                p = l().f3624b5c,
                m = l().b4b3b113,
                h = l().be222050,
                g = l().hcbbe447;
            class f extends o.Component {
                render() {
                    const { color: e, id: t, style: r } = this.props;
                    return o.createElement(n.Z, { style: [y.root, r] }, o.createElement(i.default, { style: [y.icon, e && y[e]] }), o.createElement(s.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: r } = this.props,
                        { adMetadataContainer: o, advertiser: n, advertiser_name: a, disclosure_type: l } = r,
                        i = e && n && e === n.id_str,
                        s = "string" == typeof l && "political" === l.toLowerCase(),
                        c = "string" == typeof l && "issue" === l.toLowerCase(),
                        f = !(!o || "POLITICAL" !== o.disclaimerType) || s,
                        y = !(!o || "ISSUE" !== o.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: b } = o || {};
                    let C;
                    return (C = t || (!a || i || b ? (f ? p : y ? h : u) : f ? m({ fullName: a }) : y ? g({ fullName: a }) : d({ fullName: a }))), C;
                }
            }
            f.defaultProps = { color: "gray700" };
            const y = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        537439: (e, t, r) => {
            r.d(t, { Z: () => D });
            var o = r(202784),
                n = r(111677),
                a = r.n(n),
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
                x = r(246492),
                E = r(520913),
                B = r(731708),
                S = r(642153),
                v = r(879891),
                _ = r(392237),
                Z = r(54606);
            const T = a().ae408b76,
                L = a().j355f008,
                A = a().habf9678,
                F = a().db0798ed,
                P = a().dc716ec9,
                R = ({ text: e }) => {
                    const { direction: t } = (0, v.Z)();
                    return o.createElement(B.ZP, { dir: t, withHashflags: !0 }, e);
                },
                I = (e, t) =>
                    t
                        ? T
                        : ((e) => {
                              const t = o.createElement(R, { text: e });
                              return o.createElement(a().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                U = _.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                M = _.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                D = ({ contextType: e, iconColor: t, iconSize: r, link: n, retweetData: a, text: B, topicData: v, userAvatarUrls: T }) => {
                    const { isSelfRetweet: D, name: H, screenName: W } = a || {},
                        z = ((e, t, r, n = []) => {
                            const a = U[t],
                                B = [r ? { color: _.default.theme.colors[r] } : M.colorDeepGray, a],
                                v = o.createElement(l.default, { style: B }),
                                T = o.createElement(i.default, { style: B }),
                                L = o.createElement(s.default, { style: B }),
                                A = o.createElement(c.default, { style: B }),
                                F = o.createElement(d.default, { style: B }),
                                P = o.createElement(u.default, { style: M.circle }),
                                R = o.createElement(p.default, { style: B }),
                                I = o.createElement(m.default, { style: B }),
                                D = o.createElement(h.default, { style: B }),
                                H = o.createElement(g.default, { style: B }),
                                W = o.createElement(f.default, { style: B }),
                                z = o.createElement(y.default, { style: B }),
                                N = o.createElement(b.default, { style: B }),
                                Q = o.createElement(C.default, { style: B }),
                                K = o.createElement(w.default, { style: B }),
                                V = o.createElement(k.default, { style: B }),
                                G = o.createElement(x.default, { style: B }),
                                O = o.createElement(S.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: n }),
                                j = o.createElement(E.default, { style: B });
                            switch (e) {
                                case Z.Q.Pin:
                                case Z.Q.ReplyPin:
                                    return v;
                                case Z.Q.Retweet:
                                    return T;
                                case Z.Q.Like:
                                    return L;
                                case Z.Q.Follow:
                                    return A;
                                case Z.Q.Moment:
                                    return F;
                                case Z.Q.NewTweets:
                                    return P;
                                case Z.Q.Reply:
                                case Z.Q.Conversation:
                                    return R;
                                case Z.Q.Feedback:
                                    return I;
                                case Z.Q.Topic:
                                    return D;
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
                                    return V;
                                case Z.Q.FollowFollowing:
                                    return K;
                                case Z.Q.Facepile:
                                    return O;
                                case Z.Q.Bird:
                                    return j;
                                case Z.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, r, t, T);
                    switch (e) {
                        case Z.Q.Retweet:
                            return { Icon: z, text: B || I(H, D), link: W ? `https://twitter.com/${W}` : void 0 };
                        case Z.Q.Pin:
                            return { Icon: z, text: B || L };
                        case Z.Q.ReplyPin:
                            return { Icon: z, text: A };
                        case Z.Q.Topic:
                            return { Icon: z, "aria-label": "Recommendation" === v?.functionalityType || "RecWithEducation" === v?.functionalityType ? P({ topicName: B }) : F({ topicName: B }), text: B ? o.createElement(R, { text: B }) : null, link: n };
                        default:
                            return { Icon: z, text: B ? o.createElement(R, { text: B }) : null, link: n };
                    }
                };
        },
        126962: (e, t, r) => {
            r.d(t, { Z: () => g });
            r(136728);
            var o = r(202784),
                n = r(325686),
                a = r(731708),
                l = r(872405),
                i = r(235902),
                s = r(392237),
                c = r(139052),
                d = r(488684),
                u = r(537439),
                p = r(54606);
            class m extends o.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: r, id: s, onLayout: c, rightControl: d, style: p, testID: m, textColor: g, textSize: f, topControl: y, weight: b, withBottomBorder: C, withLeftPadding: w, withTextCentered: k, ...x } = this.props,
                        { Icon: E, "aria-label": B, link: S, text: v } = (0, u.Z)(x),
                        _ = o.createElement(a.ZP, { "aria-label": B, color: g, id: s, numberOfLines: 2, size: f, testID: m, weight: b, withoutTwemojiAndHashflags: !0 }, v),
                        { cellStyle: Z, viewStyle: T } = this._getStyles();
                    return v ? o.createElement(i.ZP.UseProps, null, (a) => o.createElement(o.Fragment, null, y || null, o.createElement(n.Z, { onLayout: c, style: [p, T, a.socialContextRefreshEnabled() && !w && h.socialContextRefresh] }, o.createElement(l.Z, { avatarCell: E || (w ? null : void 0), avatarCellStyle: [r, h.socialContextIconColumn, !w && h.unsetIconWidth, a.socialContextRefreshEnabled() && !w && h.socialContextRefreshIcon], avatarSize: e, cellStyle: Z }, o.createElement(n.Z, { style: h.cellWrapper }, o.createElement(n.Z, { style: [h.socialContextTextColumn, a.socialContextRefreshEnabled() && !w && h.socialContextRefreshTextColumn] }, S ? this._renderLink(S, _) : _), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: r, id: n, onClick: l, retweetData: i, textColor: s, topicData: u } = this.props,
                        { screenName: m } = i || {},
                        h = o.createElement(a.ZP, { color: s, id: n, link: e, onClick: l, withoutTwemojiAndHashflags: !0 }, t);
                    return r === p.Q.Topic && u ? o.createElement(c.Z, { topicId: u.topicId }, h) : r === p.Q.Retweet && m ? o.createElement(d.Z, { screenName: m }, h) : h;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: r, withTextCentered: o } = this.props,
                        n = t === p.Q.TextOnly,
                        a = r ? [h.bottomBorderMargin, !!e && h.bottomBorder] : [],
                        l = r && !e ? [h.bottomBorder] : [];
                    return n && l.push(h.topicContext), o && l.push(h.socialContextTextCentered), { viewStyle: a, cellStyle: l };
                }
            }
            m.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const h = s.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                g = m;
        },
        54606: (e, t, r) => {
            r.d(t, { Q: () => o });
            r(202784);
            const o = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(807896),
                n = r(202784),
                a = r(325686),
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
                            (0, o.Z)(
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
                            a.Z,
                            { style: [d.container, e.style] },
                            n.createElement(
                                l.Z,
                                (0, o.Z)(
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
            var o = r(465233),
                n = r(483054),
                a = r(295559),
                l = r(392237);
            function i(e = "audiospace") {
                return l.default.theme.highContrastEnabled ? p(u.HighContrast[e]) : p(u.Default[e]);
            }
            function s(e = "audiospace") {
                return l.default.theme.highContrastEnabled ? u.HighContrast[e] : u.Default[e];
            }
            const c = { angle: 61.63, angleUnit: "deg" };
            function d() {
                return (0, o.Z)(c);
            }
            const u = { Default: { audiospace: { primary: "#2D42FF", secondary: "#9C63FA" }, livevideo: { primary: "#F91880", secondary: "#F91880" } }, HighContrast: { audiospace: { primary: "#2C3CEF", secondary: "#8439FF" }, livevideo: { primary: "#890A46", secondary: "#890A46" } } };
            function p(e) {
                return { primary: m(e.primary), secondary: m(e.secondary) };
            }
            function m(e) {
                const t = a.xO(e),
                    r = n.$n({ color: t, coefficient: 0.5 });
                return a.vq(a.rb(r)).slice(0, -2);
            }
        },
        433460: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(807896),
                n = r(202784),
                a = r(325686),
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
                    [r, a] = n.useState(),
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
                const f = n.useCallback((e) => n.createElement(u.Z.Default, (0, o.Z)({}, e, { type: s })), [s]);
                return n.createElement(
                    m.default,
                    (0, o.Z)({}, p, {
                        BorderComponent: f,
                        "aria-label": h,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== r && a(t.width);
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
                return "livevideo" === e.type ? n.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [y.liveVideoLabelContainer, y.borderNarrow, e.isWide ? y.liveVideoLabel : y.liveVideoLabelNarrow], type: "live" }) : n.createElement(a.Z, { style: [y.root, e.isWide ? y.rootWide : y.rootNarrow] }, n.createElement(u.Z.Default, { style: [y.spaceGradient, e.isWide ? y.borderWide : y.borderNarrow] }, n.createElement(s.default, { style: y.spaceIcon })));
            }
            const y = p.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        r = "100%",
                        o = e.spacesPx.space4,
                        n = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * o, bottom: -1 * o }, rootNarrow: { end: -1 * n, bottom: -1 * n }, borderWide: { borderWidth: o }, borderNarrow: { borderWidth: n }, spaceGradient: { justifyContent: "center", width: r, height: r, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                b = { withoutUsernameFallback: i().b3688156, activeAudioSpace: i().c0eb8825, activeLiveVideo: i().d068dc6d };
        },
        238406: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                n = r(731708),
                a = r(354149),
                l = r(310452),
                i = r(720283);
            const s = ({ animateIn: e, description: t, entities: r, isConcise: s, style: c, testID: d, userId: u, withheldDescription: p, withheldEntities: m }) => {
                const { description: h, entities: g } = (0, i.H)({ description: t, entities: r, withheldDescription: p, withheldEntities: m }),
                    f = l.ZP.descriptionTextParts(h, g);
                return f.length
                    ? o.createElement(
                          n.ZP,
                          { dir: "auto", numberOfLines: s ? 2 : void 0, style: c, testID: d },
                          f.map((t, r) => o.createElement(a.ZP, { animateIn: e, key: `user_${u}_textpart_${r}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, r) => {
            r.d(t, { H: () => o });
            const o = ({ description: e, entities: t, withheldDescription: r, withheldEntities: o }) => (r ? { description: r, entities: o } : { description: e, entities: t });
        },
        276259: (e, t, r) => {
            r.d(t, { Lw: () => n, Re: () => u, VJ: () => i, ZF: () => p, hv: () => s, ku: () => o, qp: () => a, uv: () => l, v5: () => d });
            r(571372), r(875640), r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157), r(543673), r(240753), r(128399);
            function o(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function n(e) {
                return new Promise((t, r) => {
                    const o = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== o.length) r(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, r] = o,
                                    n = atob(r),
                                    a = n.length,
                                    l = Array(a);
                                for (let e = 0; e < a; e++) l[e] = n.charCodeAt(e);
                                t(new Blob([new Uint8Array(l)], { type: e }));
                            } else r(Error("The Uint8Array type is not available"));
                        else r(Error("The atob API is not available"));
                    else r(Error("The Blob API is not available"));
                });
            }
            const a = (e, t) =>
                    new Promise((r, o) => {
                        const n = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                n.abort?.(), o(Error(p));
                            }),
                            (n.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? r(e.target.result) : o(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (n.onerror = (e) => {
                                o(e);
                            }),
                            n.readAsArrayBuffer(e);
                    }),
                l = (e, t) => {
                    const r = document.createElement("a");
                    (r.href = e), (r.download = t), (r.target = "_blank"), r.click(), r.remove();
                },
                i = (e) =>
                    ((e) =>
                        new Promise((t) => {
                            const r = new Image();
                            (r.onload = function () {
                                const e = document.createElement("canvas");
                                (e.width = r.width), (e.height = r.height), e.getContext("2d").drawImage(r, 0, 0), e.toBlob((e) => t(e), "image/png");
                            }),
                                (r.crossOrigin = "anonymous"),
                                (r.src = e);
                        }))(e).then((e) => navigator.clipboard.write([new ClipboardItem({ "image/png": e })])),
                s = async (e, t) => {
                    if (e.size <= t) return e;
                    let r = e,
                        o = 1;
                    for (; r && r.size > t; )
                        try {
                            o > 0.2 ? ((o *= 0.7), (r = await c(r, 1, o))) : (r = await c(r, 0.7, o));
                        } catch (e) {
                            r = void 0;
                        }
                    return r;
                },
                c = (e, t, r) =>
                    new Promise((o, n) => {
                        const a = new Image();
                        (a.onload = () => {
                            const e = document.createElement("canvas"),
                                n = e.getContext("2d"),
                                l = a.width * t,
                                i = a.height * t;
                            (e.width = l),
                                (e.height = i),
                                n.drawImage(a, 0, 0, l, i),
                                e.toBlob(
                                    (e) => {
                                        o(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    r,
                                );
                        }),
                            (a.onerror = () => n(new Error("Failed to load image while resizing"))),
                            (a.src = URL.createObjectURL(e));
                    }),
                d = ["image/jpeg", "image/png", "image/webp"],
                u = "image/gif",
                p = "Reading aborted";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.MultiAccount.5ccb5d6a.js.map
