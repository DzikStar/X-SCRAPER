"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.MultiAccount-a2dee9c7"],
    {
        929446: (e, t, a) => {
            a.d(t, { Z: () => l });
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
            const l = n;
        },
        625661: (e, t, a) => {
            a.d(t, { ZP: () => p });
            var n = a(202784),
                l = a(614983),
                r = a.n(l),
                i = a(325686),
                s = a(370006),
                o = a(786998),
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
                            r()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: a, fixed: l, hideBackButton: r, isFullWidth: i, isLarge: c, leftControl: d, middleControl: p, position: g, rightControl: m, secondaryBar: h, style: y, subtitle: k, title: f, titleDomId: _, titleIconCell: b, titleIconCellSize: C, withBackground: S, withWideContainer: w } = this.props,
                        { isModal: v } = this.context,
                        A = r ? d : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        F = (function (e, t, a) {
                            return e && !(t && a);
                        })(!!S, v, !!h);
                    return n.createElement(n.Fragment, null, n.createElement(o.Z, { centerTitle: t, centeredLogo: a, isFullWidth: i, isLarge: c, leftControl: A, middleControl: p, position: u(g, v, l), rightControl: m, style: y, subtitle: k, title: f, titleDomId: _, titleIconCell: b, titleIconCellSize: C, withBackground: F, withWideContainer: w }), h || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        a = c.Z.getBackgroundStyles();
                    return t ? n.createElement(i.Z, { style: !!e && a }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        947135: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(202784),
                l = a(242454),
                r = a(190286);
            class i extends n.Component {
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
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: a, confirmationSheetConfirmButtonType: i, confirmationSheetHeadline: s, confirmationSheetText: o, label: c } = this.props;
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? n.createElement(r.Z, { confirmButtonLabel: a, confirmButtonType: i, headline: s, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: o }) : null);
                }
            }
            i.defaultProps = { color: "red500", align: "center" };
        },
        290402: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(807896),
                l = a(202784),
                r = a(182056),
                i = a(879113),
                s = a(392237),
                o = a(111677),
                c = a.n(o),
                d = a(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, a) => {
                    const s = r.Z.isOnline();
                    return l.createElement(i.Z, (0, n.Z)({}, t, { icon: s ? void 0 : l.createElement(d.default, { style: g.icon }), retryMessage: s ? e : u }));
                },
                g = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = l.forwardRef(p);
        },
        980407: (e, t, a) => {
            a.d(t, { Z: () => h, w: () => g });
            var n = a(202784),
                l = a(325686),
                r = a(108362),
                i = a(386802),
                s = a(392237),
                o = a(652904),
                c = a(555079),
                d = a(625661),
                u = a(449067),
                p = a(715601);
            class g extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: a, backLocation: r, centerTitle: i, hideBackButton: s, history: o, isFullWidth: u, isLarge: p, middleControl: g, onBackClick: h, rightControl: y, secondaryBar: k, subtitle: f, title: _ } = this.props,
                                { isModal: b } = this.context;
                            return n.createElement(l.Z, { style: b ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, n.createElement(d.ZP, { backButtonType: a || (b ? "close" : "back"), backLocation: r, centerTitle: i, fixed: !b, hideBackButton: s, history: o, isFullWidth: u, isLarge: p, middleControl: g, onBackClick: h, ref: e, rightControl: y, secondaryBar: k, style: [b && m.appBarModal, t], subtitle: f, title: _, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: a } = this.context;
                            t && (a ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: a, containerStyle: i, documentTitle: s, isFullWidth: c, isLarge: d, renderHeader: g, title: h, withoutBottomBarMobile: y } = this.props,
                        { isModal: k } = this.context,
                        f = g ? g(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(o.Z, null, n.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: h }), n.createElement(l.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, k && m.rootModal] }, !k && f, n.createElement(r.Z, { isFullWidth: c, isLarge: d, style: [m.container, k && m.containerModal, i] }, k ? n.createElement(p.Z, { style: m.viewport }, f, a) : a), t ? n.createElement(l.Z, { style: [m.bottomBarModal, !k && !y && m.bottomBarMobile] }, n.createElement(r.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (g.defaultProps = { isFullWidth: !1, isLarge: !1 }), (g.contextType = i.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                h = g;
        },
        110512: (e, t, a) => {
            a.d(t, { ZP: () => O, V7: () => q });
            a(136728);
            var n,
                l,
                r,
                i,
                s,
                o,
                c,
                d,
                u,
                p,
                g = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "DelegatedAccountListQuery",
                        selections: [
                            {
                                alias: null,
                                args: (n = [{ kind: "Literal", name: "s", value: "4bf0" }]),
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: (l = [{ kind: "Literal", name: "status", value: "Accepted" }]),
                                        concreteType: "DelegationGroup",
                                        kind: "LinkedField",
                                        name: "list_delegation_groups",
                                        plural: !0,
                                        selections: [
                                            {
                                                alias: "handle",
                                                args: null,
                                                concreteType: "UserResults",
                                                kind: "LinkedField",
                                                name: "handle_results",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: "LinkedField",
                                                        name: "result",
                                                        plural: !1,
                                                        selections: [
                                                            (r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    (i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ kind: "RequiredField", field: (s = { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }), action: "THROW" }], storageKey: null },
                                                                    {
                                                                        kind: "RequiredField",
                                                                        field: {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "UserCore",
                                                                            kind: "LinkedField",
                                                                            name: "core",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { kind: "RequiredField", field: (o = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" },
                                                                                { kind: "RequiredField", field: (c = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }), action: "THROW" },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                        action: "THROW",
                                                                    },
                                                                    { kind: "RequiredField", field: { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ kind: "RequiredField", field: (d = { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" },
                                                                    { args: null, kind: "FragmentSpread", name: "UserCell_user" },
                                                                ],
                                                                type: "User",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: 'list_delegation_groups(status:"Accepted")',
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4bf0")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "DelegatedAccountListQuery",
                        selections: [
                            {
                                alias: null,
                                args: n,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: l,
                                        concreteType: "DelegationGroup",
                                        kind: "LinkedField",
                                        name: "list_delegation_groups",
                                        plural: !0,
                                        selections: [
                                            {
                                                alias: "handle",
                                                args: null,
                                                concreteType: "UserResults",
                                                kind: "LinkedField",
                                                name: "handle_results",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: "LinkedField",
                                                        name: "result",
                                                        plural: !1,
                                                        selections: [
                                                            r,
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    i,
                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [s], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [o, c], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [d], storageKey: null },
                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
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
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "TimelineUrl",
                                                                                        kind: "LinkedField",
                                                                                        name: "url",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            (u = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
                                                                                            { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null },
                                                                                            {
                                                                                                alias: "urtEndpointOptions",
                                                                                                args: null,
                                                                                                concreteType: "TimelineUrtEndpointOptions",
                                                                                                kind: "LinkedField",
                                                                                                name: "urt_endpoint_options",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    { alias: "cacheId", args: null, kind: "ScalarField", name: "cache_id", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "subtitle", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                                    {
                                                                                                        alias: "requestParams",
                                                                                                        args: null,
                                                                                                        concreteType: "RequestParamsEntry",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "request_params",
                                                                                                        plural: !0,
                                                                                                        selections: [
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [(p = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [u], storageKey: null },
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
                                                                    p,
                                                                ],
                                                                type: "User",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    p,
                                                ],
                                                storageKey: null,
                                            },
                                            p,
                                        ],
                                        storageKey: 'list_delegation_groups(status:"Accepted")',
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4bf0")',
                            },
                        ],
                    },
                    params: { id: "vPrfbpPK7KoeIHlqqoHLbA", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "DelegatedAccountListQuery", operationKind: "query", text: null },
                };
            g.hash = "1e0a77d9768f003fab71a100e8291dbc";
            const m = g;
            var h = a(202784),
                y = a(325686),
                k = (a(585488), a(712696)),
                f = a.n(k),
                _ = a(107267),
                b = a(731708),
                C = a(661810),
                S = a(642153),
                w = a(392237),
                v = a(111677),
                A = a.n(v),
                F = a(899667),
                E = a(487552),
                B = a(516951),
                L = a(621416),
                U = a(125363),
                T = a(175856),
                Z = a(390387),
                I = a(114084),
                K = a(736063);
            const x = (0, a(668214).Z)()
                    .propsFromActions(() => ({ setDelegateUser: Z.vU }))
                    .withAnalytics({ component: "delegated_account_list" }),
                D = m,
                M = A().daffabde,
                R = A().eccbfa26,
                P = A().a1b7a904,
                H = { context: "DelegateGroups" },
                W = ({ activeUserId: e, delegateUser: t, isUpdatedManageAccounts: a, onDelegateSwitch: n, renderUserDecoration: l, setDelegateUser: r }) => {
                    const i = (0, U.I0)(),
                        s = (0, _.useHistory)(),
                        [o] = (0, L.m)(T.s7),
                        [c, d] = h.useState(!0),
                        u = f()(D, {}),
                        p = h.useMemo(() => {
                            const t = [];
                            return (
                                u.viewer_v2?.list_delegation_groups?.forEach((a) => {
                                    const { result: n } = a.handle || {};
                                    ("User" === n?.__typename && n?.rest_id === e) || ("User" === n?.__typename && t.push(n));
                                }),
                                t
                            );
                        }, [e, u.viewer_v2?.list_delegation_groups]),
                        g = h.useMemo(() => t?.userId && p.some((e) => e?.rest_id && t?.userId === e?.rest_id), [t, p]),
                        m = h.useCallback(() => {
                            d(!c);
                        }, [c]);
                    h.useEffect(() => {
                        i(Z.po(p.length));
                    }, [p, i]);
                    const k = h.useCallback(
                        (e) => () => {
                            o ? s.push("/i/delegate/switch", { delegateUser: e }) : r && r(e), n();
                        },
                        [o, r, n, s],
                    );
                    return p.length < 1
                        ? null
                        : h.createElement(
                              h.Fragment,
                              null,
                              a ? h.createElement(y.Z, { style: z.updatedDelegateAccountsLabel }, h.createElement(b.ZP, { color: "gray700", weight: "bold" }, R)) : h.createElement(y.Z, { onClick: m, style: z.delegateAccountsLabel }, h.createElement(b.ZP, { color: "gray700", weight: "bold" }, g ? M : R), !g && (c ? h.createElement(F.default, { style: z.IconChevronUp }) : h.createElement(E.default, { style: z.IconChevronDown }))),
                              a || c || g
                                  ? p.map((e) => {
                                        const { id_str: n } = e.legacy,
                                            r = n === t?.userId,
                                            i = l ? l({ withBadges: !1, isActiveUser: r }) : void 0,
                                            s = k({ userId: n });
                                        return h.createElement(h.Fragment, { key: e.rest_id }, h.createElement(I.Z, { "aria-label": P, badgeContext: "account", decoration: i, displayMode: "UserCompact", onCellClick: r ? B.Z : s, user: e, withInteractiveStyling: !r, withLink: !1 }), a && h.createElement(C.Z, { style: z.accountDivider }));
                                    })
                                  : h.createElement(y.Z, { style: z.facePileContainer }, h.createElement(S.Z, { userAvatarSize: "large", userAvatarUrls: p.map((e) => (e?.legacy && e?.avatar?.image_url) || "") })),
                          );
                };
            function q() {
                const e = f()(D, {}),
                    t = (0, U.v9)(Z.x0);
                return h.useMemo(() => {
                    const a = [];
                    return (
                        e.viewer_v2?.list_delegation_groups?.forEach((e) => {
                            const { result: n } = e.handle || {};
                            ("User" === n?.__typename && n?.rest_id === t) || ("User" === n?.__typename && a.push(n));
                        }),
                        a
                    );
                }, [e.viewer_v2?.list_delegation_groups, t]);
            }
            const z = w.default.create((e) => ({ IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, delegateAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, updatedDelegateAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                O = x((e) => h.createElement(K.H, { errorConfig: H }, h.createElement(W, e)));
        },
        229412: (e, t, a) => {
            a.d(t, { a: () => W });
            a(136728);
            var n = a(202784),
                l = a(325686),
                r = a(530732),
                i = a(310088),
                s = a(731708),
                o = a(673510),
                c = a(661810),
                d = a(392237),
                u = a(111677),
                p = a.n(u),
                g = a(297896),
                m = a(293723),
                h = a(58399),
                y = a(913973),
                k = a(516951),
                f = a(725516),
                _ = a(125363),
                b = a(806960);
            const C = p().h6beb5fb,
                S = p().d86bbf0f,
                w = d.default.create((e) => ({ notificationBadge: { paddingHorizontal: e.spaces.space4 } })),
                v = ({ notificationCount: e = 0 }) => (e > 0 ? n.createElement(i.Z, { count: e, style: e > 9 && w.notificationBadge, truncatedCountFormatter: C, unreadCountLabel: S }) : null);
            var A = a(110512),
                F = a(642153),
                E = a(899667),
                B = a(487552),
                L = a(390387);
            const U = p().c61eea74,
                T = p().b7dc3885,
                Z = p().d86bbf0f,
                I = p().h6beb5fb,
                K = ({ accountUsers: e, activeUser: t, handleMultiAccountSwitch: a, isUpdatedManageAccounts: r, renderUserDecoration: d, userTestId: u, withBadges: p }) => {
                    const g = (0, _.v9)(L.BP),
                        m = !0,
                        [h, y] = n.useState(!1),
                        k = n.useMemo(() => e.filter((e) => e.user_id !== t?.id_str), [e, t]),
                        f = n.useMemo(() => k.reduce((e, t) => e + (t.badgeCount || 0), 0), [k]),
                        b = n.useCallback(() => {
                            y(!h);
                        }, [h]),
                        C = n.useMemo(() => (g && g > 0 ? n.createElement(l.Z, { onClick: b, style: x.personalAccountsLabel }, n.createElement(s.ZP, { color: "gray700", weight: "bold" }, U), h ? n.createElement(E.default, { style: x.IconChevronUp }) : n.createElement(B.default, { style: x.IconChevronDown })) : null), [m, g, b, h]),
                        S = n.useMemo(
                            () =>
                                k.map((e) => {
                                    const t = e.badgeCount ?? 0;
                                    return n.createElement(n.Fragment, { key: e.user_id }, n.createElement(o.ZP, { affiliateBadgeInfo: e.highlighted_label, "aria-label": T({ screenName: e.screen_name }), avatarDecoration: r && n.createElement(v, { notificationCount: t }), avatarUri: e.avatar_image_url, badgeContext: "account", decoration: d({ badgeCount: t, withBadges: p, isActiveUser: !1 }), displayMode: "UserCompact", isBlueVerified: e.is_blue_verified, isProtected: e.is_protected, isVerified: e.is_verified, name: e.name, onCellClick: a({ hasBadge: !!t, isProtected: e.is_protected, userId: e.user_id }), screenName: e.screen_name, testID: u, userId: e.user_id, verifiedType: e.verified_type, withLink: !1 }), r && n.createElement(c.Z, { style: x.accountDivider }));
                                }),
                            [a, k, d, u, p, r],
                        ),
                        w = n.useMemo(() => n.createElement(l.Z, { style: x.facePileContainer }, n.createElement(F.Z, { userAvatarSize: "large", userAvatarUrls: k.map((e) => e.avatar_image_url) }), f > 0 ? n.createElement(i.Z, { count: f, standalone: !0, truncatedCountFormatter: I, unreadCountLabel: Z }) : null), [k, f]);
                    return k.length > 0 ? n.createElement(n.Fragment, null, !r && C, r || h || void 0 === g || 0 === g ? S : w) : null;
                },
                x = d.default.create((e) => ({ personalAccountsLabel: { padding: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", cursor: "pointer" }, IconChevronUp: { color: e.colors.primary, marginEnd: e.spaces.space12 }, IconChevronDown: { color: e.colors.gray700, marginEnd: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, facePileContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                D = n.memo(K);
            var M = a(22132);
            const R = p().c61eea74,
                P = p().d86bbf0f,
                H = p().h6beb5fb;
            function W(e) {
                const { accountSwitch: t, accountUsers: a, activeUser: d, clearDelegateUser: u, delegateAccountCount: p, delegateUser: C, isDelegateEnabled: S, isUpdatedManageAccounts: w, onDelegateSwitch: F, onUserSwitch: E, userTestId: B, withBadges: L = !1 } = e,
                    U = !!C,
                    T = a.some((e) => e.user_id === d.id_str) || (p && p > 0) || U,
                    Z = n.useCallback(() => {
                        u && u();
                    }, [u]),
                    I = n.useCallback(
                        ({ hasBadge: e, isProtected: a, userId: n }) =>
                            () => {
                                t({ hasBadge: e, isProtected: a, userId: n }), E?.();
                            },
                        [t, E],
                    ),
                    K = (0, _.v9)(b.pm),
                    x = (0, _.v9)(b.QA),
                    W = (0, f.z)(),
                    z = n.useCallback(
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
                                                    W.scribe({ action: "click", element: "log_out" });
                                                },
                                                testID: M.Z.logout,
                                                withoutInteractiveStyles: !0,
                                            },
                                            n.createElement(g.default, { style: q.IconExiting }),
                                        ),
                                    ),
                                a.push(e ? n.createElement(m.default, { style: q.updatedIconCheckmarkCircleFill }) : n.createElement(h.default, { style: q.IconChevronRight })),
                                n.createElement(
                                    l.Z,
                                    { style: q.decorationsContainer },
                                    a.map((e, t) => n.createElement(n.Fragment, { key: t }, e)),
                                )
                            );
                        },
                        [W],
                    ),
                    O = n.useCallback(({ badgeCount: e, isActiveUser: t, withBadges: a }) => (t ? (S ? n.createElement(m.default, { style: [q.IconCheckmarkCircleFill, q.userDecoration] }) : n.createElement(y.default, { style: [q.iconCheckMark, q.userDecoration] })) : e && a ? n.createElement(i.Z, { count: e, standalone: !0, style: q.userDecoration, truncatedCountFormatter: H, unreadCountLabel: P }) : void 0), [S]),
                    V = n.useMemo(() => (w ? z : O), [w, O, z]),
                    N = n.useMemo(() => n.createElement(A.ZP, { activeUserId: d.id_str, delegateUser: C, isUpdatedManageAccounts: w, key: 0, onDelegateSwitch: F ?? k.Z, renderUserDecoration: V }), [d.id_str, C, w, F, V]),
                    Q = n.useMemo(() => n.createElement(D, { accountUsers: a, activeUser: d, handleMultiAccountSwitch: I, isUpdatedManageAccounts: !!w, key: 1, renderUserDecoration: V, userTestId: B, withBadges: L }), [a, d, I, w, V, B, L]),
                    G = [];
                return !w && S && G.push(N), G.push(Q), w && S && G.push(N), n.createElement(n.Fragment, null, w && S && n.createElement(l.Z, { style: q.personalAccountsLabel }, n.createElement(s.ZP, { color: "gray700", weight: "bold" }, R)), T ? n.createElement(n.Fragment, null, n.createElement(o.ZP, { affiliateBadgeInfo: d.highlightedLabel, avatarDecoration: w && n.createElement(v, { notificationCount: K + x }), avatarUri: d.profile_image_url_https, badgeContext: "account", decoration: V({ withBadges: L, isActiveUser: !C, isLoggedInUser: !0 }), displayMode: "UserCompact", isBlueVerified: d.is_blue_verified, isProtected: d.protected, isVerified: d.verified, name: d.name, onCellClick: U ? Z : void 0, screenName: d.screen_name, testID: B, userId: d.id_str, verifiedType: d.verified_type, withLink: !1 }), w && n.createElement(c.Z, { style: q.accountDivider })) : null, G, !w && (T || p || a.length) ? n.createElement(c.Z, { spacing: "space12" }) : null);
            }
            const q = d.default.create((e) => ({ iconCheckMark: { color: e.colors.primary, flexShrink: 0 }, IconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, marginEnd: e.spaces.space8 }, updatedIconCheckmarkCircleFill: { color: e.colors.green500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconExiting: { color: e.colors.red500, flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, IconChevronRight: { color: "inherit", flexShrink: 0, width: e.spaces.space24, height: e.spaces.space24 }, decorationsContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12 }, accountDivider: { marginHorizontal: e.spaces.space16 }, userDecoration: { marginStart: e.spaces.space12 }, personalAccountsLabel: { margin: e.spaces.space16, marginBottom: e.spaces.space4 } }));
        },
        22132: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { accountSwitcher: "SideNav_AccountSwitcher_Button", addAccount: "AccountSwitcher_AddAccount_Button", logout: "AccountSwitcher_Logout_Button", manageAccounts: "AccountSwitcher_ManageAccounts_Button" };
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                l = a(500002),
                r = a(668214),
                i = a(997174),
                s = a(118823);
            const o = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: n },
                            locationKey: l,
                        } = this.props,
                        {
                            location: { pathname: r, search: i },
                            locationKey: s,
                        } = e;
                    let o = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (o = !0));
                    const c = l || s;
                    ((c && l !== s) || (!c && a !== r) || n !== i || o) && this._performPageUpdates(this.props);
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
            const d = (0, l.ZP)(o(c));
        },
        621416: (e, t, a) => {
            a.d(t, { m: () => r });
            a(890103);
            var n = a(202784),
                l = a(175698);
            function r(e) {
                const t = (0, l.A)();
                return [
                    !!t && !t.flags[e],
                    n.useCallback(() => {
                        t?.addFlag(e);
                    }, [t, e]),
                ];
            }
        },
        380155: (e, t, a) => {
            a.d(t, { y: () => o });
            var n = a(111677),
                l = a.n(n),
                r = a(615656),
                i = a(51525);
            const s = l().b20a3894,
                o = { [r.ZP.AppInReadOnlyMode]: { customAction: i.w1 }, [r.ZP.TargetUserNotFound]: { toast: { text: s } }, showToast: !0 };
        },
        956817: (e, t, a) => {
            a.d(t, { y: () => o });
            var n = a(734540),
                l = a(917799),
                r = a(24546),
                i = a(923488);
            const s = { REQUEST: "rweb/multiAccount/SWITCH_REQUEST", SUCCESS: "rweb/multiAccount/SWITCH_SUCCESS", FAILURE: "rweb/multiAccount/SWITCH_FAILURE" },
                o =
                    (e) =>
                    (t, a, { api: o }) => {
                        const c = (0, l._O)(t, { request: o.withEndpoint(n.Z).switch, params: e });
                        return t((0, r.MH)()).then(() =>
                            t((0, i.nB)()).then(() =>
                                c({ actionTypes: s, context: "SWITCH" }).then(() => {
                                    window.location.assign("/home");
                                }),
                            ),
                        );
                    };
        },
        366273: (e, t, a) => {
            a.r(t), a.d(t, { MultiAccountScreen: () => j, default: () => J });
            a(136728);
            var n = a(202784),
                l = a(325686),
                r = a(688715),
                i = a(731708),
                s = a(154003),
                o = a(242454),
                c = a(420412),
                d = a(310088),
                u = a(392237),
                p = a(111677),
                g = a.n(p),
                m = a(913973),
                h = a(947135),
                y = a(290402),
                k = a(980407),
                f = a(229412),
                _ = a(443781),
                b = a(380155),
                C = a(312771),
                S = a(71620),
                w = a(668214),
                v = a(454319),
                A = a(956817),
                F = a(24546),
                E = a(390387),
                B = a(680997),
                L = a(919022);
            const U = (0, w.Z)()
                    .propsFromState(() => ({ delegateAccountCount: E.BP, delegateUser: E.sy, loggedInUser: L.ZP.selectLoggedInUser, fetchStatus: v.UD, users: v.pc }))
                    .propsFromActions(() => ({ clearDelegateUser: E.YJ, fetchMultiAccountListIfNeeded: v.s2, createLocalApiErrorHandler: (0, S.zr)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"), logout: B.Z, logoutAll: B.d, sendAllPreviews: F.MH, switchAccount: A.y }))
                    .withAnalytics({ page: "account_switcher" }),
                T = "AccountSwitcher_Add_Button",
                Z = "AccountSwitcher_Switch_Button",
                I = g().b8e1d524,
                K = g().e69b7e02,
                x = g().j0a8da6e,
                D = g().b6bd6ae4,
                M = g().d577bccd,
                R = g().dc65b3e5,
                P = g().b8045b33,
                H = g().d075dc89,
                W = g().i859a9d4,
                q = (0, r.ju)("https://help.x.com/managing-your-account/managing-multiple-twitter-accounts"),
                z = g().ae1bbb26,
                O = g().bade139e,
                V = g().ae33b982,
                N = g().fa07bf68,
                Q = g().d86bbf0f,
                G = g().h6beb5fb;
            class j extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { spinner: !1 }),
                        (this._render = () => n.createElement(n.Fragment, null, this._renderUsers(), this.isUpdatedManageAccounts ? this._updatedRenderActions() : this._renderActions())),
                        (this._updatedRenderActions = () => {
                            const e = this.context.featureSwitches.getNumberValue("responsive_web_multiple_account_limit", 5),
                                { delegateAccountCount: t, users: a } = this.props,
                                r = a.length >= e;
                            return n.createElement(n.Fragment, null, r ? n.createElement(l.Z, { style: [Y.whiteBackground, Y.infoText, Y.updatedAccountLimitText] }, n.createElement(i.ZP, { align: "center", color: "gray700" }, (t ? H : P)({ maxAccounts: e }), " ")) : n.createElement(s.ZP, { onPress: this._handleAddAccount, style: Y.updatedAddAccountButton, testID: T }, n.createElement(i.ZP, { color: "buttonBlack", weight: "normal" }, x)), n.createElement(l.Z, { style: Y.updatedLogoutAllButtonWrapper }, n.createElement(h.Z, { color: "red500", confirmationSheetConfirmButtonLabel: z, confirmationSheetConfirmButtonType: "primary", confirmationSheetHeadline: V, confirmationSheetText: N, key: "logoutAllButton", label: O, onConfirmationSheetConfirm: this._handleLogoutAll, withBottomBorder: !1 })));
                        }),
                        (this._renderActions = () => {
                            const e = this.context.featureSwitches.getNumberValue("responsive_web_multiple_account_limit", 5),
                                { users: t } = this.props,
                                a = t.length >= e;
                            return n.createElement(n.Fragment, null, n.createElement(o.Z, { align: "left", color: "primary", disabled: a, label: x, onPress: this._handleAddAccount, testID: T }), n.createElement(l.Z, { style: [Y.whiteBackground, Y.infoText] }, n.createElement(i.ZP, { color: "gray700" }, (a ? R : M)({ maxAccounts: e }), " ", n.createElement(i.ZP, { link: q }, W))), n.createElement(c.Z, null), n.createElement(h.Z, { color: "red500", confirmationSheetConfirmButtonLabel: z, confirmationSheetConfirmButtonType: "primary", confirmationSheetHeadline: V, confirmationSheetText: N, key: "logoutAllButton", label: O, onConfirmationSheetConfirm: this._handleLogoutAll, withBottomBorder: !1 }));
                        }),
                        (this._renderUsers = () => {
                            const { clearDelegateUser: e, delegateAccountCount: t, delegateUser: a, loggedInUser: l, users: r, withBadges: i = !1 } = this.props;
                            if (!l) return null;
                            const s = { accountSwitch: this._handleSwitchAccount, accountUsers: r, activeUser: l, clearDelegateUser: e, delegateAccountCount: t, delegateUser: a, isDelegateEnabled: !0, userTestId: Z, withBadges: i, isUpdatedManageAccounts: this.isUpdatedManageAccounts };
                            return n.createElement(f.a, s);
                        }),
                        (this._renderCurrentUserCheckmark = () => n.createElement(m.default, { "aria-label": D, style: Y.iconCheckMark })),
                        (this._renderBadge = (e) => (e ? n.createElement(l.Z, null, n.createElement(d.Z, { count: e, standalone: !0, truncatedCountFormatter: G, unreadCountLabel: Q })) : null)),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchMultiAccountListIfNeeded: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleAddAccount = () => {
                            const { analytics: e, history: t } = this.props;
                            e.scribe({ element: "sign_in", action: "click" }), t.push("/i/flow/login");
                        }),
                        (this._handleSwitchAccount = ({ hasBadge: e, userId: t }) => {
                            const { analytics: a, createLocalApiErrorHandler: n, switchAccount: l } = this.props;
                            this.setState({ spinner: !0 }), a.scribe({ element: e ? "account_bubble_badged" : "account_bubble", action: "click" }), l({ user_id: t }).catch((e) => (this.setState({ spinner: !1 }), n(b.y)(e)));
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
                        l = this.context.featureSwitches.isTrue("rweb_sourcemap_migration");
                    return (this.isUpdatedManageAccounts = l && this.context.featureSwitches.isTrue("rweb_sourcemap_migration_updated_manage_accounts")), n.createElement(k.Z, { appBarStyle: this.isUpdatedManageAccounts && Y.updatedAppBarStyle, containerStyle: this.isUpdatedManageAccounts && Y.updatedModalStyle, history: t, title: this.isUpdatedManageAccounts ? K : I }, n.createElement(y.Z, { fetchStatus: a ? C.ZP.LOADING : e, onRequestRetry: this._handleFetch, render: this._render }));
                }
            }
            j.contextType = _.rC;
            const Y = u.default.create((e) => ({ iconCheckMark: { color: e.colors.primary, fontSize: "1.2em" }, infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, whiteBackground: { backgroundColor: e.colors.cellBackground }, updatedAddAccountButton: { margin: e.spaces.space16, marginBottom: 0, padding: e.spaces.space12, borderRadius: e.spaces.space12, backgroundColor: e.colors.gray0, border: "none" }, updatedAccountLimitText: { paddingBottom: 0 }, updatedLogoutAllButtonWrapper: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space24, borderRadius: e.spaces.space12, overflow: "hidden" }, updatedModalStyle: { paddingHorizontal: e.spaces.space8, height: "auto" }, updatedAppBarStyle: { paddingTop: e.spaces.space8 } })),
                J = U(j);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.MultiAccount-a2dee9c7.df6d0e6a.js.map
