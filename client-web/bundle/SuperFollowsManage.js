"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SuperFollowsManage"],
    {
        667218: (e, t, a) => {
            a.d(t, { n: () => r });
            const r = Object.freeze({ Ads: "Ads", AppleAppStore: "AppleAppStore", Gift: "Gift", GooglePlay: "GooglePlay", Stripe: "Stripe", TPay: "TPay", Twitter: "Twitter", Unknown: "Unknown" });
        },
        96768: (e, t, a) => {
            a.d(t, { Z: () => i });
            var r,
                n,
                l,
                o = {
                    fragment: {
                        argumentDefinitions: [(r = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (n = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateStripePortalUrlMutation",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "origin_product", variableName: "origin_product" },
                                    { kind: "Variable", name: "return_url", variableName: "return_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "CreateCustomerPortalSessionResponse",
                                kind: "LinkedField",
                                name: "customerportalsession_create",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "customer_portal_session_url", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [n, r], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: l },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            o.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const i = o;
        },
        625661: (e, t, a) => {
            a.d(t, { ZP: () => p });
            var r = a(202784),
                n = a(614983),
                l = a.n(n),
                o = a(325686),
                i = a(370006),
                s = a(786998),
                c = a(929028),
                d = a(386802);
            function u(e, t, a) {
                return e || (!t && a ? "fixed" : void 0);
            }
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            l()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: a, fixed: n, hideBackButton: l, isFullWidth: o, isLarge: c, leftControl: d, middleControl: p, position: m, rightControl: g, secondaryBar: y, style: b, subtitle: h, title: k, titleDomId: _, titleIconCell: f, titleIconCellSize: w, withBackground: v, withWideContainer: S } = this.props,
                        { isModal: B } = this.context,
                        F = l ? d : r.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        C = (function (e, t, a) {
                            return e && !(t && a);
                        })(!!v, B, !!y);
                    return r.createElement(r.Fragment, null, r.createElement(s.Z, { centerTitle: t, centeredLogo: a, isFullWidth: o, isLarge: c, leftControl: F, middleControl: p, position: u(m, B, n), rightControl: g, style: b, subtitle: h, title: k, titleDomId: _, titleIconCell: f, titleIconCellSize: w, withBackground: C, withWideContainer: S }), y || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        a = c.Z.getBackgroundStyles();
                    return t ? r.createElement(o.Z, { style: !!e && a }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, a) => {
            a.d(t, { Z: () => y, w: () => m });
            var r = a(202784),
                n = a(325686),
                l = a(108362),
                o = a(386802),
                i = a(392237),
                s = a(652904),
                c = a(555079),
                d = a(625661),
                u = a(449067),
                p = a(715601);
            class m extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: a, backLocation: l, centerTitle: o, hideBackButton: i, history: s, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: y, rightControl: b, secondaryBar: h, subtitle: k, title: _ } = this.props,
                                { isModal: f } = this.context;
                            return r.createElement(n.Z, { style: f ? [g.childViewAppBarRoot, g.appBarZindex] : g.appBarZindex }, r.createElement(d.ZP, { backButtonType: a || (f ? "close" : "back"), backLocation: l, centerTitle: o, fixed: !f, hideBackButton: i, history: s, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: y, ref: e, rightControl: b, secondaryBar: h, style: [f && g.appBarModal, t], subtitle: k, title: _, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: a } = this.context;
                            t && (a ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: a, containerStyle: o, documentTitle: i, isFullWidth: c, isLarge: d, renderHeader: m, title: y, withoutBottomBarMobile: b } = this.props,
                        { isModal: h } = this.context,
                        k = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(s.Z, null, r.createElement(u.Z.Configure, { documentTitle: i, headerless: !0, title: y }), r.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [g.root, h && g.rootModal] }, !h && k, r.createElement(l.Z, { isFullWidth: c, isLarge: d, style: [g.container, h && g.containerModal, o] }, h ? r.createElement(p.Z, { style: g.viewport }, k, a) : a), t ? r.createElement(n.Z, { style: [g.bottomBarModal, !h && !b && g.bottomBarMobile] }, r.createElement(l.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = o.Z);
            const g = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                y = m;
        },
        513120: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r = a(202784),
                n = a(325686),
                l = a(708852),
                o = a(392237);
            const i = ({ children: e, style: t }, a) => {
                    const o = (0, l.D2)() ? c.paddingWide : c.paddingNarrow;
                    return r.createElement(n.Z, { ref: a, style: [t, o] }, e);
                },
                s = r.forwardRef(i),
                c = o.default.create((e) => ({ paddingWide: { paddingHorizontal: e.spaces.space72 }, paddingNarrow: { paddingHorizontal: e.spaces.space32 } }));
        },
        724345: (e, t, a) => {
            a.d(t, { Z: () => r.Z });
            var r = a(513120);
        },
        783373: (e, t, a) => {
            a.d(t, { Z: () => i });
            var r = a(202784),
                n = a(325686),
                l = a(731708),
                o = a(392237);
            const i = (e) => {
                    const { color: t, description: a, style: o, title: i } = e;
                    return r.createElement(n.Z, { style: o }, r.createElement(l.ZP, { "aria-level": 2, color: t, role: "heading", size: "title4", weight: "heavy" }, i), a && r.createElement(l.ZP, { color: "gray700", style: s.description }, a));
                },
                s = o.default.create((e) => ({ description: { marginTop: e.spaces.space12 } }));
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                n = a(500002),
                l = a(668214),
                o = a(997174),
                i = a(118823);
            const s = (0, l.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: r },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: l, search: o },
                            locationKey: i,
                        } = e;
                    let s = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (s = !0));
                    const c = n || i;
                    ((c && n !== i) || (!c && a !== l) || r !== o || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, n.ZP)(s(c));
        },
        282559: (e, t, a) => {
            a.d(t, { v: () => s });
            a(571372);
            var r = a(96768),
                n = a(202784),
                l = (a(585488), a(351743)),
                o = a.n(l);
            const i = r.Z,
                s = ({ originProduct: e, returnUrl: t }) => {
                    const [a, r] = o()(i);
                    return [
                        n.useCallback(
                            () =>
                                new Promise((r, n) => {
                                    a({
                                        variables: { return_url: t, origin_product: e },
                                        onCompleted: ({ customerportalsession_create: e }, t) => {
                                            const a = e?.customer_portal_session_url ?? void 0;
                                            a ? r(a) : n(new Error("Missing portal URL"));
                                        },
                                        onError: n,
                                    });
                                }),
                            [a, t, e],
                        ),
                        r,
                    ];
                };
        },
        643242: (e, t, a) => {
            a.d(t, { H: () => r });
            const r = a(667218).n;
        },
        769663: (e, t, a) => {
            a.r(t), a.d(t, { default: () => Ke, superFollowsManageQuery: () => Ee });
            var r,
                n,
                l,
                o,
                i = {
                    fragment: {
                        argumentDefinitions: (r = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "SuperFollowsManageQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (n = [
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "screen_name", variableName: "screenName" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { args: null, kind: "FragmentSpread", name: "SuperFollowsManageScreen_user" }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: r, kind: "Operation", name: "SuperFollowsManageQuery", selections: [{ alias: "user", args: n, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_screen_name", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "private_super_following", storageKey: null }, { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }, { alias: null, args: null, concreteType: "ProductSubscription", kind: "LinkedField", name: "super_follow_creator_product_subscription", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "payment_source", storageKey: null }, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, o], type: "User", abstractKey: null }], storageKey: null }, o], storageKey: null }] },
                    params: { id: "9wSLGuGXeq_zKNUZYEAF6Q", metadata: {}, name: "SuperFollowsManageQuery", operationKind: "query", text: null },
                };
            i.hash = "5d55d86f09caf53567d7fc12b97fc695";
            const s = i;
            var c = a(202784),
                d = (a(585488), a(107267)),
                u = a(154003),
                p = a(392237),
                m = a(111677),
                g = a.n(m),
                y = a(980407),
                b = a(724345),
                h = a(783373),
                k = a(883229),
                _ = a(943914),
                f = a(293115),
                w = a(28557),
                v = a(535338),
                S = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "SuperFollowsManageScreen_user",
                    selections: [
                        { args: null, kind: "FragmentSpread", name: "SuperFollowsManageBadge_user" },
                        { args: null, kind: "FragmentSpread", name: "SuperFollowsManageCancel_user" },
                    ],
                    type: "User",
                    abstractKey: null,
                    hash: "0436693901870ba7757ffdc57d8a0e3b",
                };
            const B = S;
            var F = a(277660),
                C = a.n(F),
                Z = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "SuperFollowsManageBadge_user",
                    selections: [
                        { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "private_super_following", storageKey: null },
                        { args: null, kind: "FragmentSpread", name: "useSuperFollowsChangeBadgePrivacy_user" },
                    ],
                    type: "User",
                    abstractKey: null,
                    hash: "cd4ac6dcb2822bd28815b32b8788e0c1",
                };
            const P = Z;
            var E = a(325686),
                L = a(688715),
                T = a(96083),
                x = a(40610),
                M = a(782642),
                K =
                    (a(571372),
                    (function () {
                        var e = [{ defaultValue: null, kind: "LocalArgument", name: "user_id" }],
                            t = [
                                {
                                    alias: null,
                                    args: [
                                        { kind: "Literal", name: "s", value: "f3d8" },
                                        { kind: "Variable", name: "user_id", variableName: "user_id" },
                                    ],
                                    concreteType: "RemoveSuperFollowerPrivacyResult",
                                    kind: "LinkedField",
                                    name: "remove_super_follower_privacy",
                                    plural: !1,
                                    selections: [{ alias: null, args: null, kind: "ScalarField", name: "result_code", storageKey: null }],
                                    storageKey: null,
                                },
                            ];
                        return { fragment: { argumentDefinitions: e, kind: "Fragment", metadata: null, name: "useSuperFollowsChangeBadgePrivacyRemoveMutation", selections: t, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: e, kind: "Operation", name: "useSuperFollowsChangeBadgePrivacyRemoveMutation", selections: t }, params: { id: "Mg-0dMrg-__WGhnWqj4nfQ", metadata: {}, name: "useSuperFollowsChangeBadgePrivacyRemoveMutation", operationKind: "mutation", text: null } };
                    })());
            K.hash = "bd7c55c4f34163f0890aed9f59d5882e";
            const D = K;
            var R = (function () {
                var e = [{ defaultValue: null, kind: "LocalArgument", name: "user_id" }],
                    t = [
                        {
                            alias: null,
                            args: [
                                { kind: "Literal", name: "s", value: "f3d8" },
                                { kind: "Variable", name: "user_id", variableName: "user_id" },
                            ],
                            concreteType: "AddSuperFollowerPrivacyResult",
                            kind: "LinkedField",
                            name: "add_super_follower_privacy",
                            plural: !1,
                            selections: [{ alias: null, args: null, kind: "ScalarField", name: "result_code", storageKey: null }],
                            storageKey: null,
                        },
                    ];
                return { fragment: { argumentDefinitions: e, kind: "Fragment", metadata: null, name: "useSuperFollowsChangeBadgePrivacyAddMutation", selections: t, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: e, kind: "Operation", name: "useSuperFollowsChangeBadgePrivacyAddMutation", selections: t }, params: { id: "X6X4JiyQHfLz0SdTaZPixw", metadata: {}, name: "useSuperFollowsChangeBadgePrivacyAddMutation", operationKind: "mutation", text: null } };
            })();
            R.hash = "ee1345ac8b63fa556fe937e5a178c32b";
            const A = R;
            var N = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsChangeBadgePrivacy_user", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], type: "User", abstractKey: null, hash: "5e284673d6bec43fb6177849f77ff8ed" };
            const I = N;
            var U = a(614983),
                z = a.n(U),
                V = a(351743),
                W = a.n(V);
            const H = I,
                G = A,
                Q = D,
                q = g().e85471c6,
                O = g().f6e2a407,
                j = g().j8dedddd,
                $ = { label: g().i859a9d4, link: (0, L.ju)("https://help.x.com/using-twitter/super-follows#sfexpect") },
                X = g().ef4602ec,
                Y = P,
                J = (e) => {
                    const { screenName: t, style: a, user: r } = e,
                        n = (0, M.p)(),
                        l = C()(Y, r),
                        o = l.rest_id,
                        i = l.private_super_following,
                        [s, d] = c.useState(!1),
                        [u, p] = (({ user: e, userId: t }) => {
                            const a = C()(H, e),
                                [r, n] = W()(G);
                            return [
                                c.useCallback(
                                    () =>
                                        new Promise((e, n) => {
                                            r({
                                                variables: { user_id: t },
                                                onCompleted: ({ add_super_follower_privacy: t }, a) => {
                                                    t ? e(t.result_code) : n(new Error("Missing result code"));
                                                },
                                                onError: n,
                                                updater: (e) => {
                                                    const t = a.__id;
                                                    z()(t, "userId must be specified");
                                                    const r = e.get(t);
                                                    z()(r, "userRecord must be specified"), r.setValue(!0, "private_super_following");
                                                },
                                            });
                                        }),
                                    [r, a.__id, t],
                                ),
                                n,
                            ];
                        })({ userId: o, user: l }),
                        [m, g] = (({ user: e, userId: t }) => {
                            const a = C()(H, e),
                                [r, n] = W()(Q);
                            return [
                                c.useCallback(
                                    () =>
                                        new Promise((e, n) => {
                                            r({
                                                variables: { user_id: t },
                                                onCompleted: ({ remove_super_follower_privacy: t }, a) => {
                                                    t ? e(t.result_code) : n(new Error("Missing result code"));
                                                },
                                                onError: n,
                                                updater: (e) => {
                                                    const t = a.__id;
                                                    z()(t, "userId must be specified");
                                                    const r = e.get(t);
                                                    z()(r, "userRecord must be specified"), r.setValue(!1, "private_super_following");
                                                },
                                            });
                                        }),
                                    [r, a.__id, t],
                                ),
                                n,
                            ];
                        })({ userId: o, user: l }),
                        y = c.useCallback(() => {
                            d(!0);
                            (i ? m : u)()
                                .catch(() => {
                                    n({ text: X });
                                })
                                .finally(() => {
                                    d(!1);
                                });
                        }, [u, n, i, m]),
                        b = s || p || g,
                        k = q,
                        _ = O,
                        f = j;
                    return c.createElement(E.Z, { style: a }, c.createElement(h.Z, { title: k }), c.createElement(T.Z, { checked: !i, disabled: b, label: _({ screenName: t }), onChange: y, style: ee.checkbox }), c.createElement(x.Z.Primary, { action: $, style: ee.callout, text: f({ screenName: t }) }));
                },
                ee = p.default.create((e) => ({ checkbox: { marginTop: e.spaces.space20 }, callout: { marginTop: e.spaces.space20 } }));
            var te = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsManageCancel_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { alias: null, args: null, concreteType: "ProductSubscription", kind: "LinkedField", name: "super_follow_creator_product_subscription", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "payment_source", storageKey: null }], storageKey: null },
                ],
                type: "User",
                abstractKey: null,
                hash: "1186d3c0265cb0a020ea7f1dc6d32e22",
            };
            const ae = te;
            var re = a(167630),
                ne = a(282559),
                le = a(782826),
                oe = a(725516),
                ie = a(643242);
            const se = g().c8a513f6,
                ce = g().ea000ec8,
                de = g().d7b8387e,
                ue = g().f4166d9a,
                pe = g().b74ff5fc,
                me = g().ee9efbc8,
                ge = g().ef4602ec,
                ye = g().fc2a5c92,
                be = g().c5d9c77a,
                he = g().ia5e7488,
                ke = { AppleAppStore: g().jda53c24, GooglePlay: g().g0a7a53e, TPay: void 0, Stripe: void 0 },
                _e = ae,
                fe = (e) => {
                    const { screenName: t, style: a, user: r } = e,
                        n = (0, oe.z)(),
                        l = (0, M.p)(),
                        o = (0, d.useHistory)(),
                        { origin: i } = le.ZP.get(),
                        s = C()(_e, r),
                        p = s.super_follow_creator_product_subscription?.payment_source ?? void 0,
                        [m, g] = c.useState(!1),
                        [y, b] = (0, ne.v)({ returnUrl: `${i}/${t}`, originProduct: "SuperFollows" }),
                        k = c.useMemo(() => ({ items: [{ is_viewer_super_following_user: !0, super_follow_details: { creator_user_id: s.rest_id } }] }), [s]),
                        _ = c.useCallback(() => {
                            n.scribe({ element: "close_button", action: "click", data: k }), o.goBack();
                        }, [n, o, k]),
                        f = c.useCallback(() => {
                            g(!0),
                                n.scribe({ element: "cancel_subscription_button", action: "click", data: k }),
                                y()
                                    .then((e) => {
                                        le.ZP.navigateTo(e);
                                    })
                                    .catch(() => {
                                        g(!1), l({ text: ge });
                                    });
                        }, [l, n, y, k]),
                        w = m || b,
                        v = p ? ke[p] : void 0;
                    let S = {};
                    switch (p) {
                        case ie.H.Stripe:
                            S = { primaryTitle: ue, primaryDescription: pe, buttonPress: f, buttonLabel: w ? c.createElement(re.Z, null) : me };
                            break;
                        case ie.H.AppleAppStore:
                        case ie.H.GooglePlay:
                            S = { primaryTitle: se, primaryDescription: v, secondaryTitle: ce, secondaryDescription: de, buttonPress: _, buttonLabel: he };
                            break;
                        default:
                            S = { primaryTitle: ye, primaryDescription: be, buttonPress: _, buttonLabel: he };
                    }
                    return c.createElement(E.Z, { style: a }, c.createElement(h.Z, { description: S.primaryDescription || "", title: S.primaryTitle }), S.secondaryTitle && S.secondaryDescription && c.createElement(h.Z, { description: S.secondaryDescription, style: we.secondaryDescription, title: S.secondaryTitle }), c.createElement(u.ZP, { disabled: p === ie.H.Stripe ? w : void 0, onPress: S.buttonPress, style: we.button, type: "brandOutlined" }, S.buttonLabel));
                },
                we = p.default.create((e) => ({ secondaryDescription: { marginTop: e.spaces.space32 }, button: { marginTop: e.spaces.space32, marginHorizontal: e.spaces.space4 } })),
                ve = g().ib35705e,
                Se = B,
                Be = (e) => {
                    const { screenName: t, user: a } = e,
                        r = (0, d.useHistory)(),
                        n = C()(Se, a),
                        l = c.createElement(b.Z, { style: Fe.root }, c.createElement(J, { screenName: t, style: Fe.badge, user: n }), c.createElement(fe, { screenName: t, user: n }));
                    return c.createElement(y.Z, { backButtonType: "close", backLocation: `/${t}`, children: l, history: r, title: ve });
                },
                Fe = p.default.create((e) => ({ root: { marginTop: e.spaces.space12, marginBottom: e.spaces.space40 }, badge: { marginBottom: e.spaces.space40 } })),
                Ce = g().g61ed8a4,
                Ze = g().c3d23f10,
                Pe = g().d338f53e,
                Ee = s,
                Le = { context: "SuperFollowsManage" },
                Te = { page: "super_follows_manage" },
                xe = ({ screenName: e }) => {
                    const t = { screenName: (0, w.Z)(e) },
                        a = (0, v.p)(Ee, t),
                        r = a?.user?.result;
                    return r ? c.createElement(f.nO, { namespace: Te }, c.createElement(Be, { screenName: e, user: r })) : null;
                },
                Me = () => {
                    const e = (0, d.useHistory)(),
                        t = (0, d.useParams)().screenName || "",
                        a = c.useMemo(
                            () => ({
                                type: "CustomRetry",
                                content: (a) => {
                                    const r = c.createElement(b.Z, { style: De.error }, c.createElement(h.Z, { description: Ze, title: Ce }), c.createElement(u.ZP, { onPress: a, style: De.errorButton, type: "brandFilled" }, Pe));
                                    return c.createElement(y.Z, { backButtonType: "close", backLocation: `/${t}`, children: r, history: e });
                                },
                            }),
                            [e, t],
                        );
                    return c.createElement(k.N, { errorConfig: Le, fallback: a }, c.createElement(_.B, null, c.createElement(xe, { screenName: t })));
                },
                Ke = c.memo(Me),
                De = p.default.create((e) => ({ error: { marginTop: e.spaces.space12, marginBottom: e.spaces.space40, width: "100%" }, errorButton: { marginTop: e.spaces.space32 } }));
        },
        41065: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                n = a(890601),
                l = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SuperFollowsManage.84e3d0fa.js.map
