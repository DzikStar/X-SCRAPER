"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SuperFollowsManage"],
    {
        667218: (e, t, a) => {
            a.d(t, { n: () => r });
            const r = Object.freeze({ Ads: "Ads", AppleAppStore: "AppleAppStore", Gift: "Gift", GooglePlay: "GooglePlay", Stripe: "Stripe", TPay: "TPay", Twitter: "Twitter", Unknown: "Unknown" });
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: a, fixed: n, hideBackButton: l, isFullWidth: o, isLarge: c, leftControl: d, middleControl: p, position: m, rightControl: g, secondaryBar: y, style: b, subtitle: h, title: k, titleDomId: _, titleIconCell: f, titleIconCellSize: w, withBackground: B, withWideContainer: F } = this.props,
                        { isModal: S } = this.context,
                        v = l ? d : r.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        C = (function (e, t, a) {
                            return e && !(t && a);
                        })(!!B, S, !!y);
                    return r.createElement(r.Fragment, null, r.createElement(s.Z, { centerTitle: t, centeredLogo: a, isFullWidth: o, isLarge: c, leftControl: v, middleControl: p, position: u(m, S, n), rightControl: g, style: b, subtitle: h, title: k, titleDomId: _, titleIconCell: f, titleIconCellSize: w, withBackground: C, withWideContainer: F }), y || null);
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
                m = a(674132),
                g = a.n(m),
                y = a(980407),
                b = a(724345),
                h = a(783373),
                k = a(883229),
                _ = a(943914),
                f = a(293115),
                w = a(28557),
                B = a(535338),
                F = {
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
            const S = F;
            var v = a(277660),
                C = a.n(v),
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
            const T = Z;
            var E = a(325686),
                x = a(688715),
                P = a(96083),
                L = a(40610),
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
            var W = a(614983),
                U = a.n(W),
                H = a(351743),
                V = a.n(H);
            const z = I,
                G = A,
                Q = D,
                q = g().e85471c6,
                O = g().f6e2a407,
                j = g().j8dedddd,
                $ = { label: g().i859a9d4, link: (0, x.ju)("https://help.x.com/using-twitter/super-follows#sfexpect") },
                X = g().ef4602ec,
                Y = T,
                J = (e) => {
                    const { screenName: t, style: a, user: r } = e,
                        n = (0, M.p)(),
                        l = C()(Y, r),
                        o = l.rest_id,
                        i = l.private_super_following,
                        [s, d] = c.useState(!1),
                        [u, p] = (({ user: e, userId: t }) => {
                            const a = C()(z, e),
                                [r, n] = V()(G);
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
                                                    U()(t, "userId must be specified");
                                                    const r = e.get(t);
                                                    U()(r, "userRecord must be specified"), r.setValue(!0, "private_super_following");
                                                },
                                            });
                                        }),
                                    [r, a.__id, t],
                                ),
                                n,
                            ];
                        })({ userId: o, user: l }),
                        [m, g] = (({ user: e, userId: t }) => {
                            const a = C()(z, e),
                                [r, n] = V()(Q);
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
                                                    U()(t, "userId must be specified");
                                                    const r = e.get(t);
                                                    U()(r, "userRecord must be specified"), r.setValue(!1, "private_super_following");
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
                    return c.createElement(E.Z, { style: a }, c.createElement(h.Z, { title: k }), c.createElement(P.Z, { checked: !i, disabled: b, label: _({ screenName: t }), onChange: y, style: ee.checkbox }), c.createElement(L.Z.Primary, { action: $, style: ee.callout, text: f({ screenName: t }) }));
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
                        B = p ? ke[p] : void 0;
                    let F = {};
                    switch (p) {
                        case ie.H.Stripe:
                            F = { primaryTitle: ue, primaryDescription: pe, buttonPress: f, buttonLabel: w ? c.createElement(re.Z, null) : me };
                            break;
                        case ie.H.AppleAppStore:
                        case ie.H.GooglePlay:
                            F = { primaryTitle: se, primaryDescription: B, secondaryTitle: ce, secondaryDescription: de, buttonPress: _, buttonLabel: he };
                            break;
                        default:
                            F = { primaryTitle: ye, primaryDescription: be, buttonPress: _, buttonLabel: he };
                    }
                    return c.createElement(E.Z, { style: a }, c.createElement(h.Z, { description: F.primaryDescription || "", title: F.primaryTitle }), F.secondaryTitle && F.secondaryDescription && c.createElement(h.Z, { description: F.secondaryDescription, style: we.secondaryDescription, title: F.secondaryTitle }), c.createElement(u.ZP, { disabled: p === ie.H.Stripe ? w : void 0, onPress: F.buttonPress, style: we.button, type: "brandOutlined" }, F.buttonLabel));
                },
                we = p.default.create((e) => ({ secondaryDescription: { marginTop: e.spaces.space32 }, button: { marginTop: e.spaces.space32, marginHorizontal: e.spaces.space4 } })),
                Be = g().ib35705e,
                Fe = S,
                Se = (e) => {
                    const { screenName: t, user: a } = e,
                        r = (0, d.useHistory)(),
                        n = C()(Fe, a),
                        l = c.createElement(b.Z, { style: ve.root }, c.createElement(J, { screenName: t, style: ve.badge, user: n }), c.createElement(fe, { screenName: t, user: n }));
                    return c.createElement(y.Z, { backButtonType: "close", backLocation: `/${t}`, children: l, history: r, title: Be });
                },
                ve = p.default.create((e) => ({ root: { marginTop: e.spaces.space12, marginBottom: e.spaces.space40 }, badge: { marginBottom: e.spaces.space40 } })),
                Ce = g().g61ed8a4,
                Ze = g().c3d23f10,
                Te = g().d338f53e,
                Ee = s,
                xe = { context: "SuperFollowsManage" },
                Pe = { page: "super_follows_manage" },
                Le = ({ screenName: e }) => {
                    const t = { screenName: (0, w.Z)(e) },
                        a = (0, B.p)(Ee, t),
                        r = a?.user?.result;
                    return r ? c.createElement(f.nO, { namespace: Pe }, c.createElement(Se, { screenName: e, user: r })) : null;
                },
                Me = () => {
                    const e = (0, d.useHistory)(),
                        t = (0, d.useParams)().screenName || "",
                        a = c.useMemo(
                            () => ({
                                type: "CustomRetry",
                                content: (a) => {
                                    const r = c.createElement(b.Z, { style: De.error }, c.createElement(h.Z, { description: Ze, title: Ce }), c.createElement(u.ZP, { onPress: a, style: De.errorButton, type: "brandFilled" }, Te));
                                    return c.createElement(y.Z, { backButtonType: "close", backLocation: `/${t}`, children: r, history: e });
                                },
                            }),
                            [e, t],
                        );
                    return c.createElement(k.N, { errorConfig: xe, fallback: a }, c.createElement(_.B, null, c.createElement(Le, { screenName: t })));
                },
                Ke = c.memo(Me),
                De = p.default.create((e) => ({ error: { marginTop: e.spaces.space12, marginBottom: e.spaces.space40, width: "100%" }, errorButton: { marginTop: e.spaces.space32 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SuperFollowsManage.b15b85ba.js.map
